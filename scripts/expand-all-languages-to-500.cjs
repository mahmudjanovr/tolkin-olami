const fs = require('fs');
const path = require('path');

const languagesDir = path.join(__dirname, '../src/content/languages');

const languageExpansions = {
  'quenya.json': {
    phonology_overview: "Quenya tili fonetik jihatdan qadimgi fin (Suomi) va lotin tillarining eng ohangdor unsurlariga asoslangan. Undoshlar tizimida jarangli portlovchi tovushlar (b, d, g) faqat burun undoshlari bilan birikma hosil qilgandagina uchraydi (mb, nd, ng, ld, rd). Qat'iy fonotaktik qoidalarga ko'ra, so'zlar odatda unli bilan yoki kamdan-kam hollarda t, s, n, l, r undoshlari bilan tugaydi. Bo'g'in urg'usi klassik lotin tili qonuniyatlariga o'xshash: agar o'tmishdagi bo'g'in (penult) uzun bo'lsa (uzun unli yoki qo'sh undoshdan iborat bo'lsa), urg'u unga tushadi, aks holda undan oldingi uchinchi bo'g'inga (antepenult) ko'chadi. Unlilar tizimi beshta asosiy unli (a, e, i, o, u) va ularning uzun variantlari (á, é, í, ó, ú) hamda oltita diftongdan (ai, oi, ui, au, eu, iu) tashkil topgan.",
    grammar_and_vocabulary_sections: [
      {
        title: "Elflar Lotinchasi: Fonetika, garmoniya va fonotaktika",
        content: "J.R.R. Tolkien o'zining lingvistik asarlarida Quenyani 'Elflar Lotinchasi' (Elven Latin) deb atagan, chunki u O'rta-yer tarixining Uchinchi Davrida xuddi o'rta asrlar Yevropasidagi lotin tili kabi ilmiy, marosimiy, yuksak adabiy va muqaddas til maqomiga ega bo'lgan. Tilning fonetik jozibasi fin tilining vokalik tuzilishi va boy unlilar tizimidan ilhomlangan. Undosh klasterlari nihoyatda chegaralangan: so'z boshida qo'shaloq undoshlarga deyarli yo'l qo'yilmaydi (faqat qu va bir necha yarim unlilar istisno). So'z oxirida esa faqat tish va til oldi undoshlari (t, n, r, l, s) kelishi mumkin. Bu qat'iy fonotaktik cheklovlar Quenyaga xos bo'lgan billurdek jarangdor, oquvchan va musiqiy intonatsiyani ta'minlaydi."
      },
      {
        title: "Agglyutinativ grammatika, kelishiklar va son toifalari",
        content: "Quenya grammatik jihatdan rivojlangan agglyutinativ (qo'shimchalar ulanuvchi) til hisoblanadi. Unda o'zakka ketma-ket qo'shimchalar qo'shish orqali grammatik ma'nolar yasaladi. Otlarda o'nta kelishik mavjud: bosh kelishik (nominative), qaratqich (genitive -o), tushum (accusative), egalik/kelib chiqish (possessive -va), jo'nalish (allative -nna), o'rin-payt (locative -ssë), chiqish (ablative -llo), vosita (instrumental -nen), moslashuv/respektiv (respective -s) va maqsad/dativ (-n). Son toifasida to'rtta shakl ajratiladi: birlik, ikkilik (dual - juft a'zolar yoki tabiiy juftliklar uchun, masalan maryat - 'uning ikki qo'li'), oddiy ko'plik (-r yoki -i) va umumiy/to'liq ko'plik (partitive plural -li). Fe'llar boshlang'ich (baza) va hosila (A-fe'llar) guruhlariga bo'linib, zamon, shaxs va mayl qo'shimchalari orqali tuslanadi."
      },
      {
        title: "Tarixiy evolyutsiyasi: Valinordan O'rta-yergacha",
        content: "Quenya tili Birlamchi Elf tili (Primitive Quendian) va Umumiy Eldarin tilidan kelib chiqqan bo'lib, Valinorda Vanyar va Noldor elflari tomonidan taraqqiy ettirilgan. Buyuk Noldor ko'chishi paytida O'rta-yerga keltirilgan, biroq Alqualondëdagi Qardoshlar Qirg'inidan (Kinslaying) xabar topgan Sindar Oliy Hukmdori Thingol o'z saltanatida Quenyada so'zlashishni qat'iyan taqiqlab qo'ygan. Natijada Quenya kundalik so'zlashuv doirasidan chiqib, faqat oliy tabaqalar, olimlar, qo'shiqchilar va marosimlar tiliga aylandi. Gondor va Arnor qirollari o'zlarining rasmiy toj kiyish marosimlarida, qonun matnlarida va shajaralarida Quenyadan foydalanganlar. Aragornning (Elessar) toj kiyish marosimidagi mashhur qasami ('Et Eärello Endorenna utúlien...') aynan Quenya tilida jaranglagan."
      },
      {
        title: "Adabiy namunalar va Namárië tahlili",
        content: "Tolkien merosidagi eng yirik va mukammal Quenya matni Galadrielning 'Namárië' (Lórien bilan xayrlashuv) marsiyasidir. Unda Quenya sintaksisi, she'riy vazni va obrazlilik salohiyati to'liq namoyon bo'ladi. 'Ai! laurië lantar lassi súrinen, yéni únótimë ve rámar aldaron!' (Oh! Oltin barglar shamolda to'kiladi, hisobsiz yillar daraxt qanotlaridek o'tmoqda). Shuningdek, Elendilning O'rta-yerga qadam qo'yganda aytgan qasami va Fëanor qasamining parchalari ushbu tilning ulug'vor va tantanavor tabiatini ko'rsatadi. Fëanor tomonidan yaratilgan Tengwar alifbosining 'Klassik Quenya uslubi' (Classical Mode) aynan ushbu tilning fonetik nozikliklarini mukammal ifodalash uchun loyihalashtirilgan."
      }
    ]
  },
  'sindarin.json': {
    phonology_overview: "Sindarin tili fonetik va morfologik jihatdan qadimgi velliy (kelt) tiliga asoslangan bo'lib, unga murakkab va o'ta nafis tovush o'zgarishlari xosdir. Sindarinda eng muhim fonetik hodisa bu mutatsiya (lenitsiya) hisoblanadi: so'zlar birikmasida oldingi so'zning fonetik ta'siri ostida keyingi so'zning boshlang'ich undoshi yumshaydi, jarangli yoki sirg'aluvchiga aylanadi (masalan, p -> b, t -> d, c -> g; b -> v, d -> dh, g yo'qoladi). Unlilar tizimida esa velliycha i-mutatsiyasi (umlaut) yetakchi rol o'ynaydi: orqa qator unlilari old qatorga ko'chadi (a -> e, o -> e, u -> y), bu ayniqsa otlarning ko'plik shaklini yasashda asosiy grammatik vosita sanaladi.",
    grammar_and_vocabulary_sections: [
      {
        title: "Beleriand Kulrang Elflari tili va velliycha ildizlar",
        content: "Sindarin O'rta-yerdagi Beleriand o'lkasida qolgan va Valinorga o'tmagan Teleri elflari (Sindar) tomonidan rivojlantirilgan tildir. Tolkien o'z maktublarida Sindarin fonologiyasini velliy (Kelt) tilining lingvistik jozibasi asosida yaratganini ta'kidlaydi. Tilning quloqqa yoqimli, sirli va silliq sadolanishi aynan uning murakkab fonotaktikasi, diftonglarining nafisligi (ae, ai, ei, oe, au) va sirg'aluvchi undoshlarining (dh, th, ch, lh, rh) boyligi bilan belgilanadi. Noldor elflari O'rta-yerga qaytgach, Thingolning buyrug'i sababli Sindarinni o'zlashtirdilar va bu til butun O'rta-yer bo'ylab elflar hamda oliy insonlar (Dúnedain) o'rtasidagi asosiy jonli muloqot vositasiga aylandi."
      },
      {
        title: "Lenitsiya (undosh mutatsiyasi) va fonologik qonuniyatlar",
        content: "Sindarin grammatikasining markaziy ustuni undoshlar mutatsiyasidir. Otlar va sifatlar oldidan aniqlik artikli (i - birlik, in - ko'plik), predloglar yoki ergashgan gap bog'lovchilari kelganda bosh undosh o'zgaradi. Masalan, yumshoq mutatsiyada (soft mutation/lenition): 'certh' (runa) so'zi 'i gerth' (o'sha runa), 'peredhel' (yarim-elf) so'zi 'i beredhel' shaklini oladi. Burun mutatsiyasida (nasal mutation) esa undoshlar burun tovushlariga aylanadi (b -> mb, d -> nd). Bundan tashqari, qattiq mutatsiya (stop mutation) va suyuq mutatsiya (liquid mutation) kabi murakkab fonetik o'tishlar mavjud. Bu qoidalar Sindarin nutqining to'xtovsiz, suvdek ravon oqishini ta'minlaydi."
      },
      {
        title: "Morfologiya, ko'plik yasalishi va fe'l tizimi",
        content: "Sindarin agglyutinativ tillardan ko'ra ko'proq flektiv xususiyatga ega. Otlarda kelishik qo'shimchalari Quenyadagi kabi ko'p emas; munosabatlar asosan predloglar va so'z tartibi orqali ifodalanadi. Ko'plik shakli asosan ichki unli o'zgarishi (i-umlaut) orqali yasaladi: 'adan' (inson) -> 'edain' (insonlar), 'amon' (tepalik) -> 'emyn' (tepaliklar), 'orch' (o'rk) -> 'yrch' (o'rklar), 'taur' (o'rmon) -> 'toer' (o'rmonlar). Fe'llar esa asosiy (I-fe'llar) va hosila (A-fe'llar) turlariga bo'linib, o'tgan zamonda suffikslar yoki unli uzayishi orqali o'zgaradi. Kishilik olmoshlari fe'l oxiriga enklitika sifatida birikishi mumkin."
      },
      {
        title: "Adabiy meros: A Elbereth Gilthoniel va Moria darvozasi",
        content: "Sindarin tilidagi eng mashhur epik matn Rivendellda va Shire chekkasida jaranglagan 'A Elbereth Gilthoniel' madhiyasidir: 'A Elbereth Gilthoniel, silivren penna míriel o menel aglar elenath!' (Ey Yulduzlar Sochuvchi Elbereth, osmondan yulduzlar shon-shavkati gavhardek yog'ilmoqda!). Shuningdek, Moria g'arbiy darvozasidagi mashhur Tengwar bitigi aynan Sindarinda bitilgan: 'Ennyn Durin Aran Moria. Pedo mellon a minno' (Moria Hukmdori Durin Darvozalari. Do'st deb ayt va kir). Sindarin tili Uchinchi Davrda nafaqat Lórien va Rivendell elflari, balki Gondor aslzodalari va Shimoliy Qo'riqchilarning (Rangers) oilaviy va maxfiy tili bo'lib xizmat qilgan."
      }
    ]
  },
  'khuzdul.json': {
    phonology_overview: "Khuzdul tili o'zining mustahkam, jarangdor va og'ir fonetikasi bilan ajralib turadi. Uning fonologik asosi qadimgi semit tillari (ivrit va oromiy) kabi uch undoshli konsonant o'zaklar (triconsonantal roots) tizimiga qurilgan. Tilning akustik qiyofasida tomoq va bo'g'iz tovushlari, bo'g'iq portlovchi va jarangli sirg'aluvchilar (kh, z, d, g, r, b, k) yetakchilik qiladi. Tovushlar mitti-odamlarning tosh va temir bilan ishlash tabiatiga, qattiq tog' jinslariga mos ravishda keskin va qat'iy talaffuz qilinadi. Mitti-odamlar o'z tilini begona quloqlardan nihoyatda qattiq sir saqlaganlar, shu sababli uning to'liq fonetik tizimi O'rta-yer xalqlari uchun jumboqligicha qolgan.",
    grammar_and_vocabulary_sections: [
      {
        title: "Aulëning ilohiy tuhfasi va semitcha uch undoshli o'zaklar",
        content: "Mitti-odamlar rivoyatlariga ko'ra, Khuzdul tili ularni yaratgan Vala Aulë (Mahal) tomonidan maxsus ixtiro qilingan va yetti Mitti ota-bobolariga o'rgatilgan. Tolkien bu tilni loyihalashda ivrit va boshqa semit tillarining ichki fleksiya tizimidan andoza olgan. So'zlarning asosiy lug'aviy ma'nosi uchta undoshdan iborat o'zakda (masalan, K-H-Z-D 'mitti-odam', B-R-Z 'qizil', Z-G-L 'uch, cho'qqi', G-B-L 'shox') yashiringan bo'lib, unlilar va affikslarning o'zgarishi grammatik shakllarni (ko'plik, sifat, fe'l) hosil qiladi: 'Khazâd' (Mitti-odamlar ko'pligi), 'Khuzd' (birlik). Bu arxitektura tilga nihoyatda ixcham va mustahkam ichki mantiq bag'ishlaydi."
      },
      {
        title: "Sir saqlash an'anasi va Iglishmêk imo-ishoralar tili",
        content: "Mitti-odamlar o'z ona tilini boshqa irqlarga o'rgatishni mutlaqo taqiqlaganlar va hatto o'zlarining haqiqiy Khuzdul ismlarini hech qachon qabrtoshlariga ham yozmaganlar, begonalarga oshkor etmaganlar (Gimli, Balin, Thorin kabi ismlar shimoliy insonlar tilidan olingan laqablardir). Mittilar boshqa xalqlar bilan faqat Westron yoki elflar tillarida gaplashganlar. O'zaro muloqotda esa Khuzduldan tashqari 'Iglishmêk' deb ataluvchi nihoyatda murakkab imo-ishoralar tilidan foydalanganlar. Iglishmêk orqali mitti-odam bir vaqtning o'zida baland ovozda oddiy tilda gapirib, barmoqlari va ko'zlari harakati bilan yonidagi sherigiga butunlay boshqa maxfiy xabarni yetkaza olgan."
      },
      {
        title: "Toponimika va geografik nomlar tizimi",
        content: "Khuzdul tilining O'rta-yer xaritasida saqlanib qolgan eng barqaror qismi tog'lar, qal'alar va daryolar nomlaridir. Khazad-dûm (Mittilar saroyi/saroyi), Zirakzigil (Kumush cho'qqi), Bundushathûr (Bulutli bosh), Barazinbar (Qizil shox), Kheled-zâram (Ko'zgu ko'li), Kibil-nâla (Kumush jilg'a) kabi toponimlar ming yillar davomida o'zgarmasdan saqlanib qolgan. Mitti-odamlar bu nomlarni o'zlarining eng buyuk yodgorliklari deb bilganlar va elflar qo'ygan yangi nomlarni tan olmaganlar."
      },
      {
        title: "Jangovar shiorlar va Balin qabri bitigi",
        content: "Tolkien asarlarida Khuzdul tilida berilgan eng mashhur jumlalar bu mitti jangchilarining qadimiy qichqirig'idir: 'Baruk Khazâd! Khazâd ai-mênu!' (Mitti boltalar! Mittilar ustingizga kelmoqda!). Bu na'ra barcha dushmanlar, ayniqsa Moria va Temir Tepaliklar janglarida o'rklarning yuragiga dahshat solgan. Shuningdek, Moria ichidagi Mazarbul xonasida topilgan Balin qabrtoshida Cirth runalarida shunday yozilgan: 'BALIN FUNDINUL UZRABAD KHAZADDÛMU' (Fundin o'g'li Balin, Khazad-dûm Hukmdori). Bu yozuv Khuzdul tilining rasmiy epitafiyaviy grammatikasini namoyish etuvchi nodir manbadir."
      }
    ]
  },
  'tengwar.json': {
    phonology_overview: "Tengwar alifbosi an'anaviy alifbolardan farqli o'laroq, sof fonetik-xususiyatli (featural alphabet) yozuv tizimidir. Unda har bir belgining geometrik shakli tasodifiy emas, balki tovushning artikulyatsiya o'rni va usulini aniq aks ettiradi. Asosiy belgi (tengwa) vertikal ustun (telco) va unga birikkan yoy yoki ilgakdan (lúva) iborat. Ustunning pastga yoki yuqoriga yo'nalganligi hamda yoyning bittaligi yoki ikkitaligi, ochiq yoki yopiqligi tovushning portlovchi, sirg'aluvchi, jarangli yoki burun tovushi ekanligini bildiradi. Bu tizim fonetika fani tarixidagi eng yuksak mantiqiy yozuv yodgorliklaridan biri hisoblanadi.",
    grammar_and_vocabulary_sections: [
      {
        title: "Fëanor dahoasi: Rumpil Saratisidan mukammal fonetik tizimgacha",
        content: "Tengwar yozuvi Birinchi Davrda Valinorda Noldor knyazi Fëanor tomonidan ixtiro qilingan. Fëanorgacha elflar Rumil tomonidan yaratilgan Sarati yozuvidan foydalanishgan, ammo Fëanor insoniyat tarixida tengi yo'q fonetik tizimni yaratdi. Tengwar 24 ta asosiy harfdan iborat to'rtburchak jadvalga (témar va tyeller) ajratilgan. Jadvalning to'rtta ustuni (témar) artikulyatsiya o'rnini belgilaydi: 1-ustun (Tincotéma) tish tovushlari (t, d, th, n), 2-ustun (Parmatéma) lab tovushlari (p, b, f, m), 3-ustun (Calmatéma) tanglay tovushlari (k, g, sh), 4-ustun (Quessetéma) orqa tanglay va lablashgan tovushlar (kw, gw, chw). Oltita qator (tyeller) esa hosil bo'lish usulini (jarangsiz, jarangli, sirg'aluvchi, burun va yarim unlilar) bildiradi."
      },
      {
        title: "Tehtar (Ómatehtar): Unlilar tizimi va yozuv uslublari (Modes)",
        content: "Tengwarda unli tovushlar harflar ustiga yoki ostiga qo'yiladigan maxsus belgilar - tehtar orqali belgilanadi. Uchta nuqta odatda 'a', qiya chiziq 'e', bitta nuqta 'i', burama ilgak 'o', qarama-qarshi ilgak 'u' unlisini ifodalaydi. Unlilarning harf ustiga qo'yilishi tilning tabiatiga bog'liq: Quenya rejimida (Classical Mode) so'zlar unli bilan tugaganligi sababli tehta o'zidan keyingi undosh harf ustiga qo'yiladi. Sindarin rejimida esa so'zlar ko'pincha undosh bilan yakunlangani sababli unli belgisi o'zidan oldingi undosh ustiga yoziladi. Agar unli yakka kelsa, u maxsus kalta yoki uzun unli tayanchi (carrier) ustiga joylashtiriladi."
      },
      {
        title: "To'liq yozuv rejimlari: Beleriand uslubi va Qora Nutq",
        content: "Tehtar tizimidan tashqari, unlilar alohida to'liq harflar sifatida yoziladigan 'To'liq rejimlar' (Full Modes) ham mavjud bo'lgan. Bunga eng yorqin misol Beleriand Sindarin rejimidir; Moria darvozasidagi mashhur yozuv aynan shu to'liq rejimda o'yilgan bo'lib, unda har bir unli alohida tengwa belgisi bilan ifodalangan. Shuningdek, Sauron Yagona Uzukka afsun bitishda Tengwar harflarining nafis kursiv shaklidan foydalangan, biroq uning zamiridagi til qabih Qora Nutq bo'lgan. Bu Tengwanning har qanday fonetik tizimni ifodalashga qodir universal lingvistik moslashuvchanligini isbotlaydi."
      },
      {
        title: "O'rta-yerdagi madaniy va amaliy tarqalishi",
        content: "Tengwar O'rta-yerda barcha elflar, Dúnedain olimlari, Gondor mirzalari va hattoki savodli xobbitlar (masalan, Bilbo va Frodo Baggins) tomonidan keng qo'llanilgan. U qog'ozga qamish qalam yoki pat bilan yozish uchun maxsus moslashtirilgan bo'lib, oqma va xattotlik go'zalligiga ega edi. Qizil Kitobning (Red Book of Westmarch) ko'plab sahifalari va shohona maktublar Tengwar imlosida bitilgan. Ushbu yozuv Tolkien dunyosining estetik va intellektual cho'qqisini ifodalovchi timsoldir."
      }
    ]
  },
  'cirth.json': {
    phonology_overview: "Cirth (Angerthas) tizimi tosh, metall va yog'och yuzalarga o'yib yozish uchun maxsus moslashtirilgan burchakli runik yozuvdir. Uning fonetik tuzilishi to'g'ri vertikal o'zak (stem) va unga birikuvchi burchakli shoxlardan (branch/twig) iborat. Fëanor Tengwariga o'xshash ravishda, Cirth tizimida ham simmetriya mavjud: shoxning bir tomonda yoki ikki tomonda bo'lishi, uning chiziqcha bilan kesilishi jaranglilik, sirg'aluvchilik yoki burunlanish fonetik xususiyatlarini ifodalaydi. Yozuvning keskin chiziqlari mitti-odamlarning toshyo'nar ustalari va qurolsozlari uchun ideal vositaga aylangan.",
    grammar_and_vocabulary_sections: [
      {
        title: "Daeron ixtirosi: Doriath o'rmonlaridan boshlangan runalar",
        content: "Cirth yozuvi Birinchi Davrda Doriath qirolligining bosh kuychisi va olimi Daeron tomonidan yaratilgan bo'lib, dastlab 'Certhas Daeron' deb atalgan. Sindar elflari ushbu yozuvdan daraxt po'stloqlari, toshlar va yog'ochlarga qisqa yozuvlar, ismlar va she'rlar o'yishda foydalanganlar. Biroq elflar keyinchalik ko'proq kitobiy Tengwardan foydalanishga o'tgach, Cirthdan deyarli voz kechdilar. Ammo Ered Luin (Moviy Tog'lar) va Khazad-dûm mitti-odamlari ushbu yozuvni ko'rib, uning tosh va metallga o'yish uchun nihoyatda qulayligini darhol angladilar va uni o'zlarining milliy yozuv tizimiga aylantirdilar."
      },
      {
        title: "Angerthas Moria va Angerthas Erebor: Mittilar takomillashtiruvi",
        content: "Mitti-odamlar Daeron tizimini o'zlarining Khuzdul tili fonetikasiga moslashtirib, 'Angerthas Moria' (Moria Uzun Runalari) tizimini ishlab chiqdilar. Ular yozuvga o'z tilidagi qattiq tomoq tovushlari, jarangli sirg'aluvchilar va cho'ziq unlilar uchun o'nlab yangi belgilarni kiritdilar. Ikkinchi va Uchinchi Davrlarda bu yozuv Yolg'iz Tog' (Erebor) va Temir Tepaliklarga ham tarqaldi va 'Angerthas Erebor' varianti vujudga keldi. Mittilar o'zlarining barcha solnomalarini, xazina eshiklari afsunlarini va qurol-yarog' tamg'alarini aynan ushbu runalar bilan muhrlaganlar."
      },
      {
        title: "Tarixiy artefaktlar: Mazarbul Kitobi va Balin qabri",
        content: "Cirth yozuvining eng yorqin tarixiy yodgorligi bu Moria ekspeditsiyasi davrida Ori tomonidan yozilgan Mazarbul Kitobidir (The Book of Mazarbul). Unda gnomlar o'rklarning qamalida qolib, halokatga yuz tutayotgan so'nggi daqiqalarni shoshilinch runik yozuv bilan qayd etganlar ('Biz chiqa olmaymiz... Ular kelyapti'). Shuningdek, 'Uzuklar Hukmdori' kitobining sarlavha sahifasidagi yuqori va pastki runik hoshiya yozuvlari ham Cirth va Tengwarda bitilgan bo'lib, Tolkien ushbu yozuv orqali qadimgi anglo-sakson va skandinav runalarining sehrli jozibasini tiriltirgan."
      },
      {
        title: "Boshqa xalqlar tomonidan o'zlashtirilishi",
        content: "Cirth yozuvi faqat elflar va mittilar bilan cheklanib qolmagan. Anduin vodiysidagi insonlar, Dale aholisi va Rohirrim ajdodlari ham ushbu runalardan oddiy bitiklar, chegaratoshlari va dafn yozuvlari uchun foydalanishgan. Hatto ba'zi yovuz maxluqlar va o'rklarning boshliqlari ham buyruqlar va xazina belgilarini Cirthning buzilgan, qo'pol shakllarida toshlarga o'yib qoldirganlar."
      }
    ]
  },
  'adunaic.json': {
    phonology_overview: "Adûnaic tili Númenor orol-saltanatining milliy tili bo'lib, Bëor va Hador xonadonlari insonlarining qadimgi tillari asosida shakllangan. Fonetik jihatdan u kuchli undoshlar tizimi, bo'g'iz va tomoq tovushlari hamda semit tillariga o'xshash trilitera (uch undoshli) tuzilishga moyilligi bilan ajralib turadi. Unlilar a, i, u hamda cho'ziq â, î, û variantlariga ega bo'lib, diftonglar kam uchraydi. Tilning urg'usi va talaffuzi jangovar, qat'iy va mag'rur ohangga ega bo'lib, bu Númenor dengizchilari va fotihlarining xarakterini yaqqol aks ettirgan.",
    grammar_and_vocabulary_sections: [
      {
        title: "Númenor tili va Insonlar nutqining shakllanishi",
        content: "Birinchi Davrda Edain qabilalari Beleriandga kelganlarida o'zlarining qadimiy insoniy lahjalarida so'zlashishgan. Valar ularga Elenna (Númenor) orolini in'om etgach, bu qabilalar yagona xalqqa birlashdilar va ularning tillari chatishib, Adûnaic ('G'arbliklar tili') vujudga keldi. Garchi Númenor aslzodalari va olimlari dastlab elflarning Quenya va Sindarin tillarida ta'lim olib, ularni e'zozlagan bo'lsalar-da, oddiy xalq, dehqonlar va dengizchilar kundalik hayotda faqat Adûnaicda muloqot qilganlar. Bu til O'rta-yer sohillarida Númenor koloniyalari barpo etilishi bilan keng tarqala boshladi."
      },
      {
        title: "Morfologiya, grammatik jins va fe'l qurilishi",
        content: "Tolkienning 'The Notion Club Papers' (HoME IX jild) asarida Adûnaic grammatikasining mukammal eskizi berilgan. Unda otlar uchta grammatik jinsga bo'linadi: erkak, ayol va umumiy/jonsiz. Otlar uch xil holatda qo'llaniladi: oddiy (Normal), bosh kelishik (Subjective) va qaratqich (Objective). So'z yasalishida o'zak unlilarining o'zgarishi va suffiksatsiya hal qiluvchi rol o'ynaydi. Masalan, 'bârim' (hukmdorlar) so'zi 'bâr' o'zagidan yasalgan. Fe'l tizimida davomiy, tugallangan va subyektiv zamon shakllari mavjud bo'lib, bu inson tilining elflar tilidan tubdan farq qiluvchi o'ziga xos dunyoqarashini ko'rsatadi."
      },
      {
        title: "Siyosiy inqiroz va Elflar tillarining taqiqlanishi",
        content: "Ikkinchi Davrning ikkinchi yarmida Númenor podshohlari Valarga va Elflarga qarshi isyon ko'targanlarida ('Qirol Odamlari' firqasi), ular o'zlarining milliy g'ururini ko'rsatish uchun elflar tillaridan foydalanishni qonunan taqiqladilar. Podshohlar o'zlariga Quenya ismlari o'rniga faqat Adûnaic nomlarini qabul qila boshladilar: Tar-Calmacil o'rniga Ar-Belzagar, Tar-Palantirning jiyani esa Ar-Pharazôn (Oltin Pharazôn) deb ataldi. Bu davrda Adûnaic imperialistik mafkura, mustamlakachilik va qudrat timsoliga aylandi. Faqat 'Sodiqlar' (The Faithful) elflar tillarini yashirincha asrab qoldilar."
      },
      {
        title: "Akallabêth fojeasi va Westron tiliga meros",
        content: "Númenor dengiz tubiga g'arq bo'lgach (Akallabêth), Adûnaic tili toza holda faqat Umbarning Qora Númenorliklari orasida saqlanib qoldi. Ammo uning O'rta-yer sohillaridagi savdo shaharlarida mahalliy insonlar tillari bilan aralashuvi natijasida yangi universal til - Westron (Umumiy Til) dunyoga keldi. Shu sababli, Uchinchi Davrda butun O'rta-yer bo'ylab yangragan Common Speech aslida Adûnaicning to'g'ridan-to'g'ri grammatik va leksik merosxo'ri hisoblanadi."
      }
    ]
  },
  'westron.json': {
    phonology_overview: "Westron (Sôval Phâre yoki Umumiy Til) fonetik jihatdan nihoyatda qulay, moslashuvchan va sodda tovushlar tizimiga ega. U murakkab unli mutatsiyalari yoki qiyin talaffuz qilinadigan tomoq tovushlaridan xoli bo'lib, turli xalqlar - insonlar, xobbitlar, mitti-odamlar va hatto o'rklar tomonidan oson o'zlashtirilishi uchun tabiiy ravishda soddalashgan. Urg'u odatda so'zning boshlang'ich bo'g'inlariga tushadi. Fonologiyasi jihozlangan, qat'iy va amaliy bo'lib, savdo, diplomatiya va kundalik hayot ehtiyojlariga to'liq javob beradi.",
    grammar_and_vocabulary_sections: [
      {
        title: "O'rta-yerning umumiy muloqot tili (Common Speech) genezisi",
        content: "Westron tili Ikkinchi Davrda Númenor dengizchilari va savdogarlarining Pelargir, Lond Daer va Umbar kabi portlaridagi faoliyati natijasida vujudga keldi. Númenorliklarning Adûnaic tili Anduin vodiysi va Eriadorning tub joy insonlari tillari bilan qorishib, lingua franca maqomiga ko'tarildi. Gondor va Arnor saltanatlari gullab-yashnagan davrda ushbu til butun O'rta-yer bo'ylab rasmiy davlat, savdo va xalqaro muloqot tili sifatida qabul qilindi. Uchinchi Davr oxiriga kelib, hatto Moria va Mordor o'rklari ham turli qabilalararo aloqada Westronning buzilgan shaklidan foydalanishga majbur bo'lganlar."
      },
      {
        title: "Dialektlar: Gondor aristokratiyasi, Bree va Shire shevalari",
        content: "Westron tili turli hududlarda o'ziga xos lahjalarga bo'lingan. Minas Tirith va Gondor janubida bu til qadimgi adabiy qoidalar, balandparvoz iboralar va hurmat ko'rsatuvchi murakkab olmoshlar bilan to'la bo'lgan (Pippinning Denethor bilan suhbatida bu yaqqol ko'rinadi). Shimolda esa, ayniqsa Bree va Shireda, til ancha soddalashgan, erkin, o'ynoqi va qishloqona tus olgan. Xobbitlar Westronni to'liq o'z ona tillari deb bilishgan va o'zlarining qadimiy tillaridan faqat bir nechta o'lchov va oziq-ovqat so'zlarini (masalan, mathom, smial) saqlab qolganlar."
      },
      {
        title: "Tolkienning tarjima konsepsiyasi va haqiqiy Westron nomlari",
        content: "J.R.R. Tolkien 'Uzuklar Hukmdori' kitobini yozishda o'ziga xos adabiy usul qo'llagan: u asarni go'yo Westron tilidagi 'Qizil Kitob'dan ingliz tiliga tarjima qilgan deb taqdim etgan. Kitobdagi biz bilgan ko'plab ismlar aslida inglizlashtirilgan variantlardir. Masalan, Frodo Bagginsning haqiqiy Westroncha ismi 'Maura Labingi', Sam Gamgeeniki 'Banazîr Galbasi', Meriadoc Brandybuckniki 'Kalimac Brandagamba', Peregrin Tookniki esa 'Razanur Tûc' bo'lgan. Tilning o'z nomi esa 'Sôval Phâre' deb atalgan. Bu konsepsiya Tolkien filologiyasining eng yorqin va nozik qirralaridan biridir."
      },
      {
        title: "Sotsiolingvistik ahamiyati va madaniy integratsiya",
        content: "Westron turli irqlar va xalqlarni yagona axborot maydoniga birlashtiruvchi qudratli vosita bo'ldi. Elflar uni past tabaqa tili deb hisoblamasdan, boshqa xalqlar bilan muzokaralarda undan mohirlik bilan foydalanganlar. Mitti-odamlar o'zlarining sirli Khuzdul tilini yashirib, dunyoga faqat Westron orqali murojaat qilganlar. Uzuk Birodarligi a'zolari bir-biri bilan aynan Common Speech orqali muloqot qilganlar, bu esa tilning nafaqat amaliy, balki butun O'rta-yer ozod xalqlarining birlik ramziga aylanganini ko'rsatadi."
      }
    ]
  },
  'qora-nutq.json': {
    phonology_overview: "Qora Nutq (Black Speech) tabiiy ravishda vujudga kelmagan, balki Sauron tomonidan Barad-dûrda maxsus loyihalashtirilgan sun'iy tildir. Uning fonetikasi quloqqa qo'pol, bo'g'iq, g'ijirlagan va tajovuzkor eshitiladi. Unda qattiq bo'g'iz tovushlari, jarangli frikativlar (gh, z) va tish-tomoq birikmalari (sh, sk, thr) ko'p uchraydi. Elflar bu tildan nafratlanganlar va uning tovushlarini jirkanch deb bilganlar ('Birorta elf bu tilning so'zlarini aytishga o'z tilini bulg'amaydi'). Fonetikaning maqsadi qo'rquv uyg'otish va buyruqlarni qat'iy, shartsiz tarzda yetkazish bo'lgan.",
    grammar_and_vocabulary_sections: [
      {
        title: "Sauronning sun'iy imperiya tili loyihasi",
        content: "Ikkinchi Davrda Sauron O'rta-yerni zabt etish rejasini tuzar ekan, o'z qo'l ostidagi son-sanoqsiz o'rk qabilalari, trollar va sharqlik xalqlarning yuzlab betartib lahjalarini yagona mafkuraviy tizmga bo'ysundirishni xohladi. Shu maqsadda u barcha xizmatkorlari uchun majburiy bo'lgan Qora Nutqni (Ash Nazg) yaratdi. Sauronning niyati ushbu tilni butun O'rta-yer ustidan o'rnatiladigan mutlaq zulm saltanatining yagona rasmiy tiliga aylantirish edi. Biroq o'rklar o'zlarining aqliy qobiliyatlari pastligi va betartib tabiati tufayli bu murakkab tizimni to'liq o'zlashtira olmadilar va undan faqat qo'pol qarg'ishlar va harbiy buyruqlarni o'zlashtirib, o'zlarining buzuq jargonlariga (Orkish) qo'shib yubordilar."
      },
      {
        title: "Agglyutinativ morfologiya va Uzuk bitigi tahlili",
        content: "Qora Nutq grammatik tuzilishiga ko'ra qat'iy agglyutinativ til bo'lib, xurriy (hurrian) va qadimgi elam tillariga o'xshash belgilarga ega. Tolkien qoldirgan eng to'liq va sof Qora Nutq namunasi Yagona Uzuk sirtiga o'yilgan mashhur bayt hisoblanadi: 'Ash nazg durbatulûk, ash nazg gimbatul, ash nazg thrakatulûk agh burzum-ishi krimpatul' (Barchasini boshqarish uchun Yagona Uzuk, barchasini topish uchun Yagona Uzuk, barchasini chorlash va zulmatda kishanlash uchun Yagona Uzuk). Ushbu matnda: 'ash' - bir; 'nazg' - uzuk; 'durba-' - bo'ysundirmoq, hukm qilmoq; '-at' - maqsad/kelasi zamon affiksi; '-ul' - ularni (3-shaxs ko'plik olmoshi); '-ûk' - butunlay, to'liq; 'agh' - va; 'burzum' - zulmat ('burz' qora/zulmat sifatidan olingan ot); '-ishi' - ichida (o'rin kelishigi); 'krimpa-' - kishanlamoq, bog'lamoq."
      },
      {
        title: "Toza Qora Nutq va O'rk jargonlari o'rtasidagi farq",
        content: "Tolkien asarlarida sof Qora Nutq faqat Sauron, Nazgûl (Uzuk arvohlari) va Barad-dûrning oliy zobitlari (masalan, Olog-hai trollari va Sauron Og'zi) tomonidan qo'llanilgan. Oddiy o'rklar esa bu tilning buzilgan, mahalliy so'zlar bilan qorishgan shakllarida gaplashishgan. Masalan, Uglúk va Grishnákh o'rtasidagi mojaroda o'rklarning haqoratomuz iborasi ('Uglúk u bagronk sha pushdug Saruman-glob búbhosh...') Qora Nutqning degeneratsiyaga uchragan variantini ko'rsatadi. Uchinchi Davr oxirida Sauron halok bo'lgach, Qora Nutq ham deyarli butunlay unutilib, tarix qa'riga g'arq bo'ldi."
      },
      {
        title: "Tolkienning badiiy va falsafiy niyati",
        content: "Tolkien Qora Nutq orqali totalitarizm, mexanizatsiya va individual ongni yo'q qilishga qaratilgan sun'iy mafkura tilining ramziy qiyofasini yaratgan. George Orwellning '1984' asaridagi 'Newspeak' (Yangi til) kabi, Qora Nutq ham erkin fikrlash, go'zallik va ma'naviyat tushunchalarini ifodalash uchun so'zlarga ega emas edi. U faqat zo'ravonlik, itoat, azob va qullik tushunchalarini ifodalovchi qat'iy leksikaga tayangan."
      }
    ]
  },
  'valarin.json': {
    phonology_overview: "Valarin tili Ardaning eng oliy mavjudotlari - Ainur (Valar va Maiar) tomonidan so'zlashiladigan tildir. Aslida jismoniy vujudga ega bo'lmagan ilohiy mavjudotlar fikr almashish uchun (ósanwë) moddiy tilga muhtoj emas edilar, ammo ular Arda moddiy olamida gavdalanganlarida eshitiladigan nutq yaratdilar. Valarin fonetikasi elflar uchun nihoyatda begona, g'alati va qiyin bo'lgan. Unda juda uzun so'zlar, murakkab undosh klasterlari, bo'g'iz shovqinlari va noodatiy jarangli tovushlar (delba, palan, shaghan, mahan) ko'p uchraydi. Elflar bu tovushlarni o'zlarining nozik quloqlari uchun yoqimsiz deb topganlar.",
    grammar_and_vocabulary_sections: [
      {
        title: "Ainur tili: Olamning birlamchi ilohiy nutqi va Ósanwë",
        content: "Ainulindalë afsonasiga ko'ra, Ainur koinot yaratilishidan avval Eru Ilúvatar huzurida buyuk Musiqa ijro etganlar. Valinorga kelib o'rnashganlarida esa, ular o'zaro moddiy muloqot qilish uchun Valarin tilini yaratdilar. Biroq Valar uchun nutq shunchaki ixtiyoriy vosita edi; ularning asosiy aloqa usuli 'Ósanwë-kenta' (fikr uzatish) sanalardi. Ular o'zaro fikr, tuyg'u va tasavvurlarni bir lahzada, hech qanday so'zsiz to'g'ridan-to'g'ri bir-birlarining ongiga etkaza olganlar. Valarin tili aynan ana shu bepoyon ilohiy tushunchalarning fonetik moddiylashuvi edi."
      },
      {
        title: "Fonetik strukturasi va so'z uzunligi",
        content: "Tolkienning 'Quendi and Eldar' asarida (HoME XI jild) Valarin tilining noyob namunalari keltirilgan. Tilning xarakterli xususiyati uning nihoyatda uzun, ko'p bo'g'inli so'zlardan iboratligidir. Masalan, Vala Manwëning Valarincha asl ismi 'Mānawenūz', Ulmoniki 'Ullubōz', Tulkasniki esa 'Tulukastāz' bo'lgan. Telperion daraxtining Valarincha nomi 'Ibrīniðilpathānezel', Laurelinniki esa 'Tulukhedelgorūz' deb atalgan. Bu murakkablik sababli elflar Valarinni to'liq o'rganishga qiziqmaganlar, aksincha, Valar elflarning go'zal tili Quenyani o'rganib, ular bilan faqat Quenyada muloqot qilganlar."
      },
      {
        title: "Quenya tiliga o'tgan ilohiy o'zlashmalar",
        content: "Garchi Noldor va Vanyar elflari Valarin tilida gaplashmagan bo'lsalar-da, ushbu ilohiy tildan bir nechta muhim kalit so'zlar Quenya lug'atiga kirib kelgan va fonetik jihatdan yumshatilgan. Masalan, Valinor oqsoqollarining oliy majlisi o'tadigan joy 'Máhanaxar' (Valarincha 'Māchananaškad' so'zidan), ilohiy balzam 'Miruvórë' (Valarincha 'Mirub-'), Ezellohar tepaligi ('Ezellôchâr'dan) shular jumlasidandir. Bu so'zlar elflar orasida eng muqaddas atamalar sifatida saqlanib qolgan."
      },
      {
        title: "Melkor, Sauron va Valarinning zulmatga ta'siri",
        content: "Yovuz Vala Melkor (Morgoth) va uning eng sodiq xizmatkori Sauron (Mayar irqiga mansub) Valarin tilini mukammal bilganlar. Ba'zi filologik tahlillarga ko'ra, Sauron Ikkinchi Davrda Qora Nutqni loyihalashtirar ekan, uning ba'zi qat'iy agglyutinativ konstruksiyalari va bo'g'iz tovushlarini aynan o'zi eslab qolgan qadimgi Valarin unsurlaridan olgan bo'lishi mumkin. Bu ilohiy til unsurlarining qanday qilib buzilib, qorong'ulik vositasiga aylantirilganini ko'rsatuvchi fojiaviy jihatdir."
      }
    ]
  },
  'rohirric.json': {
    phonology_overview: "Rohirric (Rohan tili) O'rta-yerning shimolidagi Éothéod qabilalarining tili bo'lib, Shimoliy Insonlar (Northmen) til oilasiga mansubdir. Fonetik jihatdan u qadimgi german, xususan qadimgi ingliz (Old English / Anglo-Saxon) tilining Mersiya (Mercian) dialektiga asoslangan. Tilning fonetikasi kuchli alliteratsiya (undoshlar ohangdoshligi), ochiq va keng unlilar, diftonglar (ea, eo, ie) hamda jarangli undosh klasterlari bilan ajralib turadi. Talaffuz ochiq dashtlar, shamollar va otliq jangchilarning hayot tarziga mos ravishda jarangdor, qat'iyatli va jo'shqindir.",
    grammar_and_vocabulary_sections: [
      {
        title: "Rohan chavandozlari tili va Anglo-Sakson lingvistik ildizlari",
        content: "J.R.R. Tolkien Oksford universitetida anglo-sakson tili va adabiyoti professori bo'lgani sababli, Rohirrim xalqini tasvirlashda o'zi eng yaxshi ko'rgan qadimgi ingliz tilining Mersiya lahjasidan foydalangan. Tolkien kontseptsiyasiga ko'ra, Rohirric tili Westron tili bilan qardosh bo'lib, xuddi qadimgi ingliz tili zamonaviy ingliz tilining ajdodi bo'lganidek munosabatda bo'lgan. Shu sababli Tolkien asarda Westronni zamonaviy ingliz tili sifatida bergan bo'lsa, Rohirrim tilini qadimgi inglizcha so'zlar va she'riy shakllar orqali ifodalagan. Bu kitobxonlarga ushbu xalqning arxaik, oliyjanob va qahramonona tabiatini chuqur his qilish imkonini bergan."
      },
      {
        title: "Otchilik terminologiyasi va madaniy leksika",
        content: "Rohirrim hayotining markazida ot (horse) turgani sababli, ularning tili dunyodagi eng boy otchilik leksikasiga ega bo'lgan. Qadimgi inglizcha 'eoh' (jangovar ot) o'zagi Rohanning eng buyuk shaxslari va tushunchalari nomida uchraydi: Éomer ('otlar bilan mashhur'), Éowyn ('otlarni sevuvchi'), Éothéod ('otliq el / otliq xalq'), Éored ('otliq qo'shin bo'linmasi, 120 chavandoz'). Shoh saroyi 'Meduseld' ('Asalli mayxona / Oltin Saroy'), podshoh unvoni 'Théoden' (qadimgi inglizcha 'þēoden' - xalq yetakchisi, podshoh) so'zlaridan olingan. Bu atamalar Rohirrimning dasht madaniyati va eposini to'liq namoyon etadi."
      },
      {
        title: "Westron bilan munosabatlari va lingvistik farqlar",
        content: "Rohirrim xalqi Uchinchi Davrda Gondor bilan ittifoq tuzgach, rasmiy muzokaralarda Westron tilidan ham keng foydalangan. Biroq o'zaro suhbatlarda, saroyda va jang maydonida ular faqat o'z ona tillarida so'zlashganlar. Gondorliklar Rohirric tilini 'qadimiy, qo'pol, lekin g'ururli va musiqiy' deb baholaganlar. Qizig'i shundaki, xobbitlarning Shire tilida saqlanib qolgan ba'zi qadimiy so'zlar (masalan, 'kûd-dûkan' - g'or qazuvchi, ya'ni hobbit) aynan Rohirric tili bilan umumiy ildizga ega, chunki xobbitlarning ajdodlari ham bir paytlar Anduin vodiysida Éothéod qabilalari bilan yonma-yon yashaganlar."
      },
      {
        title: "Epik she'riyat va Eorl Qasami",
        content: "Rohirric tilining eng yuksak namunasi ularning epik she'riyati va qasamyodlaridir. Ular qofiyaga emas, balki qadimgi german alliteratsion vazniga (bosh tovushlarning ohangdoshligiga) tayanganlar. Podshoh Théoden jang maydonida o'z jangchilarini ruhlantirganida aytgan xitoblari ('Arise, arise, Riders of Théoden! Fell deeds awake: fire and slaughter!') aynan shu an'ananing yorqin aksidir. Shuningdek, Eorl Yosh va Gondor noibi Cirion o'rtasida tuzilgan abadiy ittifoq qasami (Oath of Eorl) Rohirric tilida muhrlangan bo'lib, ikki xalq o'rtasidagi birodarlikning asosi sanalgan."
      }
    ]
  }
};

for (const [file, expansion] of Object.entries(languageExpansions)) {
  const filePath = path.join(languagesDir, file);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    continue;
  }
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (expansion.phonology_overview) {
    data.phonology_overview = expansion.phonology_overview;
  }
  if (expansion.grammar_and_vocabulary_sections) {
    data.grammar_and_vocabulary_sections = expansion.grammar_and_vocabulary_sections;
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${file}`);
}
