import React from 'react'
import { DiscoverListStyled } from './DiscoverList.styled'
import discoverDb from '../../../../discoverDb.json'
import { DiscoverListItem } from '../DiscoverListItem/DiscoverListItem'
import { DiscoverContentCard } from '../../../Cards/DiscoverContentCard/DiscoverContentCard'


export const DiscoverList = () => {
  return (
    <DiscoverListStyled>
      {discoverDb.map(artigo => {
        return <DiscoverContentCard key={artigo.id} artigo={artigo}/>
      })}
    </DiscoverListStyled>
  )
}
