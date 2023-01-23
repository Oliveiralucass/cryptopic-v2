import React, { useContext } from 'react'
import { GlobalContext } from '../../../contexts/GlobalContext/GlobalContext'
import { DetailButton } from '../../Buttons/DetailButton/DetailButton'
import { ContentCardStyled } from './ContentCard.Styled'
import { Link } from 'react-router-dom'

export const ContentCard = ({artigo}) => {
    const { capitalizeText } = useContext(GlobalContext)

  return (
    <Link to = {artigo.url}>
      <ContentCardStyled>
        <div>
          <img src={require(`../../../assets/coins/${artigo.image}`)} alt=""/>
        </div>

        <h1>{artigo.title}</h1>

        {artigo.categories && artigo.categories.map(categorie => <DetailButton texto={capitalizeText(categorie)}/>)} 
      </ContentCardStyled>
    </Link>
    
  )
}