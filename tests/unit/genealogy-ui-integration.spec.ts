import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { CHARACTER_REGISTRY, getCharacterMeta } from '../../src/utils/genealogy/character-registry';
import { calculateTreeLayout } from '../../src/utils/genealogy/layout';
import type { GenealogyMemberInput } from '../../src/utils/genealogy/relations';
import { genealogySchema } from '../../src/content/schemas';

describe('Genealogy Atlas UI & Data Integratsiyasi (genealogy-ui-integration.spec.ts)', () => {
  const genealogiesDir = join(process.cwd(), 'src/content/genealogies');
  const files = readdirSync(genealogiesDir).filter((f) => f.endsWith('.json'));

  describe('1. Barcha 4 ta sulolaning toʻliq qamrovi va layout hisob-kitobi', () => {
    it('Kamida 4 ta sulola mavjud boʻlishi va har biri xatosiz TreeLayout qaytarishi shart', () => {
      expect(files.length).toBeGreaterThanOrEqual(4);

      for (const file of files) {
        const filePath = join(genealogiesDir, file);
        const data = genealogySchema.parse(JSON.parse(readFileSync(filePath, 'utf-8')));

        const layout = calculateTreeLayout(data.members as GenealogyMemberInput[]);

        expect(layout.nodes.length).toBe(data.members.length);
        expect(layout.links.length).toBeGreaterThan(0);
        expect(layout.dimensions.width).toBeGreaterThan(300);
        expect(layout.dimensions.height).toBeGreaterThan(200);

        // Hech qanday tugun o'lchamlardan tashqariga chiqmasligi kerak
        for (const node of layout.nodes) {
          expect(node.x).toBeGreaterThanOrEqual(0);
          expect(node.x + node.width).toBeLessThanOrEqual(layout.dimensions.width);
          expect(node.y).toBeGreaterThanOrEqual(0);
          expect(node.y + node.height).toBeLessThanOrEqual(layout.dimensions.height);
        }
      }
    });

    it('Bir xil avloddagi tugunlar oʻzaro ustma-ust tushmasligi (no horizontal overlap) shart', () => {
      for (const file of files) {
        const filePath = join(genealogiesDir, file);
        const data = genealogySchema.parse(JSON.parse(readFileSync(filePath, 'utf-8')));
        const layout = calculateTreeLayout(data.members as GenealogyMemberInput[]);

        // Avlodlar bo'yicha guruhlash
        const genMap = new Map<number, typeof layout.nodes>();
        for (const node of layout.nodes) {
          const list = genMap.get(node.generation) || [];
          list.push(node);
          genMap.set(node.generation, list);
        }

        for (const [, nodesInGen] of genMap.entries()) {
          const sorted = [...nodesInGen].sort((a, b) => a.x - b.x);
          for (let i = 0; i < sorted.length - 1; i++) {
            const current = sorted[i];
            const next = sorted[i + 1];
            expect(current).toBeDefined();
            expect(next).toBeDefined();
            if (current && next) {
              expect(next.x).toBeGreaterThanOrEqual(current.x + current.width);
            }
          }
        }
      }
    });
  });

  describe('2. Kanonik Qahramonlar Registri (CHARACTER_REGISTRY) toʻliqligi', () => {
    it('Barcha 4 ta suloladagi har bir aʼzo registrda toʻliq ilmiy metamaʼlumotlarga ega boʻlishi kerak', () => {
      for (const file of files) {
        const filePath = join(genealogiesDir, file);
        const data = genealogySchema.parse(JSON.parse(readFileSync(filePath, 'utf-8')));

        for (const member of data.members) {
          const regEntry = CHARACTER_REGISTRY[member.character_id];
          expect(
            regEntry,
            `Qahramon "${member.character_id}" [${file}] registrda mavjud emas!`
          ).toBeDefined();

          if (regEntry) {
            expect(regEntry.name.trim().length).toBeGreaterThan(0);
            expect(regEntry.dates.trim().length).toBeGreaterThan(0);
            expect(regEntry.citation.work.trim().length).toBeGreaterThan(0);
            expect(regEntry.citation.section.trim().length).toBeGreaterThan(0);
          }
        }
      }
    });

    it('getCharacterMeta mavjud boʻlmagan ID lar uchun ham xavfsiz zaxira qaytarishi lozim', () => {
      const fallback = getCharacterMeta('noma-lum-shaxs');
      expect(fallback.id).toBe('noma-lum-shaxs');
      expect(fallback.name).toBe('Noma Lum Shaxs');
      expect(fallback.dates).toBe('Nomaʼlum');
    });
  });

  describe('3. Matnshunoslik Noaniqliklari va Koʻprik Ajdodlar (Textual Uncertainty & Bridges)', () => {
    it('Gil-galad uchun isUncertain true va Christopher Tolkien matn tarixi izohi saqlanishi kerak', () => {
      const finweFile = join(genealogiesDir, 'finwe-xonadoni.json');
      const data = genealogySchema.parse(JSON.parse(readFileSync(finweFile, 'utf-8')));
      const layout = calculateTreeLayout(data.members as GenealogyMemberInput[]);

      const gilGaladNode = layout.nodes.find((n) => n.id === 'gil-galad');
      expect(gilGaladNode).toBeDefined();
      expect(gilGaladNode?.isUncertain).toBe(true);
      expect(gilGaladNode?.uncertaintyNotes).toContain('Silmarillion');
      expect(gilGaladNode?.uncertaintyNotes).toContain('Shibboleth');

      const uncertainLink = layout.links.find((l) => l.toId === 'gil-galad');
      expect(uncertainLink).toBeDefined();
      expect(uncertainLink?.isUncertain).toBe(true);
    });

    it('Toʻgʻridan-toʻgʻri ota-onasi roʻyxatda boʻlmagan aʼzolar uchun koʻprik izohi (bridgeNote) shakllanishi kerak', () => {
      const finweFile = join(genealogiesDir, 'finwe-xonadoni.json');
      const data = genealogySchema.parse(JSON.parse(readFileSync(finweFile, 'utf-8')));
      const layout = calculateTreeLayout(data.members as GenealogyMemberInput[]);

      const celebrimborNode = layout.nodes.find((n) => n.id === 'celebrimbor');
      expect(celebrimborNode).toBeDefined();
      expect(celebrimborNode?.bridgeNote).toBeDefined();
      expect(celebrimborNode?.bridgeNote).toContain('Curufin');
    });
  });

  describe('4. URL va Inspektorni Bir Marta Bosishda Yopish Holati', () => {
    it('Shaxs tanlanganda URL ga shaxs parametri qoʻshilishi va yopilganda faqat shaxs parametri oʻchirilishi kerak', () => {
      let currentUrl = 'https://tolkien-olami.uz/nasabnomalar/?sulola=rohan-shohlari&uslub=daraxt';

      const selectPerson = (urlStr: string, personId: string) => {
        const u = new URL(urlStr);
        u.searchParams.set('shaxs', personId);
        return u.toString();
      };

      const closeInspector = (urlStr: string) => {
        const u = new URL(urlStr);
        u.searchParams.delete('shaxs');
        return u.toString();
      };

      // 1. Théoden tanlanadi
      currentUrl = selectPerson(currentUrl, 'theoden');
      const params1 = new URL(currentUrl).searchParams;
      expect(params1.get('sulola')).toBe('rohan-shohlari');
      expect(params1.get('shaxs')).toBe('theoden');
      expect(params1.get('uslub')).toBe('daraxt');

      // 2. Éomer tanlanadi (Inspektor yangilanadi)
      currentUrl = selectPerson(currentUrl, 'eomer');
      const params2 = new URL(currentUrl).searchParams;
      expect(params2.get('sulola')).toBe('rohan-shohlari');
      expect(params2.get('shaxs')).toBe('eomer');

      // 3. Bir marta bosishda yopiladi (closeInspector)
      currentUrl = closeInspector(currentUrl);
      const params3 = new URL(currentUrl).searchParams;
      expect(params3.get('shaxs')).toBeNull();
      expect(params3.get('sulola')).toBe('rohan-shohlari');
      expect(params3.get('uslub')).toBe('daraxt');
    });
  });
});
