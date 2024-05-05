import React, { useEffect, useState } from 'react';
import BookTable from '../book_table/BookTable';
import axios from 'axios';

const OrdersPage = () => {

  useEffect(()=>{
  fetchallOrders()
  },[])
  
  const [orderdata,SetOrderdata]=useState()

  const fetchallOrders=()=>{
    axios.post("http://localhost:3001/vieworders").then((response)=>{
      if(response.data.success)
      SetOrderdata(response.data.data)
    })
  }

  return (
    <div>
      <h2 style={{color: 'white', backgroundColor: 'purple', marginTop: 0, padding: 15}}>Order Details</h2>
      {orderdata && <BookTable books={orderdata}/>}
    </div>
  );
};

export default OrdersPage;
