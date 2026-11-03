import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import {
  buildGenealogyDataset,
  serializeGenealogyClientPayload,
} from '@/utils/genealogy/genealogy-model';

export const GET: APIRoute = async () => {
  const [genealogyEntries, characterEntries, eventEntries] = await Promise.all([
    getCollection('genealogies'),
    getCollection('characters'),
    getCollection('events'),
  ]);

  const dataset = buildGenealogyDataset(
    genealogyEntries.map((e) => e.data),
    characterEntries.map((e) => e.data),
    eventEntries.map((e) => e.data)
  );

  const payload = serializeGenealogyClientPayload(dataset);

  return new Response(JSON.stringify(payload), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
