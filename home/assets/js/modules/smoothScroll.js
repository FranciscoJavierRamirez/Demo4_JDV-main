/* ==========================================
   Smooth Scroll Module
   - Smooth scrolling for anchor links
   - Account for sticky nav offset (80px)
   ========================================== */

const NAV_OFFSET = 80; // Height of sticky navigation

export function initSmoothScroll() {
  // Select all anchor links starting with #
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Ignore empty or just # links
      if (href === '#' || href === '') return;

      e.preventDefault();

      // Find target element
      const target = document.querySelector(href);
      if (target) {
        // Calculate position accounting for sticky nav
        const offsetTop = target.offsetTop - NAV_OFFSET;

        // Smooth scroll to target
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}
