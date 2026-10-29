import { describe, it, expect } from 'vitest';

/**
 * HEX rangni sRGB (0-1) kanal massiviga aylantiradi
 */
function hexToRgb(hex: string): [number, number, number] {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;
  return [r, g, b];
}

/**
 * WCAG 2.1 nisbiy yorqinlik (relative luminance) hisoblash
 */
function getLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex);
  const transform = (c: number) =>
    c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

  const rLum = transform(r);
  const gLum = transform(g);
  const bLum = transform(b);

  return 0.2126 * rLum + 0.7152 * gLum + 0.0722 * bLum;
}

/**
 * Ikki rang oʻrtasidagi WCAG 2.1 kontrast nisbatini hisoblash
 */
function getContrastRatio(hex1: string, hex2: string): number {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

describe('WCAG 2.1 Rang Tokenlari Matematik Kontrasti', () => {
  describe('Light Rejimi (Fon: #F7F5F0)', () => {
    const bgLight = '#F7F5F0';

    it('--color-text-primary (#1A1816) WCAG AAA (>= 7:1) mezoniga javob beradi', () => {
      const ratio = getContrastRatio('#1A1816', bgLight);
      expect(ratio).toBeGreaterThanOrEqual(7.0);
      expect(ratio).toBeCloseTo(16.25, 1);
    });

    it('--color-text-secondary (#4A4641) WCAG AAA (>= 7:1) mezoniga javob beradi', () => {
      const ratio = getContrastRatio('#4A4641', bgLight);
      expect(ratio).toBeGreaterThanOrEqual(7.0);
      expect(ratio).toBeCloseTo(8.59, 1);
    });

    it('--color-text-muted (#706B63) toʻgʻrilangan tokeni WCAG AA (>= 4.5:1) mezoniga toʻliq javob beradi', () => {
      const ratio = getContrastRatio('#706B63', bgLight);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
      expect(ratio).toBeCloseTo(4.85, 1);
    });

    it('--color-link (#7A5E24) WCAG AA (>= 4.5:1) mezoniga javob beradi', () => {
      const ratio = getContrastRatio('#7A5E24', bgLight);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
      expect(ratio).toBeCloseTo(5.58, 1);
    });

    it('--color-accent-gold (#9E7E38) UI komponentlari va chegaralar uchun (>= 3:1) mezoniga javob beradi', () => {
      const ratio = getContrastRatio('#9E7E38', bgLight);
      expect(ratio).toBeGreaterThanOrEqual(3.0);
      expect(ratio).toBeCloseTo(3.51, 1);
    });
  });

  describe('Night Rejimi (Fon: #0F1715)', () => {
    const bgNight = '#0F1715';

    it('--color-text-primary (#E3DEC3) WCAG AAA (>= 7:1) mezoniga javob beradi', () => {
      const ratio = getContrastRatio('#E3DEC3', bgNight);
      expect(ratio).toBeGreaterThanOrEqual(7.0);
      expect(ratio).toBeCloseTo(13.44, 1);
    });

    it('--color-text-secondary (#B5B099) WCAG AAA (>= 7:1) mezoniga javob beradi', () => {
      const ratio = getContrastRatio('#B5B099', bgNight);
      expect(ratio).toBeGreaterThanOrEqual(7.0);
      expect(ratio).toBeCloseTo(8.35, 1);
    });

    it('--color-text-muted (#8E8A78) WCAG AA (>= 4.5:1) mezoniga javob beradi', () => {
      const ratio = getContrastRatio('#8E8A78', bgNight);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
      expect(ratio).toBeCloseTo(5.25, 1);
    });

    it('--color-link (#D4B36A) WCAG AAA (>= 7:1) mezoniga javob beradi', () => {
      const ratio = getContrastRatio('#D4B36A', bgNight);
      expect(ratio).toBeGreaterThanOrEqual(7.0);
      expect(ratio).toBeCloseTo(9.06, 1);
    });

    it('--color-accent-gold (#C5A059) WCAG AAA (>= 7:1 yoki >= 4.5:1) mezoniga javob beradi', () => {
      const ratio = getContrastRatio('#C5A059', bgNight);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
      expect(ratio).toBeCloseTo(7.41, 1);
    });
  });
});
