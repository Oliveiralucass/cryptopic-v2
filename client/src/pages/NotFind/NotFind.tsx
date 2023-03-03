import React from 'react'
import { AdSection } from '../../components/AdSection/AdSection'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'

export const NotFind = () => {
  return (
    <div>
      <Header />
      <AdSection />
      <h1>404</h1>
      <h3>Página não encontrada</h3>
      <Footer />
    </div>
  )
}
