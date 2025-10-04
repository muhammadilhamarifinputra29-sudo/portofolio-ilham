import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  base: "/portofolio/",   // penting buat GitHub Pages
  plugins: [
    react(),
    tailwindcss(),
    {
      // Plugin custom bikin 404.html otomatis setelah build
      name: "create-404",
      closeBundle() {
        try {
          fs.copyFileSync("dist/index.html", "dist/404.html")
          console.log("✅ 404.html berhasil dibuat")
        } catch (err) {
          console.error("❌ Gagal membuat 404.html:", err)
        }
      },
    },
  ],
})
