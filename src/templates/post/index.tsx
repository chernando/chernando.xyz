import React from "react"
import { graphql, PageProps } from "gatsby"

import { Layout } from "../../components"
import { PostContext } from "../../types"
import { PostBySlugQuery } from "../../types/graphql-types"
import Header from "./header"
import Footer from "./footer"

type PostProps = PageProps<PostBySlugQuery, PostContext>;

export default function Post({
  data: { markdownRemark: post },
  pageContext,
}: PostProps) {
  return (
    <Layout>
      <article
        className="container mx-auto p-4"
      >
        <Header
          title={post.frontmatter.title}
          datePublished={post.frontmatter.datePublished}
          dateModified={post.frontmatter.dateModified}
          image={post.frontmatter.image}
          timeToRead={post.timeToRead}
        />
        <section
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Footer
          post={post}
          next={pageContext.next}
          previous={pageContext.previous}
        />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        datePublished
        dateModified
        tags
        image {
          contentUrl {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
          author
          description
          isBasedOn
        }
      }
      excerpt
      timeToRead
      html
    }
  }
`
