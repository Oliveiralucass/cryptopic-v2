import React from 'react'
import { AcademiaNavbar } from '../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { ExpeditionList } from '../../../components/Academia/Expedition/ExpeditionList/ExpeditionList'
import { AdSection } from '../../../components/AdSection/AdSection'
import { SectionBanner } from '../../../components/Banners/SectionBanner/SectionBanner'
import { Footer } from '../../../components/Footer/Footer'
import { Header } from '../../../components/Header/Header'

export const Expedition = () => {
  return (
    <>
      <Header />
      <AdSection />
      <AcademiaNavbar />
      <SectionBanner titulo={'Crypto PIC | Expedição'} subtitulo={'Uma jornada para descobrir cada detalhe do mundo cripto'}/>
      <ExpeditionList />
      <Footer />
    </>
  )
}
