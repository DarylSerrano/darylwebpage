import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"

type ProyectsQuery = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          frontmatter: {
            date: string
            description: string
            tags: string
            title: string
            url: string
          }
        }
      }
    ]
  }
}

export default function Proyects() {
  const { allMarkdownRemark }: ProyectsQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "proyect" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              description
              tags
              title
              url
            }
          }
        }
      }
    }
  `)

  console.log(allMarkdownRemark)

  return (
    <Jumbotron>
      <Container style={{ height: "100vh", paddingBottom: "5%" }} fluid>
        <CardDeck>
          {allMarkdownRemark.edges.map(edge => (
            <Card>
              <Card.Body>
                <Card.Title>{edge.node.frontmatter.title}</Card.Title>
                <Card.Text>{edge.node.frontmatter.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <small className="text-muted">
                  <Button variant="primary" href={edge.node.frontmatter.url}>
                    Go to code
                  </Button>
                </small>
              </Card.Footer>
            </Card>
          ))}
        </CardDeck>
      </Container>
    </Jumbotron>
  )
}
