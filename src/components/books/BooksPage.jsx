import React, { useState } from 'react'
import ModifiedNavbar from '../modified_navbar/ModifiedNavbar';
import BookCard from '../bookcard/BookCard';
import './BooksPage.css';
import Footer from '../footer/Footer';
import { useEffect } from 'react';
import axios from 'axios';


const BooksPage = () => {
   useEffect(() => {
    fetchbookdata()
  },[])
  
  const [bookdata,setBookdata]=useState()
  const fetchbookdata=()=>{
    axios.get("http://localhost:3001/viewallbook").then((responce)=>{
      if(responce.data.success)
      setBookdata(responce.data.data)
    })
  }
  return (
    <div>
        <ModifiedNavbar />
        <div className="book-container">
      {bookdata && bookdata.map(book => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
    <Footer />
    </div>
  )
}

export default BooksPage;