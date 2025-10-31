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
    // Personalización de contenido y navegación (solo en página de detalle)
    contentLinkColor: z.string().optional(),   // Color de enlaces dentro del contenido del post
    navigationColor: z.string().optional(),    // Color de botones "Back" y "Top"
    pageBackground: z.string().optional(),     // Color de fondo de la página de detalle
    // Personalización de colores de texto (solo en página de detalle)
    bannerTextColor: z.string().optional(),    // Color del título del banner (predeterminado: blanco)
    contentTextColor: z.string().optional(),   // Color del texto del contenido (predeterminado: negro)
    // Personalización de hover en navbar (solo en página de detalle)
    logoHoverColor: z.string().optional(),     // Color de hover de "SENRI" y "WORKS" en navbar
    // Personalización de la tarjeta en la lista (aparece en la página principal)
    cardHoverColor: z.string().optional(),     // Color de hover del título en la lista de posts
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };

