import styled from "styled-components"

export const CoinsPageStyled = styled.div`  

    width: 80%;
    margin: 0 auto;

    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid var(--color-secondary);
        padding-bottom: 30px;
    }
`

export const CoinsPageLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const CoinsPageRight = styled.div`
    .price-container{
        display: flex;
        align-items: center;
        gap: 12px;
    }
`

export const CoinsPageHeader = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    
    .name-container{
        display: flex;
        text-align: center;
        align-items: center;
        gap: 24px;


        h1{
            font-size: 36px;
        }
    }

    .rank-container{
        display: flex;
    }
`

export const CoinsPageLinks = styled.div`

    a {
        display: inline-block;
        border: none;
    }
`   
export const CoinsPageStats = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`
