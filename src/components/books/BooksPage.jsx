import React, { useState } from 'react'
import Navbar from '../navbar/Navbar';
import BookCard from '../bookcard/BookCard';
import './BooksPage.css';
import Footer from '../footer/Footer';
import { useEffect } from 'react';
import axios from 'axios';

// const books = [
//     { id: 1, name: 'Book 1', author: 'Joe A', price: '$10', review: '4.5/5', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqtjEgThXXzxv66BoTfoE2m1mcZES5IBueC8mH-fM4M6WItga28kuWjTMPDXkYXABUN60&usqp=CAU' },
//     { id: 2, name: 'Book 2', author: 'Author 2', price: '$15', review: '4/5', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_9YbUV46X51RWKwGVP3QfXALjqBUF7qj6Q&usqp=CAU'},
//     { id: 3, name: 'Book 3', author: 'Author 3', price: '$20', review: '5/5', image: 'https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_book-cover-258566592cc857be2b4c1bf39061ef8b.jpg?ts%20=%201698323696' },
//     { id: 4, name: 'Book 4', author: 'Author 4', price: '$20', review: '5/5', image: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Insurgent_%28book%29.jpeg'}
//   ];

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
        <Navbar />
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