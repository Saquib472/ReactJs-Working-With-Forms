import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [expenses, setExpenses] = useLocalStorage('expenses',expenseData);
  const [expense, setExpense] = useLocalStorage('expense',{
    title: "",
    category: "",
    amount: "",
  });
  const [isEditingRow, setIsEditingRow] = useLocalStorage('isEditingRow',"");
  const [expenseId, setExpenseId] = useLocalStorage('expenseId',"");


  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          isEditingRow={isEditingRow}
          setIsEditingRow={setIsEditingRow}
          expenseId={expenseId}
        />
        <ExpenseTable
          expenses={expenses}
          setExpenses={setExpenses}
          setExpense={setExpense}
          setIsEditingRow={setIsEditingRow}
          expenseId={expenseId}
          setExpenseId={setExpenseId}
        />
      </div>
    </main>
  );
}

export default App;
