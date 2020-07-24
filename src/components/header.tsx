import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

type HeaderProps = {
  path: string
}

export default function ({ path }: HeaderProps) {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/">Daryl</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav activeKey={path} className="mr-auto">
          <Nav.Link href="/proyects/">Proyects</Nav.Link>
          <Nav.Link href="/portfolio/">Portfolio</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
