export interface BreadcrumbItem {
  label: string;
  href?: string;
  position: number;
  isCurrent?: boolean;
}

export const SECTION_NAMES: Record<string, string> = {
  qahramonlar: 'Qahramonlar',
  xaritalar: 'Xaritalar va Joylar',
  nasabnomalar: 'Nasabnomalar',
  tarix: 'Tarix va Xronologiya',
  kitoblar: 'Kitoblar va Bibliografiya',
  olam: 'Arda va Kosmologiya',
  'xalqlar-va-tillar': 'Xalqlar va Tillar',
  tolkien: 'J.R.R. Tolkien',
  maqolalar: 'Ilmiy Maqolalar',
  qidiruv: 'Qidiruv',
};

/**
 * Berilgan qismlar ro'yxatidan tartiblangan non ushoqlari (breadcrumbs) massivini shakllantiradi.
 */
export function buildBreadcrumbs(
  items: Array<{ label: string; href?: string }>
): BreadcrumbItem[] {
  const allItems = [{ label: 'Bosh sahifa', href: '/' }, ...items];

  return allItems.map((item, index) => {
    const isLast = index === allItems.length - 1;
    return {
      label: item.label,
      href: isLast ? undefined : item.href,
      position: index + 1,
      isCurrent: isLast,
    };
  });
}
