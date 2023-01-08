import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AcademiaNavbar } from '../../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { AdSection } from '../../../../components/AdSection/AdSection'
import { Header } from '../../../../components/Header/Header'
import glossarioDb from '../../../../glossarioDb.json'
import { IArtigo } from '../../../../utils/interfaces'
import ReactHtmlParser  from 'html-react-parser';
import { ContentContainer, ContentDetails, GlossaryContentStyled, GlossaryReturnLinks } from './GlossaryContent.styled'
import { ColorLineStyled } from '../../../../components/ColorLine/ColorLine.styled'
import { DetailButtonColored } from '../../../../components/Buttons/DetailButtonColored/DetailButtonColored'
import { DetailButton } from '../../../../components/Buttons/DetailButton/DetailButton'

export const GlossaryContent = () => {

    const { glossario } = useParams()
    const [ artigo, setArtigo ] = useState<IArtigo>()

    useEffect(() =>{
      const selectedArtigo = glossarioDb.filter((artigo) => {
        return artigo.urlName == glossario 
      })

      setArtigo(selectedArtigo[0])
    })
   
    console.log(artigo);
    

  return (
    <>
      <Header />
      <AdSection />
      <AcademiaNavbar />

      <GlossaryReturnLinks>
        <nav>
          <ul>
            <li><Link to={'/academia/glossario'} className='return-glossary'>Glossário</Link></li>
            <li><Link to={`/academia/glossario/${glossario}`} className='return-content'>{artigo?.title}</Link></li>
          </ul>
        </nav>
      </GlossaryReturnLinks>
      
      <GlossaryContentStyled>
        <ColorLineStyled color={'#2563eb'} />

        <ContentContainer>
          <div className='content-title-detail'>
            <h1>{artigo?.title}</h1>
            <DetailButtonColored texto={'Glossário'}/>
          </div>

          {artigo && ReactHtmlParser(artigo.htmlContent)}
        </ContentContainer>

        <ContentDetails>
          {artigo?.categories.map((categoria) => {
            return <Link to={`/academia/guias/${categoria}`} key={categoria}><DetailButton texto={categoria}/></Link>
          })}

          <DetailButton texto={artigo?.date} />
        </ContentDetails>


      </GlossaryContentStyled>
    </>   
  )
}
