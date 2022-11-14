import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpenseForm from './ExpenseForm'

const useStyles = makeStyles({
  newExpense: {
    backgroundColor: '#a892ee',
    padding: '1rem',
    margin: '2rem auto',
    width: '50rem',
    maxWidth: '95%',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 1px 8px rgba(0, 0, 0, 0.25)',
  },
  buttonAlternative: {
    color: '#220131',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  newExpenseButton: {
    font: 'inherit',
    padding: '1rem 2rem',
    border: '1px solid #40005d',
    backgroundColor: '#40005d',
    color: 'white',
    borderRadius: '12px',
    marginRight: '1rem',
  }
})
const NewExpense = (props) => {
  const classes = useStyles()
  const [isEditing, setIsEditing] = useState(false);
  const { onAddExpense } = props;
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 100).toString()
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  }
  const stopEditingHandler = () => {
    setIsEditing(false);
  }
  return (
    <div className={classes.newExpense}>
      {!isEditing && (<button type="submit" className={classes.newExpenseButton} onClick={startEditingHandler}>
        Add Expenses
      </button>)}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  )
}

export default NewExpense