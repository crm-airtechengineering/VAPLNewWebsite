import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react(), tailwindcss()],
    // If we are deploying to GitHub Pages, use the repo name, otherwise use root '/'
    base: mode === 'gh-pages' ? '/VAPLNewWebsite/' : '/',
  }
})