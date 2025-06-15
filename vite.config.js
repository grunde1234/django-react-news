import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    proxy:{
      '/api':{
        target: 'https://django-article-api.onrender.com/api',
        changeOrigin: true,
        rewrite: (path)=>path.replace(/^\/api/, '')
      }
    }
  }
})
