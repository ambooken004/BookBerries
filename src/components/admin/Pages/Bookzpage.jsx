/*->created bookzpage for admin books
->created routes from admin home to bookzpage*/



import React from 'react';
import styles from './Bookzpage.css';

const BookzPage = () => {
  // Dummy data for books
  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', price: '$10' },
    { id: 2, title: 'Book 2', author: 'Author 2', price: '$15' },
    { id: 3, title: 'Book 3', author: 'Author 3', price: '$20' },
  ];

  return (
    <div className={styles.booksPage}>
      <h1>Books</h1>
      <div className={styles.booksContainer}>
        {books.map(book => (
          <div key={book.id} className={styles.bookCard}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Price: {book.price}</p>
            <button className={styles.buyButton}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookzPage;