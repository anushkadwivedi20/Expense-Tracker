import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { GlobalAmountContext } from '../context/GlobalState';

export const Balance = () => {
  //const { transactions } = useContext(GlobalContext);
  const { amounts } = useContext(GlobalAmountContext);
  //const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <> 
      <h4>Your Balance</h4>
      <h1>{total}</h1>
    </>
  )
}

