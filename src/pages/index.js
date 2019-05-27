import React from "react"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import FeaturedTours from "../components/Home/FeaturedTours"
export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.homeImage.childImageSharp.fluid}>
      <Banner
        title="continue exploring"
        info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, suscipit."
      >
        <AniLink fade to="/tours" className="btn-white">
          Explore Tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
)

export const query = graphql`
  query {
    homeImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
