# Tolkien Olami (tolkin-olami)

> **J.R.R. Tolkien afsonalar olamining (Legendarium) oʻzbek tilidagi birinchi akademik, matnshunoslikka asoslangan raqamli ensiklopediyasi.**

«Tolkien Olami» Oksford universiteti nashriyoti, Bodleian kutubxonasi va xalqaro tolkenshunoslik (Tolkien Studies) mezonlariga tayangan holda Arda, Oʻrta-yer, Valinor va Númenor tarixini, qahramonlarini, tillarini hamda asarlarini tizimli oʻrganish uchun yaratilgan ilmiy-maʼrifiy platformadir.

---

## 🏛️ Asosiy Xususiyatlar

- **Static-First & Pure SSG:** Barcha maqolalar oldindan statik kompilyatsiya qilinadi. Asosiy kontent sahifalarida **0 KB mijoz JavaScript** talab etiladi.
- **11 ta Axborot Yoʻnalishi va 230+ Sahifa:** Qahramonlar, asarlar, toponimlar, tarixiy voqealar, xalqlar, tillar, genealogiya va falsafiy maqolalar.
- **Qatʼiy Tipizatsiya va Zod Shartnomalari:** 9 ta toʻplam boʻyicha 220 dan ortiq yozuv qatʼiy sxemalar bilan validatsiya qilingan.
- **Interaktiv Planar Atlas (Leaflet):** Beleriand va Oʻrta-yerning tekislik (planar) vektor kartografiyasi, toponimlar koordinatalari va 5 ta qahramonona sayohat marshruti (Bilbo, Frodo, Uzuk Birodarligi, Beren va Lúthien, Kulrang Boʻlinma).
- **Kanonik Nasabnomalar (Genealogies):** Finwë, Durin, Elros, Rohan va Shayr sulolalarining interaktiv SVG daraxtlari.
- **Mahalliy Statik Qidiruv (Pagefind):** Oʻzbek lotin imlosi (`oʻ`, `gʻ`) va Tolkien diakritikalarini (`ë`, `ä`, `ú`) avtomatik ravishda tenglashtiruvchi tezkor qidiruv modali (`Cmd+K` / `Ctrl+K`).
- **Oksford Matbaachiligi Dizayn Tizimi:** 95% tabiiy paxta qogʻozi va toʻq siyoh, 5% vazmin tilla aksenti; litsenziyalangan EB Garamond, Literata va Inter shriftlari; toʻliq tungi rejim (FOUC xatolarisiz).
- **Toʻliq Avtomatlashtirilgan Sifat Nazorati:** 330 ta Vitest unit testlari, 120 ta Playwright E2E testlari va WCAG 2.1 AA darajasidagi qulaylik auditi.
- **Ishlab Chiqarish va Konteynerlash (Docker & CI/CD):** Koʻp bosqichli Dockerfile (Node 22 Bookworm Slim + Nginx Alpine), avtomatlashtirilgan GitHub Actions CI quvuri va Cloudflare Pages deploy qoʻllab-quvvatlovi.

---

## 🛠️ Texnologik Stek

| Qatlam | Texnologiya | Versiya | Izoh |
| :--- | :--- | :---: | :--- |
| **Freymvork** | [Astro](https://astro.build/) | `v7.3.8` | Statik rejim (`output: 'static'`) |
| **Dasturlash tili** | [TypeScript](https://www.typescriptlang.org/) | `v5.7.3` | Qatʼiy rejim (`"strict": true`) |
| **Bajarilish muhiti**| [Node.js](https://nodejs.org/) | `v24.21.0` | npm v11+ |
| **Stillashtirish** | Plain CSS Tokens | — | Maxsus dizayn tokenlari (0 tashqi CSS dependency) |
| **Xaritalar** | [Leaflet](https://leafletjs.com/) | `v1.9.4` | SSR-xavfsiz orol, planar CRS |
| **Qidiruv** | [Pagefind](https://pagefind.app/) | `v1.5.2` | Statik klient qidiruv indeksi |
| **Unit Testlar** | [Vitest](https://vitest.dev/) | `v3.2.7` | Sxema, havolalar va byudjet testlari |
| **E2E Sinovlari** | [Playwright](https://playwright.dev/) | `v1.64.0` | Brauzer darajasidagi integratsiya va a11y |
| **Qulaylik (a11y)** | [@axe-core/playwright](https://www.deque.com/axe/) | `v4.13.0` | WCAG 2.1 AA qatʼiy nazorati |

---

## 🚀 Oʻrnatish va Ishga Tushirish

Loyihani klonlab olgach, quyidagi buyruqlar orqali ishga tushirishingiz mumkin:

### 1. Bogʻliqliklarni oʻrnatish
```bash
npm ci
```

### 2. Mahalliy rivojlantirish serveri (Dev)
```bash
npm run dev
```
Brauzerda `http://localhost:4321` manzilida ochiladi.

### 3. Loyihani ishlab chiqarishga yigʻish (Build)
```bash
npm run build
```
Bu buyruq Astro orqali 232 ta statik HTML sahifasini yaratadi va Pagefind yordamida qidiruv indeksini `dist/pagefind/` ga generatsiya qiladi.

### 4. Yigʻilgan versiyani koʻrish (Preview)
```bash
npm run preview
```

### 5. Tiplar va Astro shablonlarini tekshirish
```bash
npm run check
# yoki:
npx astro check
```

### 6. Docker orqali ishlab chiqarishda ishga tushirish (Production Container)
Loyiha ikki bosqichli Docker arxitekturasiga ega (Node 22 Bookworm Slim + Nginx Alpine):

```bash
# Docker obrazini yig'ish
docker build -t tolkien-olami:latest .

# Konteynerni ishga tushirish (8080-portda)
docker run -d -p 8080:80 --name tolkien-olami-app tolkien-olami:latest
```
Brauzerda `http://localhost:8080` orqali toʻliq statik xizmat ochiladi.

---

## 🧪 Sinovlarni Ishga Tushirish (Testing)

Loyiha sifat va regressiyaga qarshi mustahkam sinov qatlamiga ega (jami **330 ta unit** va **120 ta E2E** test):

```bash
# 1. Loyihani avval to'liq yig'ing (Performance va havolalar testi uchun kerak):
npm run build

# 2. Barcha Unit va Sxema testlarini o'tkazish (Vitest - 29 ta test fayli, 330 ta test):
npm run test:unit

# 3. Playwright brauzerini yuklab olish (agar hali o'rnatilmagan bo'lsa):
npx playwright install chromium

# 4. End-to-End (E2E) va WCAG 2.1 AA testlarini o'tkazish (120 ta test):
npm run test:e2e
```

> **Eslatma:** `tests/unit/performance-budgets.spec.ts` va `tests/unit/content-crosslinks.spec.ts` testlari `dist/` katalogidagi yigʻilgan aktivlar hajmi va singan havolalarni tekshiradi. Agar `dist/` mavjud boʻlmasa, byudjet testlari xavfsiz tarzda oʻtkazib yuboriladi (skip).

---

## ⚙️ CI/CD Quvuri (Continuous Integration)

GitHub Actions quvuri (`.github/workflows/ci.yml`) quyidagi bosqichlarni `ubuntu-latest` muhitida toʻliq tekshiradi:
1. `npm ci` — Reproduktiv toza bogʻliqliklarni oʻrnatish.
2. `npm run check` — Astro va TypeScript qatʼiy tipizatsiya nazorati.
3. `npm run test:unit` — 330 ta Vitest birlik testlari.
4. `npm run build` — 232 ta statik HTML sahifasini yaratish va Pagefind indekslash.
5. `npm run test:e2e` — 120 ta Playwright sinovlari (Accessibility, mobil responsivlik, atlas va qidiruv).

---

## 🔧 Nosozliklarni Bartaraf Etish (Troubleshooting)

- **Windows PowerShell ExecutionPolicy:** Agar Windowsda `npm` yoki `npx` skriptlari `UnauthorizedAccess` xatosini bersa, `npm.cmd` va `npx.cmd` buyruqlaridan foydalaning yoki `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` ni kiriting.
- **Pagefind Dev Rejimi:** Dastlabki yuklanishda qidiruv indeksi mavjud boʻlishi uchun `npm run dev` dan oldin bir marta `npm run build` buyrugʻini ishga tushiring.
- **Docker muhiti:** Dockerfile Debian `node:22-bookworm-slim` dan foydalanadi; bu Pagefind va Rollupning Linux x64 glibc kutubxonalari bilan 100% ziddiyatsiz ishlashini taʼminlaydi.


---

## 📁 Loyiha Kataloglar Tuzilmasi

```
tolkin-olami/
├── .github/
│   └── workflows/
│       └── ci.yml                  # GitHub Actions CI avtomatlashtirish quvuri
├── docs/                           # Loyiha meʼmoriy spetsifikatsiyalari
│   ├── 01_PRODUCT_VISION.md
│   ├── 02_INFORMATION_ARCHITECTURE.md
│   ├── 03_TECHNICAL_ARCHITECTURE.md
│   ├── 04_DESIGN_SYSTEM.md
│   ├── 05_ANIMATION_PERFORMANCE.md
│   ├── 06_CONTENT_CANON_STANDARDS.md
│   ├── 07_TESTING_REGRESSION_PREVENTION.md
│   ├── 08_IMPLEMENTATION_ROADMAP.md
│   ├── 09_FAILURE_MODES_AND_MITIGATIONS.md
│   └── 10_CURRENT_STATE.md         # Kontent va aktivlar auditi hisoboti
├── public/                         # Statik ommaviy resurslar
│   ├── assets/maps/                # Vektor SVG xaritalar va litsenziyalar
│   ├── images/characters/          # Qahramon portretlari (WebP)
│   ├── _headers                    # Cloudflare Pages xavfsizlik sarlavhalari
│   └── robots.txt
├── scripts/                        # Yordamchi audit va boyitish skriptlari
│   ├── audit-content.cjs           # Kontent auditini o'tkazuvchi skript
│   └── audit-editorial.cjs         # Tahririyat qoidalari va sifat eshiklari auditi
├── src/
│   ├── components/                 # UI komponentlar va interaktiv orollar
│   │   ├── atlas/                  # Leaflet xarita komponentlari
│   │   ├── editorial/              # Ilmiy iqtibos, hoshiya va meta-bloklar
│   │   ├── genealogy/              # Nasabnoma SVG daraxti
│   │   ├── layout/                 # Boshqaruv paneli, menyu va footer
│   │   └── search/                 # Pagefind qidiruv modali
│   ├── content/                    # Ensiklopediya kontent toʻplamlari
│   │   ├── articles/               # Ilmiy-ommabop maqolalar (Markdown)
│   │   ├── books/                  # Tolkien bibliografiyasi (JSON)
│   │   ├── characters/             # Qahramonlar kartalari (JSON)
│   │   ├── cosmology/              # Kosmologik tushunchalar (JSON)
│   │   ├── events/                 # Tarixiy voqealar (JSON)
│   │   ├── genealogies/            # Shajaralar (JSON)
│   │   ├── languages/              # Tillar va yozuvlar (JSON)
│   │   ├── peoples/                # Irqlar va xalqlar (JSON)
│   │   ├── places/                 # Toponimlar va joylar (JSON)
│   │   └── schemas.ts              # Zod maʼlumotlar shartnomalari
│   ├── data/                       # Dasturiy registrlar (portretlar, sayohatlar)
│   ├── layouts/                    # Asosiy sahifa qoliplari (BaseLayout, EditorialLayout)
│   ├── pages/                      # 11 ta asosiy yo'nalish sahifalari
│   ├── styles/                     # CSS tokenlari va global qoidalar
│   └── utils/                      # Entity-resolver, slug, atlas koordinatalari
├── tests/
│   ├── e2e/                        # Playwright integratsion va a11y testlari
│   └── unit/                       # Vitest sxema, havolalar va byudjet testlari
├── .dockerignore                   # Docker kontekst filtri
├── Dockerfile                      # Ko'p bosqichli ishlab chiqarish konteyneri
├── nginx.conf                      # Ishlab chiqarish Nginx konfiguratsiyasi
├── astro.config.mjs
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── vitest.config.ts
```

---

## 📚 Meʼmoriy Hujjatlar (Documentation)

Loyihaning barcha meʼmoriy spetsifikatsiyalari `docs/` katalogida toʻliq bayon etilgan:

1. [01. Mahsulot Falsafasi va Maqsadi](docs/01_PRODUCT_VISION.md) — Missiya, qadriyatlar va qabul qilish mezonlari.
2. [02. Axborot Arxitekturasi va URL Qoidalari](docs/02_INFORMATION_ARCHITECTURE.md) — Sayt xaritasi, 11 ta boʻlim va kanonik sluglar.
3. [03. Texnik Arxitektura va Maʼlumot Shartnomalari](docs/03_TECHNICAL_ARCHITECTURE.md) — Astro, Zod sxemalari va maʼlumotlar oqimi.
4. [04. Dizayn Tizimi va Tokenlar](docs/04_DESIGN_SYSTEM.md) — Qogʻoz/siyoh/tilla palitrasi, tipografiya va CSS tokenlari.
5. [05. Animatsiya va Unumdorlik Standartlari](docs/05_ANIMATION_PERFORMANCE.md) — Core Web Vitals va sahifa byudjetlari.
6. [06. Kontent, Kanon va Manbashunoslik](docs/06_CONTENT_CANON_STANDARDS.md) — Oksford iqtibos standarti va Legendarium matnshunosligi.
7. [07. Sinovlar, Qulaylik va Regressiyaning Oldini Olish](docs/07_TESTING_REGRESSION_PREVENTION.md) — Vitest, Playwright va WCAG 2.1 AA.
8. [08. Amalga Oshirish Yoʻl Xaritasi (Roadmap)](docs/08_IMPLEMENTATION_ROADMAP.md) — Fazalar taqsimoti va Faza 7 ish paketlari.
9. [09. Kutiladigan Xatoliklar va Ularning Oldini Olish](docs/09_FAILURE_MODES_AND_MITIGATIONS.md) — Xarita, shajara va qidiruv boʻyicha himoyalar.
10. [10. Loyihaning Haqiqiy Holati Audit Hisoboti](docs/10_CURRENT_STATE.md) — Kontent toʻplamlari, portretlar, xaritalar va yupqa yozuvlar auditi.
11. [11. Oʻzbek Tahririyat Uslubiyoti va Sifat Standartlari](docs/11_EDITORIAL_STYLE_GUIDE.md) — Imlo, fonetika, atamalar lugʻati va minimal sifat mezonlari.
12. [12. Kanonik Manbalar Siyosati va Iqtibos Standartlari](docs/12_CANONICAL_SOURCE_POLICY.md) — Toʻrt pogʻonali matn ierarxiyasi, birlamchi vs ikkilamchi manbalar va Oksford iqtibos tizimi.
13. [13. Qahramonlar Vizual Auditi va Portretlar Ensiklopediyasi](docs/CHARACTER_VISUAL_AUDIT.md) — Barcha 81 ta qahramonning toʻliq vizual inventarizatsiyasi, fotorealistik portretlar holati va ishlab chiqarish manifesti.

---

## ⚖️ Huquqiy Izoh va Mualliflik Huquqlari

- J.R.R. Tolkien asarlari, atamalari va qahramon nomlari Tolkien Estate hamda rasmiy nashriyotlarga tegishli.
- Ushbu platforma notijorat, akademik, maʼrifiy va tahliliy tadqiqot maqsadlarida yuritiladi (Fair Use / Taʼlimiy tahlil).
- Loyihaning dasturiy kodi va original tahliliy matnlari akademik litsenziyalar asosida taqdim etiladi.
