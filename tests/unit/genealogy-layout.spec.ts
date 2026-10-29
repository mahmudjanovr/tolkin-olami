import { describe, expect, it } from 'vitest';
import {
  calculateTreeLayout,
  generateBotanicalBranchPath,
  generateMarriagePath,
  generateOrthogonalPath,
} from '../../src/utils/genealogy/layout';
import type { GenealogyMemberInput } from '../../src/utils/genealogy/relations';
import {
  buildAccessibleTreeStructure,
  buildMemberLookup,
  checkInternalReferentialIntegrity,
  getChildrenOf,
  getUncertainMembers,
  groupMembersByGeneration,
} from '../../src/utils/genealogy/relations';

describe('Nasabnoma Munosabatlari va SVG Tartib Dvigateli (layout.ts va relations.ts)', () => {
  // Sinov uchun Finwë xonadoni va ziddiyatli Gil-galad namunaviy maʼlumotlari
  const sampleMembers: GenealogyMemberInput[] = [
    {
      character_id: 'finwe',
      spouse_ids: ['miriel', 'indis'],
      parent_ids: [],
      generation: 1,
      order: 1,
      is_uncertain: false,
    },
    {
      character_id: 'miriel',
      spouse_ids: ['finwe'],
      parent_ids: [],
      generation: 1,
      order: 2,
      is_uncertain: false,
    },
    {
      character_id: 'indis',
      spouse_ids: ['finwe'],
      parent_ids: [],
      generation: 1,
      order: 3,
      is_uncertain: false,
    },
    {
      character_id: 'feanor',
      spouse_ids: ['nerdanel'],
      parent_ids: ['finwe', 'miriel'],
      generation: 2,
      order: 1,
      is_uncertain: false,
    },
    {
      character_id: 'fingolfin',
      spouse_ids: ['anairë'],
      parent_ids: ['finwe', 'indis'],
      generation: 2,
      order: 2,
      is_uncertain: false,
    },
    {
      character_id: 'fingon',
      spouse_ids: [],
      parent_ids: ['fingolfin'],
      generation: 3,
      order: 1,
      is_uncertain: false,
    },
    {
      character_id: 'gil-galad',
      spouse_ids: [],
      parent_ids: ['fingon'],
      generation: 4,
      order: 1,
      is_uncertain: true,
      uncertainty_notes: "The Silmarillion (1977) da Fingon o'g'li, biroq HoME XII da Orodreth o'g'li deb qayd etilgan.",
    },
  ];

  describe('relations.ts tahlil funksiyalari', () => {
    it('buildMemberLookup tezkor xaritani hosil qilishi kerak', () => {
      const lookup = buildMemberLookup(sampleMembers);
      expect(lookup.get('finwe')?.generation).toBe(1);
      expect(lookup.get('feanor')?.parent_ids).toContain('miriel');
    });

    it('getChildrenOf berilgan ota-ona boʻyicha bolalarni tartib bilan qaytarishi kerak', () => {
      const finweChildren = getChildrenOf('finwe', sampleMembers);
      expect(finweChildren.length).toBe(2);
      expect(finweChildren.map((c) => c.character_id)).toEqual(['feanor', 'fingolfin']);

      const mirielChildren = getChildrenOf('miriel', sampleMembers);
      expect(mirielChildren.length).toBe(1);
      expect(mirielChildren[0]?.character_id).toBe('feanor');
    });

    it('groupMembersByGeneration aʼzolarni avlodlar boʻyicha toʻgʻri guruhlashi kerak', () => {
      const grouped = groupMembersByGeneration(sampleMembers);
      expect(grouped.get(1)?.length).toBe(3); // Finwë, Míriel, Indis
      expect(grouped.get(2)?.length).toBe(2); // Fëanor, Fingolfin
      expect(grouped.get(3)?.length).toBe(1); // Fingon
      expect(grouped.get(4)?.length).toBe(1); // Gil-galad
    });

    it('getUncertainMembers faqat is_uncertain === true boʻlgan aʼzolarni filtrlashi kerak', () => {
      const uncertain = getUncertainMembers(sampleMembers);
      expect(uncertain.length).toBe(1);
      expect(uncertain[0]?.character_id).toBe('gil-galad');
      expect(uncertain[0]?.uncertainty_notes).toBeDefined();
    });

    it('checkInternalReferentialIntegrity mavjud boʻlmagan ID larni aniqlashi kerak', () => {
      // nerdanel va anairë sampleMembers ro'yxatida to'liq tavsiflanmagan
      const integrity = checkInternalReferentialIntegrity(sampleMembers, new Set(['nerdanel', 'anairë']));
      expect(integrity.isValid).toBe(true);

      const strictIntegrity = checkInternalReferentialIntegrity(sampleMembers);
      expect(strictIntegrity.isValid).toBe(false);
      expect(strictIntegrity.missingSpouses.some((m) => m.missingId === 'nerdanel')).toBe(true);
    });

    it('buildAccessibleTreeStructure toʻgʻri iyerarxik daraxt obyekti hosil qilishi kerak', () => {
      const tree = buildAccessibleTreeStructure(sampleMembers);
      expect(tree.length).toBeGreaterThan(0);
      const finweRoot = tree.find((t) => t.id === 'finwe');
      expect(finweRoot).toBeDefined();
      expect(finweRoot?.children.length).toBe(2);
    });
  });

  describe('layout.ts SVG tartib dvigateli', () => {
    it('generateOrthogonalPath toza 90 gradusli zina yoʻlini hosil qilishi kerak', () => {
      const path = generateOrthogonalPath(100, 50, 200, 150);
      expect(path).toBe('M 100 50 L 100 100 L 200 100 L 200 150');
    });

    it('generateMarriagePath gorizontal toʻgʻri chiziq yoʻlini hosil qilishi kerak', () => {
      const path = generateMarriagePath(100, 50, 150, 50);
      expect(path).toBe('M 100 50 L 150 50');
    });

    it('generateBotanicalBranchPath nafis kubik Bezye egri chiziq yoʻlini hosil qilishi kerak', () => {
      const path = generateBotanicalBranchPath(100, 50, 200, 150);
      expect(path).toBe('M 100 50 C 100 100, 200 100, 200 150');
    });

    it('calculateTreeLayout tugunlar va bogʻlanishlarni toʻliq hisoblab berishi kerak', () => {
      const layout = calculateTreeLayout(sampleMembers);

      // Tugunlar soni
      expect(layout.nodes.length).toBe(sampleMembers.length);

      // Tugunlar ilmiy metama'lumotlar bilan boyitilgan bo'lishi kerak
      const feanorNode = layout.nodes.find((n) => n.id === 'feanor');
      expect(feanorNode).toBeDefined();
      expect(feanorNode?.name).toBe('Fëanor');
      expect(feanorNode?.titles).toContain('Noldor Oliy Qiroli');
      expect(feanorNode?.dates).toContain('D.d. 1169');

      // Har bir avlodning Y koordinatasi bir xil gorizontal tekislikda bo'lishi kerak
      const gen1Nodes = layout.nodes.filter((n) => n.generation === 1);
      const firstGen1 = gen1Nodes[0];
      expect(firstGen1).toBeDefined();
      expect(gen1Nodes.every((n) => n.y === firstGen1?.y)).toBe(true);

      const gen2Nodes = layout.nodes.filter((n) => n.generation === 2);
      const firstGen2 = gen2Nodes[0];
      expect(firstGen2).toBeDefined();
      expect(gen2Nodes.every((n) => n.y === firstGen2?.y)).toBe(true);
      expect(firstGen2!.y).toBeGreaterThan(firstGen1!.y);

      // Ziddiyatli (uncertain) bogʻlanish mavjudligi va xossalarini saqlashi
      const uncertainLink = layout.links.find((l) => l.toId === 'gil-galad');
      expect(uncertainLink).toBeDefined();
      expect(uncertainLink?.isUncertain).toBe(true);
      expect(uncertainLink?.uncertaintyNotes).toContain('Silmarillion');

      // Nikoh bog'lanishlari mavjudligi
      const marriageLinks = layout.links.filter((l) => l.type === 'marriage');
      expect(marriageLinks.length).toBeGreaterThan(0);

      // Umumiy o'lchamlar musbat bo'lishi
      expect(layout.dimensions.width).toBeGreaterThan(0);
      expect(layout.dimensions.height).toBeGreaterThan(0);
    });
  });
});
