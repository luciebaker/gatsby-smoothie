import React from 'react'
import styled from 'styled-components'



const SmoothieContentWrapperSingle = styled.section `
    width: 85vw;
    border: 1px solid #ddd;
    padding: 8px;
    background: white;
    margin: 16px auto;
    display: flex;
    
    h2 {
        margin-bottom: .5rem;
        font-family: Henny Penny;
        font-size: 2.5rem;
        color: #BF4065;
        text-align: center;
        padding-top: 1rem;
        }
    h6 {
        text-align: center;
        font-size: .95rem;
    }
`
const SmoothieContentImageWrapperSingle = styled.div`
    max-width: 380px;
    img {
    max-width: 380px;
    margin-bottom: 0;
    }
`
const SmoothieContentDetailsWrapperSingle = styled.div`
    flex-grow: 1;
    padding-left: 8px;
`

const SmoothieContentSingle = ({smoothieTitleSingle, smoothieImageSingle, smoothieCreatorSingle, smoothieDescriptionSingle, smoothieInstructionsSingle, children}) => {
    return (
        <SmoothieContentWrapperSingle>
        <SmoothieContentImageWrapperSingle>
        <img src={smoothieImageSingle} alt="my smoothie"/>
        </SmoothieContentImageWrapperSingle>
        <SmoothieContentDetailsWrapperSingle>
        <h2>{smoothieTitleSingle}</h2>
        <h6>Created by {smoothieCreatorSingle} </h6>
        <p>{smoothieDescriptionSingle}</p>
        <p>{smoothieInstructionsSingle}</p>
        <div>{children}</div>
        </SmoothieContentDetailsWrapperSingle> 
        </SmoothieContentWrapperSingle>
    )
}

export default SmoothieContentSingle