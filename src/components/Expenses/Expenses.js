import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
  const expenses = props.expenses;

  const [selected, setSelected] = useState("2020");
  const filterSelectHandler = (selectedFilter) => {
    console.log(selectedFilter);
    setSelected(selectedFilter);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selected}
          onFilterSelect={filterSelectHandler}
        ></ExpenseFilter>
        {expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
