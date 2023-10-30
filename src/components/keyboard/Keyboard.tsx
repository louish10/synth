import './Keyboard.css';
import Key from '../key/key'

function Keyboard() {
    return <div className='keyboard'>
        <Key keycolour='black' className='keyboard-w'>w</Key>
        <Key keycolour='black' className='keyboard-e'>e</Key>
        <Key keycolour='black' className='keyboard-t'>t</Key>
        <Key keycolour='black' className='keyboard-y'>y</Key>
        <Key keycolour='black' className='keyboard-u'>u</Key>

        <Key keycolour='white' className='keyboard-a'>a</Key>
        <Key keycolour='white' className='keyboard-s'>s</Key>
        <Key keycolour='white' className='keyboard-d'>d</Key>
        <Key keycolour='white' className='keyboard-f'>f</Key>
        <Key keycolour='white' className='keyboard-g'>g</Key>
        <Key keycolour='white' className='keyboard-h'>h</Key>
        <Key keycolour='white' className='keyboard-j'>j</Key>
        <Key keycolour='white' className='keyboard-k'>k</Key>
    </div>
}

export default Keyboard;