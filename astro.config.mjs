// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';
// https://astro.build/config
export default defineConfig({
  site: 'https://chernando.xyz',
  output: 'static',
  redirects: {
    // Redirecciones de posts antiguos (slugs directos) a nueva estructura
    '/aprendiendo-gatsby-con-starter-blog': '/es/articulos/aprendiendo-gatsby-con-starter-blog',
    '/django-clases-genericas': '/es/articulos/django-clases-genericas',
    '/dotfiles': '/es/articulos/dotfiles',
    '/evaluando-react-contex-redux': '/es/articulos/evaluando-react-contex-redux',
    '/homebrew-mac-os-x': '/es/articulos/homebrew-mac-os-x',
    '/instalar-macos-de-cero-y-configurar-entorno': '/es/articulos/instalar-macos-de-cero-y-configurar-entorno',
    '/integracion-continua': '/es/articulos/integracion-continua',
    '/introduciendo-serverless-python-madrid': '/es/articulos/introduciendo-serverless-python-madrid',
    '/ntp': '/es/articulos/ntp',
    '/plantilla-proyecto-python': '/es/articulos/plantilla-proyecto-python',
    '/python-generators': '/es/articulos/python-generators',
    '/que-es-serverless-baas-y-faas': '/es/articulos/que-es-serverless-baas-y-faas',
    '/tutorial-ant-buildxml': '/es/articulos/tutorial-ant-buildxml',
    '/volver-a-los-fundamentos': '/es/articulos/volver-a-los-fundamentos',

    // Redirecciones de transparencias/slides a nueva estructura como posts
    '/slides/microservicios-cuando-y-como': '/es/articulos/microservicios-cuando-y-como',
    '/slides/introduciendo-serverless-en-proyectos-python': '/es/articulos/introduciendo-serverless-en-proyectos-python',
    '/slides/vim-plugin-management': '/es/articulos/vim-plugin-management',
    '/slides/try-angularjs': '/es/articulos/descubriendo-angularjs-try-it',
    '/slides/hhgttwd': '/es/articulos/hitchhiker-guide-web-development-try-it',
    '/slides/django-tricks-2': '/es/articulos/trucos-consejos-django',

    // Redirecciones de sección de transparencias
    '/transparencias': '/es/articulos',
    '/slides': '/es/articulos',

    // Redirecciones de tags específicos (sin patrones dinámicos)
    '/tags': '/es/etiquetas',
    '/etiquetas': '/es/etiquetas'
  },
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
      prefixDefaultLocale: true,
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
