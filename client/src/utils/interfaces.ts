import React, { ReactNode } from 'react'

// --------------------- Global Interfaces -------------------------

export interface IChildren {
    children?: React.ReactNode
}

// --------------------- Component Interfaces -------------------------

export interface IContentCard {

}


// --------------------- UserContext Interfaces -------------------------

export interface IUserContext {
    clickPower: number,
    balance: number,
    setBalance: any,
    increaseBalance: (amount: number, time: number) => void,
    decreaseBalance: (amount: number, time: number) => void,
    upgradeClickPower: (upgrade: number, cost: number) => void,
    userTestApi: () => Promise<void>
}

// -------------------- MiningContext Interfaces -------------------------

export interface IMiningContext {
    miner1: IMiner1,
    balance: number,
    miner1Start: () => void,
    miner1Upgrade: () =>  void,
    progressBar: (time: number) =>  void,
}

export interface IMiner1 {
    name: string,
    time: number,
    lvl: number,
    reward: number,
    upgradeCost: number,
}

// -------------------- Global Interfaces -------------------------

export interface IGlobalContext {
    convertToLowercase: (str: string) => void,
    toCurrency: (str: string) => string,
    capitalizeText: (str: string) => string,
    toCurrencyUsd: (str: string) => string,
    convertISODate: (date: string) => string
}


// -------------------- CoinGecko Interfaces -------------------------

export interface ICoinGeckoContext {
    getCoinById: (coinId: string) => Promise<void>,
    getCoinsList: (currency: string, page: string, perPage: string) => Promise<void>,
    coinById: any | null,
    coinsList: any | null,
}


// -------------------- Glossary Interfaces -------------------------

export interface IArtigo{
    
    title: string | undefined,
    url: string,
    content: string,
    htmlContent: string,
    categories: string[],
    date: string,
    id: number
}

// -------------------- Coins Interfaces -------------------------

export interface ICoin {
    name: string,
    id: number,
    symbol: string,
    img: string,
    url: string,
    apiId: string
}

// -------------------- Discover Interfaces -------------------------

// export interface IDiscover {
//     id: number,
//     title: string,
//     url: string,
//     contentTitle: string,
//     content: string[],
//     categories: string[],
//     image: string,
//     date: string,
//     readTime: number,
//     mainColor: string,
//     secondaryColor: string
// }

export interface IDiscover {
    title: String,
    url: String,
    contentTitle: String,
    content: [String],
    categories: [String],
    image: String,
    readTime: Number,
    mainColor: String,
    secondaryColor: String,
    createdAt: Date,
    __id: string,
    __v: number
}

    

export interface IExpedition {
    id: number,
    title: string,
    url: string,
    contentTitle: string,
    content: string[],
    categories: string[],
    image: string,
    date: string,
    readTime: number,
    mainColor: string,
    secondaryColor: string
}

// -------------------- Guides Interfaces -------------------------

export interface IAllContents {
    id?: number,
    title?: string,
    url?: string,
    contentTitle?: string,
    content?: string | string[],
    htmlContent?: string,
    categories?: string[],
    image?: string,
    date?: string,
    readTime?: number,
    mainColor?: string,
    secondaryColor?: string
}