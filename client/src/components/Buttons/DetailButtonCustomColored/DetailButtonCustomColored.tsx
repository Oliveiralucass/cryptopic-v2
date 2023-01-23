import React from 'react'
import { DetailButtonCustomColoredStyled } from './DetailButtonCustomColored.styled'

export const DetailButtonCustomColored = ({texto, bgColor, textColor}) => {
  return (
    
    <DetailButtonCustomColoredStyled bgColor={bgColor} textColor={textColor}>
        {texto}
    </DetailButtonCustomColoredStyled>
  )
}
