import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { HomepageButton } from '../homepage-components/HomepageButton'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from 'styled-components'

const InfoWrapper = styled.section`
        padding: 4rem 0;
`

const InfoWrapperCenter = styled.div`
    width: 85vw;
    margin: 0 auto;
`

const InfoImageWrapper = styled.article`
    margin: 3rem 0;
    position: relative;
    >div {
        background: #fff;
        max-width: 500px;
    }
`

const InfoTextWrapper = styled.div`
`

const HomepageInfo = () => {

    const { infoImage } = useStaticQuery(
        graphql`
        query {
            infoImage: file(relativePath: {eq: "smoothies-bg2.jpg"}) {
                childImageSharp {
                    fluid (maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )

    return (
        <InfoWrapper> 
        <InfoWrapperCenter>
        <InfoImageWrapper>
        <div>
         <Img fluid={infoImage.childImageSharp.fluid} />
        </div>
       
        </InfoImageWrapper>

        <InfoTextWrapper>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis amet
          aliquam animi molestias vero velit consectetur, excepturi
          consequatur odit temporibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
          cupiditate perferendis veniam veritatis suscipit. Vitae dicta quo
          animi? Laborum, optio.
        </p>
        <AniLink fade to="/register">
        <HomepageButton>Join The Conversation</HomepageButton>
        </AniLink>

        </InfoTextWrapper>
        
        </InfoWrapperCenter>
        


        </InfoWrapper>
    )
}

export default HomepageInfo