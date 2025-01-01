import React from 'react';
import './ModifiedNavbar.css';

const ModifiedNavbar = () => {
  return (
    <nav className='modify-navbar'>
        <ul className="modify-navbar-list">
            <li className='modify-navbar-item'><h1 style={{color: 'whitesmoke'}}><a href='/' style={{textDecoration: 'none'}}>BookBerries</a></h1></li>
            <li className="modify-navbar-item"><a href="/" className="modify-navbar-link-items">Home</a></li>
            <li className="modify-navbar-item"><a href="/books" className="modify-navbar-link-items">Books</a></li>
            <li className="modify-navbar-item"><a href="/about" className="modify-navbar-link-items">About</a></li>
        </ul>
        {localStorage.getItem('user') && <li className='modify-navbar-item'><a href="/" className="modify-navbar-link-items" onClick={()=>localStorage.clear()}>Log Out</a></li>}
    </nav>
  )
}

export default ModifiedNavbar