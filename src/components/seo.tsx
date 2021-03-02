import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import { Post } from "../types"
import SchemaOrg from "./schema-org"

const TYPES_FOR = {
  post: "article",
  website: "website",
}

interface SEOProps {
  excerpt?: string
  pageInfo?: Post["frontmatter"],
  image?: string
  kind?: "post" | "website"
  slug?: string
}

export default function SEO({
  excerpt,
  pageInfo,
  image,
  kind,
  slug,
}: SEOProps) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          author {
            name
          }
          organization {
            name
            url
            logo
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const title =
    pageInfo?.title ?? `${siteMetadata.title} - ${siteMetadata.author.name}`
  const description =
    pageInfo?.description ?? (excerpt || siteMetadata.description)
  image = image ? `${siteMetadata.siteUrl}${image}` : siteMetadata.image
  const url = slug ? `${siteMetadata.siteUrl}${slug}` : siteMetadata.siteUrl
  const datePublished = kind === "post" ? pageInfo.datePublished : undefined
  const dateModified = pageInfo?.dateModified ?? datePublished

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "es",
        }}
      >
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <link rel="canonical" href={url} />

        <meta property="og:url" content={url} />
        {TYPES_FOR[kind] ? (
          <meta property="og:type" content={`${TYPES_FOR[kind]}`} />
        ) : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={siteMetadata.social.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <SchemaOrg
        isBlogPost={kind === "post"}
        url={url}
        title={title}
        image={image}
        description={description}
        datePublished={datePublished}
        dateModified={dateModified}
        siteUrl={siteMetadata.siteUrl}
        author={siteMetadata.author}
        organization={siteMetadata.organization}
        defaultTitle={siteMetadata.title}
      />
    </>
  )
}
