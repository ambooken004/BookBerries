import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css'; // External CSS file

const Loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const route=useNavigate()

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your login logic here, like calling an API to authenticate the user
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h3>Login Page</h3>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          className="input-field"
          placeholder='Type Username here'
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="input-field"
          placeholder='Type password here'
        />
        <button onClick={()=>route("/home")}type="submit" className="submit-button">Login</button>
        <p onClick={()=>route("/signup")}>New user Register now</p>
      </form>
    </div>
  );
};

export default Loginpage;
