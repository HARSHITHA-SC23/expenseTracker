import React from 'react'
import ExpenseItem from './ExpenseItem';

export const ExpensesList = (props) => {
    const { filteredExpenses } = props

    if (filteredExpenses.length === 0) 
    {
        return <h1 style={{ color: 'white', alignContent: 'center' }}>Foun No expense</h1>
    }
    return (
        <div>
            {filteredExpenses.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </div>
  )
}

export default ExpensesList;
