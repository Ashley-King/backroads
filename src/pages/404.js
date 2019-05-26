import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="deadend dude. let's head back.">
          <AniLink fade to="/" className="btn-white">
            Back Home
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
