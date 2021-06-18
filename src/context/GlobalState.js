import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: 
    [
        //{ id: 1, text: 'Flower', amount: -20 },
        //{ id: 2, text: 'Salary', amount: 300 },
        //{ id: 3, text: 'Book', amount: -10 },
        //{ id: 4, text: 'Camera', amount: 150 }
    ]
}

const amounts = {
    amounts: initialState.transactions.map(transaction => transaction.amount)
}

//Create context

export const GlobalContext = createContext(initialState);
export const GlobalAmountContext = createContext(amounts);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransactions(id) {
        dispatch({
            type: 'Delete_Transaction',
            payload: id
        });
    }

    function addTransactions(transaction) {
        dispatch({
            type: 'Add_Transaction',
            payload: transaction
        });
    }

    //function addAmount(){
      //  dispatch({
        //    type: 'Add_Transaction',
          //  payload: amount
        //});
    //}

    //function deleteAmount(){
      //  dispatch({
        //    type: 'Delete_Transaction',
          //  payload: 
        //});
    //}

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions
    }}>
        {children}
    </GlobalContext.Provider>)
}

