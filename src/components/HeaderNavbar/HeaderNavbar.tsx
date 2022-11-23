import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderNavbarStyled } from './HeaderNavbar.styled'

export const HeaderNavbar = () => {
  return (
    <HeaderNavbarStyled>
      <ul>
        <li><Link to={'/coins'}>Criptomoedas</Link></li>
        <li><Link to={'/academy'}>Academia</Link></li>
        <li><Link to={'/academy/glossary'}>Glossário</Link></li>
        <li><Link to={'/news'}>Notícias</Link></li>
      </ul>  
    </HeaderNavbarStyled>
  )
}
