module.exports = {
  siteMetadata: {
    title: 'Problema, Solución, Herramienta',
    description: `
      Carlos Hernando, ingeniero de software por formación y emprendedor por el hado, se dedica a facilitar los cosas a los demás siempre con buen humor.
      Este sitio web recopila sus aprendizajes, reflexiones e historias.
    `,
    siteUrl: 'https://chernando.xyz',
    image: 'https://chernando.xyz/chernando.jpg',
    social: {
      twitter: '@chernando'
    },
    author: {
      name: 'Carlos Hernando'
    },
    organization: {
      name: 'Carlos Hernando',
      url: 'https://chernando.xyz/',
      logo: 'https://chernando.xyz/chernando.jpg'
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './content/data/'
      },
      __key: 'data'
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              prompt: {
                user: 'u',
                global: true
              }
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-remark-embedder'
          },
          'gatsby-remark-responsive-iframe'
        ]
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: `${site.siteMetadata.siteUrl}${edge.node.path}`
            }
          })
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        feeds: [
          {
            title: 'Problema, Solución, Herramienta',
            output: '/rss.xml',
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const post = edge.node

                return Object.assign(
                  {},
                  {
                    title: post.frontmatter.title,
                    description: post.frontmatter.description || post.excerpt,
                    guid: site.siteMetadata.siteUrl + post.fields.slug,
                    url: site.siteMetadata.siteUrl + post.fields.slug,
                    date: post.frontmatter.datePublished,
                    custom_elements: [{ 'content:encoded': post.html }]
                  }
                )
              })
            },
            query: `
              {
                site {
                  siteMetadata {
                    siteUrl
                  }
                }
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___datePublished] },
                ) {
                  edges {
                    node {
                      frontmatter {
                        title
                        datePublished
                      }
                      fields {
                        slug
                      }
                      excerpt
                      html
                    }
                  }
                }
              }
            `
          }
        ]
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        codegen: false, // XXX Only when needed
        fileName: './src/types/graphql-types.ts'
      }
    },
    'gatsby-redirect-from',
    'gatsby-plugin-meta-redirect',
    'gatsby-plugin-netlify',
    'gatsby-plugin-preact'
  ]
}
