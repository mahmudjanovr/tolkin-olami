/**
 * Tolkien Olami — Central Navigation Data & Information Architecture
 * 
 * Contains logical groups, destinations, metadata, and active route resolution.
 * Preserves all canonical routes across desktop mega menu and mobile navigation.
 */

export interface NavItem {
  id: string;
  href: string;
  label: string;
  sublabel: string;
  description: string;
  icon: 'star' | 'book' | 'crown' | 'compass' | 'tree' | 'spheres' | 'feather' | 'scroll' | 'document' | 'quill';
  badge?: string;
}

export interface NavGroup {
  id: string;
  title: string;
  subheading: string;
  description: string;
  quote: {
    text: string;
    source: string;
  };
  items: NavItem[];
}

export const NAV_GROUPS: NavGroup[] = [
  {
    id: 'legendarium',
    title: 'The Legendarium',
    subheading: 'Afsonalar Xazinasi',
    description: 'Birlamchi manbalar, muqaddas qoʻlyozmalar va buyuk qahramonlar solnomasi',
    quote: {
      text: '«Afsonalar — inson qalbining eng qadimiy va eng chuqur haqiqatlaridir.»',
      source: 'J.R.R. Tolkien, «On Fairy-Stories»',
    },
    items: [
      {
        id: 'home',
        href: '/',
        label: 'Bosh sahifa',
        sublabel: 'Akademik portal',
        description: 'Ensiklopediya bosh sahifasi va kirish qismi',
        icon: 'star',
        badge: 'Portal',
      },
      {
        id: 'kitoblar',
        href: '/kitoblar/',
        label: 'Kitoblar',
        sublabel: 'Bibliografiya va Kanon',
        description: 'Muallif nashrlari, tahrirlar va qoʻlyozmalar',
        icon: 'book',
        badge: 'Kanon',
      },
      {
        id: 'qahramonlar',
        href: '/qahramonlar/',
        label: 'Qahramonlar',
        sublabel: 'Prosopografiya',
        description: 'Ainur, Elflar, Insonlar va Mittilar solnomasi',
        icon: 'crown',
        badge: 'Katalog',
      },
    ],
  },
  {
    id: 'world',
    title: 'The World',
    subheading: 'Olam va Geografiya',
    description: 'Arda kosmologiyasi, interaktiv kartografik atlas, sulolalar va elf tillari',
    quote: {
      text: '«Dunyoni oʻrganish — uning xaritalari, shajaralari va tillarini anglashdan boshlanadi.»',
      source: 'Ilmiy tahririyat qaydi',
    },
    items: [
      {
        id: 'xaritalar',
        href: '/xaritalar/',
        label: 'Xaritalar',
        sublabel: 'Toponimik Atlas',
        description: 'Beleriand va Oʻrta-yer toponimikasi',
        icon: 'compass',
        badge: 'Atlas',
      },
      {
        id: 'nasabnomalar',
        href: '/nasabnomalar/',
        label: 'Nasabnomalar',
        sublabel: 'Sulolalar Shajarasi',
        description: 'Finwë, Elwë va Insonlar xonadonlari shajarasi',
        icon: 'tree',
        badge: 'Genealogiya',
      },
      {
        id: 'olam',
        href: '/olam/',
        label: 'Olam',
        sublabel: 'Kosmologiya va Metafizika',
        description: 'Eä olami, Boʻshliq va Arda ontologiyasi',
        icon: 'spheres',
        badge: 'Metafizika',
      },
      {
        id: 'xalqlar-va-tillar',
        href: '/xalqlar-va-tillar/',
        label: 'Xalqlar va tillar',
        sublabel: 'Filologiya va Yozuvlar',
        description: 'Elf tillari grammatikasi va Tengwar yozuvi',
        icon: 'feather',
        badge: 'Filologiya',
      },
    ],
  },
  {
    id: 'history',
    title: 'History & Scholarship',
    subheading: 'Tarix va Ilmiy Meros',
    description: 'Davrlar xronologiyasi, matnshunoslik tadqiqotlari va J.R.R. Tolkien biografiyasi',
    quote: {
      text: '«Matnshunoslik — har bir soʻz va har bir sananing ortidagi haqiqatni yoritadi.»',
      source: 'Oksford Tolkien seminari',
    },
    items: [
      {
        id: 'tarix',
        href: '/tarix/',
        label: 'Tarix',
        sublabel: 'Solnoma va Xronologiya',
        description: 'Buyuk davrlar, voqealar va janglar solnomasi',
        icon: 'scroll',
        badge: 'Solnoma',
      },
      {
        id: 'maqolalar',
        href: '/maqolalar/',
        label: 'Maqolalar',
        sublabel: 'Tahririyat Tadqiqotlari',
        description: 'Tahririyat tahlillari va ilmiy tadqiqotlar',
        icon: 'document',
        badge: 'Tadqiqot',
      },
      {
        id: 'tolkien',
        href: '/tolkien/',
        label: 'Tolkien',
        sublabel: 'Biografiya va Meros',
        description: 'Hayot yoʻli, sub-creation nazariyasi va merosi',
        icon: 'quill',
        badge: 'Biografiya',
      },
    ],
  },
];

/**
 * Normalizes URL path with trailing slash for consistent comparison.
 */
export function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  const clean = path.split('?')[0]?.split('#')[0] || '/';
  return clean.endsWith('/') ? clean : `${clean}/`;
}

/**
 * Checks whether an item's route is currently active, including nested detail routes.
 * The home page ('/') matches only exactly root.
 */
export function isRouteActive(itemHref: string, currentPath: string): boolean {
  const normCurrent = normalizePath(currentPath);
  const normItem = normalizePath(itemHref);

  if (normItem === '/') {
    return normCurrent === '/';
  }
  return normCurrent.startsWith(normItem);
}

/**
 * Checks whether any item in the group is active for the current path.
 */
export function isGroupActive(group: NavGroup, currentPath: string): boolean {
  return group.items.some((item) => isRouteActive(item.href, currentPath));
}

/**
 * Returns all active items for a path.
 */
export function getActiveItem(currentPath: string): NavItem | undefined {
  for (const group of NAV_GROUPS) {
    for (const item of group.items) {
      if (isRouteActive(item.href, currentPath)) {
        return item;
      }
    }
  }
  return undefined;
}
