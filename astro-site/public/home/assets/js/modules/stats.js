/* ==========================================
   Stats Counter Module
   - Animated counter using requestAnimationFrame
   - Triggers once when entering viewport
   ========================================== */

import { ANIMATION_DELAYS, OBSERVER_OPTIONS } from '../config.js';

export function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  /**
   * Animate stats counters from 0 to target value
   * IMPORTANT: Do not modify this logic - it's tested and working
   */
  function animateStats() {
    if (statsAnimated) return;

    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      const duration = ANIMATION_DELAYS.STATS_DURATION;
      const increment = target / (duration / 16); // 16ms = 60fps
      let current = 0;

      const updateCount = () => {
        current += increment;
        if (current < target) {
          stat.textContent = Math.floor(current);
          requestAnimationFrame(updateCount);
        } else {
          stat.textContent = target;
        }
      };

      updateCount();
    });

    statsAnimated = true;
  }

  // Trigger stats animation when section enters viewport
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
        }
      });
    }, OBSERVER_OPTIONS.stats);

    statsObserver.observe(statsSection);
  }
}
