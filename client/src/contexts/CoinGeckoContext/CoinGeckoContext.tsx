import React, { createContext, useState } from 'react'
import { IChildren, ICoinGeckoContext } from '../../utils/interfaces'
import axios from 'axios'
import { coinGeckoApi } from '../../utils/api';

export const CoinGeckoContext = createContext({} as ICoinGeckoContext);

export const CoinGeckoProvider = ({children}: IChildren) => {

    const [coinById, setCoinById] = useState<any | null>(null)
    
    const getCoinById = async (coin) => {
       try {
            const { data } = await coinGeckoApi.get(`/coins/${coin}`)
            setCoinById(data)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <CoinGeckoContext.Provider value={{
            getCoinById,
            coinById
        }}>
            {children}
        </CoinGeckoContext.Provider>
    )
}
