import React, { useState } from 'react';
import { Container, Box, CssBaseline, ThemeProvider, createTheme, Typography } from '@mui/material';
import UserForm from './components/UserForm.jsx';
import CardList from './components/CardList.js';

const theme = createTheme();

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Ярослав', info: 'Студент', image: 'https://picsum.photos/200/200?random=1' },
    { id: 2, name: 'Олександр', info: 'Викладач', image: 'https://picsum.photos/200/200?random=2' }
  ]);

  const handleAddUser = (name, info) => {
    const newUser = {
      id: Date.now(),
      name,
      info,
      image: `https://picsum.photos/200/200?random=${Date.now()}`
    };
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            User Management (MUI)
          </Typography>
          <UserForm onAddUser={handleAddUser} />
          <Box sx={{ mt: 4 }}>
            <CardList users={users} onDeleteUser={handleDeleteUser} />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;