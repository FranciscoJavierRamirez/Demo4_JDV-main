/* ==========================================
   Modal Module
   - Consultation form modal
   - Pro bono modal variant
   - Close on ESC, overlay click, close button
   ========================================== */

import { MODAL_TYPES, MODAL_TITLES } from '../config.js';

let currentModalType = MODAL_TYPES.CONSULTA;

export function initModal() {
  // Set up ESC key handler
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

/**
 * Open modal (consultation or pro bono)
 * @param {string} type - Modal type (consulta | probono)
 */
export function openModal(type = MODAL_TYPES.CONSULTA) {
  const modal = document.getElementById('consultaModal');
  if (!modal) return;

  currentModalType = type;

  // Update modal title
  const modalTitle = modal.querySelector('.modal-title');
  if (modalTitle) {
    modalTitle.textContent = MODAL_TITLES[type];
  }

  // Show/hide pro bono notice
  const proBonoNotice = modal.querySelector('.probono-notice');
  if (proBonoNotice) {
    proBonoNotice.hidden = (type !== MODAL_TYPES.PROBONO);
  }

  // Open modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Close modal and reset to default state
 */
export function closeModal() {
  const modal = document.getElementById('consultaModal');
  if (!modal) return;

  // Close modal
  modal.classList.remove('active');
  document.body.style.overflow = '';

  // Reset to default state
  setTimeout(() => {
    currentModalType = MODAL_TYPES.CONSULTA;
    const modalTitle = modal.querySelector('.modal-title');
    if (modalTitle) {
      modalTitle.textContent = MODAL_TITLES[MODAL_TYPES.CONSULTA];
    }

    const proBonoNotice = modal.querySelector('.probono-notice');
    if (proBonoNotice) {
      proBonoNotice.hidden = true;
    }
  }, 300); // Wait for close animation
}

/**
 * Pro bono modal shortcut
 */
export function openProBonoModal() {
  openModal(MODAL_TYPES.PROBONO);
}

/**
 * Get current modal type
 */
export function getCurrentModalType() {
  return currentModalType;
}
