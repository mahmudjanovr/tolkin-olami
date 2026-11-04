const fs = require('fs');
const path = require('path');

const tsContent = fs.readFileSync('src/data/character-portraits.ts', 'utf-8');
const manifest = require('../src/data/character-production-manifest.json');

const integrated = manifest.filter(m => m.portraitStatus === 'INTEGRATED_VERIFIED');
console.log('Total characters in manifest:', manifest.length);
console.log('Integrated characters count:', integrated.length);
console.log('Pending quota characters count:', manifest.length - integrated.length);

const missingInTs = [];
for (const char of integrated) {
  const pattern1 = "'" + char.id + "':";
  const pattern2 = char.id + ":";
  if (!tsContent.includes(pattern1) && !tsContent.includes(pattern2)) {
    missingInTs.push(char.id);
  }
}
console.log('Missing in character-portraits.ts:', missingInTs);

// Check that each integrated character has image in content JSON
const missingInJson = [];
for (const char of integrated) {
  const jsonPath = path.resolve('src/content/characters', `${char.id}.json`);
  if (!fs.existsSync(jsonPath)) {
    missingInJson.push({ id: char.id, error: 'File not found' });
    continue;
  }
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  if (!data.image || !data.image.src || !data.image.src_thumb) {
    missingInJson.push({ id: char.id, error: 'Missing image metadata' });
  }
}
console.log('Missing in content JSONs:', missingInJson);

// Check that no pending character has a broken image reference
const pendingWithBrokenImage = [];
const pending = manifest.filter(m => m.portraitStatus !== 'INTEGRATED_VERIFIED');
for (const char of pending) {
  const jsonPath = path.resolve('src/content/characters', `${char.id}.json`);
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  if (data.image) {
    pendingWithBrokenImage.push({ id: char.id, image: data.image });
  }
}
console.log('Pending characters with unexpected image field:', pendingWithBrokenImage);
