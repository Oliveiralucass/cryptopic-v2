import styled from 'styled-components'

export const FooterStyled = styled.footer`
    display: flex;
    width: 100%;
    height: 300px;
    background-color: var(--color-muted-background);
    align-items: center;
`
export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
`
export const FooterLeft = styled.div`

`

export const FooterCenter = styled.div`

`

export const FooterRight = styled.div`

`

export const FooterRights = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: var(--color-muted-background);
    border-top: 1px solid var(--color-secondary);
    height: 48px;
    align-items: center;
`

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    font-weight: 600;
    gap: 8px;

    a{
        width: auto;
        display: inline;
    }

    .social-content{
        a{
            width: 100%;
            display: flex;
            gap: 8px;
        }
    }
`