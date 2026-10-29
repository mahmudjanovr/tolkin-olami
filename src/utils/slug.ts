/**
 * TOLKIEN OLAMI — Kanonik Slug Normalizatori va To'qnashuvlarni Nazorat Qilish
 */

/**
 * Matnni qat'iy kanonik ASCII kebab-case slugiga aylantiradi.
 * Uzbek harflari (oʻ, gʻ) va Tolkien diakritikalarini (ë, ä, é, ú, ñ) tekislaydi.
 * Barcha apostrof variantlarini (U+02BB, U+02BC, U+0027, U+2018, U+2019, U+0060, U+00B4) hisobga oladi.
 * 
 * Bo'sh yoki faqat yaroqsiz belgilardan iborat matn kiritilsa, aniq xatolik qaytaradi.
 */
export function toCanonicalSlug(input: string): string {
  if (!input || !input.trim()) {
    throw new Error('Kanonik slug hosil qilib bo‘lmadi: kiritilgan matn bo‘sh');
  }

  const slug = input
    .toLowerCase()
    .trim()
    .replace(/o['ʻ‘ʼ’`´]/gu, 'o')
    .replace(/g['ʻ‘ʼ’`´]/gu, 'g')
    .replace(/['ʻ‘ʼ’`´]/gu, '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  if (!slug) {
    throw new Error('Kanonik slug hosil qilib bo‘lmadi: natijaviy slug bo‘sh');
  }

  return slug;
}

/**
 * To'plamdagi sluglar takrorlanmasligini va bo'sh emasligini tekshiradi.
 * To'qnashuv bo'lsa, aniq tushuntirish va yechim beruvchi xatolik tashlaydi.
 */
export function assertUniqueSlugs(
  entries: { id: string; slug: string; name?: string }[],
  collectionName: string
): void {
  const seen = new Map<string, string>();
  for (const entry of entries) {
    if (!entry.slug || !entry.slug.trim()) {
      throw new Error(
        `[Empty Slug] "${collectionName}" to'plamidagi "${entry.id}" identifikatorli yozuvda bo'sh slug aniqlandi!`
      );
    }
    if (seen.has(entry.slug)) {
      const existingId = seen.get(entry.slug);
      throw new Error(
        `[Slug Collision] "${collectionName}" to'plamida to'qnashuv aniqlandi! ` +
        `"${entry.slug}" slugi ham "${existingId}", ham "${entry.id}" tomonidan ishlatilmoqda. ` +
        `Iltimos, semantik epitet qo'shing (masalan: "${entry.slug}-eledhwen").`
      );
    }
    seen.set(entry.slug, entry.id);
  }
}
