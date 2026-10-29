import { describe, it, expect } from 'vitest';
import { buildBreadcrumbs, SECTION_NAMES } from '../../src/utils/breadcrumbs';

describe('Breadcrumbs Utility (buildBreadcrumbs)', () => {
  it("Bosh sahifani doimo 1-o'rindagi element sifatida qo'shadi", () => {
    const crumbs = buildBreadcrumbs([{ label: 'Qahramonlar', href: '/qahramonlar/' }]);
    expect(crumbs).toHaveLength(2);
    expect(crumbs[0]!).toEqual({
      label: 'Bosh sahifa',
      href: '/',
      position: 1,
      isCurrent: false,
    });
    expect(crumbs[1]!).toEqual({
      label: 'Qahramonlar',
      href: undefined,
      position: 2,
      isCurrent: true,
    });
  });

  it("Ko'p bosqichli non ushoqlari ierarxiyasini to'g'ri shakllantiradi", () => {
    const crumbs = buildBreadcrumbs([
      { label: 'Qahramonlar', href: '/qahramonlar/' },
      { label: 'Fëanor' },
    ]);

    expect(crumbs).toHaveLength(3);
    const first = crumbs[0]!;
    const second = crumbs[1]!;
    const third = crumbs[2]!;

    expect(first.label).toBe('Bosh sahifa');
    expect(first.href).toBe('/');
    expect(first.isCurrent).toBe(false);

    expect(second.label).toBe('Qahramonlar');
    expect(second.href).toBe('/qahramonlar/');
    expect(second.isCurrent).toBe(false);

    expect(third.label).toBe('Fëanor');
    expect(third.href).toBeUndefined();
    expect(third.isCurrent).toBe(true);
    expect(third.position).toBe(3);
  });

  it('11 ta IA boʻlim nomlari lugʻatida barcha asosiy boʻlimlar mavjud', () => {
    expect(SECTION_NAMES['qahramonlar']).toBe('Qahramonlar');
    expect(SECTION_NAMES['xaritalar']).toBe('Xaritalar va Joylar');
    expect(SECTION_NAMES['nasabnomalar']).toBe('Nasabnomalar');
    expect(SECTION_NAMES['tarix']).toBe('Tarix va Xronologiya');
    expect(SECTION_NAMES['kitoblar']).toBe('Kitoblar va Bibliografiya');
    expect(SECTION_NAMES['olam']).toBe('Arda va Kosmologiya');
    expect(SECTION_NAMES['xalqlar-va-tillar']).toBe('Xalqlar va Tillar');
    expect(SECTION_NAMES['tolkien']).toBe('J.R.R. Tolkien');
    expect(SECTION_NAMES['maqolalar']).toBe('Ilmiy Maqolalar');
    expect(SECTION_NAMES['qidiruv']).toBe('Qidiruv');
  });
});
