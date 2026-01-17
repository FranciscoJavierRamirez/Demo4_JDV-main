# Migración Home a Astro - Progreso Actual

**Fecha:** 17 Enero 2026
**Estado:** H3 completado (3/6 fases), avanzando a H4
**Build:** ✅ Exitoso (2.16s)
**Dev Server:** http://localhost:4321/

---

## ✅ Fases Completadas

### H1: BaseLayout + Shell Home ✅
- [x] BaseLayout.astro con CSS/JS desde `/public/home/`
- [x] index.astro renderizando baseline
- [x] Validación: Home se ve igual sin componentes

### H2: Header + Navegación ✅
- [x] `Header.astro` creado (barra principal)
- [x] `MegaMenu.astro` creado (overlay desktop)
- [x] `FullscreenMenu.astro` creado (mobile)
- [x] IDs/classes exactos mantenidos
- [x] Validación: Build exitoso, estructura modular

### H3: Stats + TrustBadges ✅
- [x] Content Collections creadas:
  - `src/content/stats/home.md`
  - `src/content/trustBadges/home.md`
- [x] Schemas Zod en `config.ts`
- [x] `Stats.astro` componente
- [x] `TrustBadges.astro` componente
- [x] Integrado en `index.astro`
- [x] Validación: Build exitoso (2.16s)

---

## 🔄 Fase Actual

### H4: AreasGrid, Benefits, ProBono, FAQ, Newsletter (IN PROGRESS)

**Pendiente:**
- [ ] `AreasGrid.astro` + `src/content/home/areas.md`
- [ ] `Benefits.astro` + `src/content/home/benefits.md`
- [ ] `ProBono.astro` + `src/content/home/probono.md`
- [ ] `FAQ.astro` + `src/content/home/faq.md`
- [ ] `Newsletter.astro` + `src/content/home/newsletter.md`

---

## ⏳ Fases Pendientes

### H5: ModalConsulta, Footer, BackToTop
- [ ] `ModalConsulta.astro` (incluyendo pro bono notice)
- [ ] `Footer.astro`
- [ ] `BackToTop.astro`

### H6: Limpieza Final
- [ ] Eliminar `RawNav.astro`, `RawRest.astro`, `RawRestFromAreas.astro`
- [ ] Verificar un solo `<script type="module">`
- [ ] Verificar un solo `<link rel="stylesheet">`
- [ ] Validación pixel parity desktop/tablet/mobile
- [ ] Validación interacciones (menú, modal, FAQ, newsletter, etc.)
- [ ] Commit: "feat: migrate Home to Astro (pixel parity)"

---

## 📊 Métricas Actuales

| Métrica | Valor |
|---------|-------|
| Build Time | 2.16s |
| Componentes Astro | 6 (Header, MegaMenu, FullscreenMenu, Hero, Stats, TrustBadges) |
| Content Collections | 3 (home, stats, trustBadges) |
| Archivos .md | 3 (hero.md, stats/home.md, trustBadges/home.md) |
| HTML RAW Restante | ~70% (desde Áreas en adelante) |
| Fases Completadas | 3/6 (50%) |

---

## 🏗️ Estructura Actual

```
src/
  components/
    nav/
      ├── Header.astro ✅
      ├── MegaMenu.astro ✅
      └── FullscreenMenu.astro ✅
    home/
      ├── Stats.astro ✅
      └── TrustBadges.astro ✅
    Hero.astro ✅
    RawNav.astro (deprecated, eliminar en H6)
    RawRest.astro (deprecated, eliminar en H6)
    RawRestFromAreas.astro (temporal, migrar en H4/H5)
  content/
    config.ts (schemas: home, stats, trustBadges)
    home/
      └── hero.md ✅
    stats/
      └── home.md ✅
    trustBadges/
      └── home.md ✅
  layouts/
    └── BaseLayout.astro ✅
  pages/
    └── index.astro ✅
public/
  home/ (CSS, JS, imágenes)
```

---

## 🎯 Siguiente Paso Recomendado

**Opción A: Continuar H4 (AreasGrid primero)**
- Crear `src/content/home/areas.md` con 8 áreas
- Crear `src/components/home/AreasGrid.astro`
- Actualizar `config.ts` con schema
- Integrar en `index.astro`

**Opción B: Validar Progreso Actual**
- Abrir http://localhost:4321/
- Verificar que Header, Hero, Stats, TrustBadges se ven idénticos
- Confirmar interacciones:
  - Mega menu (desktop)
  - Fullscreen menu (mobile)
  - Stats counter animación
- Si OK, continuar con H4

**Opción C: Checkpoint + Commit**
- Crear tag `checkpoint/home-h3-completed`
- Commit: "chore: checkpoint H1-H3 completed (Header, Hero, Stats, TrustBadges)"
- Continuar con H4

---

## ⚠️ Reglas Mantenidas

✅ IDs y clases exactos (JS depende de ellos)
✅ Copy sin cambios
✅ CSS sin optimizar
✅ JS modular existente reutilizado
✅ Backward compatibility (onclick, window.openModal)

---

## 🔗 Referencias

- **Dev Server:** http://localhost:4321/
- **Original RAW:** /home/index.html
- **Build Output:** /astro-site/dist/
- **Docs Fase 4:** /astro-site/FASE-4-SUMMARY.md

---

**Estado:** 🟢 Build exitoso, 50% de fases completadas, listo para H4

