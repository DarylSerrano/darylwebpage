import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { MdWork } from "react-icons/md"

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
        <VerticalTimeline layout="1-column">
          {allPortfolioDataJson.nodes.map(jobInfo => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2011 - present"
                icon={<MdWork />}
              >
                <h3 className="vertical-timeline-element-title">
                  {jobInfo.job}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {jobInfo.company}
                </h4>
                <p>{jobInfo.description}</p>
              </VerticalTimelineElement>
            )
          })}
        </VerticalTimeline>
      </Container>
    </Jumbotron>
  )
}
