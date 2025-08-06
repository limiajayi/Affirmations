import { useState, useEffect } from 'react'
import Selection from './Selection';

const TextFileReader = ({ fileName }) => {
  //stores an array of the lines of text from quotes.txt
    const [lines, setLines] = useState([]);

  //useEffect here is fetching data from my txt file
    useEffect(() => {

    //initial asynchronous function
    const fetchTextFile = async () => {
        try {
        // Fetch from public folder
        const response = await fetch(fileName); 
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
        <Selection lines={lines} />
    </div>
    );
}

export default TextFileReader;