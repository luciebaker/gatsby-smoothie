import React from 'react'
import styled from 'styled-components'

export default function Banner({ title, subtitle, children }) {
    return (
        <BannerWrapper>
           <h1 className='title'>{title}</h1> 
           <h3 className='subtitle'>{subtitle}</h3>
           {children}
        </BannerWrapper>
    )
}

const BannerWrapper = styled.div`
margin-bottom: 3rem;
text-align: center;
.title {
    color: #f4f4f4;
    font-size: 25vw;
    letter-spacing: 8px;
    /* text-shadow: .1rem .1rem #BF4065; */
    padding-top: 7.5rem;
    margin: 0;
    font-family: Henny Penny;
}
.subtitle {
    color: white;
    font-size: 2.4rem;
    font-family: Montserrat;
}
`
