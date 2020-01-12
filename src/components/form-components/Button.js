import styled from 'styled-components'

export const Button = styled.button`
    padding: 8px 16px;
    background: #BF4065;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;
        ${props => props.block ? 'display: block; width: 100%;' : ''}

    &:hover{
        background: #FF5E0F;
    }
`