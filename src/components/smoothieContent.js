import React from 'react'
import styled from 'styled-components'



const SmoothieContentWrapper = styled.section `
    width: 85vw;
    border: 1px solid #ddd;
    padding: 8px;
    background: white;
    margin: 16px auto;
    display: flex;
    text-align: center;
    
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

    p {
        text-align: center;
        padding: 10px 30px 20px 30px;

    }
`
const SmoothieContentImageWrapper = styled.div`
    max-width: 320px;
    img {
    max-width: 320px;
    margin-bottom: 0;
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
        <div>{children}</div>
        </SmoothieContentDetailsWrapper> 
        </SmoothieContentWrapper>
    )
}

export default SmoothieContent