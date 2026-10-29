import { describe, it, expect } from 'vitest';
import {
  NAV_GROUPS,
  isRouteActive,
  isGroupActive,
  getActiveItem,
  normalizePath,
} from '../../src/data/navigation';

describe('Tolkien Olami — Navigatsiya Axborot Arxitekturasi (navigation.ts)', () => {
  it('Aynan 3 ta mantiqiy guruhga ega boʻlishi kerak', () => {
    expect(NAV_GROUPS).toHaveLength(3);
    const groupIds = NAV_GROUPS.map((g) => g.id);
    expect(groupIds).toEqual(['legendarium', 'world', 'history']);

    const titles = NAV_GROUPS.map((g) => g.title);
    expect(titles).toEqual(['The Legendarium', 'The World', 'History & Scholarship']);
  });

  it('The Legendarium guruhida 3 ta kanonik marshrut mavjud', () => {
    const legendarium = NAV_GROUPS.find((g) => g.id === 'legendarium');
    expect(legendarium).toBeDefined();

    const items = legendarium!.items;
    expect(items).toHaveLength(3);
    expect(items.map((i) => i.href)).toEqual(['/', '/kitoblar/', '/qahramonlar/']);
    expect(items.map((i) => i.label)).toEqual(['Bosh sahifa', 'Kitoblar', 'Qahramonlar']);
  });

  it('The World guruhida 4 ta kanonik marshrut mavjud', () => {
    const world = NAV_GROUPS.find((g) => g.id === 'world');
    expect(world).toBeDefined();

    const items = world!.items;
    expect(items).toHaveLength(4);
    expect(items.map((i) => i.href)).toEqual([
      '/xaritalar/',
      '/nasabnomalar/',
      '/olam/',
      '/xalqlar-va-tillar/',
    ]);
    expect(items.map((i) => i.label)).toEqual([
      'Xaritalar',
      'Nasabnomalar',
      'Olam',
      'Xalqlar va tillar',
    ]);
  });

  it('History & Scholarship guruhida 3 ta kanonik marshrut mavjud', () => {
    const history = NAV_GROUPS.find((g) => g.id === 'history');
    expect(history).toBeDefined();

    const items = history!.items;
    expect(items).toHaveLength(3);
    expect(items.map((i) => i.href)).toEqual(['/tarix/', '/maqolalar/', '/tolkien/']);
    expect(items.map((i) => i.label)).toEqual(['Tarix', 'Maqolalar', 'Tolkien']);
  });

  it('Har bir guruh ilmiy iqtibos va oʻzbekcha tahririyat tavsifiga ega', () => {
    for (const group of NAV_GROUPS) {
      expect(group.subheading).toBeTruthy();
      expect(group.description).toBeTruthy();
      expect(group.quote.text).toBeTruthy();
      expect(group.quote.source).toBeTruthy();
      for (const item of group.items) {
        expect(item.id).toBeTruthy();
        expect(item.label).toBeTruthy();
        expect(item.sublabel).toBeTruthy();
        expect(item.description).toBeTruthy();
        expect(item.icon).toBeTruthy();
      }
    }
  });

  describe('Marshrut faolligini aniqlash (isRouteActive & isGroupActive)', () => {
    it('Bosh sahifa (/) faqat aynan / boʻlganda faol boʻladi', () => {
      expect(isRouteActive('/', '/')).toBe(true);
      expect(isRouteActive('/', '')).toBe(true);
      expect(isRouteActive('/', '/qahramonlar/')).toBe(false);
      expect(isRouteActive('/', '/kitoblar/silmarillion/')).toBe(false);
    });

    it('Katalog va ichki detail marshrutlar toʻgʻri faol belgilanadi', () => {
      // Katalog sahifasi
      expect(isRouteActive('/qahramonlar/', '/qahramonlar/')).toBe(true);
      // Detail sahifa
      expect(isRouteActive('/qahramonlar/', '/qahramonlar/feanor/')).toBe(true);
      expect(isRouteActive('/maqolalar/', '/maqolalar/olim-va-boqiylik-mavzusi/')).toBe(true);
      // Nomuvofiq marshrut
      expect(isRouteActive('/qahramonlar/', '/xaritalar/')).toBe(false);
    });

    it('Trailing slash mavjud boʻlmagan holatlarni toʻgʻri normallashtiradi', () => {
      expect(normalizePath('/qahramonlar')).toBe('/qahramonlar/');
      expect(normalizePath('/')).toBe('/');
      expect(isRouteActive('/qahramonlar/', '/qahramonlar')).toBe(true);
    });

    it('Guruh faolligi (isGroupActive) ichki elementlar boʻyicha toʻgʻri hisoblanadi', () => {
      const legendarium = NAV_GROUPS.find((g) => g.id === 'legendarium')!;
      const world = NAV_GROUPS.find((g) => g.id === 'world')!;
      const history = NAV_GROUPS.find((g) => g.id === 'history')!;

      // Bosh sahifa
      expect(isGroupActive(legendarium, '/')).toBe(true);
      expect(isGroupActive(world, '/')).toBe(false);
      expect(isGroupActive(history, '/')).toBe(false);

      // Qahramon detail sahifasi
      expect(isGroupActive(legendarium, '/qahramonlar/beren/')).toBe(true);
      expect(isGroupActive(world, '/qahramonlar/beren/')).toBe(false);

      // Xaritalar
      expect(isGroupActive(world, '/xaritalar/')).toBe(true);
      expect(isGroupActive(legendarium, '/xaritalar/')).toBe(false);

      // Maqolalar
      expect(isGroupActive(history, '/maqolalar/feanor-qasamyodi-tahlili/')).toBe(true);
    });

    it('getActiveItem joriy sahifaga mos elementni qaytaradi', () => {
      expect(getActiveItem('/')?.id).toBe('home');
      expect(getActiveItem('/qahramonlar/feanor/')?.id).toBe('qahramonlar');
      expect(getActiveItem('/xaritalar/')?.id).toBe('xaritalar');
      expect(getActiveItem('/tolkien/')?.id).toBe('tolkien');
    });
  });
});
