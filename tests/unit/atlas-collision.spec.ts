import { describe, expect, it } from 'vitest';
import {
  boxesOverlap,
  clearLabelMeasurementCache,
  CollisionPlacementCache,
  computeLabelPlacements,
  getLabelMeasurementCacheSize,
  measureLabelDimensions,
  normalizeLocationKey,
  type BoundingBox,
  type CollisionCandidate,
  type ViewportBounds,
} from '../../src/utils/atlas/marker-collision';

describe('Atlas Marker Collision Avoidance Engine (atlas-collision.spec.ts)', () => {
  const defaultViewport: ViewportBounds = {
    width: 1200,
    height: 800,
    margin: 80,
  };

  describe('1. Bounding Box Overlap Checks (boxesOverlap)', () => {
    it('Bir-biridan uzoq qutilar kolliziya bermasligi kerak', () => {
      const b1: BoundingBox = { x1: 10, y1: 10, x2: 30, y2: 30 };
      const b2: BoundingBox = { x1: 50, y1: 50, x2: 70, y2: 70 };
      expect(boxesOverlap(b1, b2, 3)).toBe(false);
    });

    it('Kesisgan qutilar kolliziya berishi kerak', () => {
      const b1: BoundingBox = { x1: 10, y1: 10, x2: 40, y2: 40 };
      const b2: BoundingBox = { x1: 30, y1: 30, x2: 60, y2: 60 };
      expect(boxesOverlap(b1, b2, 3)).toBe(true);
    });

    it('Padding doirasidagi yaqin qutilar kolliziya berishi kerak', () => {
      const b1: BoundingBox = { x1: 10, y1: 10, x2: 30, y2: 30 };
      const b2: BoundingBox = { x1: 32, y1: 10, x2: 52, y2: 30 }; // orasi 2px
      expect(boxesOverlap(b1, b2, 3)).toBe(true); // pad=3 da to'qnashadi
      expect(boxesOverlap(b1, b2, 1)).toBe(false); // pad=1 da to'qnashmaydi
    });
  });

  describe('2. computeLabelPlacements Immutability & Viewport Culling', () => {
    it('Boʻsh massiv berilganda boʻsh Map qaytishi kerak', () => {
      const res = computeLabelPlacements([], defaultViewport);
      expect(res.size).toBe(0);
    });

    it('Asl nomzodlar massivi mutatsiyaga uchramasligi (immutable) kerak', () => {
      const candidates: CollisionCandidate[] = [
        { id: 'b', name: 'Bree', x: 200, y: 200, priority: 30 },
        { id: 'a', name: 'Annuminas', x: 100, y: 100, priority: 100 },
      ];
      const copy = [...candidates];
      computeLabelPlacements(candidates, defaultViewport);

      expect(candidates[0]?.id).toBe(copy[0]?.id);
      expect(candidates[1]?.id).toBe(copy[1]?.id);
    });

    it('Ekrandan ancha tashqaridagi (cull) markerlar etiketkasi yashirilishi kerak', () => {
      const candidates: CollisionCandidate[] = [
        { id: 'visible', name: 'Gondolin', x: 500, y: 400, priority: 100 },
        { id: 'outside-far', name: 'Harad Deep', x: 2500, y: 3000, priority: 60 },
      ];
      const results = computeLabelPlacements(candidates, defaultViewport, { viewportMargin: 50 });

      const visibleRes = results.get('visible');
      expect(visibleRes?.inViewport).toBe(true);
      expect(visibleRes?.showLabel).toBe(true);

      const outsideRes = results.get('outside-far');
      expect(outsideRes?.inViewport).toBe(false);
      expect(outsideRes?.showLabel).toBe(false);
      expect(outsideRes?.suppressed).toBe(true);
    });
  });

  describe('3. 4-Way Label Direction Placement & Collision Resolution', () => {
    it('Yakka marker sukut boʻyicha oʻng ("right") tomonga joylashishi kerak', () => {
      const candidate: CollisionCandidate = {
        id: 'minas-tirith',
        name: 'Minas Tirith',
        x: 400,
        y: 300,
        priority: 100,
      };
      const results = computeLabelPlacements([candidate], defaultViewport);
      const res = results.get('minas-tirith');

      expect(res?.showLabel).toBe(true);
      expect(res?.labelPlacement).toBe('right');
      expect(res?.suppressed).toBe(false);
      expect(res?.labelBox).not.toBeNull();
      expect(res?.labelBox!.x1).toBeGreaterThan(candidate.x);
    });

    it('preferredPos berilganda birinchi navbatda shu yoʻnalish tekshirilishi kerak', () => {
      const candidate: CollisionCandidate = {
        id: 'barad-dur',
        name: 'Barad-dûr',
        x: 500,
        y: 400,
        priority: 100,
        preferredPos: 'top',
      };
      const results = computeLabelPlacements([candidate], defaultViewport);
      const res = results.get('barad-dur');

      expect(res?.showLabel).toBe(true);
      expect(res?.labelPlacement).toBe('top');
      expect(res?.labelBox!.y2).toBeLessThan(candidate.y);
    });

    it('Oʻng tomon band boʻlganda pastga ("bottom") yoki boshqa boʻsh yoʻnalishga oʻtishi kerak', () => {
      // Ikki marker yonma-yon joylashgan
      const c1: CollisionCandidate = {
        id: 'capital-1',
        name: 'Poytaxt Shahar',
        x: 300,
        y: 300,
        priority: 100,
      };
      // c2 c1 ning o'ng tomonida turibdi, shuning uchun c1 ning o'ng etiketkasi c2 bilan yoki c2 ning o'ngi bilan to'qnashadi
      const c2: CollisionCandidate = {
        id: 'minor-fort',
        name: 'Kichik Qala',
        x: 340,
        y: 300,
        priority: 50,
      };

      const results = computeLabelPlacements([c1, c2], defaultViewport);
      const r1 = results.get('capital-1')!;
      const r2 = results.get('minor-fort')!;

      expect(r1.showLabel).toBe(true);
      // Agar ikkalasi ham ko'rinsa, ularning etiketkalari bir-birini qoplamasligi kerak
      if (r1.showLabel && r2.showLabel && r1.labelBox && r2.labelBox) {
        expect(boxesOverlap(r1.labelBox, r2.labelBox, 2)).toBe(false);
      }
    });
  });

  describe('4. Label Suppression Without Hiding Underlying Markers', () => {
    it('Zich joylashgan past prioritetli maskanlar ikonkasi oʻchmasdan faqat yozuvi yashirilishi (suppressed) kerak', () => {
      // Bir nuqtaga to'plangan 4 ta marker
      const cluster: CollisionCandidate[] = [
        { id: 'high-1', name: 'Asosiy Poytaxt', x: 200, y: 200, priority: 100 },
        { id: 'low-1', name: 'Qishloq 1', x: 205, y: 200, priority: 20 },
        { id: 'low-2', name: 'Qishloq 2', x: 200, y: 205, priority: 20 },
        { id: 'low-3', name: 'Qishloq 3', x: 195, y: 200, priority: 20 },
      ];

      const results = computeLabelPlacements(cluster, defaultViewport, {
        padding: 5,
        forceHighPriorityLabels: true,
      });

      // BARCHA 4 ta marker natijada mavjud bo'lishi kerak (marker o'zi yashirilmaydi!)
      expect(results.size).toBe(4);
      for (const cand of cluster) {
        const item = results.get(cand.id);
        expect(item).toBeDefined();
        expect(item?.iconBox).toBeDefined();
      }

      // Yuqori prioritetli marker yozuvi chiqadi
      expect(results.get('high-1')?.showLabel).toBe(true);

      // Kamida bir yoki bir nechta past prioritetli markerlarning yozuvi yashiriladi (suppressed = true, labelPlacement = null)
      const suppressedCount = cluster.filter((c) => results.get(c.id)?.suppressed).length;
      expect(suppressedCount).toBeGreaterThanOrEqual(1);

      // Yashirilgan obyektning showLabel parametri false bo'lishi kerak
      const suppressedCandidate = cluster.find((c) => results.get(c.id)?.suppressed);
      if (suppressedCandidate) {
        const item = results.get(suppressedCandidate.id)!;
        expect(item.showLabel).toBe(false);
        expect(item.labelPlacement).toBeNull();
      }
    });

    it('Teng prioritetli markerlar deterministic tartibda saralanishi kerak', () => {
      const c1: CollisionCandidate = { id: 'beta', name: 'Beta', x: 100, y: 100, priority: 50 };
      const c2: CollisionCandidate = { id: 'alpha', name: 'Alpha', x: 100, y: 100, priority: 50 };

      const res = computeLabelPlacements([c1, c2], defaultViewport);
      // 'alpha' leksikografik birinchi bo'lgani uchun unga imkoniyat beriladi
      expect(res.get('alpha')?.showLabel).toBe(true);
    });

    it('Tanlangan joy (isSelected: true) past prioritetli boʻlsa ham har doim yuqori ustuvorlik olishi kerak', () => {
      const candidates: CollisionCandidate[] = [
        { id: 'capital', name: 'Katta Shahar', x: 300, y: 300, priority: 90 },
        { id: 'selected-minor', name: 'Tanlangan Maskan', x: 300, y: 300, priority: 30, isSelected: true },
      ];
      const res = computeLabelPlacements(candidates, defaultViewport);
      expect(res.get('selected-minor')?.showLabel).toBe(true);
    });
  });

  describe('5. Zoom-Dependent Visibility, Viewport Boundaries & Duplicate Prevention', () => {
    it('Turli zoom darajalarida minZoom asosida yorliqlarni filtrlaydi', () => {
      const candidates: CollisionCandidate[] = [
        { id: 'major', name: 'Minas Tirith', x: 200, y: 200, priority: 100, minZoom: -2 },
        { id: 'medium', name: 'Bri', x: 450, y: 200, priority: 60, minZoom: 0 },
        { id: 'local', name: 'Tuckborough', x: 700, y: 200, priority: 66, minZoom: 1 },
      ];

      const farRes = computeLabelPlacements(candidates, { ...defaultViewport, zoom: -2 });
      expect(farRes.get('major')?.showLabel).toBe(true);
      expect(farRes.get('medium')?.showLabel).toBe(false);
      expect(farRes.get('local')?.showLabel).toBe(false);

      const midRes = computeLabelPlacements(candidates, { ...defaultViewport, zoom: 0 });
      expect(midRes.get('major')?.showLabel).toBe(true);
      expect(midRes.get('medium')?.showLabel).toBe(true);
      expect(midRes.get('local')?.showLabel).toBe(false);

      const closeRes = computeLabelPlacements(candidates, { ...defaultViewport, zoom: 1 });
      expect(closeRes.get('major')?.showLabel).toBe(true);
      expect(closeRes.get('medium')?.showLabel).toBe(true);
      expect(closeRes.get('local')?.showLabel).toBe(true);
    });

    it('Eriador maskanlari (Hobbiton, Ered Luin, Bri, Amon Sul, Bywater) -2 dan 2 gacha zoomlarda barqaror ishlashi kerak', () => {
      const candidates: CollisionCandidate[] = [
        { id: 'hobbiton', name: 'Hobbiton', x: 490, y: 400, priority: 72, minZoom: -2, preferredPos: 'top' },
        { id: 'ered-luin', name: 'Ered Luin', x: 200, y: 300, priority: 62, minZoom: -1, preferredPos: 'right' },
        { id: 'bree', name: 'Bri', x: 650, y: 400, priority: 60, minZoom: 0, preferredPos: 'bottom' },
        { id: 'amon-sul', name: 'Amon Sûl', x: 720, y: 390, priority: 58, minZoom: 0, preferredPos: 'top' },
        { id: 'bywater', name: 'Bywater', x: 512, y: 402, priority: 66, minZoom: 1, preferredPos: 'right' },
      ];

      // Zoom -2: Faqat Hobbiton (minZoom: -2) chiqadi
      const zMinus2 = computeLabelPlacements(candidates, { ...defaultViewport, zoom: -2 });
      expect(zMinus2.get('hobbiton')?.showLabel).toBe(true);
      expect(zMinus2.get('ered-luin')?.showLabel).toBe(false);
      expect(zMinus2.get('bree')?.showLabel).toBe(false);
      expect(zMinus2.get('amon-sul')?.showLabel).toBe(false);

      // Zoom -1: Hobbiton va Ered Luin chiqadi
      const zMinus1 = computeLabelPlacements(candidates, { ...defaultViewport, zoom: -1 });
      expect(zMinus1.get('hobbiton')?.showLabel).toBe(true);
      expect(zMinus1.get('ered-luin')?.showLabel).toBe(true);
      expect(zMinus1.get('bree')?.showLabel).toBe(false);

      // Zoom 0: Hobbiton, Ered Luin, Bri va Amon Sûl chiqadi
      const z0 = computeLabelPlacements(candidates, { ...defaultViewport, zoom: 0 });
      expect(z0.get('hobbiton')?.showLabel).toBe(true);
      expect(z0.get('ered-luin')?.showLabel).toBe(true);
      expect(z0.get('bree')?.showLabel).toBe(true);
      expect(z0.get('amon-sul')?.showLabel).toBe(true);
      expect(z0.get('bywater')?.showLabel).toBe(false);

      // Zoom 1 & 2: Bywater ham faollashadi
      const z1 = computeLabelPlacements(candidates, { ...defaultViewport, zoom: 1 });
      expect(z1.get('hobbiton')?.showLabel).toBe(true);
      expect(z1.get('bree')?.showLabel).toBe(true);
      expect(z1.get('amon-sul')?.showLabel).toBe(true);

      const z2 = computeLabelPlacements(candidates, { ...defaultViewport, zoom: 2 });
      expect(z2.get('hobbiton')?.showLabel).toBe(true);
      expect(z2.get('bree')?.showLabel).toBe(true);
      expect(z2.get('amon-sul')?.showLabel).toBe(true);
    });

    it('Ekranning oʻng chegarasiga yaqin yorliq chap ("left") tomonga oʻtishi kerak', () => {
      const nearRightEdge: CollisionCandidate = {
        id: 'edge-place',
        name: 'Chegara Qalʼasi',
        x: 1185,
        y: 400,
        priority: 100,
        preferredPos: 'right',
      };
      const res = computeLabelPlacements([nearRightEdge], defaultViewport);
      const item = res.get('edge-place')!;
      expect(item.showLabel).toBe(true);
      expect(item.labelPlacement).toBe('left');
      expect(item.labelBox!.x2).toBeLessThanOrEqual(defaultViewport.width - 6);
    });

    it('Inspector yoki Journey paneli (obstacle) ustiga tushadigan yorliq boʻsh tomonga yoʻnaltirilishi kerak', () => {
      const obstacle: BoundingBox = { x1: 410, y1: 250, x2: 750, y2: 550 };
      const cand: CollisionCandidate = {
        id: 'near-panel',
        name: 'Panel Yonidagi Maskan',
        x: 390,
        y: 350,
        priority: 80,
        preferredPos: 'right',
      };
      const res = computeLabelPlacements([cand], {
        ...defaultViewport,
        obstacles: [obstacle],
      });
      const item = res.get('near-panel')!;
      expect(item.showLabel).toBe(true);
      expect(item.labelPlacement).not.toBe('right');
      expect(boxesOverlap(item.labelBox!, obstacle, 2)).toBe(false);
    });

    it('Bir xil locationKey yoki bir xil nomdagi takroriy yorliqlar (duplicate) bloklanishi kerak', () => {
      expect(normalizeLocationKey('Hobbiton (Bag End)')).toBe('hobbiton');

      const candidates: CollisionCandidate[] = [
        { id: 'hobbiton-main', name: 'Hobbiton', x: 400, y: 400, priority: 78 },
        { id: 'hobbiton-dup', name: 'Hobbiton (Bag End)', x: 420, y: 410, priority: 50 },
      ];
      const res = computeLabelPlacements(candidates, defaultViewport);
      expect(res.get('hobbiton-main')?.showLabel).toBe(true);
      expect(res.get('hobbiton-dup')?.showLabel).toBe(false);
      expect(res.get('hobbiton-dup')?.duplicate).toBe(true);
    });
  });

  describe('6. Measurement & Placement Caching', () => {
    it('Matn oʻlchamlari keshi (measureLabelDimensions) qayta chaqirilganda xotiradan qaytarishi kerak', () => {
      clearLabelMeasurementCache();
      expect(getLabelMeasurementCacheSize()).toBe(0);

      const d1 = measureLabelDimensions('Rivendell', {
        labelCharWidth: 7,
        labelBasePadding: 14,
        labelHeight: 18,
      });
      const d2 = measureLabelDimensions('Rivendell', {
        labelCharWidth: 7,
        labelBasePadding: 14,
        labelHeight: 18,
      });

      expect(d1).toBe(d2);
      expect(getLabelMeasurementCacheSize()).toBe(1);
    });

    it('CollisionPlacementCache bir xil holatda keshdan olishi va oʻzgarish boʻlganda yangilashi kerak', () => {
      const cache = new CollisionPlacementCache();
      let computeCount = 0;

      const input1 = {
        regionId: 'orta-yer',
        zoom: 1,
        panX: 600.4,
        panY: 400.2,
        viewportWidth: 1200,
        viewportHeight: 800,
        selectedPlaceId: null,
        isJourneyActive: false,
        activeStageNum: 0,
        obstacleSignature: '',
      };

      // Sub-piksel siljish (kvantlash tufayli bir xil kalit hosil qiladi)
      const input1Subpixel = {
        regionId: 'orta-yer',
        zoom: 1,
        panX: 600.8,
        panY: 400.6,
        viewportWidth: 1200,
        viewportHeight: 800,
        selectedPlaceId: null,
        isJourneyActive: false,
        activeStageNum: 0,
        obstacleSignature: '',
      };
      expect(cache.serializeKey(input1)).toBe(cache.serializeKey(input1Subpixel));

      const candidates: CollisionCandidate[] = [
        { id: 'hobbiton', name: 'Hobbiton', x: 500, y: 400, priority: 78 },
      ];

      const res1 = cache.getOrCompute(input1, () => {
        computeCount++;
        return computeLabelPlacements(candidates, defaultViewport);
      });
      const res2 = cache.getOrCompute(input1Subpixel, () => {
        computeCount++;
        return computeLabelPlacements(candidates, defaultViewport);
      });

      expect(res1.fromCache).toBe(false);
      expect(res2.fromCache).toBe(true);
      expect(res1.results).toBe(res2.results);
      expect(computeCount).toBe(1);
      expect(cache.getStats().hits).toBe(1);
      expect(cache.getStats().misses).toBe(1);

      // Zoom o'zgarganda kesh yangilanishi kerak
      const inputZoomChanged = {
        regionId: 'orta-yer',
        zoom: 2,
        panX: 600,
        panY: 400,
        viewportWidth: 1200,
        viewportHeight: 800,
        selectedPlaceId: null,
        isJourneyActive: false,
        activeStageNum: 0,
        obstacleSignature: '',
      };
      cache.getOrCompute(inputZoomChanged, () => {
        computeCount++;
        return computeLabelPlacements(candidates, defaultViewport);
      });
      expect(computeCount).toBe(2);

      cache.invalidate();
      expect(cache.getStats().hasCachedResult).toBe(false);
    });
  });
});
