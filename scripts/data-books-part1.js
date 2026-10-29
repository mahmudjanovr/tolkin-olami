// scripts/data-books-part1.js — Birlamchi kanonik va yirik legendarium asarlari (13 ta kitob)

export const BOOKS_PART_1 = [
  {
    id: "the-hobbit",
    title_uz: "Hobbit: Yoxud Borgan va Qaytgan Sayohat",
    title_original: "The Hobbit, or There and Back Again",
    aliases: [
      "Hobbit",
      "There and Back Again",
      "U Yoqqa va Qaytish",
      "Borgan va Qaytgan",
      "Hobbit: Borgan va Qaytgan Sayohat"
    ],
    publication_year: 1937,
    publisher: "George Allen & Unwin",
    category: "primary_lifetime",
    isbn: "978-0-261-10221-7",
    cover_image: {
      src: "/images/books/the-hobbit.webp",
      alt: "Hobbit birinchi nashri muqovasi (1937) — J.R.R. Tolkienning oʻz chizmasi asosidagi Yolgʻiz Togʻ va ajdarlar tasviri",
      edition_title: "First Edition (George Allen & Unwin, 1937)",
      publisher: "George Allen & Unwin",
      year: 1937,
      isbn: "978-0-261-10221-7",
      artist: "J.R.R. Tolkien",
      source: "Open Library (ID 14627509) / British Library"
    },
    synopsis: "«Hobbit: Yoxud Borgan va Qaytgan Sayohat» — J.R.R. Tolkien qalamiga mansub, jahon bolalar va fentezi adabiyotining durdonasi hisoblangan epik qissa. Unda Shiredagi Bag End tepaligida osoyishta, mehmondoʻst va xavf-xatarlardan yiroq umr kechirayotgan Bilbo Baggins ismli hobbitning sehrgar Gandalf va Thorin Oakenshield boshchiligidagi oʻn uch mitti hamrohligida amalga oshirgan xatarli safari hikoya qilinadi. Mittilar oʻzlarining qadimiy ajdodlar mulki boʻlmish Erebor (Yolgʻiz Togʻ) saltanatini va u yerdagi son-sanoqsiz xazinalarni shafqatsiz olov purkovchi ajdar Smaug changalidan qutqarishga bel bogʻlaydilar. Sayohat davomida Bilbo oʻzining yashirin jasorati, chaqqon aqli va matonatini namoyon etadi; Qorongʻu Oʻrmon, Tumanli Togʻlar, Elflar saroyi hamda Koʻl Shahri boʻylab kechgan sinovlarda chinakam qahramonga aylanadi. Eng muhimi, Tumanli Togʻlar qaʼridagi zax gʻorda u sirli maxluq Gollum bilan topishmoq aytishib, keyinchalik butun Oʻrta-yer taqdirini hal qiluvchi Yagona Uzukni topib oladi.",
    detailed_sections: [
      {
        title: "Yaratilish Tarixi va Ilk Nashr Jarayoni",
        content: "1930-yillarning boshida Oksford universitetida ingliz tili va adabiyoti professori boʻlib ishlayotgan J.R.R. Tolkien talabalarning yozgi imtihon insholarini tekshirib oʻtirgan edi. Charchoq va zerikish paytida u boʻsh qolgan imtihon varagʻiga bexosdan bir jumlani yozib qoʻyadi: «In a hole in the ground there lived a hobbit» («Yerdagi chuqurda bir hobbit yashar edi»). Keyinchalik Tolkien nima uchun bu soʻzni yozganini bilmasligini, aynan oʻsha jumboqli «hobbit» kimligini va qanday chuqurda yashashini oʻrganish istagi ushbu mashhur asarning tugʻilishiga sabab boʻlganini taʼkidlagan.\n\nTolkien ushbu ertakni dastlab oʻz farzandlari — John, Michael va Christopher uchun qishki oqshomlarda oʻqib berish maqsadida yozgan. Qoʻlyozma doʻstlari davrasida, xususan C.S. Lewis va Inklings adabiy toʻgaragi aʼzolari orasida qoʻlma-qoʻl boʻlib oʻqilgan. 1936-yilda nashriyot xodimi Susan Dagnall qoʻlyozma bilan tanishib, uni George Allen & Unwin nashriyoti rahbari Stanley Unwinga tavsiya qiladi. Sir Stanley qoʻlyozmani oʻzining 10 yoshli oʻgʻli Rayner Unwinga oʻqish va taqriz yozish uchun beradi. Kichik Rayner asarni bir nafasda oʻqib chiqib: «Bu kitob barcha 5 yoshdan 9 yoshgacha boʻlgan bolalarga yoqadi», deya ijobiy baho beradi. Shu tariqa, 1937-yil 21-sentabrda kitob 1500 nusxada ilk bor nashr etiladi va bir necha oy ichida toʻliq sotilib ketadi."
      },
      {
        title: "Syujet Chizigʻi va Geografik Marshrut",
        content: "Qissaning geografik xaritasi Shirening yam-yashil vodiylaridan boshlanib, sharqiy Oʻrta-yerning yovvoyi hududlariga tomon choʻziladi. Bilbo va mittilarning yoʻli dastlab uch troll — Tom, Bert va Bill bilan toʻqnashuvdan oʻtadi; Gandalfning tadbirkorligi tufayli trollar tonggi quyosh nurlarida toshga aylanadi va qahramonlar trollar gʻoridan mashhur elf qilichlari Glamdring va Orcristni, Bilbo esa oʻzining kichik xanjari Stingni (Nish) topib oladi.\n\nRivendellda Elrond ularga oydin tunlarda koʻrinadigan «oy runalari» sirini ochib beradi. Tumanli Togʻlardan oshib oʻtishda ular boʻron va tosh bahodirlari toʻqnashuviga, soʻngra orklar (goblinlar) pistirmasiga duch keladilar. Aynan shu yerda Bilbo adashib qolib, yerosti koʻlida Gollum bilan uchrashadi va Yagona Uzukni oʻzlashtiradi. Beornning ayiq qiyofasidagi maskanida dam olgan sayohatchilar dahshatli va sehrli Mirkwood (Qorongʻu Oʻrmon) orqali yoʻl oladilar; u yerda bahaybat oʻrgimchaklar va Oʻrmon elflari qiroli Thranduil asirligidan sharob bochkalari ichiga yashirinib qochadilar. Esgaroth (Koʻl Shahri) xalqining koʻmagida Yolgʻiz Togʻga yetib kelgan Bilbo sirli yashirin eshik orqali Smaug saroyiga kiradi. Smaugning Koʻl Shahri tomon hujumi va Kamonchi Bard tomonidan qora kamon oʻqi bilan halok etilishi ortidan qissaning kulminatsiyasi — Mittilar, Elflar, Insonlar, Orklar hamda Varglar oʻrtasidagi Besh Armiya Jangi yuz beradi."
      },
      {
        title: "Bosh Qahramonlar va Xarakterlar Dinamikasi",
        content: "Bilbo Baggins timsolida Tolkien oddiy, zamonaviy burjua insonining (ayniqsa Viktoriya va Edvard davri ingliz qishloq fuqarosining) arxetipik qiyofasini yaratgan. U qulay kreslo, issiq choy va ikkinchi nonushtani xush koʻradi, ammo uning vujudida Took sulolasidan meros qolgan jasorat va sarguzashtga moyillik uxlab yotadi. Sayohat davomida u passiv yuk boʻlishdan jamoaning eng topqir va dadil najotkoriga aylanadi.\n\nThorin Oakenshield — buyuk ajdodlarining shon-shuhrati va taxtini qaytarish orzusida yonayotgan, magʻrur va qatʼiyatli hukmdor. Biroq togʻ boyliklari, xususan Arkenstone (Togʻ Yuragi) javohiriga boʻlgan mehr uning aqlini xiralashtirib, «ajdarlar kasalligi»ga chalinishiga olib keladi. Faqat oʻlim toʻshagida u Bilboga: «Agar dunyoda toʻplangan oltindan koʻra taom, quvonch va qoʻshiqni koʻproq qadrlaganimizda, bu yer ancha saodatli maskan boʻlardi», deya iqror boʻladi. Sehrgar Gandalf esa voqealarni parda ortidan boshqaruvchi donishmand hidoyatchi sifatida maydonga chiqadi."
      },
      {
        title: "1951-yilgi Tahrir va Uzuklar Hukmdoriga Bogʻlanish",
        content: "Dastlabki 1937-yilgi birinchi nashrda Gollum va Bilboning uchrashuvi ancha doʻstona tusda bayon etilgan edi. Unda Gollum topishmoq aytishuvida yutqazib qoʻygach, Bilboga uzukni xotirjamlik bilan sovgʻa qilishni taklif qiladi va uzuk yoʻqolganini bilgach, uzr soʻrab uni gʻordan olib chiqib qoʻyadi. Biroq Tolkien keyinchalik «Uzuklar Hukmdori» ustida ishlay boshlagach, Yagona Uzukning yovuz tabiatini hisobga olgan holda bu epizod nomutanosib ekanini anglaydi.\n\n1951-yilda Tolkien beshinchi bobni («Qorongʻulikdagi Topishmoqlar») tubdan qayta yozadi. Yangi tahrirda Gollum uzuk yoʻqolganini bilib gʻazabga minadi, Bilboni oʻldirmoqchi boʻladi va Bilbo uzukni taqib koʻrinmas boʻlib qochishga majbur boʻladi. Tolkien ushbu matniy oʻzgarishni fantastik filologik mahorat bilan oqlaydi: u birinchi nashrdagi voqeani Bilboning oʻrtoqlari oldida uzukka boʻlgan egalik huquqini qonuniylashtirish uchun toʻqigan «yolgʻoni» deb eʼlon qiladi, ikkinchi nashrni esa Bilboning Red Book of Westmarch kundaligidagi asl haqiqat deb taqdim etadi."
      },
      {
        title: "Adabiy Meros, Oʻzbekcha Tarjima va Moslashuvlar",
        content: "«Hobbit» asari dunyoning 60 dan ortiq tillariga tarjima qilingan boʻlib, umumiy adadi 100 million nusxadan oshadi. Asar asosida koʻplab radio postanovkalar, 1977-yilgi Rankin/Bass animatsion filmi hamda Peter Jackson rejissorligidagi uch qismli («An Unexpected Journey», «The Desolation of Smaug», «The Battle of the Five Armies») yirik Gollivud blokbasteri suratga olingan.\n\nOʻzbek kitobxoni uchun asar 2021-yilda «Yangi asr avlodi» nashriyotida mohir tarjimon Shavkat Joʻrayev tomonidan ilk bor toʻliq va mukammal adabiy shaklda oʻzbek tiliga oʻgirildi. Tarjimada toponimika, qahramonlar ismlari va sheʼriy qoʻshiqlar Oʻzbek adabiy tili meʼyorlariga moslashtirilgan holda yuksak mahorat bilan taqdim etilgan."
      }
    ],
    key_themes: [
      "Qahramonlikning kashf etilishi",
      "Ochkoʻzlik va oltin vasvasasi",
      "Kichik insonning buyuk taqdiri",
      "Doʻstlik, birdamlik va saxovat",
      "Tabiat va texnologik vayronkorlik"
    ],
    uzbek_editions: [
      {
        title: "Hobbit: Yoxud borgan va qaytgan sayohat",
        translator: "Shavkat Joʻrayev",
        publisher: "Yangi asr avlodi",
        year: 2021,
        format: "Qattiq muqova, 320 bet",
        notes: "Inglizcha asl nusxadan toʻgʻridan-toʻgʻri oʻzbek tiliga qilingan ilk toʻliq rasmiy adabiy nashr. Asar sheʼrlari va qoʻshiqlari adabiy vaznda qayta kuylangan.",
        status: "published"
      }
    ],
    translation_status_summary: "Oʻzbek tilida toʻliq rasmiy nashr etilgan (2021-yil, «Yangi asr avlodi», tarjimon: Shavkat Joʻrayev)."
  },
  {
    id: "the-lord-of-the-rings",
    title_uz: "Uzuklar Hukmdori (Umumiy Epopeya)",
    title_original: "The Lord of the Rings",
    aliases: [
      "Uzuklar Hukmdori",
      "LotR",
      "The Lord of the Rings Omnibus",
      "Vlastelin Kolets"
    ],
    publication_year: 1954,
    publisher: "George Allen & Unwin",
    category: "primary_lifetime",
    isbn: "978-0-261-10325-2",
    cover_image: {
      src: "/images/books/the-lord-of-the-rings.webp",
      alt: "Uzuklar Hukmdori umumiy nashri muqovasi — Yagona Uzuk va Barad-dûr nishoni",
      edition_title: "Single-Volume Millennium Edition (HarperCollins / Allen & Unwin)",
      publisher: "George Allen & Unwin / HarperCollins",
      year: 1954,
      isbn: "978-0-261-10325-2",
      artist: "J.R.R. Tolkien",
      source: "Open Library (ID 14625765)"
    },
    synopsis: "«Uzuklar Hukmdori» (The Lord of the Rings) — J.R.R. Tolkienning 1937–1949-yillar mobaynida yozilgan, XX asr jahon adabiyotining eng ulugʻvor epik asari sanalgan monumental romani. Asar Oʻrta-yerning Uchinchi Davri intihosida Qorongʻu Hukmdor Sauron tomonidan soxtalashtirilgan, butun tirik mavjudotlarni oʻziga boʻysundirish qudratiga ega Yagona Uzukni yoʻq qilish uchun boshlangan Halqa Urushini qamrab oladi. Olti kitob va keng qamrovli ilmiy ilovalardan (Appendices) tashkil topgan ushbu epopeya qogʻoz tanqisligi sababli uch jildda («The Fellowship of the Ring», «The Two Towers», «The Return of the King») chop etilgan boʻlsa-da, muallif konsepsiyasiga koʻra yaxlit, boʻlinmas bitta yirik roman hisoblanadi. Asarda qudrat vasvasasi, umidsizlik qarshisidagi soʻnmas umid (estel), shafqat, doʻstlik va dunyoning qadimgi sehrli nurlarining soʻnib borishi mavzulari chuqur falsafiy tahlil etiladi.",
    detailed_sections: [
      {
        title: "Yaratilish Tarixi va Epik Koʻlam",
        content: "1937-yilda «Hobbit» nashr etilib, ulkan muvaffaqiyat qozongach, noshir Stanley Unwin Tokienga zudlik bilan asarning davomini yozishni taklif qiladi. Tolkien dastlab «The Silmarillion» qoʻlyozmalarini nashriyotga taqdim etadi, biroq noshirlar bu qadimiy va gʻamgin mifologiyani tushunmay, «yana hobbitlar haqida koʻngilochar hikoya» soʻraydilar. 1937-yil dekabrida Tolkien yangi qissa yozishga kirishadi, ammo asar sahifadan-sahifaga chuqurlashib, bolalar ertagidan butun boshli mifologik va teologik epopeyaga aylanib boradi.\n\nAsar Ikkinchi jahon urushining qora yillarida, fashizm va totalitarizm tahdidi ostida yozildi. Tolkien oʻgʻli Christopherga frontga yoʻllagan maktublarida bobma-bob yangi sahifalarni yuborib turardi. Asar qoʻlyozmasi 1949-yilda yakunlandi va nashr jarayoni 1954-yilgacha choʻzildi. Urushdan keyingi Britaniyada qogʻoz nihoyatda qimmat boʻlgani sababli, noshirlar qariyb 1200 betlik ulkan kitobni sotib olish oʻquvchilar choʻntagiga ogʻirlik qilishidan choʻchib, uni uchta alohida jildda chiqarishga qaror qildilar."
      },
      {
        title: "Asarning Kompozitsion Tuzilishi",
        content: "Garchi roman koʻpincha «trilogiya» deb atalsa-da, Tolkien bu taʼrifga qatʼiyan qarshi boʻlgan. Asar aslida 6 ta ichki kitob (Book I–VI) va 6 ta yirik tarixiy-filologik ilovalardan (Appendices A–F) iborat. Book I va II Halqa Birodarligining tuzilishi va sinovlarini; Book III va IV Rohan tekisliklaridagi urush hamda Frodo va Semning Mordor sari yurishini; Book V va VI Pelennor dalalaridagi buyuk jang, Orodruin choʻqqisidagi yakuniy gʻalaba va Shirening ozod etilishini qamrab oladi.\n\nTolkien qoʻllagan «interlace» (oʻzaro toʻqilgan) kompozitsion uslub oʻquvchini bir vaqtning oʻzida turli jabhalarda — Oq Shahar mudofaasi, Rohan otliqlarining yurishi va ikki kichik hobbitning oʻlim botqoqliklaridagi mashaqqatli safari aro parallel harakatlantiradi."
      },
      {
        title: "Falsafiy, Xristianlik va Mifologik Asoslar",
        content: "Tolkien oʻzining 142-maktubida asar haqida shunday yozgan edi: «Uzuklar Hukmdori, albatta, mohiyatan diniy va katolik asardir; dastlab buni ongsiz ravishda qilgan boʻlsam-da, qayta koʻrib chiqish jarayonida buni toʻliq anglab yetdim». Asarda ochiq-oydin diniy marosimlar yoki ibodatxonalar uchramasa-da, unda providensiya (ilohiy inoyat), shafqatning qasos ustidan gʻalabasi va qudratdan oʻz ixtiyori bilan voz kechish gʻoyasi markaziy oʻrinda turadi.\n\nFrodo Sauronni qurol kuchi bilan emas, balki fidoiylik va azob-uqubatlarni oʻz zimmasiga olish orqali magʻlub etadi. Gollumga nisbatan Bilbo va Frodo tomonidan koʻrsatilgan shafqat yakunda butun dunyoni qutqaradi — agar Gollum oʻldirilganida, Uzuk hech qachon Orodruin oloviga qulamas edi."
      },
      {
        title: "Ilovalar (Appendices) va Matnshunoslik Poydevori",
        content: "Kitob oxiridagi ilovalar shunchaki qoʻshimcha maʼlumot emas, balki butun Legendariumning akademik arxitekturasi hisoblanadi. Appendix A da Númenor, Gondor va Rohan shohlari yilnomalari, Aragorn va Arwenning fojiaviy muhabbati bayon etiladi; Appendix B Uchinchi Davrning kunma-kun xronologiyasini keltiradi; Appendix C shajaralarni; Appendix D taqvimlarni; Appendix E va F esa Tengwar va Cirth yozuvlari, Quenya, Sindarin va Westron tillarining fonetik va leksik qoidalarini ilmiy asoslab beradi."
      },
      {
        title: "Madaniy Taʼsiri va Oʻzbekistondagi Qabuli",
        content: "«Uzuklar Hukmdori» BBC tomonidan oʻtkazilgan soʻrovnomalarda «Buyuk Britaniyaning eng sevimli kitobi» deb topilgan va dunyo boʻyicha 150 milliondan ziyod adadda tarqalgan. Peter Jacksonning 2001–2003-yillardagi kinotrilogiyasi jami 17 ta Oskar mukofotini qoʻlga kiritib, kino sanʼati tarixida tengsiz hodisaga aylandi.\n\nOʻzbekistonda asarning ayrim boblari va qisqartirilgan talqinlari vaqtli matbuotda eʼlon qilingan boʻlsa-da, hozirgi kunda asarni inglizcha kanonik matndan toʻgʻridan-toʻgʻri oʻzbek tiliga mukammal tarjima qilish ishlari jadal davom etmoqda."
      }
    ],
    key_themes: [
      "Hokimiyat va mutlaq qudrat vasvasasi",
      "Umidsizlik qarshisidagi ilohiy inoyat (Estel)",
      "Shafqat va kechirimning hal qiluvchi kuchi",
      "Doʻstlik, fidoyilik va vaʼdaga sadoqat",
      "Boqiylik gʻami va dunyoning evrilishi"
    ],
    uzbek_editions: [
      {
        title: "Uzuklar Hukmdori",
        translator: "Tahririyat hayʼati",
        publisher: "Tayyorlanmoqda",
        year: 2026,
        format: "Akademik nashr",
        notes: "J.R.R. Tolkienning asl matni, toʻliq ilovalari va sheʼriy qoʻshiqlari bilan birga toʻliq oʻzbek tiliga tarjima qilinish jarayonida.",
        status: "in_progress"
      }
    ],
    translation_status_summary: "Oʻzbek tiliga toʻliq tarjima qilinish jarayonida (in_progress). Asosiy ilmiy atamalar ushbu ensiklopediyada toʻliq muvofiqlashtirilgan."
  },
  {
    id: "the-fellowship-of-the-ring",
    title_uz: "Uzuklar Hukmdori: Uzuk Birodarligi",
    title_original: "The Fellowship of the Ring",
    aliases: [
      "Uzuk Birodarligi",
      "The Fellowship of the Ring",
      "Birodarlik",
      "Uzuklar Hukmdori I qism"
    ],
    publication_year: 1954,
    publisher: "George Allen & Unwin",
    category: "primary_lifetime",
    isbn: "978-0-261-10235-4",
    cover_image: {
      src: "/images/books/the-fellowship-of-the-ring.webp",
      alt: "Uzuk Birodarligi birinchi nashri muqovasi (1954) — J.R.R. Tolkienning qizil va tillarang Yagona Uzuk tasviri",
      edition_title: "First Edition (George Allen & Unwin, 1954)",
      publisher: "George Allen & Unwin",
      year: 1954,
      isbn: "978-0-261-10235-4",
      artist: "J.R.R. Tolkien",
      source: "Open Library (ID 14627060) / British Library"
    },
    synopsis: "«Uzuk Birodarligi» (The Fellowship of the Ring) — epik romanning birinchi jildi boʻlib, u Book I va Book II qismlarini oʻz ichiga oladi. Unda Bilbo Bagginsning Shireni tark etishi, Yagona Uzukning Frodo Bagginsga meros qolishi va sehrgar Gandalf tomonidan uning dahshatli siri fosh etilishi bilan boshlanuvchi voqealar tasvirlanadi. Sauronning toʻqqiz Qora Chavandozi (Nazgûllar) taʼqibi ostida Frodo, Sam, Merry va Pippin Rivendell sari yoʻl oladilar. Elrond Kengashida Uzukni yoʻq qilishning yagona yoʻli — uni Mordordagi Orodruin oloviga tashlash ekani maʼlum boʻladi va toʻqqiz nafar erkin xalqlar vakilidan iborat «Uzuk Birodarligi» tuziladi. Moria konlari orqali kechgan xatarli yoʻlda Gandalfning Balrog bilan jangda tubsizlikka qulashi, Lothlórienning afsonaviy oʻrmonlaridagi orom hamda Amon Henda Birodarlikning fojiaviy tarqalishi ushbu jildning asosiy voqealar tizimini tashkil etadi.",
    detailed_sections: [
      {
        title: "Nashr Tarixi va Dastlabki Munosabat",
        content: "«Uzuk Birodarligi» 1954-yil 29-iyulda George Allen & Unwin nashriyotida 3000 nusxalik adadda chop etildi. Kitob muqovasi Tolkienning oʻzi chizgan eskiz asosida — qora fonda qizil rangli Sauron Koʻzi va tillarang Yagona Uzuk tasviri bilan bezatilgan edi. Kitobxonlar va adabiy jamoatchilik asarni hayrat va olqishlar bilan kutib oldi. C.S. Lewis «Time and Tide» jurnalida yozgan taqrizida: «Bu kitob yashin chaqnashi kabi sof va kutilmagan moʻjizadir... Biz bu asar bilan birga yashaymiz va undan oziqlanamiz», deya baho bergan edi."
      },
      {
        title: "Book I: Shire Osoyishtaligidan Qora Chavandozlar Tahdidigacha",
        content: "Birinchi kitob Bilboning 111 yoshlik mashhur tugʻilgan kun tantanasi va uning kutilmaganda gʻoyib boʻlishi bilan boshlanadi. Frodo oʻn yetti yil davomida Bag Endda tinch umr kechiradi, toki Gandalf kelib uzuk ustidagi olovli Tengwar yozuvini oʻqimaguncha. Shire boʻylab qochish, Qari Oʻrmon, Tom Bombadilning sirli xonadoni va Barrow-downs (Mozortepaliklar)dagi qabrtosh sharpalari sinovidan oʻtgan hobbitlar Bree qishlogʻidagi «Sakrovchi Poni» mehmonxonasida darbadar Aragorn (Strider) bilan uchrashadilar. Amon Sûl (Weathertop) tepaligida Nazgûl xanjari bilan yaralangan Frodo Bruinen kechuvida suv toshqini yordamida qutqarib qolinadi."
      },
      {
        title: "Book II: Elrond Kengashi va Moria Sinovlari",
        content: "Rivendellda oʻtkazilgan Elrond Kengashi — asarning eng buyuk adabiy va intellektual choʻqqilaridan biridir. Unda Elflar, Insonlar, Mittilar va Sehrgarlar toʻplanib, Yagona Uzuk tarixini, Isildurning xatosini va Sarumanning xiyonatini muhokama qiladilar. Uzukni saqlash yoki undan dushmanga qarshi qurol sifatida foydalanish mutlaqo imkonsizligi ayon boʻlgach, Frodo kutilmaganda: «Men Uzukni olib boraman, biroq yoʻlni bilmayman», deya qahramonlik masʼuliyatini boʻyniga oladi.\n\nBirodarlik aʼzolari — Frodo, Sam, Merry, Pippin, Gandalf, Aragorn, Boromir, Legolas va Gimli — Redhorn dovonidagi qor boʻronidan oʻtolmay, qadimiy mitti shahar Khazad-dûm (Moria) yerosti yoʻllariga kiradilar. Mazarbul xonasida Balin qabrini topgan qahramonlar orklar va qadimgi olov iblisi Balrog bilan toʻqnashadilar. Gandalf Durin Koʻprigida «You cannot pass!» deya Balrogni toʻxtatadi va u bilan birga tubsizlikka qulaydi."
      },
      {
        title: "Lothlórien va Birodarlikning Boʻlinishi",
        content: "Omon qolgan sakkiz nafar yoʻlovchi Oltin Oʻrmon — Lothlórienga kirib boradilar. U yerda Galadriel va Celeborn ularni qabul qiladi. Galadrielning Koʻzgusi va uning Uzuk vasvasasini rad etishi («I pass the test. I will diminish, and go into the West, and remain Galadriel») asarning eng yuksak axloqiy nuqtalaridandir. Anduin daryosi boʻylab qayiqda suzib kelgan jamoa Amon Hen tepaligida Boromirning Uzukni tortib olishga urinishi sababli parchalanadi. Frodo oʻz doʻstlarini xavfga qoʻymaslik uchun yolgʻiz Mordorga ketishga qaror qiladi, ammo sodiq Samwise Gamgee unga yetib olib, birga yoʻlga tushadi."
      }
    ],
    key_themes: [
      "Ixtiyoriy qurbonlik va fidoyilik",
      "Doʻstlik va qasamyodga sadoqat",
      "Qudratning vasvasasi va halokatli kuchi",
      "Qadimiy goʻzallik va oʻrmonlar sogʻinchi"
    ],
    uzbek_editions: [
      {
        title: "Uzuk Birodarligi",
        translator: "Tahririyat guruhi",
        publisher: "Tayyorlanmoqda",
        year: 2026,
        format: "Akademik tarjima",
        notes: "Uzuklar Hukmdori epopeyasining birinchi jildi sifatida toʻliq ilmiy asosda tarjimaga tayyorlanmoqda.",
        status: "in_progress"
      }
    ],
    translation_status_summary: "Birinchi jild tarjimasi jadal olib borilmoqda (in_progress)."
  },
  {
    id: "the-two-towers",
    title_uz: "Uzuklar Hukmdori: Ikki Qalʼa",
    title_original: "The Two Towers",
    aliases: [
      "Ikki Qalʼa",
      "The Two Towers",
      "Ikki Minora",
      "Uzuklar Hukmdori II qism"
    ],
    publication_year: 1954,
    publisher: "George Allen & Unwin",
    category: "primary_lifetime",
    isbn: "978-0-261-10236-1",
    cover_image: {
      src: "/images/books/the-two-towers.webp",
      alt: "Ikki Qalʼa birinchi nashri muqovasi (1954) — Minas Morgul va Orthanc minoralari tasviri",
      edition_title: "First Edition (George Allen & Unwin, 1954)",
      publisher: "George Allen & Unwin",
      year: 1954,
      isbn: "978-0-261-10236-1",
      artist: "J.R.R. Tolkien",
      source: "Open Library (ID 14627564) / British Library"
    },
    synopsis: "«Ikki Qalʼa» (The Two Towers) — romanning ikkinchi jildi boʻlib, u parallel rivojlanuvchi Book III va Book IV qismlaridan iborat. Asarda Boromirning Merry va Pippinni qutqarish yoʻlidagi qahramonona oʻlimi, Aragorn, Legolas va Gimlining oʻgʻirlangan hobbitlar ortidan Rohan dashtlari boʻylab mislsiz yugurishi tasvirlanadi. Fangorn oʻrmonida tirilgan Oq Gandalf bilan uchrashuv, Edorasda shoh Théodenning sehrli uyqudan uygʻotilishi, Helm Jarligidagi dahshatli Hornburg mudofaasi hamda Entlarning qadimgi gʻazabi bilan Isengard istehkomining yer bilan yakson etilishi birinchi yoʻnalishni tashkil etadi. Ikkinchi yoʻnalishda esa Frodo va Samning Emyn Muil qoyalarida Gollumni asir olishi, Oʻlik Botqoqliklar orqali Qora Darvozaga kelishi, Faramir bilan Ithiliendagi uchrashuv hamda Cirith Ungol hágida dahshatli bahaybat oʻrgimchak Shelob uyasiga kirib borishi hikoya qilinadi.",
    detailed_sections: [
      {
        title: "Sarlavhadagi «Ikki Qalʼa»ning Matnshunoslik Maʼnosi",
        content: "Kitob 1954-yil 11-noyabrda 3250 nusxada nashr etildi. «Ikki Qalʼa» nomining qaysi minoralarga ishora qilishi uzoq vaqt adabiy bahslarga sabab boʻlgan. Tolkienning oʻzi turli yozishmalarida bu masalaga turlicha yondashgan: bir maktubida u bu Orthanc (Isengard) va Barad-dûr (Mordor) ekanini aytsa, kitobning yakuniy soʻzboshisida va chizgan muqova illyustratsiyasida bu Orthanc va Minas Morgul minoralari ekanini taʼkidlagan (ayrim oʻrinlarda Cirith Ungol minorasi ham tilga olinadi). Ushbu noaniqlik ikki qutbli — harbiy va ruhiy toʻqnashuvlarning ramziy umumlashmasidir."
      },
      {
        title: "Book III: Rohan Ozodligi va Isengardning Qulashi",
        content: "Uchinchi kitob shiddatli harbiy harakatlar va epik otliq janglar bilan ajralib turadi. Boromirning shohona dafni ortidan Uch Ovchi (Aragorn, Legolas, Gimli) Uruk-hai toʻdasini quvib, toʻrt kunda yuzlab chaqirim yoʻl bosadi. Éomer bilan uchrashuv va Fangornga kirish ularni yangi qiyofadagi Gandalf the White bilan yuzlashtiradi. Edorasda Théoden zaharli maslahatchi Gríma Wormtongue taʼsiridan qutqariladi va oʻz xalqini jangga chorlaydi.\n\nHeld Jarligidagi Hornburg jangi — jahon adabiyotidagi qamal janglarining eng yorqin namunasidir. Oʻn minglab Isengard qoʻshiniga qarshi bir hovuch Rohirrimning mardonavor kurashi, tong saharda Gandalf va Erkenbrand boshchiligidagi yordamchi otliqlarning kelishi bilan gʻalabaga erishiladi. Ayni paytda Daraxtsoqol boshchiligidagi bahaybat daraxt-odamlar — Entlar Isengard toʻgʻonlarini buzib, sanoatlashgan va tabiatni poymol qilgan Saruman saltanatini suv ostida qoldiradilar."
      },
      {
        title: "Book IV: Mordor Chegaralari va Cirith Ungol Fojiasi",
        content: "Toʻrtinchi kitob mutlaqo boshqacha — qorongʻi, psixologik jihatdan ogʻir va ruhiy iztiroblarga boy atmosferaga ega. Frodo va Samning yoʻlboshchisiga aylangan Gollum oʻzining ikki qiyofasi — bechora Sméagol va makkor Gollum oʻrtasidagi dahshatli kurashni boshdan kechiradi. Oʻlik Botqoqliklarda yuzlab yillar oldin halok boʻlgan elflar va insonlarning suv ostidagi nursiz chehralari orqali oʻtgan yoʻlovchilar Morannonning oʻtib boʻlmas devorlariga roʻbaroʻ keladilar.\n\nIthilien oʻrmonlarida Gondor sarkardasi Faramir bilan uchrashuv uning akasi Boromirdan butunlay farq qiluvchi olijanob fazilatlarini namoyon etadi: «Agar bu uzuk yoʻl chetida yotgan boʻlsa ham, men uni olmasdim», deydi Faramir. Kitobning fojiaviy intihosida Gollum ularni Cirith Ungol darasiga boshlab boradi; Shelob zahridan behush yiqilgan Frodoni orklar asir oladilar, Sam esa xoʻjayini oʻldi deb oʻylab, Uzukni oʻz boʻyniga osishga majbur boʻladi."
      }
    ],
    key_themes: [
      "Tabiat va texnologik sanoatlashtirish qarama-qarshiligi",
      "Ikkilanish va nafsi ammoraning fojiasi (Gollum timsolida)",
      "Qatʼiyat, matonat va eng qorongʻu tunda ham saqlangan umid",
      "Ritsarlik burchi, shon-sharaf va vatanparvarlik"
    ],
    uzbek_editions: [
      {
        title: "Ikki Qalʼa",
        translator: "Tahririyat guruhi",
        publisher: "Tayyorlanmoqda",
        year: 2026,
        format: "Akademik tarjima",
        notes: "Uzuklar Hukmdori epopeyasining ikkinchi jildi.",
        status: "in_progress"
      }
    ],
    translation_status_summary: "Ikkinchi jild tarjima va tahrir jarayonida (in_progress)."
  },
  {
    id: "the-return-of-the-king",
    title_uz: "Uzuklar Hukmdori: Qirolning Qaytishi",
    title_original: "The Return of the King",
    aliases: [
      "Qirolning Qaytishi",
      "The Return of the King",
      "Shohning Qaytishi",
      "Uzuklar Hukmdori III qism"
    ],
    publication_year: 1955,
    publisher: "George Allen & Unwin",
    category: "primary_lifetime",
    isbn: "978-0-261-10237-8",
    cover_image: {
      src: "/images/books/the-return-of-the-king.webp",
      alt: "Qirolning Qaytishi birinchi nashri muqovasi (1955) — Gondor Oq Daraxti va Elendil toji tasviri",
      edition_title: "First Edition (George Allen & Unwin, 1955)",
      publisher: "George Allen & Unwin",
      year: 1955,
      isbn: "978-0-261-10237-8",
      artist: "J.R.R. Tolkien",
      source: "Open Library (ID 14627062) / British Library"
    },
    synopsis: "«Qirolning Qaytishi» (The Return of the King) — buyuk epopeyaning kulminatsion yakuniy jildi boʻlib, u Book V va Book VI hamda toʻliq akademik ilovalarni oʻz ichiga oladi. Unda Minas Tirith qamali, Pelennor dalalaridagi buyuk toʻqnashuv, Rohanning yordamga yetib kelishi, Éowyn va Merry tomonidan Angmar Jodugar-qirolining yoʻq qilinishi va Aragornning Oʻliklar Armiyasi bilan Pelargirni ozod qilib Oq Shaharga yetib kelishi tasvirlanadi. Gʻarb Boshliqlari Sauron diqqatini Mordor ichkarisidan chalgʻitish maqsadida Qora Darvoza sari umidsiz soʻnggi yurishga otlanadilar. Bu vaqtda Cirith Ungol qalʼasidan qutqarilgan Frodo va Sam Mordorning kultepaliklari boʻylab Orodruinga yetib boradilar. Yagona Uzukning yoʻq qilinishi, Sauron saltanatining qulashi, Elessarning toj kiyishi va Shirening «tozalanishi» (Scouring of the Shire) orqali Uchinchi Davr oʻz yakuniga yetadi va Elflar Oq Kemada Oʻrta-yerni tark etadilar.",
    detailed_sections: [
      {
        title: "Nashr Tarixi va Muallifning Eʼtirozi",
        content: "Uchinchi jild 1955-yil 20-oktabrda 7000 nusxada nashr etildi. Qiziq jihati shundaki, Tolkien «The Return of the King» sarlavhasiga qarshi boʻlgan, chunki uning fikricha bu sarlavha kitobxon uchun syujet yechimini oldindan fosh qilib qoʻyar edi; muallif jildni «The War of the Ring» deb atashni maʼqul koʻrgan. Shuningdek, ilovalarni (Appendices) tayyorlash va tartibga solish juda koʻp vaqt talab qilgani sababli uchinchi jildning chiqishi ikkinchi jilddan qariyb bir yilga kechikdi."
      },
      {
        title: "Book V: Pelennor Dalalari Jangi va Minas Tirith Qamali",
        content: "Beshinchi kitob Minas Tirithning umidsiz qamali va Denethor II ning ruhiy tanazzuli bilan ochiladi. Sauronning yuz minglik lashkari shahar devorlarini qurshab oladi, Jodugar-qirol Grond manjanigʻi yordamida Buyuk Darvozani buzib kiradi. Tong saharda, xoʻroz qichqirgan paytda Rohan mugʻomlarining jaranglashi va Théoden boshchiligidagi olti ming otliqning shiddatli zarbasi qamalni yorib oʻtadi.\n\nPelennor jangining eng hayratlanarli lahzasi — qadimiy bashoratning amalga oshishidir: «Hech bir tirik erkak zoti meni oʻldira olmas», degan Jodugar-qirolga qarshi dubulgʻasini yechgan Éowyn: «Men erkak emasman!» deya xanjar uradi va xobbit Merry bilan birgalikda dushmanni yer tishlatadi. Aragorn esa Andúril qilichini yalangʻochlab, qora yelkanli kemalarda gʻalaba bayrogʻini koʻtarib keladi."
      },
      {
        title: "Book VI: Hukm Togʻi va Shirening Tozalanishi",
        content: "Oltinchi kitob Samning Cirith Ungol qalʼasiga kirib Frodoni qutqarishi bilan boshlanadi. Ikki hobbit suvsiz va nafassiz Mordor sahrosida sudralib boradilar; Frodo Uzukning ogʻir yuki ostida ezilib, butun xotiralari, tabiat va non taʼmini unutadi. Sam uni yelkasiga koʻtarib Hukm Choʻqqisiga (Mount Doom) olib chiqadi. Biroq Olov Zallarida Frodo oʻz irodasini boy beradi: «Men Uzukni yoʻq qilmayman. U meniki!» deydi. Shu lahzada hujum qilgan Gollum Frododan uzuk taqilgan barmoqni tishlab uzib oladi va quvonchdan sarxush holda yonayotgan jarga qulaydi — shafqat qilingan Gollum bilmagan holda dunyoni xalos etadi.\n\nAsarning eng falsafiy bobi — «The Scouring of the Shire» (Shirening tozalanishi). Peter Jackson filmlaridan chiqarib tashlangan bu bobda qahramonlar oʻz vatanlariga qaytib, u yerda Saruman tomonidan oʻrnatilgan sanoatlashgan, qamoqxonalarga toʻla zolimona tuzumni koʻradilar va oʻz kuchi bilan vatanlarini ozod qiladilar. Bu Tolkienning har qanday urushdan qaytgan inson oʻz uyini ham oʻzgargan va yaralangan holda topishi haqidagi teran xulosasidir."
      },
      {
        title: "Kulrang Bandargohlar va Boqiylik Sari Safar",
        content: "Kitob Uchinchi Davrning fojiaviy va sokin yakuni bilan tugaydi. Frodo yaralarining ogʻrigʻi va ruhiy jarohatlari tufayli Shireda xotirjamlik topa olmaydi: «Baʼzi yaralar hech qachon toʻliq bitmaydi». 3021-yilda Grey Havens (Mithlond) bandargohida Frodo, Bilbo, Gandalf, Galadriel va Elrond Oq Kemaga minib, Oʻrta-yerni tark etib, Valinorga tomon suzib ketadilar. Samwise Gamgee uyiga qaytib, oʻz qizalogʻi Elanorni quchogʻiga oladi va butun adabiyot tarixidagi eng taʼsirchan soʻnggi jumlani aytadi: «Well, I’m back» («Mana, men qaytib keldim»)."
      }
    ],
    key_themes: [
      "Shohlik masʼuliyati va adolatli saltanatning tiklanishi",
      "Kechirilgan gunoh va ilohiy tasodif (Eucatastrophe)",
      "Urush fojialari va ruhiy jarohatlarning bitmasligi",
      "Dunyoning eskirishi va qadimiy goʻzallik bilan vidolashuv"
    ],
    uzbek_editions: [
      {
        title: "Qirolning Qaytishi",
        translator: "Tahririyat guruhi",
        publisher: "Tayyorlanmoqda",
        year: 2026,
        format: "Akademik tarjima",
        notes: "Uzuklar Hukmdori epopeyasining uchinchi jildi va toʻliq ilovalari.",
        status: "in_progress"
      }
    ],
    translation_status_summary: "Uchinchi jild tarjima va ilovalarni tayyorlash jarayonida (in_progress)."
  },
  {
    id: "silmarillion",
    title_uz: "Silmarillion",
    title_original: "The Silmarillion",
    aliases: [
      "Silmarillion",
      "The Silmarillion",
      "Silmarillar Tarixi",
      "Birinchi Davr Tarixi"
    ],
    publication_year: 1977,
    publisher: "George Allen & Unwin",
    category: "posthumous_reconstructed",
    editor: "Christopher Tolkien (Guy Gavriel Kay koʻmagida)",
    isbn: "978-0-261-10273-6",
    cover_image: {
      src: "/images/books/silmarillion.webp",
      alt: "Silmarillion birinchi nashri muqovasi (1977) — J.R.R. Tolkienning Lúthien Tinúviel nishoni va koʻk-oltin fon",
      edition_title: "First Edition (George Allen & Unwin, 1977)",
      publisher: "George Allen & Unwin",
      year: 1977,
      isbn: "978-0-261-10273-6",
      artist: "J.R.R. Tolkien",
      source: "Open Library (ID 14627042) / British Library"
    },
    synopsis: "«Silmarillion» — J.R.R. Tolkienning butun umri davomida yaratgan, Oʻrta-yer mifologiyasi va kosmogoniya tizimining oʻzagini tashkil etuvchi birlamchi manbadir. Muallif vafotidan soʻng uning oʻgʻli Christopher Tolkien tomonidan tartibga solinib, 1977-yilda nashr etilgan ushbu asar besh yirik qismdan iborat: 1) Ainulindalë — Koinotning ilohiy musiqa orqali yaratilishi; 2) Valaquenta — Valar va Maiar ilohiy kuchlarining tavsifi; 3) Quenta Silmarillion — Fëanor tomonidan yaratilgan uch muqaddas javohir — Silmarillar va ularni tortib olgan Qora Hukmdor Morgothga qarshi Noldor elflarining Belerianddagi koʻp asrlik fojiaviy urushlari; 4) Akallabêth — Ikkinchi Davrda insonlarning eng qudratli dengiz saltanati Númenorning yuksalishi va kibr oqibatida okean qaʼriga gʻarq boʻlishi; 5) Of the Rings of Power and the Third Age — Qudrat uzuklarining yasalishi va Uchinchi Davrdagi Halqa Urushining umumiy mifologik yakuni.",
    detailed_sections: [
      {
        title: "Yaratilish Tarixi va Christopher Tolkien Tahriri",
        content: "Tolkien «Silmarillion» ustidagi ilk qoralamalarini 1914–1917-yillarda, Birinchi jahon urushining Somme jangi gospitalida «The Book of Lost Tales» nomi ostida boshlagan edi. Bu asar uning umrining oxirigacha (1973-yilgacha) qariyb 60 yil mobaynida doimiy ravishda qayta yozildi, kengaytirildi va sayqallandi, biroq muallif hayotligida uni yaxlit kitob holiga keltirishga ulgurmadi.\n\nTolkien vafot etgach, uning adabiy vasiysi boʻlgan oʻgʻli Christopher Tolkien yozuvchi Guy Gavriel Kay yordamida otasining yuzlab chalkash, turli davrlarga oid qoralamalari, dostonlari va lugʻatlarini sinchkovlik bilan solishtirib chiqdi. Christopher eng muvofiq va ichki jihatdan uygʻun matnlarni saralab, 1977-yilda «The Silmarillion»ni nashrga tayyorladi. Bu nashr Oʻrta-yer olamining xuddi Injil yoki qadimgi Skandinaviya sagalari kabi qudratli arxitekturaga ega ekanini dunyoga isbotladi."
      },
      {
        title: "Kosmologiya va Ibtido: Ainulindalë va Valaquenta",
        content: "Asar Yagona Yaratuvchi Eru Ilúvatar va Uning tafakkuridan paydo boʻlgan muqaddas ruhlar — Ainurlar haqidagi afsona bilan boshlanadi. Ilúvatar ularga buyuk musiqiy mavzu beradi; barcha ruhlar uygʻunlikda kuylayotgan bir paytda, eng qudratli Ainu Melkor oʻz kibriga berilib, musiqaga nifoq va qoʻpol ohanglarni aralashtiradi. Ilúvatar ushbu musiqani koʻrgazmali qilib, moddiy olam — Eä (Borliq) va Arda (Zamin)ni yaratadi.\n\nValaquenta boʻlimida yer yuziga tushgan 14 nafar ulugʻvor Valar (Manwë, Varda, Ulmo, Aulë, Yavanna, Mandos va boshqalar) hamda ularning xizmatchilari boʻlmish Maiar (ular orasida Sauron, Melian, Olórin/Gandalf, Curumo/Saruman bor) ilohiy martabalari va xususiyatlari bayon etiladi."
      },
      {
        title: "Quenta Silmarillion: Silmarillar Fojiasi va Noldor Qasamyodi",
        content: "Quenta Silmarillion — kitobning eng yirik qismi boʻlib, Valinorda Valar yaratgan Ikki Muqaddas Daraxt — Telperion va Laurelinning oltin va kumush nurlari davridan boshlanadi. Noldor shahzodasi Fëanor bu nurlarni oʻzida mujassam etgan uchta tengsiz gavhar — Silmarillarni yasaydi. Melkor oʻrgimchak Ungoliant bilan til biriktirib, Ikki Daraxtni quritadi, Fëanorning otasi Finwëni oʻldirib, Silmarillarni oʻgʻirlaydi va Oʻrta-yerga qochib, Angband qalʼasida oʻz temir tojiga oʻrnatadi.\n\nFëanor va uning yetti oʻgʻli dahshatli Qasamyod ichadilar: kimki Silmarillarni oʻzida tutsa — u xoh Vala, xoh Elf, xoh Inson boʻlsin — unga qarshi abadiy qonli urush olib borajaklar. Ushbu qasamyod Birinchi Qarindosh Qirgʻiniga (Alqualondëdagi Teleri elflarining oʻldirilishiga) va Noldorning Valinordan quvgʻin qilinishiga olib keladi. Belerianddagi besh buyuk jang (Dagor-nuin-Giliath, Dagor Aglareb, Dagor Bragollach, Nirnaeth Arnoediad va Gʻazab Urushi) Noldor va ularning ittifoqchisi Edain insonlarining fojiali magʻlubiyatlari va qahramonliklari bilan toʻlib-toshgan."
      },
      {
        title: "Uch Buyuk Afsona va Akallabêth",
        content: "«Silmarillion» ichida Tolkienning eng eʼzozlagan uch buyuk dostoniy qissasi oʻrin olgan: 1) Inson Beren va boqiy elf malikasi Lúthienning muhabbati hamda Morgoth tojidan bitta Silmarilni kesib olish safari; 2) Morgothning qargʻishiga uchragan jasur Húrin oʻgʻli Túrin Turambarning fojiasi va ajdar Glaurungning oʻldirilishi; 3) Tuorning Gondolin yashirin shahriga kelishi, Idril bilan turmushi va yovuz xiyonat oqibatida Gondolinning qulashi.\n\nAkallabêth (Qulagan Oʻlka) qismida esa Birinchi Davr oxirida ezgulik tarafida kurashgan insonlarga inʼom etilgan Númenor orolining fojiasi hikoya qilinadi. Sauronning makkorona fitnasiga uchragan qirol Ar-Pharazôn boqiylik izlab Valinorga hujum qiladi; oqibatda Eru Ilúvatar dengizlarni ikkiga boʻlib, Númenorni gʻarq qiladi, dunyoning shaklini tekislikdan dumaloqqa aylantiradi va Valinorni yashirin «Toʻgʻri Yoʻl» ortiga koʻchiradi."
      }
    ],
    key_themes: [
      "Koinotning ilohiy uygʻunligi va yovuzlikning musiqadagi ildizlari",
      "Kibr, egalik hirs va Fëanor qasamyodining halokati",
      "Fojiaviy qahramonlik va fëa (ruh) hamda hröa (tana) munosabatlari",
      "Oʻlimning insonlarga inʼom etilgan neʼmat (Gift of Men) ekani",
      "Buzilgan dunyoning tiklanishi va soʻnmas umid"
    ],
    uzbek_editions: [
      {
        title: "Silmarillion",
        translator: "Tahririyat / Ilmiy guruh",
        publisher: "Nashrga tayyorlanmoqda",
        year: 2026,
        format: "Akademik nashr",
        notes: "Ushbu asar hozircha oʻzbek tilida toʻliq rasmiy kitob shaklida chop etilmagan. Ensiklopediyamizdagi barcha iqtiboslar 1977-yilgi asl nusxadan toʻgʻridan-toʻgʻri ilmiy tarjima qilingan.",
        status: "untranslated"
      }
    ],
    translation_status_summary: "Oʻzbek tilida hozircha rasmiy toʻliq nashr etilmagan (untranslated); ilmiy tarjimasi loyihalashtirilgan."
  },
  {
    id: "unfinished-tales",
    title_uz: "Tugallanmagan Afsonalar",
    title_original: "Unfinished Tales of Númenor and Middle-earth",
    aliases: [
      "Tugallanmagan Afsonalar",
      "Unfinished Tales",
      "Númenor va Oʻrta-yer Tugallanmagan Qissalari",
      "UT"
    ],
    publication_year: 1980,
    publisher: "George Allen & Unwin",
    category: "posthumous_reconstructed",
    editor: "Christopher Tolkien",
    isbn: "978-0-261-10362-7",
    cover_image: {
      src: "/images/books/unfinished-tales.webp",
      alt: "Tugallanmagan Afsonalar birinchi nashri muqovasi (1980) — dengiz uzra kelayotgan kema tasviri",
      edition_title: "First Edition (George Allen & Unwin, 1980)",
      publisher: "George Allen & Unwin",
      year: 1980,
      isbn: "978-0-261-10362-7",
      artist: "J.R.R. Tolkien",
      source: "Open Library (ID 9293458)"
    },
    synopsis: "«Tugallanmagan Afsonalar» (Unfinished Tales of Númenor and Middle-earth) — Christopher Tolkien tomonidan tahrir qilinib, 1980-yilda chop etilgan, «Silmarillion» va «Uzuklar Hukmdori»dagi koʻplab mavhum masalalarga oydinlik kirituvchi muhim akademik qissalar va qoralamalar toʻplamidir. Kitob toʻrt davrga boʻlingan boʻlib, Tuorning Vinyamarga kelishi, Túrin Turambarning Narn i Chîn Húrin dostoni, Númenor orolining geografiyasi va tuzilishi, Aldarion va Erendisning fojiaviy nikoh tarixi, Isildurning falokatli oʻlimi (Gladden Dalalari qirgʻini), Gandalfning Erebor safari ortidagi sirli rejalari hamda Istari (Sehrgarlar) va Palantíri (Koʻruvchi Toshlar) haqidagi mukammal ilmiy traktatlarni oʻz ichiga oladi.",
    detailed_sections: [
      {
        title: "Kitobning Matnshunoslik Ahamiyati",
        content: "1977-yilda «Silmarillion» nashr etilgach, koʻplab adabiyotshunoslar Christopher Tokienga asardagi muayyan boblarning nima sababdan qisqartirilgani yoki qaysi manbalarga asoslangani yuzasidan savollar yogʻdirdilar. Bunga javoban Christopher otasining qoʻlyozmalarini oʻzgartirmasdan, ularni qoralama bosqichidagi variantlari, muallif izohlari va matnshunoslik tahlillari bilan birga «Tugallanmagan Afsonalar» nomi ostida eʼlon qildi. Bu kitob Tolkien ijodiy laboratoriyasining eshiklarini ochib berdi va keyinchalik 12 jildlik ulkan «The History of Middle-earth» seriyasining yaratilishiga debocha boʻldi."
      },
      {
        title: "Birinchi va Ikkinchi Davr Qissalari",
        content: "Kitobning birinchi qismida Tuorning dengiz hukmdori Ulmo bilan uchrashuvi va uning Nevrast qirgʻoqlaridagi Vinyamar saroyidan Gondolinga yoʻl olishi aql bovar qilmas adabiy goʻzallik bilan bayon etiladi. Shu bilan birga, Húrin farzandlarining toʻliq nasriy dostoni «Narn i Chîn Húrin» ilk bor keng koʻlamda beriladi.\n\nIkkinchi qism Númenor orolining besh qirrali yulduz shaklidagi batafsil geografik xaritasini ochib beradi. U yerdagi «Aldarion va Erendis: Dengizchining Rafiqasi» qissasi Tolkien asarlari orasida yagona boʻlib, unda qahramonlik janglari emas, balki ikki kuchli shaxsiyat — dengizga oshiq shahzoda va oʻrmonlarni sevuvchi ayol oʻrtasidagi psixologik tushunmovchilik, oilaviy fojia va gʻurur toʻqnashuvi teran tasvirlangan."
      },
      {
        title: "Uchinchi Davr: Istari, Palantíri va Gladden Dalalari",
        content: "Uchinchi qism Oʻrta-yer tarixining eng qiziqarli jumboqlariga oydinlik kiritadi: Isildurning Gladden dalalarida orklar pistirmasiga tushishi va Uzukning suvga oqib ketish tafsilotlari; Rohanning Cirion va Eorl davridagi qasamyodi; «The Quest of Erebor» bobida Gandalfning nima uchun Thorinni Bilbo bilan tanishtirgani va Smaugni oʻldirish orqali Shimolni Sauron ittifoqchisidan xalos qilish rejasining geostrategik ahamiyati yoritiladi.\n\nKitobning soʻnggi toʻrtinchi qismi esa sof ilmiy ensiklopedik xarakterga ega: unda Sehrgarlar (Istari) — Gandalf, Saruman, Radagast va Ikki Moviy Sehrgarning Oʻrta-yerga yuborilish sabablari hamda Palantíri (yetti koʻruvchi tosh)ning ishlash tamoyillari va koʻrish chegaralari mukammal tushuntiriladi."
      }
    ],
    key_themes: [
      "Matnshunoslik evolyutsiyasi va qoralamalar qimmati",
      "Oila, muhabbat va ruhiy begonalashuv",
      "Geostrategik siyosat va tarixiy tasodiflar poydevori",
      "Ilohiy vazifadorlik va Istari burchi"
    ],
    uzbek_editions: [
      {
        title: "Tugallanmagan Afsonalar",
        translator: "Ilmiy guruh",
        publisher: "Nashrga tayyorlanmoqda",
        year: 2026,
        format: "Akademik nashr",
        notes: "Oʻzbek tilida toʻliq nashr etilmagan; manbashunoslik tahlillari ushbu platformada berilgan.",
        status: "untranslated"
      }
    ],
    translation_status_summary: "Oʻzbek tilida toʻliq rasmiy nashr etilmagan (untranslated)."
  },
  {
    id: "history-of-middle-earth",
    title_uz: "Oʻrta-yer Tarixi (12 Jildlik Toʻplam)",
    title_original: "The History of Middle-earth",
    aliases: [
      "HoME",
      "The History of Middle-earth",
      "Oʻrta-yer Tarixi",
      "12 Jildlik Tarix"
    ],
    publication_year: 1983,
    publisher: "George Allen & Unwin / HarperCollins",
    category: "textual_history",
    editor: "Christopher Tolkien",
    isbn: "978-0-261-10381-8",
    cover_image: {
      src: "/images/books/history-of-middle-earth.webp",
      alt: "Oʻrta-yer Tarixi birinchi jildi muqovasi (1983) — The Book of Lost Tales",
      edition_title: "12-Volume Series (George Allen & Unwin / HarperCollins, 1983–1996)",
      publisher: "George Allen & Unwin / HarperCollins",
      year: 1983,
      isbn: "978-0-261-10381-8",
      artist: "John Howe / J.R.R. Tolkien",
      source: "Open Library (ID 9293488)"
    },
    synopsis: "«Oʻrta-yer Tarixi» (The History of Middle-earth) — Christopher Tolkien tomonidan 1983-yildan 1996-yilgacha boʻlgan 13 yil davomida tahrir qilinib chop etilgan, jami 12 ta ulkan jilddan iborat tengsiz matnshunoslik yodgorligidir. Unda J.R.R. Tolkienning 1914-yildan 1973-yilgacha boʻlgan butun umri davomida Oʻrta-yer va uning xalqlari, tillari, mifologiyasi hamda xaritalari ustida olib borgan ijodiy izlanishlari qoralama nusxalari, bekor qilingan variantlari va ilmiy tahlillari bilan xronologik tartibda taqdim etiladi. Ushbu 12 jildlik korpus adabiyotshunoslik olamida bitta yozuvchining toʻqima olami ustidagi matniy evolyutsiyasini toʻliq aks ettiruvchi yagona global akademik yutuq sanaladi.",
    detailed_sections: [
      {
        title: "12 Jildning Arxitekturasi va Toifalanishi",
        content: "Toʻplam mazmunan toʻrtta asosiy adabiy davrga boʻlinadi:\n\n1. Ilk Mifologiya (1–2-jildlar): «The Book of Lost Tales, Part I & II» (1983–1984) — Oʻrta-yerning eng qadimiy, 1910–1920-yillardagi ilk ertaklari va qoralamalari.\n2. Sheʼriyat va 1930-yillar Qoralamalari (3–5-jildlar): «The Lays of Beleriand» (1985) — alliteratsion vazndagi buyuk dostonlar; «The Shaping of Middle-earth» (1986) — ilk xaritalar va xronologiyalar; «The Lost Road and Other Writings» (1987) — vaqt sayohati va etimologik lugʻatlar.\n3. «Uzuklar Hukmdori»ning Yozilish Tarixi (6–9-jildlar): «The Return of the Shadow» (1988), «The Treason of Isengard» (1989), «The War of the Ring» (1990) va «Sauron Defeated» (1992) — romanning har bir bobi, personajlar nomlarining oʻzgarishi (masalan, Aragorn dastlab «Trotter» ismli yogʻoch oyoqli hobbit boʻlgani) batafsil ochiladi.\n4. Soʻnggi Silmarillion va Falsafiy Matnlar (10–12-jildlar): «Morgoth's Ring» (1993), «The War of the Jewels» (1994) va «The Peoples of Middle-earth» (1996) — Elflarning reinkarnatsiyasi, Oʻrklarning kelib chiqishi, Gil-galadning nasabi hamda tillar evolyutsiyasi."
      },
      {
        title: "Morgoth's Ring va Athrabeth Finrod ah Andreth",
        content: "Toʻplamning 10-jildi («Morgoth's Ring») Tolkien teologiyasining eng yuqori choʻqqisi hisoblanadi. Unda oʻrin olgan «Athrabeth Finrod ah Andreth» (Finrod va Andreth munozarasi) asarida dono elf shohi Finrod Felagund va donishmand inson ayoli Andreth oʻlim, ruhiy azoblar, insoniyatning qulashi va Eru Ilúvatar kelajakda Arda azoblarini davolash uchun Oʻzi inson qiyofasida dunyoga kirib kelishi haqidagi sirli bashorat («Eru Himself will enter into Arda») ustida bahslashadilar. Bu matn Tolkienning xristianlik teologiyasini oʻz afsonalari bilan qanday nozik sintez qilganini koʻrsatadi."
      }
    ],
    key_themes: [
      "Adabiy va mifologik matnshunoslik evolyutsiyasi",
      "Falsafiy munozaralar va insoniyat metafizikasi",
      "Lisoniy ijodiyot va filologiyaning mif tugʻdiruvchi kuchi"
    ],
    uzbek_editions: [
      {
        title: "Oʻrta-yer Tarixi",
        translator: "Akademik guruh",
        publisher: "Nashr qilinmagan",
        year: 2026,
        format: "12 jildlik ilmiy korpus",
        notes: "Ushbu koʻp jildlik monumental manba oʻzbek tilida toʻliq nashr etilmagan; ensiklopediyamizdagi matnshunoslik maqolalari aynan ushbu 12 jild maʼlumotlariga tayanadi.",
        status: "untranslated"
      }
    ],
    translation_status_summary: "12 jildlik ilmiy toʻplam oʻzbek tilida toʻliq nashr etilmagan (untranslated)."
  },
  {
    id: "the-children-of-hurin",
    title_uz: "Húrin Farzandlari",
    title_original: "The Children of Húrin",
    aliases: [
      "Húrin Farzandlari",
      "The Children of Húrin",
      "Narn i Chîn Húrin",
      "Túrin Turambar Qissasi"
    ],
    publication_year: 2007,
    publisher: "HarperCollins",
    category: "posthumous_reconstructed",
    editor: "Christopher Tolkien",
    isbn: "978-0-00-724622-9",
    cover_image: {
      src: "/images/books/the-children-of-hurin.webp",
      alt: "Húrin Farzandlari birinchi nashri muqovasi (2007) — Alan Lee chizgan Dor-lómin dubulgʻali Túrin Turambar",
      edition_title: "First Edition (HarperCollins, 2007)",
      publisher: "HarperCollins",
      year: 2007,
      isbn: "978-0-00-724622-9",
      artist: "Alan Lee",
      source: "Open Library (ID 8220298) / Wikimedia"
    },
    synopsis: "«Húrin Farzandlari» (The Children of Húrin) — Christopher Tolkien tomonidan otasining oʻnlab yillar davomidagi qoʻlyozmalarini yagona, yaxlit va mukammal romanga aylantirib, 2007-yilda nashr ettirgan mustaqil epik asaridir. Unda Birinchi Davrning eng buyuk inson qahramoni Húrin Thalionning Nirnaeth Arnoediad (Sanoqsiz Koʻz Yoshlari Jangi)da asir olinishi, Morgothning uning butun sulolasiga yoʻllagan dahshatli qargʻishi va Húrinning oʻgʻli Túrin Turambarning fojiali taqdiri qalamga olinadi. Oltin Ajdar dubulgʻasi va qora Gurthang qilichi sohibi boʻlgan Túrin Doriath saroyida tarbiyalanadi, qaroqchilar sardoriga aylanadi, Nargothrond shahrining qulashiga sababchi boʻladi va buyuk ajdar Glaurungni qatl etadi. Biroq ajdarning makkorona sehri tufayli u oʻzining yoʻqolgan singlisi Nienor Nínielga uylanganini bilib qolgach, asar qadimgi yunon tragediyalari («Edip shoh») kabi mudhish fojia bilan tugaydi.",
    detailed_sections: [
      {
        title: "Yaxlit Roman Holiga Keltirish Jarayoni",
        content: "«Húrin Farzandlari» 1977-yilgi «Silmarillion» chiqqandan roppa-rosa 30 yil oʻtib, 2007-yil aprelida bosilib chiqdi. Bu voqea adabiyot olamida chinakam sensatsiya boʻldi, chunki bu Tolkienning «Uzuklar Hukmdori»dan keyin chop etilgan birinchi toʻliq va mustaqil yirik nasriy romani edi. Christopher Tolkien oʻz soʻzboshisida otasining eng yetuk va mukammal variantlarini saralab, kitobxonga hech qanday filologik toʻsiqlarsiz, xuddi muallif oʻzi tugallagandek oʻqiladigan bir butun asar taqdim etganini taʼkidlagan. Kitob rassom Alan Leening rangli illyustratsiyalari va qalam chizmalari bilan bezatilgan."
      },
      {
        title: "Túrin Obrazi va Skandinaviya Eposi Bogʻliqligi",
        content: "Túrin Turambar siymosi Tolkienning fin xalq eposi «Kalevala»dagi badbaxt qahramon Kullervo hamda german sagalaridagi Sigurd (Ziqfrid) obrazlariga boʻlgan mehridan tugʻilgan. Túrin beqiyos jismoniy kuch, goʻzallik va jasoratga ega, biroq uning magʻrurligi, shoshqaloqligi va qasosga chanqoqligi Morgothning qargʻishi bilan birlashib, qayerga borsa, oʻsha yerga kulfat keltirishiga sabab boʻladi. U hatto oʻzining eng sadoqatli doʻsti Beleg Cúthalionni qorongʻulikda tanimay oʻldirib qoʻyadi."
      }
    ],
    key_themes: [
      "Qargʻish, taqdir muqarrarligi va inson irodasining ojizligi",
      "Magʻrurlik (hubris) va uning vayronkor oqibatlari",
      "Fojiaviy qahramonlik va adolat izlash iztiroblari"
    ],
    uzbek_editions: [
      {
        title: "Húrin Farzandlari",
        translator: "Ilmiy guruh",
        publisher: "Tayyorlanmoqda",
        year: 2026,
        format: "Akademik nashr",
        notes: "Asar hozircha oʻzbek tilida alohida kitob holida chop etilmagan; qahramon tarjimai holi ensiklopediyamizda toʻliq yoritilgan.",
        status: "untranslated"
      }
    ],
    translation_status_summary: "Oʻzbek tilida toʻliq rasmiy nashr etilmagan (untranslated)."
  },
  {
    id: "beren-and-luthien",
    title_uz: "Beren va Lúthien",
    title_original: "Beren and Lúthien",
    aliases: [
      "Beren va Lúthien",
      "Beren and Lúthien",
      "Lay of Leithian",
      "Beren va Tinúviel Qissasi"
    ],
    publication_year: 2017,
    publisher: "HarperCollins",
    category: "posthumous_reconstructed",
    editor: "Christopher Tolkien",
    isbn: "978-0-00-821419-7",
    cover_image: {
      src: "/images/books/beren-and-luthien.webp",
      alt: "Beren va Lúthien birinchi nashri muqovasi (2017) — Alan Lee chizgan Doriath oʻrmonidagi uchrashuv",
      edition_title: "First Edition (HarperCollins, 2017)",
      publisher: "HarperCollins",
      year: 2017,
      isbn: "978-0-00-821419-7",
      artist: "Alan Lee",
      source: "Open Library (ID 12639912)"
    },
    synopsis: "«Beren va Lúthien» — J.R.R. Tolkien ijodining eng shaxsiy, samimiy va markaziy dostonlaridan biri boʻlib, Christopher Tolkien tomonidan 2017-yilda yaxlit kitob shaklida nashrga tayyorlangan. Unda oddiy inson Beren Erchamion va Sindar elflari oliy shohi Thingol hamda Maia Melianning qizi, tengsiz goʻzal Lúthien Tinúvielning muhabbati hikoya qilinadi. Thingol qizining qoʻlini soʻrab kelgan foniylik insoniga mutlaqo imkonsiz shart qoʻyadi: Qora Hukmdor Morgothning temir tojidan bitta Silmarilni olib kelish. Boqiy muhabbat kuchiga tayangan Beren va Lúthien dahshatli xavf-xatarlarni yengib, Sauronning Tol-in-Gaurhoth zindonini buzib, Morgothning Angband taxtgohiga kiradilar. Lúthien oʻzining sehrli qoʻshigʻi bilan Morgoth va butun saroyni uxlatib qoʻyadi, Beren esa gavharni kesib oladi. Asar Mandos zallarida Lúthienning oʻz boqiyligidan Beren bilan birga yashab, birga oʻlish uchun voz kechishi bilan yakunlanadi.",
    detailed_sections: [
      {
        title: "Tolkienning Shaxsiy Hayoti va Qabr Toshidagi Ismlar",
        content: "Beren va Lúthien qissasi Tolkienning oʻz rafiqasi Edith Brattga boʻlgan cheksiz sevgisining badiiy ifodasidir. 1917-yilda urushdan qaytgan Tolkien Yorkshire oʻrmonlarida oppoq gullar (hemlock) orasida Edithning raqs tushganini koʻrib, hayratga tushgan va ushbu manzarani Lúthienning Doriath oʻrmonida paydo boʻlishiga asos qilib olgan. Tolkien va Edith Oksforddagi Wolvercote qabristonida dafn etilgan boʻlib, ularning umumiy qabr toshiga muallif vasiyatiga koʻra rasmiy ismlari ostida «Beren» va «Lúthien» nomlari abadiy oʻyib yozilgan."
      },
      {
        title: "Matniy Rivojlanish va Sheʼriy Parchalar",
        content: "Kitob 1917-yildagi «Tale of Tinúviel» qoralamasidan boshlab, 1920-yillardagi mashhur alliteratsion vazndagi «The Lay of Leithian» dostoni va keyingi nasriy variantlarigacha boʻlgan yuz yillik evolyutsiyani qamrab oladi. Christopher Tolkien ushbu asarni otasining adabiy merosiga bagʻishlangan soʻnggi eng ulugʻvor tuhfalardan biri sifatida tayyorlagan."
      }
    ],
    key_themes: [
      "Oʻlimdan qudratli boʻlgan samimiy muhabbat",
      "Boqiylik neʼmatidan foniylik baxti uchun voz kechish",
      "Ezgu sanʼat va qoʻshiqning zulmat ustidan gʻalabasi"
    ],
    uzbek_editions: [
      {
        title: "Beren va Lúthien",
        translator: "Ilmiy guruh",
        publisher: "Nashrga tayyorlanmoqda",
        year: 2026,
        format: "Akademik nashr",
        notes: "Oʻzbek tilida alohida kitob shaklida nashr etilmagan.",
        status: "untranslated"
      }
    ],
    translation_status_summary: "Oʻzbek tilida toʻliq nashr etilmagan (untranslated)."
  },
  {
    id: "the-fall-of-gondolin",
    title_uz: "Gondolinning Qulashi",
    title_original: "The Fall of Gondolin",
    aliases: [
      "Gondolinning Qulashi",
      "The Fall of Gondolin",
      "Gondolin Fojiasi",
      "Tuor va Gondolinning Qulashi"
    ],
    publication_year: 2018,
    publisher: "HarperCollins",
    category: "posthumous_reconstructed",
    editor: "Christopher Tolkien",
    isbn: "978-0-00-830275-7",
    cover_image: {
      src: "/images/books/the-fall-of-gondolin.webp",
      alt: "Gondolinning Qulashi birinchi nashri muqovasi (2018) — Alan Lee chizgan yonayotgan Gondolin va ajdarlar",
      edition_title: "First Edition (HarperCollins, 2018)",
      publisher: "HarperCollins",
      year: 2018,
      isbn: "978-0-00-830275-7",
      artist: "Alan Lee",
      source: "Open Library (ID 12451486)"
    },
    synopsis: "«Gondolinning Qulashi» (The Fall of Gondolin) — J.R.R. Tolkien vafotidan soʻng uning oʻgʻli Christopher Tolkien tomonidan 2018-yilda nashr etilgan va Christopherning vafotidan oldingi soʻnggi tahririy asari sanalgan buyuk epik kitobdir. Asar Birinchi Davrning eng goʻzal va qudratli yashirin elf shahri Gondolinning tarixi, inson qahramoni Tuorning dengiz valasi Ulmo amri bilan ushbu shaharga hidoyat etilishi, shoh Turgonning qizi Idril Celebrindal bilan nikohi hamda xoin Maeglinning sotqinligi tufayli Morgothning temir ajdarlar, olov maxluqlari va Balroglar qoʻshini bilan shaharga qilgan qaqshatqich hujumini bayon etadi. Qamal chogʻida Ecthelion Balroglar sardori Gothmog bilan tengma-teng kurashib halok boʻladi, Glorfindel qochayotgan ayollar va bolalarni qutqarish uchun Kristhorn dovonida Balrog bilan jangga kirishadi. Omon qolgan Tuor, Idril va ularning oʻgʻli Eärendil kelajakda Oʻrta-yerni qutqaruvchi yagona najot urugʻiga aylanadilar.",
    detailed_sections: [
      {
        title: "Tolkienning Ilk Yozgan Oʻrta-yer Qissasi",
        content: "«Gondolinning Qulashi» — Tolkien oʻz mifologik olamida yaratgan eng birinchi hikoyadir. U 1916–1917-yillarda Birinchi jahon urushining Somme jangi shafqatsizliklaridan keyin kasalxonada daftarga qalam bilan yozilgan edi. Asardagi mexanik temir ajdarlar, zaharli tutunlar va olovli mashinalar birinchi jahon urushidagi ilk ingliz tanklari, xlor gazlari va sanoat qurollarining yozuvchi ongida qoldirgan fojiali izlaridir."
      },
      {
        title: "Christopher Tolkienning Vasiyati",
        content: "2018-yilda, 93 yoshida Christopher Tolkien ushbu asarni taqdim etar ekan, bu uning otasi merosi ustidagi 45 yillik uzluksiz xizmatining soʻnggi nuqtasi ekanini eʼlon qildi. Kitob ilk 1917-yilgi bolalarona mifologiyadan tortib, 1951-yilgi yetuk epik nasrgacha boʻlgan barcha qatlamlarni birlashtiradi."
      }
    ],
    key_themes: [
      "Yashirin goʻzallik va xiyonatning halokatli zarbasi",
      "Sanoatlashgan urushning tabiat va madaniyatni yoʻq qilishi",
      "Kulfat qaʼridan unib chiquvchi yangi umid (Eärendil timsolida)"
    ],
    uzbek_editions: [
      {
        title: "Gondolinning Qulashi",
        translator: "Ilmiy guruh",
        publisher: "Nashrga tayyorlanmoqda",
        year: 2026,
        format: "Akademik nashr",
        notes: "Oʻzbek tilida toʻliq nashr etilmagan.",
        status: "untranslated"
      }
    ],
    translation_status_summary: "Oʻzbek tilida toʻliq nashr etilmagan (untranslated)."
  },
  {
    id: "the-fall-of-numenor",
    title_uz: "Númenorning Qulashi",
    title_original: "The Fall of Númenor",
    aliases: [
      "Númenorning Qulashi",
      "The Fall of Númenor",
      "Akallabêth Tarixi",
      "Ikkinchi Davr Solnomasi"
    ],
    publication_year: 2022,
    publisher: "HarperCollins",
    category: "posthumous_reconstructed",
    editor: "Brian Sibley (Alan Lee rasmlari bilan)",
    isbn: "978-0-00-853783-8",
    cover_image: {
      src: "/images/books/the-fall-of-numenor.webp",
      alt: "Númenorning Qulashi birinchi nashri muqovasi (2022) — Alan Lee chizgan ulkan toʻlqinlar ostida qolgan Armenelos",
      edition_title: "First Edition (HarperCollins, 2022)",
      publisher: "HarperCollins",
      year: 2022,
      isbn: "978-0-00-853783-8",
      artist: "Alan Lee",
      source: "HarperCollins / Wikimedia"
    },
    synopsis: "«Númenorning Qulashi» (The Fall of Númenor) — taniqli tolkenshunos Brian Sibley tomonidan J.R.R. Tolkienning turli asarlariga («The Lord of the Rings» ilovalari, «The Silmarillion», «Unfinished Tales» va «The History of Middle-earth») sochilib ketgan Ikkinchi Davr matnlarini xronologik tartibda birlashtirib, 2022-yilda nashr etilgan fundamental asardir. Kitob Ikkinchi Davrning 3441 yillik butun tarixini — Númenor orolining poydevor qoʻyilishidan boshlab, Eregionda Qudrat Uzuklarining yasalishi, Sauronning asir olinishi, uning makkorona fitnasi orqali orol shohlarini yoʻldan ozdirishi, Akallabêth fojiasi hamda Elendil va Gil-galad boshchiligidagi Soʻnggi Ittifoq Urushigacha boʻlgan davrni qamrab oladi.",
    detailed_sections: [
      {
        title: "Kitobning Tuzilishi va Konsepsiyasi",
        content: "Ikkinchi Davr uzoq vaqt davomida Tolkien asarlarida eng kam yoritilgan, parchalanib ketgan davr sanalgan. Brian Sibley «The Tale of Years» (Yillar Solnomasi) xronologik skeletiga suyanib, otali-oʻgʻil Tolkienlarning barcha muhim yozuvlarini bitta oʻqimishli kitob holiga keltirdi. Ushbu kitob «Uzuklar Hukmdori: Qudrat Uzuklari» (The Rings of Power) teleseriali chiqqan paytda dunyo yuzini koʻrib, asarning haqiqiy kanonik matnini ommaga yetkazishda muhim rol oʻynadi."
      },
      {
        title: "Atlantida Afsonasi va Tolkienning «Tungi Toʻlqin» Tushi",
        content: "Númenor fojiasi qadimgi Platonning Atlantida afsonasining tolkenshunoslikdagi talqinidir. Tolkien bolaligidan boshlab bir necha oʻn yillar davomida tushida ulkan, qop-qora toʻlqinning butun shaharlar va yam-yashil daraxtzorlarni bosib kelayotganini koʻrganini (bu tushni u keyinchalik Faramir timsoliga singdirgan) va ushbu dahshatli psixologik hissiyot Númenorning okeanga choʻkishi haqidagi Akallabêth dostonini yozishga turtki boʻlganini eslagan."
      }
    ],
    key_themes: [
      "Insoniy kibr va oʻlimdan qoʻrqish fojiasi",
      "Totalitar aldamchilik va Sauronning makkorligi",
      "Sodiqlik (The Faithful / Elendili) va yangi sivilizatsiyaning tugʻilishi"
    ],
    uzbek_editions: [
      {
        title: "Númenorning Qulashi",
        translator: "Ilmiy guruh",
        publisher: "Nashrga tayyorlanmoqda",
        year: 2026,
        format: "Akademik nashr",
        notes: "Oʻzbek tilida toʻliq nashr etilmagan; Ikkinchi Davr faktlari ushbu ensiklopediyada toʻliq yoritilgan.",
        status: "untranslated"
      }
    ],
    translation_status_summary: "Oʻzbek tilida toʻliq nashr etilmagan (untranslated)."
  },
  {
    id: "the-nature-of-middle-earth",
    title_uz: "Oʻrta-yerning Tabiati",
    title_original: "The Nature of Middle-earth",
    aliases: [
      "Oʻrta-yerning Tabiati",
      "The Nature of Middle-earth",
      "NoMe",
      "Oʻrta-yer Tabiiy Falsafasi"
    ],
    publication_year: 2021,
    publisher: "HarperCollins",
    category: "textual_history",
    editor: "Carl F. Hostetter",
    isbn: "978-0-00-838792-1",
    cover_image: {
      src: "/images/books/the-nature-of-middle-earth.webp",
      alt: "Oʻrta-yerning Tabiati birinchi nashri muqovasi (2021) — Taniquetil togʻi va osmon tasviri",
      edition_title: "First Edition (HarperCollins, 2021)",
      publisher: "HarperCollins",
      year: 2021,
      isbn: "978-0-00-838792-1",
      artist: "J.R.R. Tolkien",
      source: "HarperCollins / Wikimedia"
    },
    synopsis: "«Oʻrta-yerning Tabiati» (The Nature of Middle-earth) — mashhur tilshunos va Elvish Linguistic Fellowship rahbari Carl F. Hostetter tomonidan tahrir qilinib, 2021-yilda chop etilgan rasmiy ilmiy tadqiqot toʻplamidir. Unda Tolkienning 1950–1960-yillarda yozgan, ilgari hech qachon eʼlon qilinmagan kechki falsafiy, biologik, metafizik va xronologik esselari jamlangan. Kitob uch boʻlimdan iborat boʻlib, Elflarning qarishi va boqiylik biologiyasi (Time and Ageing), Oʻrta-yer florasi va faunasi, Valinorning kosmik tuzilishi, Lembas nonining tayyorlanishi, Elflarning jismoniy qiyofasi (soqol qoʻyish yoki qoʻymaslik masalasi), shuningdek tanani boshqarish (osonwë) va telepatiya qonuniyatlarini qamrab oladi.",
    detailed_sections: [
      {
        title: "Asarning Ilmiy Ahamiyati",
        content: "Ushbu toʻplam «The History of Middle-earth» seriyasining 13-norasmiy jildi sifatida qabul qilingan. Kitob Tolkienning oʻz olamiga nafaqat shoir va ertakchi, balki qatʼiy tabiatshunos, matematik va teolog olim sifatida yondashganini namoyon etadi. Unda Elflarning vaqt hisobi boʻyicha oʻnlab matematik hisob-kitob jadvallari keltirilgan."
      },
      {
        title: "Kanonik Bahslarga Nuqta Qoʻygan Masalalar",
        content: "Kitob tolkenshunoslar orasida uzoq yillar davom etgan bir qator bahslarga uzil-kesil oydinlik kiritdi: masalan, elflarning soqol qoʻyishi faqat ularning uchinchi hayot bosqichida (Third Cycle of Life, masalan Círdan) yuz berishi; Elflarning reinkarnatsiyasi jarayoni bolalikdan qayta tugʻilish emas, balki Mandosda yangi jism yaratilishi orqali sodir boʻlishi kabi nozik teologik nuqtalar ilmiy isbotlab berilgan."
      }
    ],
    key_themes: [
      "Vaqt va makon metafizikasi",
      "Elflar va insonlarning ontologik farqlari",
      "Tabiat, oʻsimliklar va ilohiy qonuniyatlar"
    ],
    uzbek_editions: [
      {
        title: "Oʻrta-yerning Tabiati",
        translator: "Ilmiy guruh",
        publisher: "Nashrga tayyorlanmoqda",
        year: 2026,
        format: "Akademik nashr",
        notes: "Oʻzbek tilida toʻliq nashr etilmagan; manbashunoslik qoidalari ensiklopediyamizga singdirilgan.",
        status: "untranslated"
      }
    ],
    translation_status_summary: "Oʻzbek tilida toʻliq nashr etilmagan (untranslated)."
  }
];
