/* ==========================================
   Mega Menu Module
   - Desktop mega menu with hover
   - Close on outside click
   - Close on ESC key
   ========================================== */

import { ANIMATION_DELAYS } from '../config.js';

let megaMenuTimeout;

export function initMegaMenu() {
  const hasMega = document.querySelector('.has-mega');
  const megaMenu = document.getElementById('megaMenu');

  if (!hasMega || !megaMenu) return;

  // Hover to open
  hasMega.addEventListener('mouseenter', function() {
    clearTimeout(megaMenuTimeout);
    megaMenu.classList.add('active');
  });

  // Delay close when leaving trigger
  hasMega.addEventListener('mouseleave', function() {
    megaMenuTimeout = setTimeout(() => {
      megaMenu.classList.remove('active');
    }, ANIMATION_DELAYS.MEGA_MENU_CLOSE_DELAY);
  });

  // Keep open when hovering menu
  megaMenu.addEventListener('mouseenter', function() {
    clearTimeout(megaMenuTimeout);
  });

  // Close when leaving menu
  megaMenu.addEventListener('mouseleave', function() {
    megaMenu.classList.remove('active');
  });

  // Close on link click
  document.querySelectorAll('.mega-link').forEach(link => {
    link.addEventListener('click', function() {
      megaMenu.classList.remove('active');
    });
  });

  // Close on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && megaMenu.classList.contains('active')) {
      megaMenu.classList.remove('active');
    }
  });

  // Close on outside click
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.has-mega') && !e.target.closest('.mega-menu-overlay')) {
      megaMenu.classList.remove('active');
    }
  });
}

/**
 * Close mega menu programmatically (used by nav module on scroll)
 */
export function closeMegaMenu() {
  const megaMenu = document.getElementById('megaMenu');
  if (megaMenu) {
    megaMenu.classList.remove('active');
  }
}
