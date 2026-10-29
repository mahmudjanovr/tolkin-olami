# 09. KNOWN FAILURE MODES AND MITIGATION STRATEGIES

**Loyiha nomi:** TOLKIEN OLAMI  
**Hujjat holati:** Faza 1 (Arxitektura va rejalashtirish)  
**Oxirgi yangilanish:** 2026-10-11

---

## 1. Muammo Konteksti

Oldingi ishlab chiqish tajribalari va murakkab ensiklopedik loyihalarni tahlil qilish natijasida 9 ta asosiy xatolik (failure modes) aniqlangan. Ushbu hujjat har bir xatolikning tub ildizini (root cause) ochib beradi va **TOLKIEN OLAMI** arxitekturasida ularning qayta takrorlanishiga yoʻl qoʻymaslik uchun aniq kod va dizayn darajasidagi himoya mexanizmlarini belgilaydi.

---

## 2. Xatoliklar Matritsasi va Meʼmoriy Himoya

```
┌────────────────────────────────────────────────────────────────────────┐
│                   XATOLIKLAR VA MEʼMORIY HIMOYALASH                    │
│                                                                        │
│  [XATOLIK]                              [ILDIZI]           [YECHIM]    │
│  1. Xarita boʻshab qolishi (Blank Map) ──> DOM yoʻqolishi   ──> Lifecycle│
│  2. Notoʻgʻri viewport va marker yangilanishi ──> Tartibsizlik ──> State Qatʼiyligi │
│  3. Desktop panellari toʻqnashuvi      ──> z-index / abs   ──> CSS Grid│
│  4. Sahifalararo dizayn nomuvofiqligi  ──> Tarqoq CSS      ──> Tokenlar│
│  5. Nasabnomaning murakkablashuvi      ──> Ogʻir kutubxona ──> Oddiy SVG│
│  6. Chala va boʻsh kontent sahifalari  ──> Tahrirsizlik    ──> Zod Sxemasi│
│  7. Xotira va unumdorlik pasayishi     ──> Ogʻir JS        ──> Static SSG│
│  8. Mobil boshqaruvning buzilishi      ──> Kichraytirish   ──> Bottom Sheet│
│  9. Soxta kanon va AI portretlari      ──> Tekshiruvsizlik ──> Qatʼiy Filtr│
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Har Bir Xatolik Boʻyicha Chuqur Tahlil va Yechim

### 1-Xatolik: Tablar yoki panellarni almashtirganda xarita boʻshab (qorayib) qolishi
- **Tub ildizi (Root Cause):** Leaflet yoki Canvas konteyneri yashirilganda (`display: none` yoki DOM-dan ajratilganda) oʻzining kenglik va balandlik oʻlchamlarini yoʻqotadi (0x0 piksel boʻlib qoladi). Panel qayta ochilganda esa Leaflet avvalgi 0x0 keshida qolib, xarita koshinlarini yuklay olmaydi.
- **Meʼmoriy Yechim:**
  1. Xarita konteyneri hech qachon `display: none` qilinmaydi. Buning oʻrniga koʻrinishni boshqarishda `visibility: hidden` yoki CSS transformatsiyalari ishlatiladi.
  2. Konteynerga doimiy `ResizeObserver` ulanadi. Konteyner oʻlchami 0 dan kattalashishi bilanoq avtomatik tarzda `map.invalidateSize()` chaqiriladi (100 ms debounce bilan).
  3. Konteyner initsializatsiya qilinishidan oldin uning oʻlchami tekshiriladi: `if (container.clientWidth === 0) return;`.

### 2-Xatolik: Viewport yangilanishi, marker zichligi va resize tartibining chalkashishi
- **Tub ildizi:** Bir vaqtning oʻzida xarita masshtabi oʻzgarishi, yangi markerlar yuklanishi va oyna oʻlchami oʻzgarishi asinxron tartibsiz roʻy berganda xarita noaniq nuqtaga sakrab ketadi.
- **Meʼmoriy Yechim:**
  - Deterministik holat oqimi: Birinchi navbatda — konteyner oʻlchami (`invalidateSize`), ikkinchi navbatda — markaz va zoom (`setView`), uchinchi navbatda — mos masshtabdagi markerlar klasteri (`updateMarkers`) ketma-ket (sequential) bajariladi.

### 3-Xatolik: Desktop panellari xaritani yoki bir-birini toʻsib qoʻyishi (Overlap)
- **Tub ildizi:** Panellarning barchasini mutlaq joylashtirish (`position: absolute`) va boshqarib boʻlmaydigan `z-index: 9999` urushlari.
- **Meʼmoriy Yechim:**
  - Desktopda (>= 1024px) xarita va maʼlumot paneli **CSS Grid** orqali ikkita qatʼiy ajratilgan katakda turadi (`grid-template-columns: 1fr 420px;`). Panel xarita ustiga jismonan chiqa olmaydi, chunki ular alohida ustunlardadir.
  - Xarita kengligi `min-width: 0;` qilib oʻrnatiladi, bu esa CSS Grid flex-shrink xatoliklarini yoʻqotadi.

### 4-Xatolik: Sahifalar orasidagi vizual nomuvofiqlik
- **Tub ildizi:** Har bir sahifa uchun alohida CSS fayllar yaratilishi va yagona dizayn tizimining yoʻqligi.
- **Meʼmoriy Yechim:**
  - Barcha sahifalar faqat `src/styles/tokens.css` dagi markaziy oʻzgaruvchilardan foydalanadi.
  - Barcha maqolalar bitta asosiy tartib (`EditorialLayout.astro`) orqali render qilinadi. Boshqa maxsus tartiblar yaratish taqiqlanadi.

### 5-Xatolik: Nasabnomalarning boshqarib boʻlmas darajada murakkablashib ketishi
- **Tub ildizi:** D3.js yoki boshqa fizik grafik kutubxonalarida keraksiz tugmachalar, oʻlchov asboblari va tushunarsiz kolliziya harakatlarining tiqishtirilishi.
- **Meʼmoriy Yechim:**
  - Nasabnomaning asosiy maqsadi — kim kimning avlodi ekanini aniq oʻqishdir.
  - Faqat statik va silliq SVG daraxti, aniq vertikal avlodlar pogʻonasi (Otalar -> Bolalar) va qidiruv boʻyicha shaxsni yoritish (highlight). Murakkab fizik simulyatsiyalar taqiqlanadi.

### 6-Xatolik: Chala, boʻsh va sifatsiz kontent sahifalari
- **Tub ildizi:** Kontent qoralamalari uchun qatʼiy talablarning yoʻqligi sababli bir jumlali sahifalarning chop etilishi.
- **Meʼmoriy Yechim:**
  - Zod sxemasi orqali har bir sahifada `summary` (kamida 150 ta soʻz), `sources` (kamida 1 ta tasdiqlangan kitob bobi) va `canon_status` boʻlishi majburiy qilinadi. Talabga javob bermaydigan sahifa build jarayonidan oʻtmaydi (`build error`).

### 7-Xatolik: 8 GB RAM va past quvvatli telefonlarda ishlashning sekinlashishi
- **Tub ildizi:** Sahifalarga ogʻir JavaScript kutubxonalari, WebGL 3D renderlar va doimiy aylanuvchi animatsiyalarning yuklanishi.
- **Meʼmoriy Yechim:**
  - Asosiy kontent sahifalarida **0 KB JavaScript** (sof HTML/CSS).
  - WebGL va Three.js butunlay rad etildi.
  - Barcha rasmlar zamonaviy `.webp` formatida, qatʼiy `width` va `height` atributlari bilan yuklanadi (CLS = 0).

### 8-Xatolik: Mobil qurilmalarda boshqaruvning buzilishi
- **Tub ildizi:** Desktop uchun chizilgan xarita va jadvallarni shunchaki mobil ekranga tiqish.
- **Meʼmoriy Yechim:**
  - Xaritalar uchun pastdan chiquvchi mobil panel (Bottom Sheet).
  - Nasabnomalar uchun avtomatik vertikal akordeon rejimi.
  - Barcha teginish joylari kamida `44x44px`.

### 9-Xatolik: Soxta faktlar, toʻqima iqtiboslar va AI chizgan portretlar
- **Tub ildizi:** Internetdagi tekshirilmagan fandom maʼlumotlari yoki Midjourney orqali chizilgan rasmlarning asar sanʼati deb yuklanishi.
- **Meʼmoriy Yechim:**
  - Qatʼiy qoida: birorta ham sunʼiy intellekt chizgan portret qabul qilinmaydi.
  - Har bir fakt Oksford uslubidagi iqtibos bilan asoslanishi shart (`[Kitob, Bob]`).
  - Tashqi kinofilmlar talqini asosiy matnga kiritilmaydi, faqat sahifa oxiridagi maxsus ajratilgan blokda beriladi.
