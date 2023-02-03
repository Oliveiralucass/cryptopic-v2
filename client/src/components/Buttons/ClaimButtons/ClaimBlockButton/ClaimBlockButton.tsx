import React from 'react'
import { ClaimBlockButtonStyled, LockContainer } from './ClaimBlockButton.styled'
import {FaLock} from 'react-icons/fa'

export const ClaimBlockButton = ({xp, safyr}) => {
  return (
    <ClaimBlockButtonStyled>
      <LockContainer>
        <FaLock size={24}/>
      </LockContainer>
    </ClaimBlockButtonStyled>
  )
}
