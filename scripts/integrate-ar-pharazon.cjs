const fs = require('fs');
const path = require('path');

// 1. Update ar-pharazon.json
const jsonPath = path.resolve('src/content/characters/ar-pharazon.json');
const charData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
charData.image = {
  src: '/images/characters/ar-pharazon.webp',
  src_thumb: '/images/characters/ar-pharazon-thumb.webp',
  alt: 'Ar-Pharazôn Oltin Númenor shohona oltin toji va zarbof toʻnida, Armenelos taxt zalida',
  caption: 'Ar-Pharazôn Oltin — Númenorning 25-va soʻnggi Oliy Shohi, Armadaning fojiaviy yoʻlboshchisi'
};
fs.writeFileSync(jsonPath, JSON.stringify(charData, null, 2) + '\n', 'utf-8');
console.log('✓ Updated ar-pharazon.json with image metadata');

// 2. Update character-portraits.ts
const tsPath = path.resolve('src/data/character-portraits.ts');
let code = fs.readFileSync(tsPath, 'utf-8');

const entry = `  'ar-pharazon': {
    characterId: 'ar-pharazon',
    name: 'Ar-Pharazôn Oltin',
    src: '/images/characters/ar-pharazon.webp',
    srcThumb: '/images/characters/ar-pharazon-thumb.webp',
    width: 600,
    height: 800,
    alt: 'Ar-Pharazôn Oltin Númenor shohona oltin toji va zarbof toʻnida, Armenelos taxt zalida',
    caption: 'Ar-Pharazôn Oltin — Númenorning 25-va soʻnggi Oliy Shohi, Armadaning fojiaviy yoʻlboshchisi',
    provenance: 'original_adaptation_derivative',
    creator: 'Tolkien Olami akademik ustaxonasi (The Rings of Power va Tolkien matni sintezi)',
    license: 'Ekran talqini derivativ sanʼati (Fair Use / Maʼrifiy va qiyosiy-tanqidiy tahlil)',
    sourceNotes: 'The Silmarillion (Akallabêth): "Ar-Pharazôn Oltin barcha shohlardan koʻra koʻproq qudrat va ulugʻvorlikka intildi... uning magʻrurligi osmonga yetdi."',
    visualCanonNotes: 'Keksa viqorli imperator chehrasi, Númenor oltin toji va sapfirlari, zarbof qizil va oltin ipak toʻn, oltin qoplama marosim sovuti.',
  },
`;

const target = '};\n\n/**\n * Berilgan qahramon';
if (code.includes(target) && !code.includes("'ar-pharazon'")) {
  code = code.replace(target, entry + target);
  fs.writeFileSync(tsPath, code, 'utf-8');
  console.log('✓ Registered ar-pharazon in src/data/character-portraits.ts');
} else {
  console.log('Already registered or target not found');
}
