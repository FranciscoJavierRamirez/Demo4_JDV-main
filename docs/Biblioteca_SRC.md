# Biblioteca de Componentes - Directorio SRC

**Fecha de última actualización:** 2026-01-18
**Estado del proyecto:** 50% completado
**Propósito:** Documentación viva que refleja el estado actual de implementación

---

## 📋 Tabla de Contenidos

1. [Layouts](#1-layouts)
2. [Páginas (Pages)](#2-páginas-pages)
3. [Componentes de Navegación (Nav)](#3-componentes-de-navegación-nav)
4. [Componentes del Home](#4-componentes-del-home)
5. [Componentes de Áreas de Práctica (Practice)](#5-componentes-de-áreas-de-práctica-practice)
6. [Componentes Utilitarios](#6-componentes-utilitarios)
7. [Content Collections](#7-content-collections)
8. [Diagrama de Relaciones](#8-diagrama-de-relaciones)

---

## 1. Layouts

Layouts base que definen la estructura HTML y cargan recursos globales.

| Componente | Ubicación | Propósito | Props | Dependencias | Relaciones |
|------------|-----------|-----------|-------|--------------|------------|
| **BaseLayout.astro** | `/layouts/` | Layout principal para páginas del sitio. Define estructura HTML, carga fuentes (Playfair Display + Inter), Font Awesome, y CSS global. Incluye JavaScript inline para navegación, mega menu y menú mobile. | `title?: string`<br>`description?: string` | `../styles/global.css` | Usado por: `index.astro`<br>Carga: Font Awesome, Google Fonts |
| **PracticeLayout.astro** | `/layouts/` | Layout especializado para páginas de áreas de práctica. Reutiliza estilos del home y carga JavaScript modular. Incluye meta tags para SEO y Open Graph. | `title: string`<br>`description: string`<br>`canonical?: string` | `/home/style.css`<br>`/home/assets/js/main.js` | Usado por: `defensa-estatutaria.astro`, `legado.astro`<br>Comparte recursos con BaseLayout |

---

## 2. Páginas (Pages)

Rutas del sitio que ensamblan componentes.

| Página | Ruta URL | Propósito | Componentes Utilizados | Content Collections |
|--------|----------|-----------|------------------------|---------------------|
| **index.astro** | `/` | Página principal del sitio. Ensambla 15 componentes en secuencia vertical. | `Header`, `Hero`, `Stats`, `TrustBadges`, `AreasGrid`, `Benefits`, `ProBono`, `FAQ`, `CTA`, `Footer`, `Modal`, `WhatsAppFloat`, `BackToTop` | `home/hero`, `stats/home`, `trustBadges/home`, `areas/home`, `benefits/home`, `proBono/home`, `faq/home`, `cta/home`, `footer/home`, `modal/home` |
| **areas-practicas/index.astro** | `/areas-practicas/` | Página índice de áreas de práctica (estado: pendiente de implementar) | N/A | `areas/home` |
| **areas-practicas/defensa-estatutaria.astro** | `/areas-practicas/defensa-estatutaria` | Página detallada del área "Defensa Estatutaria". Incluye 10 secciones especializadas. | `Header`, `PracticeBreadcrumbs`, `PracticeHero`, `PracticeTrustBar`, `PracticeTarget`, `PracticePainPoints`, `PracticeObjective`, `PracticeResults`, `PracticeServicesIncluded`, `PracticeProcess`, `PracticeFAQ`, `PracticeFinalCTA`, `Footer`, `Modal`, `WhatsAppFloat`, `BackToTop` | `practices/defensa-estatutaria`, `footer/home`, `modal/home` |
| **areas-practicas/legado.astro** | `/areas-practicas/legado` | Página detallada del área "Legado". Estructura idéntica a defensa-estatutaria. | Mismos componentes que defensa-estatutaria | `practices/legado`, `footer/home`, `modal/home` |
| **design-system.astro** | `/design-system` | Sistema de diseño / guía de estilo (estado: en desarrollo) | N/A | N/A |

---

## 3. Componentes de Navegación (Nav)

Componentes para navegación principal del sitio.

| Componente | Ubicación | Propósito | Props | Estado Interactivo | Relaciones |
|------------|-----------|-----------|-------|-------------------|------------|
| **Header.astro** | `/components/nav/` | Barra de navegación principal fija. Incluye logo, menú desktop, botón hamburguesa mobile, y CTA "Agenda Ahora". | Ninguna | Sticky scroll behavior, toggle mega menu, toggle mobile menu | Contiene: `MegaMenu`, `FullscreenMenu`<br>Usa JS: BaseLayout (líneas 40-124)<br>Interactúa con: `Modal` |
| **MegaMenu.astro** | `/components/nav/` | Mega menú desktop desplegable para "Áreas de Práctica". Grid de 4 columnas con 8 áreas (4 implementadas, 4 próximamente). | Ninguna | Toggle on/off via `#areasToggle` button<br>Cierra con: click outside, ESC key | Controlado por: `Header`<br>Enlaces a: Páginas de práctica<br>Muestra: 4 áreas activas + 4 próximas |
| **FullscreenMenu.astro** | `/components/nav/` | Menú mobile fullscreen overlay. Navegación vertical animada con slide-in desde derecha. | Ninguna | Toggle on/off via `#navTogglePremium`<br>Bloquea scroll del body<br>Cierra al hacer click en link | Controlado por: `Header`<br>Versión mobile de: `MegaMenu` + nav links |

**Notas de Navegación:**
- Header permanece fijo en scroll (`z-index: 1000`)
- Mega menu solo visible en desktop (>= 1024px)
- Mobile menu solo visible en mobile/tablet (< 1024px)
- Estado scroll añade clase `.scrolled` al nav después de 100px

---

## 4. Componentes del Home

Componentes específicos de la página principal (`/`).

| Componente | Ubicación | Propósito | Props | Content Collection | Interactividad | Relaciones |
|------------|-----------|-----------|-------|-------------------|----------------|------------|
| **Hero.astro** | `/components/` | Sección hero principal. Incluye badge, título de 2 líneas, subtítulo, 2 CTAs, 4 trust items horizontales, imagen de Jacqueline (desktop), orbes animados, y scroll indicator. | Ninguna | `home/hero` | CTAs: abre modal, scroll a sección<br>Animaciones: fadeIn, slideIn, float orbs | Llama: `Modal` (CTA primario)<br>Scroll a: `#stats` |
| **Stats.astro** | `/components/home/` | 4 estadísticas animadas con contador incremental. Anima cuando entra en viewport (IntersectionObserver). | Ninguna | `stats/home` | Contador animado 0→target en 2s<br>Trigger: 30% visible | Usa JS: `/home/assets/js/modules/stats.js` |
| **TrustBadges.astro** | `/components/home/` | Barra horizontal de badges de confianza (ej: "Confidencialidad", "Primera consulta gratis"). | Ninguna | `trustBadges/home` | Estático | Sección visual estática |
| **AreasGrid.astro** | `/components/home/` | Grid de 8 tarjetas de áreas de práctica. Diseño 2/3/4 columnas responsive. Hover con gradient overlay. | Ninguna | `areas/home` | Hover: gradient overlay<br>Scroll animations: fadeIn con stagger | Enlaces a: páginas `/areas-practicas/*`<br>Usa JS: animations.js |
| **Benefits.astro** | `/components/home/` | 4 beneficios del estudio. Grid 1/2/4 columnas con iconos y texto. | Ninguna | `benefits/home` | Scroll animations: fadeIn | Sección informativa |
| **ProBono.astro** | `/components/home/` | Sección Pro Bono con intro, 5 criterios de elegibilidad, CTA, y 3 cards visuales. | Ninguna | `proBono/home` | CTA: abre modal<br>Scroll animations | Llama: `Modal`<br>Usa: 5 criterios con iconos |
| **FAQ.astro** | `/components/home/` | Accordión de preguntas frecuentes. 6-8 preguntas colapsables. | Ninguna | `faq/home` | Accordion: toggle open/close<br>Solo 1 abierto a la vez | Usa JS: `/home/assets/js/modules/faq.js` |
| **CTA.astro** | `/components/home/` | Call-to-Action final con gradient azul. Incluye 2 botones (modal + teléfono) y 4 features. | Ninguna | `cta/home` | CTA primario: abre modal<br>CTA secundario: tel: link | Llama: `Modal` |
| **Footer.astro** | `/components/home/` | Footer completo de 4 columnas: Brand, Áreas de Práctica, Empresa, Contacto. Incluye rating, social links, disclaimer legal. | `data?: FooterData` | `footer/home` | Social links<br>Links externos/internos | Usado por: `index.astro` y todas las páginas de práctica |
| **Newsletter.astro** | `/components/home/` | Formulario de suscripción a newsletter. Input + botón. | Ninguna | `newsletter/home` | Form submit (backend pendiente) | Usa JS: `newsletter.js`<br>**Estado: No visible en index.astro** |
| **Modal.astro** | `/components/home/` | Modal de consulta con formulario. 4 campos + textarea + botón submit. Aviso Pro Bono destacado. | `data?: ModalData` | `modal/home` | Open/close con backdrop<br>Bloquea scroll body<br>Cierra: ESC, click overlay, botón | Usa JS: `modal.js`<br>Llamado por: Header CTA, Hero CTA, ProBono CTA, CTA section<br>Usado en: Home y Practice pages |

**Notas de Home:**
- Orden de secciones fijo en `index.astro` (líneas 18-56)
- Newsletter no está actualmente incluido en index.astro
- Modal es compartido globalmente (Home + Practice pages)

---

## 5. Componentes de Áreas de Práctica (Practice)

Componentes especializados para páginas de áreas de práctica individuales.

| Componente | Ubicación | Propósito | Props | Content Collection | Interactividad |
|------------|-----------|-----------|-------|-------------------|----------------|
| **PracticeBreadcrumbs.astro** | `/components/practice/` | Breadcrumb navigation: Inicio > Áreas de Práctica > [Área Actual] | `areaName: string` | N/A | Links clicables |
| **PracticeHero.astro** | `/components/practice/` | Hero de página de práctica: badge, H1, tagline, imagen opcional. Diseño similar a Hero principal pero simplificado. | `badge: string`<br>`h1: string`<br>`tagline: string`<br>`image?: string` | `practices/[slug]` | Estático |
| **PracticeTrustBar.astro** | `/components/practice/` | Barra horizontal de 3-4 métricas de confianza (ej: "15+ años", "100% confidencial"). | `items: TrustItem[]` | `practices/[slug].trust` | Estático |
| **PracticeTarget.astro** | `/components/practice/` | Sección "¿A quién va dirigido?". Grid de 3 tarjetas con público objetivo. | `items: TargetItem[]` | `practices/[slug].target` | Scroll animations |
| **PracticePainPoints.astro** | `/components/practice/` | Lista de pain points (problemas que resuelve). Diseño vertical con iconos de alerta. | `points: string[]` | `practices/[slug].painPoints` | Scroll animations |
| **PracticeObjective.astro** | `/components/practice/` | Objetivo del servicio + lista de compromisos. Diseño destacado con background sutil. | `text: string`<br>`commitments: string[]` | `practices/[slug].objective` | Estático |
| **PracticeResults.astro** | `/components/practice/` | Resultados esperados. Grid de 3 tarjetas con iconos, título y descripción. | `items: ResultItem[]` | `practices/[slug].results` | Scroll animations |
| **PracticeServicesIncluded.astro** | `/components/practice/` | Servicios incluidos. Grid de tarjetas con checklist visual. | `items: ServiceItem[]` | `practices/[slug].servicesIncluded` | Scroll animations |
| **PracticeProcess.astro** | `/components/practice/` | Proceso paso a paso. Timeline vertical numerada (1→2→3...). | `steps: ProcessStep[]` | `practices/[slug].process` | Scroll animations con timeline progress |
| **PracticeFAQ.astro** | `/components/practice/` | FAQ específico del área. Accordión similar al de Home pero con contenido específico. | `items: FAQItem[]`<br>`areaName: string` | `practices/[slug].faq` | Accordion toggle |
| **PracticeFinalCTA.astro** | `/components/practice/` | CTA final de la página de práctica. Headline + texto + botón para abrir modal. | `headline: string`<br>`text: string`<br>`button: string` | `practices/[slug].finalCta` | Abre Modal |

**Notas de Practice:**
- Estructura consistente entre todas las páginas de práctica
- Todas las practice pages reutilizan: Header, Footer, Modal, WhatsAppFloat, BackToTop
- Contenido 100% desde Content Collections (`practices/[slug].md`)
- **Áreas implementadas:** Defensa Estatutaria, Legado
- **Áreas pendientes:** Cliente Senior, Civil, Inmobiliaria, Copropiedad, Animalista, Capacitación

---

## 6. Componentes Utilitarios

Componentes reutilizables globales no específicos de una sección.

| Componente | Ubicación | Propósito | Props | Estado | Relaciones |
|------------|-----------|-----------|-------|--------|------------|
| **WhatsAppFloat.astro** | `/components/` | Botón flotante de WhatsApp en esquina inferior derecha. Fijo en viewport. | Ninguna | Fijo, siempre visible<br>Link directo a WhatsApp | Usado en: Home y todas las páginas de práctica |
| **BackToTop.astro** | `/components/` | Botón "volver arriba" que aparece después de scroll. Esquina inferior derecha. | Ninguna | Aparece después de scroll (threshold configurable)<br>Smooth scroll a top | Usa JS: `backToTop.js`<br>Usado en: Home y todas las páginas de práctica |

**Notas de Utilitarios:**
- Ambos componentes tienen posición fija y alto z-index
- Se incluyen en todas las páginas del sitio
- WhatsApp y BackToTop están apilados verticalmente en mobile

---

## 7. Content Collections

Sistema de gestión de contenido basado en Markdown + frontmatter YAML con validación de schemas Zod.

### Collections Implementadas

| Collection | Ubicación | Schema (Zod) | Propósito | Usado Por |
|------------|-----------|--------------|-----------|-----------|
| **home** | `/content/home/hero.md` | Badge, title (2 líneas), subtitle, 2 CTAs, trust items (4), floatingCards, scrollIndicator, images | Contenido del Hero principal | `Hero.astro` |
| **stats** | `/content/stats/home.md` | Array de stats: icon, target (number), label | Estadísticas animadas | `Stats.astro` |
| **trustBadges** | `/content/trustBadges/home.md` | Array de badges: icon, text | Badges de confianza | `TrustBadges.astro` |
| **areas** | `/content/areas/home.md` | sectionTitle, sectionSubtitle, array de areas (8): icon, title, description, link, image? | Grid de áreas de práctica | `AreasGrid.astro`, `MegaMenu.astro` |
| **benefits** | `/content/benefits/home.md` | sectionTitle, array de benefits (4): icon, title, text | Beneficios del estudio | `Benefits.astro` |
| **proBono** | `/content/proBono/home.md` | sectionTitle, subtitle, intro, criteriaTitle, criteria (5), CTA, visualCards (3) | Sección Pro Bono completa | `ProBono.astro` |
| **faq** | `/content/faq/home.md` | sectionTitle, subtitle, array de questions: id, question, answer | FAQ de Home | `FAQ.astro` |
| **newsletter** | `/content/newsletter/home.md` | title, subtitle, placeholder, buttonText, note | Newsletter signup | `Newsletter.astro` |
| **cta** | `/content/cta/home.md` | icon, title, subtitle, actions (primary + phone), features (4) | CTA final del Home | `CTA.astro` |
| **footer** | `/content/footer/home.md` | brand (title, description, rating, social), columns (areas, company, contact con schedule), trust, bottom, legal | Footer completo | `Footer.astro` |
| **modal** | `/content/modal/home.md` | title, proBonoNotice, fields (name, email, phone, area con options, message), submitButton | Modal de consulta | `Modal.astro` |
| **practices** | `/content/practices/*.md` | seo, hero, trust, target, painPoints, objective, results, servicesIncluded, process, faq, finalCta | Contenido completo de página de práctica | Páginas en `/pages/areas-practicas/*.astro` |

### Archivos de Práctica Implementados

| Archivo | Slug | Estado |
|---------|------|--------|
| `defensa-estatutaria.md` | `defensa-estatutaria` | ✅ Implementado |
| `legado.md` | `legado` | ✅ Implementado |

### Schema Global

Definido en: `/content/config.ts` (388 líneas)

**Validación con Zod:**
- Tipado estricto de todos los campos
- Campos requeridos vs opcionales
- Arrays con validación de estructura
- Exports centralizados en objeto `collections`

---

## 8. Diagrama de Relaciones

### Arquitectura de Páginas

```
BaseLayout (HTML + CSS + JS)
└── index.astro (Home)
    ├── Header
    │   ├── MegaMenu
    │   └── FullscreenMenu
    ├── Hero → Content: home/hero
    ├── Stats → Content: stats/home
    ├── TrustBadges → Content: trustBadges/home
    ├── AreasGrid → Content: areas/home
    ├── Benefits → Content: benefits/home
    ├── ProBono → Content: proBono/home
    ├── FAQ → Content: faq/home
    ├── CTA → Content: cta/home
    ├── Footer → Content: footer/home
    ├── Modal → Content: modal/home
    ├── WhatsAppFloat
    └── BackToTop

PracticeLayout (HTML + CSS + JS)
└── areas-practicas/[slug].astro
    ├── Header (reutilizado)
    │   ├── MegaMenu
    │   └── FullscreenMenu
    ├── PracticeBreadcrumbs
    ├── PracticeHero
    ├── PracticeTrustBar
    ├── PracticeTarget
    ├── PracticePainPoints
    ├── PracticeObjective
    ├── PracticeResults
    ├── PracticeServicesIncluded
    ├── PracticeProcess
    ├── PracticeFAQ
    ├── PracticeFinalCTA
    ├── Footer (reutilizado) → Content: footer/home
    ├── Modal (reutilizado) → Content: modal/home
    ├── WhatsAppFloat (reutilizado)
    └── BackToTop (reutilizado)
```

### Flujo de Interacción con Modal

```
Puntos de apertura del Modal:
1. Header → Botón "Agenda Ahora"
2. Hero → CTA Primario
3. ProBono → CTA
4. CTA Section → Botón principal
5. PracticeFinalCTA → Botón de área

Modal cierra con:
- Click en overlay (backdrop)
- Botón X
- Tecla ESC
- Submit de formulario (pendiente backend)
```

### Dependencias de JavaScript

```
/home/assets/js/
├── main.js (entry point)
├── config.js (constantes)
└── modules/
    ├── nav.js → Header scroll behavior
    ├── megaMenu.js → MegaMenu toggle
    ├── modal.js → Modal open/close
    ├── animations.js → Scroll animations (AreasGrid, etc.)
    ├── stats.js → Stats counter animation
    ├── faq.js → FAQ accordion
    ├── backToTop.js → BackToTop button
    ├── smoothScroll.js → Anchor smooth scroll
    ├── newsletter.js → Newsletter form
    └── utils.js → Utility functions
```

**Nota:** BaseLayout también incluye JavaScript inline para funcionalidad crítica de navegación (líneas 40-124).

---

## 📊 Estado de Implementación

### Páginas Completas
- ✅ Home (`/`)
- ✅ Defensa Estatutaria (`/areas-practicas/defensa-estatutaria`)
- ✅ Legado (`/areas-practicas/legado`)

### Páginas Pendientes
- ⏳ Índice de Áreas (`/areas-practicas/`)
- ⏳ Cliente Senior
- ⏳ Defensa Administrativa
- ⏳ Civil
- ⏳ Inmobiliaria y Copropiedad
- ⏳ Animalista
- ⏳ Capacitación
- ⏳ Design System (`/design-system`)

### Componentes Reutilizables
- ✅ Todos los componentes de navegación
- ✅ Todos los componentes de Home
- ✅ Todos los componentes de Practice
- ✅ Componentes utilitarios

### Content Collections
- ✅ 11/11 collections definidas con schemas Zod
- ✅ 13/13 archivos de contenido del Home
- ✅ 2/8 archivos de practices implementados
- ⏳ 6/8 archivos de practices pendientes

---

## 🎨 Convenciones de Diseño

### Sistema de Espaciado
Grid de 8pt: `--space-4` (1rem) hasta `--space-24` (6rem)

### Paleta de Colores
- **Primarios:** `--blue-primary`, `--blue-dark`, `--blue-deeper`
- **Acentos:** `--gold`, `--gold-light`, `--gold-dark`
- **Grises:** `--gray-50` hasta `--gray-900`

### Tipografía
- **Display:** Playfair Display (títulos, logo)
- **Sans:** Inter (texto body, UI)

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1199px
- Large Desktop: >= 1200px

### Animaciones
- **Fast:** 200ms (hover states)
- **Base:** 300ms (toggles, accordions)
- **Slow:** 600ms (page transitions)
- Curves: Material Design 3 (cubic-bezier)

---

## 🔄 Próximos Pasos de Desarrollo

### Prioridad Alta
1. Implementar las 6 páginas de práctica restantes
2. Crear página índice de `/areas-practicas/`
3. Conectar formularios a backend (Modal, Newsletter)

### Prioridad Media
4. Completar Design System
5. Agregar animaciones avanzadas
6. Optimización de imágenes (WebP, lazy loading)

### Prioridad Baja
7. Agregar más FAQs por área
8. Implementar blog
9. Agregar página "Quiénes Somos"
10. Agregar JSON-LD structured data

---

## 📝 Notas para Desarrollo

### Al Agregar una Nueva Área de Práctica:

1. **Content:** Crear `/content/practices/[slug].md` con todos los campos del schema
2. **Page:** Crear `/pages/areas-practicas/[slug].astro` (copiar estructura de defensa-estatutaria.astro)
3. **Navigation:** Actualizar links en:
   - `Header.astro`
   - `MegaMenu.astro` (mover de "próximamente" a activo)
   - `FullscreenMenu.astro`
   - `areas/home.md` (marcar como activo)
4. **Testing:** Validar todos los componentes de Practice se renderizan correctamente

### Al Modificar Contenido:
- Editar archivos `.md` en `/content/` - **NUNCA** modificar los componentes `.astro` directamente
- Schema validation automática via Zod en `config.ts`

### Al Agregar Nuevos Componentes:
1. Crear componente en carpeta apropiada (`/home/`, `/practice/`, `/nav/`)
2. Si requiere contenido → crear collection en `config.ts` + archivo `.md`
3. Importar y usar en página correspondiente
4. Actualizar esta documentación

---

**Última revisión:** 2026-01-18
**Mantenedor:** Claude Code
**Versión:** 1.0.0
