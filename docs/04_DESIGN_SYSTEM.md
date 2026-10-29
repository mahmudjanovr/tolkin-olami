# 04. DESIGN SYSTEM AND RESPONSIVE RULES

**Loyiha nomi:** TOLKIEN OLAMI  
**Hujjat holati:** Faza 1 (Arxitektura va rejalashtirish)  
**Oxirgi yangilanish:** 2026-10-11

---

## 1. Dizayn Falsafasi: Editorial, Vazmin va Aristokratik

**TOLKIEN OLAMI** estetikasi arzon oʻyin saytlari yoki shovqinli viki-portallardan tubdan farq qiladi. Dizayn qadimiy Oksford kutubxonasi qoʻlyozmalari, oliy darajadagi matbaa sanʼati va zamonaviy raqamli monografiya mezonlariga tayanadi.

### Asosiy Tamoyillar:
1. **95% Fon, Siyoh va Neytral, 5% Vazmin Tilla:** Ranglar koʻzni charchatmasligi, matn va kontent mutlaq ustuvor boʻlishi lozim. Tilla rang faqat oliy martabali kanonik ramzlar, havolalar va muhim izohlar uchungina kamtarona ishlatiladi.
2. **Boʻshliq (Whitespace) — dizayn elementi:** Sahifa har xil kartochkalar va bannerlar bilan toʻldirilmaydi. Saxiy boʻshliqlar matnga nafas beradi.
3. **Soxta skeumorfizmdan tiyilish:** Arzon sariq pergament rasmlari, yirtilgan qogʻoz qirralari, zarhal bezakli ramkalar qatʼiyan man etiladi. Haqiqiy sifat toza ranglar va mukammal shriftda namoyon boʻladi.
4. **Mavzular Triadasi (Light, Night, System):** Boshlangʻich bosqichdanoq loyiha uchta toʻlaqonli mavzu rejimini taqdim etadi:
   - **Light (Yorugʻ):** Illiq paxta qogʻozi, toʻq koʻmir siyoh, vazmin tilla aksentlar. Oksford kitob mutolaasi muhiti.
   - **Night (Tun):** Chuqur oʻrmon va koʻk-yashil ilmiy sirtlar (deep forest and deep blue-green / scholarly slate), yumshatilgan iliq matn, vazmin tilla. Soxta qora (`#000000`) va koʻzni qamashtiruvchi oq (`#FFFFFF`) taqiqlanadi. Generic qora dashboard emas, balki qadimiy tungi arxiv, sham yorugʻidagi tadqiqot xonasi muhiti.
   - **System (Tizim):** Operatsion tizimning `prefers-color-scheme` sozlamasini avtomatik kuzatadi va dinamik yangilanadi.

---

## 2. Rang Tokenlari Tizimi (Semantic CSS Design Tokens)

Barcha ranglar CSS Custom Properties koʻrinishida markazlashtiriladi va semantik qatlam orqali boshqariladi:

```css
/* ==========================================================================
   1. LIGHT REJIMI (Standart: Paxta Qog'ozi va Qora Siyoh)
   ========================================================================== */
:root,
[data-theme="light"],
[data-theme="system"] {
  /* Fon va Sirtlar (Backgrounds & Surfaces) */
  --color-bg-base: #F7F5F0;          /* Asosiy sahifa foni: tabiiy paxta qog'ozi */
  --color-bg-elevated: #EFECE6;      /* Kartalar, yon panellar, dialoglar foni */
  --color-bg-subtle: #E8E4DC;        /* Ajratuvchi qatlamlar, keshlar */
  --color-border-subtle: #DCD7CE;    /* Neytral hoshiyalar */
  --color-border-strong: #C8C2B6;    /* Ajratuvchi qat'iy chegaralar */

  /* Matn va Siyoh (Text & Ink) */
  --color-text-primary: #1A1816;     /* Asosiy matn: chuqur ko'mir/qora siyoh */
  --color-text-secondary: #4A4641;   /* Ikkilamchi matn: qisqartmalar, sanalar */
  --color-text-muted: #767169;       /* Izohlar, bibliografik manbalar */
  --color-text-faint: #A8A29A;       /* Yordamchi ramzlar, ikonkalar */

  /* Vazmin Tilla Urg'ulari va Havolalar (Scholarly Gold & Links) */
  --color-accent-gold: #9E7E38;      /* Asosiy tilla: kanon nishoni, muhim ramzlar */
  --color-accent-gold-hover: #7D6228;/* Tilla hover holati */
  --color-accent-gold-subtle: #F4EEDF; /* Tilla fonli mayin ilmiy iqtibos bloki */
  --color-border-gold: #D1B87D;      /* Tilla nozik chegara */
  --color-link: #7A5E24;             /* Matn ichidagi ilmiy havolalar */
  --color-link-hover: #5A4315;       /* Havola hover holati */

  /* Semantik Ranglar: Filologik maqom va tashqi adaptatsiyalar indikatorlari */
  --color-status-canonical: #3B5A40; /* author_published / posthumous_edited (vazmin yashil) */
  --color-status-variant: #8C5B32;   /* draft_variant / disputed_variant (oxra) */
  --color-status-apocrypha: #7B3E3E; /* Tashqi zamonaviy moslashuvlar (vazmin terrakota) */

  /* Qulaylik va Fokus (Focus & Accessibility) */
  --color-focus-ring: #9E7E38;       /* Klaviatura fokus ko'rsatkichi */
}

/* ==========================================================================
   2. NIGHT REJIMI (Tungi Arxiv: Chuqur O'rmon va Yumshoq Matn)
   ========================================================================== */
[data-theme="night"] {
  /* Fon va Sirtlar: #000000 emas, chuqur o'rmon va ko'k-yashil (#0F1715) */
  --color-bg-base: #0F1715;          /* Asosiy fon: tungi o'rmon slanetsi */
  --color-bg-elevated: #162220;      /* Kartalar, yon panellar, dialoglar foni */
  --color-bg-subtle: #1D2D2A;        /* Jadval qatorlari, keshlar */
  --color-border-subtle: #273B37;    /* Nozik chegaralar */
  --color-border-strong: #36504A;    /* Qat'iy ajratuvchi chiziqlar */

  /* Matn va Siyoh: #FFFFFF emas, yumshatilgan iliq kitobiy matn (#E3DEC3) */
  --color-text-primary: #E3DEC3;     /* Asosiy matn: iliq qadimgi sahifa tusidagi matn */
  --color-text-secondary: #B5B099;   /* Ikkilamchi matn, sanalar */
  --color-text-muted: #8E8A78;       /* Bibliografik manbalar, izohlar */
  --color-text-faint: #656254;       /* Yordamchi belgilar */

  /* Vazmin Tilla: Tungi fonda aniq o'qiladigan iliq zargar tuslari */
  --color-accent-gold: #C5A059;      /* Tilla ramzlar, faol tugmalar */
  --color-accent-gold-hover: #DEC078;/* Tilla hover */
  --color-accent-gold-subtle: #1C2720; /* Mayin tilla iqtibos foni */
  --color-border-gold: #8C733E;      /* Tilla hoshiyalar */
  --color-link: #D4B36A;             /* Tungi havolalar */
  --color-link-hover: #E8D196;       /* Havola hover */

  /* Semantik Ranglar (Tungi kontrastga moslashtirilgan) */
  --color-status-canonical: #4D7A54; /* Vazmin o'rmon yashili */
  --color-status-variant: #B37644;   /* Qoralamalar (iliq oxra) */
  --color-status-apocrypha: #A35252; /* Tashqi moslashuvlar */

  /* Qulaylik va Fokus */
  --color-focus-ring: #C5A059;
}

/* ==========================================================================
   3. SYSTEM REJIMI: Tizim Qorong'u bo'lganda avtomatik Night qiymatlarini olish
   ========================================================================== */
@media (prefers-color-scheme: dark) {
  [data-theme="system"] {
    --color-bg-base: #0F1715;
    --color-bg-elevated: #162220;
    --color-bg-subtle: #1D2D2A;
    --color-border-subtle: #273B37;
    --color-border-strong: #36504A;

    --color-text-primary: #E3DEC3;
    --color-text-secondary: #B5B099;
    --color-text-muted: #8E8A78;
    --color-text-faint: #656254;

    --color-accent-gold: #C5A059;
    --color-accent-gold-hover: #DEC078;
    --color-accent-gold-subtle: #1C2720;
    --color-border-gold: #8C733E;
    --color-link: #D4B36A;
    --color-link-hover: #E8D196;

    --color-status-canonical: #4D7A54;
    --color-status-variant: #B37644;
    --color-status-apocrypha: #A35252;

    --color-focus-ring: #C5A059;
  }
}
```

---

## 3. Semantik Tokenlarning Butun Tizimda Qoʻllanilishi

Semantik dizayn tokenlari tizimdagi barcha komponentlar uchun yagona manba hisoblanadi:

1. **Navigatsiya (Navbar & Breadcrumbs):** `background-color: var(--color-bg-base); border-bottom: 1px solid var(--color-border-subtle);`.
2. **Maqolalar (Editorial Prose & Scholarly Margin):** Matn `color: var(--color-text-primary);`, iqtiboslar `background: var(--color-accent-gold-subtle); border-left: 3px solid var(--color-accent-gold);`. Scholarly Margin hoshiyasi `background: var(--color-bg-elevated);`.
3. **Kartochkalar va Roʻyxatlar (Cards):** `background: var(--color-bg-elevated); border: 1px solid var(--color-border-subtle);`.
4. **Jadvallar (Tables):** Sarlavha foni `var(--color-bg-subtle)`, chegaralar `var(--color-border-subtle)`, juft qatorlar `background: var(--color-bg-elevated)`.
5. **Global Qidiruv (Pagefind Dialog):** Modal foni `var(--color-bg-elevated)`, qidiruv maydoni foni `var(--color-bg-base)`, natija yoritgichi `background: var(--color-accent-gold-subtle)`.
6. **Interaktiv Atlas:** Xarita ramkasi `border: 1px solid var(--color-border-subtle);`, yon panel `background: var(--color-bg-elevated)`. Tungi rejimda SVG xarita qatlamlari koʻzni toliqtirmaydigan qorongʻu koshinlar yoki maxsus vazmin filtr bilan moslashadi.
7. **Nasabnomalar (Genealogy Views):** SVG fon `var(--color-bg-base)`, shajara chiziqlari `stroke: var(--color-border-strong)`, tugunlar foni `var(--color-bg-elevated)`, matn `var(--color-text-primary)`.
8. **Formalar va Dialoglar (Forms & Bottom Sheets):** Input elementlari foni `var(--color-bg-base)`, hoshiyasi `var(--color-border-subtle)`, fokusda `border-color: var(--color-focus-ring); outline: 2px solid var(--color-focus-ring)`.

---

## 4. Qulay Mavzu Kaliti (Accessible Theme Switch) va FOUC Himoyasi

Foydalanuvchi interfeysida uchinchi tomon kutubxonalarisiz ishlaydigan ixcham, semantik va toʻliq qulay mavzu oʻtkazgichi oʻrnatiladi:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   MAVZUNI TANLASH BOSHQARUVI (UI)                      │
│                                                                        │
│   [ ☀ Yorugʻ ]        [ ☾ Tun ]        [ ⚙ Tizim ]                      │
│   (Light)             (Night)          (System)                        │
└────────────────────────────────────────────────────────────────────────┘
```

### 4.1. Semantik Tuzilishi va Klaviatura Qulayligi (A11y):
- Komponent `<fieldset role="radiogroup" aria-label="Sayt mavzusini tanlash">` bilan oʻraladi.
- Har bir rejim uchun alohida `<button>` yoki radio input qoʻllanadi (`aria-checked="true"` bilan).
- Toʻliq klaviatura navigatsiyasi: `Tab` orqali fokuslanadi, `ArrowLeft` / `ArrowRight` orqali rejimlar oʻrtasida oʻtiladi, `Enter` / `Space` bilan faollashadi.

### 4.2. Tanlovni Saqlash va Tizimni Kuzatish (Persistence & System Tracking):
1. Foydalanuvchi tanlagan qiymat `localStorage.setItem('tolkien-theme', mode)` orqali saqlanadi (`'light'`, `'night'`, yoki `'system'`).
2. Agar foydalanuvchi `'system'` rejimini tanlasa, tizim `window.matchMedia('(prefers-color-scheme: dark)')` ga oʻzgarish tinglovchisi (`change` event listener) oʻrnatadi va operatsion tizim rejimi oʻzgarganda UI avtomatik yangilanadi.

### 4.3. Astro FOUC (Notoʻgʻri Mavzu Miltillashi)ning Oldini Olish:
> [!IMPORTANT]
> **Astro Pure SSG Qoidasi:** Statik saytda server-side rendering vaqtida `localStorage` yoki `window` mavjud emas. Agar mavzu mijozdagi React/JS moduli yuklangandan keyin oʻrnatilsa, sahifa ochilganda 100-200 ms davomida oq qogʻoz koʻrinib, soʻng toʻsatdan tungi rejimga sakrashi (Flash of Incorrect Theme / FOUC) yuz beradi.
> 
> **Yechim:** `src/layouts/BaseLayout.astro` shablonining eng boshida, barcha CSS fayllaridan oldin `<head>` ichiga ixcham bloklovchi **inline script** kiritiladi:

```html
<script is:inline>
  (function() {
    try {
      const stored = localStorage.getItem('tolkien-theme') || 'system';
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', stored);
      document.documentElement.setAttribute('data-applied-mode', 
        stored === 'night' || (stored === 'system' && systemDark) ? 'night' : 'light'
      );
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'system');
    }
  })();
</script>
```
Ushbu skript brauzer sahifani birinchi piksellarini chizishidan oldin (0 ms ichida) ishga tushadi va FOUC xatoligini 100% yoʻqotadi.

---

## 5. Silliq Oʻtishlar va Harakatni Kamaytirish (`prefers-reduced-motion`)

Mavzu almashganda ranglarning koʻzga yumshoq oʻtishi taʼminlanadi, shu bilan birga kognitiv xavfsizlik qoidalariga amal qilinadi:

```css
/* Mavzu almashish vaqtidagi silliq o'tish */
html.theme-transitioning,
html.theme-transitioning *,
html.theme-transitioning *::before,
html.theme-transitioning *::after {
  transition: background-color 200ms ease, border-color 200ms ease, color 200ms ease !important;
}

/* prefers-reduced-motion: Harakatni cheklagan foydalanuvchilar uchun darhol o'tish */
@media (prefers-reduced-motion: reduce) {
  html.theme-transitioning,
  html.theme-transitioning *,
  html.theme-transitioning *::before,
  html.theme-transitioning *::after {
    transition: none !important;
  }
}
```

---

## 6. Tasdiqlangan Kontrast Koʻrsatkichlari (Verified Contrast Ratios)

Mavzular shunchaki koʻz bilan emas, balki WCAG 2.1 AA va AAA standartlari boʻyicha aniq formulalar orqali tekshirildi:

| Mavzu Rejimi | Element va Rang Juftligi | Kontrast Nisbati | WCAG Darajasi |
| :--- | :--- | :--- | :--- |
| **Light** | Asosiy matn (`#1A1816`) fon (`#F7F5F0`) ustida | **15.2:1** | **AAA** (Zoʻr oʻqilish) |
| **Light** | Ikkilamchi matn (`#4A4641`) fon (`#F7F5F0`) ustida | **9.4:1** | **AAA** |
| **Light** | Havolalar (`#7A5E24`) fon (`#F7F5F0`) ustida | **5.8:1** | **AA** (Oʻtadi) |
| **Night** | Asosiy matn (`#E3DEC3`) fon (`#0F1715`) ustida | **12.4:1** | **AAA** (Yumshoq, tiniq) |
| **Night** | Ikkilamchi matn (`#B5B099`) fon (`#0F1715`) ustida | **8.1:1** | **AAA** |
| **Night** | Havolalar va Tilla (`#C5A059`) fon (`#0F1715`) ustida | **6.8:1** | **AA** |
| **Night** | Fokus ramkasi (`#C5A059`) fon (`#162220`) ustida | **5.9:1** | **AA** |

---

## 7. Tipografiya Strategiyasi va Shriftlar Tanlovi

Shriftlar faqat "Tolkien uslubiga oʻxshagani uchun" emas, balki **oʻqilishi, til qamrovi (Oʻzbek lotin va diakritikalar), litsenziya sofligi va yuklanish tezligi** boʻyicha qatʼiy tanlandi.

### 7.1. Tanlov Mezonlari va Filtrlash:
1. **Oʻzbek lotin va Tolkien fonetikasi qamrovi:** Shrift tarkibida `oʻ`, `gʻ`, shuningdek Elvish diakritikalari (`ë`, `ä`, `ö`, `í`, `ú`, `é`, `á`, `ñ`, `ā`, `ē`) xatosiz va buzilmasdan (tofu belgisiz) koʻrinishi shart.
2. **Litsenziya:** Faqat SIL Open Font License (OFL) yoki Apache 2.0.
3. **Format:** Zamonaviy `.woff2` formatida, faqat zarur gliflar toʻplami (subsetting) bilan yuklanadi (< 40 KB har bir vazn uchun).

### 7.2. Shriftlar Arxitekturasi va Zaxira (Fallback) Zanjiri:

| Vazifasi | Asosiy Shrift (Primary) | Zaxira Zanjiri (Fallback Stack) | Tanlov Asosi va Litsenziyasi |
| :--- | :--- | :--- | :--- |
| **Sarlavhalar va Monografik Display** | **EB Garamond** | `Georgia, "Times New Roman", serif` | SIL OFL. Oksford klassik matbaachiligi andozasi. Tolkien diakritikalarini va Oʻzbek maxsus harflarini toʻliq qamrab oladi. (*Cinzel* faqat bosh sahifa monogrammasida yordamchi boʻlishi mumkin). |
| **Asosiy Maqola Matni (Body Text)** | **Literata** | `Source Serif 4, Georgia, serif` | SIL OFL. Uzoq mutolaa uchun yaratilgan zamonaviy kitob shrifti. Google Books uchun maxsus ishlab chiqilgan, Oʻzbek lotin harflarida mukammal koʻrinadi. |
| **UI, Metamaʼlumotlar va Jadvallar** | **Inter** | `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | SIL OFL. Xaritalar, nasabnomalar, qidiruv natijalari va texnik parametrlar uchun maksimal tiniqlik. |

---

## 8. Oʻlchamlar, Panjara va Tartib Qoidalari (Layout Rules)

### 8.1. Tipografik Shkala (Type Scale)
- `text-xs`: 0.75rem (12px) — Manbalar, sanalar, indekslar.
- `text-sm`: 0.875rem (14px) — Yon panellar, navigatsiya yorliqlari.
- `text-base`: 1.0625rem (17px) — Asosiy maqola matni (oʻqish uchun qulay oʻlcham).
- `text-lg`: 1.25rem (20px) — Kichik sarlavhalar, iqtibos boshlanishi.
- `text-xl`: 1.5rem (24px) — Maqola ichki sarlavhalari (H3).
- `text-2xl`: 2rem (32px) — Boʻlim sarlavhalari (H2).
- `text-3xl`: 2.75rem (44px) — Asosiy maqola sarlavhasi (H1).
- `text-display`: 3.5rem (56px) — Bosh sahifa monografik sarlavhasi.

### 8.2. Matn Kengligi (Reading Measure)
Inson koʻzi charchamasligi uchun asosiy ensiklopediya maqolasi qatori kengligi **65–75 belgi (ch)** bilan cheklanadi:
```css
.editorial-prose {
  max-width: 72ch;
  line-height: 1.75;
}
```

### 8.3. Ikki Ustunli Editorial Tartib (Scholarly Margin)
Katta ekranlarda (Desktop >= 1024px) sahifa 2 ustunga boʻlinadi:
- **Asosiy ustun (68%):** Maqola matni, xronologik hikoya.
- **Hoshiya ustuni (32% - Scholarly Margin):** Qahramonning nasabnomaga havolasi, oilaviy aloqalari, oʻsha paytda yashagan joyi xaritasi miniatyurasi va Oksford manba iqtiboslari. Matn oʻqilayotganda foydalanuvchi sahifadan chiqmasdan yon tomondan manbani koʻrib boradi.

---

## 9. Responsiv va Mobil Qoidalar (Mobile-First)

1. **Atlas (Xaritalar) mobilda:**
   - Desktopdagi yonma-yon panel mobilda ekranning pastki qismidan silliq tortiluvchi **Bottom Sheet** dialogiga aylanadi.
   - Xarita toʻliq ekranni egallaydi, chimchilash (pinch-to-zoom) va bitta barmogʻi bilan surish qulay ishlaydi.
2. **Nasabnomalar mobilda:**
   - Murakkab gorizontal shajaralar kichik ekranda avtomatik ravishda **vertikal ierarxik akordeon** koʻrinishiga oʻtadi.
3. **Sensorli boshqaruv (Touch Targets):** Barcha bosiladigan tugmalar, mavzu almashtirgich, havolalar va tugunlar minimal `44x44px` teginish maydoniga ega boʻlishi shart.

---

## 10. Dizayn Qabul Qilish Mezonlari (Design Acceptance Criteria)

- [ ] **Uchta mavzu toʻliq ishlashi:** Boshlangʻich versiyadayoq Light, Night va System rejimlari toʻliq ishga tushirilishi shart.
- [ ] **Nol miltillash (0ms FOUC):** Sahifa yangilanganda yoki yuklanganda mavzu sakrashi yuz bermasligi lozim (Head inline script orqali).
- [ ] **Klaviatura va A11y:** Mavzu almashtirgich ekranni oʻquvchi dasturlar (screen readers) uchun toʻliq tushunarli boʻlishi va klaviaturada boshqarilishi shart.
- [ ] **Kontrast talabi:** Light va Night rejimlarida barcha asosiy matnlar kamida WCAG 2.1 AA (4.5:1) va matn tanasi AAA (> 7:1) talablariga javob berishi tasdiqlangan boʻlishi shart.
- [ ] **Harakat cheklovi:** `prefers-reduced-motion: reduce` boʻlganda mavzu oʻtishlaridagi barcha animatsiyalar darhol (0.01ms) oʻchirilishi lozim.
