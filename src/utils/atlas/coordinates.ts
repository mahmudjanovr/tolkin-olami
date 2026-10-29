/**
 * TOLKIEN OLAMI — Atlas Planar Koordinatalar Utiliti
 *
 * Ushbu modul Leaflet L.CRS.Simple planar pikselli tekisligi va ilovaning
 * { x, y } koordinatalar modeli o'rtasidagi konvertatsiya va chegaralarni
 * tekshirish funksiyalarini ta'minlaydi.
 *
 * Konvensiya:
 * - Ilova ichida: { x: number, y: number }
 *   x = gorizontal piksel (0 dan kenglik W gacha)
 *   y = vertikal piksel (0 dan balandlik H gacha, geografik kartografiyada pastdan yuqoriga)
 * - Leaflet L.CRS.Simple tekisligida:
 *   [latitude, longitude] = [y, x]
 */

export interface Point2D {
  x: number;
  y: number;
}

export interface MapDimensions {
  width: number;
  height: number;
}

/**
 * Planar { x, y } koordinatasini Leaflet [latitude, longitude] juftligiga o'giradi.
 * Leaflet CRS.Simple da birinchi element Y (latitude), ikkinchi element X (longitude) dir.
 */
export function toLeafletLatLng(x: number, y: number): [number, number] {
  const safeX = Number.isFinite(x) ? x : 0;
  const safeY = Number.isFinite(y) ? y : 0;
  return [safeY, safeX];
}

/**
 * Leaflet [lat, lng] yoki { lat, lng } koordinatasidan ilova uchun { x, y }
 * planar pikselli nuqtasini qaytaradi.
 */
export function fromLeafletLatLng(latLng: [number, number] | { lat: number; lng: number }): Point2D {
  if (Array.isArray(latLng)) {
    const [lat, lng] = latLng;
    return {
      x: Math.round(Number.isFinite(lng) ? lng : 0),
      y: Math.round(Number.isFinite(lat) ? lat : 0),
    };
  }

  return {
    x: Math.round(Number.isFinite(latLng.lng) ? latLng.lng : 0),
    y: Math.round(Number.isFinite(latLng.lat) ? latLng.lat : 0),
  };
}

/**
 * Nuqtaning xarita chegaralari ichida ekanligini tekshiradi.
 */
export function isPointInBounds(point: Point2D, dimensions: MapDimensions): boolean {
  if (!Number.isFinite(point.x) || !Number.isFinite(point.y)) {
    return false;
  }
  return point.x >= 0 && point.x <= dimensions.width && point.y >= 0 && point.y <= dimensions.height;
}

/**
 * Koordinatalarni xarita chegaralari (0..width, 0..height) oralig'iga xavfsiz qirqadi (clamp).
 * Agar qiymat NaN yoki cheksiz bo'lsa, xaritaning markaziy nuqtasiga qaytaradi.
 */
export function clampCoordinates(point: Partial<Point2D>, dimensions: MapDimensions): Point2D {
  const defaultX = Math.round(dimensions.width / 2);
  const defaultY = Math.round(dimensions.height / 2);

  const rawX = point.x !== undefined && Number.isFinite(point.x) ? point.x : defaultX;
  const rawY = point.y !== undefined && Number.isFinite(point.y) ? point.y : defaultY;

  const clampedX = Math.max(0, Math.min(dimensions.width, Math.round(rawX)));
  const clampedY = Math.max(0, Math.min(dimensions.height, Math.round(rawY)));

  return { x: clampedX, y: clampedY };
}

/**
 * Leaflet maxBounds uchun planar to'rtburchak chegaralarini hisoblaydi:
 * [[0, 0], [height, width]]
 */
export function calculateMapBounds(dimensions: MapDimensions): [[number, number], [number, number]] {
  const safeW = Math.max(1, Math.round(dimensions.width));
  const safeH = Math.max(1, Math.round(dimensions.height));
  return [
    [0, 0],
    [safeH, safeW],
  ];
}

/**
 * Agar xarita manba o'lchami o'zgarsa (masalan, 2048px dan 4096px ga),
 * markerlarning mutlaq koordinatalarini moslashtiruvchi masshtab funksiyasi.
 */
export function scaleCoordinates(
  point: Point2D,
  fromDimensions: MapDimensions,
  toDimensions: MapDimensions
): Point2D {
  if (fromDimensions.width <= 0 || fromDimensions.height <= 0) {
    return { ...point };
  }

  const ratioX = toDimensions.width / fromDimensions.width;
  const ratioY = toDimensions.height / fromDimensions.height;

  return {
    x: Math.round(point.x * ratioX),
    y: Math.round(point.y * ratioY),
  };
}

/**
 * Planar kartografik { x, y } (pastdan yuqoriga Y) koordinatasini
 * SVG chizish tekisligidagi { svgX, svgY } (yuqoridan pastga SVG Y) koordinatasiga o'giradi.
 * svgX = x, svgY = totalHeight - y
 */
export function toSvgCoordinates(x: number, y: number, totalHeight = 2048): { svgX: number; svgY: number } {
  return {
    svgX: Math.round(x),
    svgY: Math.round(totalHeight - y),
  };
}

/**
 * SVG chizish tekisligidagi { svgX, svgY } (yuqoridan pastga) nuqtasini
 * planar kartografik { x, y } (pastdan yuqoriga) ga o'giradi.
 */
export function fromSvgCoordinates(svgX: number, svgY: number, totalHeight = 2048): Point2D {
  return {
    x: Math.round(svgX),
    y: Math.round(totalHeight - svgY),
  };
}

