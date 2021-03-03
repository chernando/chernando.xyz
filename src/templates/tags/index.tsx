import React from "react"
import { graphql, PageProps } from "gatsby"

import { Layout, PagePreviewList, SEO } from "../../components"
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
    image: edge.node.frontmatter.image?.contentUrl?.childImageSharp?.gatsbyImageData,
    imageDescription: edge.node.frontmatter.image.description,
  }))

  return (
    <>
      <SEO
        excerpt={`Artículos publicados con la etiqueta #${pageContext.tag}.`}
        pageInfo={{
          title: `#${pageContext.tag}`,
        }}
        slug={`/tags/${pageContext.tag}/`}
      />
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
    </>
  )
}

export const query = graphql`
  query PostsByTag($posts: [String]!) {
    allMarkdownRemark(
    filter: {fields: {slug: {in: $posts}}}
    sort: {order: DESC, fields: frontmatter___datePublished}
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            image {
              contentUrl {
                childImageSharp {
                  gatsbyImageData(placeholder: TRACED_SVG)
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
