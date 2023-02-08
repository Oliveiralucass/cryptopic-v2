import React, { useEffect } from 'react'
import { DiscoverListStyled } from './DiscoverList.styled'
import { DiscoverContentCard } from '../../../Cards/DiscoverContentCard/DiscoverContentCard'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useTypedSelectors'
import { getDiscoverContents } from '../../../../store/features/discoverSlice'
import { MainLoading } from '../../../Loadings/MainLoading/MainLoading'

export const DiscoverList = () => {
  const dispatch = useAppDispatch()
  const { data, error, loading } = useAppSelector((state) => state.discover)

  useEffect(() => {
    if(!data) dispatch(getDiscoverContents())
  }, [])

  return data ? (
    <DiscoverListStyled>
      {data.map(artigo => {
        return <DiscoverContentCard key={artigo._id} artigo={artigo}/>
      })}
    </DiscoverListStyled>
  ) : <MainLoading />
}
