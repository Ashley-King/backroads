import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const getDefaultImg = graphql`
  query {
    allFile(filter: { relativePath: { eq: "defaultBcg.jpeg" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
const StyledHero = ({ children, img, className, home }) => {
  const data = useStaticQuery(getDefaultImg)
  const defaultImg = data.allFile.edges[0].node.childImageSharp.fluid
  return (
    <BackgroundImage
      className={className}
      fluid={img || defaultImg}
      home={home}
    >
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
      : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
