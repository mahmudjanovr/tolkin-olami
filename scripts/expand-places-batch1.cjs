const fs = require('fs');
const path = require('path');

const dir = path.resolve(process.cwd(), 'src/content/places');

function updatePlace(id, sections, summaryOverride) {
  const file = path.join(dir, `${id}.json`);
  if (!fs.existsSync(file)) {
    console.warn(`File not found: ${file}`);
    return;
  }
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  data.description_sections = sections;
  if (summaryOverride) data.summary = summaryOverride;
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated place: ${id}`);
}

// 1. MINAS TIRITH
updatePlace('minas-tirith', [
  {
    title: "Geografik joylashuv va yetti qavatli meʼmoriy moʻjiza",
    content: "Minas Tirith (Sindarincha: 'Qoʻriqchi minorasi'), dastlab Minas Anor ('Quyosh minorasi') deb atalgan, Oq Togʻlarning (Ered Nimrais) sharqiy chekkasidagi Mindolluin choʻqqisi etagida qad rostlagan qadimiy tosh shahar. Shahar qoyatosh bagʻrida yarim doira shaklida qad rostlagan boʻlib, yetti konsentrik terassa (qavat)dan iborat.\n\nHar bir qavat mustahkam oq tosh devorlar bilan oʻralgan va har bir darvoza oʻzaro qarama-qarshi tomonlarga ochilib, shaharni zabt etishni deyarli imkonsiz qilgan. Shaharning oʻrtasidan bahaybat qoya kema tumshugʻi kabi yettinchi qavatgacha choʻzilgan. Yettinchi qavatda Oliy Saroy, Ecthelion Oq Minorasi va Gondorning muqaddas ramzi — Oq Daraxt joylashgan."
  },
  {
    title: "Tarixiy asos solinishi va poytaxtga aylanishi",
    content: "Shahar Ikkinchi davrning 3320-yilida Númenor halokatidan omon chiqqan Anárion tomonidan Osgiliathni gʻarbdan himoya qiluvchi qalʼa sifatida barpo etilgan. Uchinchi davrning 1640-yilida Oʻrta-yerni qamrab olgan Buyuk Vabo epidemiyasi Osgiliathni xarobaga aylantirgach, Qirol Tarondor qirollik qarorgohini Minas Anorga koʻchirdi.\n\n2002-yilda Minas Ithil (Oy minorasi) Nazgûllar tomonidan egallanib 'Minas Morgul'ga aylangach, Minas Anor oʻz nomini 'Minas Tirith'ga oʻzgartirdi — bu shahar endi yovuzlikka qarshi Oʻrta-yerning soʻnggi qoʻrgʻoni ekanini anglatar edi."
  },
  {
    title: "Pelennor jangi va Minas Tirith qamali",
    content: "3019-yil mart oyida Sauronning yuz minglik dahshatli qoʻshini Minas Tirithni qamal qildi. Angmar Jodugar-shohi boshchiligidagi qora kuchlar Pelennor devorlarini (Rammas Echor) buzib, shaharning birinchi darvozasiga yetib keldi. Buyuk manjaniqlar va 'Grond' laqabli bahaybat devorurar mashina yordamida birinchi darvoza sindirildi.\n\nBiroq Rohirrim otliqlarining kutilmagan yetib kelishi va Aragorn boshchiligidagi Gondor janubiy lashkarlarining qora kemalarda paydo boʻlishi Pelennor dalalarida dushmanning butkul tor-mor qilinishiga olib keldi."
  },
  {
    title: "Qayta tiklanish va Elessar davri",
    content: "Qirol Elessar (Aragorn II) taxtga oʻtirgach, Minas Tirith qayta gullab-yashnadi. Gimli boshchiligidagi Erebor mittilari shaharning buzilgan darvozalari oʻrniga mithril va sof poʻlatdan yangi darvoza yasadilar. Mindolluin qoyalaridan topilgan yangi Oq Daraxt koʻchati saroy hovlisiga qadaldi va shahar Qayta Birlashgan Qirollikning markaziga aylandi."
  }
], "Minas Tirith — Mindolluin togʻi bagʻrida barpo etilgan yetti qavatli oq tosh shahar, Gondor qirolligining poytaxti, Ecthelion Oq Minorasi va Oq Daraxt maskani.");

// 2. OSGILIATH
updatePlace('osgiliath', [
  {
    title: "Anduin ustidagi qadimiy poytaxt",
    content: "Osgiliath (Sindarincha: 'Yulduzlar Qalʼasi') — Gondor qirolligining qadimiy poytaxti boʻlib, buyuk Anduin daryosining har ikki sohilida joylashgan. Shaharning ikki qismini bir nechta ulkan tosh koʻpriklar bogʻlab turgan, ularning eng kattasi ustida Yulduzlar Gumbazi (Dome of the Stars) qad rostlagan edi.\n\nUshbu gumbaz ostida Gondorning bosh Palantíri — Osgiliath Koʻruvchi Toshi saqlangan boʻlib, u butun Oʻrta-yerdagi barcha boshqa toshlarni nazorat qila olar edi."
  },
  {
    title: "Qarindoshlar urushi va Buyuk Vabo halokati",
    content: "Uchinchi davrning 1432-yilida boshlangan Qardoshlar Urushi (Kin-strife) paytida Osgiliath shafqatsiz qamalga uchradi. Yulduzlar Gumbazi yonib ketdi va buyuk Palantír Anduin suvlariga qulab, manguga yoʻqoldi.\n\n1636-yildagi Buyuk Vabo shahar aholisini qirib tashladi. Shahar kimsasizlanib, xarobaga aylangach, poytaxt Minas Anorga koʻchirildi va Osgiliath asrlar davomida faqat chegaradagi harbiy forpost boʻlib qoldi."
  },
  {
    title: "Halqa Urushidagi qonli toʻqnashuvlar",
    content: "3018-yil iyunida Sauronning toʻsatdan qilgan hujumida Boromir va Faramir soʻnggi tosh koʻprikni buzib tashlab dushmanni toʻxtatdilar. 3019-yil martida Mordor armiyasi qayiqlar va sallarda daryodan oʻtib, shaharning gʻarbiy qismini ham egalladi.\n\nUrushdan soʻng Qirol Elessar davrida Osgiliath xarobalardan qisman tozalandi, ammo u poytaxtlik maqomini Minas Tirithga qoldirdi."
  }
]);

// 3. PELARGIR
updatePlace('pelargir', [
  {
    title: "Númenorning janubiy buyuk bandargohi",
    content: "Pelargir (Sindarincha: 'Qirol Kemalarining Maskani') — Anduin daryosining Sirith daryosi bilan tutashgan joyida, dengiz oqimidan yuqoriroqda barpo etilgan eng qadimiy shahar-bandargohlardan biridir. Ikkinchi davrning 2350-yilida Númenorning 'Sodiqlar' (The Faithful) guruhi tomonidan asos solingan.\n\nShahar Gondorning asosiy harbiy-dengiz bazasi va janubiy viloyatlarining (Lebennin) iqtisodiy markazi hisoblangan. Númenor qirollari kemalari aynan shu yerga kelib langar tashlagan."
  },
  {
    title: "Umbar qaroqchilari va Qardoshlar Urushi",
    content: "Qardoshlar Urushida isyonkor sarkarda Castamir tarafdorlari Pelargirda mustahkam oʻrnashdilar. Magʻlubiyatga uchragach, ular flot bilan Umbarga qochib, mashhur Umbar Qaroqchilari (Corsairs of Umbar) toʻdasini tuzdilar.\n\nPelargir koʻp asrlar davomida Umbar qaroqchilarining tungi qaroqchilik hujumlariga qarshi janubiy qalqon boʻlib xizmat qildi."
  },
  {
    title: "Aragorn va Oʻliklar Armiyasining gʻalabasi",
    content: "3019-yil 13-martida Aragorn 'Oʻliklar Qoʻshini' bilan Pelargirga yetib keldi. U yerda Umbar qaroqchilarining ellikta yirik harbiy kemasi Minas Tirithni zabt etish uchun qoʻshin yuklayotgan edi.\n\nArvohlar qoʻshini qaroqchilarni vahimaga solib dengizga uloqtirdi. Aragorn kemalarni egallab, qullarni ozod qildi va janubiy Gondor jangchilarini kemalarga mindirib, Minas Tirithni xalos etish uchun Pelennorga yoʻl oldi."
  }
]);

// 4. HENNETH ANNÛN
updatePlace('henneth-annun', [
  {
    title: "Botayotgan Quyosh Darchasi",
    content: "Henneth Annûn (Sindarincha: 'Gʻarbiy Darcha' yoki 'Botayotgan Quyosh Darchasi') — goʻzal Ithilien oʻrmonlarida, sharsharalar ortida yashiringan maxfiy gʻor-qalʼadir. Uchinchi davrning 2901-yilida Gondor Bosh Noibi Túrin II buyrugʻi bilan Ithilien chegarachilari (Rangers of Ithilien) uchun maxfiy tayanch nuqtasi sifatida barpo etilgan.\n\nGʻorning ogʻzini sharqirab oqayotgan baland sharshara toʻsib turadi, uning ortidan botayotgan quyosh nuri suv tomchilarida yetti rangda jilolanadi. Gʻorga faqat yashirin suvosti yoʻllari orqali, koʻzlari bogʻlangan holda kirish mumkin edi."
  },
  {
    title: "Faramir, Frodo va Gollum uchrashuvi",
    content: "3019-yil mart oyida Faramir boshchiligidagi chegarachilar Harad karvoniga pistirma qoʻyganlarida, tasodifan Frodo va Samwiseni asir oldilar. Xobbitlar koʻzlari bogʻlangan holda Henneth Annûnga keltirildi.\n\nGollum gʻor yaqinidagi Taqiqlangan Havzada (Forbidden Pool) baliq ovlayotganda qoʻlga olindi. Gondor qonunlariga koʻra bu yerga ruxsatsiz kelgan har qanday zot qatl qilinishi shart edi, ammo Frodoning oʻtinishi bilan Faramir uning jonini saqlab qoldi va xobbitlarni oziq-ovqat bilan taʼminlab Mordorga yoʻlga soldi."
  }
]);

// 5. PATHS OF THE DEAD
updatePlace('paths-of-the-dead', [
  {
    title: "Qora Qoyatosh ostidagi dahshat yoʻli",
    content: "Paths of the Dead (Oʻliklar Yoʻli) — Oq Togʻlar (Ered Nimrais) qaʼridan oʻtuvchi qadimiy yerosti yoʻli boʻlib, shimoldagi Dunharrow vodiysidagi Qora Qoyatosh (Dark Door) darvozasidan boshlanib, janubdagi Morthond vodiysiga chiqadi.\n\nBu yoʻl Ikkinchi davrda Togʻ Odamlari tomonidan qazilgan. Isildurga bergan qasamyodini buzib, Sauronga qarshi jangga chiqmaganliklari sababli Isildur ularni laʼnatlagan va qasamyod bajarilmaguncha ularning ruhlari ushbu qorongʻu gʻorlarda sarson qolgan edi."
  },
  {
    title: "Aragornning daʼvati va qasamyodning bajarilishi",
    content: "Asrlar davomida bu yoʻlga kirgan har qanday tirik inson qoʻrquvdan aqlini yoʻqotgan yoki halok boʻlgan (jumladan Rohan qiroli Baldor). Faqat 3019-yil martida Isildurning qonuniy vorisi boʻlgan Aragorn, Legolas, Gimli va Kulrang Otliqlar bilan birga Qora Darvozaga kirdi.\n\nErech Toshida Aragorn Oʻliklar Shohini chaqirib, unga qasamyodni bajarish imkonini berdi. Arvohlar armiyasi Aragornga ergashib Pelargirda Umbar qaroqchilarini tor-mor qildi va oʻz laʼnatidan qutulib, manguga orom topdi."
  }
]);

// 6. BARAD-DÛR
updatePlace('barad-dur', [
  {
    title: "Qora Minora: Oʻrta-yerdagi eng dahshatli qalʼa",
    content: "Barad-dûr (Sindarincha: 'Qora Minora', Qora tilda: Lugbúrz) — Mordorning shimoli-gʻarbida, Kul Togʻlarining (Ered Lithui) qora qoyalarida qad rostlagan ulkan temir va qora tosh qalʼadir. U Angband qulaganidan soʻng Oʻrta-yerda qurilgan eng baland va eng pishiq mudofaa inshooti hisoblanadi.\n\nSauron ushbu minorani Ikkinchi davrning taxminan 1000-yilida boshlab, 1600-yilda — Yagona Uzukni yasagach toʻliq yakunlagan. Minora poydevori bevosita Yagona Uzukning sehrli qudrati bilan bogʻlangan boʻlib, Uzuk mavjud ekan, Barad-dûrni hech qanday qurol yoki kuch butunlay yoʻq qilolmas edi."
  },
  {
    title: "Yetti yillik qamal va qayta tiklanish",
    content: "Soʻnggi Ittifoq Urushida Elflar va Insonlar armiyasi Barad-dûrni yetti yil davomida uzluksiz qamal qildi. Anárion manjaniq toshidan halok boʻldi. Sauron magʻlubiyatga uchragach, qora minora devorlari buzib tashlandi, ammo poydevorini yoʻq qilib boʻlmadi, chunki Isildur Uzukni yoqib yubormagan edi.\n\nUchinchi davrning 2951-yilida Sauron Mordorga qaytgach, Barad-dûrni qisqa muddatda qayta tikladi. Uning eng baland choʻqqisida yonib turuvchi ulkan Qora Koʻz Oʻrta-yer uzra dahshat soldi."
  },
  {
    title: "Uzukning yoʻq qilinishi va mutlaq qulash",
    content: "3019-yil 25-martida Orodruin qaʼrida Yagona Uzuk erib yoʻq boʻlgan zahoti, Barad-dûr poydevori bir lahzada parchalandi. Asrlar davomida qora sehr bilan ushlab turilgan bahaybat minoralar, temir devorlar va zindonlar ulkan gumburlash bilan qulab, chang-toʻzonga aylandi."
  }
]);

// 7. ORODRUIN (MOUNT DOOM)
updatePlace('orodruin', [
  {
    title: "Hukm Togʻi va Gorgoroth olovi",
    content: "Orodruin (Sindarincha: 'Olovli Togʻ'), xalq orasida Hukm Togʻi (Mount Doom) va Amon Amarth ('Halokat Togʻi') deb atalgan faol vulqon Mordorning Gorgoroth tekisligida yolgʻiz qad rostlagan. Togʻ tubidagi yerosti olovi Arda yaratilishidagi birlamchi xaos kuchlari bilan tutashgan.\n\nSauron Mordorni aynan shu vulqonning dahshatli olovi sababli oʻziga maskan qilgan edi. U vulqonning tubsiz qaʼridan temirchilik oʻchogʻi sifatida foydalandi va Ikkinchi davrning 1600-yilida Yagona Qudrat Uzugini aynan shu yerda soxtalashtirdi."
  },
  {
    title: "Sammath Naur: Taqdir Palatasi",
    content: "Togʻning sharqiy yonbagʻridan Sauron tomonidan qazilgan 'Sauron Yoʻli' (Sauron's Road) oʻtgan boʻlib, u Barad-dûrdan to Sammath Naur ('Olov Palatasi') deb ataluvchi gʻorga olib borgan. Ushbu palata markazida 'Hukm Qoriqlari' (Cracks of Doom) deb ataluvchi tubsiz olovli yoriq joylashgan edi.\n\nYagona Uzukni faqat uni yaratgan joyda — Sammath Naur olovidagina eritish mumkin edi; butun Oʻrta-yerda boshqa hech bir olov yoki ajdar nafasi unga taʼsir qilolmasdi."
  },
  {
    title: "Uchinchi Davr intihosi va portlash",
    content: "3019-yil 25-martida Frodo Baggins va Gollum Sammath Naurga yetib kelishdi. Gollum Uzuk bilan birga olovli yoriqqa qulagach, Orodruin misli koʻrilmagan kuch bilan portladi. Vulqon otilishi Gorgoroth tekisligini lavaga koʻmdi, Sauron qoʻshinlarini sarosimaga soldi va Qora Hukmdor saltanatiga soʻnggi nuqtani qoʻydi."
  }
]);

// 8. MORANNON (BLACK GATE)
updatePlace('morannon', [
  {
    title: "Qora Darvoza: Mordorning temir darvozasi",
    content: "Morannon (Sindarincha: 'Qora Darvoza') — Kul Togʻlari (Ered Lithui) va Soya Togʻlari (Ephel Dúath) tutashgan Cirith Gorgor ('Dahshatli Boʻgʻoz') darasida qurilgan ulkan temir mudofaa inshootidir. Darvoza ulkan tosh devor va ikki qanotli temir qopqalardan iborat boʻlgan.\n\nDarvozaning ikki tomonida baland qoyalarda Tish Minoralari (Towers of the Teeth) — Carchost va Narchost qad rostlagan edi. Ushbu minoralar dastlab Soʻnggi Ittifoq urushidan soʻng Gondor tomonidan Mordorni nazorat qilish uchun qurilgan, ammo keyinchalik Sauron kuchlari tomonidan egallangan."
  },
  {
    title: "Qora Darvoza jangi (Battle of the Morannon)",
    content: "3019-yil 25-martida Aragorn va Gandalf boshchiligidagi yetti minglik Gʻarb Lashkari (Host of the West) Morannon ostonasiga yetib keldi. Bu umidsizdek koʻringan yurishning yagona maqsadi Sauronning barcha eʼtiborini Qora Darvozaga qaratish va Frodoga Hukm Togʻiga yetib borish imkonini yaratish edi.\n\nDarvoza ochilib, Sauronning oltmish mingdan ortiq qoʻshini Gʻarb lashkarini qurshovga oldi. Sauronning Elchisi (Mouth of Sauron) muzokaraga chiqdi, ammo Aragorn taslim boʻlishdan bosh tortdi. Uzuk yoʻq qilingan zahoti, Morannon devorlari va Tish Minoralari yer bilan yakson boʻldi."
  }
]);

// 9. CIRITH UNGOL
updatePlace('cirith-ungol', [
  {
    title: "Oʻrgimchak Dovoni va Qora Qalʼa",
    content: "Cirith Ungol (Sindarincha: 'Oʻrgimchak Yorigʻi') — Ephel Dúath (Soya Togʻlari) orqali Mordorga olib boruvchi baland va oʻta xavfli togʻ dovonidir. Bu yerda bahaybat qadimiy maxluq — Ungoliantning soʻnggi nasli boʻlgan Shelob oʻzining qorongʻu toʻrlari bilan in qurgan edi.\n\nDovonning tepasida Cirith Ungol Minorasi qad rostlagan. Ushbu uch qavatli pishiq tosh qalʼa dastlab Gondor tomonidan Minas Ithilni himoya qilish uchun qurilgan, ammo keyinchalik oʻrklar garnizoni qarorgohiga aylangan."
  },
  {
    title: "Frodo va Samning dovondagi sinovlari",
    content: "Gollum Frodo va Samwiseni aynan Cirith Ungol tuzogʻiga boshlab bordi. Shelob Frodoning boʻyniga zaharli nishini urib uni falajlaganida, Samwise Galadriel billuri va Sting xanjari bilan bahaybat maxluqni yaralab qochirdi.\n\nOʻrklar Frodoning tanasini minoraga olib ketganlarida, Shagrat va Gorbag toʻdalari oʻrtasida mithril sovut ustida qonli janjal chiqdi. Samwise minoraga bostirib kirib, qolgan dushmanlarni yengdi va oʻz xoʻjayinini ozod qildi."
  }
]);

// 10. DEAD MARSHES
updatePlace('dead-marshes', [
  {
    title: "Oʻlik Botqoqliklar: Urush va botqoq siri",
    content: "Dead Marshes (Oʻlik Botqoqliklar) — Emyn Muil togʻlaridan sharqda, Dagorlad jang maydoni etagida joylashgan cheksiz, tumanli va zaharli botqoqlikdir. Asrlar davomida botqoqlik kengayib, Soʻnggi Ittifoq urushidagi Dagorlad jangida halok boʻlgan elflar, insonlar va oʻrklarning qabrlarini oʻz domiga tortgan.\n\nBotqoqlik suvlari ostida chirimagan jasadlar — qurollari va ochiq koʻzlari bilan manguga qotib qolgan yuzlar koʻrinib turadi. Suv yuzasida aldamchi shamchiroqlar (will-o'-the-wisp) miltillab yonadi."
  },
  {
    title: "Gollumning xobbitlarni botqoqlikdan olib oʻtishi",
    content: "3019-yil mart oyida Gollum Frodo va Samwiseni Nazgûllar koʻzidan yashirish uchun aynan Oʻlik Botqoqliklar orqali olib oʻtdi. Gollum ularga aldamchi chiroqlarga qaramaslikni va suvga teginmaslikni qatʼiy uqtirdi.\n\nFrodo suv tubidagi elflar va insonlarning fojiaviy yuzlariga termulib, sehrli gipnoz domiga tushib qolayozdi, ammo Samwise uni hushiga keltirdi. Ular qorongʻu tuman ostida botqoqlikni eson-omon kesib oʻtib, Mordor chegaralariga yetib bordilar."
  }
]);
