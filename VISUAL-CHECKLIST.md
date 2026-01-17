# ✅ CHECKLIST VISUAL - Premium 2026

**Testing rápido:** 5 minutos para verificar que todo funciona correctamente.

---

## 🎨 1. NAVIGATION (Glassmorphic)

### Desktop

- [ ] **Nav tiene blur visible** (fondo semi-transparente)
- [ ] **Scroll down** → Nav aumenta blur + sombra aparece
- [ ] **Borde inferior sutil** (1px rgba gris)
- [ ] **Logo + links visibles** con buen contraste

### Mobile

- [ ] **Glassmorphism funciona** (especialmente Safari iOS)
- [ ] **Hamburger menu** responde correctamente
- [ ] **Touch targets** mínimo 44x44px

**Cómo verificar:**
```
1. Scroll página arriba/abajo
2. Observar cambio de opacidad/blur en nav
3. Debe sentirse "premium" como Apple.com
```

---

## 🔥 2. CTAs (Shimmer Effect)

### Botones afectados:
- "Consulta Gratuita" (nav + hero)
- "Agendar Consulta" (CTA section)
- Todos los `.btn-cta-primary`

### Qué verificar:

- [ ] **Gradiente índigo visible** (no color plano)
- [ ] **Hover** → Shimmer cruza botón izq→derecha
- [ ] **Hover** → Botón sube 2px (translateY)
- [ ] **Hover** → Flecha se mueve 4px derecha
- [ ] **Sombra aumenta** en hover

**Cómo verificar:**
```
1. Pasa mouse LENTAMENTE sobre CTA
2. Debe ver "destello" blanco cruzar botón
3. Efecto dura ~0.6s
4. Flecha (→) se mueve hacia derecha
```

---

## 💎 3. CARDS (Hover Depth)

### Cards afectadas:
- Practice Area Cards (8 áreas)
- Benefit Cards (4 beneficios)
- Pro Bono Cards
- FAQ Items

### Qué verificar:

- [ ] **Sombra base visible** (sutil, multicapa)
- [ ] **Hover** → Card sube 4px
- [ ] **Hover** → Sombra cambia a índigo/gold
- [ ] **Hover** → Borde cambia color
- [ ] **Transición suave** 0.4s

**Cómo verificar:**
```
1. Hover sobre card "Defensa Estatutaria"
2. Debe "flotar" hacia arriba
3. Sombra azul-índigo aparece
4. Borde se ilumina sutilmente
```

**Pro Bono Cards (especial):**
- [ ] Hover → Sombra **dorada** (no índigo)

---

## ✍️ 4. TIPOGRAFÍA (Fraunces + Gradiente)

### Hero Section H1

- [ ] **Font es Fraunces** (no Playfair Display)
- [ ] **Gradiente negro→índigo** visible
- [ ] **Letter-spacing negativo** (texto apretado)
- [ ] **Responsive** (tamaño fluido en móvil)

### Resto de headings

- [ ] **H2/H3 usan Fraunces** (display font)
- [ ] **Body text usa Inter** (sans-serif)
- [ ] **Line-height optimizado** (1.1 en H1, 1.7 en body)

**Cómo verificar:**
```
1. Inspeccionar H1 Hero en DevTools
2. Computed → font-family debe ser "Fraunces"
3. El texto debe tener gradiente sutil visible
```

---

## 📜 5. SCROLL ANIMATIONS

### Elementos animados:
- Practice Area Cards
- Benefit Cards
- Pro Bono Cards
- FAQ Items
- Stats Items

### Qué verificar:

- [ ] **Initial state:** opacity 0, translateY(30px)
- [ ] **Scroll down** → elementos fade-in cuando entran
- [ ] **Stagger delay** (100ms entre cada elemento)
- [ ] **Easing suave** (expo out curve)

**Cómo verificar:**
```
1. Reload página (Cmd+R)
2. Scroll down lentamente
3. Cards deben "aparecer" desde abajo
4. Efecto debe ser sutil, no exagerado
```

**Accesibilidad:**
- [ ] Si tienes `prefers-reduced-motion`, animaciones se omiten

---

## 🎨 6. SISTEMA DE COLORES

### Primary Indigo

- [ ] **CTAs usan índigo** (#4f46e5, #3730a3)
- [ ] **Hover states índigo** en cards
- [ ] **Focus outline índigo** (Tab navigation)

### Gold Accent

- [ ] **Pro Bono cards** hover dorado
- [ ] **Badges premium** (si aplica)

### Neutrales

- [ ] **Backgrounds** sutiles (#fcfcfd, #fafafa)
- [ ] **Textos oscuros** (#0a0a0b, #18181b)

---

## ♿ 7. ACCESIBILIDAD

### Keyboard Navigation

- [ ] **Tab** navega todos los elementos
- [ ] **Focus visible** (outline 2px índigo)
- [ ] **Offset 4px** (outline no pegado al elemento)
- [ ] **Enter** activa botones/links

### Reduced Motion

```javascript
// En consola:
matchMedia('(prefers-reduced-motion: reduce)').matches
// Si true, animaciones deben omitirse
```

- [ ] Con `prefers-reduced-motion`, scroll animations OFF

### Contrast

- [ ] **Texto normal:** ratio 7:1 (AAA)
- [ ] **Texto grande:** ratio 4.5:1 (AA)
- [ ] **Focus outline:** ratio 3:1 mínimo

---

## 📱 8. RESPONSIVE

### Mobile (< 768px)

- [ ] **Nav glassmorphic funciona**
- [ ] **Touch targets 44x44px**
- [ ] **Tipografía escala correctamente**
- [ ] **Cards en columna única**
- [ ] **Scroll animations opcionales** (performance)

### Tablet (768-1023px)

- [ ] **Layout intermedio** (2 columnas)
- [ ] **Hover states funcionan** (si trackpad)

### Desktop (1024px+)

- [ ] **Glassmorphism completo**
- [ ] **Shimmer effects visibles**
- [ ] **Hover depth en todas las cards**
- [ ] **Grid multi-columna**

---

## 🚀 9. PERFORMANCE

### Lighthouse Audit

```bash
npx lighthouse http://localhost:4321 --view
```

**Scores esperados:**
- [ ] **Performance:** 95+
- [ ] **Accessibility:** 98+
- [ ] **Best Practices:** 95+
- [ ] **SEO:** 100

### Network Tab

- [ ] **style-premium-2026.css** carga (~15 KB)
- [ ] **Fonts Fraunces + Inter** carga (~40 KB)
- [ ] **scrollAnimations-premium.js** carga (~2 KB)

**Total overhead:** ~57 KB (aceptable)

### Core Web Vitals

- [ ] **LCP** (Largest Contentful Paint): < 2.5s
- [ ] **FID** (First Input Delay): < 100ms
- [ ] **CLS** (Cumulative Layout Shift): < 0.1

---

## 🔍 10. CROSS-BROWSER

### Safari (macOS/iOS) - CRÍTICO

- [ ] **Glassmorphic nav funciona**
- [ ] `-webkit-backdrop-filter` aplicado
- [ ] **Shimmer effects visibles**
- [ ] **Scroll animations trigger**

### Chrome/Edge

- [ ] **Soporte completo** garantizado
- [ ] **DevTools sin errores** en consola

### Firefox

- [ ] **Backdrop-filter nativo** (v103+)
- [ ] **Sombras multicapa renderizan**
- [ ] **Animations smooth**

---

## ✅ CHECKLIST RÁPIDO (2 MINUTOS)

```
1. [ ] Abrir http://localhost:4321
2. [ ] Nav tiene blur glassmorphic ✅
3. [ ] Scroll → Nav blur aumenta ✅
4. [ ] Hover CTA → Shimmer cruza ✅
5. [ ] Hover card → Levanta + sombra índigo ✅
6. [ ] Hero H1 tiene gradiente ✅
7. [ ] Scroll → Cards fade-in desde abajo ✅
8. [ ] Tab → Focus outline visible ✅
9. [ ] Mobile → Todo responsive ✅
10. [ ] Safari iOS → Glassmorphism funciona ✅
```

---

## 🐛 TROUBLESHOOTING VISUAL

### ❌ "Nav no tiene blur"

**Verificar:**
1. Navegador soporta `backdrop-filter`
2. Safari → verificar `-webkit-` prefix
3. Consola sin errores CSS

**Fix rápido:**
```css
@supports (backdrop-filter: blur(12px)) {
  /* Glassmorphism aquí */
}
```

### ❌ "Shimmer no visible"

**Verificar:**
1. Hover está activo (no touch)
2. Transición dura 0.6s (hover lento)
3. `overflow: hidden` en botón

**Fix rápido:**
```css
.btn-cta-primary {
  position: relative;
  overflow: hidden; /* ← Crítico */
}
```

### ❌ "Cards no levantan en hover"

**Verificar:**
1. CSS premium cargó correctamente
2. Selector `.area-card` existe
3. Transition no deshabilitada

**Fix rápido:**
```css
.area-card {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
```

### ❌ "Scroll animations no triggering"

**Verificar:**
1. Console muestra "✨ Scroll animations initialized"
2. IntersectionObserver soportado
3. Clase `.fade-in-up` presente

**Fix rápido:**
```javascript
// En consola:
document.querySelectorAll('.fade-in-up').length
// Debe ser > 0
```

---

## 📸 SCREENSHOTS DE REFERENCIA

### Navigation (Desktop)

```
ANTES:
┌────────────────────────────────────┐
│ JDV & Abogados  [Nav Links] [CTA] │ ← Opaco, sombra plana
└────────────────────────────────────┘

DESPUÉS:
┌────────────────────────────────────┐
│ 🌫️ JDV & Abogados [Links] [CTA] 🌫️│ ← Blur visible, elegante
└────────────────────────────────────┘
```

### CTA Button (Hover)

```
ANTES:
┌─────────────────────┐
│ Consulta Gratuita → │ ← Color plano
└─────────────────────┘

DESPUÉS:
┌─────────────────────┐
│ ✨ Consulta → →     │ ← Shimmer + arrow moves
└─────────────────────┘
```

### Cards (Hover)

```
ANTES:
┌──────────────┐
│ Defensa      │ ← Plana, sombra simple
│ Estatutaria  │
└──────────────┘

DESPUÉS:
┌──────────────┐
│ Defensa      │ ↑ 4px
│ Estatutaria  │   Sombra índigo multicapa
└──────────────┘   ← Flotando
```

---

## ✅ CONCLUSIÓN

Si todos los checkboxes están ✅, la implementación está **perfecta**.

Si alguno falla, revisar:
1. [IMPLEMENTATION-GUIDE-PREMIUM-2026.md](IMPLEMENTATION-GUIDE-PREMIUM-2026.md) (troubleshooting)
2. Consola del navegador (errores)
3. Network tab (archivos cargando)

**Tiempo total de testing:** 5-10 minutos
**Resultado esperado:** Sitio se siente **premium 2026** vs. **template 2020**

---

**¿Todo funciona?** 🎉
→ Próximo paso: Deploy a staging + User testing

**¿Algo falla?** 🐛
→ Abrir issue con screenshot + consola errors
