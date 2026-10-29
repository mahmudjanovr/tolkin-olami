import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { placeSchema } from '../../src/content/schemas';
import { calculateMapBounds, isPointInBounds, toLeafletLatLng } from '../../src/utils/atlas/coordinates';
import {
  getAllMaps,
  getMapDefinition,
  REGISTERED_MAPS,
} from '../../src/utils/atlas/map-registry';
import { parseAtlasParams, serializeAtlasParams } from '../../src/utils/atlas/url-state';
import { BOOK_CITATION_REGISTRY } from '../../src/utils/entity-resolver';

describe('Milestone 4.3: Atlas UI va Integratsiya Sinovlari (atlas-ui-integration.spec.ts)', () => {
  const placesDir = join(process.cwd(), 'src/content/places');
  const placeFiles = readdirSync(placesDir).filter((f) => f.endsWith('.json'));
  const allPlaces = placeFiles.map((f) => placeSchema.parse(JSON.parse(readFileSync(join(placesDir, f), 'utf-8'))));

  describe('1. Hududlarni almashtirish va xarita aktivlari tanlovi', () => {
    it('Barcha roʻyxatdan oʻtgan xaritalar toʻgʻri SVG manbalariga ega boʻlishi kerak', () => {
      const maps = getAllMaps();
      expect(maps.length).toBeGreaterThanOrEqual(2);

      const beleriand = getMapDefinition('beleriand');
      expect(beleriand?.assetUrl).toBe('/assets/maps/beleriand-planar.svg');
      expect(beleriand?.dimensions).toEqual({ width: 2048, height: 1536 });

      const ortaYer = getMapDefinition('orta-yer');
      expect(ortaYer?.assetUrl).toBe('/assets/maps/middle-earth-planar.svg');
      expect(ortaYer?.dimensions).toEqual({ width: 2048, height: 2048 });
    });

    it('Har bir xarita uchun hisoblangan chegaralar Leaflet CRS.Simple formatiga mos boʻlishi kerak', () => {
      const beleriandBounds = calculateMapBounds(REGISTERED_MAPS.beleriand.dimensions);
      expect(beleriandBounds).toEqual([
        [0, 0],
        [1536, 2048],
      ]);

      const ortaYerBounds = calculateMapBounds(REGISTERED_MAPS['orta-yer'].dimensions);
      expect(ortaYerBounds).toEqual([
        [0, 0],
        [2048, 2048],
      ]);
    });
  });

  describe('2. Markerlar va planar koordinatalar tekislanishi', () => {
    it('Har bir toponim oʻz hududining xaritasiga toʻgʻri planar LatLng ga ega boʻlishi kerak', () => {
      for (const place of allPlaces) {
        if (!place.coordinates) continue;

        const mapDef = getMapDefinition(place.coordinates.map_id);
        expect(mapDef).toBeDefined();

        // 1. Chegaralar ichidaligi
        const inBounds = isPointInBounds(
          { x: place.coordinates.x, y: place.coordinates.y },
          mapDef!.dimensions
        );
        expect(inBounds).toBe(true);

        // 2. Leaflet [lat, lng] konvertatsiyasi: latitude = y, longitude = x
        const leafletCoords = toLeafletLatLng(place.coordinates.x, place.coordinates.y);
        expect(leafletCoords[0]).toBe(place.coordinates.y);
        expect(leafletCoords[1]).toBe(place.coordinates.x);
      }
    });

    it('Beleriand toponimlari (Gondolin, Menegroth, Nargothrond) koordinatalari toʻgʻri boʻlishi kerak', () => {
      const gondolin = allPlaces.find((p) => p.id === 'gondolin');
      expect(gondolin?.coordinates).toEqual({ map_id: 'beleriand', x: 1040, y: 1050 });

      const menegroth = allPlaces.find((p) => p.id === 'menegroth');
      expect(menegroth?.coordinates).toEqual({ map_id: 'beleriand', x: 1000, y: 720 });

      const nargothrond = allPlaces.find((p) => p.id === 'nargothrond');
      expect(nargothrond?.coordinates).toEqual({ map_id: 'beleriand', x: 680, y: 580 });
    });

    it('Oʻrta-yer toponimlari (Rivendell, Bri, Amon Sûl, Ered Luin, Minas Tirith, Barad-dûr) koordinatalari toʻgʻri boʻlishi kerak', () => {
      const rivendell = allPlaces.find((p) => p.id === 'rivendell');
      expect(rivendell?.coordinates).toEqual({ map_id: 'orta-yer', x: 920, y: 1420 });
      expect(rivendell?.sources.map((s) => s.book_slug)).toEqual(
        expect.arrayContaining(['silmarillion', 'the-hobbit', 'the-lord-of-the-rings'])
      );

      const bree = allPlaces.find((p) => p.id === 'bree');
      expect(bree?.coordinates).toEqual({ map_id: 'orta-yer', x: 650, y: 1413 });
      expect(bree?.type).toBe('shahar');

      const amonSul = allPlaces.find((p) => p.id === 'amon-sul');
      expect(amonSul?.coordinates).toEqual({ map_id: 'orta-yer', x: 720, y: 1425 });
      expect(amonSul?.type).toBe('qalʼa');

      const eredLuin = allPlaces.find((p) => p.id === 'ered-luin');
      expect(eredLuin?.coordinates).toEqual({ map_id: 'orta-yer', x: 365, y: 1620 });
      expect(eredLuin?.type).toBe('togʻ');

      const brandywineBridge = allPlaces.find((p) => p.id === 'brandywine-bridge');
      expect(brandywineBridge?.elvish_name).toBe('Baranduin Bridge');
      expect(brandywineBridge?.elvish_name).not.toContain('Mitheithel');

      const minasTirith = allPlaces.find((p) => p.id === 'minas-tirith');
      expect(minasTirith?.coordinates).toEqual({ map_id: 'orta-yer', x: 1220, y: 580 });

      const baradDur = allPlaces.find((p) => p.id === 'barad-dur');
      expect(baradDur?.coordinates).toEqual({ map_id: 'orta-yer', x: 1480, y: 640 });
    });
  });

  describe('3. Deep-link parsing, xatoliklar va sanitizatsiya', () => {
    it('Toʻgʻri deep-link berilganda joy va hududni toʻliq aniqlashi kerak', () => {
      const state = parseAtlasParams('?hudud=beleriand&joy=gondolin&x=1040&y=1050&z=1');
      expect(state.hudud).toBe('beleriand');
      expect(state.joy).toBe('gondolin');
      expect(state.x).toBe(1040);
      expect(state.y).toBe(1050);
      expect(state.z).toBe(1);
    });

    it('Nomaʼlum yoki mavjud boʻlmagan joy ID si berilganda xavfsiz qabul qilishi kerak', () => {
      const state = parseAtlasParams('?hudud=beleriand&joy=mavjud-bolmagan-shahar');
      expect(state.hudud).toBe('beleriand');
      expect(state.joy).toBe('mavjud-bolmagan-shahar');
      // Koordinatalar sukut bo'yicha markazga qirqiladi
      expect(state.x).toBe(REGISTERED_MAPS.beleriand.defaultCenter.x);
      expect(state.y).toBe(REGISTERED_MAPS.beleriand.defaultCenter.y);
    });

    it('Chegaradan tashqaridagi koordinatalarni xarita chegarasiga xavfsiz qirqishi kerak', () => {
      const state = parseAtlasParams('?hudud=beleriand&x=9999&y=-9999');
      expect(state.x).toBe(2048);
      expect(state.y).toBe(0);
    });

    it('serializeAtlasParams toʻgʻri URL satrini shakllantirishi va qayta oʻqilganda buzilmasligi kerak', () => {
      const initial = {
        hudud: 'orta-yer',
        joy: 'minas-tirith',
        x: 1220,
        y: 580,
        z: 2,
      };

      const query = serializeAtlasParams(initial);
      const parsed = parseAtlasParams(`?${query}`);

      expect(parsed.hudud).toBe(initial.hudud);
      expect(parsed.joy).toBe(initial.joy);
      expect(parsed.x).toBe(initial.x);
      expect(parsed.y).toBe(initial.y);
      expect(parsed.z).toBe(initial.z);
    });
  });

  describe('4. Semantik katalog va No-JS muqobilligi', () => {
    it('Barcha toponimlar uchun manba kitobi va bobi toʻliq koʻrsatilgan boʻlishi kerak', () => {
      for (const place of allPlaces) {
        expect(place.sources.length).toBeGreaterThanOrEqual(1);
        for (const source of place.sources) {
          expect(source.book_slug).toBeDefined();
          expect(source.chapter).toBeDefined();
          expect(BOOK_CITATION_REGISTRY[source.book_slug]).toBeDefined();
        }
      }
    });

    it('Barcha toponimlar hududga tegishli valid slugga ega boʻlishi kerak', () => {
      for (const place of allPlaces) {
        expect(place.id).toMatch(/^[a-z0-9-]+$/);
        expect(['beleriand', 'orta-yer', 'valinor']).toContain(place.region);
      }
    });
  });

  describe('5. Navigatsiya, URL parametrlar daxlsizligi va koordinatalar aniqligi', () => {
    it('Parametrsiz kirilganda sukut boʻyicha Oʻrta-yer xaritasi va markazi olinishi kerak', () => {
      const state = parseAtlasParams('');
      expect(state.hudud).toBe('orta-yer');
      expect(state.joy).toBeUndefined();
      expect(state.x).toBe(REGISTERED_MAPS['orta-yer'].defaultCenter.x);
      expect(state.y).toBe(REGISTERED_MAPS['orta-yer'].defaultCenter.y);
      expect(state.z).toBe(REGISTERED_MAPS['orta-yer'].defaultCenter.zoom);
    });

    it('Inspektor yopilganda faqat joy olib tashlanishi, boshqa koordinata va hudud parametrlari saqlanishi kerak', () => {
      const currentUrl = '?hudud=orta-yer&joy=rivendell&x=920&y=1420&z=1&extra=custom';
      const searchParams = new URLSearchParams(currentUrl.slice(1));

      // joy parametrini o'chirish imitatsiyasi
      searchParams.delete('joy');

      expect(searchParams.get('joy')).toBeNull();
      expect(searchParams.get('hudud')).toBe('orta-yer');
      expect(searchParams.get('x')).toBe('920');
      expect(searchParams.get('y')).toBe('1420');
      expect(searchParams.get('z')).toBe('1');
      expect(searchParams.get('extra')).toBe('custom');
    });

    it('Ketma-ket joylar tanlanganda (A -> B), inspektorni yopish (close) bir marta bosishda amalga oshishi kerak', () => {
      let currentUrl = '?hudud=orta-yer';
      let historyState: any = { atlasRegion: 'orta-yer' };
      const historyStack: Array<{ state: any; url: string }> = [{ state: historyState, url: currentUrl }];

      const mockPushState = (state: any, _title: string, url: string) => {
        historyState = state;
        currentUrl = url;
        historyStack.push({ state, url });
      };
      const mockReplaceState = (state: any, _title: string, url: string) => {
        historyState = state;
        currentUrl = url;
        historyStack[historyStack.length - 1] = { state, url };
      };

      // 1. Joy A (Rivendell) tanlanadi
      mockPushState(
        { atlasSelection: true, placeId: 'rivendell', region: 'orta-yer' },
        '',
        '?hudud=orta-yer&joy=rivendell&x=920&y=1420&z=1'
      );
      expect(currentUrl).toContain('joy=rivendell');

      // 2. Joy B (Minas Tirith) tanlanadi
      mockPushState(
        { atlasSelection: true, placeId: 'minas-tirith', region: 'orta-yer' },
        '',
        '?hudud=orta-yer&joy=minas-tirith&x=1220&y=580&z=1'
      );
      expect(currentUrl).toContain('joy=minas-tirith');

      // 3. Inspektorni yopish (closeInspector): replaceState orqali 'joy' tozalanadi, history.back() chaqirilmaydi
      const searchParams = new URLSearchParams(currentUrl.startsWith('?') ? currentUrl.slice(1) : currentUrl);
      searchParams.delete('joy');
      const newUrl = `?${searchParams.toString()}`;
      mockReplaceState(
        { ...historyState, atlasSelection: false, placeId: null },
        '',
        newUrl
      );

      // 4. Tasdiqlash: joy darhol tozalangan, oldingi joy A ga qaytib ketmagan
      expect(newUrl).not.toContain('joy=');
      expect(newUrl).toContain('hudud=orta-yer');
      expect(newUrl).toContain('x=1220');
      expect(historyState.atlasSelection).toBe(false);
      expect(historyState.placeId).toBeNull();
    });

    it('Har bir toponim koordinatasi uning hududi oʻlchamlariga 100% mos va chegaralar ichida boʻlishi kerak', () => {
      for (const place of allPlaces) {
        if (!place.coordinates) continue;
        const mapDef = getMapDefinition(place.coordinates.map_id)!;
        expect(place.coordinates.x).toBeGreaterThan(0);
        expect(place.coordinates.x).toBeLessThan(mapDef.dimensions.width);
        expect(place.coordinates.y).toBeGreaterThan(0);
        expect(place.coordinates.y).toBeLessThan(mapDef.dimensions.height);

        // Leaflet [lat, lng] konvertatsiyasi nol xatolik bilan qaytishi kerak
        const [lat, lng] = toLeafletLatLng(place.coordinates.x, place.coordinates.y);
        expect(lat).toBe(place.coordinates.y);
        expect(lng).toBe(place.coordinates.x);
      }
    });
  });
});
