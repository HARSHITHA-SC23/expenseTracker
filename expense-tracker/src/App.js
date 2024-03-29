import React, { useState } from 'react';
import { Expenses } from './components/Expenses/Expenses'
import './App.css'
import NewExpense from './components/NewExpenses/NewExpense'

const dummyExpenses = [
  {
    id: '1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: '2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: '3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: '4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: '5',
    title: 'New version change ()',
    amount: 0,
    date: new Date(2022, 11, 14),
  },
]

function App() {
  const [expenses,setExpenses]=useState(dummyExpenses);
  const addExpenseHandler = (expense) =>{
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense  onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  )
}

export default App
