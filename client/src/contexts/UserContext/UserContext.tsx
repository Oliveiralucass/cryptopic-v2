import React, {createContext, useState} from 'react'
import { IChildren, IUserContext } from '../../utils/interfaces'



export const UserContext = createContext({} as IUserContext);


export const UserProvider = ({ children }: IChildren) => {

  const [ balance, setBalance] = useState(500);
  const [ clickPower, setClickPower ] = useState(0.010)

  const increaseBalance = (amount: number, time: number) => {
    try {
      setTimeout(() => {
        setBalance((balance + amount));
      }, time);
    } catch {
      console.error('Ocorreu algum erro ao aumentar sem saldo');
    };
  };

  const decreaseBalance = (amount: number, time: number) => {
    try {
      setTimeout(() => {
        setBalance((balance - amount));
      }, time);
    } catch (error) {
      console.error(error);
    };
  };

  const upgradeClickPower = (upgrade: number, cost: number) => {
    try {
      if(balance >= cost){
        setClickPower((clickPower + upgrade));
        decreaseBalance(cost, 0);
      } else {
        alert("Saldo insuficiente");
      }
    } catch (error) {
      console.error(error);
    };
  };



  return (
    <UserContext.Provider value = {{clickPower, balance, setBalance, increaseBalance, decreaseBalance, upgradeClickPower }}>
      { children }
    </UserContext.Provider>
  )
}
