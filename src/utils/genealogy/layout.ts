/**
 * TOLKIEN OLAMI — Nasabnoma SVG Daraxti Tartib Hisoblagichi (Layout Engine)
 *
 * Ushbu modul sulola aʼzolari koordinatalarini (X, Y) va ularni bogʻlovchi
 * nafis botanik (White Tree uslubidagi) kubik Bezye egri chiziqlarini
 * tashqi ogʻir kutubxonalarsiz, deterministik analitik usulda hisoblab beradi.
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
}

export const DEFAULT_LAYOUT_CONFIG: LayoutConfig = {
  nodeWidth: 170,
  nodeHeight: 68,
  tierGapY: 150,
  siblingGapX: 44,
  spouseGapX: 20,
  padding: { x: 50, y: 50 },
  pathStyle: 'botanical',
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
  fromId: string;
  toId: string;
  type: 'parent-child' | 'marriage' | 'bridge';
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
 * Sulola aʼzolari roʻyxatidan ikki bosqichli (two-pass) markazlashtirilgan
 * nafis SVG daraxt tartibini hisoblaydi.
 */
export function calculateTreeLayout<T extends GenealogyMemberInput>(
  members: T[],
  customConfig?: Partial<LayoutConfig>
): TreeLayout {
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

    for (const member of genMembers) {
      const meta = getCharacterMeta(member.character_id);

      // Agar ota-onasi ro'yxatda to'g'ridan-to'g'ri bo'lmasa, ilmiy ko'prik izohi (bridge note)
      let bridgeNote: string | undefined;
      for (const parentId of member.parent_ids) {
        if (!members.some((m) => m.character_id === parentId)) {
          const pMeta = getCharacterMeta(parentId);
          bridgeNote = `${pMeta.name} orqali`;
          break;
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
        uncertaintyNotes: member.uncertainty_notes || (member.is_uncertain ? meta.uncertaintyNotes : undefined),
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

      currentX += config.nodeWidth + config.siblingGapX;
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
      // Shu ota-onaning keyingi avloddagi farzandlari
      const children = nextGenNodes.filter((c) => c.parentIds.includes(parent.id));
      if (children.length === 0 || !children[0]) continue;

      // Ota-ona birligi markazi
      let parentCenterX = parent.x + parent.width / 2;
      const spouseId = parent.spouseIds.find((sid) => parents.some((p) => p.id === sid));
      if (spouseId) {
        const spouse = nodeMap.get(spouseId);
        if (spouse) {
          parentCenterX = (Math.min(parent.x, spouse.x) + Math.max(parent.x, spouse.x) + parent.width) / 2;
        }
      }

      // Farzandlar oralig'ining markazi
      const childrenMinX = Math.min(...children.map((c) => c.x));
      const childrenMaxX = Math.max(...children.map((c) => c.x));
      const childrenSpanWidth = childrenMaxX - childrenMinX + config.nodeWidth;
      const childrenTargetMinX = parentCenterX - childrenSpanWidth / 2;
      const deltaX = childrenTargetMinX - childrenMinX;

      if (Math.abs(deltaX) > 10) {
        // Farzandlarni va ularning o'ng tomonidagi tugunlarni surish
        const minChildIndex = nextGenNodes.indexOf(children[0]);
        if (minChildIndex >= 0) {
          for (let k = minChildIndex; k < nextGenNodes.length; k++) {
            const target = nextGenNodes[k];
            if (target) target.x += deltaX;
          }
        }

        // To'qnashuvlarni oldini olish: har bir tugun o'zidan oldingisidan kamida siblingGapX uzoqda bo'lishi shart
        for (let k = 1; k < nextGenNodes.length; k++) {
          const prev = nextGenNodes[k - 1];
          const curr = nextGenNodes[k];
          if (prev && curr) {
            const minRequiredX = prev.x + prev.width + config.siblingGapX;
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
  const pathGenerator = config.pathStyle === 'orthogonal'
    ? generateOrthogonalPath
    : generateBotanicalBranchPath;

  for (const member of members) {
    const childNode = nodeMap.get(member.character_id);
    if (!childNode) continue;

    let hasParentDrawn = false;

    // Ota-ona va farzand oʻrtasidagi vertikal Bezye shoxlari
    for (const parentId of member.parent_ids) {
      const parentNode = nodeMap.get(parentId);
      if (parentNode) {
        const fromX = parentNode.x + parentNode.width / 2;
        const fromY = parentNode.y + parentNode.height;
        const toX = childNode.x + childNode.width / 2;
        const toY = childNode.y;

        links.push({
          fromId: parentId,
          toId: member.character_id,
          type: 'parent-child',
          pathD: pathGenerator(fromX, fromY, toX, toY),
          isUncertain: member.is_uncertain,
          uncertaintyNotes: member.uncertainty_notes || childNode.uncertaintyNotes,
        });

        hasParentDrawn = true;
      }
    }

    // Agar ota-onasi to'g'ridan-to'g'ri ro'yxatda bo'lmasa, bobosi yoki xonadon asoschisidan ko'prik shoxi
    if (!hasParentDrawn && member.parent_ids.length > 0) {
      // Xonadondagi boshqa ajdodni topishga urinish
      let bridgeAncestor: LayoutNode | undefined;
      for (const other of nodes) {
        if (other.generation < childNode.generation && other.id !== childNode.id) {
          // Eng yaqin yuqori avlod
          if (!bridgeAncestor || other.generation > bridgeAncestor.generation) {
            bridgeAncestor = other;
          }
        }
      }

      if (bridgeAncestor) {
        const fromX = bridgeAncestor.x + bridgeAncestor.width / 2;
        const fromY = bridgeAncestor.y + bridgeAncestor.height;
        const toX = childNode.x + childNode.width / 2;
        const toY = childNode.y;

        links.push({
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
      // Faqat bir yoʻnalishda chizamiz
      if (spouseNode && member.character_id < spouseId) {
        const isLeft = childNode.x < spouseNode.x;
        const fromX = isLeft ? childNode.x + childNode.width : childNode.x;
        const toX = isLeft ? spouseNode.x : spouseNode.x + spouseNode.width;
        const midY = childNode.y + childNode.height / 2;

        links.push({
          fromId: member.character_id,
          toId: spouseId,
          type: 'marriage',
          pathD: generateMarriagePath(fromX, midY, toX, midY),
          isUncertain: false,
        });
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
