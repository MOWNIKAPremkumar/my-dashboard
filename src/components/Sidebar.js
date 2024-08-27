import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Dashboard, Event, Flight, Favorite, Settings } from '@mui/icons-material';

function Sidebar() {
  return (
    <Box sx={{ width: '250px', bgcolor: '#f5f5f5', padding: '1rem' }}>
      <Typography variant="h6" sx={{ mb: 4 }}>Trips</Typography>
      <List>
        <ListItem >
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem>
          <ListItemIcon><Event /></ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem >
          <ListItemIcon><Flight /></ListItemIcon>
          <ListItemText primary="Flights" />
        </ListItem>
        <ListItem>
          <ListItemIcon><Favorite /></ListItemIcon>
          <ListItemText primary="Favorites" />
        </ListItem>
        <ListItem>
          <ListItemIcon><Settings /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;