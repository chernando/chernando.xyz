import { defineCollection, z, type ImageFunction } from 'astro:content';

const postSchema = ({ image }: { image: ImageFunction }) => z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  image: image().optional(),
  imageAlt: z.string().optional(),
  imageDescription: z.string().optional(),
  imageAuthor: z.string().optional(),
  imageAuthorUrl: z.string().url().optional(),
  imagePhotoUrl: z.string().url().optional(),
  readingTime: z.number().optional(),
  lastModified: z.coerce.date().optional(),
  language: z.enum(['en', 'es']).default('es'),
  translationKey: z.string().optional(),
});

export const collections = {
  'posts-es': defineCollection({
    type: 'content',
    schema: postSchema,
  }),
  'posts-en': defineCollection({
    type: 'content',
    schema: postSchema,
  }),
};
