



import React, { useEffect, useState } from 'react';
import styles from './Bookzpage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookzPage = () => {
  const[bookdata,setBookdata]=useState()
  const history=useNavigate()

  const deletebook=(id)=>{
    axios.post("http://localhost:3001/deletebook",{data:id}).then((responce)=>{
      if(responce.data.success)
      {
      alert("Book deleted Successfully")
      callbackend()
      }
    })
  }

  const callbackend=()=>{
    axios.get("http://localhost:3001/viewallbook").then((responce)=>{
      if(responce.data.success)
      setBookdata(responce.data.data)
    })
  }

  useEffect(()=>{
    callbackend()
  },[])

  

  return (
    <div className={styles.booksPage}>
      <h1>Books</h1>
      <div className="booksContainer">
        {bookdata && bookdata.map((item,key)=>{
          return(
            <div className="booksdivadmin" key={key}>
          <img src={item.bookimage} alt="" onClick={()=>history(`/adminreview/${item._id}`)}/>
          <h2>{item.bookname}</h2>
          <button className='admin-book-delete-btn' onClick={()=>deletebook(item.id)}>Delete</button>
        </div>
          )
        })}
        
      </div>
    </div>
  );
};

export default BookzPage;