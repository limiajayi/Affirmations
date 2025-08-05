
const Goals = () => {

    const goals = [
        {"Strengthen relationship with God": [
            "start that 365 days bible plan",
            "bible and pray first thing every morning",
        ]},
        {"First Class, Good Career": [
            "Make routine out of consolidating your knowledge", 
            "Apply even if you think you're not qualified", 
            "Go over once then on the second try, go over what you don't understand"
        ]}
    ]
    return (
        <>
            <h3>Goals</h3>
            <p>hmm</p>
            {console.log(Object.keys(goals[0])[0])}
        </>
    )
}

export default Goals