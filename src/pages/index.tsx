import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import Main from "../components/main"

export default function IndexRoute(props: PageProps) {
  console.log(props.path)
  return (
    <Layout path={props.path}>
      <Main />
    </Layout>
  )
}
