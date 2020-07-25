import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import SEO from "../components/seo"

export default function PortfolioRoute(props: PageProps) {
  return (
    <Layout path={props.path}>
      <SEO title="Portfolio"></SEO>
      <Portfolio></Portfolio>
    </Layout>
  )
}
