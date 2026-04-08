import React from 'react';
import { Grid } from '@mui/material';
import UserCard from './UserCard';

function CardList({ users, onDeleteUser }) {
  return (
    <Grid container spacing={3}>
      {users.map((user) => (
        <Grid item xs={12} sm={6} md={4} key={user.id}>
          <UserCard user={user} onDeleteUser={onDeleteUser} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardList;