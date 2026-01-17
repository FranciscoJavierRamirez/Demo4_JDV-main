# Auditoría de Diseño UX/UI - JDV & Abogados
## Informe Completo de Recomendaciones del Diseñador

---

## RESUMEN EJECUTIVO

El sitio web de JDV & Abogados presenta problemas críticos de legibilidad, identidad visual y experiencia de usuario que requieren corrección inmediata. Los principales hallazgos incluyen:

- **Hero ilegible**: Contraste inferior a 3:1 (requiere mínimo 4.5:1 WCAG AA)
- **Color oro "sucio"**: #D4AF37 percibido como mostaza barata
- **Blanco estéril**: #FFFFFF sin calidez institucional
- **Formateo no profesional**: Contenido con asteriscos
- **Menú móvil roto**: No funciona correctamente
- **Falta de micro-interacciones**: Experiencia estática

---

## PARTE 1: PROBLEMAS CRÍTICOS IDENTIFICADOS

### 1.1 Hero Section - Legibilidad Crítica

**PROBLEMA:**
- Contraste de texto inferior a 3:1
- Texto blanco sobre fondo con imagen borrosa
- Gradiente azul insuficiente para garantizar legibilidad
- Incumplimiento WCAG AA (requiere 4.5:1 para texto normal)

**IMPACTO:**
- Usuarios no pueden leer el mensaje principal
- Abandono inmediato en primera impresión
- Penalización SEO por accesibilidad

**ESTADO ACTUAL:**
```css
/* Gradiente actual - INSUFICIENTE */
.hero-bg::after {
    background: linear-gradient(
        90deg,
        rgba(12, 35, 64, 0.90) 0%,
        rgba(12, 35, 64, 0.85) 40%,
        rgba(26, 77, 122, 0.70) 70%,
        rgba(12, 35, 64, 0.40) 100%
    );
}
```

### 1.2 Color Oro "Sucio" (#D4AF37)

**PROBLEMA:**
- Color #D4AF37 percibido como "mostaza"
- Asociación con baja calidad
- Contraste con blanco puro genera sensación barata
- No transmite elegancia jurídica

**IMPACTO:**
- Percepción de marca económica
- Inconsistencia con posicionamiento premium
- Afecta confianza del cliente

**UBICACIONES AFECTADAS:**
- Hero title gradient
- Badges y elementos destacados
- CTAs secundarios
- Decoraciones

### 1.3 Blanco Estéril (#FFFFFF)

**PROBLEMA:**
- Blanco puro #FFFFFF genera sensación "hospitalaria"
- Falta de calidez institucional
- Contraste excesivo causa fatiga visual
- Diferencia notable con estándares premium 2026

**IMPACTO:**
- Experiencia fría y distante
- No transmite confianza personal
- Inconsistente con diseño moderno

### 1.4 Contenido con Formateo Asteriscos

**PROBLEMA:**
- Texto formateado con asteriscos (**texto**)
- Apariencia de markdown sin renderizar
- Percepción no profesional
- Inconsistencia tipográfica

**EJEMPLOS:**
```
**15+ años** de experiencia
**500+ casos** exitosos
```

### 1.5 Menú Móvil Roto

**PROBLEMA:**
- Menú fullscreen no funciona correctamente
- Overlay cubre texto
- No es responsive
- Navegación bloqueada en dispositivos móviles

**IMPACTO CRÍTICO:**
- 60%+ de usuarios en móvil no pueden navegar
- Abandono inmediato
- Pérdida directa de conversiones

---

## PARTE 2: PSICOLOGÍA DEL COLOR Y IDENTIDAD

### 2.1 AZUL INSTITUCIONAL - IDENTIDAD LEGAL

**MANDATORIO:**
El sitio DEBE usar AZUL como color dominante, NO NEGRO.

**PSICOLOGÍA DEL COLOR:**

| Color | Industria | Mensaje Psicológico |
|-------|-----------|---------------------|
| **AZUL** | Legal, Bancos, Gobierno | Confianza, Autoridad, Estabilidad |
| **NEGRO** | Tech, Gaming, Moda | Modernidad, Minimalismo, Lujo |
| **GRIS OSCURO** | Consultoría, Arquitectura | Sofisticación, Neutralidad |

**COLORES CORRECTOS:**
```css
/* CORRECTO - Identidad Legal */
--blue-primary: #3B82F6;     /* Azul institucional */
--blue-dark: #2563EB;         /* Azul confianza */
--blue-deeper: #1E40AF;       /* Azul autoridad */

/* INCORRECTO - Identidad Tech */
--slate-900: #0F172A;         /* NUNCA USAR */
--charcoal: #1E293B;          /* NUNCA USAR */
--black: #000000;             /* NUNCA USAR */
```

**REFERENCIAS VISUALES:**
- ✅ **Sitios legales correctos**: Baker McKenzie, Latham & Watkins, Clifford Chance
- ❌ **Sitios tech incorrectos**: Vercel, Linear, Stripe

### 2.2 Color Champagne Correcto

**RECOMENDACIÓN:**
```css
--gold-light: #C9A254;  /* Champagne premium */
```

**NO USAR:**
```css
--gold-light: #D4AF37;  /* Mostaza barato */
```

**DIFERENCIA PERCEPTUAL:**
- #C9A254: Elegante, cálido, premium
- #D4AF37: Amarillento, barato, antiguo

### 2.3 Blanco Cálido

**RECOMENDACIÓN:**
```css
--white: #FAFAF9;  /* Blanco cálido */
```

**NO USAR:**
```css
--white: #FFFFFF;  /* Blanco frío estéril */
```

---

## PARTE 3: DISEÑO MODERNO 2026

### 3.1 Navegación Glassmórfica

**OBJETIVO:**
Nav bar con efecto vidrio esmerilado al hacer scroll.

**ESPECIFICACIÓN TÉCNICA:**
```css
.nav-glassmorphic {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow:
        0 8px 32px 0 rgba(31, 38, 135, 0.15),
        0 1px 3px 0 rgba(0, 0, 0, 0.05);
}
```

**COMPORTAMIENTO:**
- Scroll 0px: Transparente
- Scroll >100px: Glassmorphic activado
- Transición suave 300ms

### 3.2 Sombras Multicapa (Multilayer Shadows)

**PROBLEMA ACTUAL:**
```css
/* Sombra plana - anticuada */
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
```

**RECOMENDACIÓN 2026:**
```css
/* Sombra multicapa - profundidad realista */
--shadow-premium:
    0 1px 2px 0 rgba(0, 0, 0, 0.05),
    0 4px 12px 0 rgba(0, 0, 0, 0.08),
    0 16px 32px 0 rgba(0, 0, 0, 0.12);
```

**APLICAR EN:**
- Cards de áreas de práctica
- CTAs principales
- Modal de consulta
- Floating cards

### 3.3 CTA Premium con Shimmer

**OBJETIVO:**
Botón principal con efecto shimmer (brillo deslizante).

**ESPECIFICACIÓN:**
```css
.btn-premium {
    position: relative;
    background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
    overflow: hidden;
    box-shadow: var(--shadow-premium);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-premium::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
    );
    animation: shimmer 3s infinite;
}

@keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
}

.btn-premium:hover {
    transform: translateY(-2px);
    box-shadow:
        0 2px 4px 0 rgba(0, 0, 0, 0.05),
        0 8px 16px 0 rgba(0, 0, 0, 0.1),
        0 20px 40px 0 rgba(59, 130, 246, 0.3);
}
```

### 3.4 Tipografía Kinética

**OBJETIVO:**
Títulos con animación de entrada suave.

**TIPOGRAFÍA RECOMENDADA:**
```css
/* Display para títulos */
--font-display: 'Fraunces', Georgia, serif;
/* Variable font con optical sizing */

/* Sans-serif para cuerpo */
--font-sans: 'Inter', -apple-system, sans-serif;
/* Variable font weights 300-800 */
```

**ESCALA GOLDEN RATIO (1.333):**
```css
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.333rem;     /* ~21px */
--text-2xl: 1.777rem;    /* ~28px */
--text-3xl: 2.369rem;    /* ~38px */
--text-4xl: 3.157rem;    /* ~50px */
--text-5xl: 4.209rem;    /* ~67px */
```

**ANIMACIÓN DE ENTRADA:**
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero-title {
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.hero-subtitle {
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
    opacity: 0; /* Initial state */
}
```

### 3.5 Scroll-Triggered Animations

**OBJETIVO:**
Elementos se animan al entrar en viewport.

**IMPLEMENTACIÓN CON INTERSECTION OBSERVER:**
```javascript
const observerOptions = {
    threshold: 0.2,
    rootMargin: '-50px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate-in');
            }, index * 100); // Stagger delay
        }
    });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.area-card, .benefit-card, .stat-item').forEach(el => {
    observer.observe(el);
});
```

**CSS PARA ANIMACIÓN:**
```css
.area-card,
.benefit-card,
.stat-item {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.area-card.animate-in,
.benefit-card.animate-in,
.stat-item.animate-in {
    opacity: 1;
    transform: translateY(0);
}
```

---

## PARTE 4: PLAN DE CORRECCIÓN DE 30 PASOS

### FASE 1: CORRECCIONES CRÍTICAS (Prioridad Alta)

#### Paso 1-5: Hero Section Legible

1. **Aumentar opacidad del gradiente overlay**
   ```css
   .hero-bg::after {
       background: linear-gradient(
           90deg,
           rgba(12, 35, 64, 0.95) 0%,    /* De 0.90 a 0.95 */
           rgba(12, 35, 64, 0.92) 40%,   /* De 0.85 a 0.92 */
           rgba(26, 77, 122, 0.85) 70%,  /* De 0.70 a 0.85 */
           rgba(12, 35, 64, 0.75) 100%   /* De 0.40 a 0.75 */
       );
   }
   ```

2. **Añadir text-shadow al hero title**
   ```css
   .hero-title {
       text-shadow:
           0 2px 4px rgba(0, 0, 0, 0.3),
           0 4px 8px rgba(0, 0, 0, 0.2);
   }
   ```

3. **Aumentar peso de fuente**
   ```css
   .hero-title {
       font-weight: 900; /* Bold extra para contraste */
   }
   ```

4. **Asegurar color blanco explícito**
   ```css
   .hero-title-line {
       color: #FFFFFF; /* Blanco puro para máximo contraste */
   }
   ```

5. **Verificar contraste WCAG**
   - Usar herramienta: https://webaim.org/resources/contrastchecker/
   - Target: Mínimo 4.5:1 para AA, ideal 7:1 para AAA

#### Paso 6-10: Corrección de Color Oro

6. **Cambiar variable CSS**
   ```css
   :root {
       --gold-light: #C9A254; /* De #D4AF37 a champagne */
   }
   ```

7. **Actualizar hero gradient**
   ```css
   .hero-title-gradient {
       background: linear-gradient(
           135deg,
           #FFFFFF 0%,
           #C9A254 100%  /* Nuevo champagne */
       );
   }
   ```

8. **Revisar badges**
   - Buscar todos los usos de `--gold-light`
   - Verificar que se vean premium, no amarillentos

9. **Actualizar hover states**
   ```css
   .area-card:hover {
       border-color: #C9A254;
   }
   ```

10. **Verificar accesibilidad de oro**
    - Champagne sobre blanco debe tener 3:1+ contraste

#### Paso 11-15: Blanco Cálido

11. **Cambiar variable blanco**
    ```css
    :root {
        --white: #FAFAF9; /* De #FFFFFF a warm white */
    }
    ```

12. **Actualizar backgrounds**
    ```css
    body {
        background: #FAFAF9;
    }
    ```

13. **Revisar cards**
    ```css
    .area-card {
        background: #FAFAF9;
    }
    ```

14. **Verificar contraste de texto**
    - Texto gris sobre #FAFAF9 debe mantener legibilidad

15. **Añadir sutil textura (opcional)**
    ```css
    body::before {
        content: '';
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        pointer-events: none;
        z-index: -1;
    }
    ```

#### Paso 16-20: Formateo de Contenido

16. **Eliminar asteriscos del HTML**
    - Buscar: `**texto**`
    - Reemplazar con: `<strong>texto</strong>`

17. **Usar componentes Astro para énfasis**
    ```astro
    <span class="text-highlight">{texto}</span>
    ```

18. **Crear clase CSS para destacados**
    ```css
    .text-highlight {
        font-weight: 600;
        color: var(--gold-light);
    }
    ```

19. **Revisar todos los archivos .md**
    - content/areas/*.md
    - content/home.md
    - Convertir markdown a HTML limpio

20. **Validar renderizado**
    - Inspeccionar en navegador
    - Verificar que no queden asteriscos visibles

#### Paso 21-25: Menú Móvil

21. **Revisar z-index stack**
    ```css
    .fullscreen-menu {
        z-index: 10000; /* Más alto que cualquier otro */
    }
    ```

22. **Verificar body scroll lock**
    ```javascript
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active')
            ? 'hidden'
            : '';
    });
    ```

23. **Testear en móvil real**
    - iPhone Safari
    - Android Chrome
    - Verificar que el menú cubre toda la pantalla

24. **Añadir transiciones suaves**
    ```css
    .fullscreen-menu {
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    ```

25. **Verificar cierre con ESC y click fuera**
    ```javascript
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('active')) {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    ```

### FASE 2: MEJORAS DE DISEÑO (Prioridad Media)

#### Paso 26-30: Micro-interacciones y Modernización

26. **Implementar nav glassmórfico**
    - Código en sección 3.1
    - Activar con IntersectionObserver en hero

27. **Añadir sombras multicapa**
    - Código en sección 3.2
    - Aplicar a cards, CTAs, modal

28. **Crear CTA con shimmer**
    - Código en sección 3.3
    - Aplicar al botón "Agendar Consulta"

29. **Implementar scroll animations**
    - Código en sección 3.5
    - Aplicar a todas las secciones

30. **Cambiar tipografía a Fraunces + Inter**
    - Actualizar BaseLayout.astro
    - Ajustar tamaños con golden ratio
    - Implementar animaciones kinéticas

---

## PARTE 5: CHECKLIST DE VALIDACIÓN

### ✅ Accesibilidad WCAG 2.1 AA

- [ ] Contraste hero ≥ 4.5:1 (texto normal)
- [ ] Contraste hero ≥ 3:1 (texto grande >24px)
- [ ] Navegación 100% por teclado
- [ ] Focus states visibles en todos los interactivos
- [ ] Alt text en todas las imágenes
- [ ] ARIA labels en botones de iconos
- [ ] Formularios con labels asociados
- [ ] Errores de formulario comunicados por screen reader

### ✅ Performance Web Vitals

- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Imágenes en WebP con fallback
- [ ] Lazy loading en imágenes fuera de viewport
- [ ] Preconnect a Google Fonts
- [ ] CSS crítico inline (opcional)

### ✅ Responsive Design

- [ ] Menú móvil funcional en 375px (iPhone SE)
- [ ] Menú móvil funcional en 390px (iPhone 12/13/14)
- [ ] Layout tablet correcto en 768px
- [ ] Layout desktop correcto en 1024px+
- [ ] Texto legible sin zoom en móvil
- [ ] Touch targets ≥ 44x44px
- [ ] No scroll horizontal en ningún breakpoint

### ✅ Identidad Visual

- [ ] Azul institucional dominante (NO negro)
- [ ] Oro champagne (#C9A254) en lugar de mostaza
- [ ] Blanco cálido (#FAFAF9) en fondos
- [ ] Tipografía Fraunces para títulos
- [ ] Tipografía Inter para cuerpo
- [ ] Sin asteriscos visibles en contenido
- [ ] Sombras multicapa en cards
- [ ] Glassmorphism en navegación

### ✅ Interactividad

- [ ] Hover states en todos los links
- [ ] Hover states en todos los botones
- [ ] Scroll animations suaves
- [ ] CTA shimmer funcionando
- [ ] Modal se abre correctamente
- [ ] Modal se cierra con ESC
- [ ] Modal bloquea scroll del body
- [ ] Stats counter anima correctamente
- [ ] FAQ accordion funciona

---

## PARTE 6: HERRAMIENTAS DE TESTING

### Contraste de Color
- **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Colour Contrast Analyser (CCA)**: App de escritorio

### Performance
- **Lighthouse** (Chrome DevTools): Performance, Accessibility, SEO
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **WebPageTest**: https://www.webpagetest.org/

### Responsive
- **Chrome DevTools Device Mode**: Simular móviles
- **BrowserStack**: Testing en dispositivos reales
- **Responsive Design Checker**: https://responsivedesignchecker.com/

### Accesibilidad
- **axe DevTools**: Extensión Chrome/Firefox
- **WAVE**: https://wave.webaim.org/
- **Screen Reader**: NVDA (Windows), VoiceOver (Mac)

---

## PARTE 7: REFERENCIAS VISUALES

### ✅ SITIOS LEGALES CORRECTOS (Usar AZUL)

1. **Baker McKenzie** (bakermckenzie.com)
   - Azul institucional dominante
   - Blanco cálido en fondos
   - Tipografía serif premium

2. **Latham & Watkins** (lw.com)
   - Navy profundo
   - Oro elegante en acentos
   - Diseño confiable y serio

3. **Clifford Chance** (cliffordchance.com)
   - Rojo corporativo + azul
   - Sombras suaves
   - Espaciado generoso

### ❌ SITIOS TECH INCORRECTOS (NO usar como referencia)

1. **Vercel** (vercel.com)
   - Negro dominante ❌
   - Estilo minimalista tech ❌
   - No apropiado para legal ❌

2. **Linear** (linear.app)
   - Gradientes oscuros ❌
   - Animaciones agresivas ❌
   - Identidad startup ❌

3. **Stripe** (stripe.com)
   - Fondos oscuros ❌
   - Neon accents ❌
   - Muy tech-forward ❌

---

## PARTE 8: CÓDIGO DE COLORES FINAL

### Paleta Aprobada

```css
:root {
    /* === AZUL INSTITUCIONAL - IDENTIDAD LEGAL === */
    --blue-primary: #3B82F6;      /* Azul principal - CTAs, links */
    --blue-dark: #2563EB;          /* Azul hover states */
    --blue-deeper: #1E40AF;        /* Azul backgrounds oscuros */
    --blue-light: #60A5FA;         /* Azul highlights */
    --blue-50: #EFF6FF;            /* Azul backgrounds claros */

    /* === ORO CHAMPAGNE - ACENTOS PREMIUM === */
    --gold-primary: #C9A254;       /* Oro champagne - CORRECTO */
    --gold-dark: #B89350;          /* Oro hover */
    --gold-light: #D4C5A0;         /* Oro suave */

    /* === NEUTROS CÁLIDOS === */
    --white: #FAFAF9;              /* Blanco cálido - backgrounds */
    --white-pure: #FFFFFF;         /* Blanco puro - solo para texto sobre oscuro */
    --gray-50: #F9FAFB;            /* Gris ultra claro */
    --gray-100: #F3F4F6;           /* Gris muy claro */
    --gray-200: #E5E7EB;           /* Gris claro - borders */
    --gray-400: #9CA3AF;           /* Gris medio - textos secundarios */
    --gray-600: #4B5563;           /* Gris oscuro - textos */
    --gray-800: #1F2937;           /* Gris muy oscuro - headings */

    /* === SEMÁNTICOS === */
    --success: #10B981;            /* Verde éxito */
    --warning: #F59E0B;            /* Naranja advertencia */
    --error: #EF4444;              /* Rojo error */
    --info: #3B82F6;               /* Azul info (mismo que primary) */
}
```

### ❌ COLORES PROHIBIDOS

```css
/* NUNCA USAR ESTOS COLORES - Son de identidad TECH, no LEGAL */
:root {
    --slate-900: #0F172A;          /* ❌ Tech startup */
    --charcoal: #1E293B;           /* ❌ Minimalista moderno */
    --black: #000000;              /* ❌ Solo para textos pequeños */
    --gold-mustard: #D4AF37;       /* ❌ Oro sucio/mostaza */
    --white-pure-bg: #FFFFFF;      /* ❌ Blanco estéril en fondos */
}
```

---

## PARTE 9: PRIORIZACIÓN DE TAREAS

### 🔴 CRÍTICO - Implementar HOY (Afecta funcionalidad)

1. **Menú móvil roto** - 60% usuarios no pueden navegar
2. **Hero ilegible** - Mensaje principal no se lee
3. **Formateo con asteriscos** - Apariencia no profesional

**Tiempo estimado:** 2-3 horas

### 🟡 ALTA - Implementar Esta Semana (Afecta percepción)

4. **Color oro mostaza** - Cambia identidad a champagne
5. **Blanco estéril** - Cambia a blanco cálido
6. **Tipografía anticuada** - Cambiar a Fraunces + Inter

**Tiempo estimado:** 4-6 horas

### 🟢 MEDIA - Implementar Este Mes (Mejoras UX)

7. **Nav glassmórfico** - Moderniza navegación
8. **Sombras multicapa** - Añade profundidad
9. **CTA shimmer** - Mejora conversión
10. **Scroll animations** - Dinamiza experiencia

**Tiempo estimado:** 8-10 horas

---

## PARTE 10: ANTES Y DESPUÉS

### HERO SECTION

**❌ ANTES:**
```css
/* Overlay débil - texto ilegible */
.hero-bg::after {
    background: linear-gradient(90deg,
        rgba(12, 35, 64, 0.90) 0%,
        rgba(12, 35, 64, 0.40) 100%
    );
}

/* Sin color explícito */
.hero-title-line {
    display: block;
}

/* Oro mostaza */
--gold-light: #D4AF37;

/* Blanco estéril */
--white: #FFFFFF;
```

**✅ DESPUÉS:**
```css
/* Overlay fuerte - texto legible */
.hero-bg::after {
    background: linear-gradient(90deg,
        rgba(12, 35, 64, 0.95) 0%,
        rgba(12, 35, 64, 0.75) 100%
    );
}

/* Color blanco explícito */
.hero-title-line {
    display: block;
    color: #FFFFFF;
    text-shadow:
        0 2px 4px rgba(0, 0, 0, 0.3),
        0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Oro champagne */
--gold-light: #C9A254;

/* Blanco cálido */
--white: #FAFAF9;
```

### NAVEGACIÓN

**❌ ANTES:**
```css
/* Nav sólido sin efecto */
.nav-sticky {
    background: #FFFFFF;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

**✅ DESPUÉS:**
```css
/* Nav glassmórfico premium */
.nav-sticky {
    background: rgba(250, 250, 249, 0.85);
    backdrop-filter: blur(20px) saturate(180%);
    box-shadow:
        0 8px 32px 0 rgba(31, 38, 135, 0.15),
        0 1px 3px 0 rgba(0, 0, 0, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
```

### BOTONES CTA

**❌ ANTES:**
```css
/* Botón plano sin vida */
.btn-hero-primary {
    background: #3B82F6;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
```

**✅ DESPUÉS:**
```css
/* Botón con shimmer y profundidad */
.btn-hero-primary {
    position: relative;
    background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
    box-shadow:
        0 1px 2px 0 rgba(0, 0, 0, 0.05),
        0 4px 12px 0 rgba(0, 0, 0, 0.08),
        0 16px 32px 0 rgba(59, 130, 246, 0.2);
    overflow: hidden;
}

.btn-hero-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
    );
    animation: shimmer 3s infinite;
}

.btn-hero-primary:hover {
    transform: translateY(-2px);
    box-shadow:
        0 2px 4px 0 rgba(0, 0, 0, 0.05),
        0 8px 16px 0 rgba(0, 0, 0, 0.1),
        0 20px 40px 0 rgba(59, 130, 246, 0.3);
}
```

---

## CONCLUSIÓN

Este documento recopila **todas las recomendaciones formales** del diseñador UX/UI. Las correcciones están organizadas en **30 pasos específicos** divididos en dos fases:

1. **Fase 1 (Pasos 1-25)**: Correcciones críticas que afectan funcionalidad y legibilidad
2. **Fase 2 (Pasos 26-30)**: Mejoras de diseño que modernizan la experiencia

**Principios fundamentales NO NEGOCIABLES:**

✅ **USAR AZUL** institucional como color dominante (identidad legal)
❌ **NO USAR NEGRO** dominante (identidad tech)
✅ **ORO CHAMPAGNE** (#C9A254) elegante
❌ **ORO MOSTAZA** (#D4AF37) barato
✅ **BLANCO CÁLIDO** (#FAFAF9) premium
❌ **BLANCO ESTÉRIL** (#FFFFFF) hospitalario

---

**Documento generado:** 2026-01-17
**Basado en:** Auditorías UX/UI formales recibidas
**Implementación recomendada:** Fase 1 inmediata, Fase 2 progresiva
