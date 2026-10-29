import { test, expect } from '@playwright/test';

test.describe('Interaktiv Tarixiy Atlas (Atlas E2E Tests)', () => {
  test('Oynani qayta oʻlchaganda (resize) xarita konteyneri boʻshab (0x0) qolmasligi kerak', async ({ page }) => {
    await page.goto('/xaritalar/');
    const mapContainer = page.locator('#atlas-map-container');
    await expect(mapContainer).toBeVisible();

    // 1. Desktop oʻlchami (1440x900)
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(300);

    const desktopBounds = await mapContainer.boundingBox();
    expect(desktopBounds).not.toBeNull();
    expect(desktopBounds!.width).toBeGreaterThan(0);
    expect(desktopBounds!.height).toBeGreaterThan(0);

    // 2. Kichik ekranga oʻzgartirish (768x1024)
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(300); // debounce vaqti

    const mobileBounds = await mapContainer.boundingBox();
    expect(mobileBounds).not.toBeNull();
    expect(mobileBounds!.width).toBeGreaterThan(0);
    expect(mobileBounds!.height).toBeGreaterThan(0);

    // 3. Leaflet qatlamlari initsializatsiya qilinganligini tekshirish
    const leafletPane = page.locator('.leaflet-pane');
    await expect(leafletPane.first()).toBeAttached();
  });

  test('Desktopda xarita maydoni va maʼlumotlar paneli bir-birini toʻsib qoʻymasligi kerak', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/xaritalar/?joy=gondolin');

    const mapBox = page.locator('#atlas-map-container');
    const inspector = page.locator('#atlas-inspector');

    await expect(mapBox).toBeVisible();
    await expect(inspector).toBeVisible();

    const mapBounds = await mapBox.boundingBox();
    const inspectorBounds = await inspector.boundingBox();

    expect(mapBounds).not.toBeNull();
    expect(inspectorBounds).not.toBeNull();
    expect(mapBounds!.width).toBeGreaterThan(300);
    expect(inspectorBounds!.width).toBeGreaterThan(200);
  });

  test('URL parametri orqali toponim tanlanganda inspektor panelida toʻgʻri maʼlumot chiqishi kerak', async ({ page }) => {
    await page.goto('/xaritalar/?joy=gondolin');
    const inspectorName = page.locator('#inspector-name');
    await expect(inspectorName).toBeVisible();
    await expect(inspectorName).toContainText('Gondolin');

    // Boshqa toponimga oʻtish
    await page.goto('/xaritalar/?joy=barad-dur');
    await expect(page.locator('#inspector-name')).toContainText('Barad-dûr');
  });

  test('Hududlarni almashtirish boshqaruv tugmalari toʻgʻri ishlashi kerak', async ({ page }) => {
    await page.goto('/xaritalar/');
    const beleriandBtn = page.locator('button[data-region-id="beleriand"]');
    await expect(beleriandBtn).toBeVisible();

    await beleriandBtn.click();
    await expect(beleriandBtn).toHaveAttribute('aria-checked', 'true');
  });

  test('Bilbo Baggins sayri tugmasi bosilganda sayohat paneli va marshrut faollashishi kerak', async ({ page }) => {
    await page.goto('/xaritalar/');
    const journeyBtn = page.locator('#btn-journey-toggle');
    await expect(journeyBtn).toBeVisible();

    // Sayohat rejimini yoqish
    await journeyBtn.click();
    await expect(journeyBtn).toHaveAttribute('aria-pressed', 'true');

    const journeyPanel = page.locator('#atlas-journey-panel');
    await expect(journeyPanel).toBeVisible();
    await expect(page.locator('#journey-stage-counter')).toContainText('1 / 10-bosqich');
    await expect(page.locator('#journey-stage-location')).toContainText('Hobbiton');

    // URL parametrida sayr=bilbo paydo bo'lishi kerak
    expect(page.url()).toContain('sayr=bilbo');

    // Sayohat bosqich markerlari (10 ta bosqich) chizilgan bo'lishi kerak
    const stageMarkers = page.locator('.journey-stage-marker');
    await expect(stageMarkers.first()).toBeVisible();
    expect(await stageMarkers.count()).toBe(10);

    // 1-bosqich tanlangan holatda xarita Shir va Hobbitonga markazlashgan bo'lishi kerak
    const activeMarker = page.locator('.journey-stage-marker.is-active');
    await expect(activeMarker).toBeVisible();
    await expect(activeMarker).toHaveAttribute('data-stage-seq', '1');

    // Maxsus journeyPane qatlamida 9 ta marshrut segmenti chizilgan bo'lishi kerak
    const journeyPolylines = page.locator('.leaflet-journey-pane path');
    await expect(journeyPolylines.first()).toBeVisible();
    expect(await journeyPolylines.count()).toBe(9);

    // Barcha 9 ta marshrut chizig'i (M0 0) bo'lmasligi, Rivendelldan keyingi qismlar ham to'liq chizilishi kerak
    const polylineCount = await journeyPolylines.count();
    expect(polylineCount).toBe(9);
    for (let i = 0; i < polylineCount; i++) {
      const d = await journeyPolylines.nth(i).getAttribute('d');
      expect(d).not.toBeNull();
      expect(d).not.toBe('M0 0');
      expect(d!.length).toBeGreaterThan(10);
    }

    // Qaytish segmenti (journey-segment-return) mavjudligini va yashil uslubga ega ekanligini tekshirish
    const returnPolyline = page.locator('.leaflet-journey-pane path.journey-segment-return');
    await expect(returnPolyline.first()).toBeAttached();
    const returnD = await returnPolyline.first().getAttribute('d');
    expect(returnD).not.toBeNull();
    expect(returnD).not.toBe('M0 0');
    expect(returnD!.length).toBeGreaterThan(10);

    // Keyingi bosqichga o'tish tugmasi
    const nextBtn = page.locator('#journey-next-btn');
    await nextBtn.click();
    await expect(page.locator('#journey-stage-counter')).toContainText('2 / 10-bosqich');
    expect(page.url()).toContain('bosqich=2');

    // 3-bosqich stepper tugmasini bosish (Rivendell)
    const step3Btn = page.locator('#journey-stepper-list button[data-stage-num="3"]');
    await step3Btn.click();
    await expect(page.locator('#journey-stage-counter')).toContainText('3 / 10-bosqich');
    await expect(page.locator('#journey-stage-location')).toContainText('Rivendell');
    expect(page.url()).toContain('bosqich=3');

    // 8-bosqich stepper tugmasini bosish (Erebor)
    const step8Btn = page.locator('#journey-stepper-list button[data-stage-num="8"]');
    await step8Btn.click();
    await expect(page.locator('#journey-stage-counter')).toContainText('8 / 10-bosqich');
    await expect(page.locator('#journey-stage-location')).toContainText('Erebor');
    expect(page.url()).toContain('bosqich=8');

    // 8-bosqich markerining faollashganini tekshirish
    const marker8 = page.locator('.journey-stage-marker[data-stage-seq="8"]');
    await expect(marker8).toHaveClass(/is-active/);

    // 9-bosqich stepper tugmasini bosish (Deyl va Besh Armiya Jangi)
    const step9Btn = page.locator('#journey-stepper-list button[data-stage-num="9"]');
    await step9Btn.click();
    await expect(page.locator('#journey-stage-counter')).toContainText('9 / 10-bosqich');
    await expect(page.locator('#journey-stage-location')).toContainText('Deyl');
    expect(page.url()).toContain('bosqich=9');

    // 10-bosqich stepper tugmasini bosish (Shirga Qaytish)
    const step10Btn = page.locator('#journey-stepper-list button[data-stage-num="10"]');
    await step10Btn.click();
    await expect(page.locator('#journey-stage-counter')).toContainText('10 / 10-bosqich');
    await expect(page.locator('#journey-stage-location')).toContainText('Hobbiton');
    await expect(page.locator('#journey-stage-direction')).toContainText('Qaytish yoʻli');
    expect(page.url()).toContain('bosqich=10');

    // 10-bosqich qaytish markeri ekanligini tasdiqlash
    const marker10 = page.locator('.journey-stage-marker[data-stage-seq="10"]');
    await expect(marker10).toHaveClass(/is-return/);
    await expect(marker10).toHaveClass(/is-active/);

    // Marker bosish orqali boshqa bosqichga o'tish (1-bosqich Hobbiton)
    const marker1 = page.locator('.journey-stage-marker[data-stage-seq="1"]');
    await marker1.click();
    await expect(page.locator('#journey-stage-counter')).toContainText('1 / 10-bosqich');
    await expect(page.locator('#journey-stage-location')).toContainText('Hobbiton');
    expect(page.url()).toContain('bosqich=1');

    // Sayohat panelini yopish
    const closeBtn = page.locator('#journey-close-btn');
    await closeBtn.click();
    await expect(journeyPanel).not.toBeVisible();
    await expect(journeyBtn).toHaveAttribute('aria-pressed', 'false');
    expect(page.url()).not.toContain('sayr=bilbo');
  });

  test('Sayohat rejimi yoqilgan paytda boshqa hududga (Beleriand) oʻtilsa sayr toʻliq tozalanishi kerak', async ({ page }) => {
    await page.goto('/xaritalar/?sayr=bilbo&bosqich=1');
    const journeyPanel = page.locator('#atlas-journey-panel');
    const journeyBtn = page.locator('#btn-journey-toggle');
    await expect(journeyPanel).toBeVisible();

    // Beleriand xaritasiga o'tish
    const beleriandBtn = page.locator('button[data-region-id="beleriand"]');
    await beleriandBtn.click();

    // Sayohat paneli va rejim yopilgan bo'lishi kerak
    await expect(journeyPanel).not.toBeVisible();
    await expect(journeyBtn).toHaveAttribute('aria-pressed', 'false');
    expect(page.url()).not.toContain('sayr=bilbo');

    // Beleriand xaritasida sayohat polylinelari qolmasligi kerak
    const journeyPaths = page.locator('.leaflet-journey-pane path');
    expect(await journeyPaths.count()).toBe(0);
  });

  test('Sayohat deep-link orqali toʻgʻridan-toʻgʻri muayyan bosqichga ochilishi kerak', async ({ page }) => {
    await page.goto('/xaritalar/?sayr=bilbo&bosqich=3');

    const journeyPanel = page.locator('#atlas-journey-panel');
    await expect(journeyPanel).toBeVisible();
    await expect(page.locator('#journey-stage-counter')).toContainText('3 / 10-bosqich');
    await expect(page.locator('#journey-stage-location')).toContainText('Rivendell');
    await expect(page.locator('#journey-stage-source-ref')).toContainText('The Hobbit');

    // Faol stepper elementi 3 bo'lishi kerak
    const activeStep = page.locator('#journey-stepper-list button.is-current');
    await expect(activeStep).toHaveAttribute('data-stage-num', '3');
  });

  test('Shir koʻrinishi tugmasi xaritani Shirga qaratishi va Shir markerlari inspektorni toʻgʻri ochishi kerak', async ({ page }) => {
    await page.goto('/xaritalar/');
    const shireBtn = page.locator('#btn-focus-shire');
    await expect(shireBtn).toBeVisible();

    // Shir tugmasini bosish
    await shireBtn.click();
    await page.waitForTimeout(300);

    // URL parametrlari yangilanishi kerak
    expect(page.url()).toContain('x=495');
    expect(page.url()).toContain('y=1400');
    expect(page.url()).toContain('z=1');

    // Hobbiton markeri ko'rinishi va chertilganda inspektor ochilishi kerak
    const hobbitonMarker = page.locator('.scholarly-marker[data-place-id="hobbiton"]');
    await expect(hobbitonMarker).toBeVisible();
    await hobbitonMarker.click();

    const inspector = page.locator('#atlas-inspector');
    await expect(inspector).toBeVisible();
    await expect(page.locator('#inspector-name')).toContainText('Hobbiton');
    await expect(page.locator('#inspector-coords')).toContainText('X: 490, Y: 1408');

    // Bywater (Suvbo'yi) toponimiga o'tish (deep-link orqali)
    await page.goto('/xaritalar/?hudud=orta-yer&joy=bywater');
    await expect(page.locator('#inspector-name')).toContainText('Bywater');
    await expect(page.locator('#inspector-coords')).toContainText('X: 512, Y: 1406');

    // Michel Delving toponimiga o'tish
    await page.goto('/xaritalar/?hudud=orta-yer&joy=michel-delving');
    await expect(page.locator('#inspector-name')).toContainText('Michel Delving');
    await expect(page.locator('#inspector-coords')).toContainText('X: 425, Y: 1402');

    // Tuckborough toponimiga o'tish
    await page.goto('/xaritalar/?hudud=orta-yer&joy=tuckborough');
    await expect(page.locator('#inspector-name')).toContainText('Tuckborough');

    // Toshko'prik (Brandywine Bridge) toponimiga o'tish
    await page.goto('/xaritalar/?hudud=orta-yer&joy=brandywine-bridge');
    await expect(page.locator('#inspector-name')).toContainText('Brandywine Bridge');

    // Buckland toponimiga o'tish
    await page.goto('/xaritalar/?hudud=orta-yer&joy=buckland');
    await expect(page.locator('#inspector-name')).toContainText('Buckland');
  });

  test('8. Masshtabga bogʻliq yorliqlar iyerarxiyasi (Zoom LoD) va Shir yorliqlari ustma-ust tushmasligi', async ({ page }) => {
    // 1. Uzoq masshtab (z = -1): Hobbiton ko'rinadi, o'rta va kichik maskanlar (Michel Delving, Bywater) yashirin bo'ladi
    await page.goto('/xaritalar/?hudud=orta-yer&x=495&y=1400&z=-1');
    await expect(page.locator('#atlas-map-container.leaflet-container')).toBeVisible();

    const hobbitonMarker = page.locator('.scholarly-marker[data-place-id="hobbiton"]');
    const michelMarker = page.locator('.scholarly-marker[data-place-id="michel-delving"]');
    const bywaterMarker = page.locator('.scholarly-marker[data-place-id="bywater"]');

    await expect(hobbitonMarker).toBeVisible();
    await expect(michelMarker).toBeHidden();
    await expect(bywaterMarker).toBeHidden();

    // 2. O'rta masshtab (z = 0): Michel Delving va daryo/yo'l yorliqlari ochiladi, Bywater hali yashirin
    await page.locator('#btn-zoom-in').click();
    await expect(michelMarker).toBeVisible();
    await expect(bywaterMarker).toBeHidden();
    await expect(page.locator('.atlas-geo-label[data-geo-id="geo-great-east-road"]')).toBeVisible();

    // 3. Yaqin masshtab (z = 1, Shir fokusi): barcha 6 ta Shir maskani ko'rinadi va yorliqlari ustma-ust tushmaydi
    await page.locator('#btn-focus-shire').click();
    await expect(bywaterMarker).toBeVisible();
    await expect(hobbitonMarker).not.toHaveClass(/label-hover-only/);

    const overlapData = await page.evaluate(() => {
      const shireIds = ['hobbiton', 'bywater', 'michel-delving', 'tuckborough', 'brandywine-bridge', 'buckland'];
      const boxes: Array<{ id: string; x1: number; y1: number; x2: number; y2: number }> = [];

      for (const id of shireIds) {
        const markerEl = document.querySelector(`.scholarly-marker[data-place-id="${id}"]`);
        if (!markerEl || markerEl.classList.contains('label-hover-only')) continue;
        const badge = markerEl.querySelector('.marker-title-badge');
        if (!badge) continue;
        const rect = badge.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          boxes.push({ id, x1: rect.left, y1: rect.top, x2: rect.right, y2: rect.bottom });
        }
      }

      let overlapCount = 0;
      for (let i = 0; i < boxes.length; i++) {
        for (let j = i + 1; j < boxes.length; j++) {
          const a = boxes[i]!;
          const b = boxes[j]!;
          const overlaps = !(a.x2 <= b.x1 || a.x1 >= b.x2 || a.y2 <= b.y1 || a.y1 >= b.y2);
          if (overlaps) overlapCount++;
        }
      }

      return { visibleCount: boxes.length, overlapCount, ids: boxes.map((b) => b.id) };
    });

    expect(overlapData.visibleCount).toBeGreaterThanOrEqual(4);
    expect(overlapData.ids).toContain('hobbiton');
    expect(overlapData.overlapCount).toBe(0);
  });

  test('9. Takroriy zoom/pan va hudud almashtirishda dublikatlar paydo boʻlmasligi hamda xotira tozalanishi', async ({ page }) => {
    await page.goto('/xaritalar/');
    await expect(page.locator('#atlas-map-container.leaflet-container')).toBeVisible();

    const initialMarkerCount = await page.locator('.scholarly-marker').count();
    expect(initialMarkerCount).toBe(28);

    // Bir necha marta zoom in / zoom out va hudud almashtirish
    await page.locator('#btn-zoom-in').click();
    await page.locator('#btn-zoom-out').click();
    await page.locator('.region-btn[data-region-id="beleriand"]').click();
    await expect(page.locator('.scholarly-marker[data-place-id="gondolin"]')).toBeVisible();

    await page.locator('.region-btn[data-region-id="orta-yer"]').click();
    await expect(page.locator('.scholarly-marker[data-place-id="minas-tirith"]')).toBeVisible();

    // Markerlar soni ko'payib ketmaganligini va har bir place-id faqat 1 marta mavjudligini tekshirish
    const afterSwitchMarkerCount = await page.locator('.scholarly-marker').count();
    expect(afterSwitchMarkerCount).toBe(initialMarkerCount);
    await expect(page.locator('.scholarly-marker[data-place-id="hobbiton"]')).toHaveCount(1);

    // Diagnostika va tinglovchilarni tozalash funksiyasini tekshirish
    const perfStats = await page.evaluate(() => {
      const stats = (window as unknown as { __atlasPerfStats?: Record<string, unknown> }).__atlasPerfStats;
      const container = document.getElementById('atlas-map-container') as unknown as {
        _atlasCleanup?: () => void;
      };
      const beforeCleanup = stats ? { ...stats } : null;
      container?._atlasCleanup?.();
      const afterCleanup = stats ? { ...stats } : null;
      return { beforeCleanup, afterCleanup };
    });

    expect(perfStats.beforeCleanup).not.toBeNull();
    expect(Number(perfStats.beforeCleanup?.placementRunCount)).toBeGreaterThan(0);
    expect(Number(perfStats.beforeCleanup?.lastPlacementDurationMs)).toBeLessThan(50);
    expect(perfStats.afterCleanup?.activeListenersCleanedUp).toBe(true);
  });
});
