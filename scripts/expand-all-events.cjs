const fs = require('fs');
const path = require('path');

const dir = path.resolve(process.cwd(), 'src/content/events');

function updateEvent(id, sections) {
  const file = path.join(dir, `${id}.json`);
  if (!fs.existsSync(file)) {
    console.warn(`File not found: ${file}`);
    return;
  }
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  data.description_sections = sections;
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated event: ${id}`);
}

// 1. HALQA URUSHI
updateEvent('halqa-urushi', [
  {
    title: "Urushning zamin va tarixiy sabablari",
    content: "Halqa Urushi (War of the Ring) — Uchinchi davrning 3018–3019 yillarida butun Oʻrta-yerni qamrab olgan, Sauronning mutlaq hukmronlikka intilishi va erkin xalqlarning omon qolish kurashini ifodalovchi eng buyuk geosiyosiy toʻqnashuvdir.\n\nSauron Mordorda kuch toʻplab, Barad-dûrni qayta tiklagach, Yagona Uzuk topilganini angladi va barcha frontlarda — Gondor, Rohan, Erebor, Dale, Lothlórien va Mirkwoodda bir vaqtning oʻzida keng koʻlamli hujum boshladi."
  },
  {
    title: "Urushning asosiy bosqichlari va frontlari",
    content: "Urush bir necha yirik harbiy teatrlarda kechdi:\n1. Gʻarbiy front (Rohan): Sarumanning Isengard armiyasi Rohanga bostirib kirdi; Hornburg jangida Uruk-hailar tor-mor qilindi, Isengard esa Entlar tomonidan suvga gʻarq etildi.\n2. Janubiy front (Gondor): Osgiliathning qulashi, Minas Tirith qamali va Pelennor dalalaridagi hal qiluvchi toʻqnashuv. Aragorn Oʻliklar Armiyasi yordamida Pelargirda dushman flotini egallab, Pelennorga oʻz vaqtida yetib keldi.\n3. Shimoliy front: Erebor va Dale qamali, Lothlórien mudofaasi va Mirkwooddagi elflar jangi. Shimol xalqlari Sauronning ulkan qoʻshinlarini band qilib, janubga oʻtishiga yoʻl qoʻymadilar."
  },
  {
    title: "Yashirin missiya va soʻnggi gʻalaba",
    content: "Buyuk armiyalar toʻqnashuvi davom etayotgan bir paytda, urushning asl taqdiri ikki kichik xobbit — Frodo Baggins va Samwise Gamgeening yashirin safariga bogʻliq edi. Aragorn va Gandalf Sauron diqqatini chalgʻitish uchun Qora Darvoza (Morannon) ostonasida oʻzlarini qurbonlikka tikkan holda jangga kirdilar.\n\n3019-yil 25-martida Yagona Uzuk Hukm Togʻi olovida erib ketishi bilan Sauron vujudi yoʻq qilindi, Barad-dûr quladi va urush erkin xalqlarning toʻliq gʻalabasi bilan yakunlandi."
  }
]);

// 2. PELENNOR DALALARI JANGI
updateEvent('pelennor-dalalari-jangi', [
  {
    title: "Minas Tirith ostonasidagi dahshatli qamal",
    content: "Pelennor Dalalari Jangi (Battle of the Pelennor Fields) — Uchinchi davrning 3019-yil 15-martida Minas Tirith devorlari oldidagi Pelennor tekisligida boʻlib oʻtgan Halqa Urushining eng qonli va ulkan jangi. Sauron qoʻshiniga Angmar Jodugar-shohi boshchilik qilgan boʻlib, uning tarkibida Mordor oʻrklari, troller, Harad otliqlari va Sharqliklar — jami yuz mingdan ortiq askar bor edi.\n\nQora Darvoza buzilib, shahar mudofaasi qulash arafasida turgan tunda Gandalf yolgʻiz oʻzi birinchi darvoza ostonasida Jodugar-shohga qarshi turdi."
  },
  {
    title: "Rohirrim otliqlarining yetib kelishi",
    content: "Tong otganda, shahar ichkarisidan emas, balki shimoliy adirlardan olti ming Rohan karnayining gulduragan sadosi yangradi. Shoh Théoden boshchiligidagi olti ming Rohirrim otliqlari dushman saflariga mislsiz shiddat bilan yorib kirdi.\n\nJodugar-shoh qanotli maxluqi bilan Théodenga hujum qilib, uni halokatli jarohatladi. Shu paytda Dernhelm qiyofasidagi Éowyn va xobbit Merry Jodugar-shohga qarshi jangga kirdilar; Merry uning tizzasiga Westernesse pichogʻi bilan zarba berdi, Éowyn esa qilichini uning yuziga sanchib, afsonaviy bashoratni ('Hech bir erkak uni oʻldira olmas') amalga oshirdi."
  },
  {
    title: "Qora kemalarning kelishi va yakuniy zafar",
    content: "Jang maydoniga Anduin daryosi boʻylab Umbar qaroqchilarining qora kemalari yaqinlashib keldi. Dushman quvonayotgan bir paytda, eng oldingi kemada Aragorn Isildur vorisining Oliy Qirollik Bayrogʻini yoydi.\n\nKemalardan tushgan janubiy Gondor jangchilari, Dúnedain otliqlari, Legolas va Gimli dushmanni ikki oʻt orasida qoldirib, Pelennor dalalarida Mordor armiyasini butkul yakson qildilar."
  }
]);

// 3. BESH ARMIYA JANGI
updateEvent('besh-armiya-jangi', [
  {
    title: "Erebor etagidagi ziddiyat va toʻsatdan hujum",
    content: "Besh Armiya Jangi (Battle of Five Armies) — Uchinchi davrning 2941-yilida Erebor (Yolgʻiz Togʻ) etagida boʻlib oʻtgan yirik jang. Ajdar Smaug halok boʻlgach, Mittilar, Koʻl odamlari va Mirkwood elflari oʻrtasida xazina boʻlishish borasida keskin mojaro kelib chiqdi.\n\nUlar urush boshlash arafasida turganida, Gandalf Tumanli Togʻlar va Gundobad oʻrklari hamda varglar Bolg boshchiligida toʻsatdan bostirib kelayotganini eʼlon qildi. Uch xalq oʻzaro adovatni unutib, umumiy dushmanga qarshi birlashdilar."
  },
  {
    title: "Jang bosqichlari va Beornning qahramonligi",
    content: "Jang ikki qanotda kechdi: bir tomonda Mittilar (Thorin va Dáin Ironfoot), Elflar (Thranduil) va Odamlar (Bard), ikkinchi tomonda esa son-sanoqsiz oʻrklar va ulkan boʻrilar. Thorin oʻn ikki hamrohi bilan devorlarni yorib chiqib, dushman saflarini buzdi, ammo tez orada qurshovda qoldi.\n\nJang taqdirini bahaybat ayiq qiyofasidagi Beorn va Tumanli Togʻlarning Buyuk Burgutlari hal qildi. Beorn oʻrklar yetakchisi Bolgni parchalab tashladi, burgutlar esa dushmanni togʻ qoyalaridan uloqtirdilar. Thorin, Fíli va Kíli halok boʻldi, ammo Shimoliy yerlar zulmatdan qutqarildi."
  }
]);

// 4. HORNBURG JANGI (HELM'S DEEP)
updateEvent('hornburg-jangi', [
  {
    title: "Sarumanning Rohanni yoʻq qilish rejasi",
    content: "Hornburg Jangi — Uchinchi davrning 3019-yil 3–4 mart kechasida Helm's Deep darasidagi Hornburg qalʼasida Sarumanning oʻn minglik Uruk-hai armiyasi va Rohirrim qoʻshini oʻrtasida kechgan mashhur qamal jangi.\n\nSaruman Isen daryosi kechuvlarida Théodredni oʻldirgach, Rohanning soʻnggi kuchlarini yoʻq qilish uchun maxsus yaratilgan ogʻir qurollangan Uruk-hailar, dunlandliklar va boʻri chavandozlarini joʻnatdi."
  },
  {
    title: "Qamal fojiasi va Helm karnayining sadosi",
    content: "Tubsizlik devori (Deeping Wall) Sarumanning portlovchi olovi bilan teshilgach, dushman qalʼa hovlisiga bostirib kirdi. Tong otganda, shoh Théoden va Aragorn darvozadan otliq chiqib, dushmanni sarosimaga soldilar. Qalʼa minorasidagi qadimiy Helm karnayi guldurab chalinganda dushman vahimaga tushdi.\n\nVodiy ostonasida Gandalf va Erkenbrand boshchiligidagi ming nafar sara otliq paydo boʻldi; darani esa Fangorndan kelgan Huornlar (tirik oʻrmon) toʻsib turar edi. Saruman armiyasi qopqonda qolib, butkul yoʻq qilindi."
  }
]);

// 5. ISENGARDNING VAYRON QILINISHI
updateEvent('isengardning-vayron-qilinishi', [
  {
    title: "Entlarning soʻnggi yurishi (The Last March of the Ents)",
    content: "3019-yil 2–3 mart kunlari Treebeard boshchiligidagi Fangorn Entlari Isengard qalʼasiga bostirib kirdilar. Sarumanning yillar davomida oʻrmon daraxtlarini shafqatsizlarcha kestirgani va pechlarda yoqqani Entlar kengashida (Entmoot) qasos olish qarorining qabul qilinishiga sabab boʻldi.\n\nEntlar misli koʻrilmagan jismoniy quvvat bilan Isengardning mustahkam tosh devorlarini yalangʻoch qoʻllari bilan parchalab tashladilar."
  },
  {
    title: "Isen daryosining burilishi va sanoatning choʻkishi",
    content: "Saruman oʻzining yengilmas Orthanc minorasiga qamalib oldi. Entlar Isen daryosining tosh toʻgʻonlarini buzib, butun daryo oqimini Isengard zaminiga burib yubordilar.\n\nSuv toshqini barcha yerosti oʻchoqlarini, qurolsozlik zavodlarini va zaharli gaz laboratoriyalarini suvga gʻarq qildi. Saruman oʻzining minorasida qamalib qolib, butun harbiy qudratidan mahrum boʻldi."
  }
]);

// 6. SOʻNGGI ITTIFOQ URUSHI
updateEvent('songgi-ittifoq-urushi', [
  {
    title: "Elflar va Insonlarning Buyuk Ittifoqi",
    content: "Soʻnggi Ittifoq Urushi (War of the Last Alliance) — Ikkinchi Davrning 3430–3441 yillarida Elflar Oliy Qiroli Ereinion Gil-galad va Dúnedain Oliy Shohi Elendil oʻrtasida Sauron zulmatiga barham berish uchun tuzilgan buyuk harbiy ittifoq urushidir.\n\nUshbu ittifoq Oʻrta-yer tarixida Birinchi Davrdan soʻng toʻplangan eng qudratli va ulugʻvor armiya hisoblangan. Ular Imladrisda birlashib, Tumanli Togʻlar orqali janubga tomon yurish qildilar."
  },
  {
    title: "Dagorlad jangi va Barad-dûr qamali",
    content: "Mordor ostonasidagi Dagorlad tekisligida kechgan ulkan toʻqnashuvda Ittifoq armiyasi Sauron qoʻshinlarini tor-mor qilib, Qora Darvozani yorib oʻtdi. Ular Barad-dûr qalʼasini yetti yil davomida uzluksiz qamal qildilar.\n\nQamalning soʻnggi pallasida Sauron shaxsan maydonga chiqdi. Orodruin etagida Gil-galad va Elendil halok boʻldi; Elendilning Narsil qilichi uning ostida sinib ketdi. Isildur singan qilich parchasi bilan Sauron barmogʻidagi Yagona Uzukni kesib oldi va dushmanning jismoniy vujudini parchaladi."
  }
]);

// 7. QUDRAT UZUKLARINING YASALISHI
updateEvent('qudrat-uzuklarining-yasalishi', [
  {
    title: "Annatar aldovi va Eregion zargarlari",
    content: "Ikkinchi Davrning taxminan 1500–1600 yillarida Eregion oʻlkasida Noldor zargarlari (Gwaith-i-Mírdan) Celebrimbor boshchiligida Qudrat Uzuklarini yasadilar. Ularga 'Annatar' ('Inʼomlar Hukmdori') qiyofasidagi Sauron ustozlik qildi.\n\nUlar Insonlar uchun Toʻqqizta, Mittilar uchun Yettita uzuk yasadilar. Celebrimbor Saurondan yashirincha eng muqaddas Uch Uzukni — Narya, Nenya va Vilyani yasadi, ularga Sauronning qoʻli teginmagan edi."
  },
  {
    title: "Yagona Uzuk va Eregion qirgʻini",
    content: "1600-yilda Sauron Orodruinda Yagona Uzukni yasab, barmogʻiga taqqanida, elflar uning qora niyatini darhol payqadilar va uzuklarini yashirdilar. Gʻazablangan Sauron Eregionga bostirib kirib, Celebrimborni qiynoqlar bilan oʻldirdi va uzuklarning koʻpini tortib oldi."
  }
]);

// 8. NÚMENORNING HALOKATI (AKALLABÊTH)
updateEvent('numenorning-halokati', [
  {
    title: "Sauron fitnasi va Oʻlimsizlik vasvasasi",
    content: "Ikkinchi Davrning 3319-yilida Arda tarixidagi eng fojiaviy ofat — Númenor orolining okean qaʼriga gʻarq boʻlishi (Akallabêth) yuz berdi. Sauron Qirol Ar-Pharazônni yoʻldan urib, Valinorga hujum qilib boqiylikni kuch bilan tortib olishga undadi.\n\nAr-Pharazôn insoniyat tarixidagi eng ulkan harbiy flot bilan Aman qirgʻoqlariga bostirib bordi."
  },
  {
    title: "Dunyoning dumaloqlashuvi va Orolning choʻkishi",
    content: "Valar oʻz hukmronligini bir chetga surib, Eru Ilúvatarga murojaat qildi. Eru dunyoning shaklini oʻzgartirdi: yassi Arda sharsimon shaklga keltirildi, Aman zamin doirasidan tashqariga chiqarildi.\n\nUlkan okean toʻlqinlari Númenor orolini tubsizlikka gʻarq qildi. Elendil va uning oʻgʻillari toʻqqiz kemada Oʻrta-yerga qochib qutulib, Arnor va Gondor qirolliklariga asos soldilar."
  }
]);

// 9. NIRNAETH ARNOEDIAD
updateEvent('nirnaeth-arnoediad', [
  {
    title: "Sanab Boʻlmas Koʻzyoshlar Jangi",
    content: "Nirnaeth Arnoediad (Birinchi Davr 472-yil) — Beleriand tarixidagi eng fojiaviy toʻqnashuv. Maedhros Ittifoqi Morgothga qarshi barcha elflar, mittilar va insonlarni birlashtirgan edi.\n\nBiroq jang paytida Sharqlik insonlar (Uldor the Accursed) xiyonat qilib Noldorning orqa tomoniga zarba berdilar. Ajdarlar va Balroglar maydonga chiqdi."
  },
  {
    title: "Húrinning soʻnggi jangi va Noldorning qulashi",
    content: "Fingon Balrog Gothmog tomonidan oʻldirildi. Húrin va Huor Turgonning Gondolinga chekinishini himoya qilib Serech botqogʻida soʻnggi tomchi qonigacha jang qildilar. Huor koʻziga tekkan oʻqdan halok boʻldi.\n\nHúrin oʻzining ikki tigʻli boltasi bilan yetmishta oʻrkni yer tishlatib, har gal 'Aurë entuluva!' ('Tong yana otadi!') deb hayqirdi. Oxir-oqibat tiriklayin asir olinib, Angband zindoniga keltirildi."
  }
]);

// 10. DAGOR BRAGOLLACH
updateEvent('dagor-bragollach', [
  {
    title: "Toʻsatdan Olov Jangi (Battle of Sudden Flame)",
    content: "Birinchi Davrning 455-yil qishida Morgoth toʻsatdan Angbanddan olov daryolari va zaharli gazlarni otib chiqardi. Anfauglith tekisligi yonib ketdi va Noldorning toʻrt yuz yillik Angband qamali bir kechada parchalab tashlandi.\n\nFinarfin oʻgʻillari Angrod va Aegnor halok boʻldi, Dorthonion qoʻldan ketdi. Fingolfin umidsizlikka tushib, yolgʻiz oʻzi Angband darvozasiga borib Morgothni shaxsiy duelga chaqirdi."
  }
]);

// 11. GONDOLINNING QULASHI
updateEvent('gondolinning-qulashi', [
  {
    title: "Yashirin Shohlikning fojiaviy qulashi",
    content: "Birinchi Davrning 510-yilida Maeglinning xiyonati tufayli Morgoth qoʻshinlari Qurshovchi Togʻlardan oshib Gondolinga bostirib kirdilar. Shahar koʻchalarida mislsiz qahramonlik va qonli janglar boʻlib oʻtdi.\n\nEcthelion favvora hovuzida Gothmogni oʻldirdi, Turgon minorasi ostida jon berdi. Tuor va Idril omon qolgan xalqni maxfiy yoʻl bilan olib chiqib, Sirion deltasiga xalos qildilar."
  }
]);

// 12. GʻAZAB URUSHI (WAR OF WRATH)
updateEvent('gazab-urushi', [
  {
    title: "Buyuk Urush va Beleriandning choʻkishi",
    content: "Eärendil Boqiy Gʻarbga yetib borib Valardan najot soʻragach, Valar va Vanyar elflarining ulkan armiyasi Oʻrta-yerga keldi. Birinchi Davrning 545–587 yillarida ellik yil davom etgan Gʻazab Urushi boʻlib oʻtdi.\n\nAngband butkul yakson qilindi, Ancalagon the Black Eärendil tomonidan oʻldirildi va Thangorodrim choʻqqilari parchalandi. Morgoth zanjirband qilinib Boʻshliqqa badargʻa etildi. Ushbu ulkan toʻqnashuv oqibatida butun Beleriand zamin qitʼasi dengiz qaʼriga choʻkib ketdi."
  }
]);

// 13. KHAZAD-DÛMNING QULASHI
updateEvent('khazad-dumning-qulashi', [
  {
    title: "Durin Falakati va Moria fojiasi",
    content: "Uchinchi davrning 1980-yilida mittilar Barazinbar togʻi qaʼrini haddan ziyod chuqur qazib, Birinchi Davrdan beri uxlab yotgan Moria Balrogini uygʻotdilar. Balrog Qirol Durin VI va uning oʻgʻli Náinni oʻldirdi.\n\nMittilar oʻz poytaxtini tashlab qochishga majbur boʻldilar va Khazad-dûm oʻrklar va iblislarning qora maskaniga aylandi."
  }
]);

// 14. SILMARIL SAFARI
updateEvent('silmaril-safari', [
  {
    title: "Beren va Lúthienning afsonaviy jasorati",
    content: "Birinchi Davrning 465–468 yillarida Beren va Lúthien Elu Thingolning shartini bajarish uchun Angband qaʼriga kirib bordilar. Lúthien oʻzining sehrli qoʻshigʻi bilan Morgoth va uning saroyini uxlab qoldirdi.\n\nBeren Morgothning temir tojidan bitta Silmarilni kesib oldi. Carcharoth Berenning qoʻlini tishlab uzib olgan boʻlsa-da, ular Doriathga qaytib, sevgi va fidoiylikning eng buyuk dostonini yaratdilar."
  }
]);

// 15. BIRINCHI QARINDOSH QIRGʻINI
updateEvent('birinchi-qarindosh-qirgini', [
  {
    title: "Alqualondë fojiasi va Mandos Laʼnati",
    content: "Daraxtlar Davrining 1495-yilida Fëanor Noldorni Beleriandga olib oʻtish uchun Alqualondë bandargohida Teleri elflarining kemalarini talab qildi. Teleri rad etgach, Fëanor oʻz qardoshlariga qarshi qilich koʻtardi.\n\nUshbu birinchi qardoshlar qirgʻini sababli Mandos Noldor boshiga abadiy laʼnat yogʻilishini va ularning barcha ishlari fojia bilan tugashini eʼlon qildi."
  }
]);

// 16. PELARGIR JANGI
updateEvent('pelargir-jangi', [
  {
    title: "Aragorn va Oʻliklar Armiyasining dengiz zafari",
    content: "3019-yil 13-martida Aragorn Oʻliklar Qoʻshini bilan Pelargir bandargohiga yetib keldi. Umbar qaroqchilarining ellikta harbiy kemasi Minas Tirithni zabt etish uchun qoʻshin yuklayotgan edi.\n\nArvohlar qoʻshini dushmanni dahshatga solib daryoga uloqtirdi. Aragorn kemalarni egallab, qasamyodini bajargan arvohlarni ozod qildi va Pelennor jangi tomon suzib ketdi."
  }
]);

// 17. YAGONA UZUKNING YOʻQ QILINISHI
updateEvent('yagona-uzukning-yoq-qilinishi', [
  {
    title: "Hukm Togʻidagi intiqom va Oʻrta-yerning ozodligi",
    content: "3019-yil 25-martida Sammath Naur gʻorida Frodo Baggins Uzuk vasvasasiga yengilib uni barmogʻiga taqqanida, Gollum unga tashlanib barmogʻini tishlab uzib oldi. Quvonchdan telba boʻlib qoya chetida raqsga tushayotgan Gollum muvozanatini yoʻqotib olovli tubsizlikka quladi.\n\nYagona Uzuk erib yoʻq boʻlishi bilan Sauronning butun sehrli saltanati, Barad-dûr va uning qoʻshinlari bir zumda parokanda boʻlib quladi. Bu sana Uchinchi Davrning intihosi va Yangi Yilning boshlanishi deb eʼlon qilindi."
  }
]);
