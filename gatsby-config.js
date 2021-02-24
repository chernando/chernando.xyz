module.exports = {
  siteMetadata: {
    title: 'Problema, Solución, Herramienta'
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: './content/posts/'
      },
      __key: 'posts'
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        codegen: false, // XXX Only when needed
        fileName: './src/types/graphql-types.ts'
      }
    }
  ]
}
