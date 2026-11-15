import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves project sites from /<repo-name>/. The deploy workflow
  // sets BASE_PATH; locally and in Docker the site is served from the root.
  base: process.env.BASE_PATH ?? '/',
})
