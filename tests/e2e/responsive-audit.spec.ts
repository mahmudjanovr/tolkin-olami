import { test, expect } from '@playwright/test';

const ROUTES = [
  '/',
  '/qahramonlar/',
  '/qahramonlar/feanor/',
  '/kitoblar/',
  '/kitoblar/the-hobbit/',
  '/xaritalar/',
  '/tarix/',
  '/nasabnomalar/',
  '/maqolalar/',
  '/olam/',
  '/tolkien/',
  '/xalqlar-va-tillar/',
  '/qidiruv/',
];

const VIEWPORTS = [
  { name: '320px', width: 320, height: 568 },
  { name: '375px', width: 375, height: 667 },
  { name: '768px', width: 768, height: 1024 },
  { name: '1024px', width: 1024, height: 768 },
  { name: '1440px', width: 1440, height: 900 },
];

test.describe('Responsive Layout & No Horizontal Overflow Audit', () => {
  for (const vp of VIEWPORTS) {
    for (const route of ROUTES) {
      test(`${route} displays without horizontal overflow at ${vp.name}`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto(route);
        await page.waitForLoadState('domcontentloaded');

        const { scrollWidth, clientWidth, overflows } = await page.evaluate(() => {
          const cw = document.documentElement.clientWidth;
          const sw = document.documentElement.scrollWidth;
          const offending: string[] = [];
          document.querySelectorAll('*').forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.right > cw + 1.5) {
              offending.push(`${el.tagName}.${(el.className?.toString?.() || '').slice(0, 40)}: right=${Math.round(rect.right)} cw=${cw}`);
            }
          });
          return { scrollWidth: sw, clientWidth: cw, overflows: offending.slice(0, 5) };
        });

        if (scrollWidth > clientWidth + 1.5) {
          console.warn(`[Overflow at ${vp.name} on ${route}] scrollWidth=${scrollWidth} clientWidth=${clientWidth}:`, overflows);
        }

        expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1.5);
      });
    }
  }
});
