import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Keyboard from '../keyboard/Keyboard'

function App() {
  return (
    <div className="App">
      <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'primary.dark',
        color: 'white',
        fontSize: '48px',
        padding: '10px'
      }}
    >Synth</Box>
    <Keyboard></Keyboard>
    </div>
  );
}

export default App;
