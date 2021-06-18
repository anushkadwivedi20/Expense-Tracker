import React, {useState,useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState("0");
    const { addTransactions } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount:parseInt(amount),
      }
      addTransactions(newTransaction);
      setText('');
      setAmount("0");
    }

    return (
    <div>
    <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Expense Type</label>
          <input type="text" className="amount-class" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Expense" required/>
          </div>
        <div className="form-control">
          <label htmlFor="amount" >Amount</label>
          <input type="text" className="amount-class" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" required />
        </div>
        {/* <div className="form-date">
          <input type="date" className="date-class"  placeholder="Date"/>
        </div> */}
        <button className="btn">Add transaction</button>
      </form>
    </div>
    )
}

export default AddTransaction;
