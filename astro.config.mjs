// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';
// https://astro.build/config
export default defineConfig({
  site: 'https://chernando.xyz',
  output: 'static',
  // Redirects moved to public/_redirects for Cloudflare Pages
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es',
          en: 'en'
        }
      }
    }),
    AstroPWA({
      mode: 'production',
      base: '/',
      scope: '/',
      includeAssets: ['favicon.svg', 'robots.txt'],
      registerType: 'autoUpdate',
      manifest: {
        name: 'Carlos Hernando - Blog',
        short_name: 'chernando.xyz',
        description: 'Blog personal sobre desarrollo de software, tecnologías web y conocimientos de programación.',
        theme_color: '#006666',
        background_color: '#ffffff',
        display: 'minimal-ui',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        navigateFallback: '/404',
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
      },
      devOptions: {
        enabled: false,
      },
    })
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'solarized-light',
        dark: 'solarized-dark'
      }
    }
  },
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: true
});
