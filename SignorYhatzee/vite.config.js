import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/AlcholYhazeeApp/', // Sostituisci questo con il nome esatto della tua repository su GitHub
})
