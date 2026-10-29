import { describe, it, expect } from 'vitest';
import {
  characterSchema,
  peopleSchema,
  placeSchema,
  eventSchema,
  bookSchema,
  uzbekEditionSchema,
  languageSchema,
  genealogySchema,
  cosmologySchema,
  articleSchema,
  textualStatusEnum,
} from '@/content/schemas';

describe('Zod Kontent Sxemalari Validatsiyasi', () => {
  describe('textualStatusEnum', () => {
    it('Faqat 4 ta tasdiqlangan manbashunoslik maqomini qabul qiladi', () => {
      expect(textualStatusEnum.safeParse('author_published').success).toBe(true);
      expect(textualStatusEnum.safeParse('posthumous_edited').success).toBe(true);
      expect(textualStatusEnum.safeParse('draft_variant').success).toBe(true);
      expect(textualStatusEnum.safeParse('disputed_variant').success).toBe(true);

      // Yaroqsiz qiymatlar rad etiladi
      expect(textualStatusEnum.safeParse('movie_canon').success).toBe(false);
      expect(textualStatusEnum.safeParse('fan_fiction').success).toBe(false);
    });
  });

  describe('characterSchema', () => {
    it('Toʻgʻri maʼlumotlarni muvaffaqiyatli validatsiya qiladi', () => {
      const validCharacter = {
        id: 'feanor',
        name: 'Fëanor',
        original_name: 'Curufinwë',
        mother_name: 'Míriel',
        aliases: ['Silmarillar yaratuvchisi'],
        titles: ['Noldor Oliy Qiroli'],
        race: 'elflar' as const,
        birth_year: 'YT 1169',
        death_year: 'FA 1',
        house_id: 'finwe-house',
        weapons_and_artifacts: ['Silmarillar'],
        primary_locations: ['Tirion', 'Formenos'],
        textual_status: 'author_published' as const,
        summary: 'Finwëning toʻngʻich oʻgʻli, tengsiz Noldor ustasi.',
        sources: [{ book_slug: 'silmarillion', chapter: 'Of Fëanor', page: '64' }],
        related_characters: ['finwe'],
        adaptations: [],
      };

      const result = characterSchema.safeParse(validCharacter);
      expect(result.success).toBe(true);
    });

    it('Xobbitlar (xobbitlar) irqini muvaffaqiyatli validatsiya qiladi', () => {
      const hobbit = {
        id: 'frodo-baggins',
        name: 'Frodo Baggins',
        original_name: 'Frodo Baggins',
        race: 'xobbitlar' as const,
        textual_status: 'author_published' as const,
        summary: 'Yagona Uzuk elchisi.',
        sources: [{ book_slug: 'the-lord-of-the-rings', chapter: 'The Shadow of the Past' }],
      };
      const result = characterSchema.safeParse(hobbit);
      expect(result.success).toBe(true);
    });

    it('sources boʻsh boʻlsa (kamida 1 ta manba talab qilinadi), rad etadi', () => {
      const invalidCharacter = {
        id: 'feanor',
        name: 'Fëanor',
        original_name: 'Curufinwë',
        race: 'elflar',
        textual_status: 'author_published',
        summary: 'Finwë oʻgʻli.',
        sources: [], // Boʻsh manba
      };

      const result = characterSchema.safeParse(invalidCharacter);
      expect(result.success).toBe(false);
    });

    it('Kengaytirilgan biografiya boʻlimlari va oilaviy shajara maydonlarini muvaffaqiyatli validatsiya qiladi', () => {
      const enrichedCharacter = {
        id: 'feanor',
        name: 'Fëanor',
        original_name: 'Curufinwë',
        father_name: 'Finwë',
        mother_name: 'Míriel Þerindë',
        spouse: 'Nerdanel',
        children: ['Maedhros', 'Maglor', 'Curufin'],
        aliases: ['Silmarillar yaratuvchisi'],
        titles: ['Noldor Oliy Qiroli'],
        race: 'elflar' as const,
        birth_year: 'YT 1169',
        death_year: 'FA 1',
        house_id: 'finwe-xonadoni',
        weapons_and_artifacts: ['Silmarillar'],
        primary_locations: ['Tirion', 'Formenos'],
        textual_status: 'author_published' as const,
        summary: 'Finwë va Mírielning toʻngʻich oʻgʻli, tengsiz Noldor ustasi.',
        etymology: 'Fëanáro — Olov ruhi.',
        biography_sections: [
          {
            title: 'Valinordagi kamolot',
            content: 'Fëanor yoshligidan tengsiz ixtirolar qildi.',
          },
        ],
        sources: [{ book_slug: 'silmarillion', chapter: 'Of Fëanor', page: '64' }],
        related_characters: ['finwe'],
        adaptations: [],
      };

      const result = characterSchema.safeParse(enrichedCharacter);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.father_name).toBe('Finwë');
        expect(result.data.spouse).toBe('Nerdanel');
        expect(result.data.children).toHaveLength(3);
        expect(result.data.biography_sections).toHaveLength(1);
        expect(result.data.etymology).toBe('Fëanáro — Olov ruhi.');
      }
    });
  });

  describe('peopleSchema', () => {
    it('Toʻgʻri maʼlumotlarni muvaffaqiyatli qabul qiladi', () => {
      const validPeople = {
        id: 'noldor',
        name: 'Noldor',
        other_names: ['Golodhrim'],
        race_category: 'elflar' as const,
        divisions_and_clans: ['Fëanor xonadoni'],
        associated_languages: ['quenya'],
        primary_realms: ['Valinor', 'Gondolin'],
        textual_status: 'author_published' as const,
        summary: 'Elflarning ikkinchi qabilasi.',
        sources: [{ book_slug: 'silmarillion', chapter: 'Of Eldamar' }],
      };

      expect(peopleSchema.safeParse(validPeople).success).toBe(true);
    });
  });

  describe('placeSchema', () => {
    it('Joy nomi va koordinatalarni toʻgʻri qabul qiladi', () => {
      const validPlace = {
        id: 'gondolin',
        name: 'Gondolin',
        elvish_name: 'Ondolindë',
        type: 'shahar' as const,
        region: 'beleriand' as const,
        coordinates: { map_id: 'beleriand-map', x: 500, y: 300 },
        textual_status: 'author_published' as const,
        summary: 'Yashirin shahar.',
        sources: [{ book_slug: 'silmarillion', chapter: 'Of Tuor' }],
      };

      expect(placeSchema.safeParse(validPlace).success).toBe(true);
    });
  });

  describe('eventSchema', () => {
    it('Tarixiy voqea va tomonlarni toʻgʻri tekshiradi', () => {
      const validEvent = {
        id: 'birinchi-qirgin',
        title: 'Birinchi Qarindosh Qirgʻini',
        era: 'daraxtlar_davri' as const,
        year_text: 'YT 1495',
        outcome: 'Noldor kemalarni egalladi.',
        textual_status: 'author_published' as const,
        sources: [{ book_slug: 'silmarillion', chapter: 'Flight of Noldor' }],
      };

      expect(eventSchema.safeParse(validEvent).success).toBe(true);
    });
  });

  describe('bookSchema', () => {
    it('Bibliografik kitob yozuvini tekshiradi', () => {
      const validBook = {
        id: 'silmarillion',
        title_uz: 'Silmarillion',
        title_original: 'The Silmarillion',
        aliases: ['Silmarillion', 'Ainulindale'],
        publication_year: 1977,
        publisher: 'Allen & Unwin',
        category: 'posthumous_reconstructed' as const,
        synopsis: 'Arda qadimiy afsonalari.',
        key_themes: ['Oʻlim va boqiylik'],
        uzbek_editions: [
          {
            title: 'Silmarillion',
            status: 'untranslated' as const,
            notes: 'Hozircha rasmiy nashri mavjud emas.',
          },
        ],
        translation_status_summary: 'Rasmiy oʻzbekcha nashri mavjud emas.',
      };

      const result = bookSchema.safeParse(validBook);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.aliases).toContain('Ainulindale');
        expect(result.data.uzbek_editions).toHaveLength(1);
        expect(result.data.uzbek_editions?.[0]?.status).toBe('untranslated');
      }
    });

    it('Oʻzbekcha nashrlar sxemasi (uzbekEditionSchema) nashr, tarjimon va yillarni toʻgʻri tekshiradi', () => {
      const validEdition = {
        title: 'Hobbit: Yoxud borgan va qaytgan sayohat',
        translator: 'Shavkat Joʻrayev',
        publisher: 'Yangi asr avlodi',
        year: 2021,
        format: 'Qattiq muqova',
        notes: 'Toʻliq adabiy nashr',
        status: 'published' as const,
      };

      const invalidEdition = {
        title: 'Notoʻgʻri holat',
        status: 'non_existent_status',
      };

      expect(uzbekEditionSchema.safeParse(validEdition).success).toBe(true);
      expect(uzbekEditionSchema.safeParse(invalidEdition).success).toBe(false);
    });
  });

  describe('languageSchema', () => {
    it('Til va yozuv tizimlarini toʻgʻri qabul qiladi', () => {
      const validLanguage = {
        id: 'quenya',
        name: 'Quenya',
        family: 'Eldarin',
        writing_systems: ['tengwar' as const, 'sarati' as const],
        phonology_overview: 'Lotin va fin ohanglariga yaqin.',
        textual_status: 'author_published' as const,
        sources: [{ book_slug: 'lotr', chapter: 'Appendix E' }],
      };

      expect(languageSchema.safeParse(validLanguage).success).toBe(true);
    });
  });

  describe('genealogySchema', () => {
    it('Shajara va aʼzolar roʻyxatini tekshiradi', () => {
      const validGenealogy = {
        id: 'finwe-house',
        title: 'Finwë xonadoni',
        house_name: 'Finwë xonadoni',
        founder_id: 'finwe',
        era: 'Daraxtlar davri',
        summary: 'Noldor sulolasi.',
        members: [
          {
            character_id: 'finwe',
            spouse_ids: ['miriel'],
            parent_ids: [],
            generation: 1,
            order: 1,
            is_uncertain: false,
          },
        ],
        branches: ['Feanor xonadoni'],
        sources: [{ book_slug: 'silmarillion', chapter: 'Of Eldamar' }],
      };

      expect(genealogySchema.safeParse(validGenealogy).success).toBe(true);
    });

    it('Aʼzolar roʻyxati boʻsh boʻlsa rad etadi', () => {
      const invalidGenealogy = {
        id: 'finwe-house',
        title: 'Finwë xonadoni',
        house_name: 'Finwë xonadoni',
        founder_id: 'finwe',
        era: 'Daraxtlar davri',
        summary: 'Noldor sulolasi.',
        members: [], // Kamida 1 ta a'zo kerak
        sources: [{ book_slug: 'silmarillion', chapter: 'Of Eldamar' }],
      };

      expect(genealogySchema.safeParse(invalidGenealogy).success).toBe(false);
    });
  });

  describe('cosmologySchema', () => {
    it('Kosmologiya tushunchasini toʻgʻri qabul qiladi', () => {
      const validCosmology = {
        id: 'muqaddas-nur',
        name: 'Muqaddas Nur',
        concept_type: 'primeval_light' as const,
        associated_ainur: ['varda'],
        textual_status: 'author_published' as const,
        summary: 'Ardadagi yaratilish nuri.',
        sources: [{ book_slug: 'silmarillion', chapter: 'Ainulindalë' }],
      };

      expect(cosmologySchema.safeParse(validCosmology).success).toBe(true);
    });
  });

  describe('articleSchema', () => {
    it('Ilmiy maqola maʼlumotlarini toʻgʻri qabul qiladi', () => {
      const validArticle = {
        id: 'olim-va-boqiylik-mavzusi',
        title: 'Oʻlim va Boqiylik Mavzusi',
        slug: 'olim-va-boqiylik-mavzusi',
        author: 'Tahririyat',
        published_date: '2026-10-11',
        category: 'falsafa_va_teologiya' as const,
        abstract: 'Insonlar foniyligi va elflar boqiyligi tahlili.',
        related_entities: ['feanor'],
        sources: [{ book_slug: 'letters', chapter: 'Letter 131' }],
      };

      expect(articleSchema.safeParse(validArticle).success).toBe(true);
    });
  });
});
