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

    //handles when the previous button is clicked
    //decrements history position
    //uses that to update selected and history
    const handlePrevious = () => {
        setHistoryPosition(prev => prev - 1)
        setSelected(history[historyPosition])
        setHistory(history.concat(selected))
    }

    //handles when the next button is clicked
    //i want history position to be at least history.length - 1
    const handleNext = () => {
            const newSelected = Math.floor(Math.random() * lines.length)

            setHistoryPosition(history.length)
            setHistory(history.concat(newSelected))
            setSelected(newSelected)
    }

    return (
        <>
            <p>{lines[selected]}</p>

            <div>
                {/* <button onClick={handlePrevious}>
                    {<img src="/backward.svg" alt="Next Button"/>}
                </button>

                <button onClick={() => {setPause(!pause)}}>

                    {pause ? <img src="/resumeButton.svg" alt="Resume" />  : <img src="/pauseButton.svg" alt="Pause" />}

                </button>
                <button onClick={handleNext}>
                    {<img src="/forward.svg" alt="Next Button"/>}
                </button>

                {console.log(history)}
                {console.log(historyPosition)} */}

            </div>
        </>
    )

}

export default Selection