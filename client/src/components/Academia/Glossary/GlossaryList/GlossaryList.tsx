import React, { useEffect, useState } from 'react'
import { GlossaryListStyled } from './GlossaryList.styled'
import { IGlossary } from '../../../../utils/interfaces'
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

  const [ search, setSearch ] = useState('')

  const filteredContent = search.length > 0 && data
    ? data.filter(content => content.title.toLowerCase().includes(search.toLowerCase())) : []

    console.log('render')

  return (
    <GlossaryListStyled>
      <div>
        <input className='glossary-list-search-input' type="text" placeholder='Pesquise Termos aqui...' onChange={e => setSearch(e.target.value)} />

      </div>

      {search.length > 0 ?
        
        filteredContent && filteredContent.map((artigo: IGlossary) => {
          return <Link to={`/academia/glossario/${artigo.url}`} key={artigo._id}><GlossaryListItem artigo={artigo}/></Link>
        }) 
        : 
        data && data.map((artigo: IGlossary) => {
          return <Link to={`/academia/glossario/${artigo.url}`} key={artigo._id}><GlossaryListItem artigo={artigo}/></Link>
        })
      }    
      
        
    </GlossaryListStyled>
  )
}
