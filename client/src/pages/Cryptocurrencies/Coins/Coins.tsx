import React, { useContext, useEffect } from 'react'
import { AdSection } from '../../../components/AdSection/AdSection'
import { CoinsList } from '../../../components/Coins/CoinsList'
import { Header } from '../../../components/Header/Header'
import { CoinGeckoContext } from '../../../contexts/CoinGeckoContext/CoinGeckoContext'

export const Coins = () => {
  
  return (
    <div>
      <Header />
      <AdSection />
      <CoinsList />
    </div>
  )
}
