import { test, expect } from '@playwright/test';

test.describe('Boshlangʻich Tizim va Smoke Sinovi', () => {
  test('Bosh sahifa muvaffaqiyatli yuklanishi va toʻgʻri sarlavhaga ega boʻlishi kerak', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);

    await expect(page).toHaveTitle(/Tolkien Olami/);
    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible();
  });
});
