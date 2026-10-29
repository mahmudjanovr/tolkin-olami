/**
 * TOLKIEN OLAMI — Nasabnoma Munosabatlari va Shajara Grafigi Utiliti
 *
 * Ushbu modul sulola a'zolari o'rtasidagi ierarxik munosabatlarni,
 * ko'p nikohlarni, matniy noaniqliklarni tahlil qilish va skrinriderlar
 * uchun semantik daraxt ma'lumotlar strukturasini qurish uchun xizmat qiladi.
 */

export interface GenealogyMemberInput {
  character_id: string;
  spouse_ids: string[];
  parent_ids: string[];
  generation: number;
  order: number;
  is_uncertain: boolean;
  uncertainty_notes?: string;
}

export interface AccessibleTreeNode {
  id: string;
  generation: number;
  order: number;
  spouseIds: string[];
  parentIds: string[];
  isUncertain: boolean;
  uncertaintyNotes?: string;
  children: AccessibleTreeNode[];
}

export interface ReferentialIntegrityResult {
  isValid: boolean;
  missingSpouses: { fromId: string; missingId: string }[];
  missingParents: { fromId: string; missingId: string }[];
}

/**
 * A'zolar ro'yxatidan tezkor qidiruv xaritasini hosil qiladi.
 */
export function buildMemberLookup<T extends GenealogyMemberInput>(members: T[]): Map<string, T> {
  const map = new Map<string, T>();
  for (const m of members) {
    map.set(m.character_id, m);
  }
  return map;
}

/**
 * Berilgan shaxsning barcha farzandlarini qaytaradi.
 */
export function getChildrenOf<T extends GenealogyMemberInput>(
  parentId: string,
  members: T[]
): T[] {
  return members
    .filter((m) => m.parent_ids.includes(parentId))
    .sort((a, b) => a.order - b.order);
}

/**
 * A'zolarni avlodlar (generations) bo'yicha guruhlaydi.
 */
export function groupMembersByGeneration<T extends GenealogyMemberInput>(
  members: T[]
): Map<number, T[]> {
  const map = new Map<number, T[]>();

  for (const member of members) {
    const list = map.get(member.generation) || [];
    list.push(member);
    map.set(member.generation, list);
  }

  // Har bir avlod ichidagi a'zolarni tartib raqami (order) bo'yicha saralash
  for (const [gen, list] of map.entries()) {
    list.sort((a, b) => a.order - b.order);
    map.set(gen, list);
  }

  return map;
}

/**
 * Matniy noaniqlikka ega bo'lgan (is_uncertain === true) barcha a'zolarni qaytaradi.
 */
export function getUncertainMembers<T extends GenealogyMemberInput>(members: T[]): T[] {
  return members.filter((m) => m.is_uncertain === true);
}

/**
 * Sulola a'zolari o'rtasida ota-ona va turmush o'rtoq bog'liqliklarining
 * yaxlitligini tekshiradi (barcha bog'langan ID lar ro'yxatda mavjudmi yoki tashqi shaxslarmi).
 */
export function checkInternalReferentialIntegrity<T extends GenealogyMemberInput>(
  members: T[],
  externalKnownIds: Set<string> = new Set()
): ReferentialIntegrityResult {
  const localIds = new Set(members.map((m) => m.character_id));
  const missingSpouses: { fromId: string; missingId: string }[] = [];
  const missingParents: { fromId: string; missingId: string }[] = [];

  for (const m of members) {
    for (const spouseId of m.spouse_ids) {
      if (!localIds.has(spouseId) && !externalKnownIds.has(spouseId)) {
        missingSpouses.push({ fromId: m.character_id, missingId: spouseId });
      }
    }

    for (const parentId of m.parent_ids) {
      if (!localIds.has(parentId) && !externalKnownIds.has(parentId)) {
        missingParents.push({ fromId: m.character_id, missingId: parentId });
      }
    }
  }

  return {
    isValid: missingSpouses.length === 0 && missingParents.length === 0,
    missingSpouses,
    missingParents,
  };
}

/**
 * Semantik HTML daraxtini render qilish uchun rekuriv iyerarxik tugunlar
 * ro'yxatini shakllantiradi (ildiz a'zolardan boshlab).
 */
export function buildAccessibleTreeStructure<T extends GenealogyMemberInput>(
  members: T[]
): AccessibleTreeNode[] {
  const rootMembers = members.filter((m) => m.parent_ids.length === 0);

  // Agar barcha a'zolar ota-onaga ega bo'lsa (aylanma holatda), 1-avloddagilar ildiz bo'ladi
  const effectiveRoots = rootMembers.length > 0
    ? rootMembers
    : members.filter((m) => m.generation === 1);

  function createNode(member: T): AccessibleTreeNode {
    const children = getChildrenOf(member.character_id, members).map((child) => createNode(child));

    return {
      id: member.character_id,
      generation: member.generation,
      order: member.order,
      spouseIds: [...member.spouse_ids],
      parentIds: [...member.parent_ids],
      isUncertain: member.is_uncertain,
      uncertaintyNotes: member.uncertainty_notes,
      children,
    };
  }

  return effectiveRoots.map((root) => createNode(root));
}
