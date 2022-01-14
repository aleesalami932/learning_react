import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(""); //managing single states
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /*const [userInput, SetUserInput] = useState({
    //managing multiple states
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });*/

  const titleChangeHandler = (event) => {
    /*SetUserInput({ ...userInput, enteredTitle: event.target.value }); not the best way to manage multiple states
    SetUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });*/
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    /*SetUserInput({ ...userInput, enteredAmount: event.target.value });
    SetUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });*/
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    /* SetUserInput({ ...userInput, enteredDate: event.target.value });
    SetUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });*/
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
