/**
 * TOLKIEN OLAMI — Nasabnoma Fokus Koʻrinishi Modeli (Focus View Engine)
 *
 * Diqqat markazidagi shaxs (markaziy kartochka), uning ota-onasi,
 * turmush oʻrtogʻi, farzandlari, aka-uka/opa-singillari va sulola
 * asoschisidan (root) boshlangan nasab yoʻlini (lineage) hisoblab beradi.
 */

import { getCharacterMeta } from './character-registry';

export interface RawMember {
  character_id: string;
  spouse_ids: string[];
  parent_ids: string[];
  generation: number;
  order: number;
  is_uncertain?: boolean;
  uncertainty_notes?: string;
}

export interface FocusCardModel {
  id: string;
  name: string;
  originalName?: string;
  role: string;
  dates: string;
  isUncertain: boolean;
  uncertaintyNotes?: string;
  relationType: 'parent' | 'spouse' | 'child' | 'sibling' | 'main';
  relationLabel: string;
  isInHouse: boolean;
}

export interface FocusViewModel {
  dynastyId: string;
  founderId: string;
  focusedPerson: FocusCardModel;
  parents: FocusCardModel[];
  spouses: FocusCardModel[];
  children: FocusCardModel[];
  siblings: FocusCardModel[];
  lineage: FocusCardModel[];
}

const FEMALE_IDS = new Set([
  'miriel', 'indis', 'galadriel', 'melian', 'luthien', 'morwen',
  'nienor', 'idril', 'elwing', 'silmarien', 'arwen', 'dis',
  'theodwyn', 'eowyn', 'belladonna-took', 'mirabella-took',
  'primula-brandybuck'
]);

export function buildFocusCard(
  id: string,
  relationType: 'parent' | 'spouse' | 'child' | 'sibling' | 'main',
  membersMap: Map<string, RawMember>
): FocusCardModel {
  const member = membersMap.get(id);
  const meta = getCharacterMeta(id);

  let relationLabel = 'Qarindosh';
  if (relationType === 'main') {
    relationLabel = 'Tanlangan shaxs';
  } else if (relationType === 'parent') {
    relationLabel = FEMALE_IDS.has(id) ? 'Ona' : 'Ota';
  } else if (relationType === 'spouse') {
    relationLabel = 'Turmush oʻrtogʻi';
  } else if (relationType === 'child') {
    relationLabel = 'Farzand';
  } else if (relationType === 'sibling') {
    relationLabel = FEMALE_IDS.has(id) ? 'Opa / Singil' : 'Aka / Uka';
  }

  const name = meta?.name || member?.character_id || id;
  const originalName = meta?.originalName;
  const firstTitle = meta?.titles && meta.titles.length > 0 ? meta.titles[0] : '';
  const role = firstTitle || meta?.culture || 'Tolkien Legendariumi qahramoni';
  const dates = meta?.dates || 'Nomaʼlum davr';
  const isUncertain = !!member?.is_uncertain || meta?.textualStatus === 'disputed_variant';
  const uncertaintyNotes = member?.uncertainty_notes || meta?.uncertaintyNotes;

  return {
    id,
    name,
    originalName,
    role,
    dates,
    isUncertain,
    uncertaintyNotes,
    relationType,
    relationLabel,
    isInHouse: membersMap.has(id),
  };
}

export function computeFocusViewModel(
  dynastyId: string,
  founderId: string,
  targetPersonId: string,
  members: RawMember[]
): FocusViewModel {
  const membersMap = new Map<string, RawMember>();
  for (const m of members) {
    membersMap.set(m.character_id, m);
  }

  // Agar ko'rsatilgan personId xonadonda bo'lmasa, founderId ga qaytish
  const actualTargetId = membersMap.has(targetPersonId) ? targetPersonId : founderId;
  const targetMember = membersMap.get(actualTargetId) || members[0];
  const targetId = targetMember ? targetMember.character_id : actualTargetId;

  // 1. Markaziy shaxs
  const focusedPerson = buildFocusCard(targetId, 'main', membersMap);

  // 2. Ota-onasi
  const parentIds = targetMember ? targetMember.parent_ids : [];
  const parents = parentIds.map((pid) => buildFocusCard(pid, 'parent', membersMap));

  // 3. Turmush o'rtog'i
  const spouseIds = targetMember ? targetMember.spouse_ids : [];
  const spouses = spouseIds.map((sid) => buildFocusCard(sid, 'spouse', membersMap));

  // 4. Farzandlari
  const children = members
    .filter((m) => m.parent_ids && m.parent_ids.includes(targetId))
    .sort((a, b) => a.order - b.order)
    .map((m) => buildFocusCard(m.character_id, 'child', membersMap));

  // 5. Aka-uka va opa-singillari (shu xonadonda ota yoki onasi bir xil bo'lganlar)
  let siblings: FocusCardModel[] = [];
  if (parentIds.length > 0) {
    siblings = members
      .filter((m) => {
        if (m.character_id === targetId) return false;
        return m.parent_ids && m.parent_ids.some((pid) => parentIds.includes(pid));
      })
      .sort((a, b) => a.order - b.order)
      .map((m) => buildFocusCard(m.character_id, 'sibling', membersMap));
  }

  // 6. Nasab yo'li (Lineage from founder to target)
  const lineageIds: string[] = [targetId];
  let curr = targetMember;
  const visited = new Set<string>([targetId]);

  while (curr && curr.character_id !== founderId) {
    const parentInHouse = curr.parent_ids.find((p) => membersMap.has(p));
    if (parentInHouse && !visited.has(parentInHouse)) {
      lineageIds.unshift(parentInHouse);
      visited.add(parentInHouse);
      curr = membersMap.get(parentInHouse);
    } else {
      // Eng yaqin yuqori avlod ajdodi
      let best: RawMember | undefined;
      for (const other of members) {
        if (other.generation < curr.generation && !visited.has(other.character_id)) {
          if (!best || other.generation > best.generation) {
            best = other;
          }
        }
      }
      if (best) {
        lineageIds.unshift(best.character_id);
        visited.add(best.character_id);
        curr = best;
      } else {
        break;
      }
    }
  }
  

  if (lineageIds[0] !== founderId && membersMap.has(founderId)) {
    lineageIds.unshift(founderId);
  }

  const lineage = lineageIds.map((id) => buildFocusCard(id, 'main', membersMap));

  return {
    dynastyId,
    founderId,
    focusedPerson,
    parents,
    spouses,
    children,
    siblings,
    lineage,
  };
}
