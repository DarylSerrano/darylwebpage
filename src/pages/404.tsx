import React from "react"

import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import IconButton from "@material-ui/core/IconButton"

import { AiFillHome } from "react-icons/ai"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ path }) => (
  <Layout>
    <SEO title="Not found"></SEO>
    <CssBaseline></CssBaseline>
    <Container fixed>
      <Typography variant="h1" gutterBottom>
        404
        </Typography>
      <Typography variant="h2" gutterBottom>
        PAGE NOT FOUND
        </Typography>
      <IconButton href={`/`}>
        <AiFillHome size={32} />
      </IconButton>
    </Container>
  </Layout>
)

export default NotFoundPage
