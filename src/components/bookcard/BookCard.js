import React from 'react';
import './BookCard.css';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-details">
        <h2>{book.name}</h2>
        <img src={book.image} alt='Harry Potter' className='img'></img>
        <p>Author: {book.author}</p>
        <p>Price: {book.price}</p>
        <p>Review: {book.review}</p>
      </div>
      <div className="book-buttons">
        <button className="review-button"><a href='/review' className='review-btn'>Review</a></button>
        <button className="price-button">Buy</button>
      </div>
    </div>
  );
};

export default BookCard;