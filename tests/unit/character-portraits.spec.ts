import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { CHARACTER_PORTRAITS, getCharacterPortrait } from '@/data/character-portraits';
import { characterImageSchema } from '@/content/schemas';

describe('Qahramon Portretlari va Illyustratsiya Tizimi (Milestone 6)', () => {
  const CANONICAL_CHARACTERS = [
    'feanor',
    'fingolfin',
    'finwe',
    'beren',
    'turin',
    'aragorn',
    'galadriel',
    'gil-galad',
  ];

  describe('Manifest va Registr Butunligi', () => {
    it('Kamida 35 ta qahramon uchun toʻliq tasdiqlangan portret manifesti mavjud', () => {
      expect(Object.keys(CHARACTER_PORTRAITS).length).toBeGreaterThanOrEqual(35);
      for (const id of CANONICAL_CHARACTERS) {
        expect(CHARACTER_PORTRAITS[id], `Portret topilmadi: ${id}`).toBeDefined();
        expect(CHARACTER_PORTRAITS[id]!.characterId).toBe(id);
      }
    });

    it('Ishlab chiqarish manifesti (character-production-manifest.json) barcha 81 ta qahramonni toʻliq qamrab olgan', () => {
      const manifestPath = path.resolve(process.cwd(), 'src/data/character-production-manifest.json');
      expect(fs.existsSync(manifestPath), 'character-production-manifest.json topilmadi').toBe(true);

      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
      expect(Array.isArray(manifest)).toBe(true);
      expect(manifest.length).toBe(81);

      for (const item of manifest) {
        expect(item.id).toBeDefined();
        expect(item.name).toBeDefined();
        expect(['A', 'B', 'C']).toContain(item.adaptationCategory);
        expect(['INTEGRATED_VERIFIED', 'PENDING_GENERATION_QUOTA']).toContain(item.portraitStatus);
        expect(item.productionPrompt.length).toBeGreaterThan(30);
      }
    });

    it('Har bir portret yozuvi mukammal akademik metadata va litsenziyaga ega', () => {
      for (const [id, portrait] of Object.entries(CHARACTER_PORTRAITS)) {
        expect(portrait.characterId).toBe(id);
        expect(portrait.src).toMatch(/^\/images\/characters\/[a-z0-9-]+\.webp$/);
        expect(portrait.srcThumb).toMatch(/^\/images\/characters\/[a-z0-9-]+-thumb\.webp$/);

        // O'zbekcha alt matni va akademik izoh
        expect(portrait.alt.trim().length, `Alt matn qisqa: ${id}`).toBeGreaterThanOrEqual(20);
        expect(portrait.caption.trim().length, `Caption qisqa: ${id}`).toBeGreaterThanOrEqual(15);
        expect(portrait.visualCanonNotes.trim().length, `Visual canon notes qisqa: ${id}`).toBeGreaterThanOrEqual(20);
        expect(portrait.sourceNotes.trim().length, `Source notes qisqa: ${id}`).toBeGreaterThanOrEqual(20);

        // Provenance va litsenziya
        expect([
          'original_textual_visualization',
          'original_adaptation_derivative',
          'scholarly_original_illustration',
          'adaptation_reference_illustration',
          'editorial_asset',
        ]).toContain(portrait.provenance);
        expect(portrait.license.trim().length).toBeGreaterThan(10);
      }
    });

    it('getCharacterPortrait() mavjud qahramon uchun obyekt, nomaʼlum id uchun null qaytaradi', () => {
      const feanor = getCharacterPortrait('feanor');
      expect(feanor).not.toBeNull();
      expect(feanor?.characterId).toBe('feanor');

      const nonExistent = getCharacterPortrait('non-existent-character-id');
      expect(nonExistent).toBeNull();
    });
  });

  describe('Fizik Asset Fayllari Mavjudligi (WebP & Thumb)', () => {
    it('Har bir qahramon uchun toʻliq (600x800) va kichik (300x400) WebP fayllari public katalogida mavjud', () => {
      for (const [id, portrait] of Object.entries(CHARACTER_PORTRAITS)) {
        const fullPath = path.resolve(process.cwd(), 'public', portrait.src.replace(/^\//, ''));
        const thumbPath = path.resolve(process.cwd(), 'public', portrait.srcThumb.replace(/^\//, ''));

        expect(fs.existsSync(fullPath), `Asosiy WebP fayli topilmadi: ${fullPath} (${id})`).toBe(true);
        expect(fs.existsSync(thumbPath), `Thumb WebP fayli topilmadi: ${thumbPath} (${id})`).toBe(true);

        const fullStats = fs.statSync(fullPath);
        const thumbStats = fs.statSync(thumbPath);

        // Fayl hajmi 0 dan katta va oqilona chegara ichida
        expect(fullStats.size).toBeGreaterThan(1024);
        expect(thumbStats.size).toBeGreaterThan(1024);
        expect(thumbStats.size).toBeLessThan(fullStats.size); // Thumb to'liq fayldan kichik bo'lishi kerak
      }
    });
  });

  describe('Content JSON Fayllaridagi Image Obyektlari Validatsiyasi', () => {
    it('Barcha 8 ta qahramon JSON faylida image maydoni characterImageSchema bilan toʻliq mos keladi', () => {
      for (const id of CANONICAL_CHARACTERS) {
        const filePath = path.resolve(process.cwd(), 'src/content/characters', `${id}.json`);
        expect(fs.existsSync(filePath), `JSON fayli topilmadi: ${filePath}`).toBe(true);

        const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        expect(content.image, `${id}.json da image maydoni yo'q`).toBeDefined();

        const parseResult = characterImageSchema.safeParse(content.image);
        expect(parseResult.success, `${id}.json dagi image maydoni sxemaga mos kelmadi`).toBe(true);

        if (parseResult.success) {
          expect(parseResult.data.src).toBe(CHARACTER_PORTRAITS[id]!.src);
          expect(parseResult.data.src_thumb).toBe(CHARACTER_PORTRAITS[id]!.srcThumb);
        }
      }
    });
  });
});
