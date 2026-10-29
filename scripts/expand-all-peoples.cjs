const fs = require('fs');
const path = require('path');

const dir = path.resolve(process.cwd(), 'src/content/peoples');

function updatePeople(id, sections) {
  const file = path.join(dir, `${id}.json`);
  if (!fs.existsSync(file)) {
    console.warn(`File not found: ${file}`);
    return;
  }
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  data.description_sections = sections;
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated people: ${id}`);
}

// 1. NOLDOR
updatePeople('noldor', [
  {
    title: "Kelib chiqishi, Finwë va Ilm Elflari",
    content: "Noldor (Quenya tilida: 'Donishmandlar, Chuqur Ilm Egalari') — Elflarning Buyuk Sayohati (Great Journey) chogʻida Finwë boshchiligida Valinorga yetib borgan Ikkinchi Qavm (Tatyar tarmogʻi)dir. Ular oʻzlarining oʻtkir aqli, metallsozlik, zargarlik, tosh oʻymakorligi va tilshunoslikdagi beqiyos dehalari bilan barcha Ilúvatar farzandlaridan ajralib turganlar.\n\nValinorda Noldor Temirchi Vala Aulëdan hunarmandchilik sirlarini oʻrgandilar va Tuna tepaligidagi goʻzal Tirion shahrida yashadilar. Fëanor Tengwar yozuvini, Palantírlarni va muqaddas Silmarillarni yaratdi."
  },
  {
    title: "Morgoth zulmati, Qasamyod va Beleriandga qaytish",
    content: "Melkor Finwëni oʻldirib, Silmarillarni oʻgʻirlab qochgach, Fëanor Noldorni qasamyod bilan Beleriandga boshladi. Qardoshlar qirgʻini (Alqualondë) va Mandos Laʼnati ularning barcha ezgu amallariga fojia soyasini soldi.\n\nBeleriandda Noldor buyuk shohliklarga — Hithlum, Nargothrond, Doriath chegaralari va yashirin Gondolinga asos soldilar. Ular yuzlab yillar davomida Morgothning son-sanoqsiz armiyalariga qarshi mardona jang olib bordilar."
  },
  {
    title: "Taqdir: Boʻshliq va Boqiy Gʻarbga qaytish",
    content: "Birinchi Davr urushlarida Noldor shohliklari birin-ketin quladi. Gʻazab Urushidan soʻng ularning koʻpchiligi Valinorga qaytdi, Oʻrta-yerda qolgan qismi esa Gil-galad boshchiligida Lindon va Celebrimbor boshchiligida Eregionda yashadi.\n\nHalqa Urushidan soʻng Oʻrta-yerdagi soʻnggi Noldor zodagonlari (Galadriel, Elrond) kemalarda Boqiy Gʻarbga qaytib, Noldorning Oʻrta-yerdagi uzoq va shonli davriga xotima yasadilar."
  }
]);

// 2. SINDAR
updatePeople('sindar', [
  {
    title: "Kulrang Elflar va Beleriand oʻrmonlari",
    content: "Sindar (Quenya tilida: 'Kulrang Elflar') — Buyuk Sayohat chogʻida dengiz ortidagi Valinorga oʻtmasdan, Oʻrta-yerning gʻarbiy Beleriand oʻrmonlarida qolgan Teleri qavmidir. Ularning shohi Elu Thingol (Elwë Singollo) dono Maia Melian bilan uchrashib, buyuk Doriath qirolligiga asos soldi.\n\nSindar garchi Ikki Daraxt nurini bevosita koʻrmagan boʻlsa-da (Moriquendi), Melianning ilohiy taʼlimoti sababli boshqa barcha Oʻrta-yer elflaridan yuksak madaniyat, donishmandlik va musiqa sanʼatiga ega boʻldilar."
  },
  {
    title: "Círdan va Sohil Elflari",
    content: "Sindarning gʻarbiy tarmogʻi boʻlgan Falathrim dengizchi Círdan boshchiligida Brithombar va Eglarest portlarida kema qurish sanʼatini kashf etdi. Ular butun Beleriand boʻylab xabarlar va yuklarni tashuvchi dengizchilar boʻldilar.\n\nBirinchi Davr fojialaridan soʻng omon qolgan Sindar Noldor bilan qoʻshilib ketdi, ammo ularning tili — Sindarin butun Ikkinchi va Uchinchi Davrlarda Oʻrta-yerning rasmiy elflar tili boʻlib qoldi."
  }
]);

// 3. EDAIN
updatePeople('edain', [
  {
    title: "Elflar Doʻstlari: Insonlarning Uch Xonadoni",
    content: "Edain (Sindarincha: Adan soʻzining koʻpligi — 'Insonlar') — Birinchi Davrda sharqdagi zulmatdan qochib, Beleriandga yetib kelgan va Morgothga qarshi urushda Elflar tomonida turgan insonlarning uchta olijanob qabilasidir:\n1. Bëor Xonadoni: donishmand, sabrli va elflarga eng yaqin insonlar (Beren ajdodlari).\n2. Haleth Xonadoni (Haladin): ozodliksevar, Brethil oʻrmonida yashovchi jangari xalq.\n3. Marach va Hador Xonadoni: baland boʻyli, oltin sochli, jasur jangchilar (Húrin, Túrin, Huor va Tuor ajdodlari)."
  },
  {
    title: "Morgothga qarshi qurbonlik va Númenor inʼomi",
    content: "Edain Nirnaeth Arnoediad va Dagor Bragollach janglarida mislsiz qahramonlik koʻrsatib, oʻz hayotlarini Noldor elflarini qutqarishga qurbon qildilar. Aynan Edain va Elflar ittifoqidan Beren va Lúthien, Tuor va Idril nikohi vujudga keldi.\n\nGʻazab Urushidagi sadoqatlari uchun Valar Edain omon qolgan avlodlariga Katta Dengiz oʻrtasida jannatmonand Andor (Númenor) orolini inʼom etdi va ularga uzoq umr hamda donishmandlik baxsh etdi."
  }
]);

// 4. DÚNEDAIN
updatePeople('dunedain', [
  {
    title: "Gʻarb Insonlari va Shimoliy Chegarachilar",
    content: "Dúnedain (Sindarincha: 'Gʻarb Insonlari') — Númenor halokatidan soʻng Elendil va uning oʻgʻillari bilan Oʻrta-yerga qochib kelgan Sodiqlar (The Faithful) avlodlaridir. Ular Shimolda Arnor, Janubda esa Gondor qirolliklariga asos soldilar.\n\nDúnedain oddiy insonlardan uch barobar uzoq umr koʻrishi, baland boʻyi, viqorli aqli va tabobat sanʼati bilan ajralib turardi."
  },
  {
    title: "Arnorning qulashi va Darbadarlar sardorligi",
    content: "Angmar Jodugar-shohi Arnor qirolligini vayron qilgach, Shimoliy Dúnedain yashirin hayot tarziga oʻtdi. Ular 'Dúnedain Chegarachilari' (Rangers of the North) deb atala boshlandi.\n\nArathorn va Aragorn boshchiligidagi bu kamsonli jasur insonlar yuzlab yillar davomida Shir, Bree va Eriador aholisini oʻrklar va qora maxluqlardan yashirincha himoya qilib keldilar. Halqa Urushidan soʻng Aragorn II Elessar ostida Dúnedain yana Oʻrta-yerning hukmron xalqiga aylandi."
  }
]);

// 5. ROHIRRIM
updatePeople('rohirrim', [
  {
    title: "Otlar Hukmdorlari va Eorl Qasamyodi",
    content: "Rohirrim (Sindarincha: 'Ot Hukmdorlari Xalqi') — Rohan qirolligida yashovchi, jasur, ozodliksevar va tulporlarni muqaddas deb biluvchi insonlar xalqidir. Ular aslida shimoldagi Anduin vodiylarida yashagan Éothéod xalqidan kelib chiqqan.\n\nUchinchi davrning 2510-yilida Celebrant Dalasi jangida Gondor dushman qurshovida qolganida, yosh sardor Eorl the Young oʻz otliqlari bilan yetib kelib Gondorni xalos etdi. Minnatdor Bosh Noib Cirion Rohirrimga Calenardhon (Rohan) yerlarini abadiy meros qilib berdi va ikki xalq oʻrtasida abadiy harbiy ittifoq — Eorl Qasamyodi tuzildi."
  },
  {
    title: "Mearas zoti va jangovar madaniyat",
    content: "Rohirrim dunyodagi eng olijanob va tezkor otlar — afsonaviy Felaróf naslidan boʻlgan Mearas tulporlarini parvarish qilganlar (jumladan Gandalfning oti Shadowfax). Ular tosh qalʼalardan koʻra keng yashil yaylovlar, ot ustidagi nayzabozlik va quvnoq qoʻshiqlarni afzal koʻrganlar."
  }
]);

// 6. XOBBITLAR
updatePeople('xobbitlar', [
  {
    title: "Yarim-odamlar va ularning uch tarmogʻi",
    content: "Xobbitlar (Halflings / Kuduk) — insonlar irqining oʻziga xos kichik boʻyli, xushchaqchaq, yerga va tinch hayotga mehr qoʻygan ajralmas tarmogʻidir. Ularning boʻyi odatda 3–4 fut (taxminan 1 metr) boʻlib, oyoqlari qalin yungli va pishiq teri bilan qoplanganligi sababli poyabzal kiymaydilar.\n\nXobbitlar dastlab uchta asosiy qabilaga boʻlingan:\n1. Harfoots (Tukoyoqlar): eng koʻpsonli, yer qazib tepaliklarda yashashni yoqtiruvchi xobbitlar.\n2. Fallohides (Oqsochlar): baland boʻyli, jasur va elflar bilan doʻstlashgan kamsonli qabila (Took va Bagginslarda ularning qoni bor).\n3. Stoors (Yiriklar): keng yelkali, daryo boʻylarida yashovchi, suzish va qayiq haydashni biluvchi xobbitlar (Gollum / Sméagol shu nasldan)."
  },
  {
    title: "Shayrning tashkil topishi va Oʻrta-yer najoti",
    content: "Uchinchi davrning 1601-yilida Marcho va Blanco boshchiligidagi xobbitlar Brendivin daryosidan oʻtib, Shayrga (The Shire) asos soldilar. Ular tashqi dunyo urushlaridan xoli, dehqonchilik, toʻkin dasturxon va bayramlar bilan tinch hayot kechirdilar.\n\nBiroq aynan xobbitlarning soddaligi, pokiza qalbi va hokimiyatga hirs qoʻymasligi ularni Yagona Uzukning dahshatli vasvasasiga qarshi butun olamdagi eng bardoshli zotlarga aylantirdi. Bilbo, Frodo, Sam, Merry va Pippin Oʻrta-yer tarixining yoʻnalishini butunlay oʻzgartirdilar."
  }
]);

// 7. XAZAD (MITTILAR)
updatePeople('xazad', [
  {
    title: "Aulëning Yetti Otasi va toshdan yaralish",
    content: "Xazad (Mitti tilida: Khazâd) — Temirchi Vala Aulë tomonidan Ilúvatar farzandlaridan avval, tosh va temir qaʼrida yashirincha yaratilgan qatʼiyatli, metindek pishiq xalqdir. Ilúvatar ularga jon ato etgan, ammo elflar uygʻonmaguncha uxlab yotishni buyurgan.\n\nMittilar Yetti Otadan tarqalgan boʻlib, ularning eng mashhuri — Khazad-dûm asoschisi Durin I (Oʻlimsiz Durin)dir. Ular togʻlar qaʼrini qazish, tosh yoʻnish, temirchilik va zargarlikda tengsiz deha hisoblanadilar."
  },
  {
    title: "Buyuk saltanatlar va boylik fojiasi",
    content: "Mittilar Beleriandda Nogrod va Belegost, Tumanli Togʻlarda Khazad-dûm (Moria), shimolda Erebor va Temir Tepaliklar (Iron Hills) kabi buyuk yerosti saltanatlarini barpo etdilar.\n\nBiroq ularning oltinga boʻlgan cheksiz muhabbati koʻp bor fojialarga sabab boʻldi: Moriada Balrogning uygʻonishi, Ereborda ajdar Smaugning bosqini va Doriath bilan yuz bergan qonli urushlar shular jumlasidandir. Halqa Urushida Gimli va Dáin Ironfoot erkin xalqlar safida turib buyuk gʻalabaga hissa qoʻshdilar."
  }
]);

// 8. ISTARI (SEHRGARLAR ORDENI)
updatePeople('istari', [
  {
    title: "Valinor elchilari va cheklangan qudrat",
    content: "Istari (Sindarincha: Ithryn — 'Sehrgarlar') — Uchinchi davrning taxminan 1000-yilida Valar tomonidan Oʻrta-yer xalqlariga Sauronga qarshi kurashda koʻmaklashish uchun joʻnatilgan besh nafar Maia ruhlaridir: Saruman Oq (Curumo), Gandalf Kulrang (Olórin), Radagast Qoʻngʻir (Aiwendil) va Ikki Moviy Sehrgar (Alatar va Pallando).\n\nValar ularga oʻzlarining toʻliq ilohiy qudratini koʻrsatishni, qoʻrquv bilan boʻysundirishni yoki kuch bilan hukmronlik qilishni qatʼiyan taqiqladi. Ular qariya insonlar qiyofasiga kirib, ochlik, charchoq va dard kabi foniy vujud cheklovlarini qabul qildilar."
  },
  {
    title: "Burch va sinov: Sarumanning qulashi va Gandalf zafari",
    content: "Besh Istaridan faqat Gandalf oʻz ilohiy burchiga oxirigacha sodiq qoldi. Saruman Yagona Uzuk va hokimiyat vasvasasiga uchrab xoinlik yoʻliga kirdi; Radagast qushlar va yovvoyi hayvonlar mehriga berilib urushdan chetda qoldi; Moviy Sehrgarlar esa Sharqqa ketib gʻoyib boʻldilar.\n\nGandalf erkin xalqlar qalbida umid va jasorat uygʻotib, Sauron ustidan qozonilgan mutlaq gʻalabaning bosh meʼmoriga aylandi."
  }
]);

// 9. ENTLAR (ONODRIM)
updatePeople('entlar', [
  {
    title: "Daraxtlar Choʻponlari va Yavanna iltijosi",
    content: "Entlar (Sindarincha: Onodrim) — Daraxtlar Davrida Vala Yavannaning Eru Ilúvatarga qilgan iltijosi bilan dunyoga kelgan qadimiy Daraxtlar Choʻponlaridir. Yavanna Aulëning mittilari va kelajakdagi insonlar oʻrmonlarni ayovsiz qirqib tashlashidan qoʻrqib, daraxtlarni himoya qiluvchi ongli jonivorlar yaratilishini soʻragan edi.\n\nEntlar bahaybat daraxtsimon qomatga, sekin ammo metindek kuchli harakatga va chuqur donishmandlikka ega. Ular soatlab fikrlaydilar va oʻzlarining qadimiy Ent tilida shoshilmasdan gaplashadilar."
  },
  {
    title: "Ent-xotinlarning yoʻqolishi va Isengard qasosi",
    content: "Ikkinchi Davrda Entlarning xotinlari (Entwives) Anduinning narigi tomonidagi bogʻdorchilik yerlariga ketdilar; keyinchalik Sauron oʻsha yerlarni yondirib tashlagach (Brown Lands), Ent-xotinlar butkul yoʻqolib ketdi va Entlar yangi naslsiz qolib, asta-sekin soni kamayib bordi.\n\nHalqa Urushida Sarumanning Fangorn daraxtlarini qirqishi Entlarni gʻazabga keltirdi. Treebeard boshchiligidagi Entlar Isengardga bostirib kirib, qalʼani vayron qildilar va Uruk-hailarni butkul qirib tashladilar."
  }
]);

// 10. NÚMENORLIKLAR
updatePeople('numenorliklar', [
  {
    title: "Dengiz Qirollari va Andor oroli",
    content: "Númenorliklar (Dúnedain) — Ikkinchi Davrda Katta Dengiz oʻrtasidagi besh burchakli yulduz shaklidagi Andor orolida yashagan eng qudratli insonlar tsivilizatsiyasidir. Ularning birinchi shohi Elros Tar-Minyatur (Elrondning egizak akasi) boʻlgan.\n\nNúmenorliklar kema qurish, meʼmorchilik, astronomiya va navigatsiya sanʼatida butun dunyoga ustozlik qildilar. Ular Oʻrta-yer qirgʻoqlariga kelib, yovvoyi insonlarga qishloq xoʻjaligi, temirchilik va qonunlarni oʻrgatdilar."
  },
  {
    title: "Kibr, boʻlinish va Akallabêth",
    content: "Vaqt oʻtishi bilan Númenorliklar qalbida oʻlimdan qoʻrqish va Valinor elflarining boqiyligiga hasad uygʻondi. Xalq ikki toifaga boʻlindi: koʻpchilikni tashkil etgan 'Qirol Odamlari' (Valarga qarshi chiqqanlar) va ozchilik 'Sodiqlar' (Elendil va uning oilasi).\n\nSauron vasvasasi bilan Qirol Ar-Pharazôn Valinorga harbiy yurish qilganda, Eru Ilúvatar Númenor orolini okean tubiga gʻarq qildi va buyuk saltanat yoʻq boʻldi."
  }
]);

// 11. NANDOR VA SILVAN (OʻRMON ELFLARI)
updatePeople('nandor-va-silvan', [
  {
    title: "Tumanli Togʻlar ortida qolgan elflar",
    content: "Nandor (Quenya tilida: 'Ortga Qaytganlar') — Buyuk Sayohat chogʻida Tumanli Togʻlarning ulkan choʻqqilarini koʻrib, ularni kesib oʻtishdan qoʻrqqan va Lenwë boshchiligida Anduin daryosi boʻylab janubga ketgan Teleri elflaridir.\n\nUlarning bir qismi keyinchalik Beleriandga oʻtib Ossiriandda 'Yashil Elflar' (Laiquendi) deb nomlangan; asosiy qismi esa Buyuk Yashil Oʻrmon (Mirkwood) va Lothlórienda yashab qolib, Silvan (Oʻrmon Elflari) madaniyatiga asos solgan."
  },
  {
    title: "Sindar zodagonlari va tabiat bilan uygʻunlik",
    content: "Silvan elflari shaharlar yoki tosh saroylar qurmaganlar; ular daraxtlar, daryolar va oʻrmon sukunatida yashashni xush koʻrganlar. Ikkinchi Davrda ularning ustidan hukmronlik qilish uchun olijanob Sindar zodagonlari — Mirkwoodda Oropher va Thranduil, Lórienda esa Amdír va Celeborn keldilar.\n\nUlar Halqa Urushida Sauronning shimoliy qoʻshinlariga qaqshatqich zarbalar berib, oʻz oʻrmonlarini yovuzlikdan tozaladilar."
  }
]);
