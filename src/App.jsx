import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css'
import Home from './components/Home'
import Goals from './components/Goals';

const App = () => {

    const [active, setActive] = useState(false)

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

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/goals' element={<Goals />}/>
            </Routes>
        </Router>
    )
}

export default App