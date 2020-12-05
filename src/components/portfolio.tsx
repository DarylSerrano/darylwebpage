import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { MdWork } from "react-icons/md"

import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

type PortfolioQuery = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          html: string
          frontmatter: {
            company: string
            position: string
            startDate: string
            endDate: string
          }
        }
      }
    ]
  }
}

export default function Portfolio() {
  const { allMarkdownRemark }: PortfolioQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "experiences" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              company
              position
              startDate
              endDate
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <CssBaseline></CssBaseline>
      <Container fixed>
        <Typography variant="h2">Job experience</Typography>
        <VerticalTimeline animate={false} layout="1-column">
          {allMarkdownRemark.edges.map(edge => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={`${edge.node.frontmatter.startDate} - ${edge.node.frontmatter.endDate}`}
                icon={<MdWork />}
              >
                <h3 className="vertical-timeline-element-title">
                  {edge.node.frontmatter.position}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {edge.node.frontmatter.company}
                </h4>
                <div dangerouslySetInnerHTML={{ __html: edge.node.html }}></div>
              </VerticalTimelineElement>
            )
          })}
        </VerticalTimeline>
      </Container>
    </>
  )
}
