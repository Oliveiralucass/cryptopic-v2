import styled from 'styled-components'

export const DetailButtonHoverStyled = styled.div`

  height: 28px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: var(--color-muted-background);
  color: var(--color-muted-text);
  border-radius: 6px;
  padding: 4px 12px;  
  transition: 150ms all ease-in-out;
  cursor: pointer;

  &:hover{
    background-color: var(--color-secondary);
    color: var(--color-primary);
  }
`