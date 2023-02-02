import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../../contexts/GlobalContext/GlobalContext'
import { DetailButton } from '../../../Buttons/DetailButton/DetailButton'
import { DetailButtonColored } from '../../../Buttons/DetailButtonColored/DetailButtonColored'
import { AcademiaHomeGlossaryCardStyled, AcademiaHomeGlossaryListItemBody, AcademiaHomeGlossaryListItemHeader } from './AcademiaHomeGlossaryCard.styled'

export const AcademiaHomeGlossaryCard = ({artigo}) => {

  const { convertISODate } = useContext(GlobalContext)
  return (
    <AcademiaHomeGlossaryCardStyled>
      <Link to={`/academia/glossario/${artigo.url}`}>
        <AcademiaHomeGlossaryListItemHeader>
        <h2>{artigo.title}</h2>
        <div className='categories-section'>
            {artigo && artigo.categories.map((categoria) => {
                return <DetailButton texto={categoria} key={categoria}/>
            })}
            {artigo && <DetailButtonColored texto={convertISODate(artigo.createdAt)} />}
        </div>
        </AcademiaHomeGlossaryListItemHeader>

        <AcademiaHomeGlossaryListItemBody>
            <p>{artigo.content}</p>
        </AcademiaHomeGlossaryListItemBody>
      </Link>
    </AcademiaHomeGlossaryCardStyled>
  )
}
