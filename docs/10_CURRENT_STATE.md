# Tolkien Olami — Loyihaning Haqiqiy Holati Audit Hisoboti (Current State Audit)

> **Avtomatik yaratilgan:** Ushbu hisobot `scripts/audit-content.cjs` skripti orqali loyihaning haqiqiy holatini sinchkovlik bilan skanerlash orqali tuzildi.  
> **Sana:** 2026-10-29 13:38:28 UTC  
> **Muhit:** Node v24.21.0, Astro 7.3.8

---

## 1. Toʻplamlar Boʻyicha Kontent Soni (`src/content/`)

Ensiklopediyadagi 9 ta asosiy toʻplam boʻyicha mavjud kontent yozuvlarining haqiqiy soni:

| Toʻplam (Collection) | Fayl Formati | Maqolalar / Yozuvlar Soni | Tavsif |
| :--- | :--- | :---: | :--- |
| **articles** | Markdown (`.md`) | **8** | Akademik tahliliy maqolalar va insholar |
| **books** | JSON (`.json`) | **35** | Tolkien bibliografiyasi va birlamchi manbalar |
| **characters** | JSON (`.json`) | **81** | Arda va Oʻrta-yer qahramonlari |
| **cosmology** | JSON (`.json`) | **8** | Kosmologik tushunchalar, ainur va ilohiy borliq |
| **events** | JSON (`.json`) | **17** | Tarixiy voqealar, buyuk janglar va davrlar |
| **genealogies** | JSON (`.json`) | **6** | Sulolalar shajaralari (Durin, Finwë, Elros, Rohan va h.k.) |
| **languages** | JSON (`.json`) | **10** | Elflar, odamlar va boshqa xalqlar tillari hamda yozuvlari |
| **peoples** | JSON (`.json`) | **11** | Irqlar, xalqlar va xonadonlar (Noldor, Edain, Entlar...) |
| **places** | JSON (`.json`) | **45** | Shaharlar, qalʼalar, togʻlar, daryolar va viloyatlar |
| **JAMI** | — | **221** | **Barcha toʻplamlardagi umumiy yozuvlar** |

---

## 2. Qahramon Portretlari Tahlili

Qahramonlar kartochkalari va batafsil sahifalarida ishlatiladigan ilmiy portretlar holati:

- **Jami qahramonlar yozuvi (`src/content/characters/`):** 81 ta
- **Portretga ega qahramonlar:** 21 ta (25.9%)
- **Portreti hali mavjud boʻlmagan qahramonlar:** 60 ta (74.1%)
- **Diskdagi tasvirlar (`public/images/characters/`):** 21 ta juftlik (asosiy va thumbnail webp)
- **Manifestda roʻyxatga olinganlar (`src/data/character-portraits.ts`):** 21 ta

### Portretga Ega Boʻlgan Qahramonlar (21 ta)
| Slug | Ismi | Rasm Manzili | Provenance Turi |
| :--- | :--- | :--- | :--- |
| `finwe` | Finwë | `/images/characters/finwe.webp` | Kanonik/Derivativ tasdiqlangan |
| `feanor` | Fëanor | `/images/characters/feanor.webp` | Kanonik/Derivativ tasdiqlangan |
| `gil-galad` | Gil-galad | `/images/characters/gil-galad.webp` | Kanonik/Derivativ tasdiqlangan |
| `galadriel` | Galadriel | `/images/characters/galadriel.webp` | Kanonik/Derivativ tasdiqlangan |
| `gollum` | Gollum | `/images/characters/gollum.webp` | Kanonik/Derivativ tasdiqlangan |
| `fingolfin` | Fingolfin | `/images/characters/fingolfin.webp` | Kanonik/Derivativ tasdiqlangan |
| `arwen` | Arwen Undómiel | `/images/characters/arwen.webp` | Kanonik/Derivativ tasdiqlangan |
| `bilbo-baggins` | Bilbo Baggins | `/images/characters/bilbo-baggins.webp` | Kanonik/Derivativ tasdiqlangan |
| `boromir` | Boromir | `/images/characters/boromir.webp` | Kanonik/Derivativ tasdiqlangan |
| `theoden` | Théoden | `/images/characters/theoden.webp` | Kanonik/Derivativ tasdiqlangan |
| `beren` | Beren | `/images/characters/beren.webp` | Kanonik/Derivativ tasdiqlangan |
| `legolas` | Legolas Greenleaf | `/images/characters/legolas.webp` | Kanonik/Derivativ tasdiqlangan |
| `aragorn` | Aragorn II | `/images/characters/aragorn.webp` | Kanonik/Derivativ tasdiqlangan |
| `gimli` | Gimli | `/images/characters/gimli.webp` | Kanonik/Derivativ tasdiqlangan |
| `elrond` | Elrond | `/images/characters/elrond.webp` | Kanonik/Derivativ tasdiqlangan |
| `saruman` | Saruman | `/images/characters/saruman.webp` | Kanonik/Derivativ tasdiqlangan |
| `samwise-gamgee` | Samwise Gamgee | `/images/characters/samwise-gamgee.webp` | Kanonik/Derivativ tasdiqlangan |
| `sauron` | Sauron | `/images/characters/sauron.webp` | Kanonik/Derivativ tasdiqlangan |
| `turin` | Túrin Turambar | `/images/characters/turin.webp` | Kanonik/Derivativ tasdiqlangan |
| `gandalf` | Gandalf | `/images/characters/gandalf.webp` | Kanonik/Derivativ tasdiqlangan |
| `frodo-baggins` | Frodo Baggins | `/images/characters/frodo-baggins.webp` | Kanonik/Derivativ tasdiqlangan |

### Portret Kutilayotgan Qahramonlar Namunasi (60 tadan bir qismi)
- `finarfin` (Finarfin)
- `eorl` (Yosh Eorl)
- `maeglin` (Maeglin)
- `helm-hammerhand` (Xelm Bolgʻaqoʻl)
- `maglor` (Maglor)
- `bard-the-bowman` (Kamonchi Bard (Bard I))
- `nienor` (Niënor Níniel)
- `balin` (Balin)
- `elwing` (Elwing Oq)
- `smaug` (Smaug)
- `thrain-ii` (Train II)
- `morwen` (Morwen Eledhwen)
- `dain-ironfoot` (Dain II Temiroyoq)
- `beleg` (Beleg Cúthalion)
- `thranduil` (Tranduil)
- *...va yana 45 ta qahramon (qarang: Faza 7 portretlar paketi)*

---

## 3. Kartografiya va Xaritalar Holati

`docs/02_INFORMATION_ARCHITECTURE.md` arxitekturasida vaʼda qilingan xaritalar va ularning diskdagi (`public/assets/maps/`) haqiqiy holati:

| Hudud (ID) | Tavsif | Vaʼda qilingan hujjat | Haqiqiy holat | Fayl hajmi | Litsenziya fayli |
| :--- | :--- | :--- | :---: | :---: | :---: |
| **beleriand** | Beleriand va Shimoliy Yerlar (Birinchi Davr) | docs/02_INFORMATION_ARCHITECTURE.md (§2) | ✅ Mavjud | 150.3 KB | ✅ Mavjud |
| **orta-yer** | Gʻarbiy Oʻrta-yer (Endor) (Ikkinchi va Uchinchi Davrlar) | docs/02_INFORMATION_ARCHITECTURE.md (§2) | ✅ Mavjud | 263.2 KB | ✅ Mavjud |
| **numenor** | Númenor Orol-Qirolligi (Elenna) (Ikkinchi Davr) | docs/02_INFORMATION_ARCHITECTURE.md (§2) | ❌ Rejalashtirilgan (Faza 7) | — | — |
| **valinor** | Aman va Valinor (Boqiy Gʻarb) (Daraxtlar va Ilk Davrlar) | docs/02_INFORMATION_ARCHITECTURE.md (§2) | ❌ Rejalashtirilgan (Faza 7) | — | — |

**Xulosa:** Hozirda **2 ta** asosiy planar vektor SVG xaritasi (`beleriand-planar.svg` va `middle-earth-planar.svg`) mavjud va interaktiv atlasda toʻliq ishlaydi. `numenor` va `valinor` xaritalari arxitekturada koʻzda tutilgan boʻlib, kelgusi kontent kengaytirish bosqichida qoʻshilishi belgilangan.

---

## 4. Har Bir Toʻplamdagi Eng Kichik 10 ta Fayl (Potensial Yupqa Yozuvlar)

Quyidagi jadvallarda fayl hajmiga koʻra eng ixcham (yupqa boʻlishi mumkin boʻlgan) yozuvlar keltirilgan. Bu roʻyxat kelgusi Faza 7 da maqolalarni chuqurlashtirish va boyitish uchun asosiy nishon hisoblanadi.

### Toʻplam: `articles` (Jami: 8 ta)

| # | Slug / Fayl | Nomi / Sarlavhasi | Fayl Hajmi (bayt) |
| :-: | :--- | :--- | :-: |
| 1 | `sub-creation-nazariyasi.md` | Sub-creation (Quyi-yaratilish) Nazariyasi va Mifopoetika | 3255 B |
| 2 | `feanor-qasamyodi-tahlili.md` | Fëanor Qasamyodi va Noldor Tragediyasi Tahlili | 3276 B |
| 3 | `jrr-tolkien-tarjimai-hol.md` | J.R.R. Tolkien: Hayot Yoʻli, Oksford va Mifologik Meros | 3480 B |
| 4 | `legendarium-matn-tarixi.md` | Legendarium Matn Tarixi: «Yoʻqolgan Ertaklar»dan «The Silmarillion»gacha | 5606 B |
| 5 | `hokimiyat-va-mashina-vasvasasi.md` | Hokimiyat, Sanʼat va «Mashina» Vasvasasi: Fëanor, Celebrimbor hamda Sauron | 5946 B |
| 6 | `jrr-tolkien-filologiya-va-beowulf.md` | J.R.R. Tolkienning Filologik Metodi: «Beowulf», Qadimgi Tillar va Shimoliy Jasorat | 6105 B |
| 7 | `kitob-va-ekran-qiyosiy-tahlil.md` | Matn va Ekran: «Uzuklar Hukmdori» Romanining Kinematografik Talqini Tahlili | 6291 B |
| 8 | `olim-va-boqiylik-mavzusi.md` | Oʻlim va Boqiylik: Elflar Taqdiri hamda «Insonlar Inʼomi» | 6976 B |

### Toʻplam: `books` (Jami: 35 ta)

| # | Slug / Fayl | Nomi / Sarlavhasi | Fayl Hajmi (bayt) |
| :-: | :--- | :--- | :-: |
| 1 | `the-war-of-the-jewels.json` | Javohirlar Urushi | 3697 B |
| 2 | `the-book-of-lost-tales-2.json` | Yoʻqolgan Qissalar Kitobi: 2-qism | 3751 B |
| 3 | `the-peoples-of-middle-earth.json` | Oʻrta-yer Xalqlari | 3944 B |
| 4 | `beowulf-a-translation-and-commentary.json` | Beowulf: Tarjima va Izohlar | 3997 B |
| 5 | `morgoths-ring.json` | Morgoth Halqasi | 4019 B |
| 6 | `letters-from-father-christmas.json` | Qorbobodan Xatlar | 4105 B |
| 7 | `jrr-tolkien-a-biography.json` | J.R.R. Tolkien: Biografiya | 4433 B |
| 8 | `the-book-of-lost-tales-1.json` | Yoʻqolgan Qissalar Kitobi: 1-qism | 4495 B |
| 9 | `roverandom.json` | Roverandom | 4554 B |
| 10 | `finn-and-hengest.json` | Finn va Hengest | 4677 B |

### Toʻplam: `characters` (Jami: 81 ta)

| # | Slug / Fayl | Nomi / Sarlavhasi | Fayl Hajmi (bayt) |
| :-: | :--- | :--- | :-: |
| 1 | `finarfin.json` | Finarfin | 3499 B |
| 2 | `eorl.json` | Yosh Eorl | 3659 B |
| 3 | `maeglin.json` | Maeglin | 3743 B |
| 4 | `helm-hammerhand.json` | Xelm Bolgʻaqoʻl | 3759 B |
| 5 | `maglor.json` | Maglor | 3778 B |
| 6 | `bard-the-bowman.json` | Kamonchi Bard (Bard I) | 3793 B |
| 7 | `nienor.json` | Niënor Níniel | 3794 B |
| 8 | `balin.json` | Balin | 3816 B |
| 9 | `elwing.json` | Elwing Oq | 3882 B |
| 10 | `smaug.json` | Smaug | 3908 B |

### Toʻplam: `cosmology` (Jami: 8 ta)

| # | Slug / Fayl | Nomi / Sarlavhasi | Fayl Hajmi (bayt) |
| :-: | :--- | :--- | :-: |
| 1 | `ea.json` | Eä (Moddiy Olam) | 1329 B |
| 2 | `kuma.json` | Kúma (Tashqi Boʻshliq) | 1423 B |
| 3 | `anar-va-isil.json` | Anar va Isil (Quyosh, Oy va Eärendil Yulduzi) | 1610 B |
| 4 | `ikki-daraxt.json` | Valinorning Ikki Daraxti | 1749 B |
| 5 | `ainulindale.json` | Ainulindalë va Oʻchmas Olov | 2259 B |
| 6 | `togri-yol-va-aklallabeth.json` | Yassi Arda, Dunyoning Dumaloqlashuvi va Toʻgʻri Yoʻl | 2294 B |
| 7 | `mandos-va-fea-hroa.json` | Fëa va Hröa: Ruh, Tana va Mandos Zallari Metafizikasi | 2399 B |
| 8 | `muqaddas-nur.json` | Muqaddas Nur | 6611 B |

### Toʻplam: `events` (Jami: 17 ta)

| # | Slug / Fayl | Nomi / Sarlavhasi | Fayl Hajmi (bayt) |
| :-: | :--- | :--- | :-: |
| 1 | `hornburg-jangi.json` | Hornburg Jangi | 4034 B |
| 2 | `halqa-urushi.json` | Halqa Urushi | 4043 B |
| 3 | `pelennor-dalalari-jangi.json` | Pelennor Dalalari Jangi | 4106 B |
| 4 | `besh-armiya-jangi.json` | Besh Armiya Jangi | 4118 B |
| 5 | `silmaril-safari.json` | Silmaril Safari (Beren va Lúthien) | 4125 B |
| 6 | `qudrat-uzuklarining-yasalishi.json` | Qudrat Uzuklarining Yasalishi | 4126 B |
| 7 | `gazab-urushi.json` | Gʻazab Urushi (Buyuk Jang) | 4135 B |
| 8 | `khazad-dumning-qulashi.json` | Khazad-dûmning Qulashi | 4143 B |
| 9 | `pelargir-jangi.json` | Pelargir Jangi | 4150 B |
| 10 | `gondolinning-qulashi.json` | Gondolinning Qulashi | 4163 B |

### Toʻplam: `genealogies` (Jami: 6 ta)

| # | Slug / Fayl | Nomi / Sarlavhasi | Fayl Hajmi (bayt) |
| :-: | :--- | :--- | :-: |
| 1 | `durin-avlodlari.json` | Durin Avlodlari (Uzunsoqollar) Nasabnomasi | 2544 B |
| 2 | `elros-va-gondor-shohlari.json` | Elros va Gondor Shohlari Nasabnomasi | 2652 B |
| 3 | `rohan-shohlari.json` | Eorl va Rohan Shohlari Nasabnomasi | 2676 B |
| 4 | `finwe-xonadoni.json` | Finwë Xonadoni Nasabnomasi | 3320 B |
| 5 | `edain-va-yarim-elflar.json` | Edain va Yarim-Elflar (Peredhil) Nasabnomasi | 4035 B |
| 6 | `shayr-xonadonlari.json` | Shayr Xonadonlari (Baggins, Tuk va Brendibak) Nasabnomasi | 4208 B |

### Toʻplam: `languages` (Jami: 10 ta)

| # | Slug / Fayl | Nomi / Sarlavhasi | Fayl Hajmi (bayt) |
| :-: | :--- | :--- | :-: |
| 1 | `westron.json` | Westron (Umumiy Nutq / Adûni) | 4715 B |
| 2 | `adunaic.json` | Adûnaic (Númenor Tili) | 4810 B |
| 3 | `cirth.json` | Cirth (Angerthas Runalari) | 4825 B |
| 4 | `khuzdul.json` | Khuzdul | 4826 B |
| 5 | `quenya.json` | Quenya | 4844 B |
| 6 | `tengwar.json` | Tengwar | 4929 B |
| 7 | `valarin.json` | Valarin (Ainur Tili) | 4965 B |
| 8 | `rohirric.json` | Rohirric (Rohan Tili) | 5009 B |
| 9 | `sindarin.json` | Sindarin | 5170 B |
| 10 | `qora-nutq.json` | Qora Nutq (Black Speech) | 5274 B |

### Toʻplam: `peoples` (Jami: 11 ta)

| # | Slug / Fayl | Nomi / Sarlavhasi | Fayl Hajmi (bayt) |
| :-: | :--- | :--- | :-: |
| 1 | `edain.json` | Edain | 4784 B |
| 2 | `sindar.json` | Sindar | 4827 B |
| 3 | `noldor.json` | Noldor | 4914 B |
| 4 | `nandor-va-silvan.json` | Nandor va Oʻrmon Elflari | 4921 B |
| 5 | `xazad.json` | Xazad (Mittilar) | 4963 B |
| 6 | `rohirrim.json` | Rohirrim (Rohan Chavandozlari) | 4970 B |
| 7 | `numenorliklar.json` | Númenorliklar | 5059 B |
| 8 | `entlar.json` | Entlar (Onodrim) | 5066 B |
| 9 | `dunedain.json` | Dúnedain (Gʻarb Insonlari) | 5081 B |
| 10 | `istari.json` | Istari (Sehrgarlar Ordeni) | 5268 B |

### Toʻplam: `places` (Jami: 45 ta)

| # | Slug / Fayl | Nomi / Sarlavhasi | Fayl Hajmi (bayt) |
| :-: | :--- | :--- | :-: |
| 1 | `himring.json` | Himring | 1470 B |
| 2 | `tol-galen.json` | Tol Galen | 1491 B |
| 3 | `brethil.json` | Brethil Oʻrmoni | 1522 B |
| 4 | `vinyamar.json` | Vinyamar | 1551 B |
| 5 | `falas.json` | Falas | 1588 B |
| 6 | `belegost.json` | Belegost | 1606 B |
| 7 | `dorthonion.json` | Dorthonion | 1669 B |
| 8 | `nogrod.json` | Nogrod | 1682 B |
| 9 | `tol-sirion.json` | Tol Sirion (Tol-in-Gaurhoth) | 1692 B |
| 10 | `dunharrow.json` | Dunharrow | 1880 B |

---

## 5. Yigʻilgan Sahifalar Soni (`dist/` Output)

- **Astro Build Natijasi:** **232** ta statik HTML sahifasi
- **Pagefind Qidiruv Indeksi:** 231 ta sahifa indekslangan (maxsus qidiruv atributiga ega sahifalar)
- **Sitemap URL lari:** 231 ta kanonik sahifa

### Sahifalar Taqsimoti:
- Bosh sahifa (`/`): 1
- Qidiruv (`/qidiruv/`): 1
- Xaritalar va Atlas (`/xaritalar/` va 45 ta toponim sahifasi): 46
- Qahramonlar (`/qahramonlar/` va 81 ta qahramon sahifasi): 82
- Kitoblar (`/kitoblar/` va 35 ta kitob sahifasi): 36
- Tarix (`/tarix/` va 17 ta voqea sahifasi): 18
- Maqolalar (`/maqolalar/` va 8 ta ilmiy maqola): 9
- Arda / Kosmologiya (`/olam/` va 8 ta kosmologik sahifa): 9
- Tillar va Xalqlar (`/xalqlar-va-tillar/` va 21 ta til/xalq sahifasi): 22
- Nasabnomalar (`/nasabnomalar/` va 6 ta shajara sahifasi): 7
- Tolkien Merosi (`/tolkien/` va 2 ta biografik sahifa): 3

---

## 6. Kelgusi Bosqichlar Uchun Tavsiyalar (Faza 7)

1. **Yupqa Yozuvlarni Chuqurlashtirish:** Eng kichik fayllar (masalan, ayrim joylar va voqealar) birlamchi matnlar asosida kengaytirilishi va iqtiboslar bilan toʻldirilishi kerak.
2. **Portretlar Qamrovini Kengaytirish:** Hozirgi 21 ta portretdan tashqari qolgan 60 ta qahramon uchun ilmiy va vizual kanonga mos portretlar yaratish rejalashtirilsin.
3. **Númenor va Valinor Xaritalari:** `docs/02` da vaʼda qilingan qolgan 2 ta hudud uchun vektor kartografiya aktivlarini tayyorlash va Leaflet koordinatalar sistemasiga ulash.
