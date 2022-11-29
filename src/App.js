import './App.css';
import React from 'react'
import  Sidebar from './components/Sidebar';
import  Feed from './components/Feed';
import  Rightbar from './components/Rightbar';
import { Box, Container, Stack } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {



  return (
  
  <Box>
     <Navbar />
    <Stack direction="row" spacing={2}
    justifyContent="space-between"
    >
   
    <Sidebar style={{backgroundColor: "yellow"}}/>
    <Feed />
    <Rightbar />
    </Stack>
    <Footer />
    
    </Box>



  ); 
}


export default App;