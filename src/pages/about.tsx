import React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"

export default function AboutRoute({ path, data }: PageProps) {
  return (
    <Layout path={path}>
      <h1>Path:</h1>
      <p>{path}</p>
      <div>About</div>
      <div>{JSON.stringify(data)}</div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
