const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/content/events');

const batch1 = {
  'birinchi-qarindosh-qirgini.json': {
    outcome: "Noldor Teleri kemalarini qon evaziga qo'lga kiritdi, ammo bu fojia Mandos La'natini keltirib chiqardi va Noldorning butun keyingi taqdirini qora kulfat bilan muhrladi.",
    description_sections: [
      {
        title: "Fojianing kelib chiqishi: Fëanor talabi va Olwëning rad javobi",
        content: "Morgoth Valinorning Ikki Daraxtini yo'q qilib, Silmarillarni o'g'irlagach, Fëanor Noldor xalqini O'rta-yerga qochishga va qasamyod qilishga undadi. Buyuk Dengizni (Belegaer) kechib o'tish uchun ularga qudratli kemalar zarur edi. Fëanor oqqush shaklidagi oq port Alqualondëga kelib, Teleri hukmdori Olwëdan oq kemalarni berishni yoki O'rta-yerga eltib qo'yishni talab qildi. Biroq Olwë Telerining kemalari xuddi Noldor javohirlari kabi muqaddas ijod mevasi ekanini, ularni hech qachon begonalarga bermasligini va Valar irodasiga qarshi bormasligini aytib, taklifni qat'iy rad etdi."
      },
      {
        title: "Alqualondë bandargohidagi qonli to'qnashuv",
        content: "Rad javobidan g'azablangan Fëanor o'z lashkariga kemalarni kuch bilan tortib olishni buyurdi. Teleri o'zlarining muqaddas kemalarini himoya qilish uchun Noldor jangchilarini dengizga uloqtira boshladilar va engil kamonlardan o'q yog'dirdilar. Shunda Fëanor jangchilari qilich yalang'ochladilar. Fingon boshchiligidagi Noldorning ikkinchi to'lqini yetib kelganida, ular Teleri Noldorga hujum qilmoqda deb noto'g'ri o'ylab, jangga qo'shildilar. Natijada qurolsiz va yengil qurollangan Teleri elflari shafqatsizlarcha qirib tashlandi; ularning ko'plab kemalari egallab olindi va port qonga belandi."
      },
      {
        title: "Aramand qirg'og'idagi Mandos La'nati",
        content: "Ushbu mudhish jinoyatdan so'ng, Noldor kemalarda va qirg'oq bo'ylab shimolga, Aramand muzliklariga qarab yo'l oldi. U yerda baland qoya ustida Valar xabarchisi – Mandos (Namo) paydo bo'ldi va 'Shimol Bashorati' (The Doom of Mandos) yoki Noldor La'natini e'lon qildi. Mandos qardosh qonini to'kkan Noldor xalqi O'rta-yerda hech qachon tinchlik topolmasligini, ularning barcha buyuk rejalari xiyonat va umidsizlik bilan yakunlanishini, jismoniy halokatga uchrashlarini va Valinor darvozalari ular uchun abadiy yopilishini bildirdi. Finarfin bu dahshatli la'natni eshitib, o'z xalqining bir qismi bilan orqaga, Valinorga qaytdi va afv etildi."
      },
      {
        title: "Tarixiy va falsafiy oqibatlari",
        content: "Birinchi Qarindosh Qirg'ini elflar tarixidagi birinchi qonli gunoh bo'lib, Arda Beg'uborligining (Arda Unmarred) yakuniy halokatini ifodalaydi. Fëanorning xudbinligi va kibri butun bir sulolani fojeaga yetakladi. Losgardagi kemalarning yoqib yuborilishi va Fingolfin xalqining Helcaraxë muzliklaridan o'tishdagi mislsiz azoblari aynan shu qirg'inning bevosita oqibatidir. Beleriandga yetib borgach, Thingol ushbu qirg'in haqida eshitib, o'z saltanatida Noldor tili Quenyada so'zlashishni taqiqladi va qotillarga Menegroth darvozalarini yopdi."
      }
    ]
  },
  'dagor-bragollach.json': {
    outcome: "Morgoth Angband qamalini to'liq yorib o'tdi, Ard-galen tekisligini kulfatli cho'lga aylantirdi; Dorthonion va Hithlum qaqshatqich talafot ko'rdi, Fingolfin yakkama-yakka jangda mardonavor halok bo'ldi.",
    description_sections: [
      {
        title: "Uzoq qamalning poyoni va Morgothning yashirin tayyorgarligi",
        content: "Dagor Aglarebdan so'ng deyarli to'rt yuz yil davomida Noldor lashkarlari Angband qal'asini shimoldan qamal qilib turdilar. Bu davr O'rta-yerda 'Uzoq Tinchlik' (The Long Peace) deb ataldi. Biroq Morgoth bu yillarni behuda o'tkazmadi: u Thangorodrim yerosti ustaxonalarida mislsiz o'rklar armiyasini, Balroglar lashkarini va olovli ajdaholarni, xususan ulg'aygan Glaurungni jangga tayyorladi. Elflar va Edain o'z chegaralariga haddan ortiq ishongan holda sergaklikni yo'qotgan edilar."
      },
      {
        title: "To'satdan Olov Jangi: Olov daryolari va qamalning parchalanishi",
        content: "Birinchi Davrning 455-yili qishining qorong'i tunida Thangorodrimdan to'satdan ulkan olov va zaharli gazlar favvorasi otilib chiqdi. Olov daryolari yashil Ard-galen tekisligini bir zumda kulga aylantirib, unga 'Anfauglith' (Bo'g'uvchi Chang) nomini berdi. Olov ortidan Glaurung boshchiligidagi Balroglar va behisob o'rklar bostirib kirdi. Hithlum va Dorthoniondagi elf posbonlari zaharli tutun va olovda nobud bo'ldilar. Barahir boshchiligidagi insonlar Finrod Felagundni qurshovdan arang qutqarib qoldilar; Barahirga sadoqati evaziga mashhur Barahir Uzugi in'om etildi."
      },
      {
        title: "Fingolfin va Morgothning yakkama-yakka dueli",
        content: "Qamalning tor-mor etilganini va Noldor qo'shinlarining qirilganini ko'rgan Noldor Oliy Shohi Fingolfin cheksiz g'azab va noumidlikka tushdi. U o'zining Rochallor tulporida yolg'iz o'zi qum bo'ronlari aro Angband darvozasiga yetib bordi. Uning ko'zlari Valardek chaqnardi; o'rklar uni Vala Oromë deb o'ylab qochdilar. Fingolfin shohona shoxini chalib, Morgothni yakkama-yakka jangga chorladi. Morgoth o'z sarkardalari oldida sharmanda bo'lmaslik uchun er ostidan chiqishga majbur bo'ldi. Fingolfin o'zining Ringil qilichi bilan Morgothga yetti marta og'ir jarohat yetkazdi, biroq oxir-oqibat Morgothning Grond to'qmog'i zarbidan yiqildi. Yiqilayotib, so'nggi nafasida Morgothning oyog'ini chopib, uni abadiy oqsoq qilib qo'ydi."
      },
      {
        title: "Beleriand taqdiridagi burilish nuqtasi",
        content: "Dagor Bragollach Noldorning Belerianddagi hukmronligiga hal qiluvchi zarba berdi. Shimoliy istehkomlar quladi, Fëanor o'g'illarining o'lkalari bosib olindi, Dorthonion insonlari qirg'in qilindi. Faqat Barahir o'g'li Beren boshchiligidagi kam sonli fidoyilar o'rmonlarda partizanlik urushini davom ettirdilar. Ushbu jang Beleriand elflariga Morgothni harbiy kuch bilan yengish mutlaqo imkonsiz ekanini ko'rsatdi va afsonaviy Silmaril qidiruvi hamda buyuk fojialar zanjirini boshlab berdi."
      }
    ]
  },
  'khazad-dumning-qulashi.json': {
    outcome: "Durin VI va Náin I halok bo'ldi; mitti-odamlar o'zlarining ming yillik poytaxtini tashlab qochishga majbur bo'ldilar; Khazad-dûm Balrog va o'rklar makoniga aylanib, Moria ('Qora Jar') nomini oldi.",
    description_sections: [
      {
        title: "Mithril ketidan quvish va tubsiz zulmatning uyg'onishi",
        content: "Uchinchi Davrning ikkinchi ming yilligida Khazad-dûm mitti-odamlari O'rta-yerning eng boy va xavfsiz saltanati sanalardi. Ularning boyligi asosi faqatgina Moria qa'ridagina uchraydigan afsonaviy ma'dan - Mithril (haqiqiy kumush) edi. Yillar o'tishi bilan oson qazib olinadigan konlar tugab, mittilar Barazinbar tog'ining tagiga borgan sari chuqurroq kira boshladilar. Uchinchi Davrning 1980-yilida, Durin VI hukmronligi davrida, konchilar haddan ziyod chuqur qazish natijasida Birinchi Davrdagi G'azab Urushidan beri er qa'rida uxlab yotgan qadimgi dahshat – Morgoth Balrogini uyg'otib yubordilar."
      },
      {
        title: "Durin Falakati va shohlar sulolasining halokati",
        content: "Olov va zulmat maxluqi bo'lgan Balrog yerosti labirintlaridan bostirib chiqdi. Mittilarning boltalari va jasorati bu iblisona olov oldida ojiz qoldi. Shoh Durin VI Balrog tomonidan o'ldirildi va bu maxluqqa 'Durin Falakati' (Durin's Bane) nomi berildi. Bir yil o'tib, uning o'g'li shoh Náin I ham Balrog bilan jangda halok bo'ldi. Mittilar o'zlarining eng jasur jangchilarini yo'qotdilar; saroylar va ko'chalar olov hamda qora tutun bilan qoplandi."
      },
      {
        title: "Mitti xalqining qochishi va Moria zulmati",
        content: "Shoh Náin halok bo'lgach, uning o'g'li Thráin I boshchiligida omon qolgan mittilar o'zlarining ota-bobolari ming yillar davomida qurgan ulug'vor zallari, xazinalari va ajdodlar qabrlarini tashlab qochishga majbur bo'ldilar. Mittilar shimolga, Yolg'iz Tog' (Erebor) va Ered Mithringa yo'l oldilar. Bo'shab qolgan Khazad-dûmga Sauron yuborgan o'rklar va tog' trollari bostirib kirdi. Elflar va insonlar bu qadimiy shonli maskanni endilikda 'Moria' – ya'ni 'Qora Jar' deb atay boshladilar."
      },
      {
        title: "Tarixiy va strategik ahamiyati",
        content: "Khazad-dûmning qulashi O'rta-yerning shimoli-g'arbidagi geosiyosiy muvozanatni butunlay buzdi. Tumanli Tog'lar orqali o'tadigan eng xavfsiz savdo yo'li yopildi; Lothlórien elflari o'zlarining yaqin do'stlari va qo'shnilaridan ayrilib, doimiy xavf ostida qoldilar. Ming yil o'tib Balin boshchiligidagi jasur mitti ekspeditsiyasi Moriani qayta tiklashga uringan bo'lsa-da, barchasi qonli halokat bilan yakunlandi. Faqatgina Gandalf Uzuk Birodarligi safarida Balrog bilan Zirakzigil cho'qqisida olishib, uni mag'lub etganidan so'nggina Moria zulmati nihoyat parchalandi."
      }
    ]
  },
  'pelargir-jangi.json': {
    outcome: "Aragorn va O'liklar Armiyasi Umbar qaroqchilarining buyuk flotini butunlay tor-mor qildi; Pelargir ozod etildi va Gondor janubiy qo'shinlari ozod bo'lib, Pelennor dalalariga yetib bordi.",
    description_sections: [
      {
        title: "Janubiy frontdagi qaltis vaziyat va Umbar xavfi",
        content: "Uzuk Urushining eng qizg'in pallasida Gondor poytaxti Minas Tirith Mordorning bahaybat lashkari tomonidan qamal qilingan edi. Biroq Gondorning janubiy viloyatlari – Lebennin, Lossarnach va Lamedon o'z poytaxtiga yordamga asosiy qo'shinlarini yubora olmas edilar, chunki Sauron bilan ittifoqchi bo'lgan Umbar Qaroqchilari (Corsairs of Umbar) ulkan harbiy kema floti bilan Anduin bo'ylab suzib kelib, Pelargir portini egallagan va janubiy qirg'oqlarni yondirayotgan edi."
      },
      {
        title: "O'liklar Yo'li va Erech Qoyasidagi qasamyod",
        content: "Isildur vorisi Aragorn bu halokatli vaziyatni bartaraf etish uchun eng xatarli yo'lni tanladi. U Legolas, Gimli va Shimoliy Qo'riqchilar (Grey Company) bilan birga O'liklar Yo'lidan (Paths of the Dead) o'tib, Qasamyod Buzuvchilar – Tog'liklar Arvohlari armiyasini chaqirdi. Isildurning qadimiy qasamini eslatib, Aragorn ularni Umbar qaroqchilariga qarshi so'nggi jangga boshladi. O'liklar Armiyasi Aragorn ortidan shamoldek yelib, bir necha kun ichida Pelargir portiga yetib bordi."
      },
      {
        title: "Pelargir portidagi arvohlar dahshati va qora kemalarning egallanishi",
        content: "Pelargirga yetib kelgan Arvohlar Armiyasi qaroqchilar va haradliklar qalbiga tasvirlab bo'lmas dahshat soldi. Ularga qarshi qurol ko'tarib bo'lmasdi; arvohlarning qorong'i soyalari kemalarga yopirildi. Ko'plab dushmanlar vahima ichida o'zlarini Anduin suviga tashlab cho'kib ketdilar, qolganlari esa qurollarini tashlab qochdilar. Qisqa vaqt ichida Umbarning barcha ellikta asosiy jangovar kemasi va ko'plab kichik qayiqlari Aragorn qo'liga o'tdi. Aragorn o'z va'dasini bajarib, Arvohlar shohiga qasamyodlari ado etilganini e'lon qildi va ularning ruhlarini abadiy tinchlikka ozod qildi."
      },
      {
        title: "Pelennor jangidagi najot va burilish",
        content: "Pelargir g'alabasidan so'ng Aragorn ozod etilgan qora kemalarga Gondorning janubiy viloyatlaridan to'plangan to'rt mingdan ortiq sara jangchilarni mindirdi. Anduin bo'ylab shimolga qarab esgan qutlug' janubiy shamol ostida flot Minas Tirith tomon suzdi. Harnaqadar dushman va hatto qamal qilingan himoyachilar bu kemalarni qaroqchilar deb o'ylab turganda, Aragorn shohona Elendil bayrog'ini yozdi. Pelargir jangi Minas Tirith qutqarilishining va butun O'rta-yer taqdirining hal qiluvchi kaliti bo'ldi."
      }
    ]
  },
  'yagona-uzukning-yoq-qilinishi.json': {
    outcome: "Yagona Uzuk Orodruin olovida erib ketdi; Sauronning ruhiyati butunlay parchalanishga yuz tutdi, Barad-dûr quladi va Uchinchi Davr yakunlandi.",
    description_sections: [
      {
        title: "Orodruin qa'ridagi so'nggi qadamlar va vasvasa cho'qqisi",
        content: "Mordorning zaharli kuli va toshlari aro mislsiz mashaqqat chekkan Frodo Baggins va Samwise Gamgee nihoyat Orodruin (Hukm Tog'i) yonbag'riga yetib keldilar. Sauronning butun diqqati Qora Darvoza oldidagi Aragorn qo'shiniga qaratilgani sababli, ikki xobbit yashirincha Sammath Naur – Uzuk yasalgan olovli g'or darvozasidan ichkariga kirdilar. Biroq aynan Uzuk yaratilgan o'choq tepasida uning sehrli kuchi va vasvasasi eng yuqori qudratiga yetdi. Frodo endi unga qarshilik qila olmadi; u Uzukni barmog'iga taqib, uni o'ziniki deb e'lon qildi."
      },
      {
        title: "Sauronning dahshatli uyg'onishi va Gollumning kutilmagan roli",
        content: "Frodo Uzukni taqqan daqiqada Sauron o'zining dahshatli xatosini tushunib yetdi: dushman Uzukni o'ziga qurol qilmoqchi emas, balki uni yo'q qilmoqchi edi! Qora Lord cheksiz qo'rquvga tushib, barcha Nazgûllarni o'z qanotli maxluqlarida Hukm Tog'iga chaqirdi. Ammo shu daqiqada g'orga ularni ta'qib qilib kelgan Gollum (Sméagol) bostirib kirdi. Gollum ko'rinmas Frodoga tashlanib, uning barmog'ini tishlab uzib oldi. O'zining 'Azizim'ini qo'lga kiritgan Gollum quvonchdan aqldan ozib sakrarkan, g'or chetidan muvozanatni yo'qotib, tubsiz olovli jarga quladi."
      },
      {
        title: "Barad-dûrning qulashi va Sauronning yakuniy mag'lubiyati",
        content: "Yagona Uzuk olovli lavaga tushib eriy boshlagan zahoti, O'rta-yerni larzaga keltirgan ulkan zilzila boshlandi. Orodruin otilib, osmonni qora tutun qopladi. O'z kuchining eng katta qismini Uzukka joylagan Sauron o'z qudratidan bir zumda mahrum bo'ldi. Ming yillar davomida Uzuk kuchi bilan tik tutib turilgan ulkan Barad-dûr minorasi chil-parchin bo'lib quladi. Sauronning armiyasi – o'rklar va maxluqlar irodasini ushlab turgan zanjir uzilib, ular sarosimada qochib ketdilar yoki o'zlarini jarliklarga otdilar. Sauronning qora ruhi ulkan soya bo'lib ko'tarildi, biroq g'arbiy shamol uni butunlay to'zitib yubordi."
      },
      {
        title: "Uchinchi Davrning poyoni va ozodlik tongi",
        content: "Yagona Uzukning yo'q qilinishi bilan Elflarning Uch Uzugi (Narya, Nenya, Vilya) ham o'z kuchini yo'qotdi. Bu O'rta-yerdan sehr va elflar davrining ketishini, Insonlar Hukmronligi Davrining boshlanishini muqarrar qildi. Qora Darvoza oldidagi jangchilar mislsiz najot topdilar. Buyuk burgutlar olov qurshovida qolgan Frodo va Samwiseni qutqardilar. Bu voqea butun Arda tarixidagi zulmat ustidan qozonilgan eng buyuk g'alaba sifatida muhrlandi."
      }
    ]
  },
  'nirnaeth-arnoediad.json': {
    outcome: "Morgoth to'liq va hal qiluvchi g'alabaga erishdi; Maedhros Ittifoqi chilparchin bo'ldi; Fingon va Huor halok bo'ldi; Húrin asir olindi; Shimoliy Beleriand to'liq Morgoth tasarrufiga o'tdi.",
    description_sections: [
      {
        title: "Maedhros Ittifoqi va ulkan umidlar",
        content: "Dagor Bragollach kulfatlaridan so'ng, Fëanorning to'ng'ich o'g'li Maedhros Morgothni birdaniga ikki tomondan siqib chiqarish maqsadida ulkan koalitsiya tuzdi. Bu ittifoqqa barcha Noldor xonadonlari, Doriath va Falasdan kelgan kam sonli elflar, Bëor va Hador xonadoni insonlari, sharqliklar (Easterlings) hamda Belegost va Nogrod mitti-odamlari kirdilar. Shuningdek, Yashirin Shohlik hukmdori Turgon o'zining o'n ming kishilik qurolli Gondolin qo'shini bilan kutilmaganda jangga yetib keldi. Elflar va insonlar qalbida Angbandni butunlay yo'q qilish umidi uyg'ondi."
      },
      {
        title: "Sharqliklar xiyonati va jang maydonidagi qirg'in",
        content: "Jang Birinchi Davrning 472-yilida Anfauglith tekisligida boshlandi. Dastlab ittifoqchilar dushmanning ilg'or kuchlarini tor-mor qilib, Angband darvozasigacha surib bordilar. Biroq Morgoth o'zining so'nggi zaxiralarini – Balroglarni, Glaurung boshchiligidagi ajdaho to'dasini va behisob o'rklarni jangga tashladi. Eng fojiali zarba esa Maedhros qo'shinidagi sharqlik Uldor tomonidan berildi: u o'z odamlari bilan orqadan elflarga xiyonatkorona hujum qildi. Fingon boshchiligidagi g'arbiy qo'shin qurshovda qoldi; Fingon Balroglar sardori Gothmog tomonidan shafqatsizlarcha o'ldirildi."
      },
      {
        title: "Hador xonadonining fidoiyligi va Húrinning so'nggi na'rasi",
        content: "Gondolin podshohi Turgon va uning omon qolgan qo'shinini qutqarish uchun Hador xonadoni jangchilari – Húrin va Huor Sererech botqog'ida so'nggi mudofaani tashkil qildilar. Ular Turgonga chekinish imkonini berib, bir qadam ham orqaga chekinmadilar. Huor ko'ziga tekkan zaharli o'qdan halok bo'ldi. Húrin esa o'zining ikki tig'li boltasi bilan yetmishdan ortiq troll va o'rk sardorlarini qirdi. Har bir zarbasida u 'Aurë entuluva!' ('Tong yana otadi!') deb hayqirdi. Oxir-oqibat o'rklarning murdalari ostida qolib, Morgoth buyrug'i bilan tiriklayin asirga olindi."
      },
      {
        title: "Sanab Bo'lmas Ko'zyoshlar fojiasi",
        content: "Ushbu jang 'Nirnaeth Arnoediad' (Sanab Bo'lmas Ko'zyoshlar) deb nomlandi, chunki unda Beleriand xalqlarining butun gullagan nasli qirib tashlandi. Morgoth barcha o'ldirilgan elflar va insonlarning jasadlari hamda qurollarini Anfauglith o'rtasiga to'plab, ulkan tepalik yasadi; bu tepalik 'Haudh-en-Ndengin' (Yiqilganlar Tepaligi) deb ataldi. Bu jangdan so'ng Beleriandda faqat Doriath, Nargothrond va Gondolin kabi yashirin boshpanalargina omon qoldi; ochiq qarshilik ko'rsatish davri butunlay yakunlandi."
      }
    ]
  },
  'isengardning-vayron-qilinishi.json': {
    outcome: "Isengard sanoat mashinasi butunlay vayron qilindi; Saruman Orthanc minorasida qamalda qoldi; Rohanning shimoliy qanoti dushman tahdididan xalos bo'ldi.",
    description_sections: [
      {
        title: "Daraxtlarning uyg'onishi va Entmoot qarori",
        content: "Saruman o'zining Isengarddagi qurolsozlik o'choqlari va temirchilik ustaxonalarini oziqlantirish uchun ko'p yillar davomida Fangorn o'rmonining chekkalarini shafqatsizlarcha kesib, asr ko'rgan daraxtlarni yondirgan edi. Meriadoc Brandybuck va Peregrin Took Fangornga kelib, Treebeard (Daraxtsoqol) bilan uchrashgach, Entlar Kengashi (Entmoot) chaqirildi. Uch kunlik muhokamadan so'ng, odatda tinch va sekin harakatlanuvchi Entlar o'zlarining uzoq vaqt davomida to'plangan g'azablarini jilovlay olmadilar va Isengardga yurish qilishga qat'iy qaror qildilar."
      },
      {
        title: "Entlarning so'nggi yurishi va Isengard devorlarining parchalanishi",
        content: "Entlar va minglab g'azablangan Huornlar (harakatlanuvchi qora daraxtlar) Fangorndan chiqib, tun qorong'isida Isengardga qarab yurish qildilar. Sarumanning asosiy o'rk armiyasi Hornburg qamaliga jo'nab ketgan bo'lib, qal'ada faqat garnizon va qurolsozlar qolgan edi. Entlar yetib kelgach, Isengardning bahaybat tosh devorlarini xuddi non uvog'idek parchalab tashladilar. Entlarning barmoqlari tosh yoriqlariga kirib, metin poydevorlarni ag'dardi. Saruman vahima ichida qadimgi Númenor ustalari tomonidan sinmas qora toshdan qurilgan markaziy minora – Orthancga yashirindi."
      },
      {
        title: "Isen daryosining burilishi va sanoatning cho'kishi",
        content: "Saruman Orthanc tuynuklaridan olov va yonuvchi suyuqliklar purkab, bir nechta Entlarni kuydirganida, Entlarning g'azabi yanada avjiga chiqdi. Ular Isen daryosining to'g'onlarini buzib, daryoning barcha suvini Isengard vodiysiga burib yubordilar. Shiddatli suv toshqini barcha yerosti shaxtalarini, pechlar, qurol-yarog' omborlari va o'rk uyalarini bir necha soat ichida suv ostida qoldirdi. Sanoat iflosligi tozalab yuvildi; Isengard bug' ko'tarilib turgan ulkan yashil ko'lga aylandi."
      },
      {
        title: "Tarixiy va ekologik ahamiyati",
        content: "Isengardning qulashi Tolkien ijodidagi eng muhim mavzulardan biri – tabiatning tajovuzkor sanoatlashuv va mexanizatsiyaga qarshi g'alabasining yorqin ramzidir. Ushbu g'alaba Sarumanning Rohanni orqadan zabt etish rejasini butunlay yo'qqa chiqardi. Shu bilan birga, Entlar Hornburg jangiga Huornlar qo'shinini yuborib, Sarumanning o'rk armiyasini butunlay qirib tashlashda hal qiluvchi rol o'ynadilar. Qudratli Istari Saruman esa o'z minorasida nochor mahbusga aylandi."
      }
    ]
  },
  'silmaril-safari.json': {
    outcome: "Beren va Lúthien Morgoth tojidan bir dona Silmarilni muvaffaqiyatli tortib oldilar; elflar va insonlar o'rtasidagi birinchi muqaddas nikohga yo'l ochildi; ammo Beren Carcharoth changalida qo'lidan ayrildi.",
    description_sections: [
      {
        title: "Thingolning amri va mumkin bo'lmagan shart",
        content: "Dorthonion insonlaridan bo'lgan jasur jangchi Beren Neldoeth o'rmonida Sindar malikasi, Vala Melianning qizi Lúthien Tinúvielni uchratib, unga oshiq bo'ldi. Lúthien ham unga ko'ngil qo'ydi. Biroq Lúthienning otasi, Doriath Oliy Hukmdori Thingol inson zotini past deb hisoblab, bu ittifoqqa keskin qarshi chiqdi. Berenni yo'q qilish maqsadida Thingol unga imkonsiz tuyulgan talab qo'ydi: agar u qizining qo'lini so'ramoqchi bo'lsa, Morgothning Temir Tojiga qadalgan uchta muqaddas Silmarildan birini olib kelishi shart edi."
      },
      {
        title: "Finrod Felagundning fidoyiligi va Tol-in-Gaurhoth",
        content: "Beren o'z va'dasini bajarish uchun Nargothrond shohi Finrod Felagund huzuriga bordi. Finrod Barahir qasamyodiga sodiq qolib, o'n nafar sodiq do'sti bilan Berenga hamroh bo'ldi. Biroq Sauron ularni qo'lga olib, Tol-in-Gaurhoth (Bo'rilar Oroli) zindoniga tashladi. Sauron ularning kimligini bilish uchun har kecha bir jangchini bo'riga yem qildi. So'nggi daqiqada Finrod o'zining yalang qo'llari bilan bahaybat bo'rini o'ldirib, Berenni saqlab qoldi, biroq o'zi og'ir jarohatdan halok bo'ldi. Lúthien esa Valinor iti Huan yordamida yetib kelib, Sauronni mag'lub etdi va zindonlarni vayron qildi."
      },
      {
        title: "Angband qa'riga kirish va Lúthienning ilohiy qo'shig'i",
        content: "Beren va Lúthien bo'ri Draugluin va ko'rshapalak Thuringwethil terilariga o'ranib, Morgothning poytaxti Angband qal'asiga yashirincha kirdilar. Lúthien Morgoth taxti oldida o'zining sehrli, ilohiy qo'shig'ini kuylay boshladi. Uning ovozi barcha Balroglar va o'rklarni, hattoki Qora Lord Morgothning o'zini ham chuqur uyquga cho'mdirdi. Morgoth boshidagi Temir Toj yerga sirg'alib tushdi. Beren o'zining Angrist xanjari bilan tojdan bir dona Silmarilni kesib oldi. Ammo ikkinchi toshni kesmoqchi bo'lganida xanjar sinib, parchasi Morgothning yuziga tegdi va qorong'ulik uyg'ona boshladi."
      },
      {
        title: "Carcharoth fojiasi va Berenning qaytishi",
        content: "Angband darvozasida ularni ulkan iblis bo'ri Carcharoth kutib oldi. Beren qo'lidagi muqaddas Silmarilni ko'rsatib, maxluqni to'xtatmoqchi bo'ldi, biroq Carcharoth Berenning qo'lini tosh bilan birga tishlab uzib yutib yubordi. Muqaddas tosh bo'rining ichini olovdek yondira boshladi va Carcharoth telbalarcha Beleriand bo'ylab qochdi. Beren va Lúthien Doriathga qaytib, Thingol oldida qo'lsiz turganlarida, Beren o'z so'zida turganini – Silmaril uning qo'lida ekanini aytdi. Bu afsona Arda tarixidagi eng buyuk sevgi va matonat dostoniga aylandi."
      }
    ]
  },
  'gondolinning-qulashi.json': {
    outcome: "Yashirin Shohlik Gondolin butunlay vayron qilindi; Oliy Shoh Turgon halok bo'ldi; Tuor, Idril va ularning o'g'li Eärendil boshchiligidagi qochqinlar Sirion Havensiga najot topib yetib bordilar.",
    description_sections: [
      {
        title: "Gondolinning siri va Maeglinning xiyonati",
        content: "Gondolin O'rta-yerdagi eng go'zal va mustahkam Yashirin Shohlik bo'lib, Turgon tomonidan Qurshov Tog'lari (Echoriath) bag'ridagi Amon Gwareth tepaligida qurilgan edi. Shahar besh yuz yildan ortiq vaqt davomida Morgothning barcha josuslari va lashkarlaridan yashirin qoldi. Biroq Turgonning jiyani Maeglin shaharga kelgan inson Tuorga va Turgonning qizi Idril Celebrindalga nisbatan qora rashk va hasad bilan to'ldi. Maeglin tashqi tog'larda ma'dan qidirayotganda o'rklar tomonidan asir olindi. Morgoth unga Idrilni xotinlikka va Gondolin taxtini berishni va'da qilgach, Maeglin shaharning yashirin darvozalari va zaif joylarini dushmanga sotdi."
      },
      {
        title: "Yetti Darvoza ostonasidagi qonli qamal",
        content: "Birinchi Davrning 510-yili yozida, 'Darvozalar Bayramida' (Gates of Summer), Morgothning dahshatli armiyasi – temir va olovdan yasalgan mexanik ajdaholar, Balroglar to'dasi va millionlab o'rklar Qurshov Tog'laridan oshib, Gondolinga to'satdan bostirib kirdilar. Shaharning Yetti Darvozasi birin-ketin buzib tashlandi. Gondolinning o'n ikki oliy xonadoni (Qaldirg'och, Daraxt, Qanot, Oltin Gul va boshqalar) mislsiz qahramonlik ko'rsatdilar. Favvora Xonadoni sardori Ecthelion shahar maydonida Balroglar hukmdori Gothmog bilan olishib, o'z dubulg'asi nayzasi bilan uni favvora havzasiga cho'ktirib, ikkalasi birga halok bo'ldi."
      },
      {
        title: "Idrilning yashirin yo'li va Glorfindel jasorati",
        content: "Idril o'zining dono ko'ngli bilan xiyonatni oldindan sezgan va shahar ostidan tog'lar tomon maxfiy yerosti yo'lini qazdirgan edi. Tuor va Idril omon qolgan ayollar va bolalarni, jumladan yosh Eärendilni ushbu yo'l orqali olib chiqdilar. Turgon esa o'zining baland minorasida qolib, shohlik xarobalari bilan birga quladi. Qochqinlar Cirith Thoronath (Burgutlar Yorig'i) muzliklaridan o'tayotganda ularga Balrog va o'rk pistirmasi hujum qildi. Oltin Gul Xonadoni sardori Glorfindel qochqinlarni qutqarish uchun Balrog bilan jangga kirishdi va qoya chetidan maxluq bilan birga jarlikka qulab qahramonlarcha halok bo'ldi."
      },
      {
        title: "Tarixiy oqibatlari va Najot Yulduzi",
        content: "Gondolinning qulashi bilan Belerianddagi so'nggi va eng qudratli elflar poytaxti yo'q qilindi. Noldorning barcha shon-shavkati yer bilan yakson bo'lgandek tuyuldi. Biroq Tuor va Idril tomonidan qutqarib qolingan yosh Eärendil keyinchalik o'z kemasi Vingilotda Boqiy G'arbga suzib borib, Valardan yordam so'radi. Aynan Gondolin kulidan chiqqan bu najot nuri Morgothni butunlay yo'q qilgan G'azab Urushini boshlab berdi."
      }
    ]
  }
};

for (const [file, data] of Object.entries(batch1)) {
  const p = path.join(dir, file);
  if (!fs.existsSync(p)) continue;
  const original = JSON.parse(fs.readFileSync(p, 'utf8'));
  original.outcome = data.outcome;
  original.description_sections = data.description_sections;
  fs.writeFileSync(p, JSON.stringify(original, null, 2), 'utf8');
  console.log(`Updated event: ${file}`);
}
