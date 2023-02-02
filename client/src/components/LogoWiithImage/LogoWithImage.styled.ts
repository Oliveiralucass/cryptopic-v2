import React from 'react'
import styled from 'styled-components'

export const LogoWithImageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
   
   .logo{
    display: flex;
    gap: 4px;
    align-items: center;

    img{
        width: 40px;
        height: 40px;
    }
    h1{
        font-size: 1.875rem;
        font-weight: 600;
        color: var(--color-text);
    }
   }
    
    p{
        color: var(--color-muted-text);
        font-size: 1rem;
        font-weight: 500;
    }        
`