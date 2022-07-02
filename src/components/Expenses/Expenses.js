import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
  const [selected, setSelected] = useState("2022");

  const filterSelectHandler = (selectedFilter) => {
    setSelected(selectedFilter);
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => selected === new Date(expense.date).getFullYear().toString()
  );

  let expensesContent = <p>No expense found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        price={expense.price}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selected}
          onFilterSelect={filterSelectHandler}
        ></ExpenseFilter>
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
