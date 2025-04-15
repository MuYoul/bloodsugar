import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/bloodsugar/', // GitHub 저장소 이름
  plugins: [react()],
})
