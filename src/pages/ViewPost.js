import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../firebase-config';

export const ViewPost = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({ author: [], postText: "", title: "", });
  const docRef = doc(db, "posts", `${id}`);



  const getPostDetail = async () => {
    const docSnap = await getDoc(docRef);

    setArticle(docSnap.data());

  };
  getPostDetail();




  return (
    <div className="viewPage">

      
      <div className="post" key={article.id}>
        <div className="postHeader">
          <div className="title">
            <h1> {article.title}</h1>
          </div>

        </div>
        <div className="postTextContainer"> {article.postText} </div>

        <h3>@{article.author.name}</h3>
      </div>


    </div>

  )
}
