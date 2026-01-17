/* ==========================================
   FAQ Accordion Module
   - Toggle FAQ items
   - Analytics tracking
   ========================================== */

export function initFaq() {
  // FAQ is triggered via onclick in HTML (toggleFaq function)
  // No initialization needed - function is exported below
}

/**
 * Toggle FAQ accordion item
 * Called from HTML via onclick="toggleFaq(1)"
 * @param {number} faqNumber - FAQ item number
 */
export function toggleFaq(faqNumber) {
  const faqItem = document.querySelector(`.faq-item[data-faq="${faqNumber}"]`);
  if (!faqItem) return;

  const allFaqItems = document.querySelectorAll('.faq-item');

  // Close all other FAQs (accordion behavior)
  allFaqItems.forEach(item => {
    if (item !== faqItem) {
      item.classList.remove('active');
    }
  });

  // Toggle current FAQ
  faqItem.classList.toggle('active');

  // Google Analytics tracking (if available)
  if (typeof gtag !== 'undefined') {
    const questionText = faqItem.querySelector('.faq-question span')?.textContent || 'Unknown';
    const isOpen = faqItem.classList.contains('active');

    gtag('event', 'faq_interaction', {
      event_category: 'faq',
      event_label: questionText,
      value: isOpen ? 1 : 0
    });
  }
}
