import React, { useState } from "react";
import "./SignUpForm.css"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signuppage = () => {
    const history=useNavigate()
    const [data,setData]=useState()

    const handle=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
    }
    
    const senddatatobackend=()=>{
    axios.post("http://localhost:3001/signin",{data:data}).then((responce)=>{
      if(responce.data.success)
      {
        alert("Registerd Successfully,Now Just Login")
        history("/login")
      }
      else
      alert(responce.data.data)
    })
    }

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              onChange={handle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="useremail"
              placeholder="Enter Email"
              onChange={handle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="userpassword"
              placeholder="Enter Password"
              onChange={handle}
            />
          </div>
          <button type="submit" onClick={senddatatobackend}>Sign Up Here</button>
          <h3 onClick={()=>history("/login")}>All ready have account? Login</h3>
      </div>
      <div className="signup-image"></div>
    </div>
  );
};

export default Signuppage;
