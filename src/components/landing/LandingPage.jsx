import React from "react";
import "./LandingPage.css";
import Navbar from "../navbar/Navbar";
import Footer from '../footer/Footer';
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
  const router=useNavigate()

  return (
    <div>
      <Navbar />
      <div className="landing-page">
      <div className="dashboardimg">
      <header>
       <h1 className="welcome">WELCOME TO</h1>
       <h1 className="Depreso">Depresso Detect</h1>
        <p>Your one-stop destination for helping your mind</p>
      </header>
      <button className="startrecordbutton" onClick={()=>localStorage.getItem("user") ? router("/recording") : alert("You need to login first")}>Start Recording Voice</button>
      </div>
      <section className="featured-books">
        <h2 style={{marginTop:200}}>Featured Books helps</h2>
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
