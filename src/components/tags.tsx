import React from "react"
import { Link } from "gatsby"

interface TagsProps {
  tags: string[]
}

export default function Tags({ tags }: TagsProps) {
  return (
    <ul>
      {tags.map(renderTag)}
    </ul>
  )
}

function renderTag(tag: string, index: number) {
  return (
    <li
      key={index}
    >
      <Link to={`/tags/${tag}/`}>#{tag}</Link>
    </li>
  )
}
