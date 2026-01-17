# 💻 Código Exacto de Cambios - Hero Section

## 📄 index.html

### Cambio 1: Background Hero (Línea 224)

**ANTES:**
```html
<img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop&q=80" alt="Oficina Legal Profesional" class="hero-bg">
```

**DESPUÉS:**
```html
<img src="fondo_hero.png" alt="Oficina jurídica moderna JDVI" class="hero-bg">
```

---

### Cambio 2: Imagen de Jacqueline (Línea 294)

**ANTES:**
```html
<img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=800&fit=crop&q=80" 
     alt="Jacqueline - Abogada Principal JDVI" 
     class="hero-image">
```

**DESPUÉS:**
```html
<img src="persona_hero.png" 
     alt="Jacqueline – Abogada Fundadora JDVI & Abogados" 
     class="hero-image">
```

---

### Cambio 3: KPI 1 - Personas Asesoradas (Línea 268)

**ANTES:**
```html
<span>Clientes Satisfechos</span>
```

**DESPUÉS:**
```html
<span>Personas Asesoradas</span>
```

---

### Cambio 4: KPI 2 - Opinión de Clientes (Línea 277)

**ANTES:**
```html
<span>Calificación</span>
```

**DESPUÉS:**
```html
<span>Opinión de Clientes</span>
```

---

### Cambio 5: KPI 3 - Casos Favorables (Línea 286)

**ANTES:**
```html
<span>Tasa de Éxito</span>
```

**DESPUÉS:**
```html
<span>Casos Favorables</span>
```

---

## 🎨 style.css

### Cambio 6: Blur y Profundidad en Background (Líneas 325-336)

**ANTES:**
```css
.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
}
```

**DESPUÉS:**
```css
.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    /* Profundidad y blur para background */
    filter: blur(2px) brightness(0.9) saturate(0.95);
    transform: scale(1.05);
}
```

---

### Cambio 7: Degradé Sofisticado (Líneas 338-350)

**ANTES:**
```css
.hero-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, 
        rgba(0, 119, 200, 0.92) 0%,
        rgba(26, 77, 122, 0.88) 50%,
        rgba(12, 35, 64, 0.90) 100%
    );
    z-index: 2;
}
```

**DESPUÉS:**
```css
.hero-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    /* Degradé sofisticado con toque dorado */
    background: linear-gradient(
        120deg,
        rgba(12, 35, 64, 0.75) 0%,
        rgba(26, 77, 122, 0.65) 40%,
        rgba(201, 169, 97, 0.15) 100%
    );
    z-index: 2;
}
```

**Análisis del cambio:**
- Ángulo: 135deg → 120deg (más dinámico)
- Color 1: rgba(0,119,200,0.92) → rgba(12,35,64,0.75) (azul oscuro, menos opaco)
- Color 2: rgba(26,77,122,0.88) → rgba(26,77,122,0.65) (azul medio, menos opaco)
- Color 3: rgba(12,35,64,0.90) → rgba(201,169,97,0.15) (¡DORADO!, muy translúcido)
- Posición: 50% → 40% (transición más temprana)

---

### Cambio 8: Efecto Editorial Premium (Líneas 539-550)

**ANTES:**
```css
.hero-image-container {
    position: relative;
    width: 100%;
    max-width: 500px;
    aspect-ratio: 3/4;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: var(--shadow-2xl);
}
```

**DESPUÉS:**
```css
.hero-image-container {
    position: relative;
    width: 100%;
    max-width: 500px;
    aspect-ratio: 3/4;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: var(--shadow-2xl);
    /* Efecto editorial premium */
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(6px);
}
```

---

## 📊 Resumen de Líneas Modificadas

### index.html
```
Línea 224: Background image src + alt
Línea 294: Jacqueline image src + alt
Línea 268: KPI 1 text
Línea 277: KPI 2 text
Línea 286: KPI 3 text
```

### style.css
```
Líneas 333-335: Añadidas (filter + transform)
Líneas 343-348: Modificadas (gradient)
Líneas 548-549: Añadidas (background + backdrop-filter)
```

---

## 🔧 Aplicar Cambios Manualmente

Si necesitas revertir o aplicar manualmente:

### 1. Backup
```bash
cp index.html index.html.backup
cp style.css style.css.backup
```

### 2. Aplicar cambios en index.html
```bash
# Reemplazar URLs de Unsplash por imágenes locales
sed -i 's|https://images.unsplash.com/photo-1589829545856[^"]*|fondo_hero.png|g' index.html
sed -i 's|https://images.unsplash.com/photo-1573497019940[^"]*|persona_hero.png|g' index.html

# Actualizar textos KPI
sed -i 's|Clientes Satisfechos|Personas Asesoradas|g' index.html
sed -i 's|>Calificación<|>Opinión de Clientes<|g' index.html
sed -i 's|Tasa de Éxito|Casos Favorables|g' index.html
```

### 3. Aplicar cambios en style.css
Editar manualmente las líneas indicadas arriba.

---

## ✅ Verificación

```bash
# Verificar que las imágenes existen
ls -lh fondo_hero.png persona_hero.png

# Verificar cambios en HTML
grep "fondo_hero.png" index.html
grep "persona_hero.png" index.html
grep "Personas Asesoradas" index.html

# Verificar cambios en CSS
grep "blur(2px)" style.css
grep "rgba(201, 169, 97" style.css
grep "backdrop-filter" style.css
```

---

## 🎯 Testing

### Checklist Visual
- [ ] Fondo de oficina se ve con blur sutil
- [ ] Degradé tiene toque dorado en la derecha
- [ ] Imagen de Jacqueline tiene efecto editorial
- [ ] Textos KPI usan lenguaje humanizado
- [ ] Todo es legible y profesional

### Checklist Técnico
- [ ] No hay errores en consola
- [ ] Imágenes cargan < 300ms
- [ ] Blur no causa lag
- [ ] Responsive funciona
- [ ] Alt texts son descriptivos

---

**Fecha de implementación:** 6 Enero 2026  
**Versión:** 3.1  
**Total de cambios:** 8 modificaciones (5 HTML + 3 CSS)  
**Archivos afectados:** 2 (index.html, style.css)  
**Assets nuevos:** 2 (fondo_hero.png, persona_hero.png)

