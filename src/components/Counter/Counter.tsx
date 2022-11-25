import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext/UserContext'

export const Counter = () => {

    const { clickPower, balance, increaseBalance, decreaseBalance, upgradeClickPower }= useContext(UserContext);
    
  return (
    <div>
        <br />
        <br />
        <button onClick={() => increaseBalance(clickPower, 1000)}> Farm Saphire +{clickPower.toFixed(2)}  - 1s</button>
        <button onClick={() => increaseBalance(clickPower*6, 5000)}> Farm Saphire +{clickPower.toFixed(2)} - 5s</button>
        <button onClick={() => increaseBalance(clickPower*15, 1000)}> Farm Saphire +{clickPower.toFixed(2)} - 10s</button>
        <button onClick={() => increaseBalance(clickPower*50, 30000)}> Farm Saphire +{clickPower.toFixed(2)} - 30s</button>

        <h1> Shop: </h1>

        <button onClick={() => upgradeClickPower(0.010, 0.50)}> Click Power + 0.01</button>
    </div>
  )
}
