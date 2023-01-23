import React from 'react'
import { NoticiasNavbarStyled } from './NoticiasNavbar.styled'
import { NavLink } from 'react-router-dom'

export const NoticiasNavbar = () => {


    let activeStyle = {
        backgroundColor:' #dbeafe',
        color:' #2563eb',
    };

    let NoticiasStyle = {
        backgroundColor:' #2563eb',
        color:' #ffffff',
        boxShadow: '#cbd5e1 1px 3px 3px 1px'
    };


  return (
    <NoticiasNavbarStyled>
        <nav>
            <ul className="nav-menu">
                <li><NavLink to={'/noticias/'} 
                 style={({ isActive }) =>
                 isActive ? NoticiasStyle : undefined}
                    className="nav-menu-item2">PIC | Noticias</NavLink>
                </li>


                <li><NavLink to={'/noticias/blockchain'}
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined}
                    className="nav-menu-item">Blockchain</NavLink>
                </li>


                <li><NavLink to={'/noticias/economia'}
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined}
                    className="nav-menu-item">Economia</NavLink>
                </li>

                <li><NavLink to={'/noticias/trading'}
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined}
                    className="nav-menu-item">Trading</NavLink>
                </li>
            </ul>
        </nav> 

    </NoticiasNavbarStyled>
  )
}
