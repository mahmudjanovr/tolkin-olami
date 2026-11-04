import { test, expect } from '@playwright/test';

test.describe('Real Browser Production Readiness & Zero Console Error Audit', () => {
  const routesToVerify = [
    { name: 'Homepage (Bosh sahifa)', url: '/' },
    { name: 'Character detail with real portrait (Fëanor)', url: '/qahramonlar/feanor/' },
    { name: 'Character detail with monogram fallback (Turgon)', url: '/qahramonlar/turgon/' },
    { name: 'Book detail (The Hobbit)', url: '/kitoblar/the-hobbit/' },
    { name: 'Search page (/qidiruv/)', url: '/qidiruv/' },
    { name: 'Historical Atlas & Maps (/xaritalar/)', url: '/xaritalar/' },
    { name: '404 Error Page direct (/404.html)', url: '/404.html' },
  ];

  for (const { name, url } of routesToVerify) {
    test(`${name} must load with 0 console errors and 0 failed requests`, async ({ page }) => {
      const consoleErrors: string[] = [];
      const pageErrors: string[] = [];
      const failedRequests: string[] = [];

      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });

      page.on('pageerror', (err) => {
        pageErrors.push(err.message);
      });

      page.on('requestfailed', (req) => {
        failedRequests.push(`${req.method()} ${req.url()}: ${req.failure()?.errorText || 'failed'}`);
      });

      const response = await page.goto(url);
      expect(response?.status()).toBeLessThan(400);

      await page.waitForLoadState('networkidle');

      if (consoleErrors.length > 0) {
        console.error(`[Console errors on ${url}]:`, consoleErrors);
      }
      if (pageErrors.length > 0) {
        console.error(`[Page runtime errors on ${url}]:`, pageErrors);
      }
      if (failedRequests.length > 0) {
        console.error(`[Failed requests on ${url}]:`, failedRequests);
      }

      expect(consoleErrors).toEqual([]);
      expect(pageErrors).toEqual([]);
      expect(failedRequests).toEqual([]);
    });
  }

  test('Pagefind search modal execution must succeed without CSP or runtime exceptions', async ({ page }) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    page.on('pageerror', (err) => {
      pageErrors.push(err.message);
    });

    await page.goto('/');
    const searchTrigger = page.locator('button[data-open-search]').first();
    await searchTrigger.click();

    const searchInput = page.locator('#modal-search-input');
    await expect(searchInput).toBeVisible();

    await searchInput.fill('Silmaril');
    // Wait for Pagefind search debounce and results
    await page.waitForTimeout(600);

    const searchModal = page.locator('#search-modal');
    await expect(searchModal).toBeVisible();

    expect(consoleErrors).toEqual([]);
    expect(pageErrors).toEqual([]);
  });

  test('Atlas and Leaflet map must initialize and interact without errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/xaritalar/');
    const mapEl = page.locator('#atlas-map-container');
    await expect(mapEl).toBeVisible();

    // Verify leaflet pane exists once initialized
    const leafletPane = page.locator('.leaflet-pane');
    await expect(leafletPane.first()).toBeAttached();

    expect(consoleErrors).toEqual([]);
  });

  test('Mobile navigation drawer opens, navigates, and closes cleanly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const mobileToggle = page.locator('#mobile-nav-toggle');
    await expect(mobileToggle).toBeVisible();
    await mobileToggle.click();

    const mobileDialog = page.locator('#mobile-nav-dialog');
    await expect(mobileDialog).toBeVisible();

    const charactersLink = mobileDialog.locator('a[href="/qahramonlar/"]').first();
    await expect(charactersLink).toBeVisible();

    const closeBtn = page.locator('#mobile-nav-close');
    await closeBtn.click();
    await expect(mobileDialog).toBeHidden();
  });

  test('Unknown URL route correctly renders 404 page', async ({ page }) => {
    const response = await page.goto('/bu-sahifa-haqiqatda-mavjud-emas/');
    expect(response?.status()).toBe(404);

    const title = page.locator('h1');
    await expect(title).toContainText('Yoʻqolgan Qoʻlyozma');
  });
});
