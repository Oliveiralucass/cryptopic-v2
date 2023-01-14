import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AdSection } from '../../../components/AdSection/AdSection'
import { Header } from '../../../components/Header/Header'
import { ICoin } from '../../../utils/interfaces'
import coinsDB from '../../../coinsdb.json'
import { CoinGeckoContext } from '../../../contexts/CoinGeckoContext/CoinGeckoContext'

export const CoinsPage = () => {
  const { moeda } = useParams()
  const moedaApi: ICoin[] = coinsDB.filter(coin => coin.name.toLowerCase() == moeda);

  const { getCoinById, coinById } = useContext(CoinGeckoContext)

  useEffect(() => {
    getCoinById(moedaApi[0].apiId)
  }, [])
  
  console.log(coinById);

  return (
    <>
      <Header />
      <AdSection />
      <h1>Nome: {coinById?.name}</h1>
      <h1>Simbolo: {coinById?.symbol}</h1>
      <h1>Preço (R$): R${(coinById?.market_data.current_price.brl)}</h1>

    </>
  )
}
