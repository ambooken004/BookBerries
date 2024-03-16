

import Login from './components/login/Loginpage.jsx';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import SignUpForm from './components/signup/Signuppage.jsx';
import Homepage from './components/home/Homepage.jsx';
import LandingPage from './components/landing/LandingPage.jsx';
import AboutUsPage from './components/aboutus/AboutUsPage.jsx';
import BooksPage from './components/books/BooksPage.jsx';
import ReviewPage from './components/review/ReviewPage.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path="/signup" element={<SignUpForm />}></Route>
      <Route path="/home" element={<Homepage />}></Route>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/about' element={<AboutUsPage />}></Route>
      <Route path='/books' element={<BooksPage />}></Route>
      <Route path='/review' element={<ReviewPage />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
