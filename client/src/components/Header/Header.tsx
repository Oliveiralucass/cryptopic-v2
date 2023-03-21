import React, { useState } from 'react'
import { HeaderNavbar } from '../HeaderNavbar/HeaderNavbar'
import { HeaderStyled } from './Header.styled'
import { Link } from 'react-router-dom'
import { Login } from '../Login/Login'
import { useAppSelector } from '../../hooks/useTypedSelectors'
import { ProfileInfos } from '../ProfileInfos/ProfileInfos'

export const Header = () => {

  const [ showLogin, setShowLogin ] = useState(false)
  const { user } = useAppSelector((state) => state.auth)
  
  return (
    <HeaderStyled>
      <div className='logo-navbar'>
        <Link to={'/'} className='logo'>
          <img src={require('../../assets/coins/PICLogo.png')} alt={'CryptoPIC Logo'} />
          <h1>Crypto PIC</h1>
        </Link>
        <HeaderNavbar />
      </div>

      <div className='balance'>    
        {user ? <ProfileInfos /> :
        <div>
          <p className='login-button' onClick={() => setShowLogin(!showLogin)}>Fazer Login</p>
          {showLogin && <Login shouldShow={showLogin} onRequestClose={() => setShowLogin(false)}/>}
        </div>}
      </div>
    </HeaderStyled>
  )
}
