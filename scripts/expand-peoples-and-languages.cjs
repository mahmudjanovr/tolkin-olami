const fs = require('fs');
const path = require('path');

const peoplesDir = path.resolve('src/content/peoples');
const langsDir = path.resolve('src/content/languages');

function updatePeople(id, modifier) {
  const filePath = path.join(peoplesDir, `${id}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  modifier(data);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`✓ [peoples] ${id}.json yangilandi`);
}

function updateLang(id, modifier) {
  const filePath = path.join(langsDir, `${id}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  modifier(data);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`✓ [languages] ${id}.json yangilandi`);
}

// === PEOPLES EXPANSION (> 500 words) ===

// 1. Noldor
updatePeople('noldor', d => {
  d.summary = "Noldor (Quenya: 'Donishmandlar', 'Chuqur bilim egalari') — Elflarning Ikkinchi qabilasi (Tatyar tarmogʻi) boʻlib, ulugʻvor metallurgiya, tosh oʻymakorligi, tilshunoslik va fojiali tarixiy qismat bilan ajralib turadi. Ular Valinorda Aulë taʼlimini olib, Tirionda yashaganlar, Silmarillar yaratilishi, Alqualondëdagi Qarindosh Qirgʻini, Belerianddagi buyuk qirolliklar (Hithlum, Nargothrond, Gondolin) va Eregiondagi Qudrat Uzuklarining yasalishida markaziy oʻrin tutganlar.";
  d.description_sections = [
    {
      title: "Kelib chiqishi, Finwë va Aulë maktabi",
      content: "Noldor Elflarning Buyuk Sayohati (Great Journey) chogʻida oʻzlarining birinchi Oliy Qiroli Finwë boshchiligida Valinorga yetib borganlar. Ular Túna tepaligida oppoq marmardan qurilgan goʻzal Tirion shahrida qoʻnim topdilar. Tabiatan chuqur bilimga, kashfiyotlarga va moddiy olam sirlarini oʻrganishga chanqoq boʻlgan Noldor hunarmandlik va yer osti metallari xudosi boʻlgan Vala Aulëning eng sevimli shogirdlariga aylandilar. Aulë ularga metallarni eritish, qurollar va zargarlik buyumlari yasash, toshlarni sayqallash va qimmatbaho javohirlar yaratish sirlarini oʻrgatdi. Noldorning eng buyuk dahosi Fëanor Tengwar alifbosini, fikrni uzoq masofaga uzatuvchi Palantír toshlarini va nihoyat Valinordagi Ikki Daraxt (Telperion va Laurelin) nurlarini oʻzida mujassam etgan tengsiz uchta muqaddas Silmaril gavharini yaratdi."
    },
    {
      title: "Morgoth makri, Qasamyod va Alqualondë fojiasi",
      content: "Melkor Noldor orasiga yashirin hasad, shubha va yolgʻon urugʻlarini sochdi. Finwë oʻldirilib, Silmarillar oʻgʻirlab ketilgach, Fëanor oʻzining yetti oʻgʻli bilan birgalikda daxshatli Qasam ichdi. Bu qasam barcha Ilúvatar farzandlariga fojia keltirdi. Valinordan Oʻrta-yerga qaytish uchun kemalar talab qilgan Noldor dengizchi Teleri elflarining oq oqqush kemalarini tortib olish maqsadida Alqualondë bandargohida Birinchi Qarindosh Qirgʻinini sodir etdilar. Shundan soʻng taqdir hukmdori Mandos ularga mashhur «Noldor Qismati» (Doom of Mandos) laʼnatini eʼlon qildi: ularning barcha ezgu ishlari xiyonat bilan tugashi, oʻldirilganlar ruhi Mandos zallarida uzoq yigʻlashi va Ardaning soʻnggi kunigacha Oʻrta-yerda faqat koʻz yosh va qaygʻu topishlari bashorat qilindi. Fëanor kemalarda suzib ketib, ularni yoqib yuborgach, Fingolfin boshchiligidagi asosiy xalq sovuq Helcaraxë muzliklarini yovvoyi azob-uqubat bilan bosib oʻtishga majbur boʻldi."
    },
    {
      title: "Beleriand shohliklari, qahramonlik va inqiroz",
      content: "Beleriandga yetib kelgan Noldor oʻzlarining buyuk shohliklarini qurdilar: Fingolfin va Fingon Hithlumda, Finrod Felagund Nargothrond gʻorlarida, Turgon esa Amon Gwareth tepaligida yashirin Gondolin shahrida hukmronlik qildi. Ular toʻrt yuz yildan ortiq vaqt davomida Angband qalʼasini qamal qilib, Morgoth armiyalarini tutib turdilar. Biroq Dagor Bragollach (Toʻsatdan Alanga jangi) va Nirnaeth Arnoediad (Sanoqsiz Koʻz Yoshlari jangi) natijasida Noldor shohliklari birin-ketin vayron boʻldi. Fingolfin Morgoth bilan yakkama-yakka jangga kirishib, qora hukmdorni yetti bor yaraladi va afsonaviy tarzda halok boʻldi. Oxir-oqibat Fëanor oʻgʻillarining ikkinchi va uchinchi qarindosh qirgʻinlari (Menegroth va Sirion etaklarida) Noldor sharafini yanada yerga urdi."
    },
    {
      title: "Ikkinchi va Uchinchi Davrlar: Eregion va Boqiy Gʻarbga qaytish",
      content: "Gʻazab Urushidan soʻng koʻplab Noldor Valinorga qaytdi, ammo Oʻrta-yerda qolganlar Gil-galad boshchiligida Lindon qirolligiga, Fëanor nabirasi Celebrimbor boshchiligida esa Eregion (Ost-in-Edhil) zargarlar makoniga asos soldilar. Eregionda Noldor mitti-xalq (Khazad-dûm) bilan chuqur doʻstlik oʻrnatdilar va Annatar qiyofasidagi Sauron aldoviga uchrab, Qudrat Uzuklarini yasadilar. Uchinchi Davrda Noldorning soni kamayib bordi; ularning eng buyuk namoyandalari Elrond (Rivendell) va Galadriel (Lothlórien) oʻzlarining elflar uzuklari (Vilya va Nenya) orqali vaqt zangini toʻxtatib, oʻtmish goʻzalligini asrab turdilar. Halqa Urushida Yagona Uzuk yoʻq qilingach, Uch Uzuk ham oʻz kuchini yoʻqotdi va Noldor kemalarga chiqib, Boqiy Gʻarb sari abadiy yoʻl oldilar."
    }
  ];
});

// 2. Sindar
updatePeople('sindar', d => {
  d.summary = "Sindar (Kulrang Elflar) — Teleri qavmining Buyuk Sayohat chogʻida Beleriandda qolib ketgan qismi boʻlib, Elu Thingol va Ilahiya Melian boshchiligidagi Doriath saltanati hamda Círdan boshchiligidagi Falas dengiz boʻyi shohliklarida yuksak madaniyat yaratganlar. Ular Oʻrta-yer tabiatiga eng yaqin, qoʻshiq va musiqa sanʼatida tengsiz boʻlganlar.";
  d.description_sections = [
    {
      title: "Kelib chiqishi va Elwë Singollo siri",
      content: "Sindar elflari dastlab Teleri (Uchinchi Qavm)ning bir qismi boʻlib, ularning yoʻlboshchisi Elwë (Thingol) edi. Beleriand oʻrmonlarida Elwë Nan Elmoth chakalakzorida ilohiy Maia Melian bilan uchrashib, uning husniga mahliyo boʻlib qotib qoladi. Oʻz yoʻlboshchisini qidirgan koʻplab Teleri Gʻarbga ketuvchi suzuvchi Tol Eressëa oroliga chiqishdan bosh tortdilar va Beleriandda qoldilar. Yuz yildan soʻng Elwë Melian bilan birga qaytib kelganida, uning boʻyi barcha elflardan baland, sochlari kumushrang va yuzi ilohiy nur bilan porlab turar edi; u Elu Thingol (Qirol Kulrang-Chopon) nomi bilan Doriathdagi Menegroth (Ming Gʻor) saroyida barcha Sindar ustidan hukmronlik boshladi."
    },
    {
      title: "Melian Kamari va Doriathning gullab-yashnashi",
      content: "Melian oʻzining ilohiy kuchi bilan Doriath oʻrmonlari atrofida «Melian Kamari» (Girdle of Melian) deb atalgan koʻrinmas sehrli toʻsiq oʻrnatdi. Hech bir dushman yoki begona zot Melian va Thingolning ijozatisiz bu chegarani buzib oʻta olmas edi. Natijada Beleriandning qolgan qismida Morgoth dahshatli qonli urushlar olib borgan paytda ham, Doriath tinchlik, musaffo musiqiylik va gullab-yashnash beshigi boʻlib qoldi. Sindarlar Daeron boshchiligida Cirth (Angerthas) runik yozuvini yaratdilar va oʻzlarining mayin, ohangdor Sindarin tilini shakllantirdilar. Ushbu til keyinchalik butun Oʻrta-yerdagi barcha elflarning umumiy muomala tiliga aylandi."
    },
    {
      title: "Círdan va Falathrim dengizchilari",
      content: "Sindarning ikkinchi yirik boʻgʻini — Beleriandning gʻarbiy sohillaridagi Brithombar va Eglarest portlarida yashovchi Falathrim (Sohil Elflari) edi. Ularning yoʻlboshchisi donishmand Kema Ustasi Círdan boʻlib, u Oʻrta-yerdagi eng qadimgi va soqolli yagona elf sifatida eʼtirof etilgan. Falathrimlar Oʻrta-yerda birinchi boʻlib kema yasash va dengizchilik sanʼatini kashf etdilar hamda dengiz xudosi Ulmo va Ossë bilan yaqin muloqotda boʻldilar. Ular Doriath bilan ittifoqda boʻlib, Morgothning qirgʻoqqa boʻlgan hujumlarini uzoq vaqt qaytardilar."
    },
    {
      title: "Doriathning fojiasi va Uchinchi Davrdagi merosi",
      content: "Doriathning osoyishtaligi Beren keltirgan Silmaril tufayli buzildi. Thingol Silmarilni Nauglamír boʻyintumoriga qadash uchun Nogrod mittilarini taklif qildi; ammo ochkoʻzlikka berilgan mitti ustalar Thingolni oʻldirib, xazinani oʻgʻirladilar. Melian motam ichida Valinorga qaytgach, sehrli kamar soʻndi va Doriath Fëanor oʻgʻillarining qonli hujumi natijasida butunlay vayron boʻldi. Omon qolgan Sindarlar Sirion etaklariga qochdilar. Ikkinchi va Uchinchi Davrlarda Sindar zodagonlari (Oropher, Thranduil, Celeborn) sharqqa borib, Greenwood va Lothlóriendagi Silvan elflariga rahbarlik qildilar va elflarning madaniy merosini saqlab qoldilar."
    }
  ];
});

// 3. Dúnedain
updatePeople('dunedain', d => {
  d.summary = "Dúnedain (Sindarin: 'Gʻarb Insonlari') — Birinchi Davr Edain qabilalarining toʻgʻridan-toʻgʻri avlodlari boʻlib, Númenor orolida uch ming yil davomida gullab-yashnagan va orol halokatidan soʻng Oʻrta-yerda Arnor hamda Gondor shohliklariga asos solgan olijanob insonlar elitasidir. Ular baland boʻylari, uzoq umr koʻrishlari, dengizchilik va harbiy sanʼatdagi mahoratlari bilan boshqa odamlardan ajralib turgan.";
  d.description_sections = [
    {
      title: "Númenor orolidagi yuksalish va Elros xonadoni",
      content: "Birinchi Davr oxirida Morgothga qarshi fidokorona kurashgan insonlarga Valar mukofot sifatida dengiz oʻrtasidagi Elenna (Andor) orolini inʼom etdilar. Ularning birinchi shohi Yarim-elf Elros (Tar-Minyatur) boʻldi. Ushbu xalq Dúnedain («Gʻarbiy Insonlar») nomini oldi. Eru ularga oddiy odamlarnikidan uch-toʻrt barobar uzoqroq umr (200 dan 400 yilgacha), jismoniy quvvat va kasalliklarga chidamlilik ato etdi. Ular buyuk shaharlar (Armenelos, Andúnië), baland minoralar va dunyo okeanlarini zabt etgan ulkan flotlar qurdilar. Dúnedainlar Oʻrta-yer qirgʻoqlariga kelib, yovvoyi insonlarga fan, meʼmorchilik va qishloq xoʻjaligini oʻrgatdilar."
    },
    {
      title: "Sadoqatlilar (Elendili) va Qora Númenorliklar boʻlinishi",
      content: "Asrlar oʻtib, oʻlimdan qoʻrqish vasvasasi va Boqiy Gʻarbdan mahrum boʻlish alamiga chiday olmagan koʻpchilik númenorliklar («Shoh Odamlari») Valarga qarshi isyon koʻtardilar. Ular elflar tilini taqiqlab, Adûnaic tilini joriy qildilar. Faqat Andúnië lordlari boshchiligidagi kichik bir qism — Sadoqatlilar (Elendili) Eru va Elflar bilan qasamyodga sodiq qoldilar. Ar-Pharazôn Sauronning aldamchiligiga uchrab Boqiy Yerlarga hujum qilgach, butun Númenor oroli gʻarq boʻldi. Sadoqatlilar yetakchisi Elendil va uning oʻgʻillari Isildur hamda Anárion toʻqqizta kemada Oʻrta-yerga qochib keldilar."
    },
    {
      title: "Oʻrta-yerdagi Ikki Qirollik: Arnor va Gondor",
      content: "Elendil Oʻrta-yerda Dúnedainning Shimoliy Qirolligi — Arnorga asos soldi (poytaxti Annúminas), oʻgʻillari esa Janubiy Qirollik — Gondorga (poytaxti Osgiliath) asos soldilar. Soʻnggi Ittifoq Urushida Elendil va Gil-galad Sauronni yengib halok boʻldilar, Isildur esa Barad-dûr hukmdorining barmogʻidan Uzukni kesib oldi. Uchinchi Davrda Arnor uch mayda knyazlikka (Arthedain, Cardolan, Rhudaur) boʻlinib ketdi va Angmar Jodugar-qirolining tinimsiz urushlari oqibatida butunlay quladi. Omon qolgan shimoliy Dúnedainlar Darbadarlar (Rangers of the North)ga aylanib, yovvoyi dashtlarda yashirincha Shayr va Eriador xalqlarini himoya qildilar."
    },
    {
      title: "Qayta Birlashgan Qirollik va Elessar davri",
      content: "Gondor shohligi ming yillar davomida sharqiy va janubiy dushmanlar (haradliklar, sharqliklar) hujumiga bardosh berdi, biroq Shoh Eärnur vafotidan soʻng taxt boʻsh qolib, shahar Bosh Noiblar (Stewards) tomonidan boshqarildi. Dúnedain qoni aralashuvlar va urushlar tufayli kamayib bordi. Halqa Urushida Shimoliy Darbadarlar yoʻlboshchisi Aragorn II Isildur vorisi sifatida Andúril qilichini koʻtarib chiqdi va Minas Tirithni qutqardi. U Elessar nomi bilan taxtga oʻtirib, Arnor va Gondorni birlashtirdi. Dúnedainlar yana oʻzlarining tarixiy shon-sharafiga erishib, Oʻrta-yerning Toʻrtinchi Davrdagi asosiy yetakchi xalqiga aylandilar."
    }
  ];
});

// 4. Edain
updatePeople('edain', d => {
  d.summary = "Edain (Sindarin: 'Insonlar', Birlamchi Otalar) — Birinchi Davrda sharqdagi Hildóriendan Beleriandga koʻchib kelgan va Noldor elflari bilan Morgothga qarshi abadiy ittifoq tuzgan uchta olijanob inson qabilasi (Bëor, Haleth va Hador xonadonlari)dir. Ular oʻzlarining cheksiz jasorati, sadoqati va fojiali taqdirlari bilan butun Oʻrta-yer tarixining eng yuksak qahramonlik dostonlarini yaratganlar.";
  d.description_sections = [
    {
      title: "Hildórien uygʻonishi va Gʻarb sari buyuk yurish",
      content: "Insonlar Quyoshning ilk chiqishi bilan Ardaning sharqiy chekkasidagi Hildórien zaminida uygʻondilar. Dastlab ular Morgothning yolgʻonlariga duch keldilar, ammo ularning eng pokiza qismi zulmatdan qochib, yorugʻlik va donishmandlik izlab gʻarbga qarab yoʻl oldilar. Asrlar davom etgan mashaqqatli migratsiyadan soʻng ular Moviy Togʻlar (Ered Luin)dan oshib Beleriandga kirdilar. Ossiriand oʻrmonlarida ularni birinchi boʻlib elf shohi Finrod Felagund uchratdi. Finrod ularning sodda, ammo goʻzal tabiatini koʻrib, ularga elflar tilini, qoʻshiqlarini va hunarlarini oʻrgatdi; insonlar esa Finrodni 'Nom' ('Donishmand') deb atadilar."
    },
    {
      title: "Uch Xonadon: Bëor, Haleth va Hador",
      content: "Edain uchta mustaqil xonadonga boʻlingan edi: 1. Bëor Xonadoni — eng birinchi boʻlib kelgan, qora sochli, jiddiy, fikrlashga moyil va Noldorga eng yaqin xalq (Beren Erchamion shu urugʻdan); 2. Haleth Xonadoni (Haladin) — mustaqil, oʻrmon ovchilari boʻlib, Brethil oʻrmonida erkin yashagan va oʻzlarining dovyurak ayol yoʻlboshchisi Haleth bilan mashhur boʻlgan; 3. Hador Xonadoni (Marach avlodlari) — eng koʻp sonli, sariq sochli, koʻk koʻzli, boʻylari baland va jangda tengsiz bahodirlar boʻlib, Dor-lómin oʻlkasiga joylashganlar (Húrin, Huor va Túrin Turambar shu xonadondan)."
    },
    {
      title: "Beleriand urushlari va buyuk fojialar",
      content: "Edain Noldor bilan birgalikda Beleriandning barcha qonli janglarida mardona qatnashdilar. Dagor Bragollach jangida Barahir Finrodning hayotini saqlab qoldi va Barahir uzugini inʼom oldi. Nirnaeth Arnoediad jangida Húrin va Huor boshchiligidagi Hador jangchilari Turgon qoʻshini Gondolinga bexatar chekinishi uchun Serech botqogʻida soʻnggi odamgacha oʻlimga tik turdilar. Huor koʻziga oʻq tegib halok boʻldi, Húrin esa yetmishdan ortiq orkni oʻldirib, asir tushdi. Edain xalqi Morgoth tomonidan qul qilindi, ayollar va bolalar azob-uqubatlarga duchor boʻldi, biroq ularning qalbida ozodlik oʻti soʻnmadi."
    },
    {
      title: "Gʻazab Urushi va Númenor mukofoti",
      content: "Edainning fidoiyligi natijasida insonlar va elflar oʻrtasida buyuk sulolalar birlashuvi yuz berdi: Beren va Lúthien, Tuor va Idril nikohlaridan Eärendil va Elwing dunyoga keldilar. Eärendil Valinorga borib shafqat soʻragach, Valar qoʻshini Beleriandni qutqardi. Gʻazab Urushida omon qolgan Edain xalqiga buyuk mukofot sifatida dengiz oʻrtasidagi yangi yulduz oroli — Númenor tuhfa etildi. Edainlar yangi vatanda Dúnedain nomini olib, insoniyat tarixidagi eng buyuk dengiz imperiyasini barpo etdilar."
    }
  ];
});

// 5. Rohirrim
updatePeople('rohirrim', d => {
  d.summary = "Rohirrim (Sindarin: 'Otliqlar Xalqi', Ot Hukmdorlari) — Anduin vodiysining qadimgi Éothéod qabilasidan kelib chiqqan, Gondor bilan muqaddas Eorl Qasami orqali bogʻlangan va Calenardhon dashtlarida Rohan qirolligiga asos solgan jasur otliqlar xalqidir. Ular oʻzlarining afsonaviy Mearas tulporlari, nayzabozlik mahoratlari va ochiq dashtlardagi erkin hayot tarzi bilan mashhur.";
  d.description_sections = [
    {
      title: "Éothéod ildizlari va Eorl Yosh jasorati",
      content: "Rohirrimlarning ajdodlari Anduin daryosining shimoliy havzalarida, Tumanli Togʻlar etaklarida yashovchi Éothéod («Ot Odamlari») deb ataluvchi shimoliy insonlar edi. Uchinchi Davr 2510-yilda Gondor sharqdan bostirib kelgan Balchoth toʻdalari tomonidan halokat yoqasiga kelib qolganda, Gondor noibi Cirion shimolga yordam soʻrab choparlar yubordi. Éothéodning yosh yetakchisi Eorl chaqiruvga darhol javob berib, oʻzining yetti ming kishilik otliq qoʻshini bilan mislsiz tezlikda janubga shoshildi. Celebrant Maydoni jangida Eorl otliqlari dushmanning orqasidan zarba berib, Gondorni muqarrar qirgʻindan qutqarib qoldilar."
    },
    {
      title: "Eorl Qasami va Calenardhonning inʼom etilishi",
      content: "Gʻalabadan soʻng noib Cirion va Eorl Yosh Halifirien tepaligida, Elendilning qadimiy maxfiy qabri ustida abadiy doʻstlik va oʻzaro yordam qasamini ichdilar (Eorl Qasami). Gondor Eorl xalqiga kimsasiz qolgan keng Calenardhon dashtlarini sovgʻa qildi; bu zamin keyinchalik Rohan («Riddermark» — Otliqlar oʻlkasi) nomini oldi. Eorl poytaxt sifatida Edoras shahriga asos soldi va uning oʻgʻli Brego u yerda mashhur Meduseld Oltin Saroyini qurdi."
    },
    {
      title: "Rohan madaniyati, Mearas tulporlari va hayot tarzi",
      content: "Rohirrimlar qadimgi anglo-sakson jangchilariga oʻxshash jasur, sofdil, musiqani va dostonlarni sevadigan xalqdir. Ularning butun hayoti otlar bilan chambarchas bogʻlangan. Rohan otlari Oʻrta-yerdagi eng zotdor va chidamli tulporlar hisoblanadi; ularning shohona zoti — Mearaslar (Fëanor otlari yoki Oromë tulpori Nahar naslidan kelgan deb ishoniladi) insoniy aql-idrokka ega boʻlib, ularni faqat Rohan shohlari va Gandalf (Shadowfax / Soya-yol) jilovlay olgan. Rohirrimlar devorlar bilan oʻralgan shaharlarda emas, balki keng yashil dashtlarda, erkin qishloqlarda yashashni afzal koʻradilar."
    },
    {
      title: "Helm Hammerhand fojiasi va Pelennor dalalaridagi shon-sharaf",
      content: "Uchinchi Davr 2758-yilda Dunlandliklar bostirib kirib, qattiq qahraton qishda Rohanni egallaganlarida, toʻqqizinchi shoh Helm Hammerhand (Bolgʻaqoʻl) oʻz xalqini Hornburg qalʼasiga (keyinchalik Helm darasi) boshlab bordi. Helm sovuq tunda yakka oʻzi qurolsiz chiqib, dushmanlarni mushti bilan yer tishlatgan va muzlab qotib turgan holda ham dushmanga dahshat solgan afsonaviy bahodirdir. Halqa Urushida esa qirol Théoden Gandalf yordamida Saruman taʼsiridan qutulib, Helm jangida gʻalaba qozondi va olti ming otliq bilan Pelennor dalalariga yetib bordi. Ushbu jangda Théoden qahramonlarcha halok boʻldi, uning jiyani Éowyn esa Nazgûllar yoʻlboshchisini yer tishlatdi; yangi shoh Éomer esa Gondor bilan qadimiy qasamni yangilab, Toʻrtinchi Davrda ham tinchlik posboni boʻlib qoldi."
    }
  ];
});

// 6. Xobbitlar
updatePeople('xobbitlar', d => {
  d.summary = "Xobbitlar (Halflings / Kuduk) — Oʻrta-yerning shimoli-gʻarbidagi Shayr va Bree hududlarida yashovchi, boʻylari past (inson boʻyining yarmidek), oyoqlari qalin jundan qoplangan, tinchliksevar, mehmondoʻst va tuproqqa mehr qoʻygan xalqdir. Ular tarixiy sahnalarga kech chiqqan boʻlsalar-da, Yagona Uzukni yoʻq qilishda va Oʻrta-yerni Sauron zulmatidan qutqarishda hal qiluvchi rol oʻynaganlar.";
  d.description_sections = [
    {
      title: "Uchta qadimgi urugʻ: Tuklar, Badbasharalar va Qorachalar",
      content: "Xobbitlar qadimgi davrlarda Anduin daryosining yuqori havzalarida, Tumanli Togʻlar etaklarida yashaganlar. Ular uchta mustaqil urugʻdan iborat boʻlgan: 1. Harfoots (Qorachalar) — eng koʻp sonli, terisi qorachadan kelgan, boʻylari eng past, qoʻl mehnatiga usta, yer qazib qulay xobbit inlarida yashashni sevuvchi xalq; 2. Fallohides (Oqbilaklar / Tuklar) — boʻylari balandroq, terisi oq va sochi malla, elflar bilan doʻstona aloqada boʻlgan, daraxtzorlar va sarguzashtlarga moyil urugʻ (Baggins va Took xonadonlari shu qondan); 3. Stoors (Badbasharalar) — qoʻllari va oyoqlari keng, suv va qayiqlarni yaxshi koʻradigan, daryo boʻylarida yashovchi urugʻ (Sméagol / Gollum aynan Stoor urugʻidan chiqqan)."
    },
    {
      title: "Gʻarb sari koʻchish va Shayrning tashkil topishi",
      content: "Uchinchi Davrning birinchi ming yilligi oxirida Greenwood oʻrmonida Qora Qalʼa (Dol Guldur) zulmati paydo boʻlgach, xobbitlar Tumanli Togʻlardan oshib Eriador sari koʻchdilar. 1601-yilda aka-uka Fallohide xobbitlari Marcho va Blanco Arthedain shohi Argeleb II dan ruxsat olib, Brandywine daryosidan oʻtdilar va Shayr (The Shire) oʻlkasiga asos soldilar. Ushbu sana Shayr Taqvimi (Shire Reckoning — S.R. 1)ning boshlanishi boʻldi. Xobbitlar shohga faqat yoʻllarni ochiq tutish va pochta xizmatini yuritish sharti bilan oʻzlarining toʻliq ichki erkinligiga ega boʻldilar."
    },
    {
      title: "Hayot tarzi, trubka chekish va qahvaxonalar madaniyati",
      content: "Xobbitlar qishloq xoʻjaligi, polizchilik, pivo tayyorlash va kulinariya bilan shugʻullanadigan begʻam xalqdir. Ular kuniga olti mahal yaxshi ovqatlanishni, bayramlar oʻtkazishni va sovgʻa ulashishni (Mathom) sevadilar. Oʻrta-yerda eng mashhur madaniy ixtirolardan biri — trubka oʻtini (pipe-weed / Nicotiana) kashf etish va chekish sanʼati aynan Longbottomlik Tobold Hornblower tomonidan yoʻlga qoʻyilgan. Xobbitlar urush va siyosatdan uzoq yuradilar; ularning birdan-bir rasmiy mansabi Michel Delving Meri va Thain (harbiy boshliq) boʻlib, ular faqat marosimlarni boshqaradi."
    },
    {
      title: "Yashirin jasorat va Uzuk Urushidagi buyuk gʻalaba",
      content: "Tolkien taʼkidlaganidek, xobbitlarning eng ajoyib fazilati — ularning oddiy koʻrinishi ortida yashiringan buyuk ruhiy va jismoniy chidamlilikdir. Ular ochlik, sovuq va qiyinchiliklarga boshqa har qanday irqdan koʻra yaxshiroq dosh beradilar. Bilbo Bagginsning Erebor safaridagi aqli va Yagona Uzukni topishi, Frodo Bagginsning Mordor oloviga Uzukni eltishi, Samwise Gamgeening cheksiz sadoqati hamda Merry va Pippinning Entlar bilan Isengardni olishi va Jodugar-qirolni magʻlub etishi Oʻrta-yer taqdirini butunlay oʻzgartirdi. Shayr jangi (Bywater) bilan xobbitlar oʻz yurtlarini ham ozod qilib, buyuk dostonlarning markaziga aylandilar."
    }
  ];
});

// 7. Xazad (Mittilar)
updatePeople('xazad', d => {
  d.summary = "Xazad (Mittilar / Naugrim / Qadimgi Durin Xalqi) — Vala Aulë tomonidan Ilúvatar farzandlari uygʻonishidan oldin yashirincha toshdan yaratilgan, pishiq-puxta, magʻrur, metallsozlik va togʻ-kon sanʼatida tengsiz yerosti xalqidir. Ular Moria (Khazad-dûm), Erebor va Moviy Togʻlarda buyuk yerosti saltanatlarini qurganlar.";
  d.description_sections = [
    {
      title: "Aulëning yaratishi va Yetti Ota uygʻonishi",
      content: "Temirchi Vala Aulë Ilúvatar farzandlarining kelishini sabrsizlik bilan kutib, Oʻrta-yer zulmatiga dosh bera oladigan baquvvat, qatʼiyatli mavjudotlarni yaratishga qaror qildi va yer tubidagi toshlardan Yetti Mitti Otani shakllantirdi. Biroq Eru Ilúvatar buni fosh qilgach, Aulë oʻz xatosini tan olib, ularni bolgʻa bilan urib yoʻq qilmoqchi boʻldi. Shunda tosh maxluqlar qoʻrquvdan titrab, shafqat soʻradilar; Eru Aulëning kamtarligi va tavbasini qabul qilib, ularga mustaqil erkin jon (Fëa) ato etdi. Biroq Eruning irodasiga binoan, mittilar elflar uygʻonmaguncha uzoq gʻorlarda uyquda qoldirildi. Birinchi boʻlib uygʻongan Durin Boqiy Gundabad togʻidan chiqib, Tumanli Togʻlar qaʼrida buyuk Khazad-dûm saltanatiga asos soldi."
    },
    {
      title: "Yetti Qabila va Moviy Togʻlar shaharlari",
      content: "Mittilar yetti mustaqil urugʻga boʻlingan: Longbeards (Uzunsoqollar / Durin xalqi), Broadbeams va Firebeards (Ered Luindagi Nogrod va Belegost shaharlariga asos solganlar), Ironfists, Stiffbeards, Blacklocks va Stonefeet (Uzoq Sharqiy togʻlarda yashovchilar). Birinchi Davrda Nogrod va Belegost mittilari Beleriand elflari bilan savdo-sotiq qildilar va Thingol uchun Menegrothning Ming Gʻorini qurdilar. Telchar nomli norgodlik buyuk temirchi Narsil qilichi va Angrist pichogʻini, shuningdek Dor-lómin Ajdar dubulgʻasini yaratgan. Biroq Silmaril sababli yuzaga kelgan nizo va Thingolning oʻldirilishi Elflar va Mittilar oʻrtasida asrlar davom etgan sovuqlikka asos soldi."
    },
    {
      title: "Moria (Khazad-dûm) va afsonaviy Mithril",
      content: "Durin xalqi yashagan Khazad-dûm mittilarning eng buyuk, eng boy va eng daxlsiz saltanati edi. Bu yerda Oʻrta-yerdagi eng qimmatbaho metall — poʻlatdan oʻn barobar mustahkam, ammo ipakdek yengil boʻlgan kumushrang Mithril (Haqiqiy Kumush) qazib olinar edi. Ikkinchi Davrda Moria mittilari Eregion Noldor elflari bilan chuqur birodarlik oʻrnatdilar; Morianing Gʻarbiy Darvozasini elf Celebrimbor va mitti Narvi birgalikda yasadilar. Biroq Uchinchi Davrda mittilar mithril ilinjida togʻ tubini juda chuqur qazib yubordilar va Birinchi Davrdan beri yer ostida uxlab yotgan qadimgi iblis — Durin Balrogini uygʻotib yubordilar. Oltinchi Durin va uning oʻgʻli Nain halok boʻlgach, mittilar Moriani tashlab qochishga majbur boʻldilar."
    },
    {
      title: "Erebor, Smaug kulfati va Besh Armiya Jangi",
      content: "Qochqin mittilar Shimolda Yolgʻiz Togʻ (Erebor) va Temir Tepaliklar (Iron Hills)da yangi shohliklar barpo etdilar. Thrór shohligi davrida Erebor ulkan boylik toʻpladi va togʻ yuragi boʻlgan afsonaviy Arkenstone (Togʻ Gavhari) topildi. Biroq boylik hidini olgan qanotli oltin ajdar Smaug bostirib kelib, shaharni vayron qildi va xazinani egalladi. Oradan ikki yuz yil oʻtgach, Thorin Oakenshield Gandalf va Bilbo Baggins yordamida oʻz vatanini qaytarib olish uchun xatarli safarga chiqdi. Smaug oʻldirilgach, Besh Armiya Jangida orklar tor-mor etildi va Dáin II Ironfoot boshchiligida Togʻ Ostidagi Qirollik qayta tiklandi. Halqa Urushida mittilar Sauronning shimoliy qoʻshinlariga qahramonlarcha qarshilik koʻrsatib, gʻalabaga ulkan hissa qoʻshdilar."
    }
  ];
});

// 8. Istari
updatePeople('istari', d => {
  d.summary = "Istari (Sehrgarlar / Donishmandlar) — Uchinchi Davrning taxminan 1000-yillarida Valar tomonidan Oʻrta-yer xalqlariga Sauron zulmatiga qarshi kurashda koʻmaklashish, ularni birlashtirish va ruhlantirish uchun yuborilgan Maiar ruhlaridan iborat beshta muqaddas elchidir. Ular qudratli farishta qiyofasida emas, balki qari, charchagan, ammo baquvvat insonlar qiyofasida zaminga tushganlar.";
  d.description_sections = [
    {
      title: "Valinor Kengashi va elchilik vazifasi",
      content: "Uchinchi Davrda Sauronning ruhi yana Oʻrta-yerda kuchayib, Dol Guldurda yashiringanida, Valinor hukmdori Manwë buyuk Kengash chaqirdi. Valar Sauronga qarshi toʻgʻridan-toʻgʻri harbiy kuch bilan aralashmaslikka, Birinchi Davrdagi kabi qitʼalarni vayron qiluvchi urush ochmaslikka qaror qildilar. Buning oʻrniga kamtarin, keksaygan inson tanasiga (Hröa) kiritilgan elchilar joʻnatilishi belgilandi. Ularga oʻzlarining asl ilohiy qudratini ochiq koʻrsatish, qoʻrquv yoki kuch vositasida insonlar va elflarni boʻysundirish qatʼiyan man etildi; ularning burchi faqat maslahat berish, donishmandlik ulashish va xalqlarning ichki irodasini uygʻotish edi."
    },
    {
      title: "Besh Sehrgar va ularning taqdirlari",
      content: "Oʻrta-yerga jami beshta Istari yetib keldi: 1. Saruman Oq (Curunír / Curumo) — Aulë xizmatkori boʻlib, ordenning birinchi va eng bilimdon yetakchisi edi; 2. Gandalf Kulrang (Mithrandir / Olórin) — Manwë va Nienna shogirdi, rahm-shafqat va sabr-toqat egasi; 3. Radagast Jigarrang (Aiwendil) — Yavanna xizmatkori boʻlib, hayvonlar va qushlarning eng yaqin doʻsti; 4 va 5. Alatar va Pallando (Ithryn Luin — Moviy Sehrgarlar) — Oromë xizmatkorlari boʻlib, Sauronning sharqdagi va janubdagi mustamlakalariga qarshi harakat qilish uchun Uzoq Sharqqa ketganlar va u yerda sirli taqdirga uchraganlar."
    },
    {
      title: "Círdanning koʻrishi va Olov Uzugi Narya",
      content: "Sehrgarlar Kulrang Bandargohlarga (Mithlond) kemada yetib kelganlarida, ularni Kema Ustasi Círdan kutib oldi. Círdan oʻzining bashoratomuz nigohi bilan Sarumanning buyukligiga qaramasdan, eng toza, eng sodiq va eng chuqur qalb egasi Gandalf ekanini darhol angladi. Shu sababli Círdan oʻzida saqlanayotgan Elflarning Uch Uzugidan biri — Olov Uzugi Naryani yashirincha Gandalfga topshirdi: «Bu Uzuk bilan sen odamlarning sovuq qotgan qalblariga jasorat va umid olovini yoqasan». Saruman buni bilib qolib, oʻz qalbida Gandalfga nisbatan yashirin hasad va gina saqlay boshladi."
    },
    {
      title: "Saruman xiyonati va Gandalfning gʻalabasi",
      content: "Saruman yillar davomida Orthanc minorasida Palantírdan foydalanib, Yagona Uzuk va Sauron qudratini oʻrganishga berilib ketdi. Kibr va hokimiyat hirsiga berilgan Oq Sehrgar oʻz burchiga xiyonat qildi va Sauron bilan ittifoq tuzib, orklar armiyasini yigʻdi. Unga qarama-qarshi oʻlaroq, Gandalf xobbitlar, odamlar va elflar orasida tinimsiz kezib, kichik narsalarning buyuk ahamiyatiga ishondi. Moria qulashida Balrog bilan jangda Gandalf oʻz hayotini fido qildi, biroq Eru Ilúvatarning bevosita inoyati bilan u «Gandalf Oq» qiyofasida qaytarildi. Gandalf Sarumanning hassasini sindirib, uni ordendan quvib chiqardi va Uzuk Urushini gʻalabaga yetaklagan yagona sodiq elchiga aylandi."
    }
  ];
});

// 9. Númenorliklar
updatePeople('numenorliklar', d => {
  d.summary = "Númenorliklar (Dúnedain / Gʻarb Shohlari) — Ikkinchi Davrda Buyuk Dengiz oʻrtasidagi Andor (Elenna) orolida yashagan, insoniyat tarixidagi eng qudratli dengiz imperiyasi va texnologik sivilizatsiyasiga asos solgan xalqdir. Ular oʻzlarining ulkan meʼmorchiligi, kemasozligi va uzoq umrlari bilan ajralib turganlar, biroq kibr va oʻlimdan qoʻrqish oqibatida butun qitʼalari okean qaʼriga gʻarq boʻlgan.";
  d.description_sections = [
    {
      title: "Yulduz Oroli va buyuk sivilizatsiya poydevori",
      content: "Birinchi Davr urushlarida Noldor bilan yelkama-yelka turgan Edain qabilalariga mukofot sifatida Valar dengiz oʻrtasida besh burchakli yulduz shaklidagi Númenor (Gʻarbdagi Oʻlka) orolini barpo etdilar. Uchinchi Davr boshlarida Elros (Tar-Minyatur) orolning birinchi qiroli boʻldi. Poytaxt Armenelos shahrida shohona qasrlar qad koʻtardi, orol markazidagi muqaddas Meneltarma choʻqqisi esa Yaratuvchi Eruga shukronalik keltiriladigan eng oliy ziyoratgohga aylandi. Númenorliklarga uzoq umr, cheksiz aql-zakovat va tabiat boyliklari berildi."
    },
    {
      title: "Dengizchilik qudrati va Oʻrta-yerdagi portlar",
      content: "Númenorliklar kemasozlik sanʼatida shunday yuksaklikka erishdilarki, ularning yogʻoch va poʻlat qoplamali kemalari barcha dengizlarni kezib chiqdi. Oltinchi shoh Tar-Aldarion Buyuk Dengizchilar Gildiyasiga asos soldi. Ular Oʻrta-yer qirgʻoqlariga kelib, Lond Daer, Pelargir va Umbar kabi ulkan istehkom-shaharlar qurdilar. Dastlab ular Oʻrta-yerning yovvoyi odamlariga shifokorlik, qonunchilik va dehqonchilikni oʻrgatuvchi murabbiylar boʻldilar; elflar bilan qalin doʻstlik oʻrnatdilar."
    },
    {
      title: "Maʼnaviy inqiroz va Qora Númenorliklar",
      content: "Biroq asrlar oʻtib, númenorliklar qalbida oʻlimdan qoʻrqish va Boqiy Gʻarbdagi elflarning boqiyligiga nisbatan hasad paydo boʻldi. Valar ularga oʻlim laʼnat emas, balki Eruning erkin inʼomi ekanini tushuntirishga urinishdi, ammo shohlar bu nasihatlarga quloq solmadilar. Ular Oʻrta-yer xalqlariga yordam berish oʻrniga, ularni shafqatsiz talovchi va qul qiluvchi zolimlarga aylandilar. Xalq ikki toifaga boʻlindi: aksariyat qismi — Shoh Odamlari (keyinchalik Qora Númenorliklar) va kam sonli Sadoqatlilar (Elendili)."
    },
    {
      title: "Akallabêth: Kibrning yakuniy toʻfoni",
      content: "Yigirma toʻrtinchi shoh Ar-Pharazôn Oʻrta-yerga qoʻshin tortib, Sauronni asir oldi. Bu Sauronning tuzogʻi edi: u tez orada qirolning yaqin maslahatchisiga aylanib, Armenelosda Melkor ibodatxonasini qurdirdi va insonlarni qurbonlik qila boshladi. Keksayib qolgan Ar-Pharazôn boqiylikni kuch bilan tortib olish uchun ulkan armada bilan Boqiy Yerlarga bostirib bordi. Eru Ilúvatar dengizlarni harakatga keltirdi: ulkan toʻlqin butun orolni yutib yubordi va sivilizatsiya dengiz tubiga choʻkdi. Faqat Elendil va uning oʻgʻillari toʻqqiz kemada qochib qutulib, Oʻrta-yerda yangi davrni boshladilar."
    }
  ];
});

// 10. Entlar
updatePeople('entlar', d => {
  d.summary = "Entlar (Onodrim / Daraxt-posbonlar) — Vala Yavannaning iltijosi bilan Eru Ilúvatar tomonidan Daraxtlar uygʻonishidan oldin yaratilgan, bahaybat daraxtsimon gavdaga ega, oʻrmonlar va oʻsimliklarni boltalar hamda olovdan asrovchi eng qadimiy tirik jonzotlardir. Ular Fangorn oʻrmonida yashab, Uzuk Urushida Isengardni yakson qilish orqali tarixiy burilish yasaganlar.";
  d.description_sections = [
    {
      title: "Yavannaning xavotiri va Entlarning yaratilishi",
      content: "Vala Aulë mittilarni yashirincha yaratganini bilganida, uning rafiqasi — barcha oʻsimliklar va tirik tabiat onasi boʻlgan Yavanna qattiq tashvishga tushdi. U Aulëga: «Sening yaratganlaring yer bagʻrini kavlaydilar, mening daraxtlarimni esa ayovsiz chopib tashlaydilar», dedi. Yavanna Manwë huzuriga borib, oʻrmonlarni himoya qiladigan tirik vujudlar soʻradi. Eru Ilúvatar Yavannaning iltijosini qabul qilib, oʻrmonlar posboni boʻlgan Entlarni (Onodrim) barpo etdi. Elflar Oʻrta-yerda uygʻonganlarida, Entlarga gapirishni oʻrgatdilar; Entlar esa soʻzlarni va tillarni sevib qoldilar."
    },
    {
      title: "Fangorn oʻrmoni va Treebeard (Daraxtsoqol)",
      content: "Birinchi Davrda Entlar butun Oʻrta-yerni qoplagan cheksiz oʻrmonlar boʻylab erkin kezib yurganlar. Uchinchi Davrga kelib ularning yashash hududi faqat Tumanli Togʻlar etagidagi qadimiy Fangorn oʻrmonigacha qisqarib qoldi. Ularning eng keksa oqsoqoli Fangorn (Treebeard / Daraxtsoqol) boʻlib, u Oʻrta-yerdagi eng qadimgi tirik jonzot hisoblanadi. Entlar tashqi koʻrinishidan eman, zarang yoki togʻterakka oʻxshaydilar; ularning tanasi qattiq qobiq bilan qoplangan, koʻzlari chuqur donishmandlik va oʻtmish xotirasi bilan porlab turadi. Ular har bir masalani juda sekin, soatlab va kunlab muhokama qilishni afzal koʻradilar."
    },
    {
      title: "Yoʻqolgan Ent-xotinlar (Entwives) dardi",
      content: "Entlar tarixidagi eng katta fojia — ularning ayollari (Entwives)ning yoʻqolib qolishidir. Erkak Entlar yovvoyi, baland oʻrmonlarni, sharsharalarni va togʻlarni sevsalar, ularning xotinlari bogʻdorchilik, gullar, mevalar va dehqonchilikni sevar edilar. Ent-xotinlar Anduin daryosidan oʻtib, Qoʻngʻir Zaminlar (Brown Lands)da goʻzal bogʻlar barpo etdilar va insonlarga ekin ekishni oʻrgatdilar. Biroq Ikkinchi Davr oxirida Soʻnggi Ittifoq Urushi paytida Sauron bu hududni olov bilan kuydirib, butunlay choʻlga aylantirdi. Oʻshandan beri Ent-xotinlar izsiz yoʻqoldi; Entlar butun Oʻrta-yerni kezib ularni qidirdilar, ammo topa olmadilar, natijada yangi kichik Entlar (Entings) tugʻilmay qoldi."
    },
    {
      title: "Isengardga yurish va mashinaning qulashi",
      content: "Halqa Urushida Merry va Pippin Fangorn oʻrmoniga qochib kelib, Treebeard bilan uchrashdilar. Ular Sarumanning oʻz pechlarini yoqish uchun tirik daraxtlarni ommaviy ravishda chopib tashlayotganini koʻrsatdilar. Uch kunlik Entmoot (Kengash)dan soʻng, Entlarning sekin uygʻonuvchi dahshatli gʻazabi portladi. Ular Isengard qalʼasiga bostirib keldilar. Entlar oʻzlarining yalangʻoch qudratli qoʻllari bilan Sarumanning qalin tosh devorlarini xuddi non kabi parchalab tashladilar va Isen daryosi toʻgʻonini buzib, butun yerosti sanoat fabrikalarini suv ostida qoldirdilar. Bu gʻalaba Sauron va Sarumanning shimoliy qanotini butunlay tor-mor etdi."
    }
  ];
});

// 11. Nandor va Silvan Elflari
updatePeople('nandor-va-silvan', d => {
  d.summary = "Nandor va Silvan Elflari (Oʻrmon Elflari / Tawarwaith) — Buyuk Sayohat chogʻida Tumanli Togʻlar viqoridan choʻchib yoʻldan qaytgan Teleri qavmi avlodlari boʻlib, Anduin vodiysi, Greenwood the Great (Mirkwood) va Lothlórien oʻrmonlarida tabiat bilan uygʻun, sokin hayot kechirgan xalqdir.";
  d.description_sections = [
    {
      title: "Lenwëning orqaga qaytishi va Nandorning ajralishi",
      content: "Elflarning Buyuk Sayohati chogʻida Teleri qavmi ulkan Tumanli Togʻlar (Misty Mountains) etagiga yetib kelganida, ularning koʻziga bu qorli choʻqqilar bulutlarni teshib turgan dahshatli toʻsiq boʻlib koʻrindi. Shunda Teleri yoʻlboshchilaridan biri Lenwë qavmning bir qismini ajratib olib, togʻlardan oshishdan bosh tortdi va ularni Buyuk Anduin daryosi boʻylab janubga boshlab ketdi. Bu xalq Nandor («Orqaga qaytganlar») deb ataldi. Ular oʻrmonlar, oqar suvlar va qushlar tilini chuqur oʻrgandilar, ammo Valinor nurini koʻrmaganlari sababli Moriquendi (Zulmat Elflari) qatorida qoldilar."
    },
    {
      title: "Denethor va Ossiriand Yashil Elflari (Laiquendi)",
      content: "Asrlar oʻtib, Lenwëning oʻgʻli Denethor oʻz xalqining bir qismini Moviy Togʻlardan oshirib Beleriandning sharqiy hududi — Ossiriandga («Yetti Daryo Zamini») boshlab keldi. Qirol Thingol ularni qardosh sifatida qabul qildi. Bu xalq Laiquendi (Yashil Elflar) deb ataldi, chunki ular oʻrmon barglari kabi yashil liboslar kiyib, koʻrinmas holda yashardilar. Birinchi Beleriand Jangida Denethor Amon Ereb tepaligida orklar qurshovida qahramonlarcha halok boʻlgach, Yashil Elflar boshqa hech qachon shoh saylamadilar va ochiq urushlardan chetlanib, faqat yashirin pistirmalar orqali oʻzlarini himoya qildilar."
    },
    {
      title: "Mirkwood va Lothlórienda Silvan madaniyati",
      content: "Tumanli Togʻlarning sharqida qolgan Nandorlar asta-sekin Greenwood the Great (katta oʻrmon) va Lothlórien hududlariga tarqaldilar va Silvan («Oʻrmonliklar») deb atala boshladilar. Ular daraxtlar ustida qurilgan maydonchalarda (Flet / Telain) yashashni yaxshi koʻrardilar. Garchi ular Noldor kabi kitoblar yozmagan yoki tosh qalʼalar qurmagan boʻlsalar-da, tabiatning ichki ruhiyati va sehrini barcha elflardan koʻra nozikroq his qilardilar."
    },
    {
      title: "Sindar zodagonlari yetakchiligi va Uzuk Urushi",
      content: "Birinchi Davr oxirida Beleriand gʻarq boʻlgach, omon qolgan ayrim Sindar zodagonlari sharqqa kelib, Silvan elflariga rahbarlik qildilar. Oropher va uning oʻgʻli Thranduil Shimoliy Mirkwoodda oʻrmon qirolligiga asos soldilar (Legolas aynan shu suloladan). Lothlórienda esa Amdír va uning oʻgʻli Amroth shohlik qildilar, keyinchalik esa bu maskan Galadriel va Celeborn boshqaruviga oʻtdi. Silvan elflari Soʻnggi Ittifoq va Halqa Urushlarida mardonavor kurashib, Dol Guldur qalʼasini yer bilan yakson qildilar va Mirkwoodni qora kuchlardan tozalab, oʻrmonlarga yangi Eryn Lasgalen (Yashil Barglar Oʻrmoni) nomini berdilar."
    }
  ];
});

console.log("✓ Barcha 11 ta xalq muvaffaqiyatli kengaytirildi!");
