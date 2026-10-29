import { test, expect } from '@playwright/test';

test.describe('Qahramon Portretlari va Illyustratsiya Tizimi (E2E)', () => {
  test.describe('Katalog Sahifasi (/qahramonlar/)', () => {
    test('Barcha qahramon kartalarida ixcham 3:4 portretlar muvaffaqiyatli yuklanadi', async ({ page }) => {
      const response = await page.goto('/qahramonlar/');
      expect(response?.status()).toBe(200);

      const cards = page.locator('.character-card');
      const count = await cards.count();
      expect(count).toBeGreaterThanOrEqual(8);

      // Fëanor kartasini tekshirish
      const feanorCard = page.locator('.character-card[data-character-id="feanor"]');
      await expect(feanorCard).toBeVisible();

      const feanorImg = feanorCard.locator('.portrait-img');
      await expect(feanorImg).toBeVisible();

      // Alt matn mavjudligi
      const altText = await feanorImg.getAttribute('alt');
      expect(altText).toBeTruthy();
      expect(altText!.length).toBeGreaterThan(15);

      // Rasm fizik yuklanganligini tekshirish (naturalWidth > 0)
      const isLoaded = await feanorImg.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0);
      expect(isLoaded).toBe(true);
    });

    test('Dastlabki kartalarda eager, keyingilarida lazy loading qoʻllanilgan', async ({ page }) => {
      await page.goto('/qahramonlar/');

      const firstCardImg = page.locator('.character-card').first().locator('.portrait-img');
      const lastCardImg = page.locator('.character-card:has(.portrait-img)').last().locator('.portrait-img');

      await expect(firstCardImg).toHaveAttribute('loading', 'eager');
      await expect(lastCardImg).toHaveAttribute('loading', 'lazy');
    });
  });

  test.describe('Tafsilot Sahifasi (/qahramonlar/feanor/)', () => {
    test('Detail portreti, ilmiy izohi va CC litsenziyasi toʻliq koʻrinadi', async ({ page }) => {
      const response = await page.goto('/qahramonlar/feanor/');
      expect(response?.status()).toBe(200);

      const detailPortrait = page.locator('.character-portrait-figure.portrait-detail');
      await expect(detailPortrait).toBeVisible();

      // Yuqori sifatli rasm
      const img = detailPortrait.locator('.portrait-img');
      await expect(img).toBeVisible();
      await expect(img).toHaveAttribute('loading', 'eager');
      await expect(img).toHaveAttribute('fetchpriority', 'high');

      const isLoaded = await img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0);
      expect(isLoaded).toBe(true);

      // Caption va Provenance metadata
      const caption = detailPortrait.locator('.portrait-caption');
      await expect(caption).toBeVisible();

      const provTag = detailPortrait.locator('.prov-tag');
      await expect(provTag).toBeVisible();
      await expect(provTag).toContainText('Akademik matn illyustratsiyasi');

      const provLicense = detailPortrait.locator('.prov-license');
      await expect(provLicense).toBeVisible();
      await expect(provLicense).toContainText('CC BY-NC-SA 4.0');
    });

    test('Mobil ekranda portret maqola boshida joylashadi va tartib buzilmaydi', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/qahramonlar/feanor/');

      const mediaBox = page.locator('.sidebar-media-box');
      await expect(mediaBox).toBeVisible();

      // Portret va maqola sarlavhasi ikkalasi ham ko'rinadi
      const title = page.locator('.entity-title');
      await expect(title).toBeVisible();

      const img = mediaBox.locator('.portrait-img');
      await expect(img).toBeVisible();
    });
  });
});
