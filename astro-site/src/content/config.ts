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
      image: z.string().optional(),
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

const proBonoCollection = defineCollection({
  type: 'content',
  schema: z.object({
    sectionTitle: z.string(),
    sectionSubtitle: z.string(),
    intro: z.object({
      icon: z.string(),
      text: z.string(),
    }),
    criteriaTitle: z.string(),
    criteria: z.array(z.object({
      icon: z.string(),
      text: z.string(),
    })),
    cta: z.object({
      question: z.string(),
      description: z.string(),
      buttonText: z.string(),
      buttonAction: z.string(),
    }),
    visualCards: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      text: z.string(),
    })),
  }),
});

const faqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    sectionTitle: z.string(),
    sectionSubtitle: z.string(),
    questions: z.array(z.object({
      id: z.number(),
      question: z.string(),
      answer: z.string(),
    })),
  }),
});

const newsletterCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    placeholder: z.string(),
    buttonText: z.string(),
    note: z.string(),
  }),
});

const ctaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    icon: z.string(),
    title: z.string(),
    subtitle: z.string(),
    actions: z.object({
      primary: z.object({
        icon: z.string(),
        text: z.string(),
        action: z.string(),
      }),
      phone: z.object({
        icon: z.string(),
        text: z.string(),
        href: z.string(),
      }),
    }),
    features: z.array(z.object({
      icon: z.string(),
      text: z.string(),
    })),
  }),
});

const footerCollection = defineCollection({
  type: 'content',
  schema: z.object({
    brand: z.object({
      title: z.string(),
      description: z.string(),
      rating: z.object({
        stars: z.number(),
        text: z.string(),
      }),
      social: z.array(z.object({
        platform: z.string(),
        url: z.string(),
        icon: z.string(),
        label: z.string(),
      })),
    }),
    columns: z.object({
      areas: z.object({
        title: z.string(),
        links: z.array(z.object({
          text: z.string(),
          href: z.string(),
        })),
      }),
      company: z.object({
        title: z.string(),
        links: z.array(z.object({
          text: z.string(),
          href: z.string(),
        })),
      }),
      contact: z.object({
        title: z.string(),
        items: z.array(z.object({
          icon: z.string(),
          text: z.string(),
          href: z.string().optional(),
        })),
        schedule: z.object({
          title: z.string(),
          days: z.string(),
          hours: z.string(),
        }),
      }),
    }),
    trust: z.object({
      title: z.string(),
      badges: z.array(z.object({
        icon: z.string(),
        text: z.string(),
        featured: z.boolean().optional(),
      })),
    }),
    bottom: z.object({
      copyright: z.string(),
    }),
    legal: z.object({
      links: z.array(z.object({
        text: z.string(),
        href: z.string(),
      })),
      disclaimer: z.string(),
    }),
  }),
});

const modalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    proBonoNotice: z.object({
      title: z.string(),
      message: z.string(),
    }),
    fields: z.object({
      name: z.object({
        label: z.string(),
        type: z.string(),
        required: z.boolean(),
      }),
      email: z.object({
        label: z.string(),
        type: z.string(),
        required: z.boolean(),
      }),
      phone: z.object({
        label: z.string(),
        type: z.string(),
        required: z.boolean(),
      }),
      area: z.object({
        label: z.string(),
        placeholder: z.string(),
        options: z.array(z.string()),
        required: z.boolean(),
      }),
      message: z.object({
        label: z.string(),
        rows: z.number(),
      }),
    }),
    submitButton: z.string(),
  }),
});

const practicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    slug: z.string().optional(),

    seo: z.object({
      title: z.string(),
      description: z.string(),
      canonical: z.string().optional(),
    }),

    hero: z.object({
      badge: z.string(),
      h1: z.string(),
      breadcrumbTitle: z.string().optional(),
      tagline: z.string(),
      image: z.string().optional(),
    }),

    trust: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    ),

    target: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      })
    ),

    painPoints: z.array(z.string()),

    objective: z.object({
      text: z.string(),
      commitments: z.array(z.string()),
    }),

    results: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      })
    ),

    servicesIncluded: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      })
    ),

    process: z.array(
      z.object({
        step: z.number(),
        title: z.string(),
        description: z.string(),
      })
    ),

    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),

    finalCta: z.object({
      headline: z.string(),
      text: z.string(),
      button: z.string(),
    }),
  }),
});

export const collections = {
  home: homeCollection,
  stats: statsCollection,
  trustBadges: trustBadgesCollection,
  areas: areasCollection,
  benefits: benefitsCollection,
  proBono: proBonoCollection,
  faq: faqCollection,
  newsletter: newsletterCollection,
  cta: ctaCollection,
  footer: footerCollection,
  modal: modalCollection,
  practices: practicesCollection,
};
