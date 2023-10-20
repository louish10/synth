import Paper from '@mui/material/Paper'
import './Keyboard.css';

function Keyboard() {
    const keyClasses = {
        margin: '2px 10px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px",
        
    }
    const whiteKeyClasses = {
        ...keyClasses,
        backgroundColor: 'primary.light',
    }
    const blackKeyClasses = {
        ...keyClasses,
        backgroundColor: 'primary.dark',
        color: 'white'
    }
    return <div className='keyboard'>
        <Paper className='keyboard-w' sx={blackKeyClasses}>w</Paper>
        <Paper className='keyboard-e' sx={blackKeyClasses}>e</Paper>
        <Paper className='keyboard-t' sx={blackKeyClasses}>t</Paper>
        <Paper className='keyboard-y' sx={blackKeyClasses}>y</Paper>
        <Paper className='keyboard-u' sx={blackKeyClasses}>u</Paper>

        <Paper className='keyboard-a' sx={whiteKeyClasses}>a</Paper>
        <Paper className='keyboard-s' sx={whiteKeyClasses}>s</Paper>
        <Paper className='keyboard-d' sx={whiteKeyClasses}>d</Paper>
        <Paper className='keyboard-f' sx={whiteKeyClasses}>f</Paper>
        <Paper className='keyboard-g' sx={whiteKeyClasses}>g</Paper>
        <Paper className='keyboard-h' sx={whiteKeyClasses}>h</Paper>
        <Paper className='keyboard-j' sx={whiteKeyClasses}>j</Paper>
        <Paper className='keyboard-k' sx={whiteKeyClasses}>k</Paper>
    </div>
}

export default Keyboard;