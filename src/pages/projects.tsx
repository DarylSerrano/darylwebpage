import React from "react"

import Layout from "../components/layout"
import Projects from "../components/pojects"
import SEO from "../components/seo"

type ProjectsPageProps = {
  path: string
}

const ProjectsPage = ({ path }: ProjectsPageProps) => {
  return (
    <Layout>
      <SEO title="Proyects"></SEO>
      <Projects></Projects>
    </Layout>
  )
}

export default ProjectsPage
