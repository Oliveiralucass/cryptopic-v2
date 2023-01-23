import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AdSection } from '../../../components/AdSection/AdSection'
import { Header } from '../../../components/Header/Header'
import { ICoin } from '../../../utils/interfaces'
import coinsDB from '../../../coinsdb.json'
import { CoinGeckoContext } from '../../../contexts/CoinGeckoContext/CoinGeckoContext'
import { GlobalContext } from '../../../contexts/GlobalContext/GlobalContext'
import { ColorLineStyled } from '../../../components/ColorLine/ColorLine.styled'
import { CoinsPageHeader, CoinsPageLeft, CoinsPageLinks, CoinsPageRight, CoinsPageStats, CoinsPageStyled } from './CoinsPage.styled'
import { DetailButton } from '../../../components/Buttons/DetailButton/DetailButton'
import { DetailButtonColored } from '../../../components/Buttons/DetailButtonColored/DetailButtonColored'
import { DetailButtonHover } from '../../../components/Buttons/DetailButtonHover/DetailButtonHover'
import { DetailButtonCustomColored } from '../../../components/Buttons/DetailButtonCustomColored/DetailButtonCustomColored'
import { CoinsStatsCard } from '../../../components/Coins/CoinsStatsCard/CoinsStatsCard'

export const CoinsPage = () => {
  const { moeda } = useParams()


  const { getCoinById, coinById } = useContext(CoinGeckoContext)
  const { toCurrency, toCurrencyUsd } = useContext(GlobalContext)

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

        <div className='container'>
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
              <p>{`${coinById?.name} (${coinById?.symbol.toUpperCase()})`}</p>
              <div className='price-container'>
                <h1>{(toCurrency(coinById?.market_data.current_price.brl))}</h1>
                {Number(coinById?.market_data.price_change_percentage_24h_in_currency.brl) > 0.01 ?
                  <DetailButtonCustomColored texto={`${coinById?.market_data.price_change_percentage_24h_in_currency.brl.toFixed(2)}%`} bgColor={'#22c55e'} textColor={'#f8fafc'}/> 
                  : Number(coinById?.market_data.price_change_percentage_24h_in_currency.brl) < 0 ?
                  <DetailButtonCustomColored texto={`${coinById?.market_data.price_change_percentage_24h_in_currency.brl.toFixed(2)}%`} bgColor={'#ef4444'} textColor={'#f8fafc'}/> 
                  : <DetailButtonCustomColored texto={`${coinById?.market_data.price_change_percentage_24h_in_currency.brl.toFixed(2)}%`} bgColor={'#64748b'} textColor={'#f8fafc'}/>
                } 
              </div>

              <div className='price-container'>
                <p>{`${coinById?.market_data.current_price.btc} BTC`}</p>
                {Number(coinById?.market_data.price_change_percentage_24h_in_currency.btc) > 0.01 ?
                  <DetailButtonCustomColored texto={`${coinById?.market_data.price_change_percentage_24h_in_currency.btc.toFixed(2)}%`} bgColor={'#22c55e'} textColor={'#f8fafc'}/> 
                  : Number(coinById?.market_data.price_change_percentage_24h_in_currency.btc) < 0 ?
                  <DetailButtonCustomColored texto={`${coinById?.market_data.price_change_percentage_24h_in_currency.btc.toFixed(2)}%`} bgColor={'#ef4444'} textColor={'#f8fafc'}/> 
                  : <DetailButtonCustomColored texto={`${coinById?.market_data.price_change_percentage_24h_in_currency.btc.toFixed(2)}%`} bgColor={'#64748b'} textColor={'#f8fafc'}/>
                }
              </div>

              <div className='price-container'>
                <p>{`${toCurrencyUsd(coinById?.market_data.current_price.usd)} USD`}</p>
                {Number(coinById?.market_data.price_change_percentage_24h_in_currency.usd) > 0.01 ?
                  <DetailButtonCustomColored texto={`${coinById?.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%`} bgColor={'#22c55e'} textColor={'#f8fafc'}/> 
                  : Number(coinById?.market_data.price_change_percentage_24h_in_currency.usd) < 0 ?
                  <DetailButtonCustomColored texto={`${coinById?.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%`} bgColor={'#ef4444'} textColor={'#f8fafc'}/> 
                  : <DetailButtonCustomColored texto={`${coinById?.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%`} bgColor={'#64748b'} textColor={'#f8fafc'}/>
                }
              </div>
          </CoinsPageRight>
        </div> 

        <CoinsPageStats>
          <CoinsStatsCard title={'Market Cap'} url={'/academia/glossario/market-capitalization-market-cap'} content={`${toCurrency(coinById?.market_data.market_cap.brl)}`}/>
          <CoinsStatsCard title={'Fully Diluted Market Cap'} url={'/academia/glossario/fully-dilluted-market-cap'} content={`${toCurrency(coinById?.market_data.market_cap.brl)}`}/>

          <CoinsStatsCard title={'Volume 24h'} url={'/academia/glossario/volume'} content={`${toCurrency(coinById?.market_data.market_cap.brl)}`}/>

          <CoinsStatsCard title={'Volume / Market Cap'} content={`${toCurrency(coinById?.market_data.market_cap.brl)}`}/>

          <CoinsStatsCard title={'Circulating Supply'} url={'/academia/glossario/market-capitalization-market-cap'} content={`${toCurrency(coinById?.market_data.market_cap.brl)}`}/>

          <CoinsStatsCard title={'Max Supply'} url={'/academia/glossario/market-capitalization-market-cap'} content={`${toCurrency(coinById?.market_data.market_cap.brl)}`}/>
        </CoinsPageStats>
      
      {/* <h1>Market Cap: {coinById?.market_data.market_cap.brl}</h1>
      <h1>Max Supply: {coinById?.market_data.max_supply}</h1>
      <h1>Circulating Supply: {coinById?.market_data.circulating_supply}</h1>

      <h1>Price change in 24hrs:  {coinById?.market_data.price_change_24h_in_currency.brl}</h1>
      <h1>Price change in percentage 24hr:  {coinById?.market_data.price_change_percentage_24h_in_currency.brl}</h1>

      <h1>Price change in percentage 1hr:  {coinById?.market_data.price_change_percentage_1h_in_currency.brl}</h1>

      <h1>Volume 24hr: {coinById?.market_data.total_volume.brl}</h1> */}
    </CoinsPageStyled>

    </>
  )
}
