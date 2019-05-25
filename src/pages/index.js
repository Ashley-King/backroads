import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
export default () => (
  <>
    <Layout>
      Hello from Index. Go to <Link to="/blog">the Blog.</Link>
    </Layout>
  </>
)
