import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Navbar from "react-bootstrap/Navbar"

export default function Footer() {
  return (
    <Navbar sticky="bottom" expand="lg" variant="dark" bg="dark">
      <Container fluid className="text-light text-center text-md-left">
        <Row>
          <Col md="6">
            <h5 className="title">About me</h5>
            <p>
              I am a Computer Scientist interested on frontend, backend and
              DevOps culture
            </p>
          </Col>
          <Col md="3">
            <p>Made with Gatsby, you can find the code here</p>
          </Col>
          <Col md="3">
            <p>
              © {new Date().getFullYear()} Copyright:{" "}
              <a href="mailto:darylserrano39@gmail.com">
                Daryl Serrano Hipolito
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}
