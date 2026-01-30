# Biblioteca de Componentes - Directorio SRC

**Fecha de última actualización:** 2026-01-30
**Estado del proyecto:** 90% completado
**Propósito:** Documentación viva que refleja el estado actual de implementación

---

## Tabla de Contenidos

1. [Layouts](#1-layouts)
2. [Páginas (Pages)](#2-páginas-pages)
3. [Componentes de Navegación (Nav)](#3-componentes-de-navegación-nav)
4. [Componentes del Home](#4-componentes-del-home)
5. [Componentes de Áreas de Práctica (Practice)](#5-componentes-de-áreas-de-práctica-practice)
6. [Componentes de About (Nosotros)](#6-componentes-de-about-nosotros)
7. [Componentes de Blog](#7-componentes-de-blog)
8. [Componentes Utilitarios](#8-componentes-utilitarios)
9. [Content Collections](#9-content-collections)
10. [Config y Utils](#10-config-y-utils)
11. [Estilos (Styles)](#11-estilos-styles)
12. [Diagrama de Relaciones](#12-diagrama-de-relaciones)

---

## 1. Layouts

Layouts base que definen la estructura HTML y cargan recursos globales.

| Componente | Ubicación | Propósito | Props |
|------------|-----------|-----------|-------|
| **BaseLayout.astro** | `/layouts/` | Layout principal para páginas del sitio. Define estructura HTML, carga fuentes, y CSS global. | `title?: string`, `description?: string` |
| **PracticeLayout.astro** | `/layouts/` | Layout especializado para páginas de áreas de práctica. Incluye meta tags para SEO y Open Graph. | `title: string`, `description: string`, `canonical?: string` |
| **AboutLayout.astro** | `/layouts/` | Layout para la página "Quiénes Somos". | `title: string`, `description: string` |
| **BlogLayout.astro** | `/layouts/` | Layout para páginas del blog. | `title: string`, `description: string` |

---

## 2. Páginas (Pages)

Rutas del sitio que ensamblan componentes.

| Página | Ruta URL | Propósito | Estado |
|--------|----------|-----------|--------|
| **index.astro** | `/` | Página principal del sitio | ✅ Completa |
| **nosotros.astro** | `/nosotros/` | Página "Quiénes Somos" | ✅ Completa |
| **design-system.astro** | `/design-system/` | Sistema de diseño / guía de estilo | ✅ Completa |

### Páginas de Blog

| Página | Ruta URL | Propósito | Estado |
|--------|----------|-----------|--------|
| **blog/index.astro** | `/blog/` | Listado de artículos del blog | ✅ Completa |
| **blog/[...slug].astro** | `/blog/[slug]` | Página individual de artículo | ✅ Completa |
| **blog/categoria/[categoria].astro** | `/blog/categoria/[cat]` | Filtrado por categoría | ✅ Completa |

### Páginas de Áreas de Práctica

| Página | Ruta URL | Estado |
|--------|----------|--------|
| **defensa-estatutaria.astro** | `/areas-practicas/defensa-estatutaria` | ✅ |
| **defensa-administrativa.astro** | `/areas-practicas/defensa-administrativa` | ✅ |
| **defensa-penal.astro** | `/areas-practicas/defensa-penal` | ✅ |
| **cliente-senior.astro** | `/areas-practicas/cliente-senior` | ✅ |
| **legado.astro** | `/areas-practicas/legado` | ✅ |
| **civil.astro** | `/areas-practicas/civil` | ✅ |
| **inmobiliaria-copropiedad.astro** | `/areas-practicas/inmobiliaria-copropiedad` | ✅ |
| **animalista.astro** | `/areas-practicas/animalista` | ✅ |
| **capacitacion.astro** | `/areas-practicas/capacitacion` | ✅ |
| **familia-menores.astro** | `/areas-practicas/familia-menores` | ✅ |

---

## 3. Componentes de Navegación (Nav)

| Componente | Ubicación | Propósito |
|------------|-----------|-----------|
| **Header.astro** | `/components/nav/` | Barra de navegación principal fija. Logo, menú desktop, botón hamburguesa mobile, CTA "Agenda Ahora". |
| **MegaMenu.astro** | `/components/nav/` | Mega menú desktop desplegable para "Áreas de Práctica". Grid de 4 columnas con áreas de práctica. |
| **FullscreenMenu.astro** | `/components/nav/` | Menú mobile fullscreen overlay. Navegación vertical animada con slide-in desde derecha. |

---

## 4. Componentes del Home

Componentes específicos de la página principal (`/`).

| Componente | Ubicación | Propósito | Content Collection |
|------------|-----------|-----------|-------------------|
| **Hero.astro** | `/components/` | Sección hero principal con badge, título, CTAs, trust items, imagen, orbes animados. | `home/hero` |
| **AboutPreview.astro** | `/components/home/` | Preview/resumen de la sección "Quiénes Somos" en el home. | `aboutPreview/home` |
| **AreasGrid.astro** | `/components/home/` | Grid de tarjetas de áreas de práctica con hover gradient. | `areas/home` |
| **Benefits.astro** | `/components/home/` | Beneficios del estudio en grid responsive. | `benefits/home` |
| **CTA.astro** | `/components/home/` | Call-to-Action final con gradient azul y botones. | `cta/home` |
| **FAQ.astro** | `/components/home/` | Accordión de preguntas frecuentes. | `faq/home` |
| **Footer.astro** | `/components/home/` | Footer completo de 4 columnas. Reutilizado en todas las páginas. | `footer/home` |
| **Modal.astro** | `/components/home/` | Modal de consulta con formulario. Reutilizado en todas las páginas. | `modal/home` |
| **Newsletter.astro** | `/components/home/` | Formulario de suscripción a newsletter. | `newsletter/home` |
| **ProBono.astro** | `/components/home/` | Sección Pro Bono con criterios de elegibilidad. | `proBono/home` |
| **Stats.astro** | `/components/home/` | Estadísticas animadas con contador incremental. | `stats/home` |
| **TrustBadges.astro** | `/components/home/` | Barra horizontal de badges de confianza. | `trustBadges/home` |

---

## 5. Componentes de Áreas de Práctica (Practice)

Componentes especializados para páginas de áreas de práctica individuales.

| Componente | Ubicación | Propósito |
|------------|-----------|-----------|
| **PracticeBreadcrumbs.astro** | `/components/practice/` | Breadcrumb navigation: Inicio > Áreas de Práctica > [Área Actual] |
| **PracticeHero.astro** | `/components/practice/` | Hero de página de práctica: badge, H1, tagline, imagen opcional. |
| **PracticeTrustBar.astro** | `/components/practice/` | Barra horizontal de métricas de confianza. |
| **PracticeTarget.astro** | `/components/practice/` | Sección "¿A quién va dirigido?" con grid de tarjetas. |
| **PracticePainPoints.astro** | `/components/practice/` | Lista de pain points (problemas que resuelve). |
| **PracticeObjective.astro** | `/components/practice/` | Objetivo del servicio + lista de compromisos. |
| **PracticeResults.astro** | `/components/practice/` | Resultados esperados en grid de tarjetas. |
| **PracticeServicesIncluded.astro** | `/components/practice/` | Servicios incluidos con checklist visual. |
| **PracticeProcess.astro** | `/components/practice/` | Proceso paso a paso con timeline vertical numerada. |
| **PracticeFAQ.astro** | `/components/practice/` | FAQ específico del área con accordión. |
| **PracticeFinalCTA.astro** | `/components/practice/` | CTA final de la página de práctica. |
| **PracticeContent.astro** | `/components/practice/` | Contenido principal/cuerpo de la página de práctica. |
| **PracticeRelatedServices.astro** | `/components/practice/` | Servicios relacionados / áreas de práctica vinculadas. |
| **PracticeTestimonials.astro** | `/components/practice/` | Testimonios específicos del área de práctica. |

---

## 6. Componentes de About (Nosotros)

Componentes para la página "Quiénes Somos" (`/nosotros/`).

| Componente | Ubicación | Propósito |
|------------|-----------|-----------|
| **AboutHero.astro** | `/components/about/` | Hero de la página nosotros. |
| **AboutFounderProfile.astro** | `/components/about/` | Perfil de la fundadora Jacqueline del Valle. |
| **AboutMission.astro** | `/components/about/` | Misión y valores del estudio. |
| **AboutTeam.astro** | `/components/about/` | Sección del equipo de trabajo. |
| **AboutTimeline.astro** | `/components/about/` | Timeline/hitos del estudio (componente Astro). |
| **AboutTimelineClient.tsx** | `/components/about/` | Timeline interactivo con animaciones (React + Framer Motion). |
| **TeamCard.tsx** | `/components/about/` | Tarjeta individual de miembro del equipo (React). |
| **AboutCTA.astro** | `/components/about/` | CTA de la página nosotros. |

---

## 7. Componentes de Blog

Componentes para el sistema de blog.

| Componente | Ubicación | Propósito |
|------------|-----------|-----------|
| **BlogHero.astro** | `/components/blog/` | Hero de la página de listado del blog. |
| **BlogBreadcrumbs.astro** | `/components/blog/` | Breadcrumbs para páginas del blog. |
| **BlogContent.astro** | `/components/blog/` | Renderizado del contenido del artículo. |
| **BlogAuthor.astro** | `/components/blog/` | Información del autor del artículo. |
| **BlogToC.astro** | `/components/blog/` | Tabla de contenidos del artículo. |
| **BlogShare.astro** | `/components/blog/` | Botones para compartir el artículo en redes sociales. |
| **BlogRelated.astro** | `/components/blog/` | Artículos relacionados al final del post. |
| **BlogCTA.astro** | `/components/blog/` | CTA dentro de artículos del blog. |
| **BlogProgress.astro** | `/components/blog/` | Barra de progreso de lectura del artículo. |

---

## 8. Componentes Utilitarios

Componentes reutilizables globales.

| Componente | Ubicación | Propósito |
|------------|-----------|-----------|
| **WhatsAppFloat.astro** | `/components/` | Botón flotante de WhatsApp en esquina inferior derecha. Fijo en viewport. |
| **BackToTop.astro** | `/components/` | Botón "volver arriba" que aparece después de scroll. |

---

## 9. Content Collections

Sistema de gestión de contenido basado en Markdown + frontmatter YAML con validación de schemas Zod.

**Schema global definido en:** `/content/config.ts`

### Collections del Home

| Collection | Ubicación | Usado Por |
|------------|-----------|-----------|
| **home** | `/content/home/hero.md` | `Hero.astro` |
| **stats** | `/content/stats/home.md` | `Stats.astro` |
| **trustBadges** | `/content/trustBadges/home.md` | `TrustBadges.astro` |
| **areas** | `/content/areas/home.md` | `AreasGrid.astro`, `MegaMenu.astro` |
| **benefits** | `/content/benefits/home.md` | `Benefits.astro` |
| **proBono** | `/content/proBono/home.md` | `ProBono.astro` |
| **faq** | `/content/faq/home.md` | `FAQ.astro` |
| **newsletter** | `/content/newsletter/home.md` | `Newsletter.astro` |
| **cta** | `/content/cta/home.md` | `CTA.astro` |
| **footer** | `/content/footer/home.md` | `Footer.astro` |
| **modal** | `/content/modal/home.md` | `Modal.astro` |
| **aboutPreview** | `/content/aboutPreview/home.md` | `AboutPreview.astro` |

### Collections de About

| Collection | Ubicación | Usado Por |
|------------|-----------|-----------|
| **about** | `/content/about/main.md` | Componentes de About |
| **team** | `/content/team/*.md` (4 miembros) | `AboutTeam.astro`, `TeamCard.tsx` |

Miembros del equipo: `jacqueline.md`, `pablo.md`, `alonso.md`, `maria-alejandra.md`

### Collections de Blog

| Collection | Ubicación | Artículos |
|------------|-----------|-----------|
| **blog** | `/content/blog/*.md` | 3 artículos publicados |

Artículos:
- `2026-01-01-bienvenida-jdv-abogados.md`
- `2026-01-15-sumario-administrativo-guia-practica.md`
- `2026-01-20-dictamen-cgr-responsabilidad-administrativa.md`

### Collections de Practices

| Archivo | Slug | Estado |
|---------|------|--------|
| `defensa-estatutaria.md` | `defensa-estatutaria` | ✅ |
| `defensa-administrativa.md` | `defensa-administrativa` | ✅ |
| `defensa-penal.md` | `defensa-penal` | ✅ |
| `cliente-senior.md` | `cliente-senior` | ✅ |
| `legado.md` | `legado` | ✅ |
| `civil.md` | `civil` | ✅ |
| `inmobiliaria-copropiedad.md` | `inmobiliaria-copropiedad` | ✅ |
| `animalista.md` | `animalista` | ✅ |
| `capacitacion.md` | `capacitacion` | ✅ |
| `familia-menores.md` | `familia-menores` | ✅ |

---

## 10. Config y Utils

| Archivo | Ubicación | Propósito |
|---------|-----------|-----------|
| **cta.ts** | `/config/` | Configuración centralizada de CTAs del sitio. |
| **blog.ts** | `/utils/` | Utilidades para el sistema de blog (filtrado, ordenamiento, etc.). |

---

## 11. Estilos (Styles)

| Archivo | Ubicación | Propósito |
|---------|-----------|-----------|
| **global.css** | `/styles/` | Estilos globales del sitio. |
| **tailwind.css** | `/styles/` | Punto de entrada de Tailwind CSS. |
| **practice-animations.css** | `/styles/` | Animaciones específicas de páginas de práctica. |
| **practice-colors.css** | `/styles/` | Paleta de colores para páginas de práctica. |

---

## 12. Diagrama de Relaciones

### Arquitectura de Páginas

```
BaseLayout (HTML + CSS + JS)
├── index.astro (Home)
│   ├── Header
│   │   ├── MegaMenu
│   │   └── FullscreenMenu
│   ├── Hero → Content: home/hero
│   ├── Stats → Content: stats/home
│   ├── TrustBadges → Content: trustBadges/home
│   ├── AreasGrid → Content: areas/home
│   ├── AboutPreview → Content: aboutPreview/home
│   ├── Benefits → Content: benefits/home
│   ├── ProBono → Content: proBono/home
│   ├── FAQ → Content: faq/home
│   ├── CTA → Content: cta/home
│   ├── Footer → Content: footer/home
│   ├── Modal → Content: modal/home
│   ├── WhatsAppFloat
│   └── BackToTop
│
├── nosotros.astro (About)
│   ├── Header (reutilizado)
│   ├── AboutHero
│   ├── AboutFounderProfile
│   ├── AboutMission
│   ├── AboutTimeline / AboutTimelineClient
│   ├── AboutTeam → Content: team/*
│   ├── AboutCTA
│   ├── Footer (reutilizado)
│   ├── Modal (reutilizado)
│   ├── WhatsAppFloat
│   └── BackToTop
│
├── blog/index.astro (Blog Listing)
│   └── blog/[...slug].astro (Blog Post)
│       ├── BlogBreadcrumbs
│       ├── BlogHero
│       ├── BlogProgress
│       ├── BlogToC
│       ├── BlogContent
│       ├── BlogAuthor
│       ├── BlogShare
│       ├── BlogRelated
│       └── BlogCTA

PracticeLayout (HTML + CSS + JS)
└── areas-practicas/[slug].astro
    ├── Header (reutilizado)
    ├── PracticeBreadcrumbs
    ├── PracticeHero
    ├── PracticeTrustBar
    ├── PracticeTarget
    ├── PracticePainPoints
    ├── PracticeObjective
    ├── PracticeResults
    ├── PracticeServicesIncluded
    ├── PracticeProcess
    ├── PracticeContent
    ├── PracticeTestimonials
    ├── PracticeRelatedServices
    ├── PracticeFAQ
    ├── PracticeFinalCTA
    ├── Footer (reutilizado)
    ├── Modal (reutilizado)
    ├── WhatsAppFloat
    └── BackToTop
```

### Flujo de Interacción con Modal

```
Puntos de apertura del Modal:
1. Header → Botón "Agenda Ahora"
2. Hero → CTA Primario
3. ProBono → CTA
4. CTA Section → Botón principal
5. PracticeFinalCTA → Botón de área
6. AboutCTA → Botón de contacto

Modal cierra con:
- Click en overlay (backdrop)
- Botón X
- Tecla ESC
```

---

## Estado de Implementación

### Páginas Completas
- ✅ Home (`/`)
- ✅ Nosotros (`/nosotros/`)
- ✅ Blog (`/blog/`) + 3 artículos
- ✅ Design System (`/design-system/`)
- ✅ 10 Áreas de Práctica (todas implementadas)

### Pendientes de Implementación
- ⏳ Contacto (`/contacto/`) - Página de contacto con formulario
- ⏳ Conexión de formularios a backend (Modal, Newsletter, Contacto)
- ⏳ Índice de Áreas de Práctica (`/areas-practicas/`)

### Content Collections
- ✅ Todas las collections definidas con schemas Zod
- ✅ Contenido del Home completo
- ✅ 10/10 archivos de practices implementados
- ✅ 3 artículos de blog publicados
- ✅ 4 miembros del equipo documentados
- ✅ Contenido de About completo

---

## Convenciones de Diseño

### Paleta de Colores
- **Primarios:** `--blue-primary`, `--blue-dark`, `--blue-deeper`
- **Acentos:** `--gold`, `--gold-light`, `--gold-dark`
- **Grises:** `--gray-50` hasta `--gray-900`

### Tipografía
- **Display:** Fraunces (títulos, logo)
- **Sans:** Inter (texto body, UI)

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1199px
- Large Desktop: >= 1200px

---

## Notas para Desarrollo

### Al Agregar una Nueva Área de Práctica:
1. **Content:** Crear `/content/practices/[slug].md`
2. **Page:** Crear `/pages/areas-practicas/[slug].astro`
3. **Navigation:** Actualizar links en `Header.astro`, `MegaMenu.astro`, `FullscreenMenu.astro`
4. Seguir la Guía Editorial en `docs/MANUAL_AREAS_PRACTICA.md`

### Al Agregar un Artículo de Blog:
1. Crear `/content/blog/YYYY-MM-DD-titulo-del-articulo.md` con frontmatter
2. La página se genera automáticamente via `[...slug].astro`

### Al Modificar Contenido:
- Editar archivos `.md` en `/content/` - **NUNCA** modificar los componentes `.astro` directamente
- Schema validation automática via Zod en `config.ts`

---

**Última revisión:** 2026-01-30
**Mantenedor:** Claude Code
**Versión:** 2.0.0
