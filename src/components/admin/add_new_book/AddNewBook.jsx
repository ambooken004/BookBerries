import React from 'react';
import './AddNewBook.css';

const AddNewBook = () => {
  return (
    <div className='addbook-main-container'>
      <div className='addbook-sub-container'>
        <h3>Add New Book</h3>
        <input className='addbook-input-field' type='text' placeholder='Enter Book Name' />
        <input className='addbook-input-field' type='file' accept="image/*" placeholder='Enter Book Image' />
        <input className='addbook-input-field' type='text' placeholder='Enter Book Author' />
        <input className='addbook-input-field' type='text' placeholder='Enter Book Publisher' />
        <input className='addbook-input-field' type='number' placeholder='Enter Book Price' />

        <button type='submit' className='addbook-submit-button'>Add New Book</button>

      </div>
    </div>
  )
}

export default AddNewBook;