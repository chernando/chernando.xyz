export const siteConfig = {
  title: 'chernando.xyz',
  author: 'Carlos Hernando',
  url: 'https://chernando.xyz',

  descriptions: {
    en: "Technical leader with 17+ years applying the 'Problem, Solution, Tool' philosophy in startup environments. Head of Engineering at Invofox (YC S22) sharing insights on technical leadership and engineering teams.",
    es: "Líder técnico con 17+ años aplicando la filosofía 'Problema, Solución, Herramienta' en entornos de startup. Head of Engineering en Invofox (YC S22) compartiendo insights sobre liderazgo técnico y equipos de ingeniería."
  },

  rss: {
    en: {
      title: 'Carlos Hernando | Problem, Solution, Tool (English)',
      language: 'en-us'
    },
    es: {
      title: 'Carlos Hernando | Problema, Solución, Herramienta (Español)',
      language: 'es-es'
    }
  }
} as const;

export type SiteConfig = typeof siteConfig;
export type SupportedLanguage = keyof typeof siteConfig.descriptions;
