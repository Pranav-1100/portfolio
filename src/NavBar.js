import "./NavBar.css";
import logo from './logo.svg';
function NavBar() {
    return (
        <nav>
            <img src={logo} className="App-logo" alt="logo" />
            <ul className="navBar">
                <li className="nav-item"><a href="">Home</a></li>
                <li className="nav-item"><a href="">About</a></li>
                <li className="nav-item"><a href="">Project</a></li>
                <li className="nav-item"><a href="">Resume</a></li>
            </ul>
        </nav>
    )
}


export default NavBar;