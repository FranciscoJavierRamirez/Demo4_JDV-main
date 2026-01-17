/* ==========================================
   Scroll Animations Module
   - Fade-in on scroll with IntersectionObserver
   - Hero element animations on page load
   - Stagger delays for smooth entrance
   ========================================== */

import { ANIMATION_DELAYS, OBSERVER_OPTIONS } from '../config.js';

export function initScrollAnimations() {
  // Initialize scroll-based fade-in animations
  initScrollFadeIn();

  // Initialize hero animations (on page load)
  initHeroAnimations();
}

/**
 * Scroll-based fade-in animations
 * Elements fade in when they enter the viewport
 */
function initScrollFadeIn() {
  const fadeElements = document.querySelectorAll(
    '.area-card, .benefit-card, .stat-item, .faq-item, .probono-card'
  );

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger delay based on index
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * ANIMATION_DELAYS.STAGGER);

        // Stop observing once visible
        fadeObserver.unobserve(entry.target);
      }
    });
  }, OBSERVER_OPTIONS.fadeIn);

  fadeElements.forEach(el => {
    fadeObserver.observe(el);
  });

  // Special handling for stats section
  initStatsVisibility();
}

/**
 * Stats section special visibility handling
 * Works alongside stats counter animation
 */
function initStatsVisibility() {
  const statsSection = document.querySelector('.stats-section');
  if (!statsSection) return;

  const statsItems = statsSection.querySelectorAll('.stat-item');

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statsItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('visible');
          }, index * ANIMATION_DELAYS.STATS_STAGGER);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, OBSERVER_OPTIONS.stats);

  statsObserver.observe(statsSection);
}

/**
 * Hero section animations on page load
 * Animates trust items and floating cards
 */
function initHeroAnimations() {
  // Animate hero trust items
  const heroTrustItems = document.querySelectorAll('.hero-trust .trust-item');
  heroTrustItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';

    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, ANIMATION_DELAYS.HERO_TRUST_START + (index * ANIMATION_DELAYS.HERO_TRUST_INCREMENT));
  });

  // Animate floating cards (desktop only)
  const floatingCards = document.querySelectorAll('.floating-card');
  floatingCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.8)';
    card.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'; // Bounce easing

    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'scale(1)';
    }, ANIMATION_DELAYS.HERO_CARD_START + (index * ANIMATION_DELAYS.HERO_CARD_INCREMENT));
  });
}
