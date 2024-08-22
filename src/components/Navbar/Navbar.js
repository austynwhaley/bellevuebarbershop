import './Navbar.css';
import { HashLink as Link } from 'react-router-hash-link'

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-title">
          <span>Bellevue Barbershop - Home</span>
        </div>
        <div className="navbar-buttons">
          <button className="nav-button">_</button>
          <button className="nav-button">🗖</button>
          <button className="nav-button">x</button>
        </div>
      </div>

      <div className="gray-bar">
        <span>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </span>
        <span>
          <Link className="nav-link" to="/services">
            Services
          </Link>
        </span>
        <span>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </span>
        <span>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </span>
      </div>
    </div>
  );
}

export default NavBar;
