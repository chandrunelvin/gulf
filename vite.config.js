import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { spawn } from 'node:child_process'

// The contact form posts to /api/contact, which Vite proxies to the Express
// mailer in server/index.js. That server has its own start script
// ("npm run server") and doesn't run automatically — forgetting to start it
// alongside "npm run dev" makes every contact-form submission fail with a
// generic "Failed to send message" (the proxy has nothing to forward to).
// This plugin spawns it automatically so a single `npm run dev` is enough.
function mailerServerPlugin() {
  let child
  return {
    name: 'start-mailer-server',
    apply: 'serve',
    configureServer() {
      child = spawn(process.execPath, ['server/index.js'], { stdio: 'inherit' })
      const stop = () => child?.kill()
      process.once('exit', stop)
      process.once('SIGTERM', stop)
      process.once('SIGINT', stop)
    },
    closeBundle() {
      child?.kill()
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mailerServerPlugin()],
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
