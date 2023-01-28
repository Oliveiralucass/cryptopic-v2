import React, { useContext, useEffect } from 'react'
import { AcademiaNavbar } from '../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { AdSection } from '../../../components/AdSection/AdSection'
import { SectionBanner } from '../../../components/Banners/SectionBanner/SectionBanner'
import { ContentCard } from '../../../components/Cards/ContentCard/ContentCard'
import { Header } from '../../../components/Header/Header'
import { UserContext } from '../../../contexts/UserContext/UserContext'


export const Academy = () => {

  const { userTestApi } = useContext(UserContext)

  useEffect(() =>{
    userTestApi()
  },[])

  return (
    <>
      <Header />
      <AdSection />
      <AcademiaNavbar />
      <SectionBanner titulo={'Crypto PIC | Academia'} subtitulo={'Conteúdos completos sobre o mundo cripto'}/>
    </>
  )
}

