import { useState, useEffect } from "react";


const Selection = ({ lines }) => {

    //stores a random number based on the current length of quote
    const [selected, setSelected] = useState(0)

    //saves the previous versions of selected state
    const [history, setHistory] = useState([0])

    //sets the current history position
    const [historyPosition, setHistoryPosition] = useState(0)

    //used to pause or unpause quotes that are on autorotation
    const [pause, setPause] = useState(false)


    //change quotes every 15 seconds
    useEffect(() => {
        //if paused don't start the interval
        if (pause) return;

        const interval = setInterval(() => {
            
            const newSelected = Math.floor(Math.random() * lines.length)

            setHistoryPosition(history.length)
            setHistory(history.concat(newSelected))
            setSelected(newSelected)

        }, 15000);

        //clears the effect
        return () => clearInterval(interval)
    }, [lines, pause, history])

    //lets the space bar to be used as a way to change the state of pause
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === ' ' || event.code == 'Space') {
                event.preventDefault() // prevents the default behaviour

                setPause(prev => !prev)
            }

        };

        window.addEventListener('keydown', handleKeyDown)

        // cleanup function
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])


    return (
        <>
            <p>{lines[selected]}</p>
        </>
    )

}

export default Selection