import React from "react"

import Layout from "../components/layout"
import Proyects from "../components/poyects"

type ProyectsPageProps = {
  path: string
}

const ProyectsPage = ({ path }: ProyectsPageProps) => {
  console.log(path)
  return (
    <Layout path={path}>
      <Proyects></Proyects>
    </Layout>
  )
}

export default ProyectsPage
