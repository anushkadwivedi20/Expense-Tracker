import React, { useContext } from 'react';
//import TransactionList from './TransactionList';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ( { transaction }) => {
    const { deleteTransactions } = useContext(GlobalContext);
   // const { deleteAmount } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
    
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text} 
                <span> {sign}₹{Math.abs(transaction.amount)} </span>
                <button onClick={() => deleteTransactions(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}

export default Transaction;
