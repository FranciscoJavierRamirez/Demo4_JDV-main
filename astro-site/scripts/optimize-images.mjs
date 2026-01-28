/**
 * Script para optimizar imágenes del sitio JDV Abogados
 * Convierte PNG/JPG a WebP y crea versiones optimizadas
 *
 * Uso: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, parse } from 'path';
import { existsSync } from 'fs';

const PUBLIC_DIR = './public';
const QUALITY = 85; // Calidad WebP (0-100)

// Imágenes a optimizar con sus configuraciones
const IMAGES_TO_OPTIMIZE = [
  {
    input: 'Jaqueline_home_hero.png',
    outputs: [
      { suffix: '', width: 1024, quality: 85 },      // Original size, optimized
      { suffix: '-og', width: 1200, quality: 90 },   // Open Graph (1200x630 recommended)
    ]
  },
  {
    input: 'Jaqueline_quienes_somos.png',
    outputs: [
      { suffix: '', width: 800, quality: 85 },
    ]
  },
  {
    input: 'Jaqueline_quienes_somos_2.png',
    outputs: [
      { suffix: '', width: 800, quality: 85 },
    ]
  },
  {
    input: 'maria_alejandra_quienes_somos.png',
    outputs: [
      { suffix: '', width: 600, quality: 85 },
    ]
  },
  {
    input: 'home/fondo_hero.png',
    outputs: [
      { suffix: '', width: 1920, quality: 80 },
    ]
  }
];

async function optimizeImage(inputPath, outputPath, options = {}) {
  const { width, quality = QUALITY } = options;

  try {
    let pipeline = sharp(inputPath);

    if (width) {
      pipeline = pipeline.resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }

    // Crear versión WebP
    await pipeline
      .webp({ quality })
      .toFile(outputPath);

    const inputStats = await stat(inputPath);
    const outputStats = await stat(outputPath);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

    console.log(`✓ ${inputPath} → ${outputPath}`);
    console.log(`  Original: ${(inputStats.size / 1024).toFixed(0)}KB → WebP: ${(outputStats.size / 1024).toFixed(0)}KB (${savings}% smaller)`);

    return { success: true, savings };
  } catch (error) {
    console.error(`✗ Error procesando ${inputPath}:`, error.message);
    return { success: false, error };
  }
}

async function main() {
  console.log('🖼️  Optimizando imágenes para JDV Abogados...\n');

  let totalSaved = 0;
  let processed = 0;

  for (const config of IMAGES_TO_OPTIMIZE) {
    const inputPath = join(PUBLIC_DIR, config.input);

    if (!existsSync(inputPath)) {
      console.log(`⚠ Archivo no encontrado: ${inputPath}`);
      continue;
    }

    const parsed = parse(config.input);

    for (const output of config.outputs) {
      const outputName = `${parsed.name}${output.suffix}.webp`;
      const outputPath = join(PUBLIC_DIR, parsed.dir, outputName);

      const result = await optimizeImage(inputPath, outputPath, output);
      if (result.success) {
        processed++;
      }
    }
    console.log('');
  }

  console.log(`\n✅ Optimización completada: ${processed} imágenes procesadas`);
  console.log('\n📋 Próximos pasos:');
  console.log('1. Actualizar referencias en el código para usar .webp');
  console.log('2. Considerar usar <picture> para fallback a PNG en navegadores antiguos');
}

main().catch(console.error);
