import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import mountBromoImg from '../assets/mount_bromo.png';

function RightSidebar() {
  return (
    <Box sx={{ width: '300px', bgcolor: '#f5f5f5', padding: '1rem', mt: 4 }}>
      
        <Typography variant="h6">Done Trips</Typography>
        <List sx={{ mt: 2 }}>
          <ListItem>
            <img src={mountBromoImg} alt=" Mount Bromo" style={{ width: 80, height: 60, borderRadius: '8px' }} />
            <ListItemText primary="Mount Bromo" sx={{ ml: 2 }} />
          </ListItem>
        </List>      
    </Box>
  );
}

export default RightSidebar;
