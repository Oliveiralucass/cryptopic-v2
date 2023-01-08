import React, { useEffect, useState } from 'react'
import { GlossaryListStyled } from './GlossaryList.styled'
import glossarioDb from '../../../../glossarioDb.json'
import { IArtigo } from '../../../../utils/interfaces'
import { GlossaryListItem } from '../GlossaryListItem/GlossaryListItem'
import { Link } from 'react-router-dom'

export const GlossaryList = () => {

    const [artigosList, setArtigosList] = useState<IArtigo[]>(glossarioDb.sort((a, b) => (a.title > b.title) ? 1 : -1))

    console.log(artigosList);
    

  return (
    <GlossaryListStyled>
        {artigosList.map((artigo) => {
            return <Link to={`/academia/glossario/${artigo.urlName}`}><GlossaryListItem key={artigo.id} artigo={artigo}/></Link>
        })}
    </GlossaryListStyled>
  )
}
