import React from 'react'
import { HeaderNavbar } from '../HeaderNavbar/HeaderNavbar'
import { HeaderStyled } from './Header.styled'
import logoImg from '../../assets/coins/PICLogo.png'
import { Link } from 'react-router-dom'
import { Balance } from '../Balance/Balance'

export const Header = () => {
  return (
    <HeaderStyled>
      <div className='logo-navbar'>
        <Link to={'/'} className='logo'>
            <img src={logoImg} alt={'CryptoPIC Logo'} />
            <h1>Crypto PIC</h1>
        </Link>
        
        <HeaderNavbar />
      </div>
      <div className='balance'>
        <span><h1>Saphire:</h1></span>
        <Balance />
      </div>
    </HeaderStyled>
  )
}
