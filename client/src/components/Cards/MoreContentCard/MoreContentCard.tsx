import React, { useContext } from 'react'
import { GlobalContext } from '../../../contexts/GlobalContext/GlobalContext'
import { DetailButton } from '../../Buttons/DetailButton/DetailButton'
import { MoreContentCardStyled } from './MoreContentCard.styled'
import { Link } from 'react-router-dom'
import { DetailButtonColored } from '../../Buttons/DetailButtonColored/DetailButtonColored'

export const MoreContentCard = ({artigo}) => {
    const { capitalizeText } = useContext(GlobalContext)

  return (
      <MoreContentCardStyled>
        <div className='content-card-container'>
          <div className='container-image-title'>
            <div className='container-image'>
                <p className='card-title'>{artigo.title}</p>
            </div>

            <div className='content-container-example-text'>
                <p>Uma criptomoeda que tem seu protocolo e algoritmo de mineração programado de certa forma que utilizar de máquinas ASIC</p>
            </div>
          </div>

            <div className='more-content-complete'>
                <Link to={`/academia/glossario/${artigo.url}`}>
                    <DetailButtonColored texto={`Definição Completa`}/>
                </Link>
            </div>

          <div className='content-card-categories-container'>
            <div className='content-card-stat-container'>
              <div className='content-card-stat'>
                {artigo.categories && artigo.categories.map(categorie => <Link to={`/academia/guias/${categorie}`} key={categorie}> <DetailButton texto={capitalizeText(categorie)}/>
                </Link>)} 
              </div>

              <div className='content-card-stat'>
                <DetailButton texto={artigo.date} />
              </div>
            </div>
          </div>
        </div>
      </MoreContentCardStyled>
  )
}