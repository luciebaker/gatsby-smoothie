import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import { FirebaseContext } from '../components/Firebase'
import SmoothieContent from "../components/smoothieContent"


const smoothieTemplate = (props) => {

    return (
        <section>
        <SmoothieContent 
        smoothieImage ={props.data.smoothie.localImage.publicURL}
        smoothieTitle={props.data.smoothie.title} 
        smoothieCreator={props.data.smoothie.creator.name}
        smoothieDescription={props.data.smoothie.description}
        smoothieInstructions={props.data.smoothie.instructions} />
        </section>
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