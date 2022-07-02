import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const newExpenseHandler = (newExpense) => {
    const newExpenseDate = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpenseDate);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onNewExpenseEntered={newExpenseHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
