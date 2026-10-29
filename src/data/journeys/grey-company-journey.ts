import type { JourneyDefinition } from '@/utils/atlas/journey-types';

/**
 * Tolkien Olami — Aragorn va Kulrang Boʻlinma Safari (The Passing of the Grey Company)
 *
 * J.R.R. Tolkienning «The Lord of the Rings: The Return of the King» asariga asoslangan,
 * barcha 4 ta asosiy bosqich, qora flotning egallanishi va Anduin daryo safari bilan.
 */
export const GREY_COMPANY_JOURNEY: JourneyDefinition = {
  id: 'grey-company',
  titleUz: 'Aragorn va Kulrang Boʻlinma Safari',
  titleOriginal: 'The Passing of the Grey Company',
  subtitleUz: 'Dunharrow qoyalaridan Pelargir va Minas Tirith qutqaruvigacha',
  eraUz: 'Uchinchi Davr',
  yearUz: '3019-yil (mart)',
  travelerUz: 'Aragorn, Legolas, Gimli, Elladan, Elrohir, 30 Dúnedain va Oʻliklar Qoʻshini',
  color: '#8b2500',
  glowColor: 'rgba(139, 37, 0, 0.45)',
  region: 'orta-yer',
  overviewUz:
    'Aragorn II ning Isildur vorisi sifatida Oʻliklar Qasamyodini chaqirishi, Oq Togʻlar qaʼridan oʻtib Janubiy Gondorga yordamga yetishi va Umbar qaroqchilari flotini egallab, Minas Tirithni dahshatli qamaldan xalos etgan afsonaviy harbiy yurishi.',
  totalStages: 4,
  source: {
    bookSlug: 'the-lord-of-the-rings',
    titleUz: 'The Return of the King (1955)',
  },
  stages: [
    {
      id: 'grey-company-dunharrow',
      sequence: 1,
      titleUz: 'Dunharrowda Palantir va Qatʼiy Qaror',
      locationNameUz: 'Dunharrow (Dúnharg)',
      locationNameOriginal: 'Dunharrow, Harrowdale',
      region: 'orta-yer',
      placeId: 'dunharrow',
      coordinates: { x: 995, y: 705 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Harrowdale vodiysi tepasidagi qadimiy togʻ mudofaa istehkomi.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz: 'Dimholt qora qayinlari orqali Dwimorberg qoyasidagi Oʻliklar Eshigiga tomon yurish.',
        waypoints: [
          { x: 992, y: 695 },
        ],
      },
      dateUz: 'III d. 3019, 7-mart',
      storyEvent: {
        titleUz: 'Orthanc Toshiga Qarash va Éowyn bilan Vidolashuv',
        descriptionUz:
          'Hornburgdagi gʻalabadan soʻng Aragorn Orthanc Palantirida oʻzini Sauronga oshkor qiladi va janubiy xatarni koʻradi. Dunharrowda malika Éowynning iltijolariga qaramay, u Oq Togʻlar tagidagi laʼnatlangan Oʻliklar Yoʻliga kirishga qaror qiladi.',
        significanceUz: 'Aragornning Isildur taxtining qonuniy egasi sifatida eng xatarli yoʻlni tanlashi.',
      },
      source: {
        bookSlug: 'the-lord-of-the-rings',
        chapterTitleUz: '5-kitob, 2-bob: «Kulrang Boʻlinmaning oʻtishi»',
        chapterOriginal: 'Chapter 2: The Passing of the Grey Company',
        chapterNumber: 2,
        pageNotesUz: 'Aragornning Dunharrowdagi qarori.',
      },
    },
    {
      id: 'grey-company-paths-of-the-dead',
      sequence: 2,
      titleUz: 'Oʻliklar Yoʻli va Erech Qoyasidagi Qasamyod',
      locationNameUz: 'Oʻliklar Yoʻli (Paths of the Dead / Erech)',
      locationNameOriginal: 'The Paths of the Dead & The Stone of Erech',
      region: 'orta-yer',
      placeId: 'paths-of-the-dead',
      coordinates: { x: 990, y: 685 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Dwimorberg ostidan oʻtuvchi yerosti darasi va Morthond vodiysidagi Erech qoratoshi.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz: 'Calembel, Ciril va Ringló kechuvlari orqali Lebennin boʻylab Pelargir porti sari shoshilinch otliq yurish.',
        waypoints: [
          { x: 1040, y: 620 },
          { x: 1100, y: 530 },
          { x: 1150, y: 470 },
        ],
      },
      dateUz: 'III d. 3019, 8-mart',
      storyEvent: {
        titleUz: 'Soyalar Armiyasining Uygʻonishi',
        descriptionUz:
          'Boʻlinma laʼnatlangan zulmatli gʻorlardan qoʻrquvsiz oʻtadi. Erech qoratoshi oldida Aragorn Isildur sulolasi shohi sifatida burgʻu chalib, Isildurga bergan qasamyodini buzgan Oʻliklar Ruhlarini xizmatga chaqiradi: «Sizning qasamyodingiz ado etilsa, ruhingiz abadiy orom topadi!»',
        significanceUz: 'Oʻrta-yer tarixida birinchi bor Oʻliklar armiyasining jangga otlanishi.',
      },
      source: {
        bookSlug: 'the-lord-of-the-rings',
        chapterTitleUz: '5-kitob, 2-bob: «Kulrang Boʻlinmaning oʻtishi»',
        chapterOriginal: 'Chapter 2: The Passing of the Grey Company',
        chapterNumber: 2,
        pageNotesUz: 'Erech toshidagi chaqiriq va Oʻliklar qasamyodi.',
      },
    },
    {
      id: 'grey-company-pelargir',
      sequence: 3,
      titleUz: 'Pelargir Jangi va Qora Flotning Qoʻlga Kiritilishi',
      locationNameUz: 'Pelargir (Qadimiy Bandargoh)',
      locationNameOriginal: 'Pelargir, Port of the Kings',
      region: 'orta-yer',
      placeId: 'pelargir',
      coordinates: { x: 1180, y: 448 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Anduin daryosi etagidagi qadimiy Númenor porti va kemasozlik markazi.',
      },
      segmentToNext: {
        type: 'confirmed',
        descriptionUz: 'Egallangan 50 ta yirik qaroqchilar kemasiga Janubiy Gondor qoʻshinlarini mindirib, Anduin daryosi boʻylab shimolga tomon shiddatli suzib borish.',
        waypoints: [
          { x: 1195, y: 490 },
          { x: 1210, y: 530 },
          { x: 1218, y: 565 },
        ],
      },
      dateUz: 'III d. 3019, 13-mart',
      storyEvent: {
        titleUz: 'Umbar Qaroqchilarining Tor-mor Qilinishi',
        descriptionUz:
          'Oʻliklar Qoʻshini vahimasi ostida Umbar qaroqchilari daryoga sakrab qochadi. 50 ta yirik kema jangsiz egallanadi; asirlar ozod etiladi. Aragorn Oʻliklar qasamyodini ado etilgan deb eʼlon qilib, ularga abadiy tinchlik beradi. Kemalar Janubiy Gondor lashkarlari bilan toʻldirilib, Minas Tirith tomon yoʻl olinadi.',
        significanceUz: 'Gondor janubidagi dushman xavfining butunlay bartaraf etilishi va Minas Tirith sari daryo yoʻlining ochilishi.',
      },
      source: {
        bookSlug: 'the-lord-of-the-rings',
        chapterTitleUz: '5-kitob, 9-bob: «Soʻnggi munozara»',
        chapterOriginal: 'Chapter 9: The Last Debate',
        chapterNumber: 9,
        pageNotesUz: 'Pelargir jangi va qora flotning egallanishi.',
      },
    },
    {
      id: 'grey-company-minas-tirith',
      sequence: 4,
      titleUz: 'Harlond Bandargohi va Shoh Bayrogʻi',
      locationNameUz: 'Minas Tirith (Harlond bandargohi)',
      locationNameOriginal: 'Minas Tirith, The Harlond',
      region: 'orta-yer',
      placeId: 'minas-tirith',
      coordinates: { x: 1220, y: 580 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Gondor poytaxti etagidagi Harlond daryo bandargohi va Pelennor dalalari.',
      },
      dateUz: 'III d. 3019, 15-mart',
      storyEvent: {
        titleUz: 'Qora Kemalar va Oq Daraxt Bayrogʻi',
        descriptionUz:
          'Minas Tirith qamalining eng ogʻir pallasida, dushman Pelargirdan kelayotgan qora kemalarni koʻrib gʻalabani nishonlay boshlaganda, Aragorn kemalar ustida Oq Daraxt va Yetti Yulduz tushirilgan Elendil bayrogʻini yozadi. Janubiy qoʻshinlar quruqlikka tushib, Mordor armiyasini butunlay tor-mor qiladi.',
        significanceUz: 'Minas Tirith qutqarilishi va Aragornning Oʻrta-yer shohligiga daʼvogar sifatida maydonga chiqishi.',
      },
      source: {
        bookSlug: 'the-lord-of-the-rings',
        chapterTitleUz: '5-kitob, 6-bob: «Pelennor dalalari jangi»',
        chapterOriginal: 'Chapter 6: The Battle of the Pelennor Fields',
        chapterNumber: 6,
        pageNotesUz: 'Harlondga yetib kelish va Pelennor dalalarida gʻalaba.',
      },
    },
  ],
};
