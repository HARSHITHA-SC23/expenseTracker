import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import ErrorModal from './ErrorModal';

export const AddUser = (props) => {
  const { onAddUser } = props;

  const [enteredName, setEnteredName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values)'
      })
      setEnteredName('');
      setEnteredAge('');
    }
    else if (+enteredAge < 0) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (non-negative or >0 values)'
      })
      setEnteredName('');
      setEnteredAge('');
    }
    else {
      const userData = {
        name: enteredName,
        age: +enteredAge
      }
      onAddUser(userData);
      setEnteredName('');
      setEnteredAge('');
    }
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div style={{ margin: 'auto', width: '50%', marginTop: '4em' }} onSubmit={submitHandler}>
      {error && <ErrorModal title={error.title} message={error.message} errorHandler={errorHandler} />}
      <Card sx={{ display: 'flex', width: '50em', backgroundColor: '#aeb4ff', height: 'auto' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid item xs={12} sm={12} md={12} lg={7} xl={8}>
            <Typography variant="h5" color="primary">Welcome Back!</Typography>
            <Box sx={{ ml: 20 }}>
              <Box
                component="form"
                noValidate
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mt: 5 }}
              >
                <TextField
                  margin="normal"
                  variant="outlined"
                  value={enteredName}
                  onChange={nameChangeHandler}
                  required
                  fullWidth
                  id="username"
                  label='Username'
                  type='text'
                  sx={{ width: 500 }}
                />
                <TextField
                  margin="normal"
                  variant="outlined"
                  value={enteredAge}
                  onChange={ageChangeHandler}
                  required
                  fullWidth
                  id="username"
                  label='Age'
                  type='number'
                  sx={{ width: 500 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 2, mb: 4 }}
                >
                  <span>ADD DETAILS</span>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Card>
    </div>
  );
}


export default AddUser;