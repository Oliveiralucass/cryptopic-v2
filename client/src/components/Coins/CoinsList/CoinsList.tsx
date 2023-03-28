import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../contexts/GlobalContext/GlobalContext';
import { CoinsListStyled } from './CoinsList.styled'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelectors';
import { MainLoading } from '../../Loadings/MainLoading/MainLoading';
import { getCoingeckoCoinsList } from '../../../store/features/coinSlice';
 
export const CoinsList = () => {

    const { toCurrency } = useContext(GlobalContext)

    
    const { activeFiat, coingeckoData } = useAppSelector(state => state.coin)
    const dispatch = useAppDispatch();

    useEffect(() => {
        const callApi = async () => {
            dispatch(getCoingeckoCoinsList({currency: activeFiat.currency, page: 1, perPage: 100}))
        }
        
        callApi() 
    }, [])
    
  return (
    <CoinsListStyled>

        <thead>
            <tr>
                <th style={{width: '5%'}}>#</th>
                <th style={{width: '15%'}}>Nome</th>
                <th style={{width: '10%'}}>Preço</th>
                <th style={{width: '5%'}}>1h%</th>
                <th style={{width: '5%'}}>24h%</th>
                <th style={{width: '5%'}}>7d%</th>
                <th style={{width: '10%'}}>24h Volume</th>
                <th style={{width: '10%'}}>Market Cap</th>
            </tr>
        </thead>

        <tbody>
            {coingeckoData && coingeckoData.map((coin, index) => <tr key={coin.id}>
                <td>{index + 1}</td>
                <td>
                    <Link to={`/criptomoedas/${coin.id}`}>
                        <div className='name-container'>
                            <img src={coin.image} alt={coin.name} /> 
                            <p>{coin.name}</p>
                            <span>{coin.symbol.toUpperCase()}</span>
                        </div>
                    </Link>
                </td> 
                <td><Link to={`/criptomoedas/${coin.id}`}><p>{toCurrency(coin.current_price, activeFiat.locale, activeFiat.currency)}</p></Link></td>           
                <td>
                    {Number(coin.price_change_percentage_1h_in_currency) > 0.01 ?
                        <p className='positive'>{coin.price_change_percentage_1h_in_currency?.toFixed(2)}%</p> 
                    : Number(coin.price_change_percentage_1h_in_currency) < 0 ?
                        <p className='negative'>{coin.price_change_percentage_1h_in_currency?.toFixed(2)}%</p>    
                    : 
                        <p className='neutral'>{coin.price_change_percentage_1h_in_currency?.toFixed(2)}%</p>  
                    }
                </td>
                <td>
                    {Number(coin.price_change_percentage_24h_in_currency) > 0.01 ?
                        <p className='positive'>{coin.price_change_percentage_24h_in_currency?.toFixed(2)}%</p> 
                    : Number(coin.price_change_percentage_24h_in_currency) < 0 ?
                        <p className='negative'>{coin.price_change_percentage_24h_in_currency?.toFixed(2)}%</p>    
                    : 
                        <p className='neutral'>{coin.price_change_percentage_24h_in_currency?.toFixed(2)}%</p> 
                    }
                </td>
                <td>
                    {Number(coin.price_change_percentage_7d_in_currency) > 0.01 ?
                        <p className='positive'>{coin.price_change_percentage_7d_in_currency?.toFixed(2)}%</p> 
                    : Number(coin.price_change_percentage_7d_in_currency) == 0.01 ?
                        <p className='neutral'>{coin.price_change_percentage_7d_in_currency?.toFixed(2)}%</p> 
                    : 
                        <p className='negative'>{coin.price_change_percentage_7d_in_currency?.toFixed(2)}%</p>    
                    }
                </td>
                <td>
                    <p>{toCurrency(coin.total_volume, activeFiat.locale, activeFiat.currency)}</p>
                </td>
                <td>
                    <p>{toCurrency(coin.market_cap, activeFiat.locale, activeFiat.currency)}</p>
                </td>
            </tr>)}
        </tbody>
    </CoinsListStyled>
  )
}
