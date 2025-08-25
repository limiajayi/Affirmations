import { useState, useEffect } from "react";

const Selection = ({ lines }) => {

    //stores a random number based on the current length of quote
    const [selected, setSelected] = useState(Math.floor(Math.random() * lines.length))

    //change quotes every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            
            const newSelected = Math.floor(Math.random() * lines.length)
            setSelected(newSelected)

        }, 20000);

        //clears the effect
        return () => clearInterval(interval)
    }, [lines]);



    return (
        <>
            <p>{lines[selected]}</p>
        </>
    )

}

export default Selection