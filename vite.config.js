import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base './' faz o site funcionar em subpastas (ex.: GitHub Pages)
export default defineConfig({
  base: './',
  plugins: [vue()],
})
