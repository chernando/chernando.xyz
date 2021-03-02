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
  const tagsTemplate = path.resolve(`./src/templates/tags/index.tsx`)

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
              tags
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

  // Create tags pages
  const tags = new Set()
  const postInTag = {}

  posts.forEach(post => {
    if (post.node.frontmatter.tags) {
      post.node.frontmatter.tags.forEach(tag => {
        tags.add(tag)

        if (postInTag[tag]) {
          postInTag[tag].push(post.node.fields.slug)
        } else {
          postInTag[tag] = [post.node.fields.slug]
        }
      })
    }
  })

  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag}/`,
      component: tagsTemplate,
      context: {
        tag,
        posts: postInTag[tag],
      },
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
