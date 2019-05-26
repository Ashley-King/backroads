import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
export default () => (
  <>
    <Layout>
      <SimpleHero>
        <Banner
          title="continue exploring"
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, suscipit."
        >
         <Link to='/tours' className='btn-white'>Explore Tours</Link>
        </Banner>
      </SimpleHero>
      Hello from Index. Go to <Link to="/blog">the Blog.</Link>
    </Layout>
  </>
)
