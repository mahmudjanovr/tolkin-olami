const fs = require('fs');
const path = require('path');

const dir = path.resolve(process.cwd(), 'src/content/places');

function updatePlace(id, sections, summaryOverride) {
  const file = path.join(dir, `${id}.json`);
  if (!fs.existsSync(file)) {
    console.warn(`File not found: ${file}`);
    return;
  }
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  data.description_sections = sections;
  if (summaryOverride) data.summary = summaryOverride;
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated place: ${id}`);
}

// 1. EDORAS
updatePlace('edoras', [
  {
    title: "Meduseld Oltin Saroyi va yashil tepalik",
    content: "Edoras (Qadimgi inglizcha: 'Qoʻrgʻonlar, Hissarlar') — Oq Togʻlar etagidagi Harrowdale vodiysi ogʻzida, yashil tepalik ustida barpo etilgan Rohan qirolligining poytaxtidir. Shahar pishiq yogʻoch va tosh devorlar hamda chuqur xandaq bilan himoyalangan.\n\nTepalik choʻqqisida Rohan shohlarining bosh qarorgohi — Meduseld (Oltin Saroy) qad rostlagan. Uning tomi uzoq-uzoqlardan oltindek yaraqlab turadi, ichki zallari esa afsonaviy otlar, qahramonlar va janglar aks etgan yogʻoch oʻymakorligi bilan bezatilgan."
  },
  {
    title: "Tarixiy asos solinishi va podshohlar tepaliklari",
    content: "Shahar Uchinchi davrning 2569-yilida Eorlning oʻgʻli Brego tomonidan barpo etilgan. Dastlabki poytaxt Framsburg boʻlgan boʻlsa-da, janubga koʻchgan Rohirrim oʻzlariga Edorasni yangi markaz qilib tanladilar.\n\nShahar darvozasi oldidagi maydonda ikki qator qadimiy maqbara-tepaliklar (barrow-mounds) joylashgan boʻlib, ularda Eorl xonadonining toʻqqiz nafar birinchi sulola va sakkiz nafar ikkinchi sulola podshohlari dafn etilgan. Bu tepaliklar ustida oq rangli, soʻnmas xotira guli — Simbelmynë (Evermind) qor kabi qoplab oʻsadi."
  },
  {
    title: "Halqa Urushi va Théodenning uygʻonishi",
    content: "3019-yil 2-martida Gandalf, Aragorn, Legolas va Gimli Meduseld saroyiga kirib keldilar. Gandalf saroy zalida shoh Théodenni Sarumanning josusi Gríma Wormtongue taʼsiridan va sehrli mudroqlikdan xalos etdi. Shoh oʻz qilichi Herugrimni yalangʻochlab, Edorasdan Helm's Deep tomon yurish boshladi."
  }
]);

// 2. HELM'S DEEP
updatePlace('helms-deep', [
  {
    title: "Hornburg qalʼasi va Deeping devori",
    content: "Helm's Deep (Helm Tubsizligi) — Oq Togʻlarning shimoli-gʻarbiy tizmasida joylashgan tor va chuqur vodiy-daradir. Uning ostonasida tabiiy tosh qoya ustida qadimiy mustahkam tosh qalʼa — Hornburg qad rostlagan.\n\nQalʼadan vodiy boʻylab ulkan Deeping Wall (Tubsizlik devori) tortilgan boʻlib, u yigirma fut balandlikdagi pishiq Númenor toshlaridan terilgan. Devor ostidan Deeping Stream soy oqib oʻtadi; orqa tomonda esa Aglarondning (Yarqiroq Gʻorlar) ulkan yerosti gʻorlari boshlanadi."
  },
  {
    title: "Helm Hammerhand afsonasi",
    content: "Qalʼa oʻz nomini Rohan Qiroli Helm Hammerhand sharafiga olgan. Uchinchi davrning 2758-2759 yillaridagi Qattiq Qish (Long Winter) paytida dunlandliklar Rohanga bostirib kirganida, Helm oʻz xalqi bilan shu yerga panoh tortdi.\n\nHelm har kecha oq libosda qor boʻroni orasida yolgʻiz chiqib, qurolsiz — faqat yalangʻoch mushti bilan dushmanlarni oʻldirar edi. Bir kuni tongda u devor ustida muzlab qotgan holda topildi, ammo uning qaddi tik turar edi. Rivoyatlarga koʻra, xavf tugʻilganda Hornburg minorasidagi Helm karnayi oʻz-oʻzidan chalinib dushman qalbiga dahshat soladi."
  },
  {
    title: "Hornburg jangi (Battle of the Hornburg)",
    content: "3019-yil 3-4-mart kechasida Sarumanning oʻn minglik Uruk-hai armiyasi qalʼaga hujum qildi. Sarumanning 'portlovchi olovi' Deeping devorini yorib oʻtdi. Tong otaverganida Théoden va Aragorn darvozadan otliq hujum qildilar. Shu paytda Gandalf va Erkenbrand qoʻshini yetib keldi, Fangorn oʻrmonidan kelgan Huornlar esa oʻrklarni butkul qurshab yoʻq qildi."
  }
]);

// 3. DUNHARROW
updatePlace('dunharrow', [
  {
    title: "Baland togʻ panohgohi va Firienfeld",
    content: "Dunharrow — Oq Togʻlarning Starkhorn choʻqqisi etagidagi baland qoyatosh tekisligi (Firienfeld) ustida joylashgan yengilmas qadimiy istehkomdir. Unga olib boruvchi yagona yoʻl qoyatoshga oʻyilgan ilon izi (zigzag) zinalardan iborat.\n\nZinalar boʻylab qadimiy davrlarda Insonlar tomonidan oʻyilgan bahaybat Púkel-men (tosh haykallar) oʻrnatilgan. Tekislik oxirida qaragʻayzorlar ortida Oʻliklar Yoʻlining qora darvozasi (Dark Door) joylashgan."
  },
  {
    title: "Rohan armiyasining yigʻilishi",
    content: "3019-yil martida Shoh Théoden Rohanning barcha viloyatlaridan kelgan chavandozlarni aynan Dunharrow tekisligida toʻpladi. Bu yerda olti ming kishilik saralangan otliq qoʻshin Pelennor jangi uchun qasamyod qildi. Éowyn va Merry ham aynan shu yerdan yashirincha jangga otlandilar."
  }
]);

// 4. ISENGARD (ANGRENOST)
updatePlace('isengard', [
  {
    title: "Orthanc minorasi va tosh xalqa",
    content: "Isengard (Sindarincha: Angrenost — 'Temir Qalʼa') — Tumanli Togʻlarning eng janubiy etagida, Isen daryosi vodiysida joylashgan ulkan doirasimon tosh qalʼadir. U Ikkinchi davrda Númenorliklar tomonidan Rohan Boʻgʻozini nazorat qilish uchun qurilgan.\n\nQalʼa markazida toʻrtta qora yaltiroq obsidian tosh ustunidan iborat, balandligi besh yuz fut keladigan yengilmas Orthanc minorasi qad rostlagan. Minorani hech qanday qurol, olov yoki manjaniq bilan sindirib boʻlmas edi."
  },
  {
    title: "Saruman xiyonati va sanoatlashtirish",
    content: "Uchinchi davrning 2759-yilida Gondor Bosh Noibi Beren Isengard kalitlarini Sarumanga topshirdi. Dastlab Oq Kengash tayanchi boʻlgan sehrgar, keyinchalik Yagona Uzuk va hokimiyat vasvasasiga tushib, qalʼani dahshatli sanoat va qurol-yarogʻ zavodiga aylantirdi.\n\nU goʻzal bogʻlarni yoʻq qilib, yerosti temirchilik oʻchoqlari, oʻrklar kazarmalari va Uruk-hai laboratoriyalarini ochdi."
  },
  {
    title: "Entlarning qasosi va Treegarth of Orthanc",
    content: "3019-yil martida daraxtlarning kesilishidan gʻazablangan Treebeard va Entlar Isengardga bostirib kirdilar. Ular tosh toʻgʻonlarni buzib, daryo suvini Isengard zaminiga burib yubordilar va barcha yerosti zavodlarini suvga choʻktirdilar.\n\nUrushdan soʻng Entlar bu yerga yangi daraxtlar va gullar ekib, uni 'Treegarth of Orthanc' deb atadilar va Qirol Elessar tasarrufiga berdilar."
  }
]);

// 5. AMON HEN
updatePlace('amon-hen', [
  {
    title: "Nazar Tepaligi va Koʻruvchi Taxt",
    content: "Amon Hen (Sindarincha: 'Koʻz Tepaligi' yoki 'Nazar Tepaligi') — Anduin daryosining oʻng qirgʻogʻida, Nen Hithoel koʻlining janubiy chekkasida joylashgan qadimiy tepalikdir. Qarama-qarshi qirgʻoqda Amon Lhaw ('Quloq Tepaligi') joylashgan.\n\nTepalik choʻqqisida Ikkinchi davrda Gondorliklar tomonidan toshdan yasalgan Koʻruvchi Taxt (Seat of Seeing) oʻrnatilgan boʻlib, unda oʻtirgan odam yuzlab chaqirim naridagi olislarni ravshan koʻra olar edi."
  },
  {
    title: "Uzuk Birodarligining parchalanishi",
    content: "3019-yil 26-fevralida Uzuk Birodarligi Amon Henda toʻxtadi. Shu yerda Boromir Frodoning uzugini tortib olmoqchi boʻldi. Frodo qochib chiqib, Koʻruvchi Taxtga oʻtirdi va Yagona Uzuk orqali Oʻrta-yerdagi barcha urushlar, Minas Tirith qamali va Barad-dûrdagi Qora Koʻzning oʻziga tikilib turganini koʻrdi.\n\nTepalik etagidagi oʻrmonda Boromir Merry va Pippinni himoya qilib qahramonlarcha halok boʻldi. Bu voqea bilan Uzuk Birodarligi parokanda boʻlib, qahramonlar oʻzlarining alohida taqdirlari tomon yoʻl oldilar."
  }
]);

// 6. AMON SÛL (WEATHERTOP)
updatePlace('amon-sul', [
  {
    title: "Ob-havo Choʻqqisi va Arnorning bosh minorasi",
    content: "Amon Sûl (Sindarincha: 'Shamol Choʻqqisi'), insonlar tilida Weathertop — Shamol Tepaliklarining (Weather Hills) eng baland choʻqqisidir. U Buyuk Sharqiy Yoʻl ustida qad rostlagan boʻlib, keng Eriador tekisliklarini toʻliq nazorat qilgan.\n\nIkkinchi davrda Elendil bu yerda ulkan qoʻriqchi minora barpo etgan va unda Shimoliy Arnor qirolligining bosh Palantíri saqlangan. Ushbu tosh orqali Gondordagi Osgiliath va Minas Anor bilan toʻgʻridan-toʻgʻri aloqa bogʻlangan."
  },
  {
    title: "Arnorning boʻlinishi va minoraning yonishi",
    content: "Arnor uchta kichik qirollikka (Arthedain, Cardolan, Rhudaur) boʻlingach, Amon Sûl va uning Palantíri sababli qonli qardoshlar urushlari boʻlib oʻtdi. Uchinchi davrning 1409-yilida Angmar Jodugar-shohi qoʻshinlari tepalikni qamal qilib, minorani yoqib yubordi va yer bilan yakson qildi; biroq Palantír Fornostga olib chiqib ketildi."
  },
  {
    title: "Frodoning yaralanishi va Gandalf jangi",
    content: "3018-yil oktyabr oyida Gandalf minora xarobalarida toʻqqiz Nazgûl bilan tungi shiddatli jang olib bordi va chaqmoqlar chaqnatdi. Bir necha kundan soʻng Aragorn va toʻrt xobbit bu yerga yetib kelib tunadilar.\n\nKechasi Angmar Jodugar-shohi boshchiligidagi beshta Nazgûl ularga hujum qildi. Frodo Uzukni taqqanida Jodugar-shoh uni koʻrib, yelkasiga zaharli Morgul pichogʻi bilan halokatli jarohat yetkazdi."
  }
]);

// 7. RIVENDELL (IMLADRIS)
updatePlace('rivendell', [
  {
    title: "Tumanli Togʻlar etagidagi yashirin vodiy",
    content: "Rivendell (Sindarincha: Imladris — 'Yoriqdagi Chuqur Vodiy') — Tumanli Togʻlarning gʻarbiy etagida, Bruinen (Shovqinli) daryosining chuqur va daraxtzor kanyonida joylashgan afsonaviy elf maskanidir. Vodiy shunchalik ustalik bilan yashirilganki, yoʻlovchi uning chekkasiga yetib kelmaguncha pastdagi goʻzallikni payqay olmaydi.\n\nVodiyga kirish faqat Bruinen kechuvi orqali mumkin boʻlib, xavf tugʻilganda Elrond Vilya uzugi yordamida daryo suvlarini otliqlar kabi shiddatli toshqinga aylantirib dushmanni yuvib ketishi mumkin edi."
  },
  {
    title: "Soʻnggi Qulay Boshpana (The Last Homely House)",
    content: "Vodiy markazida Elrondning saroyi — Soʻnggi Qulay Boshpana (The Last Homely House East of the Sea) joylashgan. Bu yerda elflar, insonlar, mittilar va xobbitlar birdek iliq kutib olinadi. Saroyda qoʻshiqlar, sheʼriyat, tarixiy solnomalar va boqiy sukunat hukm suradi; bu yerda vaqt tashqi dunyodagidek shoshilmaydi."
  },
  {
    title: "Elrond Kengashi va Uzuk Birodarligi",
    content: "Rivendell Oʻrta-yer tarixidagi eng muhim qarorlar qabul qilingan markazdir. 2941-yilda Thorin va Bilbo bu yerda oy harflarini oʻqiganlar; 3018-yil 25-oktyabrida esa mashhur Elrond Kengashi chaqirilib, Yagona Uzukni yoʻq qilish uchun toʻqqiz aʼzodan iborat Uzuk Birodarligi tuzildi."
  }
]);

// 8. BREE (SEROB)
updatePlace('bree', [
  {
    title: "Ikki xalqning qadimiy chorrahasi",
    content: "Bree — Sharqiy Yoʻl va Yashil Yoʻl (Greenway) kesishmasidagi Bree Tepaligi etagida joylashgan eng qadimiy insonlar posyolkasidir. U Oʻrta-yerdagi insonlar va xobbitlar yonma-yon, ahil va doʻstona yashaydigan yagona noyob maskan hisoblanadi.\n\nPosyolka qalin tikanli toʻsiq va chuqur xandaq bilan oʻralgan boʻlib, uning darvozalari kechalari qulflab qoʻyiladi."
  },
  {
    title: "Sakrovchi Poni (The Prancing Pony) tavernasining oʻrni",
    content: "Bree markazida Barliman Butterbur egalik qiluvchi mashhur 'Sakrovchi Poni' mehmonxonasi joylashgan. Bu joy yoʻlovchilar, savdogarlar va darbadarlar uchun bosh axborot almashish markazi boʻlgan.\n\n3018-yil sentyabrida Frodo aynan shu mehmonxonada beixtiyor Uzukni taqib koʻzdan gʻoyib boʻldi va 'Strider' (Aragorn) bilan ilk bor uchrashdi. Bu uchrashuv butun Halqa Urushining taqdirini hal qildi."
  }
]);

// 9. ERED LUIN (MOVIY TOGʻLAR)
updatePlace('ered-luin', [
  {
    title: "Moviy Togʻlar: Beleriand chegarasi va mittilar vatani",
    content: "Ered Luin (Moviy Togʻlar) — Oʻrta-yerning eng gʻarbiy chekkasida shimoldan janubga choʻzilgan qadimiy togʻ tizmasidir. Birinchi Davrda u Beleriand va Eriador oʻrtasidagi tabiiy chegara boʻlib, uning qaʼrida Mittilarning ikki buyuk shahri — Nogrod va Belegost joylashgan edi.\n\nGʻazab Urushida Beleriand dengizga choʻkkach, Moviy Togʻlar oʻrtasidan yorilib, Lhûn koʻrfazi (Gulf of Lhûn) vujudga keldi."
  },
  {
    title: "Surgundagi Durin xonadoni va Erebor safari boshlanishi",
    content: "Smaug Ereborni vayron qilgach, Thráin II va Thorin Oakenshield boshchiligidagi Durin xalqi Moviy Togʻlarga koʻchib kelib yangi konlar va saroylar barpo etdilar. Ular bu yerda qurolsozlik va temirchilik bilan kun kechirdilar.\n\nThorin aynan Moviy Togʻlardagi qarorgohidan oʻzining tarixiy Erebor safarini rejalashtirgan va Gandalf bilan ilk uchrashuvini oʻtkazgan."
  }
]);

// 10. KHAZAD-DÛM (MORIA)
updatePlace('khazad-dum', [
  {
    title: "Mittilarning ulugʻvor poytaxti va Durin taxti",
    content: "Khazad-dûm (Mitti tilida: 'Mittilar Qasri'), keyinchalik Moria ('Qora Tubsizlik') deb atalgan ulkan yerosti saltanati Tumanli Togʻlar qaʼrida joylashgan. U Mittilarning Birinchi Otasi — Durin I (Oʻlimsiz Durin) tomonidan Daraxtlar Davrida Kheled-zâram (Koʻzgu Koʻli) boʻyida barpo etilgan.\n\nSaltanat Tumanli Togʻlarni gʻarbdan sharqqa tomon toʻliq kesib oʻtuvchi yuzlab ulkan zallar, marmar ustunlar, cheksiz konlar va koʻpriklardan iborat edi. Dunyodagi yagona qimmatbaho metall — Mithril (Haqiqiy Kumush) faqat shu yerda qazib olinar edi."
  },
  {
    title: "Durin Falakati va saltanatning qulashi",
    content: "Uchinchi davrning 1980-yilida mittilar mithril qidirib Barazinbar togʻi qaʼrini haddan ziyod chuqur qazdilar va u yerda Birinchi Davrdan beri uxlab yotgan dahshatli iblis — Morgothning Balrogini uygʻotdilar. Balrog Qirol Durin VI va uning oʻgʻli Náinni oʻldirdi.\n\nMittilar oʻzlarining ming yillik poytaxtini tashlab qochishga majbur boʻldilar. Khazad-dûm oʻrklar va qora maxluqlar makoniga aylanib, 'Moria' deb atala boshlandi."
  },
  {
    title: "Uzuk Birodarligi va Gandalf jangi",
    content: "3019-yil yanvarida Uzuk Birodarligi Moria orqali sharqqa oʻtishga majbur boʻldi. Mazarbul zalida Balin ekspeditsiyasi qabrini topganlaridan soʻng oʻrklar hujumiga uchradilar.\n\nKhazad-dûm koʻprigida Gandalf Balrog bilan toʻqnashdi: 'Bu yerdan oʻtolmaysan!' deb qadimiy tosh koʻprikni parchaladi va iblis bilan birga cheksiz tubsizlikka quladi. Zirakzigil choʻqqisidagi afsonaviy jangda Gandalf Balrogni magʻlub etdi."
  }
]);

// 11. EREBOR (LONELY MOUNTAIN)
updatePlace('erebor', [
  {
    title: "Yolgʻiz Togʻ va Boylik Saltanati",
    content: "Erebor (Sindarincha: 'Yolgʻiz Togʻ') — Mirkwood oʻrmonidan sharqda, Running daryosi (Celduin) boshlanishida keng tekislikda yolgʻiz qad rostlagan ulkan togʻdir. Uchinchi davrning 1999-yilida Moria qulaganidan soʻng Thráin I tomonidan yangi mitti qirolligi sifatida asos solingan.\n\nTogʻ qaʼrida Mittilarning eng muqaddas gavhari — Arkenstone (Togʻ Yuragi) topilgan. Erebor tez orada ulkan boylik, zargarlik, savdo va metallsozlik markaziga aylandi; uning etagida insonlarning boy Dale shahri qad rostladi."
  },
  {
    title: "Smaugning qulashi va Besh Armiya Jangi",
    content: "2770-yilda oltin ajdar Smaug toʻsatdan Ereborni zabt etib, gnomlar va odamlarni qirib tashladi. 2941-yilda Thorin Oakenshield va Bilbo Baggins safar uyushtirib, Smaugni magʻlub etishga erishdilar.\n\nSmaug halok boʻlgach, togʻ ostonasida mashhur Besh Armiya Jangi boʻlib oʻtdi. Mittilar, Elflar va Insonlar birlashib oʻrklarni tor-mor qildilar va Togʻosti Qirolligi qayta tiklandi."
  },
  {
    title: "Halqa Urushidagi qahramonona mudofaa",
    content: "Halqa Urushida Sauron Shimolga ham ulkan armiya joʻnatdi. Dale jangida Qirol Dáin II Ironfoot va Qirol Brand Erebor darvozasi oldida mardlarcha halok boʻldilar, ammo mittilar va insonlar qalʼada mustahkam turib qamalni yorib chiqdilar. Janubda Sauron qulagach, ular dushmanni Shimoldan butkul quvib chiqardilar."
  }
]);
