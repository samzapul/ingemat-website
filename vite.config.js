import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '127.0.0.1',
    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      input: {
        main:  './index.html',
        steel: './steel-solutions.html',
      },
    },
  },
})
