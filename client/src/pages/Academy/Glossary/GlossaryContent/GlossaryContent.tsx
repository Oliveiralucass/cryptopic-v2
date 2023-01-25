import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AcademiaNavbar } from '../../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { AdSection } from '../../../../components/AdSection/AdSection'
import { Header } from '../../../../components/Header/Header'
import glossarioDb from '../../../../glossarioDb.json'
import { IArtigo } from '../../../../utils/interfaces'
import ReactHtmlParser  from 'html-react-parser';
import { ContentContainer, ContentDetails, GlossaryContentStyled, GlossaryReturnLinks, MoreContentCardSection, MoreContentSection, MoreContentSectionContainer } from './GlossaryContent.styled'
import { ColorLineStyled } from '../../../../components/ColorLine/ColorLine.styled'
import { DetailButtonColored } from '../../../../components/Buttons/DetailButtonColored/DetailButtonColored'
import { DetailButton } from '../../../../components/Buttons/DetailButton/DetailButton'
import { MoreContentButton } from '../../../../components/Buttons/MoreContentButton/MoreContentButton'
import { MoreContentCard } from '../../../../components/Cards/MoreContentCard/MoreContentCard'
import { ReturnLinks } from '../../../../components/Navbar/ReturnLinks/ReturnLinks'

export const GlossaryContent = () => {

    const { glossary } = useParams()
    const [ artigo, setArtigo ] = useState<IArtigo>()

    useEffect(() =>{
      const selectedArtigo = glossarioDb.filter((artigo) => {
        return artigo.url == glossary 
      })

      setArtigo(selectedArtigo[0])
    })
   
    console.log(artigo);
    

  return (
    <>
      <Header />
      <AdSection />
      <AcademiaNavbar />

      <ReturnLinks section={'Glossário'} sectionUrl={'/academia/glossario'} content={artigo?.title} contentUrl={`/academia/glossario/${glossary}`} mainColor={'#2563eb'}/>
      
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
    
          
      <MoreContentSectionContainer>
        <MoreContentSection>
          <MoreContentCardSection>
            {artigo && <MoreContentCard artigo={glossarioDb[Math.floor(Math.random() * glossarioDb.length)]}/>}
            {artigo && <MoreContentCard artigo={glossarioDb[Math.floor(Math.random() * glossarioDb.length)]}/>}
            {artigo && <MoreContentCard artigo={glossarioDb[Math.floor(Math.random() * glossarioDb.length)]}/>}
          </MoreContentCardSection>
          
          <MoreContentButton texto={'Explore todos os conteúdos >>'} url={'/academia/glossario'}/>
        </MoreContentSection>
      </MoreContentSectionContainer>
      <AdSection />
    </>   
  )
}
