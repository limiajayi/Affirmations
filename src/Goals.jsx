import { useState, useEffect } from "react";

const Goals = () => {

    const goals = [
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
            "don't force a conversation",
            "don't force connection",
            "show kindness always",
            "let people go",
            "if you get an adrenaline rush from speaking up you should probably speak up more",
        ]},
        {"Health and Wellness": [
            "exercise twice a week", 
            "buy pineapples 3 days before period", 
            "do yoga exercises during period",
            "eat healthy snacks",
            "don't forget your fruit and veggies",
        ]},
        {"Hobbies-maxxing": [
            "Program",
            "Draw", 
            "Write", 
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
    ];

    const [selected, setSelected] = useState(0);

     //change goals every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            
            const newSelected = Math.floor(Math.random() * goals.length)
            setSelected(newSelected)

        }, 5000);

        //clears the effect
        return () => clearInterval(interval)
    }, [goals]);

    const arrayOfKeys = Object.keys(goals[selected])

    return (
        <>
            <h3>Goals</h3>
            <h4>
                {arrayOfKeys[0]}
            </h4>
            <div>
                {
                    goals[selected][arrayOfKeys[0]].map((line) => 
                    {return (
                        <div>
                            {"- " + line}
                        </div>
                    )})
                }
            </div>
        </>
    )
}

export default Goals