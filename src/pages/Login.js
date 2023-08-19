import React from 'react';
import {auth, provider } from "../firebase-config";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom';



function Login({setIsAuth}) {
    const navigate = useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/")
        }) 
    }
  return (
    <div className='h-screen flex flex-col items-center pt-20 '>
      <div className="h-[60vh] bg-sky-200 drop-shadow-lg flex flex-col justify-center items-center rounded p-10 px-16 ">
        <h1 className="  text-2xl pb-16">Log in easily</h1>
        <p className="pb-10 "> with Google to continue</p>
        <button className='hover:drop-shadow-lg bg-white p-3 rounded-full text-blue-600 font-bold' onClick={signInWithGoogle}>Sign In with Google</button>
      </div>
      
    </div>
  )
}

export default Login;