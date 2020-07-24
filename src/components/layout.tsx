import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./header"
import Footer from "./footer"

type LayoutProps = {
  children: React.ReactNode
  path: string
}

export default function Layout({ children, path }: LayoutProps) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header path={path} />
      {children}
      <Footer />
    </>
  )
}
