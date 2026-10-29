# 05. ANIMATION AND PERFORMANCE STANDARDS

**Loyiha nomi:** TOLKIEN OLAMI  
**Hujjat holati:** Faza 1 (Arxitektura va rejalashtirish)  
**Oxirgi yangilanish:** 2026-10-11

---

## 1. Harakat Falsafasi (Cinematic Motion Philosophy)

**TOLKIEN OLAMI** saytida harakat (animatsiya) bezak yoki koʻngilochar vosita emas, balki **hikoya qilish (storytelling) va diqqatni boshqarish vositasidir**.

### Asosiy Qoidalar:
1. **Vazminlik (Restraint):** Foydalanuvchi saytga kirganda elementlar har tomondan sakrab tushmaydi. Sahifa xuddi ehtiyotkorlik bilan ochilgan qoʻlyozmadek xotirjam va barqaror ochiladi.
2. **Kognitiv qulaylik:** Animatsiyalar mutolaa jarayoniga mutlaqo xalaqit bermasligi lozim. Uzoq davom etuvchi (loop) yoki aylanuvchi chalgʻituvchi effektlar qatʼiyan taqiqlanadi.
3. **`prefers-reduced-motion` toʻliq qoʻllab-quvvatlanishi:** Tizimida harakatni kamaytirish funksiyasini yoqqan foydalanuvchilar uchun barcha oʻtishlar darhol (`transition: none; transform: none;`) amalga oshiriladi.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 2. Animatsiyalarni Texnik Amalga Oshirish Qoidalari

1. **CSS va Native API ustuvorligi:**
   - 90% mikro-harakatlar (sahifa oʻtishlari, tilla hoshiya ochilishi, yon panel surilishi) faqatgina GPU orqali tezlashtirilgan CSS xossalari (`transform` va `opacity`) bilan bajariladi.
   - `left`, `top`, `width`, `height`, `margin` kabi brauzer "layout/reflow" bosqichini majburlaydigan xossalar aslo animatsiya qilinmaydi.
2. **IntersectionObserver:**
   - Matn bloklari yoki xronologiya nuqtalarining ekranga kirib kelishini kuzatish uchun ogʻir tashqi kutubxonalar emas, native `IntersectionObserver` ishlatiladi.
3. **GSAP va ScrollTrigger boʻyicha pozitsiya:**
   - GSAP ogʻir kutubxona boʻlgani sababli barcha sahifalarga umumiy kiritilmaydi. U faqat va faqat maxsus interaktiv hikoya sahifasida (masalan, *Ainulindalë* musiqiy-vizual sahifasi yoki Beleriand choʻkish xronologiyasi) zaruriyati toʻliq isbotlangan taqdirdagina alohida dinamik import (`import()`) qilinadi.

---

## 3. Oʻlchanadigan Unumdorlik Maqsadlari (Performance Targets)

> [!NOTE]
> Quyidagi koʻrsatkichlar barcha qurilmalar uchun mutlaq kafolat emas, balki standart test profilida (Lighthouse Throttled CPU, Simulated 4G) nazorat qilinadigan **oʻlchanadigan texnik nishonlardir (measurable targets)**.

### 3.1. Core Web Vitals Nishonlari:

| Koʻrsatkich | Desktop Maqsadi | Mobil Maqsadi (Simulated 4G, Throttled CPU) | Sinov Asbobi |
| :--- | :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | `< 1.2s` | `< 2.0s` | Lighthouse CLI / PageSpeed Insights |
| **CLS (Cumulative Layout Shift)** | `< 0.02` | `< 0.05` | Playwright Tracing / DevTools |
| **INP (Interaction to Next Paint)** | `< 80ms` | `< 120ms` | Chrome DevTools Performance Panel |
| **TBT (Total Blocking Time)** | `< 100ms` | `< 150ms` | Lighthouse Simulated Throttling |

### 3.2. Sahifa Ogʻirligi Byudjeti (Page Weight Budgets):
> [!IMPORTANT]
> Barcha tarmoq orqali uzatiladigan hajm koʻrsatkichlari **siqilgan (gzipped / brotli compressed transfer size)** baytlarda oʻlchanadi. (Xususan, Leaflet kutubxonasining asl hajmi ~145 KB boʻlsa-da, gzipped koʻrinishida ~42 KB ni tashkil qiladi va ajratilgan byudjetga toʻliq sigʻadi).

- **Boshlangʻich HTML:** `< 30 KB` (gzipped, barcha sahifalar uchun).
- **Kritik CSS:** `< 35 KB` (gzipped).
- **Mijoz JavaScript hajmi (Gzipped Wire Size):**
  - Oddiy ensiklopediya maqolalari: **0 KB** (sof HTML/CSS, mijozga JS yuklanmaydi).
  - Qidiruv modali: `< 25 KB` (gzipped, Pagefind mijoz kutubxonasi bilan).
  - Interaktiv Atlas: `< 60 KB` (gzipped, Leaflet va xarita boshqaruv logikasi).
  - Nasabnoma sahifasi: `< 30 KB` (gzipped, SVG/interaktiv orol).

---

## 4. 8 GB RAM Mashinasida Ishlash va Xotirani Saqlash Qoidalari

Ishlab chiquvchi kompyuterida ~3.6 GB boʻsh RAM mavjudligi inobatga olingan holda quyidagi himoya choralari koʻriladi:

1. **Node.js Heap chegarasi:** Yigʻish (build) skriptlarida xotira oqib ketmasligi uchun `--max-old-space-size=3072` (3 GB) bilan cheklanadi.
2. **Katta rasmlarni oʻz vaqtida optimallashtirish:**
   - Yuqori aniqlikdagi xarita rasmlari xotirada bir vaqtning oʻzida qayta ishlanmaydi; Sharp yordamida koshinlar (tiles) bosqichma-bosqich generatsiya qilinadi.
3. **Vite keshini boshqarish:** Ishlab chiqish vaqtida fayl oʻzgarishlarini kuzatuvchi (watcher) jarayonlar soni minimal ushlab turiladi.
4. **Resurslarni sinovdan oʻtkazish protokoli:**
   - Har bir yangi interaktiv orol kiritilganda Playwright orqali 20 marta sahifani ochib-yopish testi oʻtkaziladi va brauzer xotirasi (DOM Nodes va JS Heap) oqib ketmayotgani tekshiriladi.
