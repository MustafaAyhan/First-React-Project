import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
