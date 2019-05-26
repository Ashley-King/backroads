import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./layout.css"
import Hero from "./SimpleHero"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Hero />
      {children}
      <Footer />
    </>
  )
}

export default Layout
