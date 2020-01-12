import React, { Component } from 'react'
import styled from 'styled-components'

const Copy = styled.div`
    background: #BF4065;
    margin-bottom: 0;
    >p {
        text-align: center;
        color: #fff;
        font-size: .9rem;
        padding-bottom: .3rem;
        margin-bottom: 0;
        >a {
            color: #F79F33;
            &:hover {
                color: #fff;
            }
        }
    }
`

export default class copyright extends Component {
    render() {
        return (
        <Copy>
        <p> &copy; {new Date().getFullYear().toString()} Smooth | A concept website by <a href="https://lbmedia.netlify.com" target="_blank" rel="noopener noreferrer">LB Media</a></p>
        </Copy>
        )
    }
}
