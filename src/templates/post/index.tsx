import React from "react"
import { graphql, PageProps } from "gatsby"
import { getSrc } from "gatsby-plugin-image"

import { Bio, Layout, SEO } from "../../components"
import { PostContext } from "../../types"
import { PostBySlugQuery } from "../../types/graphql-types"
import Header from "./header"
import Footer from "./footer"

type PostProps = PageProps<PostBySlugQuery, PostContext>;

export default function Post({
  data: { markdownRemark: post },
  pageContext,
}: PostProps) {
  const image = getSrc(post.frontmatter.image.contentUrl.childImageSharp.gatsbyImageData)

  return (
    <>
      <SEO
        pageInfo={post.frontmatter}
        image={image}
        kind="post"
        slug={pageContext.slug}
        excerpt={post.excerpt}
      />
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
          <div
            className="lg:flex lg:justify-space-between"
          >
            <main
              className="prose"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <aside
              className="max-w-prose lg:flex-grow lg:max-h-screen lg:-mt-4 lg:pl-4 lg:sticky lg:top-0"
            >
              <Bio />
            </aside>
          </div>
          <Footer
            post={post}
            next={pageContext.next}
            previous={pageContext.previous}
          />
        </article>
      </Layout>
    </>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
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
              gatsbyImageData(width: 700, placeholder: TRACED_SVG, layout: CONSTRAINED)
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
