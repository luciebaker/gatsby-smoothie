import React from 'react'
import Layout from "../components/layout"
import { Link, graphql } from 'gatsby'
import SmoothieContent from "../components/smoothieContent"

const smoothies = (props) => {
    return (
        <Layout>
        {props.data.allSmoothie.edges.map(edge => (
            <SmoothieContent 
            smoothieImage = {edge.node.localImage.publicURL}
            smoothieTitle ={edge.node.title}
            smoothieCreator = {edge.node.creator.name}
            smoothieDescription = {edge.node.description}
            smoothieInstructions = {edge.node.instructions}
            key = {edge.node.id}>
            <Link to ={`/smoothie/${edge.node.id}`}>
            Join the conversation</Link>
            </SmoothieContent>
        ))}
        </Layout>
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