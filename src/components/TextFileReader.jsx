import { useState, useEffect } from 'react'
import Selection from './Selection';

const TextFileReader = ({ fileName }) => {
  //stores an array of the lines of text from quotes.txt
    const [lines, setLines] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

  //useEffect here is fetching data from my txt file
    useEffect(() => {

    //initial asynchronous function
    const fetchTextFile = async () => {
      //is loading is set to true initially
      setIsLoading(true)
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
        } finally {
          //set to false if the above is executed
          setIsLoading(false)
        }
    }

    //function call here to actually fetch my data and update the state of lines
    fetchTextFile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array means it runs only on the first render

    return (
    <div>
        
        {/* if the text file hasnt loaded yet, this displays, for better user experience */}
        { isLoading && lines.length === 0 ? <div>Loading...</div> : ""  }


        {/* line array is passed down to this component */}
        <Selection lines={lines} />
    </div>
    );
}

export default TextFileReader;