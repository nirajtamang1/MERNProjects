
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Category from './pages/Category';
import Dashboard from './pages/user/Dashboard';
import Private from './components/PrivateRoute';
import ForgetPassword from './pages/auth/ForgetPassword';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element= {<HomePage />}></Route>
    <Route path="/about" element= {<About />}></Route>
    <Route path="/contact" element= {<Contact />}></Route>
    <Route path="/policy" element= {<Policy />}></Route>
  
    <Route path='/dashboard' element={<Private/>}>
    <Route path='' element = {<Dashboard/>}></Route>
    </Route>

    <Route path= "/category" element={<Category />}></Route>
    <Route path= "/register" element={<Register />}></Route>
    <Route path= "/login" element={<Login />}></Route>

    <Route path= "/forgetPassword" element={<ForgetPassword />}></Route>

    <Route path="*" element= {<PageNotFound />}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App;
