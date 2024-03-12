import React from 'react';
import './Navbar.css'; // Importing external CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className='navbar-item'><h1 style={{color: 'whitesmoke'}}>BookBerries</h1></li>
        <li className="navbar-item"><a href="/" className="navbar-link-items">Home</a></li>
        <li className="navbar-item"><a href="/about" className="navbar-link-items">About</a></li>
        <li className="navbar-item"><a href="/books" className="navbar-link-items">Books</a></li>
        <li className="navbar-item"><button className='signup-btn'><a href="/signup" className="navbar-link">Sign Up</a></button></li>
        <li className="navbar-item"><button className='login-btn'><a href="/login" className="navbar-link">Log In</a></button></li>
      </ul>
    </nav>
  );
};

export default Navbar;