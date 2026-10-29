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

// 9. The Hobbit
updateBook('the-hobbit', b => {
  b.cover_image = {
    src: '/images/books/the-hobbit.webp',
    alt: 'Hobbit birinchi nashri original qattiq muqovasi (George Allen & Unwin, 1937) — J.R.R. Tolkien chizgan Yolgʻiz Togʻ, ajdar va qadimiy runik hoshiyalar',
    edition_title: 'First Edition Original Publisher Cloth (George Allen & Unwin, 1937)',
    publisher: 'George Allen & Unwin',
    year: 1937,
    isbn: '978-0-261-10221-7',
    artist: 'J.R.R. Tolkien',
    source: 'George Allen & Unwin / British Library'
  };
  return b;
});

// 10. Beren and Lúthien
updateBook('beren-and-luthien', b => {
  b.cover_image = {
    src: '/images/books/beren-and-luthien.webp',
    alt: 'Beren va Lúthien birinchi nashri original changqopi (HarperCollins, 2017) — Alan Lee chizgan Boʻri Huan ustidagi Lúthien va Beren Erchamion',
    edition_title: 'First Edition (HarperCollins, 2017)',
    publisher: 'HarperCollins',
    year: 2017,
    isbn: '978-0-00-821419-7',
    artist: 'Alan Lee',
    source: 'HarperCollins / British Library'
  };
  b.synopsis = "«Beren va Lúthien» (Beren and Lúthien) — J.R.R. Tolkien qalamiga mansub, Christopher Tolkien tomonidan otasining yuz yillik qoʻlyozmalari asosida tuzilib, 2017-yilda chop etilgan muhabbat va jasorat dostoni. Ushbu kitob Tolkienning eng shaxsiy va aziz afsonasi boʻlib, yozuvchi va uning rafiqasi Edith Bratt qabr toshlariga mos ravishda «Beren» va «Lúthien» ismlari oʻyib yozilgan. Asar oʻlik inson Beren Erchamion bilan Doriath shohi Thingol va Ilahiya Melianning qizi, tengsiz goʻzallik sohibasi boʻlgan boqiy elf malikasi Lúthien Tinúvielning sof muhabbati, Angband zindonlaridan Silmarilni olib chiqish yoʻlidagi mislsiz fidoyiligi va oʻlimni yengib oʻtishi haqida hikoya qiladi.";
  b.detailed_sections = [
    {
      title: "Afsonaning yuz yillik evolyutsiyasi (1917–2017)",
      content: "Tolkien ushbu afsonaning ilk qoralamasini 1917-yilda, Ruzveltdagi gospitalda davolanayotgan paytida «The Tale of Tinúviel» nomi bilan qogʻozga tushirgan. Oʻsha davrda Beren elf boʻlgan, asosiy yovuz obrazlardan biri esa qora mushuklar qiroli Tevildo edi. 1925–1931-yillarda Tolkien ushbu asarni oʻzining eng yuksak sheʼriy durdonasi — qofiyalangan alliterativ «The Lay of Leithian» (Ozodlik dostoni) dostoniga aylantirdi. Ushbu doston toʻrt mingdan ortiq misrani tashkil etib, ingliz tilining eng goʻzal musiqiyligini oʻzida mujassam etgan. Keyinchalik asar 1930-yillardagi «Quenta Noldorinwa» va 1950-yillardagi «Silmarillion» nasriy boblariga kiritildi. 2017-yilgi mustaqil nashr ushbu barcha bosqichlarni xronologik tartibda taqdim etib, afsonaning bolalar ertagidan olijanob epik fojiaga qanday oʻsib oʻtganini namoyish etadi."
    },
    {
      title: "Silmaril sharti va Doriathdan Angband sari yoʻl",
      content: "Beren Neldoreth oʻrmonida tilla barglar ostida raqs tushayotgan Lúthienni koʻrib, uni «Tinúviel» (Bulbul) deb ataydi va sevib qoladi. Ularning muhabbatiga qarshi boʻlgan qirol Elu Thingol Berenga bajarib boʻlmas shart qoʻyadi: Morgothning temir tojidagi uchta muqaddas Silmarildan birini olib kelsa, qizini berishini aytadi. Beren Finrod Felagund shohligiga keladi. Finrod Barahir qasamiga sodiq qolib, oʻn ikki hamrohi bilan yoʻlga chiqadi, ammo Tol-in-Gaurhoth (Boʻrilar oroli) qorongʻu minorasida Sauron tomonidan asir olinadi. Finrod va Sauron oʻrtasidagi sehrli qoʻshiqlar jangi asarning eng mashhur epizodlaridan biridir. Finrod Berenni qutqarish uchun ulkan boʻri bilan jangda jon beradi. Lúthien Valinorning boqiy iti Huan yordamida qochib kelib, Sauronni magʻlub etadi va orolni ozod qiladi."
    },
    {
      title: "Morgoth saroyiga kirish, Carcharoth fojiasi va Mandos huzurida",
      content: "Lúthien oʻzining sehrli sochlaridan toʻqilgan qora chopon va boʻri terisiga kirib, Beren bilan birga yer ostidagi dahshatli Angband saroyiga kirib boradi. Morgoth taxti oldida Lúthien shunday sehrli va mungli raqs tushadiki, qora hukmdor va uning barcha iblislari chuqur uyquga ketadilar. Beren pichoq bilan tojdan bir Silmarilni kesib oladi. Qochish paytida ularni Angband darvozasini qoʻriqlovchi ulkan boʻri Carcharoth toʻxtatadi va Berenning Silmarilni ushlab turgan oʻng qoʻlini tishlab uzib yutib yuboradi. Muqaddas gavhar boʻrining ichki aʼzolarini yondira boshlaydi va u jazavaga tushib butun Beleriand boʻylab quturib chopadi. Doriath ovida Carcharoth oʻldiriladi, ammo Beren ogʻir yaralanib jon beradi. Lúthienning ruhi tanasini tark etib, Mandos saroyiga — oʻliklar zallariga boradi. Uning cheksiz muhabbat va fojia haqidagi qoʻshigʻi toshbagʻir Mandosni ham yigʻlatadi. Beren va Lúthienga ikkinchi hayot beriladi, biroq Lúthien boqiylikdan voz kechib, Beren kabi oddiy oʻlik insonga aylanishni tanlaydi."
    },
    {
      title: "Shaxsiy biografik ahamiyat va Tolkien olamidagi abadiy meros",
      content: "Tolkien uchun Beren va Lúthien shunchaki toʻqima qahramonlar emas edi. 1917-yilda yosh yozuvchi Yorshir oʻrmonlarida oppoq gullar orasida raqs tushayotgan sevgilisi Edithni koʻrib, ushbu obrazni yaratgan. Tolkien Edithga yoʻllagan maktubida: «Men hech qachon Beren ekanligimni daʼvo qilmaganman, ammo u mening Lúthienim edi», deb yozgan edi. Oksforddagi Wolvercote qabristonida ularning umumiy qabr toshida shunday soʻzlar oʻyilgan: «Edith Mary Tolkien, Lúthien (1889–1971)» va «John Ronald Reuel Tolkien, Beren (1892–1973)». Ushbu afsona Arda tarixida Inson va Elf oʻrtasidagi birinchi qon birlashuvi boʻlib, ulardan Elwing, Elrond, Elros va oxir-oqibat Aragorn Elessar dunyoga kelgan."
    }
  ];
  return b;
});

// 11. The Fall of Gondolin
updateBook('the-fall-of-gondolin', b => {
  b.cover_image = {
    src: '/images/books/the-fall-of-gondolin.webp',
    alt: 'Gondolinning Qulashi birinchi nashri original changqopi (HarperCollins, 2018) — Alan Lee chizgan Amon Gwareth tepaligidagi oppoq Gondolin va unga intilayotgan Tuor',
    edition_title: 'First Edition (HarperCollins, 2018)',
    publisher: 'HarperCollins',
    year: 2018,
    isbn: '978-0-00-830275-7',
    artist: 'Alan Lee',
    source: 'HarperCollins / British Library'
  };
  b.synopsis = "«Gondolinning Qulashi» (The Fall of Gondolin) — J.R.R. Tolkien qalamiga mansub, Christopher Tolkien tomonidan 2018-yilda nashrga tayyorlangan va uning 93 yoshida chop etilgan soʻnggi kitobi. Ushbu asar Tolkien butun Oʻrta-yer mifologiyasida yozgan eng birinchi hikoya boʻlib, 1916–1917-yillarda Somme jangidagi front gospitalida qogʻozga tushirilgan. Asar inson qahramoni Tuorning suvlar xudosi Ulmo amri bilan sirli yashirin shahar Gondolinga kelishi, qirol Turgonning qizi Idril Celebrindal bilan turmush qurishi, sotqin Maeglinning shaharni Morgothga sotishi va metall ajdarlar, Balroglar hamda orklar qoʻshini ostida buyuk elflar poytaxtining yonib kulga aylanishi fojiasini bayon qiladi.";
  b.detailed_sections = [
    {
      title: "Birinchi jahon urushi gospitali va afsonaning tugʻilishi",
      content: "1916-yil oxirida Somme jangining dahshatli trench isitmasidan kasalxonaga tushgan 24 yoshli ingliz leytenanti Tolkien «The Fall of Gondolin» asarini yozishga kirishgan. Urush maydonidagi loy, oʻlim, zaharli gazlar va metall tanklar Tolkien tasavvurida Angbandning temir va olovli ajdarlari, qamal mashinalari timsolida aks etgan. Tolkien 1920-yilda Oksforddagi insho klubida ushbu dostonni baland ovozda oʻqib berganida, tinglovchilar yangi mifologiya tugʻilganini eʼtirof etgan edilar. Ushbu asar «Qadimgi Dunyoning Buyuk Uch Afsonasi» (Húrin Farzandlari, Beren va Lúthien bilan birga) qatorini toʻldiradi."
    },
    {
      title: "Yetti Darvoza va Yashirin Shaharning ulugʻvorligi",
      content: "Tuor elf Voronwë hamrohligida xatarli qish faslida aylanib oʻtib, Echoriath (Oʻrab turuvchi togʻlar) darasiga yetib keladi. Ular Gondolinning afsonaviy Yetti Darvozasidan: yogʻoch, tosh, bronza, temir, kumush, oltin va nihoyat poʻlat darvozalardan oʻtadilar. Har bir darvoza elflarning mahorati va ehtiyotkorligi ramzi boʻlib, oxirgi darvoza ortida Tumladen yashil vodiysi oʻrtasidagi Amon Gwareth tepaligida oppoq marmar qasrlar, favvoralar va Ikki Daraxt nusxasi boʻlgan Glingal va Belthil daraxtlari jilolanib turgan sehrli Gondolin qad koʻtargan edi. Shahar shohi Turgon Tuorni sharaf bilan qabul qiladi, biroq Ulmoning «shaharni tark etib, dengiz sari qochish» haqidagi ogohlantirishiga kibr bilan quloq solmaydi."
    },
    {
      title: "Maeglin xiyonati va dahshatli qamal",
      content: "Turgonning singlisi Aredhel va qora elf Eölning oʻgʻli Maeglin Idrilga nisbatan yashirin xusumat va sevgi bilan yashardi. U metall izlab shahar chegarasidan chiqqanida orklar tomonidan asir olinadi va Morgoth unga Idrilni vaʼda qilgach, shahar joylashgan joyni sotadi. «Darvozalar bayrami» tongida dushman shaharga bostirib kiradi. Kitobda Gondolinning oʻn ikki xonadoni (Qaldirgʻoch, Kamon, Qorparcha, Daraxt, Oltin Gul, Bolta, Qanot xonadonlari) oʻrtasidagi epik janglar tasvirlanadi. Ecthelion favvora maydonida Balroglar sarkardasi Gothmog bilan jangga kirishadi va oʻz dubulgʻasi nayzasi bilan uni favvora tubiga bosib, birga halok boʻladi. Qirol Turgon oʻzining eng baland minorasi qulashi bilan birga halok boʻladi."
    },
    {
      title: "Idrilning maxfiy yoʻli, Glorfindel qahramonligi va Eärendil najoti",
      content: "Aqlli malika Idril oldindan yerosti maxfiy yoʻlini tayyorlab qoʻygan edi. Tuor Maeglinni qalʼa devoridan uloqtirib oʻldiradi va Idril hamda ularning yosh oʻgʻli Eärendilni olib qochadi. Cirith Thoronath (Burgutlar yorigʻi) qoyalarida qochqinlarni orklar va yana bir dahshatli Balrog kutib oladi. Shunda Oltin Gul xonadoni yetakchisi Glorfindel Balrog bilan yakkama-yakka jangga kirishadi; u iblisni tubsiz jarlikka uloqtiradi, ammo Balrog oʻz qamchisi bilan Glorfindelning oltin sochlaridan tutib, uni ham tubsizlikka tortib ketadi. Burgutlar podshosi Thorondor qahramonning jasadini olib chiqadi. Omon qolganlar Sirion etaklariga yetib boradilar. Eärendil ulgʻayib, oʻzining afsonaviy oq kemasi Vingilotda Valinorga suzib boradi va butun Arda xalqlarini zulmatdan qutqaruvchi ilohiy yordamni boshlab keladi."
    }
  ];
  return b;
});

// 12. The Fall of Númenor
updateBook('the-fall-of-numenor', b => {
  b.cover_image = {
    src: '/images/books/the-fall-of-numenor.webp',
    alt: 'Númenorning Qulashi birinchi nashri original changqopi (HarperCollins, 2022) — Alan Lee chizgan ulkan toʻlqinlar ostida qolgan Armenelos va Melkor ibodatxonasi',
    edition_title: 'First Edition (HarperCollins, 2022)',
    publisher: 'HarperCollins',
    year: 2022,
    isbn: '978-0-00-853783-8',
    artist: 'Alan Lee',
    source: 'HarperCollins / British Library'
  };
  b.synopsis = "«Númenorning Qulashi» (The Fall of Númenor: And Other Tales of the Second Age) — J.R.R. Tolkienning Ikkinchi Davrga oid barcha tarqoq yozuvlarini yagona xronologik tizimga birlashtirgan, Brian Sibley tomonidan tahrir qilinib, 2022-yilda chop etilgan yirik toʻplam. Asar Alan Leening oʻnlab yangi rangli illyustratsiyalari bilan boyitilgan. Kitobda buyuk Elros asos solgan orol-qirollikning gullab-yashnashi, Qudrat Uzuklarining yasalishi, Sauronning makkorona asirligi, qirol Ar-Pharazônning kibri, Boqiy Yerlarga hujumi va natijada butun Númenor qitʼasining okean qaʼriga gʻarq boʻlib, tekis dunyoning sharsimon shaklga aylanishi («Dunyoni oʻzgartirish») xronologik aniqlikda bayon etiladi.";
  b.detailed_sections = [
    {
      title: "Ikkinchi Davr xronologiyasi va yagona korpus zarurati",
      content: "Tolkien legendariumida Ikkinchi Davr (3441 yil) uzoq vaqt davomida eng kam tizimlashtirilgan davr hisoblangan. Bu davr haqidagi maʼlumotlar «Silmarillion» («Akallabêth»), «Uzuklar Hukmdori» (Ilovalar A va B), «Tugallanmagan Afsonalar» («Aldarion va Erendis») hamda «Oʻrta-yer Tarixi»ning turli jildlarida tarqoq holda yotar edi. Brian Sibley «Yillar Dostoni» (Tale of Years) asosida barcha matnlarni yilma-yil ketma-ketlikda birlashtirib, oʻquvchiga Ikkinchi Davrning toʻliq va uzluksiz panoramasini taqdim etdi. Bu kitob Tolkienning dengiz sivilizatsiyasi va qadimgi Atlantida afsonasiga boʻlgan qiziqishining toʻliq ifodasidir."
    },
    {
      title: "Númenorning yuksalishi va dengizlar zabt etilishi",
      content: "Birinchi Davr urushlarida Noldor elflariga yordam bergan sadoqatli Insonlarga (Edain) mukofot sifatida dengiz oʻrtasida yulduz shaklidagi Andor («Inʼom zamini») oroli taqdim etiladi. Eärendil oʻgʻli Elros (Tar-Minyatur) birinchi qirol boʻladi; uning xalqiga 300–400 yillik uzoq umr inʼom etiladi. Númenorliklar qudratli kemasozlarga aylanadilar va Oʻrta-yer qirgʻoqlariga kelib, yovvoyi odamlarga dehqonchilik, temirchilik va fanlarni oʻrgatadilar. Biroq Valar ularga qatʼiy taqiq qoʻyadi: hech bir oʻlik inson Gʻarbdagi Boqiy Yerlar (Aman) sari suzib borishi mumkin emas. Asrlar oʻtishi bilan insonlar qalbida oʻlimdan qoʻrqish, boqiylikka hasad va Boqiy Yerlarga boʻlgan taqiqlangan intilish kuchaya boshlaydi."
    },
    {
      title: "Sauronning makri va Melkorga sigʻinish",
      content: "Oʻrta-yerda Sauron Annatar («Sovgʻalar Hukmdori») qiyofasida Eregion elflari bilan Qudrat Uzuklarini yasaydi, biroq Yagona Uzuk yordamida oʻz niyatini fosh qilgach, Elflar va Sauron Urushi boshlanadi. Númenor qiroli Tar-Minastir qudratli flot yuborib, Sauronni tor-mor keltiradi. Oradan asrlar oʻtgach, oxirgi va eng kibrli qirol Ar-Pharazôn ulkan armada bilan Oʻrta-yerga kelib, Sauronni jangsiz asir oladi va orolga olib keladi. Bu Sauronning oʻz rejasi edi: u tez orada qirolning bosh maslahatchisiga aylanadi, Yagona Yaratuvchi Eru oʻrniga Melkorga (Zulmat Hukmdori) sigʻinish kultini joriy qiladi va Armenelosdagi ulkan ibodatxonada insonlarni qurbonlik qila boshlaydi."
    },
    {
      title: "Buyuk Toʻlqin, Dunyoning Bukilishi va Omon qolganlar",
      content: "Qarigan va oʻlim dahshatiga tushgan Ar-Pharazôn ulkan «Buyuk Qurollanish» flotini tuzib, Aman qirgʻoqlariga bostirib boradi. Shunda Valar oʻz hukmronlik vakolatini Yaratuvchi Eru Ilúvatarga topshiradi. Eru daryolar va dengizlarni harakatga keltiradi: ulkan qora yoriq ochilib, butun Númenor oroli, shaharlari va floti bilan okean qaʼriga gʻarq boʻladi. Dunyo shakli tubdan oʻzgaradi: tekis boʻlgan yer sharsimon qilib qayta buraladi, Boqiy Yerlar esa jismoniy olam doirasidan chiqarilib, faqat elflar kemalari bora oladigan «Toʻgʻri Yoʻl» (Straight Road) saqlanib qoladi. Sadoqatlilar yetakchisi Elendil va uning oʻgʻillari Isildur hamda Anárion toʻqqiz kemada Oʻrta-yerga qochib kelib, Arnor va Gondor qirolliklariga asos soladilar."
    }
  ];
  return b;
});

// 13. The Nature of Middle-earth
updateBook('the-nature-of-middle-earth', b => {
  b.cover_image = {
    src: '/images/books/the-nature-of-middle-earth.webp',
    alt: 'Oʻrta-yerning Tabiati birinchi nashri original changqopi (HarperCollins, 2021) — Ted Nasmith chizgan Boqiy Yerlar qirgʻogʻidagi Alqualondë va oydin dengiz',
    edition_title: 'First Edition (HarperCollins, 2021)',
    publisher: 'HarperCollins',
    year: 2021,
    isbn: '978-0-00-838792-1',
    artist: 'Ted Nasmith',
    source: 'HarperCollins / British Library'
  };
  b.synopsis = "«Oʻrta-yerning Tabiati» (The Nature of Middle-earth) — J.R.R. Tolkienning 1950–1970-yillardagi ilgari hech qayerda eʼlon qilinmagan kechki qoʻlyozmalari asosida, elflar tili boʻyicha yetakchi mutaxassis Carl F. Hostetter tomonidan Christopher Tolkienning vasiyati bilan tahrir qilinib, 2021-yilda chop etilgan fundamental ilmiy toʻplam. Kitob Ardaning metafizikasi, vaqt nisbati, elflarning qarishi va qayta tugʻilishi (reinkarnatsiyasi), insonlar va boshqa irqlarning biologik xususiyatlari, Númenor orolining aniq geografik va iqlimiy tavsiflari hamda ruhiy qudrat (Ósanwë-kenta) masalalarini qamrab oladi.";
  b.detailed_sections = [
    {
      title: "Vaqt, Boqiylik va Qarish matematikasi (Time and Ageing)",
      content: "Kitobning birinchi yirik boʻlimi Tolkienning elflar va insonlar yoshi oʻrtasidagi mutanosiblikni matematik aniqlikda belgilashga qaratilgan tinimsiz izlanishlariga bagʻishlangan. Valinordagi «Daraxtlar Yili» (Valian Year) va Oʻrta-yerdagi «Quyosh Yili» oʻrtasidagi nisbat (dastlab 1:10, keyinchalik 1:144 nisbati) tahlil qilinadi. Elflarning jismoniy ulgʻayishi, ularning oʻziga xos biologik bosqichlari (yoshlik, toʻliq yetuklik va ruhiy charchoq) batafsil hisob-kitoblar bilan keltiriladi. Shuningdek, boqiy mavjudotlarning oʻlik zaminga kelganda qanday ruhiy va jismoniy zoʻriqishlarga uchrashi masalasi chuqur falsafiy asoslab beriladi."
    },
    {
      title: "Tana va Ruh: Hröa va Fëa munosabatlari",
      content: "Ikkinchi qism Tolkienning eng murakkab ontologik asarlaridan biri hisoblangan «Ósanwë-kenta» (Fikr uzatish sirlari) va tana-ruh munosabatlarini yoritadi. Elflarning joni (Fëa) va moddiy tanasi (Hröa) bir-biri bilan qanday hamkorlik qilishi, oʻlim yuz berganda ruhning Mandos zallariga borishi va u yerda yangi tanaga ega boʻlib reinkarnatsiya qilinishi (Finwë va Míriel muammosi) qonuniyatlari ochib beriladi. Shuningdek, Eru tomonidan insonlarga berilgan «Oʻlim Inʼomi» (Gift of Men) nima sababdan laʼnat emas, balki koinot doirasidan tashqaridagi haqiqiy erkinlik ekani teologik jihatdan dalillanadi."
    },
    {
      title: "Númenor tabiati, kiyimlari, ovqatlari va jismoniy koʻrinish",
      content: "Kitobning uchinchi qismi Oʻrta-yerning moddiy madaniyatiga oid kutilmagan va qiziqarli tafsilotlarni ochadi. Unda Númenor orolining daraxtlari, oʻtlari, hayvonot olami, shuningdek elflarning mashhur lembas nonini pishirish qoidalari va uning faqat ayollar («Yavannildi») tomonidan tayyorlanishi shartligi aytiladi. Eng qizigʻi, Oʻrta-yer xalqlari orasida soqol qoʻyish mezonlari (elflar va númenorliklarning soqolsiz boʻlishi, faqat Círdan kabi uchinchi davriga oʻtgan juda qadimgi elflarda soqol paydo boʻlishi) va personajlarning aniq boʻylari (masalan, Galadriel 193 sm, Elendil 241 sm boʻlgani) aynan ushbu manbada oʻz isbotini topadi."
    },
    {
      title: "Christopher Tolkien merosi va kitobning ilmiy ahamiyati",
      content: "Christopher Tolkien 2020-yilda vafot etishidan oldin otasining barcha lingvistik va kechki matnlarini Carl F. Hostetterga (Elvish Linguistic Fellowship rahbari) ishonib topshirgan edi. Hostetter ushbu murakkab qoralamalarni filologik sinchkovlik bilan tuzib, keng izohlar berdi. «The Nature of Middle-earth» kitobi Tolkienning shunchaki qissaxon emas, balki oʻz koinotining eng mayda fizik, biologik va metafizik qonunlarini mukammal tizimlashtirgan dahshatli darajada puxta olim boʻlganini isbotlovchi soʻnggi buyuk guvohlikdir."
    }
  ];
  return b;
});

// 14. The Letters of J.R.R. Tolkien
updateBook('letters-of-jrr-tolkien', b => {
  b.cover_image = {
    src: '/images/books/letters-of-jrr-tolkien.webp',
    alt: 'J.R.R. Tolkien Maktublari kengaytirilgan nashri muqovasi (HarperCollins, 2000) — yozuvchining trubka chekayotgan fotosurati',
    edition_title: 'Revised & Expanded Edition (HarperCollins, 2000 / 2023)',
    publisher: 'George Allen & Unwin / HarperCollins',
    year: 1981,
    isbn: '978-0-04-826005-5',
    artist: 'HarperCollins Editorial',
    source: 'HarperCollins / British Library'
  };
  b.synopsis = "«J.R.R. Tolkien Maktublari» (The Letters of J.R.R. Tolkien) — Humphrey Carpenter tomonidan Christopher Tolkien koʻmagida tuzilib, ilk bor 1981-yilda (va 2023-yilda 150 dan ortiq yangi maktublar bilan kengaytirilib) chop etilgan rasmiy epistolyar korpus. Ushbu kitob Tolkienshunoslikdagi eng nufuzli birlamchi manba boʻlib, muallifning oʻz asarlari, personajlarning ruhiyati, Oʻrta-yer teologiyasi, tillar yaratish metodologiyasi, urush yillaridagi kechinmalari hamda kitobxonlar va noshirlar savollariga bergan mukammal javoblarini qamrab oladi.";
  b.detailed_sections = [
    {
      title: "Maktublar korpusi: shaxsiy hayotdan mifologiya falsafasigacha",
      content: "Toʻplam 1914-yildan 1973-yil 29-avgustigacha (yozuvchi vafotidan toʻrt kun oldingi xatgacha) boʻlgan 354 ta (2023-yilgi nashrda 500 dan ortiq) maktubni oʻz ichiga oladi. Maktublar oluvchilar orasida uning oʻgʻillari (ayniqsa urush maydonidagi Christopher), rafiqasi Edith, Inklings klubidagi safdoshi C.S. Lewis, noshirlar Stanley va Rayner Unwin, shuningdek butun dunyodan xat yozgan oddiy kitobxonlar, ruhoniylar va olimlar bor. Tolkien maktublarida oʻzini samimiy, dono, bolajon, baʼzan esa tushkun va charchagan inson sifatida ochib beradi."
    },
    {
      title: "131-raqamli Maktub: Butun Legendariumning Bosh Manifesti",
      content: "1951-yil oxirida Milton Waldmanga (Collins nashriyoti muharriri) yoʻllangan mashhur 131-maktub butun Tolkien ijodining eng buyuk nazariy manifesti hisoblanadi. Unda Tolkien nima sababdan «Angliya uchun oʻziga xos mifologiya» yaratishga kirishganini, elflarning sehr bilan munosabatini, Yagona Uzukning qudrat mexanizmini va «The Silmarillion» hamda «The Lord of the Rings» bir-birisiz yashay olmaydigan yaxlit tananing ikki aʼzosi ekanligini mukammal tizimda tushuntirib beradi. Har qanday Tolkienshunoslik tadqiqoti ushbu maktubni chuqur oʻrganishdan boshlanadi."
    },
    {
      title: "Falsafiy va teologik nozikliklar: Frodo sinovi va Grace tushunchasi",
      content: "Maktublar kitobdagi eng bahsli masalalarga muallifning shaxsiy javoblarini taqdim etadi. Masalan, 246-maktubda Tolkien Frodoni Hukm Togʻida Uzukni oʻziniki deb eʼlon qilgani uchun «muvaffaqiyatsiz qahramon» deb hisoblash mutlaqo notoʻgʻri ekanini taʼkidlaydi: Frodo insoniy imkoniyatlar chegarasigacha borgan edi va uning jismoniy-ruhiy kuchi tugagan joyda ilohiy inoyat (Grace) Gollum orqali vaziyatni oʻnglaydi. Shuningdek, 153-maktubda Oʻrta-yer olamining xristian teologiyasi bilan bogʻliqligi («Asar ongli ravishda diniy emas, ammo tub mohiyatiga koʻra butunlay katolikona»), orklarning ruhiy maqomi va hayvonlarning tili masalalari yoritiladi."
    },
    {
      title: "Noshirlik tarixi va 2023-yilgi toʻliq kengaytirilgan nashr",
      content: "1981-yilda birinchi nashr tayyorlanayotganda, hajm cheklovi tufayli Humphrey Carpenter koʻplab maktublarni qisqartirishga yoki butunlay chiqarib tashlashga majbur boʻlgan edi. 2023-yil noyabr oyida HarperCollins nashriyoti Carpenterning asl qoʻlyozmalari asosida «The Letters of J.R.R. Tolkien: Revised and Expanded Edition»ni chop etdi. Unda ilgari eʼlon qilinmagan oʻnlab yangi maktublar, toʻliq tiklangan paragraflar va yangi ilmiy indeks oʻrin oldi. Bu asar Tolkien dunyosini har qanday taxmin va xayollardan xoli holda, muallifning oʻz soʻzlari orqali anglashning eng oliy poydevoridir."
    }
  ];
  return b;
});

// 15. Sir Gawain and the Green Knight
updateBook('sir-gawain-and-the-green-knight', b => {
  b.cover_image = {
    src: '/images/books/sir-gawain-and-the-green-knight.webp',
    alt: 'Sir Gawain va Yashil Ritsar kitobi muqovasi (Unwin Paperbacks / Del Rey) — Michael Hague chizgan Yashil Ritsar va qalqonli Sir Gawain tasviri',
    edition_title: 'Unwin Paperbacks / Del Rey Edition (1979)',
    publisher: 'Unwin Paperbacks / George Allen & Unwin',
    year: 1975,
    isbn: '978-0-04-821039-5',
    artist: 'Michael Hague',
    source: 'Open Library (ID 10124809)'
  };
  b.synopsis = "«Sir Gawain va Yashil Ritsar, Marvarid hamda Ser Orfeo» (Sir Gawain and the Green Knight, Pearl, and Sir Orfeo) — XIV asr qadimgi oʻrta ingliz (Middle English) sheʼriyatining eng yuksak durdonalari hisoblangan uchta alliterativ dostonning J.R.R. Tolkien tomonidan amalga oshirilgan akademik sheʼriy tarjimalari toʻplami. Christopher Tolkien tomonidan tahrir qilinib, 1975-yilda chop etilgan. Kitob Tolkienning Oksford universitetidagi qadimgi ingliz tili professori sifatidagi akademik faoliyatining choʻqqisi boʻlib, ritsarlik or-nomusi, vasvasaga qarshi kurash, maʼnaviy poklik va tabiat bilan inson oʻrtasidagi sirli munosabatlarni qadimgi alliterativ vaznda qayta tiklaydi.";
  b.detailed_sections = [
    {
      title: "Filologik ahamiyati va Tolkienning tarjima mahorati",
      content: "XIV asr oxirida nomaʼlum shoir (Cotton Nero A.x qoʻlyozmasi) tomonidan Gʻarbiy Midlend lahjasida yozilgan «Sir Gawain and the Green Knight» ingliz adabiyotining eng murakkab va sirli durdonasidir. Tolkien ushbu asar ustida 1920-yillardan boshlab ishlagan va 1925-yilda E.V. Gordon bilan birgalikda uning standart akademik matnini tayyorlagan edi. Keyinchalik u ushbu sheʼriyatni zamonaviy kitobxonga yetkazish uchun qadimgi alliterativ vaznni (urgʻuli boʻgʻinlarning qofiyasiz, tovushdoshlikka asoslangan tizimi) saqlagan holda zamonaviy ingliz tiliga sheʼriy oʻgirdi. Tolkienning bu tarjimasi ingliz filologiyasida tengsiz badiiy yutuq deb tan olingan."
    },
    {
      title: "Sir Gawain dostoni syujeti va ritsarlik sinovi",
      content: "Yangi yil bayramida qirol Arthur saroyiga ulkan gavdali, terisi, sochi va kiyimi koʻm-koʻk boʻlgan sirli Yashil Ritsar kirib keladi va gʻalati oʻyin taklif qiladi: istalgan kishi uning boʻyniga oʻz boltasi bilan bir zarba berishi mumkin, ammo bir yilu bir kundan soʻng oʻsha odam Yashil Qasrga kelib, uning ham bir zarbasini qabul qilishi shart. Davra qotib qolganda, Arthur jiyanlaridan eng yoshi va jasuri Sir Gawain boltani olib, Yashil Ritsarning boshini kesadi. Biroq maxluq qulab tushmaydi, balki oʻz kesilgan boshini yeridan koʻtarib olib, unga qarab soʻzlaydi va otiga minib chiqib ketadi. Bir yildan soʻng Gawain oʻz qasamyodiga binoan sovuq shimol oʻrmonlari boʻylab oʻlim sari yoʻlga chiqadi."
    },
    {
      title: "Hautdesert qasri vasvasasi va axloqiy gʻalaba",
      content: "Yoʻlda Gawain lord Bertilakning Hautdesert qasrida mehmondoʻstlik topadi. Ular yana bir shartlashuv tuzadilar: xoʻjayin ovda ovlagan narsasini ritsarga beradi, ritsar esa qasrda erishgan har qanday narsasini lordga topshiradi. Uch kun davomida lordning goʻzal xotini Gawainni vasvasaga solishga urinadi. Gawain poklikni saqlaydi, faqat uchinchi kuni oʻz jonini qutqarish umidida xonimdan odamni oʻlimdan saqlaydigan yashil belbogʻni olib, lorddan yashiradi. Yashil Qasrda ritsar oʻz boʻynini bolta ostiga qoʻyganida, Yashil Ritsar (aslida sehrlangan lord Bertilak) pichoq tigʻi bilan uning boʻynini salgina tirnab qoʻyadi: bu yashil belbogʻni yashirgani uchun jazo edi. Gawain oʻzining ozgina qoʻrquvi va nomukammalligidan chuqur uyaladi, ammo saroy uni qahramon sifatida kutib oladi."
    },
    {
      title: "«Pearl» va «Sir Orfeo» dostonlarining ruhiy chuqurligi",
      content: "Toʻplamga kiritilgan ikkinchi doston — «Pearl» (Marvarid) boʻlib, u yosh goʻdak qizini yoʻqotgan otaning chuqur motami va tushida Samoviy Quddus daryosi sohilida oʻz qizini pokiza marvarid qiyofasida koʻrib, maʼnaviy taskin topishi haqidagi eng taʼsirli nasroniy allegoriyasidir. Uchinchi asar — «Sir Orfeo» esa qadimgi yunon Orfey afsonasining oʻrta asr ritsarlik va peri (Faerie) olami anʼanalariga moslashtirilgan ajoyib variantidir. Unda qirol Orfeo oʻz sevgilisi malika Heurodisni elflar podshosi zindonlaridan oʻzining sehrli arfa navolari yordamida qutqarib oladi."
    }
  ];
  return b;
});

// 16. Leaf by Niggle
updateBook('leaf-by-niggle', b => {
  b.cover_image = {
    src: '/images/books/leaf-by-niggle.webp',
    alt: 'Barg va Niggle mustaqil nashri muqovasi (HarperCollins, 2016) — Niggle chizgan ulkan daraxt, velosiped va osmonda suzayotgan barg',
    edition_title: 'Standalone Edition (HarperCollins, 2016)',
    publisher: 'HarperCollins',
    year: 2016,
    isbn: '978-0-00-820562-1',
    artist: 'HarperCollins Editorial',
    source: 'HarperCollins / Wikimedia Commons'
  };
  b.synopsis = "«Barg va Niggle» (Leaf by Niggle) — J.R.R. Tolkien tomonidan 1939-yilda, «Uzuklar Hukmdori» ustidagi mashaqqatli izlanishlar avjiga chiqqan damda bir kechada yozilgan va 1945-yilda «Dublin Review» jurnalida chop etilgan chuqur avtobiografik allegorik qissa. Ushbu asar Tolkienning oʻz ijodi, sub-creation (ikkilamchi yaratuvchilik) nazariyasi, oʻlim muqarrarligi va Purgatoriy (Aʼrof) orqali ruhning poklanish jarayonini nihoyatda samimiy va ramziy tilda ochib beradi. Qahramon Niggle (Tolkienning oʻzi kabi) ulkan daraxt polotnosini chizishga intiluvchi, ammo kundalik mayda tashvishlar tufayli asarini tugata olmaydigan kamsuqum rassomdir.";
  b.detailed_sections = [
    {
      title: "Yaratilish tarixi va muallifning ichki iztiroblari",
      content: "1939-yilda Ikkinchi jahon urushi boshlanishi arafasida Tolkien oʻzining butun umrlik orzusi — Oʻrta-yer mifologiyasini («Silmarillion») tugata olmay, toʻsatdan oʻlib ketishidan qattiq xavotirda edi. Bir kuni ertalab uygʻonganida uning ongida yaxlit bir ertak qiyofasi paydo boʻldi va u darhol stolga oʻtirib, bir nafasda ushbu qissani yozib tugatdi. Asar muallifning sanʼatkor sifatida oʻz burchi, vaqt taqchilligi va boshqalarga yordam berish oʻrtasidagi ichki ziddiyatlarining sof badiiy timsoliga aylandi."
    },
    {
      title: "Niggle va uning Tugallanmagan Daraxti allegoriyasi",
      content: "Niggle kichkina, beozor rassom boʻlib, u bitta barg tasviridan boshlab, asta-sekin butun bir ulkan Daraxtni, uning orqasidagi oʻrmonlarni va qorli choʻqqilarni qamrab olgan buyuk polotnoga kirishadi. Biroq u har doim har bir bargning tomirlarini sinchkovlik bilan (niggle — maydalashib) ishlashga berilib ketadi. Shu bilan birga, u kasalmand va doimo yordamga muhtoj qoʻshnisi Parishga koʻmaklashishdan bosh torta olmaydi. Niggle uzoq safarga (Oʻlimga) joʻnashi kerak boʻlgan vaqt yetib keladi, ammo uning buyuk polotnosidan faqat bitta goʻzal bargi tugallangan boʻlib, qolgan qismi tugallanmay qoladi."
    },
    {
      title: "Ishxona (Purgatoriy) va Niggle Oʻlkasi",
      content: "Safarga otlangan Niggle qorongʻu poyezdda olib ketiladi va katta shifoxona-ishxonaga (Aʼrof timsoli) tushadi. Bu yerda u qattiq tartib-intizom ostida jismoniy mehnat qiladi, sabr-toqatni va vaqtni qadrlashni oʻrganadi. Bir kuni u ikki hakam ovozining bahsini eshitadi: Birinchi qattiqqoʻl ovoz uning dangasaligi va vaqtni yoʻqotganini ayblaydi, ammo Ikkinchi shafqatli ovoz uning qoʻshnisi Parishga qilgan xolis yaxshiliklarini tilga oladi. Nigglega yangi bosqichga oʻtishga ruxsat beriladi. U velosipedda yashil adirlar sari yoʻl oladi va toʻsatdan hayratda qotib qoladi: u oʻz polotnosida chizishni orzu qilgan, ammo qogʻozda uddalay olmagan Oʻsha Buyuk Daraxtni jonli, barglari shivirlab turgan holatda koʻradi! Uning ijodi Ilohiy Inoyat tufayli haqiqiy jannatiy reallikka aylangan edi."
    },
    {
      title: "Sub-creation falsafasi va sanʼatkorning mukofoti",
      content: "«Barg va Niggle» Tolkienning «On Fairy-Stories» (Sehrli ertaklar haqida) inshosining amaliy badiiy ifodasidir. Tolkien fikricha, inson Yaratuvchi emas, balki «Kichik Yaratuvchi» (Sub-creator)dir. Uning samimiy, ezgulik bilan toʻqilgan xayollari behuda yoʻqolib ketmaydi; agar sanʼatkor oʻz isteʼdodini kibr uchun emas, muhabbat bilan ishlatsa, oxiratda uning ijodi Xudo tomonidan mukammal reallikka aylantiriladi. Qissaning oxirida Yer yuzida Nigglening ulkan polotnosidan faqat bitta chiroyli barg saqlanib qolib, mahalliy muzeyga qoʻyilgani, yongʻindan soʻng esa uning nomi butunlay unutilgani eslatiladi; biroq Osmonda «Niggle Oʻlkasi» minglab ruhlarga orom va shifo beruvchi abadiy maskan boʻlib qoladi."
    }
  ];
  return b;
});

// 17. Farmer Giles of Ham
updateBook('farmer-giles-of-ham', b => {
  b.cover_image = {
    src: '/images/books/farmer-giles-of-ham.webp',
    alt: 'Hamlik Fermer Jayls 50 yillik yubiley nashri muqovasi (HarperCollins, 1999) — Pauline Baynes chizgan olov purkayotgan ajdar Chrysophylax va yiqilayotgan ritsar',
    edition_title: '50th Anniversary Edition (HarperCollins, 1999)',
    publisher: 'HarperCollins',
    year: 1949,
    isbn: '978-0-00-762512-3',
    artist: 'Pauline Baynes',
    source: 'HarperCollins / British Library'
  };
  b.synopsis = "«Hamlik Fermer Jayls» (Farmer Giles of Ham) — J.R.R. Tolkien tomonidan 1937-yilda yozilib, 1949-yilda Pauline Baynesning ajoyib oʻrta asr uslubidagi gravyuralari bilan chop etilgan yumoristik va satirik ertak-qissa. Asar Oʻrta-yer legendariumiga kirmaydi, balki qadimgi Britaniyaning Orol Qirolligi (Little Kingdom) davrida kechadi. Unda oddiy, semiz, qizil soqolli dehqon Aegidius Ahenobarbus Julius Agricola de Hammo (Hamlik Fermer Jayls) oʻzining qadimgi toʻpponchasi bilan tasodifan bir devni haydab yuborishi, natijada butun mamlakatda mashhur boʻlib, makkor oltin ajdar Chrysophylax Divesni boʻysundirishi va oʻzining mustaqil Kichik Qirolligini barpo etishi xalqona hazil bilan hikoya qilinadi.";
  b.detailed_sections = [
    {
      title: "Yozilish tarixi, parodiya va filologik hazillar",
      content: "Tolkien ushbu ertakni dastlab oʻz farzandlariga aytib bergan, keyinchalik esa Oksforddagi filologik doʻstlari uchun qadimgi lotincha va inglizcha qoʻlyozmalar parodiyasi shakliga keltirgan. Kitob soxta akademik kirish soʻzi bilan boshlanadi: unda qadimgi orol lotinchasidagi qoʻlyozma goʻyoki ingliz tiliga tarjima qilingani aytiladi. Asar Oksford atrofi (Bukingemshir, Oksfordshir, Temza vodiysi) toponimikasining soxta xalq etimologiyalari bilan toʻla boʻlib, masalan Thame shaharchasining nomi qanday paydo boʻlgani haqidagi kulgili hikoyalar keltiriladi."
    },
    {
      title: "Fermer Jayls, Dev va Caudimordax qilichi",
      content: "Jayls oʻz yerida yashovchi, yaxshi ovqatlanishni va tinchlikni sevadigan oddiy dehqon. Bir kechasi uning dalasiga adashib ulkan dev bostirib kiradi. Jayls qorongʻuda nima ekanini tushunmay, eshon toʻpponchasiga (blunderbuss) mayda tosh va qoʻrgʻoshin toʻldirib otadi. Oʻq devning burniga tegadi va dev buni pashsha chaqdi deb oʻylab, uzoq togʻlarga qochib ketadi. Barcha qishloq ahli Jaylsni buyuk qahramon deb eʼlon qiladi. Buni eshitgan poytaxtdagi ochkoʻz Qirol unga sovgʻa sifatida qadimgi, zang bosgan «Caudimordax» (Dum tishlaguvchi / Tailbiter) nomli qilichni joʻnatadi. Aslida bu qilich qadimgi ajdarlarni yenguvchi mashhur sehrli qurol edi."
    },
    {
      title: "Chrysophylax Dives bilan toʻqnashuv va boylik taqsimoti",
      content: "Dev oʻz yurtiga qaytgach, u yerdagi qadimgi ochkoʻz ajdar Chrysophylax Divesga Britaniyada ritsarlar qolmagani, faqat chaqadigan pashshalar borligini aytadi. Ajdar oltin ilinjida boy Ham qishlogʻiga bostirib keladi. Qirol yuborgan saroy ritsarlari jang qilish oʻrniga xalat kiyib, tort pishirish va qasamyod qilish bilan vaqt oʻtkazadilar. Qishloq ahli yana Jaylsni majburlab ajdarga qarshi joʻnatadi. Jaylsning qoʻlida Caudimordax oʻz-oʻzidan qinidan chiqib, ajdarni quva boshlaydi. Jayls ajdarni yaralab, uni butun xazinasini keltirish haqida qasamyod qilishga majbur qiladi. Biroq ajdar oʻz gʻoriga qochib borib, xazinani bermaydi. Shunda Jayls oʻz oti va qishloq ahli bilan ajdarning inigacha borib, uning barcha oltinlarini yuklab oladi va Qirol bilan boʻlishishdan qatʼiyan bosh tortadi."
    },
    {
      title: "Ritsarlik romantikasining satirik inqirozi va Paulin Beyns sanʼati",
      content: "Ushbu qissada Tolkien oʻrta asr saroy ritsarligi epikasini ochiqchasiga masxara qiladi: yaltiroq sovut kiygan takabbur ritsarlar qoʻrqoqlik qilib qochganda, oddiy fermer oʻzining xalqona ayyorligi, amaliy aqli va qatʼiyati bilan gʻolib chiqadi. Jayls oʻz xazinasi evaziga mustaqil hukmdorga aylanadi va Kichik Qirollik shohi boʻlib, tinch va toʻq hayot kechiradi. Asarning muvaffaqiyatida rassom Pauline Baynesning hissasi beqiyos boʻlgan: uning chetlaridagi oʻrta asr miniatyuralariga oʻxshash chizmalari Tolkienga shunchalik yoqqanki, u keyinchalik Baynesni oʻzining doimiy illyustratori etib tanlagan."
    }
  ];
  return b;
});

// 18. Smith of Wootton Major
updateBook('smith-of-wootton-major', b => {
  b.cover_image = {
    src: '/images/books/smith-of-wootton-major.webp',
    alt: 'Buyuk Vuttonlik Temirchi birinchi nashri original changqopi (George Allen & Unwin, 1967) — Pauline Baynes chizgan oq fondagi temirchi va elflar saltanati ramzlari',
    edition_title: 'First Edition Dust Jacket (George Allen & Unwin, 1967)',
    publisher: 'George Allen & Unwin',
    year: 1967,
    isbn: '978-0-04-823077-5',
    artist: 'Pauline Baynes',
    source: 'George Allen & Unwin / Wikimedia Commons'
  };
  b.synopsis = "«Buyuk Vuttonlik Temirchi» (Smith of Wootton Major) — J.R.R. Tolkien hayotlik chogʻida chop etilgan eng soʻnggi badiiy asari (1967). Dastlab George MacDonaldning «Oltin kalit» ertagiga soʻzboshi sifatida boshlangan ushbu moʻjaz qissa tez orada mustaqil durdonaga aylandi. Unda Vutton qishlogʻidagi yigirma toʻrt yilda bir oʻtkaziladigan «Yaxshi Bolalar Ziyofati»da temirchining oʻgʻli sehrli bayram torti ichidagi yulduzni yutib yuborishi, bu yulduz uning peshonasiga muhrlanib, unga Peri Oʻlkasi (Faery) darvozalarini ochishi va qahramonning qariguncha sehrli dunyoni kezib, oxir-oqibat oʻz inʼomini yangi avlodga topshirishi hikoya qilinadi.";
  b.detailed_sections = [
    {
      title: "Yozilish tarixi: keksa Tolkienning xayrlashuv vasiyati",
      content: "1966-yilda 74 yoshli Tolkien ushbu qissani yozar ekan, unga oʻzining ijodiy vasiyati sifatida qaragan. U oʻzining butun umri davomida kezgan Sehriyot Olami (Faerie) bilan xayrlashayotganini chuqur his qilgan. Asarda Oʻrta-yer atamalari uchramasa-da, undagi Peri Oʻlkasining viqori va xatari «Silmarillion» va «Lothlórien» epikasidagi elflar tabiatiga juda yaqin turadi. Asar Pauline Baynesning ajoyib illyustratsiyalari bilan 1967-yil Rojdestvo arafasida nashr etilgan."
    },
    {
      title: "Sehrli Yulduz va Temirchining Oʻlka boʻylab sayohatlari",
      content: "Vutton qishlogʻi oshpazlari tayyorlagan Buyuk Tort ichiga yashirilgan kichkina kumush yulduz temirchining oʻgʻliga nasib etadi. Bola oʻn yoshga toʻlganda yulduz uning peshonasiga oʻrnashadi va unga boshqalarga koʻrinmaydigan ichki nur va tengsiz usta-temirchi boʻlish qobiliyatini beradi. U oddiy temirdan shunday buyumlar yasaydiki, ular zanglamaydi va misli koʻrilmagan nafislik kasb etadi. Boʻsh vaqtlarida u Vutton chegarasidan oʻtib, hech bir oddiy inson oyogʻi yetmagan Peri Oʻlkasiga chuqur kirib boradi: Oʻlmas Daraxtlarni, Qora Shamollarni, Oltin Kemaning dengizdan qaytishini va elflar shohining ulugʻvor saroylarini koʻradi."
    },
    {
      title: "Elflar Malikasi huzurida va Inʼomning topshirilishi",
      content: "Temirchi oʻzining soʻnggi eng yuksak sayohatida Oʻlka ichidagi cheksiz yashil maydonda Elflar Malikasi bilan uchrashadi. Malika unga oʻzining tirik gulchambarini kiygizadi va qahramon bu dunyoning goʻzalligi qarshisida sajda qiladi. Qishloqqa qaytgach, u oʻzining qariganini, endi bu yulduzni oʻzida saqlay olmasligini anglaydi. Qishloqning yangi shogird oshpazi Alf (aslida Peri Qiroli boʻlgan sirli siymo) temirchiga yulduzni peshonasidan yechib olishga buyuradi. Temirchi katta fojiaviy iztirob bilan, ammo xolislik ila oʻz yulduzini yangi ziyofat torti uchun topshiradi va u boshqa bir begunoh yosh bolaga nasib etadi."
    },
    {
      title: "Allegorik qatlam: Ilhom, Qarilik va Sanʼat estafetasi",
      content: "«Buyuk Vuttonlik Temirchi» inson qalbining yuksak sanʼat va ilohiy ilhom bilan toʻqnashuvi haqidagi eng chuqur falsafiy ertakdir. Yulduz — bu ijodkorlik nuri boʻlib, u insonga abadiy tegishli emas; u faqat muayyan muddatga berilgan omonatdir. Qarilik yetib kelganda, har bir buyuk ijodkor oʻz inʼomini kibrsiz, xushnudlik bilan yangi avlodga topshira bilishi lozim. Temirchi oʻz uyiga, xotini va farzandlari bagʻriga oddiy inson sifatida qaytadi, ammo uning qalbida Oʻsha Olis Oʻlkaning abadiy nuri soʻnmas boʻlib qoladi."
    }
  ];
  return b;
});

console.log("✓ Part 2 kitoblar muvaffaqiyatli yangilandi!");
