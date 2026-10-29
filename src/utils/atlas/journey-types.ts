import { z } from 'zod';

/**
 * Tolkien Olami — Tarixiy Sayohatlar (Journey Atlas) Sxemasi va Turlari
 */

export const coordinateResolutionSchema = z.object({
  status: z.enum(['confirmed', 'approximate', 'unresolved']),
  notesUz: z.string(),
});

export type CoordinateResolution = z.infer<typeof coordinateResolutionSchema>;

export const journeyStageSourceSchema = z.object({
  bookSlug: z.enum(['the-hobbit', 'the-lord-of-the-rings', 'silmarillion']),
  chapterTitleUz: z.string(),
  chapterOriginal: z.string(),
  chapterNumber: z.number().int().positive(),
  pageNotesUz: z.string().optional(),
});

export type JourneyStageSource = z.infer<typeof journeyStageSourceSchema>;

export const journeySegmentSchema = z.object({
  type: z.enum(['confirmed', 'approximate', 'unresolved']),
  direction: z.enum(['outbound', 'return']).default('outbound').optional(),
  descriptionUz: z.string().optional(),
  waypoints: z
    .array(
      z.object({
        x: z.number(),
        y: z.number(),
      })
    )
    .default([]),
});

export type JourneySegment = z.infer<typeof journeySegmentSchema>;

export const journeyStageSchema = z.object({
  id: z.string(),
  sequence: z.number().int().positive(),
  titleUz: z.string(),
  locationNameUz: z.string(),
  locationNameOriginal: z.string(),
  region: z.enum(['orta-yer', 'beleriand']),
  placeId: z.string().optional(),
  direction: z.enum(['outbound', 'return']).default('outbound').optional(),
  coordinates: z
    .object({
      x: z.number(), // Leaflet CRS.Simple X (longitude)
      y: z.number(), // Leaflet CRS.Simple Y (latitude)
    })
    .optional(),
  coordinateResolution: coordinateResolutionSchema,
  segmentToNext: journeySegmentSchema.optional(),
  dateUz: z.string(),
  storyEvent: z.object({
    titleUz: z.string(),
    descriptionUz: z.string(),
    significanceUz: z.string(),
  }),
  source: journeyStageSourceSchema,
});

export type JourneyStage = z.infer<typeof journeyStageSchema>;

export const journeyDefinitionSchema = z.object({
  id: z.string(),
  titleUz: z.string(),
  titleOriginal: z.string(),
  subtitleUz: z.string(),
  eraUz: z.string(),
  yearUz: z.string(),
  travelerUz: z.string(),
  color: z.string(),
  glowColor: z.string(),
  region: z.enum(['orta-yer', 'beleriand']),
  overviewUz: z.string(),
  totalStages: z.number().int().positive(),
  stages: z.array(journeyStageSchema).min(1),
  source: z.object({
    bookSlug: z.string(),
    titleUz: z.string(),
  }),
});

export type JourneyDefinition = z.infer<typeof journeyDefinitionSchema>;
