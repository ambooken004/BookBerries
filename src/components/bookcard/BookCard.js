import React from 'react';
import './BookCard.css';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {

  const checkloggined=(bookid)=>{
    const user=localStorage.getItem("user")
    if(user)
    history(`/review?hostelid=${bookid}`)
    else
    alert("You Must Login First")
  }
  const history=useNavigate()
  return (
    <div className="book-card">
      <div className="book-details">
        <h2>{book.bookname}</h2>
        <img src={book.bookimage} alt='Harry Potter' className='img'></img>
        <p>Author: {book.bookauthor}</p>
        <p>Price: {book.bookprice}</p>
        <p>Publisher:{book.bookpublisher}</p>
      </div>
      <div className="book-buttons">
        <button className="review-button" onClick={()=>checkloggined(book._id)}>Review Button</button>
        <button className="price-button">Buy</button>
      </div>
    </div>
  );
};

export default BookCard;