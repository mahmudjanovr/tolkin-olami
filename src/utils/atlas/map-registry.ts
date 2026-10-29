/**
 * TOLKIEN OLAMI — Atlas Xaritalar Registri
 *
 * Ushbu modul qat'iy tekshirilgan va litsenziyalangan xaritalar ro'yxatini,
 * ularning o'lchamlari, sukut bo'yicha markazlari va ilmiy matn manbalarini
 * (provenance) ta'minlaydi.
 */

import type { MapDimensions, Point2D } from './coordinates';

export interface MapProvenance {
  cartographer: string;
  license: string;
  sourceUrl?: string;
  canonBasis: string;
  notesUz: string;
}

export interface MapDefinition {
  id: string;
  titleUz: string;
  titleOriginal: string;
  eraUz: string;
  dimensions: MapDimensions;
  defaultCenter: Point2D & { zoom: number };
  minZoom: number;
  maxZoom: number;
  assetUrl: string;
  provenance: MapProvenance;
}

export type RegisteredMapId = 'beleriand' | 'orta-yer';

export const DEFAULT_MAP_ID: RegisteredMapId = 'orta-yer';

export const REGISTERED_MAPS: Record<RegisteredMapId, MapDefinition> = {
  'orta-yer': {
    id: 'orta-yer',
    titleUz: 'Gʻarbiy Oʻrta-yer (Endor)',
    titleOriginal: 'West of Middle-earth',
    eraUz: 'Ikkinchi va Uchinchi davrlar',
    dimensions: {
      width: 2048,
      height: 2048,
    },
    defaultCenter: {
      x: 1024,
      y: 1024,
      zoom: -1,
    },
    minZoom: -2,
    maxZoom: 3,
    assetUrl: '/assets/maps/middle-earth-planar.svg',
    provenance: {
      cartographer: 'Tolkien Olami Kartografik Arxiv Guruhi',
      license: 'CC-BY-SA-4.0 / Scholar Archive',
      canonBasis: 'The Lord of the Rings (1954–1955) xaritasi va Pauline Baynes illyustratsiyalari',
      notesUz: 'Uchinchi davr oxiridagi Gʻarbiy Oʻrta-yer toponimikasi va geografik relyefi asosidagi vektorli planar xarita.',
    },
  },
  beleriand: {
    id: 'beleriand',
    titleUz: 'Beleriand va Shimoliy Oʻlkalar',
    titleOriginal: 'Beleriand and the Lands to the North',
    eraUz: 'Birinchi davr',
    dimensions: {
      width: 2048,
      height: 1536,
    },
    defaultCenter: {
      x: 1024,
      y: 768,
      zoom: -1,
    },
    minZoom: -2,
    maxZoom: 3,
    assetUrl: '/assets/maps/beleriand-planar.svg',
    provenance: {
      cartographer: 'Eric Gaba (Sting) / Tolkien Olami Ilmiy Arxiv Moslashtiruvi',
      license: 'CC-BY-SA-4.0 / Public Domain Scholar Archive',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Beleriand_general_map-fr.svg',
      canonBasis: 'The Silmarillion (1977) va Unfinished Tales (1980) geografik maʼlumotlari',
      notesUz: 'J.R.R. Tolkien va Christopher Tolkienning asl chizmalari asosida tuzilgan ochiq litsenziyali ilmiy planar vektor xarita.',
    },
  },
};

/**
 * Xarita identifikatori bo'yicha ta'rifni qaytaradi.
 */
export function getMapDefinition(id: string): MapDefinition | undefined {
  if (isValidMapId(id)) {
    return REGISTERED_MAPS[id as RegisteredMapId];
  }
  return undefined;
}

/**
 * Sukut bo'yicha asosiy xarita ta'rifini qaytaradi (Oʻrta-yer).
 */
export function getDefaultMap(): MapDefinition {
  return REGISTERED_MAPS[DEFAULT_MAP_ID];
}

/**
 * Ro'yxatdan o'tgan barcha xaritalar ro'yxatini qaytaradi.
 */
export function getAllMaps(): MapDefinition[] {
  return Object.values(REGISTERED_MAPS);
}

/**
 * Berilgan id ro'yxatdan o'tgan haqiqiy xarita ekanligini tekshiradi.
 */
export function isValidMapId(id: string): boolean {
  return typeof id === 'string' && Object.prototype.hasOwnProperty.call(REGISTERED_MAPS, id);
}
