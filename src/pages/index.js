import React from "react"
import SEO from "../components/seo"
import { Link } from 'gatsby'

const IndexPage = () => (
  <section>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/smoothies"> View all smoothies</Link>
  </section>
)

export default IndexPage
