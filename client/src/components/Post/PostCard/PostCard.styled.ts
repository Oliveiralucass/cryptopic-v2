import styled from 'styled-components'

export const CoinPostCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 100px auto;
    padding: 12px;
    border-radius: 6px;
    width: 50%;
    box-shadow: var(--box-shadow-medium);
`

export const CoinPostCardHeader = styled.div`
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

export const CoinPostCardBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`
export const CoinPostCardBodyHeader = styled.div`
    .coin-info a{
        width: fit-content;
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
`


export const CoinPostCardBodyMessage = styled.div`

`

export const CoinPostCardInteractions = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 8px;
`