import React from 'react'
import { AdSection } from '../../../components/AdSection/AdSection'
import { Footer } from '../../../components/Footer/Footer'
import { Header } from '../../../components/Header/Header'
import { NoticiasNavbar } from '../../../components/Noticias/NoticiasNavbar/NoticiasNavbar'

export const NewsTrading = () => {
  return (
    <>
      <Header />
      <AdSection />
      <NoticiasNavbar />
      <Footer />
    </>
  )
}
