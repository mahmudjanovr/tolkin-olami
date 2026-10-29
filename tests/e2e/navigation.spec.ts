import { test, expect } from '@playwright/test';

const CANONICAL_ROUTES = [
  '/',
  '/qahramonlar/',
  '/maqolalar/',
  '/xaritalar/',
  '/nasabnomalar/',
  '/tarix/',
  '/kitoblar/',
  '/olam/',
  '/xalqlar-va-tillar/',
  '/tolkien/',
  '/qidiruv/',
];

test.describe('11 Asosiy Axborot Arxitekturasi Marshrutlari va Navigatsiya', () => {
  for (const route of CANONICAL_ROUTES) {
    test(`Marshrut ${route} 200 maqomi bilan yuklanishi va konsol xatolarisiz ishlashi kerak`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });

      const response = await page.goto(route);
      expect(response?.status()).toBe(200);

      await expect(page).toHaveTitle(/Tolkien Olami/);
      const mainOrContainer = page.locator('main, .container, body').first();
      await expect(mainOrContainer).toBeVisible();

      // Hech qanday jiddiy skript xatosi bo'lmasligi kerak
      expect(consoleErrors).toHaveLength(0);
    });
  }

  test('Non ushoqlari (breadcrumbs) orqali orqaga navigatsiya toʻgʻri ishlashi kerak', async ({ page }) => {
    await page.goto('/qahramonlar/beren/');
    const breadcrumbLinks = page.locator('.breadcrumb-link, .breadcrumbs a');
    await expect(breadcrumbLinks.first()).toBeVisible();

    // Qahramonlar bo'limiga qaytish
    await breadcrumbLinks.last().click();
    await expect(page).toHaveURL(/\/qahramonlar\/?/);
  });

  test('Qahramonlar sahifasidagi oʻzaro bogʻliqlik (Related Entities) havolasi ishlashi kerak', async ({ page }) => {
    await page.goto('/qahramonlar/beren/');
    const relatedLink = page.locator('a.related-pill-link[href*="aragorn"]').first();
    await expect(relatedLink).toBeVisible();

    await relatedLink.click();
    await expect(page).toHaveURL(/\/qahramonlar\/aragorn\/?/);
    await expect(page.locator('h1, h2').first()).toContainText('Aragorn');
  });
});

test.describe('Desktop Tolkien Mega Menu va Klaviatura Interaktivligi', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('3 ta mantiqiy guruh sarlavhalari koʻrinadi va mega panel ochiladi/yopiladi', async ({ page }) => {
    await page.goto('/');

    const triggerLegendarium = page.locator('#nav-trigger-legendarium');
    const triggerWorld = page.locator('#nav-trigger-world');
    const triggerHistory = page.locator('#nav-trigger-history');

    await expect(triggerLegendarium).toBeVisible();
    await expect(triggerWorld).toBeVisible();
    await expect(triggerHistory).toBeVisible();

    // The Legendarium guruhini ochish
    await triggerLegendarium.click();
    await expect(triggerLegendarium).toHaveAttribute('aria-expanded', 'true');

    const panelLegendarium = page.locator('#mega-panel-legendarium');
    await expect(panelLegendarium).toBeVisible();

    // 3 ta kanonik maqsadli havola mavjudligi
    await expect(panelLegendarium.locator('a[href="/"]')).toBeVisible();
    await expect(panelLegendarium.locator('a[href="/kitoblar/"]')).toBeVisible();
    await expect(panelLegendarium.locator('a[href="/qahramonlar/"]')).toBeVisible();

    // Tashqariga (ochiq panel ostidagi boʻsh maydonga) bosilganda menyu yopilishi kerak
    await page.mouse.click(50, 600);
    await expect(triggerLegendarium).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('#mega-menu-container')).toBeHidden();
  });

  test('Escape tugmasi ochiq mega menyuni yopadi va fokusni triggerga qaytaradi', async ({ page }) => {
    await page.goto('/');

    const triggerWorld = page.locator('#nav-trigger-world');
    await triggerWorld.click();
    await expect(triggerWorld).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('#mega-panel-world')).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(triggerWorld).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('#mega-menu-container')).toBeHidden();
    await expect(triggerWorld).toBeFocused();
  });

  test('Mega menyudan havola tanlanganda sahifaga oʻtadi va menyu yopiladi', async ({ page }) => {
    await page.goto('/');

    await page.locator('#nav-trigger-legendarium').click();
    const bookLink = page.locator('#mega-panel-legendarium a[href="/kitoblar/"]');
    await expect(bookLink).toBeVisible();

    await bookLink.click();
    await expect(page).toHaveURL(/\/kitoblar\/?/);
    await expect(page.locator('#mega-menu-container')).toBeHidden();
  });

  test('Ichki detail marshrutlarda ham faol boʻlim va joriy sahifa indikatori toʻgʻri koʻrinadi', async ({ page }) => {
    // 1. Qahramon batafsil sahifasi (/qahramonlar/feanor/)
    await page.goto('/qahramonlar/feanor/');
    const legendariumTrigger = page.locator('#nav-trigger-legendarium');
    await expect(legendariumTrigger).toHaveClass(/is-active-section/);

    await legendariumTrigger.click();
    const qahramonlarCard = page.locator('#mega-panel-legendarium a[href="/qahramonlar/"]');
    await expect(qahramonlarCard).toHaveAttribute('aria-current', 'page');
    await expect(qahramonlarCard).toHaveClass(/is-active/);

    // 2. Xaritalar sahifasi (/xaritalar/)
    await page.goto('/xaritalar/');
    const worldTrigger = page.locator('#nav-trigger-world');
    await expect(worldTrigger).toHaveClass(/is-active-section/);

    await worldTrigger.click();
    const xaritalarCard = page.locator('#mega-panel-world a[href="/xaritalar/"]');
    await expect(xaritalarCard).toHaveAttribute('aria-current', 'page');

    // 3. Maqolalar sahifasi (/maqolalar/)
    await page.goto('/maqolalar/');
    const historyTrigger = page.locator('#nav-trigger-history');
    await expect(historyTrigger).toHaveClass(/is-active-section/);

    await historyTrigger.click();
    const maqolalarCard = page.locator('#mega-panel-history a[href="/maqolalar/"]');
    await expect(maqolalarCard).toHaveAttribute('aria-current', 'page');
  });
});

test.describe('Mobil Toʻliq Ekranli Navigatsiya (Full-Screen Mobile Navigation)', () => {
  test.use({ viewport: { width: 390, height: 844 } }); // Mobile iPhone o'lchami

  test('Mobil menyu tugmasi dialog oynasini toʻliq ochadi, scrollni bloklaydi va Escape orqali yopiladi', async ({ page }) => {
    await page.goto('/');

    const toggleBtn = page.locator('#mobile-nav-toggle');
    await expect(toggleBtn).toBeVisible();
    await expect(page.locator('.desktop-nav')).toBeHidden();

    const mobileDialog = page.locator('#mobile-nav-dialog');
    await expect(mobileDialog).toBeHidden();

    // Menyuni ochish
    await toggleBtn.click();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');
    await expect(mobileDialog).toBeVisible();

    // Body scroll bloklanishi
    const bodyOverflow = await page.evaluate(() => document.body.style.overflow);
    expect(bodyOverflow).toBe('hidden');

    // Close tugmasiga fokus o'tishi
    const closeBtn = page.locator('#mobile-nav-close');
    await expect(closeBtn).toBeFocused();

    // 3 ta mantiqiy guruh mavjudligi
    await expect(mobileDialog.locator('.mobile-group-section')).toHaveCount(3);
    await expect(mobileDialog.locator('text=The Legendarium').first()).toBeVisible();
    await expect(mobileDialog.locator('text=The World').first()).toBeVisible();
    await expect(mobileDialog.locator('text=History & Scholarship').first()).toBeVisible();

    // Escape orqali yopish
    await page.keyboard.press('Escape');
    await expect(mobileDialog).toBeHidden();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');

    const restoredOverflow = await page.evaluate(() => document.body.style.overflow);
    expect(restoredOverflow).toBe('');
    await expect(toggleBtn).toBeFocused();
  });

  test('Mobilda mavzu tanlash va qidiruv tugmasi toʻliq ishlaydi', async ({ page }) => {
    await page.goto('/');

    await page.locator('#mobile-nav-toggle').click();
    const mobileDialog = page.locator('#mobile-nav-dialog');
    await expect(mobileDialog).toBeVisible();

    // Tungi rejimni tanlash
    const nightBtn = page.locator('#mobile-theme-night');
    await expect(nightBtn).toBeVisible();
    await nightBtn.click();

    const appliedTheme = await page.evaluate(() =>
      document.documentElement.getAttribute('data-applied-mode')
    );
    expect(appliedTheme).toBe('night');

    // Qidiruv tugmasini bosish
    const searchBtn = mobileDialog.locator('[data-open-search]');
    await searchBtn.click();

    // Mobil menyu yopilishi va qidiruv modali ochilishi kerak
    await expect(mobileDialog).toBeHidden();
    const searchModal = page.locator('#search-modal');
    await expect(searchModal).toHaveAttribute('open', '');
  });

  test('Mobilda marshrut bosilganda menyu yopiladi va manzilga oʻtiladi', async ({ page }) => {
    await page.goto('/');

    await page.locator('#mobile-nav-toggle').click();
    const xaritalarLink = page.locator('#mobile-nav-dialog a[href="/xaritalar/"]');
    await expect(xaritalarLink).toBeVisible();

    await xaritalarLink.click();
    await expect(page).toHaveURL(/\/xaritalar\/?/);
    await expect(page.locator('#mobile-nav-dialog')).toBeHidden();

    const bodyOverflow = await page.evaluate(() => document.body.style.overflow);
    expect(bodyOverflow).toBe('');
  });
});
