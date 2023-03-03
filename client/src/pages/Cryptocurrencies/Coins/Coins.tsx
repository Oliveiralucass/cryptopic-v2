import React, { useContext, useEffect } from 'react'
import { AdSection } from '../../../components/AdSection/AdSection'
import { SectionBanner } from '../../../components/Banners/SectionBanner/SectionBanner'
import { CoinsList } from '../../../components/Coins/CoinsList/CoinsList'
import { Footer } from '../../../components/Footer/Footer'
import { Header } from '../../../components/Header/Header'
import { CoinGeckoContext } from '../../../contexts/CoinGeckoContext/CoinGeckoContext'

export const Coins = () => {
  
  return (
    <div>
      <Header />
      <AdSection />
      <SectionBanner titulo={'Mercado de Criptomoedas'} subtitulo={'Acompanhe o preço, variação, valor de mercado e muito mais.'}/>
      <CoinsList />
      <Footer />
    </div>
  )
}
