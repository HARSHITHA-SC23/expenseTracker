import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    display: ' flex',
    flexDirection: 'column',
    width: '5.5rem',
    height: '5.5rem',
    border: '1px solid #ececec',
    backgroundColor: '#2a2a2a',
    color: 'white',
    borderRadius: '12px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expenseMonth: {
    fontSize: '0.75rem',
    fontWeight:'bold'
  },
  expenseYear: {
    fontSize: '0.75rem',
  },
  expenseDay: {
    fontSize: '1.55rem',
    fontWeight:'bold'
  },
})
const ExpenseDate = (props) => {
  const classes = useStyles()
  const { date } = props

  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = date.toLocaleString('en-US', { day: '2-digit' })
  const year = date.getFullYear()
  return (
    <div className={classes.container}>
      <div className={classes.expenseMonth}>{month}</div>
      <div className={classes.expenseYear}>{year}</div>
      <div className={classes.expenseDay}>{day}</div>
    </div>
  )
}

export default ExpenseDate
