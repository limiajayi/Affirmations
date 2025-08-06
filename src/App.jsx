import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './Home'
import Goals from './Goals';
import { useState } from 'react';

const App = () => {

    const [active, setActive] = useState(true)

    const handleActiveChange = () => {
        const newActive = !active
        setActive(newActive)
    }

    
    return (
        <Router>
            <nav>
                <Link to='/goals'
                onClick={handleActiveChange}
                className={active? 'active' : 'inactive'}>
                    Goals
                </Link>

                <Link to='/'
                onClick={handleActiveChange}
                className={active? 'inactive' : 'active'}>
                    Affirmations
                </Link>
            </nav>

            {console.log(active)}
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/goals' element={<Goals />}/>
            </Routes>
        </Router>
    )
}

export default App