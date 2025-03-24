import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <div className="logo">
        <img src="https://bookinn-sc77.onrender.com/assets/Frame.png" alt="Bookinn Logo" /> {/* Replace with your image path */}
      </div>
      <nav>
        <Link to="/" className="active">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}

export default Navbar;
