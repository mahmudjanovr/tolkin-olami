import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';

describe('Pre-Release Quality & Engineering Audit Checks (prerelease-audit.spec.ts)', () => {
  const rootDir = process.cwd();

  describe('1. 404 Error Page & Routing Assurance', () => {
    it('src/pages/404.astro mavjud boʻlishi va asosiy boʻlimlar havolalarini saqlashi kerak', () => {
      const page404Path = join(rootDir, 'src/pages/404.astro');
      expect(existsSync(page404Path), 'src/pages/404.astro topilmadi').toBe(true);

      const content = readFileSync(page404Path, 'utf-8');
      expect(content).toContain('404');
      expect(content).toContain('/qahramonlar/');
      expect(content).toContain('/xaritalar/');
      expect(content).toContain('/kitoblar/');
      expect(content).toContain('/tarix/');
      expect(content).toContain('data-open-search');
    });

    it('nginx.conf 404 xato sahifasini toʻgʻri belgilagan boʻlishi kerak', () => {
      const nginxPath = join(rootDir, 'nginx.conf');
      const content = readFileSync(nginxPath, 'utf-8');
      expect(content).toContain('error_page 404 /404.html;');
    });
  });

  describe('2. Xavfsizlik Sarlavhalari (Security Headers) Sinxronligi', () => {
    const nginxPath = join(rootDir, 'nginx.conf');
    const headersPath = join(rootDir, 'public/_headers');

    it('nginx.conf va public/_headers da toʻliq CSP va HSTS mavjud boʻlishi kerak', () => {
      const nginxContent = readFileSync(nginxPath, 'utf-8');
      const headersContent = readFileSync(headersPath, 'utf-8');

      // CSP
      expect(nginxContent).toContain('Content-Security-Policy');
      expect(headersContent).toContain('Content-Security-Policy');
      expect(nginxContent).toContain("default-src 'self'");
      expect(headersContent).toContain("default-src 'self'");

      // HSTS
      expect(nginxContent).toContain('Strict-Transport-Security');
      expect(headersContent).toContain('Strict-Transport-Security');
      expect(nginxContent).toContain('max-age=31536000');
      expect(headersContent).toContain('max-age=31536000');

      // Clickjacking & Sniffing
      expect(nginxContent).toContain('X-Frame-Options "DENY"');
      expect(headersContent).toContain('X-Frame-Options: DENY');
      expect(nginxContent).toContain('X-Content-Type-Options "nosniff"');
      expect(headersContent).toContain('X-Content-Type-Options: nosniff');

      // HSTS preload xavfsizligi (subdomenlar tasdiqlanmaguncha preload qo'yilmaydi)
      expect(nginxContent).not.toContain('preload');
      expect(headersContent).not.toContain('preload');
      expect(nginxContent).not.toContain('includeSubDomains');
      expect(headersContent).not.toContain('includeSubDomains');

      // CSP da Pagefind WASM uchun wasm-unsafe-eval mavjudligi
      expect(nginxContent).toContain("'wasm-unsafe-eval'");
      expect(headersContent).toContain("'wasm-unsafe-eval'");
    });
  });

  describe('3. SEO va Qidiruv Tizimlari Koʻrsatmalari (robots.txt & sitemap)', () => {
    it('robots.txt da rendering aktivlari (_astro) bloklanmagan, pagefind cheklangan va sitemap mavjud boʻlishi kerak', () => {
      const robotsPath = join(rootDir, 'public/robots.txt');
      const content = readFileSync(robotsPath, 'utf-8');
      expect(content).toContain('User-agent: *');
      expect(content).toContain('Allow: /');
      expect(content).not.toContain('Disallow: /_astro/');
      expect(content).toContain('Disallow: /pagefind/');
      expect(content).toContain('Sitemap: https://tolkienolami.uz/sitemap.xml');
      expect(content).not.toContain('Host:');
    });

    it('astro.config.mjs da sitemap generator lastmod parametrini chiqarishi kerak', () => {
      const configPath = join(rootDir, 'astro.config.mjs');
      const content = readFileSync(configPath, 'utf-8');
      expect(content).toContain('<lastmod>');
      expect(content).toContain('resolveLastmod');
      expect(content).toContain('generateSitemap');
    });

    it('sitemap.xml dagi barcha URL lar mavjud fayllarga mos kelishi va lastmod haqiqiy boʻlishi kerak', () => {
      const sitemapPath = join(rootDir, 'dist/sitemap.xml');
      if (!existsSync(sitemapPath)) return; // Agar hali build qilinmagan bo'lsa

      const xml = readFileSync(sitemapPath, 'utf-8');
      const locRegex = /<loc>(https:\/\/tolkienolami\.uz\/([^<]*))<\/loc>\s*<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>/g;
      let match;
      let count = 0;
      const dates = new Set<string>();

      while ((match = locRegex.exec(xml)) !== null) {
        count++;
        const routePath = match[2];
        const lastmodDate = match[3];
        if (lastmodDate) {
          dates.add(lastmodDate);
        }

        // dist da tegishli fayl mavjudligini tekshirish
        if (typeof routePath === 'string') {
          const targetHtml = join(rootDir, 'dist', routePath, 'index.html');
          expect(existsSync(targetHtml), `Sitemapdagi ${match[1]} dist da topilmadi`).toBe(true);
        }
      }

      expect(count).toBeGreaterThanOrEqual(220);
      // Kamida bir nechta turli sanalar mavjud (haqiqiy mtime sanalari)
      expect(dates.size).toBeGreaterThanOrEqual(2);
    });
  });

  describe('4. Strukturaviy Maʼlumotlar (JSON-LD) va Open Graph Meta Birligi', () => {
    it('BaseLayout.astro da Schema.org JSON-LD structured data integratsiyasi mavjud boʻlishi kerak', () => {
      const layoutPath = join(rootDir, 'src/layouts/BaseLayout.astro');
      const content = readFileSync(layoutPath, 'utf-8');
      expect(content).toContain('application/ld+json');
      expect(content).toContain('https://schema.org');
      expect(content).toContain('SearchAction');
      expect(content).toContain('WebSite');
    });

    it('dist dagi HTML fayllarda JSON-LD skriptlari sintaktik jihatdan 100% toʻgʻri boʻlishi kerak', () => {
      const distDir = join(rootDir, 'dist');
      if (!existsSync(distDir)) return;

      const samplePages = [
        join(distDir, 'index.html'),
        join(distDir, 'qahramonlar/feanor/index.html'),
        join(distDir, 'kitoblar/the-hobbit/index.html'),
        join(distDir, 'xaritalar/index.html'),
        join(distDir, '404.html'),
      ];

      for (const p of samplePages) {
        if (!existsSync(p)) continue;
        const html = readFileSync(p, 'utf-8');
        const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
        expect(jsonLdMatch, `${p} da JSON-LD skripti topilmadi`).toBeDefined();
        if (jsonLdMatch && typeof jsonLdMatch[1] === 'string') {
          const rawJson = jsonLdMatch[1];
          expect(() => JSON.parse(rawJson)).not.toThrow();
          const parsed = JSON.parse(rawJson);
          expect(parsed).toBeDefined();
        }
      }
    });

    it('EntityLayout.astro da image parametri qoʻllab-quvvatlanishi kerak', () => {
      const entityLayoutPath = join(rootDir, 'src/layouts/EntityLayout.astro');
      const content = readFileSync(entityLayoutPath, 'utf-8');
      expect(content).toContain('image?: string;');
      expect(content).toContain('image={image}');
    });
  });
});
