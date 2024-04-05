import React from 'react';
import './Dashboard.css';
import { books } from '../../data/data';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="book-list">
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <div>{book.title}</div>
            <div>{book.author}</div>
            <div>${book.price}</div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Dashboard;