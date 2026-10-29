import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import {
  characterSchema,
  peopleSchema,
  eventSchema,
  bookSchema,
  languageSchema,
  cosmologySchema,
  articleSchema,
} from '../../src/content/schemas';
import { checkSlugCollisions, resolveBookCitation } from '../../src/utils/entity-resolver';

function parseFrontmatter(content: string): Record<string, unknown> {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match || !match[1]) return {};
  const yaml = match[1];
  const result: Record<string, unknown> = {};

  let currentKey: string | null = null;
  let currentArray: unknown[] | null = null;
  let inObjectArray = false;
  let currentObjectInArray: Record<string, string> | null = null;

  const lines = yaml.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    if (line.startsWith('  - ') && currentKey) {
      // Array element
      const itemVal = line.replace('  - ', '').trim();
      if (itemVal.includes(': ')) {
        // Start of object in array
        inObjectArray = true;
        currentObjectInArray = {};
        const [k, v] = itemVal.split(': ');
        if (k && v !== undefined) {
          currentObjectInArray[k.trim()] = v.replace(/^["']|["']$/g, '').trim();
        }
        currentArray!.push(currentObjectInArray);
      } else {
        inObjectArray = false;
        currentArray!.push(itemVal.replace(/^["']|["']$/g, ''));
      }
    } else if (inObjectArray && line.startsWith('    ') && currentObjectInArray) {
      const [k, v] = line.trim().split(': ');
      if (k && v !== undefined) {
        currentObjectInArray[k.trim()] = v.replace(/^["']|["']$/g, '').trim();
      }
    } else {
      inObjectArray = false;
      const colonIdx = line.indexOf(':');
      if (colonIdx !== -1) {
        const key = line.slice(0, colonIdx).trim();
        const value = line.slice(colonIdx + 1).trim();
        if (value === '') {
          currentKey = key;
          currentArray = [];
          result[key] = currentArray;
        } else {
          currentKey = null;
          currentArray = null;
          result[key] = value.replace(/^["']|["']$/g, '');
        }
      }
    }
  }

  return result;
}

describe('Kross-Toʻplamlar Butunligi va Kontent Validatsiyasi (content-crosslinks.spec.ts)', () => {
  const baseContent = join(process.cwd(), 'src/content');

  describe('1. Barcha Zod sxemalaridan namunaviy maʼlumotlar 100% oʻtishi', () => {
    it('Barcha Qahramonlar (characters) validatsiyadan oʻtishi kerak', () => {
      const dir = join(baseContent, 'characters');
      const files = readdirSync(dir).filter((f) => f.endsWith('.json'));
      expect(files.length).toBeGreaterThanOrEqual(5);

      for (const file of files) {
        const json = JSON.parse(readFileSync(join(dir, file), 'utf-8'));
        const parsed = characterSchema.safeParse(json);
        if (!parsed.success) {
          console.error(`Validatsiya xatosi [characters/${file}]:`, parsed.error.issues);
        }
        expect(parsed.success).toBe(true);
      }
    });

    it('Barcha Kitoblar (books) validatsiyadan oʻtishi kerak', () => {
      const dir = join(baseContent, 'books');
      const files = readdirSync(dir).filter((f) => f.endsWith('.json'));
      expect(files.length).toBeGreaterThanOrEqual(5);

      for (const file of files) {
        const json = JSON.parse(readFileSync(join(dir, file), 'utf-8'));
        const parsed = bookSchema.safeParse(json);
        if (!parsed.success) {
          console.error(`Validatsiya xatosi [books/${file}]:`, parsed.error.issues);
        }
        expect(parsed.success).toBe(true);
      }
    });

    it('Barcha Tarixiy Voqealar (events) validatsiyadan oʻtishi kerak', () => {
      const dir = join(baseContent, 'events');
      const files = readdirSync(dir).filter((f) => f.endsWith('.json'));
      expect(files.length).toBeGreaterThanOrEqual(3);

      for (const file of files) {
        const json = JSON.parse(readFileSync(join(dir, file), 'utf-8'));
        const parsed = eventSchema.safeParse(json);
        if (!parsed.success) {
          console.error(`Validatsiya xatosi [events/${file}]:`, parsed.error.issues);
        }
        expect(parsed.success).toBe(true);
      }
    });

    it('Barcha Xalqlar (peoples) validatsiyadan oʻtishi kerak', () => {
      const dir = join(baseContent, 'peoples');
      const files = readdirSync(dir).filter((f) => f.endsWith('.json'));
      expect(files.length).toBeGreaterThanOrEqual(3);

      for (const file of files) {
        const json = JSON.parse(readFileSync(join(dir, file), 'utf-8'));
        const parsed = peopleSchema.safeParse(json);
        if (!parsed.success) {
          console.error(`Validatsiya xatosi [peoples/${file}]:`, parsed.error.issues);
        }
        expect(parsed.success).toBe(true);
      }
    });

    it('Barcha Tillar (languages) validatsiyadan oʻtishi kerak', () => {
      const dir = join(baseContent, 'languages');
      const files = readdirSync(dir).filter((f) => f.endsWith('.json'));
      expect(files.length).toBeGreaterThanOrEqual(3);

      for (const file of files) {
        const json = JSON.parse(readFileSync(join(dir, file), 'utf-8'));
        const parsed = languageSchema.safeParse(json);
        if (!parsed.success) {
          console.error(`Validatsiya xatosi [languages/${file}]:`, parsed.error.issues);
        }
        expect(parsed.success).toBe(true);
      }
    });

    it('Barcha Kosmologiya (cosmology) yozuvlari validatsiyadan oʻtishi kerak', () => {
      const dir = join(baseContent, 'cosmology');
      const files = readdirSync(dir).filter((f) => f.endsWith('.json'));
      expect(files.length).toBeGreaterThanOrEqual(3);

      for (const file of files) {
        const json = JSON.parse(readFileSync(join(dir, file), 'utf-8'));
        const parsed = cosmologySchema.safeParse(json);
        if (!parsed.success) {
          console.error(`Validatsiya xatosi [cosmology/${file}]:`, parsed.error.issues);
        }
        expect(parsed.success).toBe(true);
      }
    });

    it('Barcha Ilmiy Maqolalar (articles) frontmatteri validatsiyadan oʻtishi kerak', () => {
      const dir = join(baseContent, 'articles');
      const files = readdirSync(dir).filter((f) => f.endsWith('.md'));
      expect(files.length).toBeGreaterThanOrEqual(4);

      for (const file of files) {
        const raw = readFileSync(join(dir, file), 'utf-8');
        const frontmatter = parseFrontmatter(raw);
        const parsed = articleSchema.safeParse(frontmatter);
        if (!parsed.success) {
          console.error(`Validatsiya xatosi [articles/${file}]:`, parsed.error.issues);
        }
        expect(parsed.success).toBe(true);
      }
    });
  });

  describe('2. Slug toʻqnashuvi yoʻqligi (/xalqlar-va-tillar/ boʻlimi)', () => {
    it('peoples va languages oʻrtasida birorta ham bir xil ID mavjud boʻlmasligi shart', () => {
      const peopleFiles = readdirSync(join(baseContent, 'peoples'))
        .filter((f) => f.endsWith('.json'))
        .map((f) => ({ id: f.replace('.json', ''), collection: 'peoples' }));

      const languageFiles = readdirSync(join(baseContent, 'languages'))
        .filter((f) => f.endsWith('.json'))
        .map((f) => ({ id: f.replace('.json', ''), collection: 'languages' }));

      const check = checkSlugCollisions([...peopleFiles, ...languageFiles]);
      expect(check.isValid).toBe(true);
      expect(check.collisions).toHaveLength(0);
    });
  });

  describe('3. Toʻplamlararo bogʻliqliklar butunligi (Cross-link integrity)', () => {
    it('Qahramonlarning house_id si genealogies katalogida mavjud boʻlishi kerak', () => {
      const charDir = join(baseContent, 'characters');
      const genDir = join(baseContent, 'genealogies');
      const genFiles = new Set(readdirSync(genDir).filter((f) => f.endsWith('.json')).map((f) => f.replace('.json', '')));

      const charFiles = readdirSync(charDir).filter((f) => f.endsWith('.json'));
      for (const f of charFiles) {
        const json = JSON.parse(readFileSync(join(charDir, f), 'utf-8'));
        if (json.house_id) {
          expect(genFiles.has(json.house_id)).toBe(true);
        }
      }
    });

    it('Barcha manba kitoblarning (sources.book_slug) Oksford registri mavjud boʻlishi kerak', () => {
      const charDir = join(baseContent, 'characters');
      const files = readdirSync(charDir).filter((f) => f.endsWith('.json'));

      for (const f of files) {
        const json = JSON.parse(readFileSync(join(charDir, f), 'utf-8'));
        for (const s of json.sources) {
          const meta = resolveBookCitation(s.book_slug);
          expect(meta.title).toBeDefined();
          expect(meta.title.length).toBeGreaterThan(0);
        }
      }
    });

    it('Gil-galad kanonik noaniqlik (disputed_variant) va izohlarga ega boʻlishi shart', () => {
      const gilGaladPath = join(baseContent, 'characters', 'gil-galad.json');
      const json = JSON.parse(readFileSync(gilGaladPath, 'utf-8'));

      expect(json.textual_status).toBe('disputed_variant');
      expect(json.uncertainty_notes).toBeDefined();
      expect(json.uncertainty_notes).toContain('Orodreth');
    });

    it('Barcha related_characters murojaatlari haqiqatda mavjud boʻlgan qahramonlar yozuvlariga yechilishi shart', () => {
      const charDir = join(baseContent, 'characters');
      const charFiles = readdirSync(charDir).filter((f) => f.endsWith('.json'));
      const existingCharIds = new Set(charFiles.map((f) => f.replace('.json', '')));

      for (const f of charFiles) {
        const json = JSON.parse(readFileSync(join(charDir, f), 'utf-8'));
        for (const relId of json.related_characters) {
          expect(existingCharIds.has(relId)).toBe(true);
        }
      }
    });

    it('Barcha nasabnomalar (genealogies) manbalari mavjud kitob yozuviga (book_slug) tayanishi shart', () => {
      const bookDir = join(baseContent, 'books');
      const validBookSlugs = new Set(
        readdirSync(bookDir)
          .filter((f) => f.endsWith('.json'))
          .map((f) => f.replace('.json', ''))
      );

      const genDir = join(baseContent, 'genealogies');
      const genFiles = readdirSync(genDir).filter((f) => f.endsWith('.json'));

      for (const f of genFiles) {
        const json = JSON.parse(readFileSync(join(genDir, f), 'utf-8'));
        for (const s of json.sources) {
          expect(validBookSlugs.has(s.book_slug)).toBe(true);
        }
      }
    });

    it('Beren va Túrin Turambar qahramonlari kanonik aniqlik va Zod sxemasi boʻyicha tekshirilishi kerak', () => {
      const beren = JSON.parse(readFileSync(join(baseContent, 'characters/beren.json'), 'utf-8'));
      const parsedBeren = characterSchema.safeParse(beren);
      expect(parsedBeren.success).toBe(true);
      expect(beren.culture).toBe('Bëor xonadoni');
      expect(beren.race).toBe('insonlar');

      const turin = JSON.parse(readFileSync(join(baseContent, 'characters/turin.json'), 'utf-8'));
      const parsedTurin = characterSchema.safeParse(turin);
      expect(parsedTurin.success).toBe(true);
      expect(turin.culture).toBe('Hador xonadoni');
      expect(turin.race).toBe('insonlar');
    });

    it('Tengwar yozuv tizimi ogʻzaki til emas, featural yozuv tizimi sifatida toʻgʻri tasniflangan boʻlishi shart', () => {
      const tengwar = JSON.parse(readFileSync(join(baseContent, 'languages/tengwar.json'), 'utf-8'));
      const parsedTengwar = languageSchema.safeParse(tengwar);
      expect(parsedTengwar.success).toBe(true);
      expect(tengwar.writing_systems).toContain('tengwar');
      expect(tengwar.family).toContain('Yozuv Tizimi');
      expect(tengwar.phonology_overview).toContain('ogʻzaki til emas');
    });
  });

  describe('4. dist/ Chiqish Papkasidagi Barcha HTML Havolalari Butunligi (Broken-Link Scan)', () => {
    it('Generatsiya qilingan HTML sahifalarda birorta ham singan mahalliy havola qolmagan boʻlishi kerak', () => {
      const distDir = join(process.cwd(), 'dist');
      const { existsSync, statSync } = require('node:fs');

      if (!existsSync(distDir)) {
        // Agar dist papkasi hali yig'ilmagan bo'lsa (faqat test vaqtida)
        return;
      }

      const htmlFiles: string[] = [];
      function collectHtml(dir: string) {
        for (const entry of readdirSync(dir, { withFileTypes: true })) {
          const fullPath = join(dir, entry.name);
          if (entry.isDirectory()) {
            collectHtml(fullPath);
          } else if (entry.name.endsWith('.html')) {
            htmlFiles.push(fullPath);
          }
        }
      }
      collectHtml(distDir);

      const brokenLinks: Array<{ file: string; href: string }> = [];
      const linkRegex = /<a\b[^>]*?\bhref=["']([^"']+)["'][^>]*>/gi;

      for (const file of htmlFiles) {
        const html = readFileSync(file, 'utf-8');
        let match: RegExpExecArray | null;

        while ((match = linkRegex.exec(html)) !== null) {
          const href = match[1]!;

          // Tashqi havolalar, protokollar va langarlar o'tkazib yuboriladi
          if (
            href.startsWith('http://') ||
            href.startsWith('https://') ||
            href.startsWith('//') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:') ||
            href.startsWith('javascript:') ||
            href.startsWith('#')
          ) {
            continue;
          }

          // Query parametrlar va fragmentlarni ajratish (?joy=... yoki #anchor)
          const cleanPath = href.split('?')[0]!.split('#')[0]!;
          if (!cleanPath) continue;

          let targetFile: string;
          if (cleanPath.startsWith('/')) {
            targetFile = join(distDir, cleanPath.slice(1));
          } else {
            targetFile = join(file, '..', cleanPath);
          }

          let exists = false;
          if (existsSync(targetFile)) {
            if (statSync(targetFile).isDirectory()) {
              exists = existsSync(join(targetFile, 'index.html'));
            } else {
              exists = true;
            }
          } else if (existsSync(targetFile + '.html')) {
            exists = true;
          }

          if (!exists) {
            brokenLinks.push({ file, href });
          }
        }
      }

      if (brokenLinks.length > 0) {
        console.error('Singan havolalar roʻyxati:', brokenLinks);
      }

      expect(brokenLinks).toHaveLength(0);
    });
  });
});
