const fs = require('fs');
const path = require('path');

const booksDir = path.join(__dirname, '../src/content/books');

const newBooks = [
  {
    id: "the-book-of-lost-tales-1",
    title_uz: "Yoʻqolgan Qissalar Kitobi: 1-qism",
    title_original: "The Book of Lost Tales, Part One",
    aliases: [
      "The Book of Lost Tales 1",
      "BoLT 1",
      "HoME 1",
      "The History of Middle-earth: Volume 1"
    ],
    publication_year: 1983,
    publisher: "George Allen & Unwin",
    editor: "Christopher Tolkien",
    category: "textual_history",
    isbn: "978-0-04-823238-0",
    synopsis: "«The History of Middle-earth» (Oʻrta-yer Tarixi) turkumining birinchi jildi boʻlib, J.R.R. Tolkien 1916–1920-yillarda Birinchi Jahon urushi frontidan qaytgach yozgan Oʻrta-yer afsonalarining eng dastlabki qoʻlyozmalarini oʻz ichiga oladi. Asarda dengizchi Eriolning Tol Eressëa (Yolgʻiz Orol)dagi «Yoʻqolgan Oʻyin Koshonasi»ga kelishi va u yerdagi elflardan olam yaratilishi haqidagi qadimiy ertaklarni tinglashi tasvirlanadi.",
    cover_image: {
      src: "/images/books/the-book-of-lost-tales-1.webp",
      alt: "Yoʻqolgan Qissalar Kitobi 1-qism muqovasi",
      edition_title: "George Allen & Unwin 1983 First Edition (Archival Design)",
      publisher: "George Allen & Unwin",
      year: 1983,
      isbn: "978-0-04-823238-0",
      artist: "Christopher Tolkien (matnshunoslik loyihasi)",
      source: "Bibliografik arxiv dizayni (unverified authentic cover)"
    },
    key_themes: [
      "Mifologiyaning tugʻilishi va Angliya uchun maxsus afsonalar yaratish niyati",
      "Eriol/Ælfwine vositachi obrazi orqali oʻtmish bilan zamon rishtasi",
      "Valar, Melko va Daraxtlarning eng dastlabki ibtidoiy obrazlari",
      "Gondolinning qulashi va Birinchi Jahon urushi ruhiy jarohatlari"
    ],
    detailed_sections: [
      {
        title: "Tarixiy zamin: Somme jangi transheyalaridan chiqqan mifologiya",
        content: "J.R.R. Tolkien 1916-yilgi Somme jangida kasallanib (trench fever) Angliyaga qaytgach, kasalxona va harbiy lagerlarda «Yoʻqolgan Qissalar Kitobi»ni yozishga kirishgan. Tolkien oʻz vatani Angliya uchun boy qadimiy mifologiya (yunon, kelt yoki skandinav afsonalari kabi) yoʻqligidan afsuslanib, uni noldan yaratishga ahd qilgan edi. Ushbu qoʻlyozmalar Oʻrta-yer mifologiyasining barcha keyingi shakllari (Silmarillion, Uzuklar Hukmdori) uchun poydevor vazifasini oʻtadi."
      },
      {
        title: "Tuzilishi va asosiy boblari: Yoʻqolgan Oʻyin Koshonasidan Gondolingacha",
        content: "Kitob dengizchi Eriolning Tol Eressëaga suzib borishi va «Kortirion» shahridagi «Yoʻqolgan Oʻyin Koshonasi» (The Cottage of Lost Play) mehmoniga aylanishi bilan boshlanadi. Elflar unga olamning yaratilishi («Ainur Musiqasi»), Valarning Oʻrta-yerga tushishi («Valar Kelishi»), Valinorning zanjirband qilinishi va Ikki Daraxtning yaralishi haqidagi ilk rivoyatlarni soʻzlab beradilar. Ushbu jildning eng choʻqqi nuqtasi 1916–1917 yillarda yozilgan «Gondolinning Qulashi» (The Fall of Gondolin) boʻlib, u Tolkien yozgan eng birinchi haqiqiy Oʻrta-yer qissasi sanaladi."
      },
      {
        title: "Christopher Tolkienning matnshunoslik tadqiqoti",
        content: "Christopher Tolkien otasining bir necha qatlamli, qalamda oʻchirilgan va qayta yozilgan qoralamalarini oʻnlab yillar davomida sinchiklab oʻrganib, matnlar xronologiyasini tikladi. Har bir bob ortidan batafsil sharhlar, tahririy eslatmalar va qoralamalar oʻrtasidagi tafovutlar keltiriladi. Ushbu kitob orqali oʻquvchi muallif dahosining qanday shakllanganini, qahramonlar ismlari va tushunchalarining evolyutsiyasini bevosita kuzatishi mumkin."
      },
      {
        title: "Oʻzbek kitobxoni uchun ahamiyati va tarjima istiqbollari",
        content: "«Yoʻqolgan Qissalar Kitobi» Oʻrta-yerni chuqur oʻrganuvchi kitobxonlar uchun birlamchi manbadir. Undagi arxaik ingliz tili, qadimiy sheʼriy ohang va ramzlar oʻzbek tiliga oʻgirilganda qadimgi turkiy dostonlar (masalan, «Oʻgʻuznoma» va «Devonu lugʻotit turk») leksik boyligidan foydalanishni talab etadi. Asar hozircha oʻzbek tiliga toʻliq tarjima qilinmagan boʻlib, ilmiy nashr sifatida kelajakda tarjima qilinishi rejalashtirilmoqda."
      }
    ],
    uzbek_editions: [
      {
        title: "Yoʻqolgan Qissalar Kitobi: 1-qism",
        status: "untranslated",
        notes: "Oʻzbek tilida rasmiy nashr qilinmagan. Asarning matnshunoslik tabiati akademik izohlar bilan nashr etilishini talab qiladi."
      }
    ],
    translation_status_summary: "Hozircha oʻzbek tilida nashr qilinmagan. Filologik va ilmiy tarjima loyihasi talab etiladi."
  },
  {
    id: "the-book-of-lost-tales-2",
    title_uz: "Yoʻqolgan Qissalar Kitobi: 2-qism",
    title_original: "The Book of Lost Tales, Part Two",
    aliases: [
      "The Book of Lost Tales 2",
      "BoLT 2",
      "HoME 2",
      "The History of Middle-earth: Volume 2"
    ],
    publication_year: 1984,
    publisher: "George Allen & Unwin",
    editor: "Christopher Tolkien",
    category: "textual_history",
    isbn: "978-0-04-823265-6",
    synopsis: "«The History of Middle-earth» turkumining ikkinchi jildi boʻlib, unda Birinchi Davrning uchta buyuk fojiaviy eposining eng dastlabki toʻliq matnlari jamlangan: Beren va Lúthien (Tevildo Mushuklar Knyazi bilan ilk versiyasi), Túrin Turambar qissasi hamda Eärendilning buyuk dengiz safari.",
    cover_image: {
      src: "/images/books/the-book-of-lost-tales-2.webp",
      alt: "Yoʻqolgan Qissalar Kitobi 2-qism muqovasi",
      edition_title: "George Allen & Unwin 1984 First Edition (Archival Design)",
      publisher: "George Allen & Unwin",
      year: 1984,
      isbn: "978-0-04-823265-6",
      artist: "Christopher Tolkien (matnshunoslik loyihasi)",
      source: "Bibliografik arxiv dizayni (unverified authentic cover)"
    },
    key_themes: [
      "Beren va Tinúvielning ibtidoiy varianti va Tevildo bilan ertaknamo kurash",
      "Túrin Turambar va ajdaho Glorund (Glaurung) fojiasi",
      "Nauglafring (Mittilar Boʻyinbogʻi) va Doriathning qulashi",
      "Eärendilning yulduzli kemasi va anglo-sakson Éarendel afsonasi"
    ],
    detailed_sections: [
      {
        title: "Tarixiy kontekst: Qahramonlik dostonlarining shakllanishi",
        content: "1917–1920 yillarda yaratilgan ushbu qissalar Tolkienning mifologik olamining eng dramatik sahifalarini ochib beradi. Birinchi jild koʻproq kosmogoniya va xudolar haqida boʻlsa, ikkinchi jild toʻliq insonlar va elflarning fojiaviy qahramonliklariga bagʻishlangan. Unda qadimiy ertak unsurlari (masalan, Sauron oʻrnida bahaybat sehrgar mushuk Tevildoning boʻlishi) asta-sekin jiddiy va yuksak epik tragediyaga aylanib boradi."
      },
      {
        title: "Kitobning markaziy matnlari tahlili",
        content: "Ushbu jildda «Tinúviel Qissasi» (Tale of Tinúviel), «Turambar va Foalókë» (Turambar and the Foalókë), «Nauglafring» (The Nauglafring) hamda «Eärendelning Soʻnggi Safari» (The Tale of Eärendel) oʻrin olgan. Ayniqsa Turambar qissasi oʻzining qorongʻi fatalizmi va qadimiy fin «Kalevala» eposidagi Kullervo taqdiri bilan bevosita bogʻliqligi bilan ajralib turadi. Ushbu dastlabki versiyalar keyinchalik «Húrin Farzandlari» romaniga aylangan."
      },
      {
        title: "Matnshunoslik ahamiyati va sheʼriy parchalari",
        content: "Christopher Tolkien ushbu jildda otasining eng qadimgi alliteratsion sheʼriy tajribalarini va qoralamalardagi nomlar lugʻatini ham ilova qilgan. Kitob oxirida Eriolning kimligi, uning ingliz xalqining afsonaviy ajdodi Ælfwine bilan qanday birlashtirilgani va afsonalarning zamonaviy Angliya geografiyasi bilan bogʻlanish rejalari ochib beriladi."
      },
      {
        title: "Oʻzbek tilidagi ahamiyati",
        content: "Ushbu asar Tolkien ijodida fantastik ertakdan jiddiy falsafiy eposga oʻtish bosqichini oʻrganish uchun bebaho manbadir. Oʻzbek kitobxonlari uchun Tolkienning mifologik evolyutsiyasini, personajlarning qanday sayqallanganini koʻrsatuvchi muhim ilmiy boylik sanaladi."
      }
    ],
    uzbek_editions: [
      {
        title: "Yoʻqolgan Qissalar Kitobi: 2-qism",
        status: "untranslated",
        notes: "Oʻzbek tiliga tarjima qilinmagan. Maxsus akademik izohlar talab qiladi."
      }
    ],
    translation_status_summary: "Hozircha oʻzbek tilida nashr etilmagan. Ilmiy-tadqiqot nashri sifatida rejalashtirilgan."
  },
  {
    id: "morgoths-ring",
    title_uz: "Morgoth Halqasi",
    title_original: "Morgoth's Ring: The Later Silmarillion, Part One",
    aliases: [
      "Morgoths Ring",
      "HoME 10",
      "The History of Middle-earth: Volume 10"
    ],
    publication_year: 1993,
    publisher: "HarperCollins",
    editor: "Christopher Tolkien",
    category: "textual_history",
    isbn: "978-0-261-10300-9",
    synopsis: "«The History of Middle-earth» turkumining oʻninchi jildi boʻlib, Tolkien falsafasi va teologiyasining eng chuqur va muhim matnlarini oʻz ichiga oladi. Unda Sauron oʻz kuchini Yagona Uzukka joylaganidek, Morgoth butun Arda moddiy materiyasini oʻzining «halqasi»ga aylantirib buzgani haqidagi metafizik konsepsiya hamda inson oʻlimi va elf ruhiyati haqidagi «Athrabeth Finrod ah Andreth» asari keltirilgan.",
    cover_image: {
      src: "/images/books/morgoths-ring.webp",
      alt: "Morgoth Halqasi kitobi muqovasi",
      edition_title: "HarperCollins 1993 First Edition (Archival Design)",
      publisher: "HarperCollins",
      year: 1993,
      isbn: "978-0-261-10300-9",
      artist: "Christopher Tolkien (matnshunoslik loyihasi)",
      source: "Bibliografik arxiv dizayni (unverified authentic cover)"
    },
    key_themes: [
      "Morgothning Arda materiyasini zaharlashi (Arda Marred konsepsiyasi)",
      "Athrabeth Finrod ah Andreth: Inson oʻlimi va ilohiy najot bahsi",
      "Qadimgi Elflarning qonunlari va odatlari (Laws and Customs among the Eldar)",
      "Oʻrklarning kelib chiqishi va axloqiy muammolar (Myths Transformed)"
    ],
    detailed_sections: [
      {
        title: "Tarixiy va falsafiy ahamiyati: Tolkien teologiyasining choʻqqisi",
        content: "«Morgoth Halqasi» 1950-yillarda, «Uzuklar Hukmdori» nashr etilganidan soʻng Tolkien tomonidan yozilgan eng teran falsafiy matnlarni oʻz ichiga oladi. Kitobning bosh gʻoyasi shundan iboratki, agar Sauron oʻz qudratini kichik oltin Uzukka joylagan boʻlsa, Morgoth oʻzining ilohiy kuchini butun Arda moddiy olamiga – toshlar, suvlar, havo va barcha materiyaga singdirib yuborgan. Shu sababli dunyodagi har qanday materiyada yovuzlik va soʻlish moyilligi mavjud."
      },
      {
        title: "Athrabeth Finrod ah Andreth: Oʻlim va Najot dialogi",
        content: "Ushbu jildning eng buyuk yodgorligi Finrod Felagund va donishmand inson ayoli Andreth oʻrtasidagi «Athrabeth» (Bahs) dialogidir. Unda insoniyatning qadimgi gunohi, oʻlimning tabiatdagi oʻrni, elflarning dunyodan charchashi va Eru Ilúvatarning Olam ichiga inson qiyofasida kirib kelishi (Incarnation) haqidagi yashirin umid muhokama qilinadi. Bu Tolkien nasroniy eʼtiqodining legendarium bilan eng nozik va yuksak sintezidir."
      },
      {
        title: "Elflar qonunlari va reinkarnatsiya masalalari",
        content: "Kitobda «Laws and Customs among the Eldar» (L&COE) boʻlimi oʻrin olgan boʻlib, unda elflarning nikohi, farzand koʻrishi, tana (Hröa) va ruh (Fëa) munosabatlari hamda Finwë va Míriel fojiasi chuqur tahlil qilinadi. Shuningdek, «Myths Transformed» (Oʻzgargan Afsonalar) boʻlimida Tolkien Quyosh va Oyni daraxtlardan emas, balki dunyo yaratilishidanoq mavjud boʻlgan yulduzlar sifatida qayta loyihalashtirishga uringan ilmiy qoralamalari keltiriladi."
      },
      {
        title: "Oʻzbekistonda oʻrganilishi va tarjima istiqboli",
        content: "«Morgoth Halqasi» adabiyotshunoslar, faylasuflar va teologlar uchun tengsiz manbadir. Asar oʻzbek tilida Tolkien olamining axloqiy va ruhiy qonuniyatlarini tushunish uchun nihoyatda zarur boʻlib, kelajakda toʻliq tarjima qilinishi lozim boʻlgan fundamental matnlardan biridir."
      }
    ],
    uzbek_editions: [
      {
        title: "Morgoth Halqasi",
        status: "untranslated",
        notes: "Oʻzbek tiliga tarjima qilinmagan. Yuksak falsafiy va teologik terminologiyani talab qiladi."
      }
    ],
    translation_status_summary: "Oʻzbek tiliga tarjima qilinmagan. Maxsus falsafiy va mifologik izohlar bilan nashr etilishi tavsiya etiladi."
  },
  {
    id: "the-war-of-the-jewels",
    title_uz: "Javohirlar Urushi",
    title_original: "The War of the Jewels: The Later Silmarillion, Part Two",
    aliases: [
      "The War of the Jewels",
      "HoME 11",
      "The History of Middle-earth: Volume 11"
    ],
    publication_year: 1994,
    publisher: "HarperCollins",
    editor: "Christopher Tolkien",
    category: "textual_history",
    isbn: "978-0-261-10324-5",
    synopsis: "«The History of Middle-earth» turkumining oʻn birinchi jildi boʻlib, «Morgoth Halqasi»ning bevosita davomidir. Unda Belerianddagi voqealar yilnomasi boʻlgan «Kulrang Solnomalar» (The Grey Annals), Húrinning asirlikdan keyingi sarson-sargardonligi («The Wanderings of Húrin») hamda elflar tillari va qabilalari tasnifi («Quendi and Eldar») oʻrin olgan.",
    cover_image: {
      src: "/images/books/the-war-of-the-jewels.webp",
      alt: "Javohirlar Urushi kitobi muqovasi",
      edition_title: "HarperCollins 1994 First Edition (Archival Design)",
      publisher: "HarperCollins",
      year: 1994,
      isbn: "978-0-261-10324-5",
      artist: "Christopher Tolkien (matnshunoslik loyihasi)",
      source: "Bibliografik arxiv dizayni (unverified authentic cover)"
    },
    key_themes: [
      "Beleriandning qonli yilnomasi: Kulrang Solnomalar (The Grey Annals)",
      "Húrinning sarsonligi va Brethil insonlari fojiasi",
      "Quendi and Eldar: Elflar etimologiyasi va lingvistik tasnifi",
      "Noldorning Oʻrta-yerdagi soʻnggi qarshilik harakatlari"
    ],
    detailed_sections: [
      {
        title: "Tarixiy va nashr konteksti",
        content: "1994-yilda chop etilgan ushbu jild 1950-yillardan keyingi «Quenta Silmarillion»ning ikkinchi qismini toʻliq qamrab oladi. Christopher Tolkien otasining nashr etilgan «Silmarillion» kitobiga kirmay qolgan yoki qisqartirilgan eng muhim tarixiy tafsilotlarini ommaga taqdim etgan. Ayniqsa Beleriand urushlarining xronologiyasi bu jildda nihoyatda aniq va batafsil berilgan."
      },
      {
        title: "Húrinning sarsonligi: Silmarillionning yetishmayotgan sahifalari",
        content: "Ushbu jilddagi eng hayratlanarli adabiy matn «The Wanderings of Húrin» (Húrinning Sargardonligi) hisoblanadi. Unda Morgoth tomonidan ozod qilingan qari Húrinning Brethil oʻrmoniga kelishi, Haleth xalqi oʻrtasidagi fuqarolar urushi va sud majlisi tasvirlangan. Bu matn Tolkien yozgan eng realistik, shafqatsiz va fojiaviy dramalardan biri boʻlib, inson psixologiyasini nihoyatda nozik ochib beradi."
      },
      {
        title: "Quendi and Eldar: Filologik xazina",
        content: "Kitobning ikkinchi yarmida joylashgan «Quendi and Eldar» inshosi Tolkienning eng buyuk lingvistik merosidir. Unda elflarning barcha tarmoqlari – Vanyar, Noldor, Teleri, Sindar, Nandor, Avari qabilalarining nomlari va ularning tillaridagi fonetik farqlar qatʼiy filologik dalillar bilan tushuntiriladi. Bu matn Oʻrta-yer tillarini oʻrganuvchi barcha tadqiqotchilar uchun bosh qoʻllanmadir."
      },
      {
        title: "Oʻzbek tilidagi ahamiyati",
        content: "«Javohirlar Urushi» asari Oʻrta-yer tarixi bilan jiddiy shugʻullanuvchi kitobxonlarga Beleriand xaritasidagi har bir vodiy va qalʼaning tirik qonli tarixini koʻrsatadi. Ushbu asar oʻzbek adabiy muhitida epik janrni boyitishda muhim tajriba maktabi boʻla oladi."
      }
    ],
    uzbek_editions: [
      {
        title: "Javohirlar Urushi",
        status: "untranslated",
        notes: "Oʻzbek tiliga tarjima qilinmagan. Matnshunoslik va filologik izohlarni talab qiladi."
      }
    ],
    translation_status_summary: "Oʻzbek tilida nashr qilinmagan. Kelgusida akademik tarjima loyihasi doirasida amalga oshirilishi kutilmoqda."
  },
  {
    id: "the-peoples-of-middle-earth",
    title_uz: "Oʻrta-yer Xalqlari",
    title_original: "The Peoples of Middle-earth",
    aliases: [
      "The Peoples of Middle-earth",
      "HoME 12",
      "The History of Middle-earth: Volume 12"
    ],
    publication_year: 1996,
    publisher: "HarperCollins",
    editor: "Christopher Tolkien",
    category: "textual_history",
    isbn: "978-0-261-10348-1",
    synopsis: "«The History of Middle-earth» turkumining yakuniy, oʻn ikkinchi jildi boʻlib, unda «Uzuklar Hukmdori» kitobining mashhur Ilovalari (Appendices) tarixi, tillar va alifbolar evolyutsiyasi, Fëanorning shajarasi va tili haqidagi «The Shibboleth of Fëanor», shuningdek Tolkien hayotining soʻnggi yillarida yozilgan qoralamalari hamda tugallanmay qolgan «The New Shadow» (Yangi Soya) romani jamlangan.",
    cover_image: {
      src: "/images/books/the-peoples-of-middle-earth.webp",
      alt: "Oʻrta-yer Xalqlari kitobi muqovasi",
      edition_title: "HarperCollins 1996 First Edition (Archival Design)",
      publisher: "HarperCollins",
      year: 1996,
      isbn: "978-0-261-10348-1",
      artist: "Christopher Tolkien (matnshunoslik loyihasi)",
      source: "Bibliografik arxiv dizayni (unverified authentic cover)"
    },
    key_themes: [
      "Uzuklar Hukmdori Ilovalarining yaratilish tarixi va shajaralar",
      "The Shibboleth of Fëanor: Ismlar, tillar va Noldor siyosiy ixtiloflari",
      "Tolkienning soʻnggi yozuvlari: Glorfindel, Círdan va Besh Sehrgar kelib chiqishi",
      "The New Shadow: Toʻrtinchi Davrda insonlar qalbida qayta uygʻongan yovuzlik"
    ],
    detailed_sections: [
      {
        title: "Tarixiy zamin va oʻn ikki jildlik mehnati intihosi",
        content: "1996-yilda chop etilgan «Oʻrta-yer Xalqlari» Christopher Tolkienning deyarli chorak asr davom etgan mislsiz tahririy va matnshunoslik mehnati – 12 jildlik «The History of Middle-earth» turkumini muvaffaqiyatli yakunladi. Kitob «Uzuklar Hukmdori» asarining tarixiy asoslarini va uning ortidagi ulkan arxiv qatlamlarini toʻliq ochib beradi."
      },
      {
        title: "The Shibboleth of Fëanor va Noldor ijtimoiy nizolari",
        content: "Asardagi eng mashhur insho «The Shibboleth of Fëanor» boʻlib, unda Quenya tilidagi «th» tovushining «s»ga oʻzgarishi Noldor shahzodalari oʻrtasida qanday qilib qonli siyosiy nizo va gʻurur masalasiga aylangani koʻrsatiladi. Fëanor bu tovushni oʻzgartirishdan bosh tortib, uni onasi Míriel xotirasiga sadoqat deb bilgan. Shuningdek, ushbu inshoda Galadrielning kelib chiqishi va uning Boqiy Gʻarbdan ketishi sabablari batafsil tahlil qilinadi."
      },
      {
        title: "The New Shadow: Toʻrtinchi Davrning dahshatli ogohlantirishi",
        content: "Kitobning eng eʼtiborli qismlaridan biri Tolkien shoh Elessar vafotidan keyin, qirol Eldarion davridagi Gondor haqida boshlagan «The New Shadow» (Yangi Soya) romanining ilk bobidir. Unda insonlar Sauron va urushlarni unutib, yashirin qora ibodatxonalarga sigʻina boshlagani tasvirlanadi. Tolkien ushbu asarni davom ettirishdan bosh tortgan, chunki u insoniyatning tinchlik davridagi chirishi va yovuzlikka qaytishi haddan ziyod tushkun va qaygʻuli mavzu ekanini his qilgan edi."
      },
      {
        title: "Oʻzbek kitobxoni uchun ahamiyati",
        content: "Bu kitob Oʻrta-yerning faqat ertak emas, balki real insoniy psixologiya, jamiyat qonuniyatlari va sivilizatsiyalar inqirozi haqidagi chuqur falsafiy epos ekanini isbotlovchi yakuniy asardir. U oʻzbek adabiyotidagi epik tafakkurni rivojlantirish uchun qimmatli ilmiy manbadir."
      }
    ],
    uzbek_editions: [
      {
        title: "Oʻrta-yer Xalqlari",
        status: "untranslated",
        notes: "Oʻzbek tiliga tarjima qilinmagan. Keng qamrovli tarixiy va tilshunoslik izohlari talab etiladi."
      }
    ],
    translation_status_summary: "Oʻzbek tilida nashr etilmagan. Ilmiy-tadqiqot nashri doirasida rejalashtirilgan."
  },
  {
    id: "letters-from-father-christmas",
    title_uz: "Qorbobodan Xatlar",
    title_original: "The Father Christmas Letters",
    aliases: [
      "Letters from Father Christmas",
      "Father Christmas Letters",
      "Qorbobo Maktublari"
    ],
    publication_year: 1976,
    publisher: "George Allen & Unwin",
    editor: "Baillie Tolkien",
    category: "primary_lifetime",
    isbn: "978-0-04-823130-7",
    synopsis: "J.R.R. Tolkien tomonidan 1920-yildan 1943-yilgacha har yili Rojdestvo bayramida oʻz farzandlari (John, Michael, Christopher va Priscilla) uchun yozilgan va shaxsan oʻzi rangli rasmlar bilan bezagan moʻjizaviy xatlar toʻplami. Xatlar Shimoliy Qutbdan, Qorbobo va uning beparvo, ammo sadoqatli yordamchisi Shimoliy Qutb Ayigʻi (North Polar Bear) nomidan yozilgan.",
    cover_image: {
      src: "/images/books/letters-from-father-christmas.webp",
      alt: "Qorbobodan Xatlar kitobi muqovasi",
      edition_title: "George Allen & Unwin 1976 First Edition (Archival Design)",
      publisher: "George Allen & Unwin",
      year: 1976,
      isbn: "978-0-04-823130-7",
      artist: "J.R.R. Tolkien (original illyustratsiyalar) / Baillie Tolkien tahriri",
      source: "Bibliografik arxiv dizayni (unverified authentic cover)"
    },
    key_themes: [
      "Oila mehri va bolalik moʻjizalarini asrash sanʼati",
      "Shimoliy Qutb Ayigʻining kulgili sarguzashtlari va Qutb goblinlari bilan urush",
      "Tolkienning rassomlik va kalligrafiya mahorati",
      "Ikkinchi Jahon urushi yillaridagi bolalarga taskin va umid"
    ],
    detailed_sections: [
      {
        title: "Yaratilish tarixi: Yigirma uch yillik ota mehri",
        content: "1920-yilda Tolkienning toʻngʻich oʻgʻli John uch yoshga toʻlganida, ularning Oksforddagi uyiga qor bosgan va Shimoliy Qutb pochtasi tamgʻasi qoʻyilgan birinchi maktub kelib tushdi. Keyingi yigirma uch yil davomida, to kenja qizi Priscilla ulgʻayguncha, Tolkien har dekabr oyida qaltiroq qoʻl yozuvi bilan (Qorboboning qari ekanini koʻrsatish uchun) xatlar yozdi, maxsus qutb markalari chizdi va xatlarni deraza tokchasiga yoki kamin yoniga yashirib qoʻydi. Bu xatlar Tolkien shaxsiyatining eng samimiy va mehribon ota sifatidagi qirrasini namoyon etadi."
      },
      {
        title: "Qahramonlar va syujet chiziqlari: Karpathu va Qutb Ayigʻi",
        content: "Maktublarning bosh qahramonlari – donishmand va charchagan Qorbobo, uning doimiy koʻngilsizliklarga uchrab turuvchi yordamchisi Karhu (Shimoliy Qutb Ayigʻi), uning jiyanlari Paksu va Valkotukka hamda Qorboboning elfi Ilberethdir. Xatlarda Qutb Ayigʻining Shimoliy qutb oʻqini sindirib qoʻyishi, Oydan tushgan odam bilan uchrashuvlar va qor ostidagi yerosti gʻorlarida yashovchi yovuz goblinlar (Goblins) bilan boʻlgan janglar hayajonli va oʻynoqi hazil bilan tasvirlanadi."
      },
      {
        title: "Rassomlik va kalligrafiya sanʼati",
        content: "Tolkien ushbu xatlarni oʻzining rang-barang akvarel rasmlari bilan boyitgan. Qorboboning saroyi, Shimol Yogʻdusi, muz qasrlari va gʻor rasmlari shunchalik mukammal chizilganki, ular Tolkienning nafaqat buyuk yozuvchi, balki iqtidorli illyustrator boʻlganini ham isbotlaydi. Shuningdek, maktublarda qutb ayigʻi tili va uning maxsus runik alifbosi ham uchraydi, bu esa filolog Tolkienning oʻz farzandlari bilan oʻynagan sevimli til oʻyinlari edi."
      },
      {
        title: "Oʻzbek oilaviy kitobxonligi uchun ahamiyati",
        content: "«Qorbobodan Xatlar» kitobi oʻzbek bolalari va ota-onalari uchun mehr-oqibat, oilaviy bayramlar va tasavvur olamini rivojlantirishda tengsiz namunadir. Ushbu asarni oʻzbek tiliga tarjima qilish va asl rasmlari bilan nashr etish oʻzbek bolalar adabiyotini jahon durdonasi bilan boyitgan boʻlardi."
      }
    ],
    uzbek_editions: [
      {
        title: "Qorbobodan Xatlar",
        status: "untranslated",
        notes: "Oʻzbek tiliga tarjima qilinmagan. Bolalar va oilaviy oʻqish uchun ajoyib nomzod."
      }
    ],
    translation_status_summary: "Oʻzbek tilida nashr etilmagan. Rangli illyustratsiyali bolalar nashri sifatida tavsiya etiladi."
  },
  {
    id: "beowulf-a-translation-and-commentary",
    title_uz: "Beowulf: Tarjima va Izohlar",
    title_original: "Beowulf: A Translation and Commentary",
    aliases: [
      "Beowulf Translation",
      "Tolkien Beowulf",
      "Beowulf: Tarjima va Sharhlar"
    ],
    publication_year: 2014,
    publisher: "HarperCollins",
    editor: "Christopher Tolkien",
    category: "letters_academic",
    isbn: "978-0-00-759006-3",
    synopsis: "J.R.R. Tolkien 1926-yilda yozib tugatgan, ammo hayotligida nashr etishga jurʼat etmagan qadimgi ingliz (anglo-sakson) epik dostoni «Beowulf»ning nasriy tarjimasi va Oksforddagi keng qamrovli akademik maʼruzalari toʻplami. Kitobga shuningdek Tolkienning doston syujetidan ilhomlanib yozgan «Sellic Spell» ertagi hamda «The Lay of Beowulf» sheʼrlari ilova qilingan.",
    cover_image: {
      src: "/images/books/beowulf-a-translation-and-commentary.webp",
      alt: "Beowulf: Tarjima va Izohlar kitobi muqovasi",
      edition_title: "HarperCollins 2014 First Edition (Archival Design)",
      publisher: "HarperCollins",
      year: 2014,
      isbn: "978-0-00-759006-3",
      artist: "Christopher Tolkien tahriri / HarperCollins",
      source: "Bibliografik arxiv dizayni (unverified authentic cover)"
    },
    key_themes: [
      "Qadimgi ingliz alliteratsion eposini nasriy ingliz tiliga aniq tarjima qilish sanʼati",
      "Grendel, uning onasi va olovli ajdaho obrazlarining filologik tahlili",
      "Shimoliy jasorat (Northern courage) va nasroniylik bilan butparastlik sintezi",
      "«Sellic Spell»: Xalq ertaklari arxetiplarining rekonstruksiyasi"
    ],
    detailed_sections: [
      {
        title: "Tarixiy zamin: 1926-yilgi qoʻlyozmaning kashf etilishi",
        content: "Tolkien Oksfordda anglo-sakson tili Rawlinson and Bosworth professori etib tayinlanganidan soʻng, 1926-yilda «Beowulf»ni qadimgi ingliz tilidan zamonaviy nasriy ingliz tiliga toʻliq tarjima qilgan edi. U ushbu tarjimani talabalarga dars berishda maʼruzalar asosi sifatida qoʻllagan, ammo oʻzining haddan tashqari talabchanligi sababli uni hayotligida chop ettirmagan. Faqat 2014-yilda, Christopher Tolkien otasining qoʻlyozmalarini toʻplab, batafsil izohlar bilan nashrga tayyorladi."
      },
      {
        title: "Filologik metod va tarjima xususiyatlari",
        content: "Tolkien dostonni soxta arxaizmlar bilan toʻldirmasdan, qadimgi german alliteratsion ritmini, metrikasini va har bir soʻzning chuqur semantikasini saqlab qolishga uringan. Uning doston boʻyicha yozgan izohlari shunchaki tilshunoslik emas, balki qadimgi Skandinaviya va Angliya xalqlarining urf-odatlari, qurol-yarogʻlari, shohlik qasamlari va eʼtiqodlari haqidagi qomusiy tadqiqotdir."
      },
      {
        title: "«Sellic Spell» va «The Lay of Beowulf»",
        content: "Kitobning ikkinchi qismida Tolkienning oʻziga xos ijodiy tajribasi – «Sellic Spell» (Gʻaroyib Ertak) oʻrin olgan. Unda Tolkien «Beowulf» dostonining ortida turgan qadimgi xalqona ertak shaklini (Ayiq oʻgʻli haqidagi ertak arxetipini) tiklashga uringan. Bu ertak Tolkienning filologiya va badiiy ijodni qanday qilib yagona moʻjizaga birlashtira olganini koʻrsatuvchi ajoyib durdonadir."
      },
      {
        title: "Oʻzbek filologiyasi uchun ahamiyati",
        content: "«Beowulf» dostoni jahon adabiyotining eng ulugʻ poydevorlaridan biri sanaladi. Tolkien tarjimasi va sharhlari oʻzbek olimlari va tarjimonlariga qadimgi turkiy eposlarni (masalan, «Alpomish», «Goʻroʻgʻli») zamonaviy tillarga tarjima qilishda va ilmiy sharhlashda yuksak metodologik andoza boʻlib xizmat qiladi."
      }
    ],
    uzbek_editions: [
      {
        title: "Beowulf: Tarjima va Izohlar",
        status: "untranslated",
        notes: "Oʻzbek tiliga tarjima qilinmagan. Filologik va qadimgi eposlar boʻyicha mutaxassislar tarjimasi talab etiladi."
      }
    ],
    translation_status_summary: "Oʻzbek tilida nashr qilinmagan. Ilmiy va universitet darajasidagi akademik tarjima talab etiladi."
  },
  {
    id: "jrr-tolkien-a-biography",
    title_uz: "J.R.R. Tolkien: Biografiya",
    title_original: "J.R.R. Tolkien: A Biography",
    aliases: [
      "Carpenter Tolkien Biography",
      "Humphrey Carpenter Biography",
      "J.R.R. Tolkien Hayoti"
    ],
    publication_year: 1977,
    publisher: "George Allen & Unwin",
    editor: "Humphrey Carpenter",
    category: "letters_academic",
    isbn: "978-0-04-928037-3",
    synopsis: "Britaniyalik taniqli yozuvchi va biogrif Humphrey Carpenter tomonidan yozilgan J.R.R. Tolkienning yagona rasmiy (authorized) tarjimai holi. Kitob Tolkienlar oilasining toʻliq roziligi bilan, yozuvchining shaxsiy maktublari, kundaliklari, qoralamalari hamda uning doʻstlari (xususan Inklings aʼzolari) va oila aʼzolari bilan bevosita suhbatlar asosida yaratilgan fundamental asardir.",
    cover_image: {
      src: "/images/books/jrr-tolkien-a-biography.webp",
      alt: "J.R.R. Tolkien Biografiyasi kitobi muqovasi",
      edition_title: "George Allen & Unwin 1977 First Edition (Archival Design)",
      publisher: "George Allen & Unwin",
      year: 1977,
      isbn: "978-0-04-928037-3",
      artist: "Humphrey Carpenter / George Allen & Unwin",
      source: "Bibliografik arxiv dizayni (unverified authentic cover)"
    },
    key_themes: [
      "Bloemfontein bolaligi, Sarehole tegirmoni va yetimlik yillari",
      "Edith Bratt bilan buyuk sevgi: Beren va Lúthien ilhomi",
      "Birinchi Jahon urushi va T.C.B.S. toʻgaragi doʻstlarining halokati",
      "Oksford yillari, Inklings doʻstona davrasi va C.S. Lewis bilan birodarlik"
    ],
    detailed_sections: [
      {
        title: "Tarixiy zamin va rasmiy biografiya maqomi",
        content: "1973-yilda Tolkien vafot etgach, uning noshiri Rayner Unwin va oʻgʻli Christopher Tolkien adibning hayoti haqida xolis, aniq va ishonchli biografiya yaratish zarurligini angladilar. Ushbu vazifa yosh olim va BBC jurnalisti Humphrey Carpenterga ishonib topshirildi. Carpenterga Tolkienning barcha shaxsiy arxivi, yoshlik kundaliklari va oilaviy yozishmalari toʻliq ochib berildi. 1977-yilda chiqqan ushbu kitob to bugungi kungacha Tolkienshunoslikning (Tolkien Studies) eng nufuzli biografik manbasi boʻlib qolmoqda."
      },
      {
        title: "Bolalik, yetimlik va Edith Bratt bilan sevgi",
        content: "Biografiyada Tolkienning Janubiy Afrikada tugʻilishi, toʻrt yoshida otasidan, oʻn ikki yoshida onasi Mabel Tolkiendan ayrilib yetim qolishi va katolik ruhoniysi Frantsisk Morgan homiyligida tarbiyalanishi taʼsirli tasvirlanadi. Birminghamda u oʻzining boʻlgʻusi rafiqasi Edith Brattni uchratdi. Katolik eʼtiqodi sababli ruhoniy unga 21 yoshgacha Edith bilan koʻrishishni va xat yozishni qatʼiyan taqiqladi; Tolkien bu vaʼdaga soʻzsiz rioya qilib, 21 yoshga toʻlgan kuniyoq Edithga turmush qurish taklifini yubordi. Ushbu sevgi keyinchalik Beren va Lúthien afsonasiga asos boʻldi."
      },
      {
        title: "T.C.B.S., Somme fojiasi va Inklings davrasi",
        content: "Kitobda Tolkienning maktabdosh doʻstlari bilan tuzgan «T.C.B.S.» (Tea Club and Barrovian Society) toʻgaragi va ularning barchasini parchalab tashlagan Birinchi Jahon urushining fojiaviy zarbasi haqqoniy ochib berilgan. Somme jangida eng yaqin doʻstlari Rob Gilson va G.B. Smith halok boʻldilar. Oksfordga qaytgach, Tolkien C.S. Lewis bilan doʻstlashib, mashhur «Inklings» adabiy klubiga asos soldi; ushbu klubning «The Eagle and Child» pabidagi haftalik uchrashuvlarida «Hobbit», «Uzuklar Hukmdori» va «Narniya Saltanati»ning ilk boblari ovoz chiqarib oʻqilgan."
      },
      {
        title: "Oʻzbek adabiy muhiti uchun ahamiyati",
        content: "Humphrey Carpenterning ushbu biografiyasi oʻzbek adabiyot ixlosmandlari uchun J.R.R. Tolkien shaxsiyatini, uning xristian eʼtiqodini, filologik dahosini va kamtarona professorlik hayotini yaxlit tasavvur qilish uchun eng zarur kitobdir. U shunchaki fantast yozuvchi haqida emas, balki qiyinchiliklarga qaramay oʻz ijodiy orzusiga sodiq qolgan buyuk insonning hayot sabogʻidir."
      }
    ],
    uzbek_editions: [
      {
        title: "J.R.R. Tolkien: Biografiya",
        status: "untranslated",
        notes: "Oʻzbek tiliga tarjima qilinmagan. Yozuvchining hayotiy va adabiy yoʻlini yorituvchi bosh manba."
      }
    ],
    translation_status_summary: "Hozircha oʻzbek tilida nashr etilmagan. Tarjimai hol asari sifatida keng kitobxonlar ommasi uchun tavsiya etiladi."
  }
];

for (const book of newBooks) {
  const filePath = path.join(booksDir, `${book.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(book, null, 2), 'utf8');
  console.log(`Created new book: ${filePath}`);
}
