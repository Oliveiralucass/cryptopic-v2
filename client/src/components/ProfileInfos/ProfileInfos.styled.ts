import React from 'react'
import styled from 'styled-components'

export const ProfileInfosStyled = styled.div`
    width: 240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
`

export const ProfileInfoUsername = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4px 0 8px;
    font-weight: 500;
`
export const ProfileInfoLevel = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    padding: 0 4px 0 8px;
    p{
        font-weight: 500;
    }

    span{
        font-weight: 400;
    }
`

export const ProfileInfoBalance = styled.div`
    display: flex;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: var(--color-muted-background);
    align-items: center;
    width: 200px;
    font-weight: 500;
    img{
        width: 24px;
        height: 24px;
    }
`

export const ProfileInfoImage = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 4px 8px;
    border-radius: 8px;

    img{
        width: 48px;
        height: 48px;
    }
` 