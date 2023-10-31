import './AdsrController.css';
import { useEffect, useRef, useState} from 'react';
import Slider from '@mui/material/Slider'
import range from 'lodash'


export default function AdsrController() {
    const [attack, setAttack] = useState(50)
    const [decay, setDecay] = useState(50)
    const [sustain, setSustain] = useState(50)
    const [release, setRelease] = useState(50)
    let ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let requestId:number;
        let canvas = ref.current;
        let context:CanvasRenderingContext2D | null;
        if (canvas){
            context = canvas.getContext('2d');
        }
        const render = () => {
            if (context && canvas) {
                context.clearRect(0, 0, canvas.width, canvas.height)
                context.beginPath();
                context.moveTo(0, canvas.height);
                context.lineTo(attack, 10);
                context.stroke();

                // const xDecay = [attack, attack + 2, attack + 4]
                // const yDecay = xDecay.map((x) => attack*Math.exp(x - attack))

                context.lineTo(attack + decay, canvas.height - sustain)
                context.stroke();

                context.lineTo(attack + decay + 50, canvas.height - sustain)
                context.stroke();

                context.lineTo(attack+decay+50+release, canvas.height)
                context.stroke();
            }
            requestId = requestAnimationFrame(render);
        }
        render();
        return () => {
            cancelAnimationFrame(requestId)
        }
    })
    return <div>
        <canvas ref={ref} className="adsr-visualiser"></canvas>
        <div>
            Attack
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
            Decay
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
            Sustain
            <Slider
                value={sustain}
                onChange={(e, v) => { if (typeof(v) === 'number') {
                    setSustain(v) }}}
                min={10}
                max={100}
                valueLabelDisplay='auto'
            />
        </div>
        <div>
            Release
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