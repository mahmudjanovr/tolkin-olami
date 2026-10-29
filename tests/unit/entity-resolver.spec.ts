import { describe, it, expect } from 'vitest';
import {
  resolveEntityLink,
  resolveEntityLinks,
  resolveBookCitation,
  checkSlugCollisions,
} from '../../src/utils/entity-resolver';

describe('Entity Link Resolver va Knowledge Graph Sinovlari', () => {
  describe('resolveEntityLink', () => {
    it('Kanonik qahramonni toʻgʻri marshrutga va nomga yechadi', () => {
      const resolved = resolveEntityLink('feanor');
      expect(resolved.isKnown).toBe(true);
      expect(resolved.name).toBe('Fëanor');
      expect(resolved.href).toBe('/qahramonlar/feanor/');
      expect(resolved.collection).toBe('characters');
    });

    it('Toponim/joyni atlas marshrutiga toʻgʻri URL parametri bilan yechadi', () => {
      const resolved = resolveEntityLink('gondolin');
      expect(resolved.isKnown).toBe(true);
      expect(resolved.name).toBe('Gondolin');
      expect(resolved.href).toBe('/xaritalar/?joy=gondolin');
      expect(resolved.collection).toBe('places');

      const bree = resolveEntityLink('bree');
      expect(bree.isKnown).toBe(true);
      expect(bree.name).toBe('Bri (Bree)');
      expect(bree.href).toBe('/xaritalar/?joy=bree');
      expect(bree.collection).toBe('places');

      const amonSul = resolveEntityLink('amon-sul');
      expect(amonSul.isKnown).toBe(true);
      expect(amonSul.name).toBe('Amon Sûl (Shamol Choʻqqisi / Weathertop)');
      expect(amonSul.href).toBe('/xaritalar/?joy=amon-sul');
      expect(amonSul.collection).toBe('places');

      const eredLuin = resolveEntityLink('ered-luin');
      expect(eredLuin.isKnown).toBe(true);
      expect(eredLuin.name).toBe('Ered Luin (Moviy Togʻlar / Blue Mountains)');
      expect(eredLuin.href).toBe('/xaritalar/?joy=ered-luin');
      expect(eredLuin.collection).toBe('places');
    });

    it('Tarixiy voqeani toʻgʻri /tarix/[slug]/ marshrutiga yechadi', () => {
      const resolved = resolveEntityLink('nirnaeth-arnoediad');
      expect(resolved.isKnown).toBe(true);
      expect(resolved.name).toBe('Nirnaeth Arnoediad');
      expect(resolved.href).toBe('/tarix/nirnaeth-arnoediad/');
      expect(resolved.collection).toBe('events');
    });

    it('Xalq va tillarni bitta /xalqlar-va-tillar/[slug]/ boʻlimiga yechadi', () => {
      const people = resolveEntityLink('noldor');
      expect(people.isKnown).toBe(true);
      expect(people.href).toBe('/xalqlar-va-tillar/noldor/');

      const language = resolveEntityLink('quenya');
      expect(language.isKnown).toBe(true);
      expect(language.href).toBe('/xalqlar-va-tillar/quenya/');
    });

    it('Nasabnomani toʻgʻri /nasabnomalar/[slug]/ ga yechadi', () => {
      const resolved = resolveEntityLink('finwe-xonadoni');
      expect(resolved.isKnown).toBe(true);
      expect(resolved.href).toBe('/nasabnomalar/finwe-xonadoni/');
      expect(resolved.collection).toBe('genealogies');
    });

    it('Kosmologiya tushunchasini toʻgʻri /olam/[slug]/ ga yechadi', () => {
      const resolved = resolveEntityLink('ea');
      expect(resolved.isKnown).toBe(true);
      expect(resolved.href).toBe('/olam/ea/');
      expect(resolved.collection).toBe('cosmology');
    });

    it('Beren qahramonini toʻgʻri marshrutga va nomga yechadi', () => {
      const resolved = resolveEntityLink('beren');
      expect(resolved.isKnown).toBe(true);
      expect(resolved.name).toBe('Beren Erchamion');
      expect(resolved.href).toBe('/qahramonlar/beren/');
      expect(resolved.collection).toBe('characters');
    });

    it('Túrin Turambar qahramonini toʻgʻri marshrutga va nomga yechadi', () => {
      const resolved = resolveEntityLink('turin');
      expect(resolved.isKnown).toBe(true);
      expect(resolved.name).toBe('Túrin Turambar');
      expect(resolved.href).toBe('/qahramonlar/turin/');
      expect(resolved.collection).toBe('characters');
    });

    it('Tengwar yozuv tizimini toʻgʻri /xalqlar-va-tillar/tengwar/ marshrutiga yechadi', () => {
      const resolved = resolveEntityLink('tengwar');
      expect(resolved.isKnown).toBe(true);
      expect(resolved.name).toBe('Tengwar');
      expect(resolved.href).toBe('/xalqlar-va-tillar/tengwar/');
      expect(resolved.collection).toBe('languages');
    });

    it('Mavjud boʻlmagan yoki alohida sahifasi yoʻq qahramonlar (Nienna, Daeron) uchun href: undefined qaytaradi', () => {
      const nienna = resolveEntityLink('nienna');
      expect(nienna.isKnown).toBe(true);
      expect(nienna.name).toBe('Nienna');
      expect(nienna.href).toBeUndefined();

      const daeron = resolveEntityLink('daeron');
      expect(daeron.isKnown).toBe(true);
      expect(daeron.name).toBe('Daeron (Doriath baxshisi)');
      expect(daeron.href).toBeUndefined();
    });

    it('Yangi generatsiya qilingan qahramonlar (Elrond, Gandalf, Frodo, Finarfin, Turgon) toʻgʻri qahramon sahifasiga yechiladi', () => {
      const elrond = resolveEntityLink('elrond');
      expect(elrond.isKnown).toBe(true);
      expect(elrond.name).toBe('Elrond Yarim-elf');
      expect(elrond.href).toBe('/qahramonlar/elrond/');

      const gandalf = resolveEntityLink('gandalf');
      expect(gandalf.isKnown).toBe(true);
      expect(gandalf.href).toBe('/qahramonlar/gandalf/');

      const frodo = resolveEntityLink('frodo-baggins');
      expect(frodo.isKnown).toBe(true);
      expect(frodo.href).toBe('/qahramonlar/frodo-baggins/');

      const finarfin = resolveEntityLink('finarfin');
      expect(finarfin.isKnown).toBe(true);
      expect(finarfin.href).toBe('/qahramonlar/finarfin/');

      const turgon = resolveEntityLink('turgon');
      expect(turgon.isKnown).toBe(true);
      expect(turgon.href).toBe('/qahramonlar/turgon/');
    });

    it('Xaritasida aniq nuqtasi boʻlmagan qadimiy makonlar (Doriath, Lothlórien, Lindon) xavfsiz href: undefined bilan yechiladi', () => {
      const doriath = resolveEntityLink('doriath');
      expect(doriath.isKnown).toBe(true);
      expect(doriath.name).toBe('Doriath');
      expect(doriath.href).toBeUndefined();

      const lorien = resolveEntityLink('lorien');
      expect(lorien.isKnown).toBe(true);
      expect(lorien.name).toBe('Lothlórien');
      expect(lorien.href).toBeUndefined();

      const lindon = resolveEntityLink('lindon');
      expect(lindon.isKnown).toBe(true);
      expect(lindon.name).toBe('Lindon');
      expect(lindon.href).toBeUndefined();
    });

    it('Kanonik nasabnomalar (finwe-xonadoni, elros-va-gondor-shohlari) toʻgʻri /nasabnomalar/[slug]/ marshrutiga yechiladi', () => {
      const finweHouse = resolveEntityLink('finwe-xonadoni', 'genealogies');
      expect(finweHouse.isKnown).toBe(true);
      expect(finweHouse.name).toBe('Finwë Xonadoni');
      expect(finweHouse.href).toBe('/nasabnomalar/finwe-xonadoni/');

      const elrosHouse = resolveEntityLink('elros-va-gondor-shohlari', 'genealogies');
      expect(elrosHouse.isKnown).toBe(true);
      expect(elrosHouse.name).toBe('Elros va Gondor Shohlari');
      expect(elrosHouse.href).toBe('/nasabnomalar/elros-va-gondor-shohlari/');
    });

    it('Nomaʼlum entiti uchun singan 404 havola yaratmaydi (href: undefined)', () => {
      const resolved = resolveEntityLink('noma-lum-ajdarho');
      expect(resolved.isKnown).toBe(false);
      expect(resolved.name).toBe('Noma Lum Ajdarho');
      expect(resolved.href).toBeUndefined();
    });
  });

  describe('resolveEntityLinks (Massiv yechish)', () => {
    it('Bir nechta identifikatorlarni xatosiz qayta ishlaydi', () => {
      const links = resolveEntityLinks(['feanor', 'gondolin', 'mavjud-emas']);
      expect(links).toHaveLength(3);
      expect(links[0]!.href).toBe('/qahramonlar/feanor/');
      expect(links[1]!.href).toBe('/xaritalar/?joy=gondolin');
      expect(links[2]!.href).toBeUndefined();
    });
  });

  describe('resolveBookCitation (Oksford Iqtiboslari)', () => {
    it('Qisqartirilgan va toʻliq kitob sluglarini toʻgʻri bibliografiyaga bogʻlaydi', () => {
      const silm = resolveBookCitation('silmarillion');
      expect(silm.title).toBe('The Silmarillion');
      expect(silm.year).toBe(1977);
      expect(silm.href).toBe('/kitoblar/silmarillion/');

      const lotr = resolveBookCitation('lotr');
      expect(lotr.title).toBe('The Lord of the Rings');
      expect(lotr.href).toBe('/kitoblar/the-lord-of-the-rings/');

      const fellowship = resolveBookCitation('lotr-fellowship');
      expect(fellowship.href).toBe('/kitoblar/the-lord-of-the-rings/');

      const hurin = resolveBookCitation('the-children-of-hurin');
      expect(hurin.title).toBe('The Children of Húrin');
      expect(hurin.year).toBe(2007);
      expect(hurin.href).toBe('/kitoblar/the-children-of-hurin/');

      const hurinAlias = resolveBookCitation('children-of-hurin');
      expect(hurinAlias.href).toBe('/kitoblar/the-children-of-hurin/');

      const beren = resolveBookCitation('beren-and-luthien');
      expect(beren.title).toBe('Beren and Lúthien');
      expect(beren.year).toBe(2017);
      expect(beren.href).toBe('/kitoblar/beren-and-luthien/');

      const gondolin = resolveBookCitation('the-fall-of-gondolin');
      expect(gondolin.title).toBe('The Fall of Gondolin');
      expect(gondolin.year).toBe(2018);
      expect(gondolin.href).toBe('/kitoblar/the-fall-of-gondolin/');

      const gondolinAlias = resolveBookCitation('fall-of-gondolin');
      expect(gondolinAlias.href).toBe('/kitoblar/the-fall-of-gondolin/');
    });
  });

  describe('checkSlugCollisions (Toʻqnashuv detektori)', () => {
    it('Turli toʻplamlarda takroriy slug boʻlsa xato qaytaradi', () => {
      const check = checkSlugCollisions([
        { id: 'noldor', collection: 'peoples' },
        { id: 'noldor', collection: 'languages' },
      ]);
      expect(check.isValid).toBe(false);
      expect(check.collisions.length).toBeGreaterThan(0);
    });

    it('Noyob identifikatorlar uchun validatsiyadan oʻtadi', () => {
      const check = checkSlugCollisions([
        { id: 'noldor', collection: 'peoples' },
        { id: 'quenya', collection: 'languages' },
      ]);
      expect(check.isValid).toBe(true);
      expect(check.collisions).toHaveLength(0);
    });
  });
});
