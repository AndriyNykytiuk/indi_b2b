import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base:"/indi_b2b/",
    preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: ['b2b.indiapp.com.ua']
    }
})
