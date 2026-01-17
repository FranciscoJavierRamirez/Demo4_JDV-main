#!/bin/bash

echo "🚀 JDV & Abogados - Premium 2026 Testing Script"
echo "================================================"
echo ""

# Check if we're in the right directory
if [ ! -d "astro-site" ]; then
    echo "❌ Error: Run this script from project root"
    exit 1
fi

echo "✅ Verificando archivos implementados..."
echo ""

# Check CSS file
if [ -f "home/style-premium-2026.css" ]; then
    SIZE=$(wc -c < "home/style-premium-2026.css" | tr -d ' ')
    echo "✅ CSS Premium: ${SIZE} bytes (~$((SIZE/1024)) KB)"
else
    echo "❌ CSS Premium no encontrado"
fi

# Check JS file
if [ -f "home/assets/js/modules/scrollAnimations-premium.js" ]; then
    SIZE=$(wc -c < "home/assets/js/modules/scrollAnimations-premium.js" | tr -d ' ')
    echo "✅ JS Scroll Animations: ${SIZE} bytes (~$((SIZE/1024)) KB)"
else
    echo "❌ JS Scroll Animations no encontrado"
fi

# Check documentation
if [ -f "IMPLEMENTATION-GUIDE-PREMIUM-2026.md" ]; then
    echo "✅ Implementation Guide creado"
else
    echo "⚠️  Implementation Guide no encontrado"
fi

if [ -f "QUICK-WINS-SUMMARY.md" ]; then
    echo "✅ Quick Wins Summary creado"
else
    echo "⚠️  Quick Wins Summary no encontrado"
fi

if [ -f "VISUAL-CHECKLIST.md" ]; then
    echo "✅ Visual Checklist creado"
else
    echo "⚠️  Visual Checklist no encontrado"
fi

echo ""
echo "📦 Instalando dependencias (si es necesario)..."
cd astro-site

if [ ! -d "node_modules" ]; then
    npm install
fi

echo ""
echo "🔨 Building proyecto..."
npm run build > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo "✅ Build exitoso"
else
    echo "❌ Build falló - revisar errores"
    exit 1
fi

echo ""
echo "🌐 Iniciando dev server..."
echo ""
echo "📍 URL: http://localhost:4321"
echo ""
echo "📋 CHECKLIST RÁPIDO:"
echo "  1. Nav tiene blur glassmorphic"
echo "  2. CTAs con shimmer effect en hover"
echo "  3. Cards levantan en hover con sombra índigo"
echo "  4. Hero H1 tiene gradiente"
echo "  5. Scroll animations fade-in"
echo ""
echo "📖 Documentación completa:"
echo "  - VISUAL-CHECKLIST.md (testing visual)"
echo "  - IMPLEMENTATION-GUIDE-PREMIUM-2026.md (documentación técnica)"
echo "  - QUICK-WINS-SUMMARY.md (resumen ejecutivo)"
echo ""
echo "🛑 Para detener: Ctrl+C"
echo ""

npm run dev
