# Manual de Implementación: Áreas de Práctica

Este manual detalla el proceso para crear nuevas páginas de **Áreas de Práctica** en el sitio web de JDV & Abogados.

---

## Tabla de Contenidos

1. [Visión General](#visión-general)
2. [Arquitectura de Archivos](#arquitectura-de-archivos)
3. [Paso 1: Crear el Archivo de Contenido (.md)](#paso-1-crear-el-archivo-de-contenido-md)
4. [Paso 2: Crear la Página (.astro)](#paso-2-crear-la-página-astro)
5. [Paso 3: Actualizar la Navegación](#paso-3-actualizar-la-navegación)
6. [Referencia de Componentes](#referencia-de-componentes)
7. [Matriz de Cross-Selling](#matriz-de-cross-selling)
8. [Checklist de Implementación](#checklist-de-implementación)
9. [Troubleshooting](#troubleshooting)

---

## Visión General

Cada Área de Práctica consta de **dos archivos**:

| Archivo | Ubicación | Propósito |
|---------|-----------|-----------|
| Contenido (`.md`) | `src/content/practices/` | Define TODO el contenido (textos, datos estructurados) |
| Página (`.astro`) | `src/pages/areas-practicas/` | Define la estructura y orden de componentes |

**Principio clave:** El contenido está separado de la presentación. Los archivos `.md` contienen los datos, los `.astro` solo ensamblan componentes.

---

## Arquitectura de Archivos

```
astro-site/
├── src/
│   ├── content/
│   │   └── practices/
│   │       ├── defensa-estatutaria.md    ← Contenido
│   │       ├── legado.md                  ← Contenido
│   │       └── [tu-nueva-area].md         ← CREAR
│   │
│   ├── pages/
│   │   └── areas-practicas/
│   │       ├── defensa-estatutaria.astro ← Página
│   │       ├── legado.astro               ← Página
│   │       └── [tu-nueva-area].astro      ← CREAR
│   │
│   └── components/
│       └── practice/                      ← Componentes reutilizables
│           ├── PracticeHero.astro
│           ├── PracticeTrustBar.astro
│           ├── PracticeTarget.astro
│           ├── PracticePainPoints.astro
│           ├── PracticeObjective.astro
│           ├── PracticeResults.astro
│           ├── PracticeServicesIncluded.astro
│           ├── PracticeProcess.astro
│           ├── PracticeContent.astro
│           ├── PracticeFAQ.astro
│           ├── PracticeTestimonials.astro
│           ├── PracticeRelatedServices.astro
│           ├── PracticeFinalCTA.astro
│           └── PracticeBreadcrumbs.astro
```

---

## Paso 1: Crear el Archivo de Contenido (.md)

### 1.1 Crear el archivo

```bash
# Crear archivo en la ubicación correcta
touch astro-site/src/content/practices/[slug].md
```

> **IMPORTANTE:** El nombre del archivo DEBE coincidir con el `slug` definido dentro del frontmatter.

### 1.2 Estructura del Frontmatter (YAML)

El archivo `.md` tiene dos secciones:
1. **Frontmatter** (entre `---`): Datos estructurados para componentes
2. **Contenido Markdown**: Texto libre para la sección `PracticeContent`

#### Plantilla Completa del Frontmatter

```yaml
---
slug: "nombre-del-area"

seo:
  title: "Título SEO - Hasta 60 caracteres | JDV & Abogados"
  description: "Meta descripción para Google. Máximo 155 caracteres. Incluir palabras clave principales."
  canonical: "/areas-practicas/nombre-del-area"

hero:
  badge: "Especialización · Diferenciador"
  h1: "Título Principal del Área de Práctica"
  breadcrumbTitle: "Título Corto"  # Título corto para el breadcrumb (2-3 palabras)
  tagline: "Subtítulo que explica el valor principal del servicio"
  image: "/areas/nombre-del-area.jpg"

# NOTA sobre breadcrumbTitle:
# Este campo es OPCIONAL pero RECOMENDADO cuando el h1 es largo.
# Aparece en la barra de navegación breadcrumb (Inicio > Áreas > [breadcrumbTitle])
# Si no se define, se usará el h1 completo.
# Ejemplos:
#   h1: "Cliente Senior: Servicios Legales en la Comodidad de tu Hogar" → breadcrumbTitle: "Cliente Senior"
#   h1: "Defensa Estatutaria para Funcionarios Públicos" → breadcrumbTitle: "Defensa Estatutaria"
#   h1: "Derecho Animalista: Defendemos a quienes no tienen voz" → breadcrumbTitle: "Derecho Animalista"

trust:
  - value: "35+"
    label: "Años Experiencia"
  - value: "500+"
    label: "Casos Resueltos"
  - value: "98%"
    label: "Satisfacción"

target:
  - icon: "🛡️"
    title: "Perfil de Cliente 1"
    description: "Descripción del primer tipo de cliente ideal para este servicio."
  - icon: "⚖️"
    title: "Perfil de Cliente 2"
    description: "Descripción del segundo tipo de cliente ideal."
  - icon: "📋"
    title: "Perfil de Cliente 3"
    description: "Descripción del tercer tipo de cliente ideal."
  - icon: "🚨"
    title: "Perfil de Cliente 4"
    description: "Descripción del cuarto tipo de cliente ideal."

painPoints:
  - "Primer punto de dolor o problema que enfrenta el cliente"
  - "Segundo punto de dolor"
  - "Tercer punto de dolor"
  - "Cuarto punto de dolor"
  - "Quinto punto de dolor"
  - "Sexto punto de dolor"

objective:
  text: "Párrafo que describe el objetivo principal y la transformación que ofreces al cliente. Debe ser emocional y conectar con sus necesidades."
  commitments:
    - "Primer compromiso o promesa al cliente"
    - "Segundo compromiso"
    - "Tercer compromiso"
    - "Cuarto compromiso"

results:
  - icon: "🛡️"
    title: "Resultado 1"
    description: "Descripción del primer resultado que el cliente puede esperar."
  - icon: "⚖️"
    title: "Resultado 2"
    description: "Descripción del segundo resultado."
  - icon: "😌"
    title: "Resultado 3"
    description: "Descripción del tercer resultado."
  - icon: "🎯"
    title: "Resultado 4"
    description: "Descripción del cuarto resultado."

servicesIncluded:
  - icon: "📋"
    title: "Servicio Específico 1"
    description: "Descripción detallada del primer servicio incluido."
  - icon: "🚫"
    title: "Servicio Específico 2"
    description: "Descripción del segundo servicio."
  - icon: "🚨"
    title: "Servicio Específico 3"
    description: "Descripción del tercer servicio."
  - icon: "💰"
    title: "Servicio Específico 4"
    description: "Descripción del cuarto servicio."
  - icon: "🏥"
    title: "Servicio Específico 5"
    description: "Descripción del quinto servicio."
  - icon: "⚖️"
    title: "Servicio Específico 6"
    description: "Descripción del sexto servicio."

process:
  - step: 1
    title: "Paso 1: Nombre del Paso"
    description: "Descripción de lo que ocurre en el primer paso del proceso."
  - step: 2
    title: "Paso 2: Nombre del Paso"
    description: "Descripción del segundo paso."
  - step: 3
    title: "Paso 3: Nombre del Paso"
    description: "Descripción del tercer paso."
  - step: 4
    title: "Paso 4: Nombre del Paso"
    description: "Descripción del cuarto paso."

faq:
  - question: "¿Primera pregunta frecuente?"
    answer: "Respuesta detallada a la primera pregunta. Puede ser extensa y explicativa."
  - question: "¿Segunda pregunta frecuente?"
    answer: "Respuesta a la segunda pregunta."
  - question: "¿Tercera pregunta frecuente?"
    answer: "Respuesta a la tercera pregunta."
  - question: "¿Cuarta pregunta frecuente?"
    answer: "Respuesta a la cuarta pregunta."
  - question: "¿Quinta pregunta frecuente?"
    answer: "Respuesta a la quinta pregunta."
  - question: "¿Sexta pregunta frecuente?"
    answer: "Respuesta a la sexta pregunta."

finalCta:
  headline: "Llamada a la acción principal"
  text: "Texto persuasivo que motive al usuario a contactar. Debe crear urgencia y reforzar el valor."
  button: "Texto del Botón de Acción"
---
```

### 1.3 Contenido Markdown (después del frontmatter)

Después del cierre `---` del frontmatter, agrega contenido Markdown libre:

```markdown
---
# ... todo el frontmatter anterior ...
---

## Título de la Primera Sección

Párrafo introductorio con **texto en negrita** para énfasis.

---

## Segunda Sección

> **Cita destacada:** Este texto aparecerá en un recuadro azul premium.

Más contenido explicativo aquí.

---

## Tercera Sección

Contenido adicional. Mantener **conciso** (máximo 50-80 líneas).
```

> **ADVERTENCIA:** El contenido Markdown debe ser **CONCISO**. Máximo 50-80 líneas. El contenido extenso ya está cubierto por los componentes estructurados (FAQ, ServicesIncluded, etc.).

### 1.4 Referencia de Iconos (Emojis)

Usar emojis como iconos. Ejemplos por categoría:

| Categoría | Emojis Recomendados |
|-----------|---------------------|
| Protección/Defensa | 🛡️ ⚔️ 🔒 🔐 |
| Legal/Justicia | ⚖️ 📜 📋 📄 |
| Personas | 👤 👥 👨‍👩‍👧 👴 |
| Emociones | 😌 😊 💪 ✅ |
| Dinero/Finanzas | 💰 💵 🏦 💳 |
| Tiempo/Proceso | ⏱️ 📅 🔄 ⚡ |
| Comunicación | 📞 💬 📧 📱 |
| Alertas | 🚨 ⚠️ 🚫 ❌ |
| Éxito/Resultados | 🎯 🏆 ✨ ⭐ |
| Animales | 🐾 🐕 🐈 🦜 |
| Hogar/Propiedad | 🏠 🏢 🏛️ 🏥 |
| Educación | 🎓 📚 📖 ✏️ |

---

## Paso 2: Crear la Página (.astro)

### 2.1 Crear el archivo

```bash
touch astro-site/src/pages/areas-practicas/[slug].astro
```

### 2.2 Plantilla Estándar de Página

Copiar y pegar esta plantilla, cambiando solo los valores indicados con `[CAMBIAR]`:

```astro
---
import { getEntry } from 'astro:content';
import PracticeLayout from '../../layouts/PracticeLayout.astro';
import Header from '../../components/nav/Header.astro';
import PracticeBreadcrumbs from '../../components/practice/PracticeBreadcrumbs.astro';
import PracticeHero from '../../components/practice/PracticeHero.astro';
import PracticeTrustBar from '../../components/practice/PracticeTrustBar.astro';
import PracticeTarget from '../../components/practice/PracticeTarget.astro';
import PracticePainPoints from '../../components/practice/PracticePainPoints.astro';
import PracticeObjective from '../../components/practice/PracticeObjective.astro';
import PracticeResults from '../../components/practice/PracticeResults.astro';
import PracticeServicesIncluded from '../../components/practice/PracticeServicesIncluded.astro';
import PracticeProcess from '../../components/practice/PracticeProcess.astro';
import PracticeContent from '../../components/practice/PracticeContent.astro';
import PracticeFAQ from '../../components/practice/PracticeFAQ.astro';
import PracticeTestimonials from '../../components/practice/PracticeTestimonials.astro';
import PracticeRelatedServices from '../../components/practice/PracticeRelatedServices.astro';
import PracticeFinalCTA from '../../components/practice/PracticeFinalCTA.astro';
import Footer from '../../components/home/Footer.astro';
import Modal from '../../components/home/Modal.astro';
import WhatsAppFloat from '../../components/WhatsAppFloat.astro';
import BackToTop from '../../components/BackToTop.astro';

// [CAMBIAR] El segundo parámetro debe coincidir con el nombre del archivo .md (sin extensión)
const practiceEntry = await getEntry('practices', 'nombre-del-area');

if (!practiceEntry) {
  // [CAMBIAR] Actualizar el mensaje de error
  throw new Error('No se encontró el contenido para [Nombre del Área]');
}

const { data, render } = practiceEntry;
const { Content } = await render();
---

<PracticeLayout
  title={data.seo.title}
  description={data.seo.description}
  canonical={data.seo.canonical}
>
  <!-- Navegación -->
  <Header />

  <!-- Breadcrumbs -->
  <PracticeBreadcrumbs areaName={data.hero.h1 ?? ''} areaSlug={data.slug ?? ''} breadcrumbTitle={data.hero.breadcrumbTitle} />

  <!-- Hero Section -->
  <PracticeHero
    badge={data.hero.badge}
    h1={data.hero.h1}
    tagline={data.hero.tagline}
    image={data.hero.image}
  />

  <!-- Trust Bar -->
  <PracticeTrustBar items={data.trust} />

  <!-- Target Audience -->
  <PracticeTarget items={data.target} />

  <!-- Pain Points -->
  <PracticePainPoints points={data.painPoints} />

  <!-- Objective / Commitment -->
  <PracticeObjective
    text={data.objective.text}
    commitments={data.objective.commitments}
  />

  <!-- Results -->
  <PracticeResults items={data.results} />

  <!-- Services Included -->
  <PracticeServicesIncluded items={data.servicesIncluded} />

  <!-- Process -->
  <PracticeProcess steps={data.process} />

  <!-- Markdown Content -->
  <!-- [CAMBIAR] Actualizar headerBadge con nombre corto del área -->
  <PracticeContent headerTitle="Información Detallada" headerBadge="[Área]">
    <Content />
  </PracticeContent>

  <!-- FAQ -->
  <PracticeFAQ items={data.faq} areaName={data.hero.h1} />

  <!-- Testimonials -->
  <PracticeTestimonials areaName={data.hero.h1} />

  <!-- Related Services -->
  <PracticeRelatedServices currentSlug={data.slug} />

  <!-- Final CTA -->
  <PracticeFinalCTA
    headline={data.finalCta.headline}
    text={data.finalCta.text}
    button={data.finalCta.button}
  />

  <!-- Footer -->
  <Footer />

  <!-- Modal -->
  <Modal />

  <!-- WhatsApp Float Button -->
  <WhatsAppFloat />

  <!-- Back to Top Button -->
  <BackToTop />
</PracticeLayout>

<!-- Estilos encapsulados en PracticeContent.astro -->
```

### 2.3 Puntos a Modificar

| Línea | Qué Cambiar | Ejemplo |
|-------|-------------|---------|
| `getEntry('practices', '...')` | Slug del archivo .md | `'cliente-senior'` |
| `throw new Error('...')` | Mensaje de error descriptivo | `'No se encontró el contenido para Cliente Senior'` |
| `headerBadge="..."` | Nombre corto del área | `"Senior"` |

---

## Paso 3: Actualizar la Navegación

### 3.1 Archivos a Modificar

1. `src/components/nav/Header.astro` - Menú desktop
2. `src/components/nav/MegaMenu.astro` - Mega menú desktop
3. `src/components/nav/FullscreenMenu.astro` - Menú móvil

### 3.2 Agregar a MegaMenu.astro

Buscar la sección de áreas de práctica y agregar:

```astro
<a href="/areas-practicas/[slug]" class="mega-menu-item">
  <span class="item-icon">[EMOJI]</span>
  <div class="item-content">
    <span class="item-title">[Nombre del Área]</span>
    <span class="item-description">[Descripción corta]</span>
  </div>
</a>
```

### 3.3 Actualizar Matriz de Cross-Selling

Editar `src/components/practice/PracticeRelatedServices.astro`:

1. Agregar el servicio al array `allServices`
2. Agregar las relaciones en `relatedMatrix`

```typescript
// En allServices, agregar:
{
  slug: "nuevo-servicio",
  title: "Nombre del Servicio",
  description: "Descripción corta del servicio.",
  icon: "🛡️"
}

// En relatedMatrix, agregar:
"nuevo-servicio": ["servicio-relacionado-1", "servicio-relacionado-2", "servicio-relacionado-3"]
```

---

## Referencia de Componentes

### Estructura de la Página (Orden)

```
┌─────────────────────────────────────┐
│           1. Header                 │
├─────────────────────────────────────┤
│        2. Breadcrumbs               │
├─────────────────────────────────────┤
│                                     │
│         3. PracticeHero             │
│    (badge, h1, tagline, imagen)     │
│                                     │
├─────────────────────────────────────┤
│        4. PracticeTrustBar          │
│     (3 métricas de confianza)       │
├─────────────────────────────────────┤
│                                     │
│        5. PracticeTarget            │
│   (4 perfiles de cliente ideal)     │
│                                     │
├─────────────────────────────────────┤
│                                     │
│      6. PracticePainPoints          │
│     (6 puntos de dolor)             │
│                                     │
├─────────────────────────────────────┤
│                                     │
│      7. PracticeObjective           │
│   (objetivo + 4 compromisos)        │
│                                     │
├─────────────────────────────────────┤
│                                     │
│       8. PracticeResults            │
│     (4 resultados esperados)        │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   9. PracticeServicesIncluded       │
│     (6 servicios específicos)       │
│                                     │
├─────────────────────────────────────┤
│                                     │
│      10. PracticeProcess            │
│      (4 pasos del proceso)          │
│                                     │
├─────────────────────────────────────┤
│                                     │
│      11. PracticeContent            │
│    (contenido Markdown libre)       │
│                                     │
├─────────────────────────────────────┤
│                                     │
│        12. PracticeFAQ              │
│     (6 preguntas frecuentes)        │
│                                     │
├─────────────────────────────────────┤
│                                     │
│    13. PracticeTestimonials         │
│   (2-3 testimonios de clientes)     │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   14. PracticeRelatedServices       │
│    (3 servicios relacionados)       │
│                                     │
├─────────────────────────────────────┤
│                                     │
│      15. PracticeFinalCTA           │
│   (llamada a la acción final)       │
│                                     │
├─────────────────────────────────────┤
│           16. Footer                │
└─────────────────────────────────────┘
```

### Descripción de Cada Componente

#### 1. PracticeHero
**Propósito:** Sección principal que captura la atención.
**Datos requeridos:**
- `badge`: Texto corto de especialización
- `h1`: Título principal (H1 para SEO)
- `breadcrumbTitle`: Título corto para mostrar en el breadcrumb (opcional, si no se define usa h1)
- `tagline`: Subtítulo explicativo
- `image`: Ruta a imagen (opcional)

#### 2. PracticeTrustBar
**Propósito:** Generar confianza inmediata con métricas.
**Datos requeridos:** Array de 3 items con `value` y `label`.
**Ejemplo:**
```yaml
trust:
  - value: "35+"
    label: "Años Experiencia"
```

#### 3. PracticeTarget
**Propósito:** Identificar al visitante con perfiles de cliente ideal.
**Datos requeridos:** Array de 4 items con `icon`, `title`, `description`.
**Tip:** Usar títulos que el cliente se identifique ("Funcionario Investigado", "Padre Preocupado").

#### 4. PracticePainPoints
**Propósito:** Validar los problemas del cliente (empatía).
**Datos requeridos:** Array de 6 strings.
**Tip:** Usar lenguaje emocional, hablar de miedos y frustraciones reales.

#### 5. PracticeObjective
**Propósito:** Presentar la transformación que ofreces.
**Datos requeridos:**
- `text`: Párrafo principal
- `commitments`: Array de 4 compromisos

#### 6. PracticeResults
**Propósito:** Mostrar los resultados tangibles esperados.
**Datos requeridos:** Array de 4 items con `icon`, `title`, `description`.

#### 7. PracticeServicesIncluded
**Propósito:** Detallar los servicios específicos incluidos.
**Datos requeridos:** Array de 6 items con `icon`, `title`, `description`.

#### 8. PracticeProcess
**Propósito:** Explicar el proceso paso a paso.
**Datos requeridos:** Array de 4 items con `step`, `title`, `description`.
**Importante:** Siempre 4 pasos para mantener consistencia visual.

#### 9. PracticeContent
**Propósito:** Contenido editorial libre (texto enriquecido).
**Props opcionales:**
- `showHeader`: Boolean (default: true)
- `headerTitle`: String (default: "Más información")
- `headerBadge`: String (default: "Detalle")

**Estilos disponibles en Markdown:**
- `## Heading 2` → Título con barra lateral azul
- `### Heading 3` → Subtítulo
- `> Blockquote` → Caja azul destacada
- `---` → Separador con punto dorado
- `**negrita**` → Texto en negrita
- Listas con viñetas

#### 10. PracticeFAQ
**Propósito:** Resolver objeciones y dudas comunes.
**Datos requeridos:** Array de 6 items con `question` y `answer`.
**Tip:** Incluir preguntas sobre precios, tiempos y garantías.

#### 11. PracticeTestimonials
**Propósito:** Prueba social con testimonios de clientes.
**Datos opcionales:** Si no se proporcionan, usa testimonios por defecto.
**Estructura de items:**
```yaml
testimonials:
  - quote: "Texto del testimonio"
    initials: "M.P."
    role: "Cliente Particular"
    result: "Caso resuelto satisfactoriamente"
```

#### 12. PracticeRelatedServices
**Propósito:** Cross-selling de otros servicios.
**Props:**
- `currentSlug`: Slug del área actual (para excluirla y mostrar relacionados)
- `items`: Array opcional de servicios específicos

#### 13. PracticeFinalCTA
**Propósito:** Llamada a la acción final.
**Datos requeridos:**
- `headline`: Título persuasivo
- `text`: Texto de urgencia
- `button`: Texto del botón

---

## Matriz de Cross-Selling

Servicios relacionados recomendados por área:

| Área | Servicios Relacionados |
|------|------------------------|
| defensa-estatutaria | defensa-administrativa, civil, capacitacion |
| defensa-administrativa | defensa-estatutaria, civil, capacitacion |
| cliente-senior | legado, civil, inmobiliaria-copropiedad |
| legado | cliente-senior, civil, animalista |
| civil | defensa-estatutaria, inmobiliaria-copropiedad, legado |
| inmobiliaria-copropiedad | civil, cliente-senior, legado |
| animalista | civil, legado, capacitacion |
| capacitacion | defensa-estatutaria, defensa-administrativa, civil |

---

## Checklist de Implementación

### Pre-implementación
- [ ] Contenido de texto completo redactado
- [ ] SEO: título (<60 chars) y descripción (<155 chars)
- [ ] Imagen hero preparada (formato .jpg/.png)
- [ ] Slug definido (minúsculas, guiones, sin acentos)

### Archivo .md
- [ ] Slug coincide con nombre del archivo
- [ ] SEO completo (title, description, canonical)
- [ ] Hero completo (badge, h1, breadcrumbTitle, tagline, image)
- [ ] Trust: exactamente 3 items
- [ ] Target: exactamente 4 items
- [ ] PainPoints: 6 items
- [ ] Objective: texto + 4 commitments
- [ ] Results: 4 items
- [ ] ServicesIncluded: 6 items
- [ ] Process: 4 pasos
- [ ] FAQ: 6 preguntas
- [ ] FinalCTA completo
- [ ] Contenido Markdown conciso (<80 líneas)

### Archivo .astro
- [ ] `getEntry()` con slug correcto
- [ ] `headerBadge` actualizado en PracticeContent
- [ ] Mensaje de error actualizado

### Post-implementación
- [ ] Navegación actualizada (Header, MegaMenu, FullscreenMenu)
- [ ] Cross-selling matrix actualizada
- [ ] Imagen hero subida a `/public/areas/`
- [ ] Prueba en desarrollo (`npm run dev`)
- [ ] Prueba de build (`npm run build`)
- [ ] Revisión en móvil
- [ ] Revisión de accesibilidad

---

## Troubleshooting

### Error: "No se encontró el contenido para [Área]"

**Causa:** El slug en `getEntry()` no coincide con el nombre del archivo .md.

**Solución:**
1. Verificar que el archivo existe en `src/content/practices/`
2. Verificar que el nombre del archivo (sin .md) coincide con el slug

### Error: Build falla por campos faltantes

**Causa:** El schema de validación espera campos obligatorios.

**Solución:**
1. Verificar que todos los campos del frontmatter están presentes
2. Verificar que los arrays tienen la cantidad correcta de items

### Los componentes no muestran datos

**Causa:** Estructura incorrecta en el frontmatter YAML.

**Solución:**
1. Verificar indentación (usar 2 espacios, no tabs)
2. Verificar que strings con caracteres especiales estén entre comillas
3. Usar validador YAML online

### La imagen hero no carga

**Causa:** Ruta incorrecta o archivo faltante.

**Solución:**
1. Verificar que la imagen existe en `/public/areas/`
2. Verificar que la ruta en el frontmatter comienza con `/areas/`
3. Verificar extensión del archivo (.jpg, .png)

### Estilos del contenido Markdown no se aplican

**Causa:** Usando sintaxis Markdown incorrecta.

**Solución:**
1. Usar `## ` para títulos (con espacio después del #)
2. Usar `> ` para blockquotes (con espacio después del >)
3. Usar `---` para separadores (en línea propia)

---

## Ejemplo Completo: Implementar "Cliente Senior"

### 1. Crear archivo de contenido

```bash
touch astro-site/src/content/practices/cliente-senior.md
```

### 2. Contenido del archivo .md

```yaml
---
slug: "cliente-senior"

seo:
  title: "Servicios Legales a Domicilio para Adultos Mayores | JDV & Abogados"
  description: "Atención legal personalizada en tu hogar. Testamentos, poderes, trámites y asesoría para personas mayores con movilidad reducida."
  canonical: "/areas-practicas/cliente-senior"

hero:
  badge: "Atención Domiciliaria · Adultos Mayores"
  h1: "Cliente Senior: Servicios Legales en la Comodidad de tu Hogar"
  breadcrumbTitle: "Cliente Senior"
  tagline: "Atención legal personalizada para adultos mayores"
  image: "/areas/cliente-senior.jpg"

trust:
  - value: "35+"
    label: "Años Experiencia"
  - value: "100%"
    label: "Atención Domiciliaria"
  - value: "500+"
    label: "Clientes Atendidos"

# ... resto del contenido ...
---

## Entendemos tus necesidades

Para adultos mayores, ir a una oficina de abogados puede ser **difícil o imposible**...

---

## Servicios que llevamos a tu hogar

> **Testamentos, poderes, contratos y asesoría completa** sin que tengas que salir de casa.

---

## Cobertura en Santiago

Atendemos en todas las comunas de Santiago...
```

### 3. Crear archivo de página

```bash
touch astro-site/src/pages/areas-practicas/cliente-senior.astro
```

### 4. Contenido del archivo .astro

Usar la plantilla estándar, cambiando:
- `getEntry('practices', 'cliente-senior')`
- `headerBadge="Senior"`

### 5. Actualizar navegación y cross-selling

### 6. Probar

```bash
cd astro-site
npm run dev
# Visitar http://localhost:4321/areas-practicas/cliente-senior
```

---

## Guía Editorial y Manual de Estilo (Obligatorio para Nuevas Áreas de Práctica)

Esta sección define los **estándares de redacción profesional** que deben cumplirse en todo nuevo archivo `.md` de Área de Práctica. Su objetivo es asegurar coherencia institucional, posicionamiento premium, cumplimiento ético y máximo rendimiento en SEO y UX/CX para el mercado legal chileno 2026.

---

### 1. Voz Institucional y Persona Gramatical

**Regla absoluta:**
Todas las áreas de práctica deben redactarse en **primera persona plural institucional**.

Usar:

* “nosotros”
* “nuestro estudio”
* “nuestro equipo”
* “representamos”
* “intervenimos”
* “litigamos”

Evitar:

* “yo”
* “mi experiencia”
* “te acompaño”
* “yo garantizo”

**Ejemplo correcto**

> “Nuestro equipo representa a víctimas e imputados con una estrategia penal técnicamente fundada.”

---

### 2. Promesa de Marca Permitida (Ética + Legal)

Está **prohibido** prometer resultados.

Usar siempre promesas de:

* proceso
* metodología
* rigor técnico
* control de riesgos
* transparencia

**Plantillas permitidas**

* “Gestión orientada a…”
* “Estrategia jurídicamente fundada…”
* “Representación diligente y oportuna…”
* “Intervención definida según antecedentes del caso…”

**Prohibido**

* “garantizamos”
* “ganamos tu caso”
* “resultado asegurado”
* “somos los mejores”

---

### 3. Terminología Legal Oficial (Chile)

Siempre usar denominaciones formales chilenas:

Usar:

* Sistema de Justicia Penal
* Juzgado de Garantía
* Tribunal de Juicio Oral en lo Penal
* Ministerio Público (Fiscalía)
* Audiencia de control de detención
* Medidas cautelares
* Recurso de nulidad
* Apelación (cuando proceda)
* Revisión (excepcional)

Evitar:

* “Sistema de justicia criminal”
* “Corte criminal”
* “criminal defense”
* Anglicismos o latinismos innecesarios

---

### 4. Framework de Redacción por Componente

#### 4.1 Hero (hero.h1 + tagline)

Estructura recomendada:

* H1 = servicio + sistema legal chileno
* Tagline = valor diferencial + enfoque ético

**Ejemplo**

```text
h1: "Defensa Penal: Representación ante el Sistema de Justicia Penal"
tagline: "Estrategia jurídica rigurosa para víctimas e imputados en Chile"
```

---

#### 4.2 Objective.text

Debe:

* Enfatizar transformación jurídica
* Incluir ética + técnica
* No sonar publicitario

**Plantilla**

```text
Nuestro objetivo es garantizar que cada cliente reciba una representación legal rigurosa, ética y estratégicamente fundada. Actuamos con estándares de probidad, transparencia y control institucional, definiendo una hoja de ruta procesal clara desde la primera etapa del procedimiento.
```

---

#### 4.3 PainPoints

Reglas:

* Deben reflejar miedos reales del cliente
* Nunca atacar directamente a terceros
* No usar tono alarmista

**Ejemplo permitido**

```yaml
- "Dudas sobre la capacidad de atención personalizada en la Defensoría Penal Pública por alta carga de casos"
```

---

#### 4.4 Results

Regla:

* Describir **tipos de resultado**, no promesas.

**Plantilla segura**

```yaml
results:
  - icon: "⚖️"
    title: "Gestión Procesal Eficiente"
    description: "Intervención orientada a sobreseimientos, salidas alternativas, absoluciones o reparaciones, según las particularidades del caso."
```

---

#### 4.5 ServicesIncluded

Reglas:

* Verbos técnicos
* No marketing
* No duplicar resultados

**Ejemplo**

```yaml
title: "Interposición de Querellas"
description: "Redacción, presentación y tramitación de querellas conforme al Código Procesal Penal."
```

---

#### 4.6 Process

Siempre 4 pasos.
Cada paso debe:

* Tener verbo activo
* Indicar acción jurídica concreta

**Plantilla**

```yaml
process:
  - step: 1
    title: "Evaluación Jurídica Inicial"
    description: "Análisis de antecedentes, calificación legal y definición de escenarios procesales."
```

---

#### 4.7 FAQ

Reglas:

* Incluir siempre:

  * confidencialidad
  * riesgos
* Respuestas sobrias, sin venta.

---

### 5. UX Writing Legal (Textos de Interfaz)

#### 5.1 CTAs Permitidos

Usar:

* "Agendar consulta"
* "Solicitar evaluación"
* "Hablar con el equipo"

Evitar:

* "Contratar ahora"
* "Oferta"
* "Promo"

---

### 6. SEO 2026 para Áreas de Práctica

#### 6.1 Título SEO

* 50–60 caracteres
* Intención de búsqueda + marca

**Ejemplo**

```text
Defensa Penal en Santiago | JDV & Abogados
```

---

#### 6.2 Meta Description

* 140–160 caracteres
* Beneficio + CTA sobrio

**Ejemplo**

```text
Defensa penal para víctimas e imputados. Estrategia jurídica fundada, intervención temprana y representación ética en Chile. Agenda una consulta confidencial.
```

---

#### 6.3 Estructura SEO mínima

Cada Área debe contener:

* 1 H1
* 3–5 H2
* 1 bloque de etapas
* 1 bloque de FAQ
* 1 CTA final
* 3–8 enlaces internos (cuando corresponda)

---

### 7. Marca Personal Integrada (sin romper voz institucional)

Se permite mencionar trayectoria individual solo en forma institucional:

Usar:

* “Nuestro equipo integra experiencia de más de X años en el sector público…”
* “Nuestros abogados han ejercido en…”

Evitar:

* Relatos en primera persona dentro del área
* Biografías extensas fuera de la página Equipo

---

### 8. Diferencial Competitivo (obligatorio en cada área)

Cada nueva Área debe incluir al menos **una frase diferencial**:

**Plantillas**

* “Carga controlada de causas para atención personalizada.”
* “Hoja de ruta procesal desde la primera consulta.”
* “Preparación estratégica de cada audiencia.”
* “Estándares de probidad y transparencia institucional.”

---

### 9. Checklist Editorial Pre-Publicación

Antes de aprobar un nuevo archivo `.md`, verificar:

* [ ] Todo el texto está en voz institucional
* [ ] No hay promesas de resultado
* [ ] Terminología legal chilena correcta
* [ ] SEO title < 60 caracteres
* [ ] Meta description < 160 caracteres
* [ ] PainPoints no atacan a terceros
* [ ] CTA sobrio
* [ ] Hay diferencial competitivo explícito
* [ ] FAQ incluye precios, tiempos y plazos
* [ ] No hay comparaciones agresivas
* [ ] Contenido Markdown < 80 líneas

---

### 10. Biblioteca de Frases Aprobadas (Reutilizables)

**Autoridad**

* “Estrategia jurídicamente fundada”
* “Representación diligente y oportuna”
* “Preparación estratégica de audiencias”

**Transparencia**

* “Presupuesto claro según etapa y complejidad”
* “Comunicación periódica sobre hitos del caso”

**Ética**

* “Estándares de probidad y transparencia”
* “Resguardo estricto de confidencialidad”

**Urgencia procesal**

* “En materia penal, los plazos son decisivos”
* “Una intervención temprana puede cambiar el curso del procedimiento”

---


## Frameworks de Comunicación Estratégica Oficiales (Uso Obligatorio)

Todas las Áreas de Práctica deben construirse utilizando de forma controlada los siguientes frameworks. Esto garantiza coherencia de marca, ética publicitaria, UX consistente y rendimiento SEO 2026.

---

### 1. AIDA Sobrio (para estructura general de cada área)

**A – Atención**
Hero.h1 + Hero.tagline
Debe:

* Nombrar el servicio
* Ubicarlo en el sistema legal chileno
* Introducir el diferencial

**I – Interés**
Target + PainPoints
Debe:

* Identificar al visitante
* Reflejar su problema real
* Validar su emoción sin dramatizar

**D – Deseo**
Objective + Results
Debe:

* Mostrar transformación procesal
* Beneficios verificables
* Nunca promesas de resultado

**A – Acción**
FinalCTA
Debe:

* Crear urgencia jurídica
* No vender
* No presionar
* No prometer resultados

---

### 2. PAS (Problem–Agitation–Solution) Controlado

Se permite PAS en:

* Hero.tagline
* PainPoints
* Primer bloque de PracticeContent

**Reglas:**

* Problema: factual
* Agitación: consecuencias reales
* Solución: técnica, no emocional

**Prohibido:**

* Lenguaje catastrofista
* Miedo artificial
* Culpabilización

---

### 3. JTBD (Jobs To Be Done) para UX/CX

Cada sección debe responder a uno de estos “trabajos” del usuario:

| Sección    | Job principal                  |
| ---------- | ------------------------------ |
| Hero       | “Estoy en el lugar correcto”   |
| Target     | “Este servicio es para mí”     |
| PainPoints | “Entienden mi problema”        |
| Objective  | “Tienen un método serio”       |
| Results    | “Esto me conviene”             |
| Process    | “Sé qué pasará después”        |
| FAQ        | “No me llevaré sorpresas”      |
| CTA        | “Sé cuál es el siguiente paso” |

---

### 4. E-E-A-T (SEO y confianza institucional)

Cada Área debe contener explícitamente:

* **Experience:**
  Casos típicos, etapas, procedimientos

* **Expertise:**
  Menciones técnicas (leyes, tribunales, recursos)

* **Authoritativeness:**
  Trayectoria institucional (Contraloría, litigación, docencia)

* **Trust:**
  Confidencialidad, ética, transparencia de honorarios

---

### 5. StoryBrand (solo para áreas emocionales)

Aplicable SOLO a:

* Legado
* Animalista
* Cliente Senior

**Reglas:**

* Cliente = héroe
* Estudio = guía
* Problema = jurídico
* Plan = proceso legal
* Éxito = seguridad jurídica
* Evitar tono motivacional exagerado

---

### 6. UX Writing Legal

Todas las áreas deben cumplir:

* Frases ≤ 20 palabras promedio
* 1 idea por párrafo
* Listas para pasos, requisitos y beneficios
* CTA sobrio
* Lenguaje claro, no infantil

---

### 7. SEO 2026 Framework

Cada Área debe optimizar:

* 1 intención principal
* 3–5 intenciones secundarias
* 1 cluster de contenido relacionado
* FAQ alineado a búsquedas reales
* Enlaces internos estratégicos

---

## Política de Migración Editorial (Áreas Existentes)

Antes de publicar nuevas áreas, debe refactorizarse:

* animalista
* cliente-senior
* defensa-estatutaria
* legado
* capacitación
* inmobiliaria-copropiedad
* civil
* defensa-administrativa

**Reglas de refactor:**

* [ ] Convertir todo a voz institucional
* [ ] Eliminar promesas implícitas
* [ ] Sustituir “yo / mi” → “nuestro equipo”
* [ ] Introducir 1 diferencial competitivo explícito
* [ ] Alinear Results a promesas de proceso
* [ ] Balancear emoción (máx. 30%)

---

## Contacto para Soporte

Si encuentras problemas no documentados aquí, contactar al desarrollador principal o abrir un issue en el repositorio.

---

*Última actualización: Enero 2026*
