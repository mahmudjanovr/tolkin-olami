# 07. TESTING, ACCESSIBILITY, AND REGRESSION PREVENTION

**Loyiha nomi:** TOLKIEN OLAMI  
**Hujjat holati:** Faza 1 (Arxitektura va rejalashtirish)  
**Oxirgi yangilanish:** 2026-10-11

---

## 1. Sifat Kafolati (QA) Strategiyasi

**TOLKIEN OLAMI** ensiklopediyasida har bir sahifa, interaktiv orol va maʼlumotlar toʻplami avtomatlashtirilgan testlar bilan himoyalanadi. Sayt foydalanuvchiga taqdim etilganda xaritaning boʻshab qolishi, panellarning bir-birini toʻsib qoʻyishi yoki qidiruvda nomlar topilmasligi kabi xatolar avtomatik CI tekshiruvlarida aniqlanib toʻxtatiladi.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   TESTLASH VA SIFAT IERARXIYASI                        │
│                                                                        │
│  [1. KOMPILYATSIYA VA QATʼIY TIP TEKSHIRUVI]                           │
│  • tsc --noEmit (Strict TypeScript xatoliklariga 0 tolerantlik)        │
│  ───────────────────────────────────────────────────────────────────  │
│  [2. SCHEMA VA KONTENT MUNOSABATLARI TESTI (Vitest)]                  │
│  • Barcha Zod sxemalarini validatsiya qilish                           │
│  • Singan havolalarni (Broken cross-links) aniqlash                    │
│  • Oʻzbek diakritik normalizatorini testlash                          │
│  ───────────────────────────────────────────────────────────────────  │
│  [3. REGRESSIYA VA INTERAKTIV OROLLAR TESTI (Playwright E2E)]          │
│  • Atlas: Resize, qatlamlar almashinuvi, 0x0 bo'sh ekran testi         │
│  • Panel: Desktop va Mobil panellar to'qnashuvi yo'qligi               │
│  • Qidiruv: Diakritika va klaviatura navigatsiyasi (Cmd+K)             │
│  ───────────────────────────────────────────────────────────────────  │
│  [4. QULAYLIK VA WCAG 2.1 AA TESTI (Axe-core)]                        │
│  • Kontrast, Tab tartibi, Ekran o'quvchilari (Screen readers)         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Unit va Sxema Testlari (Vitest)

### 2.1. Maʼlumotlar Butunligi va Singan Havolalar Tekshiruvi
Ensiklopediya ichidagi har bir havola haqiqiy mavjud sahifaga yoʻnaltirilgan boʻlishi shart:
```typescript
// Misol: tests/unit/content-validation.spec.ts
describe('Kontent va Bogʻliqliklar Validatsiyasi', () => {
  it('Barcha qahramonlar Zod sxemasidan xatosiz oʻtishi kerak', () => {
    // characters to'plamidagi har bir fayl tekshiriladi
  });

  it('Barcha bogʻliq entitilar (related_characters, places) mavjud boʻlishi kerak', () => {
    // Masalan, Fëanor ning house_id: "finwe-xonadoni" mavjudligi tekshiriladi
  });

  it('Manba kitoblarning barchasi books katalogida roʻyxatdan oʻtgan boʻlishi kerak', () => {
    // Har bir iqtibosdagi book_slug mavjudligi tasdiqlanadi
  });
});
```

### 2.2. Oʻzbek Lotin va Diakritika Qidiruv Testi
```typescript
describe('Qidiruv Normalizatori', () => {
  it('Elvish diakritikalarini toʻgʻri tenglashtirishi kerak', () => {
    expect(normalizeSearch('Feanor')).toBe('feanor');
    expect(normalizeSearch('Fëanor')).toBe('feanor');
    expect(normalizeSearch('Eärendil')).toBe('earendil');
  });

  it('Oʻzbekcha oʻ va gʻ harflarini har qanday apostrofda tanishi kerak', () => {
    expect(normalizeSearch("o'g'ri")).toBe(normalizeSearch("oʻgʻri"));
  });
});
```

---

## 3. End-to-End va Regressiya Testlari (Playwright)

### 3.1. Atlas (Xarita) Barqarorligi Test Suite
Oldingi ishlab chiqish bosqichlaridagi eng katta xatolik — xarita boʻshab qolishi (blank map) boʻlgan. Playwright ushbu holatni qatʼiy tekshiradi:

```typescript
// tests/e2e/atlas.spec.ts
test.describe('Interaktiv Atlas Xavfsizligi', () => {
  test('Oynani qayta oʻlchaganda (resize) xarita konteyneri boʻshab qolmasligi shart', async ({ page }) => {
    await page.goto('/xaritalar/');
    await page.waitForSelector('.leaflet-container');

    // Desktop oʻlchami
    await page.setViewportSize({ width: 1440, height: 900 });
    const initialBounds = await page.locator('.leaflet-container').boundingBox();
    expect(initialBounds?.width).toBeGreaterThan(0);

    // Kichik ekranga oʻzgartirish
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(300); // debounce vaqti

    // Konteyner o'lchami 0 bo'lib qolmaganini tekshirish
    const resizedBounds = await page.locator('.leaflet-container').boundingBox();
    expect(resizedBounds?.width).toBeGreaterThan(0);
    expect(resizedBounds?.height).toBeGreaterThan(0);

    // Koshinlar (tiles) muvaffaqiyatli yuklanganini tasdiqlash
    const tilesCount = await page.locator('.leaflet-tile-loaded').count();
    expect(tilesCount).toBeGreaterThan(0);
  });

  test('Maʼlumot paneli ochilganda desktopda xaritani ustiga minmasligi kerak', async ({ page }) => {
    await page.goto('/xaritalar/?joy=gondolin');
    const mapBox = await page.locator('#atlas-map').boundingBox();
    const panelBox = await page.locator('#atlas-inspector').boundingBox();

    // Ikkala quti bir-birining ustiga chiqmaganini tekshirish (Grid yonma-yon)
    expect(mapBox!.x + mapBox!.width).toBeLessThanOrEqual(panelBox!.x + 2); // 2px margin tolerance
  });
});
```

### 3.2. Qidiruv va Klaviatura Navigatsiyasi Test Suite
- `Cmd+K` bosilganda modal oyna 100 ms ichida ochilishi.
- `Escape` bosilganda yopilishi va fokus avvalgi elementga qaytishi.
- `ArrowDown` orqali natijalar boʻylab tushish va `Enter` orqali kerakli sahifaga oʻtish.

---

## 4. Qulaylik (Accessibility) Standartlari va WCAG 2.1 AA

1. **Avtomatlashtirilgan audit:** Har bir asosiy sahifa `@axe-core/playwright` orqali tekshiriladi, jiddiy (`critical` yoki `serious`) xatoliklarga ruxsat berilmaydi.
2. **Kontrast talabi:** Qogʻoz foni (`#F7F5F0`) va toʻq siyoh matni (`#1A1816`) oʻrtasidagi kontrast nisbati kamida **12:1** (WCAG AAA darajasi). Yordamchi matn va tilla chegaralar uchun minimal **4.5:1** (WCAG AA).
3. **Fokus koʻrsatkichlari (Focus Rings):** Klaviatura orqali harakatlanuvchi foydalanuvchilar uchun har bir interaktiv element aniq tilla-koʻmir hoshiyali fokus indikatoriga ega boʻladi (`outline: 2px solid var(--color-gold-accent)`).

---

## 5. CI / CD Ishga Tushirish Tartibi (Pipeline Order)

Gitga har qanday oʻzgarish kiritilganda quyidagi tartibda tekshiruv oʻtadi:
1. `npm run lint` va `npm run typecheck`
2. `npm run test:unit` (Vitest: Zod sxemalari va havolalar)
3. `npm run build` (Statik sahifalar va Pagefind indeksi yigʻilishi)
4. `npm run test:e2e` (Playwright: Atlas, Navigatsiya, A11y)
