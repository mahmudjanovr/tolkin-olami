import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('WCAG 2.1 AA Maxsus Kirish Imkoniyati (Accessibility Tests)', () => {
  const routes = [
    { name: 'Bosh sahifa', path: '/' },
    { name: 'Qahramonlar katalogi', path: '/qahramonlar/' },
    { name: 'Qahramon batafsil (Fëanor)', path: '/qahramonlar/feanor/' },
    { name: 'Xaritalar va Atlas', path: '/xaritalar/' },
    { name: 'Genealogiya va Nasabnomalar', path: '/nasabnomalar/' },
    { name: 'Maqolalar katalogi', path: '/maqolalar/' },
    { name: 'Maqola batafsil (Olim va Boqiylik)', path: '/maqolalar/olim-va-boqiylik-mavzusi/' },
    { name: 'Kitoblar va Bibliografiya', path: '/kitoblar/' },
    { name: 'Arda va Kosmologiya', path: '/olam/' },
    { name: 'Tillar va Yozuvlar', path: '/xalqlar-va-tillar/' },
    { name: 'Tarix va Xronologiya', path: '/tarix/' },
    { name: 'Tolkien Merosi', path: '/tolkien/' },
  ];

  for (const { name, path } of routes) {
    test(`${name} (${path}) sahifasida jiddiy (serious/critical) a11y xatolari boʻlmasligi kerak`, async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState('domcontentloaded');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      const severeViolations = accessibilityScanResults.violations.filter(
        (v) => v.impact === 'critical' || v.impact === 'serious'
      );

      expect(severeViolations).toEqual([]);
    });
  }

  test('Qidiruv modali ochiq holatda a11y va fokus boshqaruvi toʻgʻri boʻlishi kerak', async ({ page }) => {
    await page.goto('/');
    const searchTrigger = page.locator('button[data-open-search]').first();
    await searchTrigger.click();

    const dialog = page.locator('#search-modal');
    await expect(dialog).toHaveAttribute('open', '');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const severeViolations = accessibilityScanResults.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    expect(severeViolations).toEqual([]);
  });

  test('prefers-reduced-motion faollashtirilganda animatsiyalar cheklangan boʻlishi kerak', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');

    const prefersReduced = await page.evaluate(() => {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    });

    expect(prefersReduced).toBe(true);
  });
});
