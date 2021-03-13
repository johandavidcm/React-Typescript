import { useState } from "react";
import { Timer } from "./Timer"

export const TimerPadre = () => {

    const [miliSegundos, setMiliSegundos] = useState(1000);

    return (
        <>
            <span>Milisegundos { miliSegundos }</span>
            <br/>
            <button
                className="btn btn-outline-success"
                onClick={ () => setMiliSegundos(1000) }
            >
                1000
            </button>
            <button
                className="btn btn-outline-success"
                onClick={ () => setMiliSegundos(2000) }
            >
                2000
            </button>
            <Timer
                milisegundos={ miliSegundos }
            />
        </>
    )
}
