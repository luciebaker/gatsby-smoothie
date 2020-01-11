import React from 'react'
import Layout from "../components/layout"
import { graphql } from 'gatsby'

import SmoothieContent from "../components/smoothieContent"


const smoothieTemplate = (props) => {
    return (
        <Layout>
        <SmoothieContent 
        smoothieImage ={props.data.smoothie.localImage.publicURL}
        smoothieTitle={props.data.smoothie.title} 
        smoothieCreator={props.data.smoothie.creator.name}
        smoothieDescription={props.data.smoothie.description}
        smoothieInstructions={props.data.smoothie.instructions} />
        </Layout>
    )
}

export const query = graphql`
    query SmoothieQuery($smoothieId: String!) {
        smoothie(id: {eq: $smoothieId}) {
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
`

export default smoothieTemplate