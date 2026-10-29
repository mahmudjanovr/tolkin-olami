import type { JourneyDefinition } from '@/utils/atlas/journey-types';

/**
 * Tolkien Olami — Uzuk Qardoshligi Safari (The Fellowship of the Ring)
 *
 * J.R.R. Tolkienning «The Lord of the Rings» asariga asoslangan,
 * barcha 6 ta asosiy bosqich va kanonik daryo/yoʻl koordinatalari bilan.
 */
export const FELLOWSHIP_JOURNEY: JourneyDefinition = {
  id: 'fellowship',
  titleUz: 'Uzuk Qardoshligi Safari',
  titleOriginal: 'The Quest of the Ring / Journey of the Fellowship',
  subtitleUz: 'Shir qirlaridan to Amon Hengacha boʻlgan buyuk safar',
  eraUz: 'Uchinchi Davr',
  yearUz: '3018–3019-yillar',
  travelerUz: 'Frodo, Sam, Aragorn, Gandalf, Legolas, Gimli, Boromir, Merry va Pippin',
  color: '#4a8bad',
  glowColor: 'rgba(74, 139, 173, 0.45)',
  region: 'orta-yer',
  overviewUz:
    'Yagona Uzukni yoʻq qilish va Oʻrta-yerni Sauron zulmatidan qutqarish maqsadida tuzilgan toʻqqiz nafar Qardoshlik aʼzolarining Yoriqvodiydan Orodruin sari boshlangan, fojia va jasoratga toʻla buyuk yurishi.',
  totalStages: 6,
  source: {
    bookSlug: 'the-lord-of-the-rings',
    titleUz: 'The Fellowship of the Ring (1954)',
  },
  stages: [
    {
      id: 'fellowship-hobbiton',
      sequence: 1,
      titleUz: 'Shirdan Maxfiy Chiqish',
      locationNameUz: 'Hobbiton (Xalta Burchagi)',
      locationNameOriginal: 'Hobbiton, Bag End',
      region: 'orta-yer',
      placeId: 'hobbiton',
      coordinates: { x: 490, y: 1408 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Frodo Bagginsning Yagona Uzuk bilan Shirdan yoʻlga chiqqan boshlangʻich nuqtasi.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz: 'Brendivin daryosi kechuvi, Bakkland va Qadimgi Oʻrmon orqali Bri tomon yurish.',
        waypoints: [
          { x: 540, y: 1410 },
          { x: 592, y: 1412 },
          { x: 620, y: 1412 },
        ],
      },
      dateUz: 'III d. 3018, 23-sentabr',
      storyEvent: {
        titleUz: 'Qora Chavandozlar Taʼqibi va Shirdan Chiqish',
        descriptionUz:
          'Frodo va Samwise Gamgee Gandalfning ogohlantirishiga binoan Bag Endni tark etadilar. Nazgûllar taʼqibidan qochib, Brendivin tosh koʻprigi orqali Bakkland va Qadimgi Oʻrmon tomon yoʻl oladilar.',
        significanceUz: 'Yagona Uzukni qutqarish boʻyicha Uchinchi Davrning eng muhim topshirigʻi boshlanishi.',
      },
      source: {
        bookSlug: 'the-lord-of-the-rings',
        chapterTitleUz: '3-bob: «Uch kishi hamrohligida»',
        chapterOriginal: 'Chapter 3: Three is Company',
        chapterNumber: 3,
        pageNotesUz: 'Uzuk egasining Shirdan xatarli chiqishi.',
      },
    },
    {
      id: 'fellowship-bree',
      sequence: 2,
      titleUz: 'Sakrovchi Poni va Qadamchi bilan Uchrashuv',
      locationNameUz: 'Bri (Sakrovchi Poni)',
      locationNameOriginal: 'Bree, The Prancing Pony',
      region: 'orta-yer',
      placeId: 'bree',
      coordinates: { x: 650, y: 1413 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Buyuk Sharqiy Yoʻl va Yashil Yoʻl kesishmasidagi insonlar va xobbitlar maskani.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz: 'Amon Sûl (Ob-havo choʻqqisi) va Oxirgi Koʻprik orqali Yoriqvodiy darasiga tomon qiyin yoʻl.',
        waypoints: [
          { x: 685, y: 1420 },
          { x: 720, y: 1425 },
          { x: 790, y: 1413 },
          { x: 840, y: 1413 },
          { x: 890, y: 1418 },
        ],
      },
      dateUz: 'III d. 3018, 29-sentabr',
      storyEvent: {
        titleUz: 'Aragorn (Strider) bilan Ittifoq',
        descriptionUz:
          '«Sakrovchi Poni» mehmonxonasida xobbitlar Dúnedain rahnamosi Aragorn (Qadamchi) bilan uchrashadilar. Barmada Gandalfning maktubi olinadi; Nazgûllar hujumidan soʻng Aragorn ularni yashirin soʻqmoqlar orqali Yoriqvodiy sari boshlaydi.',
        significanceUz: 'Aragornning boʻlajak Qardoshlik va Uzuk Sohibiga yoʻlboshchi sifatida qoʻshilishi.',
      },
      source: {
        bookSlug: 'the-lord-of-the-rings',
        chapterTitleUz: '9-bob: «Sakrovchi Poni nishoni ostida»',
        chapterOriginal: 'Chapter 9: At the Sign of the Prancing Pony',
        chapterNumber: 9,
        pageNotesUz: 'Aragorn bilan tanishuv va Nazgûllardan qutulish.',
      },
    },
    {
      id: 'fellowship-rivendell',
      sequence: 3,
      titleUz: 'Elrond Kengashi va Qardoshlikning Tuzilishi',
      locationNameUz: 'Rivendell (Yoriqvodiy / Imladris)',
      locationNameOriginal: 'Rivendell, The Last Homely House',
      region: 'orta-yer',
      placeId: 'rivendell',
      coordinates: { x: 920, y: 1420 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Bruinen darasidagi Elrond boshpanasi, Oʻrta-yerdagi eng muhim kengash makoni.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz: 'Hollin (Eregion) boʻylab Tumanli togʻlar ostidagi Moria Gʻarbiy darvozasiga tomon janubiy yoʻl.',
        waypoints: [
          { x: 935, y: 1320 },
          { x: 950, y: 1220 },
          { x: 960, y: 1150 },
        ],
      },
      dateUz: 'III d. 3018, 25-oktabr — 25-dekabr',
      storyEvent: {
        titleUz: 'Uzuk Qardoshligining Shakllanishi',
        descriptionUz:
          'Elrond huzurida Elflar, Insonlar va Mittilar ishtirokida buyuk Kengash boʻlib oʻtadi. Yagona Uzukni Mordorda yoʻq qilishga qaror qilinadi. Toʻqqiz Nazgûlga qarshi erkin xalqlardan toʻqqiz nafar Uzuk Qardoshligi tuziladi; Narsil qilichi Andúril nomi bilan qayta quyiladi.',
        significanceUz: 'Sauronga qarshi umumiy kurash uchun erkin xalqlar ittifoqining rasman qaror topishi.',
      },
      source: {
        bookSlug: 'the-lord-of-the-rings',
        chapterTitleUz: '2-kitob, 2-bob: «Elrond Kengashi»',
        chapterOriginal: 'The Council of Elrond',
        chapterNumber: 2,
        pageNotesUz: 'Uzuk Qardoshligining shakllanishi.',
      },
    },
    {
      id: 'fellowship-moria',
      sequence: 4,
      titleUz: 'Khazad-dûm Koʻprigi va Durin Balosi',
      locationNameUz: 'Moria (Khazad-dûm)',
      locationNameOriginal: 'Moria, The Mines of Khazad-dûm',
      region: 'orta-yer',
      placeId: 'khazad-dum',
      coordinates: { x: 965, y: 1113 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Caradhras qor boʻronidan soʻng Tumanli togʻlar ostidan oʻtuvchi ming yillik mitti konlari.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz: 'Azanulbizar (Dimrill Dale) va Kheled-zâram koʻli boʻylab Lothlórien sarhadiga qochish.',
        waypoints: [
          { x: 1010, y: 1090 },
          { x: 1050, y: 1070 },
        ],
      },
      dateUz: 'III d. 3019, 13–15-yanvar',
      storyEvent: {
        titleUz: 'Balin Qabri va Gandalfning Jasorati',
        descriptionUz:
          'Mazarbul palatasida Balin qabri topiladi va oʻrklar hamda gʻor trollari hujumiga duch kelinadi. Khazad-dûm koʻprigida qadimiy Balrog bilan toʻqnashuvda Gandalf koʻprikni sindirib, maxluq bilan birga qaʼrga qulaydi («You cannot pass!»).',
        significanceUz: 'Qardoshlik yetakchisi Gandalfning boy berilishi va jamoaga Aragorn boshchilik qila boshlashi.',
      },
      source: {
        bookSlug: 'the-lord-of-the-rings',
        chapterTitleUz: '2-kitob, 5-bob: «Khazad-dûm koʻprigi»',
        chapterOriginal: 'The Bridge of Khazad-dûm',
        chapterNumber: 5,
        pageNotesUz: 'Durin balosi bilan olishuv va Gandalfning qulashi.',
      },
    },
    {
      id: 'fellowship-lothlorien',
      sequence: 5,
      titleUz: 'Oltin Oʻrmon Panohi va Galadriel Tuhfalari',
      locationNameUz: 'Lothlórien (Caras Galadhon)',
      locationNameOriginal: 'Lothlórien, Caras Galadhon',
      region: 'orta-yer',
      placeId: 'lothlorien',
      coordinates: { x: 1080, y: 1058 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Nenya uzugi kuchi ostidagi mallorn daraxtlari va Galadriel saltanati.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz: 'Buyuk Anduin daryosi boʻylab Argonath darvozalari orqali Nen Hithoel koʻliga qayiqda suzish.',
        waypoints: [
          { x: 1095, y: 990 },
          { x: 1115, y: 920 },
          { x: 1130, y: 860 },
        ],
      },
      dateUz: 'III d. 3019, 17-yanvar — 16-fevral',
      storyEvent: {
        titleUz: 'Galadriel Koʻzgusi va Qayiqlar Inʼomi',
        descriptionUz:
          'Qardoshlik Caras Galadhonda dam oladi. Frodo Galadriel Koʻzgusiga qarab kelajak xatarlarini koʻradi. Xayrlashuvda Galadriel har bir aʼzoga qimmatli tuhfalar (Eärendil nuri, elflar choponlari, lembas va uchta elflar qayigʻi) taqdim etadi.',
        significanceUz: 'Qardoshlikka ruhiy najot berilishi va Anduin boʻylab suzish uchun qayiqlar bilan taʼminlanishi.',
      },
      source: {
        bookSlug: 'the-lord-of-the-rings',
        chapterTitleUz: '2-kitob, 8-bob: «Lórien bilan xayrlashuv»',
        chapterOriginal: 'Farewell to Lórien',
        chapterNumber: 8,
        pageNotesUz: 'Galadriel tuhfalari va Anduin boʻylab safarga chiqish.',
      },
    },
    {
      id: 'fellowship-amon-hen',
      sequence: 6,
      titleUz: 'Boromirning Qahramonligi va Qardoshlikning Boʻlinishi',
      locationNameUz: 'Amon Hen (Koʻruvchi Choʻqqi)',
      locationNameOriginal: 'Amon Hen, Parth Galen',
      region: 'orta-yer',
      placeId: 'amon-hen',
      coordinates: { x: 1140, y: 810 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Nen Hithoel koʻlining gʻarbiy qirgʻogʻidagi qadimiy Númenor kuzatuv tepaligi.',
      },
      dateUz: 'III d. 3019, 26-fevral',
      storyEvent: {
        titleUz: 'Parth Galendagi Fojea va Uchga Ajralish',
        descriptionUz:
          'Boromir vasvasaga tushib Uzukni tortib olmoqchi boʻladi, biroq xatosini anglab, Merry va Pippinni Uruk-hailardan himoya qilib mardlarcha halok boʻladi. Frodo va Sam Mordorga yolgʻiz yoʻl oladi; Aragorn, Legolas va Gimli esa asir xobbitlarni qutqarish uchun Rohan tomon taʼqibga otlanadi.',
        significanceUz: 'Uzuk Qardoshligining boʻlinishi va Halqa Urushining hal qiluvchi parallel bosqichlariga yoʻl ochilishi.',
      },
      source: {
        bookSlug: 'the-lord-of-the-rings',
        chapterTitleUz: '2-kitob, 10-bob: «Qardoshlikning boʻlinishi»',
        chapterOriginal: 'The Breaking of the Fellowship',
        chapterNumber: 10,
        pageNotesUz: 'Boromirning halokati va Qardoshlikning parchalanishi.',
      },
    },
  ],
};
