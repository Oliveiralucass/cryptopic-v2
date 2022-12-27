import React from 'react'
import { GamesNavbarStyled } from './GamesNavbar.styled'
import { NavLink } from 'react-router-dom'

export const GamesNavbar = () => {


    let activeStyle = {
        backgroundColor:' #dbeafe',
        color:' #2563eb',
    };

    let academiaStyle = {
        backgroundColor:' #2563eb',
        color:' #ffffff',
        boxShadow: '#cbd5e1 1px 3px 3px 1px'
    };


  return (
    <GamesNavbarStyled>
    
        <nav>
            <ul className="nav-menu">
                <li><NavLink to={'/games/'} 
                 style={({ isActive }) =>
                 isActive ? academiaStyle : undefined}
                    className="nav-menu-item2">PIC | Games</NavLink>
                </li>


                <li><NavLink to={'/games/cassino'}
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined}
                    className="nav-menu-item">Cassino</NavLink>
                </li>


                <li><NavLink to={'/games/mining'}
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined}
                    className="nav-menu-item">Mineração</NavLink>
                </li>

            </ul>
        </nav> 

    </GamesNavbarStyled>
  )
}
