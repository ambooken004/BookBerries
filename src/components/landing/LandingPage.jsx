import React from "react";
import "./LandingPage.css";
import Navbar from "../navbar/Navbar";
import Cards from "../cards/Cards";

const LandingPage = () => {
  const cards_content = [
    { image: "", description: "", heading: "Joe", content: "India" },
    { image: "", description: "", heading: "Ronaldo", content: "Brazil" },
  ];

  return (
    <div>
      <Navbar />
      <div className="landingpage-main-container">
        <h1>BookBerries</h1>
        <p>
          Find & Buy Books Online at low prices.Wide range of books available
        </p>
        <div className="startlearn-btns-container">
          <button className="get-started-btn">Get Started</button>
          <button className="learn-more-btn">Learn More</button>
        </div>
        {/* <Cards cards_content = {cards_content}  /> */}
      </div>
      <div></div>
    </div>
  );
};
export default LandingPage;
