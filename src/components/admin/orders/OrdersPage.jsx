import React from 'react';
import BookTable from '../book_table/BookTable';

const OrdersPage = () => {
  
  const books = [
    {
      id: 1,
      name: 'Harry Potter',
      image: 'https://www.shutterstock.com/image-photo/bangkok-thailand-july-16-2019-260nw-1454161316.jpg',
      quantity: 3
    },
    {
      id: 2,
      name: 'Mr.Bean',
      image: 'https://m.media-amazon.com/images/I/51a1NUTf5CL._AC_UF1000,1000_QL80_.jpg',
      quantity: 2
    },
    {
        id: 3,
        name: 'Avengers',
        image: 'https://m.media-amazon.com/images/I/51FEC+OCLZL.jpg',
        quantity: 5
      },
    
  ];

  return (
    <div>
      <h2 style={{color: 'white', backgroundColor: 'purple', marginTop: 0, padding: 15}}>Order Details</h2>
      <BookTable books={books} />
    </div>
  );
};

export default OrdersPage;
