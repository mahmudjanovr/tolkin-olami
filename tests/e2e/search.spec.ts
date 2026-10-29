import { test, expect } from '@playwright/test';

test.describe('Global Statik Qidiruv (Search E2E Tests)', () => {
  test('Qidiruv tugmasi yoki klaviatura orqali modal oyna ochilishi va yopilishi kerak', async ({ page }) => {
    await page.goto('/');

    const dialog = page.locator('#search-modal');
    await expect(dialog).not.toHaveAttribute('open');

    // Tugma orqali ochish
    const searchTrigger = page.locator('button[data-open-search]').first();
    await searchTrigger.click();

    await expect(dialog).toHaveAttribute('open', '');
    const searchInput = page.locator('#modal-search-input');
    await expect(searchInput).toBeFocused();

    // Escape orqali yopish
    await page.keyboard.press('Escape');
    await expect(dialog).not.toHaveAttribute('open');
  });

  test('Ctrl+K / Cmd+K klaviatura kombinatsiyasi orqali modal ochilishi kerak', async ({ page }) => {
    await page.goto('/');
    const dialog = page.locator('#search-modal');

    await page.keyboard.press('Control+k');
    await expect(dialog).toHaveAttribute('open', '');

    const searchInput = page.locator('#modal-search-input');
    await expect(searchInput).toBeFocused();

    await page.keyboard.press('Escape');
    await expect(dialog).not.toHaveAttribute('open');
  });

  test('Pagefind orqali qidiruv natijalari chiqishi va diakritik normalizatsiya ishlashi kerak', async ({ page }) => {
    await page.goto('/');
    await page.locator('button[data-open-search]').first().click();

    const searchInput = page.locator('#modal-search-input');
    await searchInput.fill('feanor');

    // Natijalar ro'yxatini kutish
    const resultsList = page.locator('#search-results-list');
    await expect(resultsList.locator('.search-result-item').first()).toBeVisible({ timeout: 5000 });

    const firstResult = resultsList.locator('.search-result-item').first();
    await expect(firstResult).toContainText(/Fëanor|Feanor/i);

    // Diakritik bilan qidirish (Fëanor)
    await searchInput.fill('Fëanor');
    await expect(resultsList.locator('.search-result-item').first()).toBeVisible({ timeout: 5000 });
    await expect(resultsList.locator('.search-result-item').first()).toContainText(/Fëanor|Feanor/i);
  });
});
