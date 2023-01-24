import React from 'react'
import { Link } from 'react-router-dom'
import { MoreContentButtonStyled } from './MoreContentButton.styled'

export const MoreContentButton = ({texto, url}) => {
  return (
    <Link to={url}>
        <MoreContentButtonStyled>
            {texto}
        </MoreContentButtonStyled>
    </Link>
  )
}
