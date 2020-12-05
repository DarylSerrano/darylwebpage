import React from "react"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import IconButton from "@material-ui/core/IconButton"
import { useStaticQuery, graphql } from "gatsby"
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"

import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

type SocialInfo = {
  dataJson: {
    linkedin: string
    repoUrl: string
    github: string
    email: string
  }
}

export default function Presentation() {
  const { dataJson }: SocialInfo = useStaticQuery(graphql`
    query MyQuery {
      dataJson {
        linkedin
        repoUrl
        github
        email
      }
    }
  `)

  return (
    <>
      <CssBaseline />
      <Container fixed style={{textAlign: "center"}}>
        <Typography variant="h2" gutterBottom>
          Hi, I'm Daryl Serrano Hipólito
        </Typography>

        <Typography variant="body1" gutterBottom>
          I am a Computer Engineer interested on frontend, backend and DevOps
          culture
        </Typography>

        <ButtonGroup disableElevation>
          <IconButton href={dataJson.github}>
            <AiFillGithub size={32} />
          </IconButton>
          <IconButton href={dataJson.linkedin}>
            <AiFillLinkedin size={32} />
          </IconButton>
          <IconButton href={`mailto:${dataJson.email}`}>
            <AiFillMail size={32} />
          </IconButton>
        </ButtonGroup>
      </Container>
    </>
  )
}
