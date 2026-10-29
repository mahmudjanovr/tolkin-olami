import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import { bookSchema } from '../../src/content/schemas';
import {
  resolveEntityLink,
  resolveBookCitation,
  GENERATED_ENTITY_ROUTES,
  BOOK_CITATION_REGISTRY,
} from '../../src/utils/entity-resolver';

describe('Batch A: Books Encyclopedia Foundation (books-foundation.spec.ts)', () => {
  const booksDir = join(process.cwd(), 'src/content/books');

  describe('1. Kitoblar validatsiyasi va Hobbit sarlavhasi toʻgʻriligi', () => {
    it('Hobbit kitobi sarlavhasi adabiy meʼyorga muvofiq tuzatilgan boʻlishi kerak', () => {
      const hobbit = JSON.parse(readFileSync(join(booksDir, 'the-hobbit.json'), 'utf-8'));
      const parsed = bookSchema.safeParse(hobbit);
      expect(parsed.success).toBe(true);
      expect(hobbit.title_uz).toBe('Hobbit: Yoxud Borgan va Qaytgan Sayohat');
      expect(hobbit.title_original).toBe('The Hobbit, or There and Back Again');
    });

    it('Yangi 3 ta kanonik kitob (Húrin Farzandlari, Beren va Lúthien, Gondolin) toʻliq validatsiyadan oʻtishi kerak', () => {
      const newBookFiles = [
        'the-children-of-hurin.json',
        'beren-and-luthien.json',
        'the-fall-of-gondolin.json',
      ];

      for (const file of newBookFiles) {
        const json = JSON.parse(readFileSync(join(booksDir, file), 'utf-8'));
        const parsed = bookSchema.safeParse(json);
        if (!parsed.success) {
          console.error(`Validatsiya xatosi [books/${file}]:`, parsed.error.issues);
        }
        expect(parsed.success).toBe(true);
        expect(json.category).toBe('posthumous_reconstructed');
        expect(json.publisher).toBe('HarperCollins');
        expect(json.editor).toBe('Christopher Tolkien');
        expect(json.isbn).toBeDefined();
        expect(json.key_themes.length).toBeGreaterThanOrEqual(3);
      }
    });

    it('Katalogdagi barcha kitoblar soni kamida 13 ta boʻlishi kerak', () => {
      const files = readdirSync(booksDir).filter((f) => f.endsWith('.json'));
      expect(files.length).toBeGreaterThanOrEqual(13);
    });
  });

  describe('2. Marshrutlar va Entity Link Resolver integratsiyasi', () => {
    it('Yangi kitoblar resolveEntityLink orqali toʻgʻri /kitoblar/[slug]/ manziliga yechilishi kerak', () => {
      const hurin = resolveEntityLink('the-children-of-hurin');
      expect(hurin.isKnown).toBe(true);
      expect(hurin.href).toBe('/kitoblar/the-children-of-hurin/');

      const beren = resolveEntityLink('beren-and-luthien');
      expect(beren.isKnown).toBe(true);
      expect(beren.href).toBe('/kitoblar/beren-and-luthien/');

      const gondolin = resolveEntityLink('the-fall-of-gondolin');
      expect(gondolin.isKnown).toBe(true);
      expect(gondolin.href).toBe('/kitoblar/the-fall-of-gondolin/');

      const treeAndLeaf = resolveEntityLink('tree-and-leaf');
      expect(treeAndLeaf.isKnown).toBe(true);
      expect(treeAndLeaf.href).toBe('/kitoblar/tree-and-leaf/');

      const tomBombadil = resolveEntityLink('the-adventures-of-tom-bombadil');
      expect(tomBombadil.isKnown).toBe(true);
      expect(tomBombadil.href).toBe('/kitoblar/the-adventures-of-tom-bombadil/');

      const fallOfNumenor = resolveEntityLink('the-fall-of-numenor');
      expect(fallOfNumenor.isKnown).toBe(true);
      expect(fallOfNumenor.href).toBe('/kitoblar/the-fall-of-numenor/');

      const natureOfMe = resolveEntityLink('the-nature-of-middle-earth');
      expect(natureOfMe.isKnown).toBe(true);
      expect(natureOfMe.href).toBe('/kitoblar/the-nature-of-middle-earth/');
    });

    it('Yangi kitoblar va ularning sinonimlari resolveBookCitation orqali aniq Oksford metamaʼlumotlariga yechilishi kerak', () => {
      const hurinMeta = resolveBookCitation('the-children-of-hurin');
      expect(hurinMeta.title).toBe('The Children of Húrin');
      expect(hurinMeta.year).toBe(2007);
      expect(hurinMeta.href).toBe('/kitoblar/the-children-of-hurin/');

      const hurinAlias = resolveBookCitation('children-of-hurin');
      expect(hurinAlias.href).toBe('/kitoblar/the-children-of-hurin/');

      const berenMeta = resolveBookCitation('beren-and-luthien');
      expect(berenMeta.title).toBe('Beren and Lúthien');
      expect(berenMeta.year).toBe(2017);
      expect(berenMeta.href).toBe('/kitoblar/beren-and-luthien/');

      const gondolinMeta = resolveBookCitation('the-fall-of-gondolin');
      expect(gondolinMeta.title).toBe('The Fall of Gondolin');
      expect(gondolinMeta.year).toBe(2018);
      expect(gondolinMeta.href).toBe('/kitoblar/the-fall-of-gondolin/');

      const gondolinAlias = resolveBookCitation('fall-of-gondolin');
      expect(gondolinAlias.href).toBe('/kitoblar/the-fall-of-gondolin/');

      const numenorMeta = resolveBookCitation('the-fall-of-numenor');
      expect(numenorMeta.title).toBe('The Fall of Númenor');
      expect(numenorMeta.year).toBe(2022);
      expect(numenorMeta.href).toBe('/kitoblar/the-fall-of-numenor/');

      const natureMeta = resolveBookCitation('the-nature-of-middle-earth');
      expect(natureMeta.title).toBe('The Nature of Middle-earth');
      expect(natureMeta.year).toBe(2021);
      expect(natureMeta.href).toBe('/kitoblar/the-nature-of-middle-earth/');
    });

    it('Mavjud kitoblar va ularning sinonimlari saqlangan boʻlishi kerak', () => {
      expect(BOOK_CITATION_REGISTRY['silmarillion']).toBeDefined();
      expect(BOOK_CITATION_REGISTRY['lotr']).toBeDefined();
      expect(BOOK_CITATION_REGISTRY['lotr-fellowship']).toBeDefined();
      expect(BOOK_CITATION_REGISTRY['lotr-towers']).toBeDefined();
      expect(BOOK_CITATION_REGISTRY['lotr-return']).toBeDefined();
      expect(BOOK_CITATION_REGISTRY['the-hobbit']).toBeDefined();
      expect(BOOK_CITATION_REGISTRY['hobbit']).toBeDefined();
      expect(BOOK_CITATION_REGISTRY['unfinished-tales']).toBeDefined();
      expect(BOOK_CITATION_REGISTRY['letters-of-jrr-tolkien']).toBeDefined();
      expect(BOOK_CITATION_REGISTRY['history-of-middle-earth']).toBeDefined();
    });

    it('GENERATED_ENTITY_ROUTES dagi kitoblar marshrutlari toʻgʻri formatlangan boʻlishi kerak', () => {
      const bookSlugs = [
        'the-children-of-hurin',
        'beren-and-luthien',
        'the-fall-of-gondolin',
        'tree-and-leaf',
        'the-adventures-of-tom-bombadil',
        'the-fall-of-numenor',
        'the-nature-of-middle-earth',
      ];
      for (const slug of bookSlugs) {
        expect(GENERATED_ENTITY_ROUTES[slug]).toBe(`/kitoblar/${slug}/`);
      }
    });
  });

  describe('3. Asosiy navigatsiya (NavigationFoundation) integratsiyasi', () => {
    it('NavigationFoundation.astro faylida Kitoblar boʻlimi mavjud boʻlishi kerak', () => {
      const navFile = readFileSync(
        join(process.cwd(), 'src/components/NavigationFoundation.astro'),
        'utf-8'
      );
      expect(navFile).toContain("href: '/kitoblar/'");
      expect(navFile).toContain("label: 'Kitoblar'");
    });
  });

  describe('4. Oʻzbekcha nashrlar va takomillashtirilgan taksonomiya (Uzbek Translations & Taxonomy)', () => {
    it('Barcha 9 ta kitob muqobil nomlar (aliases) va tarjima holati xulosasiga ega boʻlishi kerak', () => {
      const files = readdirSync(booksDir).filter((f) => f.endsWith('.json'));
      expect(files.length).toBeGreaterThanOrEqual(9);

      for (const file of files) {
        const json = JSON.parse(readFileSync(join(booksDir, file), 'utf-8'));
        const parsed = bookSchema.safeParse(json);
        expect(parsed.success).toBe(true);
        expect(Array.isArray(json.aliases)).toBe(true);
        expect(json.aliases.length).toBeGreaterThanOrEqual(2);
        expect(typeof json.translation_status_summary).toBe('string');
        expect(json.translation_status_summary.length).toBeGreaterThan(10);
      }
    });

    it('Hobbit kitobida rasmiy oʻzbekcha nashr (Yangi asr avlodi, 2021) qayd etilgan boʻlishi kerak', () => {
      const hobbit = JSON.parse(readFileSync(join(booksDir, 'the-hobbit.json'), 'utf-8'));
      expect(hobbit.uzbek_editions).toBeDefined();
      expect(hobbit.uzbek_editions.length).toBeGreaterThanOrEqual(1);

      const published = hobbit.uzbek_editions.find((e: any) => e.status === 'published');
      expect(published).toBeDefined();
      expect(published.translator).toBe('Shavkat Joʻrayev');
      expect(published.publisher).toBe('Yangi asr avlodi');
      expect(published.year).toBe(2021);
      expect(published.status).toBe('published');
    });

    it('Uzuklar Hukmdori kitobida tarjima jarayoni (in_progress) holati toʻgʻri aks etishi kerak', () => {
      const lotr = JSON.parse(readFileSync(join(booksDir, 'the-lord-of-the-rings.json'), 'utf-8'));
      expect(lotr.uzbek_editions).toBeDefined();
      const inProgress = lotr.uzbek_editions.find((e: any) => e.status === 'in_progress');
      expect(inProgress).toBeDefined();
      expect(inProgress.status).toBe('in_progress');
    });

    it('Rasmiy tarjimasi boʻlmagan asarlarda untranslated statusi va ilmiy izoh mavjud boʻlishi kerak', () => {
      const untranslatedFiles = [
        'silmarillion.json',
        'the-children-of-hurin.json',
        'beren-and-luthien.json',
        'the-fall-of-gondolin.json',
        'unfinished-tales.json',
        'history-of-middle-earth.json',
        'letters-of-jrr-tolkien.json',
      ];

      for (const file of untranslatedFiles) {
        const json = JSON.parse(readFileSync(join(booksDir, file), 'utf-8'));
        expect(json.uzbek_editions).toBeDefined();
        const untranslated = json.uzbek_editions.find((e: any) => e.status === 'untranslated');
        expect(untranslated).toBeDefined();
        expect(untranslated.notes).toBeDefined();
        expect(untranslated.notes.length).toBeGreaterThan(20);
      }
    });
  });
});
