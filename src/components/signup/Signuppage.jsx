import React from "react";
import "./SignUpForm.css"; // External CSS file for styling
import { useNavigate } from "react-router-dom";

const Signuppage = () => {
    const history=useNavigate()
  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
            />
          </div>
          <button type="submit">Sign Up</button>
          <h3 onClick={()=>history("/login")}>All ready have account? Login</h3>
        </form>
      </div>
      <div className="signup-image">{/* Add your cool images here */}</div>
    </div>
  );
};

export default Signuppage;
