import styled from 'styled-components'

export const MoreContentButtonStyled = styled.div`
    font-size: 20px;
    font-weight: 400;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    padding: 20px 0;
    justify-content: center;
    background-color: #2563eb;
    color: var(--color-background);
    box-shadow: #cbd5e1 4px 4px 8px 4px;
    border-radius: 36px;
    margin:0 auto;

    &:hover{
        background-color: rgb(37 99 235 / 95%);
    }
`