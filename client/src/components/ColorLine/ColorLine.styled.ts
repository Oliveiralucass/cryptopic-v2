import React from 'react'
import styled from 'styled-components'

export const ColorLineStyled = styled.div`
    width: 100%;
    height: 30px;
    margin: 10px auto 0;
    box-shadow: 0.2rem 0.2rem 2rem rgb(0 0 0 / 25%);
    border-radius: 10px;
    background-color: ${(props) => props.color};
`
