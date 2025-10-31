import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    authorAvatar: z.string().optional(),
    image: z.string().optional(),
    bannerColor: z.string().optional(),
    // Personalización del footer (solo en página de detalle del post)
    footerImage: z.string().optional(),
    // Personalización de la navbar (solo en página de detalle del post)
    navHoverColor: z.string().optional(), // Color del efecto hover en navbar
    navColor: z.string().optional(),      // Color de botones y elementos de navbar
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };

