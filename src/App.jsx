import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './Home'
import Goals from './Goals';

const App = () => {

    
    return (
        <Router>
            <nav>
                <Link to='/goals'>
                    Goals
                </Link>

                <Link to='/'>
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