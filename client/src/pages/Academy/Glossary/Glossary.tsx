import React from 'react'
import { AcademiaNavbar } from '../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { GlossaryList } from '../../../components/Academia/Glossary/GlossaryList/GlossaryList'
import { AdSection } from '../../../components/AdSection/AdSection'
import { Header } from '../../../components/Header/Header'

export const Glossary = () => {
  return (
    <>
      <Header />
      <AdSection />
      <AcademiaNavbar />

      <GlossaryList />
    </>
  )
}
