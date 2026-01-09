import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // FIX: Change base to '/' for Vercel deployment
  plugins: [react(), tailwindcss()],
  base: '/VAPLNewWebsite/', 
})