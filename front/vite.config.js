import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: 'shana-achlamydate-superfortunately.ngrok-free.dev'
  },

  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ['pwa.png', 'robots.txt'],

      workbox: {
        navigateFallback: "/index.html",
        globPatterns: ["**/*.{js,css,html,png,jpeg,svg}"]
      },

      manifest: {
        name: 'Mi aplicación web',
        short_name: 'MyApp',
        description: 'Bienvenido a la app',
        start_url: "/",
        display: "standalone",
        background_color: '#ffffff',
        theme_color: '#000000',

        screenshots: [
        {
          src: '/img/pwa-convertido-a-192x192.jpeg',
          sizes: '192x192',
          type: 'image/jpeg',
          form_factor: "narrow"
         },
      {
        src: '/img/montaña.jpeg',
        sizes: '192x192',
        type: 'image/jpeg',
         form_factor: "wide"
       }
      ],

        icons: [
          {
            src: '/img/pwa-convertido-a-192x192.jpeg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/img/esfera.jpeg',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})