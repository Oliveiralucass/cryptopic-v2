import React from 'react'
import { LogoWithImageStyled } from './LogoWithImage.styled'


export const LogoWithImage = () => {
  return (
    <LogoWithImageStyled>
        <div className='logo'>
          <img src={require('../../assets/coins/PICLogo.png')} alt={'CryptoPIC Logo'} />
          <h1>Crypto PIC</h1>
        </div>
        <p>Entenda Sobre Criptomoedas</p>
    </LogoWithImageStyled>
  )
}
