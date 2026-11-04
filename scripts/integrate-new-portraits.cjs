const fs = require('fs');
const path = require('path');

const newImages = {
  anarion: {
    src: '/images/characters/anarion.webp',
    src_thumb: '/images/characters/anarion-thumb.webp',
    alt: 'Anárion quyosh ramzli kumush sovutda, qoʻlida Númenor qilichi bilan Minas Anorda',
    caption: 'Anárion — Elendilning kenja oʻgʻli, Gondor hamhukmdori va Minas Anor asoschisi'
  },
  balin: {
    src: '/images/characters/balin.webp',
    src_thumb: '/images/characters/balin-thumb.webp',
    alt: 'Balin oppoq oqsoqol soqol bilan, toʻq qizil qalpoqda Moria yilnomasini ushlab turgan holda',
    caption: 'Balin — Fundinning oʻgʻli, Moria hukmdori va Thorin hamrohlaridan biri'
  },
  celeborn: {
    src: '/images/characters/celeborn.webp',
    src_thumb: '/images/characters/celeborn-thumb.webp',
    alt: 'Celeborn kumush-oq libosda, yaltiroq kumush sochlari bilan Caras Galadhonda',
    caption: 'Celeborn — Lothlórien hukmdori, Doriath shahzodasi va Galadrielning umr yoʻldoshi'
  },
  celebrimbor: {
    src: '/images/characters/celebrimbor.webp',
    src_thumb: '/images/characters/celebrimbor-thumb.webp',
    alt: 'Celebrimbor Eregiondagi ustaxonasida moviy baxmal libosda, qoʻlida kumush temirchilik bolgʻasi bilan',
    caption: 'Celebrimbor — Noldor shahzodasi, Gwaith-i-Mírdain yetakchisi va Elflarning Uch Uzugi yaratuvchisi'
  },
  elendil: {
    src: '/images/characters/elendil.webp',
    src_thumb: '/images/characters/elendil-thumb.webp',
    alt: 'Elendil Boʻyli boshida Elendilmir yulduzi bilan, Yetti Yulduz va Oq Daraxtli moviy sarupoda',
    caption: 'Elendil Boʻyli — Gondor va Arnorning Birinchi Oliy Qiroli, Dúnedain yetakchisi'
  },
  eomer: {
    src: '/images/characters/eomer.webp',
    src_thumb: '/images/characters/eomer-thumb.webp',
    alt: 'Éomer ot ramzli sovut va qizil plashda, qoʻlida dubulgʻa tutgan holda Rohan dashtlarida',
    caption: 'Éomer Éomund oʻgʻli — Riddermarkning Uchinchi Marshali va keyinchalik Rohan Qiroli'
  },
  eowyn: {
    src: '/images/characters/eowyn.webp',
    src_thumb: '/images/characters/eowyn-thumb.webp',
    alt: 'Éowyn nafis oq-yashil libosda, belida qilich kamari bilan Edorasdagi Oltin Qasrda',
    caption: 'Éowyn — Rohan Qalqonqizi, Théodenning jiyani va keyinchalik Ithilien xonimi'
  },
  isildur: {
    src: '/images/characters/isildur.webp',
    src_thumb: '/images/characters/isildur-thumb.webp',
    alt: 'Isildur Gondorning qora va kumush sovutida, Oq Daraxt nishoni bilan',
    caption: 'Isildur — Gondor va Arnor Oliy Qiroli, Minas Ithil asoschisi va Yagona Uzukni uzib olgan qahramon'
  },
  'meriadoc-brandybuck': {
    src: '/images/characters/meriadoc-brandybuck.webp',
    src_thumb: '/images/characters/meriadoc-brandybuck-thumb.webp',
    alt: 'Meriadoc Merry Brandybuck xantal rangli jundan nimchada va Elflar bargli toʻgʻnogʻichi bilan',
    caption: 'Meriadoc Merry Brandybuck — Rohan eskvayri, Buckland xoʻjasi va Uzuk Birodarligi aʼzosi'
  },
  'peregrin-took': {
    src: '/images/characters/peregrin-took.webp',
    src_thumb: '/images/characters/peregrin-took-thumb.webp',
    alt: 'Peregrin Pippin Took Minas Tirith Qalʼa Qorovuli libosida, Oq Daraxt naqshi bilan',
    caption: 'Peregrin Pippin Took — Gondor Qalʼa Qorovuli, Shire Teini va Uzuk Birodarligi aʼzosi'
  },
  radagast: {
    src: '/images/characters/radagast.webp',
    src_thumb: '/images/characters/radagast-thumb.webp',
    alt: 'Radagast Qoʻngʻir oʻrmon kiyimlarida, yelkasida kichik qushcha va qoʻlida yogʻoch aso bilan',
    caption: 'Radagast Qoʻngʻir (Aiwendil) — Istari beshligidan biri, qushlar va jonivorlar doʻsti'
  },
  'thorin-oakenshield': {
    src: '/images/characters/thorin-oakenshield.webp',
    src_thumb: '/images/characters/thorin-oakenshield-thumb.webp',
    alt: 'Thorin Emanqalqon moviy qalpoq va moʻynali ogʻir mitti toʻnida, kumush kokilli soqoli bilan',
    caption: 'Thorin II Emanqalqon — Togʻ Ostidagi Qirol, Durin xonadoni boshligʻi va Erebor ozodkori'
  },
  thranduil: {
    src: '/images/characters/thranduil.webp',
    src_thumb: '/images/characters/thranduil-thumb.webp',
    alt: 'Thranduil boshida kuzgi barglar va mevalardan gulchambar toj bilan, yashil baxmal libosda',
    caption: 'Thranduil — Shimoliy Zulmatzor (Mirkwood) Oʻrmon Qirolligi hukmdori va Legolasning otasi'
  }
};

for (const [id, img] of Object.entries(newImages)) {
  const filePath = path.join('src/content/characters', id + '.json');
  const d = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  d.image = img;
  fs.writeFileSync(filePath, JSON.stringify(d, null, 2) + '\n', 'utf-8');
  console.log('Updated JSON with image:', id);
}

// Clean indis and nerdanel non-existent images
for (const id of ['indis', 'nerdanel']) {
  const filePath = path.join('src/content/characters', id + '.json');
  const d = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  if (d.image) {
    delete d.image;
    fs.writeFileSync(filePath, JSON.stringify(d, null, 2) + '\n', 'utf-8');
    console.log('Removed pending image field from:', id);
  }
}
