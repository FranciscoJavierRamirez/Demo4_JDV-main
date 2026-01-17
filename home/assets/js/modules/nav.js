/* ==========================================
   Navigation Module
   - Sticky navigation on scroll
   - Fullscreen mobile menu
   - Hide/show on scroll direction
   ========================================== */

import { SCROLL_THRESHOLDS } from '../config.js';
import { throttle } from './utils.js';
import { closeMegaMenu } from './megaMenu.js';

let lastScrollPosition = 0;

export function initNav() {
  initFullscreenMenu();
  initScrollBehavior();
  initEscapeKey();
}

/**
 * Fullscreen mobile menu
 */
function initFullscreenMenu() {
  const navTogglePremium = document.getElementById('navTogglePremium');
  const fullscreenMenu = document.getElementById('fullscreenMenu');

  if (!navTogglePremium || !fullscreenMenu) return;

  // Toggle menu
  navTogglePremium.addEventListener('click', function(e) {
    e.stopPropagation();
    navTogglePremium.classList.toggle('active');
    fullscreenMenu.classList.toggle('active');
    document.body.style.overflow = fullscreenMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu on link click
  document.querySelectorAll('.fullscreen-link').forEach(link => {
    link.addEventListener('click', function() {
      navTogglePremium.classList.remove('active');
      fullscreenMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/**
 * Consolidated scroll behavior
 * Handles: sticky nav, hide/show on direction, close mega menu
 */
function initScrollBehavior() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;

  const handleScroll = throttle(() => {
    const currentScroll = window.pageYOffset;

    // Sticky navigation (appears after threshold)
    if (currentScroll > SCROLL_THRESHOLDS.NAV_STICKY) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Hide/show based on scroll direction
    if (currentScroll > SCROLL_THRESHOLDS.NAV_HIDE) {
      if (currentScroll > lastScrollPosition) {
        // Scrolling down - hide nav
        nav.classList.add('hidden');
        nav.classList.remove('visible');
        // Close mega menu when hiding
        closeMegaMenu();
      } else {
        // Scrolling up - show nav
        nav.classList.remove('hidden');
        nav.classList.add('visible');
      }
    }

    lastScrollPosition = currentScroll;
  });

  window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * ESC key closes fullscreen menu
 */
function initEscapeKey() {
  const navTogglePremium = document.getElementById('navTogglePremium');
  const fullscreenMenu = document.getElementById('fullscreenMenu');

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && fullscreenMenu?.classList.contains('active')) {
      navTogglePremium?.classList.remove('active');
      fullscreenMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}
