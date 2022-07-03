import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [selected, setSelected] = useState("2022");

  const filterSelectHandler = (selectedFilter) => {
    setSelected(selectedFilter);
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => selected === new Date(expense.date).getFullYear().toString()
  );

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={selected}
          onFilterSelect={filterSelectHandler}
        ></ExpenseFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList expenses={filteredExpenses}></ExpensesList>
      </Card>
    </li>
  );
};

export default Expenses;
