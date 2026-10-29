const fs = require('fs');
const path = require('path');

const charDir = path.resolve(process.cwd(), 'src/content/characters');

function updateCharacter(id, updater) {
  const file = path.join(charDir, `${id}.json`);
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const updated = updater(data);
  fs.writeFileSync(file, JSON.stringify(updated, null, 2), 'utf8');
  console.log(`Updated character: ${id}`);
}

// 8. LEGOLAS
updateCharacter('legolas', (d) => {
  d.image = {
    src: '/images/characters/legolas.webp',
    src_thumb: '/images/characters/legolas-thumb.webp',
    alt: 'Legolas Yashilbarg oʻrmon kiyimida, yelkasida Galadhrim kamoni va qoʻlida oq pichoqlari bilan',
    caption: 'Legolas — Mirkwood qiroli Thranduilning oʻgʻli, Sindar elf shahzodasi va Uzuk Birodarligi aʼzosi'
  };
  d.biography_sections = [
    {
      title: "Mirkwood shahzodasi va elflar merosi",
      content: "Legolas Yashilbarg (Greenleaf) Buyuk Yashil Oʻrmon (keyinchalik Mirkwood) Qiroli Thranduilning oʻgʻli va Oropherning nevarasidir. U oʻrmon elflari (Silvan) ustidan hukmronlik qiluvchi olijanob Sindar sulolasiga mansub. Uning yoshi Tolkien asarlarida aniq koʻrsatilmagan boʻlsa-da, u koʻp asrlar davomida oʻrmon sirlari, kamondan otish va yengil qadamlar bilan yugurish mahoratini mukammal egallagan.\n\n3018-yil yozida Mirkwood zindonida saqlanayotgan Gollum oʻrklar hujumi natijasida qochib ketgach, Qirol Thranduil Legolasni bu noxush xabarni Elrondga yetkazish uchun elchi sifatida Rivendellga joʻnatdi."
    },
    {
      title: "Uzuk Birodarligi va Qorli Qoradras dovoni",
      content: "Elrond Kengashida ishtirok etgan Legolas Elflar xalqi vakili sifatida toʻqqiz aʼzodan iborat Uzuk Birodarligi safiga kiritildi. U gnom Gimli bilan dastlab sovuq va adovatli munosabatda edi, chunki oʻtmishda Thranduil Gimlining otasi Glóinni asir qilgan edi.\n\nCaradhras qor boʻronida boshqa barcha birodarlar chuqur qorga botib harakatlanolmay qolganda, Legolas oʻzining yengil elflar qadami bilan qor ustida iz qoldirmasdan yurib, dovon holatini razvedka qilib qaytdi. Moria konlarida qorongʻulikda harakatlanish va oʻrklarga qarshi kechgan shiddatli janglarda uning oʻtkir nigohi va tezkor oʻqlari Birodarlikni koʻp bor halokatdan asrab qoldi."
    },
    {
      title: "Gimli bilan tarixiy doʻstlik va Lothlórien",
      content: "Lothlórienga yetib kelganlarida, Gimli xonim Galadrielning tengsiz husni va olijanobligiga oshiq boʻldi. Xonimning marhamati va shirin soʻzlari Gimli bilan Legolas oʻrtasidagi koʻp asrlik adovat devorini parchalab tashladi.\n\nUlar Lóriendan chiqishlarida ajralmas doʻstlarga aylandilar. Elflar va Mittilar tarixida hech qachon bunday samimiy, mehrli va fidoiy doʻstlik kuzatilmagan edi. Galadriel Legolasga Galadhrim elflari ustozi tomonidan yasalgan ajoyib uzun kamon va sadoq tuhfa qildi."
    },
    {
      title: "Uch Ovchilar, Hornburg va Pelennor janglari",
      content: "Amon Henda Boromir halok boʻlib, Merry va Pippin oʻgʻirlab ketilgach, Legolas Aragorn va Gimli bilan birga 'Uch Ovchilar' (The Three Hunters) ittifoqini tuzdi. Ular toʻrt kecha-kunduz tinimsiz Rohan tekisliklari boʻylab Uruk-hailarni taʼqib qildilar.\n\nHornburg (Helm's Deep) qamalida Legolas va Gimli oʻrtasida kim koʻp dushmanni yer tishlatishi boʻyicha mashhur doʻstona musobaqa boʻlib oʻtdi (Legolas 41, Gimli 42 ta oʻrkni magʻlub etdi). Oʻliklar Yoʻli (Paths of the Dead) orqali oʻtib, Pelargirda qaroqchilar flotini egallashda va Pelennor dalalarida erkin xalqlarning gʻalaba qozonishida Legolas misli koʻrilmagan jasorat koʻrsatdi."
    },
    {
      title: "Dengiz sogʻinchi, Ithilien va Boqiy Gʻarb",
      content: "Pelargir bandargohida oq baliqchilarning (chayka) faryodini eshitgan Legolasning qalbida Galadriel bashorat qilgan 'Dengiz sogʻinchi' (Sea-longing) uygʻondi — bu Sindar elflarining Oʻrta-yerni tark etib Aman dengiziga talpinuvchi boqiy chaqirigʻi edi.\n\nUrushdan soʻng u Mirkwooddan elflarni ergashtirib kelib, goʻzal Ithilien oʻlkasida gullab-yashnagan elf posyolkasiga asos soldi. Toʻrtinchi davrning 120-yilida Qirol Elessar (Aragorn) vafot etgach, Legolas Anduin boʻyida kulrang kema yasadi va oʻzining qadrdon doʻsti Gimli bilan birga Boqiy Gʻarbga — Valinorga suzib ketdi. Gimlining Valinorga kirishiga Valar tomonidan ruxsat berilishi Legolasning shaxsiy iltimosi va Galadriel shafoati bilan amalga oshdi."
    }
  ];
  return d;
});

// 9. GIMLI
updateCharacter('gimli', (d) => {
  d.image = {
    src: '/images/characters/gimli.webp',
    src_thumb: '/images/characters/gimli-thumb.webp',
    alt: 'Gimli Glóin oʻgʻli metall dubulgʻada va zanjirli sovutda, qoʻlida jangovar bolta bilan Aglarond gʻorida',
    caption: 'Gimli — Glóin oʻgʻli, Durin xonadoni jangchisi, Aglarondning Yarqiroq Gʻorlari Hukmdori'
  };
  d.biography_sections = [
    {
      title: "Erebor shahzodasi va Rivendell elchisi",
      content: "Gimli Uchinchi davrning 2879-yilida Moviy Togʻlarda (Ered Luin) Glóin oilasida dunyoga kelgan. U Qadimgi Durin xonadonining toʻgʻridan-toʻgʻri vakili edi. 2941-yilda uning otasi Thorin bilan birga Erebor safari ishtirokchisi boʻlganida, Gimli juda yosh deb hisoblanib safarga olinmagan edi.\n\n3018-yilda Mordor elchisi Erebordagi Qirol Dáin II Ironfoot huzuriga kelib, Bilbo va uning uzugi haqida maʼlumot evaziga qadimiy mitti uzuklarini taklif qilganida, Dáin Sauron taklifini rad etdi va bu xavfdan ogohlantirish uchun Glóin va Gimli Rivendellga joʻnatildi."
    },
    {
      title: "Uzuk Birodarligi va Moria fojiasi",
      content: "Elrond Kengashida Mittilar xalqi nomidan vakil boʻlib soʻzlagan Gimli, Uzuk Birodarligining yagona mitti aʼzosi boʻldi. U oʻz ajdodlarining qadimiy poytaxti — Khazad-dûmni (Moria) qayta koʻrish va u yerga borgan Balin ekspeditsiyasi taqdirini bilish orzusida edi.\n\nBiroq Mazarbul zalida Balinning qabrini va mittilarning qonli solnomasini topganida, Gimlining qalbi cheksiz qaygʻuga botdi. Oʻrklarning toʻsatdan qilgan hujumida u ajdodlari qabri ustida sherdek jang qilib, doʻstlarini himoya qildi."
    },
    {
      title: "Lothlórien va Galadrielning uch tasi",
      content: "Lothlórienga kirishda elflar Gimlining koʻzini bogʻlashni talab qilganida janjal kelib chiqdi, biroq Aragorn barcha aʼzolarning koʻzini bogʻlash bilan sulh oʻrnatdi. Xonim Galadriel huzuriga kelganlarida, xonim Gimliga mehr va hurmat bilan murojaat qildi.\n\nGaladriel xayrlashuv chogʻida Gimliga nima sovgʻa istashini soʻraganida, Gimli hech qanday oltin yoki qimmatbaho tosh emas, balki xonimning 'oltin va kumush sochlaridan bittagina tola' berishini oʻtinib soʻradi — uni qabriga qadar billur qutida asrashini aytdi. Galadriel uning pok va yuksak qalbini koʻrib, unga bir emas, uchta soch tolasini tuhfa qildi (qadimda Fëanor uch marta soʻrab ololmagan inʼom!). Bu voqea Gimliga 'Elf-doʻsti' (Elf-friend) faxriy nomini berdi."
    },
    {
      title: "Aglarond kashfiyoti va Pelennor jangi",
      content: "Hornburg qamalida Gimli Helm's Deep orqasidagi Aglarond (Yarqiroq Gʻorlar)ga chekindi. U gʻorlarning billur ustunlari, rang-barang marmar toshlari va tovlanuvchi suv havzalarini koʻrib hayratdan lol qoldi. U Legolasga gʻorlarni soʻzlab berib, 'urush tugagach sen menga Fangornni koʻrsatasan, men esa senga Aglarondni koʻrsataman' deb ahdlashdi.\n\nPelennor dalalarida va Qora Darvoza jangida Gimlining ogʻir boltasi Sauron qoʻshinlariga qaqshatqich zarbalar berdi. U Pelennor jangi soʻngida oʻliklar orasidan ogʻir yaralangan Pippinni topib, uning hayotini saqlab qoldi."
    },
    {
      title: "Yarqiroq Gʻorlar Hukmdori va Boqiy Gʻarb moʻjizasi",
      content: "Halqa Urushidan soʻng Gimli Erebordan koʻplab mittilarni boshlab kelib, Aglarondda yangi mustaqil mitti qirolligiga asos soldi va uning Birinchi Hukmdori boʻldi. Uning ustalari Minas Tirithning yangi poʻlat va mithril darvozalarini yasadilar.\n\nToʻrtinchi davrning 120-yilida, qadrdon doʻsti Legolas Boqiy Gʻarbga suzib ketishga qaror qilganida, Gimli unga hamroh boʻldi. Oʻrta-yer tarixida hech bir mitti Boqiy Gʻarbga (Valinor) oyoq bosmagan edi; Gimli xonim Galadrielning cheksiz mehr-shafqati va shaxsiy taklifi tufayli Aman zaminiga qabul qilingan yagona mitti boʻlib tarixda qoldi."
    }
  ];
  return d;
});

// 10. BOROMIR
updateCharacter('boromir', (d) => {
  d.image = {
    src: '/images/characters/boromir.webp',
    src_thumb: '/images/characters/boromir-thumb.webp',
    alt: 'Boromir Gondor daraxti naqshli qizil choponda, qoʻlida qilich va boʻynida Gondor Shoxi bilan',
    caption: 'Boromir — Gondor Bosh Noibi Denethor II ning toʻngʻich oʻgʻli, Oq Shahar sarkardasi'
  };
  d.biography_sections = [
    {
      title: "Kelib chiqishi va Gondorning suyukli sarkardasi",
      content: "Boromir Uchinchi davrning 2978-yilida Gondor Bosh Noibi (Ruling Steward) Denethor II va Finduilas oilasida dunyoga kelgan. U otasining eng suyukli toʻngʻich oʻgʻli, Minas Tirith xalqining faxri va yosh ukasi Faramirning mehribon himoyachisi edi. U jismoniy jihatdan tengsiz kuchga, yuksak harbiy iqtidorga va magʻrur jasoratga ega boʻlib, siyosat va kitoblardan koʻra jang sanʼatini afzal koʻrgan.\n\n3018-yil iyun oyida Sauron qoʻshinlari Osgiliathga toʻsatdan hujum qilganida, Boromir va Faramir soʻnggi koʻprikni buzib tashlab, qahramonona mudofaa uyushtirdilar va dushmanning Anduin daryosidan oʻtishiga yoʻl qoʻymadilar."
    },
    {
      title: "Bashoratli tush va Rivendell safari",
      content: "Osgiliath jangidan soʻng Faramir va Boromir bir xil sirli bashoratli tush koʻrdilar: 'Singan qilichni izlang... U yerda Isildur Falakati uygʻonadi va Yarim-odam maydonga chiqadi'. Denethor bu tush sirlarini yechish uchun Boromirni 110 kunlik mashaqqatli safarga joʻnatdi.\n\nOʻzining tulporini yoʻqotib, yayov kezgan Boromir nihoyat 3018-yil oktyabrida Rivendellga yetib keldi va mashhur Elrond Kengashida ishtirok etdi."
    },
    {
      title: "Elrond Kengashidagi bahs va Birodarlik burchi",
      content: "Kengashda Boromir Gondor xalqi butun Oʻrta-yerni Sauron zulmatidan qoni bilan himoya qilib turgan qalqon ekanini gʻurur bilan taʼkidladi. U Yagona Uzukni yoʻq qilish oʻrniga, undan Gondor quroli sifatida Sauronning oʻziga qarshi foydalanishni taklif qildi; ammo Elrond va Gandalf Uzukni faqat yovuzlikka xizmat qilishi va egasini muqarrar qulga aylantirishini uqtirdilar.\n\nBoromir Aragornning Isildur vorisi ekanini dastlab shubha bilan qarshi olgan boʻlsa-da, Birodarlik aʼzosi sifatida qasamyod qildi va safar davomida oʻzining mislsiz jismoniy kuchi bilan qor boʻronlarida va Moria janglarida yoʻl ochuvchi posbon boʻldi."
    },
    {
      title: "Amon Hendagi vasvasa va qulash",
      content: "Birodarlik Amon Henga yetib kelganida, Boromirning qalbida Gondorning xarobalari, otasining tushkunligi va oʻz xalqining muqarrar qirgʻini haqidagi dahshatli xavotirlar kuchaydi. Bu zaif nuqtadan foydalangan Yagona Uzuk uning irodasini zaharladi.\n\nOʻrmonda Frodo bilan yolgʻiz qolgan Boromir dastlab xobbitni koʻndirishga urindi, soʻngra gʻazab otiga minib Uzukni kuch bilan tortib olmoqchi boʻldi. Frodo Uzukni taqib koʻzdan gʻoyib boʻlgach, Boromir yiqilib, oʻzining nima qilib qoʻyganini angladi va qattiq koʻzyosh toʻkib pushaymon boʻldi."
    },
    {
      title: "Soʻnggi qahramonlik, poklanish va afsonaviy dafn",
      content: "Uruk-hailar toʻsatdan hujum qilganda, Boromir oʻz gunohini yuvish uchun jangga otildi. U Merry va Pippinni himoya qilib, yuzlab dushmanlar qurshovida yolgʻiz oʻzi jang qildi. U oʻzining Buyuk Shoxini chalib butun oʻrmonni larzaga keltirdi; yigirmadan ortiq Uruk-haini yer tishlatdi, biroq dushmanning koʻplab zaharli oʻqlari uning koʻkragiga qadaldi.\n\nAragorn yetib kelganida, jon berayotgan Boromir: 'Men Frododan Uzukni tortib olmoqchi boʻldim... xato qildim. Shahrimizni qutqaring... Men magʻlub boʻldim', deb iqror boʻldi. Aragorn esa uning qoʻlini ushlab: 'Yoʻq! Sen gʻalaba qozonding. Juda kam odam bunday zafarga erishgan. Bizning shahrimiz qulashiga yoʻl qoʻymayman, ey mening Qirolim!' deb javob berdi. Aragorn, Legolas va Gimli uning jasadini elflar qayigʻiga, qurollari va singan Buyuk Shoxi bilan birga joylab, Rauros sharsharasidan Anduin suvlariga oqizdilar."
    }
  ];
  return d;
});

// 11. ELROND
updateCharacter('elrond', (d) => {
  d.image = {
    src: '/images/characters/elrond.webp',
    src_thumb: '/images/characters/elrond-thumb.webp',
    alt: 'Elrond Yarim-elf Rivendell balkonida, boshida kumush gulchambar-toj va barmogʻida Vilya uzugi bilan',
    caption: 'Elrond — Rivendell Hukmdori, Eärendil oʻgʻli, Vilya (Sapfir / Havo uzugi) posboni'
  };
  d.biography_sections = [
    {
      title: "Eärendil oʻgʻli va Yarim-elflar tanlovi",
      content: "Elrond Peredhel (Yarim-elf) Birinchi Davrning 532-yilida Sirion Bandargohida buyuk dengizchi Eärendil va Elwing oilasida egizak akasi Elros bilan birga dunyoga kelgan. U Lúthien, Beren, Turgon va Idrilning bevosita avlodi boʻlib, uning tomirlarida Elflar, Insonlar va Maiar (Melian) qoni birlashgan edi.\n\nGʻazab Urushidan soʻng Valar yarim-elflarga taqdir tanlash imkonini berdi: Elros insonlar taqdirini tanlab Númenorning birinchi shohi boʻldi, Elrond esa elflar taqdirini tanlab Oʻrta-yerda qoldi va Oliy Qirol Gil-galadning bosh maslahatchisi va sarkardasi boʻlib xizmat qildi."
    },
    {
      title: "Eregion qulashi va Rivendellning (Imladris) asos solinishi",
      content: "Ikkinchi Davrning 1695-yilida Sauron Eregionga bostirib kirganida, Gil-galad Elrond boshchiligida qoʻshin joʻnatdi. Celebrimbor halok boʻlib, Eregion vayron boʻlgach, Elrond omon qolgan Noldor elflarini shimolga olib chiqdi va 1697-yilda Tumanli Togʻlar etagidagi yashirin Imladris (Rivendell / Ayrondell) vodiysiga asos soldi.\n\nImladris koʻp asrlar davomida erkin xalqlarning eng mustahkam boshpanasi, qadimiy donishmandlik, tarix, tabobat va sanʼat markaziga aylandi. Gil-galad oʻlimidan avval Elrondga Uch Elflar Uzugining eng qudratlisi boʻlgan Vilyani (Sapfir / Havo Uzugi) topshirdi."
    },
    {
      title: "Soʻnggi Ittifoq va Isildur fojiasi",
      content: "Ikkinchi davr oxirida Elrond Soʻnggi Ittifoq Urushida Gil-galadning shaxsiy bayroqdori sifatida qatnashdi. Orodruin etagidagi qonli toʻqnashuvda Gil-galad va Elendil halok boʻlganida, Elrond ularning yonida turgan edi.\n\nIsildur Sauron barmogʻidan Uzukni kesib olgach, Elrond va Círdan uni zudlik bilan Orodruin oloviga tashlab, yovuzlikni ildizi bilan yoʻq qilishga undadilar. Biroq Isildur Uzukni otasi va ukasi uchun 'toʻlov' deb atab, uni olib qoldi. Elrond bu fojiaviy xatoning butun Uchinchi davr davomida dahshatli oqibatlar keltirishini oldindan koʻrgan edi."
    },
    {
      title: "Dúnedain homiysi, Oq Kengash va Halqa Urushi",
      content: "Shimoldagi Arnor qirolligi qulagach, Elrond Isildur avlodlariga oʻz uyidan boshpana berdi. U Isildur vorislarini (jumladan yosh Aragornni) oʻz oʻgʻlidek tarbiyaladi, ularga Narsil qilichi siniqlari va Barahir uzugini asrab berdi.\n\n3018-yil oktyabrida Elrond Nazgûl zahridan oʻlim toʻshagida yotgan Frodoning tanasidan Morgul tigʻi parchasini olib tashlab, uni moʻjizaviy tarzda davoladi. Mashhur Elrond Kengashini chaqirib, butun Oʻrta-yer erkin xalqlari vakillarini bir davraga toʻpladi va Uzuk Birodarligiga oq fotiha berdi."
    },
    {
      title: "Boqiy Gʻarbga ketish va abadiy meros",
      content: "Halqa Urushi gʻalaba bilan tugagach, Elrond oʻz qizi Arwenni Qirol Aragorn II Elessarga turmushga berdi. Bu Elrond uchun buyuk fojiaviy ayriliq edi, chunki Arwen insonlar taqdirini tanlab foniy boʻldi va otasi bilan manguga vidolashdi.\n\n3021-yilda, Yagona Uzuk yoʻq qilinishi bilan Vilyaning sehrli qudrati soʻngach, Elrond Imladrisni tark etdi. U Gandalf, Galadriel, Bilbo va Frodo bilan birga Oq Kemada Boqiy Gʻarbga — oʻz ota-onasi Eärendil va Elwing maskaniga suzib ketdi."
    }
  ];
  return d;
});

// 12. ARWEN
updateCharacter('arwen', (d) => {
  d.image = {
    src: '/images/characters/arwen.webp',
    src_thumb: '/images/characters/arwen-thumb.webp',
    alt: 'Arwen Undómiel oy yogʻdusida Rivendell ayvonida, boʻynida Evenstar billur marjoni bilan',
    caption: 'Arwen Undómiel — Rivendell oqshom yulduzi, Elrond qizi va Gondor Oliy Qirolichasi'
  };
  d.biography_sections = [
    {
      title: "Kelib chiqishi va Oqshom Yulduzi husni",
      content: "Arwen Undómiel Uchinchi davrning 241-yilida Rivendell Hukmdori Elrond va Celebrian (Galadrielning qizi) oilasida dunyoga kelgan. U Lúthien Tinúvielning toʻgʻridan-toʻgʻri avlodi boʻlib, xalq orasida 'Lúthienning Oʻrta-yerda qayta tirilgan timsoli' deb eʼzozlangan.\n\nUning goʻzalligi, qora sochlarining jilosi va koʻzlaridagi yulduzlar nuri sababli elflar unga 'Undómiel' — 'Oqshom Yulduzi' (Evenstar) nomini berdilar, chunki u Elflar davrining botish pallasidagi eng soʻnggi va eng yorqin goʻzallik nuri edi."
    },
    {
      title: "Aragorn bilan uchrashuv va Cerin Amrotdagi ahd",
      content: "Arwen uzoq yillar oʻz onasi va buvisi Galadriel huzurida Lothlórienda yashadi. 2951-yilda yigirma yoshli Aragorn Rivendell oʻrmonida Arwenni ilk bor koʻrganida, uni afsonaviy Lúthien deb oʻylab hushidan ketayozdi.\n\n2980-yilda Aragorn Lothlórienga kelganida, Arwen va Aragorn Cerin Amrot tepaligida, tillarang elanor va kumush niphredil gullari orasida bir-birlariga mangulik ahd berdilar. Arwen Elrond qizi sifatida berilgan elflar boqiyligidan voz kechib, insonlar taqdiri — oʻlim inʼomini (The Gift of Men) qabul qilishga va Aragorn bilan foniy hayot kechirishga qaror qildi."
    },
    {
      title: "Halqa Urushidagi maʼnaviy madad va Qirollik Bayrogʻi",
      content: "Uchinchi davrning soʻnggi yillarida Arwen Rivendellda qolib, yashirincha Aragorn uchun Oliy Qirol Bayrogʻini toʻqidi. Qora shoyi matoga mithril, oltin va qimmatbaho toshlar bilan Gondorning Oq Daraxti, Elendilning Yetti Yulduzi va Oliy Shoh toji naqsh qilib tikildi.\n\nUshbu bayroq Halqa Urushining hal qiluvchi pallasida Halbarad boshchiligidagi Kulrang Otliqlar (Grey Company) orqali Aragornga yetkazildi. Pelargirda va Pelennor dalalarida bu bayroqning koʻtarilishi dushman qalbiga dahshat, ittifoqchilarga esa cheksiz umid baxsh etdi."
    },
    {
      title: "Qayta Birlashgan Qirollik Qirolichasi",
      content: "Sauron qulagach, 3019-yilning Midsummer (Yoz oʻrtasi) bayramida Arwen Minas Tirithga keldi va buyuk tantanalar bilan Aragorn II Elessarga turmushga chiqdi. U Qayta Birlashgan Qirollikning Oliy Qirolichasi (High Queen) taxtiga oʻtirdi.\n\nArwen oʻzining donishmandligi, mehr-shafqati va olijanobligi bilan urushdan vayron boʻlgan mamlakatning qayta tiklanishida eriga eng yaqin maslahatchi boʻldi. U Frodoga oʻzining oq billur yulduzli marjonini sovgʻa qilib, uning ruhiy jarohatlariga malham tiladi."
    },
    {
      title: "Fojiaviy vidolashuv va Cerin Amrotdagi soʻnggi sukunat",
      content: "Aragorn va Arwen 120 yil davomida baxtli va adolatli hukmronlik qildilar. Ularning oʻgʻli Eldarion va bir necha qizlari dunyoga keldi. Toʻrtinchi davrning 120-yilida Qirol Elessar vafot etganida, Arwen insonlar oʻlimining butun achchiq fojiasini his qildi.\n\nOʻz oilasi va farzandlari bilan vidolashgan Arwen boʻshab qolgan, elflar tark etgan Lothlórienga yolgʻiz qaytib bordi. Cerin Amrot tepaligida, bir paytlar ahd bergan gullar soʻngan maskanda, u 3021-yil qishida orom topdi. Uning qabri mallorn daraxtlari ostida, dunyo oʻzgarib ketgunga qadar abadiy sukunatda qoldi."
    }
  ];
  return d;
});

// 13. THEODEN
updateCharacter('theoden', (d) => {
  d.image = {
    src: '/images/characters/theoden.webp',
    src_thumb: '/images/characters/theoden-thumb.webp',
    alt: 'Théoden ot ustida Herugrim qilichini koʻtargan holda, Meduseld va Rohirrim qoʻshini oldida',
    caption: 'Théoden Ednew — Rohan Oliy Shohi, Eorl xonadoni 17-hukmdori, Pelennor jangi qahramoni'
  };
  d.biography_sections = [
    {
      title: "Eorl xonadoni va Meduseld taxti",
      content: "Théoden Ednew Uchinchi davrning 2948-yilida Gondorda Thengel va Morwen Steelsheen oilasida tugʻilgan. U 2980-yilda otasining vafotidan soʻng Rohan Oliy Shohi (King of Rohan) taxtiga oʻtirdi. U adolatli, saxiy va jangsevar podshoh boʻlib, Meduseld Oltin Saroyida hukmronlik qildi.\n\nUning yagona oʻgʻli Théodred boʻlib, xotini Elfhild uning tugʻruq chogʻida vafot etgan edi. Singlisi Théodwyn vafot etgach, uning yetim qolgan farzandlari — Éomer va Éowynni oʻz saroyida oʻz bolalaridek mehr bilan tarbiyaladi."
    },
    {
      title: "Gríma Wormtongue zahri va Gandalf tomonidan shifolanish",
      content: "Théoden keksaygan sari, Sarumanning josusi boʻlgan bosh maslahatchi Gríma Wormtongue uning ongini makkor soʻzlar va zaharlar bilan tushkunlikka tushirdi. Qirol oʻzining zaif, qari va kuchsiz ekaniga ishonib, saroyda harakatsiz oʻtirib qoldi; bu orada Saruman qoʻshinlari Rohanga hujum qilib, Théodredni Isen daryosi kechuvida oʻldirdi.\n\n3019-yil 2-martida Oq Gandalf, Aragorn, Legolas va Gimli Meduseldga kirib keldilar. Gandalf oʻzining ilohiy qudrati bilan Grímaning qora sehrini parchalab, Théodenni chuqur gʻaflatdan uygʻotdi. Qirol oʻz qilichi Herugrimni qoʻliga olib, qaddini rostladi va xalqini jangga boshladi."
    },
    {
      title: "Hornburg (Helm's Deep) jangi",
      content: "Saruman oʻn minglik Uruk-hai armiyasini joʻnatganini bilgan Théoden, oʻz xalqini va qoʻshinini qadimiy tosh qalʼa — Helm's Deepdagi Hornburgga koʻchirdi. Qalʼa devorlari portlatilib, umidsiz qorongʻu tun choʻkkanida, Théoden taslim boʻlishdan bosh tortdi.\n\nTong otganda, shoh oʻz otiga minib, Aragorn bilan birga darvozadan dushman ustiga shiddatli hujum (sortee) qildi. Helm karnayining dahshatli sadosi ostida Gandalf va Erkenbrand qoʻshinlari yetib kelib, Saruman armiyasini butkul tor-mor qildi."
    },
    {
      title: "Dunharrow qasamyodi va Pelennorga buyuk yurish",
      content: "Gondorning qizil oʻq (Red Arrow) elchisi Hirgon Meduseldga yetib kelib yordam soʻraganida, Théoden ikkilanmasdan: 'Rohan yordamga boradi!' deb javob berdi. U Dunharrowda olti ming nafar sara otliqni toʻpladi.\n\nWoses (Oʻrmon yovvoyi odamlari) yetakchisi Ghân-buri-Ghân yordamida togʻ yoʻllaridan yashirincha oʻtib, 15-mart tongida Minas Tirith ostonasidagi Pelennor dalalariga yetib keldilar. Qora qorongʻulikda Rohirrim karnaylari yangrab, Théoden oʻz oq tulpari Snowmane ustida Oromë xudosidek viqor bilan dushman saflarini yorib kirdi."
    },
    {
      title: "Angmar Jodugar-shohi bilan toʻqnashuv va shonli oʻlim",
      content: "Pelennor jangining avj pallasida qora qanotli maxluq ustida uchib kelgan Angmar Jodugar-shohi Théodenga hujum qildi. Snowmane oʻqdan yaralanib yiqildi va shohni oʻz ostida bosib qoldi. Bu vaqtda jangchi qiyofasidagi Éowyn va xobbit Merry Jodugar-shohni yoʻq qilib, shohning qasosini oldilar.\n\nJon berayotgan Théoden Éomerni yangi Shoh deb eʼlon qildi va: 'Mening jasadim oʻz ajdodlarim oldida uyalmaydi. Men buyuklar safiga ketmoqdaman', deb qahramonlarga xos sharaf bilan vafot etdi. U Edorasdagi podshohlar qabristonida, simbelmynë gullari bilan qoplangan yettinchi tepalikka dafn etildi."
    }
  ];
  return d;
});
