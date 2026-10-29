import { z } from 'astro/zod';

// ==========================================================================
// 1. Umumiy Matn Manbashunosligi Maqomi (Textual Provenance Enum)
// ==========================================================================
export const textualStatusEnum = z.enum([
  'author_published',     // Muallif hayotligidagi nashrlar (Hobbit, LotR)
  'posthumous_edited',    // Christopher Tolkien tahrirlari (Silmarillion, UT)
  'draft_variant',        // Qoralamalar va matn tarixi (HoME)
  'disputed_variant',     // Ziddiyatli/o'zgaruvchan masalalar (O'rklar, Gil-galad kelib chiqishi)
]);

export type TextualStatus = z.infer<typeof textualStatusEnum>;

// ==========================================================================
// 2. Oksford Iqtibos Ma'lumotnomasi (Oxford Citation Reference)
// ==========================================================================
export const sourceRefSchema = z.object({
  book_slug: z.string(),
  chapter: z.string(),
  page: z.string().optional(),
  notes: z.string().optional(),
});

export type SourceRef = z.infer<typeof sourceRefSchema>;

// ==========================================================================
// 3. Tashqi Zamonaviy Moslashuvlar (Matn kanonidan ajratilgan)
// ==========================================================================
export const adaptationItemSchema = z.object({
  medium: z.enum(['film', 'series', 'game', 'radio', 'stage']),
  title: z.string(),
  creator: z.string(),
  year: z.number(),
  divergence_notes: z.string(),
});

export type AdaptationItem = z.infer<typeof adaptationItemSchema>;

export const characterImageSchema = z.object({
  src: z.string(),
  src_thumb: z.string().optional(),
  alt: z.string(),
  caption: z.string().optional(),
});

export type CharacterImage = z.infer<typeof characterImageSchema>;

// ==========================================================================
// 4. Qahramonlar Sxemasi (characters)
// ==========================================================================
export const characterSectionSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export type CharacterSection = z.infer<typeof characterSectionSchema>;

export const characterSchema = z.object({
  id: z.string(),
  name: z.string(),
  original_name: z.string(),
  father_name: z.string().optional(),
  mother_name: z.string().optional(),
  spouse: z.string().optional(),
  children: z.array(z.string()).default([]),
  aliases: z.array(z.string()).default([]),
  titles: z.array(z.string()).default([]),
  race: z.enum(['ainur', 'elflar', 'insonlar', 'mitti-odamlar', 'xobbitlar', 'boshqa']),
  sub_race: z.string().optional(),
  culture: z.string().optional(),
  birth_year: z.string().optional(),
  death_year: z.string().optional(),
  house_id: z.string().optional(),
  weapons_and_artifacts: z.array(z.string()).default([]),
  primary_locations: z.array(z.string()).default([]),
  textual_status: textualStatusEnum,
  uncertainty_notes: z.string().optional(),
  summary: z.string(),
  biography_sections: z.array(characterSectionSchema).default([]),
  etymology: z.string().optional(),
  image: characterImageSchema.optional(),
  sources: z.array(sourceRefSchema).min(1),
  related_characters: z.array(z.string()).default([]),
  adaptations: z.array(adaptationItemSchema).default([]),
});

export type CharacterData = z.infer<typeof characterSchema>;

// ==========================================================================
// 5. Xalqlar va Madaniyatlar Sxemasi (peoples)
// ==========================================================================
export const peopleSchema = z.object({
  id: z.string(),
  name: z.string(),
  other_names: z.array(z.string()).default([]),
  race_category: z.enum(['ainur', 'elflar', 'insonlar', 'mitti-odamlar', 'boshqa']),
  divisions_and_clans: z.array(z.string()).default([]),
  origin_era: z.string().optional(),
  associated_languages: z.array(z.string()).default([]),
  primary_realms: z.array(z.string()).default([]),
  textual_status: textualStatusEnum,
  summary: z.string(),
  description_sections: z.array(characterSectionSchema).default([]),
  sources: z.array(sourceRefSchema).min(1),
});

export type PeopleData = z.infer<typeof peopleSchema>;

// ==========================================================================
// 6. Joy Nomlari va Xaritalar Sxemasi (places)
// ==========================================================================
export const placeSchema = z.object({
  id: z.string(),
  name: z.string(),
  elvish_name: z.string().optional(),
  type: z.enum(['shahar', 'qirollik', 'togʻ', 'daryo', 'qalʼa', 'oʻlka']),
  region: z.enum(['beleriand', 'orta-yer', 'numenor', 'valinor', 'harad']),
  coordinates: z.object({
    map_id: z.string(),
    x: z.number(), // Gorizontal planar piksel masofasi
    y: z.number(), // Vertikal planar piksel masofasi
  }).optional(),
  founded_era: z.string().optional(),
  destroyed_era: z.string().optional(),
  rulers: z.array(z.string()).default([]),
  notable_events: z.array(z.string()).default([]),
  textual_status: textualStatusEnum,
  summary: z.string(),
  description_sections: z.array(characterSectionSchema).default([]),
  sources: z.array(sourceRefSchema).min(1),
});

export type PlaceData = z.infer<typeof placeSchema>;

// ==========================================================================
// 7. Tarixiy Voqealar Sxemasi (events)
// ==========================================================================
export const eventSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
  era: z.enum(['ainur_musiqasi', 'daraxtlar_davri', 'birinchi_davr', 'ikkinchi_davr', 'uchinchi_davr', 'tortinchi_davr']),
  year_text: z.string(),
  location_id: z.string().optional(),
  characters: z.array(z.string()).default([]),
  belligerents: z.object({
    side_a: z.array(z.string()),
    side_b: z.array(z.string()),
  }).optional(),
  outcome: z.string(),
  description_sections: z.array(characterSectionSchema).default([]),
  preceding_event: z.string().optional(),
  succeeding_event: z.string().optional(),
  textual_status: textualStatusEnum,
  sources: z.array(sourceRefSchema).min(1),
});

export type EventData = z.infer<typeof eventSchema>;

export const uzbekEditionSchema = z.object({
  title: z.string(),
  translator: z.string().optional(),
  publisher: z.string().optional(),
  year: z.number().optional(),
  isbn: z.string().optional(),
  format: z.string().optional(),
  notes: z.string().optional(),
  status: z.enum(['published', 'in_progress', 'planned', 'untranslated']),
});

export type UzbekEditionData = z.infer<typeof uzbekEditionSchema>;

export const bookCoverSchema = z.object({
  src: z.string(),
  alt: z.string(),
  edition_title: z.string(),
  publisher: z.string(),
  year: z.number(),
  isbn: z.string().optional(),
  artist: z.string().optional(),
  source: z.string().optional(),
});

export type BookCoverData = z.infer<typeof bookCoverSchema>;

// ==========================================================================
// 8. Kitoblar va Bibliografiya Sxemasi (books)
// ==========================================================================
export const bookSchema = z.object({
  id: z.string(),
  title_uz: z.string(),
  title_original: z.string(),
  aliases: z.array(z.string()).default([]),
  publication_year: z.number(),
  publisher: z.string(),
  editor: z.string().optional(),
  category: z.enum([
    'primary_lifetime',
    'posthumous_reconstructed',
    'textual_history',
    'letters_academic',
  ]),
  isbn: z.string().optional(),
  synopsis: z.string(),
  detailed_sections: z.array(characterSectionSchema).default([]),
  cover_image: bookCoverSchema.optional(),
  key_themes: z.array(z.string()).default([]),
  uzbek_editions: z.array(uzbekEditionSchema).default([]),
  translation_status_summary: z.string().optional(),
});

export type BookData = z.infer<typeof bookSchema>;

// ==========================================================================
// 9. Tillar va Yozuv Tizimlari Sxemasi (languages)
// ==========================================================================
export const languageSchema = z.object({
  id: z.string(),
  name: z.string(),
  family: z.string(),
  writing_systems: z.array(z.enum(['tengwar', 'cirth', 'sarati'])),
  inventor: z.string().optional(),
  phonology_overview: z.string(),
  grammar_and_vocabulary_sections: z.array(characterSectionSchema).default([]),
  sample_text_original: z.string().optional(),
  sample_text_uz: z.string().optional(),
  textual_status: textualStatusEnum,
  sources: z.array(sourceRefSchema).min(1),
});

export type LanguageData = z.infer<typeof languageSchema>;

// ==========================================================================
// 10. Nasabnomalar va Shajaralar Sxemasi (genealogies)
// ==========================================================================
export const genealogyMemberSchema = z.object({
  character_id: z.string(),
  spouse_ids: z.array(z.string()).default([]),
  parent_ids: z.array(z.string()).default([]),
  generation: z.number().default(1),
  order: z.number().default(0),
  is_uncertain: z.boolean().default(false),
  uncertainty_notes: z.string().optional(),
});

export const genealogySchema = z.object({
  id: z.string(),
  title: z.string(),
  house_name: z.string(),
  founder_id: z.string(),
  era: z.string(),
  summary: z.string(),
  members: z.array(genealogyMemberSchema).min(1),
  branches: z.array(z.string()).default([]),
  sources: z.array(sourceRefSchema).min(1),
});

export type GenealogyData = z.infer<typeof genealogySchema>;

// ==========================================================================
// 11. Kosmologiya va Arda Olamlari Sxemasi (cosmology)
// ==========================================================================
export const cosmologySchema = z.object({
  id: z.string(),
  name: z.string(),
  concept_type: z.enum(['cosmic_realm', 'primeval_light', 'celestial_body', 'metaphysical_force']),
  associated_ainur: z.array(z.string()).default([]),
  ontological_evolution: z.string().optional(),
  cosmology_sections: z.array(characterSectionSchema).default([]),
  textual_status: textualStatusEnum,
  summary: z.string(),
  sources: z.array(sourceRefSchema).min(1),
});

export type CosmologyData = z.infer<typeof cosmologySchema>;

// ==========================================================================
// 12. Ilmiy Maqolalar Sxemasi (articles)
// ==========================================================================
export const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  author: z.string().default('Tahririyat'),
  published_date: z.string(),
  category: z.enum([
    'falsafa_va_teologiya',
    'adabiy_tahlil',
    'matnshunoslik',
    'tolkienshunoslik',
    'zamonaviy_adaptatsiyalar',
  ]),
  abstract: z.string(),
  related_entities: z.array(z.string()).default([]),
  sources: z.array(sourceRefSchema).min(1),
});

export type ArticleData = z.infer<typeof articleSchema>;
