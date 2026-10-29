const fs = require('fs');
const path = require('path');

const booksDir = path.resolve('src/content/books');

function updateBook(id, modifier) {
  const filePath = path.join(booksDir, `${id}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  modifier(data);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`✓ Boosted ${id}`);
}

// 1. The Lord of the Rings
updateBook('the-lord-of-the-rings', b => {
  b.detailed_sections.push({
    title: "Tilshunoslik poydevori: Oʻrta-yer tillarining roman syujetidagi oʻrni",
    content: "Tolkienning oʻzi koʻp marotaba taʼkidlaganidek, «Uzuklar Hukmdori» asari hikoyani aytib berish uchun emas, balki yaratilgan tillarga (Quenya, Sindarin, Khuzdul, Qora Nutq, Westron) yashash muhiti yaratish uchun yozilgan. Muallif soʻzlariga koʻra, «Ibtidoda til bor edi; afsonalar esa tilga xalq yaratish ehtiyojidan tugʻildi». Romanda har bir geografik nom, har bir qahramonning ismi uning etnik va tarixiy ildizlarini aks ettiradi. Masalan, Rohan chavandozlarining ismlari (Éomer, Éowyn, Théoden) qadimgi ingliz tilining mersiyacha lahjasiga tayanadi, Gondor zodagonlarining ismlari esa Sindarin elflar tili qonuniyatlariga boʻysunadi. Qora Darvoza va Mordor atamalari esa qadimgi xurratcha va semit tillarining boʻgʻiz tovushlaridan ilhomlangan qattiq Qora Nutqda shakllantirilgan. Ushbu lingvistik uygʻunlik asarga mislsiz haqqoniylik baxsh etadi."
  });
  b.detailed_sections.push({
    title: "Jahon adabiyotidagi oʻrni, tanqidiy qabul qilinishi va madaniy taʼsiri",
    content: "1954–1955-yillarda nashr etilganidan soʻng, asar dastlab tanqidchilar oʻrtasida qizgʻin bahs-munozaralarga sabab boʻldi. C.S. Lewis va W.H. Auden kabi yirik yozuvchilar uni XX asrning eng buyuk adabiy yutugʻi deb eʼtirof etgan boʻlsalar, Edmund Wilson kabi baʼzi konservativ tanqidchilar uni «bolalar adabiyoti» sifatida kamsitishga urindilar. Biroq 1960-yillarda AQSh universitetlarida choʻntak nashrlari tarqalishi bilan asar butunjahon madaniy fenomeniga aylandi («Frodo Lives!» harakati). BBC tomonidan 2003-yilda oʻtkazilgan «The Big Read» soʻrovnomasida «Uzuklar Hukmdori» Buyuk Britaniyaning barcha davrlardagi eng sevimli kitobi deb topildi. Asar dunyoning 50 dan ortiq tillariga tarjima qilingan boʻlib, 150 million nusxadan ortiq adadda sotilgan."
  });
});

// 2. The Fellowship of the Ring
updateBook('the-fellowship-of-the-ring', b => {
  b.detailed_sections.push({
    title: "Rivendell va Elrond Kengashining falsafiy-siyosiy ahamiyati",
    content: "Elrond Kengashi romanning eng uzun va markaziy bobi boʻlib, unda Oʻrta-yerning barcha buyuk oʻtmishi va bugungi kuni yagona nuqtada tutashadi. Ushbu kengashda hech qanday harbiy buyruq yoki majburiyat yoʻq; har bir qahramon oʻz erkin irodasi bilan ittifoqqa qoʻshiladi. Elrond taʼkidlaganidek: «Bu yuk hech kimga buyurilmaydi, biroq kim oʻz xohishi bilan uni koʻtarsa, u buyuk shon-sharafga erishadi». Kengashda Mittilar va Elflar oʻrtasidagi ming yillik adovat, Gondorning umidsiz mudofaasi va Sarumanning xiyonati ochiq muhokama qilinadi. Kengashning eng buyuk sabogʻi shundaki, dunyoni qutqarish qurol yoki kuch orqali emas, balki eng ojiz va kamsuqum jonzot — xobbit Frodoning oʻz jonini fido qilishga tayyorligi orqali amalga oshishidir."
  });
  b.detailed_sections.push({
    title: "Moria yerosti fojiasi va Balrog arxetipi",
    content: "Moria (Khazad-dûm) boblari Tolkien nasrining eng yuksak qorongʻu epik namunalaridan biridir. Qadimiy mitti saltanatining boʻshab qolgan zallari, cheksiz ustunlar oʻrmoni va Balin qabridagi qonli yozuv («Ular darvozalarni toʻsib qoʻyishdi... Barabanlar, zulmatdagi barabanlar... Ular kelishyapti») qadimgi fojianing dahshatini tiriltiradi. Durin Koʻprigi ustidagi toʻqnashuvda Gandalf Olov va Soya maxluqi boʻlgan Balrog bilan yuzma-yuz keladi. Gandalfning: «Sen oʻtolmaysan! Men Yashirin Olov xizmatchisiman, Anor alangasi sohibiman... Qora olov senga yordam bermas, Udûn alangasi! Qorongʻilikka qayt!» degan xitobi Tolkien koinotidagi ilohiy nur bilan qadimgi zulmat oʻrtasidagi metafizik qarama-qarshilikning eng qudratli timsolidir."
  });
});

// 3. The Two Towers
updateBook('the-two-towers', b => {
  b.detailed_sections.push({
    title: "Entlar va tabiatning sanoatlashuvga qarshi isyoni",
    content: "«Ikki Qalʼa» jildidagi eng oʻziga xos mifologik obraz — bu Fangorn oʻrmonining daraxt-posbonlari boʻlgan Entlardir. Tolkien zamonaviy texnologiya, tabiatni shafqatsizlarcha payhon qiluvchi fabrikalar va metallurgiyaga boʻlgan nafratini Sarumanning Isengarddagi sanoat mashinasi orqali koʻrsatadi. Saruman oʻz pechlarini yoqish uchun qadimiy tirik daraxtlarni chopib tashlaydi. Entmoot (Entlar Kengashi) orqali sekin, ammo qaytarib boʻlmas gʻazab bilan qoʻzgʻalgan Entlar Isengard toʻgʻonini buzib, butun sanoat iflosligini musaffo daryo suvlari bilan yuvib tashlaydilar. Bu epizod Tolkienning ekologik falsafasi va tabiatning tirik ruhiga boʻlgan chuqur ehtiromining eng yorqin namoyonidir."
  });
  b.detailed_sections.push({
    title: "Sméagol va Gollum: Ongning ikkiga boʻlinishi va rahm-shafqat",
    content: "IV kitobda Tolkien Gollum obrazini Oʻrta-yer adabiyotidagi eng murakkab psixologik qahramonga aylantiradi. Oʻlik Botqoqliklar boʻyida oʻtirgan Gollumning ichki monologi — yaxshi xobbit Sméagol bilan Uzuk quli boʻlgan yovuz Gollum oʻrtasidagi bahs — adabiy durdona hisoblanadi. Frodoning unga boʻlgan rahm-shafqati Sméagolda deyarli tavba qilish va najot topish tuygʻusini uygʻotadi; u uxlab yotgan Frodoga mehr bilan qoʻl choʻzadi. Biroq Samning qoʻpol va shubha bilan toʻla aralashuvi bu nozik imkoniyatni yoʻqqa chiqaradi va Gollumni uzil-kesil xiyonat yoʻliga itaradi. Bu orqali Tolkien hatto eng yovuz koʻringan qalbda ham ezgulik uchquni boʻlishi va bitta nooʻrin soʻz qutqaruvchi imkoniyatni barbod qilishi mumkinligini koʻrsatadi."
  });
});

// 4. The Return of the King
updateBook('the-return-of-the-king', b => {
  b.detailed_sections.push({
    title: "Minas Tirith va Pelennor dalalarida umidsizlik ustidan gʻalaba",
    content: "V kitobdagi Pelennor jangi jahon harbiy epikasining eng yuksak choʻqqilaridan biridir. Shahar qamali chogʻida noib Denethor II oʻzining aql-idrokiga binoan hamma narsa boy berilgan deb hisoblaydi va Palantír orqali Sauron koʻrsatgan yolgʻon tasvirlarga ishonib, oʻzini oʻtda yondiradi (bu soxta aql va magʻrur umidsizlik ramzidir). Unga qarama-qarshi oʻlaroq, Théoden va Gandalf gʻalaba umidi deyarli boʻlmasa-da, oʻz burchini soʻnggi nafasgacha ado etish yoʻlini tanlaydilar. Théodenning oʻlim oldidagi jasorati, Éowynning «Men erkak emasman!» deb Jodugar-qirolning yuziga tigʻ urishi va Aragornning oʻliklar yordamida qaroqchilar kemalarini egallab yetib kelishi umidsizlik qaʼridan tugʻilgan gʻalabaning buyuk guldastasi hisoblanadi."
  });
  b.detailed_sections.push({
    title: "Shayrning tozalanishi (The Scouring of the Shire)ning markaziy oʻrni",
    content: "Koʻplab kitobxonlar va hatto Peter Jackson filmi ham Shayrning tozalanishi bobini eʼtibordan chetda qoldirgan yoki qisqartirgan. Biroq Tolkien ushbu bobni romanning eng muhim axloqiy choʻqqisi deb bilgan. Qahramonlar dunyoni qutqargan boʻlsalar-da, urush balosi ularning oʻz uyiga ham kirib keladi: Saruman Shayrda diktatura, daraxtlarni kesish, fabrikalar qurish va qonunsizlik oʻrnatgan boʻladi. Xobbitlar buyuk jangchilar yoki sehrgarlar yordamisiz, oʻzlarining oʻrgangan jasorati va birdamligi bilan oʻz vatanlarini tozalaydilar. Bu voqea har qanday urushdan qaytgan faxriylarning oʻz uylarida duch keladigan achchiq haqiqatning va tinchlikni faqat oʻz qoʻling bilan asrash mumkinligining ramzidir."
  });
});

// 5. The Silmarillion
updateBook('silmarillion', b => {
  b.detailed_sections.push({
    title: "Akallabêth: Atlantida afsonasi va Insonning oʻlimdan qoʻrquvi",
    content: "«Silmarillion»ning toʻrtinchi qismi boʻlgan «Akallabêth» Tolkienning butun umri davomida uni taʼqib qilgan «Atlantida sindromi» (oʻz tushlarida ulkan toʻlqin ostida qolgan qadimiy shahar manzarasi)ning yuksak badiiy inʼikosidir. Númenor afsonasi inson tabiatining eng chuqur fojiasini — vaqt va oʻlim muqarrarligini qabul qila olmaslik dardini ochib beradi. Eru tomonidan insonlarga berilgan «Oʻlim Inʼomi» (Gift of Men) dastlab ozodlik va cheksizlik sari yoʻl boʻlsa-da, Sauronning makkorona taʼsiri ostida númenorliklar unga dushman va laʼnat sifatida qaray boshlaydilar. Ular tosh maqbaralar quradilar, jasadlarni mumiyolaydilar va Boqiy Yerlarga hujum qiladilar. Natijada yulduz oroli okean qaʼriga gʻarq boʻladi; bu voqea insoniyat kibri qanchalik yuksak texnika va qudratga ega boʻlmasin, axloqiy va maʼnaviy qulash oldida ojiz ekanligini fosh etadi."
  });
  b.detailed_sections.push({
    title: "Mifologiyaning teologik asoslari: Monoteizm va Ilohiy Inoyat",
    content: "Garchi «Silmarillion» yuzaki qaraganda koʻp xudolik (politeizm) panteoniga oʻxshasa-da, uning zamirida qatʼiy monoteistik teologiya yotadi. Yagona Yaratuvchi Eru Ilúvatar koinotdan mutlaq ustun turadi; Valar esa faqat Uning fikridan yaralgan, dunyoni boshqaruvchi farishtasimon qudratlardir. Melkor qanchalik urinmasin, Eruning buyuk rejasini buza olmaydi, balki har bir yovuzlik oxir-oqibat yanada yuksakroq goʻzallik va jasoratning namoyon boʻlishiga xizmat qiladi («Musiqada shunday ohanglar paydo boʻlgayki, ularning goʻzalligi qaygʻudan tugʻilgay»). Tolkien «Silmarillion» orqali nasroniy ilohiyotini toʻgʻridan-toʻgʻri daʼvat qilmasdan, balki sof mifologik shakllar vositasida chuqur aks ettirgan."
  });
});

// 6. Unfinished Tales
updateBook('unfinished-tales', b => {
  b.detailed_sections.push({
    title: "Aldarion va Erendis: Oʻrta-yerdagi eng realistik psixologik drama",
    content: "«Tugallanmagan Afsonalar» kitobidagi «Dengizchining xotini» (Aldarion and Erendis) qissasi Tolkien ijodida mutlaqo betakror oʻrin tutadi. Bu yerda yovuz maxluqlar, orklar yoki sehrli uzuklar yoʻq; butun fojia ikki insonning xarakteri, dunyoqarashi va turmush tarzi oʻrtasidagi murosasiz ziddiyatdan kelib chiqadi. Aldarion — dengizga oshiq, nomaʼlum ufqlar sari talpinuvchi buyuk kemasoz; Erendis esa oʻz oʻrmonlari va osoyishta zaminiga bogʻlangan magʻrur ayol. Ularning bir-birini sevsalar-da, bir-biriga yon bosa olmasliklari, yolgʻizlik va nafratga aylangan muhabbati Tolkienning inson psixologiyasini qanchalik chuqur his qilganini koʻrsatadi."
  });
  b.detailed_sections.push({
    title: "Palantíri sirlari: Maʼlumotlar uzatish va ruhiy manipulyatsiya",
    content: "Kitobning toʻrtinchi qismidagi «Koʻruvchi Toshlar» (The Palantíri) inshosi Oʻrta-yer texnologiyasi va maʼlumotlar xavfsizligining ajoyib tahlilidir. Tolkien Fëanor tomonidan yasalgan yettita toshning qanday qilib fikr va tasvirlarni uzoq masofaga uzatishini, toshlar yolgʻon koʻrsata olmasligini, biroq Sauron qanday qilib haqiqatning faqat bir qismini koʻrsatish orqali Denethorni umidsizlikka tushirgani va Sarumanni oʻziga boʻysundirganini tushuntiradi. Bu insho zamonaviy axborot urushlari, manipulyatsiya va haqiqatni buzib koʻrsatish mexanizmlarining dahoona bashoratidir."
  });
});

// 7. The History of Middle-earth
updateBook('history-of-middle-earth', b => {
  b.detailed_sections.push({
    title: "Morgoth Halqasi va Yovuzlikning moddiy dunyoga singishi",
    content: "Seriyaning oʻninchi jildi («Morgoth's Ring») Tolkien teologiyasining eng yuksak choʻqqisi hisoblanadi. Unda muallif Sauron va Morgoth oʻrtasidagi tub farqni ochib beradi: Sauron oʻz qudratini bitta kichik tilla buyumga — Yagona Uzukka joylagan boʻlsa, Morgoth oʻzining butun ilohiy qudratini butun Arda zaminining moddiy atomlariga (oltin, temir, suv, yer) singdirib yuborgan. Shu sababli butun dunyo moddasi («Arda Marred» — Buzilgan Arda) yovuzlikka moyil boʻlib qolgan. Ushbu konsepsiya Tolkienning nega butun Oʻrta-yerda azob-uqubat va oʻlim borligini tushuntirishdagi eng chuqur metafizik kashfiyotidir."
  });
  b.detailed_sections.push({
    title: "Athrabeth Finrod ah Andreth: Dinlararo va ekzistensial muloqot",
    content: "«Morgoth's Ring» jildiga kiritilgan yana bir durdona — elf shohi Finrod Felagund va donishmand inson ayoli Andreth oʻrtasidagi tungi suhbatdir. Bu asar jahon adabiyotidagi eng goʻzal falsafiy dialoglardan biri boʻlib, unda elflarning dunyoga bogʻlangan boqiyligi bilan insonlarning oʻlim orqali koinotdan ozod boʻlishi qiyoslanadi. Andreth insonlarning qadimda oʻlmas boʻlganini, ammo qandaydir ibtidoiy gunoh tufayli bu inʼomdan mahrum boʻlganini aytadi. Finrod esa faqat Eru Ilúvatar oʻzi bir kun kelib dunyo ichiga kirib kelishi (Incarnation) orqali Arda va insoniyatni qutqarishi mumkinligiga umid bildiradi."
  });
});

// 8. The Children of Húrin
updateBook('the-children-of-hurin', b => {
  b.detailed_sections.push({
    title: "Glaurung — psixologik manipulyatsiya va yolgʻon dahosi",
    content: "«Húrin Farzandlari»dagi birinchi ajdar Glaurung jismoniy qudratidan koʻra koʻproq oʻzining zaharli tili va soxta mantiqi bilan dahshat soladi. U Smaug kabi shunchaki ochkoʻz qaroqchi emas, balki qahramonlarning ruhiy zaifliklarini biladigan va ularni bir-biriga qarshi qayraydigan iblisdir. Glaurung Túrinni oʻz doʻstlari Finduilas va elflarni qutqarish oʻrniga oʻzining xomxayollariga ishonishga majbur qiladi. Ajdarning koʻzlaridagi gipnotik sehr inson ongini falaj qilib, undagi haqiqat bilan yolgʻon chegarasini oʻchirib yuboradi; bu Tolkienning yovuzlik eng avvalo soʻz va fikrni buzishdan boshlanishi haqidagi fikrining yorqin timsolidir."
  });
  b.detailed_sections.push({
    title: "Alan Leening illyustratsiyalari va asarning epik uslubi",
    content: "2007-yilgi mustaqil nashr Alan Leening 25 ta qalamtasvir va 8 ta rangli polotnosi bilan bezatilgan. Lee Túrinning Dor-lómin Ajdar dubulgʻasidagi ogʻir, maʼyus qiyofasini, Nargothrond saroylarining ulugʻvor qulashini va Amon Rûdh qoyalaridagi qaroqchilar hayotini qadimiy shohona ranglarda aks ettirgan. Kitobning tili qadimgi Bibliya va qahramonlik sagalari ohangida yozilgan boʻlib, har bir gap vazmin, vazmin va poeziyaga yaqin epik qudrat kasb etadi."
  });
});

// 9. Beren and Lúthien
updateBook('beren-and-luthien', b => {
  b.detailed_sections.push({
    title: "Huan — Valinor iti va sadoqat timsoli",
    content: "Dostonning eng taʼsirli va unutilmas qahramonlaridan biri — Oromë tomonidan Celegormga sovgʻa qilingan buyuk Valinor iti Huandir. Huan oddiy hayvon emas, balki sehrli, or-nomusli va sadoqatli mavjudot boʻlib, unga umri davomida faqat uch marta inson tilida gapirish ijozat berilgan. Huan oʻz xoʻjayini Celegormning yovuz va adolatsiz niyatlarini koʻrib, uni tark etadi va Lúthienga sodiq doʻst boʻlib xizmat qiladi. U Sauronning Tol-in-Gaurhothdagi barcha boʻrilarini yengadi va Sauronning oʻzini ham it qiyofasida boʻynidan tutib boʻysundiradi. Carcharoth bilan soʻnggi jangda Huan oʻlimga duchor boʻladi, ammo jon berishidan oldin uchinchi marta gapirib, Beren bilan xayrlashadi."
  });
  b.detailed_sections.push({
    title: "Alliterativ «The Lay of Leithian» sheʼriyatining sehri",
    content: "2017-yilgi kitobda Tolkienning 1920-yillarda yozgan «The Lay of Leithian» dostonidan ulkan parchalar keltirilgan. Ushbu sheʼriyat sakkiz boʻgʻinli qofiyalangan juftliklar (rhyming octosyllabic couplets) shaklida bitilgan boʻlib, oʻzining shiddatli ritmi, tasviriy qudrati va musiqiyligi bilan ingliz adabiyotining eng yuksak durdonalari qatorida turadi. Christopher Tolkien otasining sheʼriyatidagi har bir tahrirni, qofiyalarning oʻzgarishini va uning C.S. Lewis tomonidan berilgan batafsil tanqidiy izohlarini ham kitobga kiritgan boʻlib, bu asarni haqiqiy adabiy ustaxona koʻrinishiga keltiradi."
  });
});

// 10. The Fall of Gondolin
updateBook('the-fall-of-gondolin', b => {
  b.detailed_sections.push({
    title: "Gondolinning Oʻn Ikki Xonadoni va ularning harbiy nishonlari",
    content: "1917-yilgi asl matnda Tolkien Gondolin qoʻshinining oʻn ikki xonadonini va ularning gerblarini mislsiz rang-baranglikda tasvirlagan: Oq Qanot xonadoni (Tuor jangchilari, dubulgʻalarida oq qush qanotlari bilan), Qaldirgʻoch xonadoni (eng chaqqon kamonchilar), Qorparcha xonadoni (kumush va billur sovutlar), Daraxt xonadoni (yashil libosli bahodirlar), Oltin Gul xonadoni (Glorfindel yetakchiligida, qalqonlarida porlagan quyosh bilan), Favvora xonadoni (Ecthelion yetakchiligida, billur va kumush nayzalar) va Yovuz Bolta xonadoni. Ushbu batafsil heraldik tizim Tolkienning oʻrta asr jang sanʼati va nishonlariga boʻlgan chuqur qiziqishini ochib beradi."
  });
  b.detailed_sections.push({
    title: "Gondolin — Troya va Yangi Quddus sintezi",
    content: "Adabiyotshunoslar Gondolin obrazida ikki buyuk mifologik anʼana — qadimgi yunonlarning Troyasi hamda nasroniylikning «Yangi Quddus» (Samoviy Shahr) timsollarining sintezini koʻradilar. Troya kabi, Gondolin ham ichki xiyonat (Maeglin) tufayli qulaydi va uning omon qolgan qahramonlari (Tuor va Eärendil, Eney kabi) yangi buyuk sulolaga (Númenor va Elros xonadoniga) asos soladilar. Shu bilan birga, oppoq toshlardan qurilgan, favvoralari jilolangan bu shahar yer yuzidagi jannatning poyonsiz goʻzalligi va uning fojiaviy yoʻqolishi haqidagi mungli madhiyadir."
  });
});

// 11. The Fall of Númenor
updateBook('the-fall-of-numenor', b => {
  b.detailed_sections.push({
    title: "Dengizchilik, Palantíri va Oʻrta-yerdagi koloniyalar",
    content: "Kitobda Númenor sivilizatsiyasining moddiy va harbiy qudrati keng yoritiladi. Orol xalqi dengizchilik sanʼatida shunday yuksaklikka erishgan ediki, ularning ulkan kemalari butun dunyo okeanlarini aylanib chiqqan. Ular Oʻrta-yerda Pelargir, Umbar va Lond Daer kabi buyuk port-shaharlarga asos soladilar. Biroq vaqt oʻtishi bilan númenorliklar mahalliy xalqlarga yordam berish oʻrniga, ulardan ogʻir soliqlar oluvchi, oʻrmonlarni ayovsiz kesuvchi va qullikka soluvchi mustamlakachilarga aylanadilar. Bu orqali Tolkien har qanday buyuk imperiyaning maʼnaviy buzilishi uning tashqi siyosatidagi zulm va istilochilik orqali boshlanishini koʻrsatib bergan."
  });
  b.detailed_sections.push({
    title: "Sadoqatlilar (Elendili) va Oq Daraxt nasli",
    content: "Númenor fojiasining eng yorugʻ sahifasi — bu koʻpchilikning adashishiga qaramasdan, Eru Ilúvatar va Elflar bilan qadimiy doʻstlikka sodiq qolgan kichik bir jamoa — Sadoqatlilar (Elendili)ning jasoratidir. Andúnië lordi Amandil oʻzining kichik kemasida Valinor sari najot izlab suzib ketadi va qaytib kelmaydi. Uning oʻgʻli Elendil va nabiralari Isildur hamda Anárion esa taqiqlangan oʻlim qarshisida Armenelos saroyidagi Nimloth Oq Daraxtining soʻnggi mevasini hayotini xavfga qoʻyib oʻgʻirlab chiqadilar. Bu meva Oʻrta-yerga keltirilib ekiladi va Gondor Oq Daraxtiga aylanadi; bu esa ezgulikning har qanday qora toʻfondan omon chiquvchi boqiy urugʻidir."
  });
});

console.log("✓ Barcha 11 ta kitob muvaffaqiyatli kengaytirildi!");
