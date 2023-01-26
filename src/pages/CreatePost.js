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

  const createPost = async () => {
    await addDoc(postCollectionRef, {title, postText, 
      author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}
    });

    navigate("/");
  }
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create a Post</h1>
        <div className='inputGp'>
          <label>Title:</label>
          <input placeholder='Title...' onChange={(event) => {
            setTitle(event.target.value);
            }}/>
        </div>
        <div className='inputGp'>
          <label>Post:</label>
          <textarea placeholder='Content...' onChange={(event) => {
            setPostText(event.target.value);
          }}/>
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost;