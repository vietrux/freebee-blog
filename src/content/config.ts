import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    color: z.enum(['red', 'blue', 'yellow', 'green', 'orange', 'purple']).default('red'),
    date: z.string().transform((str) => new Date(str)),
    author: z.string().default('FREEBEE'),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog,
};
