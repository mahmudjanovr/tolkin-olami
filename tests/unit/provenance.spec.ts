import { describe, it, expect } from 'vitest';
import {
  textualStatusEnum,
  sourceRefSchema,
  adaptationItemSchema,
} from '../../src/content/schemas';

describe('Provenance and Citations Verification', () => {
  it('4 ta matn maqomi (Textual Provenance) qatʼiy belgilangan', () => {
    const validStatuses = [
      'author_published',
      'posthumous_edited',
      'draft_variant',
      'disputed_variant',
    ];

    validStatuses.forEach((status) => {
      expect(textualStatusEnum.safeParse(status).success).toBe(true);
    });

    expect(textualStatusEnum.safeParse('fan_fiction').success).toBe(false);
    expect(textualStatusEnum.safeParse('hollywood_canon').success).toBe(false);
  });

  it('Oksford iqtibos sxemasi (sourceRefSchema) majburiy va ixtiyoriy maydonlarni toʻgʻri tekshiradi', () => {
    // Toʻliq manba
    const fullSource = {
      book_slug: 'silmarillion',
      chapter: 'Of Fëanor and the Unchaining of Melkor',
      page: '64',
      notes: 'Tahririyat izohi',
    };
    expect(sourceRefSchema.safeParse(fullSource).success).toBe(true);

    // page va notes maydonlari berilmagan holat
    const minimalSource = {
      book_slug: 'silmarillion',
      chapter: 'Of Fëanor and the Unchaining of Melkor',
    };
    const minimalResult = sourceRefSchema.safeParse(minimalSource);
    expect(minimalResult.success).toBe(true);

    // Majburiy book_slug yoki chapter yetishmaganda xato qaytaradi
    expect(sourceRefSchema.safeParse({ chapter: 'Bob' }).success).toBe(false);
    expect(sourceRefSchema.safeParse({ book_slug: 'silmarillion' }).success).toBe(false);
  });

  it('Adaptatsiya sxemasi (adaptationItemSchema) kanondan ajratilgan maydonlarni tekshiradi', () => {
    const adaptation = {
      medium: 'film',
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      creator: 'Peter Jackson',
      year: 2001,
      divergence_notes: 'Glorfindel oʻrniga Arwen kiritilgan.',
    };
    expect(adaptationItemSchema.safeParse(adaptation).success).toBe(true);

    // Notoʻgʻri media turi
    expect(
      adaptationItemSchema.safeParse({
        ...adaptation,
        medium: 'novel',
      }).success
    ).toBe(false);
  });
});
