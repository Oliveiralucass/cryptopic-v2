import styled from 'styled-components'

export const ExpeditionElementStyled = styled.div`    
    max-width: 50%;
    margin: 50px auto;

    .main-article{
        max-width: 800px;
        padding: 24px;
        margin: 0 auto;
    }

    .article-header{
        text-align: left;
        font-size: 28px;
        padding: 20px 0;
        margin:48px 0 0 0;
    }

    .article-text{
        max-width: 700px;
        text-align: left;
        font-size: 22px;
        font-weight: 400;
        color: #1e293b;

        a{
            color: var(--color-muted-text); 
        }

        a:hover{
            color: var(--color-primary);
        }
    }

    .main-article ul{
        margin: 24px 0 0 0;
        font-size: 20px;
    }

    .main-article ul li{
        margin: 12px 0 0 0;
        font-size: 20px;
        font-weight: 400;
    } 

    .main-text-title{
        display: flex;
        justify-content: space-between;
        font-size: 40px;
        text-align: left;
    }

`

export const ExpeditionElementHeader = styled.div`
    margin-top: 40px;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .categories-container{
        display: flex;
        gap: 12px;
    }
`

export const ClaimContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
`

export const MoreContentSectionContainer = styled.div`
    width: 100%;
    background-color: var(--color-muted-background);
    margin: 24px 0;
    padding: 8px;
`

export const MoreContentSection = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    margin: 12px auto;
    gap: 48px;
`

export const MoreContentCardSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 24px;
`