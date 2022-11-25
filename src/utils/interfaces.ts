import React from 'react'

// --------------------- Global Interfaces -------------------------
export interface IUserContext {
    clickPower: number,
    balance: number,
    increaseBalance: (amount: number, time: number) => void,
    decreaseBalance: (amount: number, time: number) => void,
    upgradeClickPower: (upgrade: number, cost: number) => void
}

// --------------------- UserContext Interfaces -------------------------

export interface IChildren {
    children?: React.ReactNode
}