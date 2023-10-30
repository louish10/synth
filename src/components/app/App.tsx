import React from 'react';
import './App.css';
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
