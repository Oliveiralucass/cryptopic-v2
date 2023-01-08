import React from 'react'
import { DetailButtonStyled } from './DetailButton.styled'


export const DetailButton = ({texto}) => {
  return (
    
    <DetailButtonStyled>
        {texto && texto[0].toUpperCase() + texto.substring(1)}
    </DetailButtonStyled>
  )
}
