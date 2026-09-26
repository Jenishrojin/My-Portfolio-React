import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/My-Portfolio-React/',
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
  },
})
