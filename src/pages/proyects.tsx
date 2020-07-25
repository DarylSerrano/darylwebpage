import React from "react"

import Layout from "../components/layout"
import Proyects from "../components/poyects"
import SEO from "../components/seo"

type ProyectsPageProps = {
  path: string
}

const ProyectsPage = ({ path }: ProyectsPageProps) => {
  return (
    <Layout path={path}>
      <SEO title="Proyects"></SEO>
      <Proyects></Proyects>
    </Layout>
  )
}

export default ProyectsPage
