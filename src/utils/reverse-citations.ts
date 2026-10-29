import {
  resolveBookCitation,
  GENERATED_ENTITY_ROUTES,
} from './entity-resolver';
import type { SourceRef } from '@/content/schemas';

export interface ReverseReferenceItem {
  id: string;
  title: string;
  href: string;
  collection: string;
  collectionLabel: string;
  chapters: string[];
}

export interface GenericContentEntry {
  id: string;
  collection: string;
  title?: string;
  name?: string;
  slug?: string;
  sources?: SourceRef[];
}

export interface ReferenceGroup {
  collection: string;
  label: string;
  items: ReverseReferenceItem[];
}

/**
 * Toʻplamlarning oʻzbekcha adabiy yorliqlari
 */
export const COLLECTION_LABELS: Record<string, string> = {
  characters: 'Qahramonlar',
  events: 'Tarixiy Voqealar',
  peoples: 'Xalqlar va Madaniyatlar',
  languages: 'Tillar va Yozuv Tizimlari',
  places: 'Toponimlar va Geografik Joylar',
  genealogies: 'Nasabnomalar',
  cosmology: 'Kosmologiya',
  articles: 'Ilmiy Maqolalar',
};

/**
 * Guruhlarni sahifada koʻrsatishning mantiqiy ketma-ketligi
 */
export const COLLECTION_ORDER: string[] = [
  'characters',
  'events',
  'peoples',
  'languages',
  'places',
  'genealogies',
  'cosmology',
  'articles',
];

/**
 * Manba slug'ining kanonik kitob identifikatoriga mos kelishini tekshiradi.
 * Toʻgʻridan-toʻgʻri tenglik, sinonimlar (aliases) va boʻsh joy/katta-kichik harflarni xavfsiz qayta ishlaydi.
 */
export function matchesBookSlug(
  sourceSlug: string | undefined | null,
  targetBookId: string
): boolean {
  if (!sourceSlug || typeof sourceSlug !== 'string') return false;
  const normalizedSource = sourceSlug.trim().toLowerCase();
  const normalizedTarget = targetBookId.trim().toLowerCase();

  if (!normalizedSource || !normalizedTarget) return false;

  // 1. Toʻgʻridan-toʻgʻri moslik
  if (normalizedSource === normalizedTarget) return true;

  // 2. Oksford bibliografik sinonimlari orqali yechish (masalan: lotr-fellowship -> the-lord-of-the-rings)
  const citation = resolveBookCitation(normalizedSource);
  if (citation && citation.id.trim().toLowerCase() === normalizedTarget) {
    return true;
  }

  return false;
}

/**
 * Entiti uchun kanonik statik marshrutni aniqlaydi.
 * Agar entiti statik marshrutga ega boʻlmasa, undefined qaytaradi (xavfsiz filtrlash uchun).
 */
export function resolveCanonicalRoute(entry: {
  id: string;
  collection: string;
  slug?: string;
}): string | undefined {
  const normId = entry.id.trim().toLowerCase();

  // 1. Avvalo GENERATED_ENTITY_ROUTES roʻyxatidan tekshirish
  if (GENERATED_ENTITY_ROUTES[normId]) {
    return GENERATED_ENTITY_ROUTES[normId];
  }
  if (entry.slug && GENERATED_ENTITY_ROUTES[entry.slug.trim().toLowerCase()]) {
    return GENERATED_ENTITY_ROUTES[entry.slug.trim().toLowerCase()];
  }

  // 2. Toʻplamlar boʻyicha standart statik marshrutlar
  switch (entry.collection) {
    case 'characters':
      return `/qahramonlar/${normId}/`;
    case 'events':
      return `/tarix/${normId}/`;
    case 'peoples':
    case 'languages':
      return `/xalqlar-va-tillar/${normId}/`;
    case 'articles':
      if (normId === 'jrr-tolkien-tarjimai-hol' || entry.slug === 'jrr-tolkien-tarjimai-hol') {
        return '/tolkien/tarjimai-hol/';
      }
      return `/maqolalar/${entry.slug || normId}/`;
    case 'genealogies':
      return `/nasabnomalar/${normId}/`;
    case 'cosmology':
      return `/olam/${normId}/`;
    case 'places':
      // Toponimlar faqat GENERATED_ENTITY_ROUTES da mavjud boʻlsa havolaga ega boʻladi
      return undefined;
    default:
      return undefined;
  }
}

/**
 * Berilgan kitobga teskari havola qiluvchi (reverse citation) barcha yozuvlarni topadi va
 * kanonik marshrut boʻyicha unikal qiladi (deduplicate).
 */
export function findReverseReferences(
  targetBookId: string,
  entries: GenericContentEntry[]
): ReverseReferenceItem[] {
  if (!targetBookId || !Array.isArray(entries)) return [];

  const normalizedBookId = targetBookId.trim().toLowerCase();
  const byRoute = new Map<string, ReverseReferenceItem>();

  for (const entry of entries) {
    if (!entry || !entry.id || !entry.collection) continue;

    // Kitoblar oʻz-oʻziga yoki boshqa kitoblarga teskari havola sifatida kirmaydi
    if (entry.collection === 'books') continue;

    // sources maydoni yoʻq, null yoki massiv boʻlmagan holatlarni xavfsiz chetlab oʻtish
    const sources = Array.isArray(entry.sources) ? entry.sources : [];
    if (sources.length === 0) continue;

    const matchingChapters: string[] = [];
    let hasMatch = false;

    for (const s of sources) {
      if (!s || typeof s !== 'object') continue;
      if (matchesBookSlug(s.book_slug, normalizedBookId)) {
        hasMatch = true;
        if (s.chapter && typeof s.chapter === 'string' && s.chapter.trim().length > 0) {
          const chap = s.chapter.trim();
          if (!matchingChapters.includes(chap)) {
            matchingChapters.push(chap);
          }
        }
      }
    }

    if (!hasMatch) continue;

    // Kanonik marshrutni tekshirish
    const href = resolveCanonicalRoute(entry);
    if (!href) continue; // Faol statik marshruti boʻlmagan yozuvlar chiqarilmaydi

    const title = entry.title || entry.name || entry.id;
    const collectionLabel = COLLECTION_LABELS[entry.collection] || entry.collection;

    if (byRoute.has(href)) {
      // Bir nechta bobdan iqtibos olingan boʻlsa, boblarni birlashtirish
      const existing = byRoute.get(href)!;
      for (const chap of matchingChapters) {
        if (!existing.chapters.includes(chap)) {
          existing.chapters.push(chap);
        }
      }
    } else {
      byRoute.set(href, {
        id: entry.id,
        title,
        href,
        collection: entry.collection,
        collectionLabel,
        chapters: matchingChapters,
      });
    }
  }

  return Array.from(byRoute.values());
}

/**
 * Teskari havolalarni toʻplamlar boʻyicha guruhlaydi va saralaydi.
 */
export function groupReverseReferences(
  items: ReverseReferenceItem[]
): ReferenceGroup[] {
  if (!Array.isArray(items) || items.length === 0) return [];

  const grouped = new Map<string, ReverseReferenceItem[]>();

  for (const item of items) {
    if (!grouped.has(item.collection)) {
      grouped.set(item.collection, []);
    }
    grouped.get(item.collection)!.push(item);
  }

  const result: ReferenceGroup[] = [];

  // Mantiqiy tartib boʻyicha guruhlarni joylashtirish
  for (const col of COLLECTION_ORDER) {
    if (grouped.has(col)) {
      const groupItems = grouped.get(col)!;
      // Guruh ichidagi elementlarni alfavit tartibida saralash
      groupItems.sort((a, b) => a.title.localeCompare(b.title, 'uz'));
      result.push({
        collection: col,
        label: COLLECTION_LABELS[col] || col,
        items: groupItems,
      });
      grouped.delete(col);
    }
  }

  // Roʻyxatda boʻlmagan boshqa toʻplamlar boʻlsa, oxiriga qoʻshish
  for (const [col, groupItems] of grouped.entries()) {
    groupItems.sort((a, b) => a.title.localeCompare(b.title, 'uz'));
    result.push({
      collection: col,
      label: COLLECTION_LABELS[col] || col,
      items: groupItems,
    });
  }

  return result;
}

/**
 * Astro getCollection yozuvini GenericContentEntry formatiga moslashtiruvchi yordamchi funksiya.
 */
export function normalizeAstroCollectionEntry(
  collectionName: string,
  entry: any
): GenericContentEntry {
  const data = entry.data || {};
  return {
    id: data.id || entry.id,
    collection: collectionName,
    title: data.title,
    name: data.name,
    slug: data.slug,
    sources: data.sources,
  };
}
