import { describe, expect, it } from 'vitest';
import { BILBO_JOURNEY } from '../../src/data/journeys/bilbo-journey';
import { FELLOWSHIP_JOURNEY } from '../../src/data/journeys/fellowship-journey';
import { GREY_COMPANY_JOURNEY } from '../../src/data/journeys/grey-company-journey';
import { RING_BEARER_JOURNEY } from '../../src/data/journeys/ring-bearer-journey';
import { SILMARIL_QUEST_JOURNEY } from '../../src/data/journeys/silmaril-quest-journey';
import {
  DEFAULT_JOURNEY_ID,
  getAllJourneys,
  getJourneyById,
  isValidJourneyId,
} from '../../src/data/journeys/journey-registry';
import { journeyDefinitionSchema } from '../../src/utils/atlas/journey-types';
import { parseAtlasParams, serializeAtlasParams } from '../../src/utils/atlas/url-state';

describe('Tarixiy Sayohatlar Atlasi (Journey Atlas) — Bilbo Baggins', () => {
  describe('Kanonik Sayohat Modeli va Sxema Validatsiyasi', () => {
    it('BILBO_JOURNEY Zod sxemasi boʻyicha muvaffaqiyatli validatsiyadan oʻtishi kerak', () => {
      const parsed = journeyDefinitionSchema.safeParse(BILBO_JOURNEY);
      expect(parsed.success).toBe(true);
      if (!parsed.success) {
        console.error(parsed.error);
      }
    });

    it('Sayohat 10 ta bosqichdan iborat boʻlishi va bosqichlar qatʼiy tartiblangan boʻlishi kerak', () => {
      expect(BILBO_JOURNEY.totalStages).toBe(10);
      expect(BILBO_JOURNEY.stages.length).toBe(10);

      BILBO_JOURNEY.stages.forEach((stage, index) => {
        expect(stage.sequence).toBe(index + 1);
        expect(stage.titleUz.length).toBeGreaterThan(0);
        expect(stage.locationNameUz.length).toBeGreaterThan(0);
        expect(stage.locationNameOriginal.length).toBeGreaterThan(0);
        expect(stage.dateUz.length).toBeGreaterThan(0);
        expect(stage.source.bookSlug).toBe('the-hobbit');
        expect(stage.source.chapterNumber).toBeGreaterThan(0);
        expect(stage.source.chapterTitleUz.length).toBeGreaterThan(0);
      });
    });

    it('Har bir bosqich Oʻrta-yer planar chegaralarida (0..2048) koordinatalarga ega boʻlishi kerak', () => {
      for (const stage of BILBO_JOURNEY.stages) {
        expect(stage.coordinates).toBeDefined();
        if (stage.coordinates) {
          expect(stage.coordinates.x).toBeGreaterThanOrEqual(0);
          expect(stage.coordinates.x).toBeLessThanOrEqual(2048);
          expect(stage.coordinates.y).toBeGreaterThanOrEqual(0);
          expect(stage.coordinates.y).toBeLessThanOrEqual(2048);
        }
      }
    });

    it('Kanonik toponimlar bilan bogʻliqlik (Rivendell / Imladris)', () => {
      const rivendellStage = BILBO_JOURNEY.stages.find((s) => s.sequence === 3);
      expect(rivendellStage).toBeDefined();
      expect(rivendellStage?.placeId).toBe('rivendell');
      expect(rivendellStage?.locationNameUz).toBe('Rivendell (Yoriqvodiy / Imladris)');
      expect(rivendellStage?.coordinateResolution.status).toBe('confirmed');
    });

    it('Burgutlar parvozi (4 -> 5 bosqich) taxminiy (approximate) segment sifatida belgilangan boʻlishi kerak', () => {
      const stage4 = BILBO_JOURNEY.stages.find((s) => s.sequence === 4);
      expect(stage4).toBeDefined();
      expect(stage4?.segmentToNext?.type).toBe('approximate');
      expect(stage4?.segmentToNext?.descriptionUz).toContain('Burgutlar');
    });

    it('Oddiy quruqlikdagi marshrutlar tasdiqlangan (confirmed) segment sifatida belgilangan boʻlishi kerak', () => {
      const stage1 = BILBO_JOURNEY.stages.find((s) => s.sequence === 1);
      expect(stage1?.segmentToNext?.type).toBe('confirmed');

      const stage2 = BILBO_JOURNEY.stages.find((s) => s.sequence === 2);
      expect(stage2?.segmentToNext?.type).toBe('confirmed');
    });

    it('Boshlangʻich nuqta Shir va Hobbiton (Bag End) boʻlishi va kanonik toponimga bogʻlangan boʻlishi kerak', () => {
      const stage1 = BILBO_JOURNEY.stages[0];
      expect(stage1).toBeDefined();
      if (!stage1) throw new Error('Stage 1 not found');

      expect(stage1.sequence).toBe(1);
      expect(stage1.placeId).toBe('hobbiton');
      expect(stage1.locationNameUz).toContain('Hobbiton');
      expect(stage1.coordinates).toEqual({ x: 490, y: 1408 });
      expect(stage1.coordinateResolution.status).toBe('confirmed');

      // Buyuk Sharqiy Yoʻl boʻylab kanonik oraliq nuqtalar
      const waypoints = stage1.segmentToNext?.waypoints || [];
      expect(waypoints.length).toBeGreaterThanOrEqual(4);
      // Brendivin ko'prigi, Bri, Amon Sûl, Oxirgi Ko'prik
      expect(waypoints.some((w) => w.x === 592 && w.y === 1412)).toBe(true);
      expect(waypoints.some((w) => w.x === 650 && w.y === 1413)).toBe(true);
      expect(waypoints.some((w) => w.x === 720 && w.y === 1418)).toBe(true);
      expect(waypoints.some((w) => w.x === 790 && w.y === 1413)).toBe(true);
    });

    it('Erebor (Lonely Mountain) 8-bosqich sifatida yetib borilishi kerak', () => {
      const ereborStage = BILBO_JOURNEY.stages[7];
      expect(ereborStage).toBeDefined();
      if (!ereborStage) throw new Error('Stage 8 not found');

      expect(ereborStage.sequence).toBe(8);
      expect(ereborStage.locationNameUz).toContain('Erebor');
      expect(ereborStage.locationNameOriginal).toBe('The Lonely Mountain (Erebor)');
      expect(ereborStage.storyEvent.titleUz).toContain('Smaug');
      expect(ereborStage.source.chapterTitleUz).toContain('Ostonada');
    });

    it('Deyl va Besh Armiya Jangi 9-bosqich sifatida kiritilgan boʻlishi kerak', () => {
      const daleStage = BILBO_JOURNEY.stages[8];
      expect(daleStage).toBeDefined();
      expect(daleStage?.sequence).toBe(9);
      expect(daleStage?.id).toBe('bilbo-dale');
      expect(daleStage?.locationNameUz).toContain('Deyl');
      expect(daleStage?.coordinates).toEqual({ x: 1478, y: 1558 });
      expect(daleStage?.direction).toBe('outbound');
      expect(daleStage?.segmentToNext?.direction).toBe('return');
    });

    it('Shirga qaytish safari 10-bosqich sifatida kiritilgan va qatʼiy yoʻnaltirilgan boʻlishi kerak', () => {
      const returnStage = BILBO_JOURNEY.stages[9];
      expect(returnStage).toBeDefined();
      expect(returnStage?.sequence).toBe(10);
      expect(returnStage?.id).toBe('bilbo-return-hobbiton');
      expect(returnStage?.locationNameUz).toContain('Hobbiton');
      expect(returnStage?.placeId).toBe('hobbiton');
      expect(returnStage?.direction).toBe('return');
      expect(returnStage?.coordinates).toEqual({ x: 460, y: 1420 });
      expect(returnStage?.source.chapterNumber).toBe(19);
    });

    it('Borish safaridagi oraliq segmentlar (1..8) uzluksiz boʻlishi va sharqqa tomon harakatlanishi kerak', () => {
      for (let i = 0; i < 7; i++) {
        const from = BILBO_JOURNEY.stages[i];
        const to = BILBO_JOURNEY.stages[i + 1];
        expect(from).toBeDefined();
        expect(to).toBeDefined();
        if (!from || !to) continue;

        expect(from.segmentToNext).toBeDefined();
        if (from.segmentToNext && from.segmentToNext.descriptionUz) {
          expect(from.segmentToNext.descriptionUz.length).toBeGreaterThan(0);
        }
        if (from.coordinates && to.coordinates) {
          // Yoʻl gʻarbdan sharqqa tomon harakatlanadi (x koordinata oʻsib boradi)
          expect(to.coordinates.x).toBeGreaterThan(from.coordinates.x);
        }
      }
    });

    it('Qaytish segmenti (9 -> 10) Deyldan Zulmatzor shimoli, Beorn, Dovon, Imladris va Buyuk Sharqiy Yoʻl orqali Bag Endga qaytishi kerak', () => {
      const dale = BILBO_JOURNEY.stages[8];
      const returnHobbiton = BILBO_JOURNEY.stages[9];
      expect(dale).toBeDefined();
      expect(returnHobbiton).toBeDefined();
      if (!dale || !returnHobbiton) throw new Error('Stage not found');

      expect(dale.segmentToNext).toBeDefined();
      expect(dale.segmentToNext?.direction).toBe('return');

      const waypoints = dale.segmentToNext?.waypoints || [];
      expect(waypoints.length).toBeGreaterThanOrEqual(10);

      // Shimoliy Zulmatzor, Beorn, Dovon, Rivendell, Last Bridge, Bree, Brandywine
      expect(waypoints.some((w) => w.x === 1110 && w.y === 1528)).toBe(true); // Beorn
      expect(waypoints.some((w) => w.x === 955 && w.y === 1448)).toBe(true);  // High Pass
      expect(waypoints.some((w) => w.x === 920 && w.y === 1420)).toBe(true);  // Rivendell
      expect(waypoints.some((w) => w.x === 790 && w.y === 1413)).toBe(true);  // Last Bridge
      expect(waypoints.some((w) => w.x === 650 && w.y === 1413)).toBe(true);  // Bree
      expect(waypoints.some((w) => w.x === 592 && w.y === 1412)).toBe(true);  // Brandywine Bridge

      // Barcha qaytish koordinatalari chekli va xarita chegaralarida
      for (const wp of waypoints) {
        expect(Number.isFinite(wp.x)).toBe(true);
        expect(Number.isFinite(wp.y)).toBe(true);
        expect(wp.x).toBeGreaterThanOrEqual(0);
        expect(wp.x).toBeLessThanOrEqual(2048);
        expect(wp.y).toBeGreaterThanOrEqual(0);
        expect(wp.y).toBeLessThanOrEqual(2048);
      }

      // Oxirgi manzil Bag End / Hobbiton
      expect(returnHobbiton.coordinates?.x).toBe(460);
      expect(returnHobbiton.coordinates?.y).toBe(1420);
    });
  });

  describe('Sayohatlar Registri (journey-registry.ts)', () => {
    it('Bilbo sayohati roʻyxatdan oʻtgan boʻlishi kerak', () => {
      expect(isValidJourneyId('bilbo')).toBe(true);
      expect(isValidJourneyId('nomaqbul-sayr')).toBe(false);

      const journey = getJourneyById('bilbo');
      expect(journey).toBeDefined();
      expect(journey?.id).toBe('bilbo');

      const all = getAllJourneys();
      expect(all.length).toBeGreaterThanOrEqual(1);
      expect(all.some((j) => j.id === 'bilbo')).toBe(true);
      expect(DEFAULT_JOURNEY_ID).toBe('bilbo');
    });

    it('Mavjud boʻlmagan sayr boʻyicha undefined qaytarishi kerak', () => {
      expect(getJourneyById('frodo-sayri')).toBeUndefined();
    });
  });

  describe('URL Holati (sayr va bosqich) Deep-Linking', () => {
    it('Toʻgʻri sayr va bosqichni tahlil qilishi kerak', () => {
      const state = parseAtlasParams('?sayr=bilbo&bosqich=3');
      expect(state.sayr).toBe('bilbo');
      expect(state.bosqich).toBe(3);
    });

    it('Bosqich koʻrsatilmaganda 1-bosqich sukut boʻyicha tanlanishi kerak', () => {
      const state = parseAtlasParams('?sayr=bilbo');
      expect(state.sayr).toBe('bilbo');
      expect(state.bosqich).toBe(1);
    });

    it('Bosqich chegaradan chiqib ketganda 1 va totalStages (10) oraliqqa clamp qilinishi kerak', () => {
      const overState = parseAtlasParams('?sayr=bilbo&bosqich=99');
      expect(overState.bosqich).toBe(10);

      const zeroState = parseAtlasParams('?sayr=bilbo&bosqich=0');
      expect(zeroState.bosqich).toBe(1);

      const negativeState = parseAtlasParams('?sayr=bilbo&bosqich=-5');
      expect(negativeState.bosqich).toBe(1);
    });

    it('Yaroqsiz bosqich satri berilganda 1-bosqichga xavfsiz qaytishi kerak', () => {
      const nanState = parseAtlasParams('?sayr=bilbo&bosqich=notanush');
      expect(nanState.bosqich).toBe(1);
    });

    it('Nomaʼlum sayr berilganda sayr va bosqich parametrlarini eʼtiborsiz qoldirishi kerak', () => {
      const state = parseAtlasParams('?sayr=noto-g-ri&bosqich=4');
      expect(state.sayr).toBeUndefined();
      expect(state.bosqich).toBeUndefined();
    });

    it('URL parametrlari boʻlmaganida orqaga moslik buzilmasligi kerak (sayr va bosqich maydonlari qoʻshilmaydi)', () => {
      const state = parseAtlasParams('?hudud=beleriand&joy=gondolin&x=512&y=384&z=1&view=xarita');
      expect(state).toEqual({
        hudud: 'beleriand',
        joy: 'gondolin',
        x: 512,
        y: 384,
        z: 1,
        view: 'xarita',
      });
    });

    it('serializeAtlasParams sayr va bosqichni toʻgʻri seriyalashi kerak', () => {
      const query = serializeAtlasParams({
        hudud: 'orta-yer',
        sayr: 'bilbo',
        bosqich: 5,
      });
      expect(query).toContain('sayr=bilbo');
      expect(query).toContain('bosqich=5');
    });
  });

  describe('Marshrut Koordinatalari va Planar Konvertatsiya Regressiya Sinovlari', () => {
    it('Rivendelldan keyingi barcha borish (outbound) segmentlari mavjud boʻlishi kerak', () => {
      // 3-bosqich (Rivendell) dan 9-bosqich (Dale) gacha
      for (let i = 2; i < 8; i++) {
        const fromStage = BILBO_JOURNEY.stages[i];
        const toStage = BILBO_JOURNEY.stages[i + 1];
        expect(fromStage).toBeDefined();
        expect(toStage).toBeDefined();
        if (!fromStage || !toStage) throw new Error('Stage missing');
        expect(fromStage.coordinates).toBeDefined();
        expect(toStage.coordinates).toBeDefined();
        expect(fromStage.segmentToNext).toBeDefined();
      }
    });

    it('Barcha bosqich va waypoint koordinatalari chekli va xarita oʻlchami (0..2048) doirasida boʻlishi kerak', () => {
      BILBO_JOURNEY.stages.forEach((stage) => {
        expect(stage.coordinates).toBeDefined();
        if (!stage.coordinates) throw new Error('Coordinates missing');
        expect(Number.isFinite(stage.coordinates.x)).toBe(true);
        expect(Number.isFinite(stage.coordinates.y)).toBe(true);
        expect(stage.coordinates.x).toBeGreaterThanOrEqual(0);
        expect(stage.coordinates.x).toBeLessThanOrEqual(2048);
        expect(stage.coordinates.y).toBeGreaterThanOrEqual(0);
        expect(stage.coordinates.y).toBeLessThanOrEqual(2048);

        if (stage.segmentToNext?.waypoints) {
          stage.segmentToNext.waypoints.forEach((wp) => {
            expect(Number.isFinite(wp.x)).toBe(true);
            expect(Number.isFinite(wp.y)).toBe(true);
            expect(wp.x).toBeGreaterThanOrEqual(0);
            expect(wp.x).toBeLessThanOrEqual(2048);
            expect(wp.y).toBeGreaterThanOrEqual(0);
            expect(wp.y).toBeLessThanOrEqual(2048);
          });
        }
      });
    });

    it('SVG va Planar koordinatalar konvertatsiyasi kanonik xususiyatlarga toʻgʻri kelishi kerak', () => {
      // Masalan, Rivendell SVG y = 628 -> Planar y = 2048 - 628 = 1420
      const rivendell = BILBO_JOURNEY.stages.find((s) => s.id === 'bilbo-rivendell');
      expect(rivendell).toBeDefined();
      expect(rivendell?.coordinates).toBeDefined();
      if (!rivendell?.coordinates) throw new Error('Rivendell coordinates missing');
      expect(rivendell.coordinates.x).toBe(920);
      expect(rivendell.coordinates.y).toBe(1420);
      expect(2048 - 628).toBe(rivendell.coordinates.y);

      // Hobbiton SVG y = 640 -> Planar y = 2048 - 640 = 1408
      const hobbiton = BILBO_JOURNEY.stages.find((s) => s.id === 'bilbo-hobbiton');
      expect(hobbiton).toBeDefined();
      expect(hobbiton?.coordinates).toBeDefined();
      if (!hobbiton?.coordinates) throw new Error('Hobbiton coordinates missing');
      expect(hobbiton.coordinates.x).toBe(490);
      expect(hobbiton.coordinates.y).toBe(1408);
      expect(2048 - 640).toBe(hobbiton.coordinates.y);
    });

    it('Jami 9 ta segment chizigʻi (8 ta borish + 1 ta qaytish) toʻliq shakllanishi kerak', () => {
      let outboundCount = 0;
      let returnCount = 0;

      for (let i = 0; i < BILBO_JOURNEY.stages.length - 1; i++) {
        const fromStage = BILBO_JOURNEY.stages[i];
        if (!fromStage) continue;
        const isReturn = fromStage.segmentToNext?.direction === 'return' || fromStage.direction === 'return';
        if (isReturn) {
          returnCount++;
        } else {
          outboundCount++;
        }
      }

      expect(outboundCount).toBe(8);
      expect(returnCount).toBe(1);
      expect(outboundCount + returnCount).toBe(9);
    });
  });

  describe('Tarixiy Sayohatlar Atlasi — Uzuk Qardoshligi Safari (Fellowship)', () => {
    it('FELLOWSHIP_JOURNEY Zod sxemasi boʻyicha muvaffaqiyatli validatsiyadan oʻtishi kerak', () => {
      const parsed = journeyDefinitionSchema.safeParse(FELLOWSHIP_JOURNEY);
      expect(parsed.success).toBe(true);
    });

    it('Sayohat 6 ta kanonik bosqichdan iborat boʻlishi va bosqichlar ketma-ketligi toʻgʻri boʻlishi kerak', () => {
      expect(FELLOWSHIP_JOURNEY.totalStages).toBe(6);
      expect(FELLOWSHIP_JOURNEY.stages.length).toBe(6);

      const expectedPlaces = ['hobbiton', 'bree', 'rivendell', 'khazad-dum', 'lothlorien', 'amon-hen'];
      FELLOWSHIP_JOURNEY.stages.forEach((stage, idx) => {
        expect(stage.sequence).toBe(idx + 1);
        expect(stage.placeId).toBe(expectedPlaces[idx]);
        expect(stage.coordinates).toBeDefined();
        if (stage.coordinates) {
          expect(stage.coordinates.x).toBeGreaterThanOrEqual(0);
          expect(stage.coordinates.x).toBeLessThanOrEqual(2048);
          expect(stage.coordinates.y).toBeGreaterThanOrEqual(0);
          expect(stage.coordinates.y).toBeLessThanOrEqual(2048);
        }
      });
    });

    it('Birinchi 5 ta bosqich keyingi bosqichga ulovchi yoʻl segmentlariga ega boʻlishi kerak', () => {
      for (let i = 0; i < 5; i++) {
        const stage = FELLOWSHIP_JOURNEY.stages[i];
        expect(stage).toBeDefined();
        if (!stage) throw new Error(`Stage ${i} is undefined`);
        expect(stage.segmentToNext).toBeDefined();
        expect(stage.segmentToNext?.waypoints).toBeDefined();
      }
    });

    it('Amon Hen oxirgi 6-bosqich boʻlishi va qardoshlik boʻlinishini aks ettirishi kerak', () => {
      const stage6 = FELLOWSHIP_JOURNEY.stages[5];
      expect(stage6).toBeDefined();
      if (!stage6) throw new Error('Stage 6 is undefined');
      expect(stage6.id).toBe('fellowship-amon-hen');
      expect(stage6.placeId).toBe('amon-hen');
      expect(stage6.coordinates).toEqual({ x: 1140, y: 810 });
      expect(stage6.locationNameUz).toContain('Amon Hen');
    });
  });

  describe('Tarixiy Sayohatlar Atlasi — Aragorn va Kulrang Boʻlinma (Grey Company)', () => {
    it('GREY_COMPANY_JOURNEY Zod sxemasi boʻyicha muvaffaqiyatli validatsiyadan oʻtishi kerak', () => {
      const parsed = journeyDefinitionSchema.safeParse(GREY_COMPANY_JOURNEY);
      expect(parsed.success).toBe(true);
    });

    it('Sayohat 4 ta kanonik bosqichdan iborat boʻlishi va qatʼiy ketma-ketlikda boʻlishi kerak', () => {
      expect(GREY_COMPANY_JOURNEY.totalStages).toBe(4);
      expect(GREY_COMPANY_JOURNEY.stages.length).toBe(4);

      const expectedPlaces = ['dunharrow', 'paths-of-the-dead', 'pelargir', 'minas-tirith'];
      GREY_COMPANY_JOURNEY.stages.forEach((stage, idx) => {
        expect(stage.sequence).toBe(idx + 1);
        expect(stage.placeId).toBe(expectedPlaces[idx]);
        expect(stage.coordinates).toBeDefined();
        if (stage.coordinates) {
          expect(stage.coordinates.x).toBeGreaterThanOrEqual(0);
          expect(stage.coordinates.x).toBeLessThanOrEqual(2048);
          expect(stage.coordinates.y).toBeGreaterThanOrEqual(0);
          expect(stage.coordinates.y).toBeLessThanOrEqual(2048);
        }
      });
    });

    it('Pelargirda qaroqchilar flotining egallanishi va Anduin daryosi safari kanonik aks ettirilgan boʻlishi kerak', () => {
      const pelargirStage = GREY_COMPANY_JOURNEY.stages.find((s) => s.id === 'grey-company-pelargir');
      expect(pelargirStage).toBeDefined();
      expect(pelargirStage?.placeId).toBe('pelargir');
      expect(pelargirStage?.titleUz).toContain('Qora Flot');
      expect(pelargirStage?.segmentToNext?.descriptionUz).toContain('Anduin');
      expect(pelargirStage?.segmentToNext?.waypoints?.length).toBeGreaterThanOrEqual(3);

      const minasTirithStage = GREY_COMPANY_JOURNEY.stages.find((s) => s.id === 'grey-company-minas-tirith');
      expect(minasTirithStage).toBeDefined();
      expect(minasTirithStage?.locationNameUz).toContain('Harlond');
    });
  });

  describe('Tarixiy Sayohatlar Atlasi — Uzuk Egasining Safari (Frodo va Sam)', () => {
    it('RING_BEARER_JOURNEY Zod sxemasi boʻyicha muvaffaqiyatli validatsiyadan oʻtishi kerak', () => {
      const parsed = journeyDefinitionSchema.safeParse(RING_BEARER_JOURNEY);
      expect(parsed.success).toBe(true);
    });

    it('Sayohat 6 ta kanonik bosqichdan iborat boʻlishi va Orodruin bilan yakunlanishi kerak', () => {
      expect(RING_BEARER_JOURNEY.totalStages).toBe(6);
      expect(RING_BEARER_JOURNEY.stages.length).toBe(6);

      const expectedPlaces = [
        'amon-hen',
        'dead-marshes',
        'morannon',
        'henneth-annun',
        'cirith-ungol',
        'orodruin',
      ];
      RING_BEARER_JOURNEY.stages.forEach((stage, idx) => {
        expect(stage.sequence).toBe(idx + 1);
        expect(stage.placeId).toBe(expectedPlaces[idx]);
        expect(stage.coordinates).toBeDefined();
        if (stage.coordinates) {
          expect(stage.coordinates.x).toBeGreaterThanOrEqual(0);
          expect(stage.coordinates.x).toBeLessThanOrEqual(2048);
          expect(stage.coordinates.y).toBeGreaterThanOrEqual(0);
          expect(stage.coordinates.y).toBeLessThanOrEqual(2048);
        }
      });

      const finalStage = RING_BEARER_JOURNEY.stages[5];
      expect(finalStage).toBeDefined();
      if (!finalStage) throw new Error('Final stage is undefined');
      expect(finalStage.id).toBe('ring-bearer-orodruin');
      expect(finalStage.placeId).toBe('orodruin');
      expect(finalStage.coordinates).toEqual({ x: 1380, y: 620 });
    });
  });

  describe('Sayohatlar Registri va Koʻp Sayohatli Deep-Linking', () => {
    it('Barcha 5 ta kanonik sayohat roʻyxatdan oʻtgan boʻlishi kerak', () => {
      const all = getAllJourneys();
      expect(all.length).toBe(5);
      expect(isValidJourneyId('bilbo')).toBe(true);
      expect(isValidJourneyId('fellowship')).toBe(true);
      expect(isValidJourneyId('ring-bearer')).toBe(true);
      expect(isValidJourneyId('grey-company')).toBe(true);
      expect(isValidJourneyId('silmaril-quest')).toBe(true);
    });

    it('Sinonimlar (aragorn, qardoshlik, frodo, uzuk-egasi, silmaril, beren) toʻgʻri asosiy sayohatga yechilishi kerak', () => {
      expect(isValidJourneyId('aragorn')).toBe(true);
      expect(isValidJourneyId('qardoshlik')).toBe(true);
      expect(isValidJourneyId('frodo')).toBe(true);
      expect(isValidJourneyId('uzuk-egasi')).toBe(true);
      expect(isValidJourneyId('silmaril')).toBe(true);
      expect(isValidJourneyId('beren')).toBe(true);
      expect(getJourneyById('aragorn')?.id).toBe('grey-company');
      expect(getJourneyById('qardoshlik')?.id).toBe('fellowship');
      expect(getJourneyById('frodo')?.id).toBe('ring-bearer');
      expect(getJourneyById('uzuk-egasi')?.id).toBe('ring-bearer');
      expect(getJourneyById('silmaril')?.id).toBe('silmaril-quest');
      expect(getJourneyById('beren')?.id).toBe('silmaril-quest');
      expect(getJourneyById('beren-va-luthien')?.id).toBe('silmaril-quest');
    });

    it('parseAtlasParams safar va sayr parametrlarini teng qabul qilishi kerak', () => {
      const res1 = parseAtlasParams('?safar=fellowship&bosqich=3');
      expect(res1.sayr).toBe('fellowship');
      expect(res1.bosqich).toBe(3);

      const res2 = parseAtlasParams('?safar=aragorn&bosqich=2');
      expect(res2.sayr).toBe('grey-company');
      expect(res2.bosqich).toBe(2);

      const res3 = parseAtlasParams('?safar=frodo&bosqich=6');
      expect(res3.sayr).toBe('ring-bearer');
      expect(res3.bosqich).toBe(6);

      const res4 = parseAtlasParams('?sayr=silmaril-quest&bosqich=5');
      expect(res4.sayr).toBe('silmaril-quest');
      expect(res4.bosqich).toBe(5);
      expect(res4.hudud).toBe('beleriand');
    });

    it('String bosqich ID sini raqamli ketma-ketlikka yechishi kerak', () => {
      const res = parseAtlasParams('?sayr=fellowship&bosqich=fellowship-moria');
      expect(res.sayr).toBe('fellowship');
      expect(res.bosqich).toBe(4);

      const resFrodo = parseAtlasParams('?sayr=ring-bearer&bosqich=ring-bearer-orodruin');
      expect(resFrodo.sayr).toBe('ring-bearer');
      expect(resFrodo.bosqich).toBe(6);

      const resSilmaril = parseAtlasParams('?sayr=silmaril-quest&bosqich=silmaril-stage-4');
      expect(resSilmaril.sayr).toBe('silmaril-quest');
      expect(resSilmaril.bosqich).toBe(4);
    });
  });

  describe('Tarixiy Sayohatlar Atlasi — Beren va Lúthien (Silmaril Safari)', () => {
    it('SILMARIL_QUEST_JOURNEY Zod sxemasi boʻyicha muvaffaqiyatli validatsiyadan oʻtishi kerak', () => {
      const parsed = journeyDefinitionSchema.safeParse(SILMARIL_QUEST_JOURNEY);
      expect(parsed.success).toBe(true);
      if (!parsed.success) {
        console.error(parsed.error);
      }
    });

    it('Sayohat Beleriand hududiga tegishli boʻlishi va 6 ta bosqichdan iborat boʻlishi kerak', () => {
      expect(SILMARIL_QUEST_JOURNEY.region).toBe('beleriand');
      expect(SILMARIL_QUEST_JOURNEY.totalStages).toBe(6);
      expect(SILMARIL_QUEST_JOURNEY.stages.length).toBe(6);

      SILMARIL_QUEST_JOURNEY.stages.forEach((stage, index) => {
        expect(stage.sequence).toBe(index + 1);
        expect(stage.region).toBe('beleriand');
        expect(stage.coordinates).toBeDefined();
        if (stage.coordinates) {
          expect(stage.coordinates.x).toBeGreaterThanOrEqual(0);
          expect(stage.coordinates.x).toBeLessThanOrEqual(2048);
          expect(stage.coordinates.y).toBeGreaterThanOrEqual(0);
          expect(stage.coordinates.y).toBeLessThanOrEqual(1536);
        }
      });
    });

    it('Bosqichlar kanonik ketma-ketlikda Dorthoniondan Angband va Tol Galengacha borishi kerak', () => {
      const stages = SILMARIL_QUEST_JOURNEY.stages;
      expect(stages[0]?.placeId).toBe('dorthonion');
      expect(stages[1]?.placeId).toBe('menegroth');
      expect(stages[2]?.placeId).toBe('nargothrond');
      expect(stages[3]?.placeId).toBe('tol-sirion');
      expect(stages[4]?.placeId).toBe('angband');
      expect(stages[5]?.placeId).toBe('tol-galen');
    });
  });
});

