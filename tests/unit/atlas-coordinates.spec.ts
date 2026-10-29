import { describe, expect, it } from 'vitest';
import {
  calculateMapBounds,
  clampCoordinates,
  fromLeafletLatLng,
  isPointInBounds,
  scaleCoordinates,
  toLeafletLatLng,
} from '../../src/utils/atlas/coordinates';

describe('Atlas Planar Koordinatalar Utiliti (coordinates.ts)', () => {
  const dimensions = { width: 2048, height: 1536 };

  describe('toLeafletLatLng va fromLeafletLatLng konvertatsiyasi', () => {
    it('Planar {x, y} ni Leaflet [latitude, longitude] ga toʻgʻri [y, x] tartibida oʻgirishi kerak', () => {
      const result = toLeafletLatLng(512, 384);
      // Latitude = Y (384), Longitude = X (512)
      expect(result).toEqual([384, 512]);
    });

    it('Notoʻgʻri yoki noaniq (NaN, Infinity) qiymatlarni 0 ga normallashtirishi kerak', () => {
      expect(toLeafletLatLng(NaN, 100)).toEqual([100, 0]);
      expect(toLeafletLatLng(200, Infinity)).toEqual([0, 200]);
    });

    it('Leaflet massiv [lat, lng] dan {x, y} planar nuqtasini qaytarishi kerak', () => {
      const point = fromLeafletLatLng([384, 512]);
      expect(point).toEqual({ x: 512, y: 384 });
    });

    it('Leaflet obyekt {lat, lng} dan {x, y} planar nuqtasini qaytarishi kerak', () => {
      const point = fromLeafletLatLng({ lat: 768.4, lng: 1024.2 });
      expect(point).toEqual({ x: 1024, y: 768 });
    });

    it('Aylanma konvertatsiya (round-trip) nuqta qiymatini buzmasligi kerak', () => {
      const initial = { x: 1420, y: 890 };
      const leafletCoords = toLeafletLatLng(initial.x, initial.y);
      const restored = fromLeafletLatLng(leafletCoords);
      expect(restored).toEqual(initial);
    });
  });

  describe('isPointInBounds tekshiruvi', () => {
    it('Xarita ichidagi nuqtalarni toʻgʻri aniqlashi kerak', () => {
      expect(isPointInBounds({ x: 0, y: 0 }, dimensions)).toBe(true);
      expect(isPointInBounds({ x: 2048, y: 1536 }, dimensions)).toBe(true);
      expect(isPointInBounds({ x: 1024, y: 768 }, dimensions)).toBe(true);
    });

    it('Chegaradan tashqaridagi nuqtalarni rad etishi kerak', () => {
      expect(isPointInBounds({ x: -1, y: 100 }, dimensions)).toBe(false);
      expect(isPointInBounds({ x: 100, y: -5 }, dimensions)).toBe(false);
      expect(isPointInBounds({ x: 2049, y: 100 }, dimensions)).toBe(false);
      expect(isPointInBounds({ x: 100, y: 1537 }, dimensions)).toBe(false);
      expect(isPointInBounds({ x: NaN, y: 100 }, dimensions)).toBe(false);
    });
  });

  describe('clampCoordinates xavfsiz qirqish', () => {
    it('Chegaradan oshib ketgan koordinatalarni xarita chetiga qirqishi kerak', () => {
      expect(clampCoordinates({ x: 3000, y: 2000 }, dimensions)).toEqual({
        x: 2048,
        y: 1536,
      });
      expect(clampCoordinates({ x: -50, y: -100 }, dimensions)).toEqual({
        x: 0,
        y: 0,
      });
    });

    it('Qiymat yetishmaganda yoki NaN boʻlganda xaritaning markaziy nuqtasiga qaytarishi kerak', () => {
      expect(clampCoordinates({}, dimensions)).toEqual({
        x: 1024,
        y: 768,
      });
      expect(clampCoordinates({ x: NaN, y: NaN }, dimensions)).toEqual({
        x: 1024,
        y: 768,
      });
    });
  });

  describe('calculateMapBounds va scaleCoordinates', () => {
    it('Leaflet toʻrtburchak chegaralarini [[0, 0], [H, W]] koʻrinishida hisoblashi kerak', () => {
      const bounds = calculateMapBounds(dimensions);
      expect(bounds).toEqual([
        [0, 0],
        [1536, 2048],
      ]);
    });

    it('Xarita oʻlchami kattalashganda koordinatalarni toʻgʻri proporsiyada masshtablashi kerak', () => {
      const sourceDims = { width: 1000, height: 1000 };
      const targetDims = { width: 2000, height: 2000 };
      const scaled = scaleCoordinates({ x: 250, y: 500 }, sourceDims, targetDims);
      expect(scaled).toEqual({ x: 500, y: 1000 });
    });
  });
});
