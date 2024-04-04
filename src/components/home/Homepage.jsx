import React from 'react';
import ModifiedNavbar from '../modified_navbar/ModifiedNavbar';
import './Homepage.css';
import Footer from '../footer/Footer';



const Homepage = () => {
  return (
    <div>
      <ModifiedNavbar />
      <div className="home-page">
      <h1>Welcome to BookBerries</h1>
      <div className="book-cards">
        {/* Card 1 */}
        <div className="book-card">
          <img src="https://m.media-amazon.com/images/I/41LusXcRdDL._SY445_SX342_.jpg" alt="The Power Of Your Subconscious Mind" />
          <h3>The Power Of Your Subconscious Mind</h3>
          <p>By: Joseph Murphy</p>
        </div>
        {/* Card 2 */}
        <div className="book-card">
          <img src="https://m.media-amazon.com/images/I/61AxAkExf-L._AC_UF1000,1000_QL80_.jpg" alt="Decode And Conquer" className='home-card-img'/>
          <h3>Decode And Conquer</h3>
          <p>By: Lewis C.Lin</p>
        </div>
        <div className="book-card">
          <img src="https://m.media-amazon.com/images/I/71N072YNs6L._AC_UF1000,1000_QL80_.jpg" alt="Book 2" />
          <h3>The World's Greatest Blackjack Book</h3>
          <p>By: Lance Humble</p>
        </div>
        <div className="book-card">
          <img src="https://m.media-amazon.com/images/I/61JEULiI-BL._AC_UF1000,1000_QL80_.jpg" alt="Book 2" />
          <h3>100 Baggers</h3>
          <p>By: Christopher Mayer</p>
        </div>
        <div className="book-card">
          <img src="https://m.media-amazon.com/images/I/71KAT-uHm9L._AC_UF1000,1000_QL80_.jpg" alt="Book 2" />
          <h3>Why Buddhism Is True</h3>
          <p>By: Robert Wright</p>
        </div>
        <div className="book-card">
          <img src="https://m.media-amazon.com/images/I/51sdCuqMwWL._AC_UF1000,1000_QL80_.jpg" alt="Book 2" />
          <h3>Don't Make Me Think</h3>
          <p>By: Steve Krug</p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
    <Footer />
      
    </div>
  )
}

export default Homepage;