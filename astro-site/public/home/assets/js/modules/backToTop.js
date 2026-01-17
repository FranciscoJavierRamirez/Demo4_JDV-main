/* ==========================================
   Back to Top Module
   - Show/hide button based on scroll
   - Smooth scroll to top
   ========================================== */

import { SCROLL_THRESHOLDS } from '../config.js';
import { throttle } from './utils.js';

export function initBackToTop() {
  const backToTop = document.getElementById('backToTop');

  if (!backToTop) return;

  // Show/hide button based on scroll position
  const handleScroll = throttle(() => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > SCROLL_THRESHOLDS.BACK_TO_TOP) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Click handler - smooth scroll to top
  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
