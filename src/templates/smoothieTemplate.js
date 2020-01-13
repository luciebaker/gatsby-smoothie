import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import { FirebaseContext } from '../components/Firebase';
import SmoothieContentSingle from "../components/smoothieSingle";
import { SmoothieComments } from "../components/form-components";

const smoothieTemplate = (props) => {
    const {firebase} = useContext(FirebaseContext)

    return (
        <section>
        <SmoothieContentSingle 
        smoothieImageSingle ={props.data.smoothie.localImage.publicURL}
        smoothieTitleSingle={props.data.smoothie.title} 
        smoothieCreatorSingle={props.data.smoothie.creator.name}
        smoothieDescriptionSingle={props.data.smoothie.description}
        smoothieInstructionsSingle={props.data.smoothie.instructions} />
        {!!firebase &&
        <SmoothieComments firebase={firebase} smoothieId={props.data.smoothie.id}/>
        }
        </section>
    )
};

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