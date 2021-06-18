import React, {useState,useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();
    //const [date, setDate] = useState(new Date());
    const { addTransactions } = useContext(GlobalContext);
    //const { addAmount } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
        //date: date
      }

      //const newAmount = {
        //amount: + amount
      //}
      addTransactions(newTransaction);
      //addAmount(newAmount);
      setText('');
      setAmount(0);
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
          <input type="number" className="amount-class" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" required />
        </div>
        <div className="form-date">
          <input type="date" className="date-class" value={date} placeholder="Date"/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
    )
}

export default AddTransaction;
