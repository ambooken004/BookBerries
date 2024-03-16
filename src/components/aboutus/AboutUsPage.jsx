import React from 'react';
import './AboutUsPage.css'; 
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

function AboutUsPage() {
  return (
    <div>
        <Navbar />
        <div className='aboutus-main-con'>
        <div className="about-us-container">
            <h1>About Us</h1>
            <p>Welcome to our online book store! We are passionate about books and aim to provide book lovers with a convenient platform to discover and purchase their favorite titles.</p>
            <p>Our collection includes a wide range of genres, from classic literature to contemporary fiction, non-fiction, and more. Whether you're searching for a new release or a timeless classic, we've got you covered.</p>
            <p>At our online store, we prioritize customer satisfaction and strive to offer a seamless shopping experience. Feel free to explore our catalog, read reviews, and place your order with confidence.</p>
            <p>Thank you for choosing us as your go-to destination for all things books!</p>
            <div className='aboutus-access-btns'>
            <a href='/books'>
              <button className='acess-btn'>Go to Books</button>
              </a>
            </div>
        </div>
        <div className='about-img'></div>
        </div>
        <Footer />
    </div>
  );
}

export default AboutUsPage;
