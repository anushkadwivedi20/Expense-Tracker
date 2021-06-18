import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: []
}

//Create context

export const GlobalContext = createContext(initialState);

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

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions
    }}>
        {children}
    </GlobalContext.Provider>)
}

