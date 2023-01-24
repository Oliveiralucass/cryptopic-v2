import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AdSection } from '../../../components/AdSection/AdSection'
import { Header } from '../../../components/Header/Header'
import { NoticiasNavbar } from '../../../components/Noticias/NoticiasNavbar/NoticiasNavbar'
import { IExpedition } from '../../../utils/interfaces'
import newsDb from '../../../newsDb.json'
import { NewsContentStyled, NewsHeader } from './NewsContent.styled'
import { ColorLineStyled } from '../../../components/ColorLine/ColorLine.styled'
import { DetailButtonCustomColored } from '../../../components/Buttons/DetailButtonCustomColored/DetailButtonCustomColored'
import { DetailButton } from '../../../components/Buttons/DetailButton/DetailButton'
import { NotFind } from '../../NotFind/NotFind'
import ReactHtmlParser  from 'html-react-parser'

export const NewsContent = () => {

  const { news } = useParams()
  const [ artigo, setArtigo ] = useState<IExpedition | undefined>(undefined)

  useEffect(() =>{
    const selectedArtigo = newsDb.filter((artigo) => {
      return artigo.url == news 
    })
     setArtigo(selectedArtigo[0])
  })

  return artigo !== undefined ? (
    <>
      <Header />
      <AdSection /> 
      <NoticiasNavbar />
      <NewsContentStyled>

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
      </NewsContentStyled>
    </>
  ) : <NotFind />
}
