const fs = require('fs');
const path = require('path');

const booksDir = path.resolve('src/content/books');

function updateBook(id, dataModifier) {
  const filePath = path.join(booksDir, `${id}.json`);
  const current = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const updated = dataModifier(current);
  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2), 'utf-8');
  console.log(`✓ [books] ${id}.json yangilandi`);
}

// 19. The Adventures of Tom Bombadil
updateBook('the-adventures-of-tom-bombadil', b => {
  b.cover_image = {
    src: '/images/books/the-adventures-of-tom-bombadil.webp',
    alt: 'Tom Bombadil Sarguzashtlari birinchi nashri original changqopi (George Allen & Unwin, 1962) — Pauline Baynes chizgan pushti yelkanli kema va chigʻanoq tutgan sayohatchi',
    edition_title: 'First Edition Dust Jacket (George Allen & Unwin, 1962)',
    publisher: 'George Allen & Unwin',
    year: 1962,
    isbn: '978-0-04-821016-6',
    artist: 'Pauline Baynes',
    source: 'George Allen & Unwin / British Library'
  };
  b.synopsis = "«Tom Bombadil Sarguzashtlari» (The Adventures of Tom Bombadil) — J.R.R. Tolkien tomonidan 1962-yilda Pauline Baynes illyustratsiyalari bilan chop etilgan oʻn oltita sheʼr va dostonlardan iborat toʻplam. Kitob Shayr folklorining bir boʻlagi sifatida, xobbitlar tomonidan «Gʻarbiy Chegara Qizil Kitobi» chetlariga yozilgan sheʼriy namunalar niqobi ostida taqdim etiladi. Unda Tom Bombadil, Oltinrezaxon (Goldberry), Qadimgi Majnuntol va Daryo qizi sarguzashtlari bilan bir qatorda elflarning mungli dengiz dostonlari, xobbitlarning kulgili qoʻshiqlari va hayvonot olami haqidagi majoziy sheʼrlar oʻrin olgan.";
  b.detailed_sections = [
    {
      title: "Shayr poetikasi va Qizil Kitob ilovasi sifatida kontseptsiya",
      content: "Tolkien ushbu toʻplamni oddiy sheʼriy majmua emas, balki toʻliq Oʻrta-yer adabiyoti yodgorligi sifatida shakllantirgan. Muallif soʻzboshisida aytilishicha, ushbu sheʼrlar Bilbo va Frodo Baggins, ularning qarindoshlari hamda boshqa Shayr shoirlari tomonidan qalamga olingan. Baʼzi sheʼrlar («The Stone Troll», «Perry-the-Winkle») bevosita xobbitlarning kundalik hazillari va qoʻshiqlarini aks ettirsa, boshqalari («The Sea-Bell», «The Last Ship») elflarning gʻaroyib mungli ohanglari xobbitlar ongiga qanday singganini koʻrsatadi."
    },
    {
      title: "Tom Bombadil va Qadimgi Oʻrmon qoʻshiqlari",
      content: "Kitobning dastlabki ikki dostoni — «The Adventures of Tom Bombadil» va «Bombadil Goes Boating» — qadimiy sirli siymo Tom Bombadilning oʻrmon va daryo boʻyidagi gʻayritabiiy hayotini tasvirlaydi. Daryo qizi Oltinrezaxon, keksa daraxt-sehrgar Qadimgi Majnuntol (Old Man Willow) va Mozor sharpasi (Barrow-wight) Tomni asir olishga urinadilar, ammo Bombadil oʻzining sof, quvnoq va sehrli qoʻshiqlari bilan ularning barchasini boʻysundiradi. Ikkinchi sheʼrda Tom Withywindle daryosidan pastga qayiqda suzib, xobbitlar bilan qahvaxonada uchrashishi va doʻstona pivo ichishi tasvirlanadi."
    },
    {
      title: "«The Sea-Bell» va «The Last Ship»: Ekzistensial yolgʻizlik",
      content: "Toʻplamning eng chuqur va hayratlanarli durdonasi — «The Sea-Bell» (Dengiz qoʻngʻirogʻi) dostonidir. Unda qirgʻoqda dengiz chigʻanogʻini topib olgan insonning oq qushlar boshchiligidagi kema orqali kimsasiz sehrli orolga kelishi, u yerda qumloqlar va saroylarni kezib, yakunda aqlini yoʻqotgan, qari va gʻarib holda oʻz yurtiga qaytib kelishi hikoya qilinadi. W.H. Auden ushbu dostonni Tolkienning eng yuksak sheʼriy asari deb atagan. «The Last Ship» (Soʻnggi Kema) dostonida esa yosh xobbit qizi Firiel daryo boʻyida oʻynab yurib, dengiz sari suzib ketayotgan elflarning soʻnggi oq kemasini koʻrishi, unga kemaga chiqish taklif qilinganida, oʻzining oʻlik tuproqqa bogʻlangan insoniy taqdirini anglab, sohilida yigʻlab qolishi tasvirlanadi."
    },
    {
      title: "Sheʼriy texnika va alliterativ-metrik mahorat",
      content: "Tolkien ingliz tili leksikasining eng nozik qatlamlaridan, ichki qofiyalar (internal rhyme), alliteratsiya va murakkab troxeyik-daktilik oʻlchovlardan mohirona foydalangan. «Olifant», «Fastitocalon» (ulkan kit-orol haqidagi mif), «The Mewlips» va «Shadow-Bride» sheʼrlari oʻrta asr bestiariylari (hayvonot ensiklopediyalari) anʼanalariga tayanadi. Kitob Tolkienning nafaqat buyuk nasr ustasi, balki oʻz zamonasining eng yetuk poetik ritm meʼmorlaridan biri boʻlganini isbotlaydi."
    }
  ];
  return b;
});

// 20. Tree and Leaf
updateBook('tree-and-leaf', b => {
  b.cover_image = {
    src: '/images/books/tree-and-leaf.webp',
    alt: 'Daraxt va Barg birinchi nashri original changqopi (George Allen & Unwin, 1964) — J.R.R. Tolkien chizgan toʻq qizil fondagi ulkan qora daraxt va osilgan barg',
    edition_title: 'First Edition Dust Jacket (George Allen & Unwin, 1964)',
    publisher: 'George Allen & Unwin',
    year: 1964,
    isbn: '978-0-04-824014-9',
    artist: 'J.R.R. Tolkien',
    source: 'George Allen & Unwin / British Library'
  };
  b.synopsis = "«Daraxt va Barg» (Tree and Leaf) — J.R.R. Tolkienning eng mashhur adabiy-falsafiy inshosi «On Fairy-Stories» (Sehrli ertaklar haqida) hamda chuqur allegorik qissasi «Leaf by Niggle» (Barg va Niggle)ni bir muqova ostida jamlagan fundamental kitob. 1964-yilda George Allen & Unwin nashriyotida chop etilgan (keyingi nashrlarda «Mythopoeia» sheʼri bilan boyitilgan). Ushbu toʻplam Tolkienning barcha ijodiy prinsiplari, «Sub-creation» (Ikkilamchi Yaratuvchilik), «Eucatastrophe» (Kutilmagan Ezgu Burilish) va fantaziya sanʼatining insoniyat maʼnaviy hayotidagi oʻrni haqidagi asosiy nazariy manifestsidir.";
  b.detailed_sections = [
    {
      title: "«On Fairy-Stories» inshosining yaratilishi va maqsadi",
      content: "1939-yil mart oyida Tolkien Shotlandiyaning Sent-Endryus universitetida Endryu Lang xotirasiga bagʻishlangan maʼruza oʻqidi. Bu maʼruza keyinchalik kengaytirilib, «On Fairy-Stories» nomi bilan eʼlon qilindi. Tolkien oʻz davrida ertaklarni faqat bolalarga moʻljallangan «past tabaqali» adabiyot deb hisoblovchi viktorian qarashlarni qatʼiyan rad etdi. U ertak janri insoniyat tasavvurining eng yuksak, eng qadimiy va eng jiddiy shakli ekanligini, u har qanday yoshdagi yetuk aql uchun moʻljallanganini ilmiy jihatdan isbotlab berdi."
    },
    {
      title: "Sub-creation (Ikkilamchi Yaratuvchilik) nazariyasi",
      content: "Tolkien konsepsiyasining markazida «Sub-creation» tushunchasi yotadi. Yagona Xudo (Eru) yoʻqdan bor qiluvchi Birlamchi Yaratuvchidir; Xudo oʻz qiyofasida yaratgan inson esa «Ikkilamchi Yaratuvchi» qobiliyatiga ega. Sanʼatkor oʻz ongi va tili yordamida ichki mantiqiy qonuniyatlarga ega «Ikkilamchi Dunyo» (Secondary World) barpo etadi. Agar bu dunyo ichki izchillikka ega boʻlsa, kitobxon unda «Ikkilamchi Ishonch» (Secondary Belief) hissini tuyadi. Bu shunchaki koʻngilxushlik yoki xomxayol emas, balki haqiqatni yangi rakursdan anglash usulidir."
    },
    {
      title: "Ertaklarning toʻrtta buyuk vazifasi: Qutulish, Tiklanish, Qochish va Taskin",
      content: "Tolkien haqiqiy ertak toʻrtta muhim psixologik va maʼnaviy vazifani bajarishini taʼkidlaydi: 1. Tiklanish (Recovery) — kundalik hayotda xiralashib qolgan nigohimizni tozalab, oddiy narsalarni (daraxt, tosh, non, suv) yangidan moʻjiza sifatida koʻrish; 2. Qochish (Escape) — zamonaviy texnogen dunyoning shovqini, fabrikalar, mashinalar va urush qabohatidan ruhiy ozodlikka chiqish; 3. Tasalli (Consolation) — oʻlim, yoʻqotish va fojia oldida inson ruhiga umid berish; 4. Eucatastrophe — asarning eng kutilmagan, fojia muqarrar koʻringan damda toʻsatdan yuz beruvchi ezgu burilish. Bu burilish inson qalbida shodlik koʻz yoshlarini keltirib chiqaradi va koinotning asosida yakuniy Ezgulik yotganidan dalolat beradi."
    },
    {
      title: "«Mythopoeia» va kitobning adabiyotshunoslikdagi inqilobiy oʻrni",
      content: "Kitobning keyingi nashrlariga Tolkienning C.S. Lewis bilan bahsida yozilgan mashhur «Mythopoeia» (Afsona yaratish) dostoni kiritildi. Lewis dastlab miflar «chiroyli yolgʻonlar» ekanini aytganida, Tolkien inson tili va afsonalari orqali abadiy haqiqatning nurlari sinishini sheʼriy misralarda isbotlab bergan edi. «Daraxt va Barg» asari XX asr adabiyotshunosligida fantastika va fentezi janrlarini past baholash anʼanasiga chek qoʻydi va zamonaviy mifshunoslik falsafasining poydevoriga aylandi."
    }
  ];
  return b;
});

// 21. Tales from the Perilous Realm
updateBook('tales-from-the-perilous-realm', b => {
  b.cover_image = {
    src: '/images/books/tales-from-the-perilous-realm.webp',
    alt: 'Xatarli Saltanat Qissalari muqovasi (HarperCollins, 2008) — Alan Lee chizgan bahaybat oltin ajdar Chrysophylax va ritsar',
    edition_title: 'Definitive Expanded Edition (HarperCollins, 2008)',
    publisher: 'HarperCollins',
    year: 1997,
    isbn: '978-0-00-725754-6',
    artist: 'Alan Lee',
    source: 'HarperCollins / British Library'
  };
  b.synopsis = "«Xatarli Saltanat Qissalari» (Tales from the Perilous Realm) — J.R.R. Tolkienning Oʻrta-yer chegarasidan tashqaridagi eng mashhur qisqa qissalari, ertaklari va sheʼrlarini oʻz ichiga olgan fundamental toʻplam. 1997-yilda chop etilgan va 2008-yilda Alan Leening keng qamrovli qalamtasvir va rangli illyustratsiyalari hamda mashhur olim Tom Shippeyning ilmiy soʻzboshisi bilan boyitilgan ushbu mukammal nashr oʻz ichiga «Roverandom», «Farmer Giles of Ham», «The Adventures of Tom Bombadil», «Smith of Wootton Major», «Leaf by Niggle» asarlarini hamda Tolkienning «On Fairy-Stories» nazariy inshosini jamlagan.";
  b.detailed_sections = [
    {
      title: "Toʻplamning kontseptual yaxlitligi va «Xatarli Saltanat» tushunchasi",
      content: "«Xatarli Saltanat» (The Perilous Realm) iborasi Tolkien ijodida Sehrli Dunyo (Faerie) tushunchasining sinonimi hisoblanadi. Bu dunyo bolalar uchun qiziqarli oʻyinchoq emas, balki chuqur xavf-xatarlar, sirli qonuniyatlar, oʻlmas goʻzallik va jiddiy maʼnaviy sinovlar makonidir. Ushbu toʻplamdagi har bir asar — xoh u kuchukcha Roverning Oydagi sayohati boʻlsin, xoh temirchining elflar malikasi bilan uchrashuvi boʻlsin — insonning oʻz oddiy dunyosi chegarasidan chiqib, gʻayritabiiy olam bilan toʻqnashuvi jarayonini tahlil qiladi."
    },
    {
      title: "Alan Leening illyustratsion sintezi va Tom Shippey tahlili",
      content: "2008-yilgi kengaytirilgan nashrning eng katta fazilati Alan Leening oltmishdan ortiq yangi rasmlari bilan bezatilganidir. Lee ushbu rasmlarda oʻziga xos tumanli, qadimiy akvarel uslubidan foydalanib, har bir ertakning individual ruhini ochib bergan. Kitobga Oksford va Lids universitetlari professori, yetakchi Tolkienshunos Tom Shippey yozgan soʻzboshi kiritilgan. Shippey unda Tolkien qisqa nasrining har bir detalida yashiringan chuqur filologik oʻyinlar, qadimgi rivoyatlar bilan uzviy bogʻliqlik va muallifning oʻziga xos kinoyali yumorini batafsil yoritib beradi."
    },
    {
      title: "Toʻplam tarkibidagi asarlarning ichki polifoniyasi",
      content: "Kitob oʻquvchiga Tolkien isteʼdodining barcha qirralarini bir joyda koʻrish imkonini beradi. «Roverandom» yosh bolalar uchun begʻubor quvnoqlik baxsh etsa, «Farmer Giles of Ham» oʻrta asr ritsarlik dostonlarini nozik satira ostiga oladi. «The Adventures of Tom Bombadil» kitobxonga Oʻrta-yer poetikasining boy musiqiyligini taqdim etadi. «Leaf by Niggle» rassomning oʻlim va narigi dunyo haqidagi fojiaviy allegoriyasi boʻlsa, «Smith of Wootton Major» inson umrining poyonida sehrli dunyo bilan xayrlashuvining mungli madhiyasidir."
    },
    {
      title: "Oʻzbek kitobxonlari uchun ahamiyati",
      content: "Ushbu toʻplam oʻzbek kitobxoniga Tolkienni faqat ulkan epopeyalar («Uzuklar Hukmdori», «Silmarillion») muallifi sifatidagina emas, balki qisqa ertak va psixologik novella janrining tengsiz ustasi sifatida kashf etishga yordam beradi. Kitobdagi asarlar ixcham hajmiga qaramasdan, insoniylik, kamtarlik, tabiatga mehr va kibrdan xoli boʻlish kabi abadiy qadriyatlarni bolalarga ham, kattalarga ham birdek tushunarli tilda uqtiradi."
    }
  ];
  return b;
});

// 22. Roverandom
updateBook('roverandom', b => {
  b.cover_image = {
    src: '/images/books/roverandom.webp',
    alt: 'Roverandom birinchi nashri original changqopi (HarperCollins, 1998) — J.R.R. Tolkien chizgan Suvosti Qirolining Bogʻlari (The Gardens of the Merking)',
    edition_title: 'First Edition (HarperCollins, 1998)',
    publisher: 'HarperCollins',
    year: 1998,
    isbn: '978-0-261-10353-5',
    artist: 'J.R.R. Tolkien',
    source: 'HarperCollins / British Library'
  };
  b.synopsis = "«Roverandom» (Roverandom) — J.R.R. Tolkien tomonidan 1925-yilda oʻzining toʻrt yoshli oʻgʻli Michael Filey sohilidagi qumloqda oʻzining sevimli oʻyinchoq kuchukchasini yoʻqotib qoʻyib yigʻlaganida, uni yupatish maqsadida toʻqilgan va 1998-yilda Christina Scull hamda Wayne G. Hammond tomonidan ilmiy izohlar bilan chop etilgan goʻzal ertak. Unda sehrgarni tishlab olgani uchun oʻyinchoqqa aylantirib qoʻyilgan oq-qora kuchukcha Roverning qanot chiqarib Oyga uchishi, Oydagi Sehrgar va Oy Kuchugi bilan sarguzashtlari, soʻngra okean qaʼridagi Dengiz Sehrgari va Suvosti Qirolligiga tushishi qiziqarli tarzda hikoya qilinadi.";
  b.detailed_sections = [
    {
      title: "Haqiqiy voqea va mehrli ota tasavvuri",
      content: "1925-yil sentabrida Tolkien oilasi bilan Yorkshir sohilidagi Filey shaharchasida dam olayotgan edi. Kichik oʻgʻli Michael qoʻlidagi qoʻrgʻoshin va emaldan yasalgan oq-qora kichkina oʻyinchoq kuchukchasini qum orasiga tushirib yoʻqotib qoʻyadi. Ota va bolalar qumlarni qancha qidirmasin, oʻyinchoq topilmaydi va bola qattiq xafa boʻladi. Shunda Tolkien oʻgʻliga taskin berish uchun ertak toʻqiydi: oʻyinchoq yoʻqolmagan, balki u aslida tirik kuchukcha boʻlib, uni sehrgar oʻyinchoqqa aylantirib qoʻygan va u hozir qanot chiqarib buyuk sarguzashtlar sari yoʻl olgan."
    },
    {
      title: "Roverning Oydagi sarguzashtlari va Oydam Odam",
      content: "Kuchukcha qumloqda uxlab yotganida, sirli dengiz chaykasi Mew uni oʻz qanotida Oyga olib uchadi. Oyga yetib borgach, Rover bu yerdagi Oy Sehrgari (The Man in the Moon) va uning qanotli iti (u ham Rover deb atalgani uchun bizning qahramonimizga «Roverandom» — «Tasodifiy Rover» deb laqab qoʻyishadi) bilan doʻstlashadi. Ular Oyning orqa qorongʻu tomonida yashovchi Buyuk Oq Ajdarni quvadilar va yulduzlar shudringidan bahramand boʻladilar. Biroq Rover oʻzining asl it qiyofasini tiklashni orzu qiladi."
    },
    {
      title: "Dengiz tubidagi olam: Merking bogʻlari va dengiz iloni",
      content: "Oy Sehrgari Roverandomni yerga qaytarib, uni Dengiz Sehrgari Psamathos Psamathides huzuriga yuboradi. Rover maxsus nafas oluvchi pufak ichida okeanning eng tubsiz qaʼriga tushadi. U yerda u Suvosti Qirolining Bogʻlarini (The Gardens of the Merking), suv parilari va qadimiy kemalar qoldiqlarini koʻradi. Dengiz tubida u uxlab yotgan Buyuk Dengiz Ilonini uygʻotib yuboradi va butun okean toʻlqinlanib ketadi. Jasur kuchukcha xatoni toʻgʻrilab, ilonni tinchlantirishga yordam beradi."
    },
    {
      title: "Tolkienning oʻz chizmalari va Oʻrta-yer bilan yashirin aloqalari",
      content: "Ushbu kitob Tolkienning shaxsan oʻzi chizgan ajoyib beshta rangli illyustratsiyasi bilan bezatilgan. Ayniqsa «The Gardens of the Merking» polotnosi oʻzining koral riflari, suvosti saroylari va yashil tuslari bilan hayratlanarlidir. Qiziq jihati shundaki, ertakda Oʻrta-yer mifologiyasining dastlabki kurtaklari uchraydi: Rover Oydan turib uzoq gʻarbda porlab turgan Boqiy Yerlarni (Valinorni) va Elflar shahrini koʻradi. 1998-yilda chop etilgan ushbu nashr bolalar adabiyotining sof javohiridir."
    }
  ];
  return b;
});

// 23. The Story of Kullervo
updateBook('the-story-of-kullervo', b => {
  b.cover_image = {
    src: '/images/books/the-story-of-kullervo.webp',
    alt: 'Kullervo Qissasi birinchi nashri original changqopi (HarperCollins, 2015) — J.R.R. Tolkien chizgan qora koʻl uzra porlayotgan oy va Pohja zamini',
    edition_title: 'First Edition (HarperCollins, 2015)',
    publisher: 'HarperCollins',
    year: 2015,
    isbn: '978-0-00-813136-4',
    artist: 'J.R.R. Tolkien',
    source: 'HarperCollins / British Library'
  };
  b.synopsis = "«Kullervo Qissasi» (The Story of Kullervo) — J.R.R. Tolkienning 1914–1915-yillarda Oksford universiteti talabasi boʻlgan chogʻida yozgan, ammo yuz yil davomida eʼlon qilinmay kelgan, fin eposi «Kalevala» motivlari asosidagi ilk nasriy fojiasi. 2015-yilda mashhur Tolkienshunos olima Verlyn Flieger tomonidan ilmiy tadqiqotlar va Tolkienning «Kalevala haqida»gi insholari bilan birga chop etilgan. Asar butun Oʻrta-yer legendariumining, xususan Túrin Turambar obrazining toʻgʻridan-toʻgʻri adabiy kurtagi boʻlib, qora qismat, qasos va qahramonning oʻz qilichi ustiga yiqilib jon berishi jarayonini qalamga oladi.";
  b.detailed_sections = [
    {
      title: "Fin tili kashfiyoti va «Kalevala» sehri",
      content: "1911-yilda yosh Tolkien Oksford kutubxonasida fin tili grammatikasini topib oldi. U bu kashfiyotdan shunchalik hayajonlangan ediki, uni «sharobga toʻla qadimiy yertoʻlaga kirib qolgan odamning sarxushligi»ga qiyoslagan. Fin tili Tolkienning elflar tili — Quenyaning asosiy fonetik va grammatik poydevoriga aylandi. Elias Lönnrot toʻplagan «Kalevala» dostonining 31–36-runalari (Kullervo fojiasi) Tolkienni chuqur larzaga soldi va u ushbu sheʼriy xalq eposini ingliz tilida oʻziga xos ritmik nasriy dostonga aylantirishga qaror qildi."
    },
    {
      title: "Kullervo — laʼnatlangan yetim va qasos yoʻli",
      content: "Kullervo (Kalervo oʻgʻli) yoshligida butun oilasi amakisi Untamo tomonidan qirib tashlangan fojiaviy yetimdir. U gʻayritabiiy jismoniy kuch bilan tugʻiladi, ammo har qanday ishga qoʻl urmasin, halokat keltiradi: unga beshik tebratish topshirilsa bolani nobud qiladi, oʻtin chopishga yuborilsa butun oʻrmonni yakson qiladi. Untamo uni temirchi Ilmarinenga qul qilib sotadi. Ilmarinenning yovuz xotini Kullervoga berilgan non ichiga qattiq tosh yashirib qoʻyadi; Kullervo otasidan qolgan yagona meros boʻlgan pichoq bilan nonni kesayotganda tigʻ sinadi. Qattiq gʻazablangan qahramon ayiqlar va boʻrilarni podaga chorlab, bekachani parchalab tashlaydi va qasos olish uchun oʻrmonlarga qochadi."
    },
    {
      title: "Adashgan qismat va gapiruvchi qilich",
      content: "Oʻrmonda u tasodifan oʻz singlisiga duch keladi, ammo ular bir-birlarini tanimay yaqinlik qiladilar. Haqiqat fosh boʻlgach, singlisi sharsharaga sakrab oʻzini oʻldiradi. Kullervo Untamo qishlogʻiga bostirib borib, butun urugʻdan qonli qasos oladi. Vataniga qaytgach, oʻz uyining ham huvillab qolganini koʻradi. Ruhiy azoblardan toʻygan Kullervo oʻz qilichiga boqadi va undan: «Ey mening tigʻim, begunoh insonning goʻshtini kesishga tayyormisan?» deb soʻraydi. Qilich unga javob beradi: «Nega yoʻq? Men begunoh qonni ham, aybdor qonni ham ichganman, seni ham jon deb qabul qilaman». Kullervo qilich dastasini yerga qadab, oʻzini tigʻ ustiga tashlaydi."
    },
    {
      title: "Tolkien ijodidagi oʻrni: Túrin Turambarning ibtidosi",
      content: "«Kullervo Qissasi» shunchaki tarjima yoki qayta hikoya emas; u Tolkienning mustaqil mifologiya yaratish sari qoʻygan birinchi qadami edi. Tolkien Kullervo obrazini deyarli oʻzgarishsiz Oʻrta-yerga koʻchirib oʻtkazdi: Túrin Turambar ham qora qismat qurboni boʻladi, singlisi Nienor bilan fojiaviy nikoh quradi va oxir-oqibat oʻzining gapiruvchi qora qilichi Gurthang ustiga yiqiladi. Verlyn Fliegerning ushbu nashri Tolkienning shakllanish davrini oʻrganishda tengsiz durdonadir."
    }
  ];
  return b;
});

// 24. The Legend of Sigurd and Gudrún
updateBook('the-legend-of-sigurd-and-gudrun', b => {
  b.cover_image = {
    src: '/images/books/the-legend-of-sigurd-and-gudrun.webp',
    alt: 'Sigurd va Gudrún Afsonasi birinchi nashri original changqopi (HarperCollins, 2009) — Norvegiyadagi Xilestad yogʻoch cherkovidan olingan Sigurd va tulpor Grani naqshi',
    edition_title: 'First Edition (HarperCollins, 2009)',
    publisher: 'HarperCollins',
    year: 2009,
    isbn: '978-0-00-731723-3',
    artist: 'HarperCollins Editorial',
    source: 'HarperCollins / British Library'
  };
  b.synopsis = "«Sigurd va Gudrún Afsonasi» (The Legend of Sigurd and Gudrún) — J.R.R. Tolkien tomonidan 1930-yillarda Oksford universiteti professori boʻlgan davrida qadimgi island fornyrðislag (qadimgi ertaklar vazni) alliterativ sheʼriy shaklida ingliz tilida yozilgan, Christopher Tolkien tomonidan 2009-yilda nashr etilgan monumental poetik asar. Kitob skandinav mifologiyasining eng buyuk dostoni boʻlgan «Völsunga saga» va «Poetik Edda» voqealarini qayta tiklaydi. Unda afsonaviy bahodir Sigurd Völsungning ajdar Fafnirni oʻldirishi, Valkiriya Brynhild bilan fojiaviy sevgisi hamda Burgundiya qirollari saroyidagi xiyonat va Gudrúnning dahshatli qasosi hikoya qilinadi.";
  b.detailed_sections = [
    {
      title: "Qadimgi Skandinav poetikasi va fornyrðislag vazni",
      content: "Tolkien qadimgi island adabiyotining eng yirik bilimdoni edi. «Poetik Edda» qoʻlyozmasida Sigurd va Brynhild haqidagi eng muhim boblar (Buyuk Boʻshliq — Great Lacuna) yirtilib yoʻqolgan boʻlib, dostonning asl sheʼriy yaxlitligi asrlar davomida uzilib qolgan edi. Tolkien oʻzining tengsiz filologik mahorati bilan oʻsha yoʻqolgan dostonlarni qadimgi islandlarning sakkiz misrali fornyrðislag vaznida (har bir misrada qatʼiy alliteratsion urgʻular bilan) ingliz tilida qayta yaratdi. Asar ikki yirik dostondan iborat: «Völsungakviða en nýja» (Yangi Völsunglar dostoni) va «Guðrúnarkviða en nýja» (Yangi Gudrún dostoni)."
    },
    {
      title: "Sigurd, Ajdar Fafnir va Laʼnatlangan Oltin",
      content: "Birinchi doston Odin, Hœnir va Loki tomonidan Andvari pakana mitti odamdan tortib olingan laʼnatlangan oltin va sehrli uzuk tarixi bilan boshlanadi. Bu oltin kimning qoʻliga tushsa, halokat keltiradi. Mitti Fafnir oʻz otasini oʻldirib, oltinni egallaydi va Gnitaheid dashtida ulkan ochkoʻz ajdarga aylanadi. Bahodir Sigurd qadimiy Gram qilichi bilan yerga chuqur qazib yashirinadi va oʻtib ketayotgan ajdarning qorniga pastdan zarba berib uni oʻldiradi. U Fafnirning qonini tatib koʻrgach, qushlar tilini tushuna boshlaydi va oʻz tarbiyachisi Reginning xiyonatkor niyatini bilib, uni qatl qiladi."
    },
    {
      title: "Brynhild olovi va Nibelunglar xiyonati",
      content: "Sigurd Hindarfjall choʻqqisida olov devori bilan oʻralgan qasrga kirib, u yerda uxlab yotgan Valkiriya Brynhildni uygʻotadi va unga boqiylik uzugini taqib, abadiy sadoqat qasamini ichadi. Biroq Burgundiya shohligi saroyiga kelganida, qirolicha Grimhild unga sehrli ichimlik ichirib, Brynhild haqidagi xotirasini butunlay oʻchiradi. Sigurd Burgundiya malikasi Gudrúnga uylanadi va oʻz qiyofasini oʻzgartirib, Brynhildni aldab qirol Gunnar nomidan xotinlikka olib beradi. Haqiqat fosh boʻlgach, Brynhildning cheksiz gʻazabi butun sulolani halokatga yetaklaydi: u Gunnarni Sigurdni oʻldirishga majbur qiladi va Sigurd vafot etgach, uning olovli gulxani ustida oʻz joniga qasd qiladi."
    },
    {
      title: "Gudrúnning dahshatli qasosi va Attila saroyi",
      content: "Ikkinchi doston Sigurdning bevasi Gudrúnning qismatini yoritadi. U gunnlar podshosi Atli (Attila)ga majburan turmushga beriladi. Atli Burgundiya oltinlariga egalik qilish uchun uning akalari Gunnar va Hogniyni mehmonga chaqirib, shafqatsizlarcha qatl etadi. Gudrún oʻz qoniga qilingan bu xiyonat uchun Atlidan dahshatli qasos oladi: u Atlidan tugʻilgan ikki oʻgʻlini oʻldirib, qonini sharobga qoʻshib podshoga ichiradi, soʻngra tunda saroyni yoqib, oʻzini dengiz toʻlqinlariga tashlaydi. Kitob Tolkienning epik fojia va qadimgi shimoliy qahramonlik etikasiga qoʻygan eng yuksak haykalidir."
    }
  ];
  return b;
});

// 25. The Fall of Arthur
updateBook('the-fall-of-arthur', b => {
  b.cover_image = {
    src: '/images/books/the-fall-of-arthur.webp',
    alt: 'Arturning Qulashi birinchi nashri original changqopi (HarperCollins, 2013) — oʻrta asr tosh gravyurasi asosidagi qirol Arthur va otliq ritsarlar tasviri',
    edition_title: 'First Edition (HarperCollins, 2013)',
    publisher: 'HarperCollins',
    year: 2013,
    isbn: '978-0-00-748994-7',
    artist: 'HarperCollins Editorial',
    source: 'HarperCollins / British Library'
  };
  b.synopsis = "«Arturning Qulashi» (The Fall of Arthur) — J.R.R. Tolkienning qadimgi alliterativ vaznda (Old English alliterative meter) yozilgan, ammo tugallanmay qolgan eng yirik ingliz epik dostoni. 1930-yillarda yozilib, 2013-yilda Christopher Tolkien tomonidan toʻliq matnshunoslik sharhlari bilan chop etilgan. Asar fransuzcha saroy ishqiy romanlari (Courtly Romance) taʼsiridan xoli holda, afsonaviy qirol Arthurni qadimgi brit va anglo-sakson jangovar dostonlari anʼanasida qayta tasvirlaydi. Unda Arthurning sharqdagi saksonlarga qarshi yurishi, jiyani Mordredning taxtni egallab olishi, Guinevere vasvasasi va Lancelotning fojiaviy dardi hikoya qilinadi.";
  b.detailed_sections = [
    {
      title: "Alliterativ qayta tiklanish va asarning gʻoyasi",
      content: "Tolkien ingliz adabiyotining eng mashhur mifologik sikli — Qirol Arthur afsonasiga oʻzgacha yondashdi. U Thomas Malorining «Le Morte d'Arthur» kitobidagi kechki fransuzcha sentimentallik va saroy qoidalarini chetga surib, asarni qadimgi «Beowulf» davridagi qattiqqoʻl, vazmin va viqorli alliterativ vaznga koʻchirdi. Doston deyarli ming misrani tashkil etib, beshta kantoga boʻlingan. Bu Tolkienning milliy ingliz qahramonlik dostonini yaratishdagi eng dadil va jiddiy sheʼriy tajribasi edi."
    },
    {
      title: "Doston syujeti: Sharqiy yurish va Mordred fitnasi",
      content: "Doston Arthur va uning eng sodiq sarkardasi Sir Gawainning dengiz ortiga, sakson va butparast qabilalarga qarshi sharqqa («Mirkwood» deb atalgan qorongʻu oʻrmonlar sari) qilgan buyuk harbiy yurishi bilan boshlanadi. Qirol uzoqda ekanligida, uning noibi qilib qoldirilgan sotqin Mordred hokimiyatni tortib oladi. Mordred nafaqat taxtni, balki malika Guinevereni ham zoʻrlik bilan oʻziga xotin qilishga intiladi. Guinevere Camelotdan qochib, oʻzining oʻtmishdagi xatolari — Lancelot bilan nojoʻya muhabbati qirollikning parchalanishiga sabab boʻlayotganini anglab, chuqur iztirob chekadi."
    },
    {
      title: "Lancelot fojiasi va Christopher Tolkienning rekonstruksiyasi",
      content: "Tolkien dostonni Camlann jangiga yetkazmasdan toʻxtatgan boʻlsa-da, uning qoralamalarida doston qanday tugashi kerakligi batafsil saqlanib qolgan. Arthur vataniga qaytib keladi va Dover sohilida dahshatli jang boʻladi. Lancelot dengiz ortidagi Benwick qasrida oʻz gunohlaridan pushaymon boʻlib yotadi; u Arthurni qutqarish uchun shoshiladi, ammo juda kech yetib keladi. Christopher Tolkien kitobning ikkinchi yarmida otasining barcha rejalari, qoralamalari va manbalarini (ayniqsa XIV asr alliterativ «Morte Arthure» dostonini) sinchiklab tahlil qilib, dostonning kutilgan yakunini ilmiy rekonstruksiya qiladi."
    },
    {
      title: "«The Silmarillion» bilan tematik va poetik bogʻliqlik",
      content: "Christopher Tolkien taʼkidlaganidek, «The Fall of Arthur» dostoni Tolkienning oʻz Oʻrta-yer afsonalari, xususan Númenorning qulashi va Eärendil safari dostonlari bilan bir vaqtda yozilgan. Undagi dengiz tasvirlari, qadimgi oʻlkalarning gʻarq boʻlishi va qahramonlarning orqaga qaytmas yoʻqotish tuygʻusi «Silmarillion» bilan bir xil maʼnaviy ildizga ega. Ushbu nashr Tolkienning alliterativ sheʼriyat boʻyicha XX asrdagi eng buyuk virtuoz boʻlganini yana bir bor tasdiqlaydi."
    }
  ];
  return b;
});

// 26. Beowulf: The Monsters and the Critics
updateBook('beowulf-the-monsters-and-the-critics', b => {
  b.cover_image = {
    src: '/images/books/beowulf-the-monsters-and-the-critics.webp',
    alt: 'Maxluqlar va Tanqidchilar birinchi nashri original changqopi (George Allen & Unwin, 1983) — toʻq koʻk fondagi oltin harflar',
    edition_title: 'First Edition (George Allen & Unwin, 1983)',
    publisher: 'George Allen & Unwin',
    year: 1983,
    isbn: '978-0-04-809019-5',
    artist: 'George Allen & Unwin Editorial',
    source: 'George Allen & Unwin / British Library'
  };
  b.synopsis = "«Maxluqlar va Tanqidchilar hamda Boshqa Insholar» (The Monsters and the Critics and Other Essays) — J.R.R. Tolkienning eng muhim yetti akademik maʼruzasi va ilmiy insholarini jamlagan, Christopher Tolkien tomonidan 1983-yilda chop etilgan fundamental toʻplam. Kitobning markaziy asari — Tolkienning 1936-yilda Britaniya Akademiyasida oʻqigan «Beowulf: The Monsters and the Critics» maʼruzasi boʻlib, u jahon adabiyotshunosligida inqilob yasagan va «Beowulf» dostonini tarixiy hujjat emas, balki buyuk poetik sanʼat asari sifatida qayta kashf etgan.";
  b.detailed_sections = [
    {
      title: "«Beowulf: The Monsters and the Critics» (1936) inqilobi",
      content: "1936-yilgacha akademik adabiyotshunoslikda «Beowulf» dostoni faqat qadimgi ingliz tili grammatikasi, tarixiy shaxslar va arxeologik faktlarni qidirish vositasi deb hisoblanar edi. Olimlar doston markazidagi Grendel, uning onasi va Ajdarni «bolalarcha bemaʼnilik» deb atab, shoirni jiddiy tarixiy voqealar oʻrniga maxluqlarni markazga qoʻyganlikda ayblashardi. Tolkien oʻz maʼruzasida barcha tanqidchilarni qatʼiy rad etdi: u dostonning butun maʼnosi aynan Maxluqlar bilan kurashda ekanini koʻrsatib berdi. Maxluqlar — bu insoniyatning muqarrar dushmani boʻlgan Vaqt, Oʻlim va Qorongʻulik ramzidir; inson har qancha jasur boʻlmasin, jismoniy jihatdan oxir-oqibat yengiladi, biroq uning magʻlubiyat oldida ham or-nomus bilan kurashishi Shimoliy jasoratning eng oliy choʻqqisidir."
    },
    {
      title: "Minor allegoriyasi: Qadimgi toshlar va yangi qasr",
      content: "Tolkien oʻz inshosida mashhur allegoriyani keltiradi: bir odam oʻz yeridagi qadimiy toshlardan foydalanib baland minora quradi. Minora tepasiga chiqqan kishi dengiz va ufqning cheksiz goʻzalligini koʻra oladi. Ammo uning orqasidan kelgan odamlar minorani buzib, toshlarni kavlab: «Bu yerda toshlar qayerdan kelganini oʻrganishimiz kerak!» deb qazishga tushadilar va minoradan koʻrinadigan cheksiz dengiz manzarasini butunlay unutadilar. Tolkien tanqidchilarni aynan shu minorani buzuvchilarga qiyoslaydi va «Beowulf»ni sanʼat minorasi sifatida butunligicha qabul qilishga chaqiradi."
    },
    {
      title: "«A Secret Vice» va «On Translating Beowulf» insholari",
      content: "Toʻplamga kirgan boshqa insholar ham Tolkien dunyosini tushunishda beqiyos ahamiyatga ega. «A Secret Vice» (Yashirin qusur) inshosida Tolkien oʻzining yoshlikdan boshlab sunʼiy tillar (Elvish tillari) yaratishga boʻlgan ehtirosi, fonetik goʻzallik va til bilan mifologiyaning ajralmas birligi haqida ilk bor ochiq soʻzlaydi. «On Translating Beowulf» esa qadimgi sheʼriyatni tarjima qilish qoidalari, alliteratsiya ritmi va soʻzlarning tarixiy jarangdorligini saqlash boʻyicha oliy darslikdir."
    },
    {
      title: "«Sir Gawain» va «Vales of Welcoming»: Akademik meros",
      content: "Shuningdek, toʻplamda Tolkienning Oksforddagi vidolashuv maʼruzasi («Valedictory Address»), Oʻrta asr ritsarlik sheʼriyatiga bagʻishlangan maʼruzalari hamda Uels tili va madaniyatining ingliz adabiyotiga taʼsiri haqidagi «English and Welsh» inshosi joy olgan. Ushbu kitob Tolkienning shunchaki yozuvchi emas, balki Oksford universitetining XX asrdagi eng yirik filolog olimlaridan biri boʻlganini toʻliq isbotlaydi."
    }
  ];
  return b;
});

// 27. Finn and Hengest
updateBook('finn-and-hengest', b => {
  b.cover_image = {
    src: '/images/books/finn-and-hengest.webp',
    alt: 'Finn va Hengest kitobi muqovasi (HarperCollins, 2006) — Ted Nasmith chizgan dubulgʻali va qalqonli qadimgi anglo-sakson jangchilari',
    edition_title: 'HarperCollins Paperback Edition (2006)',
    publisher: 'HarperCollins / George Allen & Unwin',
    year: 1982,
    isbn: '978-0-261-10359-7',
    artist: 'Ted Nasmith',
    source: 'HarperCollins / British Library'
  };
  b.synopsis = "«Finn va Hengest: Parvozi va Epizod» (Finn and Hengest: The Fragment and the Episode) — J.R.R. Tolkienning Oksford universitetida 1920–1930-yillarda oʻqigan maʼruzalari asosida professor Alan Bliss tomonidan tahrir qilinib, 1982-yilda chop etilgan yuksak ilmiy-filologik monografiya. Asar V asrdagi qadimgi germaniy qabilalari — frizlar, danlar va yutlar oʻrtasidagi fojiaviy urushni qalamga olgan ikki qadimiy manba: «Finnsburg parchasi» (The Fight at Finnsburg) va «Beowulf» dostonidagi «Finnsburg epizodi»ni qiyosiy-tarixiy tahlil qiladi.";
  b.detailed_sections = [
    {
      title: "Qadimgi matnlarning sirlari va Tolkien gipotezasi",
      content: "V asrga oid Finnsburg jangi qadimgi qahramonlik dostonlarining eng qorongʻu va bahsli epizodlaridan biridir. Bir tomonda qadimgi qoʻlyozmadan koʻchirilgan, ammo asl nusxasi yoʻqolgan 48 misrali «Jang parchasi», ikkinchi tomonda esa «Beowulf» dostoni qahramoni Hrothgar saroyida baxshi kuylagan 90 misrali lirik-epik «Epizod» turardi. Uzoq vaqt davomida tarixchilar ushbu ikki matndagi shaxslar, ittifoqlar va millatlarning chalkashligini yecha olmagan edilar. Tolkien oʻzining tengsiz lingvistik tahlili bilan ushbu voqealarning toʻliq xronologik va genealogik zanjirini tiklab berdi."
    },
    {
      title: "Finnsburg qalʼasi qamali va fojiaviy nizo",
      content: "Voqealar Frizlar qiroli Finn saroyida kechadi. Finn Danlar malikasi Hildeburhga uylangan boʻlib, bu nikoh ikki dushman xalq oʻrtasida sulh oʻrnatishi kerak edi. Biroq malikaning ukasi Hnaef boshchiligidagi 60 nafar dan jangchisi saroyga mehmonga kelganida, tunda xoinona hujumga uchraydilar. Danlar saroyning ikki darvozasini besh kun davomida qahramonlarcha himoya qiladilar. Jangda Hnaef ham, Finning oʻgʻli ham halok boʻladi. Qonli durangdan soʻng ikki tomon qish fasli uchun majburiy sulh tuzadilar, biroq qalbida qasos oʻti yongan Hnaefning oʻrinbosari Hengest bahor kelganda qasamyodini yangilaydi va Finn saroyini yoqib, qirolni qatl etadi."
    },
    {
      title: "Hengest va Britaniyaning anglo-saksonlar tomonidan zabt etilishi",
      content: "Tolkien monografiyasining eng muhim tarixiy xulosasi — ushbu dostondagi Hengest aynan V asr oʻrtalarida Britaniyaga kemalarda bostirib kelib, Kent qirolligiga asos solgan afsonaviy Hengest (Hengest va Horsa) bilan bir shaxs ekanligini isbotlashidir. Tolkien Hengestning Yutlar (Jutes) qabilasidan boʻlganini, Finnsburg fojiasidan soʻng uning qanday qilib Shimoliy dengizdan oʻtib, Britaniya tarixining yangi sahifasini ochganini tilshunoslik dalillari bilan koʻrsatib beradi."
    },
    {
      title: "Alan Blissning mehnati va kitobning akademik qiymati",
      content: "Tolkien vafotidan soʻng Dublin universitet kolleji professori Alan Bliss yozuvchining qoralamalarini tartibga solib, matnlarning toʻliq glossariysi (qadimgi inglizcha lugʻati), grammatik sharhlari va tarixiy xaritalarini tayyorladi. Ushbu kitob Tolkienning shunchaki ertakchi emas, balki qadimgi Yevropa qabilalarining migratsiyasi, qonunlari va qahramonlik etikasini zarrabin ostida oʻrgangan ulkan olim boʻlganining yana bir yorqin dalilidir."
    }
  ];
  return b;
});

console.log("✓ Part 3 kitoblar muvaffaqiyatli yangilandi!");
