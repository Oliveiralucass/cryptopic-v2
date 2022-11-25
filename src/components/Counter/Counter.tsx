import { useContext, useState } from 'react'
import { MiningContext } from '../../contexts/MiningContext/MiningContext';
import { UserContext } from '../../contexts/UserContext/UserContext';
import { CounterStyled } from './Counter.styled';

export const Counter = () => {

    const { miner1, miner1Start, miner1Upgrade } = useContext(MiningContext);
    const { balance } = useContext(UserContext);

  return (
    <CounterStyled>
      <div className='miner'>
        <div>
          <h2>{miner1.name}</h2>
          <h2>{miner1.lvl}</h2>
        </div>

        <div>
          <h2>Safyr: {miner1.reward}</h2>
          <h2>Tempo: {miner1.time / 1000}</h2>
        </div>

        <div>
          <button onClick={miner1Start}><h1>Start + {miner1.reward} </h1></button>
          <button onClick={miner1Upgrade}><h1>Upgrade - {miner1.upgradeCost} </h1></button>
        </div>
      </div>
    </CounterStyled>
  );
};
