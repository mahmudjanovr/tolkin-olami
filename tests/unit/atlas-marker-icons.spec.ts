import { describe, expect, it } from 'vitest';
import {
  CARTOGRAPHIC_ICONS,
  type CartographicIconType,
  getCartographicIcon,
  getGeographicLabelsForRegion,
  getPlaceIconSvg,
  getPlaceMinZoom,
  getPlacePreferredDirection,
  getPlacePriority,
  getPlaceShortLabel,
  mapPlaceToIconType,
  PLACE_ID_ICON_OVERRIDES,
  PLACE_TYPE_DEFAULT_MAP,
} from '../../src/utils/atlas/marker-icons';

describe('Atlas Cartographic Marker Icons (atlas-marker-icons.spec.ts)', () => {
  const expectedIconTypes: CartographicIconType[] = [
    'capital',
    'fortress',
    'elven_refuge',
    'haven',
    'ruin',
    'tower',
    'settlement',
    'landmark',
    'monument',
    'falls',
    'gate',
    'marsh',
    'battle',
  ];

  describe('1. Cartographic Icon Registry & SVG Integrity', () => {
    it('Barcha 13 ta kartografik vektor SVG ikonkalar roʻyxatdan oʻtgan boʻlishi kerak', () => {
      expect(Object.keys(CARTOGRAPHIC_ICONS)).toHaveLength(13);
      for (const type of expectedIconTypes) {
        expect(CARTOGRAPHIC_ICONS[type]).toBeDefined();
        expect(typeof CARTOGRAPHIC_ICONS[type]).toBe('string');
      }
    });

    it('Har bir ikonka toʻgʻri SVG sintaksisi va a11y atributlariga ega boʻlishi kerak', () => {
      for (const [type, svg] of Object.entries(CARTOGRAPHIC_ICONS)) {
        expect(expectedIconTypes).toContain(type as CartographicIconType);
        expect(svg.startsWith('<svg')).toBe(true);
        expect(svg.endsWith('</svg>')).toBe(true);
        expect(svg).toContain('xmlns="http://www.w3.org/2000/svg"');
        expect(svg).toContain('viewBox="0 0 24 24"');
        expect(svg).toContain('aria-hidden="true"');
        expect(svg).toContain('focusable="false"');
        // Hech qanday emoji yoki beqaror belgilar bo'lmasligi kerak
        expect(svg).not.toMatch(/[\u{1F300}-\u{1F9FF}]/u);
      }
    });

    it('Nomaʼlum ikonka soʻralganda xavfsiz "settlement" zaxira ikonkasi qaytishi kerak', () => {
      const fallback = getCartographicIcon('nomaʼlum_tur_123');
      expect(fallback).toBe(CARTOGRAPHIC_ICONS.settlement);
    });
  });

  describe('2. Place ID Overrides va Schema Type Mapping', () => {
    it('Lugʻatlar toʻgʻri eʼlon qilingan boʻlishi kerak', () => {
      expect(PLACE_ID_ICON_OVERRIDES).toBeDefined();
      expect(PLACE_TYPE_DEFAULT_MAP).toBeDefined();
    });

    it('Kanonik maskanlar uchun maxsus ID override toʻgʻri ishlashi kerak', () => {
      expect(mapPlaceToIconType({ id: 'barad-dur', type: 'qalʼa' })).toBe('tower');
      expect(mapPlaceToIconType({ id: 'gondolin', type: 'shahar' })).toBe('capital');
      expect(mapPlaceToIconType({ id: 'minas-tirith', type: 'shahar' })).toBe('capital');
      expect(mapPlaceToIconType({ id: 'rivendell', type: 'qalʼa' })).toBe('elven_refuge');
      expect(mapPlaceToIconType({ id: 'nargothrond', type: 'qalʼa' })).toBe('elven_refuge');
      expect(mapPlaceToIconType({ id: 'menegroth', type: 'shahar' })).toBe('elven_refuge');
      expect(mapPlaceToIconType({ id: 'michel-delving', type: 'shahar' })).toBe('capital');
      expect(mapPlaceToIconType({ id: 'brandywine-bridge', type: 'qalʼa' })).toBe('gate');
      expect(mapPlaceToIconType({ id: 'buckland', type: 'oʻlka' })).toBe('landmark');
      expect(mapPlaceToIconType({ id: 'tuckborough', type: 'shahar' })).toBe('settlement');
      expect(mapPlaceToIconType({ id: 'bywater', type: 'shahar' })).toBe('settlement');
      expect(mapPlaceToIconType({ id: 'hobbiton', type: 'shahar' })).toBe('settlement');
      expect(mapPlaceToIconType({ id: 'bree', type: 'shahar' })).toBe('settlement');
      expect(mapPlaceToIconType({ id: 'amon-sul', type: 'qalʼa' })).toBe('tower');
      expect(mapPlaceToIconType({ id: 'ered-luin', type: 'togʻ' })).toBe('landmark');
    });

    it('Standart toponim turlari boʻyicha toʻgʻri xaritalanishi kerak', () => {
      expect(mapPlaceToIconType({ id: 'oddiy-shahar', type: 'shahar' })).toBe('settlement');
      expect(mapPlaceToIconType({ id: 'katta-qirollik', type: 'qirollik' })).toBe('capital');
      expect(mapPlaceToIconType({ id: 'chegara-qala', type: 'qalʼa' })).toBe('fortress');
      expect(mapPlaceToIconType({ id: 'erebor-togi', type: 'togʻ' })).toBe('landmark');
      expect(mapPlaceToIconType({ id: 'anduin-daryosi', type: 'daryo' })).toBe('falls');
      expect(mapPlaceToIconType({ id: 'doriath-olkasi', type: 'oʻlka' })).toBe('landmark');
    });

    it('Nomaʼlum tipdagi maskanlar uchun zaxira settlement turi olinishi kerak', () => {
      expect(mapPlaceToIconType({ id: 'x-obyekt', type: 'mavhum_tur' as any })).toBe('settlement');
    });

    it('getPlaceIconSvg toʻgʻridan-toʻgʻri haqiqiy SVG satrini qaytarishi kerak', () => {
      const baradDurSvg = getPlaceIconSvg({ id: 'barad-dur', type: 'qalʼa' });
      expect(baradDurSvg).toBe(CARTOGRAPHIC_ICONS.tower);

      const gondolinSvg = getPlaceIconSvg({ id: 'gondolin', type: 'shahar' });
      expect(gondolinSvg).toBe(CARTOGRAPHIC_ICONS.capital);

      const breeSvg = getPlaceIconSvg({ id: 'bree', type: 'shahar' });
      expect(breeSvg).toBe(CARTOGRAPHIC_ICONS.settlement);

      const amonSulSvg = getPlaceIconSvg({ id: 'amon-sul', type: 'qalʼa' });
      expect(amonSulSvg).toBe(CARTOGRAPHIC_ICONS.tower);

      const eredLuinSvg = getPlaceIconSvg({ id: 'ered-luin', type: 'togʻ' });
      expect(eredLuinSvg).toBe(CARTOGRAPHIC_ICONS.landmark);
    });
  });

  describe('3. Kolliziya prioritetlari va Zoom-aware LoD iyerarxiyasi', () => {
    it('Bosh shaharlar va yirik qalʼalar 100 ballik yuqori prioritet olishi kerak', () => {
      expect(getPlacePriority({ id: 'minas-tirith', type: 'shahar' })).toBe(100);
      expect(getPlacePriority({ id: 'gondolin', type: 'shahar' })).toBe(100);
      expect(getPlacePriority({ id: 'barad-dur', type: 'qalʼa' })).toBe(100);
    });

    it('Mashhur elflar panohgohlari oʻrta-yuqori prioritet olishi kerak', () => {
      expect(getPlacePriority({ id: 'rivendell', type: 'qalʼa' })).toBe(75);
      expect(getPlacePriority({ id: 'nargothrond', type: 'qalʼa' })).toBe(75);
      expect(getPlacePriority({ id: 'menegroth', type: 'shahar' })).toBe(75);
    });

    it('Shir maskanlari deterministik ustuvorlik iyerarxiyasiga (>= 65) ega boʻlishi kerak (Hobbiton > Michel Delving > Bywater)', () => {
      const hobbitonPrio = getPlacePriority({ id: 'hobbiton', type: 'shahar' });
      const michelPrio = getPlacePriority({ id: 'michel-delving', type: 'shahar' });
      const bridgePrio = getPlacePriority({ id: 'brandywine-bridge', type: 'qalʼa' });
      const bucklandPrio = getPlacePriority({ id: 'buckland', type: 'oʻlka' });
      const bywaterPrio = getPlacePriority({ id: 'bywater', type: 'shahar' });
      const tuckPrio = getPlacePriority({ id: 'tuckborough', type: 'shahar' });

      expect(hobbitonPrio).toBeGreaterThan(michelPrio);
      expect(michelPrio).toBeGreaterThan(bridgePrio);
      expect(bridgePrio).toBeGreaterThan(bucklandPrio);
      expect(bucklandPrio).toBeGreaterThan(bywaterPrio);
      expect(bywaterPrio).toBeGreaterThan(tuckPrio);
      expect(tuckPrio).toBeGreaterThanOrEqual(65);
    });

    it('Yangi Eriador joylari uchun deterministik prioritetlar toʻgʻri belgilangan boʻlishi kerak', () => {
      expect(getPlacePriority({ id: 'ered-luin', type: 'togʻ' })).toBe(62);
      expect(getPlacePriority({ id: 'bree', type: 'shahar' })).toBe(60);
      expect(getPlacePriority({ id: 'amon-sul', type: 'qalʼa' })).toBe(58);
      expect(getPlacePriority({ id: 'fornost', type: 'qalʼa' })).toBe(50);
      expect(getPlacePriority({ id: 'amun-sul', type: 'togʻ' })).toBe(30);
    });

    it('getPlaceMinZoom uzoq (-2), oʻrta (0) va yaqin (1) masshtablarni toʻgʻri belgilashi kerak', () => {
      expect(getPlaceMinZoom({ id: 'hobbiton', type: 'shahar' })).toBe(-2);
      expect(getPlaceMinZoom({ id: 'minas-tirith', type: 'shahar' })).toBe(-2);
      expect(getPlaceMinZoom({ id: 'ered-luin', type: 'togʻ' })).toBe(-1);
      expect(getPlaceMinZoom({ id: 'michel-delving', type: 'shahar' })).toBe(0);
      expect(getPlaceMinZoom({ id: 'brandywine-bridge', type: 'qalʼa' })).toBe(0);
      expect(getPlaceMinZoom({ id: 'menegroth', type: 'shahar' })).toBe(0);
      expect(getPlaceMinZoom({ id: 'bree', type: 'shahar' })).toBe(0);
      expect(getPlaceMinZoom({ id: 'amon-sul', type: 'qalʼa' })).toBe(0);
      expect(getPlaceMinZoom({ id: 'bywater', type: 'shahar' })).toBe(1);
      expect(getPlaceMinZoom({ id: 'tuckborough', type: 'shahar' })).toBe(1);
      expect(getPlaceMinZoom({ id: 'buckland', type: 'oʻlka' })).toBe(1);
    });

    it('getPlaceShortLabel qavs ichidagi izohlarni olib tashlab ixcham nom qaytarishi kerak', () => {
      expect(getPlaceShortLabel({ id: 'hobbiton', name: 'Hobbiton (Bag End)' })).toBe('Hobbiton');
      expect(getPlaceShortLabel({ id: 'bywater', name: 'Bywater (Suvboʻyi)' })).toBe('Bywater');
      expect(getPlaceShortLabel({ id: 'minas-tirith', name: 'Minas Tirith' })).toBe('Minas Tirith');
      expect(getPlaceShortLabel({ id: 'bree', name: 'Bri (Bree)' })).toBe('Bri');
      expect(getPlaceShortLabel({ id: 'amon-sul', name: 'Amon Sûl (Shamol Choʻqqisi / Weathertop)' })).toBe('Amon Sûl');
      expect(getPlaceShortLabel({ id: 'ered-luin', name: 'Ered Luin (Moviy Togʻlar / Blue Mountains)' })).toBe('Ered Luin');
    });

    it('getPlacePreferredDirection zich Shir va Eriador klasterida yorliqlarni toʻgʻri yoʻnalishlarga taqsimlashi kerak', () => {
      expect(getPlacePreferredDirection({ id: 'hobbiton' })).toBe('top');
      expect(getPlacePreferredDirection({ id: 'bywater' })).toBe('right');
      expect(getPlacePreferredDirection({ id: 'michel-delving' })).toBe('left');
      expect(getPlacePreferredDirection({ id: 'tuckborough' })).toBe('bottom');
      expect(getPlacePreferredDirection({ id: 'brandywine-bridge' })).toBe('top');
      expect(getPlacePreferredDirection({ id: 'buckland' })).toBe('right');
      expect(getPlacePreferredDirection({ id: 'bree' })).toBe('bottom');
      expect(getPlacePreferredDirection({ id: 'amon-sul' })).toBe('top');
      expect(getPlacePreferredDirection({ id: 'ered-luin' })).toBe('right');
    });

    it('GEOGRAPHIC_LABELS da Bri va Amon Sûl uchun takroriy (duplicate) yorliqlar boʻlmasligi kerak', () => {
      const meLabels = getGeographicLabelsForRegion('orta-yer');
      const hasGeoBree = meLabels.some((l) => l.id === 'geo-bree');
      const hasGeoAmonSul = meLabels.some((l) => l.id === 'geo-amon-sul');

      expect(hasGeoBree).toBe(false);
      expect(hasGeoAmonSul).toBe(false);
    });

    it('Qayta tiklangan Eriador geografik yorliqlari (Mithlond, Lindon, Arnor, Fornost, Mitheithel, Greenway) toʻgʻri boʻlishi kerak', () => {
      const meLabels = getGeographicLabelsForRegion('orta-yer');

      const lindon = meLabels.find((l) => l.id === 'geo-lindon');
      expect(lindon).toBeDefined();
      expect(lindon?.minZoom).toBe(-2);
      expect(lindon?.category).toBe('region');

      const arnor = meLabels.find((l) => l.id === 'geo-arnor');
      expect(arnor).toBeDefined();
      expect(arnor?.minZoom).toBe(-1);
      expect(arnor?.category).toBe('region');

      const mithlond = meLabels.find((l) => l.id === 'geo-mithlond');
      expect(mithlond).toBeDefined();
      expect(mithlond?.minZoom).toBe(-1);
      expect(mithlond?.category).toBe('settlement');

      const fornost = meLabels.find((l) => l.id === 'geo-fornost');
      expect(fornost).toBeDefined();
      expect(fornost?.minZoom).toBe(0);
      expect(fornost?.category).toBe('settlement');

      const greenway = meLabels.find((l) => l.id === 'geo-greenway');
      expect(greenway).toBeDefined();
      expect(greenway?.minZoom).toBe(0);
      expect(greenway?.category).toBe('road');
      // Greenway Shir ichida bo'lmasligi (x > 620)
      expect(greenway?.x).toBeGreaterThan(620);

      const mitheithel = meLabels.find((l) => l.id === 'geo-mitheithel');
      expect(mitheithel).toBeDefined();
      expect(mitheithel?.minZoom).toBe(0);
      expect(mitheithel?.category).toBe('river');
    });

    it('Barcha geografik yorliqlar koordinatalari chekli va xarita chegaralari ichida boʻlishi kerak', () => {
      const meLabels = getGeographicLabelsForRegion('orta-yer');
      const belLabels = getGeographicLabelsForRegion('beleriand');

      for (const label of [...meLabels, ...belLabels]) {
        expect(Number.isFinite(label.x)).toBe(true);
        expect(Number.isFinite(label.y)).toBe(true);
        expect(label.x).toBeGreaterThanOrEqual(0);
        expect(label.x).toBeLessThanOrEqual(2048);
        expect(label.y).toBeGreaterThanOrEqual(0);
        expect(label.y).toBeLessThanOrEqual(2048);
      }
    });

    it('getGeographicLabelsForRegion Oʻrta-yer va Beleriand uchun zoom-darajali hududiy yorliqlarni qaytarishi kerak', () => {
      const meLabels = getGeographicLabelsForRegion('orta-yer');
      const belLabels = getGeographicLabelsForRegion('beleriand');

      expect(meLabels.length).toBeGreaterThanOrEqual(18);
      expect(belLabels.length).toBeGreaterThanOrEqual(8);

      // Uzoq, o'rta va yaqin zoom qatlamlari mavjudligini tekshirish
      expect(meLabels.some((l) => l.minZoom <= -1)).toBe(true);
      expect(meLabels.some((l) => l.minZoom === 0)).toBe(true);
      expect(meLabels.some((l) => l.minZoom >= 1)).toBe(true);
    });
  });
});
