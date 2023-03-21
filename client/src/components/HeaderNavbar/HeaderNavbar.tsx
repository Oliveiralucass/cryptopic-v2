import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderNavbarStyled } from './HeaderNavbar.styled'

export const HeaderNavbar = () => {
  return (
    <HeaderNavbarStyled>
      <ul>
        <li><Link to={'/criptomoedas'}>Criptomoedas</Link></li>
        <li><Link to={'/academia'}>Academia</Link></li>
        <li><Link to={'/academia/glossario'}>Glossário</Link></li>
        <li><Link to={'/noticias'}>Notícias</Link></li>
      </ul>  
    </HeaderNavbarStyled>
  )
}
