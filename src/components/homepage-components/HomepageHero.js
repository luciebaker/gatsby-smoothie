import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'


const HomepageHero = ({img, children}) => {
    return (
        <BackgroundImage fluid={img}>
            {children}
        </BackgroundImage>
    )
}

export default styled(HomepageHero)`
    min-height: 100vh;
    background-position: bottom center;
    display: flex;
    margin: 0;
    justify-content: center;
    
`