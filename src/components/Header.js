import React from 'react';
import { Box, Typography, Paper, InputBase, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

function Header() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
      <Typography variant="h5">Hello</Typography>
      <Paper component="form" sx={{ display: 'flex', alignItems: 'center', width: 300 }}>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." />
        <IconButton type="submit" sx={{ p:'10px' }} aria-label="search">
          <Search />
        </IconButton>
      </Paper>
    </Box>
  );
}

export default Header;
