const fs = require('fs');
const path = require('path');

const booksDir = path.resolve('src/content/books');

function updateBook(id, dataModifier) {
  const filePath = path.join(booksDir, `${id}.json`);
  const current = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const updated = dataModifier(current);
  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2), 'utf-8');
  console.log(`✓ [books] ${id}.json yangilandi`);
}

// 1. The Lord of the Rings
updateBook('the-lord-of-the-rings', b => {
  b.cover_image = {
    src: '/images/books/the-lord-of-the-rings.webp',
    alt: 'Uzuklar Hukmdori bir jildlik nashri muqovasi (George Allen & Unwin, 1968) — Pauline Baynes chizgan Oʻrta-yer panoramasi',
    edition_title: 'First Single-Volume Paperback Edition (George Allen & Unwin, 1968)',
    publisher: 'George Allen & Unwin',
    year: 1968,
    isbn: '978-0-04-823087-4',
    artist: 'Pauline Baynes',
    source: 'George Allen & Unwin / Wikimedia Commons'
  };
  b.synopsis = "«Uzuklar Hukmdori» (The Lord of the Rings) — Jon Ronald Ruel Tolkienning 1937–1949-yillar oraligʻida yozilgan, XX asr jahon adabiyoti xazinasidan eng yuksak oʻrin olgan epik epopeyasi. Dastlab «Hobbit» qissasining davomi sifatida boshlangan ushbu asar muallif ijodida yangi bosqichni ochib, butun Oʻrta-yer mifologiyasi, tillari, nasabnomalari va maʼnaviy falsafasining markaziy choʻqqisiga aylandi. Asar oltita kitob va keng qamrovli ilovalardan iborat boʻlib, qogʻoz taqchilligi va noshirlik xarajatlari tufayli uch jildda («Uzuk Birodarligi», «Ikki Qalʼa», «Qirolning Qaytishi») chop etilgan. Asar markazida Yovuz Hukmdor Sauron tomonidan Arda xalqlarini boʻysundirish uchun zarb etilgan Yagona Qudrat Uzugini yoʻq qilish yoʻlidagi xatarli va fidokorona kurash yotadi.";
  b.detailed_sections = [
    {
      title: "Yaratilish tarixi va kompozitsion evolyutsiya (1937–1949)",
      content: "1937-yilda «Hobbit» kitobi katta muvaffaqiyat qozongach, noshir Stanley Unwin Tolkiendan zudlik bilan uning davomini yozishni soʻradi. Tolkien dastlab «The Silmarillion» qoʻlyozmasini taklif qildi, biroq noshirlar elflar haqidagi jiddiy afsonalarni murakkab deb topib, yangi xobbit sarguzashtlarini talab qilishdi. Tolkien 1937-yil dekabrida «A Long-expected Party» bobi ustida ish boshladi. Biroq oddiy bolalar ertagidan boshlangan syujet tez orada qorongʻu va epik miqyos kasb etdi: Bilboning oddiy koʻrinmas qiluvchi uzugi qadimgi Ikkinchi Davr dahshati boʻlgan Yagona Uzuk bilan bogʻlandi. Ikkinchi jahon urushining ogʻir yillarida (1939–1945) roman sekinlik bilan, oʻgʻli Christopherga frontga yoʻllangan maktublar va boblar hamrohligida davom ettirildi. Muallif har bir sanani, masofani, Oyding kechalari va Oʻrta-yer geografiyasini matematik aniqlikda hisoblab chiqdi. 1949-yilda doston nihoyasiga yetdi, biroq Tolkien asarning «The Silmarillion» bilan birga nashr etilishini qatʼiy talab qilganligi sababli dastlabki noshirlik muzokaralari bir necha yilga choʻzildi."
    },
    {
      title: "Asarning tuzilishi va ichki arxitekturasi",
      content: "Tolkien asarni trilogiya deb atalishiga umr boʻyi qarshi boʻlgan; u oltita kitobdan iborat yaxlit bir monolit roman edi. I Kitob («Uzukning yoʻlga chiqishi») Frodoni Shayrdan Rivendellgacha boʻlgan taʼqib va xavflar aro olib boradi. II Kitob («Uzukning janubga yoʻl olishi») Elrond Kengashi, Toʻqqizlar Birodarligining tuzilishi, Moria yerosti dahshatlari, Lothlórien oromi va Parth Galenda ittifoqning parchalanishi bilan tugaydi. III Kitob («Isengardning sotqinligi») Aragorn, Legolas va Gimlining orklarni taʼqib qilishi, Merry va Pippinning Fangorn oʻrmonida Entlar bilan uchrashishi, Gandalfning Oq rangda tirilishi va Helm jangi hamda Isengardning suv bosishi haqida hikoya qiladi. IV Kitob («Sharq sari yoʻl») Frodo, Sam va ularga yoʻl koʻrsatuvchi Gollumning Oʻlik Botqoqliklar, Ithilien va Cirith Ungol gʻoridagi Shelob toʻridan oʻtish fojiasini yoritadi. V Kitob («Uzuk Urushi») Minas Tirith qamali, Pelennor dalalaridagi buyuk jang va Qora Darvoza sari soʻnggi yurishni qamrab oladi. VI Kitob («Uchinchi Davrning Intihosi») Mordordagi soʻnggi qadamlar, Hukm Togʻida Uzukning yoʻq qilinishi, Shayrning ozod etilishi (Scouring of the Shire) va Kulrang Bandargohlardan (Grey Havens) Valinorga ketish bilan xotimalanadi."
    },
    {
      title: "Asosiy falsafiy, axloqiy va mifologik gʻoyalar",
      content: "Asarning tub zamirida qudrat vasvasasi va mutlaq hokimiyatga egalik qilishning halokatli tabiati yotadi. Yagona Uzuk hech kimga ezgulik yoʻlida xizmat qila olmaydi; u Gandalf va Galadriel kabi buyuk donishmandlarni ham shafqatsiz zolimga aylantirish qudratiga ega. Shu sababli yovuzlikni yengish vositasi ulkan kuch yoki qurol emas, balki shafqat (Pity), sabr-toqat va kamsuqumlikdir. Bilboning gʻorda Gollumga koʻrsatgan rahm-shafqati Oʻrta-yer taqdirini qutqaruvchi kalitga aylanadi. Yana bir muhim jihat — Xudo irodasi yoki Providensiya (Eru Ilúvatar inoyati) boʻlib, u voqealar ortidagi koʻrinmas zanjir orqali ojizlarning fidoyiligini gʻalabaga yetaklaydi. Nihoyat, asar orqaga qaytmas yoʻqotish va fojiaviy oʻzgarish gʻoyasi bilan sugʻorilgan: Uzuk yoʻq qilinishi bilan elflarning Uch Uzugi ham kuchsizlanadi, elflar dunyoni tark etadi, sehr va afsonalar davri tugab, Insonlar davri boshlanadi."
    },
    {
      title: "Nashriyot tarixi, matnshunoslik va ilovalar xazinasi",
      content: "Urushdan keyingi Buyuk Britaniyada qogʻoz narxi nihoyatda baland boʻlgani sababli Allen & Unwin nashriyoti rahbari Rayner Unwin asarni uch alohida jildda chiqarishni maʼqul topdi. Har bir jild 21 shilling narxda sotuvga qoʻyildi. 1954-yil 29-iyulda birinchi jild, 11-noyabrda ikkinchi jild, 1955-yil 20-oktabrda uchinchi jild yorugʻlik koʻrdi. Kitob oxiridagi Ilovalar (Appendices A-F) Oʻrta-yerning uch ming yillik yilnomalari, Gondor va Rohan shohlari nasabnomalari, Shayr taqvimi, Elflar, Insonlar va Mittilar tillarining fonetikasi va yozuv tizimlarini qamrab olgan ulkan filologik yodgorlikdir. 1965-yilda Ace Books ruxsatsiz choʻntak nashrini chiqargach, Tolkien oʻz matnini jiddiy tahrir qildi va Ballantine Books orqali rasmiy ikkinchi nashrni taqdim etdi. 2004-yilda 50 yillik yubiley munosabati bilan Wayne G. Hammond va Christina Scull boshchiligida barcha matniy xatoliklar tuzatilgan mukammal qonuniy matn ishlab chiqildi."
    }
  ];
  return b;
});

// 2. The Fellowship of the Ring
updateBook('the-fellowship-of-the-ring', b => {
  b.cover_image = {
    src: '/images/books/the-fellowship-of-the-ring.webp',
    alt: 'Uzuk Birodarligi birinchi nashri original qattiq muqovasi (George Allen & Unwin, 1954) — moviy mato va zarhal yozuvlar',
    edition_title: 'First Edition Original Publisher Cloth (George Allen & Unwin, 1954)',
    publisher: 'George Allen & Unwin',
    year: 1954,
    isbn: '978-0-261-10235-4',
    artist: 'George Allen & Unwin / J.R.R. Tolkien',
    source: 'George Allen & Unwin / British Library'
  };
  b.synopsis = "«Uzuk Birodarligi» (The Fellowship of the Ring) — «Uzuklar Hukmdori» epopeyasining birinchi jildi boʻlib, I va II kitoblarni oʻz ichiga oladi. Asar 1954-yil 29-iyulda George Allen & Unwin nashriyotida chop etilgan. Unda Bilbo Bagginsning Shayrdagi 111 yillik yubileyidan soʻng Yagona Uzukning Frodo Bagginsga oʻtishi, Qora Chavandozlar (Nazgûllar) taʼqibi ostida Rivendell sari qilingan xatarli qochish, Elrond Kengashida Toʻqqizlar Ittifoqining tuzilishi, Moria yerosti konlaridagi dahshatli janglar va Lothlórien elflar saltanati orqali Buyuk Anduin daryosi boʻylab Parth Galengacha boʻlgan mashaqqatli yoʻl hikoya qilinadi.";
  b.detailed_sections = [
    {
      title: "Birinchi Kitob tahlili: Shayr osoyishtaligidan daryo kechuvigacha",
      content: "Birinchi kitob xobbitlarning osoyishta, mehmondoʻst va begʻam hayot tarzi tasviri bilan boshlanadi. Bilboning sehrli tarzda gʻoyib boʻlishi va Uzukni Frodoga qoldirishi butun Oʻrta-yer taqdirini oʻzgartiruvchi burilish yasaydi. Gandalf oʻn yetti yillik izlanishlardan soʻng Uzukning asl mohiyatini fosh etadi: bu Sauronning Yagona Qudrat Uzugidir. Frodo oʻzining sadoqatli doʻstlari Samwise Gamgee, Meriadoc Brandybuck va Peregrin Took bilan Shayrni tark etadi. Ularni Sauronning eng dahshatli qullari — Toʻqqiz Nazgûl izma-iz taʼqib qiladi. Qadimgi Oʻrmon, Tom Bombadilning sirli uyi, Mozor tepaliklari (Barrow-downs) xavfidan soʻng ular Bree qishlogʻidagi «Sapchuvchi Toychoq» mehmonxonasida Darbadar (Strider / Aragorn) bilan uchrashadilar. Weathertop choʻqqisida Qora Suvoriy Frodoga Morgul tigʻi bilan ogʻir jarohat yetkazadi. Glorfindel (filmda Arwen) yordamida Bruinen kechuvidan oʻtib, Rivendellga yetib kelish orqali birinchi kitob oʻzining dramatik choʻqqisiga erishadi."
    },
    {
      title: "Ikkinchi Kitob tahlili: Elrond Kengashi va Moria zulmati",
      content: "Rivendell shifoxonasida hushiga kelgan Frodo Oʻrta-yerning barcha erkin xalqlari vakillari jamlangan Elrond Kengashida ishtirok etadi. Kengashda Elflar (Elrond, Galdor, Legolas), Mittilar (Glóin, Gimli), Insonlar (Aragorn, Boromir) va Sehrgar Gandalf ishtirokida Uzukni qurol sifatida ishlatish mumkin emasligi, yagona najot — uni Orodruin olovida yoʻq qilish ekanligi eʼtirof etiladi. Toʻqqiz Nazgûlga qarshi Oʻrta-yerning toʻqqiz xalqi vakilidan iborat «Uzuk Birodarligi» tuziladi. Qish qahratonida Caradhras qor dovonidan osha olmagan birodarlik qadimgi mitti saltanati Moria (Khazad-dûm) yerosti yoʻlidan yurishga majbur boʻladi. Balin qabrida orklar bilan toʻqnashuv va koʻprik ustida Qadimgi Dunyo iblisi Balrog bilan boʻlgan toʻqnashuvda Gandalf tubsizlikka qulaydi. Yetakchisini yoʻqotgan birodarlik Galadriel boshchiligidagi oltin oʻrmon Lothlórienga boshpana topadi."
    },
    {
      title: "Lothlórien saboqlari, Galadriel koʻzgusi va Ittifoqning parchalanishi",
      content: "Lothlórien birodarlik aʼzolari uchun nafaqat jismoniy dam olish, balki maʼnaviy sinov maskaniga aylanadi. Galadriel Frodoga oʻz koʻzgusini koʻrsatadi va Frododan Yagona Uzukni qabul qilish vasvasasiga duch keladi; biroq u vasvasani yengib, kamtarlik bilan Gʻarbga ketishni tanlaydi. Har bir sayohatchiga Galadhrim elflarining qimmatbaho sovgʻalari: yashil plashlar, elflar qayiqlari, lembas noni va Frodoga Eärendil nuri solingan billur beriladi. Parth Galenga yetib kelgach, Uzukning halokatli vasvasasi Boromirni chulgʻab oladi; u Frododan Uzukni tortib olishga urinadi. Frodo Uzukning doʻstlar orasiga nifoq solayotganini anglab, yolgʻiz Mordorga ketishga qaror qiladi, ammo sadoqatli Sam uni tark etmaydi. Orklar hujumi natijasida Boromir qahramonlarcha halok boʻladi, Merry va Pippin asir olinadi, shu tariqa Toʻqqizlar Ittifoqi parchalanadi."
    },
    {
      title: "Matnshunoslik xususiyatlari va oʻzbekcha talqini",
      content: "«Uzuk Birodarligi» Tolkien prozasining uslubiy jihatdan eng boy qismidir: u «Hobbit»ning sodda va iliq xobbitona ohangidan boshlanib, Rivendell va Moria boblarida qadimgi anglo-sakson va island sagalarining viqorli epik ohangiga koʻtariladi. Kitobda oʻnlab sheʼr va dostonlar (A Elbereth Gilthoniel, Eärendil dostoni, Durin madhiyasi, Gil-galad qulashi) joy olgan boʻlib, ular dunyoning tarixiy chuqurligini taʼminlaydi. Oʻzbek tilidagi adabiy kontekstda ushbu jild Sharq va Gʻarb dostonchilik anʼanalarining uygʻunligi, xobbitlarning sodda va samimiy nutqi bilan elflarning yuksak sheʼriy uslubi oʻrtasidagi filologik kontrastni toʻla namoyon etadi."
    }
  ];
  return b;
});

// 3. The Two Towers
updateBook('the-two-towers', b => {
  b.cover_image = {
    src: '/images/books/the-two-towers.webp',
    alt: 'Ikki Qalʼa birinchi nashri original qattiq muqovasi (George Allen & Unwin, 1954) — moviy mato va mis-zarhal yozuvlar',
    edition_title: 'First Edition Original Publisher Cloth (George Allen & Unwin, 1954)',
    publisher: 'George Allen & Unwin',
    year: 1954,
    isbn: '978-0-261-10236-1',
    artist: 'George Allen & Unwin / J.R.R. Tolkien',
    source: 'George Allen & Unwin / British Library'
  };
  b.synopsis = "«Ikki Qalʼa» (The Two Towers) — «Uzuklar Hukmdori» epopeyasining ikkinchi jildi boʻlib, III va IV kitoblarni oʻz ichiga oladi. Asar 1954-yil 11-noyabrda chop etilgan. Unda birodarlik parchalanganidan keyin ikki parallel chiziq boʻylab kechadigan voqealar qalamga olinadi: gʻarbda Aragorn, Legolas va Gimli asir olingan doʻstlarini qutqarish uchun Rohanga shoshiladilar, Gandalf Oq Sehrgar sifatida qaytadi, Sarumanning Isengarddagi fitnasi fosh etilib, Helm jangi sodir boʻladi; sharqda esa Frodo va Sam Sméagol (Gollum) yetakchiligida Mordor ostonasiga yetib kelib, Cirith Ungol dahshatiga roʻbaroʻ boʻladilar.";
  b.detailed_sections = [
    {
      title: "Uchinchi Kitob: Rohan chavandozlari, Entlar uygʻonishi va Helm jangi",
      content: "Uchinchi kitob Boromirning dafn marosimi bilan boshlanadi. Aragorn, Legolas va Gimli Saruman uruk-xaylari asiriga aylangan Merry va Pippinni qutqarish uchun Rohan dashtlari boʻylab mislsiz yugurishni amalga oshiradilar. Rohan marshali Éomer bilan uchrashuvdan soʻng ular Fangorn oʻrmoniga kiradilar. Oʻrmonda xobbitlar eng qadimgi daraxt-posbonlar — Entlar oqsoqoli Treebeard (Daraxtsoqol) bilan doʻstlashib, ularni Isengardga qarshi urushga undaydilar. Aragorn va uning hamrohlari esa tirilgan Gandalf Oq bilan uchrashadilar. Gandalf Edorasga kelib, qirol Théodenni Sarumanning sotqin maslahatchisi Gríma Wormtongue taʼsiridan qutqaradi. Rohirrim qoʻshini Helm darasidagi Hornburg qalʼasiga chekinadi. Bu yerda Sarumanning oʻn ming kishilik armiyasiga qarshi kechgan qahramonona tungi jangda Gandalf va Erkenbrandning yetib kelishi, shuningdek Huornlarning aralashuvi bilan gʻalaba qozoniladi. Shu paytda Entlar Isengard toʻgʻonini buzib, Saruman qalʼasini suv ostida qoldiradilar."
    },
    {
      title: "Toʻrtinchi Kitob: Emyn Muil, Gollum va Oʻlik Botqoqliklar",
      content: "Toʻrtinchi kitob voqealari butunlay Frodo va Samning Mordor sari mashaqqatli safari atrofida kechadi. Emyn Muilning oʻtkir qoyalarida ular oʻzlarini taʼqib qilib kelayotgan Gollumni tutib oladilar. Frodo Bilbo kabi unga rahm qiladi va Gollum Yagona Uzuk bilan qasamyod qilib, xobbitlarni Qora Darvoza sari boshlashga rozi boʻladi. Ular qadimgi janglarda halok boʻlgan Elflar va Insonlar arvohlari miltillab turgan dahshatli Oʻlik Botqoqliklardan oʻtadilar. Morannon (Qora Darvoza) toʻliq yopilgan va qoʻriqlanayotgan boʻlib chiqadi; Gollum ularga janubdagi sirli, kamroq qoʻriqlanadigan Cirith Ungol dovonini taklif qiladi."
    },
    {
      title: "Ithilien oʻrmonlari, Faramir sinovi va Shelobning ini",
      content: "Janub sari yoʻlda Frodo va Sam Gondor sarkardasi, Boromirning ukasi Faramir qoʻliga tushadilar. Faramir oʻzining aql-idroki va olijanobligi bilan akasidan farq qiladi: u Uzukning sirini fahmlab yetsa-da, uni qoʻlga kiritishdan voz kechadi («Men bu Uzukni yoʻl chetida yotgan boʻlsa ham olmasdim»). U xobbitlarni oziq-ovqat bilan taʼminlab, oʻz yoʻliga kuzatib qoʻyadi. Minas Morgulning oʻlik nuri ostidan oʻtib, Tirik Qoyalar zinasidan koʻtarilgan xobbitlar Cirith Ungol choʻqqisiga chiqadilar. Bu yerda Gollum oʻzining xiyonatkor niyatini amalga oshirib, ularni qadimgi oʻrgimchak Shelobning qorongʻu iniga yetaklaydi. Shelob Frodoni zaharli nayzasi bilan chaqib, falaj qiladi. Sam Frodoni oʻldi deb oʻylab, Sting qilichi va Galadriel billuri bilan ulkan oʻrgimchakni ogʻir yaralaydi va Uzukni oʻz boʻyniga oladi. Biroq orklar kelib, Frodoni qalʼaga olib ketganlarida, Sam uning tirik ekanini bilib qoladi va jild buyuk umidsizlik va hayajon pardasi ostida tugaydi."
    },
    {
      title: "«Ikki Qalʼa» nomi maʼnosi va kompozitsion qarama-qarshilik",
      content: "Tolkien ushbu jild sarlavhasini tanlashda uzoq ikkilangan, chunki voqealar bir nechta qalʼalar (Orthanc, Barad-dûr, Minas Tirith, Minas Morgul, Cirith Ungol) bilan bogʻliq edi. Yakunda muallif kitob soʻnggidagi maxsus izohda «Ikki Qalʼa» deganda Sarumanning kuchi timsoli boʻlgan Orthanc va Sauronning dahshatli tayanchi boʻlgan Minas Morgulni nazarda tutganini taʼkidlagan. Jild ikki xil dunyoni parallel ravishda aks ettiradi: III kitobdagi keng maydonlar, otliq qoʻshinlar, gʻalaba quvonchi va qahramonlik dostonlari bilan IV kitobdagi tor qorongʻu gʻorlar, jismoniy charchoq, ruhiy azob va umidsizlik oʻrtasidagi keskin kontrast asarning eng yorqin badiiy yutugʻidir."
    }
  ];
  return b;
});

// 4. The Return of the King
updateBook('the-return-of-the-king', b => {
  b.cover_image = {
    src: '/images/books/the-return-of-the-king.webp',
    alt: 'Qirolning Qaytishi birinchi nashri original qattiq muqovasi (George Allen & Unwin, 1955) — moviy mato va zarhal yozuvlar',
    edition_title: 'First Edition Original Publisher Cloth (George Allen & Unwin, 1955)',
    publisher: 'George Allen & Unwin',
    year: 1955,
    isbn: '978-0-261-10237-8',
    artist: 'George Allen & Unwin / J.R.R. Tolkien',
    source: 'George Allen & Unwin / British Library'
  };
  b.synopsis = "«Qirolning Qaytishi» (The Return of the King) — «Uzuklar Hukmdori» epopeyasining xotima jildi boʻlib, V va VI kitoblar hamda mashhur ensiklopedik ilovalarni oʻz ichiga oladi. 1955-yil 20-oktabrda nashr etilgan. Unda Minas Tirith shahrining Sauron qoʻshinlari tomonidan qamal qilinishi, Rohan otliqlarining Pelennor maydoniga yetib kelishi, Éowyn va Merryning Angmar Jodugar-qirolini yengishi, Aragornning oʻliklar qoʻshini bilan Pelargirni ozod qilib Oq Shaharga yetib kelishi, Frodo va Samning Hukm Togʻi tomon soʻnggi mashaqqatli intilishi, Uzukning yoʻq qilinishi va Qayta Birlashgan Qirollikning tiklanishi hikoya qilinadi.";
  b.detailed_sections = [
    {
      title: "Beshinchi Kitob: Minas Tirith qamali, Pelennor jangi va Qora Darvoza",
      content: "Beshinchi kitob Gandalf va Pippinning Minas Tirithga yetib kelishi bilan ochiladi. Shaharni aqlini yoʻqotayotgan noib Denethor II boshqarmoqda. Aragorn esa Oʻliklar Yoʻlidan (Paths of the Dead) oʻtib, qasamyodini buzgan qadimiy arvohlarni oʻz bayrogʻi ostida birlashtiradi va Umbar qaroqchilarining Pelargirdagi flotini yakson qiladi. Minas Tirith darvozasini Grond deb atalgan ulkan manjanaq buzib kirgan pallada, tong saharda shox sadolari yangrab, Théoden boshchiligidagi olti ming Rohirrim chavandozi Pelennor dalalariga bostirib kiradi. Jangda Théoden halok boʻladi, biroq uning jiyani Éowyn va xobbit Merry qadimgi bashoratni amalga oshirib («Uni hech bir erkak zoti oʻldira olmas»), Nazgûllar yoʻlboshchisi Angmar Jodugar-qirolini yer tishlatadilar. Aragorn qora yelkanli kemalarda yetib kelib, Gondor shohona bayrogʻini yoyadi va dushmanning asosiy kuchlari tor-mor etiladi. Gʻarbliklar Frodoga imkoniyat berish uchun yetti ming kishilik qoʻshin bilan Qora Darvoza sari oʻlimga qarab yurish qiladilar."
    },
    {
      title: "Oltinchi Kitob: Hukm Togʻidagi fojia, qutqarilish va Shayrning tozalanishi",
      content: "Oltinchi kitob Samning Cirith Ungol qalʼasidan Frodoni qutqarib olishi bilan boshlanadi. Ikki xobbit ork kiyimlarida suv va ozuqasiz Mordorning kalsiylashgan Gorgoroth dashtidan oʻtadilar. Orodruin etagida Frodoni jismoniy va ruhiy kuchlari butunlay tark etadi; Sam uni yelkasida koʻtarib choʻqqiga olib chiqadi. Biroq Olovli Yoriq (Cracks of Doom) ustida turgan Frodo Uzukning qudratiga bas kela olmaydi: «Men bu ishni qilish uchun kelgandim, ammo hozir xohlamayman. Uzuk meniki!» deb uni barmogʻiga taqadi. Shu onda kutilmaganda paydo boʻlgan Gollum Frodoga tashlanib, uning barmogʻini tishlab uzib oladi. Oʻzining «Precious»iga erishganidan jazavaga tushgan Gollum muvozanatni yoʻqotib, tubsiz olov qaʼriga qulaydi. Uzuk erib ketadi, Barad-dûr qulaydi, Sauronning ruhi shamol kabi tarqab ketadi. Buyuk Burgutlar xobbitlarni olov girdobidan qutqarib qoladilar. Vataniga qaytgan xobbitlar Shayrni Saruman (Sharkey) toʻdasi bosib olganini koʻradilar va Bywater jangida oʻz oʻlkalarini ozod qiladilar."
    },
    {
      title: "Kulrang Bandargohlar (Grey Havens) va Afsonaning xotimasi",
      content: "Asar gʻalaba tantanalari bilan emas, balki chuqur mungli va maʼyus vidolashuv bilan tugaydi. Aragorn Arwen bilan turmush qurib, Elessar nomi bilan taxtga oʻtiradi, ammo urush jarohatlari oʻz izini qoldirmasdan ketmaydi. Morgul xanjari, Shelob zahari va Uzuk yukidan ruhi ezilgan Frodo Shayrda osoyishtalik topa olmaydi: «Baʼzi yaralar hech qachon bitmaydi... Kimdir yoʻqotishi kerakki, boshqalar saqlab qolsin». 1421-yil 29-sentabrda Frodo, Bilbo, Gandalf, Elrond va Galadriel Kulrang Bandargohlardan (Mithlond) oq kemaga chiqib, Boqiy Gʻarb (Aman) sari suzib ketadilar. Sam uyiga, xotini Rosie va qizi Elanor bagʻriga qaytib, oʻchoq yoniga oʻtiradi va asarning eng mashhur soʻnggi iborasini aytadi: «Well, I’m back» («Mana, men qaytdim»)."
    },
    {
      title: "Ilovalar korpusi (Appendices A-F) va ilmiy qiymati",
      content: "«Qirolning Qaytishi» jildining 150 dan ortiq sahifasini egallagan ilovalar majmuasi Tolkien ijodini oddiy adabiyotdan tarixiy-filologik reallik darajasiga koʻtaradi. A Ilova Númenor, Gondor, Rohan va Durin xonadoni yilnomalarini oʻz ichiga oladi, shuningdek Aragorn va Arwenning toʻliq muhabbat qissasi faqat shu yerda berilgan. B Ilova Gʻarbiy Chegara Qizil Kitobining xronologik jadvali («Yillar dostoni») hisoblanadi. C Ilova xobbitlarning shajaralari, D Ilova Shayr taqvimi, E Ilova Tengwar va Cirth yozuvlarining toʻliq grammatik jadvallari, F Ilova esa Oʻrta-yer xalqlari va tillarining etnolingvistik tahlilini taqdim etadi."
    }
  ];
  return b;
});

// 5. The Silmarillion
updateBook('silmarillion', b => {
  b.cover_image = {
    src: '/images/books/silmarillion.webp',
    alt: 'Silmarillion birinchi nashri original changqopi (George Allen & Unwin, 1977) — J.R.R. Tolkien chizgan Lúthien Tinúviel nishoni va toʻq koʻk-oltin fon',
    edition_title: 'First Edition Dust Jacket (George Allen & Unwin, 1977)',
    publisher: 'George Allen & Unwin',
    year: 1977,
    isbn: '978-0-261-10273-6',
    artist: 'J.R.R. Tolkien',
    source: 'George Allen & Unwin / British Library'
  };
  b.synopsis = "«Silmarillion» (The Silmarillion) — J.R.R. Tolkien vafotidan soʻng, uning oʻgʻli Christopher Tolkien tomonidan yozuvchining yarim asrlik qoʻlyozmalari asosida tuzilib, 1977-yilda chop etilgan fundamental mifologik doston. Ushbu asar butun Tolkien legendariumining poydevori boʻlib, koinotning yaratilishi (Ainulindalë), xudolar va farishtasimon qudratlar (Valaquenta), Noldor elflarining Valinordan Beleriandga koʻchishi, uch muqaddas javohir — Silmarillar uchun Melkorga (Morgoth) qarshi olib borilgan fojiaviy urushlar (Quenta Silmarillion), Númenor orolining qulashi (Akallabêth) va Uchinchi Davrdagi Qudrat Uzuklari tarixini qamrab oladi.";
  b.detailed_sections = [
    {
      title: "Besh qismli kompozitsiya va koinotning yaratilishi",
      content: "Asar bir-biri bilan chambarchas bogʻlangan beshta qismdan tashkil topgan. 1. «Ainulindalë» (Ainur Musiqasi) — Yagona Yaratuvchi Eru Ilúvatar va Uning fikridan yaralgan Ainurlar tomonidan koinotning (Eä) musiqiy ohanglar orqali barpo etilishi. Melkorning bu musiqaga oʻz kibrli ohanglarini tiqishtirishi orqali olamga yovuzlik va fojianing kirib kelishi tasvirlanadi. 2. «Valaquenta» (Valar va Maiar haqida rivoyat) — Arda dunyosini boshqaruvchi 14 buyuk Vala va ularning yordamchilari Maiar (shu jumladan Sauron, Olórin, Melian) xarakteristikasi beriladi. 3. «Quenta Silmarillion» (Silmarillar tarixi) — kitobning eng yirik markaziy qismi boʻlib, Birinchi Davr voqealarini toʻliq hikoya qiladi. 4. «Akallabêth» (Qulagan Oʻlka) — Ikkinchi Davrda buyuk dengiz orol-qirolligi Númenorning yuksalishi, kibrga berilishi va okean qaʼriga gʻarq boʻlishi fojiasi. 5. «Qudrat Uzuklari va Uchinchi Davr haqida» — «Uzuklar Hukmdori» voqealarini qisqa mifologik xulosa sifatida afsonalar zanjiriga ulovchi qismdir."
    },
    {
      title: "Fëanor, Silmarillar va Qasam fojiasi",
      content: "«Quenta Silmarillion»ning markaziy oʻqi Noldorning eng buyuk ustasi Fëanorning ijodi bilan bogʻliq. Fëanor Valinordagi Ikki Daraxt (Telperion va Laurelin) nurini uchta oʻxshashi yoʻq javohir — Silmarillarga jo qiladi. Morgoth ulkan oʻrgimchak Ungoliant bilan birgalikda Daraxtlarni zaharlab yoʻq qiladi, Finwëni oʻldirib, Silmarillarni oʻgʻirlab Belerianddagi Angband qalʼasiga qochadi. Gʻazab va kibrga toʻlgan Fëanor va uning yetti oʻgʻli dahshatli Qasam ichadilar: kim boʻlishidan qatʼi nazar, Silmarilni ushlab turgan har qanday mavjudotga qarshi soʻnggi nafasgacha urushadilar. Bu qasam Alqualondëdagi Birinchi Qarindosh Qirgʻiniga, Mandosning Laʼnatiga va Noldorning Belerianddagi fojiaviy taqdiriga sabab boʻladi."
    },
    {
      title: "Beleriand urushlari va buyuk qahramonlik dostonlari",
      content: "Kitobda Morgothga qarshi olib borilgan beshta buyuk jang tasvirlanadi: Dagor-nuin-Giliath (Yulduzlar ostidagi jang), Dagor Aglareb (Shonli jang), Dagor Bragollach (Toʻsatdan alanga jangi) va Nirnaeth Arnoediad (Sanoqsiz koʻz yoshlari jangi). Har bir jangda elflarning qudrati kamayib, insonlar bilan ittifoqlari sinovga uchraydi. Asar ichida uchta buyuk mustaqil afsona oʻrin olgan: oʻlik inson Beren va boqiy elf qizi Lúthienning Angband tojidagi Silmarilni qoʻlga kiritish yoʻlidagi tengsiz muhabbati; Túrin Turambarning fojiaviy qismati va ajdar Glaurung bilan jangi; hamda Tuorning dengiz orqali sirlar shahri Gondolinga kelishi va uning fojiaviy qulashi. Barcha umidlar soʻngan damda Yarim-elf Eärendil Silmaril nurini peshonasiga taqib, osmon orqali Valinorga yetib boradi va Valardan najot soʻraydi. Gʻazab Urushi (War of Wrath) bilan Morgoth tubsiz Zulmatga uloqtiriladi, ammo Beleriand zaminining oʻzi dengiz qaʼriga choʻkib ketadi."
    },
    {
      title: "Christopher Tolkienning matnshunoslik mehnati va nashr qimmati",
      content: "Tolkien 1917-yildan to 1973-yildagi vafotigacha «Silmarillion» ustida ishlagan boʻlsa-da, uni yakuniy nashr holatiga keltira olmagan edi. Christopher Tolkien kanadalik yozuvchi Guy Gavriel Kay yordamida otasining turli davrlardagi, baʼzan bir-biriga zid boʻlgan qoralamalarini (1930-yillardagi «Quenta», 1950-yillardagi qayta ishlanmalar, «Kulrang Yilnomalar») sinchkovlik bilan solishtirib chiqdi va ichki xronologiyasi mos keluvchi yaxlit nashr yaratdi. 1977-yilda kitob chiqqanda, u jahon adabiyotidagi eng buyuk adabiy rekonstruksiya hodisasi deb baholandi. «Silmarillion»siz «Uzuklar Hukmdori» va «Hobbit»dagi koʻplab sirli ishoralar, Galadrielning kelib chiqishi, Elrondning shajarasi va Aragornning taxt huquqi tushunarsiz boʻlib qolar edi."
    }
  ];
  return b;
});

// 6. Unfinished Tales
updateBook('unfinished-tales', b => {
  b.cover_image = {
    src: '/images/books/unfinished-tales.webp',
    alt: 'Tugallanmagan Afsonalar birinchi nashri original changqopi (George Allen & Unwin, 1980) — J.R.R. Tolkien chizgan naqshinkor ajdarsimon dubulgʻa timsoli',
    edition_title: 'First Edition Dust Jacket (George Allen & Unwin, 1980)',
    publisher: 'George Allen & Unwin',
    year: 1980,
    isbn: '978-0-261-10362-7',
    artist: 'J.R.R. Tolkien',
    source: 'George Allen & Unwin / British Library'
  };
  b.synopsis = "«Tugallanmagan Afsonalar» (Unfinished Tales of Númenor and Middle-earth) — J.R.R. Tolkien qalamiga mansub, Christopher Tolkien tomonidan batafsil ilmiy izohlar va matn variantlari bilan 1980-yilda chop etilgan fundamental toʻplam. Ushbu kitob «Silmarillion»dan farqli ravishda, matnlarni yagona sunʼiy syujetga birlashtirmasdan, balki otasining asl qoralamalarini oʻzgarishsiz, parcha-parcha holatda taqdim etadi. Kitob toʻrt qismdan iborat boʻlib, Birinchi, Ikkinchi va Uchinchi Davrlarning eng qorongʻu va qiziqarli nuqtalarini, shuningdek Istari (Sehrgarlar), Palantíri (Koʻruvchi Toshlar) va Drúedain xalqi haqidagi maxsus tadqiqotlarni qamrab oladi.";
  b.detailed_sections = [
    {
      title: "Birinchi Davr: Tuorning Vinyamarga safari va Narn i Chîn Húrin",
      content: "Birinchi qism ikki yirik durdonani oʻz ichiga oladi. «Of Tuor and his Coming to Gondolin» — Tolkienning eng yetuk nasriy asarlaridan biri boʻlib, Tuorning dengiz xudosi Ulmo amri bilan Nevrastdagi tashlandiq Vinyamar saroyiga kelishi, u yerdagi qurol-aslahalarni kiyishi va Ulmoning toʻlqinlar qaʼridan bevosita namoyon boʻlishi tasvirlanadi. Ikkinchi asar — «Narn i Chîn Húrin» (Húrin farzandlari dostoni) boʻlib, Túrin Turambarning fojiasi «Silmarillion»dagidan ancha batafsil, qahramonning ruhiy iztiroblari, Beleg Cúthalion bilan doʻstligi va Nargothronddagi xatolari toʻliq ochib beriladi."
    },
    {
      title: "Ikkinchi Davr: Númenor tavsifi va Aldarion hamda Erendis",
      content: "Ikkinchi qism Númenor orolining geografiyasi, florasi va maʼmuriy boʻlinishini xaritalar bilan tasvirlashdan boshlanadi. Bu yerda Oʻrta-yerdagi eng noyob psixologik qissa — «Aldarion and Erendis: The Mariner's Wife» (Dengizchining xotini) oʻrin olgan. Unda buyuk kema ustasi shahzoda Aldarionning dengizga boʻlgan cheksiz muhabbati bilan uning rafiqasi Erendisning quruqlik va oʻrmonlarga bogʻliqligi oʻrtasidagi fojiaviy nizo qalamga olinadi. Shuningdek, Elros xonadoni shohlarining toʻliq roʻyxati va Galadriel hamda Celebornning Ikkinchi Davrdagi sarguzashtlari, ularning Eregion va Lórien bilan aloqalari haqidagi ziddiyatli qoralamalar keltiriladi."
    },
    {
      title: "Uchinchi Davr: Nargis maydonlari fojiasi, Cirion va Eorl qasami",
      content: "Uchinchi qism «Uzuklar Hukmdori» voqealarining bevosita tarixiy ildizlarini yoritadi. «The Disaster of the Gladden Fields» Isildurning Yagona Uzuk bilan birga orklar pistirmasiga tushib halok boʻlishi jarayonini soatma-soat koʻrsatadi. «Cirion and Eorl» dostonida esa Gondor noibi Cirion va Éothéod yetakchisi Eorl Yosh oʻrtasida Halifirien tepaligidagi Elendil qabri ustida ichilgan tarixiy qasam, Rohanning tashkil topishi va ikki xalqning abadiy doʻstligi hikoya qilinadi. «The Quest of Erebor» qismida esa Gandalf Minas Tirithda qahramonlarga nima sababdan Bilboni Erebor safariga qoʻshganini va Smaugni yoʻq qilish Sauronning shimoliy rejasini qanday barbod etganini soʻzlab beradi."
    },
    {
      title: "Toʻrtinchi Qism: Istari ordeni, Palantíri va Drúedain sirlari",
      content: "Toʻrtinchi qism Oʻrta-yer mifologiyasining maxsus tushunchalariga bagʻishlangan. «The Drúedain» qadimgi oʻrmon yovvoyi odamlari (Woses) va ularning gʻayritabiiy tosh haykallari haqida maʼlumot beradi. «The Istari» inshosi Sehrgarlar ordenining kelib chiqishi, Gandalfning nima sababdan Valinorda Olórin deb atalgani, Radagastning xatosi va Ikki Moviy Sehrgar (Alatar va Pallando) taqdirini yoritadi. «The Palantíri» esa yettita Koʻruvchi Toshning qanday ishlashi, ularning fikr uzatish mexanikasi, Saruman va Denethorning toshlar orqali Sauron ruhiy taʼsiriga tushib qolishi sabablarini texnik va falsafiy jihatdan tahlil qiladi."
    }
  ];
  return b;
});

// 7. The History of Middle-earth
updateBook('history-of-middle-earth', b => {
  b.cover_image = {
    src: '/images/books/history-of-middle-earth.webp',
    alt: 'Oʻrta-yer Tarixi seriyasining 1-jildi muqovasi (HarperCollins, 1991) — Yoʻqotilgan Qissalar Kitobi va J.R.R. Tolkien monogrammasi',
    edition_title: '12-Volume Series (George Allen & Unwin / HarperCollins, 1983–1996) [Pictured: Vol. 1]',
    publisher: 'George Allen & Unwin / HarperCollins',
    year: 1983,
    isbn: '978-0-261-10381-8',
    artist: 'J.R.R. Tolkien',
    source: 'HarperCollins / British Library'
  };
  b.synopsis = "«Oʻrta-yer Tarixi» (The History of Middle-earth) — Christopher Tolkien tomonidan 1983–1996-yillar oraligʻida nashr etilgan, jami 12 jild va umumiy indeksdan iborat monumental matnshunoslik korpusi. Ushbu seriya fantastika va jahon adabiyoti tarixidagi eng ulkan genetik matnshunoslik loyihasi boʻlib, J.R.R. Tolkienning 1916-yildagi Birinchi jahon urushi gospitalida yozgan dastlabki qoralamalaridan tortib, 1973-yilgi vafotigacha yaratgan barcha versiyalari, sheʼrlari, lugʻatlari va falsafiy mulohazalarining bosqichma-bosqich evolyutsiyasini tahlil qiladi.";
  b.detailed_sections = [
    {
      title: "Seriyaning uchta asosiy tematik va xronologik davri",
      content: "12 jildlik seriya shartli ravishda uchta yirik boʻlimga ajratiladi. Birinchi bosqich (1–5 jildlar) — «Qadimgi Silmarillion davri»: 1- va 2-jildlar («The Book of Lost Tales») 1910–1920-yillardagi mifologiyaning eng qadimgi, mifologik va ertaknamo shaklini aks ettiradi; 3-jild («The Lays of Beleriand») alliterativ qadimgi ingliz sheʼriyatidagi dostonlarni jamlagan; 4-jild («The Shaping of Middle-earth») birinchi xaritalar va xronologiyalarni koʻrsatadi; 5-jild («The Lost Road») esa Númenor va vaqt sayohati gʻoyasini ilk bor kiritadi. Ikkinchi bosqich (6–9 jildlar) — «Uzuklar Hukmdori tarixi»: unda Frodo oʻrniga Bingo nomli xobbitdan boshlangan syujetning qanday qilib epik asarga aylangani har bir qoralama asosida koʻrsatiladi. Uchinchi bosqich (10–12 jildlar) — «Kechki Silmarillion va metafizika»: «Uzuklar Hukmdori»dan keyin Tolkienning Arda teologiyasi, yovuzlikning moddiy tabiati va elflarning ruhiy tuzilishi haqidagi eng chuqur falsafiy asarlarini oʻz ichiga oladi."
    },
    {
      title: "10–12 jildlarning fundamental falsafiy ahamiyati",
      content: "Ayniqsa seriyaning soʻnggi uch jildi — 10-jild («Morgoth's Ring»), 11-jild («The War of the Jewels») va 12-jild («The Peoples of Middle-earth») Tolkien falsafasini tushunishda eng yuqori ilmiy qadrga ega. «Morgoth's Ring» asarida mashhur «Athrabeth Finrod ah Andreth» (Finrod va Andreth suhbati) joy olgan boʻlib, unda elf shohi va inson ayoli oʻlim, boqiylik va Eruning kelajakda Arda ichiga inson qiyofasida kirib kelishi haqida bahslashadilar. Shuningdek, «Myths Transformed» boblarida Tolkien orklarning kelib chiqishi masalasini qayta koʻrib chiqadi: yovuzlik oʻz-oʻzidan ongli ruh yarata olmasligini, Melkor oʻz qudratini Ardaning butun moddiy zaminiga (Morgoth halqasi kabi) sochib yuborganini taʼkidlaydi."
    },
    {
      title: "Matnshunoslik metodi va adabiy durdona sifatidagi qimmati",
      content: "Christopher Tolkien oʻn uch yil davomida otasining minglab qalamda, koʻpincha bir-birining ustiga yozilgan, xiralashgan qoʻlyozmalarini oʻqib chiqdi va ularga tengsiz sharhlar bitdi. U nafaqat matn variantlarini koʻrsatdi, balki har bir soʻz, ism va sananing qachon va qanday sabab bilan oʻzgarganini isbotlab berdi. Masalan, Aragorn dastlab «Trotter» laqabli yogʻoch oyoq kiygan xobbit boʻlgani, Saruman obrazi esa hikoya yarmiga yetganda toʻsatdan paydo boʻlgani shu qoralamalar orqali maʼlum boʻldi. Ushbu 12 jild Tolkienshunoslik (Tolkien Studies) fanining asosiy poydevori hisoblanadi."
    },
    {
      title: "Oʻzbek tolkienshunosligidagi oʻrni va ilmiy zarurati",
      content: "Oʻzbek adabiy jamoatchiligi uchun «Oʻrta-yer Tarixi» asari fantastika janriga yuzaki qaramaslik, balki har bir badiiy asar ortida ulkan filologik, lingvistik va falsafiy mehnat yotishini koʻrsatuvchi eng yorqin namunadir. Bu korpus oʻzbek tarjimonlari va tadqiqotchilariga Tolkien atamalarini, personajlarning asl xarakterini va ularning konseptual ildizlarini buzmasdan toʻgʻri tushunish va oʻzbek tilida ifodalash imkonini beradi."
    }
  ];
  return b;
});

// 8. The Children of Húrin
updateBook('the-children-of-hurin', b => {
  b.cover_image = {
    src: '/images/books/the-children-of-hurin.webp',
    alt: 'Húrin Farzandlari birinchi nashri original changqopi (HarperCollins, 2007) — Alan Lee chizgan Dor-lómin Ajdar dubulgʻasidagi Túrin Turambar',
    edition_title: 'First Edition (HarperCollins, 2007)',
    publisher: 'HarperCollins',
    year: 2007,
    isbn: '978-0-00-724622-9',
    artist: 'Alan Lee',
    source: 'HarperCollins / British Library'
  };
  b.synopsis = "«Húrin Farzandlari» (The Children of Húrin) — J.R.R. Tolkien qalamiga mansub, Christopher Tolkien tomonidan otasining koʻp sonli qoralamalari va «Narn i Chîn Húrin» dostonining eng mukammal qismlari sintez qilinib, 2007-yilda mustaqil roman shaklida chop etilgan epik fojia. Kitob Alan Leening rangli va qalamtasvir illyustratsiyalari bilan bezatilgan. Asar qadimgi Birinchi Davrda Hador xonadoni yetakchisi Húrinning Morgoth tomonidan asir olinishi va uning butun oilasiga laʼnat yogʻdirilishi oqibatida oʻgʻli Túrin Turambar hamda qizi Nienor Níniel boshiga tushgan qora qismatni hikoya qiladi.";
  b.detailed_sections = [
    {
      title: "Asarning yaratilish tarixi va mifologik manbalari",
      content: "Tolkien ushbu fojiani 1918-yilda, Birinchi jahon urushidan qaytgach yoza boshlagan. Dostonning asosiy ilhom manbai qadimgi fin eposi «Kalevala»dagi baxtsiz qahramon Kullervo haqidagi runalar hamda islandlarning «Völsunga saga»sidir. Tolkien Kullervo obrazidagi oʻz yaqinlarini bilmasdan halokatga yetaklash va fojiaviy gʻurur motivini olib, uni Oʻrta-yer mifologiyasining markaziy qahramonlik voqealaridan biriga aylantirdi. Yozuvchi umri davomida bu dostonni bir necha bor: alliterativ sheʼr shaklida, «Silmarillion»ning qisqa bobi tarzida va «Unfinished Tales»dagi kengaytirilgan nasriy variantda qayta ishlagan. 2007-yilgi nashr Christopher Tolkienning otasi qalamiga mansub eng toʻliq va uzluksiz matnni tashqi aralashuvlarsiz tiklagan yuksak mehnati mahsulidir."
    },
    {
      title: "Morgothning Laʼnati va Túrin Turambarning fojiaviy yoʻli",
      content: "Nirnaeth Arnoediad jangida Húrin Thalion soʻnggi jangchigacha kurashib asir tushadi. Morgoth unga boʻysunishni taklif qiladi, ammo Húrin qora hukmdor yuziga magʻrur kuladi. Shunda Morgoth Húrinni Thangorodrim choʻqqisidagi qoyaga temir zanjir bilan bogʻlab, uning barcha nasliga laʼnat oʻqiydi: «Sening nasling qayerga bormasin, faqat yovuzlik va qorongʻulik topajak». Húrinning oʻgʻli Túrin Doriathda qirol Thingol homiyligida oʻsadi, ammo kibr va tushunmovchilik tufayli oʻrmon qaroqchisiga aylanadi. U qayerga bormasin, oʻzining shafqatsiz jasorati bilan dushmanni yengsa-da, beixtiyor doʻstlarini halokatga yetaklaydi: oʻzining eng yaqin birodari elflar kamonchisi Beleg Cúthalionni qorongʻuda tanimay oʻldirib qoʻyadi."
    },
    {
      title: "Glaurungning makkorligi, Nargothrondning qulashi va intifoq",
      content: "Túrin qora qilich Gurthangni qoʻlga olib, Nargothrond shohligiga keladi va ularni ochiq jangga undaydi. Bu xato shahar ustiga oltin ajdar Glaurung va orklar qoʻshinini boshlab keladi; Nargothrond qulaydi, malika Finduilas asir olinadi. Glaurung oʻzining sehrli nigohi bilan Túrinni qotirib qoʻyadi va uning onasi va singlisini yolgʻonlar bilan aldab, ularning xotirasini oʻchiradi. Túrin Brethil oʻrmonida oʻz singlisi ekanini bilmagan holda Nienor (Níniel — Koʻz yoshli qiz) bilan turmush quradi. Túrin Cabed-en-Aras jarligida Glaurungni pastdan pichoqlab oʻldiradi, biroq jon berayotgan ajdar Nienorning xotirasini qaytaradi. Oʻz akasining xotini boʻlganini va uning farzandini kutayotganini anglagan Nienor jarlikdan daryoga sakrab oʻzini oʻldiradi. Túrin hushiga kelib haqiqatni bilgach, oʻzining qora qilichi Gurthang ustiga yiqilib jon beradi."
    },
    {
      title: "Falsafiy teranlik: Qismat, Kibr va Erkin Iroda",
      content: "«Húrin Farzandlari» Tolkien ijodidagi eng qorongʻu va eng yuksak dramatik asardir. Bu yerda «Hobbit» yoki «Uzuklar Hukmdori»dagi kabi baxtli yakun (Eucatastrophe) yoʻq. Asar inson irodasi va yovuzlikning laʼnati oʻrtasidagi dahshatli kurashni koʻrsatadi. Túrin Turambar («Taqdir Hukmdori») oʻz laqabi bilan qismatdan qochishga va uni yengishga urinadi, biroq uning shaxsiy kibri, maslahatga kirmasligi va shoshqaloqligi Morgoth laʼnatining amalga oshishiga asosiy qurol boʻlib xizmat qiladi. Kitob insoniy fojia, qismat muqarrarligi va adashgan qalb iztiroblarining jahon adabiyotidagi eng buyuk timsollaridan biridir."
    }
  ];
  return b;
});

console.log("✓ Part 1 kitoblar yangilandi!");
