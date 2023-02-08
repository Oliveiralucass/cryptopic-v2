import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GlobalContext } from '../../../../contexts/GlobalContext/GlobalContext'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useTypedSelectors'
import { addGlossaryContent } from '../../../../store/features/claimSlice'
import { getGlossaryContents } from '../../../../store/features/glossarySlice'
import { IGlossary } from '../../../../utils/interfaces'
import { ClaimButton } from '../../../Buttons/ClaimButtons/ClaimButton/ClaimButton'
import { ClaimedButton } from '../../../Buttons/ClaimButtons/ClaimedButton/ClaimedButton'
import { DetailButton } from '../../../Buttons/DetailButton/DetailButton'
import { DetailButtonColored } from '../../../Buttons/DetailButtonColored/DetailButtonColored'
import { ColorLineStyled } from '../../../ColorLine/ColorLine.styled'
import { MainLoading } from '../../../Loadings/MainLoading/MainLoading'
import { CategoriesDetails, ContentContainer, ContentDetails, GlossaryElementStyled, MoreContentCardSection, MoreContentSection, MoreContentSectionContainer } from './GlossaryElement.styled'
import ReactHtmlParser  from 'html-react-parser';
import { MoreContentCard } from '../../../Cards/MoreContentCard/MoreContentCard'
import { MoreContentButton } from '../../../Buttons/MoreContentButton/MoreContentButton'
import { ReturnLinks } from '../../../Navbar/ReturnLinks/ReturnLinks'
import { getLoggedUser } from '../../../../store/features/authSlice'

export const GlossaryElement = () => {

  const dispatch = useAppDispatch()
  const { data, error, loading } = useAppSelector((state) => state.glossary)
  const { user, token } = useAppSelector((state) => state.auth)
  const { glossary } = useParams()
  const [ artigo, setArtigo ] = useState<IGlossary | null>(null)
  const { convertISODate } = useContext(GlobalContext)

  useEffect(() => {
    dispatch(getGlossaryContents())
  }, [])

  useEffect(() => {
    data && setArtigo(data.filter(artigo => artigo.url == glossary)[0])
  }, [glossary, data])

  return artigo ? (
    <>
        <ReturnLinks section={'Glossário'} sectionUrl={'/academia/glossario'} content={artigo?.title} contentUrl={`/academia/glossario/${glossary}`} mainColor={'#2563eb'}/>

        <GlossaryElementStyled>
            <ColorLineStyled color={'#2563eb'} />

            <ContentContainer>
            <div className='content-title-detail'>
                <h1>{artigo?.title}</h1>
                <DetailButtonColored texto={'Glossário'}/>
            </div>

            {artigo && ReactHtmlParser(artigo.htmlContent)}
            </ContentContainer>

            <ContentDetails>
            <CategoriesDetails>
                {artigo?.categories.map((categoria) => {
                return <Link to={`/academia/guias/${categoria}`} key={categoria}><DetailButton texto={categoria}/></Link>
                })}

                <DetailButton texto={convertISODate(artigo.createdAt)} />
            </CategoriesDetails>
            {user && !user.contentsCompleted.glossary.includes(artigo._id) ? <ClaimButton xp={5} safyr={3} onRequestAction={() => {

              return dispatch(getLoggedUser(token)) &&
                dispatch(addGlossaryContent({
                  xp: 5,
                  safyr: 3,
                  userId: user._id,
                  contentId: artigo._id
                }))
              }}/> : user && user.contentsCompleted.glossary.includes(artigo._id) ? <ClaimedButton xp={5} safyr={3} /> : ''}
            </ContentDetails>
        </GlossaryElementStyled>

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
    </>
  ) : <MainLoading />
}
