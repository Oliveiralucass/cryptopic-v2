import React, {createContext, useState, useContext } from 'react'
import { IChildren, IMiningContext,IMiner1 } from '../../utils/interfaces';
import { UserContext } from '../UserContext/UserContext';

export const MiningContext = createContext({} as IMiningContext);

export const MiningProvider = ({children}: IChildren) => {

    const { balance, setBalance } = useContext(UserContext)

    const [ miner1, setMiner1 ] = useState<IMiner1>({
        name: 'Minerador 1',
        time: 1000,
        lvl: 1,
        reward: 0.1,
        upgradeCost: 1,
    });

    const miner1Start = () => {
        progressBar(miner1.time / 100)
        setTimeout(() => {
            setBalance((balance + miner1.reward))
        }, miner1.time)
    }

    const miner1Upgrade = () => {

        if(balance >= miner1.upgradeCost){
            setBalance((balance - miner1.upgradeCost))
            setMiner1({
                name: miner1.name,
                time: (miner1.time * 0.9),
                lvl: (miner1.lvl + 1),
                reward: Number((miner1.reward * 1.25).toFixed(2)),
                upgradeCost: (miner1.upgradeCost * 2),
            })   
        } else{
            alert('Saldo insuficiente')
        }
    }

    const progressBar = (time: number) => {
        let width = 0;
        let id = setInterval(frame, time);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++; 
                frame()
            }
        }
    }

  return (
    <MiningContext.Provider value={{ balance, miner1, miner1Start, miner1Upgrade, progressBar }}>
        { children }
    </MiningContext.Provider>
  )
}



// Nome
// Tempo
// Level
// Ganho
// Custo upgrade 



