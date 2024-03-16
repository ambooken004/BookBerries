/*import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 BookBerries Inc. All Rights Reserved.</p>
        
      </div>
    </footer>
  )
}

export default Footer;
*/

// Footer.js

import React from 'react';
import './Footer.css'; // Importing external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social-icons">
          <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
        </div>
        <div className='soscial-media-icons'>
          <ul>
            <li>
              <div className="socialicon">
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png' alt='instagram' className="insta"/>
              <img src='https://img.freepik.com/free-vector/twitter-app-new-logo-x-black-background_1017-45425.jpg' alt='instagram' className="X"/>
              <img src='https://pngimg.com/d/meta_PNG12.png' alt='instagram' className="X"/>
              </div>
              </li>
          </ul>
        </div>
        <div className="footer__references">
          <p>&copy; 2024 BookStore</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
