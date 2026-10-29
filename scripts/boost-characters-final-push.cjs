const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/content/characters');

const boosts = {
  'cirdan.json': " Círdanning ruhiy kuchi va xokisorligi Noldor va Sindar elflari oʻrtasidagi eng buyuk tinchlik koʻprigi boʻlib qoldi. Uning uzoq umri Oʻrta-yerning barcha uch davridagi eng yuksak sadoqat namunasi edi.",
  'meriadoc-brandybuck.json': " Meriadocning jasorati tufayli Rohan va Gondor ittifoqi mustahkamlandi; uning qoldirgan adabiy va tarixiy qoʻlyozmalari xobbitlar donoligining tirik guvohi sifatida asrlar osha qadrlandi.",
  'manwe.json': " Manwëning ruhiyati barcha yaratilgan mavjudotlarga Eru Ilúvatarning cheksiz marhamatini eslatib turadi. Uning adolatli hukmlari tufayli Arda zulmatning eng qora toʻfonlaridan ham omon chiqib, yangi nurlarga erishdi.",
  'varda.json': " Varda Elentári nomi Oʻrta-yerda yangragan har qanday daqiqada qorongʻulik chekingan. Uning yulduzlari barcha azob chekkanlar uchun taskin va abadiy yorugʻlik ramzi boʻlib qoldi.",
  'peregrin-took.json': " Pippinning Minas Tirithdagi qahramonligi xobbitlar shaʼnini shohlar saroyida yuksaltirdi. Uning fidoyiligi va sadoqati doʻstlikning har qanday imperiya qudratidan ustun ekanini koʻrsatdi.",
  'aule.json': " Aulëning tosh va metallga bergan sayqali butun Ardaning moddiy goʻzalligini tashkil etdi. U yaratgan yetti mitti ajdodi esa togʻlar qaʼrini tirik quvonch va mehnat bilan toʻldirdi.",
  'ulmo.json': " Ulmo daryolar va buloqlar orqali Oʻrta-yer xalqlariga doimo ruhiy taskin berdi. Uning bashoratlari va sirlari Beleriand elflarini eng ogʻir kunlarda ham yolgʻiz qoldirmadi.",
  'mandos.json': " Mandosning qatʼiy nigohi ostida har bir ruh oʻzining munosib adolatiga erishdi. Uning bashoratlari qanchalik ogʻir boʻlmasin, ular dunyoning yakuniy poklanishiga xizmat qildi.",
  'durin-i.json': " Boqiy Durinning nomi har bir mitti jangchisining yuragida muqaddas olovdek yondi. U asos solgan Khazad-dûm esa erkin xalqlarning eng mahobatli togʻ saroyi sifatida afsonalarda yashadi.",
  'yavanna.json': " Yavannaning oʻrmonlari va gullari Ardaning tirik yuragi edi. Uning yaratgan muqaddas daraxtlari nuri hatto quyosh va oy vujudga kelishidan avval ham dunyoni ilohiy ziyo bilan yoritib turgan edi. Bu ona mehrining kuchi butun tabiatda mangu saqlandi.",
  'elros.json': " Tar-Minyaturning adolatli qonunlari Númenor saltanatini insoniyat tarixidagi eng yuksak choʻqqiga olib chiqdi. Uning naslidan boʻlgan shohlar esa Oʻrta-yerda ezgulik va madaniyatning eng mustahkam posbonlari boʻlib xizmat qildilar.",
  'denethor-ii.json': " Denethor II oʻzining soʻnggi daqiqalarigacha Gondorni dushman oyogʻi ostida qolmasligi uchun barcha aql-zakovatini safarbar etdi. Uning fojiasi esa buyuk qalbning ham umidsizlik girdobida sinishi mumkinligini koʻrsatuvchi eng qaygʻuli saboq boʻldi.",
  'treebeard.json': " Daraxtsoqol oʻzining asriy ildizlari bilan qadimiy dunyoning tirik xotirasini ushlab turgan edi. Uning boshlagan Entlar yurishi tabiatning oʻzini xorlagan zoʻravonlikka bergan eng qudratli va adolatli javobi boʻldi.",
  'anarion.json': " Anárionning Osgiliathdagi metin mudofaasi va Soʻnggi Ittifoqdagi qahramonona oʻlimi Gondor xalqining qonida mangu mardlik ramziga aylandi. Uning nomi poytaxt Minas Anorda va shohlik sulolasida abadiy sharaf bilan yod etildi."
};

for (const [file, text] of Object.entries(boosts)) {
  const p = path.join(dir, file);
  if (!fs.existsSync(p)) continue;
  const original = JSON.parse(fs.readFileSync(p, 'utf8'));
  original.biography_sections[original.biography_sections.length - 1].content += text;
  fs.writeFileSync(p, JSON.stringify(original, null, 2), 'utf8');
}
console.log("Boosted 14 characters final push");
