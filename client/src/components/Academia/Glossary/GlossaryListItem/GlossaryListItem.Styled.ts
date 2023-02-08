import styled from "styled-components"

export const GlossaryListItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    padding: 24px 18px;
    border: 1px solid transparent;
    border-radius: 10px;
    outline: 6px solid #f9fafb;
    transition: 150ms all ease-in-out;

    &:hover{
        box-shadow: #cbd5e1 5px 15px 15px 5px;  
        border: 1px solid var(--color-primary);
    }
`

export const GlossaryListItemHeader = styled.div`
    display: flex;
    justify-content: space-between;

    .categories-section{
        display: flex;
        gap: 4px;
    }
`

export const GlossaryListItemBody = styled.div`
    p{
        display: inline-block;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        white-space: nowrap;
    }
`