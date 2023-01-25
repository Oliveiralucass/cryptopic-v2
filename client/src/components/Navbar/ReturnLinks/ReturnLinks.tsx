import React from 'react'
import { Link } from 'react-router-dom'
import { ReturnLinksStyled } from './ReturnLinks.styled'

export const ReturnLinks = ({section, sectionUrl, content, contentUrl, mainColor}) => {
  return (
    <ReturnLinksStyled color={mainColor}>
        <ul>
            <li><Link to={sectionUrl} className='return-section'>{section}</Link></li>
            <li><Link to={contentUrl} className='return-content'>{content}</Link></li>
        </ul>
    </ReturnLinksStyled>
  )
}
