import React from 'react'
import Layout from "../components/layout"

import SmoothieContent from "../components/smoothieContent"


const smoothieTemplate = (props) => {
    return (
        <Layout>
        <SmoothieContent 
        smoothieImage ={props.pageContext.localImage.publicURL}
        smoothieTitle={props.pageContext.title} 
        smoothieCreator={props.pageContext.creator.name}
        smoothieDescription={props.pageContext.description}
        smoothieInstructions={props.pageContext.instructions} />
        </Layout>
    )
}


export default smoothieTemplate