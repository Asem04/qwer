import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-light custom-navbar">
      <div className="container">
        
        <button className="burger" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="main-navbar">
        <ul className="custom-menu">
          <li><Link to="/" onClick={toggleNavbar}>Home</Link></li>
          <li><Link to="/about" onClick={toggleNavbar}>About Me</Link></li>
          <li><Link to="/works" onClick={toggleNavbar}>Works</Link></li>
         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
