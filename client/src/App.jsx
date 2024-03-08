import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import CreateListing from './pages/CreateListing';
import PrivateRoute from './components/PrivateRoute';
import Search from './pages/Search';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route element = {<PrivateRoute/>}>
          <Route path='/profile' element={<Profile />} />
        </Route>
       
          
        <Route path='/create-listing' element={<CreateListing/>}/>
     
      </Routes>

    </BrowserRouter>
  );
}
