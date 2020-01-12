import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../../images/Smooth.png'

const FooterWrapper = styled.footer`
    background: #BF4065;
    margin-bottom: 0;
`
const FooterContent = styled.div`
    margin: 0;
    text-align: center;
    >img {
        max-width: 150px;
        padding-top: .6rem;
        margin: 0;
        }
`

export default class footer extends Component {
    render() {
        return (
            <FooterWrapper>
            <FooterContent>
                <img src={logo} alt="smooth" />
            </FooterContent>
            </FooterWrapper>
        )
    }
}
