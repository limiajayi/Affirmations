import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './styles/App.css'
import Home from './components/Home'
import Goals from './components/Goals';
import Bible from './components/Bible';

const NavLinks = () => {
    const location = useLocation();

    // location.pathname will be:
    // '/' when on the home page
    // '/goals' when on the goals page
    // '/bible' when on the bible page
    
    return (
        <nav>
            <Link to='/'
            className={location.pathname === '/' ? 'active' : 'inactive'}>
                Affirmations
            </Link>

            <Link to='/bible'
            className={location.pathname === '/bible' ? 'active' : 'inactive'}>
                Bible
            </Link>

            <Link to='/goals'
            className={location.pathname === '/goals' ? 'active' : 'inactive'}>
                Goals
            </Link>
        </nav>
    );
};

const App = () => {
    return (
        <Router>
            <NavLinks />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/goals' element={<Goals />}/>
                <Route path='/bible' element={<Bible />} />
            </Routes>
        </Router>
    )
}

export default App