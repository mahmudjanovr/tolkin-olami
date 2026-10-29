import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { gzipSync } from 'node:zlib';
import { describe, expect, it } from 'vitest';
import {
  CANONICAL_LANDMARK_CONTROL_POINTS,
  generateMountainPeakSvg,
  generateTreeSymbolDefs,
  getRiverStrokeWidth,
  placeToSvgCoords,
  svgToPlaceCoords,
  type TreeVariant,
  validateLandmarkAlignment,
} from '../../src/utils/atlas/cartography-symbols';

describe('Atlas Cartography Symbols & Geometry (Phase 2)', () => {
  const MAP_HEIGHT_MIDDLE_EARTH = 2048;
  const MAP_HEIGHT_BELERIAND = 1536;

  describe('1. Canonical Landmark Control Points & Coordinate Conversion', () => {
    it('Barcha kanonik nazorat nuqtalari toʻgʻri roʻyxatdan oʻtgan boʻlishi kerak', () => {
      expect(CANONICAL_LANDMARK_CONTROL_POINTS.length).toBeGreaterThanOrEqual(6);
      const ids = CANONICAL_LANDMARK_CONTROL_POINTS.map((p) => p.id);
      expect(ids).toContain('minas-tirith');
      expect(ids).toContain('rivendell');
      expect(ids).toContain('barad-dur');
      expect(ids).toContain('gondolin');
      expect(ids).toContain('menegroth');
      expect(ids).toContain('nargothrond');
    });

    it('Har bir nazorat nuqtasi SVG canvas va Leaflet koordinatalari oʻrtasida aniq mos kelishi kerak', () => {
      for (const cp of CANONICAL_LANDMARK_CONTROL_POINTS) {
        const height = cp.region === 'orta-yer' ? MAP_HEIGHT_MIDDLE_EARTH : MAP_HEIGHT_BELERIAND;
        const isValid = validateLandmarkAlignment(cp.placeCoords, cp.svgCoords, height);
        expect(isValid, `Nazorat nuqtasi ${cp.name} (${cp.id}) koordinatalari mos kelmadi`).toBe(true);
      }
    });

    it('placeToSvgCoords va svgToPlaceCoords aylanma (round-trip) konvertatsiyani saqlashi kerak', () => {
      const testPoints = [
        { x: 1220, y: 580, height: MAP_HEIGHT_MIDDLE_EARTH },
        { x: 920, y: 1420, height: MAP_HEIGHT_MIDDLE_EARTH },
        { x: 1040, y: 1050, height: MAP_HEIGHT_BELERIAND },
        { x: 0, y: 0, height: 1000 },
        { x: 500, y: 500, height: 1000 },
      ];

      for (const pt of testPoints) {
        const svgCoords = placeToSvgCoords({ x: pt.x, y: pt.y }, pt.height);
        expect(svgCoords.x).toBe(pt.x);
        expect(svgCoords.y).toBe(pt.height - pt.y);

        const restored = svgToPlaceCoords(svgCoords, pt.height);
        expect(restored.x).toBe(pt.x);
        expect(restored.y).toBe(pt.y);
      }
    });

    it('validateLandmarkAlignment notoʻgʻri koordinatalar uchun false qaytarishi kerak', () => {
      expect(
        validateLandmarkAlignment({ x: 100, y: 200 }, { x: 100, y: 700 }, 1000)
      ).toBe(false); // kutilgan y = 1000 - 200 = 800, ammo 700 berildi
      expect(
        validateLandmarkAlignment({ x: 100, y: 200 }, { x: 150, y: 800 }, 1000)
      ).toBe(false); // kutilgan x = 100, ammo 150 berildi
    });
  });

  describe('2. River Stroke Hierarchy', () => {
    it('Daryolar iyerarxiyasi qatʼiy qalinlik qoidalariga rioya qilishi kerak (trunk > primary > secondary)', () => {
      const trunkWidth = getRiverStrokeWidth('trunk');
      const primaryWidth = getRiverStrokeWidth('primary-tributary');
      const secondaryWidth = getRiverStrokeWidth('secondary-tributary');

      expect(trunkWidth).toBe(3.4);
      expect(primaryWidth).toBe(2.2);
      expect(secondaryWidth).toBe(1.6);

      expect(trunkWidth).toBeGreaterThan(primaryWidth);
      expect(primaryWidth).toBeGreaterThan(secondaryWidth);
    });
  });

  describe('3. Mountain Peak SVG Generator', () => {
    it('Standart togʻ choʻqqisi uchun toʻgʻri yorugʻlik/soya va poligonlarni hosil qilishi kerak', () => {
      const svg = generateMountainPeakSvg(100, 200, 24, 28, 'mountain-medium');
      expect(svg).toContain('class="mountain-peak mountain-medium"');
      expect(svg).toContain('transform="translate(100,200)"');
      expect(svg).toContain('fill="#fcfbf6"'); // yoritilgan qirra
      expect(svg).toContain('fill="#c4b598"'); // soyali qirra
      expect(svg).toContain('stroke="#1c1a16"'); // peroli qalam chizig'i
    });

    it('Qorli choʻqqi (mountain-snow) uchun oq qor qalpogʻi poligonini qoʻshishi kerak', () => {
      const svg = generateMountainPeakSvg(100, 200, 30, 32, 'mountain-snow');
      expect(svg).toContain('fill="#ffffff"'); // qor qoplami
      expect(svg).toContain('stroke-width="0.85"');
    });

    it('isSnowCapped opciyasi yoqilganda qor qalpogʻi qoʻshilishi kerak', () => {
      const svg = generateMountainPeakSvg(100, 200, 30, 32, 'mountain-tall', { isSnowCapped: true });
      expect(svg).toContain('fill="#ffffff"');
    });

    it('Orodruin (volcano) vulqon krateri, magma va tutun shtrixini hosil qilishi kerak', () => {
      const svg = generateMountainPeakSvg(1400, 1450, 24, 30, 'volcano');
      expect(svg).toContain('class="mountain-orodruin"');
      expect(svg).toContain('fill="#c0392b"'); // qizil magma
      expect(svg).toContain('fill="#f39c12"'); // olov alangasi
      expect(svg).toContain('stroke="rgba(55, 45, 40, 0.45)"'); // kul tutuni
    });

    it('Erebor uchun 4 ta tarmoqlangan toshli tizma (spurs) va qorli choʻqqini hosil qilishi kerak', () => {
      const svg = generateMountainPeakSvg(1450, 480, 32, 38, 'erebor');
      expect(svg).toContain('class="mountain-erebor"');
      expect(svg).toContain('d="M 0,-11.2 Q -13.3,-3.2 -28.5,6"'); // g'arbiy tizma
      expect(svg).toContain('fill="#ffffff"'); // cho'qqi qori
    });

    it('Caradhras (Qizilshox) uchun xos qizil toshli jar chizigʻini qoʻllashi kerak', () => {
      const svgCaradhras = generateMountainPeakSvg(934, 564, 32, 36, 'mountain-snow', {
        name: 'Caradhras (Redhorn)',
        isSnowCapped: true,
      });
      expect(svgCaradhras).toContain('stroke="#872b22"'); // qizil toshli jar
    });
  });

  describe('4. Reusable Tree Symbol Definitions (generateTreeSymbolDefs)', () => {
    it('Barcha kanonik daraxt turlari uchun <g id="..."> identifikatorlarini yaratishi kerak', () => {
      const defs = generateTreeSymbolDefs();
      const expectedSymbols: TreeVariant[] = [
        'tree-conifer-mid',
        'tree-conifer-light',
        'tree-conifer-dark',
        'tree-mallorn-gold',
        'tree-fangorn',
        'tree-broadleaf',
        'tree-cluster',
      ];

      for (const symbolId of expectedSymbols) {
        expect(defs).toContain(`id="${symbolId}"`);
      }
    });

    it('Mallorn daraxti oltin rangli qoplama va tanaga ega boʻlishi kerak', () => {
      const defs = generateTreeSymbolDefs();
      expect(defs).toContain('fill="#9e893e"'); // Oltin mallorn
      expect(defs).toContain('fill="#baa44e"');
    });

    it('Fangorn daraxti qadimiy ent oʻrmoni ranglariga ega boʻlishi kerak', () => {
      const defs = generateTreeSymbolDefs();
      expect(defs).toContain('fill="#36492f"');
    });

    it('Daraxt klasteri (tree-cluster) 3 ta daraxt soyaboniga ega boʻlishi kerak', () => {
      const defs = generateTreeSymbolDefs();
      expect(defs).toContain('id="tree-cluster"');
      expect(defs).toContain('circle cx="-3.5"');
      expect(defs).toContain('circle cx="3.5"');
      expect(defs).toContain('circle cx="0"');
    });
  });

  describe('5. SVG Maps Vector Integrity & Enhanced Landmarks', () => {
    const mePath = join(process.cwd(), 'public', 'assets', 'maps', 'middle-earth-planar.svg');
    const belPath = join(process.cwd(), 'public', 'assets', 'maps', 'beleriand-planar.svg');

    it('Har ikkala xarita fayli mavjud boʻlishi va toʻgʻri oʻlchamlarga ega boʻlishi kerak', () => {
      expect(existsSync(mePath)).toBe(true);
      expect(existsSync(belPath)).toBe(true);

      const meContent = readFileSync(mePath, 'utf8');
      const belContent = readFileSync(belPath, 'utf8');

      expect(meContent).toContain('viewBox="0 0 2048 2048"');
      expect(belContent).toContain('viewBox="0 0 2048 1536"');
    });

    it('Oʻrta-yer xaritasida yaxshilangan kanonik joylar va relyef mavjud boʻlishi kerak', () => {
      const meContent = readFileSync(mePath, 'utf8');
      // Daraxt taʼriflari
      expect(meContent).toContain('id="tree-broadleaf"');
      expect(meContent).toContain('id="tree-cluster"');
      // Yaxshilangan relyef guruhlari
      expect(meContent).toContain('id="range-erebor"');
      expect(meContent).toContain('id="orodruin-crag"');
      expect(meContent).toContain('id="peak-caradhras"');
      expect(meContent).toContain('id="me-old-forest"');
      // Caradhras qizil toshli jarlik
      expect(meContent).toContain('#872b22');
    });

    it('Beleriand xaritasida Tangorodrim uchlik vulqon choʻqqilari mavjud boʻlishi kerak', () => {
      const belContent = readFileSync(belPath, 'utf8');
      expect(belContent).toContain('id="peaks-thangorodrim"');
      expect(belContent).toContain('id="range-ered-engrin"');
      expect(belContent).toContain('id="tree-broadleaf"');
      expect(belContent).toContain('id="tree-cluster"');
    });

    it('Har ikkala xaritada barcha aniqlangan daraxt ramzlari amalda <use> orqali chizilgan boʻlishi kerak', () => {
      for (const mapPath of [mePath, belPath]) {
        const content = readFileSync(mapPath, 'utf8');
        const defsMatch = content.match(/<defs>([\s\S]*?)<\/defs>/);
        expect(defsMatch).toBeDefined();
        const defsText = defsMatch && defsMatch[1] ? defsMatch[1] : '';

        const definedTreeIds = Array.from(defsText.matchAll(/id="(tree-[^"]+)"/g)).map((m) => m[1]);
        expect(definedTreeIds.length).toBeGreaterThan(0);

        for (const symId of definedTreeIds) {
          const usePattern = new RegExp(`<use[^>]*href="#${symId}"`);
          expect(
            usePattern.test(content),
            `${mapPath} ichidagi #${symId} ramzi hech qayerda <use> orqali chaqirilmagan (dead code)`
          ).toBe(true);
        }
      }
    });

    it('Har ikkala xaritada barcha <use href="#..."> murojaatlari mavjud <defs> ga mos kelishi kerak', () => {
      for (const mapPath of [mePath, belPath]) {
        const content = readFileSync(mapPath, 'utf8');
        const defsMatch = content.match(/<defs>([\s\S]*?)<\/defs>/);
        expect(defsMatch).toBeDefined();
        const defsText = defsMatch && defsMatch[1] ? defsMatch[1] : '';

        const allDefinedIds = new Set(Array.from(defsText.matchAll(/id="([^"]+)"/g)).map((m) => m[1]));
        const allUsedIds = Array.from(content.matchAll(/<use[^>]*href="#([^"]+)"/g)).map((m) => m[1]);

        for (const usedId of allUsedIds) {
          expect(
            allDefinedIds.has(usedId),
            `${mapPath} ichida #${usedId} chaqirilgan, ammo <defs> da aniqlanmagan`
          ).toBe(true);
        }
      }
    });

    it('SVG xarita fayllari gzipped 60 KB byudjetidan oshmasligi kerak', () => {
      const meGzip = gzipSync(readFileSync(mePath), { level: 9 }).length;
      const belGzip = gzipSync(readFileSync(belPath), { level: 9 }).length;

      // Byudjet: har bir xarita < 60 KB (61440 bayt)
      expect(meGzip).toBeLessThan(60 * 1024);
      expect(belGzip).toBeLessThan(60 * 1024);
    });
  });
});
