# Imágenes Recomendadas para el Blog JDV Abogados

**Fecha**: 28 de enero de 2026  
**Estado**: Búsqueda completada, pendiente descarga e implementación

---

## Post 1: Sumario Administrativo - Guía Práctica

### Imágenes Recomendadas de Pexels

**Opción A (Recomendada)**: Abogado con cliente en reunión seria
- **URL**: `https://images.pexels.com/photos/7841457/pexels-photo-7841457.jpeg`
- **ID Pexels**: 7841457
- **Por qué**: Ambiente profesional serio, tonos azules/grises, transmite seriedad de una consulta legal
- **Descarga**: `https://images.pexels.com/photos/7841457/pexels-photo-7841457.jpeg?cs=srgb&dl=pexels-rdne-7841457.jpg&fm=jpg`

**Opción B**: Profesional revisando documentos en escritorio
- **URL**: `https://images.pexels.com/photos/7841466/pexels-photo-7841466.jpeg`
- **ID Pexels**: 7841466
- **Por qué**: Enfoque en documentos legales, ambiente de concentración
- **Descarga**: `https://images.pexels.com/photos/7841466/pexels-photo-7841466.jpeg?cs=srgb&dl=pexels-rdne-7841466.jpg&fm=jpg`

**Opción C**: Reunión seria entre profesionales
- **URL**: `https://images.pexels.com/photos/7841450/pexels-photo-7841450.jpeg`
- **ID Pexels**: 7841450
- **Por qué**: Tono serio, profesional, ambiente de oficina
- **Descarga**: `https://images.pexels.com/photos/7841450/pexels-photo-7841450.jpeg?cs=srgb&dl=pexels-rdne-7841450.jpg&fm=jpg`

### Instrucciones de Descarga

1. Ir a Pexels: https://www.pexels.com/photo/7841457/
2. Click en botón "Download"
3. Descargar en "Original" (máxima resolución)
4. Guardar como: `sumario-administrativo-consulta.jpg` (temporal)

### Optimización Requerida

- **Redimensionar a**: 1200 x 630 px
- **Herramienta**: https://squoosh.app
- **Formato**: JPEG (calidad 85-90%)
- **Peso objetivo**: < 300 KB
- **Nombre final**: `sumario-administrativo-guia-practica.jpg`

### Actualización en Markdown

Archivo: `/astro-site/src/content/blog/2026-01-15-sumario-administrativo-guia-practica.md`

```yaml
heroImage: "/blog/sumario-administrativo-guia-practica.jpg"
heroAlt: "Profesionales en consulta legal revisando documentación sobre sumarios administrativos"
```

---

## Post 2: Dictamen CGR - Responsabilidad Administrativa

### Imágenes Recomendadas de Unsplash

**Opción A (Recomendada)**: Edificio gubernamental moderno con columnas
- **URL**: `https://unsplash.com/photos/3U-0SEoE0v0`
- **Fotógrafo**: Karson (@karson_)
- **Por qué**: Arquitectura institucional moderna, transmite autoridad y seriedad gubernamental
- **Descarga**: `https://unsplash.com/photos/3U-0SEoE0v0/download?force=true`

**Opción B**: Edificio institucional con fachada clásica
- **URL**: `https://unsplash.com/photos/E94nZORR5qc`
- **Fotógrafo**: Elijah Mears (@elijahjmears)
- **Por qué**: Arquitectura gubernamental clásica, profesional y formal
- **Descarga**: `https://unsplash.com/photos/E94nZORR5qc/download?force=true`

**Opción C**: Edificio institucional con columnas (detalle arquitectónico)
- **URL**: `https://unsplash.com/photos/6kA9FjqUxhM`
- **Fotógrafo**: Andy Feliciotti (@someguy)
- **Por qué**: Enfoque en arquitectura institucional, colores neutros
- **Descarga**: `https://unsplash.com/photos/6kA9FjqUxhM/download?force=true`

**Opción D (Alternativa conceptual)**: Edificio corporativo moderno
- **URL**: `https://unsplash.com/photos/9wXvgLMDetA`
- **Fotógrafo**: Michael (@michael75)
- **Por qué**: Arquitectura moderna, vidrio y líneas limpias, transmite institucionalidad contemporánea
- **Descarga**: `https://unsplash.com/photos/9wXvgLMDetA/download?force=true`

### Instrucciones de Descarga

1. Ir a Unsplash: https://unsplash.com/photos/3U-0SEoE0v0
2. Click en botón verde "Download free"
3. Descargar en tamaño "Original" (máxima resolución)
4. Guardar como: `dictamen-cgr-edificio-temp.jpg`

### Optimización Requerida

- **Redimensionar a**: 1200 x 630 px
- **Herramienta**: https://squoosh.app
- **Formato**: JPEG (calidad 85-90%)
- **Peso objetivo**: < 300 KB
- **Nombre final**: `dictamen-cgr-responsabilidad-administrativa.jpg`

### Actualización en Markdown

Archivo: `/astro-site/src/content/blog/2026-01-20-dictamen-cgr-responsabilidad-administrativa.md`

```yaml
heroImage: "/blog/dictamen-cgr-responsabilidad-administrativa.jpg"
heroAlt: "Edificio institucional gubernamental representando la autoridad de la Contraloría General de la República"
```

---

## Proceso de Implementación

### 1. Descargar Imágenes

```bash
# Opción manual: Usar el navegador
# Opción A para Post 1: https://www.pexels.com/photo/7841457/
# Opción A para Post 2: https://unsplash.com/photos/3U-0SEoE0v0
```

### 2. Optimizar con Squoosh

1. Ir a https://squoosh.app
2. Arrastrar imagen descargada
3. Configurar:
   - **Resize**: Custom → 1200 x 630 px
   - **Format**: MozJPEG
   - **Quality**: 85 (ajustar si peso > 300KB)
4. Click "Download" (esquina inferior derecha)

### 3. Renombrar y Colocar

```bash
cd ~/Documents/Dev/Jacqueline/Demo4_JDV

# Mover imágenes optimizadas a carpeta blog
mv ~/Downloads/image-optimized-1.jpg astro-site/public/blog/sumario-administrativo-guia-practica.jpg
mv ~/Downloads/image-optimized-2.jpg astro-site/public/blog/dictamen-cgr-responsabilidad-administrativa.jpg
```

### 4. Actualizar Archivos Markdown

Editar ambos archivos `.md` en `astro-site/src/content/blog/` con las nuevas rutas.

### 5. Verificar

```bash
cd astro-site
npm run dev
```

Abrir:
- http://localhost:4321/blog/
- http://localhost:4321/blog/sumario-administrativo-guia-practica
- http://localhost:4321/blog/dictamen-cgr-responsabilidad-administrativa

---

## Alternativa: Usar wget/curl para Descargar

### Post 1 (Pexels)

```bash
# Descargar directamente (requiere las URLs exactas de descarga)
# Nota: Pexels requiere descarga manual desde el sitio web
```

### Post 2 (Unsplash)

```bash
# Descargar imagen de Unsplash
cd ~/Downloads
curl -L "https://unsplash.com/photos/3U-0SEoE0v0/download?force=true" \
  -o unsplash-government-building.jpg
```

---

## Checklist de Calidad

- [ ] **Post 1**: Imagen descargada de Pexels
- [ ] **Post 1**: Imagen redimensionada a 1200x630px
- [ ] **Post 1**: Imagen optimizada < 300KB
- [ ] **Post 1**: Imagen guardada como `sumario-administrativo-guia-practica.jpg`
- [ ] **Post 1**: Markdown actualizado con nueva ruta
- [ ] **Post 2**: Imagen descargada de Unsplash
- [ ] **Post 2**: Imagen redimensionada a 1200x630px
- [ ] **Post 2**: Imagen optimizada < 300KB
- [ ] **Post 2**: Imagen guardada como `dictamen-cgr-responsabilidad-administrativa.jpg`
- [ ] **Post 2**: Markdown actualizado con nueva ruta
- [ ] Verificación visual en localhost (npm run dev)
- [ ] Placeholder.svg ya no se usa en ningún post
- [ ] Alt text descriptivos y relevantes

---

## Atribución (Opcional pero Recomendada)

Aunque Pexels y Unsplash no requieren atribución, es buena práctica mencionar:

**En el pie de página del blog o en about:**
- Fotografía por RDNE Stock project (Pexels) y Karson (Unsplash)

O agregar un comentario en el frontmatter:

```yaml
# Photo by RDNE Stock project: https://www.pexels.com/photo/7841457/
# License: Free to use (Pexels License)
```

---

## Notas Adicionales

### Por qué estas imágenes

- **Paleta de colores**: Ambas opciones tienen tonos azules/grises que coinciden con la marca JDV
- **Profesionalismo**: Transmiten seriedad, autoridad y confianza
- **Relevancia**: Se relacionan directamente con el contenido de cada post
- **Calidad**: Alta resolución, composición profesional
- **Originalidad**: No son las típicas imágenes genéricas de apretones de mano

### Mejoras Futuras

Para posts futuros, considerar:
1. **Fotografía personalizada**: Contratar fotógrafo para imágenes del equipo/oficina
2. **Imágenes de Chile**: Buscar edificios institucionales chilenos reales (La Moneda, Congreso)
3. **Consistencia visual**: Crear una biblioteca de imágenes con filtros/tratamiento consistente
4. **Banco interno**: Mantener carpeta Drive/Notion con imágenes pre-aprobadas

---

**Documento generado**: 28 de enero de 2026  
**Próximo paso**: Descargar y optimizar las imágenes siguiendo este documento
