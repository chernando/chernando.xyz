import { IGatsbyImageData } from "gatsby-plugin-image";

import { PostBySlugQuery } from "./graphql-types"

export interface Preview {
  slug: string
  title: string
  description: string
  image: IGatsbyImageData
  imageDescription: string
}

export interface PageImage {
  contentUrl?: {
    childImageSharp?: {
      gatsbyImageData?: IGatsbyImageData
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

export interface TagContext {
  tag: string,
  posts: Post[],
}
