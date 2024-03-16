import React from 'react';
import Navbar from '../navbar/Navbar';
import './Homepage.css';
import Footer from '../footer/Footer';



const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="home-page">
      <h1>Welcome to BookBerries</h1>
      <div className="book-cards">
        {/* Card 1 */}
        <div className="book-card">
          <img src="https://skyryedesign.com/wp-content/uploads/2016/04/56c6f9b7efad5-cover-books-design-illustrations.jpg" alt="Book 1" />
          <h3>Book Title 1</h3>
          <p>Description of Book 1</p>
        </div>
        {/* Card 2 */}
        <div className="book-card">
          <img src="https://i.pinimg.com/564x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg" alt="Book 2" className='home-card-img'/>
          <h3>Book Title 2</h3>
          <p>Description of Book 2</p>
        </div>
        <div className="book-card">
          <img src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg" alt="Book 2" />
          <h3>Book Title 2</h3>
          <p>Description of Book 2</p>
        </div>
        <div className="book-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7ekxu3OzvIQLn2K9bnYPHvNlHiVnR216eg&usqp=CAU" alt="Book 2" />
          <h3>Book Title 2</h3>
          <p>Description of Book 2</p>
        </div>
        <div className="book-card">
          <img src="https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg" alt="Book 2" />
          <h3>Book Title 2</h3>
          <p>Description of Book 2</p>
        </div>
        <div className="book-card">
          <img src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale/jackets/9781635570304.jpg" alt="Book 2" />
          <h3>Book Title 2</h3>
          <p>Description of Book 2</p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
    <Footer />
      
    </div>
  )
}

export default Homepage;