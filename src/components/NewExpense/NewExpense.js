import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(true);

  const isEditingHandler = () => {
    setIsEditing((previous) => {
      return !previous;
    });
  };
  const newExpenseHandler = (newExpense) => {
    const newExpenseDate = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpenseDate);
  };
  return (
    <div className="new-expense">
      {isEditing && <button onClick={isEditingHandler}>Add New Expense</button>}
      {!isEditing && (
        <ExpenseForm
          onNewExpenseEntered={newExpenseHandler}
          onCancel={isEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
