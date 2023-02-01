import React from 'react'
import logoImg from '../../assets/coins/PICLogo.png'
import { LogoWithImageStyled } from './LogoWithImage.styled'


export const LogoWithImage = () => {
  return (
    <LogoWithImageStyled>
        <img src={logoImg} alt={'CryptoPIC Logo'} />
        <h1>Crypto PIC</h1>
    </LogoWithImageStyled>
  )
}
