# 08. PHASED IMPLEMENTATION ROADMAP AND APPROVAL CHECKPOINTS

**Loyiha nomi:** TOLKIEN OLAMI  
**Hujjat holati:** Faza 7 (Jarayonda — Kontentni toʻldirish va sayqallash)  
**Oxirgi yangilanish:** 2026-10-29

---

## 1. Yoʻl Xaritasi Falsafasi

Loyiha qatʼiy bosqichma-bosqich (phased) tartibda amalga oshiriladi. Har bir faza oʻzining aniq topshiriqlari, qabul qilish mezonlari (Definition of Done) va **foydalanuvchi tasdigʻi nazorat nuqtalariga (Approval Gate)** ega boʻlib, 0–6 fazalar toʻliq yakunlandi va testlar bilan tasdiqlandi. Hozirda Faza 7 (kontentni boyitish va sayqallash) jarayoni olib borilmoqda.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   BOSQICHMA-BOSQICH AMALGA OSHIRISH                    │
│                                                                        │
│  [FAZA 0: Discovery & Meʼmoriy Rejalashtirish]  ──> [YAKUNLANDI]       │
│  ───────────────────────────────────────────────────────────────────  │
│  [FAZA 1: Hujjatlashtirish & Git Poydevori]    ──> [YAKUNLANDI]       │
│  • 10 ta arxitektura va holat hujjati yaratilishi                      │
│  • Git initsializatsiyasi                                             │
│  ───────────────────────────────────────────────────────────────────  │
│  [FAZA 2: Loyiha Karkasi, Shriftlar & Zod Sxemalari] ──> [YAKUNLANDI]  │
│  • Astro 7.3.8 static, TypeScript strict, Plain CSS tokenlari         │
│  • Zod maʼlumotlar shartnomalari va 320 ta Vitest testlari            │
│  ───────────────────────────────────────────────────────────────────  │
│  [FAZA 3: Editorial Qoliplar & Pagefind Qidiruvi] ──> [YAKUNLANDI]    │
│  • EditorialLayout, 11 ta asosiy marshrut tizimi                      │
│  • Pagefind integratsiyasi va oʻzbek diakritik normalizatsiyasi       │
│  ───────────────────────────────────────────────────────────────────  │
│  [FAZA 4: Interaktiv Orollar (Atlas & Nasabnoma)] ──> [YAKUNLANDI]    │
│  • Leaflet xaritasi (xavfsiz SSR lifecycle, boʻshashga qarshi himoya) │
│  • Nasabnoma SVG daraxti (mobil akordeon bilan)                       │
│  ───────────────────────────────────────────────────────────────────  │
│  [FAZA 5: Ilmiy Kontent Grafigi & Oʻzbekcha Maqolalar] ──> [YAKUNLANDI]│
│  • 35 kitob, 81 shaxs, 45 toponim, 17 voqea, 6 shajara, 10 til, 11 xalq│
│  • Oksford iqtiboslari va Teskari iqtiboslar (Reverse Citations)      │
│  ───────────────────────────────────────────────────────────────────  │
│  [FAZA 6: E2E Regressiya Sinovlari & Cloudflare Pages Deploy] ─> [YAKUNLANDI]
│  • 64/64 Playwright testlari, WCAG 2.1 AA audit, Cloudflare _headers  │
│  • 232 ta statik sahifa (dist), Pagefind 231 ta sahifa indeksi        │
│  ───────────────────────────────────────────────────────────────────  │
│  [FAZA 7: Kontentni Toʻldirish va Sayqallash]   ──> [JARAYONDA]        │
│  • Style & glossary (uslubiyot va terminologik lugʻat)                │
│  • Yupqa yozuvlarni chuqurlashtirish (deepening thin entries)         │
│  • Yangi kontent (new content) va bibliografiyani toʻldirish          │
│  • Portretlar qamrovi (21 tadan 81 tagacha oshirish)                  │
│  • Kartografiya: Númenor va Valinor xaritalari integratsiyasi         │
│  • Yakuniy QA, regressiya sinovlari va ishlab chiqarish nashri        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Fazalarning Batafsil Spetsifikatsiyasi

### Faza 0: Loyihani Oʻrganish va Meʼmoriy Audit (Yakunlandi)
- **Bajarildi:** Ishchi muhit toʻliq tekshirildi, apparat vositalari (8 GB RAM, Node v24.21.0, Astro 7.3.8) qayd etildi, xatolar tahlil qilindi va dastlabki arxitektura taklif qilindi.

### Faza 1: Hujjatlashtirish va Git Poydevori (Yakunlandi)
- **Topshiriqlar:**
  - Git repositoriyasini initsializatsiya qilish.
  - `docs/` katalogida toʻliq meʼmoriy spetsifikatsiyalar va audit hisobotini yaratish.
- **Nazorat Nuqtasi 1 (Gate 1):** Barcha meʼmoriy hujjatlar tasdiqlandi.

### Faza 2: Loyiha Karkasi, Shriftlar va Maʼlumot Shartnomalari (Yakunlandi)
- **Topshiriqlar:**
  - Astro barqaror versiyasini npm orqali initsializatsiya qilish (`output: 'static'`, Astro 7.3.8).
  - TypeScript `strict: true` sozlamalarini oʻrnatish.
  - CSS dizayn tokenlari (`styles/tokens.css` va `styles/global.css`) bazasini yaratish (Yorugʻ editorial qogʻoz/siyoh/tilla tizimi).
  - Oʻzbek va Tolkien gliflarini toʻliq qamrab oluvchi litsenziyalangan veb-shriftlarni (EB Garamond, Literata, Inter) ulash va zaxira (fallback) zanjirini oʻrnatish.
  - `src/content/schemas.ts` da barcha tasdiqlangan Zod sxemalari toʻliq inventarini yaratish:
    1. `characters` (`characterSchema`)
    2. `peoples` (`peopleSchema`)
    3. `places` (`placeSchema`)
    4. `events` (`eventSchema`)
    5. `books` (`bookSchema`)
    6. `languages` (`languageSchema`)
    7. `genealogies` (`genealogySchema` — shajaralar, sulolalar va ziddiyatli nasablar uchun)
    8. `cosmology` (`cosmologySchema` — Eä, Arda va samoviy konsepsiyalar uchun)
    9. `articles` (`articleSchema` — falsafa, matnshunoslik hamda `/tolkien/` biografik tahlillarini toifalar orqali qamrab oladi).
  - Kanonik slug normalizatsiyasi (`toCanonicalSlug`) funksiyasi va build vaqtida toʻqnashuvlarni aniqlovchi (collision detection) mexanizmni yaratish.
  - Vitest orqali Zod sxemalari, normalizatsiya va toʻplamlararo havolalarni (cross-references) tekshiruvchi testlarni yoʻlga qoʻyish.
- **Qabul Qilish Mezonlari (Acceptance Criteria):**
  - [x] Barcha 9 ta toʻplam Zod sxemalaridan namunaviy maʼlumotlar xatosiz oʻtishi kerak (Tasdiqlandi: 320 ta Vitest testlari).
  - [x] Oʻzbekcha `oʻ` va `gʻ` harflari hamda Tolkien diakritikalari sluglarda toʻgʻri normalizatsiya qilinishi (`o`, `g`, ASCII) va toʻqnashuv yuz berganda build toʻxtashi sinovdan oʻtishi lozim (Tasdiqlandi).
- **Nazorat Nuqtasi 2 (Gate 2):** Sxemalar, shriftlar va normalizator testi toʻliq tasdiqlandi.

### Faza 3: Editorial Qoliplar va Global Qidiruv (Yakunlandi)
- **Topshiriqlar:**
  - `BaseLayout.astro` va `EditorialLayout.astro` (95% qogʻoz/siyoh, 5% tilla) yaratish.
  - 11 ta asosiy boʻlimning boshlangʻich sahifalarini (`pages/`) marshrut-model xaritasiga binoan yaratish.
  - Pagefind qidiruvini integratsiyalash, `Cmd+K` modali va oʻzbekcha normalizatsiya testlari.
- **Qabul Qilish Mezonlari (Acceptance Criteria):**
  - [x] Sahifalar JavaScriptsiz ham 100% oʻqilishi va navigatsiya qilinishi shart (Progressive Enhancement — Tasdiqlandi).
  - [x] Qidiruv modalida `oʻgʻri`, `o'g'ri`, `feanor`, `fëanor` soʻrovlari bir xil natija berishi shart (Tasdiqlandi: Playwright va Vitest).
- **Nazorat Nuqtasi 3 (Gate 3):** Navigatsiya va qidiruv modali toʻliq tasdiqlandi.

### Faza 4: Interaktiv Orollar (Atlas va Nasabnoma) (Yakunlandi)
- **Topshiriqlar:**
  - Leaflet asosidagi `<TolkienAtlas />` orolini Leaflet SSR Guard qoidasi asosida (faqat mijozda dinamik yuklanish, server build paytida `window` ga tegmaslik) qurish.
  - Planar koordinatalar `{ x, y }` va Leaflet `L.CRS.Simple` mappingi (`[y, x]`), URL holati (`?hudud=...&x=...&y=...&z=...`) va xavfsiz default bounds.
  - Desktop 2-ustunli Grid tartibi (overlap boʻlmasligi uchun) va mobil pastki paneli (bottom sheet).
  - SVG va semantik HTML asosidagi Nasabnoma daraxti komponentini yaratish (mobilda vertikal akordeon, ziddiyatli nasablar uchun uzuq-uzuq chiziqlar).
- **Qabul Qilish Mezonlari (Acceptance Criteria):**
  - [x] `npm run build` komandasi Leaflet tufayli server xatoligi bermasdan 100% muvaffaqiyatli yakunlanishi shart (Tasdiqlandi).
  - [x] Xarita konteyneri oʻlchami oʻzgarganda qorayib yoki boʻshab qolmasligi (`ResizeObserver` + `invalidateSize` — Tasdiqlandi).
  - [x] Desktopda maʼlumot paneli va xarita bir-birining ustiga chiqib ketmasligi shart (Tasdiqlandi).
- **Nazorat Nuqtasi 4 (Gate 4):** Xarita va nasabnoma mobil va desktopda toʻliq sinovdan oʻtkazildi va tasdiqlandi.

### Faza 5: Ilmiy Kontent Grafigi va Oʻzbekcha Ensiklopediya Maqolalari (Yakunlandi)
- **Topshiriqlar:**
  - 11 boʻlim boʻyicha chuqur akademik maqolalar yaratish (35 ta kitob, 81 ta shaxs, 45 ta toponim, 17 ta voqea, 6 ta shajara, 10 ta til, 11 ta xalq, 8 ta kosmologiya, 8 ta maqola).
  - Oʻzaro ikki tomonlama bogʻlanishlar (Knowledge Graph), Oksford iqtiboslari tizimi va Teskari Iqtiboslar (Reverse Citations) mexanizmi.
- **Qabul Qilish Mezonlari (Acceptance Criteria):**
  - [x] Barcha kitoblar, shaxslar va voqealar oʻzaro bogʻlangan boʻlishi va teskari iqtiboslar toʻliq render qilinishi shart (Tasdiqlandi: 221 ta kontent yozuvi).
  - [x] Barcha ilmiy manbalar Oksford standarti boʻyicha kanonik kitoblar bilan tasdiqlanishi shart (Tasdiqlandi).
- **Nazorat Nuqtasi 5 (Gate 5):** Tahririyat matnlari va ilmiy manbalar toʻliq tasdiqlandi.

### Faza 6: Avtomatlashtirilgan Sinovlar, Regressiya va Cloudflare Pages Nashri (Yakunlandi)
- **Topshiriqlar:**
  - Playwright E2E testlarini toʻliq ishga tushirish (Atlas boʻshash testi, panel toʻqnashuvi, sayohat marshrutlari, qidiruv).
  - Axe-core bilan WCAG 2.1 AA qulaylik tekshiruvlari va rang kontrasti auditlari.
  - Cloudflare Pages-ga statik nashr etish konfiguratsiyasi (`public/_headers`, static format: directory).
- **Qabul Qilish Mezonlari (Acceptance Criteria):**
  - [x] 64/64 Playwright E2E testlari xatosiz oʻtishi shart (Tasdiqlandi).
  - [x] WCAG 2.1 AA boʻyicha jiddiy / kritik a11y muammolari boʻlmasligi shart (Tasdiqlandi).
  - [x] 232 ta statik sahifa va Pagefind qidiruv indeksi (231 ta sahifa) toʻliq kompilyatsiya boʻlishi shart (Tasdiqlandi).
- **Nazorat Nuqtasi 6 (Gate 6):** Tizim toʻliq tekshirildi va barqaror baseline sifatida qabul qilindi.

### Faza 7: Kontentni toʻldirish va sayqallash (Jarayonda / In Progress)
- **Maqsad:** Mavjud texnik poydevor ustida ensiklopediya kontentining ilmiy qamrovini, portretlar va kartografik aktivlarini chuqurlashtirish hamda mukammallashtirish.
- **Ish Paketlari Rejasi (Work Packages):**
  1. **Paket 0: Boshlangʻich Holat va Hujjatlar Sinxronizatsiyasi (Package 0 — Yakunlandi, 2026-10-29):**
     - Barcha testlar va qurish tizimi (build) tekshirildi (232 sahifa, 320 Vitest, 64 Playwright, 0 astro check xatosi).
     - `scripts/audit-content.cjs` orqali `docs/10_CURRENT_STATE.md` hisoboti tuzildi va root `README.md` yaratildi.
  2. **Paket 1: Tahririyat Standartlari va Sifat Poydevori (Package 1 — Yakunlandi, 2026-10-31):**
     - Butun kontent bazasi orfografiya, fonetika, atamalar va manbalar boʻyicha chuqur audit qilindi (`scripts/audit-editorial.cjs`).
     - [docs/11_EDITORIAL_STYLE_GUIDE.md](docs/11_EDITORIAL_STYLE_GUIDE.md) — Oʻzbekcha tahririyat uslubiyoti, `oʻ`/`gʻ` (U+02BB), Tolkien fonetikasi (`Th`, `Dh`, `Kh`, `C`), atamalar lugʻati va har bir toʻplam uchun minimal sifat mezonlari yaratildi.
     - [docs/12_CANONICAL_SOURCE_POLICY.md](docs/12_CANONICAL_SOURCE_POLICY.md) — Toʻrt pogʻonali matn ierarxiyasi (`author_published`, `posthumous_edited`, `draft_variant`, `disputed_variant`), birlamchi vs ikkilamchi manbalar, Oksford iqtibos standarti va ziddiyatli masalalar qoʻllanmasi ishlab chiqildi.
  3. **Paket 2: Yupqa Yozuvlarni Chuqurlashtirish va Nomuvofiqliklarni Tuzatish (Package 2 — Navbatdagi):**
     - Aniqlangan 12 ta noaniq `book_slug` havolalarini toʻgʻrilash (`the-silmarillion` -> `silmarillion`, `lotr-*` -> rasmiy jild sluglari).
     - `places` toʻplamidagi `elvish_name` maydonini tozalash (faqat elvish nomlarni qoldirish).
     - 400 soʻzdan kam boʻlgan 20 ta joy va 7 ta kosmologiya maqolalarini birlamchi asarlar asosida boyitish.
     - «Celeborn», «Helm», «Thranduil», «Dáin» kabi nomuvofiq transliteratsiyalarni standartlashtirish.
  4. **Paket 3: Yangi Kanonik Kontentlar (Package 3):**
     - Yangi muhim shaxslar, tarixiy janglar va kosmologik tushunchalarni Zod sxemalari asosida qoʻshish.
     - HoME bibliografik tahlillarini kengaytirish.
  5. **Paket 4: Qahramon Portretlari Tizimi (Package 4):**
     - Hozirgi 21 ta portretdan tashqari qolgan 60 ta qahramon uchun kanonga mos WebP portretlarini tayyorlash va manifestni toʻldirish.
  6. **Paket 5: Kartografiya va Yangi Xaritalar (Package 5):**
     - Númenor (`numenor-planar.svg`) va Valinor (`valinor-planar.svg`) planar SVG xaritalarini integratsiya qilish.
  7. **Paket 6: Yakuniy QA va Ishlab Chiqarish Nashri (Package 6):**
     - Barcha testlarni toʻliq tekshirish, Cloudflare Pages deployini yakunlash.

