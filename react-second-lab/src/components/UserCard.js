import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function UserCard({ user, onDeleteUser }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="160"
        image={user.image}
        alt={user.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>{user.name}</Typography>
        <Typography variant="body2" color="text.secondary">{user.info}</Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          color="error" 
          startIcon={<DeleteIcon />}
          onClick={() => onDeleteUser(user.id)}
        >
          Видалити
        </Button>
      </CardActions>
    </Card>
  );
}

export default UserCard;