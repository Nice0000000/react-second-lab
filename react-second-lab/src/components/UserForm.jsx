import React, { useState } from 'react';
import { TextField, Button, Stack, Paper } from '@mui/material';

function UserForm({ onAddUser }) {
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && info.trim()) {
      onAddUser(name, info);
      setName('');
      setInfo('');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Stack component="form" onSubmit={handleSubmit} spacing={2}>
        <TextField 
          label="Ім'я" 
          variant="outlined" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          fullWidth 
        />
        <TextField 
          label="Опис" 
          variant="outlined" 
          value={info} 
          onChange={(e) => setInfo(e.target.value)} 
          fullWidth 
        />
        <Button variant="contained" type="submit" size="large">
          Додати користувача
        </Button>
      </Stack>
    </Paper>
  );
}

export default UserForm;