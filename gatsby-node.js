const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value
    })
  } else if (node.internal.type === `TransparenciasYaml`) {
    const value = `/slides/${node.slug}/`
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const postTemplate = path.resolve('./src/templates/post/index.tsx')
  const slidesTemplate = path.resolve(`./src/templates/slides/index.tsx`)

  const result = await graphql(`
    query Posts {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___datePublished }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      allTransparenciasYaml(sort: { fields: datePublished, order: DESC }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: postTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next
      }
    })
  })

  // Create slides pages
  result.data.allTransparenciasYaml.edges.forEach(edge => {
    createPage({
      path: edge.node.fields.slug,
      component: slidesTemplate,
      context: {
        id: edge.node.id,
      },
    })
  })
}
