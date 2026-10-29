/**
 * Tolkien Olami — Map Cartographic Vector Icons
 * High-definition pen-and-ink SVG marker icons (No Unicode emojis)
 * Adapted for Tolkien Olami planar atlas architecture
 */

export type CartographicIconType =
  | 'capital'
  | 'fortress'
  | 'elven_refuge'
  | 'haven'
  | 'ruin'
  | 'tower'
  | 'settlement'
  | 'landmark'
  | 'monument'
  | 'falls'
  | 'gate'
  | 'marsh'
  | 'battle';

/**
 * 13 authentic hand-drawn cartographic vector SVG icons
 */
export const CARTOGRAPHIC_ICONS: Record<CartographicIconType, string> = {
  // Settlements & Strongholds
  capital: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10.5" fill="#FAF7EE" stroke="#99732E" stroke-width="1.6"/><path d="M5.5 16.5 L18.5 16.5 L18.5 12 L16.5 12 L16.5 10 L14.5 10 L14.5 12 L13 12 L13 8.5 L11 8.5 L11 12 L9.5 12 L9.5 10 L7.5 10 L7.5 12 L5.5 12 Z" fill="#1C1A16"/><polygon points="12,5.5 12.8,7.2 14.5,7.5 13.2,8.7 13.6,10.5 12,9.6 10.4,10.5 10.8,8.7 9.5,7.5 11.2,7.2" fill="#99732E"/></svg>`,
  fortress: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="#FAF7EE" stroke="#1C1A16" stroke-width="1.4"/><path d="M7 6.5 L17 6.5 L17 12 C17 15.5 12 18.5 12 18.5 C12 18.5 7 15.5 7 12 Z" fill="#2E2A24" stroke="#1C1A16" stroke-width="1.1"/><path d="M9 6.5 L9 9 L11 9 L11 6.5 M13 6.5 L13 9 L15 9 L15 6.5" stroke="#FAF7EE" stroke-width="0.9"/><line x1="12" y1="10.5" x2="12" y2="14" stroke="#FAF7EE" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  elven_refuge: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="#FAF7EE" stroke="#3D5A50" stroke-width="1.4"/><path d="M12 4 L13.5 9.5 L19 8 L14.5 12 L19 16 L13.5 14.5 L12 20 L10.5 14.5 L5 16 L9.5 12 L5 8 L10.5 9.5 Z" fill="#2D4A3E" stroke="#1D3028" stroke-width="0.8"/><circle cx="12" cy="12" r="2.2" fill="#FAF7EE"/></svg>`,
  haven: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="#FAF7EE" stroke="#2C4C5E" stroke-width="1.4"/><circle cx="12" cy="7" r="1.8" stroke="#1D3644" stroke-width="1.2"/><line x1="12" y1="8.8" x2="12" y2="17" stroke="#1D3644" stroke-width="1.4"/><line x1="8.5" y1="11" x2="15.5" y2="11" stroke="#1D3644" stroke-width="1.2"/><path d="M7 14 C7 18 17 18 17 14" stroke="#1D3644" stroke-width="1.4" stroke-linecap="round"/><path d="M6 13.5 L7 14.5 M18 13.5 L17 14.5" stroke="#1D3644" stroke-width="1.3" stroke-linecap="round"/></svg>`,
  ruin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="#FAF7EE" stroke="#635B4E" stroke-width="1.3"/><path d="M6 17 L18 17 M6.5 17 L6.5 9 M10 17 L10 12 M13.5 17 L13.5 9 M17.5 17 L17.5 7" stroke="#3D372E" stroke-width="1.3" stroke-linecap="round"/><path d="M5.5 9 L14.5 9 M16.5 7 L18.5 7" stroke="#3D372E" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  tower: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="#FAF7EE" stroke="#1C1A16" stroke-width="1.3"/><path d="M9.5 17.5 L14.5 17.5 L13.5 9 L10.5 9 Z" fill="#2E2A24" stroke="#1C1A16" stroke-width="1.1"/><path d="M9 9 L15 9 L15 7.5 L14 7.5 L14 8 L13 8 L13 7.5 L11 7.5 L11 8 L10 8 L10 7.5 L9 7.5 Z" fill="#1C1A16"/><line x1="12" y1="11.5" x2="12" y2="14" stroke="#FAF7EE" stroke-width="1.1" stroke-linecap="round"/></svg>`,
  settlement: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="#FAF7EE" stroke="#1C1A16" stroke-width="1.3"/><path d="M7 16.5 L7 12.5 L12 8.5 L17 12.5 L17 16.5 Z" fill="#3D372E" stroke="#1C1A16" stroke-width="1.0"/><rect x="10.5" y="13.5" width="3" height="3" fill="#FAF7EE"/></svg>`,

  // Landmarks & Geographical features
  landmark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9.5" fill="#FAF7EE" stroke="#524C42" stroke-width="1.2"/><path d="M9 16 L9 9.5 L11.5 8 L11.5 16 Z" fill="#3D372E" stroke="#1C1A16" stroke-width="0.9"/><path d="M12.5 16 L12.5 10.5 L15 9.5 L15 16 Z" fill="#4A443B" stroke="#1C1A16" stroke-width="0.9"/><line x1="7" y1="16.5" x2="17" y2="16.5" stroke="#1C1A16" stroke-width="1.1" stroke-linecap="round"/></svg>`,
  monument: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9.5" fill="#FAF7EE" stroke="#524C42" stroke-width="1.2"/><path d="M8 17 L16 17 L15 7 L9 7 Z" fill="#3D372E" stroke="#1C1A16" stroke-width="1.0"/><polygon points="12,4 14,7 10,7" fill="#99732E"/></svg>`,
  falls: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9.5" fill="#FAF7EE" stroke="#3A5560" stroke-width="1.2"/><path d="M7 8 L17 8 M7 12 L17 12" stroke="#2B4652" stroke-width="1.2" stroke-linecap="round"/><path d="M9 8 L9 16 M12 8 L12 17 M15 8 L15 16" stroke="#487285" stroke-width="1.1" stroke-dasharray="2 1.5"/></svg>`,
  gate: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9.5" fill="#FAF7EE" stroke="#1C1A16" stroke-width="1.2"/><path d="M7.5 16.5 L7.5 11 C7.5 8.5 9.5 6.5 12 6.5 C14.5 6.5 16.5 8.5 16.5 11 L16.5 16.5" stroke="#1C1A16" stroke-width="1.4"/><line x1="9.5" y1="9" x2="9.5" y2="16.5" stroke="#1C1A16" stroke-width="0.9"/><line x1="12" y1="7" x2="12" y2="16.5" stroke="#1C1A16" stroke-width="0.9"/><line x1="14.5" y1="9" x2="14.5" y2="16.5" stroke="#1C1A16" stroke-width="0.9"/><line x1="7.5" y1="12.5" x2="16.5" y2="12.5" stroke="#1C1A16" stroke-width="0.9"/></svg>`,
  marsh: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9.5" fill="#FAF7EE" stroke="#485542" stroke-width="1.2"/><line x1="12" y1="16" x2="12" y2="7.5" stroke="#384532" stroke-width="1.2" stroke-linecap="round"/><line x1="9" y1="16" x2="8" y2="9.5" stroke="#384532" stroke-width="1.1" stroke-linecap="round"/><line x1="15" y1="16" x2="16" y2="9.5" stroke="#384532" stroke-width="1.1" stroke-linecap="round"/><ellipse cx="12" cy="8.5" rx="0.9" ry="2" fill="#384532"/><ellipse cx="8.2" cy="10.5" rx="0.8" ry="1.8" fill="#384532"/><ellipse cx="15.8" cy="10.5" rx="0.8" ry="1.8" fill="#384532"/><line x1="6.5" y1="16" x2="17.5" y2="16" stroke="#485542" stroke-width="1.2" stroke-linecap="round"/></svg>`,

  // Historical Events & Battles
  battle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="#8B2500" stroke="#FAF7EE" stroke-width="1.4"/><path d="M6 6 L18 18" stroke="#FAF7EE" stroke-width="1.6" stroke-linecap="round"/><path d="M15 19 L19 15" stroke="#FAF7EE" stroke-width="1.3" stroke-linecap="round"/><path d="M18 6 L6 18" stroke="#FAF7EE" stroke-width="1.6" stroke-linecap="round"/><path d="M9 19 L5 15" stroke="#FAF7EE" stroke-width="1.3" stroke-linecap="round"/><circle cx="12" cy="12" r="1.5" fill="#D4AF37"/></svg>`,
};

/**
 * Place ID overrides for canonical locations in Tolkien's legendarium
 */
export const PLACE_ID_ICON_OVERRIDES: Record<string, CartographicIconType> = {
  'barad-dur': 'tower',
  'gondolin': 'capital',
  'minas-tirith': 'capital',
  'menegroth': 'elven_refuge',
  'nargothrond': 'elven_refuge',
  'rivendell': 'elven_refuge',
  'michel-delving': 'capital',
  'brandywine-bridge': 'gate',
  'buckland': 'landmark',
  'tuckborough': 'settlement',
  'bywater': 'settlement',
  'hobbiton': 'settlement',
  'bree': 'settlement',
  'amon-sul': 'tower',
  'ered-luin': 'landmark',
  'isengard': 'tower',
  'lothlorien': 'elven_refuge',
  'edoras': 'capital',
  'helms-deep': 'fortress',
  'osgiliath': 'ruin',
  'pelargir': 'haven',
  'khazad-dum': 'fortress',
  'erebor': 'capital',
  'amon-hen': 'landmark',
  dunharrow: 'fortress',
  'paths-of-the-dead': 'gate',
  'dead-marshes': 'marsh',
  morannon: 'gate',
  'henneth-annun': 'falls',
  'cirith-ungol': 'tower',
  orodruin: 'landmark',
};

/**
 * Default icon type mapping based on destination placeSchema.type
 */
export const PLACE_TYPE_DEFAULT_MAP: Record<string, CartographicIconType> = {
  shahar: 'settlement',
  qirollik: 'capital',
  'qalʼa': 'fortress',
  'togʻ': 'landmark',
  daryo: 'falls',
  'oʻlka': 'landmark',
};

/**
 * Resolves the appropriate CartographicIconType for a given place entity
 */
export function mapPlaceToIconType(place: { id: string; type: string }): CartographicIconType {
  const override = PLACE_ID_ICON_OVERRIDES[place.id];
  if (override) {
    return override;
  }
  const defaultType = PLACE_TYPE_DEFAULT_MAP[place.type];
  if (defaultType) {
    return defaultType;
  }
  return 'settlement';
}

/**
 * Returns the SVG string for a given icon type with safe fallback
 */
export function getCartographicIcon(iconType: string): string {
  if (iconType in CARTOGRAPHIC_ICONS) {
    return CARTOGRAPHIC_ICONS[iconType as CartographicIconType];
  }
  return CARTOGRAPHIC_ICONS.settlement;
}

/**
 * Convenience helper to get the icon SVG for a place entity directly
 */
export function getPlaceIconSvg(place: { id: string; type: string }): string {
  const iconType = mapPlaceToIconType(place);
  return getCartographicIcon(iconType);
}

/**
 * Returns importance / priority score for collision avoidance ordering
 */
export function getPlacePriority(place: { id: string; type: string }): number {
  const highPriority = ['minas-tirith', 'gondolin', 'barad-dur', 'orodruin'];
  if (highPriority.includes(place.id)) return 100;

  const majorStrongholds = ['khazad-dum', 'erebor', 'lothlorien', 'isengard', 'morannon'];
  if (majorStrongholds.includes(place.id)) return 85;

  const mediumPriority = ['rivendell', 'nargothrond', 'menegroth', 'cirith-ungol'];
  if (mediumPriority.includes(place.id)) return 75;

  const regionalStrongholds = ['edoras', 'helms-deep', 'osgiliath', 'pelargir', 'henneth-annun', 'dead-marshes'];
  if (regionalStrongholds.includes(place.id)) return 70;

  const shirePriorityMap: Record<string, number> = {
    'hobbiton': 72,
    'michel-delving': 70,
    'brandywine-bridge': 68,
    'buckland': 67,
    'bywater': 66,
    'tuckborough': 65,
  };
  if (shirePriorityMap[place.id] !== undefined) {
    return shirePriorityMap[place.id]!;
  }

  if (place.id === 'ered-luin') return 62;
  if (place.id === 'bree') return 60;
  if (place.id === 'amon-sul') return 58;

  if (place.type === 'shahar' || place.type === 'qirollik') return 60;
  if (place.type === 'qalʼa') return 50;
  return 30;
}

/**
 * Concise, clutter-free label for interactive map badges.
 * Strips secondary parenthetical translations to prevent wide text overlaps.
 */
export function getPlaceShortLabel(place: { id: string; name: string }): string {
  const overrides: Record<string, string> = {
    'hobbiton': 'Hobbiton',
    'bywater': 'Bywater',
    'michel-delving': 'Michel Delving',
    'tuckborough': 'Tuckborough',
    'brandywine-bridge': 'Toshkoʻprik',
    'buckland': 'Bukland',
    'minas-tirith': 'Minas Tirith',
    'barad-dur': 'Barad-dûr',
    'rivendell': 'Rivendell',
    'gondolin': 'Gondolin',
    'menegroth': 'Menegroth',
    'nargothrond': 'Nargothrond',
    'bree': 'Bri',
    'amon-sul': 'Amon Sûl',
    'ered-luin': 'Ered Luin',
    'isengard': 'Isengard',
    'lothlorien': 'Lothlórien',
    'edoras': 'Edoras',
    'helms-deep': 'Helm jarligi',
    'osgiliath': 'Osgiliath',
    'pelargir': 'Pelargir',
    'khazad-dum': 'Khazad-dûm',
    'erebor': 'Erebor',
    'dead-marshes': 'Oʻlik Botqoqliklar',
    'morannon': 'Morannon',
    'henneth-annun': 'Henneth Annûn',
    'cirith-ungol': 'Cirith Ungol',
    'orodruin': 'Orodruin',
  };
  const override = overrides[place.id];
  if (override) {
    return override;
  }
  if (place.name.includes('(')) {
    const parts = place.name.split('(');
    const first = parts[0];
    if (first) {
      return first.trim();
    }
  }
  return place.name;
}

/**
 * Zoom level threshold for Level of Detail (LoD) rendering.
 * - Far zoom (zoom <= -1): Major capitals, fortresses, and primary Shire settlement (Hobbiton).
 * - Medium zoom (zoom === 0): Regional centers (Michel Delving, Brandywine Bridge, Menegroth, Nargothrond).
 * - Close zoom (zoom >= 1): Minor settlements (Bywater, Tuckborough, Buckland).
 */
export function getPlaceMinZoom(place: { id: string; type: string }): number {
  // Principal world capitals and primary Shire landmark
  const primaryPlaces = [
    'minas-tirith',
    'barad-dur',
    'gondolin',
    'rivendell',
    'hobbiton',
    'khazad-dum',
    'erebor',
    'isengard',
    'lothlorien',
    'orodruin',
  ];
  if (primaryPlaces.includes(place.id)) {
    return -2;
  }

  if (place.id === 'ered-luin') {
    return -1;
  }

  // Regional hubs visible at medium zoom (0)
  const regionalHubs = [
    'michel-delving',
    'brandywine-bridge',
    'nargothrond',
    'menegroth',
    'bree',
    'amon-sul',
    'edoras',
    'helms-deep',
    'osgiliath',
    'pelargir',
    'morannon',
    'cirith-ungol',
    'henneth-annun',
    'dead-marshes',
  ];
  if (regionalHubs.includes(place.id)) {
    return 0;
  }

  if (place.type === 'qirollik') {
    return -1;
  }

  // Minor settlements & local landmarks visible at close zoom (1+)
  return 1;
}

/**
 * Canonical preferred label placement direction to minimize cluster collisions
 * (especially in dense regions like the Shire and Eriador).
 */
export function getPlacePreferredDirection(
  place: { id: string; type?: string }
): 'right' | 'left' | 'top' | 'bottom' {
  const preferredByPlaceId: Record<string, 'right' | 'left' | 'top' | 'bottom'> = {
    'hobbiton': 'top',
    'bywater': 'right',
    'michel-delving': 'left',
    'tuckborough': 'bottom',
    'brandywine-bridge': 'top',
    'buckland': 'right',
    'minas-tirith': 'left',
    'barad-dur': 'right',
    'rivendell': 'left',
    'gondolin': 'right',
    'menegroth': 'left',
    'nargothrond': 'right',
    'bree': 'bottom',
    'amon-sul': 'top',
    'ered-luin': 'right',
    'isengard': 'left',
    'lothlorien': 'right',
    'edoras': 'top',
    'helms-deep': 'left',
    'osgiliath': 'top',
    'pelargir': 'bottom',
    'khazad-dum': 'left',
    'erebor': 'right',
    'dead-marshes': 'left',
    'morannon': 'top',
    'henneth-annun': 'left',
    'cirith-ungol': 'right',
    'orodruin': 'bottom',
  };
  return preferredByPlaceId[place.id] ?? 'right';
}

export type GeographicLabelCategory =
  | 'region'
  | 'subregion'
  | 'settlement'
  | 'landmark'
  | 'river'
  | 'road'
  | 'local';

export interface GeographicLabelDefinition {
  id: string;
  name: string;
  region: 'orta-yer' | 'beleriand';
  x: number;
  y: number;
  category: GeographicLabelCategory;
  priority: number;
  minZoom: number;
  preferredPos?: 'right' | 'left' | 'top' | 'bottom';
  /**
   * True if the label is engraved in the base SVG typography layer
   * (so it reserves collision space without creating a duplicate DOM node).
   */
  renderedInSvg?: boolean;
  /**
   * Optional canonical place ID if this geographic feature corresponds to a place.
   */
  placeId?: string;
}

/**
 * Hierarchical zoom-aware geographic labels for Middle-earth and Beleriand:
 * - Far zoom (minZoom <= -1): Major regions, realms, and great rivers (priority 80–95)
 * - Medium zoom (minZoom === 0): Significant landmarks, roads, and secondary settlements (priority 52–62)
 * - Close zoom (minZoom >= 1): Local features, farthings, bridges, and minor place names (priority 30–48)
 */
export const GEOGRAPHIC_LABELS: readonly GeographicLabelDefinition[] = [
  // === O'RTA-YER: Far Zoom (Major Regions & Rivers engraved in SVG) ===
  {
    id: 'geo-shire',
    name: 'SHIR',
    region: 'orta-yer',
    x: 495,
    y: 1500,
    category: 'region',
    priority: 95,
    minZoom: -2,
    preferredPos: 'top',
    renderedInSvg: true,
  },
  {
    id: 'geo-eriador',
    name: 'ERIADOR',
    region: 'orta-yer',
    x: 690,
    y: 1555,
    category: 'region',
    priority: 92,
    minZoom: -2,
    preferredPos: 'top',
    renderedInSvg: true,
  },
  {
    id: 'geo-lindon',
    name: 'LINDON',
    region: 'orta-yer',
    x: 240,
    y: 1598,
    category: 'region',
    priority: 86,
    minZoom: -2,
    preferredPos: 'left',
    renderedInSvg: false,
  },
  {
    id: 'geo-arnor',
    name: 'ARNOR',
    region: 'orta-yer',
    x: 620,
    y: 1608,
    category: 'region',
    priority: 88,
    minZoom: -1,
    preferredPos: 'top',
    renderedInSvg: false,
  },
  {
    id: 'geo-mithlond',
    name: 'Mithlond (Kulrang Bandargohlar)',
    region: 'orta-yer',
    x: 350,
    y: 1538,
    category: 'settlement',
    priority: 64,
    minZoom: -1,
    preferredPos: 'left',
    renderedInSvg: false,
  },
  {
    id: 'geo-rohan',
    name: 'ROHAN',
    region: 'orta-yer',
    x: 1020,
    y: 768,
    category: 'region',
    priority: 90,
    minZoom: -2,
    preferredPos: 'top',
    renderedInSvg: true,
  },
  {
    id: 'geo-gondor',
    name: 'GONDOR',
    region: 'orta-yer',
    x: 1080,
    y: 528,
    category: 'region',
    priority: 92,
    minZoom: -2,
    preferredPos: 'bottom',
    renderedInSvg: true,
  },
  {
    id: 'geo-mordor',
    name: 'MORDOR',
    region: 'orta-yer',
    x: 1560,
    y: 568,
    category: 'region',
    priority: 92,
    minZoom: -2,
    preferredPos: 'bottom',
    renderedInSvg: true,
  },
  {
    id: 'geo-mirkwood',
    name: 'BUYUK ZULMATZOR',
    region: 'orta-yer',
    x: 1400,
    y: 1428,
    category: 'region',
    priority: 88,
    minZoom: -1,
    preferredPos: 'top',
    renderedInSvg: true,
  },
  {
    id: 'geo-anduin',
    name: 'Buyuk Anduin Daryosi',
    region: 'orta-yer',
    x: 1170,
    y: 1188,
    category: 'river',
    priority: 84,
    minZoom: -1,
    preferredPos: 'right',
    renderedInSvg: true,
  },
  {
    id: 'geo-baranduin',
    name: 'Brendivin (Baranduin)',
    region: 'orta-yer',
    x: 590,
    y: 1268,
    category: 'river',
    priority: 80,
    minZoom: -1,
    preferredPos: 'right',
    renderedInSvg: true,
  },

  // === O'RTA-YER: Medium Zoom (Significant Landmarks, Roads & Secondary Settlements) ===
  {
    id: 'geo-fornost',
    name: 'Fornost (Shimol Qasri)',
    region: 'orta-yer',
    x: 650,
    y: 1558,
    category: 'settlement',
    priority: 56,
    minZoom: 0,
    preferredPos: 'right',
    renderedInSvg: false,
  },
  {
    id: 'geo-greenway',
    name: 'Yashil Yoʻl (Greenway)',
    region: 'orta-yer',
    x: 646,
    y: 1468,
    category: 'road',
    priority: 50,
    minZoom: 0,
    preferredPos: 'right',
    renderedInSvg: false,
  },
  {
    id: 'geo-mitheithel',
    name: 'Mitheithel (Hoarwell)',
    region: 'orta-yer',
    x: 785,
    y: 1455,
    category: 'river',
    priority: 68,
    minZoom: 0,
    preferredPos: 'right',
    renderedInSvg: false,
  },
  {
    id: 'geo-trollshaws',
    name: 'Trollshaws',
    region: 'orta-yer',
    x: 840,
    y: 1413,
    category: 'landmark',
    priority: 56,
    minZoom: 0,
    preferredPos: 'top',
    renderedInSvg: false,
  },
  {
    id: 'geo-emyn-beraid',
    name: 'Emyn Beraid',
    region: 'orta-yer',
    x: 375,
    y: 1382,
    category: 'landmark',
    priority: 54,
    minZoom: 0,
    preferredPos: 'left',
    renderedInSvg: false,
  },
  {
    id: 'geo-great-east-road',
    name: 'Buyuk Sharqiy Yoʻl',
    region: 'orta-yer',
    x: 755,
    y: 1396,
    category: 'road',
    priority: 52,
    minZoom: 0,
    preferredPos: 'bottom',
    renderedInSvg: false,
  },

  // === O'RTA-YER: Close Zoom (Local Features, Farthings & Minor Places) ===
  {
    id: 'geo-north-farthing',
    name: 'Shimoliy Toʻrtlik',
    region: 'orta-yer',
    x: 495,
    y: 1468,
    category: 'local',
    priority: 46,
    minZoom: 1,
    preferredPos: 'top',
    renderedInSvg: false,
  },
  {
    id: 'geo-west-farthing',
    name: 'Gʻarbiy Toʻrtlik',
    region: 'orta-yer',
    x: 435,
    y: 1435,
    category: 'local',
    priority: 45,
    minZoom: 1,
    preferredPos: 'left',
    renderedInSvg: false,
  },
  {
    id: 'geo-east-farthing',
    name: 'Sharqiy Toʻrtlik',
    region: 'orta-yer',
    x: 555,
    y: 1435,
    category: 'local',
    priority: 45,
    minZoom: 1,
    preferredPos: 'right',
    renderedInSvg: false,
  },
  {
    id: 'geo-south-farthing',
    name: 'Janubiy Toʻrtlik',
    region: 'orta-yer',
    x: 505,
    y: 1340,
    category: 'local',
    priority: 45,
    minZoom: 1,
    preferredPos: 'bottom',
    renderedInSvg: false,
  },
  {
    id: 'geo-last-bridge',
    name: 'Oxirgi Koʻprik',
    region: 'orta-yer',
    x: 790,
    y: 1413,
    category: 'landmark',
    priority: 44,
    minZoom: 1,
    preferredPos: 'bottom',
    renderedInSvg: false,
  },
  {
    id: 'geo-green-hills',
    name: 'Green Hill Country',
    region: 'orta-yer',
    x: 530,
    y: 1360,
    category: 'local',
    priority: 38,
    minZoom: 2,
    preferredPos: 'bottom',
    renderedInSvg: false,
  },
  {
    id: 'geo-high-hay',
    name: 'High Hay',
    region: 'orta-yer',
    x: 618,
    y: 1374,
    category: 'local',
    priority: 35,
    minZoom: 2,
    preferredPos: 'right',
    renderedInSvg: false,
  },
  {
    id: 'geo-three-farthing-stone',
    name: 'Uch Toʻrtlik Toshi',
    region: 'orta-yer',
    x: 508,
    y: 1405,
    category: 'local',
    priority: 32,
    minZoom: 2,
    preferredPos: 'bottom',
    renderedInSvg: false,
  },

  // === BELERIAND: Far, Medium & Close Zoom Geographic Labels ===
  {
    id: 'geo-doriath',
    name: 'DORIATH',
    region: 'beleriand',
    x: 1120,
    y: 756,
    category: 'region',
    priority: 92,
    minZoom: -2,
    preferredPos: 'right',
    renderedInSvg: true,
  },
  {
    id: 'geo-hithlum',
    name: 'HITHLUM',
    region: 'beleriand',
    x: 680,
    y: 1266,
    category: 'region',
    priority: 90,
    minZoom: -2,
    preferredPos: 'top',
    renderedInSvg: true,
  },
  {
    id: 'geo-ossiriand',
    name: 'OSSIRIAND',
    region: 'beleriand',
    x: 1600,
    y: 656,
    category: 'region',
    priority: 88,
    minZoom: -2,
    preferredPos: 'right',
    renderedInSvg: true,
  },
  {
    id: 'geo-sirion',
    name: 'Sirion Daryosi',
    region: 'beleriand',
    x: 910,
    y: 516,
    category: 'river',
    priority: 84,
    minZoom: -1,
    preferredPos: 'right',
    renderedInSvg: true,
  },
  {
    id: 'geo-thangorodrim',
    name: 'Thangorodrim',
    region: 'beleriand',
    x: 1020,
    y: 1420,
    category: 'landmark',
    priority: 60,
    minZoom: 0,
    preferredPos: 'bottom',
    renderedInSvg: false,
  },
  {
    id: 'geo-brethil',
    name: 'Brethil Oʻrmoni',
    region: 'beleriand',
    x: 860,
    y: 760,
    category: 'subregion',
    priority: 56,
    minZoom: 0,
    preferredPos: 'top',
    renderedInSvg: false,
  },
  {
    id: 'geo-nan-elmoth',
    name: 'Nan Elmoth',
    region: 'beleriand',
    x: 1380,
    y: 730,
    category: 'subregion',
    priority: 54,
    minZoom: 0,
    preferredPos: 'bottom',
    renderedInSvg: false,
  },
  {
    id: 'geo-taur-en-faroth',
    name: 'Taur-en-Faroth',
    region: 'beleriand',
    x: 660,
    y: 560,
    category: 'local',
    priority: 42,
    minZoom: 1,
    preferredPos: 'left',
    renderedInSvg: false,
  },
];

/**
 * Returns geographic label definitions for a specific region.
 */
export function getGeographicLabelsForRegion(regionId: string): GeographicLabelDefinition[] {
  return GEOGRAPHIC_LABELS.filter((label) => label.region === regionId);
}

