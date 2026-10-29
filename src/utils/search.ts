/**
 * Tolkien Olami — Qidiruv So'rovlarini Normalizatsiya Qilish Utiliti
 *
 * Ushbu funksiya foydalanuvchi qidiruv so'rovini (yoki indeks kalitlarini)
 * qidiruv maydonida qulay solishtirish uchun tekislaydi.
 *
 * MUHIM ME'MORIY QOIDA:
 * Ushbu normalizatsiya FAQAT qidiruv solishtirishida ishlatiladi.
 * Saytdagi asl tahririyat matnlari, H1 sarlavhalari, iqtiboslar va
 * kanonik sluglar (masalan: "Fëanor", "Oʻgʻri", "Alqualondë")
 * HECH QACHON o'zgartirilmaydi va o'z asl holatida qoladi.
 */

/**
 * O'zbek lotin alifbosidagi turli apostrof shakllarini (ʻ, ', ʼ, ‘, ’, `, ´)
 * va Tolkien diakritikalarini (ë, ä, é, ú, ó, ñ, â va b.) qidiruvda
 * bir xil tushunilishi uchun tekislaydi.
 */
export function normalizeSearchQuery(input: string): string {
  if (!input || typeof input !== 'string') return '';

  return input
    .toLowerCase()
    .trim()
    // O'zbekcha o' va g' harflaridagi har xil apostroflarni yagona o' va g' ga standartlashtirish
    .replace(/o['ʻ‘ʼ’`´]/gu, "o'")
    .replace(/g['ʻ‘ʼ’`´]/gu, "g'")
    // o va g dan tashqari boshqa harflardagi apostroflarni (tutuq belgisi: san'at -> sanat) olib tashlash
    .replace(/(?<![og])['ʻ‘ʼ’`´]/gu, '')
    // Unicode diakritikalarini (U+0300..U+036F) ajratib tashlash
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .normalize('NFC');
}
