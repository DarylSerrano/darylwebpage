import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"
import Jumbotron from "react-bootstrap/Jumbotron"

export default function Portfolio() {
  const { allPortfolioDataJson } = useStaticQuery(graphql`
    query {
      allPortfolioDataJson {
        nodes {
          company
          description
          job
        }
      }
    }
  `)

  console.log(allPortfolioDataJson)

  return (
    <Jumbotron style={{ height: "100vh" }}>
      <Container fluid>
        <h2 className="jumbotron-heading">Job experience</h2>
        {allPortfolioDataJson.nodes.map(jobInfo => {
          return (
            <Container>
              <h5>{jobInfo.job}</h5>
              <h6>{jobInfo.company}</h6>
              <p>{jobInfo.description}</p>{" "}
            </Container>
          )
        })}
      </Container>
    </Jumbotron>
  )
}
