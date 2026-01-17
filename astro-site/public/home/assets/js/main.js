/* ==========================================
   JDV & Abogados - Main Entry Point
   v4.0 - Modular Architecture
   ========================================== */

// Import all modules
import { initNav } from './modules/nav.js';
import { initMegaMenu } from './modules/megaMenu.js';
import { initModal, openModal, closeModal, openProBonoModal } from './modules/modal.js';
import { initScrollAnimations } from './modules/animations.js';
import { initStatsCounter } from './modules/stats.js';
import { initFaq, toggleFaq } from './modules/faq.js';
import { initBackToTop } from './modules/backToTop.js';
import { initSmoothScroll } from './modules/smoothScroll.js';
import { initNewsletter, handleNewsletterSubmit } from './modules/newsletter.js';

/**
 * Initialize all modules when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 JDV & Abogados - Initializing...');

  // Core navigation
  initNav();
  initMegaMenu();

  // Interactive features
  initModal();
  initFaq();

  // Scroll-based features
  initScrollAnimations();
  initStatsCounter();
  initBackToTop();
  initSmoothScroll();

  // Forms
  initNewsletter();

  console.log('✅ All modules loaded');
});

/**
 * Expose functions globally for backward compatibility
 * TODO: Remove in Phase 3 after HTML migration to data-attributes
 */
window.openModal = openModal;
window.closeModal = closeModal;
window.openProBonoModal = openProBonoModal;
window.toggleFaq = toggleFaq;
window.handleNewsletterSubmit = handleNewsletterSubmit;

/**
 * Handle form submissions
 * TODO: Move to modal module in Phase 2
 */
window.handleSubmit = function(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  console.log('Form submitted:', Object.fromEntries(formData));
  alert('¡Gracias por tu consulta! Te contactaremos pronto.');

  closeModal();
  form.reset();

  return false;
};

// Console branding
console.log('%cJDV & Abogados', 'font-size: 24px; font-weight: bold; color: #C9A961;');
console.log('%cSitio Web v4.0 - Arquitectura Modular', 'font-size: 14px; color: #0077C8;');
