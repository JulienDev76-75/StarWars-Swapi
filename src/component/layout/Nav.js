// On utilise le composant Link du router
import {Link} from "react-router-dom";
function Nav() {
    return (
        <nav className="bg-secondary">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/shopping">Ma liste</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/profil">Mon profil</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;