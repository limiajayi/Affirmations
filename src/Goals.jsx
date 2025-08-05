import { useState } from "react";

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
        ]}
    ]

    const [selected, setSelected] = useState(1)
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
                            {line}
                        </div>
                    )})
                }
            </div>
        </>
    )
}

export default Goals