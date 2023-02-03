import React from 'react'
import { ClaimButtonStyled } from './ClaimButton.styled'

export const ClaimButton = ({xp, safyr, onRequestAction}) => {
  return (
    <ClaimButtonStyled onClick={onRequestAction}> 
        <div><p>+ {xp}XP</p></div>
        <div><p>+ {safyr} Safyr</p></div>
    </ClaimButtonStyled>
  )
}
