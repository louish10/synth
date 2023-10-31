import './App.css';
import Box from '@mui/material/Box'
import Keyboard from '../keyboard/Keyboard'
import AdsrController from '../adsr-controller/AdsrController'

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

    <AdsrController></AdsrController>

    <Keyboard></Keyboard>
    </div>
  );
}

export default App;
