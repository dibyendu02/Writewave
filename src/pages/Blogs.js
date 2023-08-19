import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase-config';
import {Link, useNavigate} from 'react-router-dom';
import { ViewPost } from './ViewPost';

function Blogs({isAuth}) {
  const postCollectionRef = collection(db, "posts");
  const [postLists, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      console.log(data.data);
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getPosts();
  },[postLists]);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    };

  let navigate = useNavigate(); 
  
  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post" key={post.id}>
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div className='deletePost'> 
              {isAuth && post.author.id === auth.currentUser.uid  && (<button onClick={() => {
                deletePost(post.id)
              }}>&#128465;</button>) }
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <button className='readmoreButton' onClick={() => {navigate(post.id)}}>Read More</button>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}

    </div>
  );
}

export default Blogs;