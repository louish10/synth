import Paper from '@mui/material/Paper'
import { useEffect } from 'react'

type KeyColour = "black" | "white"

interface Props {
    className: string;
    children: string;
    keycolour: KeyColour;
}

export default function Key(props:Props) {
    useEffect(() => {
        document.addEventListener('keydown', keyDown)
        document.addEventListener('keyup', keyUp)

        return () => { 
            document.removeEventListener('keydown', keyDown)
            document.removeEventListener('keyup', keyUp)
        }
    })

    function keyDown(event:any){
        if (event.key === props.children) {
            console.log(`key ${props.children} pressed.`)
        }
    }

    function keyUp(event:any) {
        if (event.key === props.children) {
            console.log(`key ${props.children} released.`)
        }
    }

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

    return <Paper 
                onKeyDown={keyDown} 
                className={props.className} 
                sx={props.keycolour === 'black' ? blackKeyClasses : whiteKeyClasses}>
        {props.children}
    </Paper>
}