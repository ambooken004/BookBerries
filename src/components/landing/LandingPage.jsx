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
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYo3aNodvND-RA0VJ3ewYvIZYhGGJpcpsGAg&usqp=CAU' alt="" />
          
          </div>
          <div className="book">
            <img src="https://storage.googleapis.com/du-prd/books/images/9780393254600.jpg" alt="" />
          
          </div>
          <div className="book">
            <img src="https://celadonbooks.com/wp-content/uploads/2019/07/the-silent-patient-us.jpg" alt="" />
        
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
};
export default LandingPage;
