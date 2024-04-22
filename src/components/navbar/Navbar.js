import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const[loginned,setLoggined]=useState(false)
  useEffect(()=>{
  const user=localStorage.getItem("user")
  if(user)
  setLoggined(true)
  },[])
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className='navbar-item'><h1 style={{color: 'whitesmoke'}}><a href='/' style={{textDecoration: 'none'}}>BookBerries</a></h1></li>
        <li className="navbar-item"><a href="/home" className="navbar-link-items">Home</a></li>
        <li className="navbar-item"><a href="/about" className="navbar-link-items">About</a></li>
        <li className="navbar-item"><a href="/books" className="navbar-link-items">Books</a></li>
        {!loginned && <div>
          <li className="navbar-item"><button className='signup-nav-btn'><a href="/signup" className="navbar-link">Sign Up</a></button></li>
        <li className="navbar-item"><button className='login-nav-btn'><a href="/login" className="navbar-link">Log In</a></button></li></div>}
      </ul>
    </nav>
  );
};

export default Navbar;