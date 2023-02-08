import React, { useContext } from 'react'
import { GlobalContext } from '../../../contexts/GlobalContext/GlobalContext'
import { DetailButton } from '../../Buttons/DetailButton/DetailButton'
import { Link } from 'react-router-dom'
import { DetailButtonColored } from '../../Buttons/DetailButtonColored/DetailButtonColored'
import { ExpeditionMoreContentCardStyled } from './ExpeditionMoreContentCard.styled'

export const ExpeditionMoreContentCard = ({artigo}) => {
    const { capitalizeText } = useContext(GlobalContext)

  return (
    <Link to={`/academia/expedicao/${artigo.url}`}>
      <ExpeditionMoreContentCardStyled>
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
                {artigo.date ? <DetailButton texto={artigo.date} /> : ''}
                
              </div>
            </div>
            
            <div>
              {artigo.contentsCount >= 0 ? <DetailButtonColored texto={`${artigo.contentsCount} Conteúdos`}/> : <DetailButtonColored texto={`${artigo.readTime}m`}/>}
              
              

            </div>
          </div>
        </div>
      </ExpeditionMoreContentCardStyled>
    </Link>
    
  )
}