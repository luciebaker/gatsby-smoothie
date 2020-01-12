import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { graphql } from 'gatsby'
import SmoothieContent from "../components/smoothieContent"
import { HomepageButton } from '../components/homepage-components/HomepageButton'

const smoothies = (props) => {
    return (
        <section>
        {props.data.allSmoothie.edges.map(edge => (
            <SmoothieContent 
            smoothieImage = {edge.node.localImage.publicURL}
            smoothieTitle ={edge.node.title}
            smoothieCreator = {edge.node.creator.name}
            smoothieDescription = {edge.node.description}
            smoothieInstructions = {edge.node.instructions}
            key = {edge.node.id}>
            <AniLink fade to={`/smoothie/${edge.node.id}`}>
            <HomepageButton>Join The Conversation</HomepageButton>
            </AniLink>
            </SmoothieContent>
        ))}
        </section>
    )
}

export const query = graphql `
{
allSmoothie {
    edges {
        node {
            id
            title
            localImage {
                publicURL
            }
            description
            instructions
            creator {
                name
            }
        }
    }
}
}
` 



export default smoothies