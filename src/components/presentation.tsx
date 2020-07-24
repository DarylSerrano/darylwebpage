import React from "react"
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"

export default function Presentation() {
  return (
    <Jumbotron className="vertical-center text-center">
      <Container>
        <h1 className="jumbotron-heading">Daryl Serrano Hipólito</h1>

        <p className="lead text-muted">
          I am a Computer Scientist interested on frontend, backend and DevOps
          culture
        </p>
        <ButtonGroup>
          <Button size="lg" variant="link" className="my-2">
            <AiFillGithub size={32} />
          </Button>
          <Button size="lg" variant="link" className="my-2">
            <AiFillLinkedin size={32} />
          </Button>
          <Button size="lg" variant="link" className="my-2">
            <AiFillMail size={32} />
          </Button>
        </ButtonGroup>
      </Container>
    </Jumbotron>
  )
}
