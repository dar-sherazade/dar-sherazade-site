import { getCollection, type CollectionEntry } from 'astro:content';

/** All kaftans, in archive order (No. 01, No. 02…). */
export async function getKaftans(): Promise<CollectionEntry<'kaftans'>[]> {
  const all = await getCollection('kaftans');
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** Published journal articles, newest first. */
export async function getArticles(): Promise<CollectionEntry<'journal'>[]> {
  const all = await getCollection('journal', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Rough reading time in minutes. */
export function readingTime(text = ''): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
