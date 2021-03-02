import React from "react"
import { graphql, PageProps } from "gatsby"

import { Layout, PagePreviewList } from "../../components"
import { PostsByTagQuery } from "../../types/graphql-types"
import { TagContext } from "../../types"

export default function Tags({
  data,
  pageContext,
}: PageProps<PostsByTagQuery, TagContext>) {
  const posts = data.allMarkdownRemark.edges.map(edge => ({
    slug: edge.node.fields.slug,
    title: edge.node.frontmatter.title,
    description: edge.node.frontmatter.description ?? edge.node.excerpt,
    imageFixed: edge.node.frontmatter.image?.contentUrl?.childImageSharp?.fixed,
    imageDescription: edge.node.frontmatter.image.description,
  }))

  return (
    <Layout>
      <div
        className="container mx-auto p-4"
      >
        <PagePreviewList
          title={pageContext.tag}
          previews={posts}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostsByTag($posts: [String]!) {
    allMarkdownRemark(
      filter: { fields: { slug: { in: $posts } } }
      sort: { order: DESC, fields: frontmatter___datePublished }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            image {
              contentUrl {
                childImageSharp {
                  fixed(width: 320, height: 179) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
              author
              description
              isBasedOn
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
