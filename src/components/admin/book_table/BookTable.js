import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const BookTable = ({ books }) => {
  return (
    <TableContainer component={Paper}>
        <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Image</TableCell>
          <TableCell>Quantity</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {books.map(book => (
          <TableRow key={book.bookid.id}>
            <TableCell>{book.bookid.bookname}</TableCell>
            <TableCell><img src={book.bookid.bookimage} alt={book.name} style={{ width: '80px', height: '80px' }} /></TableCell>
            <TableCell>{book.ordercount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      </Table>
    </TableContainer> 
   
  );
};

export default BookTable;
