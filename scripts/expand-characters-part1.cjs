const fs = require('fs');
const path = require('path');

const charDir = path.resolve(process.cwd(), 'src/content/characters');

function updateCharacter(id, updater) {
  const file = path.join(charDir, `${id}.json`);
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const updated = updater(data);
  fs.writeFileSync(file, JSON.stringify(updated, null, 2), 'utf8');
  console.log(`Updated character: ${id}`);
}

// 1. GANDALF
updateCharacter('gandalf', (d) => {
  d.image = {
    src: '/images/characters/gandalf.webp',
    src_thumb: '/images/characters/gandalf-thumb.webp',
    alt: 'Gandalf kulrang plashda, qoʻlida yogʻoch hassa va Narya uzugi bilan Rivendell ayvonida',
    caption: 'Gandalf (Olórin) — Istari yetakchisi, Narya olov uzugi sohibi va Oq Kengash aʼzosi'
  };
  d.biography_sections = [
    {
      title: "Valinordagi hayot va Oʻrta-yerga joʻnatilish",
      content: "Olórin dunyo yaratilishidan avval Eru Ilúvatar fikridan yaralgan eng yuksak Maiardan biri edi. U Valinorda Manwë va Varda huzurida yashagan, shuningdek Nienna bogʻlarida sabr-toqat, achinish va hamdardlik fazilatlarini oʻrgangan. Tolkien oʻz asarlarida Olórinni Ainur orasida 'eng donishmandi' deb ataydi.\n\nUchinchi davrning taxminan 1000-yilida Oʻrta-yerda Sauron zulmati qayta bosh koʻtara boshlagach, Valar kengashi erkin xalqlarga yordam berish uchun besh nafar elchi — Istarini (Sehrgarlarni) joʻnatishga qaror qildi. Olórin dastlab oʻzini zaif hisoblab, Sauron qudratidan qoʻrqishini aytganida, Manwë unga aynan shu kamtarlik va ehtiyotkorlik sababli borishi shartligini uqtirdi.\n\nKulrang Bandargohlarga yetib kelganida, Círdan Kema-ustasi uning ichki ulugʻvorligini darhol sezdi va unga Uch Elflar Uzugining biri boʻlgan Naryani (Olov Uzugini) topshirdi. Naryaning xususiyati olov yoqish emas, balki sovuq tushkunlikka tushgan qalblarda umid va jasorat olovini almashtirish edi."
    },
    {
      title: "Erebor safari va Dol Guldur siri",
      content: "Uchinchi davrning 2850-yilida Gandalf Buyuk Yashil Oʻrmon (Mirkwood) janubidagi Dol Guldur qalʼasiga yashirincha kirib bordi. U yerdagi sirli 'Nekromant' (Qora Jodugar) aslida qayta tiklanayotgan Sauronning oʻzi ekanini fosh qildi. Qalʼa zindonida u aqldan ozgan Thráin II ni uchratib, undan Ereborning maxfiy eshigi kaliti va xaritasini qabul qilib oldi.\n\n2941-yilda u Thorin Oakenshield va Bilbo Bagginsni Erebor ekspeditsiyasiga undadi. Gandalfning bu harakati shunchaki xazina izlash emas, balki strategik uzoqni koʻra bilish edi: agar Sauron Shimoldagi Smaug ajdari bilan ittifoq tuzganida, Rivendell va Lorien ikki olov orasida qolib halok boʻlar edi. Safar Smaugning qulashi, Shimoliy yerlarning xalos boʻlishi va Bilbo tomonidan Yagona Uzukning topilishi bilan yakunlandi."
    },
    {
      title: "Uzuk Birodarligi, Balrog bilan duel va qayta tirilish",
      content: "Bilboning gʻaroyib uzugini koʻp yillar tekshirgan Gandalf, Minas Tirith arxivlarida Isildur bitiklarini oʻrganib, uning Yagona Qudrat Uzugi ekanini uzil-kesil isbotladi. Rivendellda Elrond Kengashida Uzuk Birodarligini tuzishda boshchilik qildi.\n\nMoria konlarida Gandalf qadimiy iblis — Durin Falakati (Moria Balrogi) bilan toʻqnashdi. Khazad-dûm koʻprigida 'Bu yerdan oʻtolmaysan!' deb hayqirib, koʻprikni parchaladi va maxluq bilan birga cheksiz tubsizlikka quladi. Zirakzigil choʻqqisidagi afsonaviy jangda Balrogni magʻlub etdi, ammo oʻz tanasi ham toliqib jon berdi. Uning ruhi vaqt va makondan tashqariga olinib, Eru Ilúvatarning bevosita amri bilan yangi buyuk qudrat sohibi — 'Oq Gandalf' sifatida Oʻrta-yerga qaytarildi."
    },
    {
      title: "Halqa Urushining intihosi va Gʻarbga qaytish",
      content: "Oq kiyimda qaytgan Gandalf Fangorn oʻrmonida Aragorn, Legolas va Gimli bilan birlashdi. Rohanda Qirol Théodenni Saruman va Gríma sehridan ozod qildi. Isengard qamalidan soʻng Sarumanning sehrgar hassasini sindirib, uni Kengashdan quvdi.\n\nMinas Tirith mudofaasida shahar darvozasi buzilgan dahshatli tunda Angmar Jodugar-shohi bilan yuzma-yuz turib dushmanning yurishini toʻxtatdi. Pelennor va Qora Darvoza janglarida erkin xalqlarni soʻnggi gʻalabaga yetakladi. Sauron qulagach, Aragorn II Elessarga Oliy Shoh toji kiydirildi. Oʻz ilohiy burchini toʻliq bajargan Gandalf Uchinchi davrning 3021-yilida Frodo, Bilbo, Elrond va Galadriel bilan birga Oq Kemada Boqiy Gʻarb tomon suzib ketdi."
    },
    {
      title: "Xarakter va axloqiy falsafa: Quvvat emas, balki qalb uygʻotuvchisi",
      content: "Gandalfning boshqa sehrgarlar (xususan Saruman)dan tub farqi uning hokimiyatga intilmaganligida edi. U odamlarni yoki elflarni oʻz irodasiga boʻysundirmadi; aksincha, ularning oʻzlaridagi yashirin qahramonlik va ezgulikni yuzaga chiqardi. Tolkien taʼkidlaganidek, Gandalf Oʻrta-yerda ilohiy inoyatning (grace) jonli vositachisi boʻlib xizmat qilgan. Uning oddiy xobbitlarga boʻlgan cheksiz mehri va ishonchi butun dunyo taqdirini hal qiluvchi buyuk omilga aylandi."
    },
    {
      title: "Meros va adabiy qiyos",
      content: "Jahon adabiyotida Gandalf donishmand yoʻlboshchi (arxetipik ustoz) timsolining choʻqqisi sanaladi. U skandinav mifologiyasidagi Odinning sayohatdagi qiyofasi (Vegtam) hamda afsonaviy Merlin siymosiga oʻxshasa-da, nasroniy teologiyasidagi qurbonlik, qayta tirilish va xizmatkorlik gʻoyalari bilan boyitilgan. Uchinchi davr tarixida u Oʻrta-yer xalqlariga berilgan eng buyuk himoyachi va najotkordir."
    }
  ];
  return d;
});

// 2. FRODO BAGGINS
updateCharacter('frodo-baggins', (d) => {
  d.image = {
    src: '/images/characters/frodo-baggins.webp',
    src_thumb: '/images/characters/frodo-baggins-thumb.webp',
    alt: 'Frodo Baggins Lórien bargi nishoni bilan, boʻynida zanjirdagi Yagona Uzuk va qoʻlida Sting xanjari',
    caption: 'Frodo Baggins — Shayrlik xobbit, Yagona Qudrat Uzugi eltuvchisi (Ring-bearer)'
  };
  d.biography_sections = [
    {
      title: "Bag Enddagi yoshlik va sirli meros",
      content: "Frodo Uchinchi davrning 2968-yilida tavallud topdi. U oʻn ikki yoshidaligida ota-onasi Brendivin daryosida qayiq agʻdarilishi oqibatida choʻkib halok boʻldi. 2989-yilda boy amakisi Bilbo Baggins uni oʻz qaramogʻiga oldi va Bag Endga koʻchirib kelib, yagona merosxoʻri deb eʼlon qildi.\n\n3001-yilda Bilboning mashhur 111 yillik bayramida Bilbo gʻoyib boʻlib Rivendellga ketgach, Bag End va sirli tilla Uzuk Frodoga qoldi. 3018-yil bahorida Gandalf qaytib kelib, olovda Uzukdagi sehrli yozuvni koʻrsatdi va bu Sauronning Yagona Uzugi ekanini maʼlum qildi. Frodo oʻz vatani Shirni qutqarish uchun tinch hayotini tashlab, xavfli safarga otlanishga qaror qildi."
    },
    {
      title: "Nazgûllar taʼqibi va Elrond Kengashidagi qasamyod",
      content: "Frodo sodiq doʻsti Samwise Gamgee hamda qarindoshlari Merry va Pippin bilan Shirni yashirincha tark etdi. Qora Chavandozlar (Nazgûllar) ularni toʻxtovsiz taʼqib qildi. Weathertop (Amon Sûl) choʻqqisida Angmar Jodugar-shohi Frodoning yelkasiga zaharli Morgul pichogʻi bilan jarohat yetkazdi.\n\nAragorn yordamida Rivendellga yetib kelgan Frodoni Elrond oʻlim changalidan qutqarib qoldi. Mashhur Elrond Kengashida Uzukni hech bir kuch eritolmasligi, faqat Mordordagi Hukm Togʻiga tashlab yoʻq qilish mumkinligi aytilgach, zaldagi barcha bahslarni toʻxtatib, yosh xobbit baland ovozda: 'Men Uzukni olib boraman, garchi yoʻlni bilmasam-da', deb burchini eʼlon qildi. Shu tariqa toʻqqiz aʼzodan iborat Uzuk Birodarligi tuzildi."
    },
    {
      title: "Birodarlikning parchalanishi va Mordor qaʼriga yoʻl",
      content: "Moria konlarida Gandalf tubsizlikka qulagach, Birodarlik Lothlórienga yetib bordi. U yerda Galadriel Frodoga oʻz Koʻzgusini koʻrsatdi va unga Eärendil nuri solingan billur shishani sovgʻa qildi. Amon Henda Boromir Uzuk vasvasasiga uchrab unga qoʻl choʻzganidan soʻng, Frodo Birodarlik aʼzolari halok boʻlmasligi uchun safarni yolgʻiz davom ettirishga qaror qildi; biroq Sam unga yetib olib, unga hamroh boʻldi.\n\nEmyn Muilda ular oʻzlarini taʼqib qilib kelgan Gollumni asir oldilar. Frodo unga rahm-shafqat koʻrsatib, oʻziga yoʻlboshchi qildi. Oʻlik Botqoqliklar va Qora Darvoza orqali oʻtib, Cirith Ungol dovoniga keldilar. U yerda Gollumning xiyonati tufayli Frodo bahaybat oʻrgimchak Shelobning zaharli nishiga uchradi, ammo Samwise Shelobni yaralab, oʻrklardan xoʻjayinini qutqardi."
    },
    {
      title: "Hukm Togʻidagi sinov va fojiaviy ozodlik",
      content: "Mordorning qaqroq choʻllari boʻylab sudralib borgan Frodo va Sam nihoyat Orodruin qaʼridagi Sammath Naur darvozasiga yetib keldilar. Hukm olovi ustida turganida, Uzukning cheksiz vasvasasi Frodoning butun jismoniy va ruhiy irodasini sindirdi: u 'Men Uzukni yoʻq qilmayman, u meniki!' deb uni barmogʻiga taqdi. Shu zahoti unga tashlangan Gollum Frodoning barmogʻini tishlab uzib oldi, quvonchdan mast boʻlib muvozanatni yoʻqotdi va Uzuk bilan birga olovli tubsizlikka quladi.\n\nSauron yoʻq qilinib, Oʻrta-yer xalos boʻldi. Buyuk Burgutlar xobbitlarni olovli toshqin orasidan olib chiqdi. Ammo Frodo oʻz gʻalabasini toʻla quvonch bilan kutib ololmadi: uning tanasida va qalbida chekilgan azoblar oʻchmas dogʻ qoldirgan edi."
    },
    {
      title: "Shayrga qaytish, jarohatlar va Boqiy Gʻarbga ketish",
      content: "Shirga qaytgan Frodo 'Suvboʻyi jangi'da zoʻravonlikni kamaytirishga, qon toʻkilishining oldini olishga intildi. U muvaqqat Mer boʻlib xizmat qildi va Bilboning Qizil Kitobiga oʻzining 'Uzuklar Hukmdorining Qulashi va Qirolning Qaytishi' boblarini yozib qoʻshdi.\n\nBiroq Weathertopdagi Morgul pichogʻi jarohati har yili oktyabr oyida qayta simillab ogʻrirdi; Shelob zahri va Uzuk yukining ruhiy izi unga Oʻrta-yerda tinchlik bermadi. Frodo Samga qarab: 'Men Shirni qutqarmoqchi boʻldim, va u qutqarildi, ammo men uchun emas', deb taʼsirli haqiqatni aytdi. 3021-yilda u Uzuk Elchisi sifatida Boqiy Gʻarbga — Aman oʻlkasiga suzib ketdi va u yerda oʻz qalbiga abadiy taskin va shifo topdi."
    },
    {
      title: "Falsafiy ahamiyat: Jasorat, kamsuqumlik va kechirimlilik",
      content: "Tolkien oʻz maktublarida taʼkidlaganidek, Frodo klassik qadimgi qudratli jangchi qahramon emas, balki oddiy insonning yuksak axloqiy timsolidir. Uning buyuk jasorati qurol ishlatishida emas, balki oʻzidan ustun kelgan yovuzlik qarshisida oxirgi damgacha chidashida va eng asosiysi — dushmani Gollumga koʻrsatgan rahm-shafqatida edi. Aynan shu kechirimlilik tufayli butun Oʻrta-yer najot topdi."
    }
  ];
  return d;
});

// 3. SAMWISE GAMGEE
updateCharacter('samwise-gamgee', (d) => {
  d.image = {
    src: '/images/characters/samwise-gamgee.webp',
    src_thumb: '/images/characters/samwise-gamgee-thumb.webp',
    alt: 'Samwise Gamgee Cirith Ungol qoyalarida, yelkasida sayohat yuki va qoʻlida Galadriel billuri bilan',
    caption: 'Samwise Gamgee — sadoqatli xobbit bogʻbon, Frodoni Orodruin choʻqqisigacha kuzatib borgan fidoyi doʻst'
  };
  d.biography_sections = [
    {
      title: "Kelib chiqishi, bogʻbonlik va Bilbo ertaklari",
      content: "Samwise Gamgee Uchinchi davrning 2983-yilida Hamfast Gamgee (Gaffer) oilasida dunyoga keldi. U Bag End bogʻlarida amakisi Bilbo va keyinchalik Frodo qoʻlida xizmat qilib ulgʻaydi. Bilbo unga savod oʻrgatgan, elflar haqidagi afsonalar va sheʼrlarni aytib bergan edi.\n\n3018-yil bahorida Gandalf Frodo bilan Uzuk sirini muhokama qilayotganda, deraza ostida gul kesib yurgan Samwise bexosdan ularning suhbatini eshitib qoldi. Gandalf uni 'jazo' tariqasida Frodoning safardagi shaxsiy hamrohi va xizmatkori etib tayinladi — bu Samning hayotidagi eng buyuk burilish boʻldi."
    },
    {
      title: "Uzuk Birodarligi va Galadriel inʼomi",
      content: "Samwise Shir boʻylab, Weathertop orqali Rivendellgacha boʻlgan xavfli yoʻlda Frododan bir qadam ham ortda qolmadi. Elrond Kengashida u yashiringan joyidan otilib chiqib, 'Janob Frodo qayerga borsa, men ham oʻsha yerga boraman!' deb qasamyod qildi.\n\nLothlórienda xonim Galadriel Samwisega elflar zaminining muqaddas tuprogʻi va kumush mallorn yongʻogʻi solingan qutichani sovgʻa qildi. Galadriel Koʻzgusida Sam Shirning vayron boʻlayotganini koʻrib yuragi ezilgan boʻlsa-da, Frodoni tashlab ketmaslikka, oʻz burchiga sodiq qolishga qaror qildi."
    },
    {
      title: "Cirith Ungoldagi tengsiz jasorat",
      content: "Frodo bilan birga Amon Hendan ajralib chiqqan Sam Mordor chegaralaridagi barcha mashaqqatlarni birga yengdi. Gollumning xiyonatkor niyatlarini Samwise darhol payqagan edi, garchi Frodo unga rahm qilgan boʻlsa-da.\n\nCirith Ungol qorongʻiligida bahaybat Shelob Frodoni falajlaganida, Sam misli koʻrilmagan jasorat koʻrsatdi: u Sting qilichi va Galadriel billurini qoʻlga olib, iblisona maxluqni ogʻir yaraladi va qochishga majbur qildi. Frodo oʻldi deb oʻylab, vazifani davom ettirish uchun Yagona Uzukni vaqtincha boʻyniga osdi va qisqa muddat 'Uzuk Elchisi'ga aylandi. Biroq oʻrklarning suhbatidan xoʻjayini tirikligini bilib, yolgʻiz oʻzi Cirith Ungol minorasiga bostirib kirdi va Frodoni ozod qildi."
    },
    {
      title: "Hukm Togʻi tomon soʻnggi qadamlar",
      content: "Mordorning zaharli kuli va suvsiz choʻllarida Frodo holdan toyib yiqilganida, Samwise uni yelkasiga koʻtarib Hukm Togʻi qoyalariga olib chiqdi: 'Men Uzukni siz uchun koʻtarolmayman, ammo sizni va Uzukni birga koʻtara olaman!' degan xitobi adabiyot tarixidagi eng buyuk sadoqat namunasi boʻldi.\n\nUzuk yoʻq qilinib, Orodruin portlaganida ikki xobbit qoyatosh ustida halokatni kutib turganlarida ularni Gwaihir boshchiligidagi buyuk burgutlar qutqardi."
    },
    {
      title: "Shirning qayta gullashi, Merlik va Boqiy Gʻarb",
      content: "Shirga qaytgach, Samwise Galadrielning muqaddas tuprogʻi bilan butun mamlakat boʻylab urugʻlar qadadi, qirqilgan daraxtlar oʻrniga yangi nihollar oʻstirdi. 3020-yil bahorida u goʻzal Rosie Cottonga uylandi va Bag Endda yashay boshladi.\n\nSamwise Michel Delving shahrining Meri etib ketma-ket yetti marta (jami 49 yil) saylandi. Uning oʻn uch nafar farzandi dunyoga keldi. Xotini vafot etganidan soʻng, Toʻrtinchi davrning 61-yilida Samwise oʻzi ham bir muddat Uzuk Elchisi boʻlgani sababli, Kulrang Bandargohlardan Boqiy Gʻarbga — sevimli doʻsti Frodo huzuriga suzib ketdi."
    }
  ];
  return d;
});

// 4. BILBO BAGGINS
updateCharacter('bilbo-baggins', (d) => {
  d.image = {
    src: '/images/characters/bilbo-baggins.webp',
    src_thumb: '/images/characters/bilbo-baggins-thumb.webp',
    alt: 'Bilbo Baggins Bag Enddagi ish stolida, Qizil Kitobga oʻz sayohati xotiralarini yozayotgan holatda',
    caption: 'Bilbo Baggins — Erebor safari qahramoni, Gʻarbiy Chegara Qizil Kitobi muallifi'
  };
  d.biography_sections = [
    {
      title: "Tinch hayot va Gandalfning kutilmagan tashrifi",
      content: "Bungo Baggins va Belladonna Tookning oʻgʻli Bilbo Uchinchi davrning 2890-yilida tugʻilgan. Uning otasi tomondan ehtiyotkor, xotirjam Baggins xarakteri, onasi tomondan esa sarguzashtlarga moyil Took qoni birlashgan edi.\n\n2941-yilning bir bahor kuni Gandalf uning eshigi oldiga kelib eshigiga sirli belgi chizdi. Oʻsha oqshom Bag Endga Thorin Oakenshield boshchiligidagi oʻn uch nafar mitti mehmonga kelib, Bilboni Erebor xazinasini qaytarib olish uchun 'oʻgʻri' (burglar) sifatida safarga chaqirdilar."
    },
    {
      title: "Gollum bilan topishmoqlar jangi va Yagona Uzuk",
      content: "Tumanli Togʻlar qaʼrida gnomlar bilan ajralib adashib qolgan Bilbo qorongʻu gʻor zaminidan sovuq metall uzukni topib oldi. U yerosti koʻlida dahshatli maxluq Gollum bilan toʻqnashdi. Ular oʻrtasida hayot-mamot topishmoqlari aytishuvi boʻlib oʻtdi.\n\nBilbo choʻntagidagi sirli narsa haqida 'Choʻntagimda nima bor?' deb soʻraganida Gollum topa olmadi. Bilbo uzukni taqib koʻrinmas boʻlish xususiyatini kashf etdi. U Gollumni oʻldirish imkoniga ega boʻlsa-da, unga rahmi kelib qochib ketdi — Tolkien taʼkidlaganidek, Bilboning aynan shu rahm-shafqati uning qalbini Uzukning qora laʼnatidan uzoq yillar asrab qoldi."
    },
    {
      title: "Erebor zafari va Arkenstone fojiasi",
      content: "Mirkwood oʻrmonida bahaybat oʻrgimchaklardan gnomlarni qutqargan va Sting xanjariga nom bergan Bilbo, Ereborda ulkan ajdar Smaugning uyasiga yashirincha kirib bordi. U Smaugning koʻkrak zirhidagi zaif nuqtani payqadi va bu xabar Bard the Bowmanga yetib ajdarning halokatiga sabab boʻldi.\n\nThorin oltin vasvasasiga uchrab doʻstlari bilan urush boshlash xavfi tugʻilganda, Bilbo sulh oʻrnatish ilinjida Mittilarning muqaddas gavhari — Arkenstoneni Elflar qiroli va Bardga topshirdi. Besh Armiya Jangidan soʻng Shirga oʻzining kichik xazinasi, mithril sovuti va sehrli uzugi bilan qaytib keldi."
    },
    {
      title: "111 yillik bayram va Uzukdan ixtiyoriy voz kechish",
      content: "3001-yilda Bilbo oʻzining 111 yoshini va Frodoning 33 yoshini nishonlash uchun ulkan bayram uyushtirdi. Bayram nutqi soʻngida u Uzukni taqib koʻzdan gʻoyib boʻldi.\n\nGandalfning qatʼiy va mehrli koʻmagi bilan Bilbo Yagona Uzukni oʻz xohishi bilan Frodoga qoldirdi. Oʻrta-yer tarixida hech bir shaxs (hatto Sauronning oʻzi ham) Uzukdan ixtiyoriy ravishda voz kecholmagan edi; Bilbo bu buyuk axloqiy gʻalabani qoʻlga kiritgan birinchi va yagona Uzuk sohibi boʻldi."
    },
    {
      title: "Rivendelldagi olimlik va Boqiy Gʻarb",
      content: "Rivendellga koʻchib oʻtgan Bilbo Elrond kutubxonasida yillar davomida tadqiqot olib bordi. U 'Translations from the Elvish' (Elflar tilidan tarjimalar — kelajakdagi Silmarillion asosi) nomli uch jildlik nodir kitobni yozdi.\n\nHalqa Urushidan soʻng 3021-yilda u 131 yoshida — Oʻrta-yer tarixidagi eng uzoq umr koʻrgan xobbit sifatida Frodo va Gandalf bilan birga Boqiy Gʻarbga yoʻl oldi."
    }
  ];
  return d;
});

// 5. GOLLUM
updateCharacter('gollum', (d) => {
  d.image = {
    src: '/images/characters/gollum.webp',
    src_thumb: '/images/characters/gollum-thumb.webp',
    alt: 'Gollum yerosti gʻoridagi qora koʻl boʻyida, suv tubidagi tilla uzukka intilib choʻnqaygan holatda',
    caption: 'Gollum (Sméagol) — Uzuk vasvasasiga tushgan va asrlar davomida gʻorda yashirinib yurgan bebaxt mavjudot'
  };
  d.biography_sections = [
    {
      title: "Kelib chiqishi, Déagol va qotillik laʼnati",
      content: "Gollum aslida Uchinchi davrning 2430-yillarida Anduin daryosi boʻyida yashovchi Stoor qabilasiga mansub Sméagol ismli xobbit edi. 2463-yilda uning doʻsti va qarindoshi Déagol daryoda baliq tutayotib, suv tubidan yaraqlab turgan tilla uzukni topib oldi.\n\nUzukning yovuz qudrati bir lahzada Sméagol ongini zaharladi. U uzukni tugʻilgan kuniga 'sovgʻa' sifatida talab qildi; Déagol rad etgach, Sméagol uni boʻgʻib oʻldirdi va jasirini yashirdi. Bu qotillik uning butun hayotiga abadiy qargʻish muhrini bosdi."
    },
    {
      title: "Tumanli Togʻlar qaʼrida qorongʻu asrlar",
      content: "Oʻz qabilasidan quvilgan Sméagol quyosh va oydan nafratlanib, Tumanli Togʻlar tubidagi qorongʻu gʻorlarga kirib ketdi. U yerda deyarli besh yuz yil davomida yerosti koʻlida sovuq xom baliqlar va adashgan oʻrklarni ovlab kun kechirdi.\n\nUzuk uning umrini gʻayritabiiy darajada choʻzgan boʻlsa-da, tanasini qurigan skeletga, ongini esa ikkiga boʻlingan parokanda jonzotga aylantirdi: bir tomonda oʻtmishdagi xobbitlik xotirasi bilan yashovchi bechora 'Sméagol', ikkinchi tomonda esa yovuz, qotil va uzuk quliga aylangan 'Gollum'. Tomogʻidan chiqaradigan 'gollum, gollum' degan boʻgʻiq tovush unga laqab boʻlib qoldi."
    },
    {
      title: "Uzukning yoʻqolishi va Sauron changalida",
      content: "2941-yilda Bilbo Baggins Uzukni topib olgach, Gollum oʻz 'Precious'ini yoʻqotib aqlini yoʻqotayozdi. Koʻp yillar oʻtgach, u gʻordan chiqib oʻgʻri 'Baggins'ni va 'Shire'ni qidirib yoʻlga tushdi.\n\nU Mordor chegaralarida qoʻlga olinib, Barad-dûr zindonlarida shaxsan Sauron tomonidan qiynoqlarga solindi. U qiynoqlar ostida ikki soʻzni aytdi: 'Shire! Baggins!'. Sauron Uzukning xobbitlar qoʻlida ekanini aynan Gollumdan bilib oldi va Nazgûllarni ovga joʻnatdi."
    },
    {
      title: "Frodo bilan sayohat, ichki ziddiyat va soʻnggi xiyonat",
      content: "Emyn Muilda Frodo va Sam tomonidan asir olingan Gollum 'Precious' bilan qasamyod qilib, ularga Mordorga yoʻl koʻrsatishga vaʼda berdi. Frodoning olijanobligi va unga 'Sméagol' deb murojaat qilishi uning qalbida deyarli soʻnib ketgan insoniylik uchqunlarini uygʻotdi.\n\nAmmo Cirith Ungol zinasida Samning tushunmovchilik bilan aytgan qattiq soʻzi uning qalbida soʻnggi najot eshigini yopdi. U xobbitlarni Shelob oʻrgimchagi changaliga tashlab, Uzukni qaytarib olishga intildi."
    },
    {
      title: "Hukm Togʻidagi oxirgi sakrash va teologik rol",
      content: "Sammath Naur gʻorida Frodo Uzukni oʻziniki deb eʼlon qilganida, koʻrinmas boʻlib turgan Frodoning ustiga Gollum tashlandi. U Frodoning barmogʻini tishlab uzib olib, uzukni qaytarib oldi. Quvonchdan telba boʻlib qoya chetida raqsga tushayotganida, muvozanatini yoʻqotib olovli vulqon qaʼriga quladi.\n\nTolkien taʼkidlaganidek, yovuzlik oʻz tabiatiga koʻra oʻzini oʻzi yoʻq qiladi. Gollum oʻzining soʻnggi yovuz harakati bilan dunyoni Sauron zulmatidan qutqaruvchi ilohiy qurolga aylandi."
    }
  ];
  return d;
});

// 6. SAURON
updateCharacter('sauron', (d) => {
  d.image = {
    src: '/images/characters/sauron.webp',
    src_thumb: '/images/characters/sauron-thumb.webp',
    alt: 'Sauron qora temir sovutda va tikanli tojda, barmogʻida olovli Yagona Uzuk va Barad-dûr fonida',
    caption: 'Sauron — Mordor Qora Hukmdori, Yagona Qudrat Uzugi yaratuvchisi va Yovuzlik yetakchisi'
  };
  d.biography_sections = [
    {
      title: "Mairon: Aulë ustaxonasidagi yuksak Maia",
      content: "Sauron aslida Dunyo yaratilishidan avval Eru Ilúvatar tomonidan yaratilgan eng qudratli Maiardan biri boʻlib, uning ilk ismi 'Mairon' ('Havas qilgulik, Qoyilmaqom') edi. U Temirchi Vala Aulë xizmatida hunarmandchilik, metallsozlik va tartibot ilmlarini mukammal egalladi.\n\nBiroq Maironning tartib va mutlaq mukammallikka boʻlgan haddan tashqari intilishi uni kutilmagan girdobga tortdi: u Melkorning (Morgoth) ulkan qudratiga mahliyo boʻldi va oʻz rejalarini tezroq amalga oshirish ilinjida Qorongʻulik Hukmdori safiga oʻtib ketdi."
    },
    {
      title: "Birinchi Davr: Angband noibi va boʻrilar sarkardasi",
      content: "Birinchi Davrda Sauron Morgothning eng sodiq va xavfli sarkardasiga aylandi. U Angband va Utumno qalʼalarini boshqargan, Dahshat Jangi (Dagor Bragollach)dan soʻng Tol Sirion qalʼasini egallab, uni 'Boʻrilar Oroli'ga (Tol-in-Gaurhoth) aylantirgan edi.\n\nU Beren va Finrod Felagundni asir oldi; Finrod bilan qadimiy sehr va qoʻshiqlar duelida gʻalaba qozondi. Biroq Lúthien va buyuk it Huan bilan toʻqnashuvda bahaybat boʻri qiyofasida magʻlubiyatga uchrab, sharmandalik bilan Taur-nu-Fuin oʻrmonlariga qochdi. Gʻazab Urushida Morgoth magʻlub boʻlgach, Sauron Valar qahriga uchrashdan qoʻrqib Oʻrta-yer qaʼriga yashirindi."
    },
    {
      title: "Ikkinchi Davr: Annatar niqobi va Qudrat Uzuklari",
      content: "Ikkinchi Davrning taxminan 1200-yillarida Sauron oʻzining dahshatli qiyofasini yashirib, goʻzal va donishmand elchi 'Annatar' ('Inʼomlar Hukmdori') qiyofasiga kirdi. Lindonda Gil-galad va Elrond unga ishonmagan boʻlsa-da, Eregiondagi Celebrimbor boshchiligidagi Noldor zargarlari uning taʼlimotiga ergashdilar.\n\nUlarga Qudrat Uzuklarini yasash sirlarini oʻrgatgan Sauron, 1600-yilda Mordordagi Orodruin vulqonida yashirincha Yagona Qudrat Uzugini (The One Ring) soxtalashtirdi. U oʻzining ilohiy qudrati va irodasining katta qismini ushbu Uzukka joyladi. Uzugini barmogʻiga taqib 'Barcha uzuklarni boshqarish'ga uringanida elflar uning xiyonatini sezib uzuklarini yashirdilar, bu esa Eregion qirgʻini va halokatli urushlarga olib keldi."
    },
    {
      title: "Númenorning qulashi va tana qiyofasining yoʻqolishi",
      content: "Ikkinchi davrning 3262-yilida Númenorning buyuk qiroli Ar-Pharazôn ulkan armada bilan Oʻrta-yerga kelib Sauronni taslim qildi. Sauron asir sifatida Númenorga olib ketildi, ammo u tez orada oʻzining makkor tili bilan qirolning bosh maslahatchisiga aylandi.\n\nU Númenorliklarni Morgothga sigʻinishga va Boqiy Gʻarbdagi Valinorga qarshi urush ochishga gijgijladi. Eru Ilúvatar Númenorni okean qaʼriga gʻarq qilganda, Sauronning goʻzal jismoniy vujudi manguga nobud boʻldi. Uning qora ruhi Mordorga qaytib, bundan buyon faqat dahshatli va qora qiyofada gavdalana oladigan boʻldi."
    },
    {
      title: "Soʻnggi Ittifoq, Yagona Uzukning uzilishi va Qora Koʻz",
      content: "Ikkinchi davr oxirida Elflar va Insonlarning Soʻnggi Ittifoqi Orodruin etagida Sauron bilan toʻqnashdi. Gil-galad va Elendil halok boʻldi, ammo Isildur singan Narsil qilichi bilan Sauronning barmogʻini kesib, Yagona Uzukni tortib oldi. Tanasi parchalangan Sauron ruhi Sharqqa qochdi.\n\nUchinchi davrda u avval Dol Guldurda 'Nekromant' sifatida kuch toʻpladi, soʻng Mordorga qaytib Barad-dûrni qayta tikladi. Uning jismoniy koʻrinishi oʻrniga Barad-dûr choʻqqisida yonib turuvchi ulkan 'Qora Koʻz' (The Lidless Eye) timsoli butun Oʻrta-yer uzra dahshat soldi."
    },
    {
      title: "Taqdir: Mutlaq parchalanish va boʻshliqqa badargʻa",
      content: "Uchinchi davrning 3019-yil 25-martida Frodo va Gollumning Hukm Togʻidagi toʻqnashuvi natijasida Yagona Uzuk olovli lavada erib ketdi. Oʻz qudratining asosini Uzukda saqlagan Sauron shu zahoti butkul kuchsizlandi: Barad-dûr quladi, qoʻshinlari tarqab ketdi.\n\nSauronning ruhi Mordor osmonida ulkan qora tutun kabi koʻtarilib, magʻrur qoʻlini choʻzdi, ammo Gʻarbdan esgan shiddatli shamol uni butkul tarqatib yubordi. U boshqa hech qachon jismoniy shakl ololmaydigan, faqat cheksiz boʻshliqda oʻz nafratida qovriluvchi zaif arvohga aylanib qoldi."
    }
  ];
  return d;
});

// 7. SARUMAN
updateCharacter('saruman', (d) => {
  d.image = {
    src: '/images/characters/saruman.webp',
    src_thumb: '/images/characters/saruman-thumb.webp',
    alt: 'Saruman koʻp jiloli oppoq libosda Orthanc minorasi tepasida, qoʻlida Palantír toshi bilan',
    caption: 'Saruman Oq — Istari ordeni sobiq boshligʻi, Orthanc minorasi sohibi va Oq Kengash raisi'
  };
  d.biography_sections = [
    {
      title: "Aulë Maiari Curumo va Istari yetakchisi",
      content: "Saruman (sindarincha Curunír, asl ismi Curumo) Valinorda Temirchi Aulë xizmatidagi eng iqtidorli Maia edi. Uchinchi davrning 1000-yilida Oʻrta-yerga joʻnatilgan besh Istari orasida u 'Birinchi' va eng qudratlisi deb tan olindi. U oppoq libos kiygan, sochi va soqoli qora boʻlib, tengsiz aql va sehrli notiqlik qudratiga ega edi.\n\nU uzoq yillar Sharq yerlarida kezdi, soʻngra Oq Kengashga rahbar etib saylandi. 2759-yilda Gondor Bosh Noibi Berendan qadimiy Númenor qalʼasi boʻlgan Isengardning (Angrenost) kalitlarini qabul qilib, uning markazidagi pishiq qora toshdan qurilgan Orthanc minorasida oʻz qarorgohini oʻrnatdi."
    },
    {
      title: "Hokimiyat vasvasasi va Palantír tuzogʻi",
      content: "Saruman koʻp asrlar davomida Sauronning uzuk yasash sanʼatini chuqur oʻrgandi. Biroq u dushmanning usullarini oʻrgangani sari, oʻzi ham bilmagan holda uning ruhiyatiga yaqinlasha boshladi. U Yagona Uzukni Saurondan avval topib, Oʻrta-yerni oʻz xohishicha 'tartibga solish' vasvasasiga tushdi.\n\nOrthanc minorasida saqlangan qadimiy koʻruvchi tosh — Palantírni ishlatishga jurʼat etgan Saruman, Barad-dûrdagi Sauronning qora irodasi bilan toʻqnashdi. Oʻz aqliga haddan ziyod ishongan sehrgar sekin-asta Qora Hukmdorning taʼsiriga tushib, uning yashirin ittifoqchisiga va xiyonatkoriga aylandi."
    },
    {
      title: "Isengardning sanoatlashtirilishi va Uruk-hai",
      content: "Saruman bir paytlar yam-yashil boʻlgan Isengard bogʻlarini kesib, yerosti ustaxonalari, temirchilik oʻchoqlari va qurol-aslaha zavodlariga aylantirdi. Tolkien oʻz asarlarida Sarumanni 'tabiatni yoʻq qiluvchi sovuq mashinasozlik va sanoatlashuv' timsoli sifatida tasvirlagan.\n\nU orklar va insonlarni chatishtirib, quyosh nuridan qoʻrqmaydigan, ulkan va shafqatsiz jangchilar zoti — Uruk-hailarni yaratdi. Ularning qalqonlariga Oq Qoʻl (White Hand) tamgʻasini bostirib, qoʻshni Rohan qirolligini butkul yakson qilish uchun oʻn minglik qoʻshin joʻnatdi."
    },
    {
      title: "Hornburgdagi magʻlubiyat va Entlarning gʻazabi",
      content: "3019-yil martida Sarumanning ulkan armiyasi Hornburg (Helm's Deep) qalʼasi ostida Rohirrim va Aragorn tomonidan tor-mor qilindi. Shu bilan birga, daraxtlarning qirqilishidan gʻazablangan Treebeard boshchiligidagi Entlar Isengardga bostirib kirdi.\n\nEntlar Isengardning tosh toʻgʻonlarini buzib, daryo suvlarini yerosti pechlariga oqizdi va barcha zavodlarni suvga gʻarq qildi. Saruman oʻzining pishiq Orthanc minorasida qamalib qoldi. Gandalf uning sehrgar hassasini sindirib, uni Istari ordeni va Kengashdan quvdi."
    },
    {
      title: "Shayr fojiasi va pastkash intiqom",
      content: "Urush tugagach, Entlar rahm qilib qamoqdan boʻshatgan Saruman oʻz xizmatkori Gríma Wormtongue bilan birga qashshoq gadoy qiyofasida Shirga yoʻl oldi. U yerda 'Sharkey' nomi bilan xobbitlar ustidan qora zulm oʻrnatdi, Shirning goʻzal daraxtlarini kestirib, moʻrili iflos tegirmonlar qurdirdi.\n\nFrodo va doʻstlari qaytib kelib Suvboʻyi jangida uning qaroqchilarini yengdilar. Frodo Sarumanning joniga qasd qilmaslikni buyurgan boʻlsa-da, xoʻrlangan va azoblangan Gríma Wormtongue Bag End eshigi oldida Sarumanning tomogʻiga pichoq tortib oʻldirdi."
    },
    {
      title: "Ruhning intihosi va falsafiy xulosa",
      content: "Saruman oʻlgan zahoti uning jasadidan kulrang tuman kabi ruh koʻtarildi. Bu ruh Boqiy Gʻarbdagi Valinor tomon intilib boqdi, biroq Gʻarbdan esgan sovuq shamol uni orqaga surib, yoʻq qilib yubordi. U oʻzining xiyonati va kibri tufayli Valinordan ham, Oʻrta-yerdan ham mahrum boʻlib, abadiy sarsonlikka mahkum etildi."
    }
  ];
  return d;
});
