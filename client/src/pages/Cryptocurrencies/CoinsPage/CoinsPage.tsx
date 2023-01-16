import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AdSection } from '../../../components/AdSection/AdSection'
import { Header } from '../../../components/Header/Header'
import { ICoin } from '../../../utils/interfaces'
import coinsDB from '../../../coinsdb.json'
import { CoinGeckoContext } from '../../../contexts/CoinGeckoContext/CoinGeckoContext'
import { GlobalContext } from '../../../contexts/GlobalContext/GlobalContext'
import { ColorLineStyled } from '../../../components/ColorLine/ColorLine.styled'
import { CoinsPageHeader, CoinsPageLeft, CoinsPageLinks, CoinsPageRight, CoinsPageStyled } from './CoinsPage.styled'
import { DetailButton } from '../../../components/Buttons/DetailButton/DetailButton'
import { DetailButtonColored } from '../../../components/Buttons/DetailButtonColored/DetailButtonColored'
import { DetailButtonHover } from '../../../components/Buttons/DetailButtonHover/DetailButtonHover'

export const CoinsPage = () => {
  const { moeda } = useParams()


  const { getCoinById, coinById } = useContext(CoinGeckoContext)

  useEffect(() => {
    moeda && getCoinById(moeda)
  }, [])
  
  console.log(coinById);

  return (
    <>
      <Header />
      <AdSection />

      <CoinsPageStyled>
        <ColorLineStyled color={'#2563eb'}/>

        <CoinsPageLeft>
          <CoinsPageHeader>
            <div className='name-container'>
              <img src={coinById?.image.small} alt="" />
              <h1>{coinById?.name}</h1>
              <DetailButton texto={coinById?.symbol.toUpperCase()}/>
            </div>

            <div className='rank-container'>
              <DetailButtonColored texto={`Rank #${coinById?.market_cap_rank}`}/>
            </div>
          </CoinsPageHeader>

          <CoinsPageLinks>
            {coinById?.links?.homepage[0] 
            ? 
              <a href={coinById?.links?.homepage[0]} target='_blank'><DetailButtonHover texto={'Website'}/></a> 
            : 
            ''}
            
            {coinById?.links?.chat_url[0] 
            ? 
              <a href={coinById?.links?.chat_url[0]} target='_blank'><DetailButtonHover texto={'Chat'}/></a> 
            : 
            coinById?.links?.chat_url[1] 
            ? 
              <a href={coinById?.links?.chat_url[1]} target='_blank'><DetailButtonHover texto={'Chat'}/></a> 
            : 
            coinById?.links?.chat_url[2] 
            ? 
              <a href={coinById?.links?.chat_url[2]} target='_blank'><DetailButtonHover texto={'Chat'}/></a> 
            : 
            ''}

            
            {coinById?.links?.blockchain_site[0]
            ? 
              <a href={coinById?.links?.blockchain_site[0]} target='_blank'><DetailButtonHover texto={'Explorador'}/></a> 
            : 
            ''}

            {coinById?.links?.twitter_screen_name
            ? 
              <a href={`https://www.twitter.com/${coinById?.links?.twitter_screen_name}`} target='_blank'><DetailButtonHover texto={'Twitter'}/></a> 
            : 
            ''}

            {coinById?.links?.subreddit_url
            ? 
              <a href={coinById?.links?.subreddit_url} target='_blank'><DetailButtonHover texto={'Reddit'}/></a> 
            : 
            ''}
          </CoinsPageLinks>
        </CoinsPageLeft>
        
        <CoinsPageRight>

        </CoinsPageRight>
      

      <h1>Preço (R$): R${(coinById?.market_data.current_price.brl)}</h1>
      {coinById?.categories.map(categorie => <h1 key={categorie}>Categorias: {categorie}</h1>)}
      
      <h1>Market Cap: {coinById?.market_data.market_cap.brl}</h1>
      <h1>Max Supply: {coinById?.market_data.max_supply}</h1>
      <h1>Circulating Supply: {coinById?.market_data.circulating_supply}</h1>

      <h1>Price change in 24hrs:  {coinById?.market_data.price_change_24h_in_currency.brl}</h1>
      <h1>Price change in percentage 24hr:  {coinById?.market_data.price_change_percentage_24h_in_currency.brl}</h1>

      <h1>Price change in percentage 1hr:  {coinById?.market_data.price_change_percentage_1h_in_currency.brl}</h1>

      <h1>Volume 24hr: {coinById?.market_data.total_volume.brl}</h1>
      </CoinsPageStyled>

    </>
  )
}
