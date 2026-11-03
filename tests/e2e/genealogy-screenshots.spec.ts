import { test, expect } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

test.describe('Genealogy Screenshots Capture (1440px and 390px in Light & Night)', () => {
  const screenshotDir = join(process.cwd(), 'test-results', 'screenshots');
  mkdirSync(screenshotDir, { recursive: true });

  test('Capture desktop and mobile genealogy screenshots', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/nasabnomalar/');
    await page.waitForLoadState('networkidle');

    const btnLight = page.locator('button[data-theme-value="light"]').first();
    const btnNight = page.locator('button[data-theme-value="night"]').first();

    await btnLight.click();
    await page.waitForTimeout(200);
    await expect(page.locator('#dynasty-panel-finwe-xonadoni')).toBeVisible();
    await page.screenshot({ path: join(screenshotDir, 'finwe-1440px-light.png'), fullPage: false });

    await btnNight.click();
    await page.waitForTimeout(200);
    await page.screenshot({ path: join(screenshotDir, 'finwe-1440px-night.png'), fullPage: false });

    await btnLight.click();
    await page.waitForTimeout(200);
    const durinTab = page.locator('button.dynasty-tab-btn[data-dynasty-id="durin-avlodlari"]');
    await durinTab.click();
    await page.waitForTimeout(200);
    await expect(page.locator('#dynasty-panel-durin-avlodlari')).toBeVisible();
    await page.screenshot({ path: join(screenshotDir, 'durin-1440px-light.png'), fullPage: false });

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/nasabnomalar/');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: join(screenshotDir, 'finwe-390px-light.png'), fullPage: false });
  });
});
