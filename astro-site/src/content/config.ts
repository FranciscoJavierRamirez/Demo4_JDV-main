import { defineCollection, z } from 'astro:content';

const homeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Badge
    badge: z.object({
      icon: z.string(),
      text: z.string(),
    }),

    // Título principal
    title: z.object({
      line1: z.string(),
      line2: z.string(),
    }),

    // Subtítulo/descripción
    subtitle: z.string(),

    // Botones CTA
    cta: z.object({
      primary: z.object({
        text: z.string(),
        action: z.string(),
      }),
      secondary: z.object({
        text: z.string(),
        href: z.string(),
        icon: z.string(),
      }),
    }),

    // Trust items (4 items)
    trust: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      subtitle: z.string(),
      featured: z.boolean().optional(),
    })),

    // Floating cards (desktop)
    floatingCards: z.array(z.object({
      icon: z.string(),
      number: z.string(),
      label: z.string(),
    })),

    // Scroll indicator
    scrollIndicator: z.object({
      text: z.string(),
      target: z.string(),
    }),

    // Assets
    images: z.object({
      background: z.string(),
      hero: z.string(),
      heroAlt: z.string(),
    }),
  }),
});

const statsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    stats: z.array(z.object({
      icon: z.string(),
      target: z.number(),
      label: z.string(),
    })),
  }),
});

const trustBadgesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    badges: z.array(z.object({
      icon: z.string(),
      text: z.string(),
    })),
  }),
});

const areasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    sectionTitle: z.string(),
    sectionSubtitle: z.string(),
    areas: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
      link: z.string(),
    })),
  }),
});

const benefitsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    sectionTitle: z.string(),
    benefits: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      text: z.string(),
    })),
  }),
});

export const collections = {
  home: homeCollection,
  stats: statsCollection,
  trustBadges: trustBadgesCollection,
  areas: areasCollection,
  benefits: benefitsCollection,
};
