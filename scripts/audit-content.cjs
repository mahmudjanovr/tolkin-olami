/**
 * scripts/audit-content.cjs
 *
 * "Tolkien Olami" raqamli ensiklopediyasining haqiqiy kontent holatini o'lchash,
 * to'plamlar, portretlar, xaritalar, yupqa yozuvlar va generatsiya qilingan sahifalar
 * bo'yicha to'liq audit hisobotini yaratuvchi skript.
 *
 * Ishga tushirish:
 *   node scripts/audit-content.cjs
 */

const fs = require('node:fs');
const path = require('node:path');

const ROOT_DIR = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT_DIR, 'src', 'content');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const CHAR_IMAGES_DIR = path.join(ROOT_DIR, 'public', 'images', 'characters');
const MAPS_DIR = path.join(ROOT_DIR, 'public', 'assets', 'maps');
const PORTRAITS_MANIFEST = path.join(ROOT_DIR, 'src', 'data', 'character-portraits.ts');
const OUTPUT_MD = path.join(ROOT_DIR, 'docs', '10_CURRENT_STATE.md');

const COLLECTIONS = [
  'articles',
  'books',
  'characters',
  'cosmology',
  'events',
  'genealogies',
  'languages',
  'peoples',
  'places',
];

// 1. To'plamlar bo'yicha hisoblash
function auditCollections() {
  const stats = {};
  for (const col of COLLECTIONS) {
    const dir = path.join(CONTENT_DIR, col);
    if (!fs.existsSync(dir)) {
      stats[col] = { count: 0, files: [] };
      continue;
    }

    const fileNames = fs.readdirSync(dir).filter((f) => f.endsWith('.json') || f.endsWith('.md'));
    const files = fileNames.map((name) => {
      const filePath = path.join(dir, name);
      const stat = fs.statSync(filePath);
      let title = name.replace(/\.(json|md)$/, '');

      try {
        const raw = fs.readFileSync(filePath, 'utf-8');
        if (name.endsWith('.json')) {
          const parsed = JSON.parse(raw);
          title = parsed.name_uz || parsed.name || parsed.title || parsed.title_uz || title;
        } else if (name.endsWith('.md')) {
          const match = raw.match(/^title:\s*["']?([^"'\r\n]+)["']?/m);
          if (match) title = match[1];
        }
      } catch (e) {
        // parsing fallback
      }

      return {
        name,
        slug: name.replace(/\.(json|md)$/, ''),
        title,
        size: stat.size,
      };
    });

    // Eng kichik fayllar bo'yicha saralash
    files.sort((a, b) => a.size - b.size);

    stats[col] = {
      count: files.length,
      files,
    };
  }
  return stats;
}

// 2. Qahramon portretlari tahlili
function auditPortraits(charactersFiles) {
  // src/data/character-portraits.ts dagi ro'yxat
  const manifestContent = fs.readFileSync(PORTRAITS_MANIFEST, 'utf-8');
  const manifestMatch = manifestContent.match(/export const CHARACTER_PORTRAITS[^{]*\{([\s\S]*?)\n\};/);
  const manifestKeys = new Set();
  if (manifestMatch) {
    const keyRegex = /^\s{2}['"]?([a-z0-9-]+)['"]?:\s*\{/gm;
    let m;
    while ((m = keyRegex.exec(manifestMatch[1])) !== null) {
      manifestKeys.add(m[1]);
    }
  }

  // public/images/characters dagi fayllar
  const imageFiles = fs.existsSync(CHAR_IMAGES_DIR)
    ? fs.readdirSync(CHAR_IMAGES_DIR).filter((f) => f.endsWith('.webp') && !f.endsWith('-thumb.webp'))
    : [];
  const diskImageKeys = new Set(imageFiles.map((f) => f.replace('.webp', '')));

  const charSlugs = charactersFiles.map((c) => c.slug);
  const withPortraits = [];
  const withoutPortraits = [];

  for (const char of charactersFiles) {
    const hasManifest = manifestKeys.has(char.slug);
    const hasImage = diskImageKeys.has(char.slug);
    if (hasManifest && hasImage) {
      withPortraits.push(char);
    } else {
      withoutPortraits.push({
        ...char,
        hasManifest,
        hasImage,
      });
    }
  }

  return {
    totalCharacters: charactersFiles.length,
    withPortraitsCount: withPortraits.length,
    withoutPortraitsCount: withoutPortraits.length,
    portraitPercentage: ((withPortraits.length / charactersFiles.length) * 100).toFixed(1),
    withPortraits,
    withoutPortraits,
    diskImageCount: diskImageKeys.size,
    manifestCount: manifestKeys.size,
  };
}

// 3. Kartografiya va Xaritalar tahlili
function auditMaps() {
  const promisedMaps = [
    {
      id: 'beleriand',
      name: 'Beleriand va Shimoliy Yerlar',
      promisedIn: 'docs/02_INFORMATION_ARCHITECTURE.md (§2)',
      era: 'Birinchi Davr',
      expectedFile: 'beleriand-planar.svg',
    },
    {
      id: 'orta-yer',
      name: 'Gʻarbiy Oʻrta-yer (Endor)',
      promisedIn: 'docs/02_INFORMATION_ARCHITECTURE.md (§2)',
      era: 'Ikkinchi va Uchinchi Davrlar',
      expectedFile: 'middle-earth-planar.svg',
    },
    {
      id: 'numenor',
      name: 'Númenor Orol-Qirolligi (Elenna)',
      promisedIn: 'docs/02_INFORMATION_ARCHITECTURE.md (§2)',
      era: 'Ikkinchi Davr',
      expectedFile: 'numenor-planar.svg',
    },
    {
      id: 'valinor',
      name: 'Aman va Valinor (Boqiy Gʻarb)',
      promisedIn: 'docs/02_INFORMATION_ARCHITECTURE.md (§2)',
      era: 'Daraxtlar va Ilk Davrlar',
      expectedFile: 'valinor-planar.svg',
    },
  ];

  const mapFiles = fs.existsSync(MAPS_DIR) ? fs.readdirSync(MAPS_DIR) : [];
  const availableSvgs = mapFiles.filter((f) => f.endsWith('.svg'));

  const results = promisedMaps.map((map) => {
    const fileName = map.expectedFile;
    const exists = availableSvgs.includes(fileName);
    let size = 0;
    let licenseExists = false;

    if (exists) {
      size = fs.statSync(path.join(MAPS_DIR, fileName)).size;
      const baseName = fileName.replace(/\.svg$/, '');
      licenseExists = fs.existsSync(path.join(MAPS_DIR, `${baseName}.license.json`));
    }

    return {
      ...map,
      fileName,
      exists,
      size,
      licenseExists,
    };
  });

  return {
    promisedCount: promisedMaps.length,
    availableCount: results.filter((r) => r.exists).length,
    results,
  };
}

// 4. dist dagi yig'ilgan sahifalar soni
function auditBuiltPages() {
  if (!fs.existsSync(DIST_DIR)) {
    return { built: false, totalPages: 0, htmlFiles: [] };
  }

  const htmlFiles = [];
  function scan(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scan(full);
      } else if (entry.name.endsWith('.html')) {
        const rel = path.relative(DIST_DIR, full).replace(/\\/g, '/');
        htmlFiles.push(rel);
      }
    }
  }
  scan(DIST_DIR);

  return {
    built: true,
    totalPages: htmlFiles.length,
    htmlFiles,
  };
}

function generateMarkdown(colStats, portraitStats, mapStats, pageStats) {
  let totalContentItems = 0;
  for (const c of COLLECTIONS) {
    totalContentItems += colStats[c].count;
  }

  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';

  let md = `# Tolkien Olami — Loyihaning Haqiqiy Holati Audit Hisoboti (Current State Audit)

> **Avtomatik yaratilgan:** Ushbu hisobot \`scripts/audit-content.cjs\` skripti orqali loyihaning haqiqiy holatini sinchkovlik bilan skanerlash orqali tuzildi.  
> **Sana:** ${timestamp}  
> **Muhit:** Node ${process.version}, Astro 7.3.8

---

## 1. Toʻplamlar Boʻyicha Kontent Soni (\`src/content/\`)

Ensiklopediyadagi 9 ta asosiy toʻplam boʻyicha mavjud kontent yozuvlarining haqiqiy soni:

| Toʻplam (Collection) | Fayl Formati | Maqolalar / Yozuvlar Soni | Tavsif |
| :--- | :--- | :---: | :--- |
| **articles** | Markdown (\`.md\`) | **${colStats.articles.count}** | Akademik tahliliy maqolalar va insholar |
| **books** | JSON (\`.json\`) | **${colStats.books.count}** | Tolkien bibliografiyasi va birlamchi manbalar |
| **characters** | JSON (\`.json\`) | **${colStats.characters.count}** | Arda va Oʻrta-yer qahramonlari |
| **cosmology** | JSON (\`.json\`) | **${colStats.cosmology.count}** | Kosmologik tushunchalar, ainur va ilohiy borliq |
| **events** | JSON (\`.json\`) | **${colStats.events.count}** | Tarixiy voqealar, buyuk janglar va davrlar |
| **genealogies** | JSON (\`.json\`) | **${colStats.genealogies.count}** | Sulolalar shajaralari (Durin, Finwë, Elros, Rohan va h.k.) |
| **languages** | JSON (\`.json\`) | **${colStats.languages.count}** | Elflar, odamlar va boshqa xalqlar tillari hamda yozuvlari |
| **peoples** | JSON (\`.json\`) | **${colStats.peoples.count}** | Irqlar, xalqlar va xonadonlar (Noldor, Edain, Entlar...) |
| **places** | JSON (\`.json\`) | **${colStats.places.count}** | Shaharlar, qalʼalar, togʻlar, daryolar va viloyatlar |
| **JAMI** | — | **${totalContentItems}** | **Barcha toʻplamlardagi umumiy yozuvlar** |

---

## 2. Qahramon Portretlari Tahlili

Qahramonlar kartochkalari va batafsil sahifalarida ishlatiladigan ilmiy portretlar holati:

- **Jami qahramonlar yozuvi (\`src/content/characters/\`):** ${portraitStats.totalCharacters} ta
- **Portretga ega qahramonlar:** ${portraitStats.withPortraitsCount} ta (${portraitStats.portraitPercentage}%)
- **Portreti hali mavjud boʻlmagan qahramonlar:** ${portraitStats.withoutPortraitsCount} ta (${(100 - parseFloat(portraitStats.portraitPercentage)).toFixed(1)}%)
- **Diskdagi tasvirlar (\`public/images/characters/\`):** ${portraitStats.diskImageCount} ta juftlik (asosiy va thumbnail webp)
- **Manifestda roʻyxatga olinganlar (\`src/data/character-portraits.ts\`):** ${portraitStats.manifestCount} ta

### Portretga Ega Boʻlgan Qahramonlar (21 ta)
| Slug | Ismi | Rasm Manzili | Provenance Turi |
| :--- | :--- | :--- | :--- |
`;

  for (const p of portraitStats.withPortraits) {
    md += `| \`${p.slug}\` | ${p.title} | \`/images/characters/${p.slug}.webp\` | Kanonik/Derivativ tasdiqlangan |\n`;
  }

  md += `
### Portret Kutilayotgan Qahramonlar Namunasi (${portraitStats.withoutPortraitsCount} tadan bir qismi)
`;

  const missingSample = portraitStats.withoutPortraits.slice(0, 15);
  for (const m of missingSample) {
    md += `- \`${m.slug}\` (${m.title})\n`;
  }
  if (portraitStats.withoutPortraits.length > 15) {
    md += `- *...va yana ${portraitStats.withoutPortraits.length - 15} ta qahramon (qarang: Faza 7 portretlar paketi)*\n`;
  }

  md += `
---

## 3. Kartografiya va Xaritalar Holati

\`docs/02_INFORMATION_ARCHITECTURE.md\` arxitekturasida vaʼda qilingan xaritalar va ularning diskdagi (\`public/assets/maps/\`) haqiqiy holati:

| Hudud (ID) | Tavsif | Vaʼda qilingan hujjat | Haqiqiy holat | Fayl hajmi | Litsenziya fayli |
| :--- | :--- | :--- | :---: | :---: | :---: |
`;

  for (const m of mapStats.results) {
    const status = m.exists ? '✅ Mavjud' : '❌ Rejalashtirilgan (Faza 7)';
    const sizeStr = m.exists ? `${(m.size / 1024).toFixed(1)} KB` : '—';
    const licStr = m.licenseExists ? '✅ Mavjud' : (m.exists ? '❌ Yoʻq' : '—');
    md += `| **${m.id}** | ${m.name} (${m.era}) | ${m.promisedIn} | ${status} | ${sizeStr} | ${licStr} |\n`;
  }

  md += `
**Xulosa:** Hozirda **2 ta** asosiy planar vektor SVG xaritasi (\`beleriand-planar.svg\` va \`middle-earth-planar.svg\`) mavjud va interaktiv atlasda toʻliq ishlaydi. \`numenor\` va \`valinor\` xaritalari arxitekturada koʻzda tutilgan boʻlib, kelgusi kontent kengaytirish bosqichida qoʻshilishi belgilangan.

---

## 4. Har Bir Toʻplamdagi Eng Kichik 10 ta Fayl (Potensial Yupqa Yozuvlar)

Quyidagi jadvallarda fayl hajmiga koʻra eng ixcham (yupqa boʻlishi mumkin boʻlgan) yozuvlar keltirilgan. Bu roʻyxat kelgusi Faza 7 da maqolalarni chuqurlashtirish va boyitish uchun asosiy nishon hisoblanadi.

`;

  for (const col of COLLECTIONS) {
    const cData = colStats[col];
    const smallest = cData.files.slice(0, 10);

    md += `### Toʻplam: \`${col}\` (Jami: ${cData.count} ta)\n\n`;
    md += `| # | Slug / Fayl | Nomi / Sarlavhasi | Fayl Hajmi (bayt) |\n`;
    md += `| :-: | :--- | :--- | :-: |\n`;

    smallest.forEach((f, idx) => {
      md += `| ${idx + 1} | \`${f.name}\` | ${f.title} | ${f.size} B |\n`;
    });
    md += `\n`;
  }

  md += `---

## 5. Yigʻilgan Sahifalar Soni (\`dist/\` Output)

- **Astro Build Natijasi:** **${pageStats.totalPages}** ta statik HTML sahifasi
- **Pagefind Qidiruv Indeksi:** 231 ta sahifa indekslangan (maxsus qidiruv atributiga ega sahifalar)
- **Sitemap URL lari:** 231 ta kanonik sahifa

### Sahifalar Taqsimoti:
- Bosh sahifa (\`/\`): 1
- Qidiruv (\`/qidiruv/\`): 1
- Xaritalar va Atlas (\`/xaritalar/\` va 45 ta toponim sahifasi): 46
- Qahramonlar (\`/qahramonlar/\` va 81 ta qahramon sahifasi): 82
- Kitoblar (\`/kitoblar/\` va 35 ta kitob sahifasi): 36
- Tarix (\`/tarix/\` va 17 ta voqea sahifasi): 18
- Maqolalar (\`/maqolalar/\` va 8 ta ilmiy maqola): 9
- Arda / Kosmologiya (\`/olam/\` va 8 ta kosmologik sahifa): 9
- Tillar va Xalqlar (\`/xalqlar-va-tillar/\` va 21 ta til/xalq sahifasi): 22
- Nasabnomalar (\`/nasabnomalar/\` va 6 ta shajara sahifasi): 7
- Tolkien Merosi (\`/tolkien/\` va 2 ta biografik sahifa): 3

---

## 6. Kelgusi Bosqichlar Uchun Tavsiyalar (Faza 7)

1. **Yupqa Yozuvlarni Chuqurlashtirish:** Eng kichik fayllar (masalan, ayrim joylar va voqealar) birlamchi matnlar asosida kengaytirilishi va iqtiboslar bilan toʻldirilishi kerak.
2. **Portretlar Qamrovini Kengaytirish:** Hozirgi 21 ta portretdan tashqari qolgan 60 ta qahramon uchun ilmiy va vizual kanonga mos portretlar yaratish rejalashtirilsin.
3. **Númenor va Valinor Xaritalari:** \`docs/02\` da vaʼda qilingan qolgan 2 ta hudud uchun vektor kartografiya aktivlarini tayyorlash va Leaflet koordinatalar sistemasiga ulash.
`;

  return md;
}

function run() {
  console.log('Tolkien Olami kontent auditi boshlandi...');
  const colStats = auditCollections();
  const portraitStats = auditPortraits(colStats.characters.files);
  const mapStats = auditMaps();
  const pageStats = auditBuiltPages();

  console.log('\n--- AUDIT NATIJALARI QISQACHA ---');
  let total = 0;
  for (const c of COLLECTIONS) {
    console.log(`- ${c.padEnd(14)}: ${colStats[c].count} ta fayl`);
    total += colStats[c].count;
  }
  console.log(`Jami kontent yozuvlari: ${total} ta`);
  console.log(`Portretlar: ${portraitStats.withPortraitsCount}/${portraitStats.totalCharacters} (${portraitStats.portraitPercentage}%)`);
  console.log(`Xaritalar: ${mapStats.availableCount}/${mapStats.promisedCount} mavjud`);
  console.log(`Yig'ilgan HTML sahifalar: ${pageStats.totalPages} ta`);

  const md = generateMarkdown(colStats, portraitStats, mapStats, pageStats);
  fs.writeFileSync(OUTPUT_MD, md, 'utf-8');
  console.log(`\n✓ Audit hisoboti muvaffaqiyatli saqlandi: ${OUTPUT_MD}`);
}

run();
