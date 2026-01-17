/**
 * Premium Scroll Animations 2026
 * Native IntersectionObserver - Zero Dependencies
 * Respects prefers-reduced-motion
 *
 * Usage: Add 'fade-in-up' class to elements
 */

/**
 * Initialize scroll-triggered animations
 */
export function initScrollAnimations() {
  // Respect user's motion preferences
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (prefersReducedMotion.matches) {
    // If user prefers reduced motion, make all elements immediately visible
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  // Configuration
  const observerOptions = {
    root: null, // viewport
    rootMargin: '-50px 0px', // Trigger slightly before entering viewport
    threshold: 0.1 // 10% visible
  };

  // Callback when element enters/exits viewport
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');

        // Optional: Stop observing after animation (performance optimization)
        // Uncomment if you want animation to trigger only once
        // observer.unobserve(entry.target);
      }
    });
  };

  // Create observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe all elements with .fade-in-up class
  const animatedElements = document.querySelectorAll('.fade-in-up');

  animatedElements.forEach(el => {
    observer.observe(el);
  });

  console.log(`✨ Scroll animations initialized for ${animatedElements.length} elements`);
}

/**
 * Add fade-in-up class to specific selectors automatically
 * Call this if you want to animate existing elements without modifying HTML
 */
export function autoAnimateElements() {
  const selectors = [
    '.area-card',
    '.benefit-card',
    '.probono-card',
    '.faq-item',
    '.stat-item'
  ];

  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      if (!el.classList.contains('fade-in-up')) {
        el.classList.add('fade-in-up');
      }
    });
  });
}

/**
 * Initialize everything on DOMContentLoaded
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    autoAnimateElements();
    initScrollAnimations();
  });
} else {
  // DOM already loaded
  autoAnimateElements();
  initScrollAnimations();
}
