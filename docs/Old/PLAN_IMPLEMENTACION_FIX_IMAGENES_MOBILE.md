# Plan de Implementación: Fix Imágenes Cortadas en Vista Móvil

## 🎯 Objetivo
Solucionar el corte de imágenes en la sección "Nuestro Equipo" cuando las tarjetas se amplían en vista móvil (BottomSheet).

---

## 📋 FASE 1: FIX CRÍTICO (Estimado: 1-2 horas)

### Step 1: Actualizar Schema de Content Collection

**Archivo**: `astro-site/src/content/config.ts`

**Acción**: Agregar campo `focal` al schema de `team`

**Código actual** (buscar la definición de `team`):
```typescript
const team = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    // ... otros campos
  })
});
```

**Código modificado**:
```typescript
const team = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    description: z.string(),
    shortDescription: z.string().optional(),
    image: z.string(),
    imgTx: z.number().optional(),
    imgTy: z.number().optional(),
    imgScale: z.number().optional(),
    focal: z.enum(['top', 'center', 'bottom']).optional().default('center'), // ← NUEVO
    featured: z.boolean().optional(),
    order: z.number(),
    credentials: z.array(z.string()).optional(),
    experienceNote: z.string().optional(),
    specialties: z.array(z.string()).optional(),
    social: z.object({
      linkedin: z.string().optional(),
      email: z.string().optional(),
    }).optional(),
    biography: z.object({
      formation: z.string().optional(),
      experience: z.string().optional(),
      specializations: z.string().optional(),
    }).optional(),
  })
});
```

---

### Step 2: Actualizar TypeScript Interface en BottomSheet

**Archivo**: `astro-site/src/components/about/BottomSheet.tsx`

**Líneas 5-29**: Agregar campo `focal` a la interface

**Código actual**:
```typescript
interface TeamMember {
  name: string;
  role: string;
  description: string;
  shortDescription?: string;
  image: string;
  imgTx?: number;
  imgTy?: number;
  imgScale?: number;
  // ... resto de campos
}
```

**Código modificado**:
```typescript
interface TeamMember {
  name: string;
  role: string;
  description: string;
  shortDescription?: string;
  image: string;
  imgTx?: number;
  imgTy?: number;
  imgScale?: number;
  focal?: 'top' | 'center' | 'bottom'; // ← NUEVO
  featured?: boolean;
  credentials?: string[];
  experienceNote?: string;
  specialties?: string[];
  social?: {
    linkedin?: string;
    email?: string;
  };
  biography?: Biography;
}
```

---

### Step 3: Actualizar Renderizado de Imagen en BottomSheet

**Archivo**: `astro-site/src/components/about/BottomSheet.tsx`

**Líneas 231-245**: Reemplazar contenedor de imagen

**Código ACTUAL**:
```tsx
{/* Hero Image */}
<motion.div
  layoutId={`image-container-${layoutId}`}
  className="w-full aspect-[4/3] overflow-hidden"
>
  <img
    src={member.image}
    alt={member.name}
    style={{
      transform: `translate(${member.imgTx ?? 0}px, ${member.imgTy ?? 0}px) scale(${member.imgScale ?? 1})`,
      transformOrigin: 'center top'
    }}
    className="w-full h-full object-cover"
  />
</motion.div>
```

**Código NUEVO**:
```tsx
{/* Hero Image */}
<motion.div
  layoutId={`image-container-${layoutId}`}
  className="w-full aspect-[3/4] sm:aspect-[4/3] overflow-hidden"
>
  <img
    src={member.image}
    alt={member.name}
    style={{
      objectPosition:
        member.focal === 'top' ? 'center 15%' :
        member.focal === 'bottom' ? 'center 85%' :
        'center center',
      transform: `scale(${member.imgScale ?? 1})`,
      transformOrigin: 'center center'
    }}
    className="w-full h-full object-cover"
  />
</motion.div>
```

**Cambios clave**:
1. ✅ `aspect-[3/4]` en móvil, `sm:aspect-[4/3]` en desktop (breakpoint 640px)
2. ✅ `objectPosition` dinámico basado en `focal`
3. ✅ Remover `imgTx` e `imgTy` (causaban inconsistencias)
4. ✅ `transformOrigin: 'center center'` (antes era 'center top')

---

### Step 4: Actualizar TypeScript Interface en TeamCard

**Archivo**: `astro-site/src/components/about/TeamCard.tsx`

**Líneas 11-32**: Agregar campo `focal` a la interface

**Código actual**:
```typescript
interface TeamCardProps {
  member: {
    name: string;
    role: string;
    description: string;
    shortDescription?: string;
    image: string;
    imgTx?: number;
    imgTy?: number;
    imgScale?: number;
    // ... resto
  };
  index: number;
  onClick?: () => void;
  isSelected?: boolean;
}
```

**Código modificado**:
```typescript
interface TeamCardProps {
  member: {
    name: string;
    role: string;
    description: string;
    shortDescription?: string;
    image: string;
    imgTx?: number;
    imgTy?: number;
    imgScale?: number;
    focal?: 'top' | 'center' | 'bottom'; // ← NUEVO
    featured?: boolean;
    credentials?: string[];
    social?: {
      linkedin?: string;
      email?: string;
    };
    biography?: Biography;
  };
  index: number;
  onClick?: () => void;
  isSelected?: boolean;
}
```

---

### Step 5: Actualizar Contenido de Team Members

**Archivos afectados**:
- `astro-site/src/content/team/jacqueline-del-valle.md`
- `astro-site/src/content/team/antonio-gonzalez.md`
- `astro-site/src/content/team/marcelo-inostroza.md`
- `astro-site/src/content/team/claudia-campos.md`

**Acción**: Agregar campo `focal` según composición de cada imagen

**Plantilla**:
```markdown
---
name: "Nombre Completo"
role: "Cargo"
description: "..."
image: "/team/nombre.jpg"
imgTx: 0
imgTy: 0
imgScale: 1
focal: "top"  # ← NUEVO: 'top' | 'center' | 'bottom'
order: 1
# ... resto de campos
---
```

**Guía para elegir valor**:

| Tipo de Imagen | Focal Point | Razón |
|----------------|-------------|-------|
| Retrato cabeza/hombros | `top` | Cara en 1/3 superior |
| Full body centrado | `center` | Persona completa visible |
| Composición creativa (raro) | `bottom` | Énfasis en parte inferior |

**Ejemplo práctico**:

```markdown
---
name: "Jacqueline del Valle Inostroza"
role: "Fundadora y Socia Principal"
image: "/team/jacqueline.jpg"
imgScale: 1.1
focal: "top"  # Retrato con cara en parte superior
featured: true
order: 0
---
```

---

## 📋 FASE 2: MEJORAS UX (Estimado: 1-2 horas)

### Step 6: Scaling Responsivo

**Archivo**: `astro-site/src/components/about/BottomSheet.tsx`

**Líneas 230-246**: Ajustar escala para móvil

**Código NUEVO** (agregar antes del return):
```tsx
export const BottomSheet = ({ member, isOpen, onClose }: Props) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  const y = useMotionValue(0);
  const [openSection, setOpenSection] = useState<string | null>('formation');

  // ← AGREGAR ESTO
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const mobileScaleFactor = 0.85;
  const responsiveScale = (member?.imgScale ?? 1) * (isMobile ? mobileScaleFactor : 1);

  // ... resto del código
```

**Luego actualizar el `<img>`**:
```tsx
<img
  src={member.image}
  alt={member.name}
  style={{
    objectPosition:
      member.focal === 'top' ? 'center 15%' :
      member.focal === 'bottom' ? 'center 85%' :
      'center center',
    transform: `scale(${responsiveScale})`, // ← Usar responsiveScale
    transformOrigin: 'center center'
  }}
  className="w-full h-full object-cover"
/>
```

---

### Step 7: Blur Placeholder Durante Carga

**Archivo**: `astro-site/src/components/about/BottomSheet.tsx`

**Líneas 105-110**: Agregar estado de carga

**Código**:
```tsx
export const BottomSheet = ({ member, isOpen, onClose }: Props) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  const y = useMotionValue(0);
  const [openSection, setOpenSection] = useState<string | null>('formation');
  const [imageLoaded, setImageLoaded] = useState(false); // ← NUEVO

  // ... resto
```

**Líneas 230-246**: Actualizar contenedor de imagen

**Código**:
```tsx
<motion.div
  layoutId={`image-container-${layoutId}`}
  className="w-full aspect-[3/4] sm:aspect-[4/3] overflow-hidden relative"
>
  {/* Placeholder blur */}
  {!imageLoaded && (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
  )}

  <img
    src={member.image}
    alt={member.name}
    onLoad={() => setImageLoaded(true)} // ← NUEVO
    style={{
      objectPosition:
        member.focal === 'top' ? 'center 15%' :
        member.focal === 'bottom' ? 'center 85%' :
        'center center',
      transform: `scale(${responsiveScale})`,
      transformOrigin: 'center center'
    }}
    className={`w-full h-full object-cover transition-opacity duration-300 ${
      imageLoaded ? 'opacity-100' : 'opacity-0'
    }`} // ← Transición suave
  />
</motion.div>
```

**Reset estado al cambiar miembro** (líneas 130-136):
```tsx
useEffect(() => {
  if (isOpen && member) {
    setOpenSection('formation');
    setImageLoaded(false); // ← AGREGAR: reset carga de imagen
    y.set(0);
  }
}, [isOpen, member, y]);
```

---

### Step 8: Indicador de Vista Ajustada

**Archivo**: `astro-site/src/components/about/BottomSheet.tsx`

**Líneas 230-260**: Agregar badge condicional

**Código** (después del `<img>`):
```tsx
<motion.div
  layoutId={`image-container-${layoutId}`}
  className="w-full aspect-[3/4] sm:aspect-[4/3] overflow-hidden relative"
>
  {/* Placeholder... */}
  {!imageLoaded && (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
  )}

  {/* Imagen... */}
  <img
    src={member.image}
    alt={member.name}
    // ... props
  />

  {/* ← AGREGAR: Badge de vista ajustada */}
  {member.imgScale && member.imgScale < 0.95 && (
    <div className="absolute top-3 right-3 px-2.5 py-1.5
                    bg-black/60 backdrop-blur-sm rounded-lg
                    text-xs text-white/90 font-medium
                    border border-white/10">
      Vista ajustada
    </div>
  )}
</motion.div>
```

---

## 📋 FASE 3: DOCUMENTACIÓN (Estimado: 30 min)

### Step 9: Guía de Imágenes para Equipo

**Archivo**: `docs/GUIA_IMAGENES_EQUIPO.md` (nuevo)

```markdown
# Guía de Imágenes para Sección "Nuestro Equipo"

## Especificaciones Técnicas

### Dimensiones
- **Aspect ratio**: 3:4 (vertical/retrato)
- **Resolución recomendada**: 1200x1600px
- **Resolución mínima**: 900x1200px
- **Peso máximo**: 500KB por imagen

### Formato
- **Preferido**: WebP (mejor compresión)
- **Alternativo**: JPG (calidad 85%)
- **Evitar**: PNG (muy pesado para fotos)

### Composición
1. **Retrato cabeza/hombros** → usar `focal: "top"`
   - Cara en 1/3 superior de imagen
   - Espacio sobre cabeza: mínimo 10%

2. **Full body centrado** → usar `focal: "center"`
   - Persona completa visible
   - Centrado vertical

3. **Composición creativa** → usar `focal: "bottom"`
   - Énfasis en parte inferior (raro)

### Iluminación
- Luz frontal o lateral suave
- Evitar sombras duras en rostro
- Background neutro o profesional

### Encoding
- Color space: sRGB
- DPI: 72 (web)
- Metadata: remover EXIF (privacidad)

## Ejemplo de Configuración

```markdown
---
name: "María González"
image: "/team/maria-gonzalez.webp"
imgScale: 1.0
focal: "top"  # Retrato con cara arriba
---
```

## Herramientas Recomendadas

- **Compresión**: [Squoosh.app](https://squoosh.app)
- **Conversión WebP**: [CloudConvert](https://cloudconvert.com)
- **Edición**: Photoshop, GIMP, Figma
```

---

### Step 10: Actualizar CLAUDE.md

**Archivo**: `CLAUDE.md`

**Sección**: "AreasGrid Component Features" → agregar subsección

**Código**:
```markdown
### Image Focal Point System

**Configurable via `focal` property in content collections:**
- Options: `top` (15%), `center`, `bottom` (85%)
- Prevents face cropping in images with people
- Applied to:
  - `areas/home.md` (Practice Areas Grid)
  - `team/*.md` (Team Member Cards) ← NUEVO

**Schema (`config.ts`):**
```typescript
focal: z.enum(['top', 'center', 'bottom']).optional().default('center')
```

**CSS Implementation:**
- AreasGrid: CSS classes `.focal-top`, `.focal-center`, `.focal-bottom`
- TeamCard/BottomSheet: Inline `object-position` CSS property
```

---

## 🧪 TESTING CHECKLIST

### Dispositivos a Probar

- [ ] **iPhone SE** (375x667) - viewport más estrecho
- [ ] **iPhone 14 Pro** (428x926) - notch + viewport alto
- [ ] **iPad Mini** (768x1024) - tablet portrait
- [ ] **iPad Pro** (1024x1366) - tablet landscape
- [ ] **Android Fold** (344px) - viewport extremo

### Escenarios de Prueba

#### Test 1: Apertura de BottomSheet
1. Tap en tarjeta de team member
2. ✅ BottomSheet se desliza desde abajo
3. ✅ Imagen NO está cortada
4. ✅ Cara visible completa (si `focal: "top"`)
5. ✅ Animación fluida sin jank

#### Test 2: Drag to Dismiss
1. Arrastrar handle hacia abajo
2. ✅ Sheet sigue dedo sin resistencia
3. ✅ Backdrop se opaca proporcionalmente
4. ✅ Al soltar (>200px), se cierra
5. ✅ Al soltar (<200px), vuelve a posición

#### Test 3: Responsive Breakpoints
1. Resize viewport de 375px → 1024px
2. ✅ Aspect ratio cambia de 3:4 → 4:3 en `sm:` (640px)
3. ✅ No hay layout shift brusco
4. ✅ Imagen sigue centrada según focal point

#### Test 4: Performance
1. Abrir DevTools > Performance
2. Grabar apertura de BottomSheet
3. ✅ FPS estable en 60fps
4. ✅ No hay forced reflows
5. ✅ LCP < 2.5s

#### Test 5: Accessibility
1. Navegar con teclado (Tab)
2. ✅ Focus visible en botón cerrar
3. ✅ ESC cierra modal
4. ✅ Screen reader lee alt text de imagen

---

## 🚀 DEPLOYMENT

### Pre-Deploy
```bash
cd astro-site
npm run build
```

**Verificar**:
- ✅ No hay errores de TypeScript
- ✅ No hay errores de Zod schema validation
- ✅ Build completa sin warnings

### Deploy
```bash
npm run preview  # Test local del build
# Si todo OK, deploy a producción
```

---

## 📊 MÉTRICAS DE ÉXITO

### Antes
- 🔴 **Imágenes cortadas**: 100% (reportado por usuario)
- 🔴 **Aspect ratio**: Inconsistente (3:4 → 4:3)
- 🔴 **Focal point**: Sin control (CSS auto)

### Después (Esperado)
- ✅ **Imágenes cortadas**: 0% (con focal points correctos)
- ✅ **Aspect ratio**: Consistente responsive
- ✅ **Focal point**: Controlado por contenido
- ✅ **User complaints**: 0

---

## 🔄 ROLLBACK PLAN

Si algo sale mal:

1. **Git reset** a commit anterior:
   ```bash
   git log --oneline  # Ver commits
   git reset --hard <commit-hash>
   ```

2. **Rebuild**:
   ```bash
   npm run build
   ```

3. **Reportar issue** con:
   - Dispositivo afectado
   - Screenshot del problema
   - Console errors (si aplica)

---

## 📚 RECURSOS

- **Código original**: [BottomSheet.tsx](../astro-site/src/components/about/BottomSheet.tsx)
- **Análisis FODA**: [ANALISIS_FODA_TARJETAS_EQUIPO_MOBILE.md](./ANALISIS_FODA_TARJETAS_EQUIPO_MOBILE.md)
- **Framer Motion Docs**: https://www.framer.com/motion/
- **Tailwind Aspect Ratio**: https://tailwindcss.com/docs/aspect-ratio
- **CSS Object Position**: https://developer.mozilla.org/en-US/docs/Web/CSS/object-position
