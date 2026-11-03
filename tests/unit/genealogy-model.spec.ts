import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { characterSchema, eventSchema, genealogySchema } from '../../src/content/schemas';
import {
  buildGenealogyDataset,
  extractErasFromText,
  validateGenealogyDataset,
} from '../../src/utils/genealogy/genealogy-model';

describe('Genealogy Data Architecture & Validation (genealogy-model.spec.ts)', () => {
  const rootDir = process.cwd();
  const genealogiesDir = join(rootDir, 'src/content/genealogies');
  const charactersDir = join(rootDir, 'src/content/characters');
  const eventsDir = join(rootDir, 'src/content/events');

  const rawGenealogies = readdirSync(genealogiesDir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => genealogySchema.parse(JSON.parse(readFileSync(join(genealogiesDir, f), 'utf-8'))));

  const rawCharacters = readdirSync(charactersDir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => characterSchema.parse(JSON.parse(readFileSync(join(charactersDir, f), 'utf-8'))));

  const rawEvents = readdirSync(eventsDir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => eventSchema.parse(JSON.parse(readFileSync(join(eventsDir, f), 'utf-8'))));

  const dataset = buildGenealogyDataset(rawGenealogies, rawCharacters, rawEvents);

  it('validateGenealogyDataset barcha 6 ta sulola uchun xatosiz (isValid: true) oʻtishi shart', () => {
    const report = validateGenealogyDataset(dataset);
    expect(report.duplicateMemberIds).toEqual([]);
    expect(report.duplicateRelationshipIds).toEqual([]);
    expect(report.unresolvedMemberRegistryIds).toEqual([]);
    expect(report.brokenDetailLinks).toEqual([]);
    expect(report.isValid).toBe(true);
  });

  it('Qahramon yozuvlari takrorlanmasligi va koʻp sulolali shaxslar (masalan Elros) yagona ID da birlashishi kerak', () => {
    expect(dataset.dynasties.length).toBe(6);
    const elros = dataset.people['elros'];
    expect(elros).toBeDefined();
    expect(elros?.dynastyIds).toContain('edain-va-yarim-elflar');
    expect(elros?.dynastyIds).toContain('elros-va-gondor-shohlari');
  });

  it('Ota-ona/farzand, nikoh, aka-uka va avlod koʻprigi rishtalari barqaror ID va manbaga ega boʻlishi kerak', () => {
    const finweDynasty = dataset.dynasties.find((d) => d.id === 'finwe-xonadoni');
    expect(finweDynasty).toBeDefined();

    const relTypes = new Set(finweDynasty!.relationships.map((r) => r.type));
    expect(relTypes.has('parent-child')).toBe(true);
    expect(relTypes.has('spouse')).toBe(true);
    expect(relTypes.has('sibling')).toBe(true);
    expect(relTypes.has('lineage-bridge')).toBe(true);

    // Celebrimbor koʻprigi Fëanorga (Curufin orqali) bogʻlanishi shart
    const celebrimborBridge = finweDynasty!.relationships.find(
      (r) => r.type === 'lineage-bridge' && r.toId === 'celebrimbor'
    );
    expect(celebrimborBridge).toBeDefined();
    expect(celebrimborBridge?.fromId).toBe('feanor');
    expect(celebrimborBridge?.bridgeNote).toContain('Curufin');

    // Gil-galad nasabi munozarali (uncertain) maqomda boʻlishi shart
    const gilGaladRel = finweDynasty!.relationships.find(
      (r) => r.type === 'parent-child' && r.toId === 'gil-galad'
    );
    expect(gilGaladRel?.canonStatus).toBe('uncertain');
  });

  it('Barcha portret URL manzillari public/ papkasida haqiqatda mavjud fayllarga ishora qilishi shart', () => {
    for (const person of Object.values(dataset.people)) {
      if (person.portrait) {
        const thumbDiskPath = join(rootDir, 'public', person.portrait.thumb.replace(/^\//, ''));
        const fullDiskPath = join(rootDir, 'public', person.portrait.src.replace(/^\//, ''));
        expect(existsSync(thumbDiskPath), `Missing portrait thumb: ${person.portrait.thumb}`).toBe(true);
        expect(existsSync(fullDiskPath), `Missing portrait src: ${person.portrait.src}`).toBe(true);
      }
    }
  });

  it('extractErasFromText hayot sanalaridan toʻgʻri davr kalitlarini ajratib olishi kerak', () => {
    const galadrielEras = extractErasFromText('D.d. 1362 – Toʻrtinchi davr');
    expect(galadrielEras).toEqual([
      'daraxtlar_davri',
      'birinchi_davr',
      'ikkinchi_davr',
      'uchinchi_davr',
      'tortinchi_davr',
    ]);

    const shireEras = extractErasFromText('Sh.h. 1368 (U.d. 2968)');
    expect(shireEras).toContain('uchinchi_davr');
  });
});
