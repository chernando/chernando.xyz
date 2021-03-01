import React from "react"

import { Bio, OtherPosts, Tags } from "../../components"
import { Post } from "../../types"

interface FooterProps {
  post: Post
  next?: Post
  previous?: Post
}

export default function Footer({ next, post, previous }: FooterProps) {
  return (
    <footer>
      <Tags tags={post.frontmatter.tags ?? []} />
      <Bio />
      <OtherPosts next={next} previous={previous} />
    </footer>
  )
}
