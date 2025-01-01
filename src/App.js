

import Login from './components/login/Loginpage.jsx';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import SignUpForm from './components/signup/Signuppage.jsx';
import LandingPage from './components/landing/LandingPage.jsx';
import AboutUsPage from './components/aboutus/AboutUsPage.jsx';
import BooksPage from './components/books/BooksPage.jsx';
import ReviewPage from './components/review/ReviewPage.jsx';
import BookzPage from './components/admin/Pages/Bookzpage.jsx';
import AdminPage from './components/admin/Pages/AdminPage.jsx';
import AdminReview from './components/admin/adminReview/AdminReview.jsx';
import UserAccounts from './components/admin/user_accounts/UserAccounts.jsx';
import AddNewBook from './components/admin/add_new_book/AddNewBook.jsx';
import OrdersPage from './components/admin/orders/OrdersPage.jsx';
import Recording from './components/Recording/Recording.js';
import ReportPage from './components/ReportPage/ReportPage.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path="/signup" element={<SignUpForm />}></Route>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/about' element={<AboutUsPage />}></Route>
      <Route path='/books' element={<BooksPage />}></Route>
      <Route path='/review' element={<ReviewPage />}></Route>
      <Route path='/admin/books' element={<BookzPage />}></Route>
      <Route path='/admin' element={<AdminPage />}></Route>
      <Route path="/adminreview/:id" element={<AdminReview />}></Route>
      <Route path='/admin/useraccounts' element={<UserAccounts />}></Route>
      <Route path='/admin/addnewbook' element={<AddNewBook />}></Route>
      <Route path='/admin/orders' element={<OrdersPage />}></Route>
      <Route path='/recording' element={<Recording />}></Route>
      <Route path ='/report/:emotion/:confidence' element={<ReportPage />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
