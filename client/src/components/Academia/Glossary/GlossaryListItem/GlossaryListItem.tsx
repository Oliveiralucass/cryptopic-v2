import React from 'react'
import { Link } from 'react-router-dom'
import { IArtigo } from '../../../../utils/interfaces'
import { DetailButton } from '../../../Buttons/DetailButton/DetailButton'
import { GlossaryListItemBody, GlossaryListItemHeader, GlossaryListItemStyled } from './GlossaryListItem.Styled'

export const GlossaryListItem = ({artigo}) => {
  return (
    <GlossaryListItemStyled>
        <GlossaryListItemHeader>
        <h2>{artigo.title}</h2>
        <div className='categories-section'>
            {artigo && artigo.categories.map((categoria) => {
                return <Link to={`/academia/guias/${categoria}`}><DetailButton texto={categoria}/></Link>
            })}
        </div>
        </GlossaryListItemHeader>

        <GlossaryListItemBody>
            {artigo.content}
        </GlossaryListItemBody>
    </GlossaryListItemStyled>
  )
}
