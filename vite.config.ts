import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set `base` to your GitHub repo name for project Pages. Replace `YOUR_REPO_NAME`.
export default defineConfig({
  plugins: [react()],
  base: '/valentines/',
})
