import React from 'react'
import { ExpeditionListStyled } from './ExpeditionList.styled'
import expeditionDb from '../../../../expeditionDb.json'
import { ContentCard } from '../../../Cards/ContentCard/ContentCard'



export const ExpeditionList = () => {
  return (
    <ExpeditionListStyled>
      {expeditionDb.map(artigo => {
        return <ContentCard key={artigo.id} artigo={artigo}/>
      })}
    </ExpeditionListStyled>
  )
}
