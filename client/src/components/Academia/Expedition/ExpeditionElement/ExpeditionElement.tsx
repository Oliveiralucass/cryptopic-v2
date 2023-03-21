import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useTypedSelectors'
import { getExpeditionContents } from '../../../../store/features/expeditionSlice'
import { IExpedition } from '../../../../utils/interfaces'
import { AdSection } from '../../../AdSection/AdSection'
import { DetailButton } from '../../../Buttons/DetailButton/DetailButton'
import { DetailButtonCustomColored } from '../../../Buttons/DetailButtonCustomColored/DetailButtonCustomColored'
import { ColorLineStyled } from '../../../ColorLine/ColorLine.styled'
import { ReturnLinks } from '../../../Navbar/ReturnLinks/ReturnLinks'
import { ClaimContainer, ExpeditionElementHeader, ExpeditionElementStyled, MoreContentCardSection, MoreContentSection, MoreContentSectionContainer } from './ExpeditionElement.styled'
import ReactHtmlParser  from 'html-react-parser';
import { MainLoading } from '../../../Loadings/MainLoading/MainLoading'
import { ClaimButton } from '../../../Buttons/ClaimButtons/ClaimButton/ClaimButton'
import { ClaimedButton } from '../../../Buttons/ClaimButtons/ClaimedButton/ClaimedButton'
import { addDiscoverContent } from '../../../../store/features/claimSlice'
import { MoreContentButton } from '../../../Buttons/MoreContentButton/MoreContentButton'
import { ExpeditionMoreContentCard } from '../../../Cards/ExpeditionMoreContentCard/ExpeditionMoreContentCard'
import { Footer } from '../../../Footer/Footer'

export const ExpeditionElement = () => {

    const { expedition } = useParams()
    const [ artigo, setArtigo ] = useState<IExpedition | undefined>(undefined)
  
    const dispatch = useAppDispatch()
    const { data } = useAppSelector(state => state.expedition)
    const { user, token } = useAppSelector((state) => state.auth)
  
    // useEffect(() => {
    //   if(!data)dispatch(getExpeditionContents())
    // }, [])
  
    // useEffect(() => {
    //   data && setArtigo(data.filter(artigo => artigo.url == expedition)[0])
    // }, [expedition, data])



    useEffect(() => {
      const dispatchDiscoverContents = async () => {
        await dispatch(getExpeditionContents())
      }

      if(!data) dispatchDiscoverContents()

      data && setArtigo(data.filter(artigo => artigo.url == expedition)[0])
    }, [data, expedition])

  return artigo ? (
    <>
        <ReturnLinks section={'Expedição'} sectionUrl={'/academia/expedicao'} content={artigo?.title} contentUrl={`/academia/glossario/${expedition}`} mainColor={'#2563eb'}/>

        <ExpeditionElementStyled>

        <ColorLineStyled color={artigo.mainColor}/>

        <ExpeditionElementHeader>
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
        </ExpeditionElementHeader>


        {artigo.content.map((content, index) => <article className='main-article' key={index}>
        {ReactHtmlParser(content)}
        <div>
            {(index + 1) % 4 == 0 ? <AdSection /> :  ''}
        </div>
        </article>)}


        <ClaimContainer>
        {user && !user.contentsCompleted.discover.includes(artigo._id) ? <ClaimButton xp={5} safyr={3} onRequestAction={() => dispatch(addDiscoverContent({
            xp: 3,
            safyr: 5,
            userId: user._id,
            contentId: artigo._id
        }))}/> : user && user.contentsCompleted.discover.includes(artigo._id) ? <ClaimedButton
          xp={5} safyr={3} /> : ''}
        </ClaimContainer>
        </ExpeditionElementStyled>
        <MoreContentSectionContainer>
          <MoreContentSection>
            <MoreContentCardSection>
                {artigo && <ExpeditionMoreContentCard artigo={data[Math.floor(Math.random() * data.length)]}/>}
                {artigo && <ExpeditionMoreContentCard artigo={data[Math.floor(Math.random() * data.length)]}/>}
                {artigo && <ExpeditionMoreContentCard artigo={data[Math.floor(Math.random() * data.length)]}/>}
            </MoreContentCardSection>
            
            <MoreContentButton texto={'Explore todos os conteúdos >>'} url={'/academia/expedicao'}/>
          </MoreContentSection>
      </MoreContentSectionContainer>
      <Footer />
    </>
  ) : <MainLoading />
}
