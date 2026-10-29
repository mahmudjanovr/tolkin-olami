import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import {
  characterSchema,
  peopleSchema,
  placeSchema,
  eventSchema,
  bookSchema,
  languageSchema,
  genealogySchema,
  cosmologySchema,
  articleSchema,
} from './content/schemas';

export const collections = {
  // 8 ta ma'lumotlar to'plami (JSON Data Collections)
  characters: defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/characters' }),
    schema: characterSchema,
  }),
  peoples: defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/peoples' }),
    schema: peopleSchema,
  }),
  places: defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/places' }),
    schema: placeSchema,
  }),
  events: defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/events' }),
    schema: eventSchema,
  }),
  books: defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/books' }),
    schema: bookSchema,
  }),
  languages: defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/languages' }),
    schema: languageSchema,
  }),
  genealogies: defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/genealogies' }),
    schema: genealogySchema,
  }),
  cosmology: defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/cosmology' }),
    schema: cosmologySchema,
  }),

  // 1 ta ilmiy maqolalar to'plami (Markdown Content Collection)
  articles: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
    schema: articleSchema,
  }),
};
