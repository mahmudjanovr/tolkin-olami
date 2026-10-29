// @ts-check
import { defineConfig } from 'astro/config';

import fs from 'node:fs';
import path from 'node:path';

/** @returns {import('vite').Plugin} */
function servePagefindDev() {
  return {
    name: 'serve-pagefind-dev',
    configureServer(/** @type {any} */ server) {
      server.middlewares.use((/** @type {any} */ req, /** @type {any} */ res, /** @type {any} */ next) => {
        if (req.url && req.url.startsWith('/pagefind/')) {
          const cleanPath = req.url.split('?')[0].replace(/^\/pagefind\//, '');
          const filePath = path.resolve('dist/pagefind', cleanPath);
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            if (filePath.endsWith('.js')) {
              res.setHeader('Content-Type', 'application/javascript');
            } else if (filePath.endsWith('.css')) {
              res.setHeader('Content-Type', 'text/css');
            } else if (filePath.endsWith('.json')) {
              res.setHeader('Content-Type', 'application/json');
            } else if (filePath.endsWith('.wasm')) {
              res.setHeader('Content-Type', 'application/wasm');
            }
            return fs.createReadStream(filePath).pipe(res);
          }
        }
        next();
      });
    },
  };
}

import { fileURLToPath } from 'node:url';

/** @returns {import('astro').AstroIntegration} */
function generateSitemap() {
  return {
    name: 'generate-sitemap',
    hooks: {
      'astro:build:done': async ({ dir, pages }) => {
        const outDir = fileURLToPath(dir);
        const baseUrl = 'https://tolkienolami.uz';

        const uniqueUrls = new Set();
        for (const p of pages) {
          const pathname = p.pathname;
          if (!pathname || pathname.includes('404')) continue;
          const cleanPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
          uniqueUrls.add(`${baseUrl}/${cleanPath}`.replace(/([^:]\/)\/+/g, '$1'));
        }

        const sortedUrls = Array.from(uniqueUrls).sort();
        const xmlEntries = sortedUrls.map((loc) => {
          let priority = '0.7';
          let changefreq = 'monthly';
          if (loc === `${baseUrl}/`) {
            priority = '1.0';
            changefreq = 'weekly';
          } else if (
            loc === `${baseUrl}/qahramonlar/` ||
            loc === `${baseUrl}/xaritalar/` ||
            loc === `${baseUrl}/tarix/` ||
            loc === `${baseUrl}/kitoblar/` ||
            loc === `${baseUrl}/maqolalar/` ||
            loc === `${baseUrl}/xalqlar-va-tillar/` ||
            loc === `${baseUrl}/olam/` ||
            loc === `${baseUrl}/nasabnomalar/` ||
            loc === `${baseUrl}/tolkien/`
          ) {
            priority = '0.9';
            changefreq = 'weekly';
          }
          return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
        });

        const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlEntries.join('\n')}\n</urlset>\n`;

        fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemapXml, 'utf8');
        console.log(`[sitemap] Successfully generated sitemap.xml with ${sortedUrls.length} canonical URLs.`);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://tolkienolami.uz',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [generateSitemap()],
  vite: {
    plugins: [servePagefindDev()],
  },
});

