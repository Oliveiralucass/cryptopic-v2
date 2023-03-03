import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { DetailButton } from '../../Buttons/DetailButton/DetailButton'
import { DetailButtonCustomColored } from '../../Buttons/DetailButtonCustomColored/DetailButtonCustomColored'
import { ColorLineStyled } from '../../ColorLine/ColorLine.styled'
import { NewsElementStyled, NewsHeader } from './NoticiasElement.styled'
import ReactHtmlParser  from 'html-react-parser'
import { IExpedition } from '../../../utils/interfaces'
import newsDb from '../../../newsDb.json'
import { AdSection } from '../../AdSection/AdSection'
import { NotFind } from '../../../pages/NotFind/NotFind'

export const NoticiasElement = () => {

  const { news } = useParams()
  const [ artigo, setArtigo ] = useState<IExpedition | undefined>(undefined)

  useEffect(() =>{
    const selectedArtigo = newsDb.filter((artigo) => {
      return artigo.url == news 
    })
     setArtigo(selectedArtigo[0])
  })

  return artigo !== undefined ? (
    <NewsElementStyled>
        <ColorLineStyled color={artigo.mainColor}/>

        <NewsHeader>
          <div className='container'>
            <h1 className='main-text-title'>{artigo.contentTitle}</h1>
            <DetailButtonCustomColored texto={'Notícias'} bgColor={artigo.secondaryColor} textColor={artigo.mainColor}/>
          </div>

          <div className='categories-container'>
            {artigo.categories.map(categoria => <Link key={categoria} to={`/academia/guias/${categoria}`}>
              <DetailButton texto={categoria} />
            </Link>)}
            <DetailButtonCustomColored texto={`${artigo.readTime}m`} bgColor={artigo.secondaryColor} textColor={artigo.mainColor} />
          </div>
        </NewsHeader>
      


        {artigo.content.map((content, index) => <article key={index} className='main-article'>
        
        {ReactHtmlParser(content)}
        
        <div>
          {(index + 1) % 6 == 0 ? <AdSection /> :  ''}
        </div>

        </article>)}
      </NewsElementStyled>
  ) : <NotFind />
}
