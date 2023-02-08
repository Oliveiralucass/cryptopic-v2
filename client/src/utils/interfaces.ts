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


export interface IGlossary{
    title: string | undefined,
    url: string,
    content: string,
    htmlContent: string,
    categories: string[],
    createdAt: string,
    _id: string
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

export interface IDiscover {
    title: string,
    url: string,
    contentTitle: string,
    content: string[],
    categories: string[],
    image: string,
    readTime: Number,
    mainColor: string,
    secondaryColor: string,
    createdAt: Date,
    _id: string,
    _v: number
}

    

export interface IExpedition {
    _id: string,
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
    createdAt: Date,
    _v: number
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

// -------------------- AuthSlice Interfaces -------------------------

export interface IUser {
    _id: string
    username: string,
    email: string,
    level: Number,
    xp: Number,
    xpToNextLevel: Number,
    accountBalance: Number,
    miner1: IMiner,
    miner2: IMiner,
    miner3: IMiner,
    profile: IProfile,
    password: string,
    contentsCompleted: IContentsCompleted,
    viewedProfile: Number,
    impressions: Number
}

export interface IMiner {
    name: string,
    level: Number,
    time: Number,
    reward: Number,
    upgradeCost: Number,
    blocked: boolean
}

export interface IProfile {
    profileImage: Number,
    posts: IPost[],
    coinsLiked: ICoins[]
}

export interface IPost {
    _id: string,
    userId: string,
    username: string,
    coinId: string,
    coinName: string,
    coinImage:string,
    coinSymbol: string,
    message:string,
    likes: IUser[]
}

export interface IContentsCompleted {
    discover: string[],
    glossary: string[],
    expedition: string[],
    guide: string[]
}

export interface ICoins {
    _id: string,
    name: string,
    symbol: string,
    image: string,
    likes: IUser[],
    comments: IPost[],
    url: string,
    apiId: string
    createdAt: string
}

export interface IAuthSlice {
    user: IUser | null,
    token: string | null,
    posts: IPost[],
    loading: boolean,
    error: null | string,
}

export interface ICreateAccount {
    username: string,
    password: string,
    email: string
}
export interface ILogin {
    password: string,
    email: string
}

export interface IAuthenticatedResponse {
    user: IUser,
    token: string
}


export interface IUserInfos{
    username: string,
    level: number,
    xp: number,
    xpToNextLevel: number,
    accountBalance: number
  }

// -------------------- ClaimSlice Interfaces -------------------------

export interface IClaimSlice {
    data: IUser | null,
    loading: boolean,
    error: null | string,
}

// -------------------- CoinSlice Interfaces -------------------------

export interface ICoinSlice {
    loading: boolean,
    error: null | string,
    data: null | ICoin[]
    selectedCoin: null | ICoin
    selectedCoingeckoCoin: null | object,
    coingeckoData: null | object[]
}

export interface ICoinPost {
    name: string,
    symbol: string,
    image: string,
    likes: IUser[],
    comments: IPost[],
    url: string,
    apiId: string
}

export interface ICoingeckoQuery {
    currency: string,
    page: string, 
    perPage: string
}