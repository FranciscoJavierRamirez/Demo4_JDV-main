# JDVI & Abogados - Sitio Web Demo

## 📋 Descripción General del Proyecto

Sitio web demo para el estudio jurídico **JDVI & Abogados**, desarrollado completamente en HTML, CSS y JavaScript puro. Cada página es un archivo `index.html` independiente que posteriormente se migrará a Astro con React y Tailwind CSS.

## 🎯 Objetivo

Crear una demo funcional y visualmente atractiva que represente fielmente la identidad del estudio jurídico, con diseño moderno y elegante, optimizado para conversión de clientes y posicionamiento SEO.

## 🏗️ Arquitectura del Proyecto

```
jdvi-abogados-demo/
├── README.md (este archivo)
├── home/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── defensa-estatutaria/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── defensa-administrativa/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── cliente-senior/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── legado/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── civil/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── inmobiliaria-copropiedad/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── animalista/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── capacitacion/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── quienes-somos/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── contacto/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── assets/
│   ├── images/
│   │   ├── logo-main.jpg (JDVI_logo_final_dorado.jpg)
│   │   ├── logo-defensa.jpg (Logo.jpg)
│   │   ├── placeholder-jacqueline-hero.jpg
│   │   ├── placeholder-jacqueline-about.jpg
│   │   └── placeholder-jacqueline-testimonial.jpg
│   ├── css/
│   │   └── shared.css
│   └── js/
│       └── shared.js
└── docs/
    └── brand-guidelines.md
```

## 🎨 Identidad Visual

### Colores Principales
- **Azul Corporate**: `#3D5A6C` (del logo principal)
- **Dorado Elegante**: `#D4AF37` (balanza de justicia)
- **Negro Profundo**: `#1A1A1A` (textos principales)
- **Gris Sofisticado**: `#6B7280` (textos secundarios)
- **Blanco**: `#FFFFFF` (fondos)
- **Crema Sutil**: `#F9F7F4` (fondos alternativos)

### Tipografía
- **Títulos**: Playfair Display / Merriweather (elegante, serif)
- **Cuerpo**: Inter / Open Sans (moderna, sans-serif)
- **Legal/Formal**: Georgia / Times New Roman (cuando se requiera)

### Logos
1. **Logo Principal**: `JDVI_logo_final_dorado.jpg` - Balanza dorada sobre fondo azul
2. **Logo Secundario**: `Logo.jpg` - Defensa Funcionaria en Chile

## 📸 Placeholders de Imágenes

### Jacqueline (Abogada Principal)

**1. Hero Image - Homepage**
- **Archivo**: `placeholder-jacqueline-hero.jpg`
- **Dimensiones**: 1200x800px
- **Descripción**: Retrato profesional de Jacqueline en traje ejecutivo azul marino o negro, sonrisa confiada y cálida, fondo de oficina moderna con estantería de libros legales difuminada, iluminación natural suave que transmita profesionalismo y cercanía, pose formal pero accesible con brazos cruzados o manos entrelazadas.

**2. About Page - Quiénes Somos**
- **Archivo**: `placeholder-jacqueline-about.jpg`
- **Dimensiones**: 800x1000px (vertical)
- **Descripción**: Foto de cuerpo entero o 3/4 de Jacqueline en ambiente más relajado pero profesional, posiblemente sentada en escritorio o de pie junto a ventana con luz natural, vestimenta elegante business casual, expresión amigable y profesional, transmitiendo experiencia y empatía.

**3. Testimonial Section**
- **Archivo**: `placeholder-jacqueline-testimonial.jpg`
- **Dimensiones**: 400x400px (cuadrada)
- **Descripción**: Headshot profesional circular de Jacqueline, sonrisa genuina, fondo neutro o desenfocado, iluminación profesional que resalte rasgos faciales de manera favorecedora, debe transmitir confianza y profesionalismo para acompañar sección de testimonios.

### Imágenes Adicionales por Área

**Defensa Estatutaria**
- Edificio gubernamental chileno o Palacio de la Moneda
- Documentos legales con sello oficial

**Cliente Senior**
- Adulto mayor sonriente recibiendo asesoría en hogar
- Manos de abogada y cliente firmando documentos

**Legado**
- Familia multigeneracional (incluir mascotas)
- Testamento o documentos notariales elegantes

**Animalista**
- Perros y gatos en ambiente hogareño
- Tutor feliz con su mascota

## 🔧 Especificaciones Técnicas

### Estructura HTML Base (Compartida)

Cada página debe incluir:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[Descripción específica por página]">
    <meta name="keywords" content="[Palabras clave específicas]">
    <title>[Título] - JDVI & Abogados</title>
    <link rel="stylesheet" href="../assets/css/shared.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="main-nav">
        <!-- Menú de navegación compartido -->
    </nav>

    <!-- Main Content -->
    <main>
        <!-- Contenido específico de la página -->
    </main>

    <!-- Footer -->
    <footer class="main-footer">
        <!-- Footer compartido -->
    </footer>

    <script src="../assets/js/shared.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

### Componentes Obligatorios en Todas las Páginas

#### 1. Header/Navigation
- Logo JDVI & Abogados (clickeable → home)
- Menú horizontal responsive:
  - Inicio
  - Áreas de Práctica (dropdown)
    - Defensa Estatutaria
    - Defensa Administrativa
    - Cliente Senior
    - Legado
    - Civil
    - Inmobiliaria y Copropiedad
    - Animalista
    - Capacitación
  - Quiénes Somos
  - Contacto
- Botón CTA: "Agendar Consulta"
- Ícono menú hamburguesa (móvil)

#### 2. Footer
**Columna 1: Información del Estudio**
- Logo pequeño
- Breve descripción (2-3 líneas)
- Redes sociales (íconos)

**Columna 2: Áreas de Práctica**
- Links a todas las áreas (lista)

**Columna 3: Contacto**
- Teléfono: [Placeholder]
- Email: contacto@jdviabogados.cl
- Dirección: [Placeholder]
- Horario de atención

**Columna 4: Newsletter**
- Formulario suscripción
- Input email + botón "Suscribirse"

**Copyright**
- © 2026 JDVI & Abogados. Todos los derechos reservados.
- Link: Política de Privacidad | Términos y Condiciones

### CSS - Guías de Estilo

```css
/* Variables CSS (shared.css) */
:root {
    --color-primary: #3D5A6C;
    --color-gold: #D4AF37;
    --color-dark: #1A1A1A;
    --color-gray: #6B7280;
    --color-light: #F9F7F4;
    --color-white: #FFFFFF;
    
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Inter', sans-serif;
    
    --transition: all 0.3s ease;
    --shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
    
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
}
```

### JavaScript - Funcionalidades Comunes

```javascript
// shared.js - Funcionalidades que deben estar en todas las páginas

// 1. Menú móvil hamburguesa
// 2. Smooth scroll para anclas
// 3. Animaciones on scroll (fade-in, slide-in)
// 4. Validación de formularios
// 5. Modal para "Agendar Consulta"
// 6. Lazy loading de imágenes
```

## 📄 Páginas del Sitio

### 1. Home (`/home/`)

**Secciones:**
1. **Hero Section**
   - Imagen de fondo: Jacqueline o oficina legal
   - Título: "Defendemos Tus Derechos con Experiencia y Dedicación"
   - Subtítulo: "Estudio jurídico especializado en defensa estatutaria, administrativa y más"
   - CTA: "Agendar Consulta Gratuita"

2. **Áreas de Práctica** (Grid 4x2)
   - Cards con ícono, título y descripción breve
   - Hover effect con elevación
   - Link a página específica

3. **Por Qué Elegirnos**
   - 3-4 beneficios con iconos
   - Experiencia, personalización, resultados, compromiso

4. **Sobre Jacqueline** (Preview)
   - Foto + texto breve
   - Link a "Quiénes Somos"

5. **Testimonios**
   - Carousel con 3-4 testimonios
   - Foto, nombre, caso (sin revelar info sensible)

6. **Call to Action Final**
   - Fondo dorado o azul
   - "¿Necesitas Asesoría Legal?"
   - Botón contacto + teléfono

**SEO Keywords**: abogados Chile, defensa estatutaria, derecho administrativo, asesoría legal, estudio jurídico Santiago

---

### 2. Defensa Estatutaria (`/defensa-estatutaria/`)

**Estructura:**
- Hero con título del área
- Descripción detallada de la misión
- "¿Quién es Nuestro Cliente?" (target)
- "Cómo Te Ayudamos" (actuación)
- Casos Comunes (keywords en formato visual)
- Proceso de Trabajo (pasos 1-2-3-4)
- FAQ (5-6 preguntas frecuentes)
- CTA: Contacto específico

**Palabras clave a integrar**: término anticipado contrata, investigaciones sumarias, procedimientos disciplinarios, estabilidad laboral, funcionarios públicos

---

### 3-8. Otras Áreas de Práctica

Seguir estructura similar a Defensa Estatutaria, adaptando contenido según información proporcionada en `base-conocimiento-sitio-web.md`

---

### 9. Quiénes Somos (`/quienes-somos/`)

**Secciones:**
1. **Hero**
   - Imagen de Jacqueline profesional
   - Título: "Conoce a Jacqueline [Apellido]"

2. **Historia del Estudio**
   - Origen, motivación, valores

3. **Perfil de Jacqueline**
   - Biografía profesional
   - Educación y especialidades
   - Experiencia
   - Enfoque humano

4. **Valores del Estudio**
   - Integridad, excelencia, empatía, compromiso

5. **Equipo** (si aplica)
   - Colaboradores o socios

6. **Certificaciones/Membresías**
   - Colegios profesionales, asociaciones

---

### 10. Contacto (`/contacto/`)

**Elementos:**
1. **Hero Simple**
   - Título: "Conversemos Sobre Tu Caso"
   - Subtítulo: "Primera consulta sin costo"

2. **Formulario de Contacto**
   - Nombre completo
   - Email
   - Teléfono
   - Área de interés (select)
   - Mensaje
   - Checkbox: "Acepto política de privacidad"
   - Botón: "Enviar Consulta"

3. **Información de Contacto**
   - Dirección con mapa (Google Maps embed)
   - Teléfono (clickeable para móvil)
   - Email
   - Horario de atención
   - Botón WhatsApp flotante

4. **Métodos Alternativos**
   - "También puedes contactarnos por:"
   - WhatsApp, teléfono, email directo
   - Redes sociales

---

## 🎯 Criterios de Diseño

### Principios de Diseño

1. **Elegancia Moderna**
   - Espacios en blanco generosos
   - Tipografía grande y legible
   - Paleta de colores sofisticada
   - Transiciones suaves

2. **Profesionalismo**
   - Imágenes de alta calidad
   - Contenido bien estructurado
   - Sin elementos distractores
   - Confianza visual

3. **Accesibilidad**
   - Contraste adecuado (WCAG AA)
   - Textos alternativos en imágenes
   - Navegación por teclado
   - Responsive design

4. **Conversión**
   - CTAs visibles y estratégicos
   - Formularios simples
   - Testimonios visibles
   - Prueba social

### Responsive Breakpoints

```css
/* Mobile First */
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+
```

## 📱 Características Especiales

### Animaciones
- Fade in al scroll
- Slide in para cards
- Hover effects en botones y cards
- Smooth scroll entre secciones

### Interactividad
- Menú sticky al scroll
- Back to top button
- Formularios con validación en tiempo real
- Modal para agendar consulta
- Carousel de testimonios

### Performance
- Lazy loading de imágenes
- Minificación de CSS/JS (para producción)
- Optimización de imágenes
- Carga progresiva

## 🔍 SEO Considerations

### Meta Tags Obligatorios por Página
```html
<meta name="description" content="[Descripción única 150-160 chars]">
<meta name="keywords" content="[5-10 keywords relevantes]">
<meta property="og:title" content="[Título]">
<meta property="og:description" content="[Descripción]">
<meta property="og:image" content="[URL imagen]">
<meta property="og:url" content="[URL página]">
<meta name="twitter:card" content="summary_large_image">
```

### Estructura de Contenido SEO
- H1: Solo uno por página (título principal)
- H2: Secciones principales
- H3: Subsecciones
- Párrafos: 2-3 frases, espaciados
- Listas: Para facilitar lectura
- Alt text: Todas las imágenes

## 🚀 Plan de Desarrollo

### Fase 1: Estructura Base (Semana 1)
1. Crear estructura de carpetas
2. Desarrollar `shared.css` y `shared.js`
3. Implementar header y footer compartidos
4. Crear página Home completa

### Fase 2: Áreas de Práctica (Semana 2-3)
5. Defensa Estatutaria
6. Defensa Administrativa
7. Cliente Senior
8. Legado
9. Civil
10. Inmobiliaria y Copropiedad
11. Animalista
12. Capacitación

### Fase 3: Páginas Institucionales (Semana 4)
13. Quiénes Somos
14. Contacto

### Fase 4: Refinamiento (Semana 5)
15. Optimización responsive
16. Ajustes de diseño
17. Testing cross-browser
18. Performance optimization

## 🛠️ Herramientas de Desarrollo

- **IDE**: Cursor IDE
- **AI Assistant**: Claude Code
- **Testing**: BrowserStack / Responsively App
- **Version Control**: Git
- **Deployment**: Netlify / Vercel (para demo)

## 📚 Recursos Adicionales

### Fuentes Gratuitas
- Google Fonts: Playfair Display, Inter, Open Sans
- Font Awesome (íconos)

### Imágenes Stock (temporal)
- Unsplash, Pexels (imágenes legales/profesionales)
- Placeholder.com (placeholders dimensionados)

### Inspiración de Diseño
- Awwwards (sección Law Firms)
- Dribbble (legal website design)

## 📞 Información de Contacto (Placeholders)

- **Teléfono**: +56 9 XXXX XXXX
- **Email**: contacto@jdviabogados.cl
- **Dirección**: [Calle] [Número], [Comuna], Santiago, Chile
- **Horario**: Lunes a Viernes, 9:00 - 18:00

---

## 🔐 Notas Importantes

1. **Privacidad**: No incluir datos reales de clientes en testimonios
2. **Imágenes**: Todas las fotos profesionales deben tener derechos de uso
3. **Legal**: Incluir disclaimers necesarios en footer
4. **GDPR/Ley de Protección de Datos**: Formularios con consentimiento explícito

---

## ✅ Checklist de Calidad por Página

Cada README individual debe verificar:

- [ ] HTML semántico y válido
- [ ] CSS modular y comentado
- [ ] JavaScript sin errores de consola
- [ ] Responsive en todos los breakpoints
- [ ] Imágenes optimizadas y con alt text
- [ ] SEO meta tags completos
- [ ] Accesibilidad (contraste, navegación)
- [ ] Links internos funcionando
- [ ] Formularios con validación
- [ ] Performance (carga < 3 segundos)

---

**Versión**: 1.0  
**Última actualización**: Enero 2026  
**Contacto del proyecto**: [Tu contacto]