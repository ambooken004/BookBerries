import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css'; // External CSS file
import axios from 'axios';

const Loginpage = () => {
 const [data,setData]=useState()
 const history=useNavigate()

 const handle=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
 }

 const senddatatobackend=()=>{
 axios.post("http://localhost:3001/login",{data:data}).then((response)=>{
  if(response.data.success)
  {
    alert("Loggined Successfully")
    history("/")
    console.log(response.data.data)
    localStorage.setItem("user",response.data.data._id)
  }
  else
  alert(response.data.data)
 })
 }

  return (
    <div className='loginwrap'>
    <div className='logcover'>
      <div className='logcover1'></div>
      <div className="login-form-container">
        <h3 className='logh3'>Login Page</h3>
        <input
          type="text"
          id="username"
          name='useremail'
          className="input-field"
          placeholder='Type Username here'
          onChange={handle}
        />
        <input
          type="password"
          id="password"
          name='userpassword'
          className="input-field"
          placeholder='Type password here'
          onChange={handle}
        />
        <button onClick={senddatatobackend} type="submit" className="submit-button">Login</button>
        <p className='phj' onClick={()=>history("/signup")}>New user Register now</p>
    </div>
    </div>
    </div>
  );
};

export default Loginpage;
