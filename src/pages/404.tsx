import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert"
import Jumbotron from "react-bootstrap/Jumbotron"

const NotFoundPage = ({ path }) => (
  <Layout path={path}>
    <Jumbotron style={{ height: "100vh" }}>
      <Container fluid style={{ height: "100vh" }}>
        <SEO title="Not found"></SEO>
        <Alert variant="danger">
          <Alert.Heading>NOT FOUND</Alert.Heading>
          <p>You just hit a route that doesn&#39;t exist....</p>
        </Alert>
      </Container>
    </Jumbotron>
  </Layout>
)

export default NotFoundPage
