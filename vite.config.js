import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const servePublicAtRoot = {
  name: 'serve-public-at-root',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url && req.url.startsWith('/images/')) {
        const filePath = path.join(process.cwd(), 'public', req.url)
        if (fs.existsSync(filePath)) {
          const ext = path.extname(filePath).toLowerCase()
          const types = { '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.gif': 'image/gif' }
          res.setHeader('Content-Type', types[ext] || 'application/octet-stream')
          fs.createReadStream(filePath).pipe(res)
          return
        }
      }
      next()
    })
  },
}

export default defineConfig({
  plugins: [react(), servePublicAtRoot],
  base: process.env.GITHUB_ACTIONS ? '/fundacao-potiguar/' : '/proxy/8081/',
  server: {
    port: 8081,
    host: '0.0.0.0',
    allowedHosts: 'all',
    hmr: false,
  },
})
