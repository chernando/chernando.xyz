import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { Preview } from "../types"

export default function PageProview({ preview }: { preview: Preview }) {
  return (
    <div
      className="mb-8 flex-none sm:flex sm:flex-row md:flex-none md:flex-col"
    >
      <Img
        className="rounded w-min sm:flex-none"
        fixed={preview.imageFixed}
        alt={preview.imageDescription}
      />
      <div
        className="flex-grow pl-0 sm:pl-4 md:pl-0"
      >
        <h3
          className="text-xl font-bold"
        >
          <Link to={preview.slug}>{preview.title}</Link>
        </h3>
        <p>{preview.description}</p>
      </div>
    </div>
  )
}
