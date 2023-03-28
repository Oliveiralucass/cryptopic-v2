import styled from 'styled-components'

export const GlossaryListStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    width: 60%;
    margin: 4% auto 0;

    .glossary-list-search-input{
        background-color: #f3f4f6;
        border: transparent;
        border-radius: 5px;
        padding: 8px;
        align-items: center;
        border-radius: 5px;
        outline: none;
        transition: 150ms linear;
        -webkit-transition: 150ms linear;
        width: 260px;
        height: 64px;
        font-size: 1.125rem;
        margin-bottom: 40px;

    cursor: default;
        :focus{
            width: 360px;
            cursor: auto;
            background-color: var(--color-bright);

            border: 1px solid var(--color-primary);
            box-shadow: var(--box-shadow-default);
            background-color: var(--color-bright);
        }
    }
`