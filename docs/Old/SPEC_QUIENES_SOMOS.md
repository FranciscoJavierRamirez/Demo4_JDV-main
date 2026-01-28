# SPEC: Implementación de Sección "Quiénes Somos"

**Fecha:** 2026-01-27
**Versión:** 1.3
**Estado:** Listo para implementación

---

## Tabla de Contenidos

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Arquitectura de la Solución](#2-arquitectura-de-la-solución)
3. [Esquemas de Content Collection](#3-esquemas-de-content-collection)
4. [Archivos de Contenido Markdown](#4-archivos-de-contenido-markdown)
5. [Componentes Astro](#5-componentes-astro)
6. [Páginas](#6-páginas)
7. [Actualizaciones de Navegación](#7-actualizaciones-de-navegación)
8. [Patrones de Animación](#8-patrones-de-animación)
9. [Checklist de Implementación](#9-checklist-de-implementación)

---

## 1. Resumen Ejecutivo

### Contexto: Opción 4 de Lluvia de Ideas

El cliente solicitó incluir texto institucional extenso en el Hero. Se evaluaron 6 opciones y se seleccionó la **Opción 4: Dividir en Hero + sección "Quiénes Somos"**:

| # | Solución | Descripción | Pros | Contras |
|---|----------|-------------|------|---------|
| 4 | Dividir en Hero + sección "Quiénes Somos" | Hero con versión corta, texto completo en nueva sección debajo | Mejor estructura de contenido | Requiere nueva sección |

### Objetivo
Implementar la sección "Quiénes Somos" en dos ubicaciones:
1. **AboutPreview.astro** - Componente compacto para la página Home (después del Hero, antes de Stats)
2. **/nosotros** - Página completa con información detallada del equipo

### Textos Originales Proporcionados por el Cliente

**Texto institucional 1:**
> "Este Estudio fue fundado por Jacqueline Del Valle Inostroza, abogada de la Universidad de Valparaíso, con más de 30 años de experiencia en el servicio público, ocupando cargos de relevancia directiva en la Contraloría General de la República, y tiene como misión asumir la defensa de quienes se enfrentan a la vulneración de sus derechos. Su quehacer abarca diversas áreas, con cobertura nacional e internacional, prestando asesoría y defensa jurídica de calidad, ética, transparente, responsable y humana, los invitamos a conocernos y a confiar en nosotros."

**Texto institucional 2 (CV detallado de Jacqueline):**
> "JACQUELINE DEL VALLE INOSTROZA, abogada de la Universidad de Valparaíso, con 35 años de desempeño, asumiendo, entre otros, cargos directivos en la Contraloría General de la República, como la jefatura jurídica de la Contraloría Regional de Magallanes y la Antártica Chilena, jefa de Comité de la ex División de Toma de Razón y Registro, Contralora Regional de la Región de Aysén del General Carlos Ibáñez del Campo, Contralora Regional de la Región de Arica y Parinacota, Jefe de la Unidad de Personal y Responsabilidad Administrativa de la ex I Contraloría Regional Metropolitana de Santiago, diplomada en Derecho Tributario, Derecho Aduanero, y Control de Gestión y Liderazgo. Con basta experiencia en Derecho Administrativo, Derecho Público, Derecho Estatutario, Compras públicas, Juicios de Cuentas, acciones de fiscalización de Control Externo, y otras materias de largo detalle. Con un profundo sentido de servicio, un actuar probo, transparente, responsable y profundamente social y humano, los que conforman los sellos del Estudio Jurídico que fundó."

### Equipo según información del cliente

1. **Jacqueline Del Valle Inostroza** - Abogada Fundadora
2. **María Alejandra López Bertín** - Abogada Asociada
3. **Pablo Inostroza Vallejos** - Abogado Asociado
4. **Alonso Aguirre Del Valle** - Abogado Asociado

### Cargos Relevantes de Jacqueline (según CV oficial)

| Período | Cargo | Institución |
|---------|-------|-------------|
| 1994-2009 | Abogada Jefe | Contraloría Regional de Magallanes y la Antártica Chilena |
| 2010-2012 | Abogada Jefe | Comité II División de Toma de Razón y Registro, Santiago |
| 2012-2017 | Contralora Regional | Aysén del General Carlos Ibáñez del Campo |
| 2018-2020 | Contralora Regional | Arica y Parinacota |
| 2020-2024 | Jefe de Unidad | Personal y Responsabilidad Administrativa, I Contraloría Regional Metropolitana |
| 2024-2025 | Abogada Senior | Unidad Jurídica, II Contraloría Regional Metropolitana |

### Diplomados de Jacqueline
- Derecho Tributario
- Derecho Aduanero
- Control de Gestión y Liderazgo

---

## 1.1 División Semántica del Texto del Cliente (CRÍTICO)

Esta sección detalla cómo se divide el texto institucional del cliente entre **Hero** y **AboutPreview**, manteniendo coherencia semántica y flujo narrativo.

### Texto Original a Dividir (Texto 1)

> "Este Estudio fue fundado por Jacqueline Del Valle Inostroza, abogada de la Universidad de Valparaíso, con más de 30 años de experiencia en el servicio público, ocupando cargos de relevancia directiva en la Contraloría General de la República, **y tiene como misión asumir la defensa de quienes se enfrentan a la vulneración de sus derechos**. Su quehacer abarca diversas áreas, con cobertura nacional e internacional, prestando asesoría y defensa jurídica de calidad, ética, transparente, responsable y humana, los invitamos a conocernos y a confiar en nosotros."

### División Semántica Propuesta

#### PARTE 1: Hero Subtitle (Quién es + Misión fundamental)
**Ubicación:** `/astro-site/src/content/home/hero.md` → campo `subtitle`

```yaml
subtitle: "Estudio fundado por **Jacqueline Del Valle Inostroza**, abogada de la Universidad de Valparaíso con **35 años en la Contraloría General de la República**. Nuestra misión: **asumir la defensa de quienes enfrentan la vulneración de sus derechos**."
```

**Contenido semántico:**
- ✅ Presenta a la fundadora con credenciales
- ✅ Establece la misión fundamental
- ✅ Usa negritas para puntos clave
- ✅ ~230 caracteres (adecuado para Hero)

#### PARTE 2: AboutPreview Description (Ámbito + Valores + Invitación)
**Ubicación:** `/astro-site/src/content/aboutPreview/home.md` → campo `description`

```yaml
description: "Nuestro quehacer abarca diversas áreas del derecho, con cobertura nacional e internacional. Prestamos asesoría y defensa jurídica de calidad, ética, transparente, responsable y profundamente humana. Los invitamos a conocernos y a confiar en nosotros."
```

**Contenido semántico:**
- ✅ Continúa naturalmente desde el Hero
- ✅ Describe el alcance (coherente con las 10 áreas de práctica)
- ✅ Resalta los valores del estudio (textual del cliente)
- ✅ Termina con la invitación (textual del cliente)
- ✅ ~240 caracteres

### Coherencia con Servicios Actuales

El texto "diversas áreas del derecho" se respalda con las **10 áreas de práctica** (8 implementadas + 2 pendientes):

| # | Área | Descripción | Estado |
|---|------|-------------|--------|
| 1 | Defensa Estatutaria | Funcionarios públicos, procedimientos disciplinarios | ✅ Implementada |
| 2 | Defensa Administrativa | Licitaciones, procedimientos administrativos | ✅ Implementada |
| 3 | Cliente Senior | Atención domiciliaria para adultos mayores | ✅ Implementada |
| 4 | Legado | Planificación sucesoria, mascotas | ✅ Implementada |
| 5 | Civil | Conflictos civiles, cobranzas | ✅ Implementada |
| 6 | Inmobiliaria y Copropiedad | Bienes raíces, administración de edificios | ✅ Implementada |
| 7 | Animalista | Ley Cholito, protección animal | ✅ Implementada |
| 8 | Capacitación | Talleres y charlas para organizaciones | ✅ Implementada |
| 9 | Defensa Penal | Representación de víctimas de delitos y defensa ante el actuar punitivo del Estado | 🔜 Pendiente |
| 10 | Familia y Menores | Derecho de familia, protección de menores | 🔜 Pendiente |

**Nota:** Las áreas 9 y 10 están en proceso de agregarse al sitio. El MegaMenu y navegación deberán actualizarse para incluirlas.

### Segundo Texto del Cliente (CV de Jacqueline) - Uso Textual

Este texto debe ir **prácticamente textual** en:
- `/astro-site/src/content/team/jacqueline.md` → campo `description`
- `/astro-site/src/content/about/main.md` → sección de misión (contextualizado)

**Texto original (3 párrafos):**

> **Párrafo 1 - Cargos:**
> "JACQUELINE DEL VALLE INOSTROZA, abogada de la Universidad de Valparaíso, con 35 años de desempeño, asumiendo, entre otros, cargos directivos en la Contraloría General de la República, como la jefatura jurídica de la Contraloría Regional de Magallanes y la Antártica Chilena, jefa de Comité de la ex División de Toma de Razón y Registro, Contralora Regional de la Región de Aysén del General Carlos Ibáñez del Campo, Contralora Regional de la Región de Arica y Parinacota, Jefa de la Unidad de Personal y Responsabilidad Administrativa de la ex I Contraloría Regional Metropolitana de Santiago, diplomada en Derecho Tributario, Derecho Aduanero, y Control de Gestión y Liderazgo."

> **Párrafo 2 - Experiencia:**
> "Con vasta experiencia en Derecho Administrativo, Derecho Público, Derecho Estatutario, Compras públicas, Juicios de Cuentas, acciones de fiscalización de Control Externo, y otras materias de largo detalle."

> **Párrafo 3 - Valores/Sellos:**
> "Con un profundo sentido de servicio, un actuar probo, transparente, responsable y profundamente social y humano, los que conforman los sellos del Estudio Jurídico que fundó."

### Resumen de Ubicación de Contenidos

| Contenido | Ubicación | Forma |
|-----------|-----------|-------|
| Quién + Misión | Hero subtitle | Versión condensada |
| Ámbito + Valores + Invitación | AboutPreview description | Continuación semántica |
| CV completo Jacqueline | team/jacqueline.md | Textual (3 párrafos) |
| Texto institucional completo | about/main.md (misión) | Textual original |

---

## 2. Arquitectura de la Solución

### Estructura de Archivos a Crear

```
/astro-site/
├── src/
│   ├── components/
│   │   ├── home/
│   │   │   └── AboutPreview.astro       # NUEVO - Preview para Home
│   │   └── about/                        # NUEVO - Carpeta
│   │       ├── AboutHero.astro           # Hero de la página /nosotros
│   │       ├── AboutMission.astro        # Misión y valores
│   │       ├── AboutTeam.astro           # Grid del equipo
│   │       └── AboutCTA.astro            # CTA final
│   ├── content/
│   │   ├── config.ts                     # MODIFICAR - Agregar schemas
│   │   ├── aboutPreview/                 # NUEVO - Carpeta
│   │   │   └── home.md                   # Contenido AboutPreview
│   │   ├── about/                        # NUEVO - Carpeta
│   │   │   └── main.md                   # Contenido página principal
│   │   └── team/                         # NUEVO - Carpeta
│   │       ├── jacqueline.md             # Abogada Fundadora
│   │       ├── maria-alejandra.md        # Abogada Asociada
│   │       ├── pablo.md                  # Abogado Asociado
│   │       └── alonso.md                 # Abogado Asociado
│   ├── layouts/
│   │   └── AboutLayout.astro             # NUEVO - Layout para /nosotros
│   └── pages/
│       ├── index.astro                   # MODIFICAR - Agregar AboutPreview
│       └── nosotros.astro                # NUEVO - Página completa
└── public/
    └── team/                             # NUEVO - Carpeta
        ├── jacqueline.jpg                # Placeholder o imagen real
        ├── maria-alejandra.jpg           # Placeholder
        ├── pablo.jpg                     # Placeholder
        └── alonso.jpg                    # Placeholder
```

### Archivos a Modificar

1. `/astro-site/src/content/config.ts` - Agregar 3 nuevos schemas
2. `/astro-site/src/pages/index.astro` - Importar y ubicar AboutPreview
3. `/astro-site/src/components/nav/Header.astro` - Actualizar enlace "Quiénes Somos"
4. `/astro-site/src/components/nav/MegaMenu.astro` - Actualizar enlace
5. `/astro-site/src/components/nav/FullscreenMenu.astro` - Actualizar enlace móvil
6. `/astro-site/src/components/home/Footer.astro` - Actualizar enlace en footer
7. `/astro-site/src/content/home/hero.md` - Actualizar subtitle

---

## 3. Esquemas de Content Collection

### Archivo: `/astro-site/src/content/config.ts`

Agregar las siguientes colecciones al archivo existente:

```typescript
// ============================================
// NUEVAS COLECCIONES PARA "QUIÉNES SOMOS"
// ============================================

// Colección: aboutPreview (para componente Home)
const aboutPreviewCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Badge superior
    badge: z.object({
      icon: z.string(),
      text: z.string(),
    }),

    // Título de sección
    title: z.string(),

    // Subtítulo breve
    subtitle: z.string(),

    // Texto descriptivo (versión corta)
    description: z.string(),

    // Miembros del equipo para preview (4 miembros)
    teamPreview: z.array(z.object({
      name: z.string(),
      role: z.string(),
      image: z.string(),
      featured: z.boolean().optional(), // Para destacar a la fundadora
    })),

    // CTA para ver más
    cta: z.object({
      text: z.string(),
      href: z.string(),
      icon: z.string(),
    }),
  }),
});

// Colección: about (contenido página principal /nosotros)
const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // SEO
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),

    // Hero de la página
    hero: z.object({
      badge: z.object({
        icon: z.string(),
        text: z.string(),
      }),
      title: z.string(),
      subtitle: z.string(),
      // Imagen de fondo para AboutHero (consistente con Hero.astro)
      image: z.string().optional(),
    }),

    // Sección Misión
    mission: z.object({
      title: z.string(),
      text: z.string(),
      values: z.array(z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      })),
    }),

    // Sección Equipo
    team: z.object({
      title: z.string(),
      subtitle: z.string(),
    }),

    // CTA Final
    cta: z.object({
      title: z.string(),
      text: z.string(),
      button: z.object({
        text: z.string(),
        icon: z.string(),
      }),
    }),
  }),
});

// Colección: team (miembros individuales)
const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Orden de aparición (1, 2, 3...)
    order: z.number(),

    // Información básica
    name: z.string(),
    role: z.string(),

    // Descripción larga (para página completa)
    description: z.string(),

    // Descripción corta (para preview)
    shortDescription: z.string().optional(),

    // Imagen
    image: z.string(),

    // Destacado (fundadora)
    featured: z.boolean().optional(),

    // Nota sobre experiencia (para abogados asociados que trabajan bajo dirección de Jacqueline)
    experienceNote: z.string().optional(),

    // Especialidades (opcional, para mostrar áreas de enfoque)
    specialties: z.array(z.string()).optional(),

    // Credenciales/logros (opcional)
    credentials: z.array(z.string()).optional(),

    // Redes sociales (opcional)
    social: z.object({
      linkedin: z.string().optional(),
      email: z.string().optional(),
    }).optional(),
  }),
});
```

### Agregar al export de collections:

```typescript
export const collections = {
  // ... colecciones existentes ...
  home: homeCollection,
  stats: statsCollection,
  trustBadges: trustBadgesCollection,
  areas: areasCollection,
  benefits: benefitsCollection,
  proBono: proBonoCollection,
  faq: faqCollection,
  newsletter: newsletterCollection,
  cta: ctaCollection,
  footer: footerCollection,
  modal: modalCollection,
  practices: practicesCollection,
  // NUEVAS COLECCIONES
  aboutPreview: aboutPreviewCollection,
  about: aboutCollection,
  team: teamCollection,
};
```

---

## 4. Archivos de Contenido Markdown

### 4.1 AboutPreview para Home

**Archivo:** `/astro-site/src/content/aboutPreview/home.md`

> **NOTA:** Este contenido es la CONTINUACIÓN SEMÁNTICA del Hero subtitle. Juntos forman el mensaje institucional completo del cliente.

```markdown
---
badge:
  icon: "fas fa-users"
  text: "Conócenos"

title: "Quiénes Somos"

subtitle: "35 años de experiencia de Jacqueline Del Valle, respaldada por un equipo comprometido"

# PARTE 2 del texto del cliente: Ámbito + Valores + Invitación
description: "Nuestro quehacer abarca diversas áreas del derecho, con cobertura nacional e internacional. Prestamos asesoría y defensa jurídica de calidad, ética, transparente, responsable y profundamente humana. Los invitamos a conocernos y a confiar en nosotros."

teamPreview:
  - name: "Jacqueline Del Valle"
    role: "Abogada Fundadora"
    image: "/team/jacqueline.jpg"
    featured: true
  - name: "María Alejandra López"
    role: "Abogada Asociada"
    image: "/team/maria-alejandra.jpg"
  - name: "Pablo Inostroza"
    role: "Abogado Asociado"
    image: "/team/pablo.jpg"
  - name: "Alonso Aguirre"
    role: "Abogado Asociado"
    image: "/team/alonso.jpg"

cta:
  text: "Conoce a Nuestro Equipo"
  href: "/nosotros"
  icon: "fas fa-arrow-right"
---
```

### 4.2 Contenido Página /nosotros

**Archivo:** `/astro-site/src/content/about/main.md`

```markdown
---
seo:
  title: "Quiénes Somos | JDV & Abogados"
  description: "Conoce al equipo de JDV & Abogados. Jacqueline Del Valle Inostroza, con 35 años en la Contraloría General de la República, lidera nuestra misión de defensa legal especializada para funcionarios públicos."

hero:
  badge:
    icon: "fas fa-landmark"
    text: "JDV & Abogados"
  title: "Quiénes Somos"
  subtitle: "Defensa jurídica de calidad, ética, transparente, responsable y humana"
  image: "/about/hero-bg.jpg"  # Imagen de fondo (opcional, ver Sección 10.1)

mission:
  title: "Nuestra Misión"
  text: "Este Estudio fue fundado por Jacqueline Del Valle Inostroza, abogada de la Universidad de Valparaíso, con 35 años de experiencia en el servicio público, ocupando cargos de relevancia directiva en la Contraloría General de la República. Nuestra misión es asumir la defensa de quienes se enfrentan a la vulneración de sus derechos. Nuestro quehacer abarca diversas áreas, con cobertura nacional e internacional, prestando asesoría y defensa jurídica de calidad, ética, transparente, responsable y humana. Los invitamos a conocernos y a confiar en nosotros.\n\nNuestra experiencia proviene de los 35 años de trayectoria de Jacqueline Del Valle en la Contraloría General de la República, respaldada por un equipo de abogados comprometidos que trabajan bajo su dirección y guía profesional."
  values:
    - icon: "fas fa-balance-scale"
      title: "Ética"
      description: "Actuar probo, transparente y responsable en cada gestión"
    - icon: "fas fa-gavel"
      title: "Experiencia"
      description: "35 años de trayectoria en derecho administrativo y defensa estatutaria"
    - icon: "fas fa-hand-holding-heart"
      title: "Compromiso Social"
      description: "Profundo sentido de servicio y trato humano"
    - icon: "fas fa-shield-alt"
      title: "Especialización"
      description: "Derecho Administrativo, Público, Estatutario y Compras Públicas"

team:
  title: "Nuestro Equipo"
  subtitle: "Profesionales comprometidos con tu defensa"

cta:
  title: "¿Necesitas Asesoría Legal?"
  text: "Agenda una consulta con nuestro equipo de expertos. Primera asesoría sin compromiso."
  button:
    text: "Agenda tu Consulta"
    icon: "fab fa-whatsapp"
---
```

### 4.3 Miembros del Equipo

**Archivo:** `/astro-site/src/content/team/jacqueline.md`

```markdown
---
order: 1
name: "Jacqueline Del Valle Inostroza"
role: "Abogada Fundadora"
description: "Abogada de la Universidad de Valparaíso, con 35 años de desempeño, asumiendo, entre otros, cargos directivos en la Contraloría General de la República, como la jefatura jurídica de la Contraloría Regional de Magallanes y la Antártica Chilena, jefa de Comité de la ex División de Toma de Razón y Registro, Contralora Regional de la Región de Aysén del General Carlos Ibáñez del Campo, Contralora Regional de la Región de Arica y Parinacota, Jefa de la Unidad de Personal y Responsabilidad Administrativa de la ex I Contraloría Regional Metropolitana de Santiago, diplomada en Derecho Tributario, Derecho Aduanero, y Control de Gestión y Liderazgo. Con vasta experiencia en Derecho Administrativo, Derecho Público, Derecho Estatutario, Compras públicas, Juicios de Cuentas, acciones de fiscalización de Control Externo, y otras materias de largo detalle. Con un profundo sentido de servicio, un actuar probo, transparente, responsable y profundamente social y humano, los que conforman los sellos del Estudio Jurídico que fundó."
shortDescription: "35 años en CGR · Contralora Regional · Universidad de Valparaíso"
image: "/team/jacqueline.jpg"
featured: true
credentials:
  - "Contralora Regional de Aysén (2012-2017)"
  - "Contralora Regional de Arica y Parinacota (2018-2020)"
  - "Abogada Jefe Contraloría Regional de Magallanes (1994-2009)"
  - "Diplomada en Derecho Tributario y Aduanero"
social:
  email: "jacqueline@jdvabogados.cl"
---
```

**Archivo:** `/astro-site/src/content/team/maria-alejandra.md`

```markdown
---
order: 2
name: "María Alejandra López Bertín"
role: "Abogada Asociada"
description: "Abogada integrante del equipo de JDV & Abogados, aporta su formación profesional y compromiso en la atención de casos. Trabaja bajo la dirección y experiencia de Jacqueline Del Valle, contribuyendo en la gestión de procedimientos y defensa de los derechos de nuestros clientes."
shortDescription: "Abogada · Equipo JDV & Abogados"
image: "/team/maria-alejandra.jpg"
featured: false
experienceNote: "Forma parte del equipo liderado por Jacqueline Del Valle"
credentials:
  - "Abogada"
social:
  email: "contacto@jdvabogados.cl"
---
```

**Archivo:** `/astro-site/src/content/team/pablo.md`

```markdown
---
order: 3
name: "Pablo Inostroza Vallejos"
role: "Abogado Asociado"
description: "Abogado integrante del equipo de JDV & Abogados, contribuye con su formación y dedicación en la atención de los casos del estudio. Trabaja bajo la dirección y experiencia de Jacqueline Del Valle, apoyando en la defensa legal y gestión de procedimientos de nuestros clientes."
shortDescription: "Abogado · Equipo JDV & Abogados"
image: "/team/pablo.jpg"
featured: false
experienceNote: "Forma parte del equipo liderado por Jacqueline Del Valle"
credentials:
  - "Abogado"
social:
  email: "contacto@jdvabogados.cl"
---
```

**Archivo:** `/astro-site/src/content/team/alonso.md`

```markdown
---
order: 4
name: "Alonso Aguirre Del Valle"
role: "Abogado Asociado"
description: "Abogado integrante del equipo de JDV & Abogados, aporta su formación profesional y dedicación en la gestión de casos. Trabaja bajo la dirección y experiencia de Jacqueline Del Valle, reforzando el compromiso del estudio con la defensa de los derechos de nuestros clientes."
shortDescription: "Abogado · Equipo JDV & Abogados"
image: "/team/alonso.jpg"
featured: false
experienceNote: "Forma parte del equipo liderado por Jacqueline Del Valle"
credentials:
  - "Abogado"
social:
  email: "contacto@jdvabogados.cl"
---
```

---

## 5. Componentes Astro

### 5.1 AboutPreview.astro (Componente Home)

**Archivo:** `/astro-site/src/components/home/AboutPreview.astro`

```astro
---
import { getEntry } from 'astro:content';

const aboutPreviewData = await getEntry('aboutPreview', 'home');

if (!aboutPreviewData?.data) {
  throw new Error("AboutPreview data not found from content collection");
}

const { badge, title, subtitle, description, teamPreview, cta } = aboutPreviewData.data;
---

<section id="about-preview" class="relative py-20 md:py-24 bg-linear-to-b from-white via-[#fafbfc] to-[#f0f4f8] overflow-hidden">
  <!-- Decorative Background Elements -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.08] bg-[radial-gradient(circle,var(--blue-primary)_0%,transparent_70%)] animate-[float_20s_ease-in-out_infinite]"></div>
    <div class="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.06] bg-[radial-gradient(circle,var(--gold)_0%,transparent_70%)] animate-[float_25s_ease-in-out_infinite_reverse]"></div>
  </div>

  <div class="container relative z-10">
    <!-- Section Header -->
    <div class="about-header text-center mb-12 md:mb-16">
      <!-- Badge -->
      <span class="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-(--gray-200) text-sm font-semibold text-(--gray-700) mb-4 shadow-sm">
        <i class={`${badge.icon} text-(--gold)`}></i>
        {badge.text}
      </span>

      <!-- Title -->
      <h2 class="text-[clamp(2rem,4vw,3rem)] font-bold text-(--gray-900) mb-4" style="font-family: var(--font-display);">
        {title}
      </h2>

      <!-- Subtitle -->
      <p class="text-lg text-(--gray-600) max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>

    <!-- Content Grid: Description + Team Preview -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      <!-- Left: Description -->
      <div class="about-content">
        <p class="text-lg leading-relaxed text-(--gray-700) mb-8">
          {description}
        </p>

        <!-- CTA Button -->
        <a
          href={cta.href}
          class="group inline-flex items-center gap-3 px-6 py-3.5 bg-linear-to-br from-(--blue-primary) to-(--blue-dark) text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
        >
          <span>{cta.text}</span>
          <i class={`${cta.icon} transition-transform duration-300 group-hover:translate-x-1`}></i>
        </a>
      </div>

      <!-- Right: Team Preview Cards -->
      <div class="team-preview-grid grid grid-cols-3 gap-4 md:gap-6">
        {teamPreview.map((member, index) => (
          <div
            class="team-preview-card group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white"
            data-index={index}
          >
            <!-- Image Container -->
            <div class="aspect-[3/4] overflow-hidden bg-(--gray-100)">
              <img
                src={member.image}
                alt={member.name}
                class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <!-- Name Overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-[rgba(12,35,64,0.95)] via-[rgba(12,35,64,0.7)] to-transparent">
              <p class="text-white font-bold text-sm leading-tight truncate">{member.name.split(' ')[0]}</p>
              <p class="text-white/80 text-xs truncate">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<style>
  /* ========================================
     AboutPreview Scroll Reveal Animations
     ======================================== */

  /* Header entrance */
  .about-header {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .about-header.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Content entrance */
  .about-content {
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .about-content.visible {
    opacity: 1;
    transform: translateX(0);
  }

  /* Team preview cards entrance */
  .team-preview-card {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }

  .team-preview-card.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* Staggered delays */
  .team-preview-card[data-index="0"].visible { transition-delay: 0ms; }
  .team-preview-card[data-index="1"].visible { transition-delay: 150ms; }
  .team-preview-card[data-index="2"].visible { transition-delay: 300ms; }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .about-header,
    .about-content,
    .team-preview-card {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
</style>

<script>
  // ========================================
  // AboutPreview - Scroll Reveal Animation
  // ========================================
  const initAboutPreviewAnimation = () => {
    const section = document.querySelector('#about-preview');
    const header = section?.querySelector('.about-header');
    const content = section?.querySelector('.about-content');
    const cards = section?.querySelectorAll('.team-preview-card');

    if (!section) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      header?.classList.add('visible');
      content?.classList.add('visible');
      cards?.forEach(card => card.classList.add('visible'));
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate header first
          header?.classList.add('visible');

          // Animate content after header
          setTimeout(() => {
            content?.classList.add('visible');
          }, 200);

          // Animate cards with stagger
          cards?.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('visible');
            }, 400 + (index * 150));
          });

          revealObserver.disconnect();
        }
      });
    }, observerOptions);

    revealObserver.observe(section);
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAboutPreviewAnimation);
  } else {
    initAboutPreviewAnimation();
  }
</script>
```

### 5.2 AboutHero.astro (Página /nosotros)

**Archivo:** `/astro-site/src/components/about/AboutHero.astro`

> **⚠️ CRÍTICO:** Este componente DEBE seguir las directrices de la Sección 10.1 para mantener coherencia visual con Hero.astro

```astro
---
interface Props {
  badge: {
    icon: string;
    text: string;
  };
  title: string;
  subtitle: string;
  image?: string;
}

const { badge, title, subtitle, image } = Astro.props;
---

<section class="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden bg-(--blue-deeper)">
  <!-- Complex Mesh Gradient Background - IGUAL QUE Hero.astro -->
  <div class="absolute inset-0 z-0">
    <!-- Orb 1: Azul principal -->
    <div class="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.4)_0%,transparent_70%)] blur-[120px] animate-[float_20s_ease-in-out_infinite]"></div>

    <!-- Orb 2: Azul secundario -->
    <div class="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.4)_0%,transparent_70%)] blur-[100px] animate-[float_25s_ease-in-out_infinite_reverse]"></div>

    <!-- Orb 3: Dorado (CRÍTICO - mantiene coherencia con Hero.astro) -->
    <div class="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-[radial-gradient(circle,rgba(201,162,84,0.15)_0%,transparent_70%)] blur-[80px] animate-[float_15s_ease-in-out_infinite_5s]"></div>
  </div>

  <!-- Noise Texture Overlay -->
  <div class="absolute inset-0 z-2 opacity-[0.03] pointer-events-none mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E');"></div>

  <!-- Background Image with Overlay (si hay imagen) -->
  {image && (
    <img
      src={image}
      alt=""
      class="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-overlay blur-[2px] scale-105"
      loading="eager"
    />
  )}

  <!-- Gradient Overlay for Legibility -->
  <div class="absolute inset-0 z-3 bg-linear-to-br from-[rgba(12,35,64,0.98)] via-[rgba(12,35,64,0.94)] to-[rgba(26,77,122,0.88)]"></div>

  <!-- Content -->
  <div class="container relative z-10 text-center text-white">
    <!-- Badge -->
    <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 text-sm font-semibold mb-6 opacity-0 animate-[slideInDown_0.6s_ease-out_forwards]">
      <i class={`${badge.icon} text-(--gold)`}></i>
      <span>{badge.text}</span>
    </div>

    <!-- Title con gradient dorado (igual que Hero.astro) -->
    <h1 class="text-[clamp(2.5rem,5vw,4rem)] font-black leading-tight mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.1s_forwards]" style="font-family: var(--font-display);">
      <span class="inline-block bg-linear-to-br from-[#FDFBF7] via-[#E5D5AA] to-[#C9A254] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
        {title}
      </span>
    </h1>

    <!-- Subtitle -->
    <p class="text-xl text-white/90 max-w-2xl mx-auto opacity-0 animate-[fadeInUp_0.8s_ease-out_0.25s_forwards]">
      {subtitle}
    </p>
  </div>
</section>

<style>
  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .animate-\\[float_20s_ease-in-out_infinite\\],
    .animate-\\[float_25s_ease-in-out_infinite_reverse\\],
    .animate-\\[float_15s_ease-in-out_infinite_5s\\] {
      animation: none;
    }

    .animate-\\[slideInDown_0\\.6s_ease-out_forwards\\],
    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.1s_forwards\\],
    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.25s_forwards\\] {
      opacity: 1;
      animation: none;
    }
  }
</style>
```

### 5.3 AboutMission.astro

**Archivo:** `/astro-site/src/components/about/AboutMission.astro`

```astro
---
interface Value {
  icon: string;
  title: string;
  description: string;
}

interface Props {
  title: string;
  text: string;
  values: Value[];
}

const { title, text, values } = Astro.props;
---

<section id="mission" class="relative py-20 bg-linear-to-b from-white to-[#f8fafc] overflow-hidden">
  <!-- Decorative Background -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.06] bg-[radial-gradient(circle,var(--blue-primary)_0%,transparent_70%)]"></div>
  </div>

  <div class="container relative z-10">
    <!-- Mission Statement -->
    <div class="mission-header max-w-3xl mx-auto text-center mb-16">
      <h2 class="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-(--gray-900) mb-6" style="font-family: var(--font-display);">
        {title}
      </h2>
      <p class="text-lg leading-relaxed text-(--gray-700)">
        {text}
      </p>
    </div>

    <!-- Values Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map((value, index) => (
        <div
          class="value-card group p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-(--gray-100) transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:border-(--gold)/30"
          data-index={index}
        >
          <!-- Icon -->
          <div class="w-14 h-14 flex items-center justify-center bg-linear-to-br from-(--blue-primary)/10 to-(--blue-primary)/5 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
            <i class={`${value.icon} text-xl text-(--blue-primary)`}></i>
          </div>

          <!-- Title -->
          <h3 class="text-lg font-bold text-(--gray-900) mb-2" style="font-family: var(--font-display);">
            {value.title}
          </h3>

          <!-- Description -->
          <p class="text-sm text-(--gray-600) leading-relaxed">
            {value.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<style>
  /* Mission header entrance */
  .mission-header {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .mission-header.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Value cards entrance */
  .value-card {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }

  .value-card.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* Staggered delays */
  .value-card[data-index="0"].visible { transition-delay: 0ms; }
  .value-card[data-index="1"].visible { transition-delay: 100ms; }
  .value-card[data-index="2"].visible { transition-delay: 200ms; }
  .value-card[data-index="3"].visible { transition-delay: 300ms; }

  @media (prefers-reduced-motion: reduce) {
    .mission-header,
    .value-card {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
</style>

<script>
  const initMissionAnimation = () => {
    const section = document.querySelector('#mission');
    const header = section?.querySelector('.mission-header');
    const cards = section?.querySelectorAll('.value-card');

    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      header?.classList.add('visible');
      cards?.forEach(card => card.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          header?.classList.add('visible');

          cards?.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('visible');
            }, 200 + (index * 100));
          });

          observer.disconnect();
        }
      });
    }, { threshold: 0.15 });

    observer.observe(section);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMissionAnimation);
  } else {
    initMissionAnimation();
  }
</script>
```

### 5.4 AboutTeam.astro

**Archivo:** `/astro-site/src/components/about/AboutTeam.astro`

```astro
---
import { getCollection } from 'astro:content';

interface Props {
  title: string;
  subtitle: string;
}

const { title, subtitle } = Astro.props;

// Obtener todos los miembros del equipo ordenados
const teamMembers = await getCollection('team');
const sortedMembers = teamMembers.sort((a, b) => a.data.order - b.data.order);
---

<section id="team" class="relative py-20 bg-(--blue-deeper) overflow-hidden">
  <!-- Background Effects -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px); background-size: 50px 50px;"></div>
    <div class="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_70%)] blur-[100px] rounded-full"></div>
    <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(201,162,84,0.08)_0%,transparent_70%)] blur-[100px] rounded-full"></div>
  </div>

  <div class="container relative z-10">
    <!-- Section Header -->
    <div class="team-header text-center mb-16">
      <h2 class="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-4" style="font-family: var(--font-display);">
        {title}
      </h2>
      <p class="text-lg text-white/80 max-w-xl mx-auto">
        {subtitle}
      </p>
      <div class="w-24 h-1 bg-linear-to-r from-(--gold) to-transparent mx-auto mt-6 rounded-full opacity-80"></div>
    </div>

    <!-- Team Grid: 4 miembros - Jacqueline destacada más grande -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {sortedMembers.map((member, index) => (
        <div
          class={`team-card group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 ${member.data.featured ? 'md:row-span-1 shadow-[0_8px_40px_rgba(201,169,97,0.2)]' : 'shadow-xl'}`}
          data-index={index}
        >
          <!-- Image -->
          <div class="aspect-[3/4] overflow-hidden bg-(--gray-800)">
            <img
              src={member.data.image}
              alt={member.data.name}
              class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          </div>

          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-linear-to-t from-[rgba(12,35,64,0.98)] via-[rgba(12,35,64,0.4)] to-transparent"></div>

          <!-- Content -->
          <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
            {member.data.featured && (
              <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-(--gold)/20 backdrop-blur-sm rounded-full text-xs font-semibold text-(--gold-light) mb-3 border border-(--gold)/30">
                <i class="fas fa-star text-[10px]"></i>
                Fundadora
              </span>
            )}

            <h3 class="text-xl font-bold mb-1" style="font-family: var(--font-display);">
              {member.data.name}
            </h3>

            <p class="text-white/70 text-sm font-medium mb-3">
              {member.data.role}
            </p>

            <p class="text-white/60 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
              {member.data.shortDescription || member.data.description}
            </p>

            {member.data.credentials && member.data.credentials.length > 0 && (
              <div class="mt-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ul class="space-y-1">
                  {member.data.credentials.slice(0, 2).map(credential => (
                    <li class="flex items-center gap-2 text-xs text-white/70">
                      <i class="fas fa-check text-(--gold) text-[10px]"></i>
                      {credential}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Featured border glow */}
          {member.data.featured && (
            <div class="absolute inset-0 rounded-3xl border-2 border-(--gold)/30 pointer-events-none"></div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

<style>
  /* Team header entrance */
  .team-header {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .team-header.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Team cards entrance */
  .team-card {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
  }

  .team-card.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* Staggered delays para 4 miembros */
  .team-card[data-index="0"].visible { transition-delay: 0ms; }
  .team-card[data-index="1"].visible { transition-delay: 150ms; }
  .team-card[data-index="2"].visible { transition-delay: 300ms; }
  .team-card[data-index="3"].visible { transition-delay: 450ms; }

  /* Line clamp utility */
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .group:hover .line-clamp-none {
    -webkit-line-clamp: unset;
  }

  @media (prefers-reduced-motion: reduce) {
    .team-header,
    .team-card {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
</style>

<script>
  const initTeamAnimation = () => {
    const section = document.querySelector('#team');
    const header = section?.querySelector('.team-header');
    const cards = section?.querySelectorAll('.team-card');

    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      header?.classList.add('visible');
      cards?.forEach(card => card.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          header?.classList.add('visible');

          cards?.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('visible');
            }, 300 + (index * 150));
          });

          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(section);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTeamAnimation);
  } else {
    initTeamAnimation();
  }
</script>
```

### 5.5 AboutCTA.astro

**Archivo:** `/astro-site/src/components/about/AboutCTA.astro`

```astro
---
interface Props {
  title: string;
  text: string;
  button: {
    text: string;
    icon: string;
  };
}

const { title, text, button } = Astro.props;

const whatsappUrl = "https://wa.me/56965870256?text=Necesito%20m%C3%A1s%20informaci%C3%B3n%20porque%20estoy%20interesado%20en%20recibir%20asesor%C3%ADa%20legal";
---

<section id="about-cta" class="relative py-20 bg-linear-to-br from-(--blue-primary) via-(--blue-dark) to-(--blue-deeper) overflow-hidden">
  <!-- Background Effects -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,162,84,0.15)_0%,transparent_70%)] blur-[100px] rounded-full animate-[float_15s_ease-in-out_infinite]"></div>
  </div>

  <div class="container relative z-10 text-center">
    <div class="cta-content max-w-2xl mx-auto">
      <h2 class="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-white mb-4" style="font-family: var(--font-display);">
        {title}
      </h2>

      <p class="text-lg text-white/85 mb-8">
        {text}
      </p>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-3 px-8 py-4 bg-linear-to-br from-[#1a365d] via-[#1e3a5f] to-[#0f172a] border-2 border-[rgba(201,169,97,0.4)] rounded-xl font-bold shadow-[0_4px_20px_rgba(0,0,0,0.3),0_0_30px_rgba(201,169,97,0.15)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[rgba(201,169,97,0.6)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4),0_0_40px_rgba(201,169,97,0.25)]"
      >
        <span class="bg-linear-to-r from-[#C9A961] via-[#E5D5AA] to-[#D4AF37] bg-clip-text text-transparent text-lg">
          {button.text}
        </span>
        <i class={`${button.icon} text-xl text-[#C9A961] transition-transform group-hover:scale-110`}></i>
      </a>
    </div>
  </div>
</section>

<style>
  .cta-content {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .cta-content.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    .cta-content {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
</style>

<script>
  const initAboutCTAAnimation = () => {
    const section = document.querySelector('#about-cta');
    const content = section?.querySelector('.cta-content');

    if (!section || !content) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      content.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          content.classList.add('visible');
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    observer.observe(section);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAboutCTAAnimation);
  } else {
    initAboutCTAAnimation();
  }
</script>
```

---

## 6. Páginas

### 6.1 Modificar index.astro (Home)

**Archivo:** `/astro-site/src/pages/index.astro`

Agregar import y ubicar AboutPreview después de Hero:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/nav/Header.astro';
import Hero from '../components/Hero.astro';
import AboutPreview from '../components/home/AboutPreview.astro';  // NUEVO
import Stats from '../components/home/Stats.astro';
import TrustBadges from '../components/home/TrustBadges.astro';
import AreasGrid from '../components/home/AreasGrid.astro';
import Benefits from '../components/home/Benefits.astro';
import ProBono from '../components/home/ProBono.astro';
import FAQ from '../components/home/FAQ.astro';
import CTA from '../components/home/CTA.astro';
import Footer from '../components/home/Footer.astro';
import Modal from '../components/home/Modal.astro';
import WhatsAppFloat from '../components/WhatsAppFloat.astro';
import BackToTop from '../components/BackToTop.astro';
---

<BaseLayout>
  <!-- Navigation -->
  <Header />

  <!-- Hero Section -->
  <Hero />

  <!-- About Preview Section -->  <!-- NUEVO -->
  <AboutPreview />

  <!-- Stats Section -->
  <Stats />

  <!-- Trust Badges -->
  <TrustBadges />

  <!-- Practice Areas Grid -->
  <AreasGrid />

  <!-- Benefits Section -->
  <Benefits />

  <!-- Pro Bono Section -->
  <ProBono />

  <!-- FAQ Section -->
  <FAQ />

  <!-- CTA Section -->
  <CTA />

  <!-- Footer -->
  <Footer />

  <!-- Modal -->
  <Modal />

  <!-- WhatsApp Float -->
  <WhatsAppFloat />

  <!-- Back to Top -->
  <BackToTop />
</BaseLayout>
```

### 6.2 Crear AboutLayout.astro

**Archivo:** `/astro-site/src/layouts/AboutLayout.astro`

```astro
---
import BaseLayout from './BaseLayout.astro';

interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<BaseLayout title={title} description={description}>
  <slot />
</BaseLayout>
```

### 6.3 Crear nosotros.astro

**Archivo:** `/astro-site/src/pages/nosotros.astro`

```astro
---
import { getEntry } from 'astro:content';
import AboutLayout from '../layouts/AboutLayout.astro';
import Header from '../components/nav/Header.astro';
import AboutHero from '../components/about/AboutHero.astro';
import AboutMission from '../components/about/AboutMission.astro';
import AboutTeam from '../components/about/AboutTeam.astro';
import AboutCTA from '../components/about/AboutCTA.astro';
import Footer from '../components/home/Footer.astro';
import WhatsAppFloat from '../components/WhatsAppFloat.astro';
import BackToTop from '../components/BackToTop.astro';

// Obtener contenido
const aboutData = await getEntry('about', 'main');

if (!aboutData?.data) {
  throw new Error("About data not found from content collection");
}

const { seo, hero, mission, team, cta } = aboutData.data;
---

<AboutLayout title={seo.title} description={seo.description}>
  <!-- Navigation -->
  <Header />

  <!-- Hero Section -->
  <AboutHero
    badge={hero.badge}
    title={hero.title}
    subtitle={hero.subtitle}
  />

  <!-- Mission Section -->
  <AboutMission
    title={mission.title}
    text={mission.text}
    values={mission.values}
  />

  <!-- Team Section -->
  <AboutTeam
    title={team.title}
    subtitle={team.subtitle}
  />

  <!-- CTA Section -->
  <AboutCTA
    title={cta.title}
    text={cta.text}
    button={cta.button}
  />

  <!-- Footer -->
  <Footer />

  <!-- WhatsApp Float -->
  <WhatsAppFloat />

  <!-- Back to Top -->
  <BackToTop />
</AboutLayout>
```

---

## 7. Actualizaciones de Navegación

### 7.1 Header.astro

**Archivo:** `/astro-site/src/components/nav/Header.astro`

Buscar el enlace "Quiénes Somos" y cambiar `href="/"` por `href="/nosotros"`:

```astro
<!-- Antes -->
<a href="/" class="...">Quiénes Somos</a>

<!-- Después -->
<a href="/nosotros" class="...">Quiénes Somos</a>
```

### 7.2 MegaMenu.astro

**Archivo:** `/astro-site/src/components/nav/MegaMenu.astro`

Buscar cualquier referencia a "Quiénes Somos" y actualizar href a `/nosotros`.

### 7.3 FullscreenMenu.astro

**Archivo:** `/astro-site/src/components/nav/FullscreenMenu.astro`

Buscar el enlace móvil "Quiénes Somos" y actualizar:

```astro
<!-- Antes -->
<a href="/" class="...">Quiénes Somos</a>

<!-- Después -->
<a href="/nosotros" class="...">Quiénes Somos</a>
```

### 7.4 Footer.astro

**Archivo:** `/astro-site/src/components/home/Footer.astro`

Buscar el enlace "Quiénes Somos" en la columna "Empresa" y actualizar:

```astro
<!-- Antes -->
<a href="/" class="...">Quiénes Somos</a>

<!-- Después -->
<a href="/nosotros" class="...">Quiénes Somos</a>
```

---

## 8. Patrones de Animación

### 8.1 Timing Functions Estándar

El proyecto usa consistentemente:

```css
/* Easing principal para entradas elegantes */
cubic-bezier(0.16, 1, 0.3, 1)

/* Duraciones estándar */
0.6s - 0.8s para entradas principales
0.3s para hovers y transiciones rápidas
```

### 8.2 Estructura de Animación Scroll-Reveal

```typescript
// Patrón estándar usado en Stats, Benefits, etc.
const initAnimation = () => {
  const section = document.querySelector('#section-id');
  const header = section?.querySelector('.section-header');
  const items = section?.querySelectorAll('.animated-item');

  if (!section) return;

  // Respetar preferencias de movimiento reducido
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    header?.classList.add('visible');
    items?.forEach(item => item.classList.add('visible'));
    return;
  }

  const observerOptions: IntersectionObserverInit = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animar header primero
        header?.classList.add('visible');

        // Animar items con stagger
        items?.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('visible');
          }, BASE_DELAY + (index * STAGGER_DELAY));
        });

        observer.disconnect();
      }
    });
  }, observerOptions);

  observer.observe(section);
};
```

### 8.3 Clases CSS Base

```css
/* Estado inicial (oculto) */
.animated-element {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

/* Estado visible */
.animated-element.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Stagger delays usando data-index */
.animated-element[data-index="0"].visible { transition-delay: 0ms; }
.animated-element[data-index="1"].visible { transition-delay: 100ms; }
.animated-element[data-index="2"].visible { transition-delay: 200ms; }
.animated-element[data-index="3"].visible { transition-delay: 300ms; }
```

---

## 9. Checklist de Implementación

> **⚠️ ESTRATEGIA DE IMPLEMENTACIÓN:** Comenzar por la página `/nosotros` completa y funcional. Los cambios al Home (AboutPreview, Hero subtitle) se hacen AL FINAL para no romper nada hasta que la sección esté completamente probada.

### Fase 1: Content Collections (Schemas)

- [ ] Modificar `/astro-site/src/content/config.ts`
  - [ ] Agregar `aboutCollection` (para página /nosotros)
  - [ ] Agregar `teamCollection` (para miembros del equipo)
  - [ ] Agregar `aboutPreviewCollection` (para componente Home - implementar después)
  - [ ] Actualizar `export const collections`

### Fase 2: Assets (Imágenes del Equipo)

- [ ] Crear carpeta `/astro-site/public/team/`
- [ ] Agregar `/astro-site/public/team/jacqueline.jpg` (placeholder o imagen real)
- [ ] Agregar `/astro-site/public/team/maria-alejandra.jpg`
- [ ] Agregar `/astro-site/public/team/pablo.jpg`
- [ ] Agregar `/astro-site/public/team/alonso.jpg`
- [ ] Crear `/astro-site/public/team/placeholder.svg` (fallback para imágenes rotas)
- [ ] Agregar `/astro-site/public/about/hero-bg.jpg` (imagen de fondo para AboutHero)

**Nota sobre imágenes placeholder:** Si no hay fotos reales disponibles, usar servicios como [UI Faces](https://uifaces.co/) o [Generated Photos](https://generated.photos/), o crear placeholders con fondo sólido e iniciales.

### Fase 3: Contenido para /nosotros

- [ ] Crear carpeta `/astro-site/src/content/about/`
- [ ] Crear `/astro-site/src/content/about/main.md`
- [ ] Crear carpeta `/astro-site/src/content/team/`
- [ ] Crear `/astro-site/src/content/team/jacqueline.md`
- [ ] Crear `/astro-site/src/content/team/maria-alejandra.md`
- [ ] Crear `/astro-site/src/content/team/pablo.md`
- [ ] Crear `/astro-site/src/content/team/alonso.md`

### Fase 4: Componentes de /nosotros

- [ ] Crear carpeta `/astro-site/src/components/about/`
- [ ] Crear `/astro-site/src/components/about/AboutHero.astro` (siguiendo Sección 10.1)
- [ ] Crear `/astro-site/src/components/about/AboutMission.astro`
- [ ] Crear `/astro-site/src/components/about/AboutTeam.astro` (siguiendo Sección 10.2)
- [ ] Crear `/astro-site/src/components/about/AboutCTA.astro`

### Fase 5: Layout y Página /nosotros

- [ ] Crear `/astro-site/src/layouts/AboutLayout.astro`
- [ ] Crear `/astro-site/src/pages/nosotros.astro`

### Fase 6: Validación de /nosotros (ANTES de tocar Home)

- [ ] Ejecutar `npm run build` sin errores
- [ ] Verificar navegación manual a `/nosotros` funciona
- [ ] Verificar animaciones scroll-reveal funcionan
- [ ] Verificar responsive en móvil
- [ ] Verificar comportamiento touch en móvil (Sección 10.2)
- [ ] Verificar accesibilidad (contraste, focus states)
- [ ] Verificar fallback de imágenes (Sección 11.1)

### Fase 7: Actualizar Navegación

- [ ] Actualizar enlace en `/astro-site/src/components/nav/Header.astro`
- [ ] Actualizar enlace en `/astro-site/src/components/nav/MegaMenu.astro`
- [ ] Actualizar enlace en `/astro-site/src/components/nav/FullscreenMenu.astro`
- [ ] Actualizar enlace en `/astro-site/src/components/home/Footer.astro`

### Fase 8: Contenido AboutPreview (Home)

- [ ] Crear carpeta `/astro-site/src/content/aboutPreview/`
- [ ] Crear `/astro-site/src/content/aboutPreview/home.md`

### Fase 9: Componente AboutPreview (Home)

- [ ] Crear `/astro-site/src/components/home/AboutPreview.astro`
- [ ] Modificar `/astro-site/src/pages/index.astro`
  - [ ] Agregar import de AboutPreview
  - [ ] Ubicar `<AboutPreview />` después de `<Hero />`

### Fase 10: Actualizar Hero Subtitle (Home) - ÚLTIMO PASO

- [ ] Modificar `/astro-site/src/content/home/hero.md`
  - [ ] Cambiar `subtitle` a PARTE 1 de la división semántica (Sección 1.1)

**Nuevo subtitle para Hero (PARTE 1 - Quién es + Misión):**
```markdown
subtitle: "Estudio fundado por **Jacqueline Del Valle Inostroza**, abogada de la Universidad de Valparaíso con **35 años en la Contraloría General de la República**. Nuestra misión: **asumir la defensa de quienes enfrentan la vulneración de sus derechos**."
```

**IMPORTANTE:** Este subtitle es la PARTE 1 de la división semántica. La PARTE 2 (Ámbito + Valores + Invitación) va en AboutPreview.

### Fase 11: Validación Final

- [ ] Ejecutar `npm run build` sin errores
- [ ] Verificar Home completo con AboutPreview
- [ ] Verificar flujo Hero → AboutPreview → /nosotros
- [ ] Verificar responsive en móvil (ambas páginas)
- [ ] Lighthouse: Performance 90+, Accessibility 95+

### Fase 12: Documentación

- [ ] Actualizar CLAUDE.md
  - [ ] Agregar `/nosotros` a "Pages Status > Implemented"
  - [ ] Remover de "Pages Status > Pending Implementation"
  - [ ] Agregar AboutPreview a estructura de componentes

---

## 10. Directrices de Diseño Premium (CRÍTICO para UX)

> **⚠️ IMPORTANTE:** Esta sección define los estándares visuales que DEBEN seguirse para mantener coherencia con el resto del sitio. Un desarrollador UX debe revisar estos patrones antes de implementar.

### 10.1 Mesh Gradient Background (DEBE COINCIDIR CON Hero.astro)

Todos los Hero sections DEBEN incluir los siguientes elementos para mantener coherencia visual:

#### 3 Orbs Animados (Obligatorios)

```astro
<!-- Complex Mesh Gradient Background - IGUAL QUE Hero.astro -->
<div class="absolute inset-0 z-0">
  <!-- Orb 1: Azul principal -->
  <div class="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.4)_0%,transparent_70%)] blur-[120px] animate-[float_20s_ease-in-out_infinite]"></div>

  <!-- Orb 2: Azul secundario -->
  <div class="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.4)_0%,transparent_70%)] blur-[100px] animate-[float_25s_ease-in-out_infinite_reverse]"></div>

  <!-- Orb 3: Dorado (CRÍTICO - no omitir) -->
  <div class="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-[radial-gradient(circle,rgba(201,162,84,0.15)_0%,transparent_70%)] blur-[80px] animate-[float_15s_ease-in-out_infinite_5s]"></div>
</div>
```

#### Noise Texture Overlay (Obligatorio)

```astro
<!-- Noise Texture Overlay -->
<div class="absolute inset-0 z-2 opacity-[0.03] pointer-events-none mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E');"></div>
```

#### Imagen de Fondo (Si disponible)

```astro
<!-- Background Image with Overlay -->
{hero.image && (
  <img
    src={hero.image}
    alt=""
    class="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-overlay blur-[2px] scale-105"
    loading="eager"
  />
)}
```

#### Gradient Overlay para Legibilidad

```astro
<!-- Gradient Overlay for Legibility -->
<div class="absolute inset-0 z-3 bg-linear-to-br from-[rgba(12,35,64,0.98)] via-[rgba(12,35,64,0.94)] to-[rgba(26,77,122,0.88)]"></div>
```

### 10.2 Mobile Touch Behavior (CRÍTICO)

Las tarjetas interactivas en móvil DEBEN implementar el patrón de `PracticeTarget.astro`:

#### CSS para Estado Selected

```css
@media (max-width: 768px) {
  .team-card {
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    -webkit-user-select: none;
    user-select: none;
  }

  .team-card.selected {
    transform: translateY(-4px) scale(1.02);
    background: rgba(12, 35, 64, 0.92);
    border-color: rgba(201, 169, 97, 0.4);
    box-shadow:
      0 12px 35px -8px rgba(59, 130, 246, 0.35),
      0 0 0 1px rgba(201, 169, 97, 0.25);
  }
}
```

#### JavaScript para Scroll Detection

```javascript
// Track touch state for scroll detection
let touchStartY = 0;
let touchMoved = false;

cards.forEach(card => {
  card.addEventListener('touchstart', function(e) {
    touchStartY = e.touches[0].clientY;
    touchMoved = false;
  }, { passive: true });

  card.addEventListener('touchmove', function(e) {
    const deltaY = Math.abs(e.touches[0].clientY - touchStartY);
    if (deltaY > 10) touchMoved = true;
  }, { passive: true });

  card.addEventListener('touchend', function(e) {
    if (!touchMoved) {
      cards.forEach(c => c.classList.remove('selected'));
      requestAnimationFrame(() => this.classList.add('selected'));
    }
    touchMoved = false;
  }, { passive: true });
});
```

### 10.3 Spotlight Effect (Desktop Only)

Las tarjetas con hover interactivo DEBEN incluir el efecto spotlight:

#### CSS

```css
.card-spotlight {
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    rgba(201, 169, 97, 0.15),
    transparent 40%
  );
}
```

#### JavaScript

```javascript
if (!isMobile) {
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });
}
```

### 10.4 Grid Pattern Decorativo (Opcional pero Recomendado)

Para secciones con fondo oscuro (como AboutTeam), agregar:

```astro
<div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px); background-size: 50px 50px;"></div>
```

### 10.5 Animaciones con `is:inline`

Los scripts que usan IntersectionObserver DEBEN usar `<script is:inline>` para evitar problemas de TypeScript en producción:

```astro
<script is:inline>
  // Código JavaScript vanilla sin TypeScript syntax
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };
  // ...
</script>
```

---

## 11. Fallbacks y Consideraciones Mobile

### 11.1 Image Fallbacks

Implementar fallback para imágenes rotas del equipo:

#### Placeholder SVG

Crear `/astro-site/public/team/placeholder.svg`:

```svg
<svg viewBox="0 0 400 533" xmlns="http://www.w3.org/2000/svg">
  <rect fill="#1e3a5f" width="400" height="533"/>
  <circle cx="200" cy="200" r="80" fill="rgba(255,255,255,0.1)"/>
  <text x="200" y="220" fill="rgba(255,255,255,0.3)" font-size="60" font-family="system-ui" text-anchor="middle" dominant-baseline="middle">JDV</text>
  <text x="200" y="420" fill="rgba(255,255,255,0.5)" font-size="24" font-family="system-ui" text-anchor="middle">Foto no disponible</text>
</svg>
```

#### Handler de Error en Imágenes

```astro
<img
  src={member.image}
  alt={member.name}
  class="w-full h-full object-cover object-top"
  loading="lazy"
  onerror="this.onerror=null; this.src='/team/placeholder.svg'; this.dataset.fallback='true';"
/>
```

### 11.2 Texto de Misión en Mobile

El `mission.text` tiene 2 párrafos largos. Considerar estas opciones para mobile:

#### Opción A: Font Size Responsive

```astro
<p class="text-base md:text-lg leading-relaxed text-(--gray-700)">
  {text}
</p>
```

#### Opción B: Read More Colapsable (Si es muy largo)

```astro
<div class="mission-text">
  <p class="text-base leading-relaxed">{firstParagraph}</p>
  <details class="md:hidden mt-4">
    <summary class="text-(--blue-primary) font-semibold cursor-pointer">Leer más</summary>
    <p class="mt-2 text-base leading-relaxed">{secondParagraph}</p>
  </details>
  <p class="hidden md:block mt-4 text-base leading-relaxed">{secondParagraph}</p>
</div>
```

### 11.3 Reduced Motion

TODOS los componentes DEBEN incluir soporte para `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    opacity: 1;
    transform: none;
    transition: none;
    animation: none;
  }
}
```

```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  elements.forEach(el => el.classList.add('visible'));
  return; // Skip animation setup
}
```

### 11.4 Touch Targets

Todos los elementos interactivos en móvil DEBEN tener mínimo 44x44px:

```css
@media (max-width: 768px) {
  .cta-button,
  .team-card,
  .nav-link {
    min-height: 44px;
    min-width: 44px;
  }
}
```

---

## Notas Adicionales

### Imágenes Placeholder

Si no hay imágenes reales disponibles, crear placeholders de 400x533px (ratio 3:4) con:
- Fondo: `#1e3a5f`
- Texto centrado con nombre
- Formato: JPG optimizado

**Miembros del equipo (4 personas):**
1. Jacqueline Del Valle Inostroza (Fundadora - destacada)
2. María Alejandra López Bertín (Abogada Asociada)
3. Pablo Inostroza Vallejos (Abogado Asociado)
4. Alonso Aguirre Del Valle (Abogado Asociado)

### Pruebas de Rendimiento

Después de implementar, verificar:
- LCP < 2.5s
- CLS < 0.1
- Imágenes del equipo con `loading="lazy"`

### SEO

La página `/nosotros` incluirá meta tags via AboutLayout, asegurarse que:
- `<title>` incluye "Quiénes Somos | JDV & Abogados"
- `<meta name="description">` es descriptivo y único

### Textos Clave del Cliente (Referencia)

**PARTE 1 - Hero Subtitle (Quién es + Misión):**
```
"Estudio fundado por **Jacqueline Del Valle Inostroza**, abogada de la Universidad de Valparaíso con **35 años en la Contraloría General de la República**. Nuestra misión: **asumir la defensa de quienes enfrentan la vulneración de sus derechos**."
```

**PARTE 2 - AboutPreview Description (Ámbito + Valores + Invitación):**
```
"Nuestro quehacer abarca diversas áreas del derecho, con cobertura nacional e internacional. Prestamos asesoría y defensa jurídica de calidad, ética, transparente, responsable y profundamente humana. Los invitamos a conocernos y a confiar en nosotros."
```

**Texto institucional COMPLETO (para sección Misión en /nosotros):**
```
"Este Estudio fue fundado por Jacqueline Del Valle Inostroza, abogada de la Universidad de Valparaíso, con 35 años de experiencia en el servicio público, ocupando cargos de relevancia directiva en la Contraloría General de la República. Nuestra misión es asumir la defensa de quienes se enfrentan a la vulneración de sus derechos. Nuestro quehacer abarca diversas áreas, con cobertura nacional e internacional, prestando asesoría y defensa jurídica de calidad, ética, transparente, responsable y humana. Los invitamos a conocernos y a confiar en nosotros."
```

### Cargos Destacados de Jacqueline (para credenciales)

| Período | Cargo |
|---------|-------|
| 2012-2017 | Contralora Regional de Aysén |
| 2018-2020 | Contralora Regional de Arica y Parinacota |
| 1994-2009 | Abogada Jefe Contraloría Regional de Magallanes |
| 2020-2024 | Jefe Unidad Personal y Responsabilidad Administrativa |

### Diplomados de Jacqueline
- Derecho Tributario
- Derecho Aduanero
- Control de Gestión y Liderazgo

---

**Fin del documento de especificación.**

---

*Versión 1.2 - Actualizado con:*
- *Tabla de áreas expandida a 10 (incluyendo Defensa Penal y Familia y Menores pendientes)*
- *Perfiles de abogados asociados reescritos para referenciar la dirección de Jacqueline*
- *Texto de misión expandido para clarificar estructura del equipo*
- *Subtitle de AboutPreview actualizado para destacar experiencia de Jacqueline*
- *Campos `experienceNote` y `specialties` agregados al schema de team*
