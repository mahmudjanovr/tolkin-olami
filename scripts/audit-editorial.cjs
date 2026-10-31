/**
 * scripts/audit-editorial.cjs
 *
 * Detailed editorial and canonical consistency audit across all content collections.
 */

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const CONTENT = path.join(ROOT, 'src', 'content');

const COLLECTIONS = [
  'characters',
  'places',
  'events',
  'peoples',
  'languages',
  'books',
  'cosmology',
  'genealogies',
  'articles',
];

// 1. Orthography / Apostrophe Scan
function auditOrthography() {
  const counts = {
    straightApos: 0, // '
    modifierTurnedComma: 0, // ʻ (U+02BB)
    rightSingleQuote: 0, // ’ (U+2019)
    leftSingleQuote: 0, // ‘ (U+2018)
    modifierLetterApos: 0, // ʼ (U+02BC)
  };

  const oGPatterns = {
    standardTurned: 0, // oʻ, gʻ with U+02BB
    standardRightQuote: 0, // o’, g’ with U+2019
    straightQuote: 0, // o', g' with '
    other: 0,
  };

  const sampleInconsistencies = [];

  for (const col of COLLECTIONS) {
    const dir = path.join(CONTENT, col);
    if (!fs.existsSync(dir)) continue;

    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.json') && !file.endsWith('.md')) continue;
      const text = fs.readFileSync(path.join(dir, file), 'utf8');

      for (const ch of text) {
        if (ch === "'") counts.straightApos++;
        else if (ch === '\u02BB') counts.modifierTurnedComma++;
        else if (ch === '\u2019') counts.rightSingleQuote++;
        else if (ch === '\u2018') counts.leftSingleQuote++;
        else if (ch === '\u02BC') counts.modifierLetterApos++;
      }

      // Check oʻ / gʻ
      const matchesStraight = text.match(/[ogOG]'/g) || [];
      const matchesTurned = text.match(/[ogOG]\u02BB/g) || [];
      const matchesRight = text.match(/[ogOG]\u2019/g) || [];

      oGPatterns.straightQuote += matchesStraight.length;
      oGPatterns.standardTurned += matchesTurned.length;
      oGPatterns.standardRightQuote += matchesRight.length;

      if (matchesStraight.length > 0 && matchesTurned.length > 0) {
        sampleInconsistencies.push({
          file: `${col}/${file}`,
          straight: matchesStraight.length,
          turned: matchesTurned.length,
        });
      }
    }
  }

  return { counts, oGPatterns, sampleInconsistencies };
}

// 2. Terminology & Transliteration Scan
function auditTerminology() {
  const termMatches = {
    // Xobbit vs Hobbit
    hobbitCount: 0,
    xobbitCount: 0,
    // Mitti vs Gnom vs Karlik vs Dwarf
    mittiCount: 0,
    mittiOdamCount: 0,
    gnomCount: 0,
    forbiddenGnomViolations: [],
    // Ork vs Oʻrk vs O'rk
    orkStraight: 0,
    orkTurned: 0,
    orkNoApos: 0,
    // Elf vs Elvon
    elfCount: 0,
    // Tolkien vs Tolkin
    tolkienCount: 0,
    tolkinCount: 0,
    // Kh vs X (e.g. Khazad vs Xazad)
    khazadCount: 0,
    xazadCount: 0,
    khuzdulCount: 0,
    xuzdulCount: 0,
    // Th vs T (e.g. Theoden vs Teoden, Thranduil vs Tranduil, Thingol vs Tingol)
    theodenCount: 0,
    teodenCount: 0,
    thranduilCount: 0,
    tranduilCount: 0,
    thingolCount: 0,
    tingolCount: 0,
  };

  for (const col of COLLECTIONS) {
    const dir = path.join(CONTENT, col);
    if (!fs.existsSync(dir)) continue;

    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.json') && !file.endsWith('.md')) continue;
      const text = fs.readFileSync(path.join(dir, file), 'utf8');

      termMatches.hobbitCount += (text.match(/hobbit/gi) || []).length;
      termMatches.xobbitCount += (text.match(/xobbit/gi) || []).length;

      termMatches.mittiCount += (text.match(/mitti(?!\s*odam)/gi) || []).length;
      termMatches.mittiOdamCount += (text.match(/mitti[\s-]odam/gi) || []).length;

      const gnomMatches = text.match(/gnom/gi) || [];
      termMatches.gnomCount += gnomMatches.length;
      if (gnomMatches.length > 0 && !(col === 'articles' && file === 'legendarium-matn-tarixi.md')) {
        termMatches.forbiddenGnomViolations.push(`${col}/${file} (${gnomMatches.length} occurrences)`);
      }

      termMatches.orkStraight += (text.match(/o'rk/gi) || []).length;
      termMatches.orkTurned += (text.match(/o\u02BBrk/gi) || []).length;
      termMatches.orkNoApos += (text.match(/\bork/gi) || []).length;

      termMatches.elfCount += (text.match(/elf/gi) || []).length;
      termMatches.tolkienCount += (text.match(/tolkien/gi) || []).length;
      termMatches.tolkinCount += (text.match(/tolkin/gi) || []).length;

      termMatches.khazadCount += (text.match(/khazad/gi) || []).length;
      termMatches.xazadCount += (text.match(/xazad/gi) || []).length;
      termMatches.khuzdulCount += (text.match(/khuzdul/gi) || []).length;
      termMatches.xuzdulCount += (text.match(/xuzdul/gi) || []).length;

      termMatches.theodenCount += (text.match(/th[eé]oden/gi) || []).length;
      termMatches.teodenCount += (text.match(/t[eé]oden/gi) || []).length;
      termMatches.thranduilCount += (text.match(/thranduil/gi) || []).length;
      termMatches.tranduilCount += (text.match(/\btranduil/gi) || []).length;
      termMatches.thingolCount += (text.match(/thingol/gi) || []).length;
      termMatches.tingolCount += (text.match(/\btingol/gi) || []).length;
    }
  }

  return termMatches;
}

// 3. Naming Conventions & Metadata Analysis
function auditNames() {
  const charDetails = [];
  const charDir = path.join(CONTENT, 'characters');
  if (fs.existsSync(charDir)) {
    for (const file of fs.readdirSync(charDir)) {
      if (!file.endsWith('.json')) continue;
      const data = JSON.parse(fs.readFileSync(path.join(charDir, file), 'utf8'));
      charDetails.push({
        id: data.id,
        name: data.name,
        original_name: data.original_name,
        race: data.race,
        sub_race: data.sub_race,
        culture: data.culture,
        textual_status: data.textual_status,
      });
    }
  }

  // Check places & elvish_name formatting
  const placeDetails = [];
  const invalidElvishNames = [];
  const placeDir = path.join(CONTENT, 'places');
  if (fs.existsSync(placeDir)) {
    for (const file of fs.readdirSync(placeDir)) {
      if (!file.endsWith('.json')) continue;
      const data = JSON.parse(fs.readFileSync(path.join(placeDir, file), 'utf8'));
      placeDetails.push({
        id: data.id,
        name: data.name,
        elvish_name: data.elvish_name,
        type: data.type,
        region: data.region,
        hasCoords: !!data.coordinates,
      });

      if (data.elvish_name) {
        // elvish_name must not have parentheses with descriptive glosses like (Temir Zindon), (Qora tilda), etc.
        if (/\(.*[a-zʻʼ].*\)/i.test(data.elvish_name)) {
          invalidElvishNames.push({
            file,
            elvish_name: data.elvish_name,
          });
        }
      }
    }
  }

  // Check peoples
  const peopleDetails = [];
  const peopleDir = path.join(CONTENT, 'peoples');
  if (fs.existsSync(peopleDir)) {
    for (const file of fs.readdirSync(peopleDir)) {
      if (!file.endsWith('.json')) continue;
      const data = JSON.parse(fs.readFileSync(path.join(peopleDir, file), 'utf8'));
      peopleDetails.push({
        id: data.id,
        name: data.name,
        race_category: data.race_category,
      });
    }
  }

  // Check languages
  const langDetails = [];
  const langDir = path.join(CONTENT, 'languages');
  if (fs.existsSync(langDir)) {
    for (const file of fs.readdirSync(langDir)) {
      if (!file.endsWith('.json')) continue;
      const data = JSON.parse(fs.readFileSync(path.join(langDir, file), 'utf8'));
      langDetails.push({
        id: data.id,
        name: data.name,
        family: data.family,
        writing_systems: data.writing_systems,
      });
    }
  }

  return { charDetails, placeDetails, peopleDetails, langDetails, invalidElvishNames };
}

// 4. Citation and Sources Audit
function auditCitations() {
  const booksDir = path.join(CONTENT, 'books');
  const existingBookSlugs = new Set();
  if (fs.existsSync(booksDir)) {
    for (const f of fs.readdirSync(booksDir)) {
      if (f.endsWith('.json')) existingBookSlugs.add(f.replace('.json', ''));
    }
  }

  const citationsByBook = {};
  const invalidBookSlugs = [];
  let totalCitations = 0;
  const statusCounts = {};

  for (const col of COLLECTIONS) {
    if (col === 'books') continue;
    const dir = path.join(CONTENT, col);
    if (!fs.existsSync(dir)) continue;

    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.json') && !file.endsWith('.md')) continue;
      const filePath = path.join(dir, file);
      let sources = [];
      let textualStatus = null;

      if (file.endsWith('.json')) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        sources = data.sources || [];
        textualStatus = data.textual_status;
      } else if (file.endsWith('.md')) {
        // Parse frontmatter
        const raw = fs.readFileSync(filePath, 'utf8');
        const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        if (match) {
          const fm = match[1];
          const bMatch = fm.match(/book_slug:\s*["']?([^"'\r\n]+)["']?/g);
          if (bMatch) {
            sources = bMatch.map((s) => ({
              book_slug: s.replace(/book_slug:\s*["']?/, '').replace(/["']$/, ''),
              chapter: '',
            }));
          }
        }
      }

      if (textualStatus) {
        statusCounts[textualStatus] = (statusCounts[textualStatus] || 0) + 1;
      }

      for (const s of sources) {
        totalCitations++;
        const b = s.book_slug;
        citationsByBook[b] = (citationsByBook[b] || 0) + 1;
        if (!existingBookSlugs.has(b)) {
          invalidBookSlugs.push({
            collection: col,
            file,
            book_slug: b,
          });
        }
      }
    }
  }

  return {
    existingBookSlugs: Array.from(existingBookSlugs),
    totalCitations,
    citationsByBook,
    invalidBookSlugs,
    statusCounts,
  };
}

// 5. Content Depth & Structure Analysis
function auditDepth() {
  const stats = {};

  for (const col of COLLECTIONS) {
    const dir = path.join(CONTENT, col);
    if (!fs.existsSync(dir)) continue;

    const items = [];
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.json') && !file.endsWith('.md')) continue;
      const filePath = path.join(dir, file);
      const raw = fs.readFileSync(filePath, 'utf8');

      let wordCount = 0;
      let summaryWords = 0;
      let sectionCount = 0;
      let sectionTitles = [];

      if (file.endsWith('.json')) {
        const data = JSON.parse(raw);
        const summary = data.summary || data.synopsis || '';
        summaryWords = summary.trim() ? summary.trim().split(/\s+/).length : 0;

        const sections =
          data.biography_sections ||
          data.description_sections ||
          data.detailed_sections ||
          data.cosmology_sections ||
          data.grammar_and_vocabulary_sections ||
          [];

        sectionCount = sections.length;
        sectionTitles = sections.map((s) => s.title);

        wordCount = raw.trim().split(/\s+/).length;
      } else {
        wordCount = raw.trim().split(/\s+/).length;
        summaryWords = 150; // Markdown articles are long form
        sectionCount = (raw.match(/^##\s+/gm) || []).length;
      }

      items.push({
        file,
        summaryWords,
        sectionCount,
        sectionTitles,
        wordCount,
      });
    }

    // Sort by wordCount asc
    items.sort((a, b) => a.wordCount - b.wordCount);
    stats[col] = items;
  }

  return stats;
}

function run() {
  console.log('Running Editorial Audit...');
  const orthography = auditOrthography();
  const terminology = auditTerminology();
  const names = auditNames();
  const citations = auditCitations();
  const depth = auditDepth();

  const report = {
    orthography,
    terminology,
    namesSample: {
      totalChars: names.charDetails.length,
      characters: names.charDetails,
      places: names.placeDetails,
      peoples: names.peopleDetails,
      languages: names.langDetails,
      invalidElvishNames: names.invalidElvishNames,
    },
    citations,
    depthSummary: Object.keys(depth).map((col) => ({
      col,
      total: depth[col].length,
      thinItems: depth[col].filter((i) => i.wordCount < 400 || i.sectionCount === 0),
      smallest: depth[col].slice(0, 5),
    })),
  };

  fs.writeFileSync(path.join(ROOT, 'scripts', 'editorial-audit-result.json'), JSON.stringify(report, null, 2), 'utf8');

  console.log('\n--- EDITORIAL AUDIT GATES ---');
  console.log(`1. Invalid Book Slugs: ${citations.invalidBookSlugs.length} ${citations.invalidBookSlugs.length === 0 ? '✓ PASS' : '✗ FAIL'}`);
  console.log(`2. Forbidden "gnom" violations: ${terminology.forbiddenGnomViolations.length} ${terminology.forbiddenGnomViolations.length === 0 ? '✓ PASS' : '✗ FAIL'}`);
  console.log(`3. Invalid elvish_name formatting: ${names.invalidElvishNames.length} ${names.invalidElvishNames.length === 0 ? '✓ PASS' : '✗ FAIL'}`);
  
  // Total places with wordCount < 400
  const thinPlaces = depth['places'].filter((i) => i.wordCount < 400);
  console.log(`4. Thin Places (< 400 words): ${thinPlaces.length} ${thinPlaces.length === 0 ? '✓ PASS' : '✗ FAIL'}`);

  // Total cosmology with wordCount < 400
  const thinCosmology = depth['cosmology'].filter((i) => i.wordCount < 400);
  console.log(`5. Thin Cosmology (< 400 words): ${thinCosmology.length} ${thinCosmology.length === 0 ? '✓ PASS' : '✗ FAIL'}`);

  console.log('\n✓ Editorial audit complete. Result written to scripts/editorial-audit-result.json');
}

run();