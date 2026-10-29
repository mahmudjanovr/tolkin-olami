/**
 * TOLKIEN OLAMI — Atlas URL Holati va Deep-Link Utiliti
 *
 * Ushbu modul xarita holatini (?hudud=...&joy=...&x=...&y=...&z=...&view=...)
 * tahlil qilish, noaniq yoki noto'g'ri qiymatlarni xavfsiz filtrlash (sanitizatsiya)
 * hamda URL satriga qayta seriyalash imkoniyatini beradi.
 */

import { clampCoordinates } from './coordinates';
import { DEFAULT_MAP_ID, getMapDefinition, isValidMapId } from './map-registry';
import { getJourneyById, isValidJourneyId } from '@/data/journeys/journey-registry';

export type AtlasViewMode = 'xarita' | 'katalog';

export interface AtlasUrlParams {
  hudud: string;
  joy?: string;
  x: number;
  y: number;
  z: number;
  view: AtlasViewMode;
  sayr?: string;
  bosqich?: number;
}

/**
 * URL query satri yoki URLSearchParams obyektini tahlil qilib,
 * to'liq tozalangan va xavfsiz AtlasUrlParams obyektini qaytaradi.
 */
export function parseAtlasParams(input: string | URLSearchParams): AtlasUrlParams {
  const params = typeof input === 'string'
    ? new URLSearchParams(input.startsWith('?') ? input.slice(1) : input)
    : input;

  // 1. Tarixiy sayohat (journey) tekshiruvi (hudud aniqlanishidan avval)
  const rawSayr = params.get('sayr') || params.get('safar');
  const sayr = rawSayr ? rawSayr.trim().toLowerCase() : undefined;
  const isJourneyValid = isValidJourneyId(sayr);
  const journey = isJourneyValid && sayr ? getJourneyById(sayr) : undefined;
  const maxStages = journey ? journey.totalStages : 10;

  // 2. Hudud (map_id) tekshiruvi
  const rawHudud = params.get('hudud') || '';
  const fallbackHudud = journey?.region || DEFAULT_MAP_ID;
  const hudud = isValidMapId(rawHudud) ? rawHudud : fallbackHudud;
  const mapDef = getMapDefinition(hudud)!;

  // 3. Joy (toponim identifikatori) tekshiruvi
  const rawJoy = params.get('joy');
  const joy = rawJoy ? rawJoy.trim().toLowerCase() : undefined;

  // 4. Ko'rinish rejimi tekshiruvi (xarita yoki katalog)
  const rawView = params.get('view');
  const view: AtlasViewMode = rawView === 'katalog' ? 'katalog' : 'xarita';

  // 5. Koordinatalarni tekshirish va clamp qilish
  const rawX = params.get('x');
  const rawY = params.get('y');

  const parsedX = rawX !== null && rawX !== '' ? Number(rawX) : undefined;
  const parsedY = rawY !== null && rawY !== '' ? Number(rawY) : undefined;

  const validX = parsedX !== undefined && Number.isFinite(parsedX) ? parsedX : mapDef.defaultCenter.x;
  const validY = parsedY !== undefined && Number.isFinite(parsedY) ? parsedY : mapDef.defaultCenter.y;

  const clamped = clampCoordinates({ x: validX, y: validY }, mapDef.dimensions);

  // 6. Masshtab (zoom) tekshiruvi
  const rawZ = params.get('z');
  const parsedZ = rawZ !== null && rawZ !== '' ? Number(rawZ) : mapDef.defaultCenter.zoom;
  const safeZ = Number.isFinite(parsedZ) ? Math.round(parsedZ) : mapDef.defaultCenter.zoom;
  const clampedZ = Math.max(mapDef.minZoom, Math.min(mapDef.maxZoom, safeZ));

  // 7. Bosqich (stage) tekshiruvi
  const rawBosqich = params.get('bosqich');
  let safeBosqich: number | undefined;

  if (rawBosqich && journey) {
    const parsedNum = Number(rawBosqich);
    if (!isNaN(parsedNum) && Number.isInteger(parsedNum) && parsedNum >= 1) {
      safeBosqich = Math.max(1, Math.min(parsedNum, maxStages));
    } else {
      const normalizedStageId = rawBosqich.trim().toLowerCase();
      const matchedStage = journey.stages.find((s) => s.id === normalizedStageId);
      if (matchedStage) {
        safeBosqich = matchedStage.sequence;
      }
    }
  }

  const result: AtlasUrlParams = {
    hudud,
    joy: joy && joy.length > 0 ? joy : undefined,
    x: clamped.x,
    y: clamped.y,
    z: clampedZ,
    view,
  };

  if (isJourneyValid && journey) {
    result.sayr = journey.id;
    result.bosqich = safeBosqich ?? 1;
  }

  return result;
}

/**
 * AtlasUrlParams obyektidan toza URL query satrini hosil qiladi.
 */
export function serializeAtlasParams(params: Partial<AtlasUrlParams>): string {
  const searchParams = new URLSearchParams();

  const hudud = params.hudud && isValidMapId(params.hudud) ? params.hudud : DEFAULT_MAP_ID;
  searchParams.set('hudud', hudud);

  if (params.joy && params.joy.trim().length > 0) {
    searchParams.set('joy', params.joy.trim().toLowerCase());
  }

  if (params.sayr && params.sayr.trim().length > 0) {
    searchParams.set('sayr', params.sayr.trim().toLowerCase());
    if (params.bosqich !== undefined && Number.isFinite(params.bosqich)) {
      searchParams.set('bosqich', String(Math.round(params.bosqich)));
    }
  }

  if (params.x !== undefined && Number.isFinite(params.x)) {
    searchParams.set('x', String(Math.round(params.x)));
  }

  if (params.y !== undefined && Number.isFinite(params.y)) {
    searchParams.set('y', String(Math.round(params.y)));
  }

  if (params.z !== undefined && Number.isFinite(params.z)) {
    searchParams.set('z', String(Math.round(params.z)));
  }

  if (params.view && params.view === 'katalog') {
    searchParams.set('view', 'katalog');
  }

  return searchParams.toString();
}
