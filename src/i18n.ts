export const i18n = {
  defaultLocale: 'es',
  locales: ['es', 'en'],
  strings: {
    es: {
      skipToContent: 'Saltar al contenido principal',
      home: 'Inicio',
      articles: 'Artículos',
      tags: 'Etiquetas',
      builtWith: 'Construido con',
      readingTime: 'min de lectura',
      updated: 'Actualizado',
      latest: 'Últimos',
      goToHomepage: 'Ir a la página de inicio',
      mainNavigation: 'Navegación principal',
      blogPosts: 'Artículos del blog',
      articleTags: 'Etiquetas del artículo',
      noArticles: 'No hay artículos disponibles aún. ¡Vuelve pronto!',
      viewAllArticles: 'Ver todos los artículos'
    },
    en: {
      skipToContent: 'Skip to main content',
      home: 'Home',
      articles: 'Articles',
      tags: 'Tags',
      builtWith: 'Built with',
      readingTime: 'min read',
      updated: 'Updated',
      latest: 'Latest',
      goToHomepage: 'Go to homepage',
      mainNavigation: 'Main navigation',
      blogPosts: 'Blog posts',
      articleTags: 'Article tags',
      noArticles: 'No posts available yet. Check back soon!',
      viewAllArticles: 'View all articles'
    }
  }
} as const;

export type Locale = keyof typeof i18n.strings;
export type TranslationKey = keyof typeof i18n.strings['es'];

export function t(locale: Locale, key: TranslationKey): string {
  return i18n.strings[locale][key];
}