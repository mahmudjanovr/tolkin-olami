# Tolkien Olami — Loyihaning Haqiqiy Holati Audit Hisoboti (Current State Audit)

> **Avtomatik yaratilgan:** Ushbu hisobot `scripts/audit-content.cjs` skripti orqali loyihaning haqiqiy holatini sinchkovlik bilan skanerlash orqali tuzildi.  
> **Sana:** 2026-11-04 11:08:48 UTC  
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

- **Jami qahramonlar yozuvi (`src/content/characters/`):** 81 ta (100% toʻliq audit qilindi)
- **Portretga ega va toʻliq integratsiyalangan qahramonlar:** 35 ta (43.2%)
  - *21 ta dastlabki tasdiqlangan portretlar saqlab qolindi*
  - *14 ta yangi original portretlar generatsiya qilindi va Sharp orqali WebP formatda integratsiya qilindi*
- **Portret generatsiyasi navbatidagi qahramonlar:** 46 ta (56.8% — har biri uchun individual akademik prompt va providans `docs/CHARACTER_VISUAL_AUDIT.md` va `src/data/character-production-manifest.json` da toʻliq tayyorlangan)
- **Diskdagi WebP tasvirlari (`public/images/characters/`):** 35 ta juftlik (70 ta fayl: 600x800 asosiy va 300x400 thumbnail WebP)
- **Manifestda roʻyxatga olinganlar (`src/data/character-portraits.ts`):** 35 ta

### Portretga Ega Boʻlgan Qahramonlar (35 ta)
| Slug | Ismi | Rasm Manzili | Provenance Turi |
| :--- | :--- | :--- | :--- |
| `finwe` | Finwë | `/images/characters/finwe.webp` | Kanonik/Derivativ tasdiqlangan |
| `feanor` | Fëanor | `/images/characters/feanor.webp` | Kanonik/Derivativ tasdiqlangan |
| `gil-galad` | Gil-galad | `/images/characters/gil-galad.webp` | Kanonik/Derivativ tasdiqlangan |
| `galadriel` | Galadriel | `/images/characters/galadriel.webp` | Kanonik/Derivativ tasdiqlangan |
| `gollum` | Gollum | `/images/characters/gollum.webp` | Kanonik/Derivativ tasdiqlangan |
| `fingolfin` | Fingolfin | `/images/characters/fingolfin.webp` | Kanonik/Derivativ tasdiqlangan |
| `arwen` | Arwen Undómiel | `/images/characters/arwen.webp` | Kanonik/Derivativ tasdiqlangan |
| `boromir` | Boromir | `/images/characters/boromir.webp` | Kanonik/Derivativ tasdiqlangan |
| `theoden` | Théoden | `/images/characters/theoden.webp` | Kanonik/Derivativ tasdiqlangan |
| `bilbo-baggins` | Bilbo Baggins | `/images/characters/bilbo-baggins.webp` | Kanonik/Derivativ tasdiqlangan |
| `beren` | Beren | `/images/characters/beren.webp` | Kanonik/Derivativ tasdiqlangan |
| `aragorn` | Aragorn II | `/images/characters/aragorn.webp` | Kanonik/Derivativ tasdiqlangan |
| `gimli` | Gimli | `/images/characters/gimli.webp` | Kanonik/Derivativ tasdiqlangan |
| `legolas` | Legolas Greenleaf | `/images/characters/legolas.webp` | Kanonik/Derivativ tasdiqlangan |
| `elrond` | Elrond | `/images/characters/elrond.webp` | Kanonik/Derivativ tasdiqlangan |
| `saruman` | Saruman | `/images/characters/saruman.webp` | Kanonik/Derivativ tasdiqlangan |
| `samwise-gamgee` | Samwise Gamgee | `/images/characters/samwise-gamgee.webp` | Kanonik/Derivativ tasdiqlangan |
| `sauron` | Sauron | `/images/characters/sauron.webp` | Kanonik/Derivativ tasdiqlangan |
| `turin` | Túrin Turambar | `/images/characters/turin.webp` | Kanonik/Derivativ tasdiqlangan |
| `gandalf` | Gandalf | `/images/characters/gandalf.webp` | Kanonik/Derivativ tasdiqlangan |
| `frodo-baggins` | Frodo Baggins | `/images/characters/frodo-baggins.webp` | Kanonik/Derivativ tasdiqlangan |
| `celebrimbor` | Celebrimbor | `/images/characters/celebrimbor.webp` | Original derivativ / matn vizualizatsiyasi |
| `anarion` | Anárion | `/images/characters/anarion.webp` | Original matn vizualizatsiyasi |
| `ar-pharazon` | Ar-Pharazôn Oltin | `/images/characters/ar-pharazon.webp` | Original derivativ vizualizatsiya |
| `balin` | Balin | `/images/characters/balin.webp` | Original derivativ vizualizatsiya |
| `celeborn` | Celeborn | `/images/characters/celeborn.webp` | Original derivativ vizualizatsiya |
| `elendil` | Elendil | `/images/characters/elendil.webp` | Original derivativ vizualizatsiya |
| `eomer` | Éomer | `/images/characters/eomer.webp` | Original derivativ vizualizatsiya |
| `eowyn` | Éowyn | `/images/characters/eowyn.webp` | Original derivativ vizualizatsiya |
| `isildur` | Isildur | `/images/characters/isildur.webp` | Original derivativ vizualizatsiya |
| `meriadoc-brandybuck` | Meriadoc Brandybuck | `/images/characters/meriadoc-brandybuck.webp` | Original derivativ vizualizatsiya |
| `peregrin-took` | Peregrin Took | `/images/characters/peregrin-took.webp` | Original derivativ vizualizatsiya |
| `radagast` | Radagast | `/images/characters/radagast.webp` | Original derivativ vizualizatsiya |
| `thorin-oakenshield` | Thorin II Oakenshield | `/images/characters/thorin-oakenshield.webp` | Original derivativ vizualizatsiya |
| `thranduil` | Thranduil | `/images/characters/thranduil.webp` | Original derivativ vizualizatsiya |

Batafsil maʼlumot uchun qarang: [`docs/CHARACTER_VISUAL_AUDIT.md`](CHARACTER_VISUAL_AUDIT.md).

---

## 3. Kartografiya va Xaritalar Holati

`docs/02_INFORMATION_ARCHITECTURE.md` arxitekturasida vaʼda qilingan xaritalar va ularning diskdagi (`public/assets/maps/`) haqiqiy holati:

| Hudud (ID) | Tavsif | Vaʼda qilingan hujjat | Haqiqiy holat | Fayl hajmi | Litsenziya fayli |
| :--- | :--- | :--- | :---: | :---: | :---: |
| **beleriand** | Beleriand va Shimoliy Yerlar (Birinchi Davr) | docs/02_INFORMATION_ARCHITECTURE.md (§2) | ✅ Mavjud | 150.3 KB | ✅ Mavjud |
| **orta-yer** | Gʻarbiy Oʻrta-yer (Endor) (Ikkinchi va Uchinchi Davrlar) | docs/02_INFORMATION_ARCHITECTURE.md (§2) | ✅ Mavjud | 263.1 KB | ✅ Mavjud |
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
| 3 | `denethor-ii.json` | Denethor II | 3729 B |
| 4 | `maeglin.json` | Maeglin | 3743 B |
| 5 | `maglor.json` | Maglor | 3778 B |
| 6 | `bard-the-bowman.json` | Kamonchi Bard (Bard I) | 3793 B |
| 7 | `nienor.json` | Niënor Níniel | 3794 B |
| 8 | `balin.json` | Balin | 3816 B |
| 9 | `helm-hammerhand.json` | Helm Hammerhand (Bolgʻaqoʻl) | 3874 B |
| 10 | `elwing.json` | Elwing Oq | 3882 B |

### Toʻplam: `cosmology` (Jami: 8 ta)

| # | Slug / Fayl | Nomi / Sarlavhasi | Fayl Hajmi (bayt) |
| :-: | :--- | :--- | :-: |
| 1 | `ea.json` | Eä | 4253 B |
| 2 | `anar-va-isil.json` | Anar va Isil | 4487 B |
| 3 | `kuma.json` | Kúma | 4494 B |
| 4 | `ainulindale.json` | Ainulindalë va Oʻchmas Olov | 4823 B |
| 5 | `togri-yol-va-aklallabeth.json` | Yassi Arda, Dunyoning Dumaloqlashuvi va Toʻgʻri Yoʻl | 4999 B |
| 6 | `ikki-daraxt.json` | Valinorning Ikki Daraxti | 5222 B |
| 7 | `mandos-va-fea-hroa.json` | Fëa va Hröa: Ruh, Tana va Mandos Zallari Metafizikasi | 5323 B |
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
| 1 | `elros-va-gondor-shohlari.json` | Elros va Gondor Shohlari Nasabnomasi | 2652 B |
| 2 | `durin-avlodlari.json` | Durin Avlodlari (Uzunsoqollar) Nasabnomasi | 2712 B |
| 3 | `rohan-shohlari.json` | Eorl va Rohan Shohlari Nasabnomasi | 2846 B |
| 4 | `edain-va-yarim-elflar.json` | Edain va Yarim-Elflar (Peredhil) Nasabnomasi | 4035 B |
| 5 | `finwe-xonadoni.json` | Finwë Xonadoni Nasabnomasi | 4205 B |
| 6 | `shayr-xonadonlari.json` | Shayr Xonadonlari (Baggins, Tuk va Brendibak) Nasabnomasi | 4208 B |

### Toʻplam: `languages` (Jami: 10 ta)

| # | Slug / Fayl | Nomi / Sarlavhasi | Fayl Hajmi (bayt) |
| :-: | :--- | :--- | :-: |
| 1 | `westron.json` | Westron (Umumiy Nutq / Adûni) | 4715 B |
| 2 | `adunaic.json` | Adûnaic (Númenor Tili) | 4810 B |
| 3 | `khuzdul.json` | Khuzdul | 4826 B |
| 4 | `cirth.json` | Cirth (Angerthas Runalari) | 4893 B |
| 5 | `quenya.json` | Quenya | 4893 B |
| 6 | `tengwar.json` | Tengwar | 4929 B |
| 7 | `valarin.json` | Valarin (Ainur Tili) | 4965 B |
| 8 | `rohirric.json` | Rohirric (Rohan Tili) | 5062 B |
| 9 | `sindarin.json` | Sindarin | 5170 B |
| 10 | `qora-nutq.json` | Qora Nutq (Black Speech) | 5344 B |

### Toʻplam: `peoples` (Jami: 11 ta)

| # | Slug / Fayl | Nomi / Sarlavhasi | Fayl Hajmi (bayt) |
| :-: | :--- | :--- | :-: |
| 1 | `edain.json` | Edain | 4784 B |
| 2 | `sindar.json` | Sindar | 4827 B |
| 3 | `noldor.json` | Noldor | 4914 B |
| 4 | `nandor-va-silvan.json` | Nandor va Oʻrmon Elflari | 4921 B |
| 5 | `rohirrim.json` | Rohirrim (Rohan Chavandozlari) | 4970 B |
| 6 | `xazad.json` | Khazad (Mittilar) | 5037 B |
| 7 | `dunedain.json` | Dúnedain (Gʻarb Insonlari) | 5081 B |
| 8 | `entlar.json` | Entlar (Onodrim) | 5128 B |
| 9 | `numenorliklar.json` | Númenorliklar | 5133 B |
| 10 | `istari.json` | Istari (Sehrgarlar Ordeni) | 5268 B |

### Toʻplam: `places` (Jami: 45 ta)

| # | Slug / Fayl | Nomi / Sarlavhasi | Fayl Hajmi (bayt) |
| :-: | :--- | :--- | :-: |
| 1 | `nargothrond.json` | Nargothrond | 3736 B |
| 2 | `orodruin.json` | Orodruin (Hukm Togʻi) | 3837 B |
| 3 | `barad-dur.json` | Barad-dûr | 3893 B |
| 4 | `helms-deep.json` | Helm jarligi (Helm's Deep / Hornburg) | 3893 B |
| 5 | `gondolin.json` | Gondolin | 3894 B |
| 6 | `paths-of-the-dead.json` | Oʻliklar Yoʻli | 3966 B |
| 7 | `havens-of-sirion.json` | Sirion Bandargohi | 3973 B |
| 8 | `dead-marshes.json` | Oʻlik Botqoqliklar | 3993 B |
| 9 | `alqualonde.json` | Alqualondë | 3995 B |
| 10 | `angband.json` | Angband | 3996 B |

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
