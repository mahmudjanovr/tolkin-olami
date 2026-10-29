import type { JourneyDefinition } from '@/utils/atlas/journey-types';

/**
 * Tolkien Olami — Bilbo Bagginsning Erebor Safari (The Hobbit)
 *
 * J.R.R. Tolkienning «The Hobbit» (1937) asariga asoslangan,
 * barcha 8 ta bosqich va kanonik daryo/yoʻl koordinatalari bilan.
 */
export const BILBO_JOURNEY: JourneyDefinition = {
  id: 'bilbo',
  titleUz: 'Bilbo Bagginsning Erebor Safari',
  titleOriginal: "The Quest of Erebor / Bilbo's Journey",
  subtitleUz: '«Kutilmagan Sayohat» — Shir qirlaridan to Yolgʻiz Togʻ xazinasigacha',
  eraUz: 'Uchinchi Davr',
  yearUz: '2941-yil',
  travelerUz: 'Bilbo Baggins, Gandalf va Torin Dubqalqon boshchiligidagi 13 mitti',
  color: '#c59b27',
  glowColor: 'rgba(197, 155, 39, 0.45)',
  region: 'orta-yer',
  overviewUz:
    'Torin Dubqalqon va 13 mittining ajdaho Smaug egallab olgan ota-bobolar saltanati Erebor xazinasi va Togʻ Osti Taxtini qaytarib olish yoʻlidagi buyuk sarguzashti. Shirning sokin qirlaridan boshlangan bu yoʻl Oʻrta-yer taqdirini oʻzgartiruvchi Yagona Uzukning topilishiga sabab boʻlgan.',
  totalStages: 10,
  source: {
    bookSlug: 'the-hobbit',
    titleUz: 'The Hobbit (1937)',
  },
  stages: [
    {
      id: 'bilbo-hobbiton',
      sequence: 1,
      titleUz: 'Xalta Burchagidan Yoʻlga Chiqish',
      locationNameUz: 'Hobbiton (Bag End)',
      locationNameOriginal: 'Hobbiton, Bag End',
      region: 'orta-yer',
      placeId: 'hobbiton',
      coordinates: { x: 490, y: 1408 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Shirning Gʻarbiy Toʻrtligida, The Hill etagida joylashgan kanonik qishloq va Bag End xobbit ini.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz: 'Buyuk Sharqiy Yoʻl boʻylab Brendivin tosh koʻprigi, Bri va Amon Sûl orqali Trollar oʻrmonigacha boʻlgan quruqlik yoʻli.',
        waypoints: [
          { x: 540, y: 1410 },
          { x: 592, y: 1412 },
          { x: 650, y: 1413 },
          { x: 720, y: 1418 },
          { x: 790, y: 1413 },
        ],
      },
      dateUz: 'III d. 2941, 27-aprel',
      storyEvent: {
        titleUz: 'Kutilmagan Ziyofat va Shartnoma',
        descriptionUz:
          'Gandalf Bag End eshigiga maxfiy belgi oʻyib qoldiradi. Torin Dubqalqon boshchiligidagi 13 mitti mehmonga kelib, yoʻqolgan xazina haqida kuylaydi. Bilbo shartnomaga imzo chekib, oʻgʻri (burglar) sifatida safarga otlanadi.',
        significanceUz: 'Oʻrta-yer tarixini butunlay oʻzgartirgan kutilmagan sarguzashtning boshlanishi.',
      },
      source: {
        bookSlug: 'the-hobbit',
        chapterTitleUz: '1-bob: «Kutilmagan ziyofat»',
        chapterOriginal: 'Chapter 1: An Unexpected Party',
        chapterNumber: 1,
        pageNotesUz: 'Bilboning shartnomasi va Gandalf tashabbusi bilan safarga chiqish.',
      },
    },
    {
      id: 'bilbo-trollshaws',
      sequence: 2,
      titleUz: 'Uch Troll va Sting Qilichi',
      locationNameUz: 'Trollar Oʻrmoni (Trollshaws)',
      locationNameOriginal: 'The Trollshaws',
      region: 'orta-yer',
      coordinates: { x: 840, y: 1413 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Mitheithel (Hoarwell) va Bruinen daryolari oraligʻidagi oʻrmonli adirlar.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz: 'Buyuk Sharqiy Yoʻl boʻylab Bruinen tosh kechuvi orqali Yoriqvodiy (Rivendell) darasiga kirish.',
        waypoints: [
          { x: 890, y: 1418 },
        ],
      },
      dateUz: 'III d. 2941, may oxiri',
      storyEvent: {
        titleUz: 'Ochkoʻz Trollar va Elflar Xanjari',
        descriptionUz:
          'Sayohatchilar Tom, Bert va Bill ismli och trollar qoʻliga tushadi. Gandalf ularni aldab quyosh nurlari ostida toshga aylantiradi. Trollar gʻoridan qadimiy Gondolin qurollari — Glamdring, Orcrist va Bilboning Sting (Nish) xanjari topiladi.',
        significanceUz: 'Bilboning keyinchalik koʻplab janglarda asqotadigan afsonaviy elflar qurolini qoʻlga kiritishi.',
      },
      source: {
        bookSlug: 'the-hobbit',
        chapterTitleUz: '2-bob: «Qoʻy goʻshti qovurmasi»',
        chapterOriginal: 'Chapter 2: Roast Mutton',
        chapterNumber: 2,
        pageNotesUz: 'Trollar gʻoridagi qadimiy Gondolin qurollari kashfiyoti.',
      },
    },
    {
      id: 'bilbo-rivendell',
      sequence: 3,
      titleUz: 'Imladris Oromi va Oy Runalari',
      locationNameUz: 'Rivendell (Yoriqvodiy / Imladris)',
      locationNameOriginal: 'Rivendell (Imladris)',
      region: 'orta-yer',
      placeId: 'rivendell',
      coordinates: { x: 920, y: 1420 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Tolkien Olami toponimlar katalogidagi mavjud Rivendell (Imladris) yozuviga bogʻlangan.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz: 'Imladris vodiysidan chiqib, Tumanli togʻlar tizmasidagi Baland Dovon sari koʻtarilish.',
        waypoints: [
          { x: 938, y: 1432 },
        ],
      },
      dateUz: 'III d. 2941, iyun',
      storyEvent: {
        titleUz: 'Elrond Mehmondoʻstligi va Xarita Siri',
        descriptionUz:
          'Elrond guruhni oʻz maskanida iliq qutlaydi, qadimiy qilichlar yozuvlarini oʻqiydi va Trosh xaritasidagi Durin kuni oy nurida oʻqiladigan maxfiy oy runalarini (moon-letters) ochib beradi.',
        significanceUz: 'Ereborning maxfiy eshigini ochish kaliti boʻlgan oy runalarining kashf etilishi.',
      },
      source: {
        bookSlug: 'the-hobbit',
        chapterTitleUz: '3-bob: «Qisqa orom»',
        chapterOriginal: 'Chapter 3: A Short Rest',
        chapterNumber: 3,
        pageNotesUz: 'Elrond tomonidan oy runalarining ochib berilishi.',
      },
    },
    {
      id: 'bilbo-misty-mountains',
      sequence: 4,
      titleUz: 'Baland Dovon va Yagona Uzuk',
      locationNameUz: 'Tumanli Togʻlar (Baland Dovon va Goblinlar Gʻori)',
      locationNameOriginal: 'The Misty Mountains (High Pass / Goblin-town)',
      region: 'orta-yer',
      coordinates: { x: 955, y: 1448 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Hithaeglir tizmasidagi Baland Dovon (High Pass) va yerosti gʻorlar tizmasi.',
      },
      segmentToNext: {
        type: 'approximate',
        descriptionUz:
          'Sharqiy qiyalikdagi qaragʻayzorda varglar qamalidan Buyuk Burgutlar tomonidan qutqarilib, havoda Anduin vodiysi uzra Karrok qoyasiga eltib qoʻyilishi (havo parvozi marshruti).',
        waypoints: [
          { x: 1010, y: 1480 },
          { x: 1060, y: 1505 },
        ],
      },
      dateUz: 'III d. 2941, iyul',
      storyEvent: {
        titleUz: 'Zulmatdagi Topishmoqlar va Uzukning Topilishi',
        descriptionUz:
          'Momaqaldiroq paytida gʻorga kirgan guruh goblinlar qoʻliga tushadi. Bilbo yerosti koʻlida Yagona Uzukni topadi va Gollum bilan topishmoqlar bellashuvida gʻalaba qozonib, koʻrinmaslik kuchi bilan qochadi.',
        significanceUz: 'Sauronning Yagona Uzugi 500 yillik tanaffusdan soʻng Oʻrta-yer sarguzashtlariga qaytadi.',
      },
      source: {
        bookSlug: 'the-hobbit',
        chapterTitleUz: '4–5-boblar: «Togʻlar osha» va «Zulmatdagi topishmoqlar»',
        chapterOriginal: 'Chapters 4–5: Over Hill and Under Hill / Riddles in the Dark',
        chapterNumber: 5,
        pageNotesUz: 'Gollum bilan topishmoqlar aytishuvi va Yagona Uzukning topilishi.',
      },
    },
    {
      id: 'bilbo-carrock-beorn',
      sequence: 5,
      titleUz: 'Karrok Qoyasi va Beorn Maskani',
      locationNameUz: 'Karrok va Beorn Uyi (Anduin Vodiysi)',
      locationNameOriginal: "The Carrock and Beorn's Hall",
      region: 'orta-yer',
      coordinates: { x: 1110, y: 1528 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Anduin daryosi oʻrtasidagi Karrok tosh qoyasi va uning sharqiy sohilidagi Beorn maskani.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz: 'Anduin vodiysidan Qorongʻu Oʻrmonning Gʻarbiy Darvozasi (Forest Gate) va Oʻrmon Yoʻli sari otliq yoʻl.',
        waypoints: [
          { x: 1190, y: 1532 },
          { x: 1280, y: 1535 },
          { x: 1335, y: 1537 },
        ],
      },
      dateUz: 'III d. 2941, iyul oxiri',
      storyEvent: {
        titleUz: 'Qiyofadosh Beornning Doʻstligi',
        descriptionUz:
          'Burgutlar guruhni Karrokka qondiradi. Qiyofadosh Beorn ularga mehmondoʻstlik koʻrsatib, otlar va oziq-ovqat beradi. Gandalf guruhni Qorongʻu oʻrmon chegarasida qoldirib, Oq Kengash vazifasi bilan ketadi.',
        significanceUz:
          'Guruhning Anduin vodiysidagi eng kuchli ittifoqchisi bilan uchrashishi va Gandalfning guruhdan vaqtincha ajralishi.',
      },
      source: {
        bookSlug: 'the-hobbit',
        chapterTitleUz: '7-bob: «Gʻaroyib maskan»',
        chapterOriginal: 'Chapter 7: Queer Lodgings',
        chapterNumber: 7,
        pageNotesUz: 'Beorn mehmondoʻstligi va Anduin vodiysi ittifoqi.',
      },
    },
    {
      id: 'bilbo-mirkwood-elvenking',
      sequence: 6,
      titleUz: 'Zulmatzor Sinovlari va Bochkalarda Qochish',
      locationNameUz: 'Qorongʻu Oʻrmon va Tranduil Qasri',
      locationNameOriginal: "Mirkwood and Elvenking's Halls",
      region: 'orta-yer',
      coordinates: { x: 1380, y: 1538 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz:
          'Shimoliy Mirkwood oʻrmoni va Oʻrmon daryosi (Forest River) boʻyidagi elflar qirolining yerosti gʻor saroyi.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz: 'Oʻrmon daryosi (Forest River) oqimi boʻylab bochkalarda Uzun Koʻlga tomon oqib tushish suv yoʻli.',
        waypoints: [
          { x: 1415, y: 1528 },
          { x: 1445, y: 1520 },
        ],
      },
      dateUz: 'III d. 2941, avgust — sentyabr',
      storyEvent: {
        titleUz: 'Oʻrgimchaklar Jangi va Bochkalardagi Xaloskor',
        descriptionUz:
          'Sehrli daryodan oʻtgan sayohatchilarni oʻrgimchaklar oʻrab oladi; Bilbo Sting va Uzuk bilan ularni qutqaradi. Qirol Tranduil gnomlarni qamoqqa tashlaganda, Bilbo koʻrinmas holda ularni boʻsh vino bochkalariga solib daryo orqali qochiradi.',
        significanceUz:
          'Bilboning guruhda shunchaki yoʻldosh emas, balki bosh xaloskor va yetakchi sifatida toʻliq shakllanishi.',
      },
      source: {
        bookSlug: 'the-hobbit',
        chapterTitleUz: '8–9-boblar: «Chivinlar va oʻrgimchaklar» hamda «Bochkalardagi xaloskor»',
        chapterOriginal: 'Chapters 8–9: Flies and Spiders / Barrels Out of Bond',
        chapterNumber: 9,
        pageNotesUz: 'Oʻrmon daryosi orqali bochkalarda qochish rejasining amalga oshishi.',
      },
    },
    {
      id: 'bilbo-laketown-esgaroth',
      sequence: 7,
      titleUz: 'Uzun Koʻl Shahri (Esgaroth)',
      locationNameUz: 'Esgaroth (Uzun Koʻl Shahri)',
      locationNameOriginal: 'Lake-town (Esgaroth)',
      region: 'orta-yer',
      coordinates: { x: 1465, y: 1513 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Uzun Koʻl (Long Lake) ustiga qoziqlar bilan qurilgan insonlar savdo shahri.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz:
          'Uzun Koʻl suvlari boʻylab shimolga, Yuguruvchi Daryo (Celduin) oqimi boʻylab Yolgʻiz Togʻ (Erebor) etagigacha boʻlgan marshrut.',
        waypoints: [
          { x: 1472, y: 1538 },
          { x: 1476, y: 1558 },
        ],
      },
      dateUz: 'III d. 2941, sentyabr oxiri — oktyabr',
      storyEvent: {
        titleUz: 'Insonlar Mehmondoʻstligi va Qayta Tiklangan Umid',
        descriptionUz:
          'Bochkalardan hoʻl holda chiqqan Torin va uning sheriklarini shahar ahli qoʻshiqlar bilan kutib oladi. Shahar hokimi va xalqi ularni oziq-ovqat, qurol va qayiqlarga toʻldirib, Yolgʻiz Togʻ sari kuzatadi.',
        significanceUz:
          'Ajdaho Smaug qoʻrquvida yashayotgan insonlar va gnomlar oʻrtasidagi tarixiy ittifoqning qayta tiklanishi.',
      },
      source: {
        bookSlug: 'the-hobbit',
        chapterTitleUz: '10-bob: «Samimiy kutib olish»',
        chapterOriginal: 'Chapter 10: A Warm Welcome',
        chapterNumber: 10,
        pageNotesUz: 'Esgaroth aholisining Torin Dubqalqonni shoh sifatida qutlashi.',
      },
    },
    {
      id: 'bilbo-erebor',
      sequence: 8,
      titleUz: 'Yolgʻiz Togʻ va Togʻ Osti Qirolligi',
      locationNameUz: 'Erebor (Yolgʻiz Togʻ)',
      locationNameOriginal: 'The Lonely Mountain (Erebor)',
      region: 'orta-yer',
      direction: 'outbound',
      coordinates: { x: 1480, y: 1573 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Middle-earth planar xaritasidagi Erebor choʻqqisi va Janubiy darvoza qarorgohi.',
      },
      segmentToNext: {
        type: 'confirmed',
        direction: 'outbound',
        descriptionUz:
          'Yolgʻiz Togʻning Janubiy darvozasidan Celduin daryosi vodiysi boʻylab Deyl shahri xarobalari sari yoʻl.',
        waypoints: [
          { x: 1479, y: 1565 },
        ],
      },
      dateUz: 'III d. 2941, oktyabr — noyabr',
      storyEvent: {
        titleUz: 'Durin Kuni, Maxfiy Eshik va Ajdaho Smaug',
        descriptionUz:
          'Durin kuni botayotgan quyosh nurida maxfiy eshik ochiladi. Bilbo xazinaga kirib Arkenstone (Diyori Qimmatbaho Toshi)ni oladi. Smaug gʻazablanib Esgarothga hujum qiladi va Bard Kamonchi uni qora oʻq bilan qulatadi.',
        significanceUz:
          'Smaugning halokati va Togʻ Osti xazinasining egasiz qolishi; Shimol xalqlari oʻrtasida xazina taqsimoti ziddiyatining boshlanishi.',
      },
      source: {
        bookSlug: 'the-hobbit',
        chapterTitleUz: '11–14-boblar: «Ostonada»dan «Olov va suv»gacha',
        chapterOriginal: 'Chapters 11–14: On the Doorstep to Fire and Water',
        chapterNumber: 14,
        pageNotesUz: 'Maxfiy eshikning ochilishi va Smaugning qulashi.',
      },
    },
    {
      id: 'bilbo-dale',
      sequence: 9,
      titleUz: 'Deyl Vodiysi va Besh Armiya Jangi',
      locationNameUz: 'Deyl va Yolgʻiz Togʻ Qiyaliklari (Dale)',
      locationNameOriginal: 'Dale and Slopes of Erebor',
      region: 'orta-yer',
      direction: 'outbound',
      coordinates: { x: 1478, y: 1558 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Erebor janubiy etagidagi Deyl shahri vodiysi va Besh Armiya jangi maydoni.',
      },
      segmentToNext: {
        type: 'confirmed',
        direction: 'return',
        descriptionUz:
          'Bilbo va Gandalfning Shimoliy Zulmatzor chekkasi, Beorn maskani, Baland Dovon, Yoriqvodiy (Imladris) va Buyuk Sharqiy Yoʻl boʻylab Shir sari qaytish safari.',
        waypoints: [
          { x: 1450, y: 1570 },
          { x: 1380, y: 1590 },
          { x: 1300, y: 1585 },
          { x: 1220, y: 1560 },
          { x: 1110, y: 1528 },
          { x: 1040, y: 1490 },
          { x: 955, y: 1448 },
          { x: 920, y: 1420 },
          { x: 790, y: 1413 },
          { x: 720, y: 1418 },
          { x: 650, y: 1413 },
          { x: 592, y: 1412 },
          { x: 540, y: 1410 },
        ],
      },
      dateUz: 'III d. 2941, noyabr oxiri',
      storyEvent: {
        titleUz: 'Besh Armiya Jangi va Togʻ Osti Qismati',
        descriptionUz:
          'Torin xazinani boʻlishishdan bosh tortgach, Bilbo qon toʻkilishining oldini olish uchun Arkenstoneni Bard va Tranduilga topshiradi. Shimoldan Bolg boshchiligidagi bahaybat goblinlar va varglar qoʻshini bostirib kelganda Besh Armiya jangi boshlanadi. Burgutlar va qiyofadosh Beorn yordamida buyuk gʻalaba qozoniladi; Torin qahramonlarcha halok boʻladi va Dain II Togʻ Osti Qiroli deb eʼlon qilinadi.',
        significanceUz:
          'Shimoliy Oʻrta-yerning zulmatdan butkul xalos boʻlishi va erkin xalqlar oʻrtasidagi tarixiy ittifoqning mustahkamlanishi.',
      },
      source: {
        bookSlug: 'the-hobbit',
        chapterTitleUz: '15–18-boblar: «Bulutlar yigʻilishi»dan «Qaytish safari»gacha',
        chapterOriginal: 'Chapters 15–18: The Gathering of the Clouds to The Return Journey',
        chapterNumber: 17,
        pageNotesUz: 'Besh Armiya jangi, Torinning dafn marosimi va tinchlik oʻrnatilishi.',
      },
    },
    {
      id: 'bilbo-return-hobbiton',
      sequence: 10,
      titleUz: 'Shirga Qaytish va Xalta Burchagi',
      locationNameUz: 'Hobbiton (Bag End / Xalta Burchagi)',
      locationNameOriginal: 'Hobbiton, Bag End',
      region: 'orta-yer',
      placeId: 'hobbiton',
      direction: 'return',
      coordinates: { x: 460, y: 1420 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Shirning Gʻarbiy Toʻrtligidagi Bag End (The Hill etagidagi xobbit ini).',
      },
      dateUz: 'III d. 2942, 22-iyun',
      storyEvent: {
        titleUz: 'Tinch Orom va Donishmand Sayohatchi',
        descriptionUz:
          'Bilbo Baggins va Gandalf bir yillik uzoq safardan soʻng Bag Endga qaytib kelishadi. Qarindoshlari Bilboni oʻlgan deb hisoblab, uning barcha buyumlarini kimoshdi savdosiga qoʻygan boʻladi. Bilbo oʻz mulkini qaytarib oladi; u endi avvalgi qoʻrqoq xobbit emas, balki Sting xanjari, mithril sovuti va sehrli uzuk sohibi boʻlgan jasur va donishmand oqsoqoldir.',
        significanceUz:
          'Buyuk sayohatning gʻalaba bilan yakunlanishi; Yagona Uzuk keyingi 60 yil davomida Shir bagʻrida osoyishta saqlanadi.',
      },
      source: {
        bookSlug: 'the-hobbit',
        chapterTitleUz: '19-bob: «Soʻnggi bosqich»',
        chapterOriginal: 'Chapter 19: The Last Stage',
        chapterNumber: 19,
        pageNotesUz: 'Bilboning Bag Endga qaytib kelishi va kimoshdi savdosi.',
      },
    },
  ],
};
