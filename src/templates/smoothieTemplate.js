import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import { FirebaseContext } from '../components/Firebase'
import SmoothieContentSingle from "../components/smoothieSingle"


const smoothieTemplate = (props) => {

    return (
        <section>
        <SmoothieContentSingle 
        smoothieImageSingle ={props.data.smoothie.localImage.publicURL}
        smoothieTitleSingle={props.data.smoothie.title} 
        smoothieCreatorSingle={props.data.smoothie.creator.name}
        smoothieDescriptionSingle={props.data.smoothie.description}
        smoothieInstructionsSingle={props.data.smoothie.instructions} />
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