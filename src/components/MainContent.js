import React from 'react';
import { Box, Grid, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';


import mountBromoImg from '../assets/mount_bromo.png';
import lakeTobaImg from '../assets/lake_toba.png';
import desertImg from '../assets/desert.png';

function MainContent() {
  return (
    <Box sx={{ padding: '1rem' }}>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6"> Air Travel</Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 2 }}>
              <img src={mountBromoImg} alt="Mount Bromo" style={{ width: '100%', borderRadius: '8px' }} />
              <Typography variant="subtitle1">Mount Bromo</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2 }}>
              <img src={lakeTobaImg} alt="Lake Toba" style={{ width: '100%', borderRadius: '8px' }} />
              <Typography variant="subtitle1">Lake Toba</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 2 }}>
              <img src={desertImg} alt="Desert" style={{ width: '100%', borderRadius: '8px' }} />
              <Typography variant="subtitle1">Desert </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

    
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Most Popular</Typography>
        <List sx={{ mt: 2 }}>
          <ListItem>
            <img src={mountBromoImg} alt="Mount Bromo" style={{ width: 80, height: 60, borderRadius: '8px' }} />
            <ListItemText primary="Mount Bromo" secondary="$348" sx={{ ml: 2 }} />
          </ListItem>
          <ListItem>
            <img src={lakeTobaImg} alt="Lake Toba" style={{ width: 80, height: 60, borderRadius: '8px' }} />
            <ListItemText primary="Lake Toba" secondary="$290" sx={{ ml: 2 }} />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default MainContent;