import React from 'react'
import styled from 'styled-components'



const SmoothieContentWrapper = styled.section `
    border: 1px solid #ddd;
    padding: 8px;
    background: white;
    margin-bottom: 8px;
    display: flex;
    
    h2 {
        margin-bottom: .5rem;
        }
`
const SmoothieContentImageWrapper = styled.div`
    max-width: 300px;
    img {
    max-width: 300px;
    }
`
const SmoothieContentDetailsWrapper = styled.div`
    flex-grow: 1;
    padding-left: 8px;
`

const SmoothieContent = ({smoothieTitle, smoothieImage, smoothieCreator, smoothieDescription, smoothieInstructions, children}) => {
    return (
        <SmoothieContentWrapper>
        <SmoothieContentImageWrapper>
        <img src={smoothieImage} alt="my smoothie"/>
        </SmoothieContentImageWrapper>
        <SmoothieContentDetailsWrapper>
        <h2>{smoothieTitle}</h2>
        <h6>Created by {smoothieCreator} </h6>
        <p>{smoothieDescription}</p>
        <p>{smoothieInstructions}</p>
        <div>{children}</div>
        </SmoothieContentDetailsWrapper> 
        </SmoothieContentWrapper>
    )
}

export default SmoothieContent