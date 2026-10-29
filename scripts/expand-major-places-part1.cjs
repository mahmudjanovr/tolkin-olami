const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/content/places');

const part1 = {
  'minas-tirith.json': {
    extra_section: {
      title: "Rath Dínen sukunati, Palantír va me'moriy ramzlar",
      content: "Mindolluin qoyasi va oltinchi qavat o'rtasidagi yopiq yo'lak orqali Rath Dínen (Sukunat Ko'chasi) deb ataluvchi muqaddas maqbaralar maydoniga o'tilgan. U yerda Gondor shohlari va noiblari qadimiy tosh tobutlarda mangu uyquda yotadilar. Ecthelion Minorasining cho'qqisidagi xonada esa Anárion palantíri saqlangan bo'lib, Denethor II undan foydalanish orqali Sauronning kuchi qarshisida aqlan zaiflashgan edi. Shaharning oq tosh devorlari va Oq Daraxt nuri Númenorning yo'qolgan ulug'vorligini O'rta-yerda saqlab qolgan eng oliy yodgorlik hisoblangan."
    }
  },
  'rivendell.json': {
    extra_section: {
      title: "Yarim-elflar boshpanasi, Uch Uzuk sehri va Vilya qudrati",
      content: "Rivendell (Imladris) Bruinen daryosi vodiysida Elrond tomonidan asos solingan bo'lib, uning xavfsizligi Elflarning Uch Uzugidan biri bo'lgan Vilya (Havo Uzugi) siri bilan qo'riqlanardi. Bu maskanda vaqt boshqacha oqardi: so'lish va qariylik to'xtab, Birinchi Davr xotirasi, qadimgi kitoblar va qo'shiqlar jonli saqlanardi. Aragorn bolaligida aynan shu yerda 'Estel' (Umid) nomi bilan tarbiyalangan. Rivendell Kengashi (Council of Elrond) o'tkazilgan O'ymakor Zal (Hall of Fire) butun O'rta-yer taqdiri hal qilingan eng muqaddas maskanlardan biri bo'lib qoldi."
    }
  },
  'gondolin.json': {
    extra_section: {
      title: "Yetti Darvoza mudofaasi va Amon Gwareth me'morchiligi",
      content: "Gondolin Amon Gwareth tepaligida oq marmardan bunyod etilgan bo'lib, Tirion shahri nusxasida barpo qilingan edi. Unga olib boruvchi yagona yashirin yo'l Yetti Darvoza bilan himoyalangan: Yog'och, Tosh, Bronza, Temir, Kumush, Oltin va nihoyat Po'lat Darvoza. Har bir darvoza o'ziga xos soqchilar va minoralar tizimiga ega edi. Qirol Turgon saroyi oldida kumush va oltindan yasalgan Ikki Daraxt (Belthil va Glingal) qad rostlab turgan. Shahar nafaqat qal'a, balki qurolsozlik, zargarlik va she'riyatning eng buyuk akademiyasi bo'lgan."
    }
  },
  'khazad-dum.json': {
    extra_section: {
      title: "Mazarbul xonasi, Durin Taxti va cheksiz yerosti ko'priklari",
      content: "Khazad-dûmning markazida yettinchi darajadagi Mazarbul Xonasi (Yozuvlar zali) joylashgan bo'lib, unda mitti xalqining barcha tarixiy qo'lyozmalari saqlangan. Sharqiy darvoza oldida esa tubsiz jar ustiga qurilgan mashhur Durin Ko'prigi (Bridge of Khazad-dûm) qad rostlagan edi. Bu tor tosh ko'prik har qanday dushmanning birma-bir o'tishiga majbur qiluvchi dahoiy mudofaa vositasi edi. Gandalf va Balrog to'qnashuvi aynan shu ko'prik ustida sodir bo'lib, ko'prik qulashi bilan Balrog tubsiz jarga qulagan."
    }
  },
  'barad-dur.json': {
    extra_section: {
      title: "Lugbúrzning qora poydevori va Sauron irodasining timsoli",
      content: "Barad-dûr (Qora Nutqda: Lugbúrz) O'rta-yer tarixidagi eng bahaybat va qo'rqinchli minora bo'lib, Kulrang Tog'lar (Ered Lithui) tarmog'ida qad rostlagan edi. Uning poydevori Yagona Uzuk kuchi bilan mustahkamlangan bo'lib, oddiy qurollar yoki qamal vositalari bilan uni buzish mutlaqo imkonsiz edi. Minoraning eng yuqori cho'qqisidagi derazadan Sauronning Olovli Ko'zi (Eye of Sauron) tunu kun O'rta-yerni kuzatib turgan. Uzuk yo'q qilingach, minoraning butun tayanchi bir zumda havoga uchib, qora toshlar qulab tushdi."
    }
  },
  'orodruin.json': {
    extra_section: {
      title: "Sammath Naur o'chog'i va Yagona Uzukning tug'ilgan maskani",
      content: "Orodruin (Hukm Tog'i / Amon Amarth) Mordorning Gorgoroth tekisligida yolg'iz qad rostlagan faol vulqondir. Vulqon yonbag'rida Sauron tomonidan o'yilgan Sauron Yo'li va Sammath Naur (Taqdir Xonalari) joylashgan edi. Bu yerosti g'ori to'g'ridan-to'g'ri tog' yuragidagi erigan lava daryosiga ochilgan. Yagona Uzuk aynan shu erda yasalgani uchun uni faqat shu o'choq olovigina eritishi mumkin edi. Vulqon Sauronning irodasiga bog'liq bo'lib, Sauron kuchayganda kul va lava otilar, u zaiflashganda esa sokinlashar edi."
    }
  },
  'lothlorien.json': {
    extra_section: {
      title: "Caras Galadhon, Nenya nuri va Oltin O'rmon sehri",
      content: "Lothlórien (Oltin O'rmon) Anduin va Celebrant daryolari oralig'ida joylashgan bo'lib, uning markazi mallorn daraxtlari ustida qurilgan Caras Galadhon shahri edi. Galadriel o'zining suv uzugi Nenya yordamida o'rmonni tashqi dunyoning buzilishi, vaqtning shiddati va yovuzlikdan himoya qilgan. O'rmon ichida uning afsonaviy Ko'zgusi (Mirror of Galadriel) joylashgan bo'lib, u suv yuzasida o'tmish, bugun va bo'lishi mumkin bo'lgan kelajak sirlarini ko'rsatar edi. Uzuk yo'q qilingach, Lórien sehri ham so'ndi va elflar G'arbga jo'nadilar."
    }
  },
  'isengard.json': {
    extra_section: {
      title: "Orthanc minorasining siri va sanoatlashuv fojiasi",
      content: "Isengard (Angrenost) qadimiy Númenor me'morlari tomonidan qattiq qora toshning to'rtta bahaybat ustunidan monolit shaklda birlashtirib qurilgan. Bu toshni hech qanday bolg'a yoki olov sindira olmas edi. Saruman ushbu qal'aga joylashgach, uning yashil bog'larini o'rk kazarmalariga, chuqur shaxtalarga va qurolsozlik domnalariga aylantirdi. Minora ichida Saruman Orthanc palantíridan foydalanib Sauron bilan bog'langan va o'z ongini qora vasvasaga topshirgan edi. Entlar daryoni burib, bu sanoat zaharini tozaladilar."
    }
  },
  'edoras.json': {
    extra_section: {
      title: "Meduseld Oltin Saroyi va Rohirrim ajdodlari xotirasi",
      content: "Edoras Oq Tog'lar etagidagi yashil adir ustida joylashgan Rohan qirolligining poytaxtidir. Shahar tepasida Brego tomonidan qurilgan Meduseld (Oltin Saroy) qad rostlagan bo'lib, uning tomi uzoqdan quyoshda oltindek yarqirab turgan. Saroyga olib boruvchi yo'l etagida oq 'Simbelmynë' (Evermind) gullari bilan qoplangan qadimiy shohlar maqbaralari joylashgan. Edoras nafaqat harbiy istehkom, balki Rohirrim xalqining qahramonlik qo'shiqlari, bayramlari va erkin chavandozlik ruhiyatining markazi bo'lgan."
    }
  },
  'helms-deep.json': {
    extra_section: {
      title: "Yaltiroq G'orlar (Aglarond) va Helm Hammerhand afsonasi",
      content: "Helm jarligi ortidagi qoyalarda afsonaviy Aglarond (Yaltiroq G'orlar) joylashgan bo'lib, Gimli uning billur ustunlari, marmar zallari va tovush aks-sadosini dunyodagi eng go'zal mo''jiza deb atagan. Uzuk Urushidan so'ng Gimli bu yerda yangi Mitti shohligiga asos soldi. Qal'a esa qishning qahratonida yolg'iz o'zi yalang qo'l bilan dushmanlarni qirgan va qorda tik turib halok bo'lgan Podshoh Helm Hammerhand xotirasiga atab nomlangan bo'lib, Rohirrim uchun yengilmaslik ramzi edi."
    }
  },
  'angband.json': {
    extra_section: {
      title: "Thangorodrim cho'qqilari va yerosti do'zaxi labirintlari",
      content: "Angband ('Temir Qamoqxona') Morgothning Beleriand shimolidagi eng dahshatli yerosti qal'asi bo'lib, uning ustida ulkan kul va toshlardan hosil bo'lgan uch cho'qqili Thangorodrim tog'i qad rostlagan. Angband qa'rida minglab temirchilik o'choqlari, zaharli laboratoriyalar va asirlar zindoni joylashgan edi. Bu yerda Glaurung va Ancalagon kabi ajdaholar zoti yaratilgan, o'rklar va Balroglar to'dalari saqlangan. Qal'a G'azab Urushida Valar qo'shini tomonidan yer bilan yakson qilinib, dengiz tubiga cho'ktirilgan."
    }
  },
  'menegroth.json': {
    extra_section: {
      title: "Ming G'or mo'jizasi, Melian sehri va Belegost ustalari",
      content: "Menegroth (Sindarincha: 'Ming G'or') Doriath o'rmoni markazidagi Esgalduin daryosi bo'yida qoyatosh ichiga o'yib qurilgan Sindar poytaxtidir. Qal'ani qurishda Thingolga Belegost mitti-odamlari yordam bergan; zallarning ustunlari toshdan o'yilgan ulkan bamisoli chinorlar shaklida bo'lib, billur chiroqlar bilan yoritilgan. Melian Kamari (Girdle of Melian) bu maskanni barcha dushmanlardan asragan. Ammo Thingol Nauglamír bo'yniga Silmarilni qadashni buyurganida, gnom zargarlari bilan chiqqan qonli nizo Menegrothning fojiali qulashini boshlab berdi."
    }
  },
  'nargothrond.json': {
    extra_section: {
      title: "Felagund shon-shavkati, Narog qoyalari va Glaurung kulfati",
      content: "Nargothrond Narog daryosi qirg'og'idagi baland qoyalarda Finrod Felagund tomonidan mitti ustalari yordamida qurilgan yerosti qal'a-shahri edi. Finrod shu tufayli 'Felagund' (G'or Yo'nuvchi) nomini oldi. Shahar ko'p asrlar davomida o'zini yashirib, partizanlik urushi olib bordi. Biroq Túrin Turambar Nargothrondga kelgach, u shahar darvozasi oldida ulkan tosh ko'prik qurdirdi va ochiq jangga chiqishni talab qildi. Bu xato qal'aning joylashuvini dushmanga fosh qildi; ajdaho Glaurung ko'prikdan o'tib, Nargothrondni vayron qildi va uning oltinlarini o'z uyasiga aylantirdi."
    }
  }
};

for (const [file, data] of Object.entries(part1)) {
  const p = path.join(dir, file);
  if (!fs.existsSync(p)) continue;
  const original = JSON.parse(fs.readFileSync(p, 'utf8'));
  original.description_sections.push(data.extra_section);
  fs.writeFileSync(p, JSON.stringify(original, null, 2), 'utf8');
  console.log(`Updated place part 1: ${file}`);
}
