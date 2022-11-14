import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpenseDate from './ExpenseDate'

const useStyles = makeStyles({
  expenseItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
    padding: '0.5rem',
    margin: '1rem 0',
    borderRadius: '12px',
    backgroundColor: '#4b4b4b',
  },
  expenseItemDescription: {
    display: 'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'flexEnd',
    flexFlow: 'columnReverse',
    justifyContent: 'flexStart',
    flex: 1,
  },
  expenseItemPrice: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#40005d',
    border: '1px solid white',
    marginTop: '1em',
    padding: '0.5rem',
    borderRadius: '12px',
    height:'2em',
    textAlign:'center',
    justifyContent:'center',
  },
  expenseName: {
    color: 'white',
    fontSize: '1rem',
    marginTop: '1em',
  },
  expenseDate: {
    color: 'white',
    fontSize: '1.5rem',
  },
})

const ExpenseItem = (props) => {
  const classes = useStyles()
  const { title, amount, date } = props

  return (
    <div className={classes.expenseItem}>
      
      <div className={classes.expenseItemDescription}>
      <div className={classes.expenseItemDescription}>
        <ExpenseDate date={date}/>
      </div>
        <h3 className={classes.expenseName}>{title}</h3>
        <div className={classes.expenseItemPrice}>₹ {amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
