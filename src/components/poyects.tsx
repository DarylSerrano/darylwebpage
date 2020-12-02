import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

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

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

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

  const classes = useStyles()

  return (
    <>
      {allMarkdownRemark.edges.map(edge => (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {edge.node.frontmatter.title}
            </Typography>
            <Typography variant="body2" component="p">
              {edge.node.frontmatter.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button href={edge.node.frontmatter.url} size="small">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  )
}
