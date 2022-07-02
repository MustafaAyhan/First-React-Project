import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      title: enteredTitle,
      date: new Date(enteredDate),
      price: enteredAmount,
    };

    props.onNewExpenseEntered(newExpense);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  // Use just one state instead of multiple state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const enteredTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
    // Set one state without losing other states.
    // ! So ...args is important to not to lose other states
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // ! If your state depends on the previous use below instead of above approach
    // This guarantees that previous state will always be used as the lastest version of it
    // setUserInput((previousState) => {
    //   return { ...previousState, enteredTitle: event.target.value };
    // });
  };
  const enteredDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const enteredAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={enteredTitleHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={enteredAmountHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-07-02"
            max="2033-07-02"
            value={enteredDate}
            onChange={enteredDateHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
