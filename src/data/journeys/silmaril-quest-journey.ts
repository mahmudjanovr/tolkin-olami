import type { JourneyDefinition } from '@/utils/atlas/journey-types';

/**
 * Beren va Lúthienning Silmaril Safari (Quest of the Silmaril)
 *
 * Birinchi davr Beleriandidagi eng shonli qahramonlik va sevgi afsonasi.
 * Dorthonion oʻrmonlaridan boshlanib, Doriath, Nargothrond, Tol-in-Gaurhoth,
 * Angband taxtgohi va Tol Galengacha boʻlgan kanonik xarita yoʻnalishi.
 */
export const SILMARIL_QUEST_JOURNEY: JourneyDefinition = {
  id: 'silmaril-quest',
  titleUz: 'Beren va Lúthienning Silmaril Safari',
  titleOriginal: 'The Quest of the Silmaril',
  subtitleUz: 'Morgothning temir tojidan muqaddas gavharning olib chiqilishi',
  eraUz: 'Birinchi davr',
  yearUz: '465–466',
  travelerUz: 'Beren Erchamion, Lúthien Tinúviel, Finrod Felagund va Huan',
  color: '#38bdf8',
  glowColor: 'rgba(56, 189, 248, 0.45)',
  region: 'beleriand',
  overviewUz:
    'Beren va Lúthienning Morgothning temir tojidan Silmarilni kesib olish yoʻlidagi mislsiz jasorati. Barahir qasamyodi, Finrod Felagundning doʻstlik yoʻlidagi fidoiyligi, Tol-in-Gaurhothdagi Sauron magʻlubiyati hamda Angband qaʼridan nurni qaytarib olib chiqish dostonining geografik yoʻnalishi.',
  totalStages: 6,
  source: {
    bookSlug: 'silmarillion',
    titleUz: 'The Silmarillion (Beren va Lúthien haqida)',
  },
  stages: [
    {
      id: 'silmaril-stage-1',
      sequence: 1,
      titleUz: 'Dorthonion Partizani va Barahir Qasamyodi',
      locationNameUz: 'Dorthonion (Taur-nu-Fuin)',
      locationNameOriginal: 'Dorthonion / Tarn Aeluin',
      region: 'beleriand',
      placeId: 'dorthonion',
      direction: 'outbound',
      coordinates: { x: 1160, y: 1080 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Dorthonion va Tarn Aeluin koʻli Beleriand xaritasida aniq belgilangan.',
      },
      segmentToNext: {
        type: 'confirmed',
        direction: 'outbound',
        descriptionUz: 'Ered Gorgoroth qoyalari va Dungortheb oʻrgimchaklar changalzorini yorib oʻtib Doriath chegarasiga kelishi.',
        waypoints: [
          { x: 1100, y: 920 },
          { x: 1040, y: 800 },
        ],
      },
      dateUz: 'Birinchi davr 465, Bahor',
      storyEvent: {
        titleUz: 'Dorthonionning yakson qilinishi va Berenning yolgʻiz qolishi',
        descriptionUz:
          'Barahir guruhiga xiyonat qilinib qirgʻin uyushtirilgach, Beren yolgʻiz qoladi va otasining uzugini olib janubga — afsonaviy Doriath oʻrmonlari sari otlanadi.',
        significanceUz:
          'Insonlar va Elflar taqdirini abadiy bogʻlovchi buyuk zanjirning ilk halqasi boshlanadi.',
      },
      source: {
        bookSlug: 'silmarillion',
        chapterTitleUz: 'Beren va Lúthien haqida',
        chapterOriginal: 'Of Beren and Lúthien',
        chapterNumber: 19,
        pageNotesUz: 'Dorthonion quvgʻini va Melian kamaridan oʻtish.',
      },
    },
    {
      id: 'silmaril-stage-2',
      sequence: 2,
      titleUz: 'Thingolning Sharti va Silmaril Talabi',
      locationNameUz: 'Menegroth (Ming gʻor)',
      locationNameOriginal: 'Menegroth (Thousand Caves)',
      region: 'beleriand',
      placeId: 'menegroth',
      direction: 'outbound',
      coordinates: { x: 1000, y: 720 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Esgalduin daryosi boʻyidagi Menegroth Doriath poytaxti hisoblanadi.',
      },
      segmentToNext: {
        type: 'confirmed',
        direction: 'outbound',
        descriptionUz: 'Doriathdan gʻarbga, Sirion kechuvlari va Narog daryosi boʻylab Nargothrond sari yurish.',
        waypoints: [
          { x: 880, y: 680 },
          { x: 760, y: 620 },
        ],
      },
      dateUz: 'Birinchi davr 465, Yoz',
      storyEvent: {
        titleUz: 'Lúthien bilan uchrashuv va Thingolning gʻazabi',
        descriptionUz:
          'Beren Neldoreth oʻrmonida Lúthienni raqs tushayotganda koʻrib oshiq boʻladi. Qirol Thingol qizining qoʻli evaziga Morgoth tojidan bitta Silmarilni keltirishni shart qilib qoʻyadi.',
        significanceUz:
          'Amalga oshirib boʻlmasdek koʻringan Silmaril safari qasamyodga aylanadi.',
      },
      source: {
        bookSlug: 'silmarillion',
        chapterTitleUz: 'Beren va Lúthien haqida',
        chapterOriginal: 'Of Beren and Lúthien',
        chapterNumber: 19,
        pageNotesUz: 'Menegroth taxt zali va Thingolning sharti.',
      },
    },
    {
      id: 'silmaril-stage-3',
      sequence: 3,
      titleUz: 'Barahir Uzugi va Finrodning Sadoqati',
      locationNameUz: 'Nargothrond',
      locationNameOriginal: 'Nargothrond',
      region: 'beleriand',
      placeId: 'nargothrond',
      direction: 'outbound',
      coordinates: { x: 680, y: 580 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Narog daryosi gʻorlaridagi Finrod Felagund yerosti saltanati.',
      },
      segmentToNext: {
        type: 'confirmed',
        direction: 'outbound',
        descriptionUz: 'Sirion darasi boʻylab shimolga, oʻrklar qiyofasida Tol-in-Gaurhoth sari xatarli yurish.',
        waypoints: [
          { x: 740, y: 740 },
          { x: 820, y: 920 },
        ],
      },
      dateUz: 'Birinchi davr 465, Kuz',
      storyEvent: {
        titleUz: 'Finrod Felagundning qasamyodi va yoʻlga chiqishi',
        descriptionUz:
          'Beren Barahir uzugini koʻrsatgach, Finrod Felagund qasamyodiga binoan tojini Orodrethga topshiradi va 10 nafar sadoqatli jangchisi bilan yoʻlga chiqadi.',
        significanceUz:
          'Noldor Oliy xonadonining eng olijanob hukmdori inson doʻsti uchun hayotini xatarga qoʻyadi.',
      },
      source: {
        bookSlug: 'silmarillion',
        chapterTitleUz: 'Beren va Lúthien haqida',
        chapterOriginal: 'Of Beren and Lúthien',
        chapterNumber: 19,
        pageNotesUz: 'Nargothronddagi qaror va Felagund qasamyodi.',
      },
    },
    {
      id: 'silmaril-stage-4',
      sequence: 4,
      titleUz: 'Sauron Zindoni, Finrod Halokati va Huan Qahramonligi',
      locationNameUz: 'Tol-in-Gaurhoth (Tol Sirion)',
      locationNameOriginal: 'Tol-in-Gaurhoth (Isle of Werewolves)',
      region: 'beleriand',
      placeId: 'tol-sirion',
      direction: 'outbound',
      coordinates: { x: 880, y: 1080 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Sirion daryosi oqimidagi strategik orol-qalʼa.',
      },
      segmentToNext: {
        type: 'confirmed',
        direction: 'outbound',
        descriptionUz: 'Anfauglith qumlari va kul sahrosi orqali qop-qora Thangorodrim etagiga yetib borish.',
        waypoints: [
          { x: 940, y: 1240 },
          { x: 990, y: 1340 },
        ],
      },
      dateUz: 'Birinchi davr 465, Qish',
      storyEvent: {
        titleUz: 'Tol-in-Gaurhothdagi jangu jadal va Sauronning magʻlubiyati',
        descriptionUz:
          'Sauron Finrod va Berenni asir oladi. Finrod boʻri bilan yakkama-yakka olishib Berenni asraydi va halok boʻladi. Lúthien va Huan yetib kelib, Sauronni magʻlub etadi va qalʼa devorlarini agʻdaradi.',
        significanceUz:
          'Sauron Birinchi davrda eng sharmandali magʻlubiyatga uchraydi; Beren ozod etiladi.',
      },
      source: {
        bookSlug: 'silmarillion',
        chapterTitleUz: 'Beren va Lúthien haqida',
        chapterOriginal: 'Of Beren and Lúthien',
        chapterNumber: 19,
        pageNotesUz: 'Minas Tirith minorasi qulashi va Huanning gʻalabasi.',
      },
    },
    {
      id: 'silmaril-stage-5',
      sequence: 5,
      titleUz: 'Morgothning Temir Toji va Silmarilning Olinishi',
      locationNameUz: 'Angband (Thangorodrim osti)',
      locationNameOriginal: 'Angband (Iron Hells)',
      region: 'beleriand',
      placeId: 'angband',
      direction: 'outbound',
      coordinates: { x: 1020, y: 1420 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Thangorodrim choʻqqilari ostidagi Morgoth taxtgohi.',
      },
      segmentToNext: {
        type: 'approximate',
        direction: 'return',
        descriptionUz: 'Carcharoth hamlasidan soʻng Beleriand janubi sari chekinish.',
        waypoints: [
          { x: 920, y: 1080 },
          { x: 860, y: 760 },
          { x: 1300, y: 580 },
        ],
      },
      dateUz: 'Birinchi davr 466, Erta bahor',
      storyEvent: {
        titleUz: 'Lúthien afsuni va Angrist bilan Silmarilning kesilishi',
        descriptionUz:
          'Draugluin va Thuringwethil terisiga burkangan Beren va Lúthien Angband taxt zaliga kiradilar. Lúthien sehrli qoʻshigʻi bilan Morgoth va Balroglarni uxlab qoldiradi. Beren Angrist pichogʻi bilan bitta Silmarilni tojdankesib oladi. Chiqishda boʻri Carcharoth Berenning gavhar tutgan qoʻlini tishlab uzib yutadi.',
        significanceUz:
          'Koinot tarixida birinchi bor foniy inson va elf qizi Qorongʻulik Hukmdori taxtidan nurni tortib oladi.',
      },
      source: {
        bookSlug: 'silmarillion',
        chapterTitleUz: 'Beren va Lúthien haqida',
        chapterOriginal: 'Of Beren and Lúthien',
        chapterNumber: 19,
        pageNotesUz: 'Angband taxt zali va Carcharoth hamlasi.',
      },
    },
    {
      id: 'silmaril-stage-6',
      sequence: 6,
      titleUz: 'Carcharoth Ovi, Mandos Rahmati va Ikkinchi Foniy Hayot',
      locationNameUz: 'Tol Galen (Yashil Orol) / Brethil',
      locationNameOriginal: 'Tol Galen / Brethil',
      region: 'beleriand',
      placeId: 'tol-galen',
      direction: 'return',
      coordinates: { x: 1620, y: 450 },
      coordinateResolution: {
        status: 'confirmed',
        notesUz: 'Janubiy Ossirianddagi Adurant daryosi oroli.',
      },
      dateUz: 'Birinchi davr 466–503',
      storyEvent: {
        titleUz: 'Buyuk ov, Berenning qayta tirilishi va Tol Galendagi sokinlik',
        descriptionUz:
          'Doriath oʻrmonlarida quturgan Carcharoth oʻldirilib, qornidan Silmaril olinadi. Beren va Huan jangda halok boʻladi. Lúthien Mandos huzurida motam qoʻshigʻini kuylagach, Manwë farmoni bilan ularga ikkinchi foniy hayot beriladi va ular Tol Galenda tinch umr kechiradilar.',
        significanceUz:
          'Inson va Elfning muqaddas ittifoqidan Dior, Elwing, Elros, Aragorn va Gondor shohlari silsilasi dunyoga keladi.',
      },
      source: {
        bookSlug: 'silmarillion',
        chapterTitleUz: 'Beren va Lúthien haqida',
        chapterOriginal: 'Of Beren and Lúthien',
        chapterNumber: 19,
        pageNotesUz: 'Tol Galendagi sokin hayot va Diorning tugʻilishi.',
      },
    },
  ],
};
