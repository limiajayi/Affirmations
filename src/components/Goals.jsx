import { useState, useEffect, useMemo } from "react";

const Goals = () => {

    const goals = useMemo(() => [
        {"Strengthen relationship with God": [
            "start that 365 days bible plan",
            "pray an read bible daily",
        ]},
        {"First Class, Good Career": [
            "Make routine out of consolidating your knowledge", 
            "Apply even if you think you're not qualified", 
            "Go over once then on the second try, go over what you don't understand"
        ]},
        {"Side questing": [
            "hang out with friends a lot",
            "join societies",
            "cook meals you like",
            "explore the topics and subjects you like",
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
            "eat fruits and vegetables",
            "sleep 7h 30 to 8h everyday"
        ]},
        {"Hobbies-maxxing": [
            "Write, Draw, Crotchet",
            "Read books",
            "Program",
        ]},
        {"Invest, Invest, Invest": [
            "Be financially educated",
            "Look into investment pots",
            "Rest in Cash ISAs",
        ]},
        {"Sprints for PTP": [
            "Postgres and Supabase implementation",
            "API endpoints",
            "UI / UX design",
            "D3 Implementation",
            "Forms",
        ]},
        {"Content": [
            "Write ideas every morning",
            "Follow trends according to the time of the year",
            "Film in batches",
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