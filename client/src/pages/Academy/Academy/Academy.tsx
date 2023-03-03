import React, { useContext, useEffect } from 'react'
import { AcademiaHomeDiscoverCard } from '../../../components/Academia/AcademiaHome/AcademiaHomeDiscoverCard/AcademiaHomeDiscoverCard'
import { AcademiaHomeGlossaryCard } from '../../../components/Academia/AcademiaHome/AcademiaHomeGlossaryCard/AcademiaHomeGlossaryCard'
import { AcademiaNavbar } from '../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { AdSection } from '../../../components/AdSection/AdSection'
import { SectionBanner } from '../../../components/Banners/SectionBanner/SectionBanner'
import { MoreContentButton } from '../../../components/Buttons/MoreContentButton/MoreContentButton'
import { Footer } from '../../../components/Footer/Footer'
import { Header } from '../../../components/Header/Header'
import { MainLoading } from '../../../components/Loadings/MainLoading/MainLoading'
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelectors'
import { getDiscoverContents } from '../../../store/features/discoverSlice'
import { getGlossaryContents } from '../../../store/features/glossarySlice'
import { AcademiaDiscoverList, AcademiaGlossaryList, AcademyStyled } from './Academy.styled'

export const Academy = () => {

  const dispatch = useAppDispatch()
  useEffect(() => { 
    if(!discoverData) dispatch(getDiscoverContents())
    if(!glossaryData) dispatch(getGlossaryContents())
  }, [])
  const { data: discoverData } = useAppSelector((state) => state.discover)
  const { data: glossaryData } = useAppSelector((state) => state.glossary)

  let discoverNumberArray: number[] = []

  discoverNumberArray.push((Math.floor(Math.random() * (discoverData?.length / 3))));
  discoverNumberArray.push(Math.floor((Math.random() * (discoverData?.length / 3)) + (discoverData?.length / 3)));
  discoverNumberArray.push(Math.floor((Math.random() * (discoverData?.length / 3)) + ((discoverData?.length / 3) * 2)));

  let glossaryNumberArray: number[] = []

  glossaryNumberArray.push((Math.floor(Math.random() * (glossaryData?.length / 3))));
  glossaryNumberArray.push(Math.floor((Math.random() * (glossaryData?.length / 3)) + (glossaryData?.length / 3)));
  glossaryNumberArray.push(Math.floor((Math.random() * (glossaryData?.length / 3)) + ((glossaryData?.length / 3) * 2)));

  return (
    <>
      <Header />
      <AdSection />
      <AcademiaNavbar />
      <SectionBanner titulo={'Crypto PIC | Academia'} subtitulo={'Conteúdos completos sobre o mundo cripto'}/>
      
      <AcademyStyled>
      {discoverData ? <AcademiaDiscoverList>
          <AcademiaHomeDiscoverCard key={discoverData[discoverData.length-1]._id} artigo={discoverData[discoverData.length-1]}/>
          <AcademiaHomeDiscoverCard key={discoverData[discoverData.length-2]._id} artigo={discoverData[discoverData.length-2]}/>
          <AcademiaHomeDiscoverCard key={discoverData[discoverData.length-3]._id} artigo={discoverData[discoverData.length-3]}/>
        </AcademiaDiscoverList>
      : <MainLoading />}

        <MoreContentButton  texto={'Explore todos os conteúdos - Descubra'} url={'/academia/descubra'}/>
      
      {glossaryData && glossaryNumberArray.length == 3 ? <AcademiaGlossaryList>
          <AcademiaHomeGlossaryCard artigo={glossaryData[glossaryNumberArray[0]]}/>
          <AcademiaHomeGlossaryCard artigo={glossaryData[glossaryNumberArray[1]]}/>
          <AcademiaHomeGlossaryCard artigo={glossaryData[glossaryNumberArray[2]]}/>
        </AcademiaGlossaryList>
        : <MainLoading />}
        
        <MoreContentButton  texto={'Explore todos os conteúdos - Glossário'} url={'/academia/glossario'}/>

      </AcademyStyled> 
      <Footer />
    </>
  )
}

