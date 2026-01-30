# Checklist de Validación - Fase 3

**Proyecto:** JDV & Abogados
**Fecha:** Enero 2026
**Estado:** ⚠️ Pendiente validación en browser

---

## Instrucciones

1. Abrir `home/index.html` en un navegador moderno
2. Abrir DevTools (F12)
3. Ir a la pestaña Console
4. Verificar cada item del checklist

---

## ✅ Pre-Validación (Archivos)

- [x] `home/assets/js/main.js` existe
- [x] `home/assets/js/config.js` existe
- [x] 10 módulos en `home/assets/js/modules/` existen
- [x] `index.html` actualizado a `<script type="module">`
- [x] Pro bono notice agregado al modal
- [x] 0 errores de sintaxis en validación Node

---

## 📋 Validación en Browser

### 1. Consola (0 errores)

**Al cargar la página:**
- [ ] ✅ No hay errores en consola
- [ ] ✅ Aparece: "🚀 JDV & Abogados - Initializing..."
- [ ] ✅ Aparece: "✅ All modules loaded"
- [ ] ⚠️ **Si hay errores:** Anotar y reportar

**Mensajes esperados:**
```
🚀 JDV & Abogados - Initializing...
Navigation module loaded
Mega menu module loaded
Modal module loaded
FAQ module loaded
Scroll animations module loaded
Stats counter module loaded
Back to top module loaded
Smooth scroll module loaded
Newsletter module loaded
✅ All modules loaded
JDV & Abogados (estilo dorado)
Sitio Web v4.0 - Arquitectura Modular
```

---

### 2. Navegación Sticky

- [ ] Al hacer scroll >100px, el nav se vuelve sticky (fondo, sombra)
- [ ] Al hacer scroll down >300px, el nav se oculta
- [ ] Al hacer scroll up, el nav reaparece
- [ ] La transición es suave

**Cómo probar:**
1. Scroll down lentamente
2. Verificar que nav desaparece
3. Scroll up
4. Verificar que nav aparece

---

### 3. Mega Menu (Desktop)

- [ ] Hover en "Áreas de Práctica" abre el mega menu
- [ ] El mega menu muestra 8 áreas en 4 columnas
- [ ] Al salir del mouse, espera 300ms antes de cerrar
- [ ] Click en un link del mega menu cierra el menu
- [ ] Click fuera del mega menu lo cierra
- [ ] ESC key cierra el mega menu

**Cómo probar:**
1. Pasar mouse por "Áreas de Práctica"
2. Verificar apertura suave
3. Salir y volver antes de 300ms
4. Verificar que permanece abierto
5. Click en link
6. Verificar cierre

---

### 4. Fullscreen Menu (Mobile)

- [ ] Click en hamburger abre menu fullscreen
- [ ] Menu cubre toda la pantalla
- [ ] Hamburger se anima (icono X)
- [ ] Click en link cierra el menu
- [ ] ESC key cierra el menu
- [ ] Body scroll bloqueado cuando menu activo

**Cómo probar:**
1. Resize browser a <768px o usar DevTools mobile
2. Click en hamburger (3 líneas + "Menú")
3. Verificar apertura fullscreen
4. Intentar scroll (debe estar bloqueado)
5. ESC para cerrar
6. Verificar que scroll se restaura

---

### 5. Stats Counter

- [ ] Al hacer scroll a la sección de stats, los números animan de 0 al valor final
- [ ] Animación dura ~2 segundos
- [ ] Se ejecuta solo una vez (no re-anima al volver)
- [ ] Los 4 stats animan simultáneamente:
  - 15+ Años
  - 500+ Casos
  - 8 Áreas
  - 98% Satisfacción

**Cómo probar:**
1. Reload página
2. Scroll down a la sección de stats
3. Observar animación
4. Scroll up y down de nuevo
5. Verificar que NO vuelve a animar

---

### 6. Scroll Animations

- [ ] Cards de áreas de práctica aparecen con fade-in al entrar en viewport
- [ ] Hay un stagger de ~100ms entre cards
- [ ] Cards de beneficios animan igual
- [ ] Hero trust items animan al cargar (1.2s delay)
- [ ] Floating cards animan al cargar (1.5s delay, bounce)

**Cómo probar:**
1. Reload página
2. Observar hero animations
3. Scroll down lentamente
4. Verificar fade-in de cada sección

---

### 7. Modal de Consulta

- [ ] Click en "Consulta Gratuita" abre modal
- [ ] Modal tiene overlay con blur
- [ ] Título: "Agendar Consulta Gratuita"
- [ ] Pro bono notice NO visible
- [ ] Click en overlay cierra modal
- [ ] Click en X cierra modal
- [ ] ESC key cierra modal
- [ ] Body scroll bloqueado cuando modal activo
- [ ] Submit muestra alert de confirmación
- [ ] Modal se cierra después del submit

**Cómo probar:**
1. Click en cualquier botón "Consulta Gratuita"
2. Llenar form
3. Submit
4. Verificar alert
5. Verificar cierre automático

---

### 8. Modal Pro Bono

- [ ] Click en link "Pro Bono" abre modal
- [ ] Título cambia a: "Consultar por Servicios Pro Bono"
- [ ] Notice verde aparece arriba del form
- [ ] Notice tiene texto sobre situación socioeconómica
- [ ] Al cerrar, modal resetea a estado default (consulta)
- [ ] Notice se oculta de nuevo

**Cómo probar:**
1. Buscar link "Pro Bono" (si existe en HTML)
2. O abrir consola y ejecutar: `openProBonoModal()`
3. Verificar notice visible
4. Cerrar modal
5. Reabrir con `openModal()`
6. Verificar que notice esté oculta

---

### 9. FAQ Accordion

- [ ] Click en pregunta abre respuesta
- [ ] Solo una pregunta abierta a la vez (cierra las demás)
- [ ] Icono cambia (chevron rota)
- [ ] Re-click en pregunta abierta la cierra
- [ ] No hay errores de analytics en consola

**Cómo probar:**
1. Scroll a sección FAQ
2. Click en pregunta 1
3. Verificar apertura
4. Click en pregunta 2
5. Verificar que 1 se cierra y 2 se abre

---

### 10. Newsletter Form

- [ ] Input de email funciona
- [ ] Submit sin @ muestra alert de error
- [ ] Submit válido muestra loading (spinner + "Suscribiendo...")
- [ ] Después de 1.5s muestra éxito (check + "¡Suscrito!")
- [ ] Botón se pone verde
- [ ] Después de 3s resetea a estado original
- [ ] Form se limpia
- [ ] Console muestra objeto con email y timestamp

**Cómo probar:**
1. Scroll a footer
2. Ingresar email sin @
3. Submit y verificar error
4. Ingresar email válido
5. Submit y observar estados
6. Verificar console.log

---

### 11. Back to Top

- [ ] Botón NO visible al cargar
- [ ] Después de 500px scroll, botón aparece
- [ ] Click en botón hace smooth scroll a top
- [ ] Botón desaparece al volver arriba

**Cómo probar:**
1. Scroll down >500px
2. Verificar aparición (bottom right)
3. Click en botón
4. Verificar smooth scroll
5. Verificar que botón desaparece

---

### 12. Smooth Scroll

- [ ] Click en links del nav (#hero, #areas, etc.) hace smooth scroll
- [ ] Posición final tiene offset de 80px para el nav sticky
- [ ] No hay "saltos" bruscos

**Cómo probar:**
1. Click en link de nav
2. Verificar scroll suave
3. Verificar que sección queda visible (no bajo el nav)

---

## 🔍 Performance & Compatibility

### Browser Compatibility

Probar en:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest) - Mac only

### Responsive

- [ ] Mobile (320px - 767px)
  - [ ] Fullscreen menu funciona
  - [ ] Floating cards NO visibles
  - [ ] Stats 1 columna
  - [ ] Todo legible

- [ ] Tablet (768px - 1199px)
  - [ ] Mega menu 2 columnas
  - [ ] Stats 2 columnas
  - [ ] Floating cards NO visibles

- [ ] Desktop (1200px+)
  - [ ] Mega menu 4 columnas
  - [ ] Stats 4 columnas
  - [ ] Floating cards visibles

### Console Warnings

- [ ] 0 warnings sobre módulos no encontrados
- [ ] 0 warnings sobre imports/exports
- [ ] 0 warnings sobre CORS (si sirves localmente)

---

## 🐛 Errores Comunes y Soluciones

### Error: "Failed to load module script"

**Causa:** Rutas incorrectas en imports
**Solución:** Verificar que paths sean relativos desde cada módulo

### Error: "Uncaught ReferenceError: openModal is not defined"

**Causa:** main.js no cargó o window exports no funcionan
**Solución:**
1. Verificar que main.js se cargue
2. Verificar console logs de inicialización
3. Verificar que `window.openModal` esté definido

### Error: "Cannot find module './config.js'"

**Causa:** Extensión .js faltante en import
**Solución:** Todos los imports deben incluir `.js`

### Stats counter no anima

**Causa:** IntersectionObserver no detecta entrada
**Solución:**
1. Verificar threshold (0.3)
2. Scroll más lento
3. Verificar console para errores

### Mega menu no cierra

**Causa:** Event listeners no registrados
**Solución:**
1. Verificar initMegaMenu() se ejecutó
2. Verificar console errors

---

## ✅ Criterios de Éxito

**Fase 3 se considera exitosa si:**

1. ✅ **0 errores en consola** al cargar
2. ✅ **10/10 features funcionan** según checklist
3. ✅ **Responsive funciona** en 3 breakpoints
4. ✅ **Performance OK** (smooth scroll, animaciones fluidas)
5. ✅ **Compatible** con Chrome, Firefox, Safari

---

## 📝 Reporte de Issues

Si encuentras algún problema, documenta:

1. **Feature afectada:** (ej: "Modal pro bono")
2. **Comportamiento esperado:** (ej: "Notice debe aparecer")
3. **Comportamiento actual:** (ej: "Notice no se muestra")
4. **Error en consola:** (copiar texto exacto)
5. **Browser/OS:** (ej: "Chrome 120 / macOS")
6. **Pasos para reproducir:**
   - Paso 1
   - Paso 2
   - etc.

---

## 🎯 Siguiente Paso

Después de validación exitosa:

- [ ] Eliminar `script-backup-20260117.js`
- [ ] Eliminar `script-legacy.js`
- [ ] (Opcional) Eliminar window exports de main.js
- [ ] (Opcional) Migrar onclick a data-attributes
- [ ] Actualizar CLAUDE.md con estado final
- [ ] Commit: "feat: migrate to modular ES6 architecture"

---

**Validado por:** _____________
**Fecha:** _____________
**Resultado:** ⬜ Aprobado / ⬜ Issues encontrados
