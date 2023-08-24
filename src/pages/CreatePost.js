import React, { useEffect } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from '../firebase-config';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function CreatePost({isAuth}) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const navigate = useNavigate();

  const postCollectionRef = collection(db, "posts");

  // const createPost = async (e) => {
  //   e.preventDefault();
  //   await addDoc(postCollectionRef, {title, postText, 
  //     author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}
  //   });

  //   navigate("/blogs");
  // }

  const createPost = async (e) => {
    e.preventDefault();
  
    // Check if title and postText are not empty
    if (title.trim() === "" || postText.trim() === "") {
      // Display an error message or handle the validation error as needed
      console.log("Title and post text cannot be empty");
      return;
    }
  
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
  
    navigate("/blogs");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
    
  }, []);
  return (
    <div className="h-screen flex justify-center pt-40 ">
      <div className='h-[80%]  w-full mx-10 md:w-1/2 rounded flex flex-col justify-center items-center '>
        <h1 className="text-2xl text-white font-bold">Create a Post</h1>
        <div className="md:w-2/3 w-full p-2  flex items-center">
          {/* <label>Title:</label> */}
          <input className="text-black w-full p-2 rounded border border-black" placeholder='Title...' onChange={(event) => {
            setTitle(event.target.value);
            }}/>
        </div>
        <div className="md:w-2/3 w-full p-2 " >
          {/* <label>Post:</label> */}
          <textarea className="text-black  w-full h-80 p-2 rounded border border-black " placeholder='Content...' onChange={(event) => {
            setPostText(event.target.value);
          }}/>
        </div>
        <button className="mt-10 p-2 rounded-md font-bold bg-slate-200 text-blue-500 hover:text-white hover:bg-blue-200" onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost;