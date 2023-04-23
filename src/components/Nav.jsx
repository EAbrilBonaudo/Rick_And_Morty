import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, setAccess }) => {
    

    const handleLogOut = () => {
        setAccess(false);
    }

    return (
        <nav>
            <SearchBar onSearch={onSearch} />
            
            <Link to='/about'> ABOUT </Link>
            <Link to='/home'> HOME </Link>
            <Link to='/favorites'> Favorites </Link>

            <button onClick={handleLogOut}>LOG OUT</button>
        </nav>
    )
}

export default Nav;