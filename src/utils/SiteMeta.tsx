import React, { ReactNode } from "react"
import { Helmet } from "react-helmet"
import { useGAPage } from "./useGAPage"

interface SiteMetaProps {
  url: string
  title: string
  description: string
  children: ReactNode
  type: "website" | "article"
  robots: string
  author?: string
  image?: string
}

export const SiteMeta = ({
  children,
  title,
  description,
  type,
  robots,
  author,
  url,
  image,
}: SiteMetaProps) => {
  useGAPage(url)

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en-US" }}>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="parsely-title" content={title}></meta>
        <meta name="twitter:title" content={title}></meta>

        <meta name="description" content={description} />
        <meta property="og:description" content={description}></meta>
        <meta name="twitter:description" content={description}></meta>

        <meta property="og:site_name" content="GreenOn Software"></meta>

        <meta property="og:type" content={type}></meta>
        <meta name="robots" content={robots}></meta>

        <meta property="og:locale" content="en_US"></meta>

        <meta
          property="og:url"
          content={`https://greenonsoftware.com/${url}`}
        ></meta>
        <meta
          name="parsely-link"
          content={`https://greenonsoftware.com/${url}`}
        ></meta>

        {image && (
          <>
            <meta property="og:image" content={image}></meta>
            <meta property="og:image:secure_url" content={image}></meta>
            <meta name="msapplication-TileImage" content={image}></meta>
            <meta name="twitter:image" content={image}></meta>
          </>
        )}
        {author && (
          <>
            <meta name="author" content={author}></meta>
          </>
        )}
      </Helmet>
      {children}
    </>
  )
}
