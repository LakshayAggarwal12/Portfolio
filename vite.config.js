import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build`         -> normal multi-file build in dist/ (use this for Vercel, Netlify, etc.)
// `npm run build:single`  -> everything inlined into one dist/index.html (handy for sharing a single file)
const single = process.env.SINGLE_FILE === '1'

export default defineConfig({
  // For GitHub Pages project sites, set base to '/<repo-name>/' (see README).
  base: process.env.BASE_PATH || '/',
  plugins: [react(), ...(single ? [viteSingleFile()] : [])],
  build: { target: 'es2020', chunkSizeWarningLimit: 1200 },
})
