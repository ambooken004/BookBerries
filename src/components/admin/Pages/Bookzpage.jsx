



import React, { useEffect, useState } from 'react';
import styles from './Bookzpage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookzPage = () => {
  const[bookdata,setBookdata]=useState()
  const history=useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:3001/viewallbook").then((responce)=>{
      if(responce.data.success)
      setBookdata(responce.data.data)
    })
  })

  return (
    <div className={styles.booksPage}>
      <h1>Books</h1>
      <div className="booksContainer">
        {bookdata && bookdata.map((item,key)=>{
          return(
            <div className="booksdivadmin" key={key} onClick={()=>history(`/adminreview/${item._id}`)}>
          <img src={item.bookimage} alt="" />
          <h2>{item.bookname}</h2>
        </div>
          )
        })}
        
      </div>
    </div>
  );
};

export default BookzPage;