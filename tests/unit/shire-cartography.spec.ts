import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { placeSchema } from '../../src/content/schemas';
import { toLeafletLatLng, toSvgCoordinates } from '../../src/utils/atlas/coordinates';

describe('Shire Cartographic Expansion (shire-cartography.spec.ts)', () => {
  const placesDir = join(process.cwd(), 'src', 'content', 'places');
  const meSvgPath = join(process.cwd(), 'public', 'assets', 'maps', 'middle-earth-planar.svg');
  const beleriandSvgPath = join(process.cwd(), 'public', 'assets', 'maps', 'beleriand-planar.svg');

  const expectedShirePlaces = [
    {
      id: 'hobbiton',
      nameSnippet: 'Hobbiton',
      expectedX: 490,
      expectedY: 1408,
      expectedSvgX: 490,
      expectedSvgY: 640,
    },
    {
      id: 'bywater',
      nameSnippet: 'Bywater',
      expectedX: 512,
      expectedY: 1406,
      expectedSvgX: 512,
      expectedSvgY: 642,
    },
    {
      id: 'michel-delving',
      nameSnippet: 'Michel Delving',
      expectedX: 425,
      expectedY: 1402,
      expectedSvgX: 425,
      expectedSvgY: 646,
    },
    {
      id: 'tuckborough',
      nameSnippet: 'Tuckborough',
      expectedX: 486,
      expectedY: 1380,
      expectedSvgX: 486,
      expectedSvgY: 668,
    },
    {
      id: 'brandywine-bridge',
      nameSnippet: 'Brandywine Bridge',
      expectedX: 592,
      expectedY: 1412,
      expectedSvgX: 592,
      expectedSvgY: 636,
    },
    {
      id: 'buckland',
      nameSnippet: 'Buckland',
      expectedX: 604,
      expectedY: 1395,
      expectedSvgX: 604,
      expectedSvgY: 653,
    },
  ];

  describe('1. Shire Place Content Records and Schema Validation', () => {
    it('Barcha 6 ta asosiy Shir maskanlari JSON fayllari mavjud va toʻgʻri boʻlishi kerak', () => {
      for (const item of expectedShirePlaces) {
        const filePath = join(placesDir, `${item.id}.json`);
        expect(existsSync(filePath), `Fayl topilmadi: ${item.id}.json`).toBe(true);

        const content = JSON.parse(readFileSync(filePath, 'utf-8'));
        const parseResult = placeSchema.safeParse(content);
        expect(parseResult.success, `Schema xatosi [${item.id}]: ${JSON.stringify(parseResult.error?.issues)}`).toBe(true);

        const place = parseResult.data!;
        expect(place.id).toBe(item.id);
        expect(place.name).toContain(item.nameSnippet);
        expect(place.region).toBe('orta-yer');
        expect(place.coordinates).toBeDefined();
        expect(place.coordinates?.x).toBe(item.expectedX);
        expect(place.coordinates?.y).toBe(item.expectedY);
        expect(place.sources.length).toBeGreaterThan(0);
        expect(place.summary.length).toBeGreaterThan(50);
      }
    });
  });

  describe('2. Leaflet Planar va SVG Koordinatalar Oʻzaro Mosligi', () => {
    it('Shir joy koordinatalari matematik jihatdan toʻliq izchil boʻlishi kerak', () => {
      for (const item of expectedShirePlaces) {
        // Leaflet Planar [lat, lng] = [y, x]
        const [lat, lng] = toLeafletLatLng(item.expectedX, item.expectedY);
        expect(lat).toBe(item.expectedY);
        expect(lng).toBe(item.expectedX);

        // SVG koordinatalari: svgX = x, svgY = 2048 - y
        const svgPt = toSvgCoordinates(item.expectedX, item.expectedY, 2048);
        expect(svgPt.svgX).toBe(item.expectedSvgX);
        expect(svgPt.svgY).toBe(item.expectedSvgY);
      }
    });

    it('Barcha Shir maskanlari Shir geografik chegarasi (bounding box) ichida joylashishi kerak', () => {
      for (const item of expectedShirePlaces) {
        // X koordinata: 380 dan 620 gacha
        expect(item.expectedX).toBeGreaterThanOrEqual(380);
        expect(item.expectedX).toBeLessThanOrEqual(620);

        // Y koordinata: 1350 dan 1450 gacha
        expect(item.expectedY).toBeGreaterThanOrEqual(1350);
        expect(item.expectedY).toBeLessThanOrEqual(1450);
      }
    });
  });

  describe('3. Middle-earth Planar SVG Cartography Enhancements', () => {
    it('SVG xaritada Shir mintaqasi, toʻrtlik chegaralari va butazor mavjud boʻlishi kerak', () => {
      expect(existsSync(meSvgPath)).toBe(true);
      const svg = readFileSync(meSvgPath, 'utf-8');

      // Shir mintaqasi ID va qatlamlari
      expect(svg).toContain('id="me-shire-region"');
      expect(svg).toContain('class="me-shire-wash"');
      expect(svg).toContain('class="me-shire-boundary"');
      expect(svg).toContain('class="me-shire-hedge"');

      // To'rtliklar chegaralari va Uch To'rtlik Toshi
      expect(svg).toContain('Uch Toʻrtlik Toshi');

      // Suv daryosi, Suvbo'yi havzasi va Stok soyi
      expect(svg).toContain('Bywater Pool');
      expect(svg).toContain('Stock Brook');

      // Qadimiy yo'llar va Stok yo'li
      expect(svg).toContain('Stock Road');

      // To'rtliklar yozuvlari (The Four Farthings)
      expect(svg).toContain('Shimoliy Toʻrtlik');
      expect(svg).toContain('Gʻarbiy Toʻrtlik');
      expect(svg).toContain('Sharqiy Toʻrtlik');
      expect(svg).toContain('Janubiy Toʻrtlik');

      // Shir aholi punktlari va toponimlari
      expect(svg).toContain('Hobbiton (Bag End)');
      expect(svg).toContain('Bywater (Suvboʻyi)');
      expect(svg).toContain('Michel Delving');
      expect(svg).toContain('Tuckborough');
      expect(svg).toContain('Toshkoʻprik');
      expect(svg).toContain('Bukland (Brendi Xol)');
      expect(svg).toContain('High Hay');
    });

    it('Beleriand xaritasiga Shir elementlari aralashmagan boʻlishi kerak', () => {
      expect(existsSync(beleriandSvgPath)).toBe(true);
      const bSvg = readFileSync(beleriandSvgPath, 'utf-8');

      expect(bSvg).not.toContain('me-shire-region');
      expect(bSvg).not.toContain('Hobbiton');
      expect(bSvg).not.toContain('Michel Delving');
    });
  });
});
