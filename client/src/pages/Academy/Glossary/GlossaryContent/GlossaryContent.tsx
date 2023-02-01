import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AcademiaNavbar } from '../../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { AdSection } from '../../../../components/AdSection/AdSection'
import { Header } from '../../../../components/Header/Header'
import glossarioDb from '../../../../glossarioDb.json'
import { IArtigo, IGlossary } from '../../../../utils/interfaces'
import ReactHtmlParser  from 'html-react-parser';
import { ContentContainer, ContentDetails, GlossaryContentStyled, GlossaryReturnLinks, MoreContentCardSection, MoreContentSection, MoreContentSectionContainer } from './GlossaryContent.styled'
import { ColorLineStyled } from '../../../../components/ColorLine/ColorLine.styled'
import { DetailButtonColored } from '../../../../components/Buttons/DetailButtonColored/DetailButtonColored'
import { DetailButton } from '../../../../components/Buttons/DetailButton/DetailButton'
import { MoreContentButton } from '../../../../components/Buttons/MoreContentButton/MoreContentButton'
import { MoreContentCard } from '../../../../components/Cards/MoreContentCard/MoreContentCard'
import { ReturnLinks } from '../../../../components/Navbar/ReturnLinks/ReturnLinks'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useTypedSelectors'
import { getGlossaryContents } from '../../../../store/features/glossarySlice'
import { MainLoading } from '../../../../components/Loadings/MainLoading/MainLoading'
import { GlobalContext } from '../../../../contexts/GlobalContext/GlobalContext'

export const GlossaryContent = () => {

  const dispatch = useAppDispatch()
  const { data, error, loading } = useAppSelector((state) => state.glossary)
  const { glossary } = useParams()
  const [ artigo, setArtigo ] = useState<IGlossary | null>(null)
  const { convertISODate } = useContext(GlobalContext)

  useEffect(() => {
    if(!data) dispatch(getGlossaryContents())
  }, [])
 
  useEffect(() => {
    data && setArtigo(data.filter(artigo => artigo.url == glossary)[0])
  }, [data])


  return artigo ? (
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

          <DetailButton texto={convertISODate(artigo.createdAt)} />
        </ContentDetails>
      </GlossaryContentStyled>
    
          
      <MoreContentSectionContainer>
        <MoreContentSection>
          <MoreContentCardSection>
            {artigo && <MoreContentCard artigo={data[Math.floor(Math.random() * data.length)]}/>}
            {artigo && <MoreContentCard artigo={data[Math.floor(Math.random() * data.length)]}/>}
            {artigo && <MoreContentCard artigo={data[Math.floor(Math.random() * data.length)]}/>}
          </MoreContentCardSection>
          
          <MoreContentButton texto={'Explore todos os conteúdos >>'} url={'/academia/glossario'}/>
        </MoreContentSection>
      </MoreContentSectionContainer>
      <AdSection />
    </>   
  ) : <MainLoading />
}
