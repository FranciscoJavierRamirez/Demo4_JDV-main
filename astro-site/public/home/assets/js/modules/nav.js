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
 * Fullscreen mobile menu - Enhanced with accessibility
 */
function initFullscreenMenu() {
  const navTogglePremium = document.getElementById('navTogglePremium');
  const fullscreenMenu = document.getElementById('fullscreenMenu');

  if (!navTogglePremium || !fullscreenMenu) return;

  // Function to close menu
  const closeMenu = () => {
    navTogglePremium.classList.remove('active');
    fullscreenMenu.classList.remove('active');
    navTogglePremium.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    // Return focus to toggle button
    navTogglePremium.focus();
  };

  // Function to open menu
  const openMenu = () => {
    navTogglePremium.classList.add('active');
    fullscreenMenu.classList.add('active');
    navTogglePremium.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Focus first link in menu
    const firstLink = fullscreenMenu.querySelector('.fullscreen-link');
    if (firstLink) {
      setTimeout(() => firstLink.focus(), 100);
    }
  };

  // Toggle menu
  navTogglePremium.addEventListener('click', function(e) {
    e.stopPropagation();
    const isActive = fullscreenMenu.classList.contains('active');
    if (isActive) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu on link click
  document.querySelectorAll('.fullscreen-link').forEach(link => {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });

  // Close menu on background click
  const menuBg = fullscreenMenu.querySelector('.fullscreen-menu-bg');
  if (menuBg) {
    menuBg.addEventListener('click', closeMenu);
  }
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
 * ESC key closes fullscreen menu and mega menu
 */
function initEscapeKey() {
  const navTogglePremium = document.getElementById('navTogglePremium');
  const fullscreenMenu = document.getElementById('fullscreenMenu');

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      // Close fullscreen menu
      if (fullscreenMenu?.classList.contains('active')) {
        navTogglePremium?.classList.remove('active');
        fullscreenMenu.classList.remove('active');
        navTogglePremium?.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        navTogglePremium?.focus();
      }
      
      // Close mega menu (handled by closeMegaMenu)
      closeMegaMenu();
    }
  });
}
