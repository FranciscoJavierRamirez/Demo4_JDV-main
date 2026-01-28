# Propuesta: Sistema de Blog para JDV Abogados (v2.0)

## Índice

1. [Visión General](#visión-general)
2. [Arquitectura Simplificada](#arquitectura-simplificada)
3. [Estructura de Archivos](#estructura-de-archivos)
4. [Componentes del Blog (8 total)](#componentes-del-blog)
5. [Plantilla Simplificada del Archivo .md](#plantilla-simplificada-del-archivo-md)
6. [Sistema de CTAs](#sistema-de-ctas)
7. [Sistema de Publicación Programada](#sistema-de-publicación-programada)
8. [Diseño Mobile-First](#diseño-mobile-first)
9. [SEO y AEO Completo](#seo-y-aeo-completo)
10. [Guía Editorial del Blog](#guía-editorial-del-blog)
11. [Implementación Técnica](#implementación-técnica)
12. [Manual de Mantención](#manual-de-mantención)
13. [Checklist de Nuevo Post](#checklist-de-nuevo-post)
14. [Métricas y Analytics](#métricas-y-analytics)
15. [Calendario Editorial](#calendario-editorial)
16. [Monitoreo y Alertas](#monitoreo-y-alertas)
17. [Herramienta de Scaffolding (CLI)](#herramienta-de-scaffolding-cli)

---

## Visión General

### Objetivo Estratégico

El blog de JDV Abogados tiene como propósito:

1. **Visibilidad**: Posicionar el sitio en Google, Bing y motores de IA (ChatGPT, Claude, Perplexity)
2. **Autoridad**: Establecer a Jacqueline del Valle y JDV Abogados como referentes en derecho administrativo chileno
3. **Conversión**: Guiar al lector desde el interés informativo hacia el contacto comercial
4. **Vinculación**: Conectar noticias de actualidad con los servicios del estudio

### Diferencia con Áreas de Práctica

| Aspecto | Áreas de Práctica | Blog Posts |
|---------|-------------------|------------|
| URL | Canónica (`/areas-practicas/defensa-estatutaria`) | Dinámica (`/blog/[slug]`) |
| Página .astro | Una por área (estática) | Una única plantilla `[...slug].astro` |
| Contenido | Institucional, atemporal | Actualidad, temporal |
| Frecuencia | Estable | Actualizaciones frecuentes |
| Generación | Manual por desarrollador | Solo agregar archivo .md |

### Principios de Diseño

1. **Simplicidad**: 8 componentes (no 14), frontmatter de ~35 líneas (no 70)
2. **Mantenibilidad**: Una persona no técnica debe poder crear posts
3. **Consistencia**: Hereda reglas editoriales del Manual de Áreas de Práctica
4. **Performance**: Mobile-first, lazy loading, Core Web Vitals optimizados

---

## Arquitectura Simplificada

### Principio Fundamental

> **"Un archivo .md = Un post publicado"**

El flujo de trabajo para agregar un nuevo post es:

1. Crear archivo `.md` en `src/content/blog/`
2. Agregar imagen hero en `public/blog/`
3. El post se genera automáticamente en el próximo build/deploy

### Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────────────────┐
│                    SISTEMA DE BLOG                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  src/content/blog/                                          │
│  ├── 2026-01-15-cgr-nuevo-dictamen.md      ← Post 1        │
│  ├── 2026-01-22-responsabilidad-fiscal.md  ← Post 2        │
│  └── 2026-02-01-reforma-estatutaria.md     ← Post 3        │
│                          │                                  │
│                          ▼                                  │
│  src/pages/blog/                                            │
│  ├── index.astro         ← Listado paginado de posts       │
│  └── [...slug].astro     ← Plantilla dinámica (única)      │
│                          │                                  │
│                          ▼                                  │
│  src/components/blog/    ← 8 COMPONENTES (simplificado)    │
│  ├── BlogHero.astro                                         │
│  ├── BlogContent.astro                                      │
│  ├── BlogCTA.astro       ← Un solo componente configurable │
│  ├── BlogAuthor.astro                                       │
│  ├── BlogRelated.astro   ← Posts + Servicios unificados    │
│  ├── BlogShare.astro                                        │
│  ├── BlogToC.astro                                          │
│  └── BlogProgress.astro                                     │
│                          │                                  │
│                          ▼                                  │
│  public/blog/                                               │
│  ├── cgr-nuevo-dictamen.jpg       ← Imagen hero Post 1     │
│  └── reforma-estatutaria.jpg      ← Imagen hero Post 3     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Estructura de Archivos

### Directorio Completo

```
astro-site/
├── src/
│   ├── content/
│   │   ├── config.ts                    ← Agregar schema de blog
│   │   ├── practices/                   ← (existente)
│   │   └── blog/                        ← NUEVO: Posts del blog
│   │       ├── 2026-01-15-cgr-nuevo-dictamen.md
│   │       └── ...
│   │
│   ├── pages/
│   │   ├── areas-practicas/             ← (existente)
│   │   └── blog/                        ← NUEVO
│   │       ├── index.astro              ← Listado con paginación
│   │       ├── [...slug].astro          ← Plantilla dinámica
│   │       └── categoria/               ← Archivo por categoría
│   │           └── [categoria].astro
│   │
│   ├── components/
│   │   ├── practice/                    ← (existente)
│   │   └── blog/                        ← NUEVO: 8 componentes
│   │       ├── BlogHero.astro
│   │       ├── BlogContent.astro
│   │       ├── BlogCTA.astro
│   │       ├── BlogAuthor.astro
│   │       ├── BlogRelated.astro
│   │       ├── BlogShare.astro
│   │       ├── BlogToC.astro
│   │       └── BlogProgress.astro
│   │
│   ├── layouts/
│   │   └── BlogLayout.astro             ← NUEVO
│   │
│   └── utils/
│       └── blog.ts                      ← Utilidades (filtros, fechas)
│
└── public/
    └── blog/                            ← NUEVO: Imágenes de posts
        └── [slug].jpg
```

---

## Componentes del Blog

### 8 Componentes (Simplificado de 14)

| # | Componente | Propósito |
|---|------------|-----------|
| 1 | `BlogHero` | Título, extracto, imagen, meta (fecha, autor, tiempo lectura) |
| 2 | `BlogContent` | Renderiza Markdown con estilos premium |
| 3 | `BlogCTA` | Componente único con 3 variantes (inicio/medio/final) |
| 4 | `BlogAuthor` | Caja de autor con foto y credenciales |
| 5 | `BlogRelated` | Posts relacionados + Servicios relacionados (unificado) |
| 6 | `BlogShare` | Botones de compartir (LinkedIn, Twitter, Email, Copiar) |
| 7 | `BlogToC` | Tabla de contenidos (sticky desktop, colapsable mobile) |
| 8 | `BlogProgress` | Barra de progreso de lectura |

### Componentes Eliminados (vs propuesta v1)

- ~~`BlogCTAInline`~~ + ~~`BlogCTAFloating`~~ → Unificados en `BlogCTA`
- ~~`BlogRelatedPosts`~~ + ~~`BlogRelatedServices`~~ → Unificados en `BlogRelated`
- ~~`BlogBreadcrumbs`~~ → Reutilizar `PracticeBreadcrumbs` existente
- ~~`BlogTags`~~ → Integrado en `BlogHero`
- ~~`BlogReadingTime`~~ → Integrado en `BlogHero`
- ~~`BlogNewsletter`~~ → Integrado en `BlogCTA` variante final

### Estructura Visual de un Post

```
┌─────────────────────────────────────────────────────────────┐
│              1. BlogProgress (sticky top)                   │
├─────────────────────────────────────────────────────────────┤
│                     2. Header (existente)                   │
├─────────────────────────────────────────────────────────────┤
│               3. Breadcrumbs (reutilizado)                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                      4. BlogHero                            │
│   ┌─────────────────────────────────────────────────────┐   │
│   │ [Categoría] · [8 min lectura] · [15 Ene 2026]       │   │
│   │                                                     │   │
│   │ Título Principal del Post                           │   │
│   │                                                     │   │
│   │ Extracto del artículo que explica el contenido      │   │
│   │                                                     │   │
│   │ [Imagen Hero - 1200x630px]                          │   │
│   │                                                     │   │
│   │ Por: Jacqueline del Valle · [Tags: CGR, Sumario]    │   │
│   └─────────────────────────────────────────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐  ┌────────────────────────────────────┐   │
│  │ 5. BlogToC   │  │ 6. BlogContent                     │   │
│  │  (sticky)    │  │                                    │   │
│  │              │  │ Introducción del artículo...       │   │
│  │ • Sección 1  │  │                                    │   │
│  │ • Sección 2  │  │ ┌────────────────────────────────┐ │   │
│  │ • Sección 3  │  │ │ 7. BlogCTA variant="inicio"    │ │   │
│  │              │  │ │ "¿Necesita orientación?"       │ │   │
│  │              │  │ │ [WhatsApp] [Agendar]           │ │   │
│  │              │  │ └────────────────────────────────┘ │   │
│  │              │  │                                    │   │
│  │              │  │ ## Primera Sección                 │   │
│  │              │  │ Contenido...                       │   │
│  │              │  │                                    │   │
│  │              │  │ ┌────────────────────────────────┐ │   │
│  │              │  │ │ BlogCTA variant="medio"        │ │   │
│  │              │  │ └────────────────────────────────┘ │   │
│  │              │  │                                    │   │
│  │              │  │ ## Conclusión                      │   │
│  │              │  │ Cierre...                          │   │
│  └──────────────┘  └────────────────────────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                     8. BlogAuthor                           │
│   ┌─────────────────────────────────────────────────────┐   │
│   │ [Foto]  Jacqueline del Valle Tapia                  │   │
│   │         Abogada · 35 años en Contraloría           │   │
│   └─────────────────────────────────────────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                      9. BlogShare                           │
│             [LinkedIn] [Twitter] [Email] [Copiar]           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│               10. BlogCTA variant="final"                   │
│   ┌─────────────────────────────────────────────────────┐   │
│   │    ¿Enfrenta una situación similar?                 │   │
│   │    [WhatsApp] [Agendar] [Suscribirse Newsletter]    │   │
│   └─────────────────────────────────────────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                     11. BlogRelated                         │
│   ┌─────────────────────────────────────────────────────┐   │
│   │  Servicios: [Defensa Estatutaria] [Def. Admin.]     │   │
│   │                                                     │   │
│   │  Artículos Relacionados:                            │   │
│   │  [Card 1] [Card 2] [Card 3]                         │   │
│   └─────────────────────────────────────────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                     12. Footer (existente)                  │
├─────────────────────────────────────────────────────────────┤
│         13. WhatsAppFloat (existente, NO duplicar)          │
└─────────────────────────────────────────────────────────────┘
```

**IMPORTANTE**: En mobile, NO se agrega un CTA flotante adicional. Se reutiliza el `WhatsAppFloat` existente para evitar conflictos de UX.

---

## Plantilla Simplificada del Archivo .md

### Nomenclatura de Archivos

```
YYYY-MM-DD-slug-del-post.md
```

**Ejemplos:**
- `2026-01-15-cgr-nuevo-dictamen-responsabilidad.md`
- `2026-02-01-sumario-administrativo-plazos.md`

### Plantilla (~35 líneas de frontmatter)

```yaml
---
# ══════════════════════════════════════════════════════════════════════════════
# PLANTILLA DE POST - BLOG JDV ABOGADOS
# ══════════════════════════════════════════════════════════════════════════════
#
# INSTRUCCIONES:
# 1. Copiar este archivo a src/content/blog/
# 2. Renombrar: YYYY-MM-DD-slug-del-post.md (la fecha es la de publicación)
# 3. Colocar imagen en public/blog/[slug].jpg (1200x630px mínimo)
# 4. Completar los campos marcados con [REQUERIDO] o [OPCIONAL]
# 5. Escribir contenido Markdown después del cierre ---
#
# ══════════════════════════════════════════════════════════════════════════════

# [REQUERIDO] Título del post (máx 60 caracteres para SEO óptimo)
title: "Título del Post"

# [REQUERIDO] Extracto/descripción (máx 155 caracteres - se usa como meta description)
excerpt: "Breve descripción del artículo que aparece en listados y Google."

# [REQUERIDO] Fecha de publicación (ISO 8601, zona horaria Chile)
# Si la fecha es futura, el post NO aparecerá hasta esa fecha
publishDate: "2026-01-15T09:00:00-03:00"

# [REQUERIDO] Categoría principal (solo UNA)
# Opciones: derecho-administrativo | funcionarios-publicos | contraloria |
#           actualidad-legal | guias-practicas | casos-estudio
category: "derecho-administrativo"

# [REQUERIDO] Tags relevantes (3-5 recomendado)
tags:
  - "sumario-administrativo"
  - "cgr"
  - "funcionarios-publicos"

# [REQUERIDO] Imagen hero
# UBICACIÓN: public/blog/[slug].jpg
# TAMAÑO: 1200x630px (ratio 1.91:1 para redes sociales)
heroImage: "/blog/slug-del-post.jpg"
heroAlt: "Descripción de la imagen para accesibilidad"

# [REQUERIDO] Servicios relacionados (1-3)
# Opciones: defensa-estatutaria | defensa-administrativa | civil |
#           cliente-senior | legado | animalista | capacitacion |
#           inmobiliaria-copropiedad | familia-menores
relatedServices:
  - "defensa-estatutaria"
  - "defensa-administrativa"

# [OPCIONAL] Autor (default: jacqueline-del-valle)
# Opciones: jacqueline-del-valle | equipo-jdv
author: "jacqueline-del-valle"

# [OPCIONAL] Post destacado (aparece primero en listados)
featured: false

# [OPCIONAL] Borrador (no se publica aunque la fecha haya pasado)
draft: false

# [OPCIONAL] Desactivar CTAs inline (por defecto todos activos)
# showCtaInicio: false
# showCtaMedio: false
# showCtaFinal: false

---

<!--
══════════════════════════════════════════════════════════════════════════════
CHECKLIST EDITORIAL ANTES DE PUBLICAR
══════════════════════════════════════════════════════════════════════════════

[ ] Voz institucional: usar "nuestro equipo", "representamos" (NO "yo", "mi")
[ ] Sin promesas de resultados: usar "gestión orientada a", "estrategia fundada"
[ ] Terminología legal chilena correcta
[ ] Título ≤ 60 caracteres
[ ] Excerpt ≤ 155 caracteres
[ ] Imagen existe en public/blog/
[ ] 3-5 tags relevantes
[ ] 1-3 servicios relacionados
[ ] CTAs sobrios (NO "contratar ahora", "oferta")

══════════════════════════════════════════════════════════════════════════════
ESTRUCTURA RECOMENDADA
══════════════════════════════════════════════════════════════════════════════

1. Párrafo introductorio (hook + contexto + promesa de valor)
2. [CTA INICIO - se inserta automáticamente]
3. ## Secciones con H2 (3-5 secciones)
4. [CTA MEDIO - se inserta automáticamente ~50% del contenido]
5. ## Conclusión
6. [CTA FINAL - se inserta automáticamente]

══════════════════════════════════════════════════════════════════════════════
FORMATO MARKDOWN DISPONIBLE
══════════════════════════════════════════════════════════════════════════════

## Título de sección (H2) - genera entrada en tabla de contenidos
### Subtítulo (H3)
**texto en negrita**
*texto en cursiva*
> Cita destacada (aparece en recuadro azul premium)
- Lista con viñetas
1. Lista numerada
[texto del enlace](url)
![alt de imagen](/blog/imagen.jpg)

══════════════════════════════════════════════════════════════════════════════
-->

Párrafo introductorio que captura la atención del lector y establece el contexto. Conectar con la preocupación del lector y prometer el valor que obtendrá.

## Primera Sección: Contexto

Desarrollo del primer punto. Explicar el contexto legal o la situación actual.

> **Importante:** Las citas destacadas aparecen en recuadros azules y son ideales para resaltar puntos clave.

## Segunda Sección: Análisis

Profundizar en el análisis jurídico. Demostrar la **autoridad** del estudio.

- Primer punto relevante
- Segundo punto con implicancias
- Tercer punto que afecta al lector

## Tercera Sección: Implicancias Prácticas

Explicar qué significa esto para el lector en términos prácticos.

> **La experiencia cuenta:** Con más de 35 años en la Contraloría General de la República, nuestro equipo conoce estos procesos desde adentro.

## Conclusión

Síntesis de los puntos principales y recomendaciones concretas. Terminar con mensaje que invite a la acción sin ser agresivo.

Nuestro equipo se encuentra disponible para orientarle sobre su situación particular.
```

### Campos Derivados Automáticamente

El sistema calcula automáticamente:

| Campo | Derivado de |
|-------|-------------|
| `slug` | Nombre del archivo (sin fecha y extensión) |
| `readingTime` | Conteo de palabras ÷ 200 |
| `metaTitle` | `title` + " \| Blog JDV Abogados" |
| `metaDescription` | `excerpt` |
| `canonical` | `/blog/` + `slug` |
| `ogImage` | `heroImage` |

---

## Sistema de CTAs

### Componente Único BlogCTA

Un solo componente con prop `variant` para las 3 posiciones:

```astro
---
// BlogCTA.astro
interface Props {
  variant: 'inicio' | 'medio' | 'final';
}

const { variant } = Astro.props;

const content = {
  inicio: {
    titulo: "¿Necesita orientación sobre este tema?",
    texto: "Nuestro equipo puede evaluar su situación particular.",
    showNewsletter: false
  },
  medio: {
    titulo: "35 años de experiencia en Contraloría",
    texto: "Conocemos el sistema desde adentro. Consulta confidencial.",
    showNewsletter: false
  },
  final: {
    titulo: "¿Enfrenta una situación similar?",
    texto: "Podemos orientarle sobre sus opciones legales.",
    showNewsletter: true
  }
};

const c = content[variant];
---

<aside class={`blog-cta blog-cta--${variant}`}>
  <div class="blog-cta__content">
    <h3>{c.titulo}</h3>
    <p>{c.texto}</p>
  </div>

  <div class="blog-cta__buttons">
    <a href="https://wa.me/56XXXXXXXXX" class="btn btn--whatsapp">
      <span>💬</span> WhatsApp
    </a>

    <a href="https://calendly.com/jdv-abogados/consulta" class="btn btn--calendar">
      <span>📅</span> Agendar Reunión
    </a>

    {c.showNewsletter && (
      <a href="https://forms.gle/XXXX" class="btn btn--newsletter">
        <span>📧</span> Suscribirse
      </a>
    )}
  </div>
</aside>
```

### Links de CTAs (Configuración Global)

Crear archivo `src/config/cta.ts`:

```typescript
export const ctaLinks = {
  whatsapp: {
    url: "https://wa.me/56XXXXXXXXX?text=Consulta%20desde%20el%20blog",
    label: "WhatsApp"
  },
  calendly: {
    url: "https://calendly.com/jdv-abogados/consulta-inicial",
    label: "Agendar Reunión"
  },
  newsletter: {
    url: "https://forms.gle/XXXXXXXXXXXX",
    label: "Suscribirse"
  },
  email: "contacto@jdvabogados.cl" // Se muestra en pantalla, no es clickeable
};
```

### Estilos de Botones

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.btn--whatsapp {
  background: #25d366;
  color: white;
}

.btn--calendar {
  background: #1a365d;
  color: white;
}

.btn--newsletter {
  background: transparent;
  border: 2px solid #d4a574;
  color: #d4a574;
}

.btn--newsletter:hover {
  background: #d4a574;
  color: white;
}
```

---

## Sistema de Publicación Programada

### Cómo Funciona

El campo `publishDate` en el frontmatter controla cuándo un post es visible:

- Si `publishDate` es **pasado o presente** → Post visible
- Si `publishDate` es **futuro** → Post NO visible
- Si `draft: true` → Post NUNCA visible (independiente de fecha)

### Implementación en Código

```typescript
// src/utils/blog.ts

export interface BlogPost {
  data: {
    title: string;
    excerpt: string;
    publishDate: string;
    draft?: boolean;
    // ... otros campos
  };
  body: string;
  slug: string;
}

/**
 * Determina si un post debe publicarse
 */
export function shouldPublish(post: BlogPost): boolean {
  // Nunca publicar borradores
  if (post.data.draft) return false;

  // Verificar fecha de publicación
  const now = new Date();
  const publishDate = new Date(post.data.publishDate);

  return publishDate <= now;
}

/**
 * Obtiene posts publicados, ordenados por fecha (más reciente primero)
 */
export function getPublishedPosts(posts: BlogPost[]): BlogPost[] {
  return posts
    .filter(shouldPublish)
    .sort((a, b) =>
      new Date(b.data.publishDate).getTime() -
      new Date(a.data.publishDate).getTime()
    );
}

/**
 * Calcula tiempo de lectura (200 palabras/minuto)
 */
export function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

/**
 * Formatea fecha para mostrar
 */
export function formatDate(dateString: string, locale = 'es-CL'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
```

### Uso en Páginas

```astro
---
// src/pages/blog/index.astro
import { getCollection } from 'astro:content';
import { getPublishedPosts } from '../../utils/blog';

const allPosts = await getCollection('blog');
const publishedPosts = getPublishedPosts(allPosts);
---
```

### CRÍTICO: Configuración de Builds Automáticos

**Sin builds automáticos, la publicación programada NO funciona.**

El sitio es estático. Los posts con fecha futura no aparecerán hasta que se ejecute un nuevo build DESPUÉS de esa fecha.

#### Opción 1: GitHub Actions (Recomendado)

Crear `.github/workflows/scheduled-build.yml`:

```yaml
name: Scheduled Build

on:
  # Build diario a las 9:00 AM hora Chile (12:00 UTC en verano, 13:00 UTC en invierno)
  schedule:
    - cron: '0 12 * * *'

  # También permite build manual
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: astro-site/package-lock.json

      - name: Install dependencies
        run: npm ci
        working-directory: astro-site

      - name: Build
        run: npm run build
        working-directory: astro-site

      # Agregar paso de deploy según hosting (Vercel, Netlify, etc.)
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: astro-site
```

#### Opción 2: Vercel Cron (si hosting en Vercel)

En `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/revalidate",
      "schedule": "0 12 * * *"
    }
  ]
}
```

#### Opción 3: Netlify Build Hooks

1. En Netlify, crear un Build Hook (Settings > Build & Deploy > Build hooks)
2. Usar un servicio como cron-job.org para llamar al hook diariamente

### Flujo de Publicación Programada

```
┌─────────────────────────────────────────────────────────────┐
│  1. Crear post con publishDate: "2026-02-15T09:00:00-03:00" │
│                          │                                  │
│                          ▼                                  │
│  2. Commit y push a repositorio                             │
│                          │                                  │
│                          ▼                                  │
│  3. Build automático (hoy 10 Feb) → Post NO aparece         │
│     (publishDate > now)                                     │
│                          │                                  │
│                          ▼                                  │
│  4. Build automático (15 Feb 12:00 UTC) → Post APARECE      │
│     (publishDate <= now)                                    │
└─────────────────────────────────────────────────────────────┘
```

### Consideraciones de Zona Horaria

- Usar siempre formato ISO 8601 con zona horaria
- Chile continental: `-03:00` (verano) o `-04:00` (invierno)
- El build de GitHub Actions usa UTC, por eso `cron: '0 12 * * *'` = 9:00 Chile (verano)

**Ejemplo de fechas correctas:**

```yaml
# Verano (hora Chile = UTC-3)
publishDate: "2026-01-15T09:00:00-03:00"

# Invierno (hora Chile = UTC-4)
publishDate: "2026-07-15T09:00:00-04:00"
```

---

## Diseño Mobile-First

### Principios

1. **Touch-friendly**: Botones mínimo 44x44px
2. **Lectura cómoda**: Fuente base 18px en mobile
3. **Sin scroll horizontal**: Contenido 100% responsive
4. **Sin elementos flotantes duplicados**: NO agregar CTA flotante, usar WhatsAppFloat existente

### Tabla de Contenidos Mobile

En mobile, el ToC es colapsable en la parte superior del contenido:

```astro
---
// BlogToC.astro
interface Props {
  headings: { depth: number; slug: string; text: string }[];
}
---

<!-- Mobile: colapsable -->
<details class="toc-mobile">
  <summary>
    <span>📑</span>
    <span>Contenido del artículo</span>
    <span class="chevron">▼</span>
  </summary>
  <nav>
    {headings.map(h => (
      <a href={`#${h.slug}`} class={`toc-link depth-${h.depth}`}>
        {h.text}
      </a>
    ))}
  </nav>
</details>

<!-- Desktop: sticky sidebar -->
<nav class="toc-desktop">
  <h4>En este artículo</h4>
  {headings.map(h => (
    <a href={`#${h.slug}`} class={`toc-link depth-${h.depth}`}>
      {h.text}
    </a>
  ))}
</nav>

<style>
  .toc-mobile {
    display: block;
    margin: 1.5rem 0;
    background: #f8f9fa;
    border-radius: 8px;
  }

  @media (min-width: 1024px) {
    .toc-mobile { display: none; }
  }

  .toc-desktop {
    display: none;
  }

  @media (min-width: 1024px) {
    .toc-desktop {
      display: block;
      position: sticky;
      top: 100px;
    }
  }
</style>
```

### NO Duplicar Flotantes

**Regla crítica**: El sitio ya tiene `WhatsAppFloat.astro`. NO crear otro flotante para el blog.

En mobile, el WhatsApp flotante existente es suficiente como CTA de contacto rápido.

---

## SEO y AEO Completo

### Schema.org para Posts

```astro
---
// En BlogLayout.astro o [...slug].astro
const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.data.title,
  "description": post.data.excerpt,
  "image": `https://jdvabogados.cl${post.data.heroImage}`,
  "author": {
    "@type": "Person",
    "name": "Jacqueline del Valle Tapia",
    "jobTitle": "Abogada Especialista en Derecho Administrativo",
    "affiliation": {
      "@type": "LegalService",
      "name": "JDV Abogados"
    }
  },
  "publisher": {
    "@type": "LegalService",
    "name": "JDV Abogados",
    "logo": {
      "@type": "ImageObject",
      "url": "https://jdvabogados.cl/logo.png"
    }
  },
  "datePublished": post.data.publishDate,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://jdvabogados.cl/blog/${slug}`
  },
  "articleSection": categoryLabels[post.data.category],
  "keywords": post.data.tags.join(", "),
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".blog-content h2", ".blog-content > p:first-of-type"]
  }
};
---

<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

### Schema FAQPage (para posts con preguntas)

Si un post tiene estructura de FAQ, agregar schema adicional:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuál es el plazo para...",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El plazo establecido por..."
      }
    }
  ]
}
```

### Meta Tags Completos

```astro
---
// En BlogLayout.astro
---

<!-- SEO básico -->
<title>{title} | Blog JDV Abogados</title>
<meta name="description" content={description} />
<link rel="canonical" href={`https://jdvabogados.cl/blog/${slug}`} />

<!-- Open Graph -->
<meta property="og:type" content="article" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={`https://jdvabogados.cl${heroImage}`} />
<meta property="og:url" content={`https://jdvabogados.cl/blog/${slug}`} />
<meta property="article:published_time" content={publishDate} />
<meta property="article:author" content="Jacqueline del Valle" />
<meta property="article:section" content={category} />
{tags.map(tag => <meta property="article:tag" content={tag} />)}

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={`https://jdvabogados.cl${heroImage}`} />

<!-- Robots -->
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
```

### Sitemap Dinámico

Crear `src/pages/sitemap-blog.xml.ts`:

```typescript
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getPublishedPosts } from '../utils/blog';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const published = getPublishedPosts(posts);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://jdvabogados.cl/blog/</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  ${published.map(post => `
  <url>
    <loc>https://jdvabogados.cl/blog/${post.slug}</loc>
    <lastmod>${new Date(post.data.publishDate).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};
```

### Optimización para IA (AEO)

Para que ChatGPT, Claude, Perplexity indexen el contenido:

1. **Respuestas directas**: Primer párrafo debe responder la pregunta principal
2. **Estructura clara**: H2 para cada sección, listas para pasos
3. **Citas verificables**: Mencionar leyes, dictámenes con referencias
4. **Autoridad explícita**: Mencionar experiencia en CGR

---

## Guía Editorial del Blog

### Reglas Heredadas del Manual de Áreas de Práctica

El blog DEBE cumplir las mismas reglas que las Áreas de Práctica:

#### 1. Voz Institucional (Obligatorio)

**Usar:**
- "nuestro equipo"
- "representamos"
- "asesoramos"
- "el estudio"

**NO usar:**
- "yo"
- "mi experiencia"
- "te ayudo"

#### 2. Promesas Éticas (Obligatorio)

**Permitido:**
- "Gestión orientada a..."
- "Estrategia jurídicamente fundada..."
- "Intervención profesional..."

**Prohibido:**
- "Garantizamos resultados"
- "Ganamos su caso"
- "100% éxito"

#### 3. Terminología Legal Chilena

Usar términos oficiales:
- Juzgado de Garantía
- Contraloría General de la República
- Ministerio Público
- Estatuto Administrativo

#### 4. CTAs Sobrios

**Usar:**
- "Agendar consulta"
- "Solicitar evaluación"
- "Hablar con el equipo"

**NO usar:**
- "Contratar ahora"
- "Oferta especial"
- "Promoción"

---

### Estilo de Redacción: Escuela Aylwin Azócar

El estilo de redacción del blog debe inspirarse en la prosa jurídica de **Patricio Aylwin Azócar** (expresidente de la República) y **Arturo Aylwin Azócar** (excontralor General de la República). Ambos hermanos representan el estándar de excelencia en la escritura jurídica chilena: rigurosa, clara y con autoridad moral.

#### Características del Estilo Aylwin

| Atributo | Descripción | Ejemplo |
|----------|-------------|---------|
| **Precisión conceptual** | Cada término jurídico usado con exactitud | "Responsabilidad administrativa" (no "culpa del funcionario") |
| **Sobriedad argumentativa** | Sin adjetivos innecesarios ni hipérboles | "La normativa establece..." (no "La poderosa normativa...") |
| **Estructura lógica** | Premisa → desarrollo → conclusión | Exposición ordenada de ideas |
| **Claridad sin simplismo** | Accesible pero sin perder rigor técnico | Explicar sin vulgarizar |
| **Autoridad sin arrogancia** | Firmeza basada en conocimiento, no en ego | "Los antecedentes indican..." (no "Como expertos, sabemos...") |
| **Ética implícita** | Valores republicanos subyacentes | Probidad, servicio público, bien común |

#### Principios de Redacción

**1. Economía de palabras**

Decir lo necesario, sin relleno. Cada oración debe aportar información o avanzar el argumento.

```
❌ "Es importante mencionar que, en este contexto particular, la situación
    que se presenta reviste características que merecen ser analizadas..."

✅ "La situación presenta tres elementos que requieren análisis:"
```

**2. Voz activa y sujetos claros**

Preferir construcciones directas que identifiquen al actor.

```
❌ "Se ha determinado que la sanción fue aplicada incorrectamente..."

✅ "La Contraloría determinó que el órgano fiscalizador aplicó
    incorrectamente la sanción..."
```

**3. Jerarquía de ideas**

Lo más importante primero. Conclusiones al inicio, desarrollo después.

```
❌ "Considerando los antecedentes, la jurisprudencia, los dictámenes
    previos y la doctrina, podemos concluir que el plazo es de 5 días."

✅ "El plazo es de 5 días hábiles. Esta conclusión se sustenta en
    los dictámenes N° X e Y de la Contraloría, que establecen..."
```

**4. Citas con propósito**

Citar normativa o jurisprudencia para fundamentar, no para impresionar.

```
❌ "Como señala el artículo 15, inciso segundo, letra b), del DFL 29
    de 2004, que fija el texto refundido, coordinado y sistematizado
    de la Ley 18.834..."

✅ "El Estatuto Administrativo (art. 15) establece que los funcionarios
    deben cumplir con..."
```

**5. Conclusiones accionables**

Terminar con orientación práctica, no con vaguedades.

```
❌ "En definitiva, este es un tema complejo que requiere análisis
    caso a caso."

✅ "Ante esta situación, el funcionario afectado debe: (1) solicitar
    copia del expediente, (2) verificar los plazos de prescripción,
    y (3) evaluar la procedencia de un recurso de reposición."
```

#### Frases Modelo (Inspiradas en el Estilo Aylwin)

**Para introducir un tema:**
- "La reciente modificación normativa plantea interrogantes sobre..."
- "El dictamen N° X de la Contraloría establece un criterio relevante para..."
- "La práctica administrativa ha evidenciado dificultades en la aplicación de..."

**Para desarrollar un argumento:**
- "Este criterio se fundamenta en el principio de..."
- "La jurisprudencia administrativa ha sido consistente en señalar que..."
- "Corresponde distinguir entre dos situaciones diversas:"

**Para concluir:**
- "En síntesis, la normativa vigente exige que..."
- "Nuestro equipo puede orientarle sobre los pasos a seguir en su situación particular."
- "Una intervención oportuna permite resguardar adecuadamente los derechos del afectado."

#### Anti-patrones a Evitar

| Evitar | Por qué | Alternativa |
|--------|---------|-------------|
| Jerga informal | Resta autoridad | Lenguaje formal pero accesible |
| Anglicismos | Innecesarios en derecho chileno | Términos en español |
| Superlativos | "El mejor", "único" son promesas | Datos y credenciales concretas |
| Frases hechas | "A fin de cuentas", "en el fondo" | Ir al punto directamente |
| Dramatismo | "Terrible situación", "grave injusticia" | Descripción objetiva de hechos |
| Autorreferencia excesiva | "Nosotros siempre...", "En JDV..." | Enfoque en el problema del lector |

#### Checklist de Estilo Pre-Publicación

- [ ] ¿El texto podría firmarlo un jurista de la tradición Aylwin sin incomodarse?
- [ ] ¿Cada párrafo tiene una idea central clara?
- [ ] ¿Las citas normativas fundamentan el argumento (no lo decoran)?
- [ ] ¿El tono es firme pero no arrogante?
- [ ] ¿La conclusión orienta al lector sobre qué hacer?
- [ ] ¿Se evitaron superlativos y promesas de resultado?

---

### Estructura de Contenido Recomendada

```
1. Hook (1 párrafo)
   └── Capturar atención con dato relevante o pregunta

2. Contexto (1-2 párrafos)
   └── Explicar la situación o noticia

3. Análisis (2-3 secciones H2)
   └── Profundizar con autoridad técnica
   └── Mencionar normativa relevante
   └── Vincular con experiencia en CGR cuando aplique

4. Implicancias Prácticas (1 sección H2)
   └── ¿Qué significa para el lector?
   └── ¿Qué debería hacer?

5. Conclusión (1-2 párrafos)
   └── Síntesis
   └── Invitación sutil a contactar
```

### Longitud Recomendada

| Tipo de Post | Palabras | Tiempo Lectura |
|--------------|----------|----------------|
| Noticia corta | 600-800 | 3-4 min |
| Análisis | 1000-1500 | 5-8 min |
| Guía práctica | 1500-2500 | 8-12 min |

---

## Implementación Técnica

### Schema de Contenido (content/config.ts)

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(70),
    excerpt: z.string().max(200),
    publishDate: z.string().datetime(),
    category: z.enum([
      'derecho-administrativo',
      'funcionarios-publicos',
      'contraloria',
      'actualidad-legal',
      'guias-practicas',
      'casos-estudio'
    ]),
    tags: z.array(z.string()).min(1).max(10),
    heroImage: z.string(),
    heroAlt: z.string(),
    relatedServices: z.array(z.string()).min(1).max(3),
    author: z.enum(['jacqueline-del-valle', 'equipo-jdv']).default('jacqueline-del-valle'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    showCtaInicio: z.boolean().default(true),
    showCtaMedio: z.boolean().default(true),
    showCtaFinal: z.boolean().default(true),
  })
});

export const collections = {
  // ... collections existentes
  blog: blogCollection
};
```

### Página Dinámica [...slug].astro

```astro
---
// src/pages/blog/[...slug].astro
import { getCollection } from 'astro:content';
import BlogLayout from '../../layouts/BlogLayout.astro';
import Header from '../../components/nav/Header.astro';
import PracticeBreadcrumbs from '../../components/practice/PracticeBreadcrumbs.astro';
import BlogHero from '../../components/blog/BlogHero.astro';
import BlogToC from '../../components/blog/BlogToC.astro';
import BlogContent from '../../components/blog/BlogContent.astro';
import BlogCTA from '../../components/blog/BlogCTA.astro';
import BlogAuthor from '../../components/blog/BlogAuthor.astro';
import BlogShare from '../../components/blog/BlogShare.astro';
import BlogRelated from '../../components/blog/BlogRelated.astro';
import BlogProgress from '../../components/blog/BlogProgress.astro';
import Footer from '../../components/home/Footer.astro';
import WhatsAppFloat from '../../components/WhatsAppFloat.astro';
import BackToTop from '../../components/BackToTop.astro';
import { shouldPublish, calculateReadingTime, formatDate } from '../../utils/blog';

export async function getStaticPaths() {
  const posts = await getCollection('blog');

  return posts
    .filter(shouldPublish)
    .map(post => ({
      params: { slug: post.slug },
      props: { post }
    }));
}

const { post } = Astro.props;
const { Content, headings } = await post.render();
const readingTime = calculateReadingTime(post.body);

// Posts relacionados (misma categoría)
const allPosts = await getCollection('blog');
const relatedPosts = allPosts
  .filter(p =>
    p.slug !== post.slug &&
    p.data.category === post.data.category &&
    shouldPublish(p)
  )
  .slice(0, 3);
---

<BlogLayout
  title={post.data.title}
  description={post.data.excerpt}
  image={post.data.heroImage}
  publishDate={post.data.publishDate}
  author={post.data.author}
  tags={post.data.tags}
>
  <BlogProgress />

  <Header />

  <PracticeBreadcrumbs
    areaName="Blog"
    areaSlug="blog"
    breadcrumbTitle={post.data.title.slice(0, 30) + '...'}
  />

  <BlogHero
    title={post.data.title}
    excerpt={post.data.excerpt}
    category={post.data.category}
    publishDate={post.data.publishDate}
    author={post.data.author}
    readingTime={readingTime}
    heroImage={post.data.heroImage}
    heroAlt={post.data.heroAlt}
    tags={post.data.tags}
  />

  <article class="blog-article">
    <div class="blog-article__container">

      {headings.length > 2 && (
        <aside class="blog-article__toc">
          <BlogToC headings={headings} />
        </aside>
      )}

      <div class="blog-article__content">

        {post.data.showCtaInicio && <BlogCTA variant="inicio" />}

        <BlogContent showMidCta={post.data.showCtaMedio}>
          <Content />
        </BlogContent>

        {post.data.showCtaFinal && <BlogCTA variant="final" />}

      </div>
    </div>
  </article>

  <BlogAuthor author={post.data.author} />

  <BlogShare
    url={`https://jdvabogados.cl/blog/${post.slug}`}
    title={post.data.title}
  />

  <BlogRelated
    services={post.data.relatedServices}
    posts={relatedPosts}
  />

  <Footer />

  <WhatsAppFloat />
  <BackToTop />

</BlogLayout>
```

### Página de Listado con Paginación

```astro
---
// src/pages/blog/index.astro
import { getCollection } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro';
import Header from '../../components/nav/Header.astro';
import Footer from '../../components/home/Footer.astro';
import { getPublishedPosts, formatDate } from '../../utils/blog';

const POSTS_PER_PAGE = 12;

const allPosts = await getCollection('blog');
const publishedPosts = getPublishedPosts(allPosts);

// Para página index, mostrar primera página
const posts = publishedPosts.slice(0, POSTS_PER_PAGE);
const totalPages = Math.ceil(publishedPosts.length / POSTS_PER_PAGE);

const categoryLabels = {
  'derecho-administrativo': 'Derecho Administrativo',
  'funcionarios-publicos': 'Funcionarios Públicos',
  'contraloria': 'Contraloría',
  'actualidad-legal': 'Actualidad Legal',
  'guias-practicas': 'Guías Prácticas',
  'casos-estudio': 'Casos de Estudio'
};
---

<BaseLayout title="Blog | JDV Abogados" description="Análisis jurídico, actualidad legal y guías prácticas sobre derecho administrativo en Chile.">
  <Header />

  <main class="blog-listing">
    <div class="container">
      <header class="blog-listing__header">
        <h1>Blog</h1>
        <p>Análisis jurídico y actualidad legal</p>
      </header>

      <!-- Posts destacados -->
      {posts.filter(p => p.data.featured).length > 0 && (
        <section class="blog-featured">
          <h2>Destacados</h2>
          <!-- Cards de posts destacados -->
        </section>
      )}

      <!-- Grid de posts -->
      <section class="blog-grid">
        {posts.map(post => (
          <article class="blog-card">
            <a href={`/blog/${post.slug}`}>
              <img
                src={post.data.heroImage}
                alt={post.data.heroAlt}
                loading="lazy"
              />
              <div class="blog-card__content">
                <span class="blog-card__category">
                  {categoryLabels[post.data.category]}
                </span>
                <h3>{post.data.title}</h3>
                <p>{post.data.excerpt}</p>
                <time>{formatDate(post.data.publishDate)}</time>
              </div>
            </a>
          </article>
        ))}
      </section>

      <!-- Paginación -->
      {totalPages > 1 && (
        <nav class="pagination">
          <span class="pagination__current">Página 1 de {totalPages}</span>
          <a href="/blog/pagina/2" class="pagination__next">Siguiente →</a>
        </nav>
      )}
    </div>
  </main>

  <Footer />
</BaseLayout>
```

---

## Manual de Mantención

### Flujo de Trabajo para Nuevo Post

```
1. PREPARAR CONTENIDO
   └── Redactar en Google Docs siguiendo guía editorial

2. PREPARAR IMAGEN
   └── Crear/obtener imagen 1200x630px
   └── Optimizar (TinyPNG, Squoosh)
   └── Guardar en public/blog/[slug].jpg

3. CREAR ARCHIVO .MD
   └── Copiar plantilla
   └── Renombrar: YYYY-MM-DD-slug-del-post.md
   └── Guardar en src/content/blog/

4. COMPLETAR FRONTMATTER
   └── Todos los campos [REQUERIDO]

5. ESCRIBIR CONTENIDO
   └── Seguir estructura recomendada
   └── Cumplir checklist editorial

6. REVISAR LOCALMENTE
   └── npm run dev
   └── Verificar en desktop y mobile

7. PUBLICAR
   └── git add . && git commit && git push
   └── El post aparece según publishDate
```

### Ubicación de Archivos

| Contenido | Ubicación |
|-----------|-----------|
| Posts (.md) | `src/content/blog/` |
| Imágenes hero | `public/blog/` |
| Componentes | `src/components/blog/` |
| Utilidades | `src/utils/blog.ts` |
| Config CTAs | `src/config/cta.ts` |

---

## Checklist de Nuevo Post

### Frontmatter

- [ ] `title` ≤ 60 caracteres
- [ ] `excerpt` ≤ 155 caracteres
- [ ] `publishDate` en formato correcto con zona horaria
- [ ] `category` válida
- [ ] `tags` (3-5)
- [ ] `heroImage` existe en `public/blog/`
- [ ] `heroAlt` descriptivo
- [ ] `relatedServices` (1-3)
- [ ] `draft: false` cuando esté listo

### Editorial

- [ ] Voz institucional (nosotros, nuestro equipo)
- [ ] Sin promesas de resultados
- [ ] Terminología legal chilena correcta
- [ ] CTAs sobrios
- [ ] Párrafos ≤ 4 líneas
- [ ] Al menos 3 secciones H2

### Técnico

- [ ] Imagen 1200x630px optimizada
- [ ] `npm run dev` sin errores
- [ ] Vista desktop correcta
- [ ] Vista mobile correcta
- [ ] CTAs funcionan
- [ ] Links internos funcionan

---

## Métricas y Analytics

### Stack de Analytics (Gratuito, Compatible con Cloudflare Pages)

El blog utiliza una combinación de herramientas gratuitas que funcionan 100% client-side, sin requerir Workers ni funciones serverless:

```
┌─────────────────────────────────────────────────────────────┐
│                    STACK DE ANALYTICS                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────┐    ┌─────────────────────┐        │
│  │ Cloudflare Web      │    │ Google Analytics 4  │        │
│  │ Analytics           │    │                     │        │
│  │ (Privacidad básica) │    │ (Eventos avanzados) │        │
│  └─────────────────────┘    └─────────────────────┘        │
│           │                          │                      │
│           ▼                          ▼                      │
│  • Page views rápidos       • CTA clicks                   │
│  • Core Web Vitals          • Scroll depth                 │
│  • Sin cookies              • Tiempo lectura               │
│                             • Conversiones                  │
│                             • Funnels                       │
│                                                             │
│  ┌─────────────────────┐                                   │
│  │ Google Search       │                                   │
│  │ Console             │                                   │
│  └─────────────────────┘                                   │
│           │                                                 │
│           ▼                                                 │
│  • Posiciones en SERP                                      │
│  • Keywords orgánicas                                      │
│  • Indexación                                              │
│  • Core Web Vitals                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### KPIs del Blog

#### KPIs Primarios (Revisión Mensual)

| Métrica | Definición | Target Inicial | Target 6 Meses |
|---------|------------|----------------|----------------|
| **Sesiones orgánicas** | Visitas desde Google/Bing | 500/mes | 2,000/mes |
| **Tiempo en página** | Promedio por post | 2:30 min | 4:00 min |
| **Scroll depth 75%+** | % que lee casi todo | 30% | 50% |
| **CTR a CTAs** | Clicks en botones / sesiones | 2% | 5% |
| **Leads generados** | Contactos vía WhatsApp/Calendly | 5/mes | 20/mes |

#### KPIs Secundarios (Revisión Trimestral)

| Métrica | Target |
|---------|--------|
| Posts indexados en Google | 100% en <7 días |
| Posiciones top 10 para keywords target | 3 keywords/post |
| Backlinks por post | 1/mes promedio |
| Tasa de rebote | <70% |
| Páginas por sesión | >1.5 |

#### KPIs de Contenido (Por Post)

| Métrica | Cómo Medirlo | Umbral Aceptable |
|---------|--------------|------------------|
| Engagement | Scroll 75% + tiempo >2min | >25% de lectores |
| Conversión | CTA clicks / lectores | >2% |
| Social proof | Shares (LinkedIn, Twitter) | >5/post |
| Relevancia | Posición Google para keyword principal | Top 20 |

### Eventos a Trackear en GA4

| Evento | Parámetros | Propósito |
|--------|------------|-----------|
| `scroll_depth` | `depth` (25/50/75/100), `post_slug` | Medir engagement real |
| `cta_click` | `variant` (inicio/medio/final), `action` (whatsapp/calendly/newsletter), `post_slug` | Medir conversión |
| `share` | `method` (linkedin/twitter/copy), `post_slug` | Medir viralidad |
| `toc_click` | `section`, `post_slug` | Medir navegación |
| `reading_time` | `seconds`, `post_slug` | Medir tiempo real |

### Implementación Técnica de Analytics

#### 1. Configuración en BlogLayout.astro

```astro
---
// En BlogLayout.astro
interface Props {
  title: string;
  description: string;
  slug: string;
  // ... otros props
}

const { title, description, slug } = Astro.props;
---

<!DOCTYPE html>
<html lang="es-CL">
<head>
  <!-- Meta tags... -->

  <!-- Cloudflare Web Analytics (básico, sin cookies) -->
  <script
    defer
    src='https://static.cloudflareinsights.com/beacon.min.js'
    data-cf-beacon='{"token": "YOUR_CF_TOKEN"}'
  ></script>

  <!-- Google Analytics 4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX', {
      page_title: document.title,
      content_group: 'blog'
    });
  </script>
</head>
<body>
  <slot />

  <!-- Scroll Depth Tracking -->
  <script define:vars={{ slug }}>
    const thresholds = [25, 50, 75, 100];
    const tracked = new Set();

    function getScrollPercent() {
      const h = document.documentElement;
      const b = document.body;
      return Math.round((h.scrollTop || b.scrollTop) /
        ((h.scrollHeight || b.scrollHeight) - h.clientHeight) * 100);
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const percent = getScrollPercent();
          thresholds.forEach(t => {
            if (percent >= t && !tracked.has(t)) {
              tracked.add(t);
              if (typeof gtag !== 'undefined') {
                gtag('event', 'scroll_depth', {
                  depth: t,
                  post_slug: slug
                });
              }
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    });

    // Reading time tracking
    let startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const seconds = Math.round((Date.now() - startTime) / 1000);
      if (typeof gtag !== 'undefined' && seconds > 5) {
        gtag('event', 'reading_time', {
          seconds: seconds,
          post_slug: slug
        });
      }
    });
  </script>
</body>
</html>
```

#### 2. Tracking de CTAs en BlogCTA.astro

```astro
---
interface Props {
  variant: 'inicio' | 'medio' | 'final';
  postSlug: string;
}

const { variant, postSlug } = Astro.props;
// ... resto del componente
---

<aside
  class={`blog-cta blog-cta--${variant}`}
  data-cta-variant={variant}
  data-post-slug={postSlug}
>
  <!-- Contenido del CTA -->
  <div class="blog-cta__buttons">
    <a href="..." class="btn btn--whatsapp" data-cta-action="whatsapp">
      WhatsApp
    </a>
    <a href="..." class="btn btn--calendar" data-cta-action="calendly">
      Agendar Reunión
    </a>
    <!-- Newsletter si aplica -->
  </div>
</aside>

<script>
  document.querySelectorAll('.blog-cta a[data-cta-action]').forEach(link => {
    link.addEventListener('click', (e) => {
      const cta = (e.target as HTMLElement).closest('.blog-cta');
      const variant = cta?.getAttribute('data-cta-variant');
      const postSlug = cta?.getAttribute('data-post-slug');
      const action = (e.target as HTMLElement).getAttribute('data-cta-action');

      if (typeof gtag !== 'undefined') {
        gtag('event', 'cta_click', {
          cta_variant: variant,
          cta_action: action,
          post_slug: postSlug
        });
      }
    });
  });
</script>
```

#### 3. Tracking de Shares en BlogShare.astro

```astro
---
interface Props {
  url: string;
  title: string;
  postSlug: string;
}
const { url, title, postSlug } = Astro.props;
---

<div class="blog-share" data-post-slug={postSlug}>
  <a href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
     target="_blank" rel="noopener" data-share-platform="linkedin">
    LinkedIn
  </a>
  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
     target="_blank" rel="noopener" data-share-platform="twitter">
    Twitter
  </a>
  <button data-share-platform="copy">Copiar enlace</button>
</div>

<script>
  document.querySelectorAll('.blog-share [data-share-platform]').forEach(el => {
    el.addEventListener('click', (e) => {
      const container = (e.target as HTMLElement).closest('.blog-share');
      const postSlug = container?.getAttribute('data-post-slug');
      const platform = (e.target as HTMLElement).getAttribute('data-share-platform');

      if (platform === 'copy') {
        navigator.clipboard.writeText(window.location.href);
      }

      if (typeof gtag !== 'undefined') {
        gtag('event', 'share', {
          method: platform,
          post_slug: postSlug
        });
      }
    });
  });
</script>
```

### Configuración de Conversiones en GA4

En la interfaz de GA4, marcar como **conversiones**:

1. `cta_click` donde `cta_action = whatsapp`
2. `cta_click` donde `cta_action = calendly`
3. `cta_click` donde `cta_action = newsletter`

### Dashboard Recomendado

Crear un dashboard en GA4 con:

1. **Resumen semanal**: Sesiones, usuarios, páginas vistas
2. **Engagement**: Scroll depth distribution, tiempo promedio
3. **Conversión**: Funnel de lectura → CTA → contacto
4. **Top posts**: Por sesiones, por conversiones, por engagement
5. **Keywords**: Integración con Search Console

---

## Calendario Editorial

### Frecuencia de Publicación

| Nivel | Posts/Mes | Recursos Necesarios | Recomendación |
|-------|-----------|---------------------|---------------|
| **Mínimo viable** | 2 | 4-6 horas/mes | Para empezar |
| **Óptimo** | 4 | 8-12 horas/mes | Después de 3 meses |
| **Agresivo** | 8 | 16-24 horas/mes | Con equipo dedicado |

### Matriz de Contenido Trimestral

| Semana | Tipo de Post | Categoría | Responsable | Keywords Target |
|--------|--------------|-----------|-------------|-----------------|
| 1 | Análisis de dictamen | Contraloría | Jacqueline | "dictamen cgr [año]" |
| 2 | Guía práctica | Funcionarios | Equipo | "sumario administrativo pasos" |
| 3 | Actualidad legal | Actualidad | Jacqueline | "[ley nueva] funcionarios" |
| 4 | Caso de estudio | Administrativo | Equipo | "defensa estatutaria caso" |

### Workflow de Producción

```
┌─────────────────────────────────────────────────────────────┐
│                 WORKFLOW DE PUBLICACIÓN                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  LUNES (Semana -1)                                         │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 1. BRIEFING                                          │   │
│  │    • Definir tema y keyword principal               │   │
│  │    • Investigar competencia SERP                    │   │
│  │    • Crear estructura de secciones                  │   │
│  └─────────────────────────────────────────────────────┘   │
│                          │                                  │
│                          ▼                                  │
│  MIÉRCOLES (Semana -1)                                     │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 2. BORRADOR                                          │   │
│  │    • Redacción completa en Google Docs              │   │
│  │    • Aplicar estilo Aylwin                          │   │
│  │    • Incluir citas normativas                       │   │
│  └─────────────────────────────────────────────────────┘   │
│                          │                                  │
│                          ▼                                  │
│  VIERNES (Semana -1)                                       │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 3. REVISIÓN                                          │   │
│  │    • Checklist editorial completo                   │   │
│  │    • Checklist estilo Aylwin                        │   │
│  │    • Preparar imagen hero                           │   │
│  └─────────────────────────────────────────────────────┘   │
│                          │                                  │
│                          ▼                                  │
│  LUNES (Semana 0)                                          │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 4. PUBLICACIÓN                                       │   │
│  │    • Crear archivo .md con frontmatter              │   │
│  │    • Subir imagen a public/blog/                    │   │
│  │    • git push (o programar publishDate)             │   │
│  └─────────────────────────────────────────────────────┘   │
│                          │                                  │
│                          ▼                                  │
│  MARTES (Semana 0)                                         │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 5. PROMOCIÓN                                         │   │
│  │    • Compartir en LinkedIn                          │   │
│  │    • Enviar a lista de newsletter                   │   │
│  │    • Verificar indexación en Search Console         │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Plantilla de Briefing (Google Docs)

```markdown
# Briefing: [Título del Post]

## Información Básica
- **Fecha objetivo**: DD/MM/YYYY
- **Categoría**: [seleccionar]
- **Autor**: Jacqueline / Equipo
- **Keyword principal**:
- **Keywords secundarias**:

## Investigación SERP
- **Top 3 resultados actuales**:
  1. [URL] - [qué cubre]
  2. [URL] - [qué cubre]
  3. [URL] - [qué cubre]
- **Gap de contenido**: ¿Qué NO cubren los competidores?
- **Ángulo diferenciador**: ¿Qué podemos aportar desde CGR?

## Estructura Propuesta
1. Hook (1 párrafo)
2. [Sección 1]
3. [Sección 2]
4. [Sección 3]
5. Implicancias prácticas
6. Conclusión

## Fuentes a Citar
- Dictamen CGR N° ___
- Ley/DFL ___
- [Otras fuentes]

## Servicios Relacionados
- [ ] Defensa Estatutaria
- [ ] Defensa Administrativa
- [ ] Otro: ___
```

---

## Monitoreo y Alertas

### Monitoreo de Builds Programados

Agregar notificación de fallas al GitHub Actions:

```yaml
# En .github/workflows/scheduled-build.yml

      - name: Build
        run: npm run build
        working-directory: astro-site

      - name: Notify on failure
        if: failure()
        uses: slackapi/slack-github-action@v1.24.0
        with:
          payload: |
            {
              "text": "⚠️ Build programado del blog JDV falló",
              "blocks": [
                {
                  "type": "section",
                  "text": {
                    "type": "mrkdwn",
                    "text": "*Build fallido*\nRevisa los logs: ${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}"
                  }
                }
              ]
            }
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
```

**Alternativa sin Slack** (notificación por email):

```yaml
      - name: Notify on failure
        if: failure()
        uses: dawidd6/action-send-mail@v3
        with:
          server_address: smtp.gmail.com
          server_port: 587
          username: ${{ secrets.EMAIL_USERNAME }}
          password: ${{ secrets.EMAIL_PASSWORD }}
          subject: "⚠️ Build del blog JDV falló"
          body: "El build programado falló. Revisa: ${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}"
          to: contacto@jdvabogados.cl
          from: GitHub Actions
```

### Checklist de Monitoreo Semanal

- [ ] Verificar que el build diario se ejecutó correctamente
- [ ] Revisar Search Console: nuevos posts indexados
- [ ] Revisar GA4: métricas de la semana
- [ ] Verificar que los posts programados se publicaron

---

## Herramienta de Scaffolding (CLI)

### Script para Crear Nuevos Posts

Para facilitar la creación de posts sin errores de YAML, crear `scripts/new-post.mjs`:

```javascript
#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

const categories = [
  { name: 'Derecho Administrativo', value: 'derecho-administrativo' },
  { name: 'Funcionarios Públicos', value: 'funcionarios-publicos' },
  { name: 'Contraloría', value: 'contraloria' },
  { name: 'Actualidad Legal', value: 'actualidad-legal' },
  { name: 'Guías Prácticas', value: 'guias-practicas' },
  { name: 'Casos de Estudio', value: 'casos-estudio' }
];

const services = [
  { name: 'Defensa Estatutaria', value: 'defensa-estatutaria' },
  { name: 'Defensa Administrativa', value: 'defensa-administrativa' },
  { name: 'Civil', value: 'civil' },
  { name: 'Cliente Senior', value: 'cliente-senior' },
  { name: 'Legado', value: 'legado' },
  { name: 'Animalista', value: 'animalista' },
  { name: 'Capacitación', value: 'capacitacion' },
  { name: 'Inmobiliaria y Copropiedad', value: 'inmobiliaria-copropiedad' }
];

async function createPost() {
  console.log('\n📝 Crear nuevo post del blog\n');

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Título del post (máx 60 caracteres):',
      validate: (input) => input.length <= 60 || 'Máximo 60 caracteres'
    },
    {
      type: 'input',
      name: 'excerpt',
      message: 'Descripción breve (máx 155 caracteres):',
      validate: (input) => input.length <= 155 || 'Máximo 155 caracteres'
    },
    {
      type: 'list',
      name: 'category',
      message: 'Categoría:',
      choices: categories
    },
    {
      type: 'checkbox',
      name: 'services',
      message: 'Servicios relacionados (1-3):',
      choices: services,
      validate: (input) => input.length >= 1 && input.length <= 3 || 'Selecciona entre 1 y 3 servicios'
    },
    {
      type: 'input',
      name: 'tags',
      message: 'Tags (separados por coma, 3-5 recomendado):'
    },
    {
      type: 'confirm',
      name: 'draft',
      message: '¿Guardar como borrador?',
      default: true
    }
  ]);

  // Generar slug desde el título
  const slug = answers.title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 50);

  // Fecha actual en formato ISO
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];
  const isoDate = now.toISOString();

  // Nombre del archivo
  const filename = `${dateStr}-${slug}.md`;
  const filepath = path.join('src', 'content', 'blog', filename);

  // Procesar tags
  const tags = answers.tags
    .split(',')
    .map(t => t.trim())
    .filter(t => t.length > 0);

  // Generar contenido
  const content = `---
title: "${answers.title}"
excerpt: "${answers.excerpt}"
publishDate: "${isoDate}"
category: "${answers.category}"
tags:
${tags.map(t => `  - "${t}"`).join('\n')}
heroImage: "/blog/${slug}.jpg"
heroAlt: "Descripción de la imagen para accesibilidad"
relatedServices:
${answers.services.map(s => `  - "${s}"`).join('\n')}
author: "jacqueline-del-valle"
featured: false
draft: ${answers.draft}
---

<!--
CHECKLIST ANTES DE PUBLICAR:
[ ] Voz institucional (nosotros, nuestro equipo)
[ ] Sin promesas de resultados
[ ] Terminología legal chilena correcta
[ ] Estilo Aylwin aplicado
[ ] Imagen hero agregada en public/blog/${slug}.jpg
[ ] draft: false cuando esté listo
-->

Párrafo introductorio que captura la atención del lector y establece el contexto.

## Primera Sección

Desarrollo del contenido...

## Segunda Sección

Más contenido...

## Implicancias Prácticas

¿Qué significa esto para el lector?

## Conclusión

Síntesis y recomendaciones. Nuestro equipo puede orientarle sobre su situación particular.
`;

  // Verificar que el directorio existe
  const dir = path.dirname(filepath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Escribir archivo
  fs.writeFileSync(filepath, content);

  console.log(`\n✅ Post creado: ${filepath}`);
  console.log(`📸 Recuerda agregar la imagen: public/blog/${slug}.jpg (1200x630px)`);
  console.log(`\nPara publicar:`);
  console.log(`  1. Edita el contenido del post`);
  console.log(`  2. Agrega la imagen hero`);
  console.log(`  3. Cambia draft: false`);
  console.log(`  4. git add . && git commit && git push\n`);
}

createPost().catch(console.error);
```

### Uso del Script

```bash
# Instalar dependencia (una vez)
npm install inquirer

# Agregar al package.json
"scripts": {
  "new-post": "node scripts/new-post.mjs"
}

# Usar
npm run new-post
```

---

## Próximos Pasos de Implementación

Una vez aprobada esta propuesta:

### Fase 1: Infraestructura (Prioridad Alta)

1. **Crear estructura de directorios**
   - `src/content/blog/`
   - `src/components/blog/`
   - `public/blog/`
   - `src/utils/`
   - `src/config/`
   - `scripts/`

2. **Actualizar `content/config.ts`** con schema del blog

3. **Crear utilidades** (`src/utils/blog.ts`)

4. **Configurar Analytics**
   - Crear cuenta GA4 y obtener ID
   - Habilitar Cloudflare Web Analytics
   - Conectar Google Search Console

### Fase 2: Componentes (Prioridad Alta)

5. **Desarrollar los 8 componentes del blog**
   - BlogHero.astro
   - BlogContent.astro
   - BlogCTA.astro (con tracking)
   - BlogAuthor.astro
   - BlogRelated.astro
   - BlogShare.astro (con tracking)
   - BlogToC.astro
   - BlogProgress.astro

6. **Crear BlogLayout.astro** (con analytics integrado)

### Fase 3: Páginas (Prioridad Alta)

7. **Crear páginas**
   - `src/pages/blog/index.astro` (listado con paginación)
   - `src/pages/blog/[...slug].astro` (plantilla dinámica)
   - `src/pages/blog/categoria/[categoria].astro` (archivo por categoría)

8. **Crear sitemap dinámico** (`src/pages/sitemap-blog.xml.ts`)

### Fase 4: DevOps (Prioridad Media)

9. **Configurar GitHub Actions**
   - Build programado diario
   - Notificaciones de falla

10. **Crear script de scaffolding** (`scripts/new-post.mjs`)

### Fase 5: Integración (Prioridad Media)

11. **Actualizar navegación**
    - Header.astro
    - MegaMenu.astro
    - FullscreenMenu.astro

12. **Crear post de ejemplo** para pruebas

### Fase 6: Documentación (Prioridad Baja)

13. **Documentar**
    - Mover plantilla de post a archivo de referencia
    - Crear guía rápida de publicación

---

*Propuesta v2.1 - Enero 2026*
*Incluye: Métricas/Analytics, Calendario Editorial, Monitoreo, Herramienta CLI*
