import styled from 'styled-components'

export const GlossaryContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
`

export const GlossaryReturnLinks = styled.section`
    ul {
        display: flex;
        margin: 30px 0 30px 40px;
        gap: 30px;

        a{
            font-size: 0.875rem;
            font-weight: 500;
        }

        .return-glossary{
            color: var(--color-muted-text); 
        }

        .return-content{
            color: var(--color-primary);
        }
    }

`

export const ContentContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0 10px;

    .content-title-detail{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .article-text{
        font-size: 1.25rem;
        font-weight: 400;

        a{
            color: var(--color-muted-text); 
        }

        a:hover{
            color: var(--color-primary);
        }
    }
`



export const ContentDetails = styled.div`
    display: flex;
    gap: 10px;
    padding: 0 10px;
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