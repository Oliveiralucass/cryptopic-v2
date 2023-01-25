import React from 'react'
import styled from 'styled-components'

export const SectionBannerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 8px;
    border: 1px solid var(--color-secondary);
    gap: 12px;
    margin-bottom: 48px;

    p{
        color: var(--color-muted-text);
        font-weight: 500;
    }

    h1{
        font-size: 1.875rem;
        font-weight: 600;
    }
`
