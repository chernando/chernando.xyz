import { FixedObject, FluidObject } from "gatsby-image"

import { PostBySlugQuery } from "./graphql-types"

export interface Preview {
  slug: string
  title: string
  description: string
  imageFixed: FixedObject
  imageDescription: string
}

export interface PageImage {
  contentUrl?: {
    childImageSharp?: {
      fluid?: FluidObject
    }
  }
  author?: string
  description?: string
  isBasedOn?: string
}

export type Post = PostBySlugQuery["markdownRemark"]

export interface PostContext {
  slug: string
  next?: Post
  previous?: Post
}
