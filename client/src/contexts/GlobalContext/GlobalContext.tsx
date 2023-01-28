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

    const convertISODate = (date: string): string => {
        const dateObject = new Date(date);
        const day = dateObject.getDate().toString().padStart(2, '0');
        const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
        const year = dateObject.getFullYear();
        return `${day}/${month}/${year}`;
    }
    return (
        <GlobalContext.Provider value={{
            convertToLowercase,
            toCurrency,
            capitalizeText,
            toCurrencyUsd,
            convertISODate
        }}>
            {children}
        </GlobalContext.Provider>
    )
}





// function convertToLowercase(str: string): string {
//     return str.split(" ").map(word => word.toLowerCase()).join("-");
//   }