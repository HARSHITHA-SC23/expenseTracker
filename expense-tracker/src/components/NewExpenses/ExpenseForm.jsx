import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  newExpenseControls: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    gap: '1rem',
    marginBottom: '1rem',
    textAlign: 'left',
  },
  expenseControlLabel: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    display: 'block',
  },
  expenseControlInput: {
    font: 'inherit',
    padding: '0.5rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '20rem',
    maxWidth: '80%',
  },
  expenseActions: {
    textAlign: 'right',
  },
  newExpenseButton: {
    font: 'inherit',
    padding: '1rem 2rem',
    border: '1px solid #40005d',
    backgroundColor: '#40005d',
    color: 'white',
    borderRadius: '12px',
    marginRight: '1rem',
  },
})
const ExpenseForm = (props) => {
    const {onSaveExpenseData,onCancel} = props;
  const classes = useStyles()
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  //FIXME  Using single state
  // const [userInput, setUserInput] = useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    //FIXME Alternative for using multiple states
    // setUserInput((prevState) => {
    //    return{ ...prevState,enteredTitle:event.target.value };
    // })
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    //FIXME Alternative for using multiple states
    // setUserInput((prevState) => {
    //     return{...prevState,enteredAmount:event.target.value};
    // })
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    //FIXME Alternative for using multiple states
    // setUserInput((prevState) => {
    //     return{...prevState,enteredDate:event.target.value};
    // })
  }
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title:enteredTitle,
        amount: +enteredAmount,
        date:new Date(enteredDate)
    }
    onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.newExpenseControls}>
        <div className={classes.newExpenseControls}>
          <label className={classes.expenseControlLabel}>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            className={classes.expenseControlInput}
          />
        </div>
        <div className={classes.newExpenseControls}>
          <label className={classes.expenseControlLabel}>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            className={classes.expenseControlInput}
          />
        </div>
        <div className={classes.newExpenseControls}>
          <label className={classes.expenseControlLabel}>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            className={classes.expenseControlInput}
          />
        </div>
      </div>
      <div className={classes.expenseActions}>
        <button type="submit" className={classes.newExpenseButton} onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className={classes.newExpenseButton}>
          Add Expenses
        </button>
      </div>
    </form>
  )
}

export default ExpenseForm
