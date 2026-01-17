/* ==========================================
   Newsletter Module
   - Newsletter form submission
   - Loading/success states
   - Analytics tracking
   ========================================== */

import { ANIMATION_DELAYS } from '../config.js';

export function initNewsletter() {
  // Newsletter is triggered via onsubmit in HTML
  // No initialization needed - function is exported below
}

/**
 * Handle newsletter form submission
 * Called from HTML via onsubmit="handleNewsletterSubmit(event)"
 * @param {Event} event - Form submit event
 */
export function handleNewsletterSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const emailInput = form.querySelector('input[type="email"]');
  const email = emailInput?.value;
  const btn = form.querySelector('.newsletter-btn');

  // Basic validation
  if (!email || !email.includes('@')) {
    alert('Por favor ingresa un email válido');
    return;
  }

  // Save original button state
  const originalHTML = btn.innerHTML;
  const originalBg = btn.style.background;

  // Show loading state
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Suscribiendo...';
  btn.disabled = true;

  // Simulate API call (TODO: Integrate with email marketing service)
  // TODO: Integrate with Mailchimp, SendGrid, Brevo, etc.
  setTimeout(() => {
    // Success state
    btn.innerHTML = '<i class="fas fa-check"></i> ¡Suscrito!';
    btn.style.background = '#10b981'; // Green success

    // Log for development
    console.log('Newsletter signup:', {
      email: email,
      timestamp: new Date().toISOString(),
      page: window.location.pathname
    });

    // Google Analytics tracking (if configured)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'newsletter_signup', {
        event_category: 'footer',
        event_label: 'newsletter_form'
      });
    }

    // Reset after delay
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.background = originalBg;
      btn.disabled = false;
      form.reset();
    }, ANIMATION_DELAYS.NEWSLETTER_SUCCESS);
  }, ANIMATION_DELAYS.NEWSLETTER_LOADING);
}
