/**
 * Tolkien Olami — Marker & Label Collision Avoidance Engine
 * Pure, framework-independent, strictly typed 2D collision engine.
 * Adapted from the legacy AtlasEngine for the planar Leaflet atlas.
 */

export type LabelPlacementDirection = 'right' | 'left' | 'top' | 'bottom';

export interface BoundingBox {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface CollisionCandidate {
  id: string;
  name: string;
  x: number; // Viewport container point X in pixels
  y: number; // Viewport container point Y in pixels
  priority: number;
  minZoom?: number;
  preferredPos?: LabelPlacementDirection;
  iconWidth?: number;
  iconHeight?: number;
  isSelected?: boolean;
  locationKey?: string;
}

export interface ViewportBounds {
  width: number;
  height: number;
  margin?: number;
  zoom?: number;
  obstacles?: BoundingBox[];
}

export interface LabelPlacementResult {
  id: string;
  showLabel: boolean;
  labelPlacement: LabelPlacementDirection | null;
  iconBox: BoundingBox;
  labelBox: BoundingBox | null;
  suppressed: boolean;
  inViewport: boolean;
  duplicate?: boolean;
}

export interface CollisionEngineOptions {
  padding?: number;
  viewportMargin?: number;
  defaultIconSize?: number;
  labelCharWidth?: number;
  labelBasePadding?: number;
  labelHeight?: number;
  forceHighPriorityLabels?: boolean;
  highPriorityThreshold?: number;
}

const DEFAULT_OPTIONS: Required<CollisionEngineOptions> = {
  padding: 3,
  viewportMargin: 80,
  defaultIconSize: 26,
  labelCharWidth: 7,
  labelBasePadding: 14,
  labelHeight: 18,
  forceHighPriorityLabels: true,
  highPriorityThreshold: 100,
};

/**
 * Memoized cache for text measurements and label dimensions.
 * Keyed by `${labelCharWidth}:${labelBasePadding}:${labelHeight}:${text}`.
 */
const labelMeasurementCache = new Map<string, { width: number; height: number }>();
const MAX_MEASUREMENT_CACHE_SIZE = 512;

/**
 * Computes and caches the pixel width and height of a label string.
 */
export function measureLabelDimensions(
  text: string,
  userOptions?: Pick<CollisionEngineOptions, 'labelCharWidth' | 'labelBasePadding' | 'labelHeight'>
): { width: number; height: number } {
  const charW = userOptions?.labelCharWidth ?? DEFAULT_OPTIONS.labelCharWidth;
  const basePad = userOptions?.labelBasePadding ?? DEFAULT_OPTIONS.labelBasePadding;
  const height = userOptions?.labelHeight ?? DEFAULT_OPTIONS.labelHeight;
  const key = `${charW}:${basePad}:${height}:${text}`;

  const cached = labelMeasurementCache.get(key);
  if (cached) {
    return cached;
  }

  const dims = {
    width: text.length * charW + basePad,
    height,
  };

  if (labelMeasurementCache.size >= MAX_MEASUREMENT_CACHE_SIZE) {
    labelMeasurementCache.clear();
  }
  labelMeasurementCache.set(key, dims);
  return dims;
}

/**
 * Returns the current number of cached text measurement entries.
 */
export function getLabelMeasurementCacheSize(): number {
  return labelMeasurementCache.size;
}

/**
 * Clears the text measurement cache when font metrics or global options change.
 */
export function clearLabelMeasurementCache(): void {
  labelMeasurementCache.clear();
}

/**
 * Normalizes a place or geographic label name into a canonical location key
 * to prevent duplicate labels for the same location (e.g. "Hobbiton (Bag End)" -> "hobbiton").
 */
export function normalizeLocationKey(name: string): string {
  const base = name.includes('(') ? (name.split('(')[0] ?? name) : name;
  return base
    .trim()
    .toLowerCase()
    .replace(/['ʻʼ`\u2018\u2019]/g, '')
    .replace(/\s+/g, ' ');
}

/**
 * Computes the candidate bounding box for a label placed in a given cardinal direction.
 */
export function computeDirectionalBox(
  pt: { x: number; y: number },
  iW: number,
  iH: number,
  labelW: number,
  labelH: number,
  dir: LabelPlacementDirection
): BoundingBox {
  if (dir === 'right') {
    const x1 = pt.x + iW / 2 + 3;
    const y1 = pt.y - labelH / 2;
    return { x1, y1, x2: x1 + labelW, y2: y1 + labelH };
  }
  if (dir === 'left') {
    const x2 = pt.x - iW / 2 - 3;
    const x1 = x2 - labelW;
    const y1 = pt.y - labelH / 2;
    return { x1, y1, x2, y2: y1 + labelH };
  }
  if (dir === 'bottom') {
    const x1 = pt.x - labelW / 2;
    const y1 = pt.y + iH / 2 + 2;
    return { x1, y1, x2: x1 + labelW, y2: y1 + labelH };
  }
  // 'top'
  const x1 = pt.x - labelW / 2;
  const y2 = pt.y - iH / 2 - 2;
  const y1 = y2 - labelH;
  return { x1, y1, x2: x1 + labelW, y2 };
}

/**
 * Checks whether two axis-aligned bounding boxes overlap given an optional padding.
 */
export function boxesOverlap(b1: BoundingBox, b2: BoundingBox, pad = 3): boolean {
  return !(
    b1.x2 + pad < b2.x1 ||
    b1.x1 - pad > b2.x2 ||
    b1.y2 + pad < b2.y1 ||
    b1.y1 - pad > b2.y2
  );
}

/**
 * Returns the ordered 4-way test directions starting with preferredPos when provided.
 */
function getDirectionOrder(preferredPos?: LabelPlacementDirection): LabelPlacementDirection[] {
  if (preferredPos === 'top') {
    return ['top', 'bottom', 'right', 'left'];
  }
  if (preferredPos === 'bottom') {
    return ['bottom', 'top', 'right', 'left'];
  }
  if (preferredPos === 'left') {
    return ['left', 'right', 'top', 'bottom'];
  }
  return ['right', 'bottom', 'top', 'left'];
}

/**
 * Pure function: computes non-overlapping label placements for marker and geographic candidates.
 *
 * Rules:
 * 1. Candidates are sorted descending by selection state, priority, ascending minZoom, and deterministic ID tie-breaking.
 * 2. Duplicate candidates (same ID or same normalized location name at the same location) are suppressed.
 * 3. Viewport culling suppresses markers far outside view without mutating state.
 * 4. Underlying marker icons are NEVER hidden by collision suppression; only colliding labels are suppressed.
 * 5. 4 directions ('right', 'bottom', 'top', 'left') tested in order (or starting with preferredPos).
 * 6. High-priority / selected labels are preserved and choose the best in-viewport orientation when constrained.
 * 7. Zoom LoD: candidates with minZoom > currentZoom have their labels suppressed.
 * 8. Boundary & Obstacle Check: labels stay inside the viewport and avoid UI panels and journey markers.
 */
export function computeLabelPlacements(
  candidates: readonly CollisionCandidate[],
  viewport: ViewportBounds,
  userOptions: CollisionEngineOptions = {}
): Map<string, LabelPlacementResult> {
  const options: Required<CollisionEngineOptions> = {
    ...DEFAULT_OPTIONS,
    ...userOptions,
  };

  const results = new Map<string, LabelPlacementResult>();
  if (!candidates || candidates.length === 0) {
    return results;
  }

  // Pure sort: never mutate the original candidates array
  const sorted = [...candidates].sort((a, b) => {
    const aSel = a.isSelected ? 1 : 0;
    const bSel = b.isSelected ? 1 : 0;
    if (bSel !== aSel) {
      return bSel - aSel;
    }
    if (b.priority !== a.priority) {
      return b.priority - a.priority;
    }
    const aMinZoom = a.minZoom ?? 0;
    const bMinZoom = b.minZoom ?? 0;
    if (aMinZoom !== bMinZoom) {
      return aMinZoom - bMinZoom;
    }
    return a.id.localeCompare(b.id);
  });

  const margin = viewport.margin ?? options.viewportMargin;
  const viewW = viewport.width;
  const viewH = viewport.height;
  const currentZoom = viewport.zoom;
  const obstacles = viewport.obstacles || [];

  // Track all occupied 2D bounding boxes (both icons and approved labels + obstacles)
  const occupiedBoxes: BoundingBox[] = [...obstacles];
  const seenIds = new Set<string>();
  const placedLocations: Array<{ key: string; x: number; y: number; explicitKey: boolean }> = [];

  for (const cand of sorted) {
    // 0. Duplicate ID guard
    if (seenIds.has(cand.id)) {
      continue;
    }
    seenIds.add(cand.id);

    const pt = { x: cand.x, y: cand.y };

    // 1. Viewport Culling Check
    const inViewport =
      pt.x >= -margin &&
      pt.x <= viewW + margin &&
      pt.y >= -margin &&
      pt.y <= viewH + margin;

    const iW =
      cand.iconWidth ??
      (cand.priority >= 100 ? 28 : cand.priority >= 50 ? 24 : options.defaultIconSize);
    const iH = cand.iconHeight ?? iW;

    const iconBox: BoundingBox = {
      x1: pt.x - iW / 2,
      y1: pt.y - iH / 2,
      x2: pt.x + iW / 2,
      y2: pt.y + iH / 2,
    };

    if (!inViewport) {
      results.set(cand.id, {
        id: cand.id,
        showLabel: false,
        labelPlacement: null,
        iconBox,
        labelBox: null,
        suppressed: true,
        inViewport: false,
      });
      continue;
    }

    // Duplicate location check: prevent duplicate labels for the same location
    const locKey = cand.locationKey
      ? cand.locationKey.trim().toLowerCase()
      : normalizeLocationKey(cand.name);
    const hasExplicitKey = Boolean(cand.locationKey);
    const isDuplicateLocation =
      locKey.length > 0 &&
      placedLocations.some((prev) => {
        if (prev.key !== locKey) return false;
        if (hasExplicitKey || prev.explicitKey) return true;
        const dx = Math.abs(prev.x - pt.x);
        const dy = Math.abs(prev.y - pt.y);
        return dx <= 32 && dy <= 32;
      });

    if (isDuplicateLocation) {
      results.set(cand.id, {
        id: cand.id,
        showLabel: false,
        labelPlacement: null,
        iconBox,
        labelBox: null,
        suppressed: true,
        inViewport: true,
        duplicate: true,
      });
      continue;
    }

    // Level of Detail (LoD) Zoom Suppression
    const isZoomSuppressed =
      !cand.isSelected &&
      currentZoom !== undefined &&
      cand.minZoom !== undefined &&
      currentZoom < cand.minZoom;

    // Register the marker's own icon in occupied boxes (when it has non-zero icon dimensions)
    if (iW > 0 && iH > 0) {
      occupiedBoxes.push(iconBox);
    }

    if (isZoomSuppressed) {
      results.set(cand.id, {
        id: cand.id,
        showLabel: false,
        labelPlacement: null,
        iconBox,
        labelBox: null,
        suppressed: true,
        inViewport: true,
      });
      continue;
    }

    // 2. Compute candidate label dimensions (cached)
    const { width: labelW, height: labelH } = measureLabelDimensions(cand.name, options);

    // 3. Direction test order: right, bottom, top, left, prioritizing preferredPos
    const testDirs = getDirectionOrder(cand.preferredPos);

    let chosenDir: LabelPlacementDirection | null = null;
    let chosenBox: BoundingBox | null = null;

    for (const dir of testDirs) {
      const testBox = computeDirectionalBox(pt, iW, iH, labelW, labelH, dir);

      // Viewport bounds check: label must stay inside visible viewport
      const isInsideViewport =
        testBox.x1 >= 2 &&
        testBox.x2 <= viewW - 2 &&
        testBox.y1 >= 2 &&
        testBox.y2 <= viewH - 2;

      if (!isInsideViewport && viewW > labelW * 2) {
        continue;
      }

      // Check collision against all registered boxes (except marker's own icon box)
      const hasCollision = occupiedBoxes.some((occ) => {
        if (occ === iconBox) return false;
        return boxesOverlap(testBox, occ, options.padding);
      });

      if (!hasCollision) {
        chosenDir = dir;
        chosenBox = testBox;
        occupiedBoxes.push(testBox);
        break;
      }
    }

    // 4. Fallback for Selected or High-Priority Landmarks (Capitals & Great Fortresses)
    if (
      !chosenDir &&
      (cand.isSelected ||
        (options.forceHighPriorityLabels && cand.priority >= options.highPriorityThreshold))
    ) {
      let bestDir: LabelPlacementDirection = cand.preferredPos || 'right';
      let bestBox: BoundingBox = computeDirectionalBox(pt, iW, iH, labelW, labelH, bestDir);
      let bestScore = Number.POSITIVE_INFINITY;

      for (const dir of testDirs) {
        const box = computeDirectionalBox(pt, iW, iH, labelW, labelH, dir);
        const outPenalty =
          Math.max(0, 2 - box.x1) +
          Math.max(0, box.x2 - (viewW - 2)) +
          Math.max(0, 2 - box.y1) +
          Math.max(0, box.y2 - (viewH - 2));
        let collisionCount = 0;
        for (const occ of occupiedBoxes) {
          if (occ !== iconBox && boxesOverlap(box, occ, options.padding)) {
            collisionCount++;
          }
        }
        const score = outPenalty * 10 + collisionCount * 100;
        if (score < bestScore) {
          bestScore = score;
          bestDir = dir;
          bestBox = box;
        }
      }

      chosenDir = bestDir;
      chosenBox = bestBox;
      occupiedBoxes.push(chosenBox);
    }

    if (chosenDir !== null && locKey.length > 0) {
      placedLocations.push({ key: locKey, x: pt.x, y: pt.y, explicitKey: hasExplicitKey });
    }

    results.set(cand.id, {
      id: cand.id,
      showLabel: chosenDir !== null,
      labelPlacement: chosenDir,
      iconBox,
      labelBox: chosenBox,
      suppressed: chosenDir === null,
      inViewport: true,
    });
  }

  return results;
}

export interface CollisionCacheInputKey {
  regionId: string;
  zoom: number;
  panX: number;
  panY: number;
  viewportWidth: number;
  viewportHeight: number;
  selectedPlaceId: string | null;
  isJourneyActive: boolean;
  activeStageNum: number;
  obstacleSignature: string;
}

/**
 * Stateful cache that stores the last computed label placement map and
 * invalidates only when relevant viewport, zoom, selection, or obstacle inputs change.
 */
export class CollisionPlacementCache {
  private lastKey: string | null = null;
  private lastResult: Map<string, LabelPlacementResult> | null = null;
  private hitCount = 0;
  private missCount = 0;

  public serializeKey(input: CollisionCacheInputKey): string {
    // Quantize pan coordinates to 2px grid so sub-pixel jitter does not trigger redundant layout
    const qX = Math.round(input.panX / 2) * 2;
    const qY = Math.round(input.panY / 2) * 2;
    return `${input.regionId}|z:${input.zoom}|p:${qX},${qY}|v:${input.viewportWidth}x${input.viewportHeight}|sel:${input.selectedPlaceId ?? ''}|j:${input.isJourneyActive ? input.activeStageNum : '0'}|obs:${input.obstacleSignature}`;
  }

  public getOrCompute(
    input: CollisionCacheInputKey,
    computeFn: () => Map<string, LabelPlacementResult>
  ): { results: Map<string, LabelPlacementResult>; fromCache: boolean } {
    const key = this.serializeKey(input);
    if (this.lastKey === key && this.lastResult !== null) {
      this.hitCount++;
      return { results: this.lastResult, fromCache: true };
    }
    this.missCount++;
    const computed = computeFn();
    this.lastKey = key;
    this.lastResult = computed;
    return { results: computed, fromCache: false };
  }

  public invalidate(): void {
    this.lastKey = null;
    this.lastResult = null;
  }

  public getStats(): { hits: number; misses: number; hasCachedResult: boolean } {
    return {
      hits: this.hitCount,
      misses: this.missCount,
      hasCachedResult: this.lastResult !== null,
    };
  }
}

