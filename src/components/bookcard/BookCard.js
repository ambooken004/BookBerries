import React, { useState } from 'react';
import './BookCard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookCard = ({ book }) => {

  const [loadorder,setLoadOrder]=useState(false)

  const checkloggined=(bookid,bookname)=>{
    const user=localStorage.getItem("user")
    if(user)
    history(`/review?bookid=${bookid}&&bookname=${bookname}`)
    else
    alert("You Must Login First")
  }

  const OrderBook=(bookname,id)=>{
  setLoadOrder(true)
  axios.post("http://localhost:3001/orderbook",{data:{bookid:id}}).then((responce)=>{
    if(responce.data.success)
    {
      alert(`The ${bookname} is Orderd Successfully`)
      setLoadOrder(false)
    }
  })
  }

  const history=useNavigate()
  return (
    <div className="book-card">
      <div className="book-details">
        <h3>{book.bookname}</h3>
        <img src={book.bookimage} alt='Harry Potter' className='imgbk'></img>
        <p>Author: {book.bookauthor}</p>
        <p>Price: {book.bookprice}</p>
        <p>Publisher:{book.bookpublisher}</p>
      </div>
      <div className="book-buttons">
        <button className="review-button" onClick={()=>checkloggined(book._id,book.bookname)}>Review Button</button>
        {!loadorder &&<button className="price-button" onClick={()=>OrderBook(book.bookname,book._id)}>Order</button>}
      </div>
    </div>
  );
};

export default BookCard;