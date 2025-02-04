import { Link } from 'react-router-dom'
import homeIcon from './../assets/home-icon.png';
import "./Navbar.css"


function Navbar() {
    return (
        <nav>
            <Link to={'/'}><img src={homeIcon} alt="HomeIcon" /></Link>
        </nav>
    )
}

export default Navbar;
