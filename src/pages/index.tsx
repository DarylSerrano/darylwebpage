import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import Main from "../components/main"
import SEO from "../components/seo"

export default function IndexRoute(props: PageProps) {
  return (
    <Layout>
      <SEO title="Index" description="Webpage of Daryl Serrano Hipólito"></SEO>
      <Main />
    </Layout>
  )
}
