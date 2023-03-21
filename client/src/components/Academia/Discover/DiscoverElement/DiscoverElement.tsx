import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useTypedSelectors'
import { getDiscoverContents } from '../../../../store/features/discoverSlice'
import { addDiscoverContent } from '../../../../store/features/claimSlice'
import { IDiscover } from '../../../../utils/interfaces'
import { AdSection } from '../../../AdSection/AdSection'
import { DetailButton } from '../../../Buttons/DetailButton/DetailButton'
import { DetailButtonCustomColored } from '../../../Buttons/DetailButtonCustomColored/DetailButtonCustomColored'
import { ColorLineStyled } from '../../../ColorLine/ColorLine.styled'
import { ReturnLinks } from '../../../Navbar/ReturnLinks/ReturnLinks'
import { ClaimContainer, DiscoverElementHeader, DiscoverElementStyled, MoreContentCardSection, MoreContentSection, MoreContentSectionContainer } from './DiscoverElement.styled'
import ReactHtmlParser  from 'html-react-parser';
import { MainLoading } from '../../../Loadings/MainLoading/MainLoading'
import { ClaimButton } from '../../../Buttons/ClaimButtons/ClaimButton/ClaimButton'
import { ClaimedButton } from '../../../Buttons/ClaimButtons/ClaimedButton/ClaimedButton'
import { MoreContentButton } from '../../../Buttons/MoreContentButton/MoreContentButton'
import { DiscoverMoreContentCard } from '../../../Cards/DiscoverMoreContentCard/DiscoverMoreContentCard'
import { Footer } from '../../../Footer/Footer'

export const DiscoverElement = () => {

    const { discover } = useParams()
    const [ artigo, setArtigo ] = useState<IDiscover | null>(null)
    
    const dispatch = useAppDispatch()
    const { data } = useAppSelector(state => state.discover)
    const { user, token } = useAppSelector((state) => state.auth)
  
    // useEffect(() => {
    //   if(!data)dispatch(getDiscoverContents())
    // }, [])
  
    // useEffect(() => {
    //   data && setArtigo(data.filter(artigo => artigo.url == discover)[0])
    // }, [discover, data])
  
    useEffect(() => {
      const dispatchDiscoverContents = async () => {
        await dispatch(getDiscoverContents())
      }

      if(!data) dispatchDiscoverContents()

      data && setArtigo(data.filter(artigo => artigo.url == discover)[0])
    }, [data, discover])
    
  return artigo ? (
   <>
    <ReturnLinks section={'Descubra'} sectionUrl={'/academia/descubra'} content={artigo?.title} contentUrl={`/academia/descubra/${discover}`} mainColor={artigo.mainColor}/>

    <DiscoverElementStyled>

        <ColorLineStyled color={artigo.mainColor}/>

        <DiscoverElementHeader>
            <div className='container'>
            <h1 className='main-text-title'>{artigo.contentTitle}</h1>
            <DetailButtonCustomColored texto={'Descubra'} bgColor={artigo.secondaryColor} textColor={artigo.mainColor}/>
            </div>

            <div className='categories-container'>
            {artigo.categories.map(categoria => 
                <DetailButton texto={categoria} />
           )}
            <DetailButtonCustomColored texto={`${artigo.readTime}m`} bgColor={artigo.secondaryColor} textColor={artigo.mainColor} />
            </div>
        </DiscoverElementHeader>


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
    </DiscoverElementStyled>
    <MoreContentSectionContainer>
      <MoreContentSection>
        <MoreContentCardSection>
            {artigo && <DiscoverMoreContentCard artigo={data[Math.floor(Math.random() * data.length)]}/>}
            {artigo && <DiscoverMoreContentCard artigo={data[Math.floor(Math.random() * data.length)]}/>}
            {artigo && <DiscoverMoreContentCard artigo={data[Math.floor(Math.random() * data.length)]}/>}
        </MoreContentCardSection>
        
        <MoreContentButton texto={'Explore todos os conteúdos >>'} url={'/academia/descubra'}/>
      </MoreContentSection>
    </MoreContentSectionContainer>
    <Footer />
   </>
  ) : <MainLoading />
}
