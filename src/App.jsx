import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'
import Funny from './Funny';

const App = () => {
    return (
        <Router>
            <nav>
                <Link to='/'>Home</Link>
                <br />
                <Link to='/funny'>Funny</Link>
            </nav>

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/funny' element={<Funny />} />
            </Routes>
        </Router>
    )
}

export default App