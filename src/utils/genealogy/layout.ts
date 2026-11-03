/**
 * TOLKIEN OLAMI — Nasabnoma SVG Daraxti Tartib Hisoblagichi (Layout Engine)
 *
 * Ushbu modul sulola aʼzolari koordinatalarini (X, Y) va ularni bogʻlovchi
 * nafis botanik kubik Bezye, nikoh, aka-uka/opa-singil va avlod koʻprigi
 * SVG yoʻllarini tashqi ogʻir kutubxonalarsiz deterministik hisoblab beradi.
 */

import { getCharacterMeta } from './character-registry';
import type { GenealogyMemberInput } from './relations';
import { groupMembersByGeneration } from './relations';

export interface LayoutConfig {
  nodeWidth: number;
  nodeHeight: number;
  tierGapY: number;
  siblingGapX: number;
  spouseGapX: number;
  padding: { x: number; y: number };
  pathStyle?: 'botanical' | 'orthogonal';
  /** Er-xotin oʻrtasidagi nikoh tugunidan farzandlarga yagona birlashgan chiziq tushirish */
  unionParentLinks?: boolean;
  /** Tugʻishgan aka-uka / opa-singillar oʻrtasidagi gorizontal rishta chiziqlarini qoʻshish */
  includeSiblingLinks?: boolean;
}

export const DEFAULT_LAYOUT_CONFIG: LayoutConfig = {
  nodeWidth: 164,
  nodeHeight: 62,
  tierGapY: 120,
  siblingGapX: 34,
  spouseGapX: 18,
  padding: { x: 36, y: 36 },
  pathStyle: 'botanical',
  unionParentLinks: false,
  includeSiblingLinks: false,
};

export const CANVAS_LAYOUT_CONFIG: LayoutConfig = {
  nodeWidth: 196,
  nodeHeight: 74,
  tierGapY: 138,
  siblingGapX: 30,
  spouseGapX: 24,
  padding: { x: 44, y: 44 },
  pathStyle: 'botanical',
  unionParentLinks: true,
  includeSiblingLinks: true,
};

/**
 * Oraliq avlod tashlab ketilgan kanonik koʻprik ajdodlar xaritasi:
 * parentId (jadvaldan tashqari bevosita ota/ona) -> shu xonadon jadvalidagi haqiqiy ajdod ID si.
 */
const KNOWN_BRIDGE_ANCESTORS: Record<string, string> = {
  curufin: 'feanor',
  'tar-elendil': 'elros',
  amandil: 'valandil',
  'arathorn-ii': 'isildur',
  gram: 'brego',
  hild: 'brego',
  fengel: 'frealaf',
  'dain-i': 'nain-i',
  nain: 'nain-i',
  gloin: 'nain-i',
  'fosco-baggins': 'balbo-baggins',
  'rorimac-brandybuck': 'gorbadoc-brandybuck',
  'adgrim-took': 'gerontius-took',
};

/**
 * Boshqa sulola yoki tashqi xonadondan kelgan ota-onalar:
 * bular uchun tugun ustida "X orqali" nishoni koʻrsatiladi, ammo soxta chiziq tortilmaydi.
 */
const EXTERNAL_LINEAGE_PARENTS = new Set([
  'barahir',
  'galdor',
  'huor',
  'turgon',
  'elenwe',
  'elrond',
  'celebrain',
  'gilraen',
  'earendil',
  'elwing',
  'leod',
  'hamfast-gamgee',
  'denethor-ii',
]);

/**
 * Bevosita parent_ids boʻsh boʻlsa-da, bir sulola zanjirini davom ettiruvchi kanonik vorislar
 * (masalan: Durin I -> Durin VI Uzunsoqollar oliy shajarasida).
 */
const IMPLICIT_DYNASTIC_BRIDGES: Record<string, { ancestorId: string; note: string }> = {
  'durin-vi': {
    ancestorId: 'durin-i',
    note: 'Durin I — V sulola zanjiri orqali',
  },
};

export interface LayoutNode {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  generation: number;
  order: number;
  isUncertain: boolean;
  uncertaintyNotes?: string;
  spouseIds: string[];
  parentIds: string[];
  name: string;
  titles: string[];
  dates: string;
  culture?: string;
  textualStatus?: string;
  hasArticle?: boolean;
  bridgeNote?: string;
}

export interface LayoutLink {
  id?: string;
  fromId: string;
  toId: string;
  type: 'parent-child' | 'marriage' | 'bridge' | 'sibling';
  pathD: string;
  isUncertain: boolean;
  uncertaintyNotes?: string;
  bridgeNote?: string;
}

export interface TreeLayout {
  nodes: LayoutNode[];
  links: LayoutLink[];
  dimensions: { width: number; height: number };
}

/**
 * Ikki nuqta oʻrtasida 90 gradusli toza orfogonal (zina uslubidagi) SVG yoʻlini yaratadi:
 * M x1, y1 L x1, y_mid L x2, y_mid L x2, y2
 */
export function generateOrthogonalPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): string {
  const midY = Math.round((y1 + y2) / 2);
  return `M ${Math.round(x1)} ${Math.round(y1)} L ${Math.round(x1)} ${midY} L ${Math.round(x2)} ${midY} L ${Math.round(x2)} ${Math.round(y2)}`;
}

/**
 * White Tree botanik uslubidagi nafis kubik Bezye egri shox yoʻlini yaratadi:
 * M x1 y1 C x1 midY, x2 midY, x2 y2
 */
export function generateBotanicalBranchPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): string {
  const rx1 = Math.round(x1);
  const ry1 = Math.round(y1);
  const rx2 = Math.round(x2);
  const ry2 = Math.round(y2);
  const midY = Math.round((ry1 + ry2) / 2);
  return `M ${rx1} ${ry1} C ${rx1} ${midY}, ${rx2} ${midY}, ${rx2} ${ry2}`;
}

/**
 * Er-xotin oʻrtasidagi gorizontal toʻgʻri chiziqli SVG yoʻlini yaratadi.
 */
export function generateMarriagePath(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): string {
  return `M ${Math.round(x1)} ${Math.round(y1)} L ${Math.round(x2)} ${Math.round(y2)}`;
}

/**
 * Tugʻishgan aka-uka / opa-singillar oʻrtasidagi gorizontal qavs yoʻlini yaratadi.
 */
export function generateSiblingPath(
  x1: number,
  x2: number,
  topY: number
): string {
  const rx1 = Math.round(x1);
  const rx2 = Math.round(x2);
  const barY = Math.round(topY - 12);
  const tickY = Math.round(topY - 4);
  return `M ${rx1} ${tickY} L ${rx1} ${barY} L ${rx2} ${barY} L ${rx2} ${tickY}`;
}

/**
 * Sulola aʼzolari roʻyxatidan ikki bosqichli (two-pass) markazlashtirilgan
 * nafis SVG daraxt tartibini hisoblaydi.
 */
export function calculateTreeLayout<T extends GenealogyMemberInput>(
  members: T[],
  customConfig?: Partial<LayoutConfig>
): TreeLayout {
  if (members.length === 0) {
    return { nodes: [], links: [], dimensions: { width: 320, height: 220 } };
  }

  const config: LayoutConfig = {
    ...DEFAULT_LAYOUT_CONFIG,
    ...customConfig,
    padding: {
      ...DEFAULT_LAYOUT_CONFIG.padding,
      ...customConfig?.padding,
    },
  };

  const generationsMap = groupMembersByGeneration(members);
  const genKeys = Array.from(generationsMap.keys()).sort((a, b) => a - b);
  const nodeMap = new Map<string, LayoutNode>();
  const nodes: LayoutNode[] = [];

  // ========================================================================
  // 1-BOSQICH: Boshlangʻich tugunlarni yaratish va avlod qatorlariga joylashtirish
  // ========================================================================
  for (const gen of genKeys) {
    const genMembers = generationsMap.get(gen) || [];
    const y = config.padding.y + (gen - 1) * config.tierGapY;

    let currentX = config.padding.x;

    for (let idx = 0; idx < genMembers.length; idx++) {
      const member = genMembers[idx]!;
      const prevMember = idx > 0 ? genMembers[idx - 1] : undefined;
      if (prevMember) {
        const isAdjacentSpouse =
          prevMember.spouse_ids.includes(member.character_id) ||
          member.spouse_ids.includes(prevMember.character_id);
        currentX += config.nodeWidth + (isAdjacentSpouse ? config.spouseGapX : config.siblingGapX);
      }

      const meta = getCharacterMeta(member.character_id);

      // Agar ota-onasi roʻyxatda toʻgʻridan-toʻgʻri boʻlmasa, ilmiy koʻprik izohi (bridge note)
      let bridgeNote: string | undefined;
      for (const parentId of member.parent_ids) {
        if (!members.some((m) => m.character_id === parentId)) {
          const pMeta = getCharacterMeta(parentId);
          bridgeNote = `${pMeta.name} orqali`;
          break;
        }
      }
      if (!bridgeNote && member.parent_ids.length === 0) {
        const implicit = IMPLICIT_DYNASTIC_BRIDGES[member.character_id];
        if (implicit && members.some((m) => m.character_id === implicit.ancestorId)) {
          bridgeNote = implicit.note;
        }
      }

      const node: LayoutNode = {
        id: member.character_id,
        x: currentX,
        y,
        width: config.nodeWidth,
        height: config.nodeHeight,
        generation: member.generation,
        order: member.order,
        isUncertain: member.is_uncertain,
        uncertaintyNotes:
          member.uncertainty_notes || (member.is_uncertain ? meta.uncertaintyNotes : undefined),
        spouseIds: [...member.spouse_ids],
        parentIds: [...member.parent_ids],
        name: meta.name,
        titles: meta.titles,
        dates: meta.dates,
        culture: meta.culture,
        textualStatus: meta.textualStatus,
        hasArticle: meta.hasArticle,
        bridgeNote,
      };

      nodes.push(node);
      nodeMap.set(node.id, node);
    }
  }

  // ========================================================================
  // 2-BOSQICH: Bolalarni ota-ona ostiga markazlashtirish (Pedigree Centering Pass)
  // ========================================================================
  for (let i = 0; i < genKeys.length - 1; i++) {
    const currentGen = genKeys[i];
    const nextGen = genKeys[i + 1];
    if (currentGen === undefined || nextGen === undefined) continue;

    const currentGenMembers = generationsMap.get(currentGen) || [];
    const nextGenMembers = generationsMap.get(nextGen) || [];

    const parents = currentGenMembers
      .map((m) => nodeMap.get(m.character_id))
      .filter((n): n is LayoutNode => n !== undefined);

    const nextGenNodes = nextGenMembers
      .map((m) => nodeMap.get(m.character_id))
      .filter((n): n is LayoutNode => n !== undefined);

    for (const parent of parents) {
      const children = nextGenNodes.filter((c) => c.parentIds.includes(parent.id));
      if (children.length === 0 || !children[0]) continue;

      let parentCenterX = parent.x + parent.width / 2;
      const spouseId = parent.spouseIds.find((sid) => parents.some((p) => p.id === sid));
      if (spouseId) {
        const spouse = nodeMap.get(spouseId);
        if (spouse) {
          parentCenterX =
            (Math.min(parent.x, spouse.x) + Math.max(parent.x, spouse.x) + parent.width) / 2;
        }
      }

      const childrenMinX = Math.min(...children.map((c) => c.x));
      const childrenMaxX = Math.max(...children.map((c) => c.x));
      const childrenSpanWidth = childrenMaxX - childrenMinX + config.nodeWidth;
      const childrenTargetMinX = parentCenterX - childrenSpanWidth / 2;
      const deltaX = childrenTargetMinX - childrenMinX;

      if (Math.abs(deltaX) > 10) {
        const minChildIndex = nextGenNodes.indexOf(children[0]);
        if (minChildIndex >= 0) {
          for (let k = minChildIndex; k < nextGenNodes.length; k++) {
            const target = nextGenNodes[k];
            if (target) target.x += deltaX;
          }
        }

        for (let k = 1; k < nextGenNodes.length; k++) {
          const prev = nextGenNodes[k - 1];
          const curr = nextGenNodes[k];
          if (prev && curr) {
            const isSpouse =
              prev.spouseIds.includes(curr.id) || curr.spouseIds.includes(prev.id);
            const gap = isSpouse ? config.spouseGapX : config.siblingGapX;
            const minRequiredX = prev.x + prev.width + gap;
            if (curr.x < minRequiredX) {
              curr.x = minRequiredX;
            }
          }
        }
      }
    }
  }

  // ========================================================================
  // 3-BOSQICH: Normalizatsiya (X koordinatalarini padding.x dan boshlash)
  // ========================================================================
  const minObservedX = Math.min(...nodes.map((n) => n.x));
  const shiftX = config.padding.x - minObservedX;
  if (shiftX !== 0) {
    for (const node of nodes) {
      node.x += shiftX;
    }
  }

  // ========================================================================
  // 4-BOSQICH: Bogʻlovchi shoxlarni (Links) hisoblash
  // ========================================================================
  const links: LayoutLink[] = [];
  const pathGenerator =
    config.pathStyle === 'orthogonal' ? generateOrthogonalPath : generateBotanicalBranchPath;

  for (const member of members) {
    const childNode = nodeMap.get(member.character_id);
    if (!childNode) continue;

    const visibleParents = member.parent_ids
      .map((pid) => nodeMap.get(pid))
      .filter((p): p is LayoutNode => p !== undefined);

    if (visibleParents.length > 0) {
      // Agar ikkala ota-ona kanvasda yonma-yon turmush oʻrtoq boʻlsa va unionParentLinks yoqilgan boʻlsa,
      // nikoh chizigʻi oʻrtasidan yagona toza shajara chizigʻi tushiriladi.
      const pFirst = visibleParents[0]!;
      const pSecond = visibleParents[1];
      const areSpouses =
        visibleParents.length === 2 &&
        pSecond !== undefined &&
        Math.abs(
          Math.max(pFirst.x, pSecond.x) - (Math.min(pFirst.x, pSecond.x) + pFirst.width)
        ) <= config.spouseGapX + 8 &&
        (pFirst.spouseIds.includes(pSecond.id) || pSecond.spouseIds.includes(pFirst.id));

      if (config.unionParentLinks && areSpouses && pSecond) {
        const leftP = pFirst.x < pSecond.x ? pFirst : pSecond;
        const rightP = pFirst.x < pSecond.x ? pSecond : pFirst;
        const unionX = (leftP.x + leftP.width + rightP.x) / 2;
        const unionY = leftP.y + leftP.height / 2;
        const toX = childNode.x + childNode.width / 2;
        const toY = childNode.y;

        links.push({
          id: `parent-child:${pFirst.id}+${pSecond.id}->${member.character_id}`,
          fromId: pFirst.id,
          toId: member.character_id,
          type: 'parent-child',
          pathD: pathGenerator(unionX, unionY, toX, toY),
          isUncertain: member.is_uncertain,
          uncertaintyNotes: member.uncertainty_notes || childNode.uncertaintyNotes,
        });
      } else {
        for (const parentNode of visibleParents) {
          const fromX = parentNode.x + parentNode.width / 2;
          const fromY = parentNode.y + parentNode.height;
          const toX = childNode.x + childNode.width / 2;
          const toY = childNode.y;

          links.push({
            id: `parent-child:${parentNode.id}->${member.character_id}`,
            fromId: parentNode.id,
            toId: member.character_id,
            type: 'parent-child',
            pathD: pathGenerator(fromX, fromY, toX, toY),
            isUncertain: member.is_uncertain,
            uncertaintyNotes: member.uncertainty_notes || childNode.uncertaintyNotes,
          });
        }
      }
    } else {
      // Bevosita ota-onasi jadvalda koʻrsatilmagan holat: kanonik ajdod koʻprigini tekshirish
      let bridgeAncestor: LayoutNode | undefined;

      for (const parentId of member.parent_ids) {
        const mappedAncestorId = KNOWN_BRIDGE_ANCESTORS[parentId];
        if (mappedAncestorId && nodeMap.has(mappedAncestorId)) {
          bridgeAncestor = nodeMap.get(mappedAncestorId);
          break;
        }
      }

      if (!bridgeAncestor && member.parent_ids.length === 0) {
        const implicit = IMPLICIT_DYNASTIC_BRIDGES[member.character_id];
        if (implicit && nodeMap.has(implicit.ancestorId)) {
          bridgeAncestor = nodeMap.get(implicit.ancestorId);
        }
      }

      // Faqat tashqi sulola vakili boʻlmagan taqdirdagina zaxira ajdod qidiriladi
      const isPurelyExternalOrigin =
        member.parent_ids.length > 0 &&
        member.parent_ids.every((pid) => EXTERNAL_LINEAGE_PARENTS.has(pid));

      if (!bridgeAncestor && member.parent_ids.length > 0 && !isPurelyExternalOrigin) {
        for (const other of nodes) {
          if (other.generation < childNode.generation && other.id !== childNode.id) {
            if (!bridgeAncestor || other.generation > bridgeAncestor.generation) {
              bridgeAncestor = other;
            }
          }
        }
      }

      if (bridgeAncestor) {
        const fromX = bridgeAncestor.x + bridgeAncestor.width / 2;
        const fromY = bridgeAncestor.y + bridgeAncestor.height;
        const toX = childNode.x + childNode.width / 2;
        const toY = childNode.y;

        links.push({
          id: `bridge:${bridgeAncestor.id}->${member.character_id}`,
          fromId: bridgeAncestor.id,
          toId: member.character_id,
          type: 'bridge',
          pathD: pathGenerator(fromX, fromY, toX, toY),
          isUncertain: member.is_uncertain,
          uncertaintyNotes: member.uncertainty_notes,
          bridgeNote: childNode.bridgeNote,
        });
      }
    }

    // Turmush oʻrtoqlari oʻrtasidagi gorizontal nikoh bogʻlanishlari
    for (const spouseId of member.spouse_ids) {
      const spouseNode = nodeMap.get(spouseId);
      if (spouseNode && member.character_id < spouseId) {
        const isLeft = childNode.x < spouseNode.x;
        const leftNode = isLeft ? childNode : spouseNode;
        const rightNode = isLeft ? spouseNode : childNode;
        const gapBetween = rightNode.x - (leftNode.x + leftNode.width);
        const midY = childNode.y + childNode.height / 2;

        // Agar ular orasida boshqa tugun boʻlsa (masalan Finwë — Míriel — Indis uchligida Finwë va Indis),
        // ustki nafis arka hosil qilamiz, aks holda toʻgʻri gorizontal chiziq chizamiz.
        let marriagePath: string;
        if (gapBetween > config.nodeWidth) {
          const x1 = leftNode.x + leftNode.width * 0.72;
          const x2 = rightNode.x + rightNode.width * 0.28;
          const topY = leftNode.y;
          const arcY = topY - 18;
          marriagePath = `M ${Math.round(x1)} ${Math.round(topY)} C ${Math.round(x1)} ${Math.round(arcY)}, ${Math.round(x2)} ${Math.round(arcY)}, ${Math.round(x2)} ${Math.round(topY)}`;
        } else {
          marriagePath = generateMarriagePath(
            leftNode.x + leftNode.width,
            midY,
            rightNode.x,
            midY
          );
        }

        links.push({
          id: `marriage:${member.character_id}<->${spouseId}`,
          fromId: member.character_id,
          toId: spouseId,
          type: 'marriage',
          pathD: marriagePath,
          isUncertain: false,
        });
      }
    }
  }

  // Aka-uka va opa-singillar oʻrtasidagi gorizontal tugʻishganlik bogʻlanishlari (ixtiyoriy)
  if (config.includeSiblingLinks) {
    const emittedPairs = new Set<string>();
    for (const gen of genKeys) {
      const genNodes = nodes
        .filter((n) => n.generation === gen && n.parentIds.length > 0)
        .sort((a, b) => a.x - b.x);

      for (let i = 0; i < genNodes.length - 1; i++) {
        const left = genNodes[i]!;
        const right = genNodes[i + 1]!;
        const sharesParent = left.parentIds.some((pid) => right.parentIds.includes(pid));
        // Túrin va Nienor oʻrtasida nikoh chizigʻi ham bor, ammo aka-singil qavsi yuqorida chiziladi
        if (sharesParent) {
          const pairKey = [left.id, right.id].sort().join(':');
          if (!emittedPairs.has(pairKey)) {
            emittedPairs.add(pairKey);
            links.push({
              id: `sibling:${left.id}<->${right.id}`,
              fromId: left.id,
              toId: right.id,
              type: 'sibling',
              pathD: generateSiblingPath(
                left.x + left.width / 2,
                right.x + right.width / 2,
                left.y
              ),
              isUncertain: left.isUncertain || right.isUncertain,
            });
          }
        }
      }
    }
  }

  const maxRightX = Math.max(...nodes.map((n) => n.x + n.width));
  const maxBottomY = Math.max(...nodes.map((n) => n.y + n.height));

  const totalWidth = Math.round(maxRightX + config.padding.x);
  const totalHeight = Math.round(maxBottomY + config.padding.y);

  return {
    nodes,
    links,
    dimensions: {
      width: totalWidth,
      height: totalHeight,
    },
  };
}
