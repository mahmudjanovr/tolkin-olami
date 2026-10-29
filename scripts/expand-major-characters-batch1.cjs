const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/content/characters');

const batch1 = {
  'celebrimbor.json': {
    extra_section: {
      title: "Merosi, pushaymonligi va Fëanor xonadonining ma'naviy najoti",
      content: "Celebrimbor Fëanor xonadonining so'nggi va eng olijanob vakili bo'lib, o'z ajdodlarining qonli la'natini fidokorona o'lim bilan yuvgan yagona shaxsdir. Uning yaratgan Uch Elf Uzugi Uchinchi Davrda Rivendell va Lothlórien kabi jannatmakon maskanlarni asrab qolishda, elflar madaniyatini saqlashda va nihoyat Sauron ustidan qozonilgan g'alabada hal qiluvchi rol o'ynadi. Gandalfning Olov Uzugi Narya orqali qalblarga umid va jasorat ulashishi aynan Celebrimborning pokiza niyatining mevasidir. U xatoga yo'l qo'ygan bo'lsa-da, o'z azoblari orqali poklanib, O'rta-yer tarixida afsonaviy daho sifatida muhrlandi."
    }
  },
  'manwe.json': {
    extra_sections: [
      {
        title: "Taniquetil cho'qqisi, Ilúvatar irodasi va yovuzlikni tushunmaslik siri",
        content: "Manwë Súlimo Ardaning Oliy Shohi va Valarning sardori bo'lib, Ilúvatarning fikrini eng yaxshi tushunuvchi ruhiy mavjudotdir. U O'rta-yerning eng baland cho'qqisi bo'lgan Oykillosse (Taniquetil) tog'ida rafiqasi Varda Elentári bilan birga yashaydi. U yerdan turib Manwë butun Arda havolari, shamollari va qushlari orqali yuz berayotgan barcha hodisalarni ko'rib va his qilib turadi. Biroq Manwë mutlaqo beg'ubor va yovuzlikdan xoli bo'lgani sababli, o'z ukasi Melkorning qalbidagi qora hasad, riyo va nafratni to'liq tasavvur qila olmadi. Shu sababli Melkorning uch davrlik qamoqdan so'ng soxta tavbasiga ishonib, uni ozodlikka chiqardi, bu esa Valinor fojiasini boshlab berdi."
      },
      {
        title: "Buyuk Burgutlar, Eärendil iltijosi va O'rta-yerga yordam",
        content: "Manwë O'rta-yerni hech qachon unutmagan. Uning xabarchilari bo'lgan Buyuk Burgutlar (Thorondor va Gwaihir boshchiligida) elflar va insonlarni doimo eng og'ir damlarda qutqarib kelganlar. Beleriand halokat yoqasida qolganida Eärendilning Taniquetilga kelib qilgan iltijosi Manwë qalbini yumshatdi; u Valinor lashkarlarini G'azab Urushiga safarbar qildi va Morgothni Bo'shliqqa uloqtirdi. Uchinchi Davrda esa Manwë Sauron zulmiga qarshi kurashish uchun Besh Sehrgarni (Istari), xususan Olórinni (Gandalf) O'rta-yerga elchi qilib yubordi."
      }
    ]
  },
  'varda.json': {
    extra_sections: [
      {
        title: "Yulduzlar Malakasi, Nurlar yaratuvchisi va Elflar muhabbati",
        content: "Varda Elentári (Sindarincha: Elbereth Gilthoniel) Valier orasida eng go'zali va ulug'voridir. U yorug'lik, nur va yulduzlar hukmdori bo'lib, Ilúvatar nuri uning yuzida so'nmas bo'lib porlaydi. Elflar Cuiviénen ko'li bo'yida uyg'onganlarida, ularning ko'zlari birinchi bo'lib Varda tomonidan yaratilgan yorqin yulduzlarni (Valacirca va Menelmacar) ko'rdi; shu sababli barcha elflar Vardani barcha Valardan ko'proq sevadilar va unga sig'inadilar. O'rta-yerning qorong'i o'rmonlarida va xavfli yo'llarida uning nomini aytib kuylangan madhiyalar ('A Elbereth Gilthoniel!') qora maxluqlar va hatto Nazgûllarni ham qo'rquvga solgan."
      },
      {
        title: "Melkorning Vardan nafratlanishi va kosmik muvozanat",
        content: "Ea yaratilishidan avval Melkor Vardani o'ziga xotin qilishni va uning nuriga ega bo'lishni orzu qilgan edi, ammo Varda uni rad etib, Manwë yonida qoldi. Shu sababli Melkor butun borliqda eng ko'p Vardan nafratlangan va uning nurlaridan qo'rqqan. Varda Ikki Daraxt – Telperion va Laurelin shudringini to'plab, ulkan yulduzlar guldastasini yaratdi. Uchinchi Davrda Frodo va Samwisega berilgan Galadriel Flakoni ichidagi nur ham aynan Vardaning Eärendil Yulduziga singdirgan muqaddas nuri edi."
      }
    ]
  },
  'ulmo.json': {
    extra_sections: [
      {
        title: "Suvlar Hukmdori, sadoqat va O'rta-yerni tark etmaslik",
        content: "Ulmo Ardaning barcha okeanlari, dengizlari, daryolari va yerosti buloqlari hukmdoridir. U Valinorda saroy qurmagan, balki Buyuk Dengiz tubidagi Ulmonan saroyida yashagan va kamdan-kam hollarda Valar kengashlariga kelgan. Noldor elflari quvg'in qilingan va Mandos la'natiga uchragan og'ir davrlarda ham Ulmo ulardan yuz o'girmagan yagona Vala bo'ldi. U daryolar orqali elflar va insonlar qalbiga umid bag'ishlab turdi, ularni musiqa va sirlar bilan qurollantirdi. Uning ulkan shoxlari – Ulumúri sadosi eshitilgan joyda dengiz qo'shig'i abadiy uyg'onardi."
      },
      {
        title: "Tuorni tanlash va Gondolinning pinhona himoyasi",
        content: "Ulmo Turgonga Yashirin Shohlik Gondolinni barpo etish g'oyasini bergan va uning atrofidagi suvlarni dushman josuslaridan tozalab turgan edi. Morgothning g'alabasi muqarrar bo'lib qolganida, Ulmo Vinyamar sohillarida inson Tuorga o'zining dahshatli va ulug'vor qiyofasida ko'rindi. U Tuorga o'zining ko'k plashi va dubulg'asini kiydirib, Gondolinga najot xabarchisi qilib yubordi. Aynan Ulmoning sa'y-harakatlari tufayli Tuor va Idril nikohi amalga oshdi va butun O'rta-yer najotkori Eärendil dunyoga keldi."
      }
    ]
  },
  'aule.json': {
    extra_sections: [
      {
        title: "Temirchi Vala, Yer qa'ri va Mittilarning yaratilishi",
        content: "Aulë moddiy dunyo, toshlar, ma'danlar va metallar ustasi bo'lib, uning bilimi Noldor elflariga zargarlik, tosh yo'nish va yozuv yaratish sirlarini ochib bergan. Fëanor aynan Aulë maktabida o'zining tengsiz hunarmandchilik mahoratini egallagan. Elflarning uyg'onishini kutishga sabri chidamagan Aulë yer qa'rida yashirincha o'z ijodi – Yetti Mitti Ota-bobolarini (Fathers of the Dwarves) yaratdi. Eru Ilúvatar uning bu harakatini fosh etganida, Aulë pushaymon bo'lib o'z bolg'asi bilan ularni yo'q qilmoqchi bo'ldi, biroq Ilúvatar uning kamtarligi va beg'ubor niyatini ko'rib, mittilarga haqiqiy jon bag'ishladi va ularni Ardaning asrandi farzandlari sifatida qabul qildi."
      },
      {
        title: "Sauron va Sarumanning xiyonati hamda Aulë sabog'i",
        content: "Fojiali jihati shundaki, O'rta-yer tarixidagi eng buyuk ikki dushman – Sauron (Mairon) va Saruman (Curumo) ikkalasi ham dastlab Aulë xizmatidagi Mayar bo'lgan edilar. Ularning buyumlarni o'zgartirish, boshqarish va tartibga solishga bo'lgan haddan tashqari qiziqishi oxir-oqibat kibrga va tushkunlikka aylandi. Biroq Aulë hech qachon o'z ijodiga egalik qilishga intilmadi; u narsalarni faqat yaratish go'zalligi uchun yaratdi va ularni boshqalarga hadya qildi. Bu sifat uni Melkor va Sauron kabi zolimlardan tubdan ajratib turuvchi eng buyuk ilohiy fazilat edi."
      }
    ]
  },
  'yavanna.json': {
    extra_sections: [
      {
        title: "Meva Beruvchi, Ikki Daraxt va O'rta-yer florasi",
        content: "Yavanna Kementári (Yer Malakasi) o'simliklar, daraxtlar, gullar va yer yuzidagi barcha tirik tabiat homiysidir. U Aulëning rafiqasi bo'lib, eri tosh va ma'danlarni sevgandek, Yavanna yashil hayotni va o'sayotgan narsalarni e'zozlagan. Uning eng buyuk ijodi Ezellohar tepaligida o'zining qo'shig'i bilan o'stirgan Valinorning Ikki Daraxti – oltin Laurelin va kumush Telperion bo'ldi. Ushbu daraxtlar nuri butun Boqiy G'arbni muqaddas ziyoga to'ldirdi va keyinchalik Fëanor tomonidan Silmarillarga muhrlandi."
      },
      {
        title: "Entlarning yaratilishi va O'rmon Qo'riqchilari",
        content: "Aulë mittilarni yaratganini bilgach, Yavanna xavotirga tushib, Manwë huzuriga bordi. U mittilar o'z o'choqlari uchun daraxtlarni shafqatsizlarcha kesib tashlashidan qo'rqishini aytdi. Manwë Ilúvatar huzurida ibodat qilgach, Yavannaga buyuk bashorat yetkazildi: Eru o'rmonlarni va daraxtlarni himoya qilish uchun ulkan ruhiy mavjudotlarni – Daraxt Qo'riqchilari bo'lgan Entlarni (Onodrim) yaratishga ruxsat berdi. Uchinchi Davrda ham Yavannaning mehri O'rta-yerda saqlanib qoldi; Galadriel uning ramzi bo'lgan mallorn daraxtlarini Lórienda o'stirdi."
      }
    ]
  },
  'mandos.json': {
    extra_sections: [
      {
        title: "Taqdir Hukmdori, Mandos Zallari va fojiali bashoratlar",
        content: "Mandos (asl ismi Námo) Valar orasida Taqdir va Hukm sohibi bo'lib, Nienna va Irmoning akasidir. U Boqiy G'arbning g'arbiy chekkasida joylashgan bahaybat Mandos Zallarida (Halls of Mandos) yashaydi. Bu yerga barcha halok bo'lgan elflarning ruhlari (fëar) to'planadi va qayta gavdalanish vaqtini kutadi; insonlarning ruhlari esa bu yerda qisqa muddat to'xtab, dunyo chegaralaridan tashqariga ketadilar. Mandos hech narsani unutmaydi va kelajakdagi barcha hodisalarni biladi, biroq u faqat Manwë amri bilangina gapiradi. Uning hukmlari qat'iy, sovuq, ammo mutlaqo adolatli bo'lgan."
      },
      {
        title: "Noldor La'nati va Lúthien ko'zyoshlari oldidagi yumshash",
        content: "Alqualondë qirg'inidan so'ng Mandos qoya ustida paydo bo'lib, mashhur 'Shimol Bashorati'ni (The Doom of Mandos) e'lon qildi va Fëanor sulolasini qora qismat bilan muhrladi. Biroq Mandosning toshdek qattiq qalbini ham eritgan yagona voqea yuz berdi: Beren halok bo'lgach, Lúthien o'z ruhi bilan Mandos Zallariga kelib, o'zining cheksiz sevgisi va fojiasi haqida qo'shiq kuyladi. Mandos tarixda birinchi va so'nggi marta rahmdillik ko'rsatdi; u Manwë va Ilúvatar marhamati bilan Beren va Lúthienga O'rta-yerda foniylar sifatida ikkinchi hayot baxsh etdi."
      }
    ]
  },
  'melian.json': {
    extra_sections: [
      {
        title: "Doriath Malakasi, Vala Lorien bog'lari va ilohiy qo'shiq",
        content: "Melian Mayar irqiga mansub bo'lib, dastlab Vala Irmoning Lórien bog'larida yashagan va bulbullarga qo'shiq aytishni o'rgatgan. Birlamchi Davrda O'rta-yerga kelib, Nan Elmoth o'rmonida Elwë Singollo (Thingol) bilan uchrashdi. Ular bir-birlarining ko'zlariga qarab asrlar davomida harakatsiz turdilar; bu sevgi ilohiy ruh va elflar podshohi o'rtasidagi yagona nikohni vujudga keltirdi. Melian Doriath shohligini barpo etishda Thingolga hamroh bo'ldi va unga cheksiz donolik hamda sehr baxsh etdi."
      },
      {
        title: "Melian Kamari va Thingol o'limidan so'ng ketishi",
        content: "Morgoth Beleriandga qaytgach, Melian o'zining ilohiy qudrati bilan butun Doriath chegaralari bo'ylab 'Melian Kamari' (Girdle of Melian) deb ataluvchi ko'rinmas sehrli to'siq o'rnatdi. Bu to'siqdan Melianning irodasisiz hech bir maxluq yoki dushman o'ta olmas edi. Biroq Thingol Silmaril kulfati tufayli gnomlar tomonidan o'ldirilgach, Melian chuqur qayg'uga botdi. Uning sehrli kamari yo'qoldi; Melian o'z qizi Lúthien va nabirasi Dior taqdirini vasiyat qilib, O'rta-yerni abadiy tark etdi va Valinorga qaytib, o'z dardi bilan yolg'iz qoldi."
      }
    ]
  },
  'thingol.json': {
    extra_sections: [
      {
        title: "Sindar Oliy Shohi, Menegroth shon-shavkati va kibr fojiasi",
        content: "Elu Thingol (Elwë Singollo) butun Beleriand Sindar elflarining Oliy Shohi bo'lib, elflarning eng ulug'vor va bo'ydor vakili sanalgan. U Cuiviénendan Valinorga elchi sifatida borgan uch elfdan biri edi, ammo Melian muhabbati sababli O'rta-yerda qoldi. Thingol Menegroth zallaridan turib ko'p asrlar davomida adolatli hukmronlik qildi. Biroq uning xarakterida Noldorga nisbatan shubha va inson zotini past ko'rish kabi kibr unsurlari mavjud edi. Berenga berilgan imkonsiz Silmaril sharti aynan shu kibrning mevasidir."
      },
      {
        title: "Nauglamír, Nogrod gnomlari xiyonati va qirolning qulashi",
        content: "Thingol Beren keltirgan muqaddas Silmarilni Húrin Nargothrond xarobalaridan olib kelgan afsonaviy Nauglamír (Mittilar Marjoni) bilan birlashtirishni orzu qildi. Bu nozik zargarlik ishini bajarish uchun Menegrothga chaqirilgan Nogrod mitti ustalari Silmaril go'zalligiga oshiq bo'lib, uni o'zlariniki deb da'vo qildilar. Thingol ularni haqoratlab haydamoqchi bo'lganida, gnomlar unga tashlanib, shohona zallarda shafqatsizlarcha o'ldirdilar. Thingolning o'limi Doriathning qulashiga va elflar bilan gnomlar o'rtasida asrlar davom etgan qonli adovatga sabab bo'ldi."
      }
    ]
  },
  'finrod.json': {
    extra_sections: [
      {
        title: "Insonlar Do'sti, Nargothrond asoschisi va Athrabeth donoligi",
        content: "Finrod Felagund (Finarfinning to'ng'ich o'g'li) Noldor shahzodalari orasida eng dono, olijanob va adolatparvar edi. U Beleriandga birinchi bo'lib qadam qo'ygan Edain insonlarini (Bëor xonadonini) uchratdi va ularning qadimiy tili hamda qalbini tushunib, ularga mehr qo'ydi. Shu sababli u 'Edennil' (Insonlar Do'sti) nomini oldi. Uning Bëor qizi Andreth bilan o'tkazgan chuqur teologik suhbati ('Athrabeth Finrod ah Andreth') o'lim, boqiylik va insoniyat qismati haqidagi Tolkien merosining eng buyuk durdonasidir."
      },
      {
        title: "Barahir qasamyodi va Tol-in-Gaurhothdagi buyuk qurbonlik",
        content: "Dagor Bragollach jangida Barahir Finrodni dushman qurshovidan qutqarib qolganida, Finrod unga o'zining mashhur ilonli uzugini (Barahir Uzugi) sovg'a qildi va uning nasliga abadiy yordam berishga qasamyod qildi. Beren Silmaril safari bilan Nargothrondga kelganida, Finrod o'z taxti va xalqining qarshiligiga qaramay, qasamyodiga sodiq qoldi. Sauron zindonida Berenni saqlab qolish uchun yalang qo'llari bilan bahaybat bo'rini o'ldirib, o'zi halok bo'ldi. Uning ruhi Mandos zallaridan tezda ozod qilinib, Valinorda otasi Finarfin yonida boqiy yashash saodatiga erishdi."
      }
    ]
  },
  'turgon.json': {
    extra_sections: [
      {
        title: "Gondolin Donishmandi, Noldor Oliy Shohligi va Yetti Darvoza",
        content: "Turgon (Fingolfinning ikkinchi o'g'li) Noldorning eng ehtiyotkor va chuqur fikrlovchi podshohi edi. Fingon Nirnaeth Arnoediadda halok bo'lgach, Noldor Oliy Shohligi uning zimmasiga o'tdi. Turgon Gondolinni besh yuz yil davomida dunyodan butunlay yashirib keldi. Uning qurol-aslahalari va lashkari Birinchi Davrning eng tartibli va intizomli armiyasi edi. Biroq shahar xavfsizligiga haddan ziyod ishonish va tashqi dunyo bilan aloqalarni uzish Turgonning asosiy fojiasiga aylandi."
      },
      {
        title: "Ulmo ogohlantirishini rad etish va shohona halokat",
        content: "Tuor Ulmo xabari bilan Gondolinga kelib, shaharni tark etish va dengizga chekinish kerakligini aytganida, Turgon o'zining oq minorasi va go'zal zallaridan ajralishni istamadi. Bu qat'iyat oxir-oqibat Maeglin xiyonati orqali shaharning olov ichida qolishiga olib keldi. Dushman bostirib kirganda, Turgon o'z jangchilariga qochishni buyurib, o'zi shohona minorasida qoldi va minoraning qulashi bilan birga shonli halokat topdi. Uning jasorati va madaniy merosi Tuor va Idril avlodlarida yashashda davom etdi."
      }
    ]
  },
  'cirdan.json': {
    extra_sections: [
      {
        title: "Kemasoz Círdan, Soqolli Elf va Kulrang Bandargohlar",
        content: "Círdan (Nowë) O'rta-yerda yashagan barcha elflar orasida eng qadimiylaridan biri bo'lib, Cuiviénen ko'li bo'yida uyg'ongan ilk avlodga mansub edi. U O'rta-yerdagi soqoli bo'lgan yagona elf sifatida tasvirlanadi (bu elflarning juda keksa yoshiga xos kamyob xususiyat edi). Birinchi Davrda Falas portlarini boshqargan bo'lsa, Ikkinchi va Uchinchi Davrlarda Mithlond (Kulrang Bandargohlar) hukmdori bo'ldi. U elflarning Boqiy G'arbgacha suzib borishiga qodir oq kemalarini yasagan yagona usta edi."
      },
      {
        title: "Olov Uzugi Naryaning topshirilishi va Boqiy G'arbga so'nggi kema",
        content: "Celebrimbor O'rta-yerdan ketayotganida Uch Uzugining eng qudratlilaridan biri bo'lgan Naryani (Olov Uzugi) Círdanga ishonib topshirgan edi. Biroq Ikkinchi Davrning 1000-yillari atrofida Boqiy G'arbdan Istari (Sehrgarlar) yetib kelganida, Círdan Gandalfning buyuk qalbini va kelajakdagi vazifasini his qilib, o'z uzugini unga in'om etdi. Círdan O'rta-yerdagi barcha elflar ketmaguncha sohillarda qolishga qasamyod qilgan edi; u Uchinchi Davr oxirida so'nggi kema bilan Valinorga yo'l oldi."
      }
    ]
  }
};

for (const [file, data] of Object.entries(batch1)) {
  const p = path.join(dir, file);
  if (!fs.existsSync(p)) continue;
  const original = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (data.extra_section) {
    original.biography_sections.push(data.extra_section);
  }
  if (data.extra_sections) {
    for (const s of data.extra_sections) {
      original.biography_sections.push(s);
    }
  }
  fs.writeFileSync(p, JSON.stringify(original, null, 2), 'utf8');
  console.log(`Updated character batch 1: ${file}`);
}
