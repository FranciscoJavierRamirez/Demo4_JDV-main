/**
 * Utilidades para el Blog de JDV Abogados
 * Sistema de publicación programada y helpers
 */

import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/**
 * Determina si un post debe publicarse
 * - Nunca publicar borradores
 * - Verificar fecha de publicación (solo mostrar si fecha <= ahora)
 */
export function shouldPublish(post: BlogPost): boolean {
  // Nunca publicar borradores
  if (post.data.draft) return false;

  // Verificar fecha de publicación
  const now = new Date();
  const publishDate = new Date(post.data.publishDate);

  return publishDate <= now;
}

/**
 * Obtiene posts publicados, ordenados por fecha (más reciente primero)
 */
export function getPublishedPosts(posts: BlogPost[]): BlogPost[] {
  return posts
    .filter(shouldPublish)
    .sort((a, b) =>
      new Date(b.data.publishDate).getTime() -
      new Date(a.data.publishDate).getTime()
    );
}

/**
 * Calcula tiempo de lectura (200 palabras/minuto)
 */
export function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

/**
 * Formatea fecha para mostrar en español chileno
 */
export function formatDate(dateString: string, locale = 'es-CL'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Formatea fecha corta (para cards)
 */
export function formatDateShort(dateString: string, locale = 'es-CL'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

/**
 * Labels para categorías
 */
export const categoryLabels: Record<string, string> = {
  'derecho-administrativo': 'Derecho Administrativo',
  'funcionarios-publicos': 'Funcionarios Públicos',
  'contraloria': 'Contraloría',
  'actualidad-legal': 'Actualidad Legal',
  'guias-practicas': 'Guías Prácticas',
  'casos-estudio': 'Casos de Estudio'
};

/**
 * Obtiene el label de una categoría
 */
export function getCategoryLabel(category: string): string {
  return categoryLabels[category] || category;
}

/**
 * Labels para autores
 */
export const authorData: Record<string, { name: string; role: string; image: string }> = {
  'jacqueline-del-valle': {
    name: 'Jacqueline del Valle Inostroza',
    role: 'Abogada Fundadora - 35 años en Contraloría General de la República',
    image: '/Jaqueline_quienes_somos.png'
  },
  'equipo-jdv': {
    name: 'Equipo JDV Abogados',
    role: 'Estudio Jurídico Especializado',
    image: '/favicon.svg'
  }
};

/**
 * Obtiene datos del autor
 */
export function getAuthorData(author: string) {
  return authorData[author] || authorData['equipo-jdv'];
}

/**
 * Labels para servicios relacionados
 */
export const serviceLabels: Record<string, { name: string; href: string }> = {
  'defensa-estatutaria': {
    name: 'Defensa Estatutaria',
    href: '/areas-practicas/defensa-estatutaria'
  },
  'defensa-administrativa': {
    name: 'Defensa Administrativa',
    href: '/areas-practicas/defensa-administrativa'
  },
  'inmobiliaria-copropiedad': {
    name: 'Inmobiliaria y Copropiedad',
    href: '/areas-practicas/inmobiliaria-copropiedad'
  },
  'defensa-penal': {
    name: 'Defensa Penal',
    href: '/areas-practicas/defensa-penal'
  },
  'familia-menores': {
    name: 'Familia y Menores',
    href: '/areas-practicas/familia-menores'
  },
  'civil': {
    name: 'Derecho Civil',
    href: '/areas-practicas/civil'
  },
  'capacitacion': {
    name: 'Capacitación',
    href: '/areas-practicas/capacitacion'
  }
};

/**
 * Obtiene datos de un servicio
 */
export function getServiceData(service: string) {
  return serviceLabels[service] || { name: service, href: '/#areas' };
}

/**
 * Obtiene posts relacionados por categoría
 */
export function getRelatedPosts(
  currentPost: BlogPost,
  allPosts: BlogPost[],
  limit = 3
): BlogPost[] {
  return getPublishedPosts(allPosts)
    .filter(post =>
      post.slug !== currentPost.slug &&
      post.data.category === currentPost.data.category
    )
    .slice(0, limit);
}

/**
 * Obtiene posts destacados
 */
export function getFeaturedPosts(posts: BlogPost[], limit = 3): BlogPost[] {
  return getPublishedPosts(posts)
    .filter(post => post.data.featured)
    .slice(0, limit);
}

/**
 * Obtiene posts por categoría
 */
export function getPostsByCategory(posts: BlogPost[], category: string): BlogPost[] {
  return getPublishedPosts(posts)
    .filter(post => post.data.category === category);
}

/**
 * Obtiene todas las categorías con sus conteos
 */
export function getCategoriesWithCount(posts: BlogPost[]): { category: string; label: string; count: number }[] {
  const published = getPublishedPosts(posts);
  const counts: Record<string, number> = {};

  published.forEach(post => {
    counts[post.data.category] = (counts[post.data.category] || 0) + 1;
  });

  return Object.entries(counts).map(([category, count]) => ({
    category,
    label: getCategoryLabel(category),
    count
  })).sort((a, b) => b.count - a.count);
}
