import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import {
  matchesBookSlug,
  resolveCanonicalRoute,
  findReverseReferences,
  groupReverseReferences,
  type GenericContentEntry,
} from '../../src/utils/reverse-citations';

describe('Batch B: Reverse Citations and Bibliographic Integrity (reverse-citations.spec.ts)', () => {
  const rootDir = process.cwd();

  describe('1. Direct matches on canonical book slugs', () => {
    it('Barcha 13 ta kanonik kitob sluglari toʻgʻridan-toʻgʻri oʻziga toʻliq mos tushishi kerak', () => {
      const canonicalSlugs = [
        'the-lord-of-the-rings',
        'the-hobbit',
        'silmarillion',
        'unfinished-tales',
        'letters-of-jrr-tolkien',
        'history-of-middle-earth',
        'the-children-of-hurin',
        'beren-and-luthien',
        'the-fall-of-gondolin',
        'tree-and-leaf',
        'the-adventures-of-tom-bombadil',
        'the-fall-of-numenor',
        'the-nature-of-middle-earth',
      ];

      for (const slug of canonicalSlugs) {
        expect(matchesBookSlug(slug, slug)).toBe(true);
      }
    });

    it('Katta-kichik harflar va chetki boʻshliqlar xavfsiz normalizatsiya qilinishi kerak', () => {
      expect(matchesBookSlug('  THE-LORD-OF-THE-RINGS  ', 'the-lord-of-the-rings')).toBe(true);
      expect(matchesBookSlug('The-Hobbit', 'the-hobbit')).toBe(true);
      expect(matchesBookSlug('silmarillion', '  SILMARILLION  ')).toBe(true);
    });

    it('Bir-biriga mos kelmaydigan kitoblar false qaytarishi shart', () => {
      expect(matchesBookSlug('the-hobbit', 'the-lord-of-the-rings')).toBe(false);
      expect(matchesBookSlug('silmarillion', 'unfinished-tales')).toBe(false);
    });
  });

  describe('2. Existing aliases resolved to the correct canonical book', () => {
    it('Uzuklar Hukmdori sinonimlari (lotr, lotr-fellowship, lotr-towers, lotr-return) the-lord-of-the-rings ga yechilishi kerak', () => {
      const target = 'the-lord-of-the-rings';
      expect(matchesBookSlug('lotr', target)).toBe(true);
      expect(matchesBookSlug('lotr-fellowship', target)).toBe(true);
      expect(matchesBookSlug('lotr-towers', target)).toBe(true);
      expect(matchesBookSlug('lotr-return', target)).toBe(true);
    });

    it('Boshqa kitoblar sinonimlari (hobbit, the-silmarillion, children-of-hurin, fall-of-gondolin, on-fairy-stories, fall-of-numenor, nature-of-middle-earth) toʻgʻri yechilishi kerak', () => {
      expect(matchesBookSlug('hobbit', 'the-hobbit')).toBe(true);
      expect(matchesBookSlug('the-silmarillion', 'silmarillion')).toBe(true);
      expect(matchesBookSlug('children-of-hurin', 'the-children-of-hurin')).toBe(true);
      expect(matchesBookSlug('fall-of-gondolin', 'the-fall-of-gondolin')).toBe(true);
      expect(matchesBookSlug('on-fairy-stories', 'tree-and-leaf')).toBe(true);
      expect(matchesBookSlug('fall-of-numenor', 'the-fall-of-numenor')).toBe(true);
      expect(matchesBookSlug('nature-of-middle-earth', 'the-nature-of-middle-earth')).toBe(true);
    });
  });

  describe('3. Deduplication of repeated references', () => {
    it('Bitta entiti ayni kitobning bir nechta bobiga havola qilganda faqat 1 ta yozuv qaytishi kerak', () => {
      const entries: GenericContentEntry[] = [
        {
          id: 'aragorn',
          collection: 'characters',
          title: 'Aragorn II Elessar',
          sources: [
            { book_slug: 'the-lord-of-the-rings', chapter: 'A Knife in the Dark' },
            { book_slug: 'lotr-fellowship', chapter: 'The Council of Elrond' },
            { book_slug: 'lotr', chapter: 'The Passing of the Grey Company' },
          ],
        },
      ];

      const refs = findReverseReferences('the-lord-of-the-rings', entries);
      expect(refs).toHaveLength(1);
      expect(refs[0]!.id).toBe('aragorn');
      expect(refs[0]!.chapters).toEqual([
        'A Knife in the Dark',
        'The Council of Elrond',
        'The Passing of the Grey Company',
      ]);
    });

    it('Bir xil statik marshrutga ega ikkita yozuv bitta kanonik havola sifatida birlashishi shart', () => {
      const entries: GenericContentEntry[] = [
        {
          id: 'aragorn',
          collection: 'characters',
          title: 'Aragorn II',
          sources: [{ book_slug: 'the-lord-of-the-rings', chapter: 'Chapter 1' }],
        },
        {
          id: 'aragorn',
          collection: 'characters',
          title: 'Aragorn II Elessar',
          sources: [{ book_slug: 'the-lord-of-the-rings', chapter: 'Chapter 2' }],
        },
      ];

      const refs = findReverseReferences('the-lord-of-the-rings', entries);
      expect(refs).toHaveLength(1);
      expect(refs[0]!.href).toBe('/qahramonlar/aragorn/');
      expect(refs[0]!.chapters).toEqual(['Chapter 1', 'Chapter 2']);
    });
  });

  describe('4. Missing or invalid optional references', () => {
    it('book_slug maydoni boʻlmagan yoki boʻsh boʻlgan manbalar xavfsiz oʻtkazib yuborilishi kerak', () => {
      const entries: GenericContentEntry[] = [
        {
          id: 'test-entity',
          collection: 'characters',
          title: 'Test Entity',
          sources: [
            { chapter: 'Intro only without book_slug' } as any,
            { book_slug: '', chapter: 'Empty slug' },
            { book_slug: '   ', chapter: 'Whitespace slug' },
            null as any,
          ],
        },
      ];

      const refs = findReverseReferences('the-lord-of-the-rings', entries);
      expect(refs).toHaveLength(0);
    });

    it('chapter yoki notes mavjud boʻlmagan manbalar xatosiz qayta ishlanishi kerak', () => {
      const entries: GenericContentEntry[] = [
        {
          id: 'elrond',
          collection: 'characters',
          title: 'Elrond',
          sources: [
            { book_slug: 'the-lord-of-the-rings' } as any,
          ],
        },
      ];

      const refs = findReverseReferences('the-lord-of-the-rings', entries);
      expect(refs).toHaveLength(1);
      expect(refs[0]!.chapters).toHaveLength(0);
    });
  });

  describe('5. Entries without a sources field', () => {
    it('sources maydoni undefined, null yoki boʻsh boʻlgan entitilar xatosiz qabul qilinishi kerak', () => {
      const entries: GenericContentEntry[] = [
        { id: 'entity-1', collection: 'characters', title: 'E1' },
        { id: 'entity-2', collection: 'characters', title: 'E2', sources: undefined },
        { id: 'entity-3', collection: 'characters', title: 'E3', sources: null as any },
        { id: 'entity-4', collection: 'characters', title: 'E4', sources: [] },
        { id: 'entity-5', collection: 'characters', title: 'E5', sources: 'not-an-array' as any },
      ];

      expect(() => findReverseReferences('the-lord-of-the-rings', entries)).not.toThrow();
      const refs = findReverseReferences('the-lord-of-the-rings', entries);
      expect(refs).toHaveLength(0);
    });
  });

  describe('6. Empty reverse-reference results', () => {
    it('Havola qilinmagan kitob uchun boʻsh massiv qaytishi kerak', () => {
      const entries: GenericContentEntry[] = [
        {
          id: 'frodo',
          collection: 'characters',
          title: 'Frodo',
          sources: [{ book_slug: 'the-lord-of-the-rings', chapter: 'Mount Doom' }],
        },
      ];

      const refs = findReverseReferences('the-children-of-hurin', entries);
      expect(refs).toEqual([]);
    });

    it('groupReverseReferences boʻsh massiv qabul qilganda xavfsiz boʻsh guruh qaytarishi kerak', () => {
      expect(groupReverseReferences([])).toEqual([]);
      expect(groupReverseReferences(undefined as any)).toEqual([]);
    });
  });

  describe('7. Correct canonical URLs', () => {
    it('Barcha qoʻllab-quvvatlanadigan toʻplamlar toʻgʻri statik marshrutlarga yechilishi kerak', () => {
      expect(resolveCanonicalRoute({ id: 'aragorn', collection: 'characters' })).toBe(
        '/qahramonlar/aragorn/'
      );
      expect(resolveCanonicalRoute({ id: 'halqa-urushi', collection: 'events' })).toBe(
        '/tarix/halqa-urushi/'
      );
      expect(resolveCanonicalRoute({ id: 'noldor', collection: 'peoples' })).toBe(
        '/xalqlar-va-tillar/noldor/'
      );
      expect(resolveCanonicalRoute({ id: 'sindarin', collection: 'languages' })).toBe(
        '/xalqlar-va-tillar/sindarin/'
      );
      expect(
        resolveCanonicalRoute({ id: 'feanor-qasamyodi-tahlili', collection: 'articles', slug: 'feanor-qasamyodi-tahlili' })
      ).toBe('/maqolalar/feanor-qasamyodi-tahlili/');
      expect(
        resolveCanonicalRoute({ id: 'jrr-tolkien-tarjimai-hol', collection: 'articles' })
      ).toBe('/tolkien/tarjimai-hol/');
      expect(resolveCanonicalRoute({ id: 'finwe-xonadoni', collection: 'genealogies' })).toBe(
        '/nasabnomalar/finwe-xonadoni/'
      );
      expect(resolveCanonicalRoute({ id: 'ea', collection: 'cosmology' })).toBe('/olam/ea/');
    });

    it('Toponimlar faqat GENERATED_ENTITY_ROUTES roʻyxatida boʻlsa marshrutga ega boʻlishi kerak', () => {
      // Roʻyxatda bor toponim
      expect(resolveCanonicalRoute({ id: 'amon-sul', collection: 'places' })).toBe(
        '/xaritalar/?joy=amon-sul'
      );
      // Alohida marshruti boʻlmagan toponim
      expect(resolveCanonicalRoute({ id: 'unmapped-place', collection: 'places' })).toBeUndefined();
    });

    it('findReverseReferences orqali olingan har bir havola / bilan boshlanishi shart', () => {
      const entries: GenericContentEntry[] = [
        {
          id: 'gandalf',
          collection: 'characters',
          title: 'Gandalf',
          sources: [{ book_slug: 'the-hobbit', chapter: 'An Unexpected Party' }],
        },
      ];

      const refs = findReverseReferences('the-hobbit', entries);
      expect(refs).toHaveLength(1);
      expect(refs[0]!.href.startsWith('/')).toBe(true);
    });
  });

  describe('8. Removal of the artificial self-citation while retaining bibliographic metadata', () => {
    it('kitoblar/[slug].astro faylida selfSource olib tashlangan boʻlishi kerak', () => {
      const pageCode = readFileSync(
        join(rootDir, 'src/pages/kitoblar/[slug].astro'),
        'utf-8'
      );

      expect(pageCode).not.toContain('const selfSource');
      expect(pageCode).toContain('sources={[]}');
      expect(pageCode).toContain('ReverseCitationsBlock');
    });

    it('Kitob sahifasida bibliografik metamaʼlumotlar toʻliq saqlangan boʻlishi kerak', () => {
      const pageCode = readFileSync(
        join(rootDir, 'src/pages/kitoblar/[slug].astro'),
        'utf-8'
      );

      expect(pageCode).toContain('data.publisher');
      expect(pageCode).toContain('data.publication_year');
      expect(pageCode).toContain('data.editor');
      expect(pageCode).toContain('data.isbn');
      expect(pageCode).toContain('categoryLabels[data.category]');
    });

    it('EntityLayout da sources.length > 0 boʻlgandagina citations-card chiqarilishi kerak', () => {
      const entityLayoutCode = readFileSync(
        join(rootDir, 'src/layouts/EntityLayout.astro'),
        'utf-8'
      );

      expect(entityLayoutCode).toContain('sources && sources.length > 0');
    });

    it('CitationBlock komponenti boʻsh sources uzatilganda hech narsa render qilmasligi kerak', () => {
      const citationBlockCode = readFileSync(
        join(rootDir, 'src/components/editorial/CitationBlock.astro'),
        'utf-8'
      );

      expect(citationBlockCode).toContain('sources.length > 0');
    });

    it('Qahramonlar va boshqa entitilarda CitationBlock odatiy ishlashda davom etishi shart', () => {
      const charPageCode = readFileSync(
        join(rootDir, 'src/pages/qahramonlar/[slug].astro'),
        'utf-8'
      );

      expect(charPageCode).toContain('sources={data.sources}');
    });
  });
});
