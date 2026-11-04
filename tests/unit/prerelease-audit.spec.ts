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
    });
  });

  describe('3. SEO va Qidiruv Tizimlari Koʻrsatmalari (robots.txt & sitemap)', () => {
    it('robots.txt da _astro va pagefind bloklangan, sitemap va host koʻrsatilgan boʻlishi kerak', () => {
      const robotsPath = join(rootDir, 'public/robots.txt');
      const content = readFileSync(robotsPath, 'utf-8');
      expect(content).toContain('User-agent: *');
      expect(content).toContain('Disallow: /_astro/');
      expect(content).toContain('Disallow: /pagefind/');
      expect(content).toContain('Sitemap: https://tolkienolami.uz/sitemap.xml');
      expect(content).toContain('Host: https://tolkienolami.uz');
    });

    it('astro.config.mjs da sitemap generator lastmod parametrini chiqarishi kerak', () => {
      const configPath = join(rootDir, 'astro.config.mjs');
      const content = readFileSync(configPath, 'utf-8');
      expect(content).toContain('<lastmod>');
      expect(content).toContain('generateSitemap');
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

    it('EntityLayout.astro da image parametri qoʻllab-quvvatlanishi kerak', () => {
      const entityLayoutPath = join(rootDir, 'src/layouts/EntityLayout.astro');
      const content = readFileSync(entityLayoutPath, 'utf-8');
      expect(content).toContain('image?: string;');
      expect(content).toContain('image={image}');
    });
  });
});
