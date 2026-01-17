# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

**JDV & Abogados** is a premium legal website for a Chilean law firm built with vanilla HTML, CSS, and JavaScript. The project follows Apple/Stripe-inspired design patterns with a focus on accessibility (WCAG 2.1 AA), performance (Lighthouse 90+), and professional aesthetics.

**Current Status**: Home page complete (v3.0) | 10 additional pages in development

**Tech Stack**: Pure HTML5, CSS3, JavaScript (ES6+) - No frameworks or build tools

---

## Architecture

### Directory Structure

Each page is **fully independent** with its own HTML, CSS, and JS files:

```
Demo2_JDVI/
├── home/               ✅ Complete (676 lines HTML, 2096 lines CSS, 355 lines JS)
├── defensa-estatutaria/      🔄 In development (8 practice area pages)
├── defensa-administrativa/
├── cliente-senior/
├── legado/
├── civil/
├── inmobiliaria-copropiedad/
├── animalista/
├── capacitacion/
├── quienes-somos/      🔄 About page
├── contacto/           🔄 Contact page
├── assets/             📦 Shared resources
│   ├── css/shared.css
│   ├── js/shared.js
│   └── images/
└── docs/               📚 Documentation
```

### Key Architectural Principles

1. **No Build System**: Direct file editing, no compilation required
2. **Component Reuse**: Navigation, footer, modal, and floating elements are identical across all pages
3. **Standalone Pages**: Each page directory is self-contained and can be developed independently
4. **Shared Resources**: Common CSS variables and utilities in `assets/`
5. **Mobile-First**: Progressive enhancement from 320px upward

---

## Design System

### Color Palette

The brand colors are defined in CSS variables and must be used consistently:

```css
/* Primary Blues (Trust, Professionalism) */
--blue-primary: #0077C8;
--blue-dark: #1A4D7A;
--blue-darker: #0c2340;

/* Gold Accents (Prestige, Excellence) */
--gold: #C9A961;
--gold-light: #D4AF37;
--gold-dark: #B89350;

/* Neutral Palette */
--gray-50 through --gray-900
```

### Typography

Two font families form the typographic hierarchy:
- **Display**: Playfair Display (serif) - Headlines, hero titles
- **Sans**: Inter - Body text, UI elements

Use fluid typography with `clamp()`:
```css
--hero-title: clamp(2.5rem, 5vw, 4.5rem);
--section-title: clamp(2rem, 4vw, 3rem);
```

### Spacing System

8-point grid system (`--space-1` through `--space-24`). Always use multiples of 4px/8px for consistency.

### Animations

Material Design 3 cubic-bezier timing functions:
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
```

**Never use** `linear` or generic `ease` - always use the defined transitions.

---

## Mandatory Components (All Pages)

Every page must include these four components with exact specifications:

### 1. Navigation Bar

- Sticky on scroll (adds `.scrolled` class after 100px)
- Glassmorphism: `background: rgba(255, 255, 255, 0.95)` with `backdrop-filter: blur(12px)`
- Logo with gold gradient (inline SVG or CSS text)
- Dropdown mega menu for "Áreas de Práctica" (8 practice areas)
- Mobile hamburger menu (slide-in from right on mobile)
- CTA button: "Agendar Consulta" (opens modal)
- Z-index: 1000

### 2. Footer

- Background: `var(--gray-900)`
- 4-column grid (responsive: 4 → 2 → 1)
- Columns: About, Practice Areas, Contact, Hours
- Social media icons with gold hover effect
- Bottom bar with copyright

### 3. Consultation Modal

- Triggered by "Agendar Consulta" buttons
- Overlay with `backdrop-filter: blur(8px)`
- Form fields: Name, Email, Phone, Practice Area (dropdown), Message
- Closes with ESC key or overlay click
- Locks body scroll when active
- Max-width: 640px, border-radius: 24px

### 4. Floating Elements

- **WhatsApp Button**: Fixed bottom-right at `bottom: 2rem; right: 2rem;` (z-index: 999)
- **Back to Top Button**: Shows after 300px scroll, positioned at `bottom: 6rem; right: 2rem;`

---

## Page Structure Template

All practice area pages follow this structure:

1. **Hero Section**: Area-specific with background image, badge, title, subtitle, dual CTAs
2. **Area Description**: 2-column grid with content + visual
3. **Target Client**: "¿Quién es Nuestro Cliente?" - 3-4 client type cards
4. **Services**: "Cómo Te Ayudamos" - 4-6 numbered service cards
5. **Common Cases**: Grid of case tags with checkmarks
6. **Process Timeline**: 4-step process with numbers
7. **FAQ Accordion**: 5-6 expandable questions
8. **CTA Section**: Final conversion section
9. **Footer**: Standard footer component

See `README_PROJECT.md` lines 435-585 for complete HTML template.

---

## Practice Areas Content

### 8 Practice Areas:

1. **Defensa Estatutaria**: Public servant protection, administrative investigations
2. **Defensa Administrativa**: Public procurement, administrative representation
3. **Cliente Senior**: Home legal services for elderly, reduced mobility clients
4. **Legado**: Estate planning, succession, pet inheritance, family trusts
5. **Civil**: Civil law, commercial litigation, debt collection
6. **Inmobiliaria y Copropiedad**: Real estate, property management, co-ownership
7. **Animalista**: Animal rights, Ley Cholito, pet guardian defense
8. **Capacitación**: Legal training, workshops for companies and organizations

Each area has specific SEO keywords and target audiences detailed in `README_PROJECT.md` lines 589-700.

---

## Development Workflow

### Opening a Page for Development

1. Navigate to the page directory (e.g., `cd defensa-estatutaria/`)
2. Open `index.html` in browser directly (no server needed for basic viewing)
3. Edit HTML, CSS, and JS files independently
4. Refresh browser to see changes

### Testing Pages Locally

Simply open HTML files in a browser. For full testing with CORS-free resources:
```bash
# Optional: Run a simple HTTP server if needed
python3 -m http.server 8000
# Then visit http://localhost:8000/home/
```

### Image Placeholders

Use Unsplash with specific dimensions:
```
Hero Backgrounds: https://images.unsplash.com/photo-[ID]?w=1920&h=1080&fit=crop&q=80
Portraits: https://images.unsplash.com/photo-[ID]?w=600&h=800&fit=crop&q=80
Square: https://images.unsplash.com/photo-[ID]?w=600&h=600&fit=crop&q=80
```

Home page uses:
- Hero BG: `photo-1589829545856-d10d557cf95f` (legal office)
- Portrait: `photo-1573497019940-1c28c88b4f3e` (professional woman)

---

## Code Standards

### HTML

- Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Single `<h1>` per page
- All images must have meaningful `alt` attributes
- Form inputs must have associated `<label>` elements
- ARIA labels on interactive elements (`aria-label`, `aria-expanded`, etc.)
- Meta tags: description (150-160 chars), keywords (5-10), Open Graph, Twitter Card

### CSS

- **CSS Variables Only**: Never hardcode colors, spacing, or transitions
- **Mobile-First**: Base styles for 320px+, use `@media (min-width: ...)` for larger screens
- **No !important**: Avoid except for utility classes
- **Consistent Hover States**: All interactive elements need hover effects
- **Spacing**: Use 8pt grid system variables
- **Shadows**: Use predefined `--shadow-*` variables
- **Border Radius**: Use `--radius-*` variables (6px to 24px)

### JavaScript

- Wait for `DOMContentLoaded` before running code
- Use `const` and `let` (no `var`)
- Use `addEventListener` for all event handling
- Implement `IntersectionObserver` for scroll animations (see stats counter in home/script.js)
- Use `requestAnimationFrame` for animations
- Clean up event listeners when removing elements
- Close modals with ESC key support
- Smooth scroll behavior for anchor links

---

## Responsive Breakpoints

```css
/* Mobile: 0-767px (base styles) */
/* Tablet: 768-1023px */
@media (min-width: 768px) { ... }

/* Desktop: 1024-1199px */
@media (min-width: 1024px) { ... }

/* Large Desktop: 1200px+ */
@media (min-width: 1200px) { ... }
```

Grid transformations: 4-col → 2-col → 1-col

Touch targets on mobile: Minimum 44x44px

---

## Performance Requirements

### Lighthouse Targets (Minimum)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### Core Web Vitals
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1

### Optimization Checklist
- ✅ Preconnect to Google Fonts (`<link rel="preconnect">`)
- ✅ `font-display: swap` on all fonts
- ✅ Lazy loading on images: `loading="lazy"`
- ✅ Async/defer on non-critical JavaScript
- ✅ WebP images with fallbacks (when using real images)
- ✅ Minimize repaints: Use `transform` and `opacity` for animations
- ✅ IntersectionObserver for scroll-triggered animations

---

## Accessibility Standards

**WCAG 2.1 Level AA Compliance Required**

### Contrast Ratios
- Normal text: 4.5:1 minimum
- Large text (18pt+): 3:1 minimum
- UI elements: 3:1 minimum

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Visible focus states (never `outline: none` without custom focus style)
- Logical tab order
- ESC key closes modals and dropdowns
- Skip links for screen readers

### ARIA Implementation
```html
<!-- Required patterns -->
<button aria-label="Open menu" aria-expanded="false">
<nav aria-label="Main navigation">
<img src="..." alt="Descriptive alt text">
<input aria-required="true" aria-invalid="false">
```

---

## SEO Guidelines

### Required Meta Tags (Every Page)
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[Unique 150-160 chars]">
<meta name="keywords" content="[5-10 relevant keywords]">
<title>[Unique Title] - JDV & Abogados</title>

<!-- Open Graph -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:url" content="...">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
```

### Structured Data (JSON-LD)

Include LegalService schema on all pages. See `README_PROJECT.md` lines 1025-1047 for complete schema.

### Internal Linking

- Home links to all 10 pages
- Footer links to all 8 practice areas
- Practice area pages link back to home
- "Quiénes Somos" and "Contacto" accessible from all pages via nav

---

## Common Patterns

### Stats Counter Animation

Use IntersectionObserver to trigger when visible:
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
});
```

See `home/script.js` lines 52-95 for complete implementation.

### FAQ Accordion

Toggle pattern with rotation icon:
```javascript
faqItem.addEventListener('click', () => {
    const isOpen = faqAnswer.style.maxHeight;
    faqAnswer.style.maxHeight = isOpen ? null : faqAnswer.scrollHeight + 'px';
    icon.style.transform = isOpen ? 'rotate(0)' : 'rotate(180deg)';
});
```

### Modal Open/Close

```javascript
function openModal() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Lock scroll
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scroll
}

// ESC key support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
    }
});
```

---

## Important Notes

### What NOT to Do

- **Never hardcode colors**: Always use CSS variables
- **Never use linear transitions**: Use Material Design cubic-bezier curves
- **Never skip ARIA labels**: Required for accessibility
- **Never forget alt text**: Every `<img>` needs descriptive alt
- **Never use !important**: Except for utility classes
- **Never create generic event listeners**: Always be specific (avoid `document.addEventListener('click')` without checks)

### Hero Section Special Notes

The home page hero section is complex with:
- Animated background orbs (3 floating blurred circles)
- Glassmorphism content container
- Floating stats cards (desktop only, >1200px)
- Scroll indicator with mouse animation

Do NOT replicate this exact hero on practice area pages. Practice area pages use simpler hero sections with background images and overlays.

### Navigation Dropdown Behavior

The "Áreas de Práctica" dropdown has different behavior on mobile vs desktop:
- **Desktop**: Hover to open, shows mega menu grid (3 columns)
- **Mobile**: Click to expand, shows stacked list

See `home/script.js` for mega menu toggle implementation.

---

## Quality Checklist (Per Page)

Before considering a page "complete", verify:

- [ ] Lighthouse Performance 90+
- [ ] Lighthouse Accessibility 95+
- [ ] All images have alt text
- [ ] Meta description unique and 150-160 chars
- [ ] H1 unique and descriptive
- [ ] Mobile responsive 320px-1920px
- [ ] All interactive elements have hover states
- [ ] Keyboard navigation works
- [ ] ESC closes modal
- [ ] Back to top button shows after scroll
- [ ] Footer links all work
- [ ] No console errors
- [ ] Form validation messages clear
- [ ] Colors use CSS variables only

---

## Contact Information (Placeholders)

**Note**: These are placeholders to be updated before production:
- Phone: +56 9 XXXX XXXX
- Email: contacto@jdvabogados.cl
- Address: Santiago, Chile
- Hours: Monday-Friday, 9:00-18:00

WhatsApp link: `https://wa.me/56912345678` (update before launch)

---

## Additional Resources

- **Main Documentation**: `README_PROJECT.md` - Complete project overview (1226 lines)
- **Home Page Details**: `home/README_HOME.md` - Home page implementation details
- **Brand Guidelines**: `docs/brand-guidelines.md` (if exists)

---

## Migration Plan

**Future**: This site will be migrated to Astro with React and Tailwind CSS. Current vanilla approach allows rapid development and easy migration since:
1. Component structure is clearly defined
2. CSS variables map directly to Tailwind config
3. Standalone pages become Astro routes
4. Shared components already identified (nav, footer, modal)

Do not prematurely optimize for Astro - focus on completing all pages in vanilla first.
