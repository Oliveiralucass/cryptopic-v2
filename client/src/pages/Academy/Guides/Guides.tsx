import React from 'react'
import { AcademiaNavbar } from '../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { GuidesList } from '../../../components/Academia/Guides/GuidesList/GuidesList'
import { AdSection } from '../../../components/AdSection/AdSection'
import { SectionBanner } from '../../../components/Banners/SectionBanner/SectionBanner'
import { Footer } from '../../../components/Footer/Footer'
import { Header } from '../../../components/Header/Header'

export const Guides = () => {
  return (
    <>
      <Header />
      <AdSection />
      <AcademiaNavbar />
      <SectionBanner titulo={'Crypto PIC | Guias'} subtitulo={'Descubra um novo mundo de Criptomoedas'}/>
      <GuidesList />
      <Footer />
    </>
  )
}
