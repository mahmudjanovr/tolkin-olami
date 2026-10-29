const fs = require('fs');
const path = require('path');

const langDir = path.resolve(process.cwd(), 'src/content/languages');
const cosmoDir = path.resolve(process.cwd(), 'src/content/cosmology');

function updateLang(id, sections) {
  const file = path.join(langDir, `${id}.json`);
  if (!fs.existsSync(file)) {
    console.warn(`File not found: ${file}`);
    return;
  }
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  data.grammar_and_vocabulary_sections = sections;
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated language: ${id}`);
}

function updateCosmo(id, sections, evolution) {
  const file = path.join(cosmoDir, `${id}.json`);
  if (!fs.existsSync(file)) {
    console.warn(`File not found: ${file}`);
    return;
  }
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  data.cosmology_sections = sections;
  if (evolution) data.ontological_evolution = evolution;
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated cosmology: ${id}`);
}

// ==========================================
// LANGUAGES (10)
// ==========================================

// 1. QUENYA
updateLang('quenya', [
  {
    title: "Elflar Lotinchasi: Fonetika va garmoniya",
    content: "Quenya (Qadimgi Elflar tili) — Valinorda Ikki Daraxt nuri ostida rivojlangan eng olijanob va tantanavor elf tilidir. J.R.R. Tolkien uni yaratishda fin tili (grammatika va soʻz yasalishi), lotin tili (sintaksis va viqor) hamda yunon tili fonetikasidan ilhomlangan.\n\nTilning tovush tizimi nihoyatda ohangdor boʻlib, soʻz oxirida qatʼiy undoshlar cheklangan (asosan unlilar yoki -n, -r, -s, -t, -l bilan tugaydi). Murakkab unlilar uygʻunligi va diftonglar Quenyaga musiqiy jarang bagʻishlaydi."
  },
  {
    title: "Agglyutinativ grammatika va kelishiklar tizimi",
    content: "Quenya oʻzining boy agglyutinativ (qoʻshimchalar qoʻshiluvchi) tabiati bilan ajralib turadi. Unda 10 ta kelishik (Nominativ, Akkusativ, Genitiv, Possessiv, Datif, Lokativ, Allativ, Ablativ, Instrumental va Respektiv) mavjud.\n\nOtlar toʻrt xil sonda oʻzgaradi: birlik, ikkilik (dual — juft aʼzolar uchun, masalan ikki koʻz), koʻplik va toʻliq/mutlaq koʻplik (partitive plural). Feʼllar zamon, mayl va shaxs-son qoʻshimchalari bilan boyitilgan."
  },
  {
    title: "Oʻrta-yerdagi maqomi va 'Namárië' dostoni",
    content: "Beleriandda Thingol Alqualondë qirgʻini haqida eshitgach, Sindar elflariga Quenyada soʻzlashishni taqiqladi. Shundan soʻng Quenya kundalik muomala tilidan chiqib, xuddi lotin tili kabi ilm-fan, marosimlar, oliy poeziya va shohona bitiklar tiliga aylandi.\n\nUshbu tildagi eng mashhur matn — Galadrielning 'Namárië' ('Alvido') dostonidir. Bu doston Oʻrta-yerdagi eng uzun va mukammal saqlangan Quenya matni hisoblanadi."
  }
]);

// 2. SINDARIN
updateLang('sindarin', [
  {
    title: "Beleriand Kulrang Elflari tili va velliycha ildizlar",
    content: "Sindarin — Beleriand oʻrmonlarida Elu Thingol fuqarolari (Sindar) tomonidan soʻzlashilgan va butun Oʻrta-yerda eng keng tarqalgan jonli elf tilidir. Tolkien ushbu tilni yaratishda qadimgi velliy (uels) tilining fonetik mutatsiyalari va ohangidan ilhomlangan.\n\nSindarin Quenyaga qaraganda keskinroq, dinamikroq va undosh tovushlarga boy tildir. Uchinchi davrda u nafaqat elflar, balki Gondor va Arnor Dúnedain zodagonlarining ikkinchi ona tiliga aylangan."
  },
  {
    title: "Lenitsiya (tovush mutatsiyasi) va grammatika",
    content: "Sindarin tilining eng oʻziga xos grammatik xususiyati — lenitsiya (boshlangʻich undoshlarning oʻzgarishi)dir. Gapdagi soʻzlar oʻzaro bogʻlanganda, keyingi soʻzning birinchi harfi oʻzgaradi (masalan: Calen -> i galen; Perian -> i Berian).\n\nKoʻplik shakllari asosan ichki unlilar mutatsiyasi (i-umlaut) orqali yasaladi: masalan, Adan (inson) -> Edain (insonlar); Nogoth (mitti) -> Noegyth (mittilar)."
  }
]);

// 3. KHUZDUL
updateLang('khuzdul', [
  {
    title: "Aulëning sirli tili va semit ildizlari",
    content: "Khuzdul — Temirchi Vala Aulë tomonidan yaratilgan va Mittilar (Xazad) xalqiga oʻrgatilgan muqaddas tildir. Tolkien Khuzdulni semit tillari (xususan ibroniy va arab tillari) tizimiga asoslanib, uch undoshli oʻzaklar (tri-consonantal roots) asosida qurgan.\n\nMittilar oʻz tilini nihoyatda qattiq sir saqlaganlar; ular oʻzlarining haqiqiy mitti ismlarini hech qachon boshqa irqlarga aytmaganlar (Gimli, Thorin kabi ismlar aslida shimoliy insonlar tilidan olingan)."
  },
  {
    title: "Jang hayqiriqlari va Moria bitiklari",
    content: "Khuzdul oʻzining qattiq, boʻgʻiq va jarangdor tovushlari bilan tosh va metall jarangini eslatadi. Tarixda eng mashhur Khuzdul jumlasi — Azanulbizar va Pelennorda yangragan mitti jang hayqirigʻidir:\n'Baruk Khazâd! Khazâd ai-mênu!' ('Mittilar boltasi! Mittilar sizga qarshi!').\n\nShuningdek, Moriadagi Balin qabrida Cirth runalarida yozilgan 'Balin Fundinul Uzbad Khazaddûmu' yozuvi bu tilning qisqa grammatik namunalaridan biridir."
  }
]);

// 4. ADÛNAIC
updateLang('adunaic', [
  {
    title: "Númenor tili va Insonlar nutqi",
    content: "Adûnaic — Ikkinchi Davrda Númenor orolida Sodiqlar va Qirol Odamlari tomonidan soʻzlashilgan rasmiy insonlar tilidir. U Birinchi Davrdagi Hador va Bëor xonadonlari tillari sintezidan vujudga kelgan.\n\nTil oʻzida ham semit, ham qadimiy german tillariga xos morfologik xususiyatlarni mujassam etgan. Keyinchalik ushbu til Uchinchi davrda butun Oʻrta-yerning xalqaro tiliga aylangan Westron (Umumiy Nutq)ning bevosita ota-tiliga aylandi."
  }
]);

// 5. WESTRON (UMUMIY NUTQ)
updateLang('westron', [
  {
    title: "Oʻrta-yerning umumiy muloqot tili (Common Speech)",
    content: "Westron (Sôval Phârë — 'Umumiy Nutq') — Uchinchi davrda Tumanli Togʻlardan to Dengizgacha, Shir xobbitlaridan to Gondor saroylarigacha barcha xalqlar tushunadigan xalqaro lingva-franka tilidir. U Adûnaic tilining qirgʻoqboʻyi insonlari tillari bilan aralashuvidan paydo boʻlgan.\n\nTolkien oʻz romanlarida 'Uzuklar Hukmdori'ni goʻyoki Westron tilidagi qadimiy Qizil Kitobdan zamonaviy ingliz tiliga tarjima qilingan deb taqdim etadi (masalan, Frodo Bagginsning asl Westron ismi 'Maura Labingi' boʻlgan)."
  }
]);

// 6. VALARIN
updateLang('valarin', [
  {
    title: "Ainur tili: Olamning birlamchi ilohiy nutqi",
    content: "Valarin — Valar va Maiar oʻrtasidagi moddiy jism olgandan soʻng paydo boʻlgan birlamchi ilohiy tildir. Bu til jismoniy tovushlardan koʻra fikr toʻlqinlari va ulkan kosmik jaranglarga yaqin boʻlib, elflar va insonlar qulogʻiga gʻoyat gʻalati, bahaybat va qiyin eshitilgan.\n\nValarin Quenya tiliga bir qancha tushunchalarni (masalan, Ezellohar, Oromë kabi nomlar) bergan boʻlsa-da, fonetik jihatdan butunlay alohida tizimga ega."
  }
]);

// 7. QORA NUTQ (BLACK SPEECH)
updateLang('qora-nutq', [
  {
    title: "Sauron tomonidan yaratilgan sunʼiy imperiya tili",
    content: "Qora Nutq (Black Speech) — Ikkinchi Davrda Sauron tomonidan oʻzining barcha qullari va qoʻshinlari uchun yagona rasmiy til sifatida maxsus yaratilgan sunʼiy tildir. Sauron oʻrklarning turli parokanda lahjalarini yoʻq qilib, ularni yagona qatʼiy tizimga boʻysundirmoqchi boʻlgan.\n\nTil oʻzining qattiq, boʻgʻiq va dahshatli tovushlari (k, g, sh, z, gh, rk) bilan ajralib turadi. Ushbu tilda yozilgan eng mashhur matn — Yagona Uzuk sirtidagi olovli Tengwar yozuvidir:\n'Ash nazg durbatulûk, ash nazg gimbatul, ash nazg thrakatulûk agh burzum-ishi krimpatul'."
  }
]);

// 8. ROHIRRIC
updateLang('rohirric', [
  {
    title: "Rohan chavandozlari tili va Anglo-Sakson ildizlari",
    content: "Rohirric — Rohan xalqi (Rohirrim) oʻzaro soʻzlashadigan arxaik shimoliy insonlar tilidir. Tolkien ushbu tilni oʻz asarlarida Qadimgi ingliz (Anglo-Saxon / Mersiya dialekti) tili orqali ifodalagan.\n\nTil qadimgi otchilik atamalari, jangovar qoʻshiqlar va qahramonlik maqollariga nihoyatda boy boʻlgan. Westron bilan yaqin qarindosh boʻlib, ularning ajdodlari Anduin boʻylarida yonma-yon yashagan."
  }
]);

// 9. TENGWAR
updateLang('tengwar', [
  {
    title: "Fëanor yozuvi: Oʻrta-yerning eng mukammal alifbosi",
    content: "Tengwar (Quenya tilida: 'Harflar') — Valinorda Fëanor tomonidan Rúmilning Sarati yozuvi asosida yaratilgan eng mukammal va goʻzal fonetik yozuv tizimidir. Tengwar belgilarining shakli tasodifiy emas, balki tovushning artikulyatsiyasi (hosil boʻlish oʻrni va usuli)ga qatʼiy asoslangan.\n\nAlifbo 24 ta asosiy belgi (tengwar) va qoʻshimcha harflardan iborat. Belgining pastga yoki yuqoriga choʻzilgan poyasi (telco) va doirachasi (lúva) tovushning portlovchi, sirgʻaluvchi yoki burun tovushi ekanini bildiradi."
  },
  {
    title: "Tehtar: Unlilar tizimi va moslashuvchanlik",
    content: "Unli tovushlar asosiy harflar ustiga yoki ostiga qoʻyiladigan maxsus belgilar — Tehtar (nuqtalar, chiziqlar, jingalaklar) orqali ifodalanadi. Bu Tengwarga har qanday tilga — Quenya, Sindarin, ingliz, hatto oʻzbek tiliga ham oson moslashish imkonini bergan."
  }
]);

// 10. CIRTH
updateLang('cirth', [
  {
    title: "Angerthas Runalari va Daeron ixtirosi",
    content: "Cirth (Sindarincha: 'Runalar') — Birinchi Davrda Doriath baxshisi Daeron tomonidan yogʻoch va toshlarga oʻyib yozish uchun maxsus ixtiro qilingan burchakli runa yozuv tizimidir.\n\nKeyinchalik bu yozuv Mittilar (Xazad) tomonidan qabul qilinib, Moria va Ereborda 'Angerthas Moria' sifatida keng rivojlantirildi. Mittilar oʻzlarining barcha qabr toshlari, darvoza bitiklari va qurollariga aynan Cirth runalari bilan naqsh solganlar."
  }
]);

// ==========================================
// COSMOLOGY (8)
// ==========================================

// 1. AINULINDALË
updateCosmo('ainulindale', [
  {
    title: "Ainur Musiqasi: Borliqning ilohiy simfoniyasi",
    content: "Ainulindalë (Quenya tilida: 'Ainur Musiqasi') — Arda va butun Eä borligʻining yaratilishiga asos boʻlgan ulugʻvor ilohiy kosmologik voqeadir. Yagona Xudo — Eru Ilúvatar oʻz fikridan Ainurni yaratdi va ularga Buyuk Mavzuni (The Great Theme) taqdim etib, musiqiy garmoniya yaratishni buyurdi.\n\nAinur sadosi butun Boʻshliqni toʻldirdi. Har bir Ainu oʻzining ilohiy tushunchasiga koʻra simfoniyaga hissa qoʻshdi va bu musiqada kelajakdagi butun koinot tarixi shakllandi."
  },
  {
    title: "Melkor dissonansi va Uchinchi Mavzu",
    content: "Ainur orasida eng qudratlisi boʻlgan Melkor oʻzining manmanligi va boshqarish hirsi tufayli musiqaga oʻzining baland, qoʻpol va shovqinli ohanglarini kiritdi. Bu koinotda birinchi nizo va nomutanosiblikni vujudga keltirdi.\n\nIlúvatar Melkorning dissonansiga qarshi yangi mavzularni, xususan Oʻz Farzandlari — Elflar va Insonlar yaratilishini ifodalovchi Uchinchi Mavzuni kiritdi. Eru Melkorga: 'Hech bir ohang Mening izmimdan tashqari boʻlolmaydi, sen qanchalik buzishga urinma, bu oxir-oqibat Mening ulugʻvorligimga xizmat qiladi' deb uqtirdi."
  }
], "Mifologik afsona bo'yicha olam ilohiy simfoniya orqali vujudga kelgan, keyingi qo'lyozmalarda esa bu metafizik ramziy tushuncha sifatida talqin qilingan.");

// 2. EÄ (MODDIY OLAM)
updateCosmo('ea', [
  {
    title: "Ilohiy 'Boʻlsin!' amri va Oʻchmas Olov",
    content: "Eä (Quenya tilida: 'Boʻlsin!' yoki 'Mavjud boʻlgan Olam') — Eru Ilúvatar tomonidan Boʻshliq qaʼriga Oʻchmas Olovni (Secret Fire) yuborish orqali haqiqiy jismoniy mavjudlikka keltirilgan moddiy koinotdir.\n\nAinur faqat tushda koʻrgan olam endi haqiqiy vaqt, makon, materiya va yulduzlarga ega boʻldi. Ainurning bir qismi ushbu yaratilgan olamga tushib, uning qonuniyatlarini boshqarishga kirishdilar; ular Valar va Maiar deb ataldi."
  }
]);

// 3. IKKI DARAXT (TELPERION VA LAURELIN)
updateCosmo('ikki-daraxt', [
  {
    title: "Valinor Nurlarining Manbai",
    content: "Valinorning Ikki Daraxti — kumush bargli Telperion va tillarang gulli Laurelin — Vala Yavannaning Ezellohar tepaligida kuylagan qoʻshigʻi va Niennaning koʻzyoshlari bilan unib chiqqan buyuk ilohiy moʻjizadir.\n\nDaraxtlar navbatma-navbat yetti soatdan nur sochar, ularning nurlari qoʻshilgan paytda Valinorda tong va shomning sehrli jilosi hukm surar edi. Bu nurlar Ardaning eng sof, birlamchi va muqaddas nuri hisoblangan."
  },
  {
    title: "Melkor va Ungoliant tomonidan soʻndirilishi",
    content: "Melkor va bahaybat qora oʻrgimchak Ungoliant Ikki Daraxtni zaharlab, ularning hayot sharbatini soʻrib oldilar. Daraxtlar nobud boʻldi, ammo ularning soʻnggi kumush guli Oyni (Isil), soʻnggi tillarang mevasi esa Quyoshni (Anar) yaratish uchun osmonga koʻtarildi. Fëanor esa bu nurlarni oʻz vaqtida Silmarillarga muhrlagan edi."
  }
]);

// 4. MUQADDAS NUR
updateCosmo('muqaddas-nur', [
  {
    title: "Ilúvatar nuri va ontologik poklik",
    content: "Muqaddas Nur (Holy Light) — Tolkien teologiyasida shunchaki fizik yorugʻlik emas, balki Eru Ilúvatarning borliqqa bergan maʼnaviy hayoti, ezguligi va ilhomidir. U dastlab Valinorning Ikki Chirogʻida (Illuin va Ormal), soʻng Ikki Daraxtda, undan keyin esa Silmarillarda mujassamlashgan.\n\nUshbu nurning zarralari Galadriel billurida saqlanib, Halqa Urushida Shelob va Sauron zulmatini yengishda bosh maʼnaviy qurol boʻlib xizmat qilgan."
  }
]);

// 5. KÚMA (TASHQI BOʻSHLIQ)
updateCosmo('kuma', [
  {
    title: "Olamdan tashqaridagi cheksiz zulmat",
    content: "Kúma (Quenya tilida: 'Boʻshliq') — Eä moddiy olamining chegaralaridan tashqarida joylashgan, vaqt, nur va materiyadan mahrum boʻlgan cheksiz zulmatdir.\n\nGʻazab Urushidan soʻng Valar Morgothni zanjirband qilib, Dunyo Darvozalaridan (Doors of Night) Kúma boʻshligʻiga uloqtirdilar. Morgoth oxirgi zamongacha — Dagor Dagorath jangigacha shu boʻshliqda zanjirlangan holda qoladi."
  }
]);

// 6. ANAR VA ISIL (QUYOSH VA OY)
updateCosmo('anar-va-isil', [
  {
    title: "Ikki Daraxtning soʻnggi merosi",
    content: "Anar (Quyosh) va Isil (Oy) — Ikki Daraxt nobud boʻlganidan soʻng Aulë tomonidan yasalgan billur kemalarga joylangan samoviy jismlardir. Oyni Maiar Tilion, Quyoshni esa Maiar Arien boshqaradi.\n\nQuyoshning ilk bor Sharqdan koʻtarilishi bilan Birinchi Davr boshlandi va Oʻrta-yerda Insonlar — Ilúvatarning Ikkinchi Farzandlari uygʻondilar."
  }
]);

// 7. TOʻGʻRI YOʻL VA AKALLABÊTH
updateCosmo('togri-yol-va-aklallabeth', [
  {
    title: "Dunyoning dumaloqlashuvi va Toʻgʻri Yoʻl",
    content: "Númenor halokatigacha (Akallabêth) Arda yassi tekislik boʻlib, Oʻrta-yerdan kema bilan gʻarbga suzib toʻgʻridan-toʻgʻri Valinorga borish mumkin edi. Biroq insonlar xiyonatidan soʻng Eru dunyoni sharsimon qilib oʻzgartirdi.\n\nValinor zamin doirasidan tashqariga olindi. Endilikda dunyo boʻylab suzgan har qanday kema aylana boʻylab qaytib keladi. Faqat elflarning Oq Kemalari ilohiy ruxsat bilan 'Toʻgʻri Yoʻl' (Straight Road) orqali kavisli egri fazoni yorib oʻtib, Boqiy Gʻarbdagi Amanga yetib borishi mumkin."
  }
]);

// 8. MANDOS VA FËA-HRÖA
updateCosmo('mandos-va-fea-hroa', [
  {
    title: "Ruh va Tana: Elflar va Insonlar taqdiri",
    content: "Tolkien metafizikasida har bir ongli mavjudot Fëa (boqiy jon / ruh) va Hröa (moddiy tana) birligidan iborat. Elflarning Fëasi Arda bilan chambarchas bogʻlangan boʻlib, tanasi halok boʻlsa ham ruhi Mandos Zallariga (Halls of Mandos) boradi va vaqti kelib qayta tanaga ega boʻlishi mumkin.\n\nInsonlarga esa Eru 'Insonlar Inʼomi'ni (Gift of Men) bergan: ularning ruhi vafot etgach, Arda chegaralaridan butunlay chiqib, yaratuvchi Eru huzuriga yoʻl oladi. Bu inʼom insonlarni dunyo charchogʻidan va boqiylik azobidan xalos etadi."
  }
]);
