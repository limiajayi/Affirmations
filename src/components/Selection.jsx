import { useState, useEffect } from "react";

const Selection = ({ lines }) => {

    //stores a random number based on the current length of quote
    const [selected, setSelected] = useState(0)
    const [pause, setPause] = useState(false)

    //change quotes every 15 seconds

    useEffect(() => {
        //if paused don't start the interval
        if (pause) return;

        const interval = setInterval(() => {
            
            const newSelected = Math.floor(Math.random() * lines.length)
            setSelected(newSelected)

        }, 15000);

        //clears the effect
        return () => clearInterval(interval)
    }, [lines, pause]);



    return (
        <>
            <p>{lines[selected]}</p>

            <button onClick={() => {setPause(!pause)}}>

                {pause ? 'Resume' : 'Pause'}
                
            </button>
        </>
    )

}

export default Selection