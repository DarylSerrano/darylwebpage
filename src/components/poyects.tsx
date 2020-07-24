import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "react-bootstrap/Card"
import CardColumns from "react-bootstrap/CardColumns"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"

type ProyectInfo = {
  image: string
  title: string
  description: string
  url: string
}

export default function Proyects() {
  const { allProyectsDataJson } = useStaticQuery(graphql`
    query {
      allProyectsDataJson {
        nodes {
          description
          image
          title
          url
        }
      }
    }
  `)

  return (
    <Jumbotron
      style={{ height: "100vh", paddingTop: "5%", paddingBottom: "5%" }}
    >
      <Container fluid>
        <CardColumns>
          {allProyectsDataJson.nodes.map((proyect: ProyectInfo) => (
            <Card>
              {proyect.image.includes("NO-IMAGE") ? null : (
                <Card.Img variant="top" src={proyect.image} />
              )}

              <Card.Body>
                <Card.Title>{proyect.title}</Card.Title>
                <Card.Text>{proyect.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </Container>
    </Jumbotron>
  )
}
