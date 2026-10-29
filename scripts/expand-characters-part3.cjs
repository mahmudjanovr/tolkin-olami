const fs = require('fs');
const path = require('path');

const charDir = path.resolve(process.cwd(), 'src/content/characters');

function updateCharacter(id, updater) {
  const file = path.join(charDir, `${id}.json`);
  if (!fs.existsSync(file)) {
    console.warn(`File not found: ${file}`);
    return;
  }
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const updated = updater(data);
  fs.writeFileSync(file, JSON.stringify(updated, null, 2), 'utf8');
  console.log(`Updated character: ${id}`);
}

// 1. ARAGORN
updateCharacter('aragorn', (d) => {
  d.biography_sections = [
    {
      title: "Yoshlik yillari va Estel ismi siri",
      content: "Aragorn II Elessar Uchinchi davrning 2931-yilida Dúnedainning 15-sardori Arathorn II va Gilraen oilasida tugʻildi. U ikki yoshdaligida otasi oʻrklar bilan jangda halok boʻldi. Onasi Gilraen uni Imladrisga (Rivendell) olib bordi, u yerda Elrond bolani oʻz oʻgʻlidek qabul qilib tarbiyaladi.\n\nSauron josuslaridan himoya qilish maqsadida bolaning asl kelib chiqishi sir saqlandi va unga 'Estel' ('Umid') ismi berildi. Faqat yigirma yoshga toʻlganida Elrond unga haqiqiy shaxsiyatini — Isildurning bevosita vorisi ekanini ochdi va unga Barahir uzugi hamda Narsil qilichi siniqlarini topshirdi. Oʻsha davrda u Rivendell oʻrmonida Arwen Undómiel bilan ilk bor uchrashdi."
    },
    {
      title: "Darbadarlik yillari: Thorongil va buyuk safarlar",
      content: "Haqiqiy kimligini anglagan Aragorn Oʻrta-yer boʻylab yashirincha kezib, harbiy va siyosiy tajriba toʻpladi. 2957–2980 yillarda u 'Thorongil' ('Burgut Yulduzi') taxallusi bilan Rohan qiroli Thengel va Gondor Bosh Noibi Ecthelion II xizmatida boʻldi.\n\nU Gondor floti bilan Umbar qaroqchilari bandargohiga tungi toʻsatdan zarba berib, qaroqchilar boshligʻini oʻldirdi va flotlarini yoqib yubordi. Biroq Ecthelionning oʻgʻli Denethor II bilan raqobatga kirishmaslik uchun kutilmaganda Gondorni tark etib, Sharq va Janubning sirli oʻlkalariga yoʻl oldi."
    },
    {
      title: "Uzuk Birodarligi va Yoʻlboshchilik burchi",
      content: "3018-yilda Gandalfning iltimosiga koʻra Aragorn Bree (Serob) shaharchasida Frodoni kutib oldi va 'Strider' ('Qadamchi') nomi bilan xobbitlarni Weathertop orqali Rivendellga yetkazdi. Narsil qilichi qayta zarb qilinib, 'Andúril' ('Gʻarb Olovi') nomini oldi.\n\nElrond Kengashida Uzuk Birodarligi aʼzosi boʻldi. Moria tubsizligida Gandalf qulaganidan soʻng, Aragorn butun Birodarlikning yoʻlboshchilik masʼuliyatini oʻz zimmasiga oldi va ularni Lothlórien orqali Amon Henga olib keldi."
    },
    {
      title: "Oʻliklar Yoʻli va Pelennor jangi zafari",
      content: "Amon Henda Birodarlik boʻlingach, Aragorn, Legolas va Gimli Merry va Pippinni qutqarish uchun Rohanga yugurdilar. Hornburg jangida Théoden bilan yelkama-yelka turib Isengard Uruk-hailarini yengdilar.\n\nSoʻngra Aragorn qadimiy bashoratga binoan 'Oʻliklar Yoʻli'ga (Paths of the Dead) kirdi. U yerda Isildurga bergan qasamyodini buzgan xiyonatkor arvohlar qoʻshinini oʻziga boʻysundirdi. Pelargirda Umbar qaroqchilari flotini egallab, qora kemalarda Pelennor dalalariga yetib keldi va Gondorning buyuk gʻalabasini taʼminladi."
    },
    {
      title: "Toj kiyish, Arwen bilan nikoh va Birlashgan Qirollik",
      content: "Qora Darvoza jangida Sauron diqqatini oʻziga qaratib Frodoga imkoniyat yaratgan Aragorn, Yagona Uzuk yoʻq qilingach, Minas Tirithda 'Qirol Elessar' nomi bilan taxtga oʻtirdi. Gandalf uning boshiga Oliy Shoh tojini kiydirdi.\n\nArwen Undómiel bilan turmush qurdi va Arnor hamda Gondorni yagona saltanatga birlashtirdi. Toʻrtinchi davrning 120-yilida u 210 yoshida oʻz xohishi bilan hayotdan koʻz yumdi va xalqiga adolat, tinchlik va farovonlik meros qoldirdi."
    }
  ];
  return d;
});

// 2. GALADRIEL
updateCharacter('galadriel', (d) => {
  d.biography_sections = [
    {
      title: "Valinordagi hayot va Ikki Daraxt nuri",
      content: "Galadriel Finarfin va Eärwenning kenja qizi boʻlib, Valinorda Daraxtlar Davrining 1362-yilida dunyoga kelgan. Uning sochlari oltin va kumushning qoʻshilgan jilosidek porlardi, chunki ularda Laurelin va Telperion nuri aks etgan edi. Rivoyatlarga koʻra, hatto Fëanorning oʻzi ham Silmarillarni yaratishda aynan Galadriel sochlarining nurlaridan ilhomlangan.\n\nFëanor Noldorni Beleriandga boshlaganida, Galadriel qasamyod qilmagan boʻlsa-da, yangi oʻlkalarda oʻz qirolligiga ega boʻlish va Oʻrta-yerni koʻrish orzusida Helcaraxë muzliklarini piyoda kesib oʻtgan jasur elflar safida boʻldi."
    },
    {
      title: "Doriathdagi taʼlim va Celeborn bilan ittifoq",
      content: "Beleriandda Galadriel Doriath qirolligida qirol Thingol va Malika Melian huzurida uzoq yillar yashadi. U dono Maia Meliandan chuqur ruhiy saboqlar, tabiat sirlari va oʻz oʻlkasini himoya qilish ilmini oʻrgandi. U yerda Teleporno (Celeborn) bilan tanishib turmush qurdi.\n\nBirinchi Davr oxiridagi Gʻazab Urushidan soʻng Valar koʻplab elflarga Valinorga qaytishga ruxsat berdi, ammo Galadriel magʻrurlik va oʻz burchini his qilib Oʻrta-yerda qolishni tanladi."
    },
    {
      title: "Lothlórien bekasi va Nenya uzugi",
      content: "Ikkinchi Davrda Celebrimbor Eregionda Uch Elflar Uzugini yasaganida, eng pishiq va muqaddas uzuklardan biri boʻlgan Nenyani (Oq olmosli Suv Uzugi) Galadrielga topshirdi. Sauron zulmatidan himoya qilish uchun Galadriel Nenyani maxfiy saqladi.\n\nU Celeborn bilan birga Lothlórien (Oltin Oʻrmon) oʻlkasiga kelib, uni mallorn daraxtlari va Nenya qudrati bilan qudratli panohgohga aylantirdi. U yerda vaqt sekinlashar, xazonrezlik va chirish kirmas, elflar qadimiy goʻzallikda yashar edilar."
    },
    {
      title: "Uzuk sinovi va buyuk voz kechish",
      content: "Halqa Urushida Uzuk Birodarligi Lórienga kelganida, Frodo Galadrielga Yagona Uzukni oʻz ixtiyori bilan taklif qildi. Bu Galadrielning butun hayotidagi eng dahshatli va yuksak sinov edi: agar u Uzukni olsa, Sauronni yengib 'Dengizdek qudratli va qoʻrqinchli Qirolicha'ga aylanar, ammo oʻzi yovuzlikka asir boʻlar edi.\n\nGaladriel chuqur kurashdan soʻng vasvasani yengdi: 'Men sinovdan oʻtdim. Men kichrayaman va Gʻarbga ketaman, Galadriel boʻlib qolaman', dedi. Bu voz kechish uning Valinorga qaytish yoʻlidagi barcha maʼnaviy toʻsiqlarni olib tashladi."
    },
    {
      title: "Dol Guldurning qulashi va Boqiy Gʻarbga qaytish",
      content: "Halqa Urushining soʻnggi kunlarida Sauron qoʻshinlari Lórienga uch marta hujum qildi, ammo Galadriel va Nenyani yenga olmadi. Sauron qulagach, Galadriel Dol Guldurga kirib, uning qora tosh devorlarini yer bilan yakson qildi va oʻrmonni zulmatdan tozaladi.\n\n3021-yilda u Oq Kemada Elrond, Gandalf va xobbitlar bilan birga Boqiy Gʻarbga — oʻzining tugʻilgan Valinor zaminiga suzib ketdi. U Noldorning Oʻrta-yerdagi eng buyuk va soʻnggi peshvosi boʻlib tarixga kirdi."
    }
  ];
  return d;
});

// 3. FËANOR
updateCharacter('feanor', (d) => {
  d.biography_sections = [
    {
      title: "Tiriondagi yoshlik va oʻtli deha",
      content: "Fëanor (asl ismi Curufinwë) Finwë va Míriel Therindëning yagona farzandi boʻlib, Valinorda tugʻilgan. Uning onasi Fëanorni dunyoga keltirishda butun jismoniy va ruhiy kuchini sarflab vafot etdi. Uning otasi unga 'Fëanáro' ('Olov Ruhi') ismini berdi.\n\nFëanor barcha Ilúvatar farzandlari orasida aql, jismoniy goʻzallik, hunarmandchilik va soʻz qudrati boʻyicha eng ulugʻvor deha edi. U Rúmil yozuvini mukammallashtirib Tengwar yozuv tizimini ixtiro qildi, shuningdek koʻruvchi toshlar — Palantírlarni yaratdi."
    },
    {
      title: "Silmarillarning yaratilishi",
      content: "Daraxtlar Davrining eng yuksak choʻqqisida Fëanor oʻzining eng buyuk moʻjizasini yaratdi: u Valinorning Ikki Daraxti — Telperion va Laurelin nurlarini uchta pishiq billur gavhar qaʼriga qamradi. Bu gavharlar 'Silmarillar' deb ataldi.\n\nSilmarillar shunchalik muqaddas va pokiza ediki, hatto Varda ularni hech qanday yovuz qoʻl yoki nohaq kishi tegina olmasligi (kuydirib kul qilishi) uchun duo qildi, Mandos esa Arda taqdiri aynan shu gavharlar bilan bogʻliq ekanini bashorat qildi."
    },
    {
      title: "Melkor xiyonati va Fëanor Qasamyodi",
      content: "Melkor Noldor orasida nizo urugʻini sepib, Fëanor va uning ukasi Fingolfin oʻrtasida adovat uygʻotdi. Melkor va Ungoliant Ikki Daraxtni yoʻq qilib, Formenosdagi xazinadan Silmarillarni oʻgʻirlab Finwëni oʻldirganlarida, Fëanorning qaygʻusi telbalik darajasiga yetdi.\n\nU Tirion maydonida Melkorni 'Morgoth' ('Qora Dushman') deb laʼnatladi va oʻzining yetti oʻgʻli bilan birga dahshatli 'Fëanor Qasamyodi'ni (Oath of Fëanor) ichdi: kim boʻlishidan qatʼi nazar — Vala, elf yoki inson — Silmarilni tortib olgan har qanday zotga qarshi abadiy qonli urush eʼlon qildilar."
    },
    {
      title: "Alqualondëdagi Birinchi Qirgʻin va Losgar alangasi",
      content: "Beleriandga oʻtish uchun kemalarga muhtoj boʻlgan Fëanor, Alqualondë bandargohida kema berishdan bosh tortgan Teleri elflariga hujum qildi. Bu elflar tarixidagi birinchi qardoshlar qirgʻini boʻldi va Mandos Noldor boshiga abadiy laʼnat (Doom of Mandos) yogʻilishini eʼlon qildi.\n\nOʻrta-yerga yetib kelgach, Fëanor kemalarni Losgar qirgʻogʻida yoqib yubordi va orqada qolgan ukasi Fingolfin qoʻshinini muzli Helcaraxë oʻlimiga tashlab ketdi."
    },
    {
      title: "Dagor-nuin-Giliath va Fëanorning oʻlimi",
      content: "Mithrim koʻli boʻyida Morgoth qoʻshinlari toʻsatdan hujum qildi, ammo Yulduzlar Ostidagi Jangda (Dagor-nuin-Giliath) Fëanor oʻrklarni tor-mor qildi. Gʻazabdan koʻzi koʻr boʻlgan Fëanor oʻz soqchilaridan ancha ilgarilab ketib, Angband ostonasigacha quvib bordi.\n\nU yerda Balroglar uni qurshovga oldi. Fëanor Balroglar sarkardasi Gothmog bilan tengsiz duelda ogʻir yaralandi. Oʻgʻillari uni qutqarib olib chiqishganida, u Angbandning qora choʻqqilariga qarab, Noldor bu qalʼani hech qachon ololmasligini angladi, ammo oʻgʻillariga qasamyodga sodiq qolishni buyurdi. U vafot etganida, uning olovli ruhi shunchalik qudratli ediki, uning tanasi bir zumda kulga aylanib ketdi."
    }
  ];
  return d;
});

// 4. THORIN OAKENSHIELD
updateCharacter('thorin-oakenshield', (d) => {
  d.biography_sections = [
    {
      title: "Erebor shahzodasi va Smaugning bosqini",
      content: "Thorin II Oakenshield Uchinchi davrning 2746-yilida Ereborning Togʻosti Qiroli Thráin II oilasida tugʻilgan. U yoshligida Erebor oltin va toshlarga toʻla buyuk va qudratli saltanat edi.\n\n2770-yilda oltin ajdar Smaug toʻsatdan Ereborni vayron qildi va xalqni quvib chiqardi. Thorin, uning otasi va bobosi Thrór xalqining omon qolgan qismi bilan janubga qochishga majbur boʻldilar."
    },
    {
      title: "Azanulbizar jangi va 'Emantoʻqmoq' nomi",
      content: "2799-yilda Mittilar va Oʻrklar Urushining eng qonli toʻqnashuvi — Moria darvozasi oldidagi Azanulbizar jangi boʻlib oʻtdi. Jang qizgʻin pallasida Thorinning qalqoni sinib ketdi.\n\nU yerdan emanning yoʻgʻon shoxini kesib olib, uni qalqon va toʻqmoq sifatida ishlatib dushmanning barcha zarbalarini qaytardi. Shu qahramonligi uchun unga 'Oakenshield' ('Emantoʻqmoq') laqabi berildi. Otasi Thráin II Dol Guldurda yoʻqolgach, Thorin surgundagi xalqining Qiroliga aylandi."
    },
    {
      title: "Erebor safari va Yolgʻiz Togʻning qaytarilishi",
      content: "Moviy Togʻlarda temirchilik qilib yurgan Thorin 2941-yilda Bree tavernasida Gandalf bilan uchrashdi. Gandalf uni Ereborni ajdardan qaytarib olishga va xobbit Bilbo Bagginsni safarga qoʻshishga koʻndirdi.\n\nOʻn uch mitti va Bilbo xavfli sarguzashtlarni yengib Erebordagi maxfiy eshikni topdilar. Smaug koʻl shahri Esgarothga hujum qilib Bard tomonidan oʻldirilgach, Thorin oʻz ajdodlarining Togʻosti Qiroli taxtini qayta egalladi."
    },
    {
      title: "Oltin vasvasasi va Arkenstone mojarosi",
      content: "Ulkan xazinaga ega boʻlgan Thorin ajdarning oltin laʼnati taʼsiriga tushdi: u oʻzini oʻrab olgan xalqlar — Koʻl odamlari va Mirkwood elflari bilan xazinani boʻlishishdan qatʼiyan bosh tortdi va Ereborni tosh devor bilan mustahkamladi.\n\nBilbo tinchlik oʻrnatish uchun Arkenstoneni Elflar qiroliga bergach, Thorin Bilboni xoin deb haqoratladi va oʻz qarindoshi Dáin II Ironfootni yordamga chaqirib urush boshlashga tayyorlandi."
    },
    {
      title: "Besh Armiya Jangi, shonli oʻlim va kechirim",
      content: "Tumanli Togʻlar oʻrklari va varglari toʻsatdan hujum qilgach, Mittilar, Elflar va Insonlar ittifoq tuzib 'Besh Armiya Jangi'ga kirdilar. Thorin oʻz xatosini tushunib, oʻn ikki hamrohi bilan devorlarni yorib chiqdi va qahramonona jangga tashlandi.\n\nU oʻrklar yetakchisi Bolg qoʻriqchilari bilan jangda ogʻir yaralandi. Vafot etishidan oldin u Bilboni huzuriga chaqirib, undan kechirim soʻradi: 'Agar koʻproq odamlar oltindan koʻra yaxshi ovqat, quvnoq qoʻshiq va tinchlikni qadrlaganlarida, dunyo yanada baxtliroq boʻlar edi', dedi. U Erebor qaʼriga, koʻkragiga Arkenstone va ustiga Orcrist qilichi qoʻyilgan holda dafn etildi."
    }
  ];
  return d;
});

// 5. LÚTHIEN
updateCharacter('luthien', (d) => {
  d.biography_sections = [
    {
      title: "Doriath bulbuli va Ilúvatar farzandlarining eng goʻzali",
      content: "Lúthien Tinúviel Sindar Oliy Qiroli Elu Thingol va dono Maia Melianning yagona qizi boʻlib, Daraxtlar Davrida Doriathning goʻzal Menegroth saroyida dunyoga kelgan. U Ilúvatar farzandlari orasida husn, ovoz va sehr boʻyicha eng tengsiz qahramon edi.\n\nU Neldoreth oʻrmonlarida raqsga tushib kuylaganida, qish chekinar, gullar ochilar va butun tabiat uning ovoziga mahliyo boʻlar edi. Elflar unga 'Tinúviel' — 'Bulbul' deb nom berdilar."
    },
    {
      title: "Beren bilan uchrashuv va Silmaril sharti",
      content: "Birinchi Davrning 465-yilida Dorthonion qirgʻinidan qochib kelgan inson Beren oʻrmonda Lúthienning raqsini koʻrib, uni sevib qoldi. Thingol bir foniy insonning oʻz qiziga koʻngil qoʻyganidan gʻazablanib, imkonsiz shart qoʻydi: Beren Morgothning temir tojidan bitta Silmarilni olib kelishi shart edi.\n\nBeren yolgʻiz ketganida, Lúthien otasining taqiqlariga qaramay Hirilorn daraxtidagi qamoqdan qochib, oʻz sevgilisini qutqarish uchun xavfli safarga otlandi."
    },
    {
      title: "Tol-in-Gaurhoth zafari va Huan sadoqati",
      content: "Sauron Beren va Finrod Felagundni oʻzining boʻrilar qalʼasida (Tol-in-Gaurhoth) asir qilganida, Lúthien Valinorning buyuk iti Huan bilan birga yetib keldi. Lúthien koʻprik ustida shunday sehrli qoʻshiq kuyladiki, Sauronning barcha maxluqlari uyquga ketdi.\n\nSauron bahaybat boʻri qiyofasida Huanga tashlanganida magʻlubiyatga uchradi va qalʼa kalitlarini Lúthienga topshirib qochdi. Lúthien oʻz qoʻshigʻi bilan qora qasr devorlarini agʻdardi va Berenni qutqardi."
    },
    {
      title: "Angband qaʼrida Morgothni uyquga ketkazish",
      content: "Beren va Lúthien qora maxluqlar qiyofasiga kirib Angbandning eng chuqur tubsizligiga — Morgothning taxti oldiga kirib bordilar. Lúthien Morgoth va uning butun qora saroyi oldida sehrli raqs tushib, afsun qoʻshigʻini kuyladi.\n\nUning ovozi shunchalik qudratli ediki, hatto qora Vala Morgoth ham oʻz taxtida hushidan ketib uxlab qoldi va temir toji polga dumalab tushdi. Beren xanjar bilan tojdagi Silmarillardan birini kesib oldi. Qochish chogʻida Angband eshigi posboni bahaybat boʻri Carcharoth Berenning Silmaril ushlagan qoʻlini tishlab uzib yutib yubordi."
    },
    {
      title: "Mandos oldidagi marsiya va foniylik inʼomi",
      content: "Thingol huzuriga qaytganlaridan soʻng, Carcharoth Doriathga bostirib kirdi. Vahshiy boʻri oʻldirildi, ammo Beren ham ogʻir yaralanib jon berdi. Lúthienning qaygʻusi shunchalik cheksiz ediki, uning ruhi tanasini tark etib Mandos Zallariga yetib bordi.\n\nMandos taxti oldida Lúthien butun olam tarixidagi eng taʼsirli va fojiaviy marsiyani kuyladi. Hech qachon rahm qilmagan qattiqqoʻl Vala Mandos ilk bor koʻzyosh toʻkdi. Manwë va Eru Ilúvatar irodasi bilan Lúthienga tengsiz tanlov berildi: yo Valinorda boqiy yashash, yo Beren bilan birga foniy inson sifatida Oʻrta-yerga qaytib, oʻlim inʼomini baham koʻrish.\n\nLúthien foniylikni tanladi. Ular Tol Galenda tinch va baxtli hayot kechirdilar. Ularning oʻgʻli Dior orqali Elrond, Elros va Aragorn sulolasi — insonlar va elflarning eng yuksak nasli vujudga keldi."
    }
  ];
  return d;
});
