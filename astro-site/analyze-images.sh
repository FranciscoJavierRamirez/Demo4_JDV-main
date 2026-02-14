#!/bin/bash

# Script de análisis exhaustivo de imágenes
# Busca referencias a cada imagen en el código fuente

echo "========================================="
echo "ANÁLISIS EXHAUSTIVO DE IMÁGENES"
echo "========================================="
echo ""

# Directorio de trabajo
cd "$(dirname "$0")"

# Crear archivo temporal para resultados
TEMP_RESULTS=$(mktemp)
UNUSED_IMAGES=$(mktemp)

# Contar imágenes
TOTAL_IMAGES=$(find public -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.webp" -o -iname "*.svg" -o -iname "*.gif" \) | wc -l | tr -d ' ')

echo "Total de imágenes encontradas: $TOTAL_IMAGES"
echo ""
echo "Analizando referencias en archivos .astro, .tsx, .md, .css, .js..."
echo ""

# Analizar cada imagen
find public -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.webp" -o -iname "*.svg" -o -iname "*.gif" \) | sort | while read -r image; do
    # Obtener nombre del archivo (relativo a public/)
    relative_path="${image#public/}"
    filename=$(basename "$image")

    # Buscar referencias (sin extensión para capturar cambios de formato)
    filename_no_ext="${filename%.*}"

    # Buscar en archivos fuente
    references=$(grep -r -l --include="*.astro" --include="*.tsx" --include="*.md" --include="*.css" --include="*.js" \
        -e "$relative_path" \
        -e "$filename" \
        -e "$filename_no_ext" \
        src/ 2>/dev/null || echo "")

    if [ -z "$references" ]; then
        # No se encontraron referencias
        echo "❌ $relative_path" >> "$UNUSED_IMAGES"
    else
        # Se encontraron referencias
        echo "✅ $relative_path" >> "$TEMP_RESULTS"
        echo "   Referencias en:" >> "$TEMP_RESULTS"
        echo "$references" | while read -r ref; do
            if [ -n "$ref" ]; then
                # Buscar líneas específicas
                line_numbers=$(grep -n "$filename" "$ref" 2>/dev/null | cut -d: -f1 | head -3 | tr '\n' ',' | sed 's/,$//')
                if [ -n "$line_numbers" ]; then
                    echo "      - $ref (líneas: $line_numbers)" >> "$TEMP_RESULTS"
                else
                    echo "      - $ref" >> "$TEMP_RESULTS"
                fi
            fi
        done
        echo "" >> "$TEMP_RESULTS"
    fi
done

echo "========================================="
echo "IMÁGENES EN USO (con referencias)"
echo "========================================="
echo ""
cat "$TEMP_RESULTS"

echo ""
echo "========================================="
echo "IMÁGENES SIN REFERENCIAS (candidatas a eliminar)"
echo "========================================="
echo ""

if [ -s "$UNUSED_IMAGES" ]; then
    cat "$UNUSED_IMAGES"
    echo ""

    UNUSED_COUNT=$(wc -l < "$UNUSED_IMAGES" | tr -d ' ')
    echo "Total de imágenes sin referencias: $UNUSED_COUNT"

    # Calcular espacio a liberar
    echo ""
    echo "Calculando espacio que se liberaría..."
    SPACE_TO_FREE=0
    while read -r image_path; do
        image_path="${image_path#❌ }"
        full_path="public/$image_path"
        if [ -f "$full_path" ]; then
            size=$(stat -f%z "$full_path" 2>/dev/null || stat -c%s "$full_path" 2>/dev/null)
            SPACE_TO_FREE=$((SPACE_TO_FREE + size))
        fi
    done < "$UNUSED_IMAGES"

    # Convertir a MB
    SPACE_MB=$(echo "scale=2; $SPACE_TO_FREE / 1024 / 1024" | bc)
    echo "Espacio a liberar: ${SPACE_MB} MB"

    echo ""
    echo "========================================="
    echo "COMANDOS PARA ELIMINAR (REVISAR ANTES DE EJECUTAR)"
    echo "========================================="
    echo ""
    echo "# Eliminar todas las imágenes sin referencias:"
    echo "while read -r img; do"
    echo "  img=\"\${img#❌ }\""
    echo "  rm -v \"public/\$img\""
    echo "done < <(grep '^❌' $(basename "$UNUSED_IMAGES"))"

else
    echo "¡Todas las imágenes están siendo utilizadas!"
fi

echo ""
echo "Resultados guardados en:"
echo "  - Imágenes en uso: $TEMP_RESULTS"
echo "  - Imágenes sin referencias: $UNUSED_IMAGES"
echo ""
echo "IMPORTANTE: Revisa manualmente el reporte antes de eliminar cualquier archivo."

# Limpiar (comentado para que puedas revisar los archivos)
# rm -f "$TEMP_RESULTS" "$UNUSED_IMAGES"
