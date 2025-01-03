import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true, // Garante que o HMR está ativado
    watch: {
      usePolling: true, // Força o uso de polling, útil em sistemas como Windows
    },
  },
});
