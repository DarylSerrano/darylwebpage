import React from "react"
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { useStaticQuery, graphql } from "gatsby"
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"

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
    <Jumbotron className="vertical-center text-center">
      <Container>
        <h1 className="jumbotron-heading">Hi, I'm Daryl Serrano Hipólito</h1>

        <p className="lead text-muted">
          I am a Computer Scientist interested on web development, frontend,
          backend and DevOps culture
        </p>
        <ButtonGroup>
          <Button
            size="lg"
            variant="link"
            href={dataJson.github}
            className="my-2"
          >
            <AiFillGithub size={32} />
          </Button>
          <Button
            size="lg"
            href={dataJson.linkedin}
            variant="link"
            className="my-2"
          >
            <AiFillLinkedin size={32} />
          </Button>
          <Button
            size="lg"
            variant="link"
            href={`mailto:${dataJson.email}`}
            className="my-2"
          >
            <AiFillMail size={32} />
          </Button>
        </ButtonGroup>
      </Container>
    </Jumbotron>
  )
}
