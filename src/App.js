import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const dummy_expenses = [
    {
      id: "e1",
      date: new Date("2022-04-5"),
      title: "Keyboard",
      price: 142.65,
    },
    {
      id: "e2",
      date: new Date("2021-07-18"),
      title: "Mouse",
      price: 26.65,
    },
    {
      id: "e3",
      date: new Date("2022-09-21"),
      title: "Monitor",
      price: 1000,
    },
    {
      id: "e4",
      date: new Date("2022-12-4"),
      title: "Lamb",
      price: 15.87,
    },
  ];

  const [expenseList, setExpenseList] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenseList((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenseList} />
    </div>
  );
};

export default App;
