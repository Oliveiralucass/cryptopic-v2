import React, {useState } from 'react'
import { AcademiaNavbar } from '../../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { AdSection } from '../../../../components/AdSection/AdSection'
import { Header } from '../../../../components/Header/Header'
import { GlossaryElement } from '../../../../components/Academia/Glossary/GlossaryElement/GlossaryElement'
import { Footer } from '../../../../components/Footer/Footer'

export const GlossaryContent = () => {
  return (
    <>
      <Header />
      <AdSection />
      <AcademiaNavbar />
      <GlossaryElement />
      <AdSection />
      <Footer />
    </>   
  )
}
