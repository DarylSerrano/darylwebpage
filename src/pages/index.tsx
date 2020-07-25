import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import Main from "../components/main"
import SEO from "../components/seo"

export default function IndexRoute(props: PageProps) {
  return (
    <Layout path={props.path}>
      <SEO
        title="Index"
        description="Index of portfolio webpage of Daryl Serrano Hipólito"
      ></SEO>
      <Main />
    </Layout>
  )
}
