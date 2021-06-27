import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav className="bg-secondary" >
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/accueil">Star Wars</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/search">Rechercher</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
