import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Each entry lives in its own folder together with its photographs:
 *
 *   src/content/kaftans/kaftan-zohra/index.md
 *   src/content/kaftans/kaftan-zohra/cover.jpg
 *
 * The folder name becomes the address of the page:
 *   /archive/kaftan-zohra/
 */
const folderId = ({ entry }: { entry: string }) =>
  entry.replace(/\/index\.mdx?$/, '').replace(/\.mdx?$/, '');

const TBD = 'To be documented';

const kaftans = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/kaftans', generateId: folderId }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Catalogue reference, e.g. "DS-001". */
      archiveNumber: z.string(),
      /** Position in the archive (1, 2, 3…). Shown as "No. 01". */
      order: z.number().int(),
      region: z.string().default(TBD),
      period: z.string().default(TBD),
      materials: z.array(z.string()).default([]),
      techniques: z.array(z.string()).default([]),
      condition: z.string().default(TBD),
      collection: z.string().default('Dar Sherazade collection'),
      collectionNote: z.string().optional(),
      /** true → shows the private enquiry section and the /available page. */
      available: z.boolean().default(false),
      /** Price shown on the piece page, e.g. "€450". Leave unset while pricing is pending. */
      price: z.string().optional(),
      /** Size range shown on the piece page. */
      size: z.string().default('36 – 44'),
      /** true → shown on the homepage. */
      featured: z.boolean().default(false),
      /** true → displays a small "sample entry" notice. Remove once documented. */
      sample: z.boolean().default(false),
      cover: image(),
      coverAlt: z.string(),
      /** CSS object-position for the cover crop, e.g. "50% 20%". */
      coverPosition: z.string().default('50% 50%'),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
            /** What the photograph shows: full garment, back, cuff, lining… */
            view: z.string().optional(),
            position: z.string().optional(),
          }),
        )
        .default([]),
      /** Short editorial description shown under the title. */
      description: z.string(),
      /** Optional glossary of terms, only when supplied and verified. */
      terms: z
        .array(
          z.object({
            term: z.string(),
            language: z.string().optional(),
            gloss: z.string(),
          }),
        )
        .default([]),
    }),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/journal', generateId: folderId }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      date: z.coerce.date(),
      author: z.string().default('Dar Sherazade'),
      cover: image(),
      coverAlt: z.string(),
      coverCaption: z.string().optional(),
      coverPosition: z.string().default('50% 50%'),
      /** One or two sentences used on cards and in link previews. */
      excerpt: z.string(),
      /** Sources, one per line. Leave empty while research is in progress. */
      references: z.array(z.string()).default([]),
      /** true → displays an "editorial placeholder" notice. */
      placeholder: z.boolean().default(false),
      /** true → hidden from the site. */
      draft: z.boolean().default(false),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { kaftans, journal, pages };
