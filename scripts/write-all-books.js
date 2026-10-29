// scripts/write-all-books.js
import fs from 'node:fs';
import path from 'node:path';
import { BOOKS_PART_1 } from './data-books-part1.js';
import { BOOKS_PART_2 } from './data-books-part2.js';

const allBooks = [...BOOKS_PART_1, ...BOOKS_PART_2];
const targetDir = path.resolve('src/content/books');

fs.mkdirSync(targetDir, { recursive: true });

let writtenCount = 0;
for (const book of allBooks) {
  const filePath = path.join(targetDir, `${book.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(book, null, 2), 'utf-8');
  writtenCount++;
  console.log(`✓ [books] ${book.id}.json yozildi (${book.title_uz})`);
}

console.log(`\nJami yozilgan kitoblar soni: ${writtenCount} ta`);
