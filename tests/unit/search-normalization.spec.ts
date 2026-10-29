import { describe, it, expect } from 'vitest';
import { normalizeSearchQuery } from '../../src/utils/search';

describe('Search Normalization Utility (normalizeSearchQuery)', () => {
  it("O'zbekcha o' va g' harflaridagi barcha turdagi apostroflarni bir xil shaklga keltiradi", () => {
    const baseline = normalizeSearchQuery("o'g'ri");
    expect(normalizeSearchQuery("oʻgʻri")).toBe(baseline);
    expect(normalizeSearchQuery("oʼgʼri")).toBe(baseline);
    expect(normalizeSearchQuery("o‘g‘ri")).toBe(baseline);
    expect(normalizeSearchQuery("o`g`ri")).toBe(baseline);
  });

  it('Tolkien ismlaridagi trema (diaeresis) belgilarini tozalaydi', () => {
    expect(normalizeSearchQuery('Fëanor')).toBe('feanor');
    expect(normalizeSearchQuery('Eärendil')).toBe('earendil');
    expect(normalizeSearchQuery('Alqualondë')).toBe('alqualonde');
    expect(normalizeSearchQuery('Manwë')).toBe('manwe');
  });

  it('Akut (acute accent) va sirkumfleks (circumflex) belgilarini tozalaydi', () => {
    expect(normalizeSearchQuery('Númenor')).toBe('numenor');
    expect(normalizeSearchQuery('Barad-dûr')).toBe('barad-dur');
    expect(normalizeSearchQuery('Khazad-dûm')).toBe('khazad-dum');
    expect(normalizeSearchQuery('Lórien')).toBe('lorien');
    expect(normalizeSearchQuery('Túrin')).toBe('turin');
  });

  it('Tilda va maxsus fonetik harflarni tozalaydi', () => {
    expect(normalizeSearchQuery('Ñoldor')).toBe('noldor');
  });

  it('Boʻsh joylar va boʻsh soʻrovlarni xavfsiz boshqaradi', () => {
    expect(normalizeSearchQuery('')).toBe('');
    expect(normalizeSearchQuery('   ')).toBe('');
    // @ts-expect-error test non-string input safety
    expect(normalizeSearchQuery(null)).toBe('');
    // @ts-expect-error test non-string input safety
    expect(normalizeSearchQuery(undefined)).toBe('');
  });

  it('Asl kiritilgan matn oʻzgarishsiz qoladi (Display Fidelity)', () => {
    const originalText = 'Fëanor va Oʻrta-yer';
    const normalized = normalizeSearchQuery(originalText);
    expect(normalized).toBe("feanor va o'rta-yer");
    expect(originalText).toBe('Fëanor va Oʻrta-yer');
  });
});
