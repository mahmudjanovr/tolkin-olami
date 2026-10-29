# 03. TECHNICAL ARCHITECTURE AND DATA CONTRACTS

**Loyiha nomi:** TOLKIEN OLAMI  
**Hujjat holati:** Faza 7 (Jarayonda — Arxitektura yangilandi)  
**Oxirgi yangilanish:** 2026-10-29

---

## 1. Asosiy Texnologik Tamoyillar

Loyiha quyidagi meʼmoriy ustunlarga tayanadi:
1. **Static-First:** Barcha ensiklopediya sahifalari oldindan kompilyatsiya qilinadi (Pure SSG). Server-Side Rendering (SSR) qoʻshimcha xarajatlari va server zaifliklari yoʻqotiladi.
2. **Progressive Enhancement:** Sayt JavaScript oʻchirilgan holatda ham toʻliq oʻqilishi, navigatsiya qilinishi va foydalanilishi mumkin. Interaktiv xususiyatlar (Atlas, Shajara, Qidiruv) faqat kerak boʻlgandagina yuklanadi.
3. **Qatʼiy Tipizatsiya (Strict TypeScript):** Maʼlumotlar modeli va bogʻliqliklar Zod va TypeScript orqali har bir build bosqichida validatsiya qilinadi.
4. **Cloudflare Pages mosligi:** Loyiha Cloudflare Pages statik hostiga toʻliq mos kelishi, har qanday murakkab server bogʻliqliklaridan xoli boʻlishi lozim.

---

## 2. Framework va Texnologik Stek Spetsifikatsiyasi

### Tanlangan va Oʻrnatilgan Stek
- **Astro versiyasi:** Astro 7.3.8 (Static Output: `output: 'static'`, Pure SSG).
- **Ishchi muhit:** Node.js v24.21.0, npm v11+.
- **Tipizatsiya:** TypeScript strict (`"strict": true`, TS 5.7.3).
- **Kontent validatsiyasi:** Zod maʼlumotlar shartnomalari (`src/content/schemas.ts`).
- **Qidiruv dvigateli:** Pagefind v1.5.2 (statik klient qidiruv indeksi, oʻzbekcha diakritik normalizatsiya).
- **Interaktiv kartografiya:** Leaflet v1.9.4 (Leaflet SSR guard, planar koordinatalar tizimi).
- **CSS arxitekturasi:** Plain CSS dizayn tokenlari (`styles/tokens.css` va `styles/global.css`), tashqi yordamchi CSS freymvorklarsiz (0 dependency CSS).
- **Statik hosting:** Cloudflare Pages statik deploy arxitekturasi (`public/_headers` bilan).

---

## 3. Stillashtirish Strategiyasi: Oddiy CSS Tokenlari va Tailwind CSS Solishtiruvi

Foydalanuvchi koʻrsatmasiga binoan Tailwind CSS avtomatik oʻrnatilmaydi. Quyida ikkala yondashuvning solishtirma tahlili keltiriladi:

| Mezon | Plain CSS (Maxsus Dizayn Tokenlari) | Tailwind CSS (v4 / v3) |
| :--- | :--- | :--- |
| **8 GB RAM mashinasiga yuklamasi** | **Juda kam.** Hech qanday murakkab PostCSS/JIT kompilyatori yoʻq. Native CSS tezkor yigʻiladi. | Oʻrta. JIT skaneri fayllarni kuzatadi, xotirani qoʻshimcha 100-200 MB band qilishi mumkin. |
| **Toʻplam oʻlchami (Bundle size)** | **Optimal.** Faqat yozilgan qoidalar yuklanadi (taxminan 15-25 KB gzip). | Kichik (Purged), lekin konfiguratsiya talab qiladi. |
| **Editorial dizayn erkinligi** | **Mukammal.** 95% qogʻoz/siyoh va 5% tilla aksent uchun aniq CSS oʻzgaruvchilar (`var(--color-paper-base)`) va tipografik panjarani toza nazorat qilish. | Yaxshi, lekin maxsus ranglar uchun murakkab config yoki `@theme` bloklari talab qilinadi. |
| **Kodni qoʻllab-quvvatlash** | Semantik CSS sinflari (`.scholarly-margin`, `.canon-badge`, `.citation-ref`) HTML-ni toza saqlaydi. | HTML ichida uzun utility-sinflar toʻplanib ketadi. |

### Tavsiya etilgan meʼmoriy tanlov:
**Plain Modern CSS + Scoped Component Styles + CSS Custom Properties (Design Tokens)**.  
Bu yondashuv 8 GB RAM chegarasidagi kompyuter uchun eng yengil, uzoq muddatli barqaror va keraksiz bogʻliqliklarsiz (zero dependencies) ishlash imkonini beradi. Tailwind faqat tahririyat tomonidan utility sinflar zarurligi qatʼiy talab qilingan taqdirdagina kiritilishi mumkin.

---

## 4. Marshrutlar va Maʼlumotlar Modeli Xaritasi (Route-to-Model Mapping)

Ensiklopediyadagi 11 ta axborot yoʻnalishi sunʼiy ravishda 11 ta alohida sxemaga boʻlinmaydi. Sxemalar kontentning haqiqiy entiti turi va validatsiya ehtiyojlariga koʻra shakllantiriladi:

| Asosiy Marshrut | Kontent Toʻplami (Collection) | Zod Sxemasi | Modelning Xususiyati va Qayta Ishlatilishi |
| :--- | :--- | :--- | :--- |
| `/` (Bosh sahifa) | *(Astro Page)* | — | Statik shablon; barcha toʻplamlardan saralangan kanonik iqtibos va yangiliklarni yigʻadi. |
| `/xaritalar/` | `places` | `placeSchema` | Planar Leaflet xaritasi lokatsiyalari, SVG qatlamlari va tekislik koordinatalari (`{ x, y }`). |
| `/qahramonlar/[slug]/` | `characters` | `characterSchema` | Shaxslar, unvonlar, xonadonlar, oilaviy rishtalar va matnshunoslik maqomi (`textual_status`). |
| `/nasabnomalar/[slug]/` | `genealogies` | `genealogySchema` | **Maxsus sxema**: Xonadonlar, shajaralar, avlodlar pogʻonasi va noaniq/ziddiyatli nasablar. |
| `/tarix/[slug]/` | `events` | `eventSchema` | Asosiy davrlar xronologiyasi, janglar va tarixiy burilish nuqtalari. |
| `/kitoblar/[slug]/` | `books` | `bookSchema` | Tolkien nashrlari, qoʻlyozma tarixi, Christopher Tolkien tahriri va Oksford bibliografiyasi. |
| `/olam/[slug]/` | `cosmology` | `cosmologySchema` | **Maxsus sxema**: Eä, Arda, Kúma, Valinor, Ikki Daraxt va ontologik/samoviy konsepsiyalar. |
| `/xalqlar-va-tillar/[slug]/` | `peoples` va `languages` | `peopleSchema` va `languageSchema` | **Diskriminatsiyalangan ikki toʻplam**: Tillar va yozuvlar (`languages`) hamda xalqlar/irqlar madaniyati (`peoples`). |
| `/tolkien/[slug]/` | `articles` (toifa: biografiya) | `articleSchema` | `articles` toʻplamini qayta ishlatadi (`category: 'tolkienshunoslik' | 'biografiya' | 'xatlar'`). |
| `/maqolalar/[slug]/` | `articles` | `articleSchema` | Falsafiy esselar, adabiy tahlillar, manbashunoslik va zamonaviy adaptatsiyalar tanqidi. |
| `/qidiruv/` | *(Pagefind Index)* | — | Build vaqtida barcha toʻplamlardan generatsiya qilinadigan statik qidiruv indeksi. |

---

## 5. Kontent Modellari va Qatʼiy Zod Sxemalari (Data Contracts)

### 5.1. Umumiy Tahririyat va Manba Shartnomasi (`sourceRefSchema`)
```typescript
import { z } from 'astro:content';

export const sourceRefSchema = z.object({
  book_slug: z.string(), // masalan: "the-silmarillion"
  chapter: z.string(),   // masalan: "XIX bob: Beren va Lúthien"
  page: z.string().optional(),
  notes: z.string().optional(),
});

// Matnshunoslik maqomi (Textual Provenance) — vizual bezak emas, filologik haqiqat
export const textualStatusEnum = z.enum([
  'author_published',     // J.R.R. Tolkien hayotligidagi nashrlar (LotR, Hobbit)
  'posthumous_edited',    // Christopher Tolkien tomonidan sintezlangan nashrlar (Silmarillion, UT)
  'draft_variant',        // Qoralamalar va matn evolyutsiyasi (HoME, Nature of Middle-earth)
  'disputed_variant',     // Ziddiyatli/bir necha xil qarash mavjud masalalar (Oʻrklar kelib chiqishi, Gil-galad)
]);
```

### 5.2. Qahramonlar Sxemasi (`characters`)
```typescript
export const characterSchema = z.object({
  id: z.string(),
  name: z.string(), // "Fëanor" (Asl imlo)
  original_name: z.string(), // "Curufinwë"
  mother_name: z.string().optional(), // "Míriel Serindë"
  aliases: z.array(z.string()).default([]),
  titles: z.array(z.string()).default([]),
  race: z.enum(['ainur', 'elflar', 'insonlar', 'mitti-odamlar', 'boshqa']),
  sub_race: z.string().optional(), // "Noldor"
  culture: z.string().optional(),
  birth_year: z.string().optional(),
  death_year: z.string().optional(),
  house_id: z.string().optional(), // "finwe-xonadoni" (genealogies to'plamiga havola)
  weapons_and_artifacts: z.array(z.string()).default([]),
  primary_locations: z.array(z.string()).default([]),
  textual_status: textualStatusEnum,
  uncertainty_notes: z.string().optional(), // Nasabi yoki taqdiridagi ilmiy munozaralar
  summary: z.string(),
  sources: z.array(sourceRefSchema).min(1),
  related_characters: z.array(z.string()).default([]),
  // Adaptatsiyalar matn kanoniga aralashtirilmaydi, alohida maydonda saqlanadi:
  adaptations: z.array(
    z.object({
      medium: z.enum(['film', 'series', 'game', 'radio', 'stage']),
      title: z.string(),
      creator: z.string(),
      year: z.number(),
      divergence_notes: z.string(),
    })
  ).default([]),
});
```

### 5.3. Xalqlar va Madaniyatlar Sxemasi (`peoples`)
```typescript
export const peopleSchema = z.object({
  id: z.string(),
  name: z.string(), // "Noldor"
  other_names: z.array(z.string()).default([]),
  race_category: z.enum(['ainur', 'elflar', 'insonlar', 'mitti-odamlar', 'boshqa']),
  divisions_and_clans: z.array(z.string()).default([]), // "Fëanor xonadoni", "Fingolfin xonadoni"
  origin_era: z.string().optional(),
  associated_languages: z.array(z.string()).default([]), // ["quenya"]
  primary_realms: z.array(z.string()).default([]), // ["hithlum", "nargothrond", "gondolin"]
  textual_status: textualStatusEnum,
  summary: z.string(),
  sources: z.array(sourceRefSchema).min(1),
});
```

### 5.4. Joy Nomlari va Xaritalar Sxemasi (`places`)
```typescript
export const placeSchema = z.object({
  id: z.string(),
  name: z.string(), // "Gondolin"
  elvish_name: z.string().optional(), // "Ondolindë"
  type: z.enum(['shahar', 'qirollik', 'togʻ', 'daryo', 'qalʼa', 'oʻlka']),
  region: z.enum(['beleriand', 'orta-yer', 'numenor', 'valinor', 'harad']),
  // Fictional planar koordinatalar (Leaflet CRS.Simple)
  coordinates: z.object({
    map_id: z.string(), // "beleriand-planar"
    x: z.number(),      // Gorizontal piksel masofasi
    y: z.number(),      // Vertikal piksel masofasi
  }).optional(),
  founded_era: z.string().optional(),
  destroyed_era: z.string().optional(),
  rulers: z.array(z.string()).default([]),
  notable_events: z.array(z.string()).default([]),
  textual_status: textualStatusEnum,
  summary: z.string(),
  sources: z.array(sourceRefSchema).min(1),
});
```

### 5.5. Nasabnomalar va Shajaralar Sxemasi (`genealogies`)
```typescript
export const genealogySchema = z.object({
  id: z.string(),
  title: z.string(), // "Finwë Xonadoni Nasabnomasi"
  house_name: z.string(), // "House of Finwë"
  founder_id: z.string(), // "finwe"
  era: z.string(), // "Daraxtlar davri va Birinchi davr"
  summary: z.string(),
  // Ierarxik daraxt a'zolari va ularning aloqalari
  members: z.array(
    z.object({
      character_id: z.string(),
      spouse_ids: z.array(z.string()).default([]),
      parent_ids: z.array(z.string()).default([]),
      generation: z.number().default(1),
      order: z.number().default(0),
      is_uncertain: z.boolean().default(false), // Masalan, Gil-galad yoki Orodreth ziddiyati
      uncertainty_notes: z.string().optional(),
    })
  ).min(1),
  branches: z.array(z.string()).default([]),
  sources: z.array(sourceRefSchema).min(1),
});
```

### 5.6. Kosmologiya va Arda Olamlari Sxemasi (`cosmology`)
```typescript
export const cosmologySchema = z.object({
  id: z.string(),
  name: z.string(), // "Arda", "Eä", "Kúma", "Ikki Daraxt"
  concept_type: z.enum(['cosmic_realm', 'primeval_light', 'celestial_body', 'metaphysical_force']),
  associated_ainur: z.array(z.string()).default([]), // ["manwe", "varda", "yavanna"]
  ontological_evolution: z.string().optional(), // "Yassi Arda (Flat) -> Dumaloq Arda (Round)"
  textual_status: textualStatusEnum,
  summary: z.string(),
  sources: z.array(sourceRefSchema).min(1),
});
```

### 5.7. Kitoblar va Bibliografiya Sxemasi (`books`)
```typescript
export const bookSchema = z.object({
  id: z.string(),
  title_uz: z.string(),
  title_original: z.string(),
  publication_year: z.number(),
  publisher: z.string(),
  editor: z.string().optional(),
  category: z.enum([
    'primary_lifetime',
    'posthumous_reconstructed',
    'textual_history',
    'letters_academic',
  ]),
  isbn: z.string().optional(),
  synopsis: z.string(),
  key_themes: z.array(z.string()).default([]),
});
```

### 5.8. Tarixiy Voqealar Sxemasi (`events`)
```typescript
export const eventSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
  era: z.enum(['ainur_musiqasi', 'daraxtlar_davri', 'birinchi_davr', 'ikkinchi_davr', 'uchinchi_davr', 'tortinchi_davr']),
  year_text: z.string(),
  location_id: z.string().optional(),
  belligerents: z.object({
    side_a: z.array(z.string()),
    side_b: z.array(z.string()),
  }).optional(),
  outcome: z.string(),
  preceding_event: z.string().optional(),
  succeeding_event: z.string().optional(),
  textual_status: textualStatusEnum,
  sources: z.array(sourceRefSchema).min(1),
});
```

### 5.9. Tillar va Yozuv Tizimlari Sxemasi (`languages`)
```typescript
export const languageSchema = z.object({
  id: z.string(),
  name: z.string(),
  family: z.string(),
  writing_systems: z.array(z.enum(['tengwar', 'cirth', 'sarati'])),
  inventor: z.string().optional(),
  phonology_overview: z.string(),
  sample_text_original: z.string().optional(),
  sample_text_uz: z.string().optional(),
  textual_status: textualStatusEnum,
  sources: z.array(sourceRefSchema).min(1),
});
```

### 5.10. Ilmiy Maqolalar, Biografiya va Mavzular Sxemasi (`articles`)
```typescript
export const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  author: z.string().default('Tahririyat'),
  published_date: z.string(),
  category: z.enum([
    'falsafa_va_teologiya',
    'adabiy_tahlil',
    'matnshunoslik',
    'tolkienshunoslik', // /tolkien/ bo'limi uchun biografik va arxiv tadqiqotlari
    'zamonaviy_adaptatsiyalar',
  ]),
  abstract: z.string(),
  related_entities: z.array(z.string()).default([]),
  sources: z.array(sourceRefSchema).min(1),
});
```

---

## 6. Interaktiv Atlas: Leaflet SSR Guard, Client-Only Initsializatsiya va Koordinatalar

### 6.1. Fictional Xarita va Koordinata Tizimi Konvensiyasi
Tolkien Legendariumining geografiyasi real Yer shari sferik modeli emas. Shuning uchun:
1. **Koordinata konvensiyasi:** Ilova darajasida qatʼiy tekislik koordinatalari `{ x, y }` deb yuritiladi (bu yerda `x` — gorizontal piksel, `y` — vertikal piksel).
2. **Leaflet `CRS.Simple` mappingi:** Leaflet `L.CRS.Simple` tekislik rejimida nuqtalarni `[y, x]` tartibidagi massiv sifatida qabul qiladi (`L.latLng(y, x)`). Ilova qatlami va UI komponentlari barcha koordinatalarni `{ x, y }` obyektida saqlaydi va faqat Leaflet API-ga uzatish paytida deterministik tarzda `[point.y, point.x]` ga oʻgiradi.
3. **URL Holati (State Restoration):** Xarita holati `?hudud=beleriand&x=1400&y=920&z=3` orqali saqlanadi. Agar parametrlar yetishmasa, son boʻlmasa (`NaN`) yoki xarita koshinlari chegarasidan tashqarida boʻlsa, xarita sukut boʻyicha tanlangan hududning markaziy xavfsiz chegaralariga (safe default bounds) avtomatik qaytadi.

```
┌────────────────────────────────────────────────────────────────────────┐
│               ATLAS ARXITEKTURASI VA LAYOUT ISOLATION                  │
│                                                                        │
│  [Desktop: CSS Grid 2-ustunli deterministik tartib]                   │
│  ┌────────────────────────────────────┬─────────────────────────────┐  │
│  │ XARITA MAYDONI (Map Container)     │ MAʼLUMOT PANELI (Inspector) │  │
│  │ width: 1fr                         │ width: 420px (qatʼiy)       │  │
│  │ min-width: 0 (overflow himoyasi)   │ z-index mojarosi yoʻq       │  │
│  │ ResizeObserver kuzatuvi            │ Doim xaritani yonida turadi │  │
│  └────────────────────────────────────┴─────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### 6.2. Leaflet SSR Guard va Client-Only Initsializatsiyasi
> [!CAUTION]
> **Astro Pure SSG Build Qoidasi:** Leaflet kutubxonasi modul darajasida darhol brauzer `window` va `document` obyektlariga murojaat qiladi. Shu bois `import L from 'leaflet'` kodi Node.js serverida yoki Astro build jarayonida hech qachon statik import qilinmasligi shart.
> 
> Shuningdek, `client:only` direktivasi oddiy `.astro` komponentlariga qoʻllanmaydi (u faqat React/Preact/Svelte/Vue komponentlari uchun ishlaydi).

**Astro uchun tasdiqlangan xavfsiz arxitekturaviy yechim:**
1. `<div id="atlas-map"></div>` konteyneri sof Astro shabloni orqali render qilinadi.
2. Initsializatsiya logikasi faqat mijoz brauzerida ishlaydigan alohida skript modulida bajariladi:
   ```typescript
   // src/components/atlas/AtlasClient.ts
   export async function initAtlas(containerId: string, options: AtlasOptions) {
     if (typeof window === 'undefined') return; // Server guard
     
     const container = document.getElementById(containerId);
     if (!container || container.clientWidth === 0 || container.clientHeight === 0) {
       return; // Konteyner mavjud bo'lmasa yoki o'lchami 0 bo'lsa to'xtatish
     }

     // Takroriy initsializatsiyadan himoya (Duplicate Init Guard)
     if ((container as any)._leaflet_id) {
       return;
     }

     // Leaflet faqat brauzerda dinamik yuklanadi:
     const L = await import('leaflet');

     const map = L.map(container, {
       crs: L.CRS.Simple,
       minZoom: options.minZoom ?? -2,
       maxZoom: options.maxZoom ?? 2,
     });

     // Konteyner o'lchami o'zgarishini kuzatish (Debounced InvalidateSize)
     let resizeTimeout: any = null;
     const ro = new ResizeObserver(() => {
       clearTimeout(resizeTimeout);
       resizeTimeout = setTimeout(() => {
         if (container.clientWidth > 0 && container.clientHeight > 0) {
           map.invalidateSize();
         }
       }, 100);
     });
     ro.observe(container);

     // Sahifadan ketganda tozalash (Cleanup)
     return () => {
       ro.disconnect();
       map.remove();
     };
   }
   ```
3. **Build-time CI tekshiruvi:** CI pipeline-dagi `npm run build` komandasi orqali server render paytida birorta ham `window is not defined` xatosi chiqmasligi kafolatlanadi.

---

## 7. Nasabnomalar Arxitekturasi: Semantic HTML va SVG

Foydalanuvchi koʻrsatmasiga binoan, D3.js boshidan majburiy oʻrnatilmaydi.
- **Boshlangʻich bosqich:** `genealogySchema` maʼlumotlar modeli asosida toza SVG va HTML/CSS Flexbox daraxti quriladi.
- **Ziddiyatli nasablar koʻrinishi:** `is_uncertain: true` boʻlgan bogʻlanishlar (masalan, Gil-galad) shajara daraxtida uzuq-uzuq chiziq (dashed stroke) va maxsus tahririyat izohi belgisi bilan koʻrsatiladi.
- **Talab:** Avlodlar ierarxiyasi (Ota-ona -> Farzandlar) aniq koʻrinishi, mobil qurilmalarda gorizontal scroll oʻrniga ierarxik qatlanuvchi (collapsible) roʻyxatga aylanadi.
- **D3.js integratsiyasi:** Faqat Finwë yoki Elros avlodlari kabi koʻp tarmoqli murakkab shajaralarda standart SVG yechimi yetarli boʻlmagan taqdirdagina dinamik import qilinadi.

---

## 8. Global Qidiruv Arxitekturasi: Pagefind

- **Nima uchun Pagefind?** 
  - Toʻliq statik indeks hosil qiladi (`npm run build` vaqtida).
  - Server, API kalitlari yoki fon jarayonlarini talab qilmaydi.
  - Mijoz brauzeriga faqat kerakli qidiruv indeks boʻlaklari yuklanadi (~20-50 KB).
- **Oʻzbek tili va Tolkien diakritikasi testi:**
  - Build skriptida Pagefind uchun maxsus xarakter mapping kiritiladi.
  - `ë` -> `e`, `ä` -> `a`, `oʻ` -> `o'`, `gʻ` -> `g'` qidiruvda tenglashtiriladi.

---

## 9. Cloudflare Pages Mosligi

- Loyiha `output: 'static'` rejimida ishlaydi.
- Yigʻish natijasi `dist/` katalogiga tushadi.
- Hech qanday maxsus Node.js C++ modullari talab qilinmaydi, bu Cloudflare Pages build agentlarida xatosiz va 1 daqiqadan kam vaqtda yigʻilishini taʼminlaydi.
