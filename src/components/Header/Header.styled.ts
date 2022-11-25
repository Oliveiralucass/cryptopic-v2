import React from 'react'
import styled from 'styled-components'

export const HeaderStyled = styled.header`
    display: flex;
    max-height: 82px;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-secondary);

    .logo-navbar{
        display: flex;
        gap: 40px;

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
            }
        }
       
    }

    .balance{
        display: flex;
        gap: 20px;
        margin-right: 40px;

        h1{
            color: var(--color-primary);
        }

        span h1{
            color: var(--text-color);
        }
    }
`