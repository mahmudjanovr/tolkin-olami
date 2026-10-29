import { describe, it, expect } from 'vitest';
import feanorData from '../../src/content/characters/feanor.json';
import { characterSchema } from '../../src/content/schemas';

describe('Route Resolution and IA Navigation Verification', () => {
  it('Fëanor qahramoni maʼlumotlari toʻgʻri kanonik marshrutga ega', () => {
    const parseResult = characterSchema.safeParse(feanorData);
    expect(parseResult.success).toBe(true);

    if (parseResult.success) {
      const slug = parseResult.data.id;
      expect(slug).toBe('feanor');
      const route = `/qahramonlar/${slug}/`;
      expect(route).toBe('/qahramonlar/feanor/');
    }
  });

  it('11 ta asosiy axborot arxitekturasi marshrutlari toʻgʻri formatlangan', () => {
    const canonicalRoutes = [
      '/',
      '/qahramonlar/',
      '/maqolalar/',
      '/xaritalar/',
      '/nasabnomalar/',
      '/tarix/',
      '/kitoblar/',
      '/olam/',
      '/xalqlar-va-tillar/',
      '/tolkien/',
      '/qidiruv/',
    ];

    canonicalRoutes.forEach((route) => {
      expect(route.startsWith('/')).toBe(true);
      if (route !== '/') {
        expect(route.endsWith('/')).toBe(true);
      }
    });

    expect(canonicalRoutes).toHaveLength(11);
  });
});
