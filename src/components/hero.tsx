import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Hero() {
  return (
    <div className="relative">
      <StaticImage
        className="rounded"
        src="../images/chernando-en-google-campus-madrid.jpeg"
        alt="Carlos Hernando dando una charla en Google Campus Madrid"
        quality={75}
        placeholder="dominantColor"
        layout="fullWidth"
      />
      <div className="sm:bg-green-700 sm:text-white sm:rounded py-2 sm:p-4 sm:absolute sm:bottom-5 md:bottom-10 sm:left-5 md:left-10 sm:w-4/5 md:w-3/5 leading-7 sm:font-semibold sm:bg-opacity-50 space-y-2">
        <p>Analizo problemas, diseño soluciones e implemento herramientas. Me apasiona el software empezando por el usuario y terminando en la infraestructura.</p>
        <p>Ayudo a startups desde <a className="underline" href="https://www.tetuanvalley.com">Tetuan Valley</a> y soy Premiado de <a className="underline" href="https://www.netmentora.org/madrid/">Netmentora</a>.</p>
      </div>
    </div>
  )
}
