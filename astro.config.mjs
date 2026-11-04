// @ts-check
import { defineConfig } from 'astro/config';
import { createLogger } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const customViteLogger = createLogger();
const originalViteWarn = customViteLogger.warn;
customViteLogger.warn = (/** @type {any} */ msg, /** @type {any} */ options) => {
  if (
    typeof msg === 'string' &&
    msg.includes("didn't resolve at build time, it will remain unchanged to be resolved at runtime")
  ) {
    return;
  }
  originalViteWarn(msg, options);
};

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

/**
 * Har bir sahifa uchun manba faylining haqiqiy o'zgartirilgan sanasini (mtime) aniqlaydi.
 * @param {string} cleanPath
 * @param {string} outDir
 * @returns {string}
 */
function resolveLastmod(cleanPath, outDir) {
  const trimmed = cleanPath.replace(/^\/+|\/+$/g, '');
  const segments = trimmed ? trimmed.split('/') : [];

  let candidate = '';
  if (segments.length === 0) {
    candidate = path.resolve('src/pages/index.astro');
  } else if (segments.length === 1) {
    const sec = segments[0];
    const hubCandidate = path.resolve(`src/pages/${sec}/index.astro`);
    if (fs.existsSync(hubCandidate)) candidate = hubCandidate;
  } else if (segments.length === 2 && segments[0] && segments[1]) {
    const sec = segments[0];
    const slug = segments[1];
    /** @type {Record<string, string>} */
    const map = {
      qahramonlar: `src/content/characters/${slug}.json`,
      kitoblar: `src/content/books/${slug}.json`,
      tarix: `src/content/events/${slug}.json`,
      maqolalar: `src/content/articles/${slug}.md`,
      olam: `src/content/cosmology/${slug}.json`,
      nasabnomalar: `src/content/genealogies/${slug}.json`,
      xaritalar: `src/content/places/${slug}.json`,
    };
    const targetCandidate = map[sec];
    if (targetCandidate && fs.existsSync(path.resolve(targetCandidate))) {
      candidate = path.resolve(targetCandidate);
    } else if (sec === 'xalqlar-va-tillar') {
      const pCandidate = path.resolve(`src/content/peoples/${slug}.json`);
      const lCandidate = path.resolve(`src/content/languages/${slug}.json`);
      if (fs.existsSync(pCandidate)) candidate = pCandidate;
      else if (fs.existsSync(lCandidate)) candidate = lCandidate;
    } else if (sec === 'tolkien') {
      const tCandidate = path.resolve(`src/content/articles/${slug}.md`);
      if (fs.existsSync(tCandidate)) candidate = tCandidate;
    }
  }

  if (candidate && fs.existsSync(candidate)) {
    try {
      const datePart = fs.statSync(candidate).mtime.toISOString().split('T')[0];
      if (datePart) return datePart;
    } catch {
      // fallback
    }
  }

  const distHtml = path.join(outDir, cleanPath, 'index.html');
  if (fs.existsSync(distHtml)) {
    try {
      const datePart = fs.statSync(distHtml).mtime.toISOString().split('T')[0];
      if (datePart) return datePart;
    } catch {
      // fallback
    }
  }

  return '2026-10-23';
}

/** @returns {import('astro').AstroIntegration} */
function generateSitemap() {
  return {
    name: 'generate-sitemap',
    hooks: {
      'astro:build:done': async ({ dir, pages }) => {
        const outDir = fileURLToPath(dir);
        const baseUrl = 'https://tolkienolami.uz';

        /** @type {Map<string, string>} */
        const urlToCleanPath = new Map();
        for (const p of pages) {
          const pathname = p.pathname;
          if (!pathname || pathname.includes('404')) continue;
          const cleanPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
          const fullLoc = `${baseUrl}/${cleanPath}`.replace(/([^:]\/)\/+/g, '$1');
          urlToCleanPath.set(fullLoc, cleanPath);
        }

        const sortedUrls = Array.from(urlToCleanPath.keys()).sort();
        const xmlEntries = sortedUrls.map((loc) => {
          const cleanPath = urlToCleanPath.get(loc) || '';
          const lastmod = resolveLastmod(cleanPath, outDir);

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
          return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
        });

        const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlEntries.join('\n')}\n</urlset>\n`;

        fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemapXml, 'utf8');
        console.log(`[sitemap] Successfully generated sitemap.xml with ${sortedUrls.length} canonical URLs with verified lastmod.`);
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
    customLogger: customViteLogger,
    resolve: {
      preserveSymlinks: true,
    },
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // Suppress Leaflet unresolvable runtime asset warning
          if (
            warning.message &&
            warning.message.includes("didn't resolve at build time, it will remain unchanged to be resolved at runtime")
          ) {
            return;
          }
          warn(warning);
        },
      },
    },
    plugins: [servePagefindDev()],
  },
});

