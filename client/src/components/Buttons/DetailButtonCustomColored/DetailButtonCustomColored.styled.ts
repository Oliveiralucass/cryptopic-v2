import styled from 'styled-components'

interface IDetailButtonCustomColored {
    bgColor: string;
    textColor: string;
}

export const DetailButtonCustomColoredStyled = styled.div<IDetailButtonCustomColored>`
  height: 28px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  border-radius: 6px;
  padding: 4px 12px;
`