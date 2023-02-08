import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useTypedSelectors'
import { getLoggedUser } from '../../../../store/features/authSlice'
import { ClaimButtonStyled } from './ClaimButton.styled'

export const ClaimButton = ({xp, safyr, onRequestAction}) => {

  const dispatch = useAppDispatch()
  const {token} = useAppSelector(state => state.auth)

  return (
    <ClaimButtonStyled onClick={onRequestAction}> 
        <div><p>+ {xp}XP</p></div>
        <div><p>+ {safyr} Safyr</p></div>
    </ClaimButtonStyled>
  )
}
