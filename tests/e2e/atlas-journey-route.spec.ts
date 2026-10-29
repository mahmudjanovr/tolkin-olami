import { test, expect } from '@playwright/test';

test('Bilbo sayohati: barcha 9 ta segment Rivendelldan keyin ham qirqilmasdan toʻliq chizilishi va 10 ta bosqich oʻrtasida saqlanishi kerak', async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/xaritalar/?sayr=bilbo&bosqich=1');
  await page.waitForSelector('#atlas-journey-panel.is-active');
  await page.waitForSelector('.leaflet-journey-pane path', { state: 'attached' });
  await page.waitForTimeout(400);

  // 1. Initial render inspection & CSS max-width reset verification
  const initialData = await page.evaluate(() => {
    const svgEl = document.querySelector('.leaflet-journey-pane svg') as SVGSVGElement | null;
    const svgRect = svgEl ? svgEl.getBoundingClientRect() : null;
    const computedStyle = svgEl ? window.getComputedStyle(svgEl) : null;

    const paths = Array.from(document.querySelectorAll('.leaflet-journey-pane path')).map(p => ({
      d: p.getAttribute('d'),
      className: p.getAttribute('class'),
    }));

    const markers = Array.from(document.querySelectorAll('.journey-stage-marker-container')).map(m => {
      const seq = m.querySelector('.journey-stage-marker')?.getAttribute('data-stage-seq');
      return { seq };
    });

    return {
      svgWidth: svgRect ? svgRect.width : 0,
      svgComputedMaxWidth: computedStyle ? computedStyle.maxWidth : '',
      paths,
      markers,
    };
  });

  // Verify custom pane SVG is not collapsed by Tailwind reset
  expect(initialData.svgWidth).toBeGreaterThan(1000);
  expect(initialData.svgComputedMaxWidth).toBe('none');
  expect(initialData.paths.length).toBe(9);
  expect(initialData.markers.length).toBe(10);

  // Every single path must be non-empty and non-'M0 0'
  for (let i = 0; i < initialData.paths.length; i++) {
    const d = initialData.paths[i]?.d;
    expect(d).not.toBeNull();
    expect(d).not.toBe('M0 0');
    expect(d!.length).toBeGreaterThan(10);
  }

  // 2. Direct deep link to Stage 8 (Erebor) and verify visual alignment with stage marker
  await page.goto('/xaritalar/?sayr=bilbo&bosqich=8');
  await page.waitForSelector('#atlas-journey-panel.is-active');
  await page.waitForTimeout(400);

  const stage8Alignment = await page.evaluate(() => {
    const map = document.querySelector('#atlas-map-container')?.getBoundingClientRect();
    const marker8 = document.querySelector('.journey-stage-marker.is-active')?.closest('.journey-stage-marker-container')?.getBoundingClientRect();
    const paths = Array.from(document.querySelectorAll('.leaflet-journey-pane path'));
    const p6 = paths[6]?.getBoundingClientRect(); // Lake-town to Erebor
    const p7 = paths[7]?.getBoundingClientRect(); // Erebor to Dale

    return {
      map: map ? { x: map.x, y: map.y, w: map.width, h: map.height } : null,
      marker8Center: marker8 ? { x: Math.round(marker8.x + 16), y: Math.round(marker8.y + 16) } : null,
      p6End: p6 ? { x: Math.round(p6.right), y: Math.round(p6.top) } : null,
      p7Start: p7 ? { x: Math.round(p7.left), y: Math.round(p7.top) } : null,
    };
  });

  expect(stage8Alignment.marker8Center).not.toBeNull();
  expect(stage8Alignment.p6End).not.toBeNull();
  expect(stage8Alignment.p7Start).not.toBeNull();

  // Path 6 ends right at Marker 8 (Erebor) within 3px tolerance
  expect(Math.abs(stage8Alignment.p6End!.x - stage8Alignment.marker8Center!.x)).toBeLessThanOrEqual(5);
  expect(Math.abs(stage8Alignment.p6End!.y - stage8Alignment.marker8Center!.y)).toBeLessThanOrEqual(5);

  // Path 7 starts right at Marker 8 (Erebor) within 3px tolerance
  expect(Math.abs(stage8Alignment.p7Start!.x - stage8Alignment.marker8Center!.x)).toBeLessThanOrEqual(5);
  expect(Math.abs(stage8Alignment.p7Start!.y - stage8Alignment.marker8Center!.y)).toBeLessThanOrEqual(5);

  // 3. Step through all 10 stages and ensure route remains completely intact
  for (let s = 1; s <= 10; s++) {
    const btn = page.locator(`#journey-stepper-list button[data-stage-num="${s}"]`);
    if (await btn.isVisible()) {
      await btn.click();
      await page.waitForTimeout(200);
    }
    
    const paths = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.leaflet-journey-pane path')).map(p => p.getAttribute('d'));
    });

    expect(paths.length).toBe(9);
    for (let pIdx = 0; pIdx < paths.length; pIdx++) {
      expect(paths[pIdx]).not.toBe('M0 0');
      expect(paths[pIdx]!.length).toBeGreaterThan(10);
    }
  }

  expect(consoleErrors).toEqual([]);
});
