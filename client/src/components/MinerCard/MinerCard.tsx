import React, { useContext } from 'react'
import { MiningContext } from '../../contexts/MiningContext/MiningContext';
import { MinerCardStyled } from './MinerCard.styled'
import { GiMining } from 'react-icons/gi'

export const MinerCard = () => {

    const { miner1, miner1Start, miner1Upgrade} = useContext(MiningContext);
  return (
    <MinerCardStyled>
        <div className='miner-nome'>
            <h1>{miner1.name}</h1>
        </div>

        <div className='miner-image'>
           <GiMining size={72}/>
        </div>
        
        <div className='miner-stats-container'>
            <h2>Atributos:</h2>
            
            <div className='miner-stats'>
                <div>
                    <p>Lvl: {miner1.lvl} <span> - Lvl: {miner1.lvl + 1}</span></p>
                </div>

                <div>
                    <p>Recompensa: {miner1.reward} SPH  <span> - {(miner1.reward * 1.15).toFixed(2)} SPH </span></p> 
                </div>

                <div>
                    <p>Tempo: {(miner1.time / 1000).toFixed(2)}s <span> - {((miner1.time * 0.95) / 1000).toFixed(2) }s </span></p>
                </div>
            </div>

            <div className='acoes'>
                <div className='mine'>
                    <p>Minerar</p>
                    <button onClick={miner1Start}>+{miner1.reward} SPH</button>
                </div>

                <div className='upgrade'>
                    <p>Melhorar</p>
                    <button onClick={miner1Upgrade}>{miner1.upgradeCost} SPH</button>
                </div>
            </div>
        </div>
    </MinerCardStyled>
  )
}
