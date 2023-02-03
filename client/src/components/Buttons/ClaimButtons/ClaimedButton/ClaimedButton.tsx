import React from 'react'
import { ClaimedButtonStyled } from './ClaimedButton.styled'

export const ClaimedButton = ({xp, safyr}) => {
  return (
    <ClaimedButtonStyled>
        <div><p>+ {xp}XP</p></div>
        <div><p>+ {safyr} Safyr</p></div>
    </ClaimedButtonStyled>
  )
}
