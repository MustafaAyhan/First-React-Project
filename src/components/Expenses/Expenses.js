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
        <ExpenseItem
          title={expenses[0].title}
          date={expenses[0].date}
          price={expenses[0].price}
        />
        <ExpenseItem
          title={expenses[1].title}
          date={expenses[1].date}
          price={expenses[1].price}
        />
        <ExpenseItem
          title={expenses[2].title}
          date={expenses[2].date}
          price={expenses[2].price}
        />
        <ExpenseItem
          title={expenses[3].title}
          date={expenses[3].date}
          price={expenses[3].price}
        />
      </Card>
    </div>
  );
};

export default Expenses;
