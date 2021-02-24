import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { Preview } from "../types"

export default function PageProview({ preview }: { preview: Preview }) {
  return (
    <>
      <h3>
        <Link to={preview.slug}>{preview.title}</Link>
      </h3>
      <Img
        fixed={preview.imageFixed}
        alt={preview.imageDescription}
      />
      <p>{preview.description}</p>
    </>
  )
}
