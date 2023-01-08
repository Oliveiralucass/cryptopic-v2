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
        font-weight: 500;

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