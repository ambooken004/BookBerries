

import Login from './components/login/Loginpage.jsx';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import SignUpForm from './components/signup/Signuppage.jsx';
import Homepage from './components/home/Homepage.jsx';
import LandingPage from './components/landing/LandingPage.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path="/signup" element={<SignUpForm />}></Route>
      <Route path="/home" element={<Homepage />}></Route>
      <Route path='/' element={<LandingPage />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
