import React from "react"
import { Helmet } from "react-helmet"

interface SchemaProps {
  author: {
    name: string
  }
  siteUrl: string
  datePublished: string
  dateModified: string
  defaultTitle: string
  description: string
  image: string
  isBlogPost: boolean
  organization: {
    logo: string
    name: string
    url: string
  }
  title: string
  url: string
}

function Schema({
  author,
  siteUrl,
  datePublished,
  dateModified,
  defaultTitle,
  description,
  image,
  isBlogPost,
  organization,
  title,
  url,
}: SchemaProps) {
  const baseSchema = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url,
      name: title,
      alternateName: defaultTitle,
    },
  ]

  const schema = isBlogPost
    ? [
        ...baseSchema,
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url,
          name: title,
          alternateName: defaultTitle,
          headline: title,
          image: {
            "@type": "ImageObject",
            url: image,
          },
          description,
          author: {
            "@type": "Person",
            name: author.name,
          },
          publisher: {
            "@type": "Organization",
            url: organization.url,
            logo: {
              "@type": "ImageObject",
              url: organization.logo,
            },
            name: organization.name,
          },
          mainEntityOfPage: {
            "@type": "WebSite",
            "@id": siteUrl,
          },
          datePublished,
          dateModified,
        },
      ]
    : baseSchema

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default React.memo(Schema)
