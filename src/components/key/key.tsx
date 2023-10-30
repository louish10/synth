import Paper from '@mui/material/Paper'
import { useEffect, useState } from 'react'

type KeyColour = "black" | "white"

interface Props {
    className: string;
    children: string;
    keycolour: KeyColour;
}

export default function Key(props:Props) {
    const [keyPressed, setKeyPressed] = useState(false)

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
            setKeyPressed(true)
        }
    }

    function keyUp(event:any) {
        if (event.key === props.children) {
            setKeyPressed(false)
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

    const pressedKeyClasses = {
        backgroundColor: 'secondary.main'
    }

    function classes() {
        const baseClasses = props.keycolour === 'black' ? blackKeyClasses : whiteKeyClasses
        const pressedClasses = keyPressed ? {...pressedKeyClasses} : {}
        return { ...baseClasses, ...pressedClasses}
    }

    return <Paper 
                onKeyDown={keyDown} 
                className={props.className} 
                sx={classes()}>
        {props.children}
    </Paper>
}