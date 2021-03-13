import { useEffect, useRef, useState } from "react";

type TimerArgs = {
    milisegundos: number
}

export const Timer = ({ milisegundos }: TimerArgs) => {
    
    const [segundos, setSegundos] = useState(0);

    const ref = useRef<NodeJS.Timeout>();

    useEffect(() => {

        ref.current && clearInterval( ref.current );

        ref.current = setInterval(() => {
            setSegundos((seg) => seg + 1)
        }, milisegundos)
        return () => {

        }
    }, [milisegundos])
    return (
        <>
            <h4>Timer { segundos }</h4>
        </>
    )
}
