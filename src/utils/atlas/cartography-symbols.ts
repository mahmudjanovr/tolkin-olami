/**
 * Tolkien Olami — Authentic Cartographic Terrain Symbols & Geometry
 * 
 * Implements historical Tolkien fantasy cartography symbol generators:
 * - Hand-drawn pen & ink mountain symbol system (7 canonical variants + Erebor & Orodruin)
 * - Species-appropriate tree symbol system (Mirkwood pines, Fangorn ancient oaks, Lothlórien mallorns)
 * - Canonical river hierarchy (trunk, primary/secondary tributaries)
 * - Coastline contour & waterlining ripple styling
 * - Coordinate alignment & validation between legacy data and planar SVG maps
 */

export type MountainVariant =
  | 'mountain-medium'
  | 'mountain-snow'
  | 'mountain-double'
  | 'mountain-cluster'
  | 'mountain-tall'
  | 'mountain-small'
  | 'mountain-large'
  | 'volcano'
  | 'erebor';

export type TreeVariant =
  | 'tree-conifer-mid'
  | 'tree-conifer-light'
  | 'tree-conifer-dark'
  | 'tree-mallorn-gold'
  | 'tree-fangorn'
  | 'tree-broadleaf'
  | 'tree-cluster'
  | 'tree-small';

export type RiverTier = 'trunk' | 'primary-tributary' | 'secondary-tributary';

export interface MountainPeakOptions {
  isSnowCapped?: boolean;
  isVolcano?: boolean;
  name?: string;
  rotation?: number;
}

export interface LandmarkControlPoint {
  id: string;
  name: string;
  region: 'orta-yer' | 'beleriand';
  placeCoords: { x: number; y: number }; // In place JSON (Leaflet CRS.Simple coords)
  svgCoords: { x: number; y: number };   // On planar SVG canvas (top-left origin)
}

/**
 * Canonical control points for validating coordinate alignment
 */
export const CANONICAL_LANDMARK_CONTROL_POINTS: LandmarkControlPoint[] = [
  {
    id: 'minas-tirith',
    name: 'Minas Tirith',
    region: 'orta-yer',
    placeCoords: { x: 1220, y: 580 },
    svgCoords: { x: 1220, y: 1468 }, // 2048 - 580 = 1468
  },
  {
    id: 'rivendell',
    name: 'Rivendell (Imladris)',
    region: 'orta-yer',
    placeCoords: { x: 920, y: 1420 },
    svgCoords: { x: 920, y: 628 }, // 2048 - 1420 = 628
  },
  {
    id: 'barad-dur',
    name: 'Barad-dûr',
    region: 'orta-yer',
    placeCoords: { x: 1480, y: 640 },
    svgCoords: { x: 1480, y: 1408 }, // 2048 - 640 = 1408
  },
  {
    id: 'gondolin',
    name: 'Gondolin',
    region: 'beleriand',
    placeCoords: { x: 1040, y: 1050 },
    svgCoords: { x: 1040, y: 486 }, // 1536 - 1050 = 486
  },
  {
    id: 'menegroth',
    name: 'Menegroth',
    region: 'beleriand',
    placeCoords: { x: 1000, y: 720 },
    svgCoords: { x: 1000, y: 816 }, // 1536 - 720 = 816
  },
  {
    id: 'nargothrond',
    name: 'Nargothrond',
    region: 'beleriand',
    placeCoords: { x: 680, y: 580 },
    svgCoords: { x: 680, y: 956 }, // 1536 - 580 = 956
  },
];

/**
 * Validates whether a landmark's planar place coordinates match its SVG canvas coordinates
 */
export function validateLandmarkAlignment(
  placeCoords: { x: number; y: number },
  svgCoords: { x: number; y: number },
  mapHeight: number
): boolean {
  const expectedSvgY = mapHeight - placeCoords.y;
  return placeCoords.x === svgCoords.x && expectedSvgY === svgCoords.y;
}

/**
 * Converts Leaflet CRS.Simple coordinates to SVG canvas coordinates
 */
export function placeToSvgCoords(
  coords: { x: number; y: number },
  mapHeight: number
): { x: number; y: number } {
  return {
    x: coords.x,
    y: mapHeight - coords.y,
  };
}

/**
 * Converts SVG canvas coordinates to Leaflet CRS.Simple coordinates
 */
export function svgToPlaceCoords(
  svgCoords: { x: number; y: number },
  mapHeight: number
): { x: number; y: number } {
  return {
    x: svgCoords.x,
    y: mapHeight - svgCoords.y,
  };
}

/**
 * River hierarchy stroke widths for Tolkien cartography
 */
export function getRiverStrokeWidth(tier: RiverTier): number {
  switch (tier) {
    case 'trunk':
      return 3.4;
    case 'primary-tributary':
      return 2.2;
    case 'secondary-tributary':
      return 1.6;
  }
}

/**
 * Helper to round numbers to 2 decimal places to avoid floating point artifacts
 */
function round2(val: number): number {
  return Math.round(val * 100) / 100;
}

/**
 * Generates an organic hand-drawn mountain peak SVG string
 */
export function generateMountainPeakSvg(
  x: number,
  y: number,
  height: number,
  width: number,
  variant: MountainVariant = 'mountain-medium',
  options: MountainPeakOptions = {}
): string {
  const h = height;
  const w = width;
  const isSnow = options.isSnowCapped || variant === 'mountain-snow';

  // 1. Orodruin / Mount Doom: Basalt cone with crater rim, glowing magma & ash smoke
  if (variant === 'volcano' || options.isVolcano) {
    const rimW = round2(w * 0.44);
    const coneW = round2(w * 0.52);
    const coneH = round2(h * 0.85);
    return `
      <g class="mountain-orodruin" transform="translate(${x},${y})">
        <!-- Basalt volcano cone -->
        <polygon points="${-coneW},0 ${round2(-rimW * 0.5)},${-coneH} ${round2(rimW * 0.5)},${-coneH} ${coneW},0" fill="#241b18" stroke="#141110" stroke-width="1.5" stroke-linejoin="round" />
        <!-- Shaded slope hatching -->
        <line x1="${-2}" y1="${round2(-coneH + 4)}" x2="${round2(w * 0.22)}" y2="${round2(-coneH + 8)}" stroke="#141110" stroke-width="0.9" />
        <line x1="${-1}" y1="${round2(-h * 0.65)}" x2="${round2(w * 0.35)}" y2="${round2(-h * 0.65 + 6)}" stroke="#141110" stroke-width="0.9" />
        <line x1="${0}" y1="${round2(-h * 0.45)}" x2="${round2(w * 0.44)}" y2="${round2(-h * 0.45 + 5)}" stroke="#141110" stroke-width="0.9" />
        <line x1="${0}" y1="${round2(-h * 0.25)}" x2="${round2(w * 0.5)}" y2="${round2(-h * 0.25 + 5)}" stroke="#141110" stroke-width="0.9" />
        <!-- Glowing magma caldera -->
        <ellipse cx="0" cy="${-coneH}" rx="${round2(rimW * 0.5)}" ry="4.5" fill="#c0392b" stroke="#141110" stroke-width="1.2" />
        <ellipse cx="0" cy="${-coneH}" rx="${round2(rimW * 0.3)}" ry="2.6" fill="#f39c12" />
        <!-- Billowing smoke plume -->
        <path d="M 0,${-coneH} C 12,${round2(-h * 1.2)} -18,${round2(-h * 1.6)} -6,${round2(-h * 2.1)}" fill="none" stroke="rgba(55, 45, 40, 0.45)" stroke-width="2.8" stroke-linecap="round" />
        <path d="M 4,${round2(-h * 0.87)} C 22,${round2(-h * 1.35)} -8,${round2(-h * 1.85)} 10,${round2(-h * 2.4)}" fill="none" stroke="rgba(75, 60, 55, 0.3)" stroke-width="4.2" stroke-linecap="round" />
      </g>
    `.trim();
  }

  // 2. Erebor (Lonely Mountain): Grand isolated peak with radiating craggy spurs
  if (variant === 'erebor') {
    const summitX = 0;
    const summitY = -h;
    const spurY = round2(-h * 0.35);
    return `
      <g class="mountain-erebor" transform="translate(${x},${y})">
        <!-- Radiating craggy spurs into the plains -->
        <path d="M 0,${spurY} Q ${round2(-w * 0.35)},${round2(-h * 0.1)} ${round2(-w * 0.75)},6" fill="none" stroke="#241c14" stroke-width="1.2" stroke-linecap="round" />
        <path d="M 0,${spurY} Q ${round2(-w * 0.18)},${round2(-h * 0.08)} ${round2(-w * 0.45)},8" fill="none" stroke="#241c14" stroke-width="1.1" stroke-linecap="round" />
        <path d="M 0,${spurY} Q ${round2(w * 0.2)},${round2(-h * 0.08)} ${round2(w * 0.5)},8" fill="none" stroke="#241c14" stroke-width="1.1" stroke-linecap="round" />
        <path d="M 0,${spurY} Q ${round2(w * 0.4)},${round2(-h * 0.1)} ${round2(w * 0.85)},6" fill="none" stroke="#241c14" stroke-width="1.2" stroke-linecap="round" />
        <!-- Base silhouette fill -->
        <polygon points="${summitX},${summitY} ${round2(w * 0.55)},0 ${round2(-w * 0.52)},0" fill="#faf7ee" />
        <!-- Lit west face -->
        <polygon points="${summitX},${summitY} ${round2(-w * 0.04)},0 ${round2(-w * 0.52)},0" fill="#fcfbf6" stroke="#241c14" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Shaded east face -->
        <polygon points="${summitX},${summitY} ${round2(w * 0.55)},0 ${round2(-w * 0.04)},0" fill="#c4b598" stroke="#241c14" stroke-width="1.2" stroke-linejoin="round" />
        <!-- Central ridgeline -->
        <line x1="${summitX}" y1="${summitY}" x2="${round2(-w * 0.04)}" y2="0" stroke="#241c14" stroke-width="1.3" />
        <!-- Diagonal pen hatching on shaded slope -->
        <line x1="${round2(w * 0.02)}" y1="${round2(-h * 0.75)}" x2="${round2(w * 0.16)}" y2="${round2(-h * 0.65)}" stroke="#241c14" stroke-width="0.8" />
        <line x1="${round2(w * 0.02)}" y1="${round2(-h * 0.55)}" x2="${round2(w * 0.28)}" y2="${round2(-h * 0.42)}" stroke="#241c14" stroke-width="0.8" />
        <line x1="${0}" y1="${round2(-h * 0.35)}" x2="${round2(w * 0.4)}" y2="${round2(-h * 0.18)}" stroke="#241c14" stroke-width="0.8" />
        <line x1="${round2(-w * 0.02)}" y1="${round2(-h * 0.15)}" x2="${round2(w * 0.48)}" y2="3" stroke="#241c14" stroke-width="0.8" />
        <!-- Snow cap on summit -->
        <polygon points="${summitX},${summitY} ${round2(w * 0.16)},${round2(-h * 0.68)} ${round2(w * 0.05)},${round2(-h * 0.65)} ${round2(-w * 0.15)},${round2(-h * 0.7)}" fill="#ffffff" stroke="#241c14" stroke-width="0.85" />
      </g>
    `.trim();
  }

  // 3. Canonical Peak (Medium, Snow, Tall, Double, Cluster)
  const summitX = 0;
  const summitY = -h;
  const leftBaseX = round2(-w * 0.5);
  const rightBaseX = round2(w * 0.52);
  const crestBaseX = round2(-w * 0.02);

  let snowCapSvg = '';
  if (isSnow) {
    const capH = h * 0.32;
    const capY = round2(summitY + capH);
    const leftCapX = round2(-w * 0.16);
    const rightCapX = round2(w * 0.17);
    snowCapSvg = `
      <polygon points="${summitX},${summitY} ${rightCapX},${round2(capY - 1)} ${round2(rightCapX - w * 0.04)},${round2(capY + 2)} ${round2(crestBaseX + w * 0.02)},${round2(capY - 1)} ${round2(leftCapX + w * 0.04)},${round2(capY + 1)} ${leftCapX},${capY}" fill="#ffffff" stroke="#1c1a16" stroke-width="0.85" />
      <polygon points="${summitX},${summitY} ${rightCapX},${round2(capY - 1)} ${crestBaseX},${round2(capY + 1)}" fill="rgba(210, 225, 238, 0.5)" />
    `.trim();
  }

  // Special accent for Caradhras (Redhorn): subtle red-tinted rock gully
  const isCaradhras = options.name?.includes('Caradhras');
  const gullyStroke = isCaradhras ? '#872b22' : '#3a352f';

  return `
    <g class="mountain-peak ${variant}" transform="translate(${x},${y})">
      <!-- Base silhouette fill (opaque parchment for occlusion) -->
      <polygon points="${summitX},${summitY} ${rightBaseX},0 ${leftBaseX},0" fill="#faf7ee" />
      <!-- Lit west face -->
      <polygon points="${summitX},${summitY} ${crestBaseX},0 ${leftBaseX},0" fill="#fcfbf6" stroke="#1c1a16" stroke-width="1.15" stroke-linejoin="round" />
      <!-- Shaded east face -->
      <polygon points="${summitX},${summitY} ${rightBaseX},0 ${crestBaseX},0" fill="#c4b598" stroke="#1c1a16" stroke-width="1.15" stroke-linejoin="round" />
      <!-- Central ridgeline -->
      <line x1="${summitX}" y1="${summitY}" x2="${crestBaseX}" y2="0" stroke="#1c1a16" stroke-width="1.25" />
      <!-- West rock gully -->
      <line x1="${round2(-w * 0.06)}" y1="${round2(summitY + h * 0.3)}" x2="${round2(-w * 0.28)}" y2="-2" stroke="${gullyStroke}" stroke-width="0.75" />
      <!-- Diagonal pen hatching on shaded east slope -->
      <line x1="${round2(crestBaseX + 2)}" y1="${round2(summitY + h * 0.25)}" x2="${round2(crestBaseX + w * 0.22)}" y2="${round2(summitY + h * 0.4)}" stroke="#1c1a16" stroke-width="0.8" opacity="0.85" />
      <line x1="${round2(crestBaseX + 2)}" y1="${round2(summitY + h * 0.45)}" x2="${round2(crestBaseX + w * 0.34)}" y2="${round2(summitY + h * 0.62)}" stroke="#1c1a16" stroke-width="0.8" opacity="0.85" />
      <line x1="${crestBaseX}" y1="${round2(summitY + h * 0.65)}" x2="${round2(crestBaseX + w * 0.44)}" y2="${round2(summitY + h * 0.84)}" stroke="#1c1a16" stroke-width="0.8" opacity="0.85" />
      <line x1="${round2(crestBaseX - 1)}" y1="${round2(summitY + h * 0.82)}" x2="${round2(crestBaseX + w * 0.5)}" y2="2" stroke="#1c1a16" stroke-width="0.8" opacity="0.85" />
      ${snowCapSvg}
    </g>
  `.trim();
}

/**
 * Reusable SVG definitions for canonical cartographic tree symbols
 */
export function generateTreeSymbolDefs(): string {
  return `
    <!-- 1. Standard Conifer (Mid) -->
    <g id="tree-conifer-mid">
      <ellipse cx="1.5" cy="2.5" rx="4.5" ry="1.2" fill="#241a10" opacity="0.32" />
      <line x1="0" y1="0" x2="0" y2="2.5" stroke="#362516" stroke-width="1.3" stroke-linecap="round" />
      <polygon points="0,-14 3,-9 1.8,-9 4.2,-5 2.5,-5 5.5,0 -5.5,0 -2.5,-5 -4.2,-5 -1.8,-9 -3,-9" fill="#3c5234" stroke="#1d2a19" stroke-width="0.8" stroke-linejoin="round" />
      <line x1="0" y1="-14" x2="0" y2="0" stroke="#1d2a19" stroke-width="0.6" opacity="0.75" />
    </g>

    <!-- 2. Light Conifer (Forest Edge / Perimeter Skirt) -->
    <g id="tree-conifer-light">
      <ellipse cx="1.5" cy="2.2" rx="4" ry="1.1" fill="#241a10" opacity="0.28" />
      <line x1="0" y1="0" x2="0" y2="2.2" stroke="#362516" stroke-width="1.2" stroke-linecap="round" />
      <polygon points="0,-13 2.8,-8.5 1.7,-8.5 3.8,-4.5 2.2,-4.5 5,0 -5,0 -2.2,-4.5 -3.8,-4.5 -1.7,-8.5 -2.8,-8.5" fill="#586e49" stroke="#253320" stroke-width="0.75" stroke-linejoin="round" />
      <line x1="0" y1="-13" x2="0" y2="0" stroke="#253320" stroke-width="0.55" opacity="0.7" />
    </g>

    <!-- 3. Dark Conifer (Deep Northern Woods / Mirkwood Interior / Taur-nu-Fuin) -->
    <g id="tree-conifer-dark">
      <ellipse cx="1.8" cy="2.6" rx="4.5" ry="1.3" fill="#140d07" opacity="0.4" />
      <line x1="0" y1="0" x2="0" y2="2.6" stroke="#26170d" stroke-width="1.4" stroke-linecap="round" />
      <polygon points="0,-15 3.2,-9.5 2,-9.5 4.5,-5 2.8,-5 6,0 -6,0 -2.8,-5 -4.5,-5 -2,-9.5 -3.2,-9.5" fill="#22331f" stroke="#0e170d" stroke-width="0.85" stroke-linejoin="round" />
      <line x1="0" y1="-15" x2="0" y2="0" stroke="#0e170d" stroke-width="0.65" opacity="0.8" />
    </g>

    <!-- 4. Lothlórien Golden Mallorn Tree -->
    <g id="tree-mallorn-gold">
      <ellipse cx="2" cy="3.5" rx="5.5" ry="1.5" fill="#261a0e" opacity="0.25" />
      <line x1="0" y1="0" x2="0" y2="3.5" stroke="#4a3720" stroke-width="1.4" stroke-linecap="round" />
      <path d="M 0,-15 C -3.5,-15 -6,-12 -5,-8 C -7.5,-6 -6.5,-2 -4,0 L 4,0 C 6.5,-2 7.5,-6 5,-8 C 6,-12 3.5,-15 0,-15 Z" fill="#9e893e" stroke="#3d3314" stroke-width="0.8" stroke-linejoin="round" />
      <ellipse cx="0" cy="-8" rx="2.8" ry="4" fill="#baa44e" opacity="0.85" />
      <ellipse cx="0" cy="-9" rx="1.5" ry="2.2" fill="#dfcb6a" opacity="0.75" />
    </g>

    <!-- 5. Fangorn Ancient Entwood Tree -->
    <g id="tree-fangorn">
      <ellipse cx="2" cy="3.2" rx="5.5" ry="1.4" fill="#1b120a" opacity="0.35" />
      <line x1="0" y1="0" x2="0" y2="3.2" stroke="#332213" stroke-width="1.8" stroke-linecap="round" />
      <path d="M 0,-14.5 C -3,-14.5 -5.5,-11.5 -4.5,-8 C -7,-6.5 -7.5,-2 -4.5,0 L 4.5,0 C 7.5,-2 7,-6.5 4.5,-8 C 5.5,-11.5 3,-14.5 0,-14.5 Z" fill="#36492f" stroke="#182315" stroke-width="0.85" stroke-linejoin="round" />
      <path d="M -2,-8 Q 0,-10 2,-8 M -3,-4 Q 0,-6 3,-4" fill="none" stroke="#182315" stroke-width="0.6" opacity="0.7" />
    </g>

    <!-- 6. Deciduous Broadleaf (Old Forest / Brethil / Southern Woods) -->
    <g id="tree-broadleaf">
      <ellipse cx="1.6" cy="2.8" rx="4.8" ry="1.2" fill="#1c140d" opacity="0.3" />
      <line x1="0" y1="0" x2="0" y2="2.8" stroke="#382618" stroke-width="1.3" stroke-linecap="round" />
      <path d="M 0,-13.5 C -4,-13.5 -5.5,-9.5 -4,-6 C -6,-4.5 -5.5,-1.5 -3.5,0 L 3.5,0 C 5.5,-1.5 6,-4.5 4,-6 C 5.5,-9.5 4,-13.5 0,-13.5 Z" fill="#44613d" stroke="#1d2d1a" stroke-width="0.8" stroke-linejoin="round" />
      <ellipse cx="0" cy="-6.5" rx="2.5" ry="3.5" fill="#58794f" opacity="0.8" />
    </g>

    <!-- 7. Woodland Grove Cluster (Trio of compact trees) -->
    <g id="tree-cluster">
      <ellipse cx="2" cy="2.5" rx="6.5" ry="1.4" fill="#1c140d" opacity="0.28" />
      <line x1="-3.5" y1="0" x2="-3.5" y2="-4" stroke="#332213" stroke-width="1" />
      <circle cx="-3.5" cy="-6" r="3" fill="#3f5a37" stroke="#1d2a19" stroke-width="0.75" />
      <line x1="3.5" y1="0" x2="3.5" y2="-4" stroke="#332213" stroke-width="1" />
      <circle cx="3.5" cy="-6" r="3" fill="#3f5a37" stroke="#1d2a19" stroke-width="0.75" />
      <line x1="0" y1="0" x2="0" y2="-5" stroke="#332213" stroke-width="1.2" />
      <circle cx="0" cy="-7.5" r="3.8" fill="#4a6842" stroke="#1d2a19" stroke-width="0.8" />
    </g>
  `.trim();
}
