import React, { useEffect } from 'react'
import { ExpeditionListStyled } from './ExpeditionList.styled'
import { ContentCard } from '../../../Cards/ContentCard/ContentCard'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useTypedSelectors'
import { getExpeditionContents } from '../../../../store/features/expeditionSlice'
import { MainLoading } from '../../../Loadings/MainLoading/MainLoading'



export const ExpeditionList = () => {

  const dispatch = useAppDispatch()
  const { data, error, loading } = useAppSelector((state) => state.expedition)

  useEffect(() => {
    if(!data) dispatch(getExpeditionContents())
  }, [])

  return data ? (
    <ExpeditionListStyled>
      {data.map(artigo => {
        return <ContentCard key={artigo._id} artigo={artigo}/>
      })}
    </ExpeditionListStyled>
  ) : <MainLoading />
}
