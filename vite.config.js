import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/api': 'http://localhost:5174',
    },
  },
  build: {
    rollupOptions: {
      // The three.js modules live in /public/vendor and are loaded at runtime as
      // native ES modules; keep them external so the browser fetches them directly.
      external: [/^\/vendor\//],
    },
  },
})
