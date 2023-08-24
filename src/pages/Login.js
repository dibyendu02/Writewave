import React, { useEffect, useState } from 'react';
import {auth, db, provider } from "../firebase-config";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, getDocs } from 'firebase/firestore';



function Login({setIsAuth, isAuth}) {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    let newUser = true;

    const postCollectionRef = collection(db, "users");

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);

            {users.map((user) => {
              if (user.email === auth.currentUser.email) {
                newUser = false;
                console.log("old user login")
              }
            })}
            if(newUser === true){
              addDoc(postCollectionRef, {
                userid: auth.currentUser.uid,
                name: auth.currentUser.displayName,
                photoUrl: auth.currentUser.photoURL,
                email: auth.currentUser.email
              });
              console.log("new user login")
            }

            navigate("/")
        })         
    }
    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(postCollectionRef);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getUsers();
      
    }, []);

  return (
    <div className='h-screen flex flex-col items-center pt-40  text-white '>
      <div className="h-[60vh] bg-blue-400 opacity-80 drop-shadow-lg flex flex-col justify-center items-center rounded-lg p-10 px-16 ">
        <h1 className="  text-2xl pb-15 font-bold">Log in easily</h1>
        <p className="pb-10 "> with Google to continue</p>
        <button className='hover:drop-shadow-lg bg-white p-3 rounded-full text-blue-600 font-bold' onClick={signInWithGoogle}>Sign In with Google</button>
      </div>
      
    </div>
  )
}

export default Login;