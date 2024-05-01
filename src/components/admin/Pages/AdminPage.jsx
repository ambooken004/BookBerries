import React from 'react';
import './AdminPage.css';
/* import Header from '../Header' */
import Home from '../Home'
import Sidebar from '../Sidebar'
/* import BookzPage from './Bookzpage'
import {Routes,Route  } from 'react-router-dom' */


const AdminPage = () => {
  return (
    
    <div className = 'grid-container'>
      {/* <Header /> */}
      <Sidebar />
      <Home />
      
      
    </div>
  )
}

export default AdminPage;