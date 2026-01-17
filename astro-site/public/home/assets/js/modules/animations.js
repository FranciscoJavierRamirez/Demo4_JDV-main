/* ==========================================
   Scroll Animations Module - Premium 2026
   - Fade-in on scroll with IntersectionObserver
   - Hero element animations on page load
   - Stagger delays with non-linear easing
   - Optimized for 60fps with requestAnimationFrame
   ========================================== */

import { ANIMATION_DELAYS, OBSERVER_OPTIONS } from '../config.js';

export function initScrollAnimations() {
  // Initialize scroll-based fade-in animations
  initScrollFadeIn();

  // Initialize hero animations (on page load)
  initHeroAnimations();
}

/**
 * Scroll-based fade-in animations - Optimized for 60fps
 * Elements fade in when they enter the viewport with sophisticated stagger
 */
function initScrollFadeIn() {
  const fadeElements = document.querySelectorAll(
    '.area-card, .benefit-card, .faq-item, .probono-card'
  );

  // Use requestAnimationFrame for smooth animations
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Use requestAnimationFrame for better performance
        requestAnimationFrame(() => {
          entry.target.classList.add('visible');
        });

        // Stop observing once visible
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    ...OBSERVER_OPTIONS.fadeIn,
    threshold: [0.1, 0.2, 0.3] // Progressive thresholds
  });

  // Add stagger delay with non-linear distribution
  fadeElements.forEach((el, index) => {
    // Non-linear stagger: faster at start, slower at end
    const staggerDelay = Math.min(index * ANIMATION_DELAYS.STAGGER, 800);
    
    // Pre-set initial state for GPU acceleration
    el.style.willChange = 'transform, opacity';
    
    fadeObserver.observe(el);
    
    // Apply stagger delay
    if (staggerDelay > 0) {
      setTimeout(() => {
        requestAnimationFrame(() => {
          if (el.classList.contains('visible')) return;
          // Trigger animation by adding visible class
          el.classList.add('visible');
        });
      }, staggerDelay);
    }
  });

  // Special handling for stats section
  initStatsVisibility();
}

/**
 * Stats section special visibility handling
 * Works alongside stats counter animation - Optimized for 60fps
 */
function initStatsVisibility() {
  const statsSection = document.querySelector('.stats-section');
  if (!statsSection) return;

  const statsItems = statsSection.querySelectorAll('.stat-item');

  // Pre-set will-change for GPU acceleration
  statsItems.forEach(item => {
    item.style.willChange = 'transform, opacity';
  });

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statsItems.forEach((item, index) => {
          // Use requestAnimationFrame for smooth animations
          requestAnimationFrame(() => {
            setTimeout(() => {
              requestAnimationFrame(() => {
                item.classList.add('visible');
              });
            }, index * ANIMATION_DELAYS.STATS_STAGGER);
          });
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, {
    ...OBSERVER_OPTIONS.stats,
    threshold: [0.2, 0.3] // Progressive thresholds
  });

  statsObserver.observe(statsSection);
}

/**
 * Hero section animations on page load - Kinetic animations
 * Animates trust items and floating cards with premium easing
 */
function initHeroAnimations() {
  // Animate hero trust items with kinetic easing
  const heroTrustItems = document.querySelectorAll('.hero-trust .trust-item');
  heroTrustItems.forEach((item, index) => {
    // Pre-set will-change for GPU acceleration
    item.style.willChange = 'transform, opacity';
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';

    requestAnimationFrame(() => {
      setTimeout(() => {
        requestAnimationFrame(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
          // Remove will-change after animation
          setTimeout(() => {
            item.style.willChange = 'auto';
          }, 600);
        });
      }, ANIMATION_DELAYS.HERO_TRUST_START + (index * ANIMATION_DELAYS.HERO_TRUST_INCREMENT));
    });
  });

  // Animate floating cards (desktop only) with bounce easing
  const floatingCards = document.querySelectorAll('.floating-card');
  floatingCards.forEach((card, index) => {
    // Pre-set will-change for GPU acceleration
    card.style.willChange = 'transform, opacity';
    card.style.opacity = '0';
    card.style.transform = 'scale(0.8)';
    card.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'; // Bounce easing

    requestAnimationFrame(() => {
      setTimeout(() => {
        requestAnimationFrame(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
          // Remove will-change after animation
          setTimeout(() => {
            card.style.willChange = 'auto';
          }, 800);
        });
      }, ANIMATION_DELAYS.HERO_CARD_START + (index * ANIMATION_DELAYS.HERO_CARD_INCREMENT));
    });
  });
}
