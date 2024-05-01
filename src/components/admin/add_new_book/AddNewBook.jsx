import React, { useState } from 'react';
import './AddNewBook.css';
import axios from 'axios';

const AddNewBook = () => {

  const [data,setData]=useState()
  
  const handle=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const addbooktoabckend=()=>{
    axios.post("http://localhost:3001/addbook",{data:data}).then((responce)=>{
      if(responce.data.success)
      alert("Book Added Successfully")
    })
  }

  return (
    <div className='addbook-main-container'>
      <div className='addbook-sub-container'>
        <h3>Add New Book</h3>
        <input className='addbook-input-field' name="bookname" type='text' placeholder='Enter Book Name' onChange={handle} />
        <input className='addbook-input-field' name="bookimage" type='text'  placeholder='Enter Book Image link'  onChange={handle}/>
        <input className='addbook-input-field' name="bookauthor" type='text' placeholder='Enter Book Author' onChange={handle} />
        <input className='addbook-input-field' name="bookpublisher" type='text' placeholder='Enter Book Publisher' onChange={handle} />
        <input className='addbook-input-field' name="bookprice" type='number' placeholder='Enter Book Price' onChange={handle} />

        <button type='submit' className='addbook-submit-button' onClick={addbooktoabckend}>Add New Book</button>

      </div>
    </div>
  )
}

export default AddNewBook;