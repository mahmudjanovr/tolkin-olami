import { test, expect } from '@playwright/test';

test.describe('Boshlangʻich Tizim va Smoke Sinovi', () => {
  test('Bosh sahifa muvaffaqiyatli yuklanishi va toʻgʻri sarlavhaga ega boʻlishi kerak', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);

    await expect(page).toHaveTitle(/Tolkien Olami/);
    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible();
  });

  test('404 xato sahifasi mavjud boʻlmagan URL chaqirilganda toʻgʻri yuklanishi va foydali havolalarga ega boʻlishi kerak', async ({ page }) => {
    const response = await page.goto('/mavjud-bolmagan-sahifa-404/');
    expect(response?.status()).toBe(404);

    await expect(page).toHaveTitle(/404/);
    const heading = page.locator('h1');
    await expect(heading).toContainText('Yoʻqolgan Qoʻlyozma');

    const quickLinks = page.locator('.quick-link-card');
    expect(await quickLinks.count()).toBe(6);
  });
});
