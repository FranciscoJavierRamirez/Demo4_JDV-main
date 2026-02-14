// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://jdvabogados.cl',
  vite: {
    plugins: [tailwindcss()],
    build: {
      // OPTIMIZED: Better minification and compression
      minify: 'esbuild',        // Fast and effective minification
      target: 'es2020',          // Modern browsers (Chrome 90+, Firefox 88+, Safari 14+)
      cssMinify: true,           // Minify CSS
      cssCodeSplit: true,        // Split CSS by route for better caching
      reportCompressedSize: true // Report gzip sizes (for monitoring)
    }
  },
  integrations: [react()]
});