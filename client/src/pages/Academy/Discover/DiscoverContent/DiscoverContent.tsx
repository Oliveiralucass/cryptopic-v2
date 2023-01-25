import React, { useEffect, useState } from 'react'
import { AcademiaNavbar } from '../../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { AdSection } from '../../../../components/AdSection/AdSection'
import { Header } from '../../../../components/Header/Header'
import discoverDb from '../../../../discoverDb.json'
import ReactHtmlParser  from 'html-react-parser';
import { DiscoverContentStyled, DiscoverHeader } from './DiscoverContent.styled'
import { Link, useParams } from 'react-router-dom'
import { IDiscover } from '../../../../utils/interfaces'
import { NotFind } from '../../../NotFind/NotFind'
import { ColorLineStyled } from '../../../../components/ColorLine/ColorLine.styled'
import { DetailButtonCustomColored } from '../../../../components/Buttons/DetailButtonCustomColored/DetailButtonCustomColored'
import { DetailButton } from '../../../../components/Buttons/DetailButton/DetailButton'
import { ReturnLinks } from '../../../../components/Navbar/ReturnLinks/ReturnLinks'

export const DiscoverContent = () => {

  const { discover } = useParams()
  const [ artigo, setArtigo ] = useState<IDiscover | undefined>(undefined)

  useEffect(() =>{
    const selectedArtigo = discoverDb.filter((artigo) => {
      return artigo.url == discover 
    })
     setArtigo(selectedArtigo[0])
  })

  return artigo !== undefined ? (
    <>
      <Header />
      <AdSection /> 
      <AcademiaNavbar />

      <ReturnLinks section={'Descubra'} sectionUrl={'/academia/descubra'} content={artigo?.title} contentUrl={`/academia/descubra/${discover}`} mainColor={artigo.mainColor}/>

      <DiscoverContentStyled>

        <ColorLineStyled color={artigo.mainColor}/>

        <DiscoverHeader>
          <div className='container'>
            <h1 className='main-text-title'>{artigo.contentTitle}</h1>
            <DetailButtonCustomColored texto={'Descubra'} bgColor={artigo.secondaryColor} textColor={artigo.mainColor}/>
          </div>

          <div className='categories-container'>
            {artigo.categories.map(categoria => <Link to={`/academia/guias/${categoria}`} key={categoria}>
              <DetailButton texto={categoria} />
            </Link>)}
            <DetailButtonCustomColored texto={`${artigo.readTime}m`} bgColor={artigo.secondaryColor} textColor={artigo.mainColor} />
          </div>
        </DiscoverHeader>


        {artigo.content.map((content, index) => <article className='main-article' key={index}>
        
        {ReactHtmlParser(content)}
        
        <div>
          {(index + 1) % 4 == 0 ? <AdSection /> :  ''}
        </div>

        </article>)}
      </DiscoverContentStyled>
    </>
  ) : <NotFind />
}
