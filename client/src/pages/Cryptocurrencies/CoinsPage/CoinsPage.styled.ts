import styled from "styled-components"

export const CoinsPageStyled = styled.div`  
    width: 80%;
    margin: 0 auto;
`

export const CoinsPageLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const CoinsPageRight = styled.div`

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