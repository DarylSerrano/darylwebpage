import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ path }) => (
  <Layout path={path}>
    <SEO title="Daryl Serrano Hpólito - Not found"></SEO>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist....</p>
  </Layout>
)

export default NotFoundPage
