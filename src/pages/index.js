import React from "react"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import HomepageHero from '../components/homepage-components/HomepageHero'
import HomepageBanner from '../components/homepage-components/HomepageBanner'
import { HomepageButton } from '../components/homepage-components/HomepageButton'
import { graphql } from 'gatsby'
import HomepageInfo from '../components/homepage-components/HomepageInfo'
import { database } from "firebase"

export default ({data}) => (
  <section>
    <SEO title="Welcome" />
    <HomepageHero img={data.homeBG.childImageSharp.fluid}>
    <HomepageBanner title="Smooth">
    <AniLink fade to="/register">
    <HomepageButton>Join The Conversation</HomepageButton>
    </AniLink>
    </HomepageBanner>
    </HomepageHero>
    <HomepageInfo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <AniLink fade to="/smoothies"> View all smoothies</AniLink>
  </section>
)



export const query = graphql`
{
  homeBG: file(relativePath: {eq: "smoothies-bg1.jpg"}) {
    childImageSharp {
      fluid (quality: 90, maxWidth: 4000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`