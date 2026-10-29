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

// 1. HOBBITON
updatePlace('hobbiton', [
  {
    title: "Shayrning yuragi va Bag End tepaligi",
    content: "Hobbiton — Shayrning (The Shire) Gʻarbiy Farthing (Gʻarbiy Toʻrtlik) hududida, Suvboʻyi daryosi oqimi boʻyida joylashgan eng qulay va sokin qishloqdir. Qishloq tepasida mashhur Bag End (Xalta-burchak) xobbit ini joylashgan.\n\nBag End Uchinchi davrda Bungo Baggins tomonidan qazilgan boʻlib, uning mukammal yumaloq yashil eshigi, tilla mis dastagi, uzun shinam yoʻlaklari va bogʻlari butun Shayr boʻyicha eng namunali xobbit maskani hisoblangan. Tepalik etagida Bayram Daraxti (Party Tree) qad rostlagan."
  },
  {
    title: "Tarixiy voqealar va sayohatlarning boshlanishi",
    content: "Hobbiton butun Oʻrta-yer tarixini oʻzgartirgan ikki buyuk safarning boshlangʻich nuqtasi boʻldi: 2941-yilda Gandalf va oʻn uch mitti Bilboni Ereborga aynan shu yerdan olib ketdilar; 3018-yilda esa Frodo Yagona Uzuk bilan Mordorga xavfli safarini aynan Bag Enddan boshladi.\n\n3019-yilda Saruman Shirni egallab, tepalikdagi goʻzal daraxtlarni kestirdi va xunuk gʻisht uylar qurdirdi. Ammo xobbitlar Suvboʻyi jangida gʻalaba qozonib, Samwise Galadriel tuprogʻi yordamida Hobbitonni qayta jannatmonand maskanga aylantirdi."
  }
]);

// 2. BYWATER (SUVBOʻYI)
updatePlace('bywater', [
  {
    title: "Suvboʻyi koʻli va Yashil Ajdar tavernasi",
    content: "Bywater (Suvboʻyi) — Hobbitondan atigi ikki mil sharqda, katta suv havzasi (Bywater Pool) boʻyida joylashgan gavjum posyolka. Bu yerda paxta yetishtiruvchilar, bogʻbonlar va hunarmand xobbitlar istiqomat qiladi.\n\nPosyolkaning eng mashhur maskani — 'Yashil Ajdar' (The Green Dragon) tavernasi boʻlib, u xobbitlarning bosh uchrashuv, yangilik almashish va pivoxoʻrlik markazi boʻlgan."
  },
  {
    title: "Suvboʻyi jangi (Battle of Bywater)",
    content: "3019-yil 3-noyabrida Bywater koʻchalarida Halqa Urushining eng soʻnggi toʻqnashuvi — Suvboʻyi jangi boʻlib oʻtdi. Merry Brandybuck va Pippin Took boshchiligidagi yuzlab xobbitlar Sarumanning qaroqchilar toʻdasini qurshab olib yengdilar va Shirni zulmatdan ozod qildilar."
  }
]);

// 3. BUCKLAND (BRENDIYURT)
updatePlace('buckland', [
  {
    title: "Brendivin ortidagi mustaqil maskan",
    content: "Buckland (Brendiyurt) — Shayrning sharqiy chegarasida, Brendivin daryosi va Qadimiy Oʻrmon (Old Forest) oʻrtasida joylashgan oʻziga xos avtonom xobbit oʻlkasidir. U Uchinchi davrning 2340-yilida Gorhendad Oldbuck tomonidan asos solingan.\n\nBuckland xobbitlari qayiqda suzishni bilishi, tunda eshiklarini qulflab yotishi va jasurligi bilan boshqa Shir xobbitlaridan ajralib turadi. Oʻlka sharqdan yigirma mil uzunlikdagi 'Baland Toʻsiq' (High Hay) devori bilan himoyalangan."
  },
  {
    title: "Brandy Hall va Crickhollow",
    content: "Oʻlka markazida Bucklebury qasri va yuzlab xonalardan iborat ulkan yerosti maskani — Brandy Hall joylashgan boʻlib, u Brandybuck xonadonining bosh qarorgohidir.\n\nCrickhollow qishlogʻida Frodo Nazgûllardan yashirinish uchun uy sotib olgan va aynan shu yerdan Qadimiy Oʻrmon orqali xavfli safarga qochib chiqqan edi."
  }
]);

// 4. BRANDYWINE BRIDGE (BRENDIVIN KOʻPRIGI)
updatePlace('brandywine-bridge', [
  {
    title: "Buyuk Sharqiy Yoʻlning tosh koʻprigi",
    content: "Brandywine Bridge (Sindarincha: Cirith Baranduin) — buyuk Baranduin (Brendivin) daryosi ustiga Arnor qirolligi davrida qurilgan ulkan uch arkali tosh koʻprikdir. U Buyuk Sharqiy Yoʻlning (Great East Road) muhim strategik qismi boʻlib, Shayrni Bree va sharqiy yerlar bilan bogʻlagan.\n\nUchinchi davrning 1601-yilida Arnor Qiroli Argeleb II ikki xobbit aka-uka — Marcho va Blancoga Brendivin koʻprigini saqlash va qirol elchilarini erkin oʻtkazish sharti bilan daryoning narigi tomonidagi yerlarni (Shayrni) bergan."
  }
]);

// 5. MICHEL DELVING
updatePlace('michel-delving', [
  {
    title: "Oq Tepaliklar poytaxti va Mathom uyi",
    content: "Michel Delving — Oq Tepaliklarda (White Downs) joylashgan Shayrning eng yirik shahri va norasmiy poytaxtidir. Bu yerda har yetti yilda bir marta saylanadigan Shayr Meri (Mayor of Michel Delving) va Shirifflar (Shirriffs — politsiya) boshligʻi qarorgoh qurgan.\n\nShaharda mashhur 'Mathom House' muzeyi joylashgan boʻlib, unda xobbitlar oʻzlari uchun foydasiz, ammo tashlab yuborishga koʻzi qiymaydigan qiziqarli buyumlarni (eski qurollar, yodgorliklar) saqlashgan. Bilboning mithril sovuti ham uzoq yillar shu muzeyda osigʻliq turgan."
  }
]);

// 6. TUCKBOROUGH
updatePlace('tuckborough', [
  {
    title: "Buyuk Smiallar va Tan qarorgohi",
    content: "Tuckborough — Yashil Tepaliklar (Green Hills) etagida joylashgan Took xonadonining qadimiy poytaxtidir. Bu yerda Shayrning harbiy boshligʻi boʻlgan Tan (Thain of the Shire) yashagan.\n\nShahar markazida yuzlab xonalar, yoʻlaklar va zallardan iborat mashhur 'Buyuk Smiallar' (Great Smials) joylashgan boʻlib, u Peregrin Took (Pippin) va uning ajdodlari istiqomat qilgan qudratli yerosti qalʼasi boʻlgan."
  }
]);

// 7. GONDOLIN
updatePlace('gondolin', [
  {
    title: "Yashirin Shohlik va Oq Tosh Shahar",
    content: "Gondolin (Sindarincha: Ondolindë — 'Musiqiy Tosh') — Birinchi Davrda Noldor Oliy Qiroli Turgon tomonidan Qurshovchi Togʻlar (Echoriath) qaʼridagi yashirin Tumladen vodiysida barpo etilgan afsonaviy shahar. Shahar dizayni Valinordagi Tirion shahrining nusxasi sifatida barpo etilgan.\n\nShaharga faqat qoyatoshga oʻyilgan maxfiy gʻor yoʻli va Yetti Darvoza (Yogʻoch, Tosh, Bronza, Temir, Kumush, Oltin va Poʻlat darvozalar) orqali kirish mumkin edi. Markazida Turgon saroyi va Fëanor yasagan daraxtlarning kumush va oltin nusxalari — Belthil va Glingal qad rostlagan."
  },
  {
    title: "Tuorning kelishi va Maeglin xiyonati",
    content: "Ulmo inoyati bilan inson Tuor Gondolinga yetib kelib, shahar halokati haqidagi ilohiy ogohlantirishni yetkazdi. Turgon qochishdan bosh tortdi, ammo Tuorga oʻz qizi Idril Celebrindalni xotinlikka berdi.\n\nTurgonning jiyani Maeglin qorongʻu hasad tufayli Morgothga asir tushib, Gondolinning maxfiy joylashuvini sotdi."
  },
  {
    title: "Gondolinning qulashi (Fall of Gondolin)",
    content: "Birinchi Davrning 510-yilida Morgoth Balroglar, ajdarlar va temir mashinalar bilan Gondolinga bostirib kirdi. Turgon oʻz minorasi qulashi ostida halok boʻldi. Ecthelion Balroglar yetakchisi Gothmogni favvora hovuzida oʻldirdi, Glorfindel esa togʻ dovonida Balrog bilan birga qoyadan qulab jon berdi.\n\nIdril va Tuor maxfiy yerosti yoʻli orqali omon qolgan xalqni (jumladan yosh Eärendilni) olib chiqib, Sirion bandargohiga xalos qildilar."
  }
]);

// 8. NARGOTHROND
updatePlace('nargothrond', [
  {
    title: "Narog daryosi gʻorlaridagi buyuk saltanat",
    content: "Nargothrond — Gʻarbiy Beleriandda Narog daryosining chuqur kanyonidagi ulkan tabiiy gʻorlarda Finrod Felagund tomonidan barpo etilgan yashirin yerosti qalʼa-shahri. Dastlab bu gʻorlar Kichik Mittilar (Noegyth Nibin) maskani boʻlgan.\n\nFinrod Belegost mittilari yordamida gʻorlarni kengaytirib, yashirin saroylar, xazinaxonalar va zargarlik ustaxonalariga aylantirdi. Shu xizmati uchun mittilar Finrodga 'Felagund' ('Gʻorlar Hukmdori') nomini berishgan."
  },
  {
    title: "Túrin Turambar va Glaurungning bostirib kirishi",
    content: "Finrod Beren bilan safarda halok boʻlgach, shohlik uning ukasi Orodrethga oʻtdi. Keyinchalik Húrinning oʻgʻli Túrin bu yerga kelib, bosh sarkardaga aylandi. Túrin elflarning maxfiylik siyosatiga qarshi chiqib, Narog daryosi ustiga ulkan tosh koʻprik qurdirdi.\n\nUshbu koʻprik Nargothrondning halokatiga sabab boʻldi: Birinchi Davrning 495-yilida oltin ajdar Glaurung qoʻshinlari koʻprikdan osonlikcha oʻtib, shaharni vayron qildi va xalqini asirga oldi. Glaurung shahar xazinalari ustida yotib hukmronlik qildi."
  }
]);

// 9. MENEGROTH
updatePlace('menegroth', [
  {
    title: "Minglab Gʻorlar Saroyi va Melian Kamari",
    content: "Menegroth (Sindarincha: 'Minglab Gʻorlar') — Doriath oʻrmonida Esgalduin daryosi boʻyidagi tosh qoyalarga oʻyilgan Elu Thingol va dono Maia Melianning afsonaviy poytaxtidir. U Belerianddagi eng goʻzal va xavfsiz shohlik hisoblangan.\n\nBelegost mittilari va elflar birgalikda saroyni oʻyib, uning marmar ustunlarini oltingugurt va billurlar bilan bezatganlar; shiftida yulduzlar charogʻon boʻlib turgan. Melian oʻzining ilohiy sehrli 'Kamari' (Girdle of Melian) bilan Doriathni oʻrab olgan boʻlib, hech bir dushman bu chegaradan oʻtolmas edi."
  },
  {
    title: "Nauglamír va Doriathning qulashi",
    content: "Thingol Beren olib kelgan Silmarilni mittilar yasagan afsonaviy oltin marjon — Nauglamírga qadashni buyurdi. Nogrod mitti ustalari marjonga mahliyo boʻlib, Thingolni oʻz saroyida xiyonatkorona oʻldirdilar.\n\nMelian qaygʻudan Oʻrta-yerni tark etgach, sehrli kamar soʻndi. Nogrod armiyasi va keyinchalik Fëanor oʻgʻillari Menegrothga bostirib kirib, goʻzal saroyni butkul xarobaga aylantirdilar."
  }
]);

// 10. ANGBAND
updatePlace('angband', [
  {
    title: "Temir Zindon: Morgothning qora saltanati",
    content: "Angband (Sindarincha: 'Temir Qamoqxona') — Shimoliy Beleriandda, Temir Togʻlari (Ered Engrin) qaʼrida Morgoth tomonidan barpo etilgan bahaybat yerosti qalʼa-zindoni. U Utumno qulaganidan soʻng Yovuzlikning bosh qarorgohiga aylandi.\n\nQalʼa yuzlab yerosti qavatlari, zaharli gazlar bilan toʻlgan konlar, qurolsozlik oʻchoqlari va mahbuslar zindonlaridan iborat boʻlgan. Unda millionlab oʻrklar, troller, boʻrilar va Balroglar armiyasi saqlangan."
  },
  {
    title: "Gʻazab Urushi va mutlaq yoʻq boʻlish",
    content: "Birinchi Davr davomida Noldor elflari Angbandni deyarli toʻrt yuz yil qamal qildilar (Siege of Angband), ammo uni zabt eta olmadilar. Faqat Gʻazab Urushida Valar va Vanyar armiyasi Angbandga bostirib kirib, uning yerosti zindonlarini yondirib, Morgothni zanjirband qildi va butun qalʼani okean qaʼriga gʻarq qildi."
  }
]);

// 11. THANGORODRIM
updatePlace('thangorodrim', [
  {
    title: "Zulmatning Uch Choʻqqisi",
    content: "Thangorodrim (Sindarincha: 'Zulmat Togʻlari') — Angband darvozasi tepasida Morgoth tomonidan yerosti chiqindilari, qora kul va qoyalardan koʻtarilgan uchta bahaybat qora vulqon choʻqqisidir. Ularning ustidan tunu-kun zaharli qora tutun chiqib, Beleriand osmonini quyoshdan toʻsib turgan.\n\nChoʻqqilarning biriga Morgoth Fëanorning toʻngʻich oʻgʻli Maedhrosni oʻng qoʻlidan zanjirband qilib osib qoʻygan edi; Fingon burgut Thorondor yordamida Maedhrosning qoʻlini kesib uni qutqarib olgan."
  },
  {
    title: "Ancalagon the Black qulashi",
    content: "Gʻazab Urushining soʻnggi pallasida Morgoth oʻzining soʻnggi dahshatli quroli — qanotli ajdarlar toʻdasini jangga tashladi. Ularning eng kattasi — qora ajdar Ancalagon the Black osmonda Eärendilning uchar kemasi Vingilot bilan toʻqnashdi.\n\nEärendil Ancalagonni oʻldirdi; bahaybat ajdarning jasadi osmondan qulab tushib, Thangorodrimning uchala choʻqqisini ham parchalab kul qildi."
  }
]);

// 12. DORTHONION (TAUR-NU-FUIN)
updatePlace('dorthonion', [
  {
    title: "Qaragʻaylar Oʻlkasidan Dahshat Oʻrmonigacha",
    content: "Dorthonion (Sindarincha: 'Qaragʻaylar Makoni') — Beleriandning shimoliy chegarasida joylashgan baland, qoyali va qalin qaragʻayzorlar bilan qoplangan togʻli oʻlka edi. Birinchi Davrda bu yerda Finarfin oʻgʻillari Angrod va Aegnor hukmronlik qilgan, shuningdek Bëor xonadoni insonlari (Beren ajdodlari) yashagan.\n\nDagor Bragollach (Toʻsatdan Olov Jangi)da Morgoth oʻlkani olov bilan qopladi. Angrod va Aegnor halok boʻldi, oʻlka Sauron sehriga asir boʻlib 'Taur-nu-Fuin' ('Tungi Soya Oʻrmoni') deb nomlandi."
  }
]);

// 13. ANFAUGLITH (ARD-GALEN)
updatePlace('anfauglith', [
  {
    title: "Yashil Tekislikdan Boʻgʻuvchi Changsahrogacha",
    content: "Dastlab Ard-galen ('Yashil Maskan') deb atalgan bu hudud Dorthonion va Angband oʻrtasida yastanib yotgan yam-yashil bepoyon tekislik edi. Noldor chavandozlari bu yerda oʻz tulporlarini boqib, Angbandni qamal qilib turar edilar.\n\nBirinchi Davrning 455-yilida Morgoth Angbanddan olovli daryolar va zaharli gazlarni otib chiqardi. Butun tekislik yonib kulga aylandi va 'Anfauglith' ('Boʻgʻuvchi Chang') nomini oldi. 472-yildagi mashhur Nirnaeth Arnoediad (Sanab Boʻlmas Koʻzyoshlar Jangi) aynan shu qaqroq sahroda boʻlib oʻtdi."
  }
]);

// 14. TOL SIRION (TOL-IN-GAURHOTH)
updatePlace('tol-sirion', [
  {
    title: "Sirion darasi va Boʻrilar Oroli",
    content: "Tol Sirion — Sirion daryosining Ered Wethrin va Dorthonion oʻrtasidagi tor darasida joylashgan strategik oroldir. Bu yerda Finrod Felagund qadimiy Minas Tirith ('Qoʻriqchi Minora') qalʼasini barpo etgan edi.\n\nDagor Bragollachdan soʻng Sauron qalʼaga qora tuman bilan bostirib kirib uni egalladi va orolni 'Tol-in-Gaurhoth' ('Boʻrilar Oroli')ga aylantirdi. Finrod va Beren shu zindonda asir boʻldi. Lúthien va Huan Sauronni yengib qalʼani vayron qildilar."
  }
]);

// 15. BRETHIL
updatePlace('brethil', [
  {
    title: "Haleth xalqi va Teiglin daryosi",
    content: "Brethil — Doriath gʻarbida, Sirion va Teiglin daryolari oraligʻida joylashgan qalin qayin oʻrmonidir. Birinchi Davrda Thingolning ruxsati bilan bu yerga Edainning uch xonadonidan biri boʻlgan Haleth Xalqi (Haladin) joylashgan.\n\nOʻrmon markazida Amon Obel tepaligi va Ephel Brandir istehkomi joylashgan. Túrin Turambar oʻz hayotining soʻnggi yillarini shu yerda oʻtkazgan va Cabed-en-Aras darasida bahaybat ajdar Glaurungni oʻldirgan."
  }
]);

// 16. TOL GALEN
updatePlace('tol-galen', [
  {
    title: "Yashil Orol va Tiriklar Oʻlkasi",
    content: "Tol Galen (Sindarincha: 'Yashil Orol') — Janubiy Ossiriandda, Adurant daryosi ikki shoxobchaga boʻlingan joyda joylashgan goʻzal oroldir. Uchinchi Davrdan ancha avval, oʻlimdan qaytgan Beren va Lúthien oʻzlarining ikkinchi foniy hayotini aynan shu orolda kechirganlar.\n\nShu sababli butun oʻlka 'Dor Firn-i-Guinar' ('Tirik Oʻliklar Oʻlkasi') deb atalgan. Bu yerda ularning oʻgʻli Dior Eluchíl dunyoga kelgan."
  }
]);

// 17. HIMRING
updatePlace('himring', [
  {
    title: "Maedhrosning sovuq qalʼasi",
    content: "Himring (Sindarincha: 'Doimiy Sovuq') — Sharqiy Belerianddagi keng tepaliklarning eng baland choʻqqisidir. Uning choʻqqisida Fëanorning toʻngʻich oʻgʻli Maedhros oʻzining mustahkam tosh qalʼasini barpo etgan.\n\nDagor Bragollach dahshatida boshqa barcha shimoliy qalʼalar qulaganida ham, faqat Himring Maedhrosning jasorati tufayli dushmanga boʻyin bermay qoldi. Beleriand dengizga choʻkkach, Himring choʻqqisi orol boʻlib omon qoldi va Uchinchi davrda ham dengiz oʻrtasida saqlanib turdi."
  }
]);

// 18. VINYAMAR
updatePlace('vinyamar', [
  {
    title: "Nevrastdagi Birinchi Qalʼa va Ulmo qurollari",
    content: "Vinyamar (Sindarincha: 'Yangi Maskanning Boshlanishi') — Nevrast oʻlkasida Taras togʻi etagida Turgon tomonidan barpo etilgan Noldorning ilk poytaxtidir. Turgon xalqi bilan yashirin Gondolinga koʻchib ketayotganida, dengiz xudosi Ulmo amri bilan saroy zalida oʻzining dubulgʻasi, sovuti, qalqoni va qilichini qoldirgan.\n\nOradan asrlar oʻtgach, inson Tuor Vinyamarga yetib kelib, ushbu ilohiy qurollarni kiydi va Ulmoning buyrugʻi bilan Gondolinni ogohlantirish uchun yoʻlga chiqdi."
  }
]);

// 19. BELEGOST
updatePlace('belegost', [
  {
    title: "Gabilgathol: Moviy Togʻlarning ulugʻvor mitti shahri",
    content: "Belegost (Mitti tilida: Gabilgathol — 'Buyuk Qalʼa') — Moviy Togʻlarning (Ered Luin) sharqiy yonbagʻrida joylashgan qadimiy mitti shohligidir. U Mittilarning Kengyelkalilar (Broadbeams) va Olovsoqollar (Firebeards) qabilasi tomonidan Daraxtlar Davrida barpo etilgan.\n\nBelegost ustalari zanjirli sovut toʻqish boʻyicha dunyoda tengsiz boʻlganlar. Ularning Qiroli Azaghâl Nirnaeth Arnoediad jangida bahaybat ajdar Glaurungni yaralab qochirgan, ammo oʻzi ajdar ostida qolib qahramonlarcha halok boʻlgan."
  }
]);

// 20. NOGROD
updatePlace('nogrod', [
  {
    title: "Tumunzahar: Poʻlatsozlar va Nauglamír qasri",
    content: "Nogrod (Mitti tilida: Tumunzahar — 'Gʻorlar Shahri') — Belegostdan janubroqda, Dolmed togʻi etagida joylashgan ikkinchi buyuk mitti shahri. Nogrod ustalari qilichsozlik va pichoqchilikda, xususan qadimiy usta Telchar orqali mashhur boʻlganlar (Narsil va Angrist Telchar tomonidan yasalgan).\n\nNogrod ustalari Nauglamír marjoniga Silmarilni qadash chogʻida Thingolni oʻldirib, Doriathni taladilar. Qaytish yoʻlida Beren boshchiligidagi elflar va Entlar Nogrod armiyasini Sarn Athrada tor-mor qildi."
  }
]);

// 21. HAVENS OF SIRION (SIRION BANDARGOHI)
updatePlace('havens-of-sirion', [
  {
    title: "Sirion Deltasi va Soʻnggi Umid Maskani",
    content: "Havens of Sirion — Sirion daryosining Beleriand janubidagi Katta Dengizga quyiladigan deltasida joylashgan bandargoh-panohgohdir. Doriath va Gondolin qulaganidan soʻng omon qolgan barcha elflar va insonlar shu yerga qochib kelib panoh topdilar.\n\nBu yerda Eärendil va Elwing hukmronlik qildilar. Biroq Fëanor oʻgʻillari Silmarilni talab qilib, bandargohga hujum qildilar (Uchinchi Qardoshlar Qirgʻini). Elwing Silmaril bilan birga dengizga sakradi, ammo Ulmo uni oq qushga aylantirib Eärendil kemasiga yetkazdi."
  }
]);

// 22. FALAS
updatePlace('falas', [
  {
    title: "Círdan bandargohlari: Brithombar va Eglarest",
    content: "Falas — Gʻarbiy Beleriand qirgʻogʻidagi goʻzal dengiz boʻyi oʻlkasidir. Bu yerda kema-ustasi Círdan boshchiligidagi Falathrim (Sohil Elflari) yashagan. Ular Brithombar va Eglarest nomli ikkita buyuk tosh bandargoh-shaharlarni barpo etganlar.\n\nBu bandargohlar Beleriandning birinchi kema qurish markazlari boʻlgan. Nirnaeth Arnoediaddan soʻng Morgoth qoʻshinlari har ikki shaharni qamal qilib vayron qildi; Círdan va omon qolganlar Balar oroliga qochdilar."
  }
]);

// 23. ALQUALONDË
updatePlace('alqualonde', [
  {
    title: "Oqqushlar Bandargohi va Olmos Qirgʻoq",
    content: "Alqualondë (Quenya tilida: 'Oqqushlar Bandargohi') — Boqiy Gʻarbdagi Eldamar qirgʻogʻida joylashgan Teleri elflarining bosh shahar-bandargohidir. Shahar dengiz marvaridlari, oq marmar toshlar va nafis qavariq arklar bilan bezatilgan boʻlib, uning bandargohida oqqush shaklidagi goʻzal oq kemalar suzib yurgan.\n\nDaraxtlar Davrining 1495-yilida Fëanor Noldor bilan Beleriandga oʻtish uchun kemalarni talab qilganida, Teleri rad etdi. Fëanor Alqualondëda Telerilarni qilichdan oʻtkazib (Birinchi Qardoshlar Qirgʻini), oq kemalarni zoʻrlik bilan tortib oldi."
  }
]);

// 24. LOTHLÓRIEN
updatePlace('lothlorien', [
  {
    title: "Oltin Oʻrmon va Caras Galadhon",
    content: "Lothlórien (Sindarincha: 'Gullar Orzusi Oʻlkasi') — Tumanli Togʻlar sharqida, Anduin va Celebrant daryolari oraligʻida joylashgan eng sirli va muqaddas elf saltanatidir. Bu yerda tillarang poʻstloqli va kumush bargli bahaybat Mallorn daraxtlari oʻsadi.\n\nSaltanat markazida daraxtlar shoxiga qurilgan 'Yashil Shahar' — Caras Galadhon qad rostlagan. Shahar Lord Celeborn va Xonim Galadriel tomonidan Nenya uzugi qudrati bilan asrlar davomida dushman koʻzidan va vaqtning yemirilishidan asrab kelingan."
  },
  {
    title: "Uzuk Birodarligi va Galadriel Koʻzgusi",
    content: "3019-yil yanvarida Moria fojiasidan soʻng holdan toygan Uzuk Birodarligi Lórienga panoh tortdi. Galadriel Frodoga oʻz Koʻzgusini koʻrsatib, unga Eärendil nuri joylangan billur shishani sovgʻa qildi.\n\nHalqa Urushidan soʻng Nenya quvvati soʻngach, Galadriel Boqiy Gʻarbga ketdi va Lothlórien asta-sekin boʻshab, uning oltin barglari soʻndi."
  }
]);
