import './Navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  // Determine the text based on the current path
  let pageTitle = '';
  switch (location.pathname) {
    case '/services':
      pageTitle = 'Services';
      break;
    case '/about':
      pageTitle = 'About';
      break;
    case '/contact':
      pageTitle = 'Contact';
      break;
    case '/booking':
      pageTitle = 'Booking';
      break;
    default:
      pageTitle = 'Home';
  }

  return (
    <div>
      <div className="navbar">
        <div className="navbar-title">
          <span>Bellevue Barbershop - {pageTitle}</span>
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
