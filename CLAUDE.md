# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**JDV & Abogados** - Professional law firm website for Jacqueline del Valle Inostroza, featuring a premium design inspired by Apple/Stripe with modern animations and exceptional user experience.

**Tech Stack:** Astro + Pure CSS3 + Vanilla JavaScript (ES6 modules)

**Project Structure:**
```
/astro-site/
  ├── src/
  │   ├── components/
  │   │   ├── Hero.astro            - Hero section
  │   │   ├── BackToTop.astro       - Back to top button
  │   │   ├── WhatsAppFloat.astro   - WhatsApp floating button
  │   │   ├── home/                 - Home page components
  │   │   │   ├── AreasGrid.astro   - Practice areas grid
  │   │   │   ├── Benefits.astro    - Benefits section
  │   │   │   ├── CTA.astro         - Call to action
  │   │   │   ├── FAQ.astro         - FAQ accordion
  │   │   │   ├── Footer.astro      - Site footer
  │   │   │   ├── Modal.astro       - Consultation modal
  │   │   │   ├── Newsletter.astro  - Newsletter signup
  │   │   │   ├── ProBono.astro     - Pro bono section
  │   │   │   ├── Stats.astro       - Animated stats
  │   │   │   └── TrustBadges.astro - Trust indicators
  │   │   ├── nav/                  - Navigation components
  │   │   │   ├── Header.astro      - Main header/nav
  │   │   │   ├── MegaMenu.astro    - Desktop mega menu
  │   │   │   └── FullscreenMenu.astro - Mobile menu
  │   │   └── practice/             - Practice area page components
  │   │       ├── PracticeHero.astro
  │   │       ├── PracticeProcess.astro
  │   │       └── ... (11 components)
  │   ├── content/                  - Content Collections (Markdown)
  │   │   ├── config.ts             - Collection schemas
  │   │   ├── home/hero.md          - Hero content
  │   │   ├── areas/home.md         - Practice areas content
  │   │   ├── benefits/home.md      - Benefits content
  │   │   ├── stats/home.md         - Stats content
  │   │   ├── faq/home.md           - FAQ content
  │   │   ├── practices/            - Individual practice pages
  │   │   │   ├── defensa-estatutaria.md
  │   │   │   └── legado.md
  │   │   └── ...                   - Other content collections
  │   ├── layouts/
  │   │   ├── BaseLayout.astro      - Main HTML layout
  │   │   └── PracticeLayout.astro  - Practice area layout
  │   └── pages/
  │       ├── index.astro           - Home page
  │       └── areas-practicas/      - Practice area pages
  │           ├── index.astro
  │           ├── defensa-estatutaria.astro
  │           └── legado.astro
  └── public/
      ├── home/
      │   ├── style.css             - All CSS (loaded by BaseLayout)
      │   ├── fondo_hero.png        - Hero background image
      │   ├── persona_hero.png      - Hero portrait image
      │   └── assets/js/            - JavaScript modules
      │       ├── main.js           - Entry point
      │       ├── config.js         - Configuration
      │       └── modules/          - Feature modules
      ├── favicon.svg
      ├── fondo_hero.png
      └── persona_hero.png
```

## Development Commands

### Running Locally

```bash
cd astro-site

# Install dependencies (first time only)
npm install

# Start dev server
npm run dev
# Visit: http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

### Validation and Testing

```bash
# Build validation
npm run build

# Performance Testing
# Chrome DevTools > Lighthouse

# Accessibility Testing
# Chrome DevTools > Lighthouse > Accessibility
```

## Architecture Overview

### Astro Architecture

The site uses Astro's component-based architecture:

1. **Components** (`.astro` files) - Reusable UI components with scoped styles
2. **Content Collections** (`.md` files) - Type-safe content management
3. **Layouts** - Shared page structure (HTML head, scripts)
4. **Pages** - Route definitions

**Content is separated from presentation:**
- All text content lives in `src/content/` as Markdown files
- Components fetch content via `getEntry()` from Content Collections
- This makes content updates easy without touching component code

### CSS Architecture

CSS is loaded from `/public/home/style.css` via `BaseLayout.astro`. All styling uses CSS custom properties:

- Colors: `--blue-primary`, `--gold`, `--gray-*` series
- Typography: `--font-display` (Fraunces), `--font-sans` (Inter)
- Spacing: 8pt grid system (`--space-4` through `--space-24`)
- Transitions: Material Design 3 curves (`--transition-fast/base/slow`)

**Responsive Strategy:**
- Mobile-first approach with progressive enhancement
- Breakpoints: 768px (tablet), 1024px (desktop), 1200px (large desktop)

### JavaScript Architecture

JavaScript is loaded from `/public/home/assets/js/main.js` via `BaseLayout.astro`:

**Module System:**
- Entry point: `main.js` - Initializes all modules
- Configuration: `config.js` - Centralized constants
- Feature modules in `modules/` - One module per feature:
  - `nav.js` - Navigation & sticky behavior
  - `megaMenu.js` - Desktop mega menu
  - `modal.js` - Consultation modal
  - `animations.js` - Scroll animations
  - `stats.js` - Stats counter
  - `faq.js` - FAQ accordion
  - `backToTop.js` - Back to top button
  - `smoothScroll.js` - Smooth anchor scrolling
  - `newsletter.js` - Newsletter form
  - `utils.js` - Utility functions

**Core Patterns:**
1. **Event-Driven** - All interactions via event listeners in DOMContentLoaded
2. **IntersectionObserver** - Stats counter, scroll animations
3. **RequestAnimationFrame** - Smooth 60fps animations
4. **Performance** - Throttled handlers, passive listeners, GPU-accelerated transforms

### Key Interactive Features

**Navigation System:**
- **Desktop**: Mega menu with hover interactions (4-column grid, 8 practice areas)
- **Mobile**: Fullscreen overlay menu with slide-in animation
- **Sticky behavior**: Appears after 100px scroll, hides on scroll down

**Stats Counter:**
- Animates from 0 to target over 2 seconds
- Triggers once when entering viewport (30% threshold)

**Modal System:**
- Consultation form with backdrop blur
- Blocks body scroll, closes via ESC/overlay/button

**Scroll Animations:**
- Progressive fade-in with 100ms stagger delay
- Applied to cards, stats, FAQ items

### Page Sections

1. **Hero Section**: Background image + animated orbs + floating cards (desktop) + trust indicators
2. **Stats Section**: 4 animated counters
3. **Trust Badges**: Static horizontal badges
4. **Practice Areas**: 8 cards with gradient hover effects
5. **Benefits Section**: 4 value propositions
6. **CTA Section**: Blue gradient + consultation button
7. **Footer**: 4-column layout

### Service Areas (8 Total)

1. **Defensa Estatutaria** - Defense of public sector employees
2. **Defensa Administrativa** - Representation before public administration
3. **Cliente Senior** - In-home legal services for elderly clients
4. **Legado** - Estate planning for dependents and pets
5. **Civil** - General civil law matters
6. **Inmobiliaria y Copropiedad** - Real estate and condominium law
7. **Animalista** - Animal welfare and veterinary malpractice
8. **Capacitación** - Corporate training and workshops

## Code Conventions

### Astro Components
- Use Content Collections for all text content
- Keep components focused and single-purpose
- Use TypeScript interfaces for props

### CSS
- Never use hardcoded values - always use CSS variables
- Use `clamp()` for fluid typography
- Animations use Material Design easing curves
- Touch targets minimum 44x44px on mobile

### JavaScript
- All functionality wrapped in DOMContentLoaded
- Null checks before accessing DOM elements
- Use ES6 modules with import/export

## Common Modifications

### Adding Content
Edit the appropriate Markdown file in `src/content/`:
- Hero text: `content/home/hero.md`
- Practice areas: `content/areas/home.md`
- Stats: `content/stats/home.md`
- FAQ: `content/faq/home.md`

### Adding a New Practice Area Page
1. Create content file: `src/content/practices/new-area.md`
2. Create page file: `src/pages/areas-practicas/new-area.astro`
3. Update navigation in `Header.astro`, `MegaMenu.astro`, `FullscreenMenu.astro`

### Updating Contact Information
- Footer: `src/components/home/Footer.astro`
- CTA: `src/components/home/CTA.astro`
- WhatsApp: `src/components/WhatsAppFloat.astro`

### Styling Changes
Edit `/public/home/style.css` - all CSS is centralized there

### JavaScript Changes
Edit modules in `/public/home/assets/js/modules/`

## Performance Targets

Expected Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Core Web Vitals:
- LCP: <2.5s
- FID: <100ms
- CLS: <0.1

## Accessibility Standards

WCAG 2.1 AA compliance:
- Color contrast: 4.5:1 normal text, 3:1 large text
- Full keyboard navigation with visible focus states
- Semantic HTML + ARIA labels
- Touch targets: 44x44px minimum

## Browser Support

Modern browsers (ES6+ features):
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Production Checklist

1. **Content**
   - [ ] Replace placeholder images with professional photos
   - [ ] Update contact information
   - [ ] Set correct WhatsApp link

2. **Backend Integration**
   - [ ] Connect form submissions to server
   - [ ] Set up newsletter integration

3. **Analytics**
   - [ ] Add Google Analytics 4
   - [ ] Configure conversion tracking

4. **SEO**
   - [ ] Add JSON-LD structured data
   - [ ] Create sitemap.xml
   - [ ] Configure robots.txt

5. **Legal**
   - [ ] Add privacy policy page
   - [ ] Add terms and conditions

## Design Inspiration

- **Apple.com** - Glassmorphism, hero sections, premium feel
- **Stripe.com** - Gradient usage, spacing system
- **Linear.app** - Modern animations, micro-interactions
