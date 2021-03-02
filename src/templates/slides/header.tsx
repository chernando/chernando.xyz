import React from "react"
import { Link } from "gatsby"
import { FaSpeakerDeck } from "react-icons/fa"

import { SlideBySlugQuery } from "../../types/graphql-types"

type HeaderProps = Partial<SlideBySlugQuery["transparenciasYaml"]>

export default function Header({
  title,
  description,
  datePublished,
  url
}: HeaderProps) {
  return (
    <>
      <header
        className="mt-4"
      >
        <h1 className="text-2xl md:text-3xl font-extrabold">
          {title}
        </h1>
        <p
          className="text-sm font-light"
        >
          {datePublished} -{" "}
          <Link to={url}>Publicada en <FaSpeakerDeck className="inline"/></Link>
        </p>
      </header>
      <p
        className="mb-4"
      >
        {description}
      </p>
    </>
  )
}
