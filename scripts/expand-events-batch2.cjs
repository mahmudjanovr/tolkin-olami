const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/content/events');

const batch2 = {
  'gazab-urushi.json': {
    outcome: "Morgoth butunlay yengildi va Bo'shliqqa (The Void) uloqtirildi; Angband vayron bo'ldi; Beleriand yerlari Buyuk To'fon ostida qolib g'arq bo'ldi; Birinchi Davr yakunlandi.",
    description_sections: [
      {
        title: "Eärendilning Boqiy G'arbdagi iltijosi",
        content: "Belerianddagi barcha elflar va insonlar shohliklari Morgoth tomonidan birin-ketin tor-mor qilingach, yagona najot faqat Valarning ilohiy aralashuvida qolgan edi. Yarim-elf Eärendil o'zining Vingilot kemasida rafiqasi Elwing bilan birga muqaddas Silmaril nuri yordamida Boqiy G'arb – Valinor sohillariga yetib bordi. U Valar huzurida tiz cho'kib, O'rta-yerda azob chekayotgan ikki xalq (elflar va insonlar) nomidan kechirim va yordam so'rab iltijo qildi. Manwë uning nolalarini eshitib, Valinor qo'shinini O'rta-yerni ozod qilish uchun safarbar etdi."
      },
      {
        title: "Valar qo'shinining O'rta-yerga qadami va Angband jangi",
        content: "Valar qo'shini – Vanyar elflari, Valinorda qolgan Noldorlar va Vala Eönwë boshchiligidagi bahaybat Mayar lashkari minglab oq kemalarda Beleriand sohillariga tushdi. Bu qo'shinning ulug'vorligi va qurol-yarog'larining yorqinligi butun shimol osmonini yoritib yubordi. Morgoth o'zining barcha kuchlarini – millionlab o'rklarni, qolgan barcha Balroglarni va erosti maxluqlarini maydonga tashladi. Jang shunchalik dahshatli va shiddatli bo'ldiki, ellik yil davom etgan to'qnashuvlarda butun shimoliy qit'a larzaga keldi, er qatlamlari yorilib ketdi."
      },
      {
        title: "Qanotli ajdaholar va Ancalagon Qoraning halokati",
        content: "Morgoth o'zining mag'lubiyatini sezgach, Thangorodrim g'orlaridan o'zining so'nggi va eng xavfli maxfiy quroli – olov purkovchi bahaybat Qanotli Ajdaho to'dasini jangga soldi. Ularning yetakchisi ulkan Ancalagon Qora (Ancalagon the Black) edi. Ajdaho qanotlarining qora soyasi osmonni qoplab, Valar qo'shinini orqaga chekinishga majbur qildi. Ammo shu daqiqada osmondan Vingilot kemasida Eärendil va Buyuk Burgutlar podshohi Thorondor boshchiligidagi qanotli qushlar armiyasi yetib keldi. Butun kun va tun davom etgan havo jangida Eärendil Ancalagonni mag'lub etdi; ajdahoning bahaybat gavdasi Thangorodrim cho'qqilariga qulab, ulkan tog'larni talqon qildi."
      },
      {
        title: "Beleriandning g'arq bo'lishi va davrlar almashinuvi",
        content: "G'azab Urushidagi mislsiz seysmik va sehrli to'qnashuvlar oqibatida Beleriand qit'asi yorilib, Buyuk Dengiz suvlari ostida qoldi va butunlay g'arq bo'ldi (faqat Tol Morwen va Lindon qirg'oqlari saqlanib qoldi). Morgoth Angband tubidan sudrab chiqildi; uning bo'yniga Angainor kishanlari solinib, u Dunyo Tashqarisidagi Abadiy Bo'shliqqa (Door of Night) uloqtirildi. Qolgan ikkita Silmaril esa Maedhros va Maglor tomonidan tortib olindi, ammo ularning kuygan qo'llari toshlarni ushlab turolmay, biri yer qa'riga, biri dengizga otildi. Shu tariqa Birinchi Davr o'z nihoyasiga yetdi."
      }
    ]
  },
  'hornburg-jangi.json': {
    outcome: "Sarumanning Isengard qo'shini butunlay qirib tashlandi; Rohan o'z mustaqilligini saqlab qoldi; Rohirrim va Gondor ittifoqi mustahkamlanib, Pelennor jangiga yo'l ochildi.",
    description_sections: [
      {
        title: "Sarumanning tajovuzi va Helm chuqurligiga chekinish",
        content: "Uchinchi Davrning 3019-yilida Saruman o'zining o'n mingdan ortiq Uruk-hai, qora o'rklar va Dunland yovvoyi insonlaridan iborat muntazam armiyasini Rohanni butunlay yo'q qilish uchun yo'lladi. Podshoh Théoden Gandalf tomonidan Saruman afsunidan ozod qilingach, o'z xalqi va qo'shinini ochiq dashtdagi Edorasdan qadimiy mustahkam tosh qal'a – Hornburgga (Helm's Deep) olib bordi. Hornburg baland qoyalar orasida joylashgan bo'lib, uning qalin tosh devorlari (Deeping Wall) ming yillar davomida har qanday hujumni qaytargan edi."
      },
      {
        title: "Qamal tuni va Isengard olovining portlashi",
        content: "Tunning qorong'usida yomg'ir ostida Uruk-hai lashkarlari qora to'lqindek Hornburg devorlariga yopirildilar. Aragorn, Legolas va Gimli qal'a himoyasida tengsiz jasorat ko'rsatdilar. Biroq Saruman o'zining shaytoniy ixtirosi – 'Orthanc olovi' (porox / portlovchi modda) vositasida Deeping Wall devorining suv o'tadigan kanalini portlatib yubordi. Metin tosh devor dahshatli gumburlash bilan qulab, dushman lashkari qal'a hovlisiga bostirib kirdi. Himoyachilar orqaga chekinib, Hornburg minorasining ichki zallarida qamalda qoldilar."
      },
      {
        title: "Helm karnayining sadosi va Théodenning qahramonona shiddati",
        content: "Tong ota boshlagan pallada barcha umidlar so'ngandek tuyuldi. Shunda Podshoh Théoden va Aragorn taslim bo'lish o'rniga dushman ustiga otda hujum qilishga qaror qildilar. Qal'a minorasidagi qadimiy Helm karnayi (Horn of Helm Hammerhand) chalindi; uning tog'lar aro aks-sado bergan dahshatli ovozi dushman yuragiga vahima soldi. Théoden o'zining oltin dubulg'asida otliq safi bilan darvozadan otilib chiqdi. Bu shiddatli zarba Uruk-hai saflarini yorib, ularni chuqurlikdan tashqariga uloqtirdi."
      },
      {
        title: "Erkenbrand va Gandalfning yetib kelishi hamda Huornlar o'rmoni",
        content: "Aynan shu tongda sharqiy qoyalar tepasida oq ot minib kelgan Gandalf Oq va G'arbiy Qoplon sardori Erkenbrand boshchiligidagi ming kishilik yangi otliq qo'shin paydo bo'ldi. Quyosh nurlari ularning nayzalarida chaqnadi. Shuningdek, vodiyning pastki chiqish joyida tunda kutilmaganda paydo bo'lgan sirli va qora Huornlar o'rmoni – tirik daraxtlar qo'shini turardi. Ikki o't orasida qolgan Uruk-hai armiyasi sarosimada ushbu qorong'i o'rmon ichiga qochdi va u yerdan birorta ham dushman tirik chiqmadi. Rohan to'liq ozod qilindi."
      }
    ]
  },
  'besh-armiya-jangi.json': {
    outcome: "Shimol o'rklari va varglar butunlay tor-mor qilindi; Bolg halok bo'ldi; Erebor va Dale ozod qilinib qayta tiklandi; Thorin Oakenshield sharaf bilan halok bo'ldi.",
    description_sections: [
      {
        title: "Smaugning o'limi va xazina ustidagi nizo",
        content: "Ajdaho Smaug Bard Kamonboz tomonidan Esgaroth (Ko'l Shahri) osmonida o'ldirilgach, Yolg'iz Tog' (Erebor) qa'ridagi hisobsiz boyliklar egasiz qoldi deb o'ylandi. Bard boshchiligidagi Ko'l odamlari va Thranduil boshchiligidagi Mirkwood elflari tovon to'lash va xazinani adolatli taqsimlash talabi bilan Erebor darvozasiga yetib keldilar. Biroq ajdaho oltinlari vasvasasiga tushgan Thorin Oakenshield muzokaralarni rad etdi va Temir Tepaliklardan (Iron Hills) o'z amakivachchasi Dáin Temiroyoqni qurolli mitti qo'shini bilan yordamga chaqirdi. Uch xalq o'rtasida qonli to'qnashuv muqarrar bo'lib qoldi."
      },
      {
        title: "Umumiy dushmanning to'satdan bostirib kelishi",
        content: "Aynan mitti, elf va insonlar o'zaro qilich yalang'ochlamoqchi bo'lgan daqiqada osmonni qora ko'rshapalaklar buluti qopladi. Gandalf oraga tushib, Tumanli Tog'lar va Gundobad qoyalaridan Bolg boshchiligidagi ulkan o'rklar va bahaybat varglar (bo'rilar) armiyasi bostirib kelayotganini xabar qildi. O'rklar Smaugning o'limi va Buyuk Goblinning o'ldirilishi uchun qasos olmoqchi, shuningdek shimol xazinalarini qo'lga kiritmoqchi edilar. Bu dahshatli tahdid oldida elflar, insonlar va mittilar o'zaro nizolarni darhol chetga surib, yagona ittifoqqa birlashdilar."
      },
      {
        title: "Jangning borishi va Thorinning so'nggi jasorati",
        content: "Jang Erebor etaklaridagi pasttekislikda boshlandi. Elflar va insonlar tog' yonbag'irlaridan o'q yog'dirdilar, Dáin mittilari esa metin devor bo'lib markazda dushmanning asosiy zarbasini qaytardilar. Biroq o'rklarning soni haddan ortiq ko'p bo'lib, ular tog' tepasidan aylanib o'tib, ittifoqchilarni qurshovga ola boshladilar. Shunda Thorin Oakenshield o'zining o'n ikki safdoshi bilan tog' darvozasining tosh to'sig'ini buzib chiqdi. Ularning zarbasi o'rk qo'shinini qoq ikkiga bo'ldi, biroq ular Bolg tansoqchilarining qurshovida qolib, qattiq yaralandilar; Kíli va Fíli o'z amakilarini himoya qilib halok bo'ldilar."
      },
      {
        title: "Burgutlar, Beorn va yangi Shimol davri",
        content: "Eng tang daqiqada osmondan Tumanli Tog'larning Buyuk Burgutlari yetib keldilar; ular tog' qoyalaridagi o'rklarni pastga uloqtirdilar. So'ngra maydonga dahshatli bahaybat ayiq qiyofasida Beorn bostirib kirdi. Beorn o'rklarni bir zarbada talqon qilib, Bolgni g'ajidi va Thorinning tanasini jang maydonidan olib chiqdi. Boshsiz qolgan o'rklar armiyasi qirg'in qilindi. Thorin o'lim to'shagida Bilbo bilan yarashdi va vafot etdi. Dáin II Erebor Shohi bo'ldi, Dale qayta tiklandi va shimolda ko'p yillik tinchlik hamda farovonlik o'rnatildi."
      }
    ]
  },
  'qudrat-uzuklarining-yasalishi.json': {
    outcome: "O'n to'qqizta Qudrat Uzugi va Yagona Uzuk yasaldi; Sauron Eregionni vayron qildi va Celebrimborni o'ldirdi; Elflar va Sauron o'rtasidagi birinchi buyuk urush boshlandi.",
    description_sections: [
      {
        title: "Annatar niqobi va Eregion zargarlarining orzusi",
        content: "Ikkinchi Davrning 1500-yillari atrofida Sauron go'zal va nuroniy qiyofa kasb etib, o'zini Valar elchisi 'Annatar' (Tuhfalar Hukmdori) deb tanishtirdi. Gil-galad va Elrond Lindonda unga ishonmay darvozalarni yopgan bo'lsalar-da, Eregiondagi Noldor zargarlari jamiyati – Gwaith-i-Mírdan uni quchoq ochib kutib oldilar. Celebrimbor boshchiligidagi zargarlar O'rta-yerni xuddi Valinor kabi go'zal qilish, so'lish va qariylikning oldini olish hamda tabiatni saqlab qolish orzusida edilar. Annatar ularga metallurgiya va sehr ilmining eng nozik sirlarini o'rgatdi."
      },
      {
        title: "O'n to'qqiz Uzukning yaratilishi va Fëanorsimon daho",
        content: "Eregion ustalari Annatar nazorati ostida Insonlar va Mittilar uchun mo'ljallangan o'n oltita Qudrat Uzuklarini yasadilar. Bu uzuklar egasining tabiiy qobiliyatlarini kuchaytirar, ko'rinmaslik va ta'sir o'tkazish qudratini berar edi. Shundan so'ng Celebrimbor yolg'iz o'zi, Annatar ishtirokisiz elflarning eng qudratli va sof Uch Uzugini – Narya (Olov Uzugi), Nenya (Suv Uzugi) va Vilya (Havo Uzugi)ni yaratdi. Bu uch uzuk hech qachon Sauronning nopok qo'li bilan tegilmagan va faqat shifo berish, go'zallikni saqlash hamda himoya qilish niyatida yasalgan edi."
      },
      {
        title: "Yagona Uzuk va Mordor xiyonatining fosh bo'lishi",
        content: "Barcha uzuklar tayyor bo'lgach, Sauron yashirincha Mordorga qaytdi va Orodruin (Hukm Tog'i) olovida barcha uzuklarni bo'ysundiruvchi Yagona Uzukni (The One Ring) yasadi. Uzuk ustidan mutlaq hukmronlikka erishish uchun Sauron o'zining shaxsiy irodasi, kuchi va mayar qudratining eng katta qismini ushbu oltin halqaga singdirdi. Biroq Sauron Yagona Uzukni barmog'iga taqib, o'zining mashhur hukmronlik afsunini aytgan zahoti, Celebrimbor va elf hukmdorlari uning xiyonatini his qildilar va zudlik bilan o'z uzuklarini barmoqlaridan yechib yashirdilar."
      },
      {
        title: "Eregion qirg'ini va Celebrimborning fojiali o'limi",
        content: "Rejasi fosh bo'lganidan g'azablangan Sauron bahaybat lashkar bilan Eregionga bostirib kirdi. Shahar qonli jangda quladi; Gwaith-i-Mírdan xazinasi talandi. Sauron to'qqizta va yettita uzukni zo'rlik bilan tortib oldi. Celebrimbor eng dahshatli qiynoqlarga qaramay, Uch Uzukning joyini oshkor qilmadi. Sauron uni o'ldirib, jasodini nayzaga sanchib, o'z qo'shiniga bayroq qilib ko'tardi. Bu voqea O'rta-yer tarixida ko'p asrlar davom etgan qonli to'qnashuvlar va Uzuklar fojiasini boshlab berdi."
      }
    ]
  },
  'halqa-urushi.json': {
    outcome: "Sauron butunlay yo'q qilindi; Yagona Uzuk eritildi; Dushman qo'shinlari parchalandi; Aragorn Elessar sifatida Gondor va Arnor taxtiga o'tirdi; To'rtinchi Davr boshlandi.",
    description_sections: [
      {
        title: "Urushning zamin va tarixiy sabablari",
        content: "Halqa Urushi (War of the Ring) – Uchinchi Davrning 3018-3019 yillarida butun O'rta-yer bo'ylab bo'lib o'tgan eng yirik va hal qiluvchi geosiyosiy to'qnashuvdir. Sauron Dol Guldur va Barad-dûrda o'z kuchlarini to'liq tiklab, Yagona Uzukning topilganidan xabar topdi. Uning maqsadi Gondor, Rohan, Lórien, Rivendell va Ereborni bir vaqtning o'zida bir nechta frontlarda qaqshatqich zarbalar bilan yo'q qilish va butun O'rta-yer ustidan mutlaq zulm o'rnatish edi. Ozod Xalqlar esa Rivendell Kengashida Uzukni yo'q qilish va Aragorn boshchiligida shohlikni tiklash strategiyasini qabul qildilar."
      },
      {
        title: "Ko'p jabxali urush: Shimoldan Janubgacha",
        content: "Halqa Urushi faqat Pelennor va Hornburg bilan cheklanmadi; u butun qit'ani qamrab oldi. Shimolda Dol Guldur qo'shinlari Lothlórienni uch marta qamal qildi, biroq Galadriel va Celeborn boshchiligidagi elflar barcha hujumlarni qaytardilar. Dale va Erebor ostonasida Qirol Brand va Dáin Temiroyoq sharqliklarning ulkan armiyasiga qarshi mardonavor jang qilib, sharaf bilan halok bo'ldilar va qal'a ichida g'alabaga erishdilar. Janubda esa Sauronning asosiy zarbasi Minas Tirithga yo'naltirildi va Pelennor dalalarida O'rta-yer tarixidagi eng buyuk kavaleriya jangi sodir bo'ldi."
      },
      {
        title: "Yashirin missiya va Qora Darvozadagi xatarli aldov",
        content: "Urushning taqdiri ulkan armiyalar to'qnashuvida emas, balki ikki ojiz xobbit – Frodo Baggins va Samwise Gamgeening maxfiy safarida hal bo'ldi. Dushmanning son-sanoqsiz legionlarini harbiy yo'l bilan yengish mutlaqo imkonsiz ekanini anglagan Gandalf va Aragorn eng xatarli strategik aldovni amalga oshirdilar. Ular yetti ming kishilik kam sonli qo'shin bilan to'g'ridan-to'g'ri Mordorning Qora Darvozasiga (Morannon) yurish qildilar. Sauron Aragorn Uzukni qo'lga kiritgan deb o'ylab, o'zining butun kuchlarini Morannonga tashladi va o'z yurtining ichki hududlarini himoyasiz qoldirdi."
      },
      {
        title: "Sauronning qulashi va Dunyoning yangilanishi",
        content: "Morannon ostonasida ittifoqchilar dushmanning ulkan kuchlari qurshovida qolib, halokat yoqasida turganlarida, Hukm Tog'ida Gollum bilan kurashda Yagona Uzuk olovga quladi. Bir zumda dushman qal'alari buzildi, Sauronning sehri bilan tirik turgan kuchlar parokanda bo'ldi. Urush Ozod Xalqlarning to'liq g'alabasi bilan yakunlandi. Aragorn toj kiyib, Elessar nomi bilan Qayta Birlashgan Qirollikni barpo etdi; Shire Saruman qaroqchilaridan tozalandi; Uch Uzuk o'z sehrini yo'qotishi natijasida elflar davri tugab, Insonlar Hukmronligi Davri boshlandi."
      }
    ]
  },
  'numenorning-halokati.json': {
    outcome: "Númenor oroli dengiz tubiga g'arq bo'ldi (Akallabêth); dunyo tekislikdan sferik (dumaloq) shaklga o'zgardi; Boqiy G'arb moddiy olamdan ajratildi; Sadoqatlilar O'rta-yerda Arnor va Gondorni tuzdilar.",
    description_sections: [
      {
        title: "Ar-Pharazôn kibri va Sauronning asir olinishi",
        content: "Ikkinchi Davrning 3261-yilida Númenorning so'nggi podshohi Ar-Pharazôn O'rta-yerga shunday ulkan va mahobatli flot bilan keldiki, Sauronning lashkarlari jangsiz qochib ketdilar. Sauron podshohning qudratiga teng kelolmasligini anglab, o'zini ixtiyoriy ravishda taslim qildi va Númenorga asir sifatida olib ketildi. Biroq bu uning eng ayyorona rejasi edi. Sauron o'zining o'tkir tili va munofiqligi bilan podshohning ishonchiga kirdi va tez orada uning bosh maslahatchisiga aylandi."
      },
      {
        title: "Melkorga sig'inish va Boqiy G'arbga qarshi fitna",
        content: "Sauron númenorliklarning o'limdan qo'rqish zaifligidan ustalik bilan foydalandi. U poytaxt Armenelosda Melkor (Morgoth) sharafiga bahaybat qora ibodatxona qurdirdi va u yerda Sadoqatlilar (Elendili) qurbonlik qilina boshlandi. Podshoh qarigani sayin o'lim qo'rquvi kuchayib bordi. Sauron uni agar u Boqiy G'arb – Valinorga bostirib kirsa va Valar yurtini egallasa, abadiy tiriklikka erishishiga ishontirdi. Ar-Pharazôn butun insoniyat tarixidagi eng ulkan harbiy flotni (Buyuk Qurol) yasashni buyurdi."
      },
      {
        title: "Valinor sohillari va Eru Ilúvatarning g'azabi",
        content: "Ikkinchi Davrning 3319-yilida Ar-Pharazôn boshchiligidagi son-sanoqsiz kemalar Valinor sohillariga yetib keldi va shoh muqaddas zaminga qadam qo'ydi. Valar jismoniy qurol ko'tarishdan bosh tortib, dunyo taqdirini Yaratuvchi Eru Ilúvatarning o'ziga topshirdilar. Shunda Eru o'zining mutlaq qudratini namoyon etdi: yer yuzida tasavvur qilib bo'lmas ulkan yoriq paydo bo'ldi; dengiz suvlari qaynab, bahaybat girdob vujudga keldi. Ar-Pharazôn va uning sohillardagi armiyasi qulagan qoyalar ostida qolib, 'Unutilganlar G'orlari'da qamaldi."
      },
      {
        title: "Akallabêth: Orolning cho'kishi va Dunyoning o'zgarishi",
        content: "Númenor oroli (Elenna) barcha saroylari, ibodatxonalari va kibrli aholisi bilan birga bir necha soat ichida dengiz qa'riga g'arq bo'ldi va 'Akallabêth' (Qulagan O'lka) deb ataldi. Dunyo tekis shakldan sferik (dumaloq) shaklga aylantirildi; Valinor esa moddiy koinotdan ajratilib, unga faqat elflarning oq kemalari 'To'g'ri Yo'l' (Straight Road) orqali borishi mumkin bo'lib qoldi. Faqat Elendil va uning o'g'illari Isildur hamda Anárion to'qqizta kemada qutulib qolib, O'rta-yerda Arnor va Gondor saltanatlariga asos soldilar."
      }
    ]
  },
  'pelennor-dalalari-jangi.json': {
    outcome: "Mordor va Harad armiyasi butunlay tor-mor qilindi; Angmar Jodugar-Qiroli Éowyn va Merry tomonidan yo'q qilindi; Théoden halok bo'ldi; Minas Tirith qutqarildi.",
    description_sections: [
      {
        title: "Minas Tirith ostonasidagi dahshatli qamal",
        content: "Uchinchi Davrning 3019-yil 14-mart tunida Sauronning bosh qo'mondoni – Nazgûllar sardori Angmar Jodugar-Qiroli yuz mingdan ortiq o'rklar, Harad o'qchilari, Mumakil (ulkan fillar) va Sharqiy vahshiylar bilan Oq Shaharni qamal qildi. Shahar darvozasini qadimiy la'nati to'qmoq – Grond bilan buzib tashladilar. Shahar noibi Denethor II umidsizlikka tushib, o'zini va yarador o'g'li Faramirni tiriklayin yoqib yuborishga urindi. Gondor mudofaasi faqat Gandalf Oqning metin irodasi va shaharliklarning jasorati evaziga arang dosh berib turgan edi."
      },
      {
        title: "Rohirrim otliqlarining yetib kelishi va Théoden xitobi",
        content: "15-mart tongida, Minas Tirith darvozasi buzilib, Jodugar-Qirol shahar ichiga qadam qo'ymoqchi bo'lgan eng xatarli pallada shimoldan minglab shoxlar sadosi yangradi. Podshoh Théoden boshchiligidagi olti ming Rohirrim otliqlari qutlug' tong shamoli ostida Pelennor dalalariga bostirib kirdilar. Théodenning jangovar xitobi ostida rohanliklar dushmanning orqa saflarini momaqaldiroqdek yorib o'tdilar. Harad kavaleriya va piyodalari tor-mor qilindi, biroq Jodugar-Qirol qora qanotli maxluqida osmondan tushib, Théodenga tashlandi va uni og'ir yaraladi."
      },
      {
        title: "Éowyn, Merry va qadimiy bashoratning ro'yobi",
        content: "Glorfindelning ming yillik bashoratiga ko'ra, Jodugar-Qirolni 'hech bir tirik erkak kishi o'ldira olmas' edi. Yarador shoh tepasida erkak jangchi qiyofasida kelgan Rohanning jasur malikasi Éowyn va xobbit Meriadoc Brandybuck turardilar. Éowyn maxluqning boshini bir zarbada chopib tashladi. Jodugar-Qirol unga og'ir gursi bilan tashlanganda, Merry qadimiy Dúnedain pichog'i bilan jodugarning tizzasiga orqadan zarba berib, uning sehrli himoyasini sindirdi. Shu lahzada Éowyn o'z qilichini qora niqob ostidagi ko'rinmas boshga sanchdi. Dushman sardori chinqirib, havoga singib ketdi."
      },
      {
        title: "Qora kemalar va Aragornning zafari",
        content: "Jang hali yakunlanmagan, Haradning ulkan Mûmakillari maydonni qonga botirayotgan bir paytda, Anduin daryosida Umbarning qora yelkanli kemalari paydo bo'ldi. Dushman g'alaba nidosi bilan qichqirdi, biroq kema ustida shohona Oq Daraxt va Yetti Yulduz tushirilgan Elendil bayrog'i yozildi. Pelargirda kemalarni egallagan Aragorn, Legolas, Gimli va janubiy Gondor qo'shinlari dushmanning qanotiga zarba berdilar. Ikki o't orasida qolgan Mordor lashkari butunlay yo'q qilindi; Oq Shahar najot topdi."
      }
    ]
  },
  'songgi-ittifoq-urushi.json': {
    outcome: "Sauron mag'lub etildi va Yagona Uzuk Isildur tomonidan kesib olindi; Barad-dûr yer bilan yakson qilindi; Gil-galad va Elendil halok bo'ldi; Ikkinchi Davr yakunlandi.",
    description_sections: [
      {
        title: "Elflar va Insonlarning Buyuk Ittifoqi",
        content: "Ikkinchi Davrning 3430-yilida, Númenor halokatidan omon qolgan Sauron Mordorda o'z kuchini tiklab, Gondorga to'satdan hujum qilgach, Noldor Oliy Shohi Gil-galad va Arnor Oliy Shohi Elendil o'rtasida 'Elflar va Insonlarning So'nggi Ittifoqi' (The Last Alliance) tuzildi. Bu ittifoq O'rta-yer tarixida ezgulik kuchlarining birlashgan eng ulkan va eng go'zal qo'shini bo'lib, unga barcha elflar xonadonlari, Dúnedain jangchilari, Greenwood Silvan elflari va hattoki Durin xonadoni mitti-odamlari ham qo'shildilar. Qo'shin Amon Sûl va Rivendellda to'planib, sharqqa yo'l oldi."
      },
      {
        title: "Dagorlad jangi va Qora Darvozaning buzilishi",
        content: "Urushning eng yirik maydon to'qnashuvi Mordor ostonasidagi Dagorlad (Jang tekisligi) tekisligida yuz berdi. Gil-galad o'zining mashhur Aiglos nayzasi bilan, Elendil esa yorqin porlab turuvchi Narsil qilichi bilan dushmanning behisob legionlarini chil-parchin qildilar. Elflar va insonlarning intizomi hamda qurol mahorati qarshisida Sauron qo'shini dosh berolmadi va orqaga chekindi. Ittifoqchilar Mordorning Qora Darvozasini (Cirith Gorgor) yorib o'tib, Qora Mamlakat ichkarisiga kirib bordilar."
      },
      {
        title: "Barad-dûrning yetti yillik qamali va Orodruin jangi",
        content: "Ittifoq armiyasi Sauronning bosh qal'asi – ulkan Barad-dûr minorasini yetti yil davomida qattiq qamal qildi. Qamal davomida son-sanoqsiz jangchilar, jumladan Elendilning kichik o'g'li Anárion tosh otar moslamalar zarbidan halok bo'ldi. Yettinchi yilga kelib, qamal halqasi qisqargach, Sauronning o'zi jangga chiqishga majbur bo'ldi. Orodruin tog'i yonbag'rida Sauron Gil-galad va Elendil bilan yakkama-yakka olishdi. Gil-galad Sauronning olovli qo'llari haroratidan yonib ketdi; Elendil esa halok bo'ldi va uning ostida Narsil qilichi sinib ketdi."
      },
      {
        title: "Isildurning g'alabasi va halokatli xatosi",
        content: "Elendilning to'ng'ich o'g'li Isildur otasining singan Narsil qilichi bo'lagini olib, Sauronning barmog'iga zarba berdi va Yagona Uzukni kesib oldi. Uzukdan mahrum bo'lgan Sauronning jismoniy tanasi yo'q bo'lib, uning qora ruhi sharqiy sahrolarga qochdi. Elrond va Círdan Isildurga Uzukni zudlik bilan Orodruin oloviga tashlashni va yovuzlikni abadiy yo'q qilishni qattiq tayinladilar. Biroq Isildur Uzukning sehriga mahliyo bo'lib, uni o'z otasi va ukasining o'limi uchun 'to'lov' (wergild) sifatida o'zida qoldirdi. Bu fojiali qaror Uchinchi Davrdagi barcha kulfatlarning urug'i bo'ldi."
      }
    ]
  }
};

// Also apply boost to the 7 events from batch 1
const batch1Boosts = {
  'birinchi-qarindosh-qirgini.json': {
    title: "Elflar ruhiyatidagi abadiy jarohat va afv etilmas gunoh",
    content: "Alqualondë qirg'ini elflarning boqiy hayotida hech qachon bitmaydigan ma'naviy jarohat qoldirdi. Ilgari kasallik va o'lim nimaligini bilmagan elflar birinchi marta o'z qonlarining o'z qardoshlari qilichidan to'kilganiga guvoh bo'ldilar. Bu voqea Noldor va Teleri o'rtasida asrlar davomida dushmanlik urug'ini sochdi. Hatto G'azab Urushidan keyin ham ko'plab Teleri elflari Noldor bilan gaplashishdan bosh tortdilar va ularni kechirish uchun yuzlab yillar kerak bo'ldi."
  },
  'dagor-bragollach.json': {
    title: "Thorondorning aralashuvi va Fingolfin jasoratining merosi",
    content: "Fingolfin halok bo'lgach, Morgoth uning jasadini o'rklarga bo'laklab tashlash uchun berishni niyat qildi. Ammo shu daqiqada osmondan Buyuk Burgutlar Shohi Thorondor tushib, Morgothning yuziga changal soldi va uni chuqur yaraladi. Thorondor shohning muqaddas tanasini ko'tarib, Gondolinning shimoliy qoyalariga eltib qo'ydi; u yerda Turgon o'z otasi uchun baland maqbara tikladi. Fingolfinning bu mislsiz jasorati butun Beleriand bo'ylab dostonlarga aylandi va elflar qalbida umid mash'alasini so'nmas qildi."
  },
  'khazad-dumning-qulashi.json': {
    title: "Durin xalqining ko'chishi va O'rta-yer madaniyatidagi yo'qotish",
    content: "Khazad-dûmning qulashi bilan O'rta-yer eng yuksak me'morchilik va muhandislik mo''jizasidan ayrildi. Moria zallari shunchaki kon emas, balki toshdan yasalgan ulkan yerosti saroylari, sharsharalar va billur fonarlar bilan bezatilgan shahar edi. Mittilar o'z uylarini yo'qotgach, butun O'rta-yer bo'ylab tarqoq holda yashashga majbur bo'ldilar va bu ularning madaniyatini ancha qashshoqlashtirdi. Ammo ular o'z poytaxtlarini hech qachon unutmadilar va 'Durin Qaytishi' haqidagi qadimiy bashoratga umid bilan yashadilar."
  },
  'pelargir-jangi.json': {
    title: "Qora flotning ramziy o'zgarishi va shohona bayroq",
    content: "Aragorn Pelargirda Umbar kemalarini egallaganida, u nafaqat kemalarni, balki qaroqchilar zanjirband qilgan minglab qullarni ham ozod qildi. Ozod etilgan insonlar quvonchdan yig'lab, Isildur vorisiga sodiqlik bildirdilar va eshkaklarni o'z ixtiyorlari bilan esha boshladilar. Shunday qilib, Gondorni yo'q qilish uchun yuborilgan qora o'lim floti bir necha soat ichida Gondorning eng buyuk najotkor flotiga aylandi. Bu Tolkien asarlaridagi kutilmagan ilohiy najot (eucatastrophe) kontseptsiyasining yorqin namunasidir."
  },
  'yagona-uzukning-yoq-qilinishi.json': {
    title: "Eucatastrophe: Fojia ichidagi ilohiy marhamat",
    content: "Tolkien o'z maktublarida ta'kidlaganidek, Frodoni barmog'iga Uzukni taqqani uchun qoralab bo'lmaydi, chunki Hukm Tog'ining markazida hech bir yaratilgan vujud Uzuk vasvasasiga bardosh berolmas edi. Aynan shu nuqtada Gollumning yillar davomida saqlab qolingan hayoti o'z rolini o'ynadi. Frodo va Bilboning ilgari Gollumga ko'rsatgan rahm-shafqati O'rta-yerni qutqarib qoldi. Bu voqea Tolkien falsafasidagi eng muhim tushuncha – ezgulik va rahm-shafqat hatto eng kutilmagan vaziyatlarda ham ilohiy marhamat (Providence) orqali g'alaba qozonishini isbotlaydi."
  },
  'nirnaeth-arnoediad.json': {
    title: "Húrin la'nati va Morgothning qora qasosi",
    content: "Nirnaeth Arnoediaddan so'ng Morgoth Húrinni Thangorodrim cho'qqisidagi tosh o'rindiqqa zanjirband qildi va uning ko'zlariga qora sehr soldi. Morgoth Húrinning butun xonadonini la'natladi; Húrin o'z o'rindiqida o'tirib, o'z farzandlari – Túrin Turambar va Nienorning boshiga tushgan barcha dahshatli fojialarni, incest va o'z joniga qasd qilishlarini uzoqdan ko'rib azob chekishga mahkum etildi. Bu la'nat Birinchi Davrning eng mashhur va qayg'uli dostoni – 'Húrin Farzandlari' dostonining boshlanishi bo'ldi."
  },
  'isengardning-vayron-qilinishi.json': {
    title: "Shayr xavfining oldini olinishi va Fangorn xotirasi",
    content: "Agar Isengard Entlar tomonidan yo'q qilinmaganida, Saruman bir vaqtning o'zida Rohanni orqadan tor-mor qilib, so'ngra himoyasiz qolgan shimoliy o'lkalarni, xususan Shireni butunlay qul qilib olar edi. Entlarning jasorati bu tahdidni bartaraf etdi. Jangdan so'ng Entlar Isengard xarobalarida 'Daraxtlar Bo'stoni' (Treegarth of Orthanc) barpo etdilar. To'rtinchi Davrda shoh Elessar bu hududni abadiy Entlarga in'om etdi va insonlarning bu yerga ularning ruxsatisiz kirishini qat'iyan taqiqladi."
  }
};

for (const [file, data] of Object.entries(batch2)) {
  const p = path.join(dir, file);
  if (!fs.existsSync(p)) continue;
  const original = JSON.parse(fs.readFileSync(p, 'utf8'));
  original.outcome = data.outcome;
  original.description_sections = data.description_sections;
  fs.writeFileSync(p, JSON.stringify(original, null, 2), 'utf8');
  console.log(`Updated batch 2 event: ${file}`);
}

for (const [file, sec] of Object.entries(batch1Boosts)) {
  const p = path.join(dir, file);
  if (!fs.existsSync(p)) continue;
  const original = JSON.parse(fs.readFileSync(p, 'utf8'));
  original.description_sections.push(sec);
  fs.writeFileSync(p, JSON.stringify(original, null, 2), 'utf8');
  console.log(`Boosted batch 1 event: ${file}`);
}
