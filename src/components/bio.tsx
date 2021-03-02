import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"

export default function Bio() {
  const {
    file: avatar,
  } = useStaticQuery(graphql`
    query BioQuery {
      file(relativePath: { eq: "chernando.jpg" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <div
      className="rounded shadow p-4 my-4"
    >
      <Image
        className="rounded-full border float-left mr-2"
        fixed={avatar.childImageSharp.fixed}
        alt="Carlos Hernando"
      />
      <p
        className="font-semibold"
      >
        Carlos Hernando
      </p>
      <p
        className="text-sm text-gray-600"
      >
        Ingeniero de software bienhumorado 😄 que se dedica a hacer
        las cosa fáciles... a los demás 🙄.
      </p>
      <p
        className="text-sm text-gray-600 my-2"
      >
        Confundador de <a href="https://zenseiapp.com">Zensei</a>,
        secretario de <a href="https://www.tetuanvalley.com">Tetuan Valley</a>{' '} 
        y premiado de <a href="https://www.netmentora.org/madrid/">Netmentora Madrid</a>.
      </p>
      <ul
        className="text-3xl text-green-700 flex justify-center space-x-6"
      >
        <li className="">
          <a href="https://twitter.com/chernando"><FaTwitter className="inline" /></a>
        </li>
        <li className="">
          <a href="https://linkedin.com/in/chernando"><FaLinkedin className="inline" /></a>
        </li>
        <li className="">
          <a href="https://github.com/chernando"><FaGithub className="inline" /></a>
        </li>
      </ul>
    </div>
  )
}
