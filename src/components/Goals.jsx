import { useState, useEffect, useMemo } from "react";

const Goals = () => {

    const goals = useMemo(() => [
        {"Strengthen relationship with God": [
            "start that 365 days bible plan",
            "pray first thing every morning",
        ]},
        {"First Class, Good Career": [
            "Make routine out of consolidating your knowledge", 
            "Apply even if you think you're not qualified", 
            "Go over once then on the second try, go over what you don't understand"
        ]},
        {"Be vulnerable": [
            "reply fast", 
            "learn conflict resolution skills", 
            "don't force a conversation or connection",
            "show kindness always and let people go",
            "if you get an adrenaline rush from speaking up, you should speak up more",
        ]},
        {"Health and Wellness": [
            "exercise twice a week", 
            "buy pineapples 3 days before period", 
            "do yoga exercises during period",
            "eat healthy snacks",
            "don't forget your fruit and veggies",
        ]},
        {"Hobbies-maxxing": [
            "Write",
            "Draw", 
            "Program", 
            "Crotchet",
            "Read books",
            "Watch movies",
        ]},
        {"Rest": [
            "7 and a half hours sleep",
            "Go to bed early", 
            "Go out with friends and family", 
            "No one will remember their accolades but everyone will remember the side-quests.",
        ]},
    ], []);

    const [selected, setSelected] = useState(Math.floor(Math.random() * goals.length));
    const [visible, setVisible] = useState(true);

     //change goals every 15 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            
            setTimeout(() => {

                const newSelected = Math.floor(Math.random() * goals.length)
                setSelected(newSelected)

                setVisible(true);

            }, 500);

        }, 15000);

        //clears the effect
        return () => clearInterval(interval)
    }, [goals]);

    const arrayOfKeys = Object.keys(goals[selected])

    return (
        <div 
        className="views">
            <h3>Goals</h3>
            <div 
            className={`goals quote-container ${visible? '' : 'fade-out'}`}>
                <h5>
                    {arrayOfKeys[0]}
                </h5>
                
                    {
                        goals[selected][arrayOfKeys[0]].map((line) => 
                        {return (
                            <p>
                                {"- " + line}
                            </p>
                        )})
                    }
                <small>. . . to keep in mind</small>
            </div>
        </div>
    )
}

export default Goals