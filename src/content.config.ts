
import { defineCollection, z } from 'astro:content';

const categoryEnum = z.enum([
  'recipes',
  'dinner',
  'desserts',
  'breakfast',
  'lunch',
  'baking',
  'seasonal',
  'kitchen-tips',

  'fitness',
  'workouts',
  'walking',
  'cardio',
  'home-workouts',
  'low-impact',

  'cat-care',
  'cat-nutrition',
  'health',
  'behaviour',

  'gardening',
  'garden-design',
  'flowers',
  'trees-shrubs',
  'garden-care',

  'housekeeping',
  'cleaning',
  'organization',
  'laundry',
  'home-management',

  'resources',
  'gardening-guides',
  'recipe-guides',
  'home-guides',
  'wellness-guides',

  'about',
  'contact'
]);

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),

    category: z.union([
      z.array(categoryEnum),
      categoryEnum
    ]).transform((value) =>
      Array.isArray(value) ? value : [value]
    ).default(['recipes']),

    draft: z.boolean().default(false),
  }),
});

export const collections = {
  posts,
};
