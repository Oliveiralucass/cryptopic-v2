import React, { useEffect, useState } from 'react'
import { GlossaryListStyled } from './GlossaryList.styled'
import glossarioDb from '../../../../glossarioDb.json'
import { IArtigo, IGlossary } from '../../../../utils/interfaces'
import { GlossaryListItem } from '../GlossaryListItem/GlossaryListItem'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useTypedSelectors'
import { getGlossaryContents } from '../../../../store/features/glossarySlice'

export const GlossaryList = () => {

  const dispatch = useAppDispatch()
  const { data, error, loading } = useAppSelector((state) => state.glossary)

  useEffect(() => {
    if(!data) dispatch(getGlossaryContents())
  }, [])

  return (
    <GlossaryListStyled>
        {data && data.map((artigo: IGlossary) => {
            return <Link to={`/academia/glossario/${artigo.url}`} key={artigo._id}><GlossaryListItem artigo={artigo}/></Link>
        })}
    </GlossaryListStyled>
  )
}
