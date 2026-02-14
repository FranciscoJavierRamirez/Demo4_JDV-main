# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**JDV & Abogados** - Professional law firm website for Jacqueline del Valle Inostroza, featuring a premium design inspired by Apple/Stripe with modern animations and exceptional user experience.

**Tech Stack:**
- **Astro 5.16** - Static site generator with component islands
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **React 19** - UI components (via @astrojs/react integration)
- **Framer Motion 12** - Animation library for React components
- **Phosphor Icons** - Icon library (@phosphor-icons/react)

**Project Structure:**
```
/astro-site/
  ├── src/
  │   ├── components/
  │   │   ├── Hero.astro            - Hero section
  │   │   ├── BackToTop.astro       - Back to top button
  │   │   ├── WhatsAppFloat.astro   - WhatsApp floating button
  │   │   ├── about/               - About page components
  │   │   │   ├── AboutHero.astro      - About hero section
  │   │   │   ├── AboutMission.astro   - Mission statement
  │   │   │   ├── AboutTimeline.astro  - Career timeline
  │   │   │   ├── AboutFounderProfile.astro - Founder profile
  │   │   │   ├── AboutTeam.astro      - Team members
  │   │   │   └── AboutCTA.astro       - About page CTA
  │   │   ├── agenda/              - Booking page components
  │   │   │   ├── HeroAgenda.astro     - Compact hero with portrait
  │   │   │   ├── CalendlyWidget.astro - Calendly inline embed
  │   │   │   ├── ProfileCard.astro    - Professional profile sidebar
  │   │   │   ├── PrepTips.astro       - Consultation prep tips
  │   │   │   └── AgendaTrust.astro    - Trust badges
  │   │   ├── blog/                - Blog components
  │   │   │   ├── BlogHero.astro       - Blog post hero
  │   │   │   ├── BlogContent.astro    - Article content
  │   │   │   ├── BlogAuthor.astro     - Author card
  │   │   │   ├── BlogBreadcrumbs.astro
  │   │   │   ├── BlogCTA.astro        - Blog call to action
  │   │   │   ├── BlogProgress.astro   - Reading progress
  │   │   │   ├── BlogRelated.astro    - Related posts
  │   │   │   ├── BlogShare.astro      - Social sharing
  │   │   │   └── BlogToC.astro        - Table of contents
  │   │   ├── contact/             - Contact page components
  │   │   │   └── ContactOffices.astro - Office locations
  │   │   ├── home/                 - Home page components
  │   │   │   ├── AboutPreview.astro - About preview section
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
  │   │       ├── PracticeBreadcrumbs.astro
  │   │       ├── PracticeContent.astro
  │   │       ├── PracticeFAQ.astro
  │   │       ├── PracticeFinalCTA.astro
  │   │       ├── PracticeObjective.astro
  │   │       ├── PracticePainPoints.astro
  │   │       ├── PracticeProcess.astro
  │   │       ├── PracticeRelatedServices.astro
  │   │       ├── PracticeResults.astro
  │   │       ├── PracticeServicesIncluded.astro
  │   │       ├── PracticeTarget.astro
  │   │       ├── PracticeTestimonials.astro
  │   │       └── PracticeTrustBar.astro
  │   ├── content/                  - Content Collections (Markdown)
  │   │   ├── config.ts             - Collection schemas
  │   │   ├── about/main.md         - About page content
  │   │   ├── aboutPreview/home.md  - About preview content
  │   │   ├── areas/home.md         - Practice areas content
  │   │   ├── benefits/home.md      - Benefits content
  │   │   ├── blog/                 - Blog posts (3 articles)
  │   │   ├── cta/home.md           - CTA content
  │   │   ├── faq/home.md           - FAQ content
  │   │   ├── footer/home.md        - Footer content
  │   │   ├── home/hero.md          - Hero content
  │   │   ├── modal/home.md         - Modal content
  │   │   ├── newsletter/home.md    - Newsletter content
  │   │   ├── practices/            - Individual practice pages (8 areas)
  │   │   ├── proBono/home.md       - Pro bono content
  │   │   ├── stats/home.md         - Stats content
  │   │   ├── team/                 - Team member profiles (4 members)
  │   │   └── trustBadges/home.md   - Trust badges content
  │   ├── layouts/
  │   │   ├── BaseLayout.astro      - Main HTML layout with navigation
  │   │   ├── FormLayout.astro      - Layout for standalone forms (no nav scripts)
  │   │   ├── BlogLayout.astro      - Blog layout with navigation
  │   │   └── PracticeLayout.astro  - Practice area layout
  │   └── pages/
  │       ├── index.astro           - Home page
  │       ├── nosotros.astro        - About page
  │       ├── agenda.astro          - Booking page (Calendly)
  │       ├── contacto.astro        - Contact page
  │       ├── design-system.astro   - Design system reference
  │       ├── blog/                 - Blog pages
  │       │   ├── index.astro
  │       │   ├── [...slug].astro   - Dynamic blog posts
  │       │   └── categoria/[categoria].astro
  │       └── areas-practicas/      - Practice area pages (8)
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

### Layout Architecture

The project uses **specialized layouts** for different page types:

**Layout Selection Guide:**

| Layout | Use For | Navigation Scripts | Notes |
|--------|---------|-------------------|-------|
| **BaseLayout.astro** | Home, Nosotros, Contacto, Practice areas | ✅ Yes (mega menu, mobile menu) | Default layout with full navigation |
| **FormLayout.astro** | `/formulario-contacto`, `/agenda` | ❌ No | Standalone pages without complex navigation |
| **BlogLayout.astro** | Blog index, blog posts | ✅ Yes (mega menu, mobile menu) | Similar to BaseLayout with blog-specific features |
| **PracticeLayout.astro** | Individual practice area pages | ✅ Yes (via BaseLayout) | Wraps BaseLayout with practice-specific structure |

**Why FormLayout exists:**
- Pages like `/formulario-contacto` have their own custom header (not the main nav)
- BaseLayout includes global scripts for `#mainNav`, `#areasToggle`, `#megaMenu`, etc.
- These scripts would run on FormLayout pages looking for elements that don't exist
- **Issue:** This caused crashes on mobile when clicking buttons (event listeners on missing DOM elements)
- **Solution:** FormLayout is identical to BaseLayout but WITHOUT navigation scripts

**When to use FormLayout:**
- Page has custom header (not Header.astro component)
- No mega menu or mobile fullscreen menu needed
- Standalone form or booking page

### CSS Architecture (Tailwind CSS 4)

The project uses **Tailwind CSS 4** with utility-first approach:

- **Configuration**: Via `tailwind.config.js` and `@tailwindcss/vite` plugin
- **CSS Variables**: Custom properties for brand colors (`--blue-primary`, `--gold`, `--gray-*`)
- **Typography**: `font-[var(--font-display)]` (Fraunces), default sans (Inter)
- **Glassmorphism**: `backdrop-blur-*`, `bg-white/20`, `border-white/30` patterns

**Responsive Strategy:**
- Mobile-first with Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Common breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)

**Styling Patterns:**
- Inline Tailwind classes in components
- CSS custom properties for brand consistency
- `<style>` blocks in Astro components for complex animations

### JavaScript/React Architecture

The project uses a hybrid approach:

**React Components (via @astrojs/react):**
- Interactive UI components using React 19
- Animations powered by Framer Motion 12
- Icons from @phosphor-icons/react

**Vanilla JavaScript:**
- Navigation interactions in `<script>` tags within Astro components
- Legacy modules in `/public/home/assets/js/` (if still used)

**Framer Motion Patterns:**
- `motion.div` for animated containers
- `variants` for orchestrated animations
- `whileInView` for scroll-triggered animations
- `AnimatePresence` for enter/exit transitions

**Core Patterns:**
1. **Component Islands** - React components hydrate independently
2. **Client Directives** - `client:load`, `client:visible`, `client:idle`
3. **IntersectionObserver** - Stats counter, scroll animations
4. **Performance** - Partial hydration, lazy loading

### Key Interactive Features

**Navigation System:**
- **Desktop**: Mega menu with hover interactions (grid layout, 8 practice areas)
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

### AreasGrid Component Features

**Desktop Behavior:**
- Glassmorphism cards with hover "opening" effect
- Icons transition from blue → gold on hover (ALL cards)
- Image reveals with parallax effect
- Spotlight mouse-tracking effect

**Mobile Behavior:**
- Enhanced contrast: `rgba(30,58,95,0.95)` background (Material Design)
- Luminous borders: `rgba(255,255,255,0.25)` (Apple HIG)
- Elevation shadows for depth perception
- ALL icons display in gold (including featured cards)
- Uniform card height (320px) for consistent image display
- Touch feedback with scale animation

**Image Focal Point System:**
- Configurable via `focal` property in `areas/home.md`
- Options: `top` (15%), `center`, `bottom` (85%)
- Prevents face cropping in images with people
- CSS classes: `.focal-top`, `.focal-center`, `.focal-bottom`

**Schema (`config.ts`):**
```typescript
focal: z.enum(['top', 'center', 'bottom']).optional().default('center')
```

### Service Areas (8 Total)

**Áreas Principales:**
1. **Defensa Estatutaria** - Defense of public sector employees
2. **Defensa Administrativa** - Representation before public administration
3. **Inmobiliaria y Copropiedad** - Real estate and condominium law

**Áreas Complementarias:**
4. **Defensa Penal** - Criminal defense representation
5. **Familia y Menores** - Family law and child protection
6. **Civil** - General civil law matters
7. **Migraciones y Extranjería** - Immigration and foreign nationals law

**Otros Servicios:**
8. **Capacitación** - Corporate training and workshops

## Code Conventions

### Astro Components
- Use Content Collections for all text content
- Keep components focused and single-purpose
- Use TypeScript interfaces for props

### Tailwind CSS
- Use Tailwind utility classes for styling
- CSS variables for brand colors: `var(--blue-primary)`, `var(--gold)`
- Use `clamp()` for fluid typography when needed
- Touch targets minimum 44x44px on mobile (`min-h-11 min-w-11`)

### React/JavaScript
- Use Framer Motion for animations
- Null checks before accessing DOM elements
- Use `client:visible` for below-fold interactive components
- Prefer `client:idle` for non-critical interactivity

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
4. **IMPORTANT:** Follow the Editorial Guide in `docs/MANUAL_AREAS_PRACTICA.md`

## Editorial Guidelines for Practice Areas

**Reference Document:** `docs/MANUAL_AREAS_PRACTICA.md` (sections "Guía Editorial y Manual de Estilo" and "Frameworks de Comunicación Estratégica")

### Key Writing Rules

**Voice and Tone:**

- **First person plural institutional for the firm:** "nosotros", "nuestro equipo", "representamos", "nuestro objetivo"
- **USTEDEO FORMAL for addressing the client/reader:** Always use "usted", "su", "le" when referring to the client
- **PROHIBITED:** Tuteo (tú, tu, te, ti, tus, contigo) - creates inappropriate informality for legal services
- **PROHIBITED:** First person singular ("yo", "mi experiencia", "te acompaño")

**Examples:**

- ✅ CORRECT: "Nuestro equipo evalúa **su** situación y **le** presenta las opciones disponibles"
- ✅ CORRECT: "Si **usted** enfrenta un sumario administrativo, podemos ayudarle"
- ❌ WRONG: "Evaluamos **tu** caso y **te** acompañamos" (tuteo)
- ❌ WRONG: "**Yo te ayudo** en cada etapa" (first person singular + tuteo)

**Ethical Promises:**
- **PROHIBITED:** Promise results ("garantizamos", "ganamos tu caso", "resultado asegurado")
- **ALLOWED:** Promise process, methodology, rigor, transparency ("Gestión orientada a...", "Estrategia jurídicamente fundada...")

**Legal Terminology (Chile):**
- Use official Chilean terms: "Juzgado de Garantía", "Tribunal de Juicio Oral en lo Penal", "Ministerio Público"
- Avoid anglicisms or generic terms

**CTAs:**

- Use (with USTEDEO formal): "Agende su consulta", "Solicite una evaluación", "Converse con nuestro equipo", "Evalúe su caso"
- Neutral (acceptable): "Agendar consulta", "Solicitar evaluación", "Hablar con el equipo"
- Avoid (tuteo): "Agenda tu consulta", "Evalúa tu caso"
- Avoid (commercial): "Contratar ahora", "Oferta", "Promo"

**Special Cases and Exceptions:**

- **Form placeholders:** Use neutral infinitive or USTEDEO ("Su email profesional" NOT "Tu email")
- **Breadcrumbs/Navigation:** Use neutral nouns ("Áreas de Práctica", "Nosotros")
- **Headings/Titles:** Prefer neutral or institutional voice ("Defensa Estatutaria", "Nuestro Equipo")
- **Imperative CTAs:** When using imperative verbs, they implicitly carry USTEDEO formal ("Agende", "Solicite", "Converse")

**SEO 2026:**

- Title: 50-60 characters with search intent + brand
- Meta description: 140-160 characters with benefit + sober CTA

### Pre-Publication Checklist

- [ ] All text in institutional voice ("nosotros", "nuestro equipo")
- [ ] **USTEDEO FORMAL used consistently** (usted, su, le) - NO TUTEO (tú, tu, te, tus)
- [ ] No result promises
- [ ] Correct Chilean legal terminology
- [ ] SEO title < 60 characters
- [ ] Meta description < 160 characters
- [ ] PainPoints don't attack third parties
- [ ] Sober CTA
- [ ] Explicit competitive differentiator
- [ ] FAQ includes prices, times, and deadlines
- [ ] Markdown content < 80 lines

### Updating Contact Information
- Footer: `src/components/home/Footer.astro`
- CTA: `src/components/home/CTA.astro`
- WhatsApp: `src/components/WhatsAppFloat.astro`

### Styling Changes
- Use Tailwind classes directly in components
- Global CSS variables in `BaseLayout.astro` or imported CSS files
- Component-specific styles in `<style>` blocks

### Adding React Components
1. Create `.tsx` file in appropriate `components/` folder
2. Import in Astro component with client directive: `client:visible`
3. Use Framer Motion for animations

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

## Pages Status

### Implemented

- **Home** (`/`) - Complete
- **Nosotros** (`/nosotros/`) - Complete with timeline and team
- **Contacto** (`/contacto/`) - Contact page with office locations
- **Agenda / Reservas** (`/agenda`) - Calendly booking page with JSON-LD structured data
- **Blog** (`/blog/`) - Complete with 3 articles and category pages
- **Áreas de Práctica Index** (`/areas-practicas/`) - Complete
- **8 Practice Area Pages** - All complete (defensa-estatutaria, defensa-administrativa, defensa-penal, familia-menores, civil, inmobiliaria-copropiedad, migraciones-extranjeria, capacitacion)
- **Design System** (`/design-system/`) - Reference page

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
   - [x] Add JSON-LD structured data (implemented on `/agenda`)
   - [ ] Create sitemap.xml
   - [ ] Configure robots.txt

5. **Legal**
   - [ ] Add privacy policy page
   - [ ] Add terms and conditions

## Design Inspiration

- **Apple.com** - Glassmorphism, hero sections, premium feel
- **Stripe.com** - Gradient usage, spacing system
- **Linear.app** - Modern animations, micro-interactions
