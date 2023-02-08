import React, { useContext } from 'react'
import { GlobalContext } from '../../../contexts/GlobalContext/GlobalContext'
import { DetailButton } from '../../Buttons/DetailButton/DetailButton'
import { Link } from 'react-router-dom'
import { DetailButtonColored } from '../../Buttons/DetailButtonColored/DetailButtonColored'
import { DiscoverMoreContentCardStyled } from './DiscoverMoreContentCard.styled'

export const DiscoverMoreContentCard = ({artigo}) => {
    const { capitalizeText, convertISODate } = useContext(GlobalContext)

  return (
    <Link to={`/academia/descubra/${artigo.url}`}>
      <DiscoverMoreContentCardStyled>
        <div className='content-card-container'>
          <div className='container-image-title'>
            <div className='container-image'>
              <img src={require(`../../../assets/coins/${artigo.image}`)} alt=""/>
            </div>

            <p className='card-title'>{artigo.title}</p>
          </div>

          <div className='content-card-categories-container'>
            <div className='content-card-stat-container'>
              <div className='content-card-stat'>
                {artigo.categories && artigo.categories.map(categorie => <DetailButton key={categorie} texto={capitalizeText(categorie)}/>)} 
              </div>

              <div className='content-card-stat'>
                {artigo.date ? <DetailButton texto={convertISODate(artigo.createdAt)} /> : ''}
                
              </div>
            </div>
            
            <div>
              {artigo.contentsCount >= 0 ? <DetailButtonColored texto={`${artigo.contentsCount} Conteúdos`}/> : <DetailButtonColored texto={`${artigo.readTime}m`}/>}
            </div>
          </div>
        </div>
      </DiscoverMoreContentCardStyled>
    </Link>
    
  )
}