import React from 'react'
import styled from 'styled-components'

export const CoinCreatePostCardStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 100px auto;
    padding: 12px;
    border-radius: 6px;
    width: 50%;
    box-shadow: var(--box-shadow-medium);

    .muted{
        color: var(--color-muted-text)
    }
`

export const CoinCreatePostCardHeader = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    
    img{
        width: 40px;
        height: 40px;
    }

    .user-info{
        display: flex;
        gap: 12px;
        align-items: center;
    }

    strong{
        color: var(--color-primary)
    }

    span{
        font-weight: 500;
        font-size: 1.125rem;
    }
`

export const CoinCreatePostCardBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`
export const CoinCreatePostCardBodyHeader = styled.div`

    display: flex;
    flex-direction: column;
    gap: 12px;

    .coin-info{
        display: flex;
        gap: 8px;
        align-items: center;
        

        img{
            width: 24px;
            height: 24px;
        }
    }

    h1{
        font-size: 28px;
    }

    input{
        height: 42px;
        width: 100%;
        border: 1px solid transparent;
        outline: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1.25rem;
        background-color: var(--color-muted-background);
        padding: 0 12px;

        &:focus{
            border: 1px solid var(--color-primary);
        }

        &::placeholder{
            font-weight: 400;
        }
    }
`


export const CoinCreatePostCardBodyMessage = styled.div`

textarea {
    resize: vertical;
    width: 100%;
    border: 1px solid transparent;
    outline: none;
    border-radius: 8px;
    font-weight: 500;
    font-size: 1.125rem;
    background-color: var(--color-muted-background);
    padding: 0 12px;

    &:focus{
        border: 1px solid var(--color-primary);
    }
    &::placeholder{
        font-weight: 400;
    }
}
`

export const CoinCreatePostCardInteractions = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    text-align: center;
    gap: 8px;

    button[type=submit] {
        background-color: var(--color-primary);
        width: 100px;
        color: var(--color-background);
        cursor: pointer;
        transition: 150ms all ease-in-out;
        font-size: 1rem;
        border-radius: 8px;
        border: none;
        padding: 4px 0;

        &:hover{
            background-color: var(--color-primary-on-hover);
        }
    }
`

export const CoinCreatePostCardInteractionsBlocked = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    text-align: center;
    gap: 8px;

    button[type=submit] {
        background-color: var(--color-muted-background);
        color: var(--color-muted-text);
        transition: 150ms all ease-in-out;
        font-size: 1rem;
        border-radius: 8px;
        border: none;
        padding: 4px 12px;
    }
`