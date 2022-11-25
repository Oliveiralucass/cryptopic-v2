import React from 'react'
import styled from 'styled-components'

export const HeaderNavbarStyled = styled.nav`

    display: flex;
    align-items: center;

    ul{
        display: flex;
        gap: 32px;

        li{
            display: flex;
            align-items: center;
            
            
            a{
                font-size: 1rem;
                font-weight: 600;
                color: var(--color-text);
                transition: all ease-in-out 100ms;
            }
           
            &:hover a{
                color: var(--color-primary);
            }
        }

    }
`