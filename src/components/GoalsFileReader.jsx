import { useState, useEffect } from 'react'

const GoalsFileReader = () => {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        const fetchTextFile = async () => {
            try {

                const response = await fetch('goals.txt');
                const text = await response.text();

                const goalsArray = text.split(/\r?/)

                setGoals(goalsArray)

            } catch (error) {
                console.log('Error loading file: ', error);
            }
        }

        fetchTextFile()
    }, [])

    return (
        <div>
            
        </div>

    )
}

export default GoalsFileReader;