import './Navbar.css';

function Navbar(props) {
    return (
        <nav className="navbar">
            <h2>Learn Log</h2>
            <ul>
                <li>Home</li>
                <li>Topics</li>
                <li>Entries</li>

                {props.isLoggedIn && (
                 <li className="logout-item" onClick={props.onLogout}>
                  Logout
                 </li>
               )}
            </ul>
        </nav>
    );
}

export default Navbar;