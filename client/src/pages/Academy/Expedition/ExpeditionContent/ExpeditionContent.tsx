import React, { useEffect, useState } from 'react'
import { AcademiaNavbar } from '../../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { AdSection } from '../../../../components/AdSection/AdSection'
import { Header } from '../../../../components/Header/Header'
import expeditionDb from '../../../../expeditionDb.json'
import ReactHtmlParser  from 'html-react-parser';
import { ExpeditionContentStyled, ExpeditionHeader } from './ExpeditionContent.styled'
import { Link, useParams } from 'react-router-dom'
import { IExpedition } from '../../../../utils/interfaces'
import { NotFind } from '../../../NotFind/NotFind'
import { ColorLineStyled } from '../../../../components/ColorLine/ColorLine.styled'
import { DetailButtonCustomColored } from '../../../../components/Buttons/DetailButtonCustomColored/DetailButtonCustomColored'
import { DetailButton } from '../../../../components/Buttons/DetailButton/DetailButton'
import { ReturnLinks } from '../../../../components/Navbar/ReturnLinks/ReturnLinks'

export const ExpeditionContent = () => {

  const { expedition } = useParams()
  const [ artigo, setArtigo ] = useState<IExpedition | undefined>(undefined)

  useEffect(() =>{
    const selectedArtigo = expeditionDb.filter((artigo) => {
      return artigo.url == expedition 
    })
     setArtigo(selectedArtigo[0])
  })

  console.log(artigo);

  return artigo !== undefined ? (
    <>
      <Header />
      <AdSection /> 
      <AcademiaNavbar />

      <ReturnLinks section={'Expedição'} sectionUrl={'/academia/expedicao'} content={artigo?.title} contentUrl={`/academia/glossario/${expedition}`} mainColor={'#2563eb'}/>

      <ExpeditionContentStyled>

        <ColorLineStyled color={artigo.mainColor}/>

        <ExpeditionHeader>
          <div className='container'>
            <h1 className='main-text-title'>{artigo.contentTitle}</h1>
            <DetailButtonCustomColored texto={'Descubra'} bgColor={artigo.secondaryColor} textColor={artigo.mainColor}/>
          </div>

          <div className='categories-container'>
            {artigo.categories.map(categoria => <Link to={`/academia/guias/${categoria}`}>
              <DetailButton texto={categoria} />
            </Link>)}
            <DetailButtonCustomColored texto={`${artigo.readTime}m`} bgColor={artigo.secondaryColor} textColor={artigo.mainColor} />
          </div>
        </ExpeditionHeader>


        {artigo.content.map((content, index) => <article className='main-article'>
        
        {ReactHtmlParser(content)}
        
        <div>
          {(index + 1) % 4 == 0 ? <AdSection /> :  ''}
        </div>

        </article>)}
      </ExpeditionContentStyled>
    </>
  ) : <NotFind />
}
