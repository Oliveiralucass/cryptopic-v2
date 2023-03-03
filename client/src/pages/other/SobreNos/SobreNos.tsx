import React from 'react'
import { AdSection } from '../../../components/AdSection/AdSection'
import { Footer } from '../../../components/Footer/Footer'
import { Header } from '../../../components/Header/Header'
import { SobreNosContent } from '../../../components/other/SobreNosContent/SobreNosContent'

export const SobreNos = () => {
  return (
    <>
      <Header />
      <AdSection />
      <SobreNosContent />
      <Footer />
    </>
  )
}
