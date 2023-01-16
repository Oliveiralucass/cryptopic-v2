import React, { useContext } from 'react'
import { GlobalContext } from '../../../contexts/GlobalContext/GlobalContext'
import { DetailButton } from '../../Buttons/DetailButton/DetailButton'
import { ContentCardStyled } from './ContentCard.Styled'

export const ContentCard = ({imageURL, title, categories }) => {
    const { capitalizeText } = useContext(GlobalContext)

  return (
    <ContentCardStyled>
        <div><img src={imageURL} alt=""/></div>

        <h1>{title}</h1>

        {categories && categories.map(categorie => <DetailButton texto={capitalizeText(categorie)}/>)} 
    </ContentCardStyled>
  )
}