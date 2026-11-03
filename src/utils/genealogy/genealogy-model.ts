/**
 * TOLKIEN OLAMI — Nasabnomalar Maʼlumotlar Arxitekturasi va Yaxlitlik Tekshiruvchisi
 *
 * Mavjud qahramonlar, sulolalar, tarixiy voqealar, portretlar va Oksford manbalarini
 * hech bir maʼlumotni takrorlamasdan va toʻqima fakt qoʻshmasdan yagona
 * ilmiy-genealogik graf modeliga birlashtiradi.
 */

import type { CharacterData, EventData, GenealogyData, SourceRef, TextualStatus } from '@/content/schemas';
import { CHARACTER_PORTRAITS } from '@/data/character-portraits';
import { getFeaturedPersonId } from '@/data/genealogy-featured';
import { GENERATED_ENTITY_ROUTES, resolveBookCitation } from '@/utils/entity-resolver';
import { CHARACTER_REGISTRY, getCharacterMeta } from './character-registry';
import { CANVAS_LAYOUT_CONFIG, calculateTreeLayout, type TreeLayout } from './layout';

export type CanonStatus = 'canon' | 'variant' | 'uncertain';

export type RelationshipType = 'parent-child' | 'spouse' | 'sibling' | 'lineage-bridge';

export type EraFilterKey =
  | 'daraxtlar_davri'
  | 'birinchi_davr'
  | 'ikkinchi_davr'
  | 'uchinchi_davr'
  | 'tortinchi_davr';

export interface ResolvedSourceItem {
  bookSlug: string;
  bookTitle: string;
  author: string;
  year?: number;
  chapter: string;
  page?: string;
  notes?: string;
  href?: string;
}

export interface GenealogyEventLink {
  id: string;
  title: string;
  yearText: string;
  href: string;
}

export interface RelatedPersonRef {
  id: string;
  name: string;
  dynastyId?: string;
  inAnyTree: boolean;
  detailHref?: string;
  isUncertain?: boolean;
}

export interface GenealogyRelationship {
  id: string;
  dynastyId: string;
  type: RelationshipType;
  fromId: string;
  toId: string;
  canonStatus: CanonStatus;
  bridgeNote?: string;
  notes?: string;
  source: {
    work: string;
    section: string;
    href?: string;
  };
}

export interface GenealogyPersonProfile {
  id: string;
  name: string;
  originalName?: string;
  aliases: string[];
  titles: string[];
  dates: string;
  race: string;
  raceLabel: string;
  culture: string;
  houseId: string;
  houseLabel: string;
  eras: EraFilterKey[];
  summary: string;
  canonStatus: CanonStatus;
  textualStatus: TextualStatus;
  uncertaintyNotes?: string;
  portrait?: {
    thumb: string;
    src: string;
    alt: string;
  };
  detailHref?: string;
  citation: {
    work: string;
    section: string;
    href?: string;
  };
  events: GenealogyEventLink[];
  /** Qaysi sulola daraxtlarida ishtirok etadi */
  dynastyIds: string[];
  parents: RelatedPersonRef[];
  spouses: RelatedPersonRef[];
  siblings: RelatedPersonRef[];
  children: RelatedPersonRef[];
}

export interface GenealogyBranchOption {
  id: string;
  label: string;
  memberIds: string[];
}

export interface DynastyModel {
  id: string;
  title: string;
  shortTitle: string;
  houseName: string;
  founderId: string;
  featuredId: string;
  era: string;
  eraKeys: EraFilterKey[];
  summary: string;
  relevantPeopleIds: string[];
  branches: GenealogyBranchOption[];
  memberBranchMap: Record<string, string>;
  members: GenealogyData['members'];
  layout: TreeLayout;
  relationships: GenealogyRelationship[];
  sources: ResolvedSourceItem[];
  canonStats: {
    confirmedCount: number;
    variantCount: number;
    uncertainCount: number;
    bridgeCount: number;
  };
}

export interface GenealogyDataset {
  dynasties: DynastyModel[];
  people: Record<string, GenealogyPersonProfile>;
  filters: {
    races: { id: string; label: string }[];
    eras: { id: EraFilterKey; label: string }[];
    houses: { id: string; label: string }[];
    relationshipTypes: { id: RelationshipType; label: string }[];
  };
}

export interface ValidationReport {
  isValid: boolean;
  duplicateRelationshipIds: string[];
  duplicateMemberIds: string[];
  unresolvedMemberRegistryIds: string[];
  brokenDetailLinks: string[];
}

export const RACE_LABELS: Record<string, string> = {
  elflar: 'Elflar (Quendi)',
  insonlar: 'Insonlar (Atani)',
  'yarim-elflar': 'Yarim-elflar (Peredhil)',
  'mitti-odamlar': 'Mittilar (Khazâd)',
  xobbitlar: 'Xobbitlar (Periannath)',
  ainur: 'Ainur (Maiar)',
};

export const ERA_FILTER_OPTIONS: { id: EraFilterKey; label: string }[] = [
  { id: 'daraxtlar_davri', label: 'Daraxtlar davri' },
  { id: 'birinchi_davr', label: 'Birinchi davr' },
  { id: 'ikkinchi_davr', label: 'Ikkinchi davr' },
  { id: 'uchinchi_davr', label: 'Uchinchi davr' },
  { id: 'tortinchi_davr', label: 'Toʻrtinchi davr' },
];

export const RELATIONSHIP_TYPE_OPTIONS: { id: RelationshipType; label: string }[] = [
  { id: 'parent-child', label: 'Ota-ona va farzand' },
  { id: 'spouse', label: 'Nikoh ittifoqi' },
  { id: 'sibling', label: 'Aka-uka / opa-singil' },
  { id: 'lineage-bridge', label: 'Oraliq avlod koʻprigi' },
];

const PREFERRED_DYNASTY_ORDER = [
  'finwe-xonadoni',
  'edain-va-yarim-elflar',
  'elros-va-gondor-shohlari',
  'rohan-shohlari',
  'durin-avlodlari',
  'shayr-xonadonlari',
];

/**
 * Har bir sulolaning rasmiy `branches` roʻyxati indeksiga mos aʼzolar taqsimoti.
 */
const EXPLICIT_BRANCH_INDEX: Record<string, Record<string, number>> = {
  'finwe-xonadoni': {
    miriel: 0,
    feanor: 0,
    nerdanel: 0,
    maedhros: 0,
    maglor: 0,
    celebrimbor: 0,
    fingolfin: 1,
    fingon: 1,
    turgon: 1,
    'gil-galad': 1,
    finarfin: 2,
    finrod: 2,
    galadriel: 2,
    celeborn: 2,
  },
  'edain-va-yarim-elflar': {
    thingol: 0,
    melian: 0,
    luthien: 0,
    beren: 1,
    morwen: 1,
    hurin: 2,
    turin: 2,
    nienor: 2,
    tuor: 2,
    idril: 2,
    dior: 3,
    elwing: 3,
    earendil: 3,
    elrond: 3,
    elros: 3,
  },
  'elros-va-gondor-shohlari': {
    elros: 0,
    silmarien: 0,
    valandil: 0,
    elendil: 0,
    isildur: 1,
    anarion: 2,
    aragorn: 3,
    arwen: 3,
    eldarion: 3,
  },
  'rohan-shohlari': {
    eorl: 0,
    brego: 0,
    'helm-hammerhand': 0,
    frealaf: 1,
    thengel: 1,
    theoden: 1,
    theodwyn: 1,
    theodred: 1,
    eomer: 2,
    eowyn: 2,
    faramir: 2,
  },
  'durin-avlodlari': {
    'durin-i': 0,
    'durin-vi': 0,
    'nain-i': 0,
    thror: 1,
    'thrain-ii': 1,
    'thorin-oakenshield': 1,
    dis: 1,
    fili: 1,
    kili: 1,
    gimli: 1,
    'dain-ironfoot': 2,
  },
  'shayr-xonadonlari': {
    'balbo-baggins': 0,
    'bungo-baggins': 0,
    'bilbo-baggins': 0,
    'drogo-baggins': 0,
    'frodo-baggins': 0,
    'gerontius-took': 1,
    'belladonna-took': 1,
    'mirabella-took': 1,
    'paladin-took-ii': 1,
    'peregrin-took': 1,
    'gorbadoc-brandybuck': 2,
    'primula-brandybuck': 2,
    'saradoc-brandybuck': 2,
    'meriadoc-brandybuck': 2,
    'samwise-gamgee': 3,
  },
};

function mapWorkTitleToBookHref(work: string): string | undefined {
  const lower = work.toLowerCase();
  if (lower.includes('silmarillion')) return GENERATED_ENTITY_ROUTES['silmarillion'];
  if (lower.includes('fellowship')) return GENERATED_ENTITY_ROUTES['the-fellowship-of-the-ring'];
  if (lower.includes('two towers')) return GENERATED_ENTITY_ROUTES['the-two-towers'];
  if (lower.includes('return of the king')) return GENERATED_ENTITY_ROUTES['the-return-of-the-king'];
  if (lower.includes('lord of the rings')) return GENERATED_ENTITY_ROUTES['the-lord-of-the-rings'];
  if (lower.includes('hobbit')) return GENERATED_ENTITY_ROUTES['the-hobbit'];
  if (lower.includes('unfinished tales')) return GENERATED_ENTITY_ROUTES['unfinished-tales'];
  if (lower.includes('children of húrin') || lower.includes('children of hurin')) {
    return GENERATED_ENTITY_ROUTES['the-children-of-hurin'];
  }
  if (lower.includes('peoples of middle-earth')) {
    return GENERATED_ENTITY_ROUTES['the-peoples-of-middle-earth'];
  }
  if (lower.includes('morgoth')) return GENERATED_ENTITY_ROUTES['morgoths-ring'];
  if (lower.includes('war of the jewels')) return GENERATED_ENTITY_ROUTES['the-war-of-the-jewels'];
  return undefined;
}

export function extractErasFromText(text: string): EraFilterKey[] {
  const found = new Set<EraFilterKey>();
  const normalized = text.toLowerCase();

  if (
    normalized.includes('d.d.') ||
    normalized.includes('daraxtlar') ||
    normalized.includes('yaratilishdan')
  ) {
    found.add('daraxtlar_davri');
  }
  if (normalized.includes('b.d.') || normalized.includes('birinchi davr')) {
    found.add('birinchi_davr');
  }
  if (normalized.includes('i.d.') || normalized.includes('ikkinchi davr')) {
    found.add('ikkinchi_davr');
  }
  if (
    normalized.includes('u.d.') ||
    normalized.includes('uchinchi davr') ||
    normalized.includes('sh.h.')
  ) {
    found.add('uchinchi_davr');
  }
  if (
    normalized.includes('t.d.') ||
    normalized.includes('toʻrtinchi davr') ||
    normalized.includes("to'rtinchi davr")
  ) {
    found.add('tortinchi_davr');
  }

  // Agar oraliq (masalan Daraxtlar davri – Toʻrtinchi davr) berilgan boʻlsa, oradagi davrlarni ham toʻldirish
  const ordered: EraFilterKey[] = [
    'daraxtlar_davri',
    'birinchi_davr',
    'ikkinchi_davr',
    'uchinchi_davr',
    'tortinchi_davr',
  ];
  const indices = ordered
    .map((k, idx) => (found.has(k) ? idx : -1))
    .filter((idx) => idx >= 0);

  if (indices.length >= 2) {
    const minIdx = Math.min(...indices);
    const maxIdx = Math.max(...indices);
    for (let i = minIdx; i <= maxIdx; i++) {
      found.add(ordered[i]!);
    }
  }

  return ordered.filter((k) => found.has(k));
}

export function derivePersonCanonStatus(
  isUncertainInTree: boolean,
  textualStatus: TextualStatus
): CanonStatus {
  if (isUncertainInTree || textualStatus === 'disputed_variant') {
    return 'uncertain';
  }
  if (textualStatus === 'draft_variant') {
    return 'variant';
  }
  return 'canon';
}

function resolveSourcesList(sources: SourceRef[]): ResolvedSourceItem[] {
  return sources.map((src) => {
    const bookMeta = resolveBookCitation(src.book_slug);
    return {
      bookSlug: src.book_slug,
      bookTitle: bookMeta.title,
      author: bookMeta.author,
      year: bookMeta.year,
      chapter: src.chapter,
      page: src.page,
      notes: src.notes,
      href: bookMeta.href,
    };
  });
}

function makeShortDynastyTitle(title: string): string {
  return title
    .replace(' Nasabnomasi', '')
    .replace(' (Uzunsoqollar)', '')
    .replace(' (Peredhil)', '')
    .replace(' (Baggins, Tuk va Brendibak)', '')
    .trim();
}

export function buildGenealogyDataset(
  rawGenealogies: GenealogyData[],
  rawCharacters: CharacterData[] = [],
  rawEvents: EventData[] = []
): GenealogyDataset {
  const sortedGenealogies = [...rawGenealogies].sort((a, b) => {
    const idxA = PREFERRED_DYNASTY_ORDER.indexOf(a.id);
    const idxB = PREFERRED_DYNASTY_ORDER.indexOf(b.id);
    return (idxA >= 0 ? idxA : 99) - (idxB >= 0 ? idxB : 99);
  });

  const charById = new Map<string, CharacterData>();
  for (const ch of rawCharacters) {
    charById.set(ch.id, ch);
  }

  // Har bir qahramon qaysi sulolalarda uchrashini va global qarindoshlik grafini yigʻamiz
  const personDynasties = new Map<string, string[]>();
  const globalParents = new Map<string, Set<string>>();
  const globalSpouses = new Map<string, Set<string>>();
  const globalChildren = new Map<string, Set<string>>();
  const memberUncertainFlag = new Map<string, { isUncertain: boolean; notes?: string }>();
  const houseLabels = new Map<string, string>();

  for (const g of sortedGenealogies) {
    houseLabels.set(g.id, makeShortDynastyTitle(g.title));
    for (const m of g.members) {
      const dList = personDynasties.get(m.character_id) || [];
      if (!dList.includes(g.id)) dList.push(g.id);
      personDynasties.set(m.character_id, dList);

      if (m.is_uncertain) {
        memberUncertainFlag.set(m.character_id, {
          isUncertain: true,
          notes: m.uncertainty_notes,
        });
      }

      const pSet = globalParents.get(m.character_id) || new Set<string>();
      for (const pid of m.parent_ids) {
        pSet.add(pid);
        const cSet = globalChildren.get(pid) || new Set<string>();
        cSet.add(m.character_id);
        globalChildren.set(pid, cSet);
      }
      globalParents.set(m.character_id, pSet);

      const sSet = globalSpouses.get(m.character_id) || new Set<string>();
      for (const sid of m.spouse_ids) {
        sSet.add(sid);
        const revSet = globalSpouses.get(sid) || new Set<string>();
        revSet.add(m.character_id);
        globalSpouses.set(sid, revSet);
      }
      globalSpouses.set(m.character_id, sSet);
    }
  }

  // Tarixiy voqealar indeksini tayyorlash
  const eventsByCharacter = new Map<string, GenealogyEventLink[]>();
  for (const ev of rawEvents) {
    const href = GENERATED_ENTITY_ROUTES[ev.id];
    if (!href) continue;
    for (const cid of ev.characters) {
      const list = eventsByCharacter.get(cid) || [];
      if (list.length < 4 && !list.some((item) => item.id === ev.id)) {
        list.push({
          id: ev.id,
          title: ev.title,
          yearText: ev.year_text,
          href,
        });
      }
      eventsByCharacter.set(cid, list);
    }
  }

  const makePersonRef = (targetId: string, uncertain = false): RelatedPersonRef => {
    const meta = getCharacterMeta(targetId);
    const charDoc = charById.get(targetId);
    const dIds = personDynasties.get(targetId);
    const route = GENERATED_ENTITY_ROUTES[targetId];
    return {
      id: targetId,
      name: charDoc?.name || meta.name,
      dynastyId: dIds?.[0],
      inAnyTree: Boolean(dIds && dIds.length > 0),
      detailHref: route?.startsWith('/qahramonlar/') ? route : undefined,
      isUncertain: uncertain || undefined,
    };
  };

  // Deduplikatsiya qilingan People lugʻatini tuzish
  const people: Record<string, GenealogyPersonProfile> = {};
  for (const [personId, dIds] of personDynasties.entries()) {
    const reg = getCharacterMeta(personId);
    const charDoc = charById.get(personId);
    const portraitEntry = CHARACTER_PORTRAITS[personId];
    const uncertainInfo = memberUncertainFlag.get(personId);

    const textualStatus: TextualStatus =
      charDoc?.textual_status || reg.textualStatus || 'posthumous_edited';
    const canonStatus = derivePersonCanonStatus(
      Boolean(uncertainInfo?.isUncertain),
      textualStatus
    );

    const primaryDynastyId = dIds[0] || reg.houseId;
    const eras = extractErasFromText(reg.dates);
    if (eras.length === 0) {
      const parentDynasty = sortedGenealogies.find((d) => d.id === primaryDynastyId);
      if (parentDynasty) {
        eras.push(...extractErasFromText(parentDynasty.era));
      }
    }

    const parentIdsArr = Array.from(globalParents.get(personId) || []);
    const spouseIdsArr = Array.from(globalSpouses.get(personId) || []);
    const childIdsArr = Array.from(globalChildren.get(personId) || []);

    // Tugʻishgan aka-uka / opa-singillar: kamida bitta umumiy ota-onaga ega shaxslar
    const siblingSet = new Set<string>();
    for (const pid of parentIdsArr) {
      for (const sibId of globalChildren.get(pid) || []) {
        if (sibId !== personId) siblingSet.add(sibId);
      }
    }

    const detailRoute = GENERATED_ENTITY_ROUTES[personId];
    const detailHref = detailRoute?.startsWith('/qahramonlar/') ? detailRoute : undefined;

    const aliases = charDoc?.aliases?.slice(0, 3) || (reg.motherName ? [reg.motherName] : []);
    const titles = (reg.titles.length > 0 ? reg.titles : charDoc?.titles || []).slice(0, 3);
    const uncertaintyNotes =
      uncertainInfo?.notes || reg.uncertaintyNotes || charDoc?.uncertainty_notes;

    people[personId] = {
      id: personId,
      name: reg.name,
      originalName: reg.originalName || (charDoc?.original_name !== reg.name ? charDoc?.original_name : undefined),
      aliases,
      titles,
      dates: reg.dates,
      race: reg.race,
      raceLabel: RACE_LABELS[reg.race] || reg.race,
      culture: reg.culture || charDoc?.culture || 'Oʻrta-yer',
      houseId: primaryDynastyId,
      houseLabel: houseLabels.get(primaryDynastyId) || 'Kanonik xonadon',
      eras,
      summary: reg.summary || charDoc?.summary || '',
      canonStatus,
      textualStatus,
      uncertaintyNotes,
      portrait: portraitEntry
        ? {
            thumb: portraitEntry.srcThumb,
            src: portraitEntry.src,
            alt: portraitEntry.alt,
          }
        : undefined,
      detailHref,
      citation: {
        work: reg.citation.work,
        section: reg.citation.section,
        href: mapWorkTitleToBookHref(reg.citation.work),
      },
      events: eventsByCharacter.get(personId) || [],
      dynastyIds: dIds,
      parents: parentIdsArr.map((pid) =>
        makePersonRef(pid, Boolean(uncertainInfo?.isUncertain))
      ),
      spouses: spouseIdsArr.map((sid) => makePersonRef(sid)),
      siblings: Array.from(siblingSet).map((sibId) => makePersonRef(sibId)),
      children: childIdsArr.map((cid) =>
        makePersonRef(cid, Boolean(memberUncertainFlag.get(cid)?.isUncertain))
      ),
    };
  }

  // Har bir sulola modelini shakllantirish
  const dynasties: DynastyModel[] = sortedGenealogies.map((g) => {
    const layout = calculateTreeLayout(g.members, CANVAS_LAYOUT_CONFIG);
    const shortTitle = makeShortDynastyTitle(g.title);
    const featuredId = getFeaturedPersonId(g.id, g.founder_id);

    // Tarmoqlar (Branches) va har bir aʼzoning tarmoq birikmasi
    const branchAssignMap = EXPLICIT_BRANCH_INDEX[g.id] || {};
    const memberBranchMap: Record<string, string> = {};
    const branches: GenealogyBranchOption[] = g.branches.map((label, idx) => ({
      id: `${g.id}-branch-${idx}`,
      label,
      memberIds: [],
    }));

    for (const m of g.members) {
      const bIdx = branchAssignMap[m.character_id];
      if (bIdx !== undefined && branches[bIdx]) {
        const branch = branches[bIdx]!;
        branch.memberIds.push(m.character_id);
        memberBranchMap[m.character_id] = branch.id;
      } else {
        // Asoschi yoki barcha tarmoqlar uchun umumiy ildiz (masalan Finwë, Indis)
        memberBranchMap[m.character_id] = 'root';
      }
    }

    // Asosiy shaxslar (Dynasty Header tezkor oʻtish tugmalari uchun)
    const relevantSet = new Set<string>();
    if (g.members.some((m) => m.character_id === g.founder_id)) {
      relevantSet.add(g.founder_id);
    }
    if (g.members.some((m) => m.character_id === featuredId)) {
      relevantSet.add(featuredId);
    }
    for (const m of g.members) {
      if (relevantSet.size >= 6) break;
      if (CHARACTER_PORTRAITS[m.character_id] || CHARACTER_REGISTRY[m.character_id]?.hasArticle) {
        relevantSet.add(m.character_id);
      }
    }

    // Har bir bogʻlanish uchun barqaror noyob ID va manba maʼlumotiga ega Relationship obyekti
    const relationships: GenealogyRelationship[] = layout.links.map((link) => {
      const relType: RelationshipType =
        link.type === 'marriage'
          ? 'spouse'
          : link.type === 'bridge'
            ? 'lineage-bridge'
            : link.type;

      const targetProfile = people[link.toId];
      const fromProfile = people[link.fromId];

      let canonStatus: CanonStatus = 'canon';
      if (link.isUncertain) {
        canonStatus = 'uncertain';
      } else if (
        targetProfile?.textualStatus === 'draft_variant' ||
        fromProfile?.textualStatus === 'draft_variant'
      ) {
        canonStatus = 'variant';
      }

      const citeProfile = targetProfile || fromProfile;
      const citation = citeProfile?.citation || {
        work: 'The Silmarillion',
        section: 'Genealogical Tables',
        href: '/kitoblar/silmarillion/',
      };

      const pairKey =
        relType === 'spouse' || relType === 'sibling'
          ? [link.fromId, link.toId].sort().join('--')
          : `${link.fromId}->${link.toId}`;

      return {
        id: `rel:${g.id}:${relType}:${pairKey}`,
        dynastyId: g.id,
        type: relType,
        fromId: link.fromId,
        toId: link.toId,
        canonStatus,
        bridgeNote: link.bridgeNote,
        notes: link.uncertaintyNotes || link.bridgeNote,
        source: citation,
      };
    });

    const confirmedCount = relationships.filter((r) => r.canonStatus === 'canon').length;
    const variantCount =
      relationships.filter((r) => r.canonStatus === 'variant').length +
      g.members.filter(
        (m) =>
          !m.is_uncertain &&
          (people[m.character_id]?.textualStatus === 'draft_variant' ||
            people[m.character_id]?.textualStatus === 'disputed_variant')
      ).length;
    const uncertainCount = relationships.filter((r) => r.canonStatus === 'uncertain').length;
    const bridgeCount = relationships.filter((r) => r.type === 'lineage-bridge').length;

    return {
      id: g.id,
      title: g.title,
      shortTitle,
      houseName: g.house_name,
      founderId: g.founder_id,
      featuredId,
      era: g.era,
      eraKeys: extractErasFromText(g.era),
      summary: g.summary,
      relevantPeopleIds: Array.from(relevantSet),
      branches,
      memberBranchMap,
      members: g.members,
      layout,
      relationships,
      sources: resolveSourcesList(g.sources),
      canonStats: {
        confirmedCount,
        variantCount,
        uncertainCount,
        bridgeCount,
      },
    };
  });

  // Mavjud irqlar roʻyxati
  const activeRaces = new Set<string>();
  for (const p of Object.values(people)) {
    activeRaces.add(p.race);
  }

  return {
    dynasties,
    people,
    filters: {
      races: Object.entries(RACE_LABELS)
        .filter(([id]) => activeRaces.has(id))
        .map(([id, label]) => ({ id, label })),
      eras: ERA_FILTER_OPTIONS,
      houses: dynasties.map((d) => ({ id: d.id, label: d.shortTitle })),
      relationshipTypes: RELATIONSHIP_TYPE_OPTIONS,
    },
  };
}

/**
 * Graf yaxlitligini tekshiruvchi funksiya:
 * 1. Hech bir sulola ichida takroriy aʼzo ID si boʻlmasligi
 * 2. Barcha relationship ID lari yagona (unique) boʻlishi
 * 3. Har bir shaxs CHARACTER_REGISTRY da tasdiqlangan boʻlishi
 * 4. Hech bir detailHref mavjud boʻlmagan sahifaga (404) ishora qilmasligi
 */
export function validateGenealogyDataset(dataset: GenealogyDataset): ValidationReport {
  const duplicateRelationshipIds: string[] = [];
  const duplicateMemberIds: string[] = [];
  const unresolvedMemberRegistryIds: string[] = [];
  const brokenDetailLinks: string[] = [];

  const seenRelIds = new Set<string>();

  for (const d of dataset.dynasties) {
    const seenMembers = new Set<string>();
    for (const m of d.members) {
      if (seenMembers.has(m.character_id)) {
        duplicateMemberIds.push(`${d.id}:${m.character_id}`);
      }
      seenMembers.add(m.character_id);

      if (!CHARACTER_REGISTRY[m.character_id]) {
        unresolvedMemberRegistryIds.push(`${d.id}:${m.character_id}`);
      }
    }

    for (const rel of d.relationships) {
      if (seenRelIds.has(rel.id)) {
        duplicateRelationshipIds.push(rel.id);
      }
      seenRelIds.add(rel.id);

      if (!dataset.people[rel.fromId] || !dataset.people[rel.toId]) {
        unresolvedMemberRegistryIds.push(`rel-endpoint:${rel.id}`);
      }
    }
  }

  for (const person of Object.values(dataset.people)) {
    if (person.detailHref && GENERATED_ENTITY_ROUTES[person.id] !== person.detailHref) {
      brokenDetailLinks.push(`${person.id}->${person.detailHref}`);
    }
  }

  return {
    isValid:
      duplicateRelationshipIds.length === 0 &&
      duplicateMemberIds.length === 0 &&
      unresolvedMemberRegistryIds.length === 0 &&
      brokenDetailLinks.length === 0,
    duplicateRelationshipIds,
    duplicateMemberIds,
    unresolvedMemberRegistryIds,
    brokenDetailLinks,
  };
}

/**
 * Klient uchun ixchamlashtirilgan JSON yuklamasini shakllantiradi.
 * `onlyDynastyId` berilsa, boshlangʻich SSR sahifa hajmini < 40 KB gzip saqlash uchun
 * faqat faol sulola va uning bevosita aʼzolari/qarindoshlari olinadi;
 * toʻliq 6 ta sulola esa `/nasabnomalar/dataset.json` statik resursidan yuklanadi.
 */
export function serializeGenealogyClientPayload(
  dataset: GenealogyDataset,
  onlyDynastyId?: string
) {
  const sourceDynasties = onlyDynastyId
    ? dataset.dynasties.filter((d) => d.id === onlyDynastyId)
    : dataset.dynasties;

  const selectedPeople: Record<string, GenealogyPersonProfile> = {};
  if (onlyDynastyId) {
    for (const d of sourceDynasties) {
      for (const n of d.layout.nodes) {
        const p = dataset.people[n.id];
        if (!p) continue;
        selectedPeople[n.id] = p;
        for (const rel of [...p.parents, ...p.spouses, ...p.siblings, ...p.children]) {
          if (dataset.people[rel.id]) {
            selectedPeople[rel.id] = dataset.people[rel.id]!;
          }
        }
      }
    }
  } else {
    Object.assign(selectedPeople, dataset.people);
  }

  return {
    isPartial: Boolean(onlyDynastyId),
    dynasties: sourceDynasties.map((d) => ({
      id: d.id,
      title: d.title,
      shortTitle: d.shortTitle,
      houseName: d.houseName,
      founderId: d.founderId,
      featuredId: d.featuredId,
      era: d.era,
      summary: d.summary,
      relevantPeopleIds: d.relevantPeopleIds,
      branches: d.branches,
      memberBranchMap: d.memberBranchMap,
      canonStats: d.canonStats,
      sources: d.sources,
      layout: {
        dimensions: d.layout.dimensions,
        nodes: d.layout.nodes.map((n) => ({
          id: n.id,
          x: n.x,
          y: n.y,
          width: n.width,
          height: n.height,
          generation: n.generation,
          order: n.order,
          isUncertain: n.isUncertain,
          spouseIds: n.spouseIds,
          parentIds: n.parentIds,
          bridgeNote: n.bridgeNote,
        })),
        links: d.layout.links.map((l) => ({
          fromId: l.fromId,
          toId: l.toId,
          type: l.type,
          pathD: l.pathD,
          isUncertain: l.isUncertain,
          bridgeNote: l.bridgeNote,
        })),
      },
    })),
    people: selectedPeople,
  };
}
