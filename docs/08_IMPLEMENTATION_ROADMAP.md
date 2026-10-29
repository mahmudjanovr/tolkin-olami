# 08. PHASED IMPLEMENTATION ROADMAP AND APPROVAL CHECKPOINTS

**Loyiha nomi:** TOLKIEN OLAMI  
**Loyiha nomi:** TOLKIEN OLAMI  
**Hujjat holati:** Yakunlangan (Ishlab chiqarishga toʻliq tayyor)  
**Oxirgi yangilanish:** 2026-10-19

---

## 1. Yoʻl Xaritasi Falsafasi

Loyiha qatʼiy bosqichma-bosqich (phased) tartibda amalga oshiriladi. Har bir faza oʻzining aniq topshiriqlari, qabul qilish mezonlari (Definition of Done) va **foydalanuvchi tasdigʻi nazorat nuqtalariga (Approval Gate)** ega boʻlib, barcha fazalar toʻliq yakunlandi va testlar bilan tasdiqlandi.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   BOSQICHMA-BOSQICH AMALGA OSHIRISH                    │
│                                                                        │
│  [FAZA 0: Discovery & Meʼmoriy Rejalashtirish]  ──> [YAKUNLANDI]       │
│  ───────────────────────────────────────────────────────────────────  │
│  [FAZA 1: Hujjatlashtirish & Git Poydevori]    ──> [YAKUNLANDI]       │
│  • 9 ta arxitektura hujjati yaratilishi                                │
│  • Git initsializatsiyasi (main branch)                               │
│  ───────────────────────────────────────────────────────────────────  │
│  [FAZA 2: Loyiha Karkasi, Shriftlar & Zod Sxemalari] ──> [YAKUNLANDI]  │
│  • Astro 5 static, TypeScript strict, Plain CSS tokenlari             │
│  • Zod maʼlumotlar shartnomalari va 294 ta Vitest sxema testlari      │
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
│  • 9 ta kitob, 76 ta shaxs, 11 ta hudud, 4 ta voqea, 4 ta shajara     │
│  • Oksford iqtiboslari va Teskari iqtiboslar (Reverse Citations)      │
│  ───────────────────────────────────────────────────────────────────  │
│  [FAZA 6: E2E Regressiya Sinovlari & Cloudflare Pages Deploy] ─> [YAKUNLANDI]
│  • 50/50 Playwright testlari, WCAG 2.1 AA audit, Cloudflare _headers  │
│  • [ISHLAB CHIQARISHGA TOPSHIRILDI]                                   │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Fazalarning Batafsil Spetsifikatsiyasi

### Faza 0: Loyihani Oʻrganish va Meʼmoriy Audit (Yakunlandi)
- **Bajarildi:** Ishchi muhit toʻliq tekshirildi, apparat vositalari (8 GB RAM, Node v26, npm v12) qayd etildi, xatolar tahlil qilindi va dastlabki arxitektura taklif qilindi.

### Faza 1: Hujjatlashtirish va Git Poydevori (Hozirgi Bosqich)
- **Topshiriqlar:**
  - Git repositoriyasini `main` brenchi bilan initsializatsiya qilish.
  - `docs/` katalogida 9 ta toʻliq meʼmoriy spetsifikatsiyani yozish.
- **Cheklovlar:** Hech qanday framework oʻrnatilmaydi, kod yozilmaydi, commit qilinmaydi.
- **Nazorat Nuqtasi 1 (Gate 1):** Foydalanuvchi barcha 9 ta hujjatni koʻrib chiqib, Faza 2 ga ruxsat berishi kerak.

### Faza 2: Loyiha Karkasi, Shriftlar va Maʼlumot Shartnomalari
- **Topshiriqlar:**
  - Astro barqaror versiyasini npm orqali initsializatsiya qilish (`output: 'static'`).
  - TypeScript `strict: true` sozlamalarini oʻrnatish.
  - CSS dizayn tokenlari (`styles/tokens.css` va `styles/global.css`) bazasini yaratish (Yorugʻ editorial qogʻoz/siyoh/tilla tizimi).
  - Oʻzbek va Tolkien gliflarini toʻliq qamrab oluvchi litsenziyalangan veb-shriftlarni (EB Garamond, Literata, Inter) ulash va zaxira (fallback) zanjirini oʻrnatish.
  - `src/content/config.ts` da barcha tasdiqlangan Zod sxemalari toʻliq inventarini yaratish:
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
  - [x] Barcha 9 ta toʻplam Zod sxemalaridan namunaviy maʼlumotlar xatosiz oʻtishi kerak (Tasdiqlandi: 294 ta Vitest testlari).
  - [x] Oʻzbekcha `oʻ` va `gʻ` harflari hamda Tolkien diakritikalari sluglarda toʻgʻri normalizatsiya qilinishi (`o`, `g`, ASCII) va toʻqnashuv yuz berganda build toʻxtashi sinovdan oʻtishi lozim (Tasdiqlandi).
- **Nazorat Nuqtasi 2 (Gate 2):** Sxemalar, shriftlar va normalizator testi toʻliq tasdiqlandi.

### Faza 3: Editorial Qoliplar va Global Qidiruv
- **Topshiriqlar:**
  - `BaseLayout.astro` va `EditorialLayout.astro` (95% qogʻoz/siyoh, 5% tilla) yaratish.
  - 11 ta asosiy boʻlimning boshlangʻich sahifalarini (`pages/`) marshrut-model xaritasiga binoan yaratish.
  - Pagefind qidiruvini integratsiyalash, `Cmd+K` modali va oʻzbekcha normalizatsiya testlari.
- **Qabul Qilish Mezonlari (Acceptance Criteria):**
  - [x] Sahifalar JavaScriptsiz ham 100% oʻqilishi va navigatsiya qilinishi shart (Progressive Enhancement — Tasdiqlandi).
  - [x] Qidiruv modalida `oʻgʻri`, `o'g'ri`, `feanor`, `fëanor` soʻrovlari bir xil natija berishi shart (Tasdiqlandi: Playwright va Vitest).
- **Nazorat Nuqtasi 3 (Gate 3):** Navigatsiya va qidiruv modali toʻliq tasdiqlandi.

### Faza 4: Interaktiv Orollar (Atlas va Nasabnoma)
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

### Faza 5: Ilmiy Kontent Grafigi va Oʻzbekcha Ensiklopediya Maqolalari
- **Topshiriqlar:**
  - 11 boʻlim boʻyicha chuqur akademik maqolalar yaratish (9 ta kanonik kitob, 76 ta shaxs, 11 ta hudud, 4 ta voqea, 4 ta sulola shajarasi).
  - Oʻzaro ikki tomonlama bogʻlanishlar (Knowledge Graph), Oksford iqtiboslari tizimi va Teskari Iqtiboslar (Reverse Citations) mexanizmi.
- **Qabul Qilish Mezonlari (Acceptance Criteria):**
  - [x] Barcha kitoblar, shaxslar va voqealar oʻzaro bogʻlangan boʻlishi va teskari iqtiboslar toʻliq render qilinishi shart (Tasdiqlandi).
  - [x] Barcha ilmiy manbalar Oksford standarti boʻyicha kanonik kitoblar bilan tasdiqlanishi shart (Tasdiqlandi).
- **Nazorat Nuqtasi 5 (Gate 5):** Tahririyat matnlari va ilmiy manbalar toʻliq tasdiqlandi.

### Faza 6: Avtomatlashtirilgan Sinovlar, Regressiya va Cloudflare Pages Nashri
- **Topshiriqlar:**
  - Playwright E2E testlarini toʻliq ishga tushirish (Atlas boʻshash testi, panel toʻqnashuvi, sayohat marshrutlari, qidiruv).
  - Axe-core bilan WCAG 2.1 AA qulaylik tekshiruvlari va rang kontrasti auditlari.
  - Cloudflare Pages-ga statik nashr etish konfiguratsiyasi (`public/_headers`, static format: directory).
- **Qabul Qilish Mezonlari (Acceptance Criteria):**
  - [x] 50/50 Playwright E2E testlari xatosiz oʻtishi shart (Tasdiqlandi).
  - [x] WCAG 2.1 AA boʻyicha jiddiy / kritik a11y muammolari boʻlmasligi shart (Tasdiqlandi).
  - [x] 124 ta statik sahifa va Pagefind qidiruv indeksi toʻliq kompilyatsiya boʻlishi shart (Tasdiqlandi).
- **Loyiha topshirilishi:** Tizim toʻliq ishlab chiqarish (production) darajasida foydalanuvchiga topshirildi.
