import React from "react"
import { PageProps, graphql } from "gatsby"

import { Layout, PagePreviewList } from "../components"
import { HomePageQuery } from "../types/graphql-types"

type HomePageProps = PageProps<HomePageQuery>

export default function HomePage({ data }: HomePageProps) {
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
          title="Blog"
          previews={posts}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomePage {
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
            description
            image {
              description
              contentUrl {
                childImageSharp {
                  fixed(width: 320, height: 179) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
