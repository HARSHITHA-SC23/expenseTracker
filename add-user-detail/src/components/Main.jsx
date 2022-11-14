import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import AddUser from './user/AddUser';
import UserList from './user/UserList';
import { useState } from 'react';

export const Main = () => {
    
  const userList = [
    {
      name: 'Chandrashekar',
      age: '57'
    },
    {
      name: 'Anitha shekar',
      age: '50'
    },
    {
      name: 'Arpitha shekar',
      age: '29'
    },
    {
      name: 'Harshitha shekar',
      age: '23'
    },
    {
      name: 'Amogh shekar',
      age: '19'
    },
    
  ]
  debugger;
    const [users,setUsers]=useState(userList);
    const addUserHandler = (user) =>{
        setUsers(prevUsers => {
          return [user, ...prevUsers];
        });
      }

    return (
        <div >
            <AddUser onAddUser={addUserHandler}/>
            <UserList userList={users}/>
        </div>
    );
}


export default Main;