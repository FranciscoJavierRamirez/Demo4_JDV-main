# Análisis FODA: Tarjetas de Equipo en Vista Móvil (BottomSheet)

## Problema Identificado
Las imágenes de los miembros del equipo se **cortan** cuando las tarjetas se amplían en vista móvil (componente `BottomSheet.tsx`).

---

## ANÁLISIS FODA

### 🟢 FORTALEZAS (Strengths)

1. **Animación Fluida (Framer Motion)**
   - Transiciones suaves con `layoutId` para shared element transitions
   - Experiencia premium con `spring` physics (damping: 30, stiffness: 300)

2. **UX Premium con Gestos Nativos**
   - Drag-to-dismiss funcional con umbral de velocidad (500px/s)
   - Handle visual para indicar interactividad

3. **Accesibilidad Robusta**
   - Bloqueo de scroll del body cuando modal abierto
   - Cierre con tecla `Escape`
   - Backdrop opaco con blur

4. **Performance**
   - Lazy loading de componente (`client:visible`)
   - SSR-safe con hook `useMediaQuery`

### 🔴 DEBILIDADES (Weaknesses)

**CRÍTICAS (causan el problema):**

1. **Aspect Ratio Rígido (4:3)**
   ```tsx
   className="w-full aspect-[4/3] overflow-hidden"
   ```
   - **Impacto**: Imágenes verticales (3:4 en TeamCard) se fuerzan a formato horizontal
   - **Resultado**: Cortes en cabeza/pies de personas en retratos verticales

2. **Transform Origin Inadecuado**
   ```tsx
   transformOrigin: 'center top'
   ```
   - **Impacto**: Al escalar con `imgScale`, la imagen crece desde arriba
   - **Resultado**: Caras en centro de imagen pueden desplazarse fuera del viewport

3. **Object-cover Sin Control de Focal Point**
   ```tsx
   className="w-full h-full object-cover"
   ```
   - **Impacto**: CSS decide automáticamente qué recortar (centrado genérico)
   - **Resultado**: Sin control sobre qué parte de la imagen preservar (ej: cara vs pies)

4. **Transforms Manuales No Responsivos**
   ```tsx
   transform: `translate(${imgTx}px, ${imgTy}px) scale(${imgScale})`
   ```
   - **Impacto**: Valores absolutos en px no se ajustan a diferentes viewports
   - **Resultado**: Posicionamiento impredecible en pantallas pequeñas vs grandes

5. **Overflow Hidden Sin Escape**
   ```tsx
   overflow-hidden
   ```
   - **Impacto**: Cualquier contenido fuera del contenedor se oculta sin excepción
   - **Resultado**: Imposible ver imagen completa aunque haya espacio

**MENORES (degradan experiencia):**

6. **Sin Fallback Visual**
   - No hay placeholder durante carga de imagen
   - Flash de contenido si imagen tarda en cargar

7. **Sin Indicador de Recorte**
   - Usuario no sabe que la imagen está cortada
   - No hay control de zoom/pan para explorar imagen completa

### 🟡 OPORTUNIDADES (Opportunities)

1. **Sistema de Focal Points (AreasGrid Pattern)**
   - Ya implementado en `AreasGrid.astro` con `.focal-top`, `.focal-center`, `.focal-bottom`
   - Reusar en esquema de `team` collection:
     ```typescript
     focal: z.enum(['top', 'center', 'bottom']).optional().default('center')
     ```

2. **Object-position Dinámico**
   - Aplicar `object-position: top/center/bottom` según focal point
   - Preservar caras en retratos verticales

3. **Aspect Ratio Adaptativo**
   - Usar `aspect-[3/4]` en móvil (matching TeamCard)
   - Transición suave de 3:4 → 4:3 en landscape/tablet

4. **Viewport-Relative Transforms**
   - Convertir `imgTx/imgTy` a porcentajes o vh/vw
   - Escala responsiva: `imgScale * 0.8` en móvil

5. **Pinch-to-Zoom Gesture**
   - Permitir zoom con dos dedos sobre imagen
   - Explorar imagen completa sin romper UX

6. **Image Optimization**
   - Servir WebP/AVIF con fallback
   - Lazy load con blur placeholder

7. **A11y Mejorado**
   - Alt text descriptivo por miembro
   - ARIA labels para controles de zoom

### 🟠 AMENAZAS (Threats)

1. **Hydration Mismatch**
   - Si se cambia aspect ratio dinámicamente, puede haber mismatch SSR/CSR
   - **Mitigación**: Usar `isClient` guard ya existente

2. **Performance en Dispositivos Low-End**
   - Transforms complejos + blur + animaciones pueden causar jank
   - **Mitigación**: `will-change: transform` + GPU acceleration

3. **Fragmentación de Viewports**
   - iPhones (428px), Android fold (344px), tablets (768px)
   - **Mitigación**: Breakpoints específicos con `useMediaQuery`

4. **Gestos Conflictivos**
   - Drag-to-dismiss puede interferir con pinch-to-zoom
   - **Mitigación**: Deshabilitar drag cuando zoom activo

5. **Contenido Editorial Inconsistente**
   - Si no hay guía para fotógrafos/editores, seguirán subiendo imágenes mal encuadradas
   - **Mitigación**: Documentar specs técnicas (aspect, focal points, resolution)

---

## 🎯 PLAN DE MEJORA PRIORIZADO

### 🔥 **PRIORIDAD ALTA** (Fix inmediato del problema)

#### 1. Implementar Sistema de Focal Points
**Archivo**: `astro-site/src/content/config.ts`
```typescript
// Agregar a schema de 'team'
focal: z.enum(['top', 'center', 'bottom']).optional().default('center')
```

**Archivo**: `astro-site/src/components/about/BottomSheet.tsx` (línea 234-245)
```tsx
<motion.div
  layoutId={`image-container-${layoutId}`}
  className="w-full aspect-[3/4] sm:aspect-[4/3] overflow-hidden" // Responsive aspect
>
  <img
    src={member.image}
    alt={member.name}
    style={{
      objectPosition: member.focal === 'top' ? 'center 15%' :
                      member.focal === 'bottom' ? 'center 85%' :
                      'center center',
      transform: `scale(${member.imgScale ?? 1})`,
      transformOrigin: 'center center' // Cambiar de 'center top'
    }}
    className="w-full h-full object-cover"
  />
</motion.div>
```

**Impacto**:
- ✅ Elimina cortes en caras (focal: 'top' para retratos)
- ✅ Aspect ratio 3:4 en móvil mantiene coherencia con TeamCard
- ✅ Remove transforms manuales (imgTx/imgTy) que causan inconsistencias

#### 2. Agregar Focal Points a Contenido
**Archivos**: `astro-site/src/content/team/*.md`
```markdown
focal: top  # Para retratos con cara en parte superior
```

**Criterio**:
- `top`: Retratos con cara en 1/3 superior
- `center`: Fotos body completo centradas
- `bottom`: Composiciones con énfasis en parte inferior (rare)

### ⚡ **PRIORIDAD MEDIA** (Mejoras UX)

#### 3. Viewport-Responsive Scaling
**Archivo**: `BottomSheet.tsx`
```tsx
const mobileScaleFactor = 0.85; // Reducir escala en móvil
const scaledTransform = (member.imgScale ?? 1) * (isMobile ? mobileScaleFactor : 1);

style={{
  transform: `scale(${scaledTransform})`,
  // ...
}}
```

#### 4. Indicador Visual de Imagen Completa
Agregar badge si imagen está a escala < 1 (indicando zoom out):
```tsx
{member.imgScale && member.imgScale < 0.95 && (
  <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 rounded text-xs">
    Vista ajustada
  </div>
)}
```

#### 5. Lazy Load con Blur Placeholder
```tsx
import { useState } from 'react';

const [imageLoaded, setImageLoaded] = useState(false);

<div className="relative">
  {!imageLoaded && (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 animate-pulse" />
  )}
  <img
    src={member.image}
    onLoad={() => setImageLoaded(true)}
    className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
  />
</div>
```

### 🌟 **PRIORIDAD BAJA** (Optimizaciones futuras)

#### 6. Pinch-to-Zoom (Fase 2)
Implementar con biblioteca como `react-pinch-zoom-pan` o custom hook con `PointerEvent`.

**Complejidad**: Alta
**Beneficio**: Permite explorar imagen completa sin romper layout

#### 7. Image Optimization Pipeline
- Convertir imágenes a WebP/AVIF
- Generar múltiples resoluciones (srcset)
- CDN para carga más rápida

---

## 📋 CHECKLIST DE IMPLEMENTACIÓN

### Fase 1: Fix Crítico (1-2 horas)
- [ ] Actualizar `config.ts` con campo `focal`
- [ ] Modificar `BottomSheet.tsx` con aspect ratio responsivo
- [ ] Implementar `object-position` dinámico
- [ ] Cambiar `transformOrigin` a `center center`
- [ ] Remover `imgTx`, `imgTy` (usar solo `imgScale`)
- [ ] Agregar `focal` a todos los archivos `.md` en `/content/team/`
- [ ] Probar en iPhone SE, iPhone 14 Pro, iPad, Android

### Fase 2: UX Mejorado (2-3 horas)
- [ ] Implementar scaling responsivo con `mobileScaleFactor`
- [ ] Agregar blur placeholder durante carga
- [ ] Badge de "Vista ajustada" condicional
- [ ] Testing en dispositivos reales (no solo DevTools)

### Fase 3: Documentación (30 min)
- [ ] Crear guía de imagen para equipo:
  - Aspect ratio recomendado: 3:4 (ej: 1200x1600px)
  - Focal point: cara en 1/3 superior
  - Formato: JPG/WebP
  - Peso máximo: 500KB
- [ ] Actualizar `CLAUDE.md` con patrón de focal points

---

## 🔬 VALIDACIÓN POST-IMPLEMENTACIÓN

### Test Críticos (Must Pass)
1. **iPhone SE (375px)**: Cara visible completa en retratos verticales
2. **iPhone 14 Pro (428px)**: Sin distorsión en landscape
3. **iPad Mini (768px)**: Transición suave de aspect ratio
4. **Android Fold (344px)**: No hay overflow horizontal

### Test UX
1. Drag-to-dismiss sigue funcionando
2. Animación de apertura sin jank (60fps)
3. Imagen carga antes que contenido texto (LCP < 2.5s)
4. No hay layout shift durante carga de imagen

### Test A11y
1. Alt text presente y descriptivo
2. Contraste texto sobre imagen > 4.5:1
3. Navegación con teclado funciona (Tab, Escape)

---

## 📊 MÉTRICAS DE ÉXITO

**Antes**:
- 🔴 Imágenes cortadas: 100% casos reportados
- 🔴 User satisfaction: Baja (reportes de usuarios)

**Después (esperado)**:
- ✅ Imágenes cortadas: 0% (con focal points correctos)
- ✅ Tiempo de ajuste editorial: <2min por foto
- ✅ User satisfaction: Alta (no más reportes)
- ✅ Consistencia visual TeamCard ↔ BottomSheet: 100%

---

## 🎓 LECCIONES APRENDIDAS

1. **Aspect ratios deben ser consistentes** entre vista previa y vista expandida
2. **Object-cover requiere focal points** para contenido editorial
3. **Transforms absolutos (px) no escalan** en responsive design
4. **Testing en dispositivos reales** catch problemas que DevTools no muestra
5. **Documentar specs técnicas** previene problemas de contenido

---

## 📚 REFERENCIAS

- **AreasGrid focal points**: `astro-site/src/components/home/AreasGrid.astro` (líneas 156-186)
- **CSS object-position**: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
- **Framer Motion layoutId**: [Docs](https://www.framer.com/motion/layout-animations/)
- **Mobile viewport units**: [CSS-Tricks](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/)
