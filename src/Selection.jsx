import { useState } from "react";
import Button from "./Button";

const Selection = ({ lines, text }) => {
    //lines from TextFileReader is passed into a new array
    const quotes = lines

    //stores a random number based on the current length of quote
    const [selected, setSelected] = useState(0)

    const handleSelectedChange = () => {
    //chooses a random number and sets it as the new value of Selected
    let newSelected = Math.floor(Math.random() * quotes.length)
    setSelected(newSelected)
    }

    return (
        <>
            <p>{quotes[selected]}</p>
            <Button onClick={handleSelectedChange} text={text} />
        </>
    )

}

export default Selection