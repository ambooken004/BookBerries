import React from "react";
import "./LandingPage.css";
import Navbar from "../navbar/Navbar";
import Footer from '../footer/Footer';


const LandingPage = () => {
  

  return (
    <div>
      <Navbar />
      {/*
      <div className="landingpage-main-container">
        <h1>BookBerries</h1>
        <p>
          Find & Buy Books Online at low prices.Wide range of books available
        </p>
        <div className="startlearn-btns-container">
          <button className="get-started-btn">Get Started</button>
          <button className="learn-more-btn">Learn More</button>
        </div>
        { <Cards cards_content = {cards_content}  /> }
      </div>*/}
      <div className="landing-page">
      <header>
        <h1>Welcome to <h1 style={{color: "purple"}}>BookBerries</h1></h1>
        <p>Your one-stop destination for books</p>
      </header>
      <section className="featured-books">
        <h2>Featured Books</h2>
        <div className="book-container">
          <div className="book">
            <img src="https://m.media-amazon.com/images/I/618XGVFYlwL._SY466_.jpg" alt="How to win friends and influence people" />
          
          </div>
          <div className="book">
            <img src="https://m.media-amazon.com/images/I/51DlnjccG-L._SY445_SX342_.jpg" alt="Hooked" />
          
          </div>
          <div className="book">
            <img src="https://m.media-amazon.com/images/I/61b5aPmEhzL._SY466_.jpg" alt="Think and grow rich" />
        
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
};
export default LandingPage;
