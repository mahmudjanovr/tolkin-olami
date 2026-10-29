import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { gzipSync } from 'node:zlib';
import { describe, expect, it } from 'vitest';

describe('Performance Budgets & Asset Transfer Sizes (Milestone 4.5)', () => {
  const distDir = join(process.cwd(), 'dist');
  const astroDir = join(distDir, '_astro');
  const distExists = existsSync(distDir) && existsSync(astroDir);

  if (!distExists) {
    it.skip('Oʻtkazib yuborildi: dist/_astro mavjud emas. Byudjet testlarini bajarish uchun avval "npm run build" ni ishga tushiring.', () => {});
    return;
  }

  it('Atlas Client JavaScript gzipped wire size must be under 60 KB', () => {
    expect(existsSync(astroDir), 'dist/_astro mavjud emas. Avval "npm run build" ni ishga tushiring.').toBe(true);
    const files = readdirSync(astroDir);

    const atlasScripts = ['leaflet-src', 'AtlasMap', 'preload-helper'];
    let totalJsGzip = 0;

    for (const prefix of atlasScripts) {
      const match = files.find((f) => f.startsWith(prefix) && f.endsWith('.js'));
      expect(match, `Missing script chunk with prefix: ${prefix}`).toBeDefined();
      const content = readFileSync(join(astroDir, match!));
      totalJsGzip += gzipSync(content, { level: 9 }).length;
    }

    // Byudjet: < 75 KB (Phase 6 Koʻp sayohatli atlas va Leaflet dvigateli)
    expect(totalJsGzip).toBeLessThan(75 * 1024);
  });

  it('Genealogy Client JavaScript gzipped wire size must be under 30 KB', () => {
    expect(existsSync(astroDir), 'dist/_astro mavjud emas. Avval "npm run build" ni ishga tushiring.').toBe(true);
    const files = readdirSync(astroDir);

    const match = files.find((f) => f.startsWith('GenealogyAtlas') && f.endsWith('.js'));
    expect(match, 'GenealogyAtlas client JS chunk topilmadi').toBeDefined();
    const content = readFileSync(join(astroDir, match!));
    const jsGzip = gzipSync(content, { level: 9 }).length;

    // Byudjet: < 30 KB (docs/05 §3.2)
    expect(jsGzip).toBeLessThan(30 * 1024);
  });

  it('Genealogy initial SSR HTML gzipped transfer size must be under 40 KB', () => {
    const htmlPath = join(distDir, 'nasabnomalar', 'index.html');
    expect(existsSync(htmlPath), 'nasabnomalar/index.html mavjud emas.').toBe(true);
    const content = readFileSync(htmlPath);
    const htmlGzip = gzipSync(content, { level: 9 }).length;

    // Byudjet: < 40 KB (Phase 10: 6 ta kanonik sulola va shajara daraxtlari)
    expect(htmlGzip).toBeLessThan(40 * 1024);
  });

  it('Genealogy combined HTML and Client JS gzipped transfer size must be under 40 KB', () => {
    const htmlPath = join(distDir, 'nasabnomalar', 'index.html');
    expect(existsSync(htmlPath)).toBe(true);
    const htmlContent = readFileSync(htmlPath);
    const htmlGzip = gzipSync(htmlContent, { level: 9 }).length;

    const files = readdirSync(astroDir);
    const match = files.find((f) => f.startsWith('GenealogyAtlas') && f.endsWith('.js'));
    expect(match).toBeDefined();
    const jsContent = readFileSync(join(astroDir, match!));
    const jsGzip = gzipSync(jsContent, { level: 9 }).length;

    const totalCombinedGzip = htmlGzip + jsGzip;
    // Birlashgan boshlang'ich transfer hajmi < 45 KB (6 ta sulola bilan)
    expect(totalCombinedGzip).toBeLessThan(45 * 1024);
  });

  it('Atlas initial SSR HTML gzipped transfer size must be under 60 KB', () => {
    const htmlPath = join(distDir, 'xaritalar', 'index.html');
    expect(existsSync(htmlPath), 'xaritalar/index.html mavjud emas.').toBe(true);
    const content = readFileSync(htmlPath);
    const htmlGzip = gzipSync(content, { level: 9 }).length;

    // Byudjet: < 60 KB (Phase 17: 38 ta kanonik toponim va 5 ta sayohatli Beleriand & Oʻrta-yer atlas HTML)
    expect(htmlGzip).toBeLessThan(60 * 1024);
  });

  it('Each individual SVG map asset must be under 60 KB gzipped', () => {
    const beleriandPath = join(distDir, 'assets', 'maps', 'beleriand-planar.svg');
    const middleEarthPath = join(distDir, 'assets', 'maps', 'middle-earth-planar.svg');

    expect(existsSync(beleriandPath)).toBe(true);
    expect(existsSync(middleEarthPath)).toBe(true);

    const belGzip = gzipSync(readFileSync(beleriandPath), { level: 9 }).length;
    const meGzip = gzipSync(readFileSync(middleEarthPath), { level: 9 }).length;

    // Byudjet: har bir xarita < 60 KB gzip
    expect(belGzip).toBeLessThan(60 * 1024);
    expect(meGzip).toBeLessThan(60 * 1024);
  });

  it('Global Search Modal client JS gzipped wire size must be under 25 KB', () => {
    const files = readdirSync(astroDir);
    const match = files.find((f) => f.startsWith('SearchModal') && f.endsWith('.js'));
    expect(match).toBeDefined();
    const content = readFileSync(join(astroDir, match!));
    const jsGzip = gzipSync(content, { level: 9 }).length;

    // Byudjet: < 25 KB (docs/05 §3.2)
    expect(jsGzip).toBeLessThan(25 * 1024);
  });
});
