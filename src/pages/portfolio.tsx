import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"

export default function PortfolioRoute(props: PageProps) {
  console.log(props.path)
  return (
    <Layout path={props.path}>
      <Portfolio></Portfolio>
    </Layout>
  )
}
