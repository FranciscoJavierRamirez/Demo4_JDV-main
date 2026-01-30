# Diagrama de Arquitectura - JDV Abogados

**Fecha:** 2026-01-30

---

## 1. Jerarquía de Layouts

```mermaid
graph TD
    BL["BaseLayout<br/>(HTML base, fuentes, CSS global, JS nav)"]
    PL["PracticeLayout<br/>(+ practice-colors.css<br/>+ practice-animations.css)"]
    AL["AboutLayout<br/>(wrapper simple)"]
    BLL["BlogLayout<br/>(standalone, HTML propio)"]

    BL --> PL
    BL --> AL
    BLL -. "NO extiende BaseLayout<br/>(implementación independiente)" .-> BLL

    style BL fill:#1e3a5f,color:#fff
    style PL fill:#2d5a8e,color:#fff
    style AL fill:#2d5a8e,color:#fff
    style BLL fill:#8b4513,color:#fff
```

---

## 2. Mapa de Páginas y Componentes

### Home (`/`)

```mermaid
graph TD
    subgraph "BaseLayout"
        INDEX["index.astro<br/>/"]
    end

    INDEX --> Header
    Header --> MegaMenu
    Header --> FullscreenMenu
    INDEX --> Hero
    INDEX --> AboutPreview
    INDEX --> Stats
    INDEX --> TrustBadges
    INDEX --> AreasGrid
    INDEX --> Benefits
    INDEX --> ProBono
    INDEX --> FAQ
    INDEX --> CTA
    INDEX --> Footer
    INDEX --> Modal
    INDEX --> WhatsAppFloat
    INDEX --> BackToTop

    style INDEX fill:#1e3a5f,color:#fff
    style Header fill:#2d5a8e,color:#fff
    style MegaMenu fill:#3a7cc0,color:#fff
    style FullscreenMenu fill:#3a7cc0,color:#fff
    style Modal fill:#8b4513,color:#fff
```

### Nosotros (`/nosotros/`)

```mermaid
graph TD
    subgraph "AboutLayout > BaseLayout"
        NOS["nosotros.astro<br/>/nosotros/"]
    end

    CC[("about/main.md<br/>(Content Collection)")] --> NOS

    NOS --> Header
    NOS --> AboutHero
    NOS --> AboutMission
    NOS --> AboutFounderProfile["AboutFounderProfile<br/>(condicional)"]
    NOS --> AboutTimeline
    NOS --> AboutTeam
    AboutTeam --> TeamCard["TeamCard.tsx<br/>(React)"]
    NOS --> AboutCTA
    NOS --> Footer
    NOS --> WhatsAppFloat
    NOS --> BackToTop

    style NOS fill:#1e3a5f,color:#fff
    style CC fill:#2e7d32,color:#fff
    style TeamCard fill:#7b1fa2,color:#fff
```

### Blog Artículo (`/blog/[slug]`)

```mermaid
graph TD
    subgraph "BlogLayout (standalone)"
        SLUG["blog/...slug.astro<br/>/blog/slug"]
    end

    CC[("blog/slug.md<br/>render()")] --> SLUG
    UTILS["utils/blog.ts<br/>shouldPublish()<br/>calculateReadingTime()<br/>getRelatedPosts()"] --> SLUG

    SLUG --> BlogProgress
    SLUG --> Header
    SLUG --> BlogBreadcrumbs
    SLUG --> BlogHero
    SLUG --> BlogToC["BlogToC<br/>(desktop + mobile)"]
    SLUG --> BlogCTA1["BlogCTA<br/>(inicio, condicional)"]
    SLUG --> BlogContent["BlogContent<br/>(Markdown renderizado)"]
    SLUG --> BlogCTA2["BlogCTA<br/>(medio, condicional)"]
    SLUG --> BlogAuthor
    SLUG --> BlogShare
    SLUG --> BlogCTA3["BlogCTA<br/>(final, condicional)"]
    SLUG --> BlogRelated
    SLUG --> Footer
    SLUG --> WhatsAppFloat
    SLUG --> BackToTop
    SLUG --> JSONLD["JSON-LD<br/>schema.org"]

    style SLUG fill:#8b4513,color:#fff
    style CC fill:#2e7d32,color:#fff
    style UTILS fill:#e65100,color:#fff
    style JSONLD fill:#616161,color:#fff
```

### Blog Listado (`/blog/`) y Categoría (`/blog/categoria/[cat]`)

```mermaid
graph TD
    subgraph "BaseLayout"
        BLOG["blog/index.astro<br/>/blog/"]
        CAT["blog/categoria/categoria.astro<br/>/blog/categoria/cat"]
    end

    CC[("blog/*.md<br/>(Content Collection)")] --> UTILS
    UTILS["utils/blog.ts<br/>getPublishedPosts()<br/>getFeaturedPosts()<br/>getCategoriesWithCount()<br/>getPostsByCategory()"] --> BLOG
    UTILS --> CAT

    BLOG --> Header1[Header]
    BLOG --> HeroInline["Hero section (inline)"]
    BLOG --> CatFilter["Categories filter (inline)"]
    BLOG --> Featured["Featured post (inline)"]
    BLOG --> PostsGrid["Posts grid (inline)"]
    BLOG --> Pagination["Pagination (inline)"]
    BLOG --> Footer1[Footer]
    BLOG --> WA1[WhatsAppFloat]
    BLOG --> BT1[BackToTop]

    CAT --> Header2[Header]
    CAT --> CatFilter2["Categories filter (inline)"]
    CAT --> PostsGrid2["Posts grid (inline)"]
    CAT --> Footer2[Footer]
    CAT --> WA2[WhatsAppFloat]
    CAT --> BT2[BackToTop]

    style BLOG fill:#1e3a5f,color:#fff
    style CAT fill:#1e3a5f,color:#fff
    style CC fill:#2e7d32,color:#fff
    style UTILS fill:#e65100,color:#fff
```

### Área de Práctica (`/areas-practicas/[slug]`)

```mermaid
graph TD
    subgraph "PracticeLayout > BaseLayout"
        PRAC["areas-practicas/slug.astro"]
    end

    CC[("practices/slug.md<br/>render()")] --> PRAC

    PRAC --> Header
    PRAC --> PracticeBreadcrumbs
    PRAC --> PracticeHero
    PRAC --> PracticeTrustBar
    PRAC --> PracticeTarget
    PRAC --> PracticePainPoints
    PRAC --> PracticeObjective
    PRAC --> PracticeResults
    PRAC --> PracticeServicesIncluded
    PRAC --> PracticeProcess
    PRAC --> PracticeContent["PracticeContent<br/>(Markdown renderizado)"]
    PRAC --> PracticeFAQ
    PRAC --> PracticeTestimonials
    PRAC --> PracticeRelatedServices
    PRAC --> PracticeFinalCTA
    PRAC --> Footer
    PRAC --> Modal
    PRAC --> WhatsAppFloat
    PRAC --> BackToTop

    style PRAC fill:#2d5a8e,color:#fff
    style CC fill:#2e7d32,color:#fff
    style Modal fill:#8b4513,color:#fff
```

---

## 3. Componentes Compartidos entre Páginas

```mermaid
graph LR
    subgraph "Componentes Globales"
        Header
        Footer
        WhatsAppFloat
        BackToTop
    end

    subgraph "Componentes Selectivos"
        Modal
    end

    Header --> Home
    Header --> About[Nosotros]
    Header --> Blog
    Header --> Practice[Practice]

    Footer --> Home
    Footer --> About
    Footer --> Blog
    Footer --> Practice

    WhatsAppFloat --> Home
    WhatsAppFloat --> About
    WhatsAppFloat --> Blog
    WhatsAppFloat --> Practice

    BackToTop --> Home
    BackToTop --> About
    BackToTop --> Blog
    BackToTop --> Practice

    Modal --> Home
    Modal --> Practice
    Modal -. "NO usado" .-> About
    Modal -. "NO usado" .-> Blog

    style Home fill:#1e3a5f,color:#fff
    style About fill:#1e3a5f,color:#fff
    style Blog fill:#8b4513,color:#fff
    style Practice fill:#2d5a8e,color:#fff
    style Modal fill:#c62828,color:#fff
```

---

## 4. Flujo de Datos: Content Collections

```mermaid
graph TD
    CONFIG["content/config.ts<br/>(Schemas Zod)"] --> COLLECTIONS

    subgraph COLLECTIONS["Content Collections"]
        direction LR
        subgraph "Home (12 collections)"
            H1[home/hero.md]
            H2[stats/home.md]
            H3[trustBadges/home.md]
            H4[areas/home.md]
            H5[aboutPreview/home.md]
            H6[benefits/home.md]
            H7[proBono/home.md]
            H8[faq/home.md]
            H9[cta/home.md]
            H10[newsletter/home.md]
            H11[footer/home.md]
            H12[modal/home.md]
        end
        subgraph "About"
            A1[about/main.md]
            A2["team/*.md (4)"]
        end
        subgraph "Blog"
            B1["blog/*.md (3)"]
        end
        subgraph "Practices"
            P1["practices/*.md (10)"]
        end
    end

    subgraph ESTRATEGIAS["Estrategia de Fetch"]
        EA["A: Componente autonomo<br/>Cada componente hace getEntry()"]
        EB["B: Props drilling<br/>Pagina hace getEntry(), pasa props"]
        EC["C: Utils + inline<br/>Pagina usa utils/blog.ts"]
    end

    H1 --> EA
    EA --> |"Home"| PAGES1["index.astro"]
    A1 --> EB
    P1 --> EB
    EB --> |"About, Practice"| PAGES2["nosotros.astro<br/>areas-practicas/*.astro"]
    B1 --> EC
    EC --> |"Blog"| PAGES3["blog/*.astro"]

    style CONFIG fill:#e65100,color:#fff
    style EA fill:#1565c0,color:#fff
    style EB fill:#2e7d32,color:#fff
    style EC fill:#7b1fa2,color:#fff
```

---

## 5. Navegación e Interacciones JavaScript

```mermaid
graph TD
    subgraph "JavaScript de Navegacion (inline en BaseLayout y BlogLayout)"
        SCROLL["Scroll Behavior<br/>.scrolled class en #mainNav<br/>despues de 100px"]
        MEGA["Mega Menu<br/>Toggle via #areasToggle<br/>ARIA attributes<br/>Cierra: click outside, ESC"]
        MOBILE["Mobile Menu<br/>Toggle via #navTogglePremium<br/>Body scroll lock<br/>Cierra: click en link, ESC"]
    end

    subgraph "Modal (componente)"
        OPEN["Abierto por"]
        CLOSE["Cerrado por"]

        OPEN --> O1["Header: Agenda Ahora"]
        OPEN --> O2["Hero: CTA primario"]
        OPEN --> O3["ProBono: CTA"]
        OPEN --> O4["CTA section: boton"]
        OPEN --> O5["PracticeFinalCTA: boton"]

        CLOSE --> C1["Click en overlay"]
        CLOSE --> C2["Boton X"]
        CLOSE --> C3["Tecla ESC"]
    end

    style SCROLL fill:#1565c0,color:#fff
    style MEGA fill:#1565c0,color:#fff
    style MOBILE fill:#1565c0,color:#fff
    style OPEN fill:#2e7d32,color:#fff
    style CLOSE fill:#c62828,color:#fff
```

---

## 6. Estilos y CSS

```mermaid
graph TD
    subgraph "src/styles/"
        GC["global.css"]
        TW["tailwind.css"]
        PC["practice-colors.css"]
        PA["practice-animations.css"]
    end

    BL["BaseLayout"] --> GC
    BL --> TW
    BLL["BlogLayout"] --> GC
    BLL --> TW
    PL["PracticeLayout"] --> PC
    PL --> PA
    PL --> |"hereda via BaseLayout"| GC

    style GC fill:#1565c0,color:#fff
    style TW fill:#1565c0,color:#fff
    style PC fill:#2d5a8e,color:#fff
    style PA fill:#2d5a8e,color:#fff
```

---

## 7. Tecnologías por Componente

```mermaid
graph TD
    subgraph "Astro Components (.astro) - 48 componentes"
        ASTRO["Server-side rendering<br/>Zero JS por defecto"]
    end

    subgraph "React Components (.tsx) - 2 componentes"
        REACT["AboutTimelineClient.tsx → client:visible<br/>TeamCard.tsx → Framer Motion"]
    end

    subgraph "Utilities (.ts)"
        UT1["config/cta.ts → Configuracion CTAs"]
        UT2["utils/blog.ts → Filtrado, fechas, reading time"]
    end

    ASTRO --> |"Island Architecture"| REACT
    ASTRO --> |"importa"| UT1
    ASTRO --> |"importa"| UT2

    style ASTRO fill:#1e3a5f,color:#fff
    style REACT fill:#7b1fa2,color:#fff
    style UT1 fill:#e65100,color:#fff
    style UT2 fill:#e65100,color:#fff
```
