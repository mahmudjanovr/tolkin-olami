import { test, expect } from '@playwright/test';

test.describe('Qora Nutq Doiraviy Yozuvi va Gondor Oq Daraxti Kinematografik Muhri', () => {
  test('Bosh sahifada eski xarita kartasi butunlay olib tashlangan boʻlishi kerak', async ({
    page,
  }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    // 1. Eski toponimik xarita kartochkasi elementlari mavjud emasligini tekshirish
    await expect(page.locator('.carto-frame')).toHaveCount(0);
    await expect(page.locator('.carto-label')).toHaveCount(0);
    await expect(page.locator('.carto-status')).toHaveCount(0);
    await expect(page.locator('.carto-title')).toHaveCount(0);
    await expect(page.locator('.carto-note')).toHaveCount(0);
    await expect(page.locator('.carto-link')).toHaveCount(0);
    await expect(page.locator('.carto-map-img')).toHaveCount(0);

    // Bosh sahifada "Toponimik Xarita Eksponati" matni koʻrinmasligi kerak
    const bodyText = await page.textContent('body');
    expect(bodyText).not.toContain('Toponimik Xarita Eksponati');
    expect(bodyText).not.toContain('Planar Koordinatalar');
  });

  test('Yangi doiraviy Qora Nutq va Oq Daraxt animatsiyasi toʻgʻri yuklanishi kerak', async ({
    page,
  }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    // 2. Standalone muhr komponenti mavjudligi
    const sigilContainer = page.locator('[data-sigil-animation]');
    await expect(sigilContainer).toBeVisible();

    const svgScene = page.locator('.sigil-cinematic-svg');
    await expect(svgScene).toBeVisible();
    await expect(svgScene).toHaveAttribute('role', 'img');

    // 3. Doiraviy yozuv va Oq Daraxt elementlari
    const circularInscription = page.locator('#circular-inscription-sigil');
    await expect(circularInscription).toBeAttached();

    const whiteTree = page.locator('#white-tree-symbol');
    await expect(whiteTree).toBeAttached();

    const dunedainStars = page.locator('.tree-seven-stars');
    await expect(dunedainStars).toBeAttached();

    // 4. Jismoniy tilla uzuk / metal band mavjud emasligini tasdiqlash
    await expect(page.locator('.ring-front-metal')).toHaveCount(0);
    await expect(page.locator('.ring-inner-lip')).toHaveCount(0);

    // 5. ASOSIY TALAB: Lotincha transliteratsiya butunlay yo'q bo'lishi va haqiqiy Tengwar ishlatilishi
    const inscriptionTextBloom = page.locator('.inscription-text-bloom');
    const inscriptionTextCore = page.locator('.inscription-text-core');
    await expect(inscriptionTextBloom).toBeAttached();
    await expect(inscriptionTextCore).toBeAttached();

    const bloomContent = await inscriptionTextBloom.textContent();
    const coreContent = await inscriptionTextCore.textContent();

    // Lotin harflaridagi "Ash nazg", "durbatulûk", "krimpatul" mutlaqo bo'lmasligi shart!
    expect(bloomContent).not.toContain('Ash nazg');
    expect(bloomContent).not.toContain('ASH NAZG');
    expect(bloomContent).not.toContain('durbatulûk');
    expect(bloomContent).not.toContain('krimpatul');
    expect(coreContent).not.toContain('Ash nazg');
    expect(coreContent).not.toContain('ASH NAZG');
    expect(coreContent).not.toContain('durbatulûk');
    expect(coreContent).not.toContain('krimpatul');

    // Haqiqiy Tengwar Annatar kodlangan gliflari mavjudligini tasdiqlash
    expect(coreContent).toContain('AE 5,Ex');
    expect(coreContent).toContain('26Nw1Dj^');
    expect(coreContent).toContain('z7qGp1Dj^-');

    // 6. Tengwar Annatar shriftining brauzerda haqiqatda yuklanganligini tekshirish
    const fontLoaded = await page.evaluate(async () => {
      await document.fonts.ready;
      return document.fonts.check('italic 20px "Tengwar Annatar"');
    });
    expect(fontLoaded).toBe(true);

    // 7. Geometrik doiraviylik va textPath bog'lanishini tekshirish
    const textPathElement = page.locator('.inscription-text-core textPath');
    await expect(textPathElement).toHaveAttribute('href', '#ring-verse-circle');
    await expect(textPathElement).toHaveAttribute('lengthAdjust', 'spacing');
    await expect(textPathElement).toHaveAttribute('textLength', '1360');

    const circlePath = page.locator('#ring-verse-circle');
    await expect(circlePath).toBeAttached();
    const pathD = await circlePath.getAttribute('d');
    expect(pathD).toContain('350,350');
    expect(pathD).toContain('218');
  });

  test('Ekranda koʻringanda is-active animatsiya klassi qoʻshilishi kerak', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const sigil = page.locator('[data-sigil-animation]');
    await expect(sigil).toHaveClass(/is-active/);
  });

  test('prefers-reduced-motion yoqilganda doimiy harakat toʻxtatilishi kerak', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const sigil = page.locator('[data-sigil-animation]');
    const classList = await sigil.getAttribute('class');
    expect(classList).not.toContain('is-active');
  });

  test('Desktop, Tablet va Mobile oʻlchamlarida vizual skrinshotlar', async ({ page }) => {
    // 1. Desktop Light
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const sigil = page.locator('[data-sigil-animation]');
    await expect(sigil).toBeVisible();
    await page.screenshot({ path: 'test-results/sigil-desktop-light.png' });

    // 2. Desktop Night
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'night');
      document.documentElement.setAttribute('data-applied-mode', 'night');
    });
    await expect(sigil).toBeVisible();
    await page.screenshot({ path: 'test-results/sigil-desktop-night.png' });

    // 3. Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await sigil.scrollIntoViewIfNeeded();
    await expect(sigil).toBeVisible();
    await sigil.screenshot({ path: 'test-results/sigil-mobile-element.png' });
    await page.screenshot({ path: 'test-results/sigil-mobile-night.png' });
  });

  test('Light va Night mavzularida kartochka palitrasi toʻgʻri yangilanishi kerak', async ({
    page,
  }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const wrapper = page.locator('.sigil-artwork-wrapper');
    await expect(wrapper).toBeVisible();

    // 1. Light rejimida tekshirish (Default / Paxta qog'ozi)
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.setAttribute('data-applied-mode', 'light');
    });

    const lightCardBg = await wrapper.evaluate((el) =>
      window.getComputedStyle(el).getPropertyValue('--sigil-card-bg').trim().toLowerCase()
    );
    expect(lightCardBg).toBe('#f8f5ee');

    const lightGoldFill = await wrapper.evaluate((el) =>
      window.getComputedStyle(el).getPropertyValue('--sigil-tengwar-core-fill').trim().toLowerCase()
    );
    expect(lightGoldFill).toBe('#84672d');

    // 2. Night rejimida tekshirish (Tungi arxiv / Chuqur zangori-yashil)
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'night');
      document.documentElement.setAttribute('data-applied-mode', 'night');
    });

    const nightCardBg = await wrapper.evaluate((el) =>
      window.getComputedStyle(el).getPropertyValue('--sigil-card-bg').trim().toLowerCase()
    );
    expect(nightCardBg).toBe('#101d1a');

    const nightGoldFill = await wrapper.evaluate((el) =>
      window.getComputedStyle(el).getPropertyValue('--sigil-tengwar-core-fill').trim().toLowerCase()
    );
    expect(nightGoldFill).toBe('#dfc183');

    // 3. Headerdagi ThemeSwitch tugmalari orqali darhol almashishini tekshirish
    const btnLight = page.locator('button[data-theme-value="light"]').first();
    const btnNight = page.locator('button[data-theme-value="night"]').first();
    const btnSystem = page.locator('button[data-theme-value="system"]').first();

    if (await btnNight.isVisible()) {
      await btnNight.click();
      const nightThemeAttr = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
      expect(nightThemeAttr).toBe('night');

      const bgAfterNightClick = await wrapper.evaluate((el) =>
        window.getComputedStyle(el).getPropertyValue('--sigil-card-bg').trim().toLowerCase()
      );
      expect(bgAfterNightClick).toBe('#101d1a');

      await btnLight.click();
      const lightThemeAttr = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
      expect(lightThemeAttr).toBe('light');

      const bgAfterLightClick = await wrapper.evaluate((el) =>
        window.getComputedStyle(el).getPropertyValue('--sigil-card-bg').trim().toLowerCase()
      );
      expect(bgAfterLightClick).toBe('#f8f5ee');

      await btnSystem.click();
      const systemTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
      expect(systemTheme).toBe('system');
    }
  });

  test('Haqiqiy interaktiv atlas (/xaritalar/) daxlsiz va toʻliq ishlashi kerak', async ({
    page,
  }) => {
    const response = await page.goto('/xaritalar/');
    expect(response?.status()).toBe(200);
    await expect(page.locator('#atlas-map-container')).toBeVisible();
  });
});
