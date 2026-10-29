import { test, expect } from '@playwright/test';

test.describe('Kanonik Nasabnomalar va Shajaralar (Genealogy E2E Tests)', () => {
  test('Nasabnoma bosh sahifasi va SVG shajara daraxti toʻgʻri render boʻlishi kerak', async ({ page }) => {
    await page.goto('/nasabnomalar/');
    const atlasRoot = page.locator('#genealogy-atlas-root');
    await expect(atlasRoot).toBeVisible();

    // Standart faol sulola (Finwe xonadoni) SVG kanvasi
    const activePanel = page.locator('#dynasty-panel-finwe-xonadoni');
    await expect(activePanel).toBeVisible();

    const svg = activePanel.locator('svg.genealogy-svg');
    await expect(svg).toBeVisible();

    // Kamida 5 ta shaxs tuguni (person-node) mavjudligini tekshirish
    const personNodes = activePanel.locator('.person-node');
    const count = await personNodes.count();
    expect(count).toBeGreaterThanOrEqual(5);
  });

  test('Sulolalar tablari orqali boshqa xonadonga (Durin avlodlari) oʻtish ishlashi kerak', async ({ page }) => {
    await page.goto('/nasabnomalar/');

    const durinTab = page.locator('button[data-dynasty-id="durin-avlodlari"]');
    await expect(durinTab).toBeVisible();

    await durinTab.click();
    await expect(durinTab).toHaveAttribute('aria-selected', 'true');

    const durinPanel = page.locator('#dynasty-panel-durin-avlodlari');
    await expect(durinPanel).toBeVisible();
    await expect(durinPanel.locator('.person-node').first()).toBeVisible();
  });

  test('Shajara tugunini bosganda shaxs inspektori paneli ochilishi kerak', async ({ page }) => {
    await page.goto('/nasabnomalar/');

    const activePanel = page.locator('#dynasty-panel-finwe-xonadoni');
    const firstNode = activePanel.locator('.person-node').first();
    await expect(firstNode).toBeVisible();

    await firstNode.click();

    const inspector = page.locator('#genealogy-inspector');
    await expect(inspector).toBeVisible();
  });

  test('Alohida sulola sahifasi (/nasabnomalar/finwe-xonadoni/) toʻgʻri yuklanishi kerak', async ({ page }) => {
    await page.goto('/nasabnomalar/finwe-xonadoni/');
    await expect(page).toHaveTitle(/Finwë/);
    await expect(page.locator('.dynasty-page-content')).toBeVisible();
    await expect(page.locator('#genealogy-atlas-root')).toBeVisible();
  });
});
