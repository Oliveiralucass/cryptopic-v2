import React from 'react'
import { AcademiaNavbar } from '../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { GlossaryList } from '../../../components/Academia/Glossary/GlossaryList/GlossaryList'
import { AdSection } from '../../../components/AdSection/AdSection'
import { SectionBanner } from '../../../components/Banners/SectionBanner/SectionBanner'
import { Footer } from '../../../components/Footer/Footer'
import { Header } from '../../../components/Header/Header'

export const Glossary = () => {
  return (
    <>
      <Header />
      <AdSection />
      <AcademiaNavbar />
      <SectionBanner titulo={'Crypto PIC | Glossário'} subtitulo={'Entenda as palavras de Cripto'}/>
      <GlossaryList />
      <Footer />
    </>
  )
}
