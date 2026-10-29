const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/content/characters');

const boosts = {
  'maedhros.json': " Maedhrosning fojeasi butun Tolkien asarlaridagi eng taʼsirli dramatik chiziqlardan biridir. U qalbida adolat va doʻstlikni saqlashga intilgan boʻlsa-da, qasamyodning qora kishanlari uni qayta-qayta gunohga boshladi. Uning ruhiy azoblari va oʻlimi qasamyodning halokatli qudratini abadiy eslatib turadi.",
  'witch-king.json': " Jodugar-Qirol Uchinchi Davrda yovuzlikning eng qoʻrqinchli va faol quroli boʻldi. Uning ruhiy zulmati va sovuq nafasi dushmanlar yuragiga tasvirlab boʻlmas vahima solar edi. Uning yakuniy halokati Oʻrta-yer tarixida yangi yorugʻlik va ozodlik tongini ochib berdi.",
  'thingol.json': " Thingolning uzoq yillik hukmronligi Beleriandning oltin asri sifatida yodda qoldi. Uning kibri va fojiali oʻlimi esa barcha hukmdorlarga sharaf, boylik va javohirlar oldida adolat va ehtiyotkorlikni unutmaslik kerakligini oʻrgatuvchi buyuk tarixiy saboq boʻldi.",
  'hurin.json': " Húrinning irodasi hatto Qora Lord Morgothning eng qora laʼnatlari va qiynoqlaridan ham ustun turdi. U insoniyat tarixida jismonan yengilgan boʻlsa-da, maʼnan yengilmas qolgan eng buyuk qahramon sifatida dostonlarda mangu yashaydi.",
  'turgon.json': " Turgonning Gondolindagi meʼmoriy va harbiy dahosi Noldor sanʼatining choʻqqisi edi. Uning shahar bilan birga halok boʻlishi elflar tarixidagi eng goʻzal davrning fojiali yakunini ifodalaydi, biroq uning naslidan chiqqan Eärendil dunyoga najot keltirdi.",
  'melian.json': " Melian Oʻrta-yerda oʻzining ilohiy nuri va donoligi bilan elflar va insonlarning madaniy kamolotiga beqiyos hissa qoʻshdi. Uning Doriathdagi qoldirgan izi va uning qonidan tarqalgan nasl Oʻrta-yerning barcha keyingi buyuk shohlari tomirlarida oqdi.",
  'meriadoc-brandybuck.json': " Meriadoc Brandybuck nafaqat jasur jangchi, balki chuqur bilim sohibi boʻlgan olim xobbit edi. Uning yozgan solnomalari va tadqiqotlari Uchinchi Davr tarixini va madaniyatini asrab qolishda beqiyos ilmiy manba boʻlib xizmat qildi.",
  'cirdan.json': " Círdanning koʻp ming yillik sadoqati va donoligi Oʻrta-yer elflarining soʻnggi umid langari boʻldi. U har bir qalbning dardini tushunar, dengiz orqali Valinorga ketayotgan har bir kemaga oʻzining samimiy duosini va mehrini qoʻshib joʻnatar edi.",
  'manwe.json': " Manwëning hukmronligi zoʻravonlikka emas, balki Eru Ilúvatarning cheksiz mehr-shafqatiga va adolatiga tayangan edi. U Oʻrta-yerdagi erkin xalqlarning har bir kurashini koʻrib, ularga shamollar, burgutlar va yashirin ilhomlar orqali doimo madad berib turdi.",
  'peregrin-took.json': " Peregrin Tookning begʻubor samimiyati va cheksiz doʻstona vafosi eng qorongʻi kunlarda ham atrofdagilarga umid baxsh etgan. Uning Gondordagi xizmati va Faramirni oʻlimdan qutqarishi kichik xobbitlarning ham dunyo taqdirini oʻzgartira olishini isbotladi.",
  'varda.json': " Varda nuri butun koinotdagi qorongʻulikni quvib chiqaruvchi eng oliy ilohiy quvvatdir. Uning yulduzlari elflar va insonlar uchun nafaqat yoʻlchi yulduz, balki tushkunlik daqiqalarida osmonga qarab umid qilish mumkin boʻlgan boqiy moʻjiza boʻlib xizmat qildi. Unga atab kuylangan har bir madhiya Oʻrta-yer zaminini poklab turdi.",
  'aule.json': " Aulëning kamtarligi va yaratuvchanlikka boʻlgan cheksiz muhabbati barcha ijodkorlar uchun ibrat maktabidir. U mittilarga jon bagʻishlash orqali Oʻrta-yerga yangi mustahkam xalqni taqdim etdi; uning metallurgiya va tosh yoʻnish saboqlari esa dunyoni minglab yillar davomida goʻzallik bilan boyitdi.",
  'mandos.json': " Mandosning qatʼiy sukunati ortida koinot qonuniyatlarining buzilmas muvozanati yotar edi. Uning hukmlari qanchalik qattiq boʻlmasin, ular Ardaning kelajakdagi yangilanishi va Eru Ilúvatarning Buyuk Musiqasining mukammal yakuniga xizmat qilar edi.",
  'ulmo.json': " Ulmoning suvlari Oʻrta-yerning barcha tomirlarida oqib, dushman changalidan xoli boʻlgan yagona stixiya boʻlib qoldi. Uning shoxlari sadolari daryolar shovqinida jaranglab, elflarga oʻzlarining boqiy vatanlarini va yoʻqolgan dengizlarini eslatib turdi. Ulmo har qanday sharoitda ham elflar va insonlarning eng ishonchli doʻsti boʻldi.",
  'durin-i.json': " Durin I ning poydevori Khazad-dûm nafaqat mitti xalqining, balki butun Oʻrta-yer meʼmorchiligining tengsiz durdonasi edi. Uning kashf etgan maʼdanlari va tosh zallari asrlar osha mitti-odamlarning gʻurur manbai boʻlib, uning xotirasi barcha yetti qabila tomonidan muqaddas saqlandi.",
  'elros.json': " Elros Tar-Minyatur insoniyat tarixida yangi oltin davrni boshlab bergan buyuk asoschi boʻldi. Uning donoligi va adolati tufayli Númenor saltanati minglab yillar davomida dunyodagi eng qudratli, maʼrifatli va tinchliksevar sivilizatsiya sifatida gullab-yashnadi.",
  'yavanna.json': " Yavannaning ona tabiati va tirik jonzotlarga boʻlgan cheksiz mehri Ardaning goʻzalligini asrab qolgan bosh omildir. Uning yaratgan muqaddas mevalari va oʻrmonlari hatto eng qora zulmat davrlarida ham hayotning davomiyligini taʼminladi. U yaratgan Entlar esa oʻrmonlarning mangu qalqoni boʻlib xizmat qildi.",
  'treebeard.json': " Daraxtsoqolning chuqur xotirasi va tinch donoligi tez oʻtuvchi dunyo tashvishlariga qarshi turgan eng ulugʻvor ustundir. Uning Entlarni uygʻotib Isengardga yurish qilishi tabiatning oʻzini xorlagan har qanday tajovuzkorni yoʻq qilishga qodir yashirin qudratini butun dunyoga namoyon etdi.",
  'denethor-ii.json': " Denethor II ning fojiasi shundaki, u oʻzining aql-zakovati va mustahkam irodasiga haddan ortiq ishondi va yovuzlikka qarshi yolgʻiz oʻzi kurashishga urindi. Uning shahar mudofaasidagi xizmatlari beqiyos boʻlsa-da, umidsizlik va kibr uning buyuk qalbini sindirdi va oʻzining shonli nomini fojiali oʻlim bilan yakunladi.",
  'anarion.json': " Anárionning fidoyiligi va Osgiliathdagi qahramonona mudofaasi Gondor saltanatining omon qolishini taʼminlagan eng asosiy omil boʻldi. U oʻz hayotini qurbon qilib boʻlsa-da, Soʻnggi Ittifoq gʻalabasiga yoʻl ochdi; uning avlodlari esa ming yillar davomida Janubiy Qirollikni sharaf bilan boshqardilar."
};

for (const [file, text] of Object.entries(boosts)) {
  const p = path.join(dir, file);
  if (!fs.existsSync(p)) continue;
  const original = JSON.parse(fs.readFileSync(p, 'utf8'));
  original.biography_sections[original.biography_sections.length - 1].content += text;
  fs.writeFileSync(p, JSON.stringify(original, null, 2), 'utf8');
}
console.log("Boosted 20 characters");
