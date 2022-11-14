import * as React from 'react';
import Card from '@mui/material/Card';
import UserItem from './UserItem';

export const UserList = (props) => {
  debugger;
  const { userList } = props

  return (
    <div style={{ margin: 'auto', width: '50%', marginTop: '2em' }}>
      <Card sx={{width: '50em', backgroundColor: 'white', height: 'auto'}}>
        {userList.map((user) => 
          <UserItem 
            name = {user.name}
            age = {user.age}
          />
        )}
      </Card>
    </div>
  );
}


export default UserList;