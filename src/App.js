import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { useEffect, useState } from 'react';
import { signOut } from "firebase/auth";
import { auth, db } from "./firebase-config";
import { ViewPost } from './pages/ViewPost';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import Navbar from './components/Navbar';
import About from './pages/About';
import Profile from './pages/Profile';
import Blogs from './pages/Blogs';
import Footer from './components/Footer';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const userLogout = () => {
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname="/login";
    })
  }
  return (
    <Router>
      {/* <nav>
        <Link to="/">Home</Link>
        {!isAuth ? <Link to="/login">Login</Link> : 
        <>
        <Link to="/createpost">Create Post</Link>
        <button className='logout-btn' onClick={userLogout}>Logout</button>
        </>}
      </nav> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
        <Route path="/:id" element={<ViewPost/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
      </Routes>
      {/* <footer>
        <p>Made with ❤️ by<a href="#">Dibyendu</a></p>
      </footer> */}
      <Footer/>
    </Router>
  );
}

export default App;
