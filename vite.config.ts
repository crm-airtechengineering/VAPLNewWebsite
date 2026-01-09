import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // FIX: Change base to '/' for Vercel deployment
  plugins: [react(), tailwindcss()],
  base: '/VAPLNewWebsite/', 
})