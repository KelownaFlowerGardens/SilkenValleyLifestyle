
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
category: z.enum([
 
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),

    category: z.array(
      z.enum([
        'recipes',
        'dinner',
        'desserts',
        'breakfast',
        'lunch',
        'baking',
        'soups',
        'main-courses',
        'fitness',
        'cat-care',
        'gardening',
        'housekeeping'
      ])
    ).default(['recipes']),

    draft: z.boolean().default(false),
  }),
});

export const collections = {
  posts,
};
