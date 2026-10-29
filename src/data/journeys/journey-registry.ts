import type { JourneyDefinition } from '@/utils/atlas/journey-types';
import { BILBO_JOURNEY } from './bilbo-journey';
import { FELLOWSHIP_JOURNEY } from './fellowship-journey';
import { GREY_COMPANY_JOURNEY } from './grey-company-journey';
import { RING_BEARER_JOURNEY } from './ring-bearer-journey';
import { SILMARIL_QUEST_JOURNEY } from './silmaril-quest-journey';

export const REGISTERED_JOURNEYS: Record<string, JourneyDefinition> = {
  bilbo: BILBO_JOURNEY,
  fellowship: FELLOWSHIP_JOURNEY,
  'ring-bearer': RING_BEARER_JOURNEY,
  'grey-company': GREY_COMPANY_JOURNEY,
  'silmaril-quest': SILMARIL_QUEST_JOURNEY,
};

// Qo'shimcha sinonimlar (qulay URL havolalari uchun)
const JOURNEY_ALIASES: Record<string, string> = {
  aragorn: 'grey-company',
  'aragorn-sayri': 'grey-company',
  qardoshlik: 'fellowship',
  'uzuk-qardoshligi': 'fellowship',
  frodo: 'ring-bearer',
  'frodo-sam': 'ring-bearer',
  'uzuk-egasi': 'ring-bearer',
  silmaril: 'silmaril-quest',
  beren: 'silmaril-quest',
  'beren-va-luthien': 'silmaril-quest',
  'beren-luthien': 'silmaril-quest',
  'silmaril-safari': 'silmaril-quest',
};

export const DEFAULT_JOURNEY_ID = 'bilbo';

export function getJourneyById(id: string): JourneyDefinition | undefined {
  const normalizedId = id ? id.trim().toLowerCase() : '';
  const resolvedId = JOURNEY_ALIASES[normalizedId] || normalizedId;
  if (isValidJourneyId(resolvedId)) {
    return REGISTERED_JOURNEYS[resolvedId];
  }
  return undefined;
}

export function getAllJourneys(): JourneyDefinition[] {
  return [
    BILBO_JOURNEY,
    FELLOWSHIP_JOURNEY,
    RING_BEARER_JOURNEY,
    GREY_COMPANY_JOURNEY,
    SILMARIL_QUEST_JOURNEY,
  ];
}

export function isValidJourneyId(id: string | null | undefined): boolean {
  if (typeof id !== 'string') return false;
  const normalizedId = id.trim().toLowerCase();
  const resolvedId = JOURNEY_ALIASES[normalizedId] || normalizedId;
  return Object.prototype.hasOwnProperty.call(REGISTERED_JOURNEYS, resolvedId);
}
