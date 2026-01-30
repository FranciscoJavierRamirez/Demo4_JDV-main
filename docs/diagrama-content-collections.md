# Diagrama de Content Collections - JDV Abogados

**Fecha:** 2026-01-30

---

## 1. Mapa General de Collections

```
src/content/
│
├── config.ts ◄──── Schemas Zod (validación de tipos)
│
├── home/
│   └── hero.md ──────────────► Hero.astro
│
├── aboutPreview/
│   └── home.md ──────────────► AboutPreview.astro
│
├── stats/
│   └── home.md ──────────────► Stats.astro
│
├── trustBadges/
│   └── home.md ──────────────► TrustBadges.astro
│
├── areas/
│   └── home.md ──────────────► AreasGrid.astro
│                               MegaMenu.astro
│
├── benefits/
│   └── home.md ──────────────► Benefits.astro
│
├── proBono/
│   └── home.md ──────────────► ProBono.astro
│
├── faq/
│   └── home.md ──────────────► FAQ.astro
│
├── cta/
│   └── home.md ──────────────► CTA.astro
│
├── newsletter/
│   └── home.md ──────────────► Newsletter.astro
│
├── footer/
│   └── home.md ──────────────► Footer.astro (global)
│
├── modal/
│   └── home.md ──────────────► Modal.astro (global)
│
├── about/
│   └── main.md ──────────────► nosotros.astro
│                               ├► AboutHero
│                               ├► AboutMission
│                               ├► AboutFounderProfile
│                               ├► AboutTimeline
│                               ├► AboutTeam
│                               └► AboutCTA
│
├── team/
│   ├── jacqueline.md ────────► AboutTeam.astro
│   ├── pablo.md                 └► TeamCard.tsx
│   ├── alonso.md
│   └── maria-alejandra.md
│
├── blog/
│   ├── 2026-01-01-bienvenida-jdv-abogados.md
│   ├── 2026-01-15-sumario-administrativo-guia-practica.md
│   └── 2026-01-20-dictamen-cgr-responsabilidad-administrativa.md
│                    │
│                    ├────────► blog/index.astro
│                    ├────────► blog/[...slug].astro
│                    └────────► blog/categoria/[categoria].astro
│
└── practices/
    ├── defensa-estatutaria.md
    ├── defensa-administrativa.md
    ├── defensa-penal.md
    ├── cliente-senior.md
    ├── legado.md
    ├── civil.md
    ├── inmobiliaria-copropiedad.md
    ├── animalista.md
    ├── capacitacion.md
    └── familia-menores.md
                     │
                     └────────► areas-practicas/[slug].astro
                                ├► PracticeHero
                                ├► PracticeTrustBar
                                ├► PracticeTarget
                                ├► PracticePainPoints
                                ├► PracticeObjective
                                ├► PracticeResults
                                ├► PracticeServicesIncluded
                                ├► PracticeProcess
                                ├► PracticeContent
                                ├► PracticeFAQ
                                ├► PracticeTestimonials
                                ├► PracticeRelatedServices
                                └► PracticeFinalCTA
```

---

## 2. Estructura de Datos por Collection

### Home Hero

```
hero.md
├── badge: string
├── title
│   ├── line1: string
│   └── line2: string
├── subtitle: string
├── ctas[]
│   ├── text: string
│   ├── type: "primary" | "secondary"
│   └── action: string
├── trustItems[]
│   ├── icon: string
│   └── text: string
├── floatingCards[]
├── scrollIndicator
│   └── text: string
└── images
    ├── hero: string
    └── person: string
```

### Practice Area

```
[slug].md
├── seo
│   ├── title: string (50-60 chars)
│   └── description: string (140-160 chars)
├── hero
│   ├── badge: string
│   ├── h1: string
│   ├── tagline: string
│   └── image?: string
├── trust[]
│   ├── icon: string
│   ├── value: string
│   └── label: string
├── target[]
│   ├── icon: string
│   ├── title: string
│   └── description: string
├── painPoints[]
│   └── string
├── objective
│   ├── text: string
│   └── commitments[]
├── results[]
│   ├── icon: string
│   ├── title: string
│   └── description: string
├── servicesIncluded[]
│   ├── title: string
│   └── items[]
├── process[]
│   ├── step: number
│   ├── title: string
│   └── description: string
├── faq[]
│   ├── question: string
│   └── answer: string
├── testimonials[]? (opcional)
├── relatedServices[]? (opcional)
└── finalCta
    ├── headline: string
    ├── text: string
    └── button: string
```

### Blog Post

```
YYYY-MM-DD-titulo.md
├── title: string
├── excerpt: string
├── publishDate: date
├── author: string (ref team)
├── category: string
├── tags: string[]
├── image?: string
├── featured?: boolean
├── draft?: boolean
├── showCtaInicio?: boolean
├── showCtaMedio?: boolean
├── showCtaFinal?: boolean
└── body: Markdown (renderizado)
```

### About

```
main.md
├── seo
│   ├── title: string
│   └── description: string
├── hero
│   ├── badge: string
│   ├── title: string
│   ├── subtitle: string
│   ├── foundationText: string
│   ├── stats[]
│   ├── cta
│   └── image: string
├── mission
│   ├── title: string
│   └── text: string
├── vision
│   ├── title: string
│   └── text: string
├── values[]
│   ├── icon: string
│   ├── title: string
│   └── description: string
├── founderProfile?
│   ├── name: string
│   ├── title: string
│   ├── bio: string
│   └── image: string
├── timeline[]
│   ├── year: string
│   ├── title: string
│   └── description: string
├── team
│   ├── title: string
│   └── subtitle: string
└── cta
    ├── title: string
    ├── text: string
    └── button: string
```

### Team Member

```
[nombre].md
├── name: string
├── role: string
├── bio: string
├── image?: string
├── specialties: string[]
├── education: string[]
└── order: number
```

---

## 3. Relación Collection → Componente → Página

```
┌─────────────┐    getEntry()    ┌──────────────┐    import    ┌──────────┐
│   .md file  │ ──────────────► │  Component   │ ◄────────── │   Page   │
│  (content)  │                 │   (.astro)   │             │ (.astro) │
└─────────────┘                 └──────────────┘             └──────────┘

Estrategia A: Componente autónomo (Home)
─────────────────────────────────────────
  hero.md ──► Hero.astro ◄── index.astro
              (getEntry interno)

Estrategia B: Props drilling (About, Practice)
──────────────────────────────────────────────
  main.md ──► nosotros.astro ──► AboutHero
              (getEntry)    ──► AboutMission
                            ──► AboutTeam

Estrategia C: Utils + inline (Blog)
────────────────────────────────────
  blog/*.md ──► utils/blog.ts ──► blog/index.astro
                (getPublishedPosts)   (HTML inline)
```
