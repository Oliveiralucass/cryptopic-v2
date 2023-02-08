import styled from 'styled-components'

export const ClaimBlockButtonStyled = styled.div`
    z-index: 1;
    position: relative;
    background-color: var(--color-muted-background);
    padding: 4px 12px;
    border-radius: 12px;
    color: var(--color-muted-text);
    border: 2px solid transparent;
    transition: all ease 150ms;
    cursor: pointer;

    &:hover{
        border: 2px solid var(--color-primary);
        background-color: var(--color-secondary-on-hover);
        color: var(--color-primary);
    }
`

export const LockContainer = styled.div`
    z-index: 2;
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`