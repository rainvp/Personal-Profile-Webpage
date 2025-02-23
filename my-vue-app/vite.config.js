import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',       // Main page
        resume: 'resume.html'  // Resume page
      }
    }
  }
})
