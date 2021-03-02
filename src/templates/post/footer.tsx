import React from "react"
import { FaTwitter } from "react-icons/fa"

import { OtherPosts, Tags } from "../../components"
import { Post } from "../../types"

interface FooterProps {
  post: Post
  next?: Post
  previous?: Post
}

export default function Footer({ next, post, previous }: FooterProps) {
  return (
    <footer>
      <p
        className="text-center text-green-600 m-4 max-w-prose"
      >
        <a href="https://twitter.com/chernando">
        Cuéntame qué te ha parecido en {' '}
        <FaTwitter className="inline" /> Twitter</a>
      </p>
      <Tags tags={post.frontmatter.tags ?? []} />
      <OtherPosts next={next} previous={previous} />
    </footer>
  )
}
