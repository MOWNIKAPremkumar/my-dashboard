import React from 'react';
import { Box, Container } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <Container maxWidth="xl" sx={{ display: 'flex', height: '100vh', padding: 0 }}>
    <Sidebar />
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
    <Header />
    <MainContent />
    </Box>
    <RightSidebar />
    </Container>
  );
}

export default App;
