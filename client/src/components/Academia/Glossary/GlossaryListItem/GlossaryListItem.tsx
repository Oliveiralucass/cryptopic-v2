import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../../contexts/GlobalContext/GlobalContext'
import { IArtigo } from '../../../../utils/interfaces'
import { DetailButton } from '../../../Buttons/DetailButton/DetailButton'
import { DetailButtonColored } from '../../../Buttons/DetailButtonColored/DetailButtonColored'
import { GlossaryListItemBody, GlossaryListItemHeader, GlossaryListItemStyled } from './GlossaryListItem.Styled'

export const GlossaryListItem = ({artigo}) => {

  const { convertISODate } = useContext(GlobalContext)
  return (
    <GlossaryListItemStyled>
        <GlossaryListItemHeader>
        <h2>{artigo.title}</h2>
        <div className='categories-section'>
            {artigo && artigo.categories.map((categoria) => {
                return <DetailButton texto={categoria} key={categoria}/>
            })}
            {artigo && <DetailButtonColored texto={convertISODate(artigo.createdAt)} />}
        </div>
        </GlossaryListItemHeader>

        <GlossaryListItemBody>
            <p>{artigo.content}</p>
        </GlossaryListItemBody>
    </GlossaryListItemStyled>
  )
}
