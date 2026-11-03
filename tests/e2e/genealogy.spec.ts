import { test, expect } from '@playwright/test';

test.describe('Tolkien Olami — Nasabnomalar (Genealogy Section Desktop & Mobile E2E)', () => {
  test('1. Sulola sarlavhasi, SVG shajara daraxti, portretli tugunlar va Oʻng profil paneli toʻgʻri yuklanadi', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/nasabnomalar/');

    const atlasRoot = page.locator('#genealogy-atlas-root');
    await expect(atlasRoot).toBeVisible();

    // A. Dynasty header tekshiruvi
    await expect(page.locator('#dynasty-header-title')).toContainText('Finwë Xonadoni');
    await expect(page.locator('#dynasty-era-label')).toContainText('Daraxtlar davri');
    await expect(page.locator('#dynasty-relevant-people .relevant-person-chip').first()).toBeVisible();

    // B. SVG daraxti, portret tugunlari va turli rishta turlari
    const svg = page.locator('#genealogy-tree-svg');
    await expect(svg).toBeVisible();

    const feanorNode = svg.locator('#node-feanor');
    await expect(feanorNode).toBeVisible();
    await expect(feanorNode).toHaveClass(/is-selected/);
    await expect(feanorNode.locator('image')).toHaveAttribute('href', /feanor-thumb\.webp/);

    // Barcha rishta turlari vizual farqlangan holda mavjudligi
    await expect(svg.locator('.svg-rel-group.rel-parent-child').first()).toBeVisible();
    await expect(svg.locator('.svg-rel-group.rel-spouse').first()).toBeVisible();
    await expect(svg.locator('.svg-rel-group.rel-sibling').first()).toBeVisible();
    await expect(svg.locator('.svg-rel-group.rel-lineage-bridge').first()).toBeVisible();
    await expect(svg.locator('.svg-rel-group.is-uncertain').first()).toBeVisible();
    await expect(svg.locator('.svg-link-path.link-uncertain')).toHaveCount(1);

    // D. O'ng profil panelida Fëanor ma'lumotlari, voqealar va qahramon sahifasi havolasi
    const profilePanel = page.locator('#genealogy-profile-panel');
    await expect(profilePanel).toBeVisible();
    await expect(page.locator('#profile-person-name')).toHaveText('Fëanor');
    await expect(page.locator('#profile-dates')).toContainText('1169');
    await expect(page.locator('#profile-character-link')).toHaveAttribute(
      'href',
      '/qahramonlar/feanor/'
    );
    await expect(page.locator('#profile-events-list a').first()).toHaveAttribute('href', /\/tarix\//);
  });

  test('2. Sulolalar almashinuvi (Durin, Rohan) va alohida /nasabnomalar/[slug]/ marshruti ishlaydi', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/nasabnomalar/');

    // Durin avlodlariga o'tish
    const durinTab = page.locator('button.dynasty-tab-btn[data-dynasty-id="durin-avlodlari"]');
    await durinTab.click();
    await expect(durinTab).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('#dynasty-header-title')).toContainText('Durin Avlodlari');
    await expect(page.locator('#profile-person-name')).toContainText('Thorin');
    await expect(page.locator('#node-gimli')).toBeVisible();

    // Alohida dinamik marshrutni tekshirish
    await page.goto('/nasabnomalar/elros-va-gondor-shohlari/');
    await expect(page.locator('h1.dynasty-route-title')).toContainText('Elros va Gondor');
    await expect(page.locator('#profile-person-name')).toContainText('Aragorn');
    await expect(page.locator('#node-aragorn')).toHaveClass(/is-selected/);
  });

  test('3. Kanvas boshqaruvlari: Zoom In/Out, Fit, Reset hamda Shoxlarni yigʻish/yoyish (Expand/Collapse)', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/nasabnomalar/');

    const zoomLabel = page.locator('#zoom-level-label');
    const beforeZoom = await zoomLabel.textContent();

    await page.locator('#btn-zoom-in').click();
    const afterZoomIn = await zoomLabel.textContent();
    expect(afterZoomIn).not.toBe(beforeZoom);

    await page.locator('#btn-reset-view').click();
    await expect(zoomLabel).toHaveText('100%');

    await page.locator('#btn-fit-screen').click();
    await expect(zoomLabel).not.toHaveText('0%');

    // Fëanor shoxini yig'ish (Maedhros, Maglor va Celebrimbor yashirinadi)
    await expect(page.locator('#node-maedhros')).toBeVisible();
    const feanorToggle = page.locator('[data-collapse-id="feanor"]');
    await feanorToggle.click();

    await expect(page.locator('#node-maedhros')).toHaveCount(0);
    await expect(page.locator('#node-celebrimbor')).toHaveCount(0);
    await expect(feanorToggle.locator('text')).toHaveText('+3');

    // Qayta yoyish
    await feanorToggle.click();
    await expect(page.locator('#node-maedhros')).toBeVisible();
    await expect(page.locator('#node-celebrimbor')).toBeVisible();
  });

  test('4. Chap panel: Qidiruv, Avlod navigatsiyasi, Filtrlar va Tarmoqlar koʻrinishi', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/nasabnomalar/');

    // Kanon maqomi filtri: Munozarali (Gil-galad mos keladi)
    await page.locator('button[data-canon-filter="uncertain"]').click();
    const filterSummary = page.locator('#filter-active-summary');
    await expect(filterSummary).toBeVisible();
    await expect(filterSummary).toContainText('filtrga mos keldi');
    await expect(page.locator('#node-feanor')).toHaveClass(/is-dimmed/);
    await expect(page.locator('#node-gil-galad')).not.toHaveClass(/is-dimmed/);

    // Filtrlarni tozalash
    await page.locator('#btn-reset-filters').click();
    await expect(filterSummary).toBeHidden();
    await expect(page.locator('#node-feanor')).not.toHaveClass(/is-dimmed/);

    // Tarmoq ko'rinishini o'chirish (Fëanor xonadoni)
    const firstBranchCheckbox = page.locator('.branch-visibility-checkbox').first();
    await firstBranchCheckbox.uncheck();
    await expect(page.locator('#node-feanor')).toHaveCount(0);
    await firstBranchCheckbox.check();
    await expect(page.locator('#node-feanor')).toBeVisible();

    // Qidiruv orqali boshqa suloladagi Thorin'ga sakrash
    const searchInput = page.locator('#genealogy-search-input');
    await searchInput.fill('Thorin');
    await searchInput.press('Enter');
    await expect(
      page.locator('button.dynasty-tab-btn[data-dynasty-id="durin-avlodlari"]')
    ).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('#profile-person-name')).toContainText('Thorin');
  });

  test('5. Manbalar boʻlimi (Sources), Kanon maqomi va Qarindoshlik chiplari navigatsiyasi', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/nasabnomalar/');

    const sourcesSection = page.locator('#genealogy-sources-section');
    await expect(sourcesSection).toBeVisible();
    await expect(sourcesSection.locator('#sources-primary-list a').first()).toHaveAttribute(
      'href',
      /\/kitoblar\//
    );

    // Munozarali ro'yxatdan Gil-galadni bosish -> profil va matnshunoslik izohi ochiladi
    const gilGaladAuditBtn = sourcesSection.locator(
      '#sources-disputed-list .audit-person-btn[data-person-id="gil-galad"]'
    );
    await expect(gilGaladAuditBtn).toBeVisible();
    await gilGaladAuditBtn.click();

    await expect(page.locator('#profile-person-name')).toContainText('Gil-galad');
    await expect(page.locator('#profile-canon-badge')).toHaveText('Munozarali');
    await expect(page.locator('#profile-uncertainty-box')).toBeVisible();
    await expect(page.locator('#profile-uncertainty-text')).toContainText('Shibboleth');

    // Profil panelidagi Ota-onasi chipidan Fingonga o'tish
    const fingonChip = page.locator('#profile-kin-groups .kin-chip-btn[data-person-id="fingon"]');
    await fingonChip.click();
    await expect(page.locator('#profile-person-name')).toHaveText('Fingon');
  });

  test('6. Mobil tajriba (390x844): gorizontal overflow yoʻq, chap va oʻng accessible tortmalar ishlaydi', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/nasabnomalar/');
    await page.waitForLoadState('domcontentloaded');

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);

    // Chap filtr tortmasini ochish va Escape bilan yopish
    const openLeftBtn = page.locator('#btn-open-left-drawer');
    await expect(openLeftBtn).toBeVisible();
    await openLeftBtn.click();
    await expect(openLeftBtn).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('#genealogy-left-sidebar')).toHaveClass(/is-drawer-open/);

    await page.keyboard.press('Escape');
    await expect(openLeftBtn).toHaveAttribute('aria-expanded', 'false');

    // SVG tugunini bosganda mobil profil varag'i (sheet) ochilishi
    await page.locator('#node-finwe').click({ force: true });
    await expect(page.locator('#genealogy-profile-panel')).toHaveClass(/is-drawer-open/);
    await expect(page.locator('#profile-person-name')).toHaveText('Finwë');

    await page.locator('#btn-close-right-drawer').click();
    await expect(page.locator('#genealogy-profile-panel')).not.toHaveClass(/is-drawer-open/);
  });

  test('7. Klaviatura navigatsiyasi va Roʻyxat (Accessible Tree) rejimi ishlaydi', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/nasabnomalar/');

    const feanorNode = page.locator('#node-feanor');
    await feanorNode.focus();
    await expect(feanorNode).toBeFocused();

    // ArrowUp -> Finwë ga o'tish
    await page.keyboard.press('ArrowUp');
    await expect(page.locator('#profile-person-name')).toHaveText('Finwë');

    // Ro'yxat rejimiga o'tish va Daraxtda ko'rish orqali qaytish
    const listBtn = page.locator('#btn-mode-list');
    await listBtn.click();
    await expect(page.locator('#genealogy-accessible-views')).toBeVisible();

    await page.locator('#genealogy-accessible-views .btn-view-in-tree').first().click();
    await expect(page.locator('#genealogy-views-container')).toBeVisible();
  });
});
