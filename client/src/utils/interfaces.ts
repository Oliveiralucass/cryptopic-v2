import React from 'react'

// --------------------- Global Interfaces -------------------------

export interface IChildren {
    children?: React.ReactNode
}

// --------------------- UserContext Interfaces -------------------------

export interface IUserContext {
    clickPower: number,
    balance: number,
    setBalance: any,
    increaseBalance: (amount: number, time: number) => void,
    decreaseBalance: (amount: number, time: number) => void,
    upgradeClickPower: (upgrade: number, cost: number) => void
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


// -------------------- Glossary Interfaces -------------------------

export interface IArtigo{
    
    title: string | undefined,
    content: string,
    categories: string[],
    date: string,
    id: number
}