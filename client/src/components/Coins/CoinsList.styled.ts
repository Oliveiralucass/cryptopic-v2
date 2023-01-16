import React from 'react'
import styled from 'styled-components'

export const CoinsListStyled = styled.table`
    max-width: 1440px;
    margin: 20px auto;
    border-collapse: collapse;
    

    th{
        text-align: justify;
        align-items: center;
        padding: 0 8px 20px;
        height: 80px;
        border-bottom: 1px var(--color-secondary) solid;
    }

    td {
        text-align: justify;
        padding: 0 8px;
    }

    tr {
        height: 80px;
        border-top: 1px var(--color-secondary) solid;
        border-bottom: 1px var(--color-secondary) solid;
    }

    a{
        display: inline-block;
    }

    .name-container {
        display: flex;
        text-align: center;
        align-items: center;
        gap: 12px;

        img{
            width: 36px;
        }

        p{
        font-size: 0.875rem;
        font-weight: 600;
    }
    }
    
    p{
        font-size: 0.875rem;
        font-weight: 500;
    }

    span{
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--color-muted-text);
    }

    .positive{
        color: green
    }

    .neutral{
        color: gray
    }

    .negative{
        color: red
    }
    
`