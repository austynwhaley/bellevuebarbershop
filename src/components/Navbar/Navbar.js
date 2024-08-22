import './Navbar.css';

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
        <span>Home</span>
        <span>Services</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </div>
  );
}

export default NavBar;
