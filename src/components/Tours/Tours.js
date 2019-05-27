import React from "react"
import TourList from "./TourList"
import { useStaticQuery, graphql } from "gatsby"

const getTours = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          contentful_id
          name
          price
          slug
          country
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default function Tours({ data }) {
  const { tours } = useStaticQuery(getTours)
  return <TourList tours={tours} />
}
