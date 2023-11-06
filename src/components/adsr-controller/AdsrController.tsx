import './AdsrController.css';
import { useEffect, useRef, useState} from 'react';
import Slider from '@mui/material/Slider'
import range from 'lodash'


export default function AdsrController() {
    const [attack, setAttack] = useState(50)
    const [attackHeight, setAttackHeight] = useState(50)
    const [decay, setDecay] = useState(50)
    const [sustain, setSustain] = useState(25)
    const [release, setRelease] = useState(50)
    let ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let requestId:number;
        let canvas = ref.current;
        let context:CanvasRenderingContext2D | null;
        const scale = 1000;
        if (canvas){
            context = canvas.getContext('2d');
            canvas.width = scale;
            canvas.height = scale;
        }
        const render = () => {
            if (context && canvas) {
                context.clearRect(0, 0, canvas.width, canvas.height)
                context.beginPath();
                context.moveTo(0, canvas.height);
                context.lineWidth = 10;
                const scaledAttack = attack / 400 * scale;
                const scaledAttackHeight = attackHeight / 100 * scale;
                const scaledDecay = decay / 400 * scale;
                const scaledSustain = sustain / 100 * scale;
                const scaledSustainLength = scale/4
                const scaledRelease = release / 400 * scale;

                context.lineTo(scaledAttack, canvas.height - scaledAttackHeight);
                context.stroke();

                context.lineTo(scaledAttack + scaledDecay, canvas.height - scaledSustain)
                context.stroke();

                context.lineTo(scaledAttack + scaledDecay + scaledSustainLength, canvas.height - scaledSustain)
                context.stroke();

                context.lineTo(scaledAttack+scaledDecay+scaledSustainLength+scaledRelease, canvas.height + 10)
                context.stroke();
            }
            requestId = requestAnimationFrame(render);
        }
        render();
        return () => {
            cancelAnimationFrame(requestId)
        }
    })

    function updateAttackHeight(value:number) {
        setAttackHeight(value)
        if (value < sustain) {
            setSustain(value)
        }

    }
    return <div>
        <canvas ref={ref} className="adsr-visualiser"></canvas>
        <div>
            Attack time
            <Slider
                value={attack}
                onChange={(e, v) => { if (typeof(v) === 'number') {
                    setAttack(v) }}}
                min={10}
                max={100}
                valueLabelDisplay='auto'
            />
        </div>
        <div>
            Attack height
            <Slider
                value={attackHeight}
                onChange={(e, v) => { if (typeof(v) === 'number') {
                    updateAttackHeight(v) }}}
                min={25}
                max={100}
                valueLabelDisplay='auto'
            />
        </div>
        <div>
            Decay time
            <Slider
                value={decay}
                onChange={(e, v) => { if (typeof(v) === 'number') {
                    setDecay(v) }}}
                min={10}
                max={100}
                valueLabelDisplay='auto'
            />
        </div>
        <div>
            Sustain height
            <Slider
                value={sustain}
                onChange={(e, v) => { if (typeof(v) === 'number') {
                    setSustain(v) }}}
                min={10}
                max={attackHeight}
                valueLabelDisplay='auto'
            />
        </div>
        <div>
            Release time
            <Slider
                value={release}
                onChange={(e, v) => { if (typeof(v) === 'number') {
                    setRelease(v) }}}
                min={10}
                max={100}
                valueLabelDisplay='auto'
            />
        </div>
        {attack}
    </div>
} 