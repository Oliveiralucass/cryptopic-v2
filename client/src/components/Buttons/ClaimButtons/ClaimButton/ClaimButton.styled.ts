import styled from 'styled-components'

export const ClaimButtonStyled = styled.div`
    background-color: var(--color-secondary);
    padding: 4px 12px;
    border-radius: 12px;
    color: var(--color-primary);
    border: 2px solid transparent;
    transition: all ease 150ms;
    cursor: pointer;

    &:hover{
        border: 2px solid var(--color-primary);
        background-color: var(--color-secondary-on-hover);
    }
`