import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <div className="logo"><span>B</span>OOKINN</div>
      <nav>
        <Link to="/" className="active">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}

export default Navbar;
