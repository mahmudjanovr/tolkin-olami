const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/content/characters');

const batch2 = {
  'maedhros.json': {
    extra_sections: [
      {
        title: "Thangorodrim qoyasidagi zanjirbandlik va Fingon najoti",
        content: "Maedhros Fëanorning to'ng'ich o'g'li bo'lib, otasining vafotidan so'ng Noldor yetakchiligini o'z zimmasiga oldi. Morgoth uni elchilik muzokaralarida ayyorona asir olib, o'ng qo'lidan temir bilaguzuk bilan Thangorodrim cho'qqisiga zanjirband qildi. U yerda ko'p yillar azob chekkan Maedhrosni uning sodiq do'sti Fingon Buyuk Burgut Thorondor yordamida qutqardi. Qo'lini bilaguzukdan chiqarishning iloji bo'lmagani sababli Fingon uning o'ng bilagini kesishga majbur bo'ldi. Maedhros chap qo'lida qilich tutishni o'rgandi va avvalgidan ham xatarli jangchiga aylandi."
      },
      {
        title: "Oliy Shohlikdan voz kechish va qonli qismatning intihosi",
        content: "Noldor orasida birlikni saqlab qolish uchun Maedhros Oliy Shohlik huquqini amakisi Fingolfinga topshirdi. U Sharqiy Beleriandda Himring qal'asini qurib, 'Maedhros Ittifoqi'ni tuzdi. Biroq otasining qarg'ishi uning taqdirini qora kulfat bilan ta'qib qildi: u Doriath va Sirion bandargohlaridagi ikkita qonli Qirg'inga boshchilik qilishga majbur bo'ldi. G'azab Urushidan so'ng Eönwë qarorgohidan Silmarilni o'g'irladi, ammo tosh uning qotil qo'llarini olovdek yondirgani sababli, cheksiz pushaymonlik va ruhiy azob ichida yer yorig'idagi tubsiz olovga o'zini tashlab halok bo'ldi."
      }
    ]
  },
  'earendil.json': {
    extra_sections: [
      {
        title: "Dengizchi Eärendil, Vingilot kemasi va Oqqush qanotlari",
        content: "Eärendil (Tuor va Idrilning o'g'li) yarim-elf bo'lib, insoniyat va elflarning eng oliy fazilatlarini o'zida mujassam etgan. Sirion Havensda u Elwing bilan oila qurdi va Círdan yordamida oq kema Vingilotni yasadi. Uning maqsadi dunyodan ajratilgan Boqiy G'arbga borib, Valardan ezilgan O'rta-yer xalqlari uchun najot so'rash edi. Elwing uning kemasiga qutqarib olingan Silmaril bilan kelgach, toshning muqaddas nuri kemani sehrli to'siqlardan o'tkazib, Valinor sohillariga olib bordi."
      },
      {
        title: "Tong Yulduzi, Ancalagon ustidan g'alaba va abadiy parvoz",
        content: "Valar huzurida qilgan iltijosi G'azab Urushini boshlab berdi. Manwë Eärendil va uning oilasiga qaysi irq taqdirini tanlash huquqini berdi; Eärendil Elwing istagiga binoan elflar qismatini tanladi. Uning Vingilot kemasi muqaddas olov bilan qoplanib, samoga ko'tarildi. G'azab Urushida Eärendil osmondan tushib, eng dahshatli qanotli ajdaho Ancalagon Qorani mag'lub etdi. Shundan so'ng u peshonasiga Silmarilni taqqan holda samoda 'Gil-Estel' (Umid Yulduzi / Kechki va Tong Yulduzi) sifatida mangu suzib yuradi; uning nuri Uchinchi Davrda ham zulmat ichida qolgan barcha ezgu qalblarga kuch bag'ishladi."
      }
    ]
  },
  'glorfindel.json': {
    extra_sections: [
      {
        title: "Balrog qotili, Mandosdan qaytish va yangi ilohiy vazifa",
        content: "Glorfindel (Oltin Gul Xonadoni sardori) Gondolin qulashida Balrog bilan Cirith Thoronath qoyasida olishib, Tuor, Idril va yosh Eärendilni qutqarib qolgan edi. Uning ruhi Mandos zallariga borganida, uning fidoyiligi va gunohsizligi sababli Manwë uni o'z jismoniy tanasida qayta tiriltirdi va unga deyarli Mayar darajasidagi qudrat baxsh etdi. Ikkinchi Davrning 1600-yillari atrofida u Sauronga qarshi kurashda elflar va insonlarga yordam berish uchun O'rta-yerga qaytarib yuborildi."
      },
      {
        title: "Fornost jangi bashorati va Bruinen kechuvidagi najot",
        content: "Uchinchi Davrda Glorfindel Fornost jangida Angmar Jodugar-Qirolini quvib, mashhur bashoratni aytdi: 'Uni quvma! U bu yerga qaytmaydi. Uning halokati hali uzoqda va u erkak kishi qo'lidan o'lmaydi'. Bu bashorat ming yil o'tib Pelennor dalalarida Éowyn va Merry tomonidan amalga oshirildi. Uzuk Urushida esa Glorfindel o'zining Asfaloth tulporida Nazgûllarni Bruinen daryosigacha quvib, yarador Frodo Bagginsni qutqarib Rivendellga yetkazishda hal qiluvchi rol o'ynadi."
      }
    ]
  },
  'denethor-ii.json': {
    extra_sections: [
      {
        title: "Minas Tirithning 26-chi Noibi, mag'rur aql va Palantír fojiasi",
        content: "Denethor II (Ecthelion II ning o'g'li) Gondorning hukmron noibi bo'lib, nihoyatda o'tkir aql, ulkan g'urur va metin irodaga ega edi. U shahar mudofaasini ko'p yillar davomida mohirlik bilan boshqardi, Pelennor atrofida Rammas Echor devorini mustahkamladi. Biroq u Minas Tirithdagi qadimiy Anárion palantíridan foydalanishga jur'at etdi. Sauron tosh orqali unga o'zining behisob legionlarini, cheksiz qudratini va mag'lubiyat muqarrarligini ko'rsatib, Denethorning mustahkam irodasini asta-sekin sindirdi va uni umidsizlik girdobiga tashladi."
      },
      {
        title: "Boromir dardi, Faramirga adolatsizlik va o'choqdagi intihosi",
        content: "Katta o'g'li Boromirning o'limi Denethorga qaqshatqich zarba bo'ldi. Kichik o'g'li Faramirni Osgiliath mudofaasiga nomutanosib topshiriq bilan yuborishi uning aqlini yanada xiralashtirdi. Faramir yarador bo'lib qaytganida va shahar qamal qilinganida, Denethor barcha umidlardan voz kechdi. U Gandalfning maslahatlarini rad etib, Aragornning shohlik da'vosiga bo'ysunishni istamadi. Rath Dínendagi ajdodlar maqbarasida o'zini va behush o'g'lini tiriklayin yoqishga uringan Denethor, palantírni ko'kragiga bosgan holda o'z joniga qasd qildi; Faramir esa Beregond va Pippin jasorati tufayli olovdan qutqarib qolindi."
      }
    ]
  },
  'anarion.json': {
    extra_sections: [
      {
        title: "Gondorning asoschisi, Minas Anor va Osgiliath mudofaasi",
        content: "Anárion Elendilning kenja o'g'li bo'lib, akasi Isildur bilan birga Gondor Janubiy Qirolligiga asos solgan. U Quyosh shahri – Minas Anor (keyinchalik Minas Tirith) qasrini qurdi va akasi bilan birgalikda Anduin daryosidagi Osgiliath poytaxtidan adolatli hukmronlik qildi. Sauron Ikkinchi Davrning 3429-yilida Minas Ithilni bosib olganida, Anárion Osgiliathda qahramonona mudofaa tashkil qildi va dushman qo'shinini Anduin daryosidan o'tkazmasdan, shimoldan So'nggi Ittifoq qo'shini kelguncha ushlab turdi."
      },
      {
        title: "Barad-dûr qamalidagi fojiali halokati va merosi",
        content: "So'nggi Ittifoq Urushida Anárion o'z otasi Elendil va akasi Isildur yonida Dagorlad tekisligida mardonavor jang qildi. Mordor ichkarisiga kirib, Barad-dûr qal'asini yetti yil qamal qilish jarayonida, Ikkinchi Davrning 3440-yilida qal'a minorasidan otilgan bahaybat tosh uning dubulg'asini yorib o'tib, halok qildi. Uning o'g'li Meneldil keyinchalik Gondor taxtiga o'tirdi va Gondor podshohlari sulolasi aynan Anárion naslidan davom etdi; Minas Tirithning Oq Minorasi esa uning xotirasini asrlar davomida saqlab qoldi."
      }
    ]
  },
  'elros.json': {
    extra_sections: [
      {
        title: "Númenorning Birinchi Podshohi Tar-Minyatur va tanlov",
        content: "Elros (Eärendil va Elwingning o'g'li, Elrondning egizak ukasi) G'azab Urushidan so'ng Valar bergan taqdir tanlovida insonlar (Edain) qismatini tanladi. Unga insonlarning foniyligi berilgan bo'lsa-da, elflar qoni tufayli mislsiz uzoq umr (besh yuz yil) va qudrat in'om etildi. Valar Edain xalqiga mukofot tariqasida bergan Elenna (Númenor) orolida u birinchi podshoh sifatida taxtga o'tirdi va 'Tar-Minyatur' nomini oldi. U Númenor sivilizatsiyasining poydevorini qo'ygan buyuk qonunshunos va me'mor bo'ldi."
      },
      {
        title: "Beshyuz yillik shon-sharaf va O'rta-yer taqdiriga ta'siri",
        content: "Tar-Minyatur Armenelos shahrida to'rt yuz o'n yil hukmronlik qildi va Ikkinchi Davrning 442-yilida tinch holda o'z jonini Eruga topshirdi. Uning naslidan bo'lgan podshohlar ming yillar davomida buyuk flotlar qurdilar va O'rta-yerni Sauron zulmidan himoya qildilar. Elrosning qonidan chiqqan sulola keyinchalik Arnor va Gondor shohliklarini, xususan Aragorn Elessarni dunyoga keltirdi. Elros o'zining donoligi bilan inson zotining eng yuksak fazilatlarini tarixdagi eng qudratli qirollikka poydevor qilib qo'ydi."
      }
    ]
  },
  'ar-pharazon.json': {
    extra_sections: [
      {
        title: "Buyuk Qurol, Oltin Pharazôn va Boqiy G'arbga tajovuz",
        content: "Ar-Pharazôn (Quenyacha: Tar-Calion) Númenorning yigirma to'rtinchi va so'nggi podshohi bo'lib, tarixdagi eng qudratli va shu bilan birga eng fojiali inson hukmdori edi. U amakivachchasi Mírielga zo'rlik bilan uylanib taxtni egalladi. Sauronni asir olganidan so'ng, uning hiylalariga aldanib Melkor ibodatxonasini qurdirdi. O'lim qo'rquvi uning aqlini xiralashtirgach, u 'Buyuk Qurol' deb ataluvchi mislsiz dengiz armadasini qurib, Valinor sohillariga bostirib bordi va Boqiy Zaminga qurol bilan qadam qo'ydi."
      },
      {
        title: "Akallabêth qismati va Unutilganlar G'orlari afsonasi",
        content: "Ar-Pharazôn Valinorga qadam qo'ygan zahoti Eru Ilúvatar Ardaning shaklini o'zgartirdi. Qulagan qoyalar ostida podshoh va uning butun qo'shini 'Unutilganlar G'orlari'da (Caves of the Forgotten) qamalib qoldi; afsonaga ko'ra, ular Dunyoning So'nggi Jangi (Dagor Dagorath)gacha o'sha yerda uyquda yotadilar. Uning vatani Númenor oroli esa to'lqinlar ostida qolib butunlay g'arq bo'ldi. Ar-Pharazôn kibri va o'limdan qochish vasvasasi butun bir buyuk sivilizatsiyani yer yuzidan supurib tashladi."
      }
    ]
  },
  'hurin.json': {
    extra_sections: [
      {
        title: "Insonlarning eng qudratli jangchisi va Sererech botqog'i",
        content: "Húrin Thalion (Galdorning o'g'li, Dor-lómin hukmdori) Birinchi Davr insonlari orasida eng kuchli va jasur jangchi edi. Nirnaeth Arnoediad jangida u Turgonning chekinishini ta'minlash uchun Sererech botqog'ida so'nggi mudofaani boshqardi. Yetmishdan ortiq troll va o'rk sardorlarini o'z boltasi bilan qirib tashlagan Húrin har bir zarbasida 'Aurë entuluva!' ('Tong yana otadi!') deb na'ra tortdi. Oxir-oqibat o'rklarning kesilgan qo'llari va murdalari ostida qolib, Morgoth tomonidan asir olindi."
      },
      {
        title: "Thangorodrimdagi zanjirbandlik, la'nat va so'nggi dard",
        content: "Morgoth Húrindan Gondolin sirlarini talab qildi, ammo Húrin uni masxara qilib rad etdi. Morgoth uni Thangorodrim cho'qqisidagi tosh taxtga zanjirlab, uning butun oilasini la'natladi. Húrin yigirma sakkiz yil davomida o'z farzandlari – Túrin va Nienorning boshiga tushgan barcha dahshatli fojialarni sehrli ko'zguda ko'rib azob chekdi. Ozod qilingach, qarigan va ruhi singan Húrin Nargothrond xarobalaridan Nauglamírni olib Thingol huzuriga tashladi va nihoyat G'arbiy Dengiz qoyalaridan o'zini suvga tashlab fojiali hayotiga xotima berdi."
      }
    ]
  },
  'durin-i.json': {
    extra_sections: [
      {
        title: "Boqiy Durin, Kheled-zâram ko'li va Khazad-dûm asos solinishi",
        content: "Durin I Aulë tomonidan yaratilgan Yetti Mitti Ota-bobolarining eng birinchisi va eng ulug'i edi. U Gundobad tog'ida uyg'onib, yolg'iz o'zi janubga qarab yo'l oldi. Tumanli Tog'lar bag'ridagi ko'zgudek sokin Kheled-zâram (Ko'zgu Ko'li) bo'yiga kelganida, suv yuzasida o'z boshining ustida yetti yulduzdan iborat toj aks etganini ko'rdi. U buni ilohiy nishon deb bilib, shu yerda butun mitti xalqining eng buyuk poytaxti – Khazad-dûm (Moria) saltanatiga asos soldi va Uzunsoqollar (Longbeards) sulolasini boshlab berdi."
      },
      {
        title: "Uzoq umr, reinkarnatsiya e'tiqodi va Durin merosi",
        content: "Durin nihoyatda uzoq umr ko'rgani va Birinchi Davrning ko'p asrlari davomida adolatli hukmronlik qilgani sababli 'Boqiy Durin' (Durin the Deathless) deb ataldi. Mittilar e'tiqodiga ko'ra, ularning buyuk otasi haqiqatan o'lmagan, balki oradan asrlar o'tib o'z avlodlarida aynan o'zining qiyofasi, fe'l-atvori va xotirasi bilan qayta dunyoga keladi (Durin II dan Durin VII gacha bo'lgan podshohlar uning qayta tug'ilishi deb hisoblangan). Uning nomi mitti madaniyatining eng muqaddas tayanchi va birlik timsoli bo'lib qoldi."
      }
    ]
  },
  'treebeard.json': {
    extra_sections: [
      {
        title: "Fangorn o'rmoni Oqsoqoli, Eng qadimgi mavjudot va Entmoot",
        content: "Daraxtsoqol (Sindarincha: Fangorn) O'rta-yerda qadam bosgan barcha tirik mavjudotlarning eng keksasi bo'lib, 'Tirik narsalarning eng qadimiysi' deb atalgan. U Yavanna tomonidan yaratilgan birinchi Entlar avlodidan bo'lib, Fangorn o'rmonining qo'riqchisi edi. Xobbitlar Merry va Pippin uning o'rmoniga kirib kelganlarida, Daraxtsoqol Sarumanning daraxtlarni qirib tashlaganini ko'rib g'azabga to'ldi. U uch kunlik Entlar Kengashini (Entmoot) chaqirdi va Entlarning Isengardga qarshi so'nggi mashhur yurishini boshladi."
      },
      {
        title: "Yo'qolgan Ent-xotinlar dardi va tabiatning qismati",
        content: "Daraxtsoqolning qalbida doimo chuqur qayg'u – yo'qolgan Ent-xotinlar (Entwives), xususan o'zining sevgilisi Fimbrethil dardi yashar edi. Ikkinchi Davrda Sauron Anduin yerlarini yoqib yuborganida Ent-xotinlar bedarak yo'qolgan va shundan beri yangi Ent bolalari (Entings) tug'ilmay qo'ygan edi. Daraxtsoqol o'zining sekin, ammo qudratli falsafasi bilan O'rta-yerning texniklashuv va sanoatlashuv davriga qarshi turgan eng oliyjanob tabiat ruhiyati bo'lib gavdalanadi."
      }
    ]
  },
  'witch-king.json': {
    extra_sections: [
      {
        title: "Nazgûllar Sardori, Angmar saltanati va Arnorning yo'q qilinishi",
        content: "Angmar Jodugar-Qiroli (Witch-king of Angmar) Sauronning to'qqiz xizmatkori – Nazgûllarning eng qudratlisi va Sauronning bosh qo'mondoni edi. Dastlab Ikkinchi Davrda Númenor aslzodasi va qora jodugar bo'lgan bu inson Qudrat Uzugi vasvasasiga uchrab, abadiy qorong'u soyaga aylandi. Uchinchi Davrda u shimolda Angmar jodugarlik shohligiga asos soldi va ko'p asrlar davomida Arnorning uch shohligini (Arthedain, Cardolan, Rhudaur) birin-ketin tor-mor qilib, Dúnedainning shimoliy sulolasini yo'q qildi."
      },
      {
        title: "Minas Morgul hukmronligi va Pelennordagi kutilmagan halokati",
        content: "Shimolni vayron qilgach, u janubga qaytib Minas Ithilni zabt etdi va uni Minas Morgulga aylantirdi. Halqa Urushida Sauron uni barcha lashkarlarning oliy sarkardasi qilib Minas Tirithga yo'lladi. U Pelennor darvozasini buzib kirishda mislsiz dahshat sochdi. Biroq Glorfindelning 'Uni erkak kishi o'ldira olmas' degan bashorati ro'yobga chiqdi: xobbit Meriadoc uni Dúnedain xanjari bilan yaraladi, Rohanning jasur malikasi Éowyn esa uning ko'rinmas yuziga qilich sanchib, dushman sardorini abadiy yo'qlikka uloqtirdi."
      }
    ]
  },
  'meriadoc-brandybuck.json': {
    extra_sections: [
      {
        title: "Zamondosh xobbitlar strategiyasi, Fangorn va Hornburg jasorati",
        content: "Meriadoc Brandybuck (Merry) xobbitlar orasida eng ziyrak, rejalashtirishga usta va jasur qahramon edi. U Frodoni Shire safariga tayyorlashda maxfiy fitnani uyushtirgan va barcha xavflarni oldindan hisoblagan edi. Fangorn o'rmonida Entlarni uyg'otishda Pippin bilan birga muhim rol o'ynadi. So'ngra u Rohirrim safiga kirib, Podshoh Théodenning shaxsiy qurolbardori (esquire) bo'ldi. Théoden unga mehr qo'yib, o'g'lidek e'zozladi."
      },
      {
        title: "Jodugar-Qirolga zarba, Buckland Boshlig'i va Qizil Kitob merosi",
        content: "Pelennor dalalarida Merry Éowyn bilan birga o'lim yoqasida turgan Théodenni himoya qildi. Uning Westernesse ustalari tomonidan o'yilgan qadimiy pichog'i Angmar Jodugar-Qirolining tizzasiga sanchilib, uning sehrli immunitetini parchaladi va Éowynga dushmanga hal qiluvchi zarba berish imkonini yaratdi. Urushdan so'ng Merry Buckland Boshlig'i (Master of Buckland) bo'ldi va 'Shire o'tlari va qo'shiqlari' haqida ilmiy risolalar yozdi; uning qabri esa Gondorda Aragorn yoniga qo'yildi."
      }
    ]
  },
  'peregrin-took.json': {
    extra_sections: [
      {
        title: "Tooklar nasli, Palantír sinovi va Gondor Qal'asi Posboni",
        content: "Peregrin Took (Pippin) Buyuk Took sulolasining kenja vakili bo'lib, uning xarakterida xobbitlarga xos beg'uborlik va yashirin jasorat uyg'unlashgan edi. Orthanc palantíriga qiziquvchanlik bilan qarab Sauronning shaxsan o'zi bilan to'qnashganida ham, u hech qanday sirlarni fosh qilmadi va bu orqali Gandalfga qimmatli vaqt yutib berdi. Minas Tirithga kelgach, u Boromir jasorati evaziga Denethor II ga sadoqat qasamyodini ichdi va Qal'a Posboni (Guard of the Citadel) qora-kumush libosini kiydi."
      },
      {
        title: "Faramirni qutqarish, Morannon jangi va Thainlik davri",
        content: "Denethor Faramirni tiriklayin yoqmoqchi bo'lganida, Pippin o'z hayotini xatarga qo'yib Gandalf va Beregondni yordamga chaqirdi va Faramirni dahshatli o'limdan qutqarib qoldi. Morannon jangida u ulkan tog' trollini o'ldirib, o'zining mislsiz jangovar mahoratini ko'rsatdi. Shire ozod qilingach, Pippin Shire Thaini (Thain of the Shire) bo'ldi va uzoq yillar xalqqa xizmat qildi. U umrining oxirida Merry bilan birga Gondorga keldi va shon-sharaf bilan dafn etildi."
      }
    ]
  }
};

for (const [file, data] of Object.entries(batch2)) {
  const p = path.join(dir, file);
  if (!fs.existsSync(p)) continue;
  const original = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (data.extra_sections) {
    for (const s of data.extra_sections) {
      original.biography_sections.push(s);
    }
  }
  fs.writeFileSync(p, JSON.stringify(original, null, 2), 'utf8');
  console.log(`Updated character batch 2: ${file}`);
}
