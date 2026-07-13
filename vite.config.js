import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Automatically copy assets from pics- to public/images/home (force reload   )
try {
  const srcDir = path.resolve(process.cwd(), 'pics-');
  const destDir = path.resolve(process.cwd(), 'public/images/home');

  if (fs.existsSync(srcDir)) {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    const files = fs.readdirSync(srcDir);
    for (const file of files) {
      const srcFile = path.join(srcDir, file);
      const destFile = path.join(destDir, file);
      fs.copyFileSync(srcFile, destFile);
    }
    console.log('[Vite Config] Successfully synchronized pics- directory to public/images/home');
  }
} catch (err) {
  console.error('[Vite Config] Failed to copy pics-:', err);
}








export default defineConfig({
  plugins: [react()],

  server: {
    open: true,
    host: true,
    warmup: {
      clientFiles: ['./src/main.jsx', './src/App.jsx'],
    },
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },

  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    assetsInlineLimit: 4096,
    cssCodeSplit: false,
    sourcemap: false,
  },
});

