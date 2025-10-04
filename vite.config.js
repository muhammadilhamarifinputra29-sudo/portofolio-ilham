import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwind(),
    viteStaticCopy({
      targets: [
        { src: '_redirects', dest: '.' }
      ]
    })
  ]
})
