import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" style={{backgroundColor: "blue", color: "white", position: "fixed", top: 0, left: 0, width: "100%", zIndex: 999}}>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li className="nav-link">
          <Link to="">SCHOOLCLOUD</Link>
        </li>
        <li className="nav-link dropdown">
          <div onClick={toggleMenu}>
            <a href="#">Log in as...</a>
            <i className="fas fa-chevron-down"></i>
          </div>
          <ul className="dropdown-menu" style={{display: menuOpen ? "block" : "none"}}>
            <li>
              <Link to={"/teacherlogin"}>As a teacher</Link>
            </li>
            <li>
              <Link to={"/Studentlogin"}>As a student</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

