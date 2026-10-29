import type { JourneyDefinition } from '@/utils/atlas/journey-types';

/**
 * Tolkien Olami — Uzuk Egasining Safari (Frodo va Samning Orodruin sari yoʻli)
 *
 * J.R.R. Tolkienning «The Two Towers» va «The Return of the King» asarlariga asoslangan,
 * Amon Hendan to Hukm Togʻi (Orodruin) qaʼrigacha boʻlgan 6 ta kanonik bosqich.
 */
export const RING_BEARER_JOURNEY: JourneyDefinition = {
  id: 'ring-bearer',
  titleUz: 'Uzuk Egasining Safari',
  titleOriginal: 'The Quest of Mount Doom (Frodo & Sam)',
  subtitleUz: 'Amon Hendan Orodruin olovigacha boʻlgan mashaqqatli yoʻl',
  eraUz: 'Uchinchi Davr',
  yearUz: '3019-yil (26-fevral – 25-mart)',
  travelerUz: 'Frodo Baggins, Samwise Gamgee va Gollum (Sméagol)',
  color: '#c0392b',
  glowColor: 'rgba(192, 57, 43, 0.45)',
  region: 'orta-yer',
  overviewUz:
    'Amon Henda Uzuk Qardoshligi boʻlingach, Frodo Baggins va uning sadoqatli yoʻldoshi Samwise Gamgee Yagona Uzukni Mordor qaʼriga yolgʻiz eltishga qaror qiladilar. Emyn Muilda Gollumni boʻysundirib, Oʻlik Botqoqliklar, Morannon, Ithilien va Cirith Ungol dahshatlaridan oʻtib, Orodruin olovida Sauron saltanatiga nuqta qoʻyadilar.',
  totalStages: 6,
  source: {
    bookSlug: 'the-lord-of-the-rings',
    titleUz: 'The Two Towers & The Return of the King (1954–1955)',
  },
  stages: [
    {
      id: 'ring-bearer-amon-hen',
      sequence: 1,
      titleUz: 'Sharqiy Qirgʻoqqa Oʻtish va Sméagolning Boʻysundirilishi',
      locationNameUz: 'Amon Hen va Emyn Muil',
      locationNameOriginal: 'Amon Hen & The Eastern Emyn Muil',
      region: 'orta-yer',
      placeId: 'amon-hen',
      coordinates: { x: 1140, y: 810 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Nen Hithoel koʻli boʻyidagi Amon Hen va sharqdagi Emyn Muil tosh labirintlari.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz: 'Emyn Muilning tik qoyalaridan tushib, Gollum boshchiligida Oʻlik Botqoqliklar sari yurish.',
        waypoints: [
          { x: 1175, y: 802 },
          { x: 1210, y: 785 },
        ],
      },
      dateUz: 'III d. 3019, 26–29-fevral',
      storyEvent: {
        titleUz: 'Yolgʻiz Qayiq va Sting Tigʻi Ostidagi Qasam',
        descriptionUz:
          'Frodo doʻstlarini Uzuk vasvasasidan asrash uchun Amon Hendan yashirincha qayiqda joʻnab ketmoqchi boʻlganida, Sam suvga oʻzini otib unga qoʻshiladi. Emyn Muil qoyalarida ular izma-iz kelayotgan Gollumni tutib oladilar; Frodo unga rahm qiladi va Sméagol «Qadrdonim» nomi bilan ularga yoʻl koʻrsatishga qasamyod qiladi.',
        significanceUz: 'Frodoning Gollumga koʻrsatgan shafqati kelajakda Orodruin qaʼrida Oʻrta-yer taqdirini hal qiladi.',
      },
      source: {
        bookSlug: 'the-lord-of-the-rings',
        chapterTitleUz: '1-bob: «Sméagolning boʻysundirilishi»',
        chapterOriginal: 'Book IV, Chapter 1: The Taming of Sméagol',
        chapterNumber: 1,
        pageNotesUz: 'Emyn Muil qoyalarida Lothlórien arqoni va Gollumning qasami.',
      },
    },
    {
      id: 'ring-bearer-dead-marshes',
      sequence: 2,
      titleUz: 'Arvoh Chiroqlari va Oʻliklar Chehrasi',
      locationNameUz: 'Oʻlik Botqoqliklar (Dagorlad)',
      locationNameOriginal: 'The Dead Marshes',
      region: 'orta-yer',
      placeId: 'dead-marshes',
      coordinates: { x: 1245, y: 765 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Emyn Muil va Dagorlad oraligʻidagi qadimiy jang maydoni botqoqliklari.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz: 'Dagorladning kuygan choʻli va kul tepaliklari orqali Mordorning Qora Darvozasiga yaqinlashish.',
        waypoints: [
          { x: 1265, y: 748 },
          { x: 1280, y: 734 },
        ],
      },
      dateUz: 'III d. 3019, 1–3-mart',
      storyEvent: {
        titleUz: 'Botqoqlikdan Yashirin Oʻtish va Qanotli Nazgûl',
        descriptionUz:
          'Orklar taʼqibidan qochish uchun Gollum xobbitlarni faqat oʻzi biladigan soʻqmoqlar orqali Oʻlik Botqoqliklardan olib oʻtadi. Suv ostida Soʻnggi Ittifoq jangida halok boʻlgan elflar va insonlarning oʻlik yuzlari hamda yolgʻonchi mashʼalalar koʻrinadi; osmonda ilk bor qanotli maxluq mingan Nazgûl paydo boʻlib, xobbitlar qalbiga dahshat soladi.',
        significanceUz: 'Dushman koʻzidan yashirincha Mordor ostonasiga — Cirith Gorgorga yetib borish.',
      },
      source: {
        bookSlug: 'the-lord-of-the-rings',
        chapterTitleUz: '2-bob: «Botqoqliklardan oʻtish»',
        chapterOriginal: 'Book IV, Chapter 2: The Passage of the Marshes',
        chapterNumber: 2,
        pageNotesUz: 'Dagorlad qabristoni va qanotli Nazgûl sharpasi.',
      },
    },
    {
      id: 'ring-bearer-morannon',
      sequence: 3,
      titleUz: 'Yopiq Qora Darvoza va Maxfiy Dovon Maslahati',
      locationNameUz: 'Morannon (Qora Darvoza)',
      locationNameOriginal: 'The Morannon (Black Gate of Mordor)',
      region: 'orta-yer',
      placeId: 'morannon',
      coordinates: { x: 1295, y: 720 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Ered Lithui va Ephel Dúath tutashgan Cirith Gorgor darasi.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz: 'Ephel Dúathning gʻarbiy yonbagʻirlari boʻylab xushboʻy Ithilien oʻrmonlari orqali janubga yurish.',
        waypoints: [
          { x: 1278, y: 695 },
          { x: 1265, y: 668 },
        ],
      },
      dateUz: 'III d. 3019, 5-mart',
      storyEvent: {
        titleUz: 'Tishlar Minoralari Ostidagi Qaror',
        descriptionUz:
          'Morannonning temir darvozalari minglab soqchilar bilan toʻla ekanini koʻrgan Frodo baribir ichkariga kirishga shaylanadi. Shunda Gollum uning oyogʻiga yiqilib, janubda — Minas Morgul ustidagi togʻlarda Mordorga eltuvchi boshqa yashirin zina va dovon (Cirith Ungol) borligini ochiqlaydi. Frodo janubiy yoʻlni tanlaydi.',
        significanceUz: 'Muqarrar asirlikdan qutulish, biroq Gollumning Shelob bilan bogʻliq yashirin xiyonati tuzogʻiga tushish.',
      },
      source: {
        bookSlug: 'the-lord-of-the-rings',
        chapterTitleUz: '3-bob: «Qora Darvoza yopiq»',
        chapterOriginal: 'Book IV, Chapter 3: The Black Gate is Closed',
        chapterNumber: 3,
        pageNotesUz: 'Morannon istehkomlari va Gollumning Cirith Ungol haqidagi taklifi.',
      },
    },
    {
      id: 'ring-bearer-henneth-annun',
      sequence: 4,
      titleUz: 'Faramirning Sinovi va Taqiqlangan Hovuz',
      locationNameUz: 'Henneth Annûn (Ithilien)',
      locationNameOriginal: 'Henneth Annûn, Window on the West',
      region: 'orta-yer',
      placeId: 'henneth-annun',
      coordinates: { x: 1255, y: 640 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Shimoliy Ithilien oʻrmonlaridagi sharshara ortida yashiringan Gondor gʻori.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz: 'Qulagan Shoh chorrahasi (Cross-roads) va Morgul vodiysi orqali Cirith Ungol zinapoyalariga koʻtarilish.',
        waypoints: [
          { x: 1265, y: 610 },
          { x: 1280, y: 590 },
        ],
      },
      dateUz: 'III d. 3019, 7–8-mart',
      storyEvent: {
        titleUz: 'Olijanob Sardor va Uzuk Vasvasasidan Ustunlik',
        descriptionUz:
          'Haradrim qoʻshini va oliphaunt (mumak) jangiga guvoh boʻlgan xobbitlar Boromirning ukasi — Ithilien sardori Faramir tomonidan Henneth Annûn gʻoriga olib boriladi. Faramir Frododagi buyum Yagona Uzuk ekanini bilsa-da, uni kuch bilan tortib olishdan bosh tortadi, Taqiqlangan Hovuzda tutilgan Gollumni Frodo kafilligiga topshiradi va xobbitlarni oziq-ovqat bilan kuzatib qoʻyadi.',
        significanceUz: 'Númenor qoni va donishmandligining Uzuk vasvasasi ustidan maʼnaviy gʻalabasi.',
      },
      source: {
        bookSlug: 'the-lord-of-the-rings',
        chapterTitleUz: '5-bob: «Gʻarbga qaragan deraza»',
        chapterOriginal: 'Book IV, Chapter 5: The Window on the West',
        chapterNumber: 5,
        pageNotesUz: 'Faramirning oqilona qarori va Taqiqlangan Hovuz voqeasi.',
      },
    },
    {
      id: 'ring-bearer-cirith-ungol',
      sequence: 5,
      titleUz: 'Shelob Uyasi va Samwisening Jasorati',
      locationNameUz: 'Cirith Ungol va Minas Morgul',
      locationNameOriginal: 'Minas Morgul, Torech Ungol & Tower of Cirith Ungol',
      region: 'orta-yer',
      placeId: 'cirith-ungol',
      coordinates: { x: 1300, y: 580 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Morgul vodiysi tepasidagi Ephel Dúath dovoni va qorovul minorasi.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz: 'Mordorning Morgai tizmasidan tushib, suvsiz va kul bosgan Gorgoroth tekisligi boʻylab Orodruin vulqoniga sudralib borish.',
        waypoints: [
          { x: 1328, y: 592 },
          { x: 1352, y: 606 },
        ],
      },
      dateUz: 'III d. 3019, 10–14-mart',
      storyEvent: {
        titleUz: 'Torech Ungol Zulmati va Minoradagi Qutqaruv',
        descriptionUz:
          'Minas Morguldan Jodu-qirol qoʻshini urushga chiqqan kechada xobbitlar Tik va Aylanma zinapoyalardan koʻtariladilar. Gollum ularni Torech Ungol gʻorida ulkan oʻrgimchak Shelobga roʻpara qiladi. Shelob Frodoni chaqib falajlagach, Sam Galadriel shishasi va Sting qilichi bilan maxluqni ogʻir yaralaydi, Uzukni vaqtincha saqlab qoladi va Cirith Ungol minorasidagi orklar oʻzaro qirgʻinidan foydalanib Frodoni tutqunlikdan qutqaradi.',
        significanceUz: 'Samwise Gamgeening sadoqati tufayli Uzuk Sauron qoʻliga tushishdan asrab qolinadi.',
      },
      source: {
        bookSlug: 'the-lord-of-the-rings',
        chapterTitleUz: '9–10-boblar: «Shelob uyasi» va «Janob Samwisening tanlovi»',
        chapterOriginal: 'Book IV, Chapters 9–10 & Book VI, Chapter 1',
        chapterNumber: 9,
        pageNotesUz: 'Shelob bilan jang va Cirith Ungol minorasida Frodoning qutqarilishi.',
      },
    },
    {
      id: 'ring-bearer-orodruin',
      sequence: 6,
      titleUz: 'Sammath Naur va Yagona Uzukning Yoʻq Qilinishi',
      locationNameUz: 'Orodruin (Hukm Togʻi)',
      locationNameOriginal: 'Mount Doom (Orodruin / Sammath Naur)',
      region: 'orta-yer',
      placeId: 'orodruin',
      coordinates: { x: 1380, y: 620 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Gorgoroth tekisligidagi olovli vulqon va Sammath Naur gʻori.',
      },
      dateUz: 'III d. 3019, 25-mart',
      storyEvent: {
        titleUz: 'Hukm Olovi va Barad-dûrning Qulashi',
        descriptionUz:
          'Aragorn Morannon oldida Sauronning bor eʼtiborini oʻziga tortib turgan soatda, Sam holdan toygan Frodoni yelkasida koʻtarib Orodruin choʻqqisiga olib chiqadi. Sammath Naur tubsizligi ustida Uzukning mutlaq qudrati Frodoning irodasini sindiradi; ammo Gollum Frodoga tashlanib, Uzukli barmoqni tishlab uzib oladi va shodlikdan muvozanatni yoʻqotib olovli tubsizlikka qulaydi. Uzuk erib, Barad-dûr qulaydi; Gandalf va Buyuk Burgutlar Frodo hamda Samni vulqon alangasidan qutqaradilar.',
        significanceUz: 'Yagona Uzuk va Sauronning halokati, Uchinchi Davrning yakunlanishi va Erkin Xalqlarning gʻalabasi.',
      },
      source: {
        bookSlug: 'the-lord-of-the-rings',
        chapterTitleUz: '3-bob: «Hukm Togʻi»',
        chapterOriginal: 'Book VI, Chapter 3: Mount Doom',
        chapterNumber: 3,
        pageNotesUz: 'Sammath Naurda Uzukning erishi va Burgutlar tomonidan qutqarilish.',
      },
    },
  ],
};
