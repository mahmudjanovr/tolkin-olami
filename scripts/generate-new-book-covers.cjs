const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '../public/images/books');

const booksToGenerate = [
  {
    slug: 'the-book-of-lost-tales-1',
    title: 'THE BOOK OF\nLOST TALES',
    subtitle: 'PART ONE',
    author: 'J.R.R. TOLKIEN',
    editor: 'EDITED BY CHRISTOPHER TOLKIEN',
    bg: '#1a2639',
    accent: '#d4af37',
    vol: 'THE HISTORY OF MIDDLE-EARTH • VOL. I'
  },
  {
    slug: 'the-book-of-lost-tales-2',
    title: 'THE BOOK OF\nLOST TALES',
    subtitle: 'PART TWO',
    author: 'J.R.R. TOLKIEN',
    editor: 'EDITED BY CHRISTOPHER TOLKIEN',
    bg: '#16222f',
    accent: '#c0c0c0',
    vol: 'THE HISTORY OF MIDDLE-EARTH • VOL. II'
  },
  {
    slug: 'morgoths-ring',
    title: "MORGOTH'S\nRING",
    subtitle: 'THE LATER SILMARILLION • PART ONE',
    author: 'J.R.R. TOLKIEN',
    editor: 'EDITED BY CHRISTOPHER TOLKIEN',
    bg: '#1f1618',
    accent: '#e63946',
    vol: 'THE HISTORY OF MIDDLE-EARTH • VOL. X'
  },
  {
    slug: 'the-war-of-the-jewels',
    title: 'THE WAR OF\nTHE JEWELS',
    subtitle: 'THE LATER SILMARILLION • PART TWO',
    author: 'J.R.R. TOLKIEN',
    editor: 'EDITED BY CHRISTOPHER TOLKIEN',
    bg: '#241734',
    accent: '#ffd166',
    vol: 'THE HISTORY OF MIDDLE-EARTH • VOL. XI'
  },
  {
    slug: 'the-peoples-of-middle-earth',
    title: 'THE PEOPLES OF\nMIDDLE-EARTH',
    subtitle: '',
    author: 'J.R.R. TOLKIEN',
    editor: 'EDITED BY CHRISTOPHER TOLKIEN',
    bg: '#132a13',
    accent: '#ddb892',
    vol: 'THE HISTORY OF MIDDLE-EARTH • VOL. XII'
  },
  {
    slug: 'letters-from-father-christmas',
    title: 'LETTERS FROM\nFATHER CHRISTMAS',
    subtitle: '',
    author: 'J.R.R. TOLKIEN',
    editor: 'EDITED BY BAILLIE TOLKIEN',
    bg: '#6b1110',
    accent: '#f4e9cd',
    vol: 'COLLECTED ILLUSTRATED LETTERS 1920–1943'
  },
  {
    slug: 'beowulf-a-translation-and-commentary',
    title: 'BEOWULF',
    subtitle: 'A TRANSLATION AND COMMENTARY',
    author: 'J.R.R. TOLKIEN',
    editor: 'EDITED BY CHRISTOPHER TOLKIEN',
    bg: '#2b2118',
    accent: '#e9c46a',
    vol: 'TOGETHER WITH SELLIC SPELL'
  },
  {
    slug: 'jrr-tolkien-a-biography',
    title: 'J.R.R. TOLKIEN',
    subtitle: 'A BIOGRAPHY',
    author: 'HUMPHREY CARPENTER',
    editor: 'THE AUTHORIZED BIOGRAPHY',
    bg: '#0f2027',
    accent: '#48cae4',
    vol: 'DRAWING ON UNPUBLISHED LETTERS &amp; DIARIES'
  }
];

async function generateCovers() {
  for (const b of booksToGenerate) {
    const titleLines = b.title.split('\n');
    const titleSvg = titleLines.map((line, idx) => 
      `<text x="300" y="${330 + (idx * 52)}" text-anchor="middle" font-family="serif" font-weight="bold" font-size="38" fill="${b.accent}" letter-spacing="3">${line}</text>`
    ).join('\n');

    const svg = `
    <svg width="600" height="900" viewBox="0 0 600 900" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad-${b.slug}" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#3d405b" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0.8"/>
        </radialGradient>
      </defs>
      
      <!-- Background -->
      <rect width="600" height="900" fill="${b.bg}"/>
      <rect width="600" height="900" fill="url(#grad-${b.slug})"/>
      
      <!-- Outer Border -->
      <rect x="35" y="35" width="530" height="830" fill="none" stroke="${b.accent}" stroke-width="2" opacity="0.6"/>
      <rect x="45" y="45" width="510" height="810" fill="none" stroke="${b.accent}" stroke-width="1" opacity="0.4"/>
      
      <!-- Header / Series -->
      <text x="300" y="100" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="14" fill="${b.accent}" opacity="0.8" letter-spacing="3">${b.vol}</text>
      <line x1="120" y1="120" x2="480" y2="120" stroke="${b.accent}" stroke-width="1" opacity="0.3"/>

      <!-- Author -->
      <text x="300" y="210" text-anchor="middle" font-family="serif" font-weight="bold" font-size="32" fill="#ffffff" letter-spacing="4">${b.author}</text>
      <line x1="220" y1="235" x2="380" y2="235" stroke="${b.accent}" stroke-width="2" opacity="0.8"/>

      <!-- Title -->
      ${titleSvg}

      <!-- Subtitle -->
      ${b.subtitle ? `<text x="300" y="${340 + (titleLines.length * 52)}" text-anchor="middle" font-family="sans-serif" font-weight="500" font-size="15" fill="#f0f0f0" letter-spacing="2" opacity="0.9">${b.subtitle}</text>` : ''}

      <!-- Central Emblem ornament -->
      <circle cx="300" cy="580" r="45" fill="none" stroke="${b.accent}" stroke-width="1.5" opacity="0.5"/>
      <polygon points="300,550 315,580 300,610 285,580" fill="none" stroke="${b.accent}" stroke-width="1.5" opacity="0.7"/>

      <!-- Editor / Footer -->
      <line x1="120" y1="740" x2="480" y2="740" stroke="${b.accent}" stroke-width="1" opacity="0.3"/>
      <text x="300" y="775" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="14" fill="${b.accent}" letter-spacing="2">${b.editor}</text>
      <text x="300" y="820" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#a0a0a0" letter-spacing="1.5">TOLKIEN OLAMI BIBLIOGRAFIK KANONI</text>
    </svg>
    `;

    const dest = path.join(outDir, `${b.slug}.webp`);
    await sharp(Buffer.from(svg))
      .webp({ quality: 90 })
      .toFile(dest);
    console.log(`Generated cover: ${dest}`);
  }
}

generateCovers().catch(err => {
  console.error(err);
  process.exit(1);
});
