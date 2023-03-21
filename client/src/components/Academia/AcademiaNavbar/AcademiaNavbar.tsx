import React from 'react'
import { AcademiaNavbarStyled } from './AcademiaNavbar.styled'
import { NavLink } from 'react-router-dom'

export const AcademiaNavbar = () => {


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
    <AcademiaNavbarStyled>
    
        <nav>
            <ul className="nav-menu">
                <li><NavLink to={'/academia/'} 
                 style={({ isActive }) =>
                 isActive ? academiaStyle : undefined}
                    className="nav-menu-item2">PIC | Academia</NavLink>
                </li>


                <li><NavLink to={'/academia/glossario'}
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined}
                    className="nav-menu-item">Glossário</NavLink>
                </li>

             

                <li><NavLink to={'/academia/expedicao'} 
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined}
                    className="nav-menu-item">Expedição</NavLink>
                </li>

                <li><NavLink to={'/academia/descubra'}
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined}
                    className="nav-menu-item">Descubra</NavLink>
                </li>
            </ul>
        </nav> 

    </AcademiaNavbarStyled>
  )
}
