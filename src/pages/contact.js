import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
const contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.contactImage.childImageSharp.fluid} />
    </Layout>
  )
}

export default contact

export const query = graphql`
  query {
    contactImage: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
