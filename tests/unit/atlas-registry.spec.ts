import { describe, expect, it } from 'vitest';
import {
  DEFAULT_MAP_ID,
  getAllMaps,
  getDefaultMap,
  getMapDefinition,
  isValidMapId,
  REGISTERED_MAPS,
} from '../../src/utils/atlas/map-registry';
import {
  parseAtlasParams,
  serializeAtlasParams,
} from '../../src/utils/atlas/url-state';

describe('Atlas Xaritalar Registri va URL Holati Utilitlari', () => {
  describe('map-registry.ts tekshiruvi', () => {
    it('Beleriand va Oʻrta-yer xaritalari roʻyxatdan oʻtgan boʻlishi kerak', () => {
      expect(REGISTERED_MAPS.beleriand).toBeDefined();
      expect(REGISTERED_MAPS['orta-yer']).toBeDefined();
      expect(isValidMapId('beleriand')).toBe(true);
      expect(isValidMapId('orta-yer')).toBe(true);
      expect(isValidMapId('nomaqbul-hudud')).toBe(false);
    });

    it('Sukut boʻyicha asosiy xarita Oʻrta-yer boʻlishi kerak', () => {
      expect(DEFAULT_MAP_ID).toBe('orta-yer');
      expect(getDefaultMap().id).toBe('orta-yer');
    });

    it('Har bir xarita musbat pikselli oʻlchamlarga va qatʼiy litsenziya maʼlumotlariga ega boʻlishi kerak', () => {
      const maps = getAllMaps();
      expect(maps.length).toBeGreaterThanOrEqual(2);

      for (const map of maps) {
        expect(map.dimensions.width).toBeGreaterThan(0);
        expect(map.dimensions.height).toBeGreaterThan(0);
        expect(map.minZoom).toBeLessThan(map.maxZoom);
        expect(map.defaultCenter.x).toBeGreaterThanOrEqual(0);
        expect(map.defaultCenter.y).toBeGreaterThanOrEqual(0);

        // Huquqiy va ilmiy manbalar (Provenance) tekshiruvi
        expect(map.provenance.license).toBeDefined();
        expect(map.provenance.cartographer).toBeDefined();
        expect(map.provenance.canonBasis).toBeDefined();
      }
    });

    it('Nomaʼlum ID boʻyicha undefined qaytarishi kerak', () => {
      expect(getMapDefinition('valinor-3d')).toBeUndefined();
    });
  });

  describe('url-state.ts deep-linking va sanitizatsiya', () => {
    it('Toʻgʻri URL query parametrlarini tahlil qilishi kerak', () => {
      const parsed = parseAtlasParams('?hudud=beleriand&joy=gondolin&x=512&y=384&z=1&view=xarita');
      expect(parsed).toEqual({
        hudud: 'beleriand',
        joy: 'gondolin',
        x: 512,
        y: 384,
        z: 1,
        view: 'xarita',
      });
    });

    it('Nomaʼlum hudud berilganda sukut boʻyicha orta-yer ga qaytishi kerak', () => {
      const parsed = parseAtlasParams('?hudud=nomaqbul&x=100&y=200');
      expect(parsed.hudud).toBe('orta-yer');
    });

    it('Koordinatalar NaN yoki boʻsh boʻlganda xaritaning xavfsiz markaziy nuqtasiga qaytishi kerak', () => {
      const parsed = parseAtlasParams('?hudud=beleriand&x=not-a-number&y=undefined');
      expect(parsed.x).toBe(1024);
      expect(parsed.y).toBe(768);
    });

    it('Koordinatalar chegaradan oshib ketganda xarita chegaralariga qirqilishi kerak', () => {
      const parsed = parseAtlasParams('?hudud=beleriand&x=9999&y=-500');
      expect(parsed.x).toBe(2048);
      expect(parsed.y).toBe(0);
    });

    it('Masshtab (z) qiymatini minZoom va maxZoom oraligʻida ushlab turishi kerak', () => {
      const parsedLow = parseAtlasParams('?hudud=beleriand&z=-10');
      expect(parsedLow.z).toBe(-2);

      const parsedHigh = parseAtlasParams('?hudud=beleriand&z=10');
      expect(parsedHigh.z).toBe(3);
    });

    it('view=katalog parametrini toʻgʻri tanishi kerak', () => {
      const parsed = parseAtlasParams('?hudud=orta-yer&view=katalog');
      expect(parsed.view).toBe('katalog');

      const parsedDefault = parseAtlasParams('?hudud=orta-yer&view=boshqa-narsa');
      expect(parsedDefault.view).toBe('xarita');
    });

    it('serializeAtlasParams toza query string shakllantirishi kerak', () => {
      const query = serializeAtlasParams({
        hudud: 'beleriand',
        joy: 'Gondolin ',
        x: 512.4,
        y: 384.8,
        z: 1,
        view: 'katalog',
      });

      expect(query).toContain('hudud=beleriand');
      expect(query).toContain('joy=gondolin');
      expect(query).toContain('x=512');
      expect(query).toContain('y=385');
      expect(query).toContain('z=1');
      expect(query).toContain('view=katalog');
    });
  });
});
