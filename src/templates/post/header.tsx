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
      <h1>{title}</h1>
      <p>
        {date} - {timeToRead} minutos
      </p>
      <Img
        fluid={imageFluid}
        alt={image.description}
        title={imageTitle}
      />
    </header>
  )
}
