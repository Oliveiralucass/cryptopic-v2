import React, { createContext, useState } from 'react'
import { IChildren, ICoinGeckoContext } from '../../utils/interfaces'
import axios from 'axios'
import { coinGeckoApi } from '../../utils/api';

export const CoinGeckoContext = createContext({} as ICoinGeckoContext);

export const CoinGeckoProvider = ({children}: IChildren) => {

    const [ coinById, setCoinById ] = useState<any | null>(null)
    const [ coinsList, setCoinsList ] = useState<any | null>(null)

    
    const getCoinById = async (coin) => {
       try {
            const { data } = await coinGeckoApi.get(`/coins/${coin}`)
            setCoinById(data)
        } catch (error) {
            console.error(error);
        }
    }

    const getCoinsList = async (currency: string, page: string, perPage: string) => {
        try {
            const { data } = await coinGeckoApi.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`)
            setCoinsList(data)
        } catch (err){
            console.error(err)
        }
    }

    return (
        <CoinGeckoContext.Provider value={{
            getCoinById,
            coinById,
            getCoinsList,
            coinsList,
        }}>
            {children}
        </CoinGeckoContext.Provider>
    )
}
