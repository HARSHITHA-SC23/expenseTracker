import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    expensesFilter: {
        color: 'white',
        padding: '0 1rem',
      },
    expensesFilterControl: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'spaceBetween',
        margin: '1rem 0',
      },
    expensesFilterLabel: {
        fontWeight: 'bold',
      },
    expensesFilterSelect: {
        font: 'inherit',
        padding: '0.5rem 3rem',
        fontWeight: 'bold',
        borderRadius: '6px',
        marginLeft:'2em'
      }
  })

const ExpenseFilter = (props) => {
    const classes = useStyles()
    const {onFilterChange,selected} = props
    const dropdownChangeHandler = (event) => {
        onFilterChange(event.target.value)
    }
  return (
    <div className={classes.expensesFilter}>
      <div className={classes.expensesFilterControl}>
        <label className={classes.expensesFilterLabel}>Filter by year</label>
        <select value={selected} className={classes.expensesFilterSelect} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter