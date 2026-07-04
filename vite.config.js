import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Exclude locked/binary files in public from the file watcher
      ignored: ['**/public/**/*.pdf', '**/public/**/*.PDF'],
    },
  },
})
