/* ==========================================
   JDV & Abogados - Configuration
   ========================================== */

/**
 * Animation timing constants
 * Centralized to ensure consistency across all modules
 */
export const ANIMATION_DELAYS = {
  // Scroll animations stagger
  STAGGER: 100,
  STATS_STAGGER: 150,

  // Hero animations
  HERO_TRUST_START: 1200,
  HERO_TRUST_INCREMENT: 150,
  HERO_CARD_START: 1500,
  HERO_CARD_INCREMENT: 300,

  // Menu delays
  MEGA_MENU_CLOSE_DELAY: 300,

  // Stats counter
  STATS_DURATION: 2000, // 2 seconds

  // Newsletter button
  NEWSLETTER_LOADING: 1500,
  NEWSLETTER_SUCCESS: 3000,
};

/**
 * Scroll thresholds
 */
export const SCROLL_THRESHOLDS = {
  NAV_STICKY: 100,
  NAV_HIDE: 300,
  BACK_TO_TOP: 500,
};

/**
 * IntersectionObserver options
 */
export const OBSERVER_OPTIONS = {
  fadeIn: {
    threshold: 0.1,
    rootMargin: '-50px',
  },
  stats: {
    threshold: 0.3,
  },
  lazyImages: {
    rootMargin: '50px',
  },
};

/**
 * Z-index scale
 * Defined as constants to avoid conflicts
 */
export const Z_INDEX = {
  BASE: 1,
  DROPDOWN: 100,
  STICKY_NAV: 200,
  MODAL_OVERLAY: 900,
  MODAL_CONTENT: 901,
  FLOATING_BUTTONS: 999,
};

/**
 * Breakpoints (must match CSS)
 */
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1200,
};

/**
 * Modal types
 */
export const MODAL_TYPES = {
  CONSULTA: 'consulta',
  PROBONO: 'probono',
};

/**
 * Modal titles by type
 */
export const MODAL_TITLES = {
  [MODAL_TYPES.CONSULTA]: 'Agenda tu Consulta Gratuita',
  [MODAL_TYPES.PROBONO]: 'Consultar por Servicios Pro Bono',
};
