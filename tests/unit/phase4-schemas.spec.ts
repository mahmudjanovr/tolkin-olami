import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { genealogySchema, placeSchema } from '../../src/content/schemas';
import { isPointInBounds } from '../../src/utils/atlas/coordinates';
import { getMapDefinition, isValidMapId } from '../../src/utils/atlas/map-registry';
import { getUncertainMembers } from '../../src/utils/genealogy/relations';

describe('Phase 4 Schemas va Kontent Butunligi Sinovlari (phase4-schemas.spec.ts)', () => {
  const placesDir = join(process.cwd(), 'src/content/places');
  const genealogiesDir = join(process.cwd(), 'src/content/genealogies');

  describe('Joy Nomlari va Xaritalar Sxemasi (placeSchema)', () => {
    const placeFiles = readdirSync(placesDir).filter((file) => file.endsWith('.json'));

    it('Kamida 6 ta rasmiy toponim fayllari mavjud boʻlishi kerak', () => {
      expect(placeFiles.length).toBeGreaterThanOrEqual(6);
      expect(placeFiles).toContain('gondolin.json');
      expect(placeFiles).toContain('menegroth.json');
      expect(placeFiles).toContain('nargothrond.json');
      expect(placeFiles).toContain('rivendell.json');
      expect(placeFiles).toContain('minas-tirith.json');
      expect(placeFiles).toContain('barad-dur.json');
    });

    it('Har bir toponim placeSchema qoidalariga 100% javob berishi kerak', () => {
      for (const file of placeFiles) {
        const filePath = join(placesDir, file);
        const jsonContent = JSON.parse(readFileSync(filePath, 'utf-8'));
        const parseResult = placeSchema.safeParse(jsonContent);

        if (!parseResult.success) {
          console.error(`Validatsiya xatosi [${file}]:`, parseResult.error.issues);
        }

        expect(parseResult.success).toBe(true);
      }
    });

    it('Koordinataga ega toponimlar roʻyxatdan oʻtgan xaritaga bogʻlangan va uning chegaralarida boʻlishi shart', () => {
      for (const file of placeFiles) {
        const filePath = join(placesDir, file);
        const data = placeSchema.parse(JSON.parse(readFileSync(filePath, 'utf-8')));

        if (data.coordinates) {
          const mapId = data.coordinates.map_id;
          expect(isValidMapId(mapId)).toBe(true);

          const mapDef = getMapDefinition(mapId);
          expect(mapDef).toBeDefined();

          const inBounds = isPointInBounds(
            { x: data.coordinates.x, y: data.coordinates.y },
            mapDef!.dimensions
          );

          expect(inBounds).toBe(true);
        }
      }
    });
  });

  describe('Nasabnomalar va Shajaralar Sxemasi (genealogySchema)', () => {
    const genealogyFiles = readdirSync(genealogiesDir).filter((file) => file.endsWith('.json'));

    it('Kamida 4 ta shohona sulola fayllari mavjud boʻlishi kerak', () => {
      expect(genealogyFiles.length).toBeGreaterThanOrEqual(4);
      expect(genealogyFiles).toContain('finwe-xonadoni.json');
      expect(genealogyFiles).toContain('elros-va-gondor-shohlari.json');
      expect(genealogyFiles).toContain('rohan-shohlari.json');
      expect(genealogyFiles).toContain('durin-avlodlari.json');
    });

    it('Har bir sulola genealogySchema talablaridan xatosiz oʻtishi kerak', () => {
      for (const file of genealogyFiles) {
        const filePath = join(genealogiesDir, file);
        const jsonContent = JSON.parse(readFileSync(filePath, 'utf-8'));
        const parseResult = genealogySchema.safeParse(jsonContent);

        if (!parseResult.success) {
          console.error(`Validatsiya xatosi [${file}]:`, parseResult.error.issues);
        }

        expect(parseResult.success).toBe(true);
      }
    });

    it('Har bir sulolada kamida 5 ta aʼzo boʻlishi va avlodlar tartibi (generation >= 1) toʻgʻri boʻlishi kerak', () => {
      for (const file of genealogyFiles) {
        const filePath = join(genealogiesDir, file);
        const data = genealogySchema.parse(JSON.parse(readFileSync(filePath, 'utf-8')));

        expect(data.members.length).toBeGreaterThanOrEqual(5);

        for (const member of data.members) {
          expect(member.generation).toBeGreaterThanOrEqual(1);
          expect(member.order).toBeGreaterThanOrEqual(1);
        }
      }
    });

    it('Matniy noaniqlikka ega aʼzolar (is_uncertain === true) albatta uncertainty_notes ga ega boʻlishi shart', () => {
      for (const file of genealogyFiles) {
        const filePath = join(genealogiesDir, file);
        const data = genealogySchema.parse(JSON.parse(readFileSync(filePath, 'utf-8')));
        const uncertainMembers = getUncertainMembers(data.members);

        for (const member of uncertainMembers) {
          expect(member.uncertainty_notes).toBeDefined();
          expect(member.uncertainty_notes!.trim().length).toBeGreaterThan(15);
        }
      }
    });

    it('Har bir sulola va joy manbalarida (sources) kamida bitta Oksford iqtibosiga ega boʻlishi shart', () => {
      for (const file of genealogyFiles) {
        const filePath = join(genealogiesDir, file);
        const data = genealogySchema.parse(JSON.parse(readFileSync(filePath, 'utf-8')));
        expect(data.sources.length).toBeGreaterThanOrEqual(1);
        expect(data.sources[0]?.chapter.length).toBeGreaterThan(0);
      }
    });
  });
});
