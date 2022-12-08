import React from 'react'
import { useParams } from 'react-router-dom'
import { AcademiaNavbar } from '../../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { AdSection } from '../../../../components/AdSection/AdSection'
import { Header } from '../../../../components/Header/Header'

export const GlossaryContent = () => {

    const { glossario } = useParams()

  return (
    <>
      <Header />
      <AdSection />
      <AcademiaNavbar />
    </>

   
  )
}
