# Diagrama de Rutas y Navegación - JDV Abogados

**Fecha:** 2026-01-30

---

## 1. Mapa de Rutas del Sitio

```
/
├── / ──────────────────────────── Home
├── /nosotros/ ─────────────────── Quiénes Somos
├── /design-system/ ────────────── Design System (referencia)
│
├── /blog/ ─────────────────────── Blog (listado)
│   ├── /blog/[slug] ──────────── Artículo individual
│   └── /blog/categoria/[cat] ── Filtro por categoría
│
└── /areas-practicas/
    ├── /areas-practicas/defensa-estatutaria
    ├── /areas-practicas/defensa-administrativa
    ├── /areas-practicas/defensa-penal
    ├── /areas-practicas/cliente-senior
    ├── /areas-practicas/legado
    ├── /areas-practicas/civil
    ├── /areas-practicas/inmobiliaria-copropiedad
    ├── /areas-practicas/animalista
    ├── /areas-practicas/capacitacion
    └── /areas-practicas/familia-menores
```

---

## 2. Flujo de Navegación del Usuario

```
                         ┌──────────┐
                         │   Home   │
                         │    /     │
                         └────┬─────┘
                              │
            ┌─────────────────┼─────────────────┐
            │                 │                  │
            ▼                 ▼                  ▼
     ┌──────────┐     ┌──────────────┐    ┌──────────┐
     │ Nosotros │     │    Blog      │    │  Áreas   │
     │/nosotros │     │   /blog/     │    │Práctica  │
     └──────────┘     └──────┬───────┘    └────┬─────┘
                             │                  │
                    ┌────────┼────────┐         │
                    │        │        │    ┌────┴─────────────┐
                    ▼        ▼        ▼    │  10 áreas        │
              ┌────────┐ ┌──────┐ ┌─────┐ │  individuales    │
              │Artículo│ │Categ.│ │Categ│ │                  │
              │ [slug] │ │ [A]  │ │ [B] │ │ Defensa Estat.   │
              └────────┘ └──────┘ └─────┘ │ Defensa Admin.   │
                                          │ Defensa Penal    │
                                          │ Cliente Senior   │
                                          │ Legado           │
                                          │ Civil            │
                                          │ Inmobiliaria     │
                                          │ Animalista       │
                                          │ Capacitación     │
                                          │ Familia/Menores  │
                                          └──────────────────┘
```

---

## 3. Navegación Principal (Header)

```
┌────────────────────────────────────────────────────────────┐
│  HEADER (sticky, z-1000)                                    │
│                                                             │
│  Desktop (>= 1024px):                                       │
│  ┌──────┐  ┌──────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │ Logo │  │Inicio│  │Áreas de Práctica│  │ Agenda Ahora │ │
│  │      │  │      │  │   (MegaMenu)    │  │   (Modal)    │ │
│  └──────┘  └──────┘  └────────┬────────┘  └─────────────┘ │
│                                │                            │
│                    ┌───────────▼───────────┐                │
│                    │      MegaMenu         │                │
│                    │  Grid 4 columnas      │                │
│                    │  10 áreas de práctica │                │
│                    └───────────────────────┘                │
│                                                             │
│  Mobile (< 1024px):                                         │
│  ┌──────┐                           ┌───┐                  │
│  │ Logo │                           │ ☰ │                  │
│  └──────┘                           └─┬─┘                  │
│                                       │                     │
│                          ┌────────────▼──────────────┐      │
│                          │    FullscreenMenu         │      │
│                          │    Overlay completo       │      │
│                          │    ├── Inicio             │      │
│                          │    ├── Áreas de Práctica  │      │
│                          │    │   └── 10 áreas       │      │
│                          │    ├── Nosotros           │      │
│                          │    ├── Blog               │      │
│                          │    └── Agenda Ahora       │      │
│                          └───────────────────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Breadcrumbs por Sección

```
Practice pages:
  Inicio  >  Áreas de Práctica  >  [Nombre del Área]

Blog post:
  Inicio  >  Blog  >  [Título del Artículo]

Blog categoría:
  Inicio  >  Blog  >  Categoría: [Nombre]
```

---

## 5. CTAs y Puntos de Conversión

```
┌──────────────────────────────────────────────────┐
│              Puntos de Conversión                  │
├──────────────────────────────────────────────────┤
│                                                    │
│  MODAL (formulario de consulta):                   │
│  ├── Header → "Agenda Ahora" (todas las páginas)  │
│  ├── Hero → CTA primario (home)                   │
│  ├── ProBono → CTA (home)                         │
│  ├── CTA section → botón (home)                   │
│  └── PracticeFinalCTA → botón (practice pages)    │
│                                                    │
│  WHATSAPP (botón flotante):                        │
│  └── Presente en todas las páginas                 │
│                                                    │
│  TELÉFONO:                                         │
│  └── CTA section → link tel: (home)               │
│                                                    │
│  BLOG CTAs:                                        │
│  ├── Inicio del artículo (condicional)             │
│  ├── Mitad del artículo (condicional)              │
│  └── Final del artículo (condicional)              │
│                                                    │
└──────────────────────────────────────────────────┘
```

---

## 6. Generación de Rutas Dinámicas

```
Rutas estáticas (archivos .astro directos):
  /                     → pages/index.astro
  /nosotros             → pages/nosotros.astro
  /design-system        → pages/design-system.astro
  /blog                 → pages/blog/index.astro
  /areas-practicas/*    → pages/areas-practicas/*.astro (10 archivos)

Rutas dinámicas (getStaticPaths):
  /blog/[slug]          → pages/blog/[...slug].astro
                          Genera rutas desde: blog collection
                          Filtro: shouldPublish()

  /blog/categoria/[cat] → pages/blog/categoria/[categoria].astro
                          Genera rutas desde: categoryLabels keys
```

---

## 7. Enlaces Internos entre Secciones

```
Home ──────► Áreas de Práctica (AreasGrid cards)
     ──────► Nosotros (AboutPreview)
     ──────► Blog (si hay link en nav)

Nosotros ──► Modal (AboutCTA)

Blog ──────► Artículos individuales (cards)
     ──────► Categorías (filtro)
Artículo ──► Artículos relacionados (BlogRelated)
         ──► Modal / WhatsApp (BlogCTA)

Practice ──► Áreas relacionadas (PracticeRelatedServices)
         ──► Modal (PracticeFinalCTA)

Footer ────► Todas las áreas de práctica
       ────► Nosotros
       ────► Blog
       ────► Redes sociales (externos)
```
