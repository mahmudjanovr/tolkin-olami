const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/content/places');

const part2 = {
  'alqualonde.json': {
    extra_sections: [
      {
        title: "Teleri kemasozligi va marvaridlar sohilidagi hayot",
        content: "Alqualondë (Oqqushlar Bandargohi) Valinordagi Eldamar sohilida joylashgan Teleri elflarining bosh shahri va portidir. Shahar darvozasi dengiz suvlari yuvib turuvchi tabiiy tosh arkadan iborat bo'lib, bandargohda Olwë xalqining afsonaviy oqqush shaklidagi kemalari suzib yurgan. Teleri xalqi dengiz sirlarini, marvarid terishni va kemasozlikni barcha xalqlardan yaxshi bilgan. Ularning kemalari shunchalik yengil va mustahkam ediki, go'yo tirik qushdek to'lqinlar ustida uchar edi."
      },
      {
        title: "Birinchi Qarindosh Qirg'ini va shaharning qonli fojiasi",
        content: "Fëanor Silmarillarni qaytarish uchun Noldorni O'rta-yerga boshlaganida, u Teleridan kemalarni berishni talab qildi. Olwë Valar irodasiga qarshi bormasligini aytib rad etgach, Fëanor jangchilari portga bostirib kirdilar. Teleri kemalarni himoya qilib Noldorni dengizga uloqtirdi, ammo Noldor qilich yalang'ochladi. Oqqushlar Bandargohi qardoshlar qoniga belandi; ko'plab dengizchilar qirib tashlandi va kemalar o'g'irlab ketildi. Bu voqea Valinor tarixidagi eng qora dog' bo'lib qoldi."
      },
      {
        title: "G'azab Urushidagi Teleri kemalari",
        content: "Garchi Teleri Noldorning qilgan jinoyatini uzoq vaqt kechira olmagan bo'lsa-da, Birinchi Davr oxirida Eärendilning iltijosiga ko'ra Valar qo'shini safarbar qilinganda, Teleri o'z kemalarini Boqiy G'arb lashkarlarini O'rta-yerga tashish uchun berdi. Biroq ularning birorta ham jangchisi O'rta-yer tuprog'iga qadam qo'ymadi; ular faqat kemalarni boshqarib sohillarda qoldilar. Alqualondë tozalangan bo'lsa-da, qirg'in xotirasi uning oq toshlarida mangu saqlandi."
      }
    ]
  },
  'havens-of-sirion.json': {
    extra_sections: [
      {
        title: "Sirion Deltasi qochqinlari va ikki xalqning birlashishi",
        content: "Doriath va Gondolin qulagach, omon qolgan elflar va insonlar Sirion daryosining Belegaer dengiziga quyiladigan deltasida joylashgan Sirion Bandargohlariga (Havens of Sirion) panoh topib keldilar. Bu maskan Círdan va Gil-galad nazorati ostidagi Balar oroli bilan yaqin aloqada bo'lib, Belerianddagi ozodlikning so'nggi tayanchi edi. Bu yerda Tuor va Idrilning o'g'li Eärendil hamda Beren va Lúthienning nabirasi Elwing voyaga yetdilar; ularning nikohi orqali insonlar va elflarning ikki buyuk sulolasi birlashdi."
      },
      {
        title: "Uchinchi Qarindosh Qirg'ini va Eärendilning najot safari",
        content: "Fëanorning omon qolgan o'g'illari Elwingda Doriathdan qolgan muqaddas Silmaril borligini bilib, uni qaytarishni talab qildilar. Rad javobini olgach, ular Sirion Bandargohlariga to'satdan hujum qildilar (Uchinchi Qarindosh Qirg'ini). Qochqinlar qirg'in qilindi. Elwing Silmaril bilan o'zini dengizga otdi, ammo Vala Ulmo uni oq dengiz qushiga aylantirib qutqarib qoldi. Elwing dengizda kezib yurgan Eärendil kemasi Vingilotga qo'ndi. Aynan shu Silmaril nuri ularga Boqiy G'arbgacha bo'lgan sehrli to'siqlarni yorib o'tish va Valarni yordamga chaqirish imkonini berdi."
      }
    ]
  },
  'dead-marshes.json': {
    extra_sections: [
      {
        title: "Dagorlad jangi sharpalari va zaharli tumanlar",
        content: "O'lik Botqoqliklar (Dead Marshes) Ikkinchi Davrdagi So'nggi Ittifoq Urushining eng qonli to'qnashuvi bo'lgan Dagorlad maydoni yonida joylashgan. Asrlar davomida botqoqlik kengayib, halok bo'lgan minglab elflar, insonlar va o'rklarning qabrlarini o'z bag'riga yutib yuborgan. Botqoq suvlari ostida halok bo'lgan jangchilarning jasadlari buzilmasdan, go'yo kecha o'lgandek yotadi; ularning yuzlarida qadimiy azob va g'azab qotib qolgan. Botqoq uzra yonuvchi 'shamchiroqlar' (marhamatsiz olovlar) sayohatchilarni o'ziga rom etib, tubsiz balchiqqa tortishga urinadi."
      }
    ]
  },
  'paths-of-the-dead.json': {
    extra_sections: [
      {
        title: "Qasamyod Buzuvchilar la'nati va Isildur qasosi",
        content: "O'liklar Yo'li (Paths of the Dead) Oq Tog'lar (Ered Nimrais) ostidan o'tuvchi qorong'i va dahshatli yerosti yo'lidir. Qadimda bu yerda yashagan Tog'liklar Isildurga Sauronga qarshi jang qilishga qasamyod qilgan, ammo urush paytida qo'rqib qasamyodlarini buzgan edilar. Isildur ularni la'natladi: to uning qonuniy vorisi ularni jangga chaqirmaguncha, ularning ruhi tinchlik topmasligi kerak edi. Ming yillar davomida bu yo'ldan o'tgan hech bir tirik inson qaytib chiqmagan; faqat Aragorn o'zining qonuniy shohlik huquqi bilan ularning qalbini zabt etdi va qasamni bajartirdi."
      }
    ]
  },
  'cirith-ungol.json': {
    extra_sections: [
      {
        title: "Shelob uyasi, Torech Ungol va Ikki Kuzatuvchi haykallari",
        content: "Cirith Ungol (O'rgimchak Yorig'i) Mordorning g'arbiy chegarasidagi Ephel Dúath tog'lari orqali o'tadigan eng xavfli yashirin dovondir. Dovon ichida qadimgi maxluq – bahaybat o'rgimchak Shelobning qorong'i labirinti (Torech Ungol) joylashgan. Qal'aning ichki darvozasida esa 'Ikki Kuzatuvchi' (Two Watchers) deb ataluvchi la'nati tosh haykallar turgan; ular o'zlarining ko'rinmas sehrli to'sig'i bilan har qanday begona vujudni to'xtatib qolgan. Samwise Gamgee Galadriel Flakoni (Phial of Galadriel) nuri yordamida ushbu sehrni sindirib, zindondan Frodoni qutqarib oldi."
      }
    ]
  },
  'morannon.json': {
    extra_sections: [
      {
        title: "Cirith Gorgor jarligi, Tish Minoralar va So'nggi Qamal",
        content: "Morannon (Qora Darvoza) Ash Tog'lari (Ered Lithui) va Soya Tog'lari (Ephel Dúath) tutashgan tor Cirith Gorgor (Dahshat Bo'g'ozi) jarligini to'sib turgan. Darvozaning ikki tomonida Gondor shohlari tomonidan Sauronni kuzatish uchun qurilgan, keyinchalik esa dushman tomonidan egallangan 'Tish Minoralar' (Carchost va Narchost) qad rostlagan. Halqa Urushining so'nggi kuni Aragorn boshchiligidagi yetti ming kishilik ittifoqchi qo'shin aynan shu darvoza ostonasidagi tepaliklarda o'n barobar ustun bo'lgan Mordor lashkariga qarshi so'nggi jangni olib bordi va Uzuk yo'q qilingach, darvoza tuproqqa qorishdi."
      }
    ]
  },
  'erebor.json': {
    extra_sections: [
      {
        title: "Arkenstone javohiri, Shohlar Taxti va qayta tiklangan shon-sharaf",
        content: "Erebor zallari faqat oltin bilan emas, balki 'Tog' Yuragi' deb atalgan afsonaviy Arkenstone (Arkenston) javohiri bilan mashhur bo'lgan. Thráin I tomonidan topilgan bu yorqin oq gavhar butun tog'ning nuri hisoblangan. Thrór davrida mitti ustalari tog' ichida ulkan favvoralar, musiqa zallari va qurolsozlik o'choqlarini barpo etdilar. Smaug haydalgach va Dáin II taxtga o'tirgach, Erebor yana O'rta-yerning eng qudratli mitti davlatiga aylandi. Halqa Urushida mitti va insonlar dushmanning sharqiy armiyasiga qarshi birgalikda mardonavor mudofaa qildilar."
      }
    ]
  },
  'hobbiton.json': {
    extra_sections: [
      {
        title: "Bywater jangi, Saruman xarobasi va Yangilanish bayrami",
        content: "Hobbiton Uchinchi Davr oxirida qora qaroqchilar va ularning yetakchisi 'Sharkey' (Saruman) tomonidan qattiq xo'rlandi: daraxtlar kesildi, qadimgi tegirmon buzilib badbo'y zavodga aylantirildi. Biroq Frodo, Sam, Merry va Pippin qaytib kelgach, 1419-yilgi Bywater jangida xobbitlar qo'zg'olon ko'tarib o'z vatanlarini ozod qildilar. Samwise Gamgee Galadriel in'om etgan sehrli tuproq va mallorn urug'i yordamida butun Shire tabiatini qayta tikladi; Hobbiton yanada yashil, mevali va gullagan jannatmakon qishloqqa aylandi."
      }
    ]
  },
  'bree.json': {
    extra_sections: [
      {
        title: "Sharq va G'arb yo'llari chorrahasi, Butterbur va qadimiy hamdo'stlik",
        content: "Bree qadimiy Buyuk Sharqiy Yo'l (Great East Road) va Shimoliy Yashil Yo'l (Greenway) kesishmasidagi Bree Tepaligi yonbag'rida joylashgan eng qadimgi aholi punktidir. Uning eng mashhur maskani Barliman Butterbur egalik qiladigan 'Sakrovchi Poni' (The Prancing Pony) musofirxonasi bo'lib, bu yerda xobbitlar, sayohatchilar, mitti savdogarlar va Shimoliy Qo'riqchilar uchrashar edilar. Shaharning xandaq va qalin to'siq devori uni tunda o'rmon bo'rilari va qaroqchilardan asragan; u O'rta-yerning notinch davrlarida ham o'zining mehmondo'st va erkin tabiatini saqlab qoldi."
      }
    ]
  },
  'amon-sul.json': {
    extra_sections: [
      {
        title: "Amon Sûl palantíri va Angmar urushlaridagi fojia",
        content: "Amon Sûl (Shamol Cho'qqisi) minorasi Arnor saltanatining eng asosiy strategik va aloqa tayanchi bo'lgan, chunki unda shimoliy o'lkalarning eng yirik va qudratli palantíri (ko'ruvchi toshi) saqlangan. Arnor uchga bo'lingach, Arthedain, Cardolan va Rhudaur bu minora va tosh uchun ko'p yillar davomida nizolashdilar. 1409-yilda Angmar Jodugar-Qiroli ulkan qo'shin bilan kelib, minorani qamal qildi va yoqib yubordi. Tosh qutqarib qolingan bo'lsa-da, qadimiy baland minora butunlay qulab, Uchinchi Davrga kelib faqat qoraygan tosh halqa va xarobalar qoldi."
      }
    ]
  },
  'osgiliath.json': {
    extra_sections: [
      {
        title: "Yulduzlar Gumbazi (Dome of Stars) va buyuk palantír yo'qolishi",
        content: "Osgiliathning eng ulug'vor binosi Anduin daryosi uzra qurilgan bahaybat tosh ko'prik ustidagi Osgiliath Yulduzlar Gumbazi (Dome of Stars) edi. Unda butun O'rta-yerdagi barcha palantírlarni boshqara oluvchi bosh tosh saqlangan. 1432-yilgi Gondor Qardoshlar Urushida (Kin-strife) isyonchilar shaharni yondirganlarida, bu muqaddas gumbaz qulab, ulug'vor Osgiliath toshi daryo qa'riga g'arq bo'ldi va abadiy yo'qoldi. Shahar asta-sekin mudofaa qal'asiga, so'ngra qonli jang maydoniga aylanib, o'zining shon-sharafini Minas Tirithga topshirdi."
      }
    ]
  },
  'pelargir.json': {
    extra_sections: [
      {
        title: "Oq kemalar havzasi, Lebennin tabiati va Elessar floti",
        content: "Pelargir Anduin va Sirith daryolari qo'shilish joyida joylashgan bo'lib, uning keng chuqur havzalari va tosh pristanlari minglab katta kemalarni sig'dira olgan. Uchinchi Davrda shahar bir necha bor Qora Númenorliklar va Umbar qaroqchilari tomonidan qamal qilingan bo'lsa-da, o'zining strategik ahamiyatini yo'qotmadi. Aragorn g'alabasidan so'ng, Pelargir Qayta Birlashgan Qirollikning bosh dengiz bazasiga aylandi; shoh Elessar bu yerda yangi shohona flot qurdirib, dengiz yo'llarini qaroqchilardan butunlay tozaladi va janubiy mamlakatlar bilan tinch savdo aloqalarini o'rnatdi."
      }
    ]
  }
};

for (const [file, data] of Object.entries(part2)) {
  const p = path.join(dir, file);
  if (!fs.existsSync(p)) continue;
  const original = JSON.parse(fs.readFileSync(p, 'utf8'));
  for (const sec of data.extra_sections) {
    original.description_sections.push(sec);
  }
  fs.writeFileSync(p, JSON.stringify(original, null, 2), 'utf8');
  console.log(`Updated place part 2: ${file}`);
}
