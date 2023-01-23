import React from 'react'
import { DiscoverListStyled } from './DiscoverList.styled'
import discoverDb from '../../../../discoverDb.json'
import { DiscoverListItem } from '../DiscoverListItem/DiscoverListItem'
import { ContentCard } from '../../../Cards/ContentCard/ContentCard'



export const DiscoverList = () => {
  return (
    <DiscoverListStyled>
      {discoverDb.map(artigo => {
        return <ContentCard key={artigo.id} artigo={artigo}/>
      })}
    </DiscoverListStyled>
  )
}
