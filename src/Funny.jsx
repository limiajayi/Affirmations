import { useState, useEffect } from 'react'

const Button = ({onClick, text}) => {
  //i just felt like having this one
    return (
    <button onClick={onClick}>
        {text}
    </button>
    )
}

const Selection = ({ text }) => {
  //text from TextFileReader is passed into a new array
    const quotes = text

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
        <Button onClick={handleSelectedChange} text={'make me laugh'} />
    </>
    )

}

const TextFileReader = () => {
  //stores an array of the lines of text from quotes.txt
    const [lines, setLines] = useState([]);

  //useEffect here is fetching data from my txt file
    useEffect(() => {

    //initial asynchronous function
    const fetchTextFile = async () => {
        try {
        // Fetch from public folder
        const response = await fetch('/funny.txt'); 
        const text = await response.text();
        
        // Split into lines based on new lines and filter out empty lines
        const linesArray = text.split(/\r?\n/).filter(line => line.trim() !== '');
        
        //update state
        setLines(linesArray);
        } catch (error) {
        console.error("Error loading file:", error);
        }
    }

    //function call here to actually fetch my data and update the state of lines
    fetchTextFile();
  }, []); // Empty dependency array means it runs only on the first render

    return (
    <div>
        {/* line array is passed down to this component */}
        <Selection text={lines} />
    </div>
    );
}

const Funny = () => {

    return (
    <>
        <TextFileReader />
    </>
    )
}

export default Funny