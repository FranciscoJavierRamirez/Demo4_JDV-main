# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**JDV & Abogados** - Professional law firm website for Jacqueline del Valle Inostroza, featuring a premium design inspired by Apple/Stripe with modern animations and exceptional user experience.

**Tech Stack:** Pure HTML5, CSS3, Vanilla JavaScript (no frameworks or build tools)

**Project Structure:**
```
/home/
  ├── index.html                    - Main page
  ├── style.css                     - Complete styling
  ├── script.js                     - Legacy (being migrated)
  ├── assets/
  │   └── js/
  │       ├── main.js               - New entry point (ES6 modules)
  │       ├── config.js             - Centralized configuration
  │       └── modules/              - Feature-based modules
  │           ├── nav.js            - Navigation & sticky behavior
  │           ├── megaMenu.js       - Desktop mega menu
  │           ├── modal.js          - Consultation modal
  │           ├── animations.js     - Scroll animations
  │           ├── stats.js          - Stats counter
  │           ├── faq.js            - FAQ accordion
  │           ├── backToTop.js      - Back to top button
  │           ├── smoothScroll.js   - Smooth anchor scrolling
  │           ├── newsletter.js     - Newsletter form
  │           └── utils.js          - Utility functions
  ├── README_HOME.md                - Technical documentation
  └── CV y Servicios...md           - Business content
```

## Development Commands

### Running Locally

```bash
# Option 1: Open directly in browser
open home/index.html

# Option 2: Local server (if needed for testing)
python3 -m http.server 8000
# Then visit: http://localhost:8000/home/
```

### Validation and Testing

```bash
# HTML Validation
# Use: https://validator.w3.org/

# Performance Testing
# Chrome DevTools > Lighthouse

# Accessibility Testing
# Chrome DevTools > Lighthouse > Accessibility
# Or use axe DevTools extension
```

### No Build Process

This project intentionally uses no build tools, bundlers, or package managers. All code runs natively in the browser using **ES6 modules** (`type="module"`). Do not add npm, webpack, or similar tooling unless explicitly requested.

**ES6 Modules:** The project uses native browser ES6 modules for code organization. Load the main entry point with:

```html
<script type="module" src="/assets/js/main.js"></script>
```

All modules use `import/export` syntax and are organized by feature for future Astro migration.

## Architecture Overview

### Design System

**CSS Variables** - All styling uses CSS custom properties defined in `:root`:
- Colors: `--blue-primary`, `--gold`, `--gray-*` series
- Typography: `--font-display` (Playfair Display), `--font-sans` (Inter)
- Spacing: 8pt grid system (`--space-4` through `--space-24`)
- Transitions: Material Design 3 curves (`--transition-fast/base/slow`)

**Responsive Strategy:**
- Mobile-first approach with progressive enhancement
- Breakpoints: 768px (tablet), 1024px (desktop), 1200px (large desktop)
- Floating hero cards only display above 1200px to avoid mobile clutter

### JavaScript Architecture

**Modular ES6 Architecture** - Pure vanilla JS organized by feature:

**Module System:**

- Entry point: [main.js](home/assets/js/main.js) - Initializes all modules
- Configuration: [config.js](home/assets/js/config.js) - Centralized constants (delays, thresholds, breakpoints)
- Feature modules in [modules/](home/assets/js/modules/) - One module per feature
- Each module exports `init*()` function called from main.js
- Backward compatibility: Functions temporarily exposed on `window` during migration

**Core Patterns:**

1. **Event-Driven** - All interactions via event listeners attached in DOMContentLoaded
2. **IntersectionObserver** - Used for:
   - Stats counter animation (triggers once when entering viewport)
   - Scroll-based fade-in animations for cards
3. **RequestAnimationFrame** - Smooth 60fps animations via `throttle()` utility
4. **Performance Patterns:**
   - Event delegation where applicable
   - Throttled scroll handlers with `requestAnimationFrame`
   - Passive event listeners for scroll events
   - CSS transforms/opacity for animations (GPU-accelerated)

**Configuration Constants:**

All timing values, thresholds, and breakpoints are centralized in [config.js](home/assets/js/config.js):

- `ANIMATION_DELAYS` - Stagger delays, durations
- `SCROLL_THRESHOLDS` - Sticky nav, hide/show triggers
- `OBSERVER_OPTIONS` - IntersectionObserver configurations
- `Z_INDEX` - Layering scale to avoid conflicts
- `MODAL_TYPES` & `MODAL_TITLES` - Modal variant configurations

### Key Interactive Features

**Navigation System:**
- **Desktop**: Mega menu with hover interactions (4-column grid showing 8 practice areas)
- **Mobile**: Fullscreen overlay menu with slide-in animation
- **Sticky behavior**: Appears after 100px scroll
- **Hide on scroll down**: Nav hides when scrolling down past 300px, reappears on scroll up
- Both menus close via ESC key, outside click, or link selection

**Stats Counter:**
- Animates from 0 to target value over 2 seconds
- Triggers only once when section enters viewport (30% threshold)
- Uses `requestAnimationFrame` for smooth animation
- Values stored in `data-target` attributes

**Modal System:**
- Consultation form modal with backdrop blur
- Blocks body scroll when active
- Closes via ESC key, overlay click, or close button
- Special `openProBonoModal()` variant that modifies modal content dynamically

**Scroll Animations:**
- Progressive fade-in with stagger delay (100ms between elements)
- Applied to: `.area-card`, `.benefit-card`, `.stat-item`, `.faq-item`, `.probono-card`
- Uses IntersectionObserver with 10% threshold and -50px root margin
- Elements start with `opacity: 0` and `translateY(30px)`

### Page Sections

1. **Hero Section**: Background image + 3 animated orbs + floating stats cards (desktop only) + trust indicators
2. **Stats Section**: 4 animated counters (15+ years, 500+ cases, 8 areas, 98% satisfaction)
3. **Trust Badges**: Static horizontal badges (no animations)
4. **Practice Areas**: 8 cards with gradient hover effects (shield-alt, building, heart, file-signature, balance-scale, home, paw, chalkboard-teacher icons)
5. **Benefits Section**: 4 value propositions
6. **CTA Section**: Blue gradient background with animated orb + consultation button
7. **Footer**: 4-column layout (about + social, practice areas, contact, hours)

### Service Areas (8 Total)

As defined in [CV y Servicios (Jacquelie Del Valle) JDV & Abogados.md](home/CV%20y%20Servicios%20(Jacquelie%20Del%20Valle)%20JDV%20%26%20Abogados.md):

1. **Defensa Estatutaria** - Defense of public sector employees
2. **Defensa Administrativa** - Representation before public administration
3. **Cliente Senior** - In-home legal services for elderly clients
4. **Legado** - Estate planning for dependents and pets
5. **Civil** - General civil law matters
6. **Inmobiliaria y Copropiedad** - Real estate and condominium law
7. **Animalista** - Animal welfare and veterinary malpractice
8. **Capacitación** - Corporate training and workshops

## Code Conventions

### HTML
- Semantic HTML5 elements (nav, main, section, footer)
- ARIA labels on interactive elements
- `loading="lazy"` on images
- Alt text on all images (accessibility requirement)

### CSS
- Never use hardcoded values - always use CSS variables
- Use `clamp()` for fluid typography
- Animations use Material Design easing curves
- All interactive elements must have hover states
- Touch targets minimum 44x44px on mobile

### JavaScript
- All functionality wrapped in DOMContentLoaded
- Null checks before accessing DOM elements
- `e.stopPropagation()` to prevent bubbling where needed
- Console.log statements for form submissions (replace with backend integration)
- Analytics tracking placeholders (`if (typeof gtag !== 'undefined')`)

## Common Modifications

### Adding a New Practice Area
1. Update HTML in mega menu (both desktop mega-menu and fullscreen menu)
2. Add card to practice areas section with matching icon
3. Update service count in stats section if needed
4. Add content to [CV y Servicios](home/CV%20y%20Servicios%20(Jacquelie%20Del%20Valle)%20JDV%20%26%20Abogados.md)

### Updating Contact Information
- Phone: Update in footer, CTA section, and WhatsApp floating button
- Email: Update in footer
- Address: Update in footer
- Social media: Update footer links

### Form Integration
Current form handler in `script.js` (line 206-224) only logs to console. To integrate:
1. Replace console.log with actual API call (fetch/XMLHttpRequest)
2. Add server-side validation
3. Implement email notification system
4. Update success/error handling

### Image Replacement
Current placeholders from Unsplash:
- Hero background: Line 321 in `index.html`
- Portrait image: Line 326 in `index.html`

For production:
- Use WebP format with PNG/JPG fallback
- Optimize to <200KB
- Maintain aspect ratios (1920x1080 for background, 600x800 for portrait)

## Performance Targets

Expected Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Core Web Vitals:
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1

## Accessibility Standards

WCAG 2.1 AA compliance:
- Color contrast ratios: 4.5:1 for normal text, 3:1 for large text
- Keyboard navigation: Full support with visible focus states
- Screen reader: Semantic HTML + ARIA labels
- Touch targets: 44x44px minimum on mobile

## Browser Support

Modern browsers only (ES6+ features used):
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Features requiring modern browsers:
- IntersectionObserver
- CSS custom properties
- CSS Grid
- RequestAnimationFrame
- Template literals
- Arrow functions

## Production Checklist

Before deploying to production:

1. **Content**
   - [ ] Replace placeholder images with professional photos
   - [ ] Update all contact information (phone, email, address)
   - [ ] Set correct WhatsApp link: `https://wa.me/56XXXXXXXXX`
   - [ ] Review all service descriptions for accuracy

2. **Backend Integration**
   - [ ] Connect form submission to server endpoint
   - [ ] Implement email notifications
   - [ ] Add server-side validation
   - [ ] Set up newsletter integration (Mailchimp/SendGrid/Brevo)

3. **Analytics & Tracking**
   - [ ] Add Google Analytics 4
   - [ ] Configure Google Tag Manager (optional)
   - [ ] Set up conversion tracking for form submissions
   - [ ] Add Facebook Pixel (optional)

4. **SEO**
   - [ ] Add JSON-LD structured data for LegalService
   - [ ] Create sitemap.xml
   - [ ] Configure robots.txt
   - [ ] Generate Open Graph images (1200x630px)
   - [ ] Generate Twitter Card images

5. **Legal & Compliance**
   - [ ] Add privacy policy page
   - [ ] Add terms and conditions
   - [ ] Implement cookie consent (if required)
   - [ ] GDPR compliance review (if applicable)

## Technical Notes

### Stats Counter Implementation
The counter uses a mathematical approach to ensure smooth animation:
```javascript
const increment = target / (duration / 16); // 16ms = 60fps
```
This calculates how much to increment each frame to reach the target in exactly 2 seconds.

### Mega Menu Hover Delay
Desktop mega menu has 300ms delay before closing (`megaMenuTimeout`) to prevent accidental closes when mouse moves between menu and content.

### Orb Animations
Three decorative orbs with staggered delays (0s, 8s, 16s) create an organic, non-repetitive floating effect over 25-second cycle.

### Hero Cards Visibility
Floating cards use `display: none` on mobile/tablet to reduce visual complexity, only appearing as `display: block` at 1200px+.

## Reference Documentation

- [README_HOME.md](home/README_HOME.md) - Complete technical specification (505 lines)
- [CV y Servicios...md](home/CV%20y%20Servicios%20(Jacquelie%20Del%20Valle)%20JDV%20%26%20Abogados.md) - Business content (410 lines)

## Design Inspiration

Visual design inspired by:
- **Apple.com** - Glassmorphism, hero sections, premium feel
- **Stripe.com** - Gradient usage, spacing system
- **Linear.app** - Modern animations, micro-interactions