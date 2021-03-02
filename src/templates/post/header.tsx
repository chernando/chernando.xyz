import React from "react"
import { format, parseISO } from "date-fns"
import Img from "gatsby-image"

import { PageImage } from "../../types"

interface HeaderProps {
  title: string
  datePublished: string
  dateModified?: string
  image: PageImage
  timeToRead: number
}

export default function Header({
  title,
  datePublished,
  dateModified,
  image,
  timeToRead,
}: HeaderProps) {
  const date = format(parseISO(dateModified ?? datePublished), "yyyy-MM-dd")
  const imageFluid = image.contentUrl.childImageSharp.fluid
  const imageTitle = image.author
    ? `${image.author} on ${image.isBasedOn}`
    : undefined

  return (
    <header>
      <h1 className="text-2xl md:text-3xl font-extrabold">
        {title}
      </h1>
      <p
        className="text-sm font-light"
      >
        {date} - {timeToRead} minutos
      </p>
      <div
        className="rounded max-w-prose my-4"
      >
        <Img
          className="rounded"
          fluid={imageFluid}
          alt={image.description}
          title={imageTitle}
        />
      </div>
    </header>
  )
}
