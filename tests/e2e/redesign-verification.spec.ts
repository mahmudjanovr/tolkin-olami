import { test, expect } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const PAGES = [
  { name: 'olam', path: '/olam/' },
  { name: 'kitoblar', path: '/kitoblar/' },
  { name: 'qahramonlar', path: '/qahramonlar/' },
  { name: 'xaritalar', path: '/xaritalar/' },
  { name: 'xalqlar-va-tillar', path: '/xalqlar-va-tillar/' },
];

const VIEWPORTS = [
  { name: '1440px', width: 1440, height: 900 },
  { name: '768px', width: 768, height: 1024 },
  { name: '390px', width: 390, height: 844 },
];

const THEMES = ['light', 'night'] as const;

test.describe('Tolkien Olami — 5 Boʻlim Qayta Dizayni Tekshiruvi (Redesign Verification)', () => {
  const screenshotsDir = join(process.cwd(), 'docs/screenshots/redesign');
  mkdirSync(screenshotsDir, { recursive: true });

  test.describe('1. 390px va boshqa ekranlarda gorizontal toshib ketish yoʻqligi (No Horizontal Overflow)', () => {
    for (const pageItem of PAGES) {
      test(`${pageItem.name} sahifasida 390px ekran oʻlchamida gorizontal scroll yoʻq`, async ({ page }) => {
        await page.setViewportSize({ width: 390, height: 844 });
        await page.goto(pageItem.path);
        await page.waitForLoadState('domcontentloaded');

        const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

        if (scrollWidth > clientWidth + 1) {
          const overflowEls = await page.evaluate(() => {
            const cw = document.documentElement.clientWidth;
            const res: string[] = [];
            document.querySelectorAll('*').forEach((el) => {
              const r = el.getBoundingClientRect();
              if (r.right > cw + 1) {
                res.push(`${el.tagName}.${(el.className?.toString?.() || '').slice(0, 50)} (right: ${r.right}, width: ${r.width})`);
              }
            });
            return res.slice(0, 10);
          });
          console.log(`[Overflow on ${pageItem.name}]:`, overflowEls);
        }

        expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1); // allow 1px rounding
      });
    }
  });

  test.describe('2. Kartalarda footer havolalari ("Batafsil") mavjudligi', () => {
    test('/kitoblar/ sahifasidagi EntityCardlarda "Batafsil" havolalari mavjud', async ({ page }) => {
      await page.goto('/kitoblar/');
      const cardBtns = page.locator('.entity-primary-btn');
      const count = await cardBtns.count();
      expect(count).toBeGreaterThanOrEqual(1);

      const firstBtn = cardBtns.first();
      await expect(firstBtn).toContainText('Batafsil');
      const href = await firstBtn.getAttribute('href');
      expect(href).toMatch(/\/kitoblar\/[a-z0-9-]+\//);
    });

    test('/qahramonlar/ sahifasidagi EntityCardlarda "Batafsil" havolalari mavjud', async ({ page }) => {
      await page.goto('/qahramonlar/');
      const cardBtns = page.locator('.entity-primary-btn');
      const count = await cardBtns.count();
      expect(count).toBeGreaterThanOrEqual(1);

      const firstBtn = cardBtns.first();
      await expect(firstBtn).toContainText('Batafsil');
      const href = await firstBtn.getAttribute('href');
      expect(href).toMatch(/\/qahramonlar\/[a-z0-9-]+\//);
    });

    test('/xaritalar/ toponim katalogida "Batafsil" havolalari mavjud', async ({ page }) => {
      await page.goto('/xaritalar/#toponimlar');
      const cardBtns = page.locator('#toponimlar .entity-primary-btn');
      const count = await cardBtns.count();
      expect(count).toBeGreaterThanOrEqual(1);

      const firstBtn = cardBtns.first();
      await expect(firstBtn).toContainText('Batafsil');
      const href = await firstBtn.getAttribute('href');
      expect(href).toMatch(/\/xaritalar\/[a-z0-9-]+\//);
    });

    test('/xalqlar-va-tillar/ sahifasida "Batafsil" havolalari mavjud', async ({ page }) => {
      await page.goto('/xalqlar-va-tillar/#xalqlar');
      const cardBtns = page.locator('.entity-primary-btn');
      const count = await cardBtns.count();
      expect(count).toBeGreaterThanOrEqual(1);

      const firstBtn = cardBtns.first();
      await expect(firstBtn).toContainText('Batafsil');
      const href = await firstBtn.getAttribute('href');
      expect(href).toMatch(/\/xalqlar-va-tillar\/[a-z0-9-]+\//);
    });
  });

  test.describe('3. Filtrlash natijalar hisoblagichini oʻzgartirishi (aria-live announcer)', () => {
    test('/kitoblar/ sahifasida toifa filtri bosilganda natijalar hisoblagichi yangilanadi', async ({ page }) => {
      await page.goto('/kitoblar/');
      const announcer = page.locator('#books-list .count-value');
      const initialText = await announcer.textContent();
      expect(Number(initialText?.trim())).toBe(35);

      // "Birlamchi asarlar" chipini bosish
      const primaryChip = page.locator('#books-list [data-filter-id="primary_lifetime"]');
      await primaryChip.click();

      // Hisoblagich 11 bo'lishi kerak
      await expect(announcer).toHaveText('11');
    });

    test('/qahramonlar/ sahifasida irq filtri bosilganda hisoblagich yangilanadi', async ({ page }) => {
      await page.goto('/qahramonlar/');
      const announcer = page.locator('#characters-list .count-value');
      const initialText = await announcer.textContent();
      expect(Number(initialText?.trim())).toBe(81);

      // "Elflar" chipini bosish
      const elfChip = page.locator('#characters-list [data-filter-id="elflar"]');
      await elfChip.click();

      const newText = await announcer.textContent();
      expect(Number(newText?.trim())).toBeLessThan(81);
      expect(Number(newText?.trim())).toBeGreaterThan(0);
    });

    test('/qahramonlar/ sahifasida alifbo tugmasi bosilganda filtr ishlaydi', async ({ page }) => {
      await page.goto('/qahramonlar/');
      const letterA = page.locator('.jump-letter-btn[data-jump-letter="A"]');
      await letterA.click();

      const visibleCards = page.locator('#characters-list .entity-card:visible');
      const count = await visibleCards.count();
      expect(count).toBeGreaterThan(0);

      // Barcha ko'ringan kartalar 'A' bilan boshlanishi kerak
      const firstCardLetter = await visibleCards.first().getAttribute('data-letter');
      expect(firstCardLetter).toBe('A');
    });
  });

  test.describe('4. /xaritalar/ da xarita konteyneri nol boʻlmagan hajmga ega va Leaflet initsializatsiya boʻladi', () => {
    test('Xarita konteyneri balandligi kamida 320px va Leaflet konteyner sinfi mavjud', async ({ page }) => {
      await page.goto('/xaritalar/');

      const mapContainer = page.locator('#atlas-map-container');
      await expect(mapContainer).toBeVisible();

      const bounds = await mapContainer.boundingBox();
      expect(bounds).not.toBeNull();
      expect(bounds!.height).toBeGreaterThanOrEqual(320);
      expect(bounds!.width).toBeGreaterThan(300);

      // Leaflet initsializatsiya sinflari
      const leafletContainer = page.locator('#atlas-map-container.leaflet-container');
      await expect(leafletContainer).toBeVisible();
    });
  });

  test.describe('5. /kitoblar/ javon koʻrgazmasi va klaviatura navigatsiyasi', () => {
    test('Javon gorizontal skroll va tabindex="0" ga ega', async ({ page }) => {
      await page.goto('/kitoblar/');
      const track = page.locator('.bookshelf-scroll-track');
      await expect(track).toBeVisible();
      await expect(track).toHaveAttribute('tabindex', '0');

      const items = page.locator('.shelf-book-item');
      const count = await items.count();
      expect(count).toBe(35);
    });
  });

  test.describe('6. /olam/ portalida 3 ta katta kirish kartochkasi', () => {
    test('Kitoblar, Joylar va Xaritalar boʻyicha 3 ta karta mavjud', async ({ page }) => {
      await page.goto('/olam/');
      const cards = page.locator('.hub-large-card');
      await expect(cards).toHaveCount(3);

      await expect(page.locator('.hub-cards-grid a[href="/kitoblar/"]').first()).toBeVisible();
      await expect(page.locator('.hub-cards-grid a[href="/xaritalar/#toponimlar"]').first()).toBeVisible();
      await expect(page.locator('.hub-cards-grid a[href="/xaritalar/"]').first()).toBeVisible();
    });
  });

  test.describe('6b. 1440px da Header logotipi bilan sahifa sarlavhasi, toolbar va kontent chap qirrasi tekisligi (Alignment)', () => {
    for (const pageItem of PAGES) {
      test(`${pageItem.name} sahifasi chap qirrasi header logotipi bilan bir chiziqda (1440px)`, async ({ page }) => {
        await page.setViewportSize({ width: 1440, height: 900 });
        await page.goto(pageItem.path);
        await page.waitForLoadState('domcontentloaded');

        const logoBox = await page.locator('.brand-link').boundingBox();
        const h1Box = await page.locator('h1').first().boundingBox();

        expect(logoBox).not.toBeNull();
        expect(h1Box).not.toBeNull();
        expect(Math.abs(logoBox!.x - h1Box!.x)).toBeLessThanOrEqual(1);

        if (pageItem.name === 'xaritalar') {
          const controlsBox = await page.locator('.atlas-controls-bar').boundingBox();
          const mapCanvasBox = await page.locator('#atlas-canvas-container').boundingBox();
          expect(controlsBox).not.toBeNull();
          expect(mapCanvasBox).not.toBeNull();
          expect(Math.abs(logoBox!.x - controlsBox!.x)).toBeLessThanOrEqual(1);
          expect(Math.abs(logoBox!.x - mapCanvasBox!.x)).toBeLessThanOrEqual(1);
          expect(Math.abs(controlsBox!.width - mapCanvasBox!.width)).toBeLessThanOrEqual(1);
        }
      });
    }
  });

  test.describe('7. Skrinshotlar (1440px, 768px, 390px / light va night mavzulari)', () => {
    for (const pageItem of PAGES) {
      for (const vp of VIEWPORTS) {
        for (const theme of THEMES) {
          test(`Skrinshot: ${pageItem.name} — ${vp.name} — ${theme}`, async ({ page }) => {
            await page.setViewportSize({ width: vp.width, height: vp.height });
            await page.goto(pageItem.path);
            await page.waitForLoadState('networkidle');

            // Set theme attribute
            await page.evaluate((t) => {
              document.documentElement.setAttribute('data-theme', t);
              localStorage.setItem('tolkien_theme', t);
            }, theme);

            await page.waitForTimeout(300); // allow theme transitions to settle

            const screenshotPath = join(
              screenshotsDir,
              `${pageItem.name}-${vp.name}-${theme}.png`
            );

            await page.screenshot({ path: screenshotPath, fullPage: false });
          });
        }
      }
    }
  });
});
