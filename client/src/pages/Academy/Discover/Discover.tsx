import React from 'react'
import { AcademiaNavbar } from '../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { DiscoverList } from '../../../components/Academia/Discover/DiscoverList/DiscoverList'
import { AdSection } from '../../../components/AdSection/AdSection'
import { SectionBanner } from '../../../components/Banners/SectionBanner/SectionBanner'
import { Header } from '../../../components/Header/Header'

export const Discover = () => {
  return (
    <>
      <Header />
      <AdSection />
      <AcademiaNavbar />
      <SectionBanner titulo={'Descubra'} subtitulo={'Descubra um novo mundo de Criptomoedas'}/>
      <DiscoverList />
    </>
  )
}
