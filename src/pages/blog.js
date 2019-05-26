import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogImage.childImageSharp.fluid} />
    </Layout>
  )
}

export default blog

export const query = graphql`
  query {
    blogImage: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
