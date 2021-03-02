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

  const slides = data.allTransparenciasYaml.edges.map(edge => ({
    title: edge.node.title,
    slug: edge.node.fields.slug,
    description: edge.node.description,
    imageFixed: edge.node.contentUrl.childImageSharp.fixed,
    imageDescription: `Portada de la charla ${edge.node.title}`,
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
        <PagePreviewList
          title="Transparencias"
          previews={slides}
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
    allTransparenciasYaml(sort: { fields: datePublished, order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          description
          title
          contentUrl {
            childImageSharp {
              fixed(width: 320, height: 179) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  }
`
