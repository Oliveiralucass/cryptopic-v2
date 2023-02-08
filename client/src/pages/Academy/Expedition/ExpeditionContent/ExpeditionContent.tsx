import React from 'react'
import { AcademiaNavbar } from '../../../../components/Academia/AcademiaNavbar/AcademiaNavbar'
import { AdSection } from '../../../../components/AdSection/AdSection'
import { Header } from '../../../../components/Header/Header'
import { ExpeditionElement } from '../../../../components/Academia/Expedition/ExpeditionElement/ExpeditionElement'

export const ExpeditionContent = () => {

  return (
    <>
      <Header />
      <AdSection /> 
      <AcademiaNavbar />
      <ExpeditionElement />
    </>
  )
}
