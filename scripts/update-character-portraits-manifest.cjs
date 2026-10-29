// scripts/update-character-portraits-manifest.cjs
const fs = require('fs');
const path = require('path');

const file = path.resolve('src/data/character-portraits.ts');
let code = fs.readFileSync(file, 'utf-8');

// Replace PortraitProvenance type
const oldType = `export type PortraitProvenance =
  | 'scholarly_original_illustration'   // Birlamchi Tolkien matnlari asosida yaratilgan ilmiy original illyustratsiya
  | 'adaptation_reference_illustration' // Kinematografik moslashuv (Jackson / RoP) va matn sintezi asosidagi illyustratsiya
  | 'unverified_pending_review';        // Hali to'liq tasdiqlanmagan / tahririyat ko'rigida`;

const newType = `export type PortraitProvenance =
  | 'original_textual_visualization'   // Birlamchi Tolkien matnlari tavsifiga tayangan original raqamli vizualizatsiya
  | 'original_adaptation_derivative'   // Kinematografik ekran moslashuvlari (Jackson / RoP) motivlari asosidagi vizualizatsiya
  | 'adaptation_image'                 // Rasmiy ekran moslashuvi kadri yoki fotosurati
  | 'published_illustration'           // Nashr etilgan kitob illyustratsiyasi
  | 'scholarly_original_illustration'  // Tarixiy moslik uchun saqlangan
  | 'adaptation_reference_illustration'// Tarixiy moslik uchun saqlangan
  | 'unverified_pending_review';        // Hali to'liq tasdiqlanmagan / tahririyat ko'rigida`;

code = code.replace(oldType, newType);

const textualChars = ['feanor', 'fingolfin', 'finwe', 'beren', 'turin'];
const adaptationChars = [
  'aragorn', 'galadriel', 'gil-galad', 'gandalf', 'frodo-baggins',
  'samwise-gamgee', 'bilbo-baggins', 'gollum', 'sauron', 'saruman',
  'legolas', 'gimli', 'boromir', 'elrond', 'arwen', 'theoden'
];

for (const id of textualChars) {
  const reg = new RegExp(`(${id}: \\{[\\s\\S]*?provenance: )'[^']+'([\\s\\S]*?creator: )'[^']+'([\\s\\S]*?license: )'[^']+'`);
  code = code.replace(reg, `$1'original_textual_visualization'$2'Tolkien Olami akademik ustaxonasi (birlamchi matn tavsiflariga tayangan original raqamli vizualizatsiya)'$3'Original raqamli vizualizatsiya (Tolkien Olami maʼrifiy tahlil loyihasi; notijorat taʼlimiy tahlil)'`);
}

for (const id of adaptationChars) {
  const reg = new RegExp(`(${id}: \\{[\\s\\S]*?provenance: )'[^']+'([\\s\\S]*?creator: )'[^']+'([\\s\\S]*?license: )'[^']+'`);
  code = code.replace(reg, `$1'original_adaptation_derivative'$2'Tolkien Olami akademik ustaxonasi (Peter Jackson kinofilmlari va Tolkien matni sintezi asosida)'$3'Ekran talqini derivativ sanʼati (Fair Use / Maʼrifiy va qiyosiy-tanqidiy tahlil)'`);
}

fs.writeFileSync(file, code, 'utf-8');
console.log('✓ character-portraits.ts muvaffaqiyatli yangilandi');
