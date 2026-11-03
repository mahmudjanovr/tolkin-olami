/**
 * TOLKIEN OLAMI — Sulolalar Boʻyicha Tanlangan (Featured) Qahramonlar
 *
 * Har bir sulola yuklanganda, daraxt sukut boʻyicha asoschiga emas, balki
 * ushbu asosiy xalqaro va asardagi markaziy qahramonga fokuslanadi.
 */

export const FEATURED_MEMBERS: Record<string, string> = {
  'finwe-xonadoni': 'feanor',
  'rohan-shohlari': 'theoden',
  'durin-avlodlari': 'thorin-oakenshield',
  'elros-va-gondor-shohlari': 'aragorn',
  'edain-va-yarim-elflar': 'beren',
  'shayr-xonadonlari': 'frodo-baggins',
};

export function getFeaturedPersonId(dynastyId: string, fallbackRootId: string): string {
  return FEATURED_MEMBERS[dynastyId] || fallbackRootId;
}
