import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'
import { makeStyles } from '@material-ui/core/styles'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const useStyles = makeStyles({
  container: {
    padding: '1rem',
    backgroundColor: 'rgb(31, 31, 31)',
    margin: '2rem auto',
    width: '50rem',
    maxWidth: '95%',
    borderRadius: '12px',
    boxShadow: '0 1px 8px rgba(0, 0, 0, 0.25)',
  },
})

export const Expenses = (props) => {
  const classes = useStyles()
  const { expenses } = props
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className={classes.container}>
      <ExpenseFilter onFilterChange={filterChangeHandler} selected={filteredYear} />
      <ExpensesChart expenses = {filteredExpenses}/>
      <ExpensesList filteredExpenses={filteredExpenses}/>
    </div>
  )
}
