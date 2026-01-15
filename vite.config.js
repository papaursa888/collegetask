import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/collegetask/',   // 🔴 REQUIRED for GitHub Pages
  plugins: [vue()]
})
