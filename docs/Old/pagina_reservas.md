# Instrucciones al Desarrollador — Página de Agendamiento

**JDV Abogados — Integración Calendly + Astro Framework**

---

| Campo | Detalle |
|---|---|
| **Documento** | Brief técnico para desarrollo |
| **Fecha** | 1 de febrero de 2026 |
| **Proyecto** | Página de agendamiento personalizada |
| **Framework** | Astro |
| **Prioridad** | 🔴 Alta |
| **Clasificación** | Documento interno — Uso del equipo de desarrollo |

---

## 1. Objetivo del Desarrollo

Crear una nueva página dentro del sitio web actual de JDV Abogados utilizando Astro, dedicada al agendamiento de consultas con la abogada Jacqueline Del Valle. La página debe embeber el widget de Calendly dentro de un diseño corporativo que sea coherente con la calidad, elegancia y sofisticación del sitio actual.

> ⛔ **CRÍTICO:** La URL de Calendly a integrar es la que se indica en la sección 3 de este documento. No utilizar otra URL.

El resultado debe ser una experiencia de agendamiento fluida donde el usuario no perciba que está interactuando con una herramienta externa, sino con una extensión natural del propio sitio web del despacho.

---

## 2. Alcance y Libertad de Implementación

El desarrollador tiene **plena libertad** para implementar los componentes Astro que estime convenientes para lograr el resultado deseado. No se impone una estructura de componentes específica. Lo que sí se requiere es:

- **Coherencia visual:** Mantener la misma línea de diseño, tipografía, paleta de colores y nivel de acabado que tienen las demás páginas del sitio web actual.
- **Animaciones e interacciones:** Replicar los mismos patrones de animación (transiciones de entrada, hover states, scroll effects, micro-interacciones) que ya existen en el sitio. Si el sitio usa una librería específica (GSAP, Framer Motion, CSS animations), mantener consistencia con esa tecnología.
- **Componentes reutilizables:** Aprovechar los componentes Astro existentes del sitio (navbar, footer, layouts, botones, tipografía) siempre que sea posible. Crear componentes nuevos solo cuando sea necesario para funcionalidad específica de esta página.
- **Estándares del proyecto:** Seguir las convenciones de nomenclatura, estructura de carpetas y patrones de código ya establecidos en el repositorio.
- **Mobile-first:** La página debe ser diseñada con enfoque mobile-first, garantizando una experiencia excelente en celulares como prioridad principal.

> ⚠️ **IMPORTANTE:** El desarrollador decide la arquitectura de componentes. Lo no negociable es la calidad visual, la coherencia con el sitio existente y la experiencia móvil impecable.

---

## 3. URL de Calendly — Dato Obligatorio

> ⛔ **CRÍTICO:** Esta es la ÚNICA URL autorizada para la integración. No modificar el path ni los parámetros base.

**URL completa de integración:**

```
https://calendly.com/jacquelinedelvalle-jdvabogados/30min
```

**URL con parámetros recomendados para el embebido:**

```
https://calendly.com/jacquelinedelvalle-jdvabogados/30min?hide_gdpr_banner=1&primary_color=B8860B
```

**Desglose de parámetros:**

| Parámetro | Valor | Propósito |
|---|---|---|
| `hide_gdpr_banner` | `1` | Ocultar banner de GDPR de Calendly |
| `primary_color` | `B8860B` | Color dorado corporativo como acento del widget |

> ⚠️ **IMPORTANTE:** Si el plan de Calendly contratado lo permite, agregar también: `hide_landing_page_details=1` y `hide_event_type_details=1` para una integración más limpia. Verificar con la administradora de la cuenta.

**Scripts requeridos de Calendly:**

```html
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
```

**Elemento HTML para embebido inline:**

```html
<div class="calendly-inline-widget"
     data-url="https://calendly.com/jacquelinedelvalle-jdvabogados/30min?hide_gdpr_banner=1&primary_color=B8860B"
     style="min-width:320px;height:700px;">
</div>
```

---

## 4. Requisitos Mobile-First

La página debe ser diseñada primero para dispositivos móviles y luego escalar hacia pantallas más grandes. Esta es una prioridad crítica dado que la mayoría de los potenciales clientes accederán desde sus celulares.

### 4.1 Comportamiento por Dispositivo

| Dispositivo | Layout | Consideraciones |
|---|---|---|
| **🔴 Móvil (<640px)** | Columna única. Hero compacto. Widget Calendly a ancho completo. Sidebar debajo del calendario. Menú hamburguesa. | **PRIORIDAD MÁXIMA.** Toda la información crítica debe ser accesible sin scroll excesivo. El botón de reserva debe ser alcanzable con el pulgar. |
| **🟡 Tablet (640–1024px)** | Columna única o dos columnas adaptativas. Hero intermedio. Sidebar puede colapsar o mostrarse lateral. | Asegurar que el widget Calendly tenga suficiente espacio vertical. Touch targets mínimo 44x44px. |
| **🟢 Desktop (>1024px)** | Dos columnas: sidebar izquierda (~320px) + widget Calendly (fluid). Navbar completa. Hero con mayor presencia. | Aprovechar el espacio para mostrar toda la información del perfil y tips de preparación de forma visible. |

### 4.2 Reglas Críticas para Móvil

- El widget de Calendly debe ocupar el **100% del ancho disponible** en móvil, sin márgenes laterales excesivos que reduzcan el área útil del calendario.
- La **altura mínima del contenedor** del widget debe ser **600px en móvil** para evitar que el calendario se corte o requiera scroll interno excesivo.
- Los textos del hero deben reducirse proporcionalmente. Título principal no menor a **28px**, descripción no menor a **14px**.
- Los meta-datos del hero (duración, modalidad, cobertura) deben **apilarse verticalmente** en móvil, no en fila horizontal.
- Todos los elementos interactivos (botones, links, slots de tiempo) deben tener un **touch target mínimo de 44x44px** según guías de accesibilidad.
- El navbar debe colapsar a **menú hamburguesa** con transición suave, coherente con el patrón ya utilizado en el sitio.
- **Evitar fixed/sticky positioning excesivo** en móvil que consuma espacio vertical valioso.
- Las tarjetas de confianza (datos protegidos, confirmación, sin compromiso) deben apilarse en una **sola columna** en móvil.
- Verificar que **no haya overflow horizontal** en ninguna resolución móvil (320px a 428px).

### 4.3 Testing Móvil Requerido

Antes de entregar, validar en los siguientes escenarios como mínimo:

| Dispositivo / Viewport | Ancho | SO | Navegador |
|---|---|---|---|
| iPhone SE | 375px | iOS | Safari |
| iPhone 14/15 Pro | 393px | iOS | Safari / Chrome |
| iPhone 14/15 Pro Max | 428px | iOS | Safari |
| Samsung Galaxy S24 | 360px | Android | Chrome |
| Pixel 8 | 412px | Android | Chrome |
| iPad Mini | 768px | iPadOS | Safari |
| iPad Pro 11" | 834px | iPadOS | Safari |

---

## 5. Estructura de Contenido de la Página

La siguiente es la estructura de contenido recomendada. El desarrollador tiene libertad en cómo implementarla en componentes Astro, pero **todos estos elementos deben estar presentes** en la página final:

### 5.1 Encabezado y Navegación

- Utilizar el **mismo navbar/header del sitio existente**. No crear uno nuevo.
- La página de agendamiento debe aparecer como una sección más del sitio, no como algo aislado.
- Incluir un indicador visual (link activo, breadcrumb o similar) que ubique al usuario en la sección de agendamiento.

### 5.2 Sección Hero

- Título principal con el nombre de la abogada: **Jacqueline Del Valle**.
- Subtítulo o descripción breve invitando a reservar una consulta.
- Meta-datos visibles: duración de la consulta (**30 minutos**), modalidad (**virtual/presencial**), cobertura (**nacional e internacional**).
- El hero debe ser impactante pero no excesivamente largo en móvil. Priorizar que el usuario llegue rápido al calendario.

### 5.3 Widget de Calendly (Elemento Central)

> ⛔ **CRÍTICO:** Este es el componente más importante de la página. Debe ser visible sin necesidad de scroll excesivo, especialmente en móvil.

- Embeber el widget inline de Calendly usando la URL de la sección 3.
- Envolver el widget en un contenedor con bordes, sombra sutil y encabezado que diga algo como "Seleccione su horario".
- Incluir un indicador de disponibilidad (badge verde con texto "Disponible").
- Altura mínima del widget: **700px en desktop**, **600px en móvil**.
- Ancho: **100% del contenedor** asignado.

### 5.4 Panel de Perfil Profesional

- Tarjeta con nombre: **Jacqueline Del Valle**.
- Rol o firma: **JDV Abogados**.
- Avatar con iniciales "JD" o foto profesional si se proporciona.
- Detalles de la reunión: duración, tipo de sesión, confidencialidad.
- Datos de contacto: correo electrónico.
- En desktop: sidebar izquierda fija (sticky). En móvil: debajo del calendario.

### 5.5 Tips de Preparación para la Consulta

- "Tenga a mano la documentación relevante de su caso"
- "Prepare un resumen cronológico de los hechos"
- "Anote las preguntas que desea consultar"
- "Verifique su conexión a internet si la sesión es virtual"

### 5.6 Indicadores de Confianza

Tres tarjetas con íconos que comuniquen:

- **Datos Protegidos:** "Su información está encriptada y segura"
- **Confirmación Inmediata:** "Recibirá confirmación por correo electrónico"
- **Sin Compromiso:** "Primera consulta de orientación general"

### 5.7 Footer

- Utilizar el **mismo footer del sitio existente**.

---

## 6. Directrices de Diseño y Coherencia Visual

> ⚠️ **La regla de oro:** si un visitante navega desde cualquier otra página del sitio a la página de agendamiento, NO debe notar un cambio de estilo. Debe sentirse como una extensión natural.

### 6.1 Lo que DEBE mantenerse del sitio actual

- Misma tipografía (fuentes, tamaños, pesos, interlineado).
- Misma paleta de colores exacta.
- Mismos patrones de sombra, bordes y border-radius.
- Mismos estilos de botones (primarios, secundarios, hovers).
- Mismas animaciones de entrada de elementos (si el sitio usa fade-in al scroll, esta página también).
- Mismo tratamiento de íconos (si el sitio usa Lucide, Heroicons, o SVG custom, mantener consistencia).
- Mismo espaciado y ritmo vertical entre secciones.
- Mismo comportamiento del navbar en scroll (si tiene efecto sticky, blur, cambio de color, etc.).

### 6.2 Paleta de Referencia del Mockup

La siguiente paleta se utilizó en el mockup entregado. Si el sitio actual usa colores diferentes, **PRIORIZAR los colores del sitio actual** y adaptar estos como guía complementaria:

| Color | HEX | Uso en mockup | CSS Variable |
|---|---|---|---|
| Azul Marino | `#1B2A4A` | Primario, textos | `--navy` |
| Dorado | `#B8860B` | Acentos, detalles | `--gold` |
| Crema | `#FAF7F0` | Fondo principal | `--cream` |
| Dorado Pálido | `#F5ECD7` | Fondos de íconos | `--gold-pale` |
| Texto secundario | `#5A6B7F` | Textos complementarios | `--text-secondary` |

### 6.3 Animaciones e Interacciones

Replicar los patrones existentes del sitio. Si no hay un estándar definido, se sugiere como mínimo:

- Fade-in + translate sutil al hacer scroll (entrada de secciones con IntersectionObserver o librería equivalente).
- Transiciones hover en botones y links (cambio de color/fondo con ease de 0.3s).
- Efecto de navbar al scroll (cambio de fondo/sombra).
- Indicador de disponibilidad con animación pulse (punto verde del badge).
- Animaciones staggered para elementos que aparecen en grupo (meta-datos del hero, tarjetas de confianza).

---

## 7. Consideraciones Técnicas Astro

### 7.1 Integración del Script de Calendly

El SDK de Calendly (`widget.js`) es un script externo que debe cargarse de forma asíncrona. Opciones para integrarlo en Astro:

- Agregar los tags `<link>` y `<script>` directamente en el `<head>` del layout de la página usando el slot de head de Astro.
- Alternativamente, crear un componente `CalendlyWidget.astro` que encapsule el widget completo y sus dependencias.
- Si se usa isla interactiva (React/Vue/Svelte dentro de Astro), el widget de Calendly debe montarse después del hydration.

### 7.2 Estructura Sugerida de Archivos

Sugerencia no vinculante. Adaptar a la convención del proyecto:

```
src/pages/agenda.astro                        ← Página principal
src/components/agenda/CalendlyWidget.astro    ← Widget embebido
src/components/agenda/ProfileCard.astro       ← Tarjeta de perfil
src/components/agenda/PrepTips.astro          ← Tips de preparación
src/components/agenda/TrustBadges.astro       ← Indicadores de confianza
src/components/agenda/HeroAgenda.astro        ← Sección hero específica
```

> ⚠️ **IMPORTANTE:** Esta estructura es una sugerencia. El desarrollador tiene total libertad de organización siempre que el resultado cumpla con los requisitos funcionales, visuales y de experiencia móvil.

### 7.3 SEO y Rendimiento

- **Title tag:** "Agendar Consulta | JDV Abogados — Jacqueline Del Valle"
- **Meta description:** "Reserve una consulta de 30 minutos con la abogada Jacqueline Del Valle. Atención personalizada, confidencial y profesional. JDV Abogados."
- El script de Calendly debe cargarse con `async` para no bloquear el render.
- Aplicar lazy loading al widget si está debajo del fold inicial en móvil.
- Asegurar que la página pase **Core Web Vitals** (LCP < 2.5s, CLS < 0.1, INP < 200ms).
- **Open Graph tags** para cuando se comparta el link en WhatsApp o redes sociales.

---

## 8. Entregables y Criterios de Aceptación

### 8.1 Entregables Esperados

1. Página funcional publicada en la URL acordada (ej: `/agenda`) del sitio de JDV Abogados.
2. Código fuente integrado al repositorio del proyecto con commits limpios y descriptivos.
3. Verificación de funcionamiento del widget de Calendly (creación de reserva de prueba exitosa).
4. Validación de diseño responsivo en los dispositivos listados en la sección 4.3.
5. Capturas de pantalla o video demostrativo de la página en móvil y desktop.

### 8.2 Criterios de Aceptación

| # | Criterio | Verificación |
|---|---|---|
| 1 | El widget de Calendly carga correctamente y permite agendar una reunión real. | Crear reserva de prueba y verificar email de confirmación. |
| 2 | La página es visualmente coherente con el resto del sitio web. | Comparación visual lado a lado con otra página del sitio. |
| 3 | La experiencia móvil es óptima: sin overflow, sin textos cortados, sin elementos inaccesibles. | Pruebas en dispositivos reales o emulador en viewports listados. |
| 4 | Las animaciones y transiciones son consistentes con las del sitio actual. | Navegación fluida entre la página de agenda y otras páginas. |
| 5 | Los meta-tags de SEO y Open Graph están configurados correctamente. | Validar con herramientas de SEO y previsualización de WhatsApp/redes. |
| 6 | La página carga en menos de 3 segundos en conexión 4G. | Lighthouse o WebPageTest con throttling de red. |
| 7 | Todos los elementos de contenido listados en la sección 5 están presentes. | Revisión de checklist contra especificación. |

---

## 9. Archivos de Referencia Adjuntos

Se entregan junto con este documento los siguientes archivos de referencia:

| Archivo | Descripción |
|---|---|
| `agenda-jdv.html` | Prototipo funcional con widget real de Calendly embebido. Abrirlo en el navegador para ver la experiencia completa incluyendo el calendario real. |
| `mockup-jdv.html` | Mockup visual de alta fidelidad con calendario simulado y anotaciones de componentes. Referencia de diseño para la implementación. |
| `plan-implementacion-jdv.md` | Documento de planificación completo con fases, cronograma y especificaciones técnicas. |

> ⚠️ **IMPORTANTE:** Estos archivos son REFERENCIAS visuales y funcionales. El desarrollador NO debe copiar el código tal cual, sino usarlos como guía para implementar en Astro con los componentes y estilos propios del sitio.

---

## 10. Resumen Rápido — Lo Esencial

| Qué | Detalle |
|---|---|
| 🔴 **URL Calendly** | `https://calendly.com/jacquelinedelvalle-jdvabogados/30min` |
| **Framework** | Astro (componentes a criterio del desarrollador) |
| **Prioridad #1** | Mobile-first, experiencia celular impecable |
| **Prioridad #2** | Coherencia total con diseño del sitio existente |
| **Prioridad #3** | Animaciones y transiciones consistentes con el sitio |
| **Libertad** | Total en arquitectura de componentes Astro |
| 🔴 **No negociable** | URL de Calendly, calidad visual, experiencia móvil |

---

*JDV Abogados — Confidencial — Uso interno del equipo de desarrollo — Febrero 2026*