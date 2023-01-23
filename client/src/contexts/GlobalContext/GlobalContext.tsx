import React, { createContext } from 'react'
import { IChildren, IGlobalContext } from '../../utils/interfaces'

export const GlobalContext = createContext({} as IGlobalContext)




export const GlobalProvider = ({children}: IChildren) => {

    const convertToLowercase = (str: string): string  => {
        return str.split(" ").map(word => word.toLowerCase()).join("-");
    }

    const toCurrency = (str: string): string => {
        const newString = parseFloat(str).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return newString
    }

    const toCurrencyUsd = (str: string): string => {
        const newString = parseFloat(str).toLocaleString('es-US', { style: 'currency', currency: 'USD' });
        return newString
    }

    const capitalizeText = (text: string): string => {
        const newString = text.charAt(0).toUpperCase() + text.slice(1);
        return newString
      }

    return (
        <GlobalContext.Provider value={{
            convertToLowercase,
            toCurrency,
            capitalizeText,
            toCurrencyUsd
        }}>
            {children}
        </GlobalContext.Provider>
    )
}





// function convertToLowercase(str: string): string {
//     return str.split(" ").map(word => word.toLowerCase()).join("-");
//   }