const fs = require('fs');
const path = require('path');
const booksDir = path.resolve('src/content/books');

function addSection(id, section) {
  const filePath = path.join(booksDir, `${id}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  data.detailed_sections.push(section);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`✓ Added section to ${id}`);
}

addSection('the-fellowship-of-the-ring', {
  title: "Parth Galen fojiasi, Boromirning tavbasi va Ittifoqning uzilishi",
  content: "Ushbu jildning eng dramatik xotimasi Parth Galenda, Buyuk Anduin daryosi sohilidagi Amon Hen tepaligida yuz beradi. Yagona Uzukning ruhiy bosimiga dosh bera olmagan Boromir oʻz shahrini qutqarish ilinjida Frododan uzukni zoʻrlik bilan tortib olishga intiladi. Frodo koʻrinmas boʻlib qochadi va Koʻruvchi Taxtdan (Seat of Seeing) turib, dunyoning toʻrt tomonida urush olovi alanga olayotganini koʻradi. Boromir esa oʻzining xatosini darhol anglab, cheksiz iztirob va tavba bilan oʻz or-nomusini tiklashga shoshiladi. Sarumanning uruk-xaylari Merry va Pippinni oʻrab olganda, Boromir oʻzining Buyuk Gondor Shoxini chalib, yigirmadan ortiq dushmanni yer tishlatadi va koʻksiga qadalgan oʻqlar bilan qahramonlarcha jon beradi. Aragorn uning soʻnggi nafasiga yetib kelganida, Boromir: «Men muvaffaqiyatsizlikka uchradim, Uzukni olmoqchi boʻldim», deydi. Aragorn esa: «Yoʻq! Sen gʻalaba qozonding, kam sonli kishilar erishadigan gʻalabaga erishding!» deya uning yuzidan oʻpadi. Bu sahna asardagi eng buyuk fojiaviy va olijanob kechirim timsolidir."
});

addSection('the-two-towers', {
  title: "Cirith Ungol dovoni va Samwise Gamgeening buyuk sinovi",
  content: "IV kitobning soʻnggi bobi — «The Choices of Master Samwise» butun Oʻrta-yer adabiyotidagi eng ogʻir psixologik burilish nuqtasidir. Qadimiy oʻrgimchak Shelob Frodoni falaj qilib tashlaganida, Sam oʻz hayotidagi eng dahshatli tanlov qarshisida qoladi: yo oʻz xoʻjayinining jasadi yonida yigʻlab oʻtirish va vazifani boy berish, yoki doʻstining boʻynidan Uzukni olib, yolgʻiz oʻzi Mordor ichkarisiga kirish. Sam oʻzining butun vujudi titrab turganiga qaramasdan, buyuk burch va sadoqat yoʻlini tanlaydi. U Sting xanjari bilan qorongʻu gʻorda ulkan iblisga qarshi tashlanadi va Galadriel billuri nuri bilan uni chekinishga majbur qiladi. Tolkien ushbu epizod orqali dunyodagi eng oliy qahramonlik — buyuk shon-sharaf yoki olqishlar emas, balki hech kim koʻrmaydigan, hech kim bilmaydigan qorongʻulikda qilingan jimjit va fidoiy sadoqat ekanini koʻrsatib beradi."
});

addSection('the-return-of-the-king', {
  title: "Morannon ostonasidagi soʻnggi yurish va Orodruin qutqarilishi",
  content: "VI kitobning choʻqqisi ikki bir-biriga bogʻlangan epik maydonda kechadi. Qora Darvoza oldida Gandalf va Aragorn boshchiligidagi yetti ming kishilik Gʻarb qoʻshini Sauronning oʻn barobar ustun armiyasi tomonidan qurshovga olinadi. Sauronning Ogʻzi (Mouth of Sauron) Frododan tortib olingan mithril sovutni koʻrsatib, ularni umidsizlikka tushirmoqchi boʻladi, biroq Aragorn va Gandalf taslim boʻlishdan qatʼiyan bosh tortadilar. Qora Darvoza oldida buyuk Burgutlar yetib kelib: «Burgutlar kelyapti!» degan qadimgi shior yangragan pallada, Hukm Togʻida Yagona Uzuk olov qaʼriga qulaydi. Barad-dûrning qora toshlari havoga uchadi, Sauronning butun lashkari sarosimaga tushib tarqab ketadi. Tolkien ushbu yechimda oʻzining mashhur Eucatastrophe (Kutilmagan Ilohiy Najot) qoidasini eng yuksak darajada namoyon etadi."
});

addSection('silmarillion', {
  title: "Eärendil yulduzi, Gʻazab Urushi va Beleriandning gʻarq boʻlishi",
  content: "«Quenta Silmarillion»ning soʻnggi bobi Arda tarixidagi eng buyuk kosmologik burilishni yoritadi. Barcha elflar qirolliklari (Nargothrond, Gondolin, Doriath) qulab, omon qolganlar Sirion etaklariga toʻplangan damda, Yarim-elf Eärendil oʻzining Vingilot nomli oq kemasida xotini Elwing bilan birga Boqiy Gʻarb sari suzib boradi. Uning peshonasidagi Silmaril nuri Valinor tumanlarini yorib oʻtadi va u Valar oyoqlari ostiga yiqilib, oʻlik insonlar va azoblangan elflar nomidan shafqat soʻraydi. Valar qoʻshini, Maiar va Vanyar elflari oq bayroqlar ostida Beleriandga bostirib keladilar. Gʻazab Urushi (War of Wrath) qirq yil davom etadi; Morgoth qora qanotli ajdarlar toʻdasi — Ancalagon the Blackni jangga tashlaydi, biroq Eärendil osmon orqali uchib kelib, ajdarni yanchib tashlaydi. Morgoth asir olinib, Dunyo Devorlari ortidagi Abadiy Boʻshliqqa (Void) uloqtiriladi, ammo buyuk janglar oqibatida Beleriand zamini darz ketib, Buyuk Dengiz qaʼriga butunlay gʻarq boʻladi."
});

addSection('unfinished-tales', {
  title: "Nargis maydonlari fojiasi (Disaster of the Gladden Fields)",
  content: "«Tugallanmagan Afsonalar» kitobidagi eng muhim tarixiy parchalardan biri — Isildurning Ikkinchi Davr 3441-yilda Sauron yengilganidan soʻng Shimolga, Arnor poytaxtiga qaytayotganda yuz bergan halokati haqidagi bobdir. Isildur oʻzining ikki yuz nafar saralangan Dúnedain otliqlari va uch toʻngʻich oʻgʻli (Elendur, Aratan, Ciryon) bilan Gladden daryosi vodiysidan oʻtayotganida, togʻlardan bostirib tushgan ikki mingdan ortiq orklar pistirmasiga duch keladi. Dúnedain jangchilari afsonaviy poʻlat mudofaa doirasini hosil qilib soʻnggi nafasgacha kurashadilar. Elendur otasiga Uzukni qutqarish uchun daryodan suzib qochishni yolvorib soʻraydi. Isildur Yagona Uzukni barmogʻiga taqib daryoga sakraydi, ammo Uzuk oʻz xoʻjayiniga xiyonat qilib, suv ostida barmogʻidan sirgʻalib tushadi. Suv yuziga chiqqan Isildurni orklar payqab qolib, oʻqlar bilan oʻldiradilar. Narsil qilichi parchalari Oxtar tomonidan Rivendellga yetkaziladi. Ushbu bob Yagona Uzukning Uchinchi Davrda qanday qilib yoʻqolib qolganini soatbay aniqlikda tushuntiruvchi yagona kanonik manbadir."
});

addSection('history-of-middle-earth', {
  title: "12-jild: «The Peoples of Middle-earth» va «Yangi Soya» fojiasi",
  content: "Monumental seriyaning soʻnggi oʻn ikkinchi jildi («The Peoples of Middle-earth») Tolkienning eng kechki, tugallanmagan asarlarini qamrab oladi. Ayniqsa «The New Shadow» (Yangi Soya) nomli hikoya Tolkienning inson tabiati haqidagi chuqur skeptitsizmini fosh etadi. Unda qirol Elessar (Aragorn) vafotidan yuz yil oʻtib, Toʻrtinchi Davrda Gondorda yuzaga kelgan yangi maʼnaviy inqiroz tasvirlanadi: Sauron va urushlarni koʻrmagan yosh avlod insonlari tinchlikdan zerikib, yashirin iblis kultlariga («Qora Daraxt») qiziqa boshlaydilar. Tolkien bu asarni bir necha bobdan soʻng toʻxtatgan, chunki «u faqat odamlarning noshukrligi va mayda fitnalari haqidagi qorongʻu trillerga aylanib borayotgan edi». Shuningdek, bu jildda «The Shibboleth of Fëanor» (Fëanorning talaffuz qoidasi) va elflarning nomlanish anʼanalari haqidagi tengsiz filologik tadqiqotlar oʻrin olgan."
});

addSection('the-children-of-hurin', {
  title: "Dor-lómin Ajdar dubulgʻasi va Gurthang qora qilichining siri",
  content: "Asardagi eng yorqin moddiy timsollar — bu Hador xonadonining muqaddas yodgorligi boʻlgan Dor-lómin Ajdar dubulgʻasi (Dragon-helm of Dor-lómin) hamda Eöl tomonidan osmondan tushgan qora meteorit temiridan yasalgan Gurthang («Oʻlim Temiri») qilichidir. Dubulgʻa oʻz egasini har qanday jarohatdan asragan va dushmanning yuragiga vahima solgan boʻlsa-da, u Túrinning qayerda ekanligini Morgoth aygʻoqchilariga oshkor qiluvchi qora nishonga aylanadi. Qora qilich Gurthang esa oʻzining sovuq yaltirashi va gʻayritabiiy tirik nafasi bilan doimo qonga tashna edi. Beleg Cúthalion bexosdan oʻsha qilich tigʻi bilan halok boʻlganida, qilich oʻzining yangi egasi Túrinning qoʻlida dushmanlarni qirib tashlaydi, biroq yakunda oʻz egasining ham koʻksini teshib, oʻzining soʻnggi qonli chanqogʻini qondiradi."
});

addSection('beren-and-luthien', {
  title: "Carcharoth ovi, Barahir uzugi va Mandos saroyidagi koʻz yoshlar",
  content: "Dostonning yakuniy qismi Doriath oʻrmonlarida yuz bergan Carcharoth (Qizil Ogʻiz) ovi bilan bogʻliq. Ichidagi Silmaril olovidan aqldan ozgan bahaybat boʻri Doriath sarhadlarini buzib kiradi. Qirol Thingol, Beren, Beleg Cúthalion, Mablung va sadoqatli Huan boʻriga qarshi ovga chiqadilar. Jangda Huan Carcharothning tomogʻini uzib oʻldiradi, ammo oʻzi ham zaharlangan tishlardan halok boʻladi. Berenning oʻlimidan soʻng Lúthienning ruhi Boqiy Valinordagi Mandos zallariga borib, taqdir hukmdori oldida tiz choʻkadi. Uning kuylagan qoʻshigʻi — elflarning poyonsiz qaygʻusi va insonlarning qisqa umridagi buyuk sevgisi haqidagi nolasi Mandos tarixida ilk bor tosh qalblarni erishga majbur qiladi. Bu sahna Tolkien ijodidagi eng oliy poetik choʻqqi hisoblanadi."
});

addSection('the-fall-of-gondolin', {
  title: "Sirion etaklari, qochqinlar lageri va Eärendilning tugʻilishi",
  content: "Gondolin qulaganidan soʻng omon qolgan bir hovuch elflar va insonlar Tuor hamda Idril boshchiligida Nan-tathren (Tolzor vodiysi) orqali janubga, Sirion daryosining dengizga quyiladigan etaklariga (Havens of Sirion) yetib keladilar. Bu yerda ular Doriath qulashidan omon qolgan elflar bilan birlashadilar. Tuor va Idrilning oʻgʻli Eärendil ushbu erkin bandargohda ulgʻayadi va Doriath malikasi Elwing bilan turmush quradi. Ularning vujudida Elflar (Noldor, Sindar, Vanyar) va Insonlarning (Hador, Bëor, Haleth) uchta buyuk qoni birlashadi. Tuor qariganida oʻzining «Eärrámë» (Dengiz Qanoti) kemasida gʻarb sari suzib ketadi va rivoyatlarga koʻra, insonlar orasida yagona boʻlib, elflar qatoriga qabul qilinadi. Eärendil esa butun dunyo taqdirini oʻzgartiruvchi buyuk sayohatga tayyorlanadi."
});

addSection('the-fall-of-numenor', {
  title: "Dunyoning oʻzgarishi (The Change of the World) va Toʻgʻri Yoʻl siri",
  content: "Kitobning soʻnggi xulosaviy boblarida Númenor gʻarq boʻlganidan soʻng koinotning fizik va geometrik tuzilishida sodir boʻlgan buyuk oʻzgarish bayon qilinadi. Qadimda Arda tekis zamin boʻlib, uning gʻarbiy chekkasida Boqiy Yerlar (Aman) joylashgan edi; istalgan dengizchi toʻgʻri suzib borsa Valinor sohillariga yetib borishi mumkin edi. Biroq Akallabêthdan soʻng Eru Ilúvatar dunyoni «bukib», sharsimon shaklga keltiradi; yangi yerlar va yangi dengizlar ochiladi. Aman esa jismoniy fazodan butunlay ajratilib, faqat elflarning oq kemalari va maxsus ijozat berilganlar (Frodo, Bilbo, Sam, Gimli) uchun «Toʻgʻri Yoʻl» (The Straight Road) orqali koinot egri chizigʻidan chiqib boriladigan ilohiy makonga aylanadi."
});

console.log("✓ Barcha qoʻshimcha boblar muvaffaqiyatli qoʻshildi!");
