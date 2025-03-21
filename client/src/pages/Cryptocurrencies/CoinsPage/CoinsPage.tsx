import React from 'react'
import { AdSection } from '../../../components/AdSection/AdSection'
import { BetaSection } from '../../../components/BetaSection/BetaSection'
import { CoinElement } from '../../../components/Coins/CoinElement/CoinElement'
import { Footer } from '../../../components/Footer/Footer'
import { Header } from '../../../components/Header/Header'

export const CoinsPage = () => {
  
  return (
    <>
      <Header />
      <AdSection />
      <BetaSection />
      <CoinElement />
      <Footer />
    </>
  )
}
