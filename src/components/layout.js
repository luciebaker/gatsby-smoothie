import React from "react"
import PropTypes from "prop-types"
import Navbar from "./global/navbar"
import Footer from "./global/footer"
import "./layout.css"

const Layout = ({ children }) => (
  <>
  <Navbar />
  {children}
  <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
