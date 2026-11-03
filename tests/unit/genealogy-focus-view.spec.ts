import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { FEATURED_MEMBERS, getFeaturedPersonId } from '../../src/data/genealogy-featured';
import { computeFocusViewModel } from '../../src/utils/genealogy/focus-view';
import type { RawMember } from '../../src/utils/genealogy/focus-view';

describe('Nasabnoma Fokus Koʻrinishi Modeli (focus-view.spec.ts)', () => {
  const genealogiesDir = join(process.cwd(), 'src/content/genealogies');
  const files = readdirSync(genealogiesDir).filter((f) => f.endsWith('.json'));

  it('Barcha 6 ta sulola uchun FEATURED_MEMBERS toʻgʻri aniqlangan boʻlishi kerak', () => {
    expect(Object.keys(FEATURED_MEMBERS).length).toBe(6);
    expect(FEATURED_MEMBERS['finwe-xonadoni']).toBe('feanor');
    expect(FEATURED_MEMBERS['rohan-shohlari']).toBe('theoden');
    expect(FEATURED_MEMBERS['durin-avlodlari']).toBe('thorin-oakenshield');
    expect(FEATURED_MEMBERS['elros-va-gondor-shohlari']).toBe('aragorn');
    expect(FEATURED_MEMBERS['edain-va-yarim-elflar']).toBe('beren');
    expect(FEATURED_MEMBERS['shayr-xonadonlari']).toBe('frodo-baggins');
  });

  it('Har bir sulola uchun featured person fokus modeli xatosiz hisoblanishi shart', () => {
    for (const file of files) {
      const data = JSON.parse(readFileSync(join(genealogiesDir, file), 'utf-8'));
      const featuredId = getFeaturedPersonId(data.id, data.founder_id);
      const model = computeFocusViewModel(
        data.id,
        data.founder_id,
        featuredId,
        data.members as RawMember[]
      );

      expect(model.dynastyId).toBe(data.id);
      expect(model.focusedPerson.id).toBe(featuredId);
      expect(model.focusedPerson.name).toBeTruthy();
      expect(model.focusedPerson.role).toBeTruthy();
      expect(model.focusedPerson.dates).toBeTruthy();

      // Nasab zanjiri (lineage) mavjudligi va asoschidan boshlanishi
      expect(model.lineage.length).toBeGreaterThanOrEqual(1);
      const firstCrumb = model.lineage[0];
      const lastCrumb = model.lineage[model.lineage.length - 1];
      expect(firstCrumb).toBeDefined();
      expect(lastCrumb).toBeDefined();
      if (firstCrumb && lastCrumb) {
        expect(firstCrumb.id).toBe(data.founder_id);
        expect(lastCrumb.id).toBe(featuredId);
      }
    }
  });

  it('Finwë xonadonida Fëanor uchun ota-ona va aka-ukalar toʻgʻri hisoblanishi kerak', () => {
    const data = JSON.parse(readFileSync(join(genealogiesDir, 'finwe-xonadoni.json'), 'utf-8'));
    const model = computeFocusViewModel(
      data.id,
      data.founder_id,
      'feanor',
      data.members as RawMember[]
    );

    expect(model.parents.map((p) => p.id)).toEqual(['finwe', 'miriel']);
    expect(model.siblings.map((s) => s.id)).toContain('fingolfin');
    expect(model.siblings.map((s) => s.id)).toContain('finarfin');
    expect(model.lineage.map((l) => l.id)).toEqual(['finwe', 'feanor']);
  });

  it('Mavjud boʻlmagan ID berilganda sulola asoschisiga (founder) fallback qilishi kerak', () => {
    const data = JSON.parse(readFileSync(join(genealogiesDir, 'finwe-xonadoni.json'), 'utf-8'));
    const model = computeFocusViewModel(
      data.id,
      data.founder_id,
      'mavjud-bolmagan-id',
      data.members as RawMember[]
    );

    expect(model.focusedPerson.id).toBe(data.founder_id);
    const firstCrumb = model.lineage[0];
    expect(firstCrumb).toBeDefined();
    if (firstCrumb) {
      expect(firstCrumb.id).toBe(data.founder_id);
    }
  });
});
