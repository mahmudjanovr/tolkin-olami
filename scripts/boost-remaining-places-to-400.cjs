const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/content/places');

const boosts = {
  'rivendell.json': {
    title: "Bilbo kitobxonasi, Narsil bo'laklari va O'rta-yer ilmi markazi",
    content: "Rivendell shunchaki tinch boshpana emas, balki butun O'rta-yer tarixining eng buyuk bilim markazi edi. Qadimiy Noldor va Númenor qo'lyozmalari, shajaralar va xaritalar aynan shu yerda saqlangan. Elendilning singan Narsil qilichi bo'laklari ming yil davomida Elrond xonadonida asrab kelingan va nihoyat Aragorn uchun 'Andúril' nomi bilan qayta quyilgan. Bilbo Baggins Shireni tark etgach, umrining so'nggi yillarini shu yerda o'tkazib, elflar qo'shiqlarini ingliz tiliga tarjima qilgan va 'Qizil Kitob'ning eng muhim qismlarini yozib tugatgan."
  },
  'gondolin.json': {
    title: "Ulmoning ogohlantirishi, Tuorning kelishi va qurolsozlik sirlari",
    content: "Gondolin poydevori Vala Ulmo ilhomi bilan qo'yilgan bo'lib, Ulmo shahar qulashi muqarrar bo'lganida Turgonga Vinyamarda qoldirilgan qurol-yarog'larni kiyib kelgan inson – Tuor orqali ogohlantirish yubordi. Turgon kibr sababli shaharni tark etishdan bosh tortdi. Gondolin ustalari O'rta-yer tarixidagi eng mashhur sehrli qilichlar – Glamdring (Turgon qilichi, keyinchalik Gandalf quroli), Orcrist va Sting (Frodo xanjari)ni yaratdilar. Bu qurollar yaqin atrofda o'rklar paydo bo'lganda ko'k olovdek porlash xususiyatiga ega edi."
  },
  'barad-dur.json': {
    title: "Yetti yillik qamal, quyma po'lat darvozalar va O'rta-yer zulmati",
    content: "Barad-dûr qal'asi shunchaki minora emas, balki kilometrlarga cho'zilgan devorlar, temir ko'priklar va chuqur yerosti qamoqxonalari tizimi edi. So'nggi Ittifoq urushida Gil-galad va Elendil boshchiligidagi qo'shin uni yetti yil qamal qildi. Minoraning ichki zallarida qora sehr va temirchilik ilmining eng dahshatli asboblari joylashgan bo'lib, u yerdan butun O'rta-yer bo'ylab qora iroda to'lqinlari tarqalib turardi. Qal'a xarobalarida To'rtinchi Davrda ham hech narsa o'smadi; u qora zulmatning abadiy qarg'ishi ostida qoldi."
  },
  'lothlorien.json': {
    title: "Cerin Amroth tepaligi, elflar kemalari va xayrlashuv nuri",
    content: "Lórienning eng muqaddas maskani Cerin Amroth tepaligi bo'lib, u yerda doimo oltin elanor va oq niphredil gullari barq urib turgan. Aynan shu tepalikda Aragorn va Arwen o'zlarining abadiy sevgilarini bir-birlariga qasamyod qilgan edilar. Galadriel Uzuk Birodarligiga mashhur elf plashlari, lembas nonlari va sehrli sovg'alar (Aragorn uchun Elessar gavhari, Gimli uchun uch tola oltin soch) ulashgan. Lórien xalqi tabiatning so'lishini to'xtatuvchi boqiy osoyishtalikda yashagan eng go'zal elflar jamoasi edi."
  },
  'isengard.json': {
    title: "Treegarth of Orthanc va tozalangan tabiat bog'i",
    content: "Entlar Isengardni suv bosganidan so'ng, bu qora sanoat o'chog'ini to'liq qayta tikladilar. To'rtinchi Davrda shoh Elessar bu hududni abadiy Entlar ixtiyoriga berdi va u 'Treegarth of Orthanc' deb nomlandi. Orthanc minorasining o'zi esa Gondor tasarrufiga o'tdi; undan Saruman yashirib qo'ygan ko'plab qadimiy buyumlar, jumladan Arnorning yo'qolgan Elendilmir nishoni topildi. Shunday qilib, zo'ravonlik va mashina zaxri ekilgan yer yana yam-yashil daraxtzorga aylandi."
  },
  'edoras.json': {
    title: "Chavandozlar poytaxtining harbiy va madaniy ahamiyati",
    content: "Edoras nafaqat Rohan hukmdorlarining qarorgohi, balki butun mamlakat otliq askarlarini umumiy yig'inga (Muster of Rohan) chorlaydigan harbiy qal'a edi. Shahar atrofidagi xandaqlar va tosh devorlar uni tekislikdagi har qanday to'satdan hujumdan ishonchli himoya qilgan. Oltin Saroy zallarida yuzlab jangchilar uchun ziyohatlar uyushtirilgan, shohona qurol-aslahalar va ajdodlar eposi kuylangan. Edoras erkin insonlarning mag'rur ruhiyati va dasht madaniyatining tirik ramzi bo'lib qoldi."
  },
  'angband.json': {
    title: "Birinchi Davr urushlarining bosh o'chog'i va qora saltanat",
    content: "Angband poydevori hatto Utumno vayron bo'lishidan oldinroq qo'yilgan bo'lib, Morgoth Valinordan qochib kelgach, bu yerni o'zining markaziy qarorgohiga aylantirdi. Qal'a zindonlarida Húrin yigirma sakkiz yil azob chekdi; Maedhros esa Thangorodrim qoyasiga o'ng qo'lidan zanjirband qilindi. Angband nafaqat harbiy istehkom, balki butun Beleriandni qamrab olgan barcha qonli janglar – Dagor-nuin-Giliath, Dagor Aglareb, Dagor Bragollach va Nirnaeth Arnoediadning bosh rejasi tuzilgan qora markaz edi."
  },
  'menegroth.json': {
    title: "Sindar madaniyatining cho'qqisi va fojiali talon-toroj",
    content: "Menegroth ichidagi favvoralar, daryo bo'yidagi bog'lar va yulduzsimon chiroqlar bilan bezatilgan g'orlar elflar dunyosining eng nafis san'at namunasi edi. Doriath elflari tashqi dunyo urushlaridan xoli holda bu yerda asrlar davomida osoyishta yashadilar. Biroq Nauglamír va Silmaril kulfati sababli Nogrod gnomlari shahar ichiga bostirib kirib, Thingolni o'ldirdilar va saroyni taladilar. Keyinchalik Fëanor o'g'illari ham ikkinchi marta shaharga hujum qilib (Ikkinchi Qirg'in), Menegrothni butunlay xarobaga aylantirdilar."
  },
  'nargothrond.json': {
    title: "Amrûn qoyalari, gnomlar merosi va Mormegil fojiasi",
    content: "Finrod Nargothrondni qurishdan avval bu g'orlar 'Kichik Gnomlar' (Petty-dwarves) tomonidan 'Nulukkizdîn' deb atalgan va ularning boshpanasi bo'lgan. Finrod ularni kengaytirib, yashirin darvozalar va qurolxonalarga ega yirik yerosti poytaxtini barpo etdi. Shahar aholisi tashqi ko'rinishda o'zlarini ko'rsatmasdan, pistirmalar orqali dushmanga zarba berar edilar. Túrin o'zining qora qilichi Gurthang bilan 'Mormegil' (Qora Qilich) laqabini olib, nargothrondliklarni ochiq jangga undaganida, shahar o'zining eng katta xavfsizlik afzalligi bo'lgan 'sir saqlanish' qobiliyatini yo'qotdi."
  },
  'hobbiton.json': {
    title: "Bagshot Row, Bayram Daraxti va Shire an'analari",
    content: "Hobbiton markazidagi 'Bayram Daraxti' (Party Tree) Bilbo Bagginsning 111 yoshlik mashhur to'yi nishonlangan joy bo'lib, butun Shire xalqi bu yerda bir necha kunlab bayram qilgan. Bag End tepaligi ostida esa Gamgee oilasining uyi bo'lgan Bagshot Row joylashgan. Qishloq hayoti tinch dehqonchilik, pivo tayyorlash, qovurilgan go'sht va trubka chekish kabi yoqimli mashg'ulotlarga to'la edi. Aynan mana shu sokin, beg'ubor hayot tarzi Uzuk tashuvchilari uchun O'rta-yerni qutqarish yo'lidagi eng buyuk ma'naviy tayanch bo'lib xizmat qildi."
  },
  'bree.json': {
    title: "Insonlar va xobbitlarning tinch-totuv yashash namunasi",
    content: "Bree butun O'rta-yerda insonlar va xobbitlar birgalikda, yonma-yon qo'shni bo'lib, to'la do'stlikda yashagan yagona maskandir. Bu yerdagi xobbitlar o'zlarini Shireliklardan ko'ra qadimiyroq deb bilishgan, ammo ularning o'zaro mehmondo'stligi tengsiz edi. To'rtinchi Davrda shoh Elessar shimolga kelganida, Bree shaharchasi shohona himoya ostiga olindi va uning erkin fuqarolari o'zlarining qadimiy huquqlarini to'liq saqlab qoldilar. Bu shahar O'rta-yerning oddiy xalqlari qanday qilib totuv yashashi mumkinligining yorqin timsolidir."
  },
  'havens-of-sirion.json': {
    title: "Vingilot kemasining yasalishi va so'nggi najot umidi",
    content: "Sirion Bandargohlarida Tuor o'zining afsonaviy 'Eärrámë' (Dengiz Qanoti) kemasini qurdi va Idril bilan birga Boqiy G'arbga jo'nab ketdi. Keyinchalik ularning o'g'li Eärendil Círdan yordamida oq qayin yog'ochidan eng go'zal kema – Vingilotni (Ko'pik Guli) aynan shu yerda bunyod etdi. Sirion Havens Beleriandning butun fojialaridan so'ng qolgan so'nggi gullagan gulzori edi; u yerda to'plangan bolalar va ayollar o'zlarining so'nggi umidlarini Eärendilning yulduzli kemasiga bog'lagan edilar."
  },
  'alqualonde.json': {
    title: "Eldamar ko'rfazi tabiati va marvarid saroylar",
    content: "Alqualondë saroylari sof oq toshdan qurilgan bo'lib, ularning devorlari dengiz qirg'oqlaridan terilgan minglab yaltiroq marvaridlar va sadaflar bilan bezatilgan edi. Port kechalari Valinor nurlarida va elflarning qo'shiqlarida mislsiz go'zallik kasb etardi. Teleri elflari tabiatan tinchliksevar bo'lib, qurol-yarog' yasashga hech qachon qiziqmaganlar; ularning yagona quroli o'rmon va dengiz qushlarini ovlash uchun ishlatiladigan yengil kamonlar edi. Shu sababli Noldor qilichlari qarshisida ular butunlay himoyasiz qolgan edilar."
  },
  'morannon.json': {
    title: "Gorgoroth tekisligining mudofaasi va strategik to'siq",
    content: "Qora Darvoza faqat bitta temir darvozadan iborat bo'lmay, chuqur xandaqlar, o'tkir qoziqlar va tosh devorlar bilan mustahkamlangan ulkan mudofaa majmuasi edi. Undan o'tmasdan turib Mordorga shimol tomondan hech bir armiya kira olmasdi. Darvoza ortida son-sanoqsiz o'rk kazarmalari, zaharli suv quduqlari va qamal qurollari omborlari joylashgan edi. Halqa Urushida Sauron o'zining asosiy armiyasini aynan shu darvoza ortiga yashirib, Aragorn qo'shinini qurshovga olish uchun ulkan pistirma tayyorlagan edi."
  },
  'cirith-ungol.json': {
    title: "Gondorning qadimiy qal'asi va Uchinchi Davr zindoni",
    content: "Cirith Ungol minorasi dastlab So'nggi Ittifoq urushidan so'ng Gondor qirollari tomonidan Mordorni ichkaridan nazorat qilish va yovuzlikning qaytishini oldini olish maqsadida qurilgan edi. Biroq Gondor zaiflashgach, qal'a Nazgûllar tomonidan egallanib, Sauronning eng dahshatli zindoniga aylantirildi. Qal'a uch qavatli baland minoradan iborat bo'lib, uning ichida Shagrat va Gorbag boshchiligidagi o'rklar Frodo olib ketilganida mithril ko'ylak ustida qonli janjal ko'tarib, bir-birlarini qirib tashladilar."
  },
  'pelargir.json': {
    title: "Anduin deltasining savdo va harbiy markazi",
    content: "Pelargir Ikkinchi Davrda 'Sadoqatlilar' (Elendili) uchun O'rta-yerdagi eng boshlang'ich va asosiy port bo'lib xizmat qilgan. Shahar orqali Númenorning madaniyati, qonunlari va me'morchiligi O'rta-yerga kirib kelgan. Uchinchi Davrda ham shahar o'zining mahobatli tosh devorlari, navigatsiya maktablari va kemasozlik ustaxonalari bilan mashhur bo'lgan. Aragorn bu yerda dushman flotini yo'q qilgach, Pelargir yana o'zining tinch savdo va kemasozlik salohiyatini to'liq tikladi."
  },
  'dead-marshes.json': {
    title: "Sauron ta'siri, tumanlar va botqoq ruhiyatlari",
    content: "O'lik Botqoqliklar ustida doimo og'ir, bo'g'uvchi tuman suzib yuradi; u yerda qushlar sayramaydi, baliqlar yashamaydi va faqat zaharli o'tlar o'sadi. Suv yuzasidagi chiroqlar – bu aldov bo'lib, ularga qarab borgan sayohatchi o'z aqlini yo'qotadi. Gollum xobbitlarni bu botqoqlikdan olib o'tayotganda, ularni 'ko'zlarga qaramaslikka' qattiq ogohlantirgan edi. Bu botqoq O'rta-yer tarixidagi eng fojiali janglarning tirik la'nati bo'lib, urushning mudhish va sovuq xotirasini asrlar davomida saqlab turdi."
  },
  'paths-of-the-dead.json': {
    title: "Qora Darvoza, Dwimorberg qoyasi va Arvohlar shohi",
    content: "O'liklar Yo'li Dwimorberg (Arvohlar Tog'i) etagidagi Qora Qoyatosh darvozasidan boshlanadi. Yo'l ichida qadimiy insonlarning suyaklari, qulagan ustunlar va qora zallar joylashgan bo'lib, havoda qattiq sovuq va qabr nafasi hukm suradi. Arvohlar Shohi va uning lashkari ming yillar davomida bu qorong'ulikda o'z qasamyodlarining og'ir kishanlari ostida yashadilar. Aragorn ularni chaqirganida, ular o'zlarining uzoq kutilgan ozodliklari uchun Aragorn ortidan ergashdilar va Pelargirda o'z qonli qarzlarini uzdilar."
  }
};

for (const [file, sec] of Object.entries(boosts)) {
  const p = path.join(dir, file);
  if (!fs.existsSync(p)) continue;
  const original = JSON.parse(fs.readFileSync(p, 'utf8'));
  original.description_sections.push(sec);
  fs.writeFileSync(p, JSON.stringify(original, null, 2), 'utf8');
  console.log(`Boosted place: ${file}`);
}
