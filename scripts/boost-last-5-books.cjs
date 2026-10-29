const fs = require('fs');
const path = require('path');
const booksDir = path.resolve('src/content/books');

function addSection(id, section) {
  const filePath = path.join(booksDir, `${id}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  data.detailed_sections.push(section);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`✓ Added translation horizon section to ${id}`);
}

addSection('unfinished-tales', {
  title: "Oʻzbek kitobxonlari uchun ahamiyati va tarjima istiqbollari",
  content: "«Tugallanmagan Afsonalar» asari oʻzbek adabiy muhitida Oʻrta-yer mifologiyasining ichki mexanizmlarini chuqur anglash uchun eng muhim manba hisoblanadi. Asarda keltirilgan qahramonlarning ruhiy monologlari, geografik va texnik tavsiflar (ayniqsa Palantíri va Istari haqidagi insholar) oʻzbek tilida adabiy-ilmiy atamalarning boyishiga xizmat qiladi. Hozirda ushbu kitob toʻliq oʻzbek tiliga tarjima qilinmagan boʻlsa-da, «Tolkien Olami» portali doirasidagi ushbu tahlillar boʻlajak professional tarjimalar uchun mustahkam akademik poydevor yaratadi."
});

addSection('history-of-middle-earth', {
  title: "Tolkienshunoslik metodologiyasi va ilmiy tadqiqotlar ahamiyati",
  content: "12 jildlik «Oʻrta-yer Tarixi» asari zamonaviy adabiyotshunoslikda genetik matnshunoslikning eng yuksak etaloni deb eʼtirof etiladi. Oʻzbek tadqiqotchilari va yozuvchilari uchun ushbu korpus katta epik koinot yaratishda har bir detal, har bir etimologik ildiz va xronologik sana qanchalik puxta oʻylanishi lozimligini oʻrgatuvchi noyob mahorat maktabidir. Asarning oʻzbek tilidagi sharhlari milliy adabiyotimizda mifologik tafakkur va fantastik matnshunoslik nazariyasini yangi bosqichga koʻtarishga xizmat qiladi."
});

addSection('the-children-of-hurin', {
  title: "Milliy eposlar bilan qiyosiy tahlil va fojiaviy koʻlami",
  content: "«Húrin Farzandlari» dostoni oʻzining qahramonlik ruhi, qatʼiy qasamyodlar va fojiaviy yakuni bilan oʻzbek xalq dostonlari («Alpomish», «Goʻroʻgʻli») hamda Sharq fojialari («Rustam va Suhrob») bilan chuqur maʼnaviy hamohanglikka ega. Túrinning oʻz elini himoya qilishdagi murosasiz jasorati va shaxsiy kibri tufayli halokatga uchrashi oʻzbek kitobxoniga qadimiy qahramonlik axloqining murakkab qirralarini chuqur mushohada qilish imkonini beradi."
});

addSection('the-fall-of-gondolin', {
  title: "Tarixiy fojia va qadimgi sivilizatsiyalar xotirasi",
  content: "Gondolin shahrining qulashi nafaqat elflar fojiasi, balki jahon madaniyatidagi yoʻqolgan buyuk sivilizatsiyalar (Troya, Qadimgi Bobil, Samarqandning qadimiy Afrosiyobi) xotirasining badiiy timsolidir. Oʻzbek kitobxoni uchun bu doston oʻz oʻtmishini, meʼmoriy moʻjizalarini va qadimiy madaniy poydevorlarini asrab-avaylash, ichki xiyonat va hushyorlikni yoʻqotish qanday ogʻir kulfatlarga olib kelishi haqidagi buyuk tarixiy saboq boʻlib xizmat qiladi."
});

addSection('the-fall-of-numenor', {
  title: "Sharqona ibrat: Kibrning zavoli va adolat tantanasi",
  content: "«Númenorning Qulashi» asari oʻzining falsafiy gʻoyasi bilan Sharq mumtoz adabiyotidagi «kibrning zavoli» (Shaddodning jannati va Namrudning halokati) haqidagi rivoyatlarga juda yaqin turadi. Cheksiz qudrat, texnologik boylik va uzoq umr inʼom etilgan xalqning Yaratuvchiga shukronalik oʻrniga kibrga berilishi va oqibatda okean qaʼriga choʻkishi haqidagi doston barcha davrlar insoniyati uchun abadiy axloqiy ogohlantirishdir."
});

console.log("✓ Barcha 5 ta kitob muvaffaqiyatli toʻldirildi!");
