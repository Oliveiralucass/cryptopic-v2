import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext/UserContext'

export const Balance = () => {

    const { balance } = useContext(UserContext);

  return (
    <div>
        <h1>{balance.toFixed(2)}</h1>
    </div>
  )
}
