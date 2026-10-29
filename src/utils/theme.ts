/**
 * TOLKIEN OLAMI — Mavzu Boshqaruvi (Light, Night, System)
 */

export type ThemeMode = 'light' | 'night' | 'system';

export const THEME_STORAGE_KEY = 'tolkien-theme';

/**
 * Mahalliy saqlagichdan (localStorage) saqlangan mavzuni o'qiydi.
 */
export function getStoredTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'system';
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'night' || stored === 'system') {
      return stored;
    }
  } catch {
    // Shaxsiy rejimda (incognito) localStorage bloklangan bo'lsa
  }
  return 'system';
}

/**
 * Operatsion tizimning joriy afzalligini aniqlaydi.
 */
export function getSystemPreference(): 'light' | 'night' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'light';
}

/**
 * DOM ildiziga (documentElement) mavzu atributlarini qo'llaydi.
 */
export function applyTheme(theme: ThemeMode): void {
  if (typeof document === 'undefined') return;

  const appliedMode = theme === 'system' ? getSystemPreference() : theme;

  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.setAttribute('data-applied-mode', appliedMode);
}

/**
 * Foydalanuvchi tanlagan mavzuni saqlaydi va qo'llaydi.
 */
export function setTheme(theme: ThemeMode): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // localStorage xatolarini xavfsiz o'tkazib yuborish
  }
  applyTheme(theme);
}

/**
 * Tizim dark/light rejimi o'zgarganda 'system' rejimini yangilab boruvchi tinglovchi.
 */
export function initThemeListener(): () => void {
  if (typeof window === 'undefined') return () => {};

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handler = () => {
    const currentTheme = getStoredTheme();
    if (currentTheme === 'system') {
      applyTheme('system');
    }
  };

  mediaQuery.addEventListener('change', handler);
  return () => mediaQuery.removeEventListener('change', handler);
}
