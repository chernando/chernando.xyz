import React from "react"
import { graphql, PageProps } from "gatsby"

import { Layout, SEO } from "../../components"
import Footer from "./footer"
import Header from "./header"

import { SlideBySlugQuery } from "../../types/graphql-types"

export default function Slide({
  data: { transparenciasYaml: slide },
}: PageProps<SlideBySlugQuery>) {
  return (
    <>
      <SEO
        excerpt={slide.description}
        pageInfo={{
          title: `${slide.title}`,
        }}
        slug={slide.fields.slug}
      />
      <Layout>
        <section
          className="container mx-auto p-4"
        >
          <Header {...slide} />
          <div
            style={{
              left: 0,
              width: "100%",
              height: 0,
              position: "relative",
              paddingBottom: "56.1972%",
            }}
          >
            <iframe
              title={slide.id}
              src={`https://speakerdeck.com/player/${slide.id}`}
              style={{
                border: 0,
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                position: "absolute",
              }}
              allowFullScreen
              scrolling="no"
              allow="encrypted-media"
            ></iframe>
          </div>
          <Footer />
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query SlideBySlug($id: String) {
    transparenciasYaml(id: { eq: $id }) {
      datePublished(formatString: "yyyy-MM-DD")
      description
      fields {
        slug
      }
      id
      title
      type
      url
    }
  }
`
