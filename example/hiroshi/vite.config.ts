import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true
    }
  }
})
