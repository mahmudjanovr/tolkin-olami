/**
 * Tolkien Olami — Pagefind statik mijozini brauzerda xavfsiz yuklovchi utilit.
 *
 * Vite AST tahlilchisi statik importlarni kompilyatsiya vaqtida qidirib xatolik bermasligi uchun,
 * Pagefind moduli o'zgaruvchili URL orqali brauzerning standart dinamik importi bilan yuklanadi.
 * eval() yoki new Function() ishlatilmaydi.
 * Dev rejimida indeks bo'lmaganda graceful tarzda null qaytaradi.
 */
export async function loadPagefind(): Promise<any | null> {
  if (typeof window === 'undefined') return null;

  // Global keshdan qaytarish
  if ((window as any).__tolkien_pagefind) {
    return (window as any).__tolkien_pagefind;
  }

  try {
    const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
    const pagefindUrl = `${base}/pagefind/pagefind.js`.replace(/\/+/g, '/');

    // O'zgaruvchili URL va @vite-ignore izohi bilan standart brauzer dinamik importi
    const pagefindModule = await import(/* @vite-ignore */ pagefindUrl);

    if (pagefindModule && typeof pagefindModule.init === 'function') {
      await pagefindModule.init();
    }

    (window as any).__tolkien_pagefind = pagefindModule;
    return pagefindModule;
  } catch (error) {
    console.warn('[Pagefind load error]:', error);
    return null;
  }
}
