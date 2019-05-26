import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
import { Link } from "gatsby"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="deadend dude. let's head back.">
          <Link to="/" className="btn-white">
            Back Home
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
