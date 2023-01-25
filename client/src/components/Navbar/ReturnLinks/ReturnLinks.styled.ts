import styled from 'styled-components'

export const ReturnLinksStyled = styled.nav`
    ul {
        display: flex;
        margin: 30px 0 30px 40px;
        gap: 30px;

        a{
            font-size: 0.875rem;
            font-weight: 500;
        }

        .return-section{
            color: var(--color-muted-text); 
        }

        .return-content{
            color: ${(props) => props.color};
        }
    }
`