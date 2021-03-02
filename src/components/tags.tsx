import React from "react"
import { Link } from "gatsby"

interface TagsProps {
  tags: string[]
}

export default function Tags({ tags }: TagsProps) {
  return (
    <ul
      className="flex"
    >
      {tags.map(renderTag)}
    </ul>
  )
}

function renderTag(tag: string, index: number) {
  return (
    <li
      key={index}
      className="rounded px-4 py-2 mr-4 bg-green-400 font-bold"
    >
      <Link to={`/tags/${tag}/`}>#{tag}</Link>
    </li>
  )
}
