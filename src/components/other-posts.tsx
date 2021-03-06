import React from "react"
import { Link } from "gatsby"

import { Post } from "../types"

interface OtherPostsProps {
  next?: Post
  previous?: Post
}

export default function OtherPosts({ next, previous }: OtherPostsProps) {
  return (
    <nav
      className="mt-4"
    >
      <ul>
        <li>
          {previous && (
            <Link
              to={previous.fields.slug}
              rel="prev"
            >
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li
          className="text-right"
        >
          {next && (
            <Link
              to={next.fields.slug}
              rel="next"
            >
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}
