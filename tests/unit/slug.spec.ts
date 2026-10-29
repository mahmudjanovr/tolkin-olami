import { describe, it, expect } from 'vitest';
import { toCanonicalSlug, assertUniqueSlugs } from '@/utils/slug';

describe('toCanonicalSlug', () => {
  describe('Oʻzbek lotin alifbosi va turli apostrof belgilari', () => {
    it('U+02BB (modifier letter turned comma) bilan oʻ va gʻ ni toʻgʻri tekislaydi', () => {
      expect(toCanonicalSlug('Oʻlim va boqiylik mavzusi')).toBe('olim-va-boqiylik-mavzusi');
      expect(toCanonicalSlug('Gʻarbiy darvoza')).toBe('garbiy-darvoza');
      expect(toCanonicalSlug('Toʻrtinchi davr')).toBe('tortinchi-davr');
    });

    it('U+0027 (standart ASCII apostrof) bilan oʻ va gʻ ni toʻgʻri tekislaydi', () => {
      expect(toCanonicalSlug("O'rta-yer xalqlari")).toBe('orta-yer-xalqlari');
      expect(toCanonicalSlug("G'alaba nashidasi")).toBe('galaba-nashidasi');
    });

    it('U+2019 (oʻng yakka tirnoq) bilan oʻ va gʻ ni toʻgʻri tekislaydi', () => {
      expect(toCanonicalSlug('O’rta-yer')).toBe('orta-yer');
      expect(toCanonicalSlug('G’arb')).toBe('garb');
    });

    it('U+2018 (chap yakka tirnoq) bilan oʻ va gʻ ni toʻgʻri tekislaydi', () => {
      expect(toCanonicalSlug('O‘rta-yer')).toBe('orta-yer');
      expect(toCanonicalSlug('G‘ildirak')).toBe('gildirak');
    });

    it('U+02BC (modifier letter apostrophe) bilan oʻ va gʻ ni toʻgʻri tekislaydi', () => {
      expect(toCanonicalSlug('Oʼlka')).toBe('olka');
      expect(toCanonicalSlug('Gʼor')).toBe('gor');
    });

    it('Soʻz oʻrtasidagi tutuq belgilarini (sanʼat, qalʼa) toʻgʻri oʻchiradi', () => {
      expect(toCanonicalSlug("San'at va mahorat")).toBe('sanat-va-mahorat');
      expect(toCanonicalSlug('Sanʻat')).toBe('sanat');
      expect(toCanonicalSlug('Sanʼat')).toBe('sanat');
      expect(toCanonicalSlug('Qalʼa devori')).toBe('qala-devori');
    });
  });

  describe('Tolkien diakritikalari va maxsus harflar', () => {
    it('Trema / diaeresis (ë, ä, ö) belgilarini tozalaydi', () => {
      expect(toCanonicalSlug('Fëanor')).toBe('feanor');
      expect(toCanonicalSlug('Eärendil')).toBe('earendil');
      expect(toCanonicalSlug('Manwë')).toBe('manwe');
      expect(toCanonicalSlug('Bëor xonadoni')).toBe('beor-xonadoni');
    });

    it('Akut aksentlar (á, é, í, ó, ú) belgilarini tozalaydi', () => {
      expect(toCanonicalSlug('Númenor saltanati')).toBe('numenor-saltanati');
      expect(toCanonicalSlug('Lórien oʻrmoni')).toBe('lorien-ormoni');
      expect(toCanonicalSlug('Húrin bolalari')).toBe('hurin-bolalari');
      expect(toCanonicalSlug('Túrin Turambar')).toBe('turin-turambar');
    });

    it('Sirkumfleks (â, ê, î, ô, û) belgilarini tozalaydi', () => {
      expect(toCanonicalSlug('Barad-dûr qalʼasi')).toBe('barad-dur-qalasi');
      expect(toCanonicalSlug('Khazad-dûm')).toBe('khazad-dum');
    });

    it('Tilda va boshqa nodir harflarni (ñ) tozalaydi', () => {
      expect(toCanonicalSlug('Ñoldor')).toBe('noldor');
    });

    it('NFD va NFC Unicode normalizatsiyasida bir xil natija beradi', () => {
      const nfc = 'Fëanor'.normalize('NFC');
      const nfd = 'Fëanor'.normalize('NFD');
      expect(toCanonicalSlug(nfc)).toBe('feanor');
      expect(toCanonicalSlug(nfd)).toBe('feanor');
    });
  });

  describe('Boʻsh va yaroqsiz sluglar tekshiruvi', () => {
    it('Boʻsh qatorda xatolik qaytaradi', () => {
      expect(() => toCanonicalSlug('')).toThrowError(/bo‘sh/i);
    });

    it('Faqat boʻsh joylardan iborat matnda xatolik qaytaradi', () => {
      expect(() => toCanonicalSlug('     ')).toThrowError(/bo‘sh/i);
    });

    it('Faqat tire yoki yaroqsiz simvollardan iborat boʻlsa xatolik qaytaradi', () => {
      expect(() => toCanonicalSlug('---')).toThrowError(/bo‘sh/i);
      expect(() => toCanonicalSlug('ʻʼ\'`')).toThrowError(/bo‘sh/i);
    });
  });
});

describe('assertUniqueSlugs', () => {
  it('Barcha sluglar betakror boʻlsa, xatosiz muvaffaqiyatli oʻtadi', () => {
    const entries = [
      { id: 'feanor', slug: 'feanor' },
      { id: 'fingolfin', slug: 'fingolfin' },
      { id: 'finarfin', slug: 'finarfin' },
    ];
    expect(() => assertUniqueSlugs(entries, 'characters')).not.toThrow();
  });

  it('Takrorlangan slug aniqlanganda tushunarli collision xatosi tashlaydi', () => {
    const entries = [
      { id: 'morwen-eledhwen', slug: 'morwen' },
      { id: 'morwen-steelsheen', slug: 'morwen' },
    ];
    expect(() => assertUniqueSlugs(entries, 'characters')).toThrowError(
      /\[Slug Collision\] "characters" to'plamida to'qnashuv aniqlandi/
    );
  });

  it('Boʻsh slug uchrasa, xatolik tashlaydi', () => {
    const entries = [{ id: 'nomsiz', slug: '' }];
    expect(() => assertUniqueSlugs(entries, 'characters')).toThrowError(/\[Empty Slug\]/);
  });
});
