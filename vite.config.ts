import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Cozzi/' // ← Cambia qui! Il tuo repo si chiama "Cozzi"
})
