import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ICoins } from '../../../utils/interfaces'
import { GlobalContext } from '../../../contexts/GlobalContext/GlobalContext'
import { ColorLineStyled } from '../../../components/ColorLine/ColorLine.styled'
import { CoinsPageHeader, CoinsPageLeft, CoinsPageLinks, CoinsPageRight, CoinsPageStats, CoinsPageStyled } from './CoinElement.styled'
import { DetailButton } from '../../../components/Buttons/DetailButton/DetailButton'
import { DetailButtonColored } from '../../../components/Buttons/DetailButtonColored/DetailButtonColored'
import { DetailButtonHover } from '../../../components/Buttons/DetailButtonHover/DetailButtonHover'
import { DetailButtonCustomColored } from '../../../components/Buttons/DetailButtonCustomColored/DetailButtonCustomColored'
import { CoinsStatsCard } from '../../../components/Coins/CoinsStatsCard/CoinsStatsCard'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelectors'
import { createCoin, getCoinById, getCoingeckoCoinById, getCoinsList, likeCoin } from '../../../store/features/coinSlice'
import { MainLoading } from '../../../components/Loadings/MainLoading/MainLoading'
import { getLoggedUser } from '../../../store/features/authSlice'
import { CoinPostCard } from '../CoinPostCard/CoinPostCard'
import { CoinCreatePostCard } from '../CoinCreatePostCard/CoinCreatePostCard'
import { DivisorStyled } from '../../Divisor/Divisor.Styled'

export const CoinElement = () => {
  const { moeda } = useParams()
  const { toCurrency } = useContext(GlobalContext)
  const [ coin, setCoin ] = useState<ICoins | null>(null)

  const dispatch = useAppDispatch();
  const { data, selectedCoin, selectedCoingeckoCoin } = useAppSelector(state => state.coin)
  const { user, token } = useAppSelector(state => state.auth)

  const copyTextToClipboard = (string) => {
    return navigator.clipboard.writeText(string);
  }

  useEffect(() => {
    moeda && dispatch(getCoingeckoCoinById(moeda))
    // Async dispatches 


    const dispatchCoinsList = async () => {
      await dispatch(getCoinsList())
    }

    const dispatchCreateCoin = async () => {
      await dispatch(createCoin({
        apiId: selectedCoingeckoCoin.id,
        name: selectedCoingeckoCoin.name,
        symbol: selectedCoingeckoCoin.symbol,
        image: selectedCoingeckoCoin.image.large || selectedCoingeckoCoin.image.small,
        likes: [],
        comments: [],
        url: `criptomoedas/${selectedCoingeckoCoin.id}`
      }))
    }

    // calls

    if(!data) dispatchCoinsList()
    data && data.some(e => e.apiId === moeda) && dispatch(getCoinById(data.filter(e => e.apiId === moeda)[0]._id)) && setCoin(data.filter(e => e.apiId === moeda)[0])

    if(selectedCoingeckoCoin && data.some(e => e.apiId === moeda) == false) {
      dispatchCreateCoin()
      dispatchCoinsList()
    }

    coin && dispatch(getCoinById(coin._id))
    
    console.log(selectedCoingeckoCoin)
  }, [data, moeda])

  const handleLike = async() =>{
    coin && await dispatch(likeCoin({id: user._id, coinId: coin._id})); 
    coin && moeda && dispatch(getCoinById(coin._id));
    await dispatch(getLoggedUser(token));
  }

  
  return coin && selectedCoin && coin.apiId == moeda ? (
    
    <CoinsPageStyled>
        <ColorLineStyled color={'#2563eb'}/>
        <div className='container'>
          <CoinsPageLeft>
            <CoinsPageHeader>
              <div className='name-container'>
                <img src={selectedCoingeckoCoin?.image.small} alt="" />
                <h1>{selectedCoingeckoCoin?.name}</h1>
                <DetailButton texto={selectedCoingeckoCoin?.symbol.toUpperCase()}/>

                {user && user.profile.coinsLiked.some(e => e._id == coin._id) ? 
                  <div className='likeButton' onClick={() => handleLike()}>
                    <FaHeart fill={'#2563eb'} size={18}/>
                    <p>{selectedCoin.likes ? Object.keys(selectedCoin.likes).length : 0}</p>
                  </div>  
                  : user ?
                  <div className='likeButton' onClick={() => handleLike()}>
                    <FaRegHeart fill={'#2563eb'} size={18}/>
                    <p>{selectedCoin.likes ? Object.keys(selectedCoin.likes).length : 0}</p>
                  </div>
                : <div className='likeButton'>
                    <FaRegHeart fill={'#2563eb'} size={18}/>
                    <p>{selectedCoin.likes ? Object.keys(selectedCoin.likes).length : 0}</p>
                  </div>}

              </div>

              <div className='rank-container'>
                <DetailButtonColored texto={`Rank #${selectedCoingeckoCoin?.market_cap_rank}`}/>
              </div>
            </CoinsPageHeader>
            
            <CoinsPageLinks>
              {selectedCoingeckoCoin?.links?.homepage[0] 
              ? 
                <a href={selectedCoingeckoCoin?.links?.homepage[0]} target='_blank'><DetailButtonHover texto={'Website'}/></a> 
              : 
              ''}
              
              {selectedCoingeckoCoin?.links?.chat_url[0] 
              ? 
                <a href={selectedCoingeckoCoin?.links?.chat_url[0]} target='_blank'><DetailButtonHover texto={'Chat'}/></a> 
              : 
              selectedCoingeckoCoin?.links?.chat_url[1] 
              ? 
                <a href={selectedCoingeckoCoin?.links?.chat_url[1]} target='_blank'><DetailButtonHover texto={'Chat'}/></a> 
              : 
              selectedCoingeckoCoin?.links?.chat_url[2] 
              ? 
                <a href={selectedCoingeckoCoin?.links?.chat_url[2]} target='_blank'><DetailButtonHover texto={'Chat'}/></a> 
              : 
              ''}
              {selectedCoingeckoCoin?.links?.blockchain_site[0]
              ? 
                <a href={selectedCoingeckoCoin?.links?.blockchain_site[0]} target='_blank'><DetailButtonHover texto={'Explorador'}/></a> 
              : 
              ''}

              {selectedCoingeckoCoin?.links?.twitter_screen_name
              ? 
                <a href={`https://www.twitter.com/${selectedCoingeckoCoin?.links?.twitter_screen_name}`} target='_blank'><DetailButtonHover texto={'Twitter'}/></a> 
              : 
              ''}

              {selectedCoingeckoCoin?.links?.subreddit_url
              ? 
                <a href={selectedCoingeckoCoin?.links?.subreddit_url} target='_blank'><DetailButtonHover texto={'Reddit'}/></a> 
              : 
              ''}
            </CoinsPageLinks>
          </CoinsPageLeft>
        
          <CoinsPageRight>
              <p>{`${selectedCoingeckoCoin?.name} (${selectedCoingeckoCoin?.symbol.toUpperCase()})`}</p>
              <div className='price-container'>
                <h1>{(toCurrency(selectedCoingeckoCoin?.market_data.current_price.brl, 'pt-BR', 'BRL'))}</h1>
                {Number(selectedCoingeckoCoin?.market_data.price_change_percentage_24h_in_currency.brl) > 0.01 ?
                  <DetailButtonCustomColored texto={`${selectedCoingeckoCoin?.market_data.price_change_percentage_24h_in_currency.brl.toFixed(2)}%`} bgColor={'#22c55e'} textColor={'#f8fafc'}/> 
                  : Number(selectedCoingeckoCoin?.market_data.price_change_percentage_24h_in_currency.brl) < 0 ?
                  <DetailButtonCustomColored texto={`${selectedCoingeckoCoin?.market_data.price_change_percentage_24h_in_currency.brl.toFixed(2)}%`} bgColor={'#ef4444'} textColor={'#f8fafc'}/> 
                  : <DetailButtonCustomColored texto={`${selectedCoingeckoCoin?.market_data.price_change_percentage_24h_in_currency.brl.toFixed(2)}%`} bgColor={'#64748b'} textColor={'#f8fafc'}/>
                } 
              </div>

              <div className='price-container'>
                <p>{`${selectedCoingeckoCoin?.market_data.current_price.btc} BTC`}</p>
                {Number(selectedCoingeckoCoin?.market_data.price_change_percentage_24h_in_currency.btc) > 0.01 ?
                  <DetailButtonCustomColored texto={`${selectedCoingeckoCoin?.market_data.price_change_percentage_24h_in_currency.btc.toFixed(2)}%`} bgColor={'#22c55e'} textColor={'#f8fafc'}/> 
                  : Number(selectedCoingeckoCoin?.market_data.price_change_percentage_24h_in_currency.btc) < 0 ?
                  <DetailButtonCustomColored texto={`${selectedCoingeckoCoin?.market_data.price_change_percentage_24h_in_currency.btc.toFixed(2)}%`} bgColor={'#ef4444'} textColor={'#f8fafc'}/> 
                  : <DetailButtonCustomColored texto={`${selectedCoingeckoCoin?.market_data.price_change_percentage_24h_in_currency.btc.toFixed(2)}%`} bgColor={'#64748b'} textColor={'#f8fafc'}/>
                }
              </div>

              <div className='price-container'>
                <p>{`${toCurrency(selectedCoingeckoCoin?.market_data.current_price.usd, 'en-US', 'USD')} USD`}</p>
                {Number(selectedCoingeckoCoin?.market_data.price_change_percentage_24h_in_currency.usd) > 0.01 ?
                  <DetailButtonCustomColored texto={`${selectedCoingeckoCoin?.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%`} bgColor={'#22c55e'} textColor={'#f8fafc'}/> 
                  : Number(selectedCoingeckoCoin?.market_data.price_change_percentage_24h_in_currency.usd) < 0 ?
                  <DetailButtonCustomColored texto={`${selectedCoingeckoCoin?.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%`} bgColor={'#ef4444'} textColor={'#f8fafc'}/> 
                  : <DetailButtonCustomColored texto={`${selectedCoingeckoCoin?.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%`} bgColor={'#64748b'} textColor={'#f8fafc'}/>
                }
              </div>
          </CoinsPageRight>
        </div> 

        <CoinsPageStats>
          <CoinsStatsCard title={'Market Cap'} url={'/academia/glossario/market-capitalization-market-cap'} content={`${toCurrency(selectedCoingeckoCoin?.market_data.market_cap.brl, 'pt-BR', 'BRL')}`}/>
          <CoinsStatsCard title={'Fully Diluted Market Cap'} url={'/academia/glossario/fully-dilluted-market-cap'} content={`${toCurrency(selectedCoingeckoCoin?.market_data.fully_diluted_valuation.brl, 'pt-BR', 'BRL')}`}/>

          <CoinsStatsCard title={'Volume 24h'} url={'/academia/glossario/volume'} content={`${toCurrency(selectedCoingeckoCoin?.market_data.total_volume.brl, 'pt-BR', 'BRL')}`}/>

          <CoinsStatsCard title={'Circulating Supply'} url={'/academia/glossario/circulating-supply'} content={selectedCoingeckoCoin?.market_data.circulating_supply}/>

          <CoinsStatsCard title={'Max Supply'} url={'/academia/glossario/max-supply'} content={selectedCoingeckoCoin?.market_data.max_supply ||  'Ilimitado'}/>
        </CoinsPageStats>
      
      {/* <h1>Market Cap: {selectedCoingeckoCoin?.market_data.market_cap.brl}</h1>
      <h1>Max Supply: {selectedCoingeckoCoin?.market_data.max_supply}</h1>
      <h1>Circulating Supply: {selectedCoingeckoCoin?.market_data.circulating_supply}</h1>

      <h1>Price change in 24hrs:  {selectedCoingeckoCoin?.market_data.price_change_24h_in_currency.brl}</h1>
      <h1>Price change in percentage 24hr:  {selectedCoingeckoCoin?.market_data.price_change_percentage_24h_in_currency.brl}</h1>

      <h1>Price change in percentage 1hr:  {selectedCoingeckoCoin?.market_data.price_change_percentage_1h_in_currency.brl}</h1>

      <h1>Volume 24hr: {selectedCoingeckoCoin?.market_data.total_volume.brl}</h1> */}

      {user && selectedCoin && <CoinCreatePostCard coin={coin} user={user}/>}

      <DivisorStyled />

      {selectedCoin && selectedCoin.comments.map(comment => <CoinPostCard key={comment._id}  comment={comment}/>)}
    </CoinsPageStyled>
  ) : <MainLoading />
}
