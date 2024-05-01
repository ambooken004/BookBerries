import React, { useEffect, useState } from 'react';
import './UserAccounts.css';
import axios from 'axios';
import UserTableList from '../../user_table_list/UserTableList';

const UserAccounts = () => {

  const [data,setData]=useState()

  useEffect(()=>{
    fetchusers()
  },[])

  const fetchusers=()=>{
    axios.get("http://localhost:3001/viewallusers").then((responce)=>{
      if(responce.data.success)
      setData(responce.data.data)
    })
  }

  return (
    <div>
      <h1>User Accounts List</h1>
      {data &&<UserTableList users={data} />}
    </div>
  )
}

export default UserAccounts;