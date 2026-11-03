import { test, expect } from '@playwright/test';

test.describe('Qora Nutq Doiraviy Yozuvi va Sauron Koʻzi Kinematografik Muhri', () => {
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

  test('Yangi doiraviy Qora Nutq va Sauron Koʻzi animatsiyasi toʻgʻri yuklanishi kerak', async ({
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

    // 3. Doiraviy yozuv va Sauron Koʻzi elementlari
    const circularInscription = page.locator('#circular-inscription-sigil');
    await expect(circularInscription).toBeAttached();

    const sauronEye = page.locator('#sauron-eye-symbol');
    await expect(sauronEye).toBeAttached();

    const eyeIris = page.locator('#eye-iris-group');
    await expect(eyeIris).toBeAttached();

    const eyePupil = page.locator('#eye-pupil-group');
    await expect(eyePupil).toBeAttached();

    const almondPupil = page.locator('.pupil-abyssal-almond');
    await expect(almondPupil).toBeAttached();

    const fireSpill = page.locator('.pupil-fire-spill');
    await expect(fireSpill).toBeAttached();

    const rimLights = page.locator('.pupil-rim-light');
    await expect(rimLights).toHaveCount(2);

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

  test('Barcha talab qilingan breakpointlarda responsivlik va gorizontal toshish yoʻqligi', async ({
    page,
  }) => {
    const viewports = [
      { name: 'Desktop 1440px', width: 1440, height: 900 },
      { name: 'Laptop 1280px', width: 1280, height: 800 },
      { name: 'Tablet 768px', width: 768, height: 1024 },
      { name: 'Mobile 390px', width: 390, height: 844 },
      { name: 'Small Mobile 360px', width: 360, height: 740 },
    ];

    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');
      await page.waitForLoadState('domcontentloaded');

      const sigil = page.locator('#black-speech-sauron-eye');
      await expect(sigil).toBeVisible();

      // 1. Gorizontal overflow yo'qligini tekshirish
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      expect(hasHorizontalScroll, `${vp.name} da gorizontal overflow bo'lmasligi kerak`).toBe(false);

      // 2. Ko'z proporsiyasi va ko'rinishi
      const sauronEye = page.locator('#sauron-eye-symbol');
      await expect(sauronEye).toBeAttached();

      // 3. Sarlavha va emblema bir-birini qoplab ketmasligini tekshirish
      const headingBox = await page.locator('.hero-heading').boundingBox();
      const sigilBox = await page.locator('.hero-sigil-showcase').boundingBox();
      expect(headingBox).not.toBeNull();
      expect(sigilBox).not.toBeNull();

      if (vp.width >= 1024) {
        // Desktop / Laptop: 2-ustunli yonma-yon tartib
        expect(sigilBox!.x).toBeGreaterThanOrEqual(headingBox!.x + headingBox!.width * 0.5);
      } else {
        // Tablet / Mobile: vertikal stack tartib
        expect(sigilBox!.y).toBeGreaterThanOrEqual(headingBox!.y + headingBox!.height);
      }
    }
  });

  test('Desktop (1440px) va Mobile (390px) oʻlchamlarida Light va Night skrinshotlari', async ({
    page,
  }) => {
    // 1. Desktop 1440px Light
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.setAttribute('data-applied-mode', 'light');
    });
    const sigil = page.locator('#black-speech-sauron-eye');
    await expect(sigil).toBeVisible();
    await page.screenshot({ path: 'test-results/sigil-1440px-light.png' });
    await page.screenshot({ path: 'test-results/sigil-desktop-light.png' });

    // 2. Desktop 1440px Night
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'night');
      document.documentElement.setAttribute('data-applied-mode', 'night');
    });
    await expect(sigil).toBeVisible();
    await page.screenshot({ path: 'test-results/sigil-1440px-night.png' });
    await page.screenshot({ path: 'test-results/sigil-desktop-night.png' });
    const sauronEye = page.locator('#sauron-eye-symbol');
    await sauronEye.screenshot({ path: 'test-results/sigil-eye-zoomed-crop.png' });

    // 3. Mobile 390px Light
    await page.setViewportSize({ width: 390, height: 844 });
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.setAttribute('data-applied-mode', 'light');
    });
    await sigil.scrollIntoViewIfNeeded();
    await expect(sigil).toBeVisible();
    await page.screenshot({ path: 'test-results/sigil-390px-light.png' });

    // 4. Mobile 390px Night
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'night');
      document.documentElement.setAttribute('data-applied-mode', 'night');
    });
    await expect(sigil).toBeVisible();
    await page.screenshot({ path: 'test-results/sigil-390px-night.png' });
    await sigil.screenshot({ path: 'test-results/sigil-mobile-element.png' });
    await page.screenshot({ path: 'test-results/sigil-mobile-night.png' });
  });

  test('10 soniyalik video yozuvi (Screen Recording)', async ({ browser }) => {
    const context = await browser.newContext({
      recordVideo: {
        dir: 'test-results/videos/',
        size: { width: 1280, height: 720 },
      },
    });
    const videoPage = await context.newPage();
    await videoPage.setViewportSize({ width: 1280, height: 720 });
    await videoPage.goto('/');
    await videoPage.waitForLoadState('networkidle');
    await videoPage.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'night');
      document.documentElement.setAttribute('data-applied-mode', 'night');
    });

    // 10.5 soniya davomida yonayotgan ko'z, nurlar va tutun animatsiyasini yozib olish
    await videoPage.waitForTimeout(10500);
    const video = videoPage.video();
    await context.close();
    if (video) {
      await video.saveAs('test-results/videos/sauron-eye-10s.webm');
    }
  });

  test('Light va Night mavzularida palitra toʻgʻri yangilanishi kerak', async ({
    page,
  }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const wrapper = page.locator('.sigil-showcase-container');
    await expect(wrapper).toBeVisible();

    // 1. Light rejimida tekshirish (Default / Paxta qog'ozi)
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.setAttribute('data-applied-mode', 'light');
    });

    const lightGoldFill = await wrapper.evaluate((el) =>
      window.getComputedStyle(el).getPropertyValue('--sigil-tengwar-core-fill').trim().toLowerCase()
    );
    expect(lightGoldFill).toBe('#9e7422');

    // 2. Night rejimida tekshirish (Tungi arxiv / Chuqur zangori-yashil)
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'night');
      document.documentElement.setAttribute('data-applied-mode', 'night');
    });

    const nightGoldFill = await wrapper.evaluate((el) =>
      window.getComputedStyle(el).getPropertyValue('--sigil-tengwar-core-fill').trim().toLowerCase()
    );
    expect(nightGoldFill).toBe('#ffd98a');

    // 3. Headerdagi ThemeSwitch tugmalari orqali darhol almashishini tekshirish
    const btnLight = page.locator('button[data-theme-value="light"]').first();
    const btnNight = page.locator('button[data-theme-value="night"]').first();
    const btnSystem = page.locator('button[data-theme-value="system"]').first();

    if (await btnNight.isVisible()) {
      await btnNight.click();
      const nightThemeAttr = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
      expect(nightThemeAttr).toBe('night');

      const goldAfterNightClick = await wrapper.evaluate((el) =>
        window.getComputedStyle(el).getPropertyValue('--sigil-tengwar-core-fill').trim().toLowerCase()
      );
      expect(goldAfterNightClick).toBe('#ffd98a');

      await btnLight.click();
      const lightThemeAttr = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
      expect(lightThemeAttr).toBe('light');

      const goldAfterLightClick = await wrapper.evaluate((el) =>
        window.getComputedStyle(el).getPropertyValue('--sigil-tengwar-core-fill').trim().toLowerCase()
      );
      expect(goldAfterLightClick).toBe('#9e7422');

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
