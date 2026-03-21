import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    watchLink: z.string().optional(),
    longDescription: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { work };
