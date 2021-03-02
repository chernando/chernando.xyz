import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaSpeakerDeck,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"

import { SiteLayoutQuery } from "../types/graphql-types"

export default function Layout({ children }) {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SiteLayoutQuery>(graphql`
    query SiteLayout {
      site {
        siteMetadata {
          title
          siteUrl
          author {
            name
          }
        }
      }
    }
  `)

  return (
    <>
      <Header title={siteMetadata.title} />
      <main>
        {children}
      </main>
      <Footer
        authorName={siteMetadata.author.name}
        siteUrl={siteMetadata.siteUrl}
      />
    </>
  )
}

function Header({ title }) {
  return (
    <header
      className="p-4 text-white bg-green-700 flex justify-between"
    >
      <h1
        className="font-serif text-lg md:text-2xl font-semibold"
        >
        <Link to="/">{title}</Link>
      </h1>
      <nav
        className="hidden md:block"
      >
        <ul
          className="flex"
        >
          <li
            className="ml-4"
          >
            <Link to="/#blog">Blog</Link>
          </li>
          <li
            className="ml-4"
          >
            <Link to="/#transparencias">Transparencias</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

function Footer({ authorName, siteUrl }) {
  const today = new Date()

  return (
    <footer
      className="mt-4 p-4 text-white bg-green-700"
    >
      <p
        className="font-lg font-semibold"
      >
        <Link to="/">{authorName} - {siteUrl}</Link>
      </p>
      <ul
        className=""
      >
        <li className="inline-block mr-6">
          <Link to={siteUrl}><FaHome className="inline" /> web</Link>
        </li>
        <li className="inline-block mr-6">
          <a href="https://twitter.com/chernando"><FaTwitter className="inline" /> twitter</a>
        </li>
        <li className="inline-block mr-6">
          <a href="https://linkedin.com/in/chernando"><FaLinkedin className="inline" /> linkedin</a>
        </li>
        <li className="inline-block mr-6">
          <a href="https://speakerdeck.com/chernando"><FaSpeakerDeck className="inline" /> speaker deck</a>
        </li>
        <li className="inline-block mr-6">
          <a href="https://www.youtube.com/channel/UCj1-rkHrxxxstYDfJEnApqw/"><FaYoutube className="inline" /> youtube</a>
        </li>
        <li className="inline-block">
          <a href="https://github.com/chernando"><FaGithub className="inline" /> github</a>
        </li>
      </ul>
      <div
        className="pt-2 text-xs"
      >
        <p>
          © 2001-{today.getFullYear()}, Carlos Hernando. Esta página está licenciada bajo <Link to="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</Link>. Las imágenes pertenecen a sus respectivos autores.
        </p>
      </div>
    </footer>
  )
}
