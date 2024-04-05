import React from 'react';
import './AdminPage.css';
import Header from './Header'
import Home from './Home'
import Sidebar from './Sidebar'


const AdminPage = () => {
  return (
    <div className = 'grid-container'>
      <Header />
      <Sidebar />
      <Home />
    </div>
  )
}

export default AdminPage;